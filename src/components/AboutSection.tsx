import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { Download, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import portrait from '@/assets/portrait.jpg';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '02+', label: t('about.stats.years') },
    { value: '08+', label: t('about.stats.projects') },
    { value: '15+', label: t('about.stats.technologies') },
    { value: '02', label: t('about.stats.languages') },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ I</span>
            <span className="meta-label text-foreground/60 block">{t('about.title')}</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">{t('about.subtitle').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              {t('about.subtitle').split(' ').slice(2).join(' ')}
            </h2>
          </div>
        </motion.div>

        {/* Body — 3-col sidebar / 9-col content */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <span className="meta-label text-foreground/60 block mb-3">( {t('about.journey.title')} )</span>
            <div className="relative bg-foreground/5 outline outline-1 outline-foreground/15 -outline-offset-1 overflow-hidden">
              <img
                src={portrait}
                alt={t('hero.name')}
                className="w-full aspect-[4/5] object-cover object-top grayscale contrast-110 mix-blend-multiply opacity-90 dark:mix-blend-screen dark:opacity-80"
              />
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase text-foreground bg-background/80 backdrop-blur-sm px-2 py-1">
                [ FIG_02 ]
              </div>
            </div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/50">
              ( Fig. 02 ) — Portrait, studio
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-9 space-y-6"
          >
            <p className="font-display text-2xl sm:text-3xl leading-[1.3] text-foreground">
              {t('about.journey.description')}
            </p>
            <p className="text-base leading-relaxed text-foreground/70 max-w-2xl">
              {t('about.values.description')}
            </p>
            <p className="text-base leading-relaxed text-foreground/70 max-w-2xl">
              {t('about.goals.description')}
            </p>
          </motion.div>
        </div>

        {/* Stats — typographic table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 py-12 border-y border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( {t('about.stats.title')} )</span>
          </div>
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-foreground/20 pl-4">
                <div className="font-display text-5xl lg:text-6xl font-medium text-foreground leading-none">{stat.value}</div>
                <div className="meta-label text-foreground/60 mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( {t('about.interests')} )</span>
          </div>
          <div className="lg:col-span-9 flex flex-wrap gap-3">
            {['Reading — AI in Healthcare & Personal Growth', 'Futuristic Documentaries', 'Fitness', 'Cooking', 'Graphic Design'].map((interest, i) => (
              <span key={i} className="border border-foreground/20 px-4 py-2 font-meta text-sm text-foreground/70 hover:border-foreground/60 transition-colors">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Community engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( {t('about.community')} )</span>
          </div>
          <div className="lg:col-span-9 grid sm:grid-cols-2 gap-6">
            {[
              { org: 'DIVAS in AI', role: 'Lead for Opportunities', period: 'Nov 2024 — Present', desc: 'Divas in AI is a global community empowering women and girls in artificial intelligence. As Lead for Opportunities, I curate and share grants, fellowships, calls for papers, and events with members.' },
              { org: 'ChadAI Women', role: 'Co-founder & General Coordinator', period: 'Oct 2025 — Present', desc: 'ChadAI Women is the first AI community dedicated to women in Chad. As Co-founder & General Coordinator, I drive strategy, training programs, partnerships, and outreach to expand AI education and opportunities for Chadian women.' },
              { org: 'Deep Learning Indaba', role: 'Volunteer', period: 'Sep 2024', desc: 'Volunteered at the annual African AI community gathering in Dakar, Senegal. Supported registration, badge distribution, and guided participants throughout the week-long event, helping facilitate sessions on modern AI concepts and practices.' },
              { org: 'AETES-SEN', role: 'Treasurer', period: 'Dec 2023 — Dec 2024', desc: 'AETES-SEN is a student organization supporting Chadian students in their academic and professional journey in Senegal. As Treasurer, I ensured financial management and transparency, and supervised financial flows during academic, cultural, and social events.' },
            ].map((item, i) => (
              <div key={i} className="border-l border-foreground/20 pl-4">
                <div className="font-display text-base font-medium text-foreground">{item.org}</div>
                <div className="meta-label text-foreground/50 mt-1">{item.role} · {item.period}</div>
                <p className="text-sm text-foreground/60 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Workshops & Teaching */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( {t('about.workshops')} )</span>
          </div>
          <div className="lg:col-span-9 space-y-4">
            {[
              { title: 'Introduction to Programming with Python', org: 'AfriAI Solutions', date: 'May 2025', participants: '50+' },
              { title: 'AI in Business Training', org: 'SSM Systèmes Médicaux', date: 'May 2025', participants: '20+' },
              { title: 'Python Data Manipulation Workshop', org: 'IndabaX Chad', date: 'Oct 2024', participants: '20+' },
            ].map((w, i) => (
              <div key={i} className="flex items-start justify-between border-b border-foreground/10 pb-4 last:border-0 last:pb-0">
                <div>
                  <div className="font-display text-base text-foreground">{w.title}</div>
                  <div className="meta-label text-foreground/50 mt-1">{w.org} · {w.date}</div>
                </div>
                <span className="meta-label text-foreground/60 shrink-0 ml-4">{w.participants} participants</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Documents — editorial CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( {t('about.documents')} )</span>
          </div>
          <div className="lg:col-span-9">
            <p className="text-base text-foreground/70 mb-8 max-w-xl">{t('about.documentsDesc')}</p>
            <div className="flex flex-col sm:flex-row gap-px bg-foreground/15 border border-foreground/15">
              <a href="/cv.pdf" download className="flex-1 group flex items-center justify-between bg-background hover:bg-foreground hover:text-background px-6 py-5 transition-colors">
                <span className="flex items-center gap-3">
                  <Download className="w-4 h-4" />
                  <span className="font-display text-xl">{t('hero.downloadCV')}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
              <Link to="/education" className="flex-1 group flex items-center justify-between bg-background hover:bg-foreground hover:text-background px-6 py-5 transition-colors">
                <span className="font-display text-xl">{t('hero.certificates')}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
