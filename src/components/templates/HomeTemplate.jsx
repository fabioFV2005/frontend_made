import React from 'react'
import Header from "../shared/Home/Header";
import Footer from '../organismos/Footer/Footer'
import HomeSobrenosotros from '../shared/Home/HomeSobrenosotros';
import HomeServicios from '../shared/Home/HomeServicios';
import HomeProyectos from '../shared/Home/HomeProyectos';

function HomeTemplate() {
  return (
    <>
    <Header/>
    <HomeServicios/>
    <HomeSobrenosotros/>
    <HomeProyectos/>
    <Footer/>
    </>
  )
}

export default HomeTemplate
