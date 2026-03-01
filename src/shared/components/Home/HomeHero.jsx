import React, { useState, useCallback, useEffect, useRef } from 'react';

import { slides } from "@/data/slides";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from 'react-router-dom';

function SlideMedia({ slide }) {
  if (slide.type === 'video') {
    return (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={slide.src}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src={slide.src}
      alt={slide.title}
    />
  );
}

function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState(null);
  const intervalRef = useRef(null);

  const handleApiChange = useCallback((newApi) => {
    if (!newApi) return;
    setApi(newApi);
    newApi.on('select', () => {
      setCurrent(newApi.selectedScrollSnap());
    });
  }, []);

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    startAutoplay();

    const onPointerDown = () => clearInterval(intervalRef.current);
    const onPointerUp = () => startAutoplay();

    api.on('pointerDown', onPointerDown);
    api.on('pointerUp', onPointerUp);

    return () => {
      clearInterval(intervalRef.current);
      api.off('pointerDown', onPointerDown);
      api.off('pointerUp', onPointerUp);
    };
  }, [api]);

  const scrollTo = useCallback((index) => {
    if (api) api.scrollTo(index);
  }, [api]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-stone-950">

      <Carousel
        setApi={handleApiChange}
        opts={{ loop: true }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full h-screen pl-0 overflow-hidden">

              <SlideMedia slide={slide} />

              {/* opcion 1 */}
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 to-transparent pointer-events-none" />
              {/* opcion 2 */}
              {/* <div className="absolute inset-0  pointer-events-none" /> */}
              {/* <div className="absolute inset-0  pointer-events-none" /> */}

              {/* Contenido de texto */}
              <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 sm:px-10 sm:pb-24 md:px-16 md:pb-28 lg:px-24 lg:pb-32">
                <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-orange-light border border-orange-light/50 rounded-full w-fit">
                  {slide.tag}
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-4 max-w-4xl">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg text-stone-300 max-w-xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/proyectos" className="px-7 py-3 bg-orange-light hover:bg-orange-light/80 active:scale-95 text-white font-bold text-sm tracking-wide rounded-lg transition-all duration-200 w-fit">
                    Ver Proyectos
                  </Link>
                  <Link to="/contacto" className="px-7 py-3 border border-white/30 hover:border-white/70 hover:bg-white/10 active:scale-95 text-white font-medium text-sm rounded-lg backdrop-blur-sm transition-all duration-200 w-fit">
                    Contáctanos
                  </Link>
                </div>
              </div>

            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Botones en caso queramos aplicarlos */}
        {/* <CarouselPrevious className="hidden md:flex left-6 lg:left-10 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" />
        <CarouselNext className="hidden md:flex right-6 lg:right-10 z-20 w-11 h-11 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm" /> */}
      </Carousel>

      <div className="absolute bottom-6 right-6 sm:right-10 md:right-16 lg:right-24 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current
              ? 'w-8 h-2 bg-orange-light'
              : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 hidden lg:flex flex-col items-center gap-2 select-none">
        <span className="text-xs font-mono text-white/50">
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="relative w-px h-16 bg-white/20">
          <div
            className="absolute top-0 left-0 w-px bg-orange-light transition-all duration-500"
            style={{ height: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-xs font-mono text-white/50">
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

    </section>
  );
}

export default HomeHero;