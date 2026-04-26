import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
// import ResearchProfileSection from '@/components/ResearchProfileSection'; // À activer quand tu seras chercheuse
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
// import PublicationsSection from '@/components/PublicationsSection'; // À activer quand tu seras chercheuse
import ContactSection from '@/components/ContactSection';
import SectionSeparator from '@/components/SectionSeparator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <SectionSeparator />
        <AboutSection />
        <SectionSeparator />
        {/* <ResearchProfileSection /> */} {/* À activer quand tu seras chercheuse */}
        {/* <SectionSeparator /> */}
        {/* <PublicationsSection /> */} {/* À activer quand tu seras chercheuse */}
        {/* <SectionSeparator /> */}
        <BlogSection />
        <SectionSeparator />
        <ProjectsSection />
        <SectionSeparator />
        <ExperienceSection />
        <SectionSeparator />
        <EducationSection />
        <SectionSeparator />
        <SkillsSection />
        <SectionSeparator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
