import React from "react";
import {
  Search,
  PencilRuler,
  HardHat,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

function ProcesoHome() {
  return (
    <section className="bg-(--bg-main) py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-(--bg-card) rounded-(--radius-md) p-8 shadow-(--shadow-sm) flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-(--cl-white) rounded-full flex items-center justify-center mb-6 shadow-md">
              <Search
                className="w-7 h-7 text-(--accent-primary)"
                strokeWidth={2.5}
              />
            </div>
            <h2
              className="text-(--text-light) text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Análisis & Investigación
            </h2>
            <p className="text-(--cl-gray-light) text-sm leading-relaxed">
              Estudiamos el mercado y el terreno para identificar oportunidades
              y desarrollar estrategias óptimas.
            </p>
          </div>

          {/* Paso 2: Planificación */}
          <div className="bg-(--bg-card) rounded-(--radius-md) p-8 shadow-(--shadow-sm) flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-(--cl-white) rounded-full flex items-center justify-center mb-6 shadow-md">
              <PencilRuler
                className="w-7 h-7 text-(--accent-primary)"
                strokeWidth={2.5}
              />
            </div>
            <h2
              className="text-(--text-light) text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Planificación & Diseño
            </h2>
            <p className="text-(--cl-gray-light) text-sm leading-relaxed">
              Desarrollamos conceptos arquitectónicos innovadores que se adaptan
              a las necesidades del mercado y maximizan el valor del proyecto.
            </p>
          </div>

          {/* Paso 3: Construcción */}
          <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-8 shadow-[var(--shadow-sm)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[var(--cl-white)] rounded-full flex items-center justify-center mb-6 shadow-md">
              <HardHat
                className="w-7 h-7 text-[var(--accent-primary)]"
                strokeWidth={2.5}
              />
            </div>
            <h2
              className="text-[var(--text-light)] text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Construcción
            </h2>
            <p className="text-[var(--cl-gray-light)] text-sm leading-relaxed">
              Ejecutamos proyectos con los más altos estándares de calidad,
              utilizando tecnologías y materiales de vanguardia.
            </p>
          </div>

          {/* Paso 4: Comercialización */}
          <div className="bg-[var(--bg-card)] rounded-[var(--radius-md)] p-8 shadow-[var(--shadow-sm)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[var(--cl-white)] rounded-full flex items-center justify-center mb-6 shadow-md">
              <TrendingUp
                className="w-7 h-7 text-[var(--accent-primary)]"
                strokeWidth={2.5}
              />
            </div>
            <h2
              className="text-[var(--text-light)] text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Comercialización
            </h2>
            <p className="text-[var(--cl-gray-light)] text-sm leading-relaxed">
              Gestionamos la venta de unidades con estrategias personalizadas
              que conectan con los compradores adecuados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcesoHome;
