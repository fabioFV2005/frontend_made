import { Link, NavLink } from 'react-router-dom';
import  ROUTES  from '../../shared/constants/routes';
import './Navbar.css';

const Navbar = () => {
  const navLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to={ROUTES.HOME}>
            <span>PROYECTO</span>VITE
          </Link>
        </div>

        <ul className="navbar-menu">
          <li>
            <NavLink to={ROUTES.HOME} className={navLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT_US} className={navLinkClass}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PROJECTS} className={navLinkClass}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT} className={navLinkClass}>Contact</NavLink>
          </li>
        </ul>

        <div className="navbar-actions">
          <NavLink to={ROUTES.LOGIN} className="login-button">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;