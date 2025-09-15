
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { t } = useLanguage();
  
  const titles = [
    t('hero.titles.dataScientist'),
    t('hero.titles.ai&mlEngineer')
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTitle = titles[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-background">
      <div className="container-width section-padding text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="public\photo_Lauriane.jpg"
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-tech-blue shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('hero.name')}</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 text-gray-700 h-12">
            <span className="typing-effect">
              {currentText}
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-tech-blue hover:bg-tech-purple transition-all duration-300 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl"
            >
              {t('hero.viewWork')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300 px-8 py-3 text-lg"
            >
              {t('hero.getInTouch')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
