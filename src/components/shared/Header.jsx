
export default function Header() {
//   estructura tentativa del header
    return (
    
    <header class="header">
        <div class="header__barra contenedor">
            <div class="header__logo">
                {/* Aqui colocaremos el logo chavos */}
                <img src="build/img/logo.svg" alt="logo"/> 
            </div>

            <nav class="navegacion">
                <a class="navegacion__link" href="#">Nosotros</a>
                <a class="navegacion__link" href="#">Propiedades</a>
                <a class="navegacion__link" href="#">Blog</a>
                <a class="navegacion__link" href="#">Testimoniales</a>
                <a class="navegacion__link" href="#">Contacto</a>
            </nav>
        </div>

        <div class="contenedor">
            <div class="header__contenido ">
                <h1 class="header__heading">Cotiza tu casa al mejor precio</h1>
                <p class="header__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea pariatur dolores ducimus! Repellendus maiores nemo tempore, cupiditate pariatur expedita
                </p>

                <img class="header__imagen" src="build/img/imagenHeader.jpg" alt="imagen header"/>
            </div>
        </div>
    </header>

)
}
