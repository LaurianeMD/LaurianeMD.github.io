import React from 'react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
