import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import CountUp from "../custom/Counter";
import logoA from "../../../assets/Made/madeLogo.svg";
import video from "../../../assets/hero/building2.mp4";
import luna from "../../../assets/imgs/LUNA BLANCA 1.jpeg";

const Luna = () => {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans">
      <div className="flex flex-col md:flex-row h-auto md:h-[50vh]">
        {/* MAPA */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-full bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.8646199650965!2d-66.1578332!3d-17.3702581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37404179e8cdb%3A0x86da525287f3b8cb!2sAv.%20Libertador%20Sim%C3%B3n%20Bol%C3%ADvar%2C%20Cochabamba!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Ubicación MADE"
          ></iframe>
        </div>

        {/* LUNA*/}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-full flex items-center justify-center overflow-hidden">
          <img
            src={luna}
            alt="Edificio"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#f1550a]/70 to-[#d9470a]/75"></div>

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <h3 className="text-white font-semibold text-xl tracking-wide mb-2">
              NUEVO PROYECTO
            </h3>

            <h1 className="text-white font-extrabold text-5xl md:text-6xl tracking-widest mb-10 drop-shadow-lg">
              LUNA BLANCA
            </h1>

            {/* CONTADORES */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 w-full">
              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold text-4xl w-36 h-24 flex items-center justify-center rounded-2xl shadow-xl mb-2">
                  <CountUp from={0} to={1450} duration={2} startCounting />
                  <span className="text-2xl ml-1">m²</span>
                </div>
                <span className="text-white text-xs tracking-wider">
                  CONSTRUIDOS
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold text-4xl w-24 h-24 flex items-center justify-center rounded-2xl shadow-xl mb-2">
                  <CountUp from={0} to={4} duration={2.5} startCounting />
                </div>
                <span className="text-white text-xs tracking-wider">
                  DEPARTAMENTOS
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a2b42] text-white px-10 py-3 rounded-full font-bold tracking-wider shadow-xl hover:bg-[#111f30] transition-all"
            >
              MÁS INFORMACIÓN
            </motion.button>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#17253b]/80 via-[#17253b]/75 to-[#17253b]/80"></div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4 text-white">
          <div className="flex flex-col items-center mb-10">
            <div className="flex items-center justify-center gap--100 font-bold text-5xl tracking-[0.4em]">
              <span>M</span>

              <img src={logoA} alt="Logo A" className="h-20 w-auto" />

              <span>DE</span>
            </div>

            <p className="text-xs tracking-[0.3em] mt-2">
              DESARROLLADORES INMOBILIARIOS
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8 mb-10 text-sm tracking-wider">
            {["INICIO", "SOBRE NOSOTROS", "PROYECTOS", "CONTACTO"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          {/* REDES */}
          <div className="flex gap-5">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaTiktok, link: "#" },
              { icon: FaWhatsapp, link: "#" },
            ].map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#17253b] hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="w-full border-t border-white/20 mt-10"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Luna;
