import React, { useEffect } from 'react';
import { Language, Tour } from '../types';
import { translations } from '../constants/translations';
import { CloseIcon, CheckCircleIcon, ClockIcon, TicketIcon, TelegramIcon } from './Icons';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour | null;
  language: Language;
}

const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose, tour, language }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;
  
  const t = translations[language].tours.modalTitles;

  const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string | undefined }> = ({ icon, label, value }) => {
      if (!value) return null;
      return (
          <div className="flex items-center space-x-2 bg-black/5 dark:bg-white/5 p-3 rounded-lg">
              {icon}
              <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</p>
                  <p className="text-base font-bold">{value}</p>
              </div>
          </div>
      )
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-modal-title"
    >
      <div 
        className="bg-white/50 dark:bg-slate-900/50 text-gray-800 dark:text-white border border-white/30 dark:border-slate-700/50 backdrop-blur-2xl rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col transition-transform duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 sticky top-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg p-5 border-b border-white/30 dark:border-slate-700/50 flex justify-between items-center z-10">
            <h2 id="tour-modal-title" className="text-2xl font-bold">{tour.title}</h2>
            <button onClick={onClose} className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10" aria-label="Close modal">
              <CloseIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="p-8 space-y-6 overflow-y-auto">
          <div className="h-64 rounded-lg overflow-hidden">
             {tour.video ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src={tour.video}
                >
                </video>
            ) : (
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <DetailItem icon={<TicketIcon className="w-8 h-8 text-lime-500 dark:text-lime-400"/>} label={t.price} value={tour.price} />
            <DetailItem icon={<ClockIcon className="w-8 h-8 text-lime-500 dark:text-lime-400"/>} label={t.duration} value={tour.duration} />
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{tour.full_description}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">{t.program}</h3>
              <ul className="space-y-2">
                {tour.program.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-lime-500 dark:text-lime-400 font-bold">&bull;</span>
                    <p className="text-gray-600 dark:text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t.included}</h3>
              <ul className="space-y-2">
                {tour.included.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 mt-0.5 text-lime-500 dark:text-lime-400 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {tour.recommendations && (
            <div className="bg-black/5 dark:bg-white/5 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{t.recommendations}</h3>
              <p className="text-gray-600 dark:text-gray-300">{tour.recommendations}</p>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 p-4 border-t border-white/30 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg">
            <a
              href="https://t.me/Victor_tour"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 border border-transparent rounded-full transition-colors duration-300"
            >
              <TelegramIcon className="w-6 h-6"/>
              <span>{t.bookButton}</span>
            </a>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TourModal;