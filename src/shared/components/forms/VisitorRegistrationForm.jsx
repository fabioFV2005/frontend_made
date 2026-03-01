import React from 'react'

export const VisitorRegistrationForm = () => {
    return (
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
    )
}
