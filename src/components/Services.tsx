import React from 'react';
import { Language } from '../types';
import { translations } from '../../constants/translations';
import { CarIcon, PalmTreeIcon, KeyIcon, HomeIcon } from './Icons';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ServicesProps {
  language: Language;
  id: string;
}

const ServiceCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => (
    <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg p-8 rounded-2xl flex flex-col items-start dark:text-white transition-colors duration-300">
        <div className="bg-white/50 dark:bg-black/20 p-4 rounded-full mb-4 text-lime-500 dark:text-lime-400">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="dark:text-gray-300 mb-4 flex-grow">{description}</p>
    </div>
);


const Services: React.FC<ServicesProps> = ({ language, id }) => {
  const t = translations[language].services;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: <CarIcon className="w-8 h-8" />,
      title: t.transfers.title,
      description: t.transfers.description,
    },
    {
      icon: <PalmTreeIcon className="w-8 h-8" />,
      title: t.tours.title,
      description: t.tours.description,
    },
    {
      icon: <KeyIcon className="w-8 h-8" />,
      title: t.rentals.title,
      description: t.rentals.description,
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: t.accommodation.title,
      description: t.accommodation.description,
    },
  ];

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            {t.title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;