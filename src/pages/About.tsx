import React from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
