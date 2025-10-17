import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../constants/translations';
import { SunIcon, MoonIcon } from './Icons';
import { Link, animateScroll as scroll } from 'react-scroll';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, theme, toggleTheme }) => {
  const t = translations[language].header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hasSolidBg = isScrolled || isMenuOpen;
  const transparentTextStyles = 'text-white';
  const solidBgTextStyles = 'text-white dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400';
  const navLinkClasses = (isSolid: boolean) => 
    `cursor-pointer font-medium transition-colors ${isSolid ? solidBgTextStyles : `${transparentTextStyles} hover:text-white/80`}`;

  const LanguageButton: React.FC<{ lang: Language }> = ({ lang }) => (
    <button
      onClick={() => setLanguage(lang)}
      className={`font-medium px-2 py-1 rounded-md transition-colors text-sm ${
        language === lang
          ? 'bg-lime-500 text-slate-900 font-semibold'
          : hasSolidBg
            ? 'text-white dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
            : `text-gray-200 hover:bg-white/30 ${transparentTextStyles}`
      }`}
    >
      {lang.toUpperCase()}
    </button>
  );
  
  const navLinks = [
    { to: 'intro-about', label: t.about },
    { to: 'pricing', label: t.transfer },
    { to: 'tours', label: t.tours },
    { to: 'contact', label: t.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasSolidBg ? 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border-b border-gray-200/50 dark:border-slate-800/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className={`text-2xl font-bold transition-colors ${hasSolidBg ? 'text-white dark:text-white' : transparentTextStyles}`}>
            <button 
              onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })} 
              className={`cursor-pointer transition-colors ${hasSolidBg ? 'hover:text-lime-500 dark:hover:text-lime-400' : 'hover:text-white/80'}`}
            >
              {t.name}
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="active-link"
                className={navLinkClasses(hasSolidBg)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-4">
             <div className={`flex items-center space-x-1 p-1 rounded-lg transition-colors ${hasSolidBg ? 'bg-gray-100/50 dark:bg-slate-800/50' : 'bg-white/50'}`}>
                <LanguageButton lang={Language.EN} />
                <LanguageButton lang={Language.RU} />
                <LanguageButton lang={Language.VN} />
              </div>
            <div className={`flex items-center p-1 rounded-lg transition-colors ${hasSolidBg ? 'bg-gray-100/50 dark:bg-slate-800/50' : 'bg-white/50'}`}>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`w-9 h-7 flex items-center justify-center rounded-md transition-colors duration-200 ${
                  hasSolidBg
                    ? 'text-white dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                    : `text-gray-200 hover:bg-white/30 ${transparentTextStyles}`
                }`}
              >
                {theme === Theme.LIGHT ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`transition-colors ${hasSolidBg ? 'text-white dark:text-gray-300' : transparentTextStyles}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  activeClass="active-link"
                  className="block py-2 px-4 text-white dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;