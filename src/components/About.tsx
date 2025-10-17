import React from 'react';
import { Language } from '../types';
import { translations } from '../../constants/translations';
import { CheckCircleIcon } from './Icons';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AboutProps {
  language: Language;
  id: string;
}

const AdvantageItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="flex items-start space-x-4">
        <div>
            <CheckCircleIcon className="w-8 h-8 text-lime-500 dark:text-lime-400" />
        </div>
        <div>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="dark:text-gray-300">{description}</p>
        </div>
    </div>
);

const About: React.FC<AboutProps> = ({ language, id }) => {
  const t = translations[language].about;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const advantages = [
    t.experience,
    t.reliability,
    t.guides,
    t.fleet,
    t.support,
  ];

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg p-8 rounded-2xl dark:text-white transition-colors duration-300">
                <h2 className="text-4xl font-extrabold sm:text-5xl mb-6">
                    {t.title}
                </h2>
                <div className="space-y-8">
                    {advantages.map((adv, index) => (
                        <AdvantageItem key={index} title={adv.title} description={adv.description} />
                    ))}
                </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
                <video 
                    src="https://yfgsxhzihffeyzkzohll.supabase.co/storage/v1/object/public/images_MuiNe/Video%20grendmafl.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                >
                </video>
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end text-center text-white p-4 pb-12">
                  <h3 className="text-3xl font-bold">{t.videoOverlay.line1}</h3>
                  <p className="text-xl mt-2">{t.videoOverlay.line2}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;