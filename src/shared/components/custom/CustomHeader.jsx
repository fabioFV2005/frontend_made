import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/Made/MadeLogo2.png";
import simple_logo from "../../../assets/Made/LogoMadeSimple.png";

export const CustomHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-1000 ease-in-out ${isScrolled ? "pt-2 px-2" : "pt-0 px-0"}`}
    >
      <header
        className={`flex items-center justify-between transition-all duration-1000 ease-in-out
          ${
            isScrolled
              ? "w-full max-w-5xl bg-[var(--cl-navy)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-6 py-2 backdrop-blur-md bg-opacity-95"
              : "w-full max-w-7xl bg-transparent px-6 py-5"
          }`}
      >
        {/* LOGO ANIMADO - Ahora se encoge suavemente al hacer scroll */}
        <Link
          to="/"
          className={`relative flex items-center justify-start transition-all duration-1000 ease-in-out
            ${isScrolled ? "w-24 md:w-28 h-8 md:h-10" : "w-32 md:w-44 h-12 md:h-16"}`}
        >
          {/* Logo Principal */}
          <img
            src={Logo}
            alt="Made Logo"
            className={`absolute left-0 object-contain w-full h-full transition-opacity duration-1000 ease-in-out
              ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          />
          {/* Logo Simple */}
          <img
            src={simple_logo}
            alt="Made Logo Simple"
            className={`absolute left-0 object-contain w-full h-full transition-opacity duration-1000 ease-in-out
              ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className="text-[15px] font-semibold text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/nosotros"
            className="text-[15px] font-semibold text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors duration-300"
          >
            Sobre Nosotros
          </Link>
          <Link
            to="/proyectos"
            className="text-[15px] font-semibold text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors duration-300"
          >
            Proyectos
          </Link>
          <Link
            to="/contacto"
            className="text-[15px] font-semibold text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors duration-300"
          >
            Contacto
          </Link>
        </nav>

        {/* BOTÓN INICIAR SESIÓN DESKTOP */}
        <Link
          to="/login"
          className={`hidden lg:block text-sm font-bold transition-all duration-500 transform hover:-translate-y-0.5
            ${
              isScrolled
                ? "px-5 py-2 bg-[var(--accent-primary)] text-[var(--cl-white)] hover:shadow-lg hover:bg-[#d94805] rounded-full"
                : "px-6 py-2.5 bg-[var(--cl-white)] text-[var(--cl-navy)] hover:bg-[var(--accent-primary)] hover:text-[var(--cl-white)] rounded-full"
            }`}
        >
          Iniciar Sesión
        </Link>

        {/* BOTÓN MENÚ HAMBURGUESA (MÓVIL) */}
        <button
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span
            className={`w-6 h-0.5 bg-[var(--cl-white)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[var(--cl-white)] transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[var(--cl-white)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </header>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div
        className={`lg:hidden fixed top-20 left-4 right-4 bg-[var(--cl-navy)] rounded-2xl shadow-2xl p-6 z-40 transition-all duration-500 ease-in-out origin-top border border-[rgba(255,255,255,0.1)]
          ${menuOpen ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto" : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-5 text-center">
          <Link
            to="/"
            className="text-lg font-medium text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors"
          >
            Inicio
          </Link>
          <div className="w-full h-px bg-[rgba(255,255,255,0.1)]"></div>

          <Link
            to="/nosotros"
            className="text-lg font-medium text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors"
          >
            Sobre Nosotros
          </Link>
          <div className="w-full h-px bg-[rgba(255,255,255,0.1)]"></div>

          <Link
            to="/proyectos"
            className="text-lg font-medium text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors"
          >
            Proyectos
          </Link>
          <div className="w-full h-px bg-[rgba(255,255,255,0.1)]"></div>

          <Link
            to="/contacto"
            className="text-lg font-medium text-[var(--cl-white)] hover:text-[var(--accent-primary)] transition-colors"
          >
            Contacto
          </Link>

          <Link
            to="/login"
            className="mt-4 bg-[var(--accent-primary)] text-[var(--cl-white)] text-center font-bold py-3.5 rounded-xl hover:bg-[#d94805] transition-colors duration-300 shadow-md"
          >
            Iniciar Sesión
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default CustomHeader;
