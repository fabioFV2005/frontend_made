import React from 'react';
import MadeLogo from '../../../assets/Made/MadeLogo2.png';
import './Navbar.css'
import { useEffect, useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  
  const[scrolled, setScrolled] = useState(false)

  useEffect(() =>{
      const handleScroll = () => {
        setScrolled(window.scrollY > 400)
      }
      window.addEventListener("scroll", handleScroll)

      return() => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" onClick={closeMenu}>
          <img src={MadeLogo} alt="Made Logo" className='logo-image' />
          </a>
        </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="/Nosotros" className='nav-link' onClick={closeMenu}> 
              Nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
            <a href="/servicios" className="nav-link" onClick={closeMenu}>
              Servicios
            </a>
            <div className='dropdown-contenido'>
                <a href="/servicios/materiales" className="nav-link dropdown-item" onClick={closeMenu}>Materiales</a>
                <a href="/servicios/cotizacion" className="nav-link dropdown-item" onClick={closeMenu}>cotiza tu proyecto</a>
              </div>
            </li>
            <li className="nav-item">
            <a href="/Contacto" className="nav-link" onClick={closeMenu}>
              Contacto
            </a>
            </li>
            <li className="nav-item">
              <a href="/proyectos" className='nav-link' onClick={closeMenu}>Proyectos
              </a>
            </li>
          </ul>

          <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
