import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"; 
import MadeLogo from '../../../assets/Made/MadeLogo2.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // si quieren usar el scroll para otras rutas
  const isHomePage = location.pathname === "/";
  const isProyectsPage = location.pathname === "/proyectos";
  const isNosotrosPage = location.pathname === "/nosotros";
  const isServiciosPage = location.pathname.startsWith("/servicios");
  const isContactoPage = location.pathname === "/contacto";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage || isProyectsPage) {
        // En Home, y proyectos si se requiere, cambiar fondo después de 400px
        setScrolled(window.scrollY > 400);
      } else {
        // En otras páginas, siempre con fondo
        setScrolled(true);
      }
    };

    // Llamar inicialmente
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, isProyectsPage]); 

  const isActive = (path) => {
    if (path === "/servicios") {
      return location.pathname.startsWith("/servicios");
    }
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isHomePage ? "on-home" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={MadeLogo} alt="Made Logo" className='logo-image' />
          </Link>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/nosotros" 
              className={`nav-link ${isActive("/nosotros") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Nosotros
            </Link>
          </li>
          
          <li className="nav-item dropdown">
            <Link 
              to="/servicios" 
              className={`nav-link ${isActive("/servicios") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <div className='dropdown-contenido'>
              <Link
                to="/servicios/materiales"
                className={`nav-link dropdown-item ${isActive("/servicios/materiales") ? "active" : ""}`}
                onClick={closeMenu}
              >
                Materiales
              </Link>
              <Link
                to="/servicios/cotizacion"
                className={`nav-link dropdown-item ${isActive("/servicios/cotizacion") ? "active" : ""}`}
                onClick={closeMenu}
              >
                Cotiza tu proyecto
              </Link>
            </div>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/contacto" 
              className={`nav-link ${isActive("/contacto") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
              to="/proyectos" 
              className={`nav-link ${isActive("/proyectos") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Proyectos
            </Link>
          </li>
        </ul>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;