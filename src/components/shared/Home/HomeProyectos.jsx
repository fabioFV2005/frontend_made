import React from 'react'
import edifi1 from '../../../assets/imgs/edif1.jpg'
import edifi2 from '../../../assets/imgs/edif2.jpg'
import edifi3 from '../../../assets/imgs/edif3.jpg'
import './HomeProyectos.css'

// xd
function HomeProyectos() {
  return (
        <section className="section-preview dark">
        <div className="container">
            <div className="section-header">
                <h2>Proyectos Destacados</h2>
                <p>Descubre nuestras creaciones más innovadoras en desarrollo inmobiliario</p>
                <a href="proyectos.html" className="section-link">Ver todos los proyectos</a>
            </div>
            <div className="preview-grid">
                <div className="project-card">
                    <div className="project-image">
                        <img src={edifi1} alt="" />
                        <div className="project-status status-construction">En Construcción</div>
                    </div>
                    <div className="project-info">
                        <h3>Torre Made Centro</h3>
                        <p className="project-location">Distrito Financiero</p>
                        <div className="project-features">
                            <span>24 pisos</span>
                            <span>120 unidades</span>
                            <span>2024</span>
                        </div>
                        <div className="project-price">Desde $450,000</div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src={edifi3} alt="" />
                        <div className="project-status status-completed">Entregado</div>
                    </div>
                    <div className="project-info">
                        <h3>Residencial Made Norte</h3>
                        <p className="project-location">Zona Residencial Norte</p>
                        <div className="project-features">
                            <span>12 edificios</span>
                            <span>80 unidades</span>
                            <span>2023</span>
                        </div>
                        <div className="project-price">Desde $380,000</div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src={edifi2} alt="" />
                        <div className="project-status status-planning">En Planificación</div>
                    </div>
                    <div className="project-info">
                        <h3>Made Living Eco</h3>
                        <p className="project-location">Zona Ecológica</p>
                        <div className="project-features">
                            <span>8 edificios</span>
                            <span>60 unidades</span>
                            <span>2025</span>
                        </div>
                        <div className="project-price">Próximamente</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeProyectos
