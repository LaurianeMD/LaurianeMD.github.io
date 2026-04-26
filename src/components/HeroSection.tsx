import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail/*, GraduationCap, BookOpen*/ } from 'lucide-react'; // GraduationCap & BookOpen à réactiver quand tu seras chercheuse
import portrait from '@/assets/portrait.jpg';

const HeroSection = () => {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  const nameParts = t('hero.name').split(' ');
  const firstWord = nameParts[0] || 'Cognitive';
  const secondWord = nameParts.slice(1).join(' ') || 'Architecture';

  return (
    <section className="relative min-h-screen bg-paper text-ink overflow-hidden flex flex-col">
      <div className="grain-overlay" />

      <div className="relative z-10 flex-1 flex flex-col px-6 sm:px-10 lg:px-16 pt-28 lg:pt-32 pb-12">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-meta text-ink/60 flex flex-wrap items-center justify-between gap-4 border-b border-ink/15 pb-6 mb-12 lg:mb-20"
        >
          <span className="flex items-center gap-3">
            <span className="status-dot" />
            Issue N° 01 — Open Folio
          </span>
          <span className="hidden md:block">
            {t('hero.titles.dataScientist')} · {t('hero.titles.aiEngineer')}
          </span>
          <span className="tabular-nums">
            {new Date().getFullYear()}
          </span>
        </motion.div>

        {/* XXL Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif uppercase font-medium text-balance leading-[0.82] tracking-[-0.04em]"
        >
          <span
            className="block"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)' }}
          >
            {firstWord}
          </span>
          <span
            className="block italic font-light ml-[10vw] sm:ml-[14vw] lg:ml-[18vw] mt-1 lg:mt-2 normal-case"
            style={{ fontSize: 'clamp(4rem, 12.5vw, 14rem)' }}
          >
            {secondWord}
          </span>
        </motion.h1>

        {/* Asymmetric body grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mt-16 lg:mt-24 relative">
          {/* Thesis (left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="col-span-12 lg:col-span-4 lg:col-start-1 lg:pt-32 z-10"
          >
            <p className="font-meta text-ink/60 mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-ink/30" />
              Thesis Statement
            </p>
            <p className="font-serif text-xl sm:text-2xl leading-snug text-pretty indent-10 text-ink">
              {t('hero.description')}
            </p>

            {/* Editorial CTA row */}
            <div className="mt-12 flex flex-col gap-5 font-meta">
              <Link
                to="/projects"
                className="group flex items-center justify-between border-b border-ink/30 hover:border-ink pb-3 transition-colors"
              >
                <span>{t('hero.viewWork')}</span>
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
              <a
                href="/cv.pdf"
                download
                className="group flex items-center justify-between border-b border-ink/30 hover:border-ink pb-3 transition-colors"
              >
                <span>{t('hero.downloadCV')}</span>
                <span className="transition-transform group-hover:translate-y-1">↓</span>
              </a>
              {/* Publications — à activer quand tu seras chercheuse
              <Link
                to="/publications"
                className="group flex items-center justify-between border-b border-ink/30 hover:border-ink pb-3 transition-colors"
              >
                <span>{t('hero.publications')}</span>
                <span className="transition-transform group-hover:translate-x-2">↗</span>
              </Link>
              */}
            </div>
          </motion.div>

          {/* Plate (right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="col-span-12 lg:col-span-7 lg:col-start-6 relative z-0"
          >
            <div className="relative">
              <button
                type="button"
                onClick={() => setRevealed((v) => !v)}
                aria-pressed={revealed}
                aria-label={revealed ? 'Show grayscale portrait' : 'Reveal color portrait'}
                data-revealed={revealed}
                className="group relative block w-full text-left bg-highlight outline outline-1 outline-ink/15 -outline-offset-1 overflow-hidden cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-ink"
              >
                {/* Base portrait — B&W editorial */}
                <img
                  src={portrait}
                  alt={t('hero.name')}
                  className="w-full aspect-[4/5] object-cover object-top grayscale contrast-110 mix-blend-multiply opacity-90 dark:mix-blend-screen dark:opacity-80 transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105 group-data-[revealed=true]:opacity-0 group-data-[revealed=true]:scale-105"
                />

                {/* Color reveal portrait */}
                <img
                  src={portrait}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full aspect-[4/5] object-cover object-top opacity-0 scale-110 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 group-data-[revealed=true]:opacity-100 group-data-[revealed=true]:scale-100"
                />

                {/* Scanline accents */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-data-[revealed=true]:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 right-0 h-px bg-ink/40 origin-left scale-x-0 group-hover:scale-x-100 group-data-[revealed=true]:scale-x-100 transition-transform duration-700 delay-100" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/40 origin-right scale-x-0 group-hover:scale-x-100 group-data-[revealed=true]:scale-x-100 transition-transform duration-700 delay-100" />
                </div>

                {/* Meta tag */}
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.2em] uppercase text-ink bg-paper/80 backdrop-blur-sm px-2 py-1 opacity-0 group-hover:opacity-100 group-data-[revealed=true]:opacity-100 transition-opacity duration-500">
                  [ LIVE_FEED ]
                </div>

                {/* Tap hint — mobile only, hidden once revealed */}
                <div className="md:hidden absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.2em] uppercase text-ink bg-paper/80 backdrop-blur-sm px-2 py-1 opacity-100 group-data-[revealed=true]:opacity-0 transition-opacity duration-500 pointer-events-none">
                  [ TAP_TO_REVEAL ]
                </div>
              </button>

              {/* Vertical figure label — outside button, no clipping */}
              <div
                className="hidden md:block absolute -left-16 lg:-left-20 bottom-32 fig-label text-ink whitespace-nowrap z-10 pointer-events-none"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                ( Fig. 01 ) — Parametric Self-Portrait
              </div>

              {/* Oversized numeral — outside button, fully visible */}
              <div className="absolute -bottom-6 sm:-bottom-10 lg:-bottom-12 left-2 sm:-left-8 lg:-left-16 text-[5.5rem] sm:text-[8rem] lg:text-[10rem] leading-none font-serif font-medium tracking-tighter italic bg-paper px-3 sm:px-5 py-1 sm:py-2 text-ink z-10 pointer-events-none">
                01.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip — connect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-32 lg:mt-48 pt-8 border-t border-ink/15 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="font-meta text-ink/60 mb-3">Correspondence</p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/LaurianeMD', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/lauriane-mbagdje-dorenan', label: 'LinkedIn' },
                // { icon: GraduationCap, href: 'https://scholar.google.com/citations?user=YOUR_ID', label: 'Scholar' }, // À activer quand tu seras chercheuse
                // { icon: BookOpen, href: 'https://orcid.org/0000-0000-0000-0000', label: 'ORCID' }, // À activer quand tu seras chercheuse
                { icon: Mail, href: 'mailto:dmbagdjelauriane@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-meta text-ink hover:text-ink/60 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="flex items-center gap-3 font-meta text-ink/60"
          >
            Continue
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
