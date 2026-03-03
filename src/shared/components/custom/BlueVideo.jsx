import React from "react";
import logoA from "../../../assets/Made/madeLogo.svg";
import video from "../../../assets/hero/building2.mp4";
import { motion } from "framer-motion";

function BlueVideo() {
  return (
    <div>
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
          {/*
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
          </nav>*/}

          {/* REDES 
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

          <div className="w-full border-t border-white/20 mt-10"></div>*/}
        </div>
      </motion.div>
    </div>
  );
}

export default BlueVideo;
