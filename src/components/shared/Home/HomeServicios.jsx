import React from 'react'
import './HomeServicios.css'
import { FaSearch, FaDraftingCompass, FaHardHat, FaChartLine } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

function HomeServicios() {
  return (
    <>
    <section className='servicios-section'>
            <div className='servicios-proceso'>
<div className='proceso-head'>
    <h1>Nuestro Proceso</h1>
    <div className="divisor"></div>
    <p>Desarrollamos proyectos inmobiliarios integrales desde la concepción hasta la entrega final</p>
    <a href="/servicios" className=''>
        Conoce nuestro proceso completo.
    </a>
</div>
<div className='proceso-steps'>
    <div className="steps">
        <div className="step-icon">
            <FaSearch className='svg'/>
        </div>
        <h1>Análisis & Investigación</h1>
        <p>Estudiamos el mercado y el terreno para identificar oportunidades y desarrollar estrategias óptimas.</p>
    </div>
    <div className="steps">
        <div className="step-icon">
            <FaDraftingCompass className='svg' />
        </div>
        <h1>Planificación & Diseño</h1>
        <p>Desarrollamos conceptos arquitectónicos innovadores que se adaptan a las necesidades del mercado y maximizan el valor del proyecto.</p>
    </div>
    <div className="steps">
        <div className="step-icon">
            <FaHardHat className='svg' />
        </div>
        <h1>Construcción</h1>
        <p>Ejecutamos proyectos con los más altos estándares de calidad, utilizando tecnologías y materiales de vanguardia.</p>
    </div>
    <div className="steps">
        <div className="step-icon">
            <FaChartLine className='svg' />
        </div>
        <h1>Comercialización</h1>
        <p>Gestionamos la venta de unidades con estrategias personalizadas que conectan con los compradores adecuados.</p>
    </div>
</div>
            </div>
        <div className="servicios-persuade">
            <div className="persuade-block block1">
                <h1>POR QUE ELEGIRNOS</h1>
            </div>
            <div className="persuade-block block2">
                <p>Elige la solidez de un equipo que transforma tus sueños en cimientos firmes y realidades tangibles.</p>
            </div>
            <div className="persuade-block block3">
                <div className="block">
                    <div className='block-content'>
                        <h1>15</h1>
                        <p>Años de experiencia</p>
                    </div>
                    <div className='block-content'> 
                        <h1>45+</h1>
                        <p>Proyectos completados</p>
                    </div>
                </div>
                <div className="block">
                    <div className='block-content'>
                        <h1>2,500</h1>
                        <p> m<sup>2</sup>construidos</p>
                    </div>
                    <div className='block-content'>
                        <h1>35</h1>
                        <p>Años de experiencia acumulada</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default HomeServicios
