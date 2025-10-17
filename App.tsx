import React, { useState, useEffect } from 'react';
import { Language, Tour } from './types';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroAbout from './components/IntroAbout';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Tours from './components/Tours';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import TourModal from './components/TourModal';

const App: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  
  const [language, setLanguage] = useState<Language>(Language.RU);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const openTourModal = (tour: Tour) => setSelectedTour(tour);
  const closeTourModal = () => setSelectedTour(null);

  return (
    <div className={`text-white dark:text-gray-200`}>
        <Header 
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            toggleTheme={toggleTheme}
        />
        <main>
            <Hero language={language} />
            <IntroAbout id="intro-about" language={language} />
            <Services id="services" language={language} />
            <Pricing id="pricing" language={language} />
            <Tours id="tours" language={language} onTourClick={openTourModal} />
            <About id="about" language={language} />
            <Testimonials id="testimonials" language={language} />
            <Contact id="contact" language={language} />
        </main>
        <Footer language={language} />
        <TourModal
            isOpen={!!selectedTour}
            onClose={closeTourModal}
            tour={selectedTour}
            language={language}
        />
        <ScrollToTopButton />
    </div>
  );
};

export default App;