import React from 'react'
import './HomeSobrenosotros.css'
import img1 from '../../../assets/imgs/edif1.jpg'

function HomeSobrenosotros() {
  return (
    <section className='nosotros-section'>
      <div className='nosotros-conteainer'>
        <div className='nosotros-history'>
          <span className='nosotros-inicio'>Desde 2010</span>
          <h1 className='nosotros-tittle'>MADE Desarrolladora</h1>
          <div className='dividor'></div>
          <p className='nosotros-description'>                
            Somos especialistas en la creación de proyectos inmobiliarios integrales. 
            Desde 2010, hemos transformado terrenos en comunidades vibrantes y espacios 
            en hogares excepcionales.
          </p>
          <p className="description-description">
            Nuestro enfoque combina visión de mercado, diseño innovador y ejecución 
            impecable para crear valor duradero para nuestros clientes y las comunidades 
            donde operamos.
          </p>
            <a href="/nosotros">
            Conoce nuestra historia
            </a>
        </div>

        <div className='nosotros-stats'>
          <img src={img1} alt="Edificio desarrollado por MADE Desarrolladora"/>
        </div>
      </div>
    </section>
  )
}

export default HomeSobrenosotros