import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  PencilRuler,
  HardHat,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

function ProcesoHome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Estados para el auto-hover
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const timerRef = useRef(null);

  const cards = [
    {
      id: 0,
      title: "Análisis & Investigación",
      desc: "Estudiamos el mercado y el terreno para identificar oportunidades y desarrollar estrategias óptimas.",
      Icon: Search,
      delay: "delay-0",
    },
    {
      id: 1,
      title: "Planificación & Diseño",
      desc: "Desarrollamos conceptos arquitectónicos innovadores que se adaptan a las necesidades del mercado y maximizan el valor del proyecto.",
      Icon: PencilRuler,
      delay: "delay-[200ms]",
    },
    {
      id: 2,
      title: "Construcción",
      desc: "Ejecutamos proyectos con los más altos estándares de calidad, utilizando tecnologías y materiales de vanguardia.",
      Icon: HardHat,
      delay: "delay-[400ms]",
    },
    {
      id: 3,
      title: "Comercialización",
      desc: "Gestionamos la venta de unidades con estrategias personalizadas que conectan con los compradores adecuados.",
      Icon: TrendingUp,
      delay: "delay-[600ms]",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInteracting, cards.length]);

  const handleMouseEnter = (index) => {
    setIsInteracting(true);
    setActiveIndex(index);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-(--bg-main) py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1
            className="text-3xl md:text-4xl font-bold text-(--text-main) mb-4"
            style={{ fontFamily: "var(--font-regular)" }}
          >
            Nuestro Proceso
          </h1>
          <div className="w-20 h-1.5 bg-(--accent-primary) rounded-full mb-6"></div>
          <p className="text-(--text-muted) max-w-2xl text-lg mb-8 leading-relaxed">
            Desarrollamos proyectos inmobiliarios integrales desde la concepción
            hasta la entrega final
          </p>
          <a
            href="/servicios"
            className="group w-fit inline-flex items-center gap-2 px-5 py-2 border-2 border-(--cl-orange) rounded-full text-(--text-main) font-semibold transition-all duration-300 hover:text-(--cl-orange) hover:pr-7"
          >
            Conoce nuestro proceso completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Pasos del proceso iterados dinámicamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            // Verificamos si esta tarjeta es la que debe estar animada
            const isActive = activeIndex === index;

            return (
              <div
                key={card.id}
                className={`transition-all duration-1000 ease-out ${card.delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`bg-(--bg-card) h-full rounded-(--radius-md) p-8 flex flex-col items-center text-center transition-all duration-500 ease-in-out cursor-pointer
                    ${isActive ? "-translate-y-3 shadow-xl ring-2 ring-(--accent-primary)/20" : "shadow-(--shadow-sm)"}`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-colors duration-500
                    ${isActive ? "bg-(--accent-primary)" : "bg-(--cl-white)"}`}
                  >
                    <card.Icon
                      className={`w-7 h-7 transition-colors duration-500 ${isActive ? "text-(--cl-white)" : "text-(--accent-primary)"}`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <h2
                    className="text-(--text-light) text-xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-regular)" }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-(--cl-gray-light) text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcesoHome;
