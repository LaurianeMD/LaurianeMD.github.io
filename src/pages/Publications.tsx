import React from 'react';
import Navigation from '@/components/Navigation';
import PublicationsSection from '@/components/PublicationsSection';
import Footer from '@/components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Publications;
