import React from 'react'
import FOTO1 from '../../../assets/imgs/FOTO1.jpg';
import { Facebook, Instagram, } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.229V2h-3.066v13.478a2.725 2.725 0 1 1-2.724-2.724c.225 0 .444.028.654.08V9.746a5.793 5.793 0 1 0 5.136 5.732V9.381a7.857 7.857 0 0 0 4.77 1.613V7.93a4.78 4.78 0 0 1-1-.244z" />
  </svg>
)
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.66 15.06L2 22l5.1-1.34A10 10 0 1 0 12 2Zm0 18a7.94 7.94 0 0 1-4.07-1.12l-.29-.17-3.03.8.81-2.95-.19-.3A8 8 0 1 1 12 20Zm4.39-5.61c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.36.52.57.18 1.08.16 1.49.1.45-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
)
function HomeHero() {
  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-screen flex flex-col justify-between bg-cover bg-center pt-24 background-obra"
        style={{ backgroundImage: `url(${FOTO1})` }}
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/40"></div>

        <div className="relative z-10 flex flex-1 items-center justify-between px-6 lg:px-20 py-10">

          <div className="hidden md:flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#F15A29] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg">
              <Facebook
                className='w-6 h-6 text-white' />

            </div>
            <div className="w-12 h-12 bg-[#F15A29] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg">
              <Instagram
                className='w-6 h-6 text-white' />
            </div>
            <div className="w-12 h-12 bg-[#F15A29] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg">
              {<TikTokIcon className='w-6 h-6 text-white' />}
            </div>
            <div className="w-12 h-12 bg-[#F15A29] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg">
              {<WhatsAppIcon className='w-6 h-6 text-white' />}
            </div>
          </div>

          <div className="bg-[#0D1B2A] p-8 md:p-10 rounded-4xl w-full max-w-xl shadow-2xl border border-white/10">
            <h2 className="text-white text-4xl font-bold text-center mb-8">Agenda tu visita</h2>
            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Nombre y apellido"
                className="w-full py-4 px-6 rounded-full bg-white text-[#0D1B2A] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#F15A29] transition-all"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full py-4 px-6 rounded-full bg-white text-[#0D1B2A] placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#F15A29] transition-all"
              />
              <div className="flex items-center gap-3 bg-white rounded-full px-6 py-4 focus-within:ring-2 focus-within:ring-[#F15A29] transition-all">
                <div className="flex items-center gap-2 pr-3 border-r border-gray-300">
                  <ReactCountryFlag
                    countryCode="BO"
                    svg
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <span className="text-[#0D1B2A] font-semibold text-sm">+591</span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={8}
                  placeholder="Número de teléfono"
                  className="flex-1 text-[#0D1B2A] placeholder:text-gray-400 outline-none bg-transparent"
                />
              </div>
              <input
                type="datetime-local"
                className="w-full py-4 px-6 rounded-full bg-white text-[#0D1B2A] outline-none focus:ring-2 focus:ring-[#F15A29] transition-all"
              />
              <button
                type="submit"
                className="bg-[#F15A29] text-white font-black py-4 px-14 rounded-full mt-4 hover:brightness-110 active:scale-95 transition-all self-center shadow-lg uppercase tracking-widest"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>


      </section>
    </div>
  )
}

export default HomeHero
