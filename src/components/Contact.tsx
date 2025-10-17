

import React from 'react';
import { Language } from '../types';
import { translations } from '../../constants/translations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ContactProps {
  language: Language;
  id: string;
}

const Contact: React.FC<ContactProps> = ({ language, id }) => {
  const t = translations[language].contact;
  const tDetails = t.details;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-white/90 dark:text-gray-300">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg p-8 rounded-2xl dark:text-white transition-colors duration-300 flex flex-col">
              <div className="text-center">
                <h3 className="text-2xl font-bold">{tDetails.title}</h3>
                <p className="mt-2 text-lg dark:text-gray-300">{tDetails.hours}</p>
              </div>

              <div className="mt-8 h-48 rounded-2xl overflow-hidden">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20202.53010937807!2d108.18519970413801!3d10.953458029149887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3176854fa188df0f%3A0x48ca9fc72352dfe5!2sVictor%20tour!5e0!3m2!1sen!2s!4v1760586715045!5m2!1sen!2s" 
                      className="w-full h-full border-0" 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Victor Tour Office Location Map">
                  </iframe>
              </div>

              <div className="text-center">
                <div className="mt-8 space-y-4 text-left inline-block">
                    <div className="flex items-start">
                    <span className="font-semibold w-36 md:w-28 flex-shrink-0 pt-2">{tDetails.addressLabel}</span>
                    <span className="dark:text-gray-300 pt-2">{tDetails.addressValue}</span>
                    </div>
                    <div className="flex items-start">
                    <span className="font-semibold w-36 md:w-28 flex-shrink-0 pt-2">{tDetails.phonesLabel}</span>
                    <div className="flex flex-row flex-wrap items-start gap-2">
                        {tDetails.phoneValues.map((phone: string, index: number) => (
                            <a 
                                key={index} 
                                href={`tel:${phone.replace(/\s/g, '')}`} 
                                className="inline-block bg-white/30 dark:bg-slate-800/20 hover:bg-lime-500 hover:text-slate-900 dark:hover:bg-lime-400 dark:hover:text-slate-900 px-4 py-2 rounded-lg transition-colors duration-200 dark:text-gray-200 font-medium"
                            >
                                {phone}
                            </a>
                        ))}
                    </div>
                    </div>
                    <div className="flex items-start">
                    <span className="font-semibold w-36 md:w-28 flex-shrink-0 pt-2">{tDetails.emailLabel}</span>
                     <a 
                        href={`mailto:${tDetails.emailValue}`} 
                        className="inline-block bg-white/30 dark:bg-slate-800/20 hover:bg-lime-500 hover:text-slate-900 dark:hover:bg-lime-400 dark:hover:text-slate-900 px-4 py-2 rounded-lg transition-colors duration-200 dark:text-gray-200 font-medium break-all"
                    >
                        {tDetails.emailValue}
                    </a>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="font-semibold">{tDetails.socialLabel}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <a 
                            href="https://api.whatsapp.com/qr/ORELBLXUWAFYD1?autoload=1&app_absent=0"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="WhatsApp" 
                            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-bold"
                        >
                            {tDetails.socialButtons.whatsapp}
                        </a>
                        <a 
                            href="https://t.me/Victor_tour"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Telegram" 
                            className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-bold"
                        >
                            {tDetails.socialButtons.telegram}
                        </a>
                        <a 
                            href="https://www.facebook.com/share/19vvwNjVkx/?mibextid=wwXIfr"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Facebook" 
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-bold"
                        >
                            {tDetails.socialButtons.facebook}
                        </a>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;