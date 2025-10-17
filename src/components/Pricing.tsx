
import React from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TelegramIcon } from './Icons';

interface PricingProps {
  language: Language;
  id: string;
}

const PriceRow: React.FC<{ vehicle: string; price: string }> = ({ vehicle, price }) => (
    <div className="flex justify-between items-center py-4 border-b border-black/10 dark:border-white/20">
        <p className="dark:text-gray-300">{vehicle}</p>
        <p className="font-bold text-lg">{price}</p>
    </div>
);

const PricingTable: React.FC<{
    title: string;
    lang: Language;
    sedanPrice: string;
    minivanPrice: string;
    minibusPrice: string;
}> = ({ title, lang, sedanPrice, minivanPrice, minibusPrice }) => (
    <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg p-8 rounded-2xl dark:text-white transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
        <div className="space-y-2">
            <PriceRow vehicle={translations[lang].pricing.sedan} price={sedanPrice} />
            <PriceRow vehicle={translations[lang].pricing.minivan} price={minivanPrice} />
            <PriceRow vehicle={translations[lang].pricing.minibus} price={minibusPrice} />
        </div>
    </div>
);

const Pricing: React.FC<PricingProps> = ({ language, id }) => {
  const t = translations[language].pricing;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-white/90 dark:text-gray-300">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingTable 
            title={t.hcm} 
            lang={language}
            sedanPrice="$60"
            minivanPrice="$60"
            minibusPrice="$90"
          />
          <PricingTable 
            title={t.cxr} 
            lang={language}
            sedanPrice="$60"
            minivanPrice="$60"
            minibusPrice="$90"
          />
        </div>
        <div className="text-center mt-12">
            <p className="dark:text-gray-300 mb-6 max-w-2xl mx-auto bg-black/10 dark:bg-black/20 p-2 rounded-md">{t.note}</p>
            <a
              href="https://t.me/Victor_tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 border border-transparent rounded-full transition-colors duration-300"
            >
                <TelegramIcon className="w-6 h-6"/>
                <span>{t.ctaButton}</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;