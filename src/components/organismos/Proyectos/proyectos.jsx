import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../config/axios';
import Footer from '../Footer/Footer';
import './proyectos.css'; // Asegúrate que el nombre del archivo CSS coincida
import { toast } from 'sonner'; 

const Proyectos = () => {
  // Inicializamos siempre como array vacío
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Función auxiliar para obtener la imagen de forma segura
  const getImage = (files) => {
    try {
        // A veces el JSON viene como string desde la BD, intentamos parsearlo si es necesario
        let parsedFiles = files;
        if (typeof files === 'string') {
            parsedFiles = JSON.parse(files);
        }
        
        if (Array.isArray(parsedFiles) && parsedFiles.length > 0) {
            return parsedFiles[0];
        }
    } catch (e) {
        console.error("Error parseando imagen:", e);
    }
    // Imagen por defecto si falla
    return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"; 
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const respuesta = await api.get('/projects');
        
        console.log("DATOS RECIBIDOS DEL BACKEND:", respuesta.data); 
        if (Array.isArray(respuesta.data)) {
            setProjects(respuesta.data);
        } else if (respuesta.data && Array.isArray(respuesta.data.data)) {
            setProjects(respuesta.data.data);
        } else {
            console.error("La respuesta no es un array válido:", respuesta.data);
            setProjects([]); 
            toast.error("Error: Formato de datos incorrecto");
        }

      } catch (error) {
        console.error("Error conectando al servidor:", error);
        toast.error("No se pudieron cargar los proyectos");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="editorial-page">
      
      <section className="portfolio-section">
        <div className="container">
          
          <div className="portfolio-header fade-up">
            <span className="editorial-subtitle">Portafolio</span>
            <h2 className="editorial-h2">
              Nuestra <span>Huella</span>
            </h2>
            <p className="hero-text" style={{margin: '0 auto'}}>
              Cada estructura cuenta una historia de precisión, diseño y durabilidad.
            </p>
          </div>

          {loading ? (
             <p style={{textAlign:'center', color:'white', fontSize: '1.2rem'}}>Cargando obras...</p>
          ) : (
            <div className="projects-grid">
              {Array.isArray(projects) && projects.length > 0 ? (
                  projects.map((proj) => (
                    <article key={proj.id} className="project-card-editorial fade-up">
                      
                      <div className="card-img-box">
                        <span className="status-badge">
                          {proj.status || 'Proyecto'}
                        </span>
                        <img src={getImage(proj.files)} alt={proj.name} />
                      </div>

                      <div className="card-content">
                        <div>
                          <h3>{proj.name}</h3>
                          <span className="location-text">
                             {proj.location}
                          </span>
                          <p className="card-desc">
                            {proj.description}
                          </p>
                        </div>

                        <div className="card-footer">
                          <div className="date-info">
                            Inicio: {proj.startDate ? new Date(proj.startDate).getFullYear() : 'N/A'}
                          </div>
                          
                          <button 
                            className="btn-editorial"
                            style={{marginTop: 0, padding: '0.5rem 1.5rem', fontSize: '0.9rem'}}
                            onClick={() => navigate(`/proyectos/${proj.id}`)}
                          >
                            Ver Detalles &rarr;
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
              ) : (
                 <div className="empty-state">
                    <p>No hay proyectos disponibles en este momento.</p>
                 </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Proyectos;