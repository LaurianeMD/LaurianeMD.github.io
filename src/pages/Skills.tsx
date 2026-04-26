import React from 'react';
import Navigation from '@/components/Navigation';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
