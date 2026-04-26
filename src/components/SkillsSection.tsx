import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';

const SkillsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: [
        { name: 'Python', years: '●●●●○' },
        { name: 'R', years: '●●●○○' },
        { name: 'SQL', years: '●●●○○' },
        { name: 'Scala', years: '●●○○○' },
      ],
    },
    {
      title: t('skills.ml'),
      skills: [
        { name: 'Pandas / NumPy', years: '●●●●○' },
        { name: 'Scikit-learn', years: '●●●●○' },
        { name: 'Keras / PyTorch', years: '●●●●○' },
        { name: 'Matplotlib / Seaborn', years: '●●●●○' },
      ],
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', years: '●●●●●' },
        { name: 'Jupyter / VS Code', years: '●●●●●' },
        { name: 'Docker', years: '●●●○○' },
        { name: 'Tableau / Power BI', years: '●●●●○' },
        { name: 'Jira', years: '●●●●○' },
      ],
    },
    {
      title: t('skills.soft'),
      skills: [
        { name: 'Team Collaboration', years: '●●●●●' },
        { name: 'Communication', years: '●●●●○' },
        { name: 'Project Management', years: '●●●●○' },
        { name: 'Adaptability', years: '●●●●●' },
        { name: 'Problem Solving', years: '●●●●○' },
      ],
    },
  ];

  const languages = [
    { name: 'French', level: 'C1 — Advanced' },
    { name: 'English', level: 'B2 — Upper Intermediate' },
  ];

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ II</span>
            <span className="meta-label text-foreground/60 block">{t('skills.title')}</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">{t('skills.subtitle').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              {t('skills.subtitle').split(' ').slice(2).join(' ')}
            </h2>
          </div>
        </motion.div>

        {/* Typographic skill tables */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-3">
                <span className="meta-label text-foreground/60 block mb-3">
                  ( {String(idx + 1).padStart(2, '0')} )
                </span>
                <h3 className="font-display text-2xl text-foreground leading-tight">{category.title}</h3>
              </div>
              <div className="lg:col-span-9">
                <div className="border-t border-foreground/30">
                  {/* Mono header for tech stack */}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-3 border-b border-foreground/10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/60 mr-2">
                      [ SCHEMA_TECH ]
                    </span>
                  </div>
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group grid grid-cols-12 gap-4 py-4 border-b border-foreground/15 hover:bg-foreground/5 transition-colors"
                    >
                      <div className="col-span-1 meta-label text-foreground/40 pt-1">
                        {String(sIdx + 1).padStart(2, '0')}
                      </div>
                      <div className="col-span-8 sm:col-span-9 font-mono text-base sm:text-lg text-foreground group-hover:italic transition-all">
                        {skill.name}
                      </div>
                      <div className="col-span-3 sm:col-span-2 font-mono text-xs text-foreground/60 text-right pt-1">
                        {skill.years}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid lg:grid-cols-12 gap-8 mt-20 pt-12 border-t border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-3">( {t('skills.languages')} )</span>
          </div>
          <div className="lg:col-span-9 grid sm:grid-cols-3 gap-8">
            {languages.map((lang, i) => (
              <div key={i} className="border-l border-foreground/20 pl-4">
                <div className="font-display text-3xl text-foreground italic">{lang.name}</div>
                <div className="meta-label text-foreground/60 mt-2">{lang.level}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
