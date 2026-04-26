import React from 'react';
import Navigation from '@/components/Navigation';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Experience = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
