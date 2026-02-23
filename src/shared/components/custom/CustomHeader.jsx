import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import Logo from '../../../assets/Made/MadeLogo2.png';
import simple_logo from '../../../assets/Made/LogoMadeSimple.png';
// import ROUTES from '../../constants/routes';

export const CustomHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);
    const headerBg = isScrolled
        ? 'bg-navy shadow-lg rounded-full'
        : 'bg-transparent';

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
            <header
                className={`flex items-center justify-between w-full max-w-7xl px-6 py-2 transition-all duration-500 ${headerBg}`}
            >
                <Link to="/">
                    <img
                        src={isScrolled ? simple_logo : Logo}
                        alt="Made Logo"
                        className={`object-contain ${isScrolled ? "h-10 md:h-14" : "h-12 md:h-16"
                            }`}
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-6">

                    <Link
                        to="/#"
                        className={`text-lg font-semibold text-white`}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/#"
                        className={`text-lg font-semibold text-white`}
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        to="/#"
                        className={`text-lg font-semibold text-white`}
                    >
                        Proyectos
                    </Link>
                    <Link
                        to="/#"
                        className={`text-lg font-semibold text-white`}
                    >
                        Contacto
                    </Link>
                </nav>

                <Link
                    to="/login"
                    className="hidden lg:block bg-orange text-white text-sm font-semibold px-5 py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
                >
                    Iniciar Sesión
                </Link>

                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </header>

            {menuOpen && (
                <div className="lg:hidden fixed top-20 left-4 right-4 bg-navy rounded-2xl shadow-2xl p-6 z-40">
                    <nav className="flex flex-col gap-4">

                        <Link
                            to="/#"
                            className={`text-lg font-semibold text-white`}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/#"
                            className={`text-lg font-semibold text-white`}
                        >
                            Sobre Nosotros
                        </Link>
                        <Link
                            to="/#"
                            className={`text-lg font-semibold text-white`}
                        >
                            Proyectos
                        </Link>
                        <Link
                            to="/#"
                            className={`text-lg font-semibold text-white`}
                        >
                            Contacto
                        </Link>

                        <Link
                            to="/login"
                            className="mt-2 bg-orange text-white text-center font-semibold py-3 rounded-md hover:opacity-90 transition-opacity duration-300"
                        >
                            Iniciar Sesión
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default CustomHeader;