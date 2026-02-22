import React from 'react';
import CustomHeader from '../../shared/components/custom/CustomHeader'; 
import FOTO1 from '../../assets/imgs/FOTO1.jpg'; 

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section 
        className="relative min-h-screen flex flex-col justify-between bg-cover bg-center pt-24" 
        style={{ backgroundImage: `url(${FOTO1})` }} 
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/40"></div>

        <div className="relative z-10 flex flex-1 items-center justify-between px-6 lg:px-20 py-10">
          
          <div className="hidden md:flex flex-col gap-4">
            {['fb', 'ig', 'tk', 'wa'].map((social) => (
              <div key={social} className="w-12 h-12 bg-[#F15A29] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all shadow-lg">
                <span className="text-white text-[10px] font-black uppercase">{social}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0D1B2A] p-8 md:p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl border border-white/10">
            <h2 className="text-white text-3xl font-bold text-center mb-8">Agenda tu visita</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Introduce tu nombre y apellido" className="w-full py-4 px-6 rounded-full bg-white text-[#0D1B2A] outline-none" />
              <input type="email" placeholder="Correo electrónico" className="w-full py-4 px-6 rounded-full bg-white text-[#0D1B2A] outline-none" />
              
              <div className="flex bg-white rounded-full overflow-hidden">
                <span className="flex items-center pl-6 pr-2 text-[#9EA3A8] font-bold border-r border-gray-200">+591</span>
                <input type="tel" className="w-full py-4 px-4 text-[#0D1B2A] outline-none" />
              </div>

              <input type="text" placeholder="Fecha y Hora de la visita" className="w-full py-4 px-6 rounded-full bg-white text-[#0D1B2A] outline-none" />
              
              <button type="submit" className="bg-[#F15A29] text-white font-black py-4 px-14 rounded-full mt-4 hover:brightness-110 active:scale-95 transition-all self-center shadow-lg uppercase tracking-widest">
                ENVIAR
              </button>
            </form>
          </div>
        </div>

        <div className="relative z-10 bg-[#0D1B2A] py-8 px-6 lg:px-20 border-t border-white/5 flex flex-wrap items-center gap-8 text-white">
          <div className="flex gap-4">
            <select className="bg-white text-[#0D1B2A] py-3 px-6 rounded-xl outline-none font-medium cursor-pointer">
              <option>¿Qué necesitas?</option>
            </select>
            <select className="bg-white text-[#0D1B2A] py-3 px-6 rounded-xl outline-none font-medium cursor-pointer">
              <option>Tipo de propiedad</option>
            </select>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <span className="font-black tracking-[0.2em] text-sm text-[#9EA3A8]">ETAPA</span>
            {['En preventa', 'Finalizado', 'En construcción'].map((etapa) => (
              <label key={etapa} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-[#9EA3A8] accent-[#F15A29]" /> 
                <span className="group-hover:text-[#F15A29] transition-colors">{etapa}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;