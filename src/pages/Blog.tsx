import React from 'react';
import Navigation from '@/components/Navigation';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
