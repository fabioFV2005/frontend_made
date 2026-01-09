import MadeLogo from '../../../assets/Made/MadeLogo2.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        {/* Sección principal de contenidos */}
        <div className="footer-content">
          <div className="footer-section brand-info">
            <div className="logo">
              <img src={MadeLogo} alt="Made Logo" className="logo-image" />
            </div>
            <p>Transformando visiones en espacios excepcionales desde 2010.</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/proyectos">Proyectos</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p>contacto@made.com</p>
            <p>+1 234 567 890</p>
            <p>Av. Desarrollo 123, Ciudad</p>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Nueva sección de créditos limpia */}
        <div className="footer-bottom">
          <div className="derechos">
            <span>© 2025 <strong>Made</strong>. Todos los derechos reservados.</span>
            <div className="separador"></div>
            <span className="yachai-credit">
              Desarrollado por <strong> <a href="#" className='Yachai-link'>YachaiSoft</a></strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;