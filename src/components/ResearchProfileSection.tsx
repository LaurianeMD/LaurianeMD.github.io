import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Github, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// TODO: Replace placeholder URLs and IDs with real academic profile data.
const ACADEMIC_PROFILES = [
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    handle: 'YOUR_SCHOLAR_ID',
    href: 'https://scholar.google.com/citations?user=YOUR_ID',
  },
  {
    icon: BookOpen,
    label: 'ORCID',
    handle: '0000-0000-0000-0000',
    href: 'https://orcid.org/0000-0000-0000-0000',
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: '@your-username',
    href: 'https://github.com/your-username',
  },
];

const ResearchProfileSection: React.FC = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isFr = language === 'fr';

  // TODO: customize research areas to your actual focus.
  const interests = isFr
    ? [
        'Apprentissage statistique',
        'Interprétabilité des modèles',
        'Robustesse & généralisation',
        'IA appliquée à la santé',
        'Apprentissage économe en données',
      ]
    : [
        'Statistical learning',
        'Model interpretability',
        'Robustness & generalization',
        'AI for healthcare',
        'Data-efficient learning',
      ];

  // TODO: replace with real affiliation / position.
  const affiliation = {
    role: isFr ? 'Chercheuse en apprentissage automatique' : 'Researcher in Machine Learning',
    lab: '[Lab Name]',
    institution: '[Institution / University]',
    location: '[City, Country]',
  };

  return (
    <section id="research-profile" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-16 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ I·b</span>
            <span className="meta-label text-foreground/60 block">
              {isFr ? 'Profil de recherche' : 'Research profile'}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">{isFr ? 'Lignes' : 'Lines'}</span>
              <br />
              {isFr ? 'de recherche.' : 'of inquiry.'}
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Affiliation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 space-y-4"
          >
            <span className="meta-label text-foreground/60 block">
              ( {isFr ? 'Affiliation' : 'Affiliation'} )
            </span>
            <p className="font-display text-2xl text-foreground leading-tight">
              {affiliation.role}
            </p>
            <div className="space-y-1 text-sm text-foreground/70">
              <p className="italic">{affiliation.lab}</p>
              <p>{affiliation.institution}</p>
              <p className="flex items-center gap-2 meta-label text-foreground/60 pt-2">
                <MapPin className="w-3.5 h-3.5" />
                {affiliation.location}
              </p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-8"
          >
            <span className="meta-label text-foreground/60 block mb-6">
              ( {isFr ? "Centres d'intérêt" : 'Research interests'} )
            </span>
            <ul className="grid sm:grid-cols-2 gap-x-8">
              {interests.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-foreground/15 py-4 flex items-baseline gap-4"
                >
                  <span className="meta-label text-foreground/40 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Academic identifiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid lg:grid-cols-12 gap-8 pt-12 border-t border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">
              ( {isFr ? 'Identifiants' : 'Identifiers'} )
            </span>
          </div>
          <div className="lg:col-span-9 grid sm:grid-cols-3 gap-px bg-foreground/15 border border-foreground/15">
            {ACADEMIC_PROFILES.map(({ icon: Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background hover:bg-foreground hover:text-background px-5 py-5 transition-colors"
              >
                <div className="flex items-center gap-2 meta-label text-foreground/60 group-hover:text-background/70 mb-2">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
                <div className="font-display text-lg break-all">{handle}</div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchProfileSection;
