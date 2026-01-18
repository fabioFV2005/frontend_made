import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/organismos/NavBar/Navbar'
import Home from './pages/Home'
import Cotizacion from "./pages/Cotizacion";
import LoginPage from './auth/LoginPage';
import AboutUs from './components/organismos/aboutUs/about';
import Services from './components/organismos/ServicesSelect/Services'
import Proyectos from './components/organismos/Proyectos/proyectos'
export default function router() {
    return (
        <Router>
            <Toaster position="top-right" richColors />
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/servicios/cotizacion" element={
                    <div className='page-content'>
                        <Cotizacion />
                    </div>
                } />

    <Route path="/login" element={<LoginPage />} />



                <Route path="/nosotros" element={
                    <div className='page-content'>
                        <AboutUs />
                    </div>
                } />

                <Route path="/servicios" element={
                    <div className='page-content'>
                        <Services/>
                    </div>
                }
                />
                <Route path="/proyectos" element={
                    <div className='page-content'>
                        <Proyectos/>
                    </div>
                }
                />
    {/* <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Servicios" element={<Servicios/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Proyectos" element={<Proyectos/>}/> */}
            </Routes >
        </Router >
    )
}
