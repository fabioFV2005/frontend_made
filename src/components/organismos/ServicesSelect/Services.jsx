import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer"; 
import "./Services.css"; 

const ServicesSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="editorial-page">
      <section className="gateway-section">
        <div className="container">
          
          <div className="section-header fade-up" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="editorial-subtitle">Nuestros Servicios</span>
            <h2 className="editorial-h2">
              ¿Cómo podemos ayudarte hoy?
            </h2>
            <p className="hero-text" style={{ margin: '0 auto' }}>
              Selecciona el servicio que deseas consultar.
            </p>
          </div>

          <div className="gateway-grid">
            {/*Cotizacion*/}
            <div className="service-choice-card fade-up">
              <div className="card-image-header">
                <img 
                  src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg" 
                  alt="Mesa de trabajo cotización" 
                />
              </div>
              <div className="card-body">
                <div>
                  <h3>Cotización de Proyectos</h3>
                  <p>
                    Rellena nuestro formulario mostrando y contando un poco de tu idea
                    para que nuestro equipo pueda evealuarla y darte asesoria sobre ella
                  </p>
                </div>
                <button 
                  className="btn-editorial"
                  onClick={() => navigate("/servicios/cotizacion")}>
                  Iniciar Cotización 
                </button>
              </div>
            </div>

            {/*materiales*/}
            <div className="service-choice-card fade-up" >
              <div className="card-image-header">
                <img 
                  src="https://tse3.mm.bing.net/th/id/OIP.CsRto3NeH4J9ZF9-Llv8zgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Muestras de materiales" 
                />
              </div>
              <div className="card-body">
                <div>
                  <h3>Catálogo de Materiales</h3>
                  {/*Los materiales tambien los quieren vender? o solo quieren que sean visibles, creo que deberiamos redirigir desde aqui 
                  a la pagina de la empresa de sus materiales*/}
                  <p>
                    Para realizar nuestras contruscciones utilizamos los mejores materiales, sientase libre de ver los materiales, con los quae
                    garantizamos la calidad del proyecto
                  </p>
                </div>
                <button 
                  className="btn-editorial"
                  onClick={() => navigate("/nosotros")}>
                  Explorar catalogo / Explorar materiales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesSelect;