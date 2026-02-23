import React from 'react'
import team from '../../../assets/imgs/EquipoEjemplo.png'

function TeamHome() {
  return (
    <div>
      <div className='w-full'>
        <img src={team} alt="" className='w-full' />
      </div>
      <div className='p-4 text-(--text-muted) text-xm'>
        <span>Profesionales comprometidos con la innovación y el desarrollo sostenible de Cochabamba. Transformamos visión en realidad, construyendo el futuro de nuestra ciudad con excelencia técnica y transparencia.</span>
      </div>

      <div>
        <button className=' bg-(--cl-orange) text-(--cl-white) px-4 py-2 m-2 rounded-full hover:bg-(--cl-gray-medium)'>ACERCA DE NUESTRO EQUIPO</button>
      </div>

    </div>
  )
}

export default TeamHome
