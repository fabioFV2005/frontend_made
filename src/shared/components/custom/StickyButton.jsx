import React from 'react';

const StickyButton = ({ isVisible }) => {
  return (
    <div 
      className={`fixed top-1/2 -translate-y-15 right-0 z-50 transition-all duration-700 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
          : 'opacity-0 translate-x-20 scale-90 pointer-events-none'
        }`}
    >
      <button 
        className="bg-[#f1550a] hover:bg-[#d94a08] text-white rounded-l-full px-8 py-4 shadow-2xl 
                   transition-all duration-300 hover:scale-105 group
                   animate-pulse animate-infinite animate-ease-in"
      >
        <div className="flex flex-col leading-tight text-left">
          <span className="text-[15px] font-bold tracking-wide">
            AGENDA TU VISITA
          </span>
          <span className="text-[11px] font-medium opacity-90 tracking-wider">
            TRABAJA CON NOSOTROS
          </span>
        </div>
      </button>
    </div>
  );
};

export default StickyButton;