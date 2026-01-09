import{BrowserRouter as Router,Routes,Route}from'react-router-dom';
import './App.css'
import { useState } from 'react';
import Navbar from './components/organismos/NavBar/Navbar'
import Home from './pages/Home'
import Cotizacion from "./pages/Cotizacion";
import LoginPage from './auth/LoginPage';
export default function router() {
  return (
        <Router>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/servicios/cotizacion" element={
                    <div className='page-content'> 
                        <Cotizacion />
                    </div>
                } />

                <Route path="/login" element={<LoginPage/>} />
                


                {/* <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Servicios" element={<Servicios/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Proyectos" element={<Proyectos/>}/> */}
            </Routes>
        </Router>
    )
}
