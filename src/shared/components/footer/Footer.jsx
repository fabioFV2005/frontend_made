import React from "react";
import MadeLogo from "../../../assets/Made/MadeLogo2.png";
import patronSVG from "../../../assets/svg/patron-made.svg";

function Footer() {
  return (
    <footer className="relative w-full bg-(--bg-card) pt-16 pb-8 text-(--text-muted) text-sm z-10 overflow-hidden font-(--font-main) border-t border-[rgba(145,164,183,0.2)]">
      <img
        src={patronSVG}
        alt="Fondo de patrón"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none"
        style={{ filter: "invert(1) brightness(2)" }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img
                src={MadeLogo}
                alt="Made Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="leading-relaxed">
              Transformando visiones en espacios excepcionales desde 2010.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4
              className="text-(--text-light) text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Enlaces
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/proyectos"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="/servicios"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/nosotros"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/contacto"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4
              className="text-(--text-light) text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Contacto
            </h4>
            <div className="space-y-3">
              <p>contacto@made.com</p>
              <p>+1 234 567 890</p>
              <p>Av. Desarrollo 123, Ciudad</p>
            </div>
          </div>

          {/* Columna 4: Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h4
              className="text-(--text-light) text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-regular)" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-(--accent-primary) transition-colors duration-300"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección inferior de créditos */}
        <div className="pt-8 border-t border-[rgba(145,164,183,0.3)] flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-center">
          <span>
            © 2025{" "}
            <strong className="text-(--text-light) font-medium">Made</strong>.
            Todos los derechos reservados.
          </span>

          {/* Separador vertical (solo en desktop) */}
          <div className="hidden md:block w-px h-4 bg-[rgba(145,164,183,0.4)]"></div>

          <span className="flex items-center gap-1 text-[1.05em]">
            Desarrollado por
            <a
              href="#"
              className="text-(--text-light) font-bold hover:text-(--accent-primary) transition-colors duration-300 ml-1"
            >
              YachaiSoft
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
