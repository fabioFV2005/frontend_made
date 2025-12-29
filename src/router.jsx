import{BrowserRouter as Router,Routes,Route}from'react-router-dom';
import './App.css'
import Navbar from './components/organismos/NavBar/Navbar'
import Home from './pages/Home'
export default function router() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path="/Servicios" element={<Servicios/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Proyectos" element={<Proyectos/>}/> */}
            </Routes>
        </Router>
    </>
    )
}
