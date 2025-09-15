
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('about.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
              alt="Professional workspace"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="card-hover border-l-4 border-l-tech-blue">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-tech-blue">{t('about.journey.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.journey.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-tech-purple">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-tech-purple">{t('about.values.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.values.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-tech-indigo">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-tech-indigo">{t('about.goals.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.goals.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
