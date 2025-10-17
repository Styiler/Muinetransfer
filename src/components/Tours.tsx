
import React, { useState } from 'react';
import { Language, Tour } from '../types';
import { translations } from '../constants/translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ToursProps {
  language: Language;
  id: string;
  onTourClick: (tour: Tour) => void;
}

const TourCard: React.FC<{
    tour: Tour;
    onClick: () => void;
    buttonText: string;
}> = ({ tour, onClick, buttonText }) => (
    <button 
      onClick={onClick}
      className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg rounded-2xl overflow-hidden group transition-all duration-300 text-left hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
    >
        <div className="relative h-64">
            {tour.video ? (
                 <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={tour.video}
                >
                </video>
            ) : (
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            )}
        </div>
        <div className="p-6 dark:text-white">
            <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
            <p className="dark:text-gray-300 mb-4 h-24 overflow-hidden">{tour.short_description}</p>
            <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-bold text-lime-500 dark:text-lime-400 bg-black/40 px-3 py-1 rounded-md">{tour.price}</p>
                 <span className="font-semibold text-lime-500 dark:text-lime-400 group-hover:underline bg-black/40 px-3 py-1 rounded-md">
                    {buttonText}
                </span>
            </div>
        </div>
    </button>
);


const Tours: React.FC<ToursProps> = ({ language, id, onTourClick }) => {
  const t = translations[language].tours;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [showAllTours, setShowAllTours] = useState(false);

  const displayedTours = showAllTours ? t.tourList : t.tourList.slice(0, 6);

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            {t.title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedTours.map((tour) => (
              <TourCard 
                key={tour.id}
                tour={tour}
                onClick={() => onTourClick(tour)}
                buttonText={t.cardButton}
              />
          ))}
        </div>
        
        {!showAllTours && t.tourList.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllTours(true)}
              className="inline-block bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-3 px-8 border border-transparent rounded-full transition-colors duration-300"
            >
              {t.buttonAll}
            </button>
          </div>
        )}

        <div className="mt-12 text-center max-w-4xl mx-auto">
            <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg p-8 rounded-2xl dark:text-white transition-colors duration-300 text-left">
                {t.customTourDescription.map((paragraph, index) => (
                    <p key={index} className="dark:text-gray-300 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Tours;