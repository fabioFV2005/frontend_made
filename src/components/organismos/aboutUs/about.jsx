import Footer from "../Footer/Footer"
import "./about.css";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({ subtitle, title }) => (
  <div className="section-header fade-up">
    {subtitle && <span className="editorial-subtitle">{subtitle}</span>}
    <h2 className="editorial-h2">{title}</h2>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="service-item fade-up">
    <span className="service-icon">{icon}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const AboutUsEditorial = () => {
  const navigate = useNavigate();
  return (
    <div className="editorial-page">

      {/* principal */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content fade-up">
            <span className="editorial-subtitle">Desarrollo de CAlidad</span>
            <h1>
              Arquitectura <span>MOderna</span> <br />& Cimientos Solidos.
            </h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam, incidunt voluptatum, quibusdam corporis excepturi neque qui dolorem facilis unde beatae earum cumque illum amet rem, ex suscipit cum porro.
            </p>
          </div>

          <div className="hero-image-wrapper slide-right">
            <div className="hero-bg-block"></div>
            <img
              className="hero-img"
              //foto de edificio de made
              src="https://cdn.pixabay.com/photo/2013/09/14/19/53/city-182223_1280.jpg"
              alt="Edificio Moderno"
            />
          </div>
        </div>
      </section>

      {/* imagen sobrepuestas */}
      <section className="overlap-section">
        <div className="container overlap-grid">
          <div className="overlap-image-wrapper slide-left">
            <div className="back-square"></div>
            <img
              className="overlap-img"
              /* Un proyecto de made o planos */
              src="https://tse3.mm.bing.net/th/id/OIP.HBcGkQM4asyIUjeDT1yxuAHaHP?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Diseño de interiores y planos"
            />
          </div>

          {/* Tarjeta flotante */}
          <div className="floating-card fade-up">
            <h3>
              Diseños <span>Modernos</span>
            </h3>
            <p>
              Cada proyecto es una pieza unica pensada con y para nuestros clientes
            </p>
            <button className="btn-editorial"
              onClick={() => navigate("/proyectos")}>
              Ver Proyectos
            </button>
          </div>

        </div>
      </section>

      {/* Historia, mision y vision */}
      <section className="mv-section">
        <div className="container">
          <SectionTitle subtitle="Nuestra Esencia" title="Legado y Futuro." />
          
          <div className="mv-grid">
            {/* aqui la hostoria */}
            <div className="mv-block history-block fade-up">
              <h3>Nuestra Historia</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla sit, ipsa inventore assumenda ducimus architecto fugit nobis pariatur nemo tenetur possimus molestiae error suscipit qui quia perspiciatis alias a eum vitae atque ab maiores! Consequatur, quae ea? Inventore nesciunt quis voluptatibus maxime quam doloribus, natus hic. Atque sint, non harum nulla sequi repellat tempora alias dignissimos, excepturi facilis officiis numquam laborum quia dolore dicta quo deserunt aliquam consectetur deleniti autem eligendi, praesentium illum rerum. Dolor quaerat accusantium voluptatibus nihil?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima incidunt pariatur laborum nulla dicta inventore eligendi illo veritatis, blanditiis ullam?
              </p>
            </div>

            {/* mision y vision */}
            <div className="mv-col-right">
              <div className="mv-block mission-card fade-up">
                <h4>Mision</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore tempora similique atque ipsum, vel praesentium velit eius totam accusantium, cumque tenetur magnam cupiditate dolore impedit. Accusantium provident eos quisquam.
                </p>
              </div>

              <div className="mv-block vision-card fade-up">
                <h4>Vision</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quibusdam nemo adipisci laborum? Commodi, dolores similique accusantium libero ipsa sapiente aliquid officiis eaque atque, perspiciatis corporis cum ratione fuga voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* servicios que ofrecemos (resumido)*/}
      <section className="services-section">
        <div className="container">
          <SectionTitle subtitle="¿Por que elegirnos?" title="Los mas destacados en:" />

          <div className="services-grid">
            <ServiceCard 
              title="Seguridad" 
              desc="Lorem ipsum dolor sit amet" 
            />
            <ServiceCard 
              title="Diseño" 
              desc="Lorem ipsum dolor sit amet" 
            />
            <ServiceCard 
              title="Confiabilidad" 
              desc="Lorem ipsum dolor sit amet" 
            />
          </div>
        </div>
      </section>

      {/* frase celebre, quitar si no gusta */}
      <section className="quote-section">
        <div className="container">
          <p className="quote-text fade-up">
            “Cada proyecto es una oportunidad de crear algo excepcional ”
          </p>
          <span className="quote-author">Frank Gehry</span>
        </div>
      </section>

      {/* redireccionar a cotizaciones */}
      <section className="cta-banner">
        <div className="container cta-content">
          <h2>
            ¿Tienes una idea?
            <span> La haremos realidad</span>
          </h2>
          <button className="cta-btn"
            onClick={() => navigate("/servicios/cotizacion")}
          >
            Cotiza con nosotros
          </button>
        </div>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default AboutUsEditorial;