import React from 'react';
import { Language } from '../types';
import { translations } from '../../constants/translations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface TestimonialsProps {
  language: Language;
  id: string;
}

const TestimonialCard: React.FC<{ text: string; author: string; source: string; }> = ({ text, author, source }) => (
    <div className="bg-white/50 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 backdrop-blur-lg p-8 rounded-2xl flex flex-col items-start dark:text-white transition-colors duration-300">
        <p className="dark:text-gray-300 mb-6 italic">"{text}"</p>
        <div className="flex items-center mt-auto">
            <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-lime-500 to-lime-600 flex-shrink-0"></div>
            <div>
                <p className="font-bold">{author}</p>
                <p className="text-sm dark:text-gray-400">{source}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC<TestimonialsProps> = ({ language, id }) => {
  const t = translations[language].testimonials;
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} id={id} className={`py-20 scroll-animate ${isInView ? 'scroll-animate-in' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            {t.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.reviews.map((review, index) => (
                <TestimonialCard 
                    key={index}
                    text={review.text}
                    author={review.author}
                    source={review.source}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;