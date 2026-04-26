import React from 'react';
import Navigation from '@/components/Navigation';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';

const Education = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Education;
