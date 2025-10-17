
import React from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';
import { CloseIcon, CheckCircleIcon, WhatsAppIcon } from './Icons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const t = translations[language].aboutModal;
  const contact = translations[language].contact.details;

  const GuaranteeItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <CheckCircleIcon className="w-6 h-6 text-lime-500 dark:text-lime-400" />
      </div>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </li>
  );

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white/50 dark:bg-slate-900/30 text-gray-800 dark:text-white border border-white/30 dark:border-slate-700/50 backdrop-blur-2xl rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/50 dark:bg-slate-900/30 backdrop-blur-lg p-6 border-b border-white/30 dark:border-slate-700/50 flex justify-between items-center z-10 transition-colors duration-300">
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <button onClick={onClose} className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              <CloseIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="p-8 space-y-8">
            <div>
              <p className="text-lg font-semibold">{t.subtitle}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="h-40 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/600/400?image=10" alt="Driver meeting at airport" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-40 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/600/400?image=20" alt="Modern minivan" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">{t.guaranteesTitle}</h3>
                  <ul className="space-y-4">
                    <GuaranteeItem text={t.guarantees.meet} />
                    <GuaranteeItem text={t.guarantees.experience} />
                    <GuaranteeItem text={t.guarantees.support} />
                    <GuaranteeItem text={t.guarantees.price} />
                  </ul>
                </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t.extraServicesTitle}</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>{t.extraServices.tours}</li>
                  <li>{t.extraServices.visa}</li>
                  <li>{t.extraServices.exchange}</li>
                  <li>{t.extraServices.rentals}</li>
              </ul>
            </div>
            
            <div className="bg-black/5 dark:bg-white/5 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold">{t.ctaTitle}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{t.ctaDescription}</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#pricing" onClick={onClose} className="w-full sm:w-auto bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-3 px-6 border border-transparent rounded-full transition-colors duration-300">
                  {t.ctaButton1}
                </a>
                <a href="https://api.whatsapp.com/qr/ORELBLXUWAFYD1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 border border-transparent rounded-full transition-colors duration-300">
                  <WhatsAppIcon className="w-5 h-5"/>
                  {t.ctaButton2}
                </a>
              </div>
            </div>
             <div>
                <h4 className="font-semibold">{t.contactsTitle}</h4>
                {contact.phoneValues.map((phone, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">{phone} (WhatsApp / Viber)</p>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;