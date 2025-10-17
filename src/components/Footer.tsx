import React from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-lg border-t border-gray-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          <div>
            <h3 className="text-xl font-bold text-white dark:text-white">{t.header.name}</h3>
            <p className="mt-2 text-sm text-white/80 dark:text-gray-400">{t.footer.copyright}</p>
          </div>
          <div className="text-sm text-white/80 dark:text-gray-400 md:text-right">
            <h4 className="font-semibold text-white dark:text-gray-200 uppercase tracking-wider mb-3">{t.footer.contactTitle}</h4>
            <p>{t.footer.address}</p>
            <a href={`tel:${t.footer.phone.replace(/\s/g, '')}`} className="hover:underline">{t.footer.phone}</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/30 dark:border-slate-700/50 text-center">
            <p className="text-sm text-white/80 dark:text-gray-400">
                <a href="https://www.facebook.com/MoiseenkoDI/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {t.footer.creator}
                </a>
                <span> {t.footer.aiCredit}</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;