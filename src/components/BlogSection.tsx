import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import BlogFilter from './blog/BlogFilter';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogPosts = [
    {
      title: 'From CVs to Smart Hiring: Building an AI-Powered Resume Evaluator with Gemini',
      description: 'A practical walkthrough of building an AI-powered resume evaluator using Google Gemini — from parsing CVs to generating structured, actionable feedback for hiring workflows.',
      date: '2025-04-20',
      category: 'Artificial Intelligence',
      readTime: '4 min',
      link: 'https://medium.com/@dmbagdjelauriane/from-cvs-to-smart-hiring-building-an-ai-powered-resume-evaluator-with-gemini-dbf3647255a3',
      type: 'article',
      tags: ['ai', 'gemini', 'nlp'],
    },
    {
      title: 'Deep Learning Indaba 2025 — A Day-by-Day Journey Through Africa\'s Largest AI Gathering',
      description: 'A personal account of the Deep Learning Indaba 2025, Africa\'s largest AI gathering — exploring sessions, connections, and insights from one of the continent\'s most inspiring AI events.',
      date: '2026-03-24',
      category: 'Community',
      readTime: '6 min',
      link: 'https://medium.com/@dmbagdjelauriane/deep-learning-indaba-2025-4752d91e065e',
      type: 'article',
      tags: ['ai', 'community', 'africa'],
    },
  ];

  const categories = ['all', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const years = Array.from(new Set(blogPosts.map(p => new Date(p.date).getFullYear().toString()))).sort().reverse();

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const c = selectedCategory === 'all' || post.category === selectedCategory;
      const y = selectedYear === 'all' || new Date(post.date).getFullYear().toString() === selectedYear;
      return c && y;
    });
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-asc': return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc': return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title': return a.title.localeCompare(b.title);
        default: return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
    return filtered;
  }, [blogPosts, selectedCategory, selectedYear, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedYear('all');
    setSortBy('date-desc');
  };

  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
  };

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ VI</span>
            <span className="meta-label text-foreground/60 block">{t('blog.title')}</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">Field</span>
              <br />
              notes.
            </h2>
            <p className="meta-label text-foreground/60 mt-6">
              {filteredAndSortedPosts.length} of {blogPosts.length} entries
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-12 gap-8 mb-12"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( Filter Index )</span>
          </div>
          <div className="lg:col-span-9">
            <BlogFilter
              categories={categories}
              years={years}
              selectedCategory={selectedCategory}
              selectedYear={selectedYear}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onYearChange={setSelectedYear}
              onSortChange={setSortBy}
              onReset={handleReset}
            />
          </div>
        </motion.div>

        {/* Posts — editorial index */}
        <div className="border-t border-foreground/30">
          {filteredAndSortedPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group grid grid-cols-12 gap-4 py-8 border-b border-foreground/15 hover:bg-foreground/5 transition-colors"
            >
              <div className="col-span-2 sm:col-span-1 meta-label text-foreground/40 pt-2">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="col-span-10 sm:col-span-2 meta-label text-foreground/60 pt-2">
                {formatDate(post.date)}
              </div>
              <div className="col-span-12 sm:col-span-6">
                <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight group-hover:italic transition-all mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed max-w-xl">
                  {post.description}
                </p>
              </div>
              <div className="col-span-6 sm:col-span-2 meta-label text-foreground/60 pt-2">
                {post.category} · {post.readTime}
              </div>
              <div className="col-span-6 sm:col-span-1 flex justify-end items-start pt-2">
                <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground group-hover:rotate-12 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>

        {filteredAndSortedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-display text-2xl text-foreground/70 italic mb-4">{t('blog.noResults')}</p>
            <Button onClick={handleReset} variant="outline" className="rounded-none border-foreground">
              {t('blog.clearFilters')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
