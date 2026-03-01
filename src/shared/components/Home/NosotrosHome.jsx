import React, { useRef } from "react";
// import img1 from '../../../assets/imgs/edfi1.jpg';
import video1 from "../../../assets/videos/video1.mp4";
import { ArrowRight } from "lucide-react";

function NosotrosHome() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 2000);
  };

  return (
    <section className="bg-(--bg-main) py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col justify-center">
          <span className="text-(--accent-primary) font-bold tracking-widest uppercase text-sm mb-3">
            Desde 2010
          </span>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-main) mb-6"
            style={{ fontFamily: "var(--font-regular)" }}
          >
            MADE Desarrolladora
          </h1>

          <div className="w-20 h-1.5 bg-(--accent-primary) rounded-full mb-8"></div>

          <p className="text-(--text-muted) text-lg mb-6 leading-relaxed">
            Somos especialistas en la creación de proyectos inmobiliarios
            integrales. Desde 2010, hemos transformado terrenos en comunidades
            vibrantes y espacios en hogares excepcionales.
          </p>

          <p className="text-(--text-muted) text-lg mb-8 leading-relaxed">
            Nuestro enfoque combina visión de mercado, diseño innovador y
            ejecución impecable para crear valor duradero para nuestros clientes
            y las comunidades donde operamos.
          </p>

          <a
            href="/nosotros"
            className="group w-fit inline-flex items-center gap-2 px-5 py-2 border-2 border-(--cl-orange) rounded-full text-(--text-main) font-semibold transition-all duration-300 hover:t>ext-[var(--cl-orange)] hover:pr-7"
          >
            Conoce nuestra historia
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        <div className="relative w-full">
          <div className="hidden sm:block absolute -inset-1 border-(--cl-navy) border-3 rounded-(--radius-md) opacity-100 transform -translate-x-6 -translate-y-6"></div>
          <div className="hidden sm:block absolute -inset-4 bg-(--bg-card) rounded-(--radius-md) opacity-5 transform translate-x-6 translate-y-6"></div>
          <video
            ref={videoRef}
            src={video1}
            autoPlay
            muted
            onEnded={handleVideoEnded}
            playsInline
            className="relative rounded-(--radius-md) shadow-lg object-cover w-full h-100 lg:h-137.5 transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}

export default NosotrosHome;
