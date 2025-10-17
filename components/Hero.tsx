
import React from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';
import { TelegramIcon } from './Icons';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Muine_002.jpeg"
          className="w-full h-full object-cover"
          src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Muine_001.mp4"
        >
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
          {t.title}
        </h1>
        <h2 className="text-3xl md:text-5xl font-light mb-4 opacity-90">{t.subtitle}</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/Victor_tour"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 border border-transparent rounded-full transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon className="w-6 h-6"/>
            <span>{t.telegramButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;