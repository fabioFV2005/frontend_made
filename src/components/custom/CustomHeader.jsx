import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Made/MadeLogo.png'
export const CustomHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    return (

        <header className='flex items-center justify-between p-4 bg-transparent text-white'>
            <img src={Logo} alt="Logo" className='w-60' />
            <ul className='flex flex-col md:flex-row gap-4 text-lg'>
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="">Proyectos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
                <li>
                    <a href="" className='bg-orange-500 text-white px-4 py-2 rounded'>Iniciar Sesion</a>
                </li>
            </ul>
        </header>
    )
}
