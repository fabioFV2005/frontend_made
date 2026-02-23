import patronSVG from '../../../assets/svg/patron-made.svg';
import fondo from '../../../assets/imgs/edfi1.jpg';
import CountUp from '../custom/Counter';

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-white">
        {/* Patron MADE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${patronSVG})` }}
        />

        {/* Botoncito*/}
        {/* <div className="absolute top-8 right-8 z-20">
          <button className="bg-[#f1550a] hover:bg-[#d94a08] text-white rounded-full px-8 py-4 shadow-xl transition-all duration-300 hover:scale-105
            animate-pulse animate-infinite animate-ease-in animate-normal animate-fill-both">
            <div className="flex flex-col leading-tight text-left">
              <span className="text-[15px] font-bold tracking-wide ">
                AGENDA TU VISITA
              </span>
              <span className="text-[11px] font-medium opacity-90 tracking-wider">
                TRABAJA CON NOSOTROS
              </span>
            </div>

          </button>
        </div> */}

        {/* Contenido principal */}
        <div className="relative z-10 flex h-full">
          <div className="w-1/2 flex flex-col items-center justify-center space-y-8 text-[var(--color-text-main)]">
            <div className="text-center">
              <p className="text-6xl font-bold">
                <span className="mr-1">+</span>
                <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting
                />
              </p>
              <p className="text-xl mt-2">Años de experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold">
                <span className="mr-1">+</span>
                <CountUp
                  from={0}
                  to={1000}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting
                />
              </p>
              <p className="text-xl mt-2">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold">
                <span className="mr-1">+</span>
                <CountUp
                  from={0}
                  to={160}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting
                />
                <span className="ml-1 text-5xl">k</span>
              </p>
              <p className="text-xl mt-2">Metros² desarrollados</p>
            </div>
          </div>

          <div className="w-1/2 relative">
            <svg
              viewBox="500 0 1920 1080"
              preserveAspectRatio="xMidYMid meet"
              className="absolute"
              style={{
                width: '250%',
                height: 'auto',
                left: '-20%',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)'
              }}
            >
              <defs>
                <pattern
                  id="img-pattern"
                  patternUnits="userSpaceOnUse"
                  width="1920"
                  height="1080"
                >
                  <image
                    href={fondo}
                    width="1920"
                    height="1080"
                    x="-300"
                    y="0"
                    preserveAspectRatio="xMidYMid meet"
                    filter="url(#blur-effect)"
                    // opacity={0.5}
                  />
                </pattern>
                {/* Máscara pra la imagen */}
                <clipPath id="clip-st1">
                  <path d="M904.8,186.9v383c-.03,18.99-6.16,37.47-17.5,52.7l-195.5,262.1c-10.47,14.05-26.97,22.32-44.5,22.3h-127.4c-7.23.03-13.13-5.8-13.16-13.04-.01-2.18.53-4.34,1.56-6.26L879.9,180.8c2.27-4.36,6.78-7.1,11.7-7.1h0c7.29,0,13.2,5.91,13.2,13.2Z" />
                </clipPath>
                {/* prueba de filtros */}
                <filter id="blur-effect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>

              <rect x="0" y="0" width="1920" height="1080" fill="url(#img-pattern)" clipPath="url(#clip-st1)" />
              <path d="M938,186.3v398.9c-.06,6.9,5.5,12.54,12.4,12.6.07,0,.13,0,.2,0h214.8c6.96.01,12.61-5.62,12.62-12.58,0-2.1-.52-4.17-1.52-6.02l-214.8-398.8c-2.18-4.11-6.45-6.69-11.1-6.7h0c-6.96,0-12.6,5.64-12.6,12.6h0Z" fill="#f1550a" />
              <path d="M950.7,632.1h241.1c4.64-.04,8.93,2.45,11.2,6.5l136.6,250.5c4.4,8.1-1.7,17.9-11.3,17.9h-150.1c-3.65.03-7.15-1.49-9.6-4.2l-227.4-250.4c-7.2-7.9-1.4-20.3,9.5-20.3Z" fill="#868485" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;