import './Header.css'
export default function Header() {
//   estructura tentativa del header
    return (
        <div className="header-cont">
            <div className='header-video-background'>
                <video
                autoPlay
                loop
                muted 
                src="./videos/header.mp4"></video>
            </div>
            <div className='titulos right'>
                <h1>Creamos tu lugar.</h1>
                <p>Hogares, oficinas y proyectos a tu medida.</p>
            </div>
        </div>
)
}
