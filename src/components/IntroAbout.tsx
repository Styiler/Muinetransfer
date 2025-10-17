import React from 'react';
import { Language } from '../types';
import { translations } from '../../constants/translations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface IntroAboutProps {
  language: Language;
  id: string;
}

const IntroAbout: React.FC<IntroAboutProps> = ({ language, id }) => {
  const t = translations[language].introAbout;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 dark:text-white transition-colors duration-300">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              {t.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/ViktorTur_Muine.jpg"
                alt="Comfortable transfer car in Vietnam" 
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-12">
                <h3 className="text-white text-center text-3xl font-bold px-6">
                  {t.imageOverlay.line1}<br />{t.imageOverlay.line2}
                </h3>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                {t.textSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2">{section.title}</h4>
                    <p className="dark:text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://t.me/Victor_tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-3 px-8 border border-transparent rounded-full transition-colors duration-300"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroAbout;