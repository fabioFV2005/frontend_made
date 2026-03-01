import React from 'react'
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
export const SocialMedia = () => {
    return (
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
    )
}
