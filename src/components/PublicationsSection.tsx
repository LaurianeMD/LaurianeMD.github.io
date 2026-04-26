import React, { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, FileText, Code2, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  publications,
  publicationTypeLabels,
  SELF_AUTHOR,
  type PublicationType,
} from '@/data/publications';

const TYPE_FILTERS: (PublicationType | 'all')[] = [
  'all',
  'journal',
  'conference',
  'preprint',
  'workshop',
  'thesis',
];

const PublicationsSection: React.FC = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [typeFilter, setTypeFilter] = useState<PublicationType | 'all'>('all');
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all');

  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const filtered = useMemo(() => {
    return publications
      .filter((p) => (typeFilter === 'all' ? true : p.type === typeFilter))
      .filter((p) => (yearFilter === 'all' ? true : p.year === yearFilter))
      .sort((a, b) => b.year - a.year);
  }, [typeFilter, yearFilter]);

  const isFr = language === 'fr';

  const renderAuthors = (authors: string[]) =>
    authors.map((author, i) => {
      const isSelf = author === SELF_AUTHOR;
      return (
        <React.Fragment key={i}>
          <span className={isSelf ? 'font-semibold text-foreground underline decoration-foreground/30 underline-offset-4' : ''}>
            {author}
          </span>
          {i < authors.length - 1 && ', '}
        </React.Fragment>
      );
    });

  return (
    <section id="publications" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-16 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ VII</span>
            <span className="meta-label text-foreground/60 block">
              {isFr ? 'Publications' : 'Publications'}
            </span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">Selected</span>
              <br />
              works.
            </h2>
            <p className="meta-label text-foreground/60 mt-6">
              {filtered.length} {isFr ? 'sur' : 'of'} {publications.length}{' '}
              {isFr ? 'références' : 'entries'}
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid lg:grid-cols-12 gap-8 mb-12"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">
              ( {isFr ? 'Index' : 'Filter Index'} )
            </span>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <div className="flex flex-wrap gap-2">
              {TYPE_FILTERS.map((t) => {
                const active = typeFilter === t;
                const label =
                  t === 'all'
                    ? isFr
                      ? 'Tous'
                      : 'All'
                    : publicationTypeLabels[t][isFr ? 'fr' : 'en'];
                return (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`meta-label px-3 py-1.5 border transition-colors ${
                      active
                        ? 'bg-foreground text-background border-foreground'
                        : 'border-foreground/30 text-foreground/70 hover:border-foreground hover:text-foreground'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setYearFilter('all')}
                className={`meta-label px-3 py-1.5 border transition-colors ${
                  yearFilter === 'all'
                    ? 'bg-foreground text-background border-foreground'
                    : 'border-foreground/30 text-foreground/70 hover:border-foreground'
                }`}
              >
                {isFr ? 'Toutes années' : 'All years'}
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYearFilter(y)}
                  className={`meta-label px-3 py-1.5 border transition-colors tabular-nums ${
                    yearFilter === y
                      ? 'bg-foreground text-background border-foreground'
                      : 'border-foreground/30 text-foreground/70 hover:border-foreground'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Publication list — academic citation style */}
        <div className="border-t border-foreground/30">
          {filtered.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.04 * index }}
              className="grid grid-cols-12 gap-4 py-8 border-b border-foreground/15 group hover:bg-foreground/5 transition-colors"
            >
              <div className="col-span-2 sm:col-span-1 meta-label text-foreground/40 pt-2 tabular-nums">
                [{String(filtered.length - index).padStart(2, '0')}]
              </div>

              <div className="col-span-10 sm:col-span-2 pt-2 space-y-1">
                <div className="meta-label text-foreground/60 tabular-nums">
                  {pub.year}
                </div>
                <div className="meta-label text-foreground/40 uppercase">
                  {publicationTypeLabels[pub.type][isFr ? 'fr' : 'en']}
                </div>
                {pub.status && pub.status !== 'published' && (
                  <div className="meta-label text-foreground/50 italic">
                    {pub.status === 'under-review'
                      ? isFr
                        ? 'en révision'
                        : 'under review'
                      : pub.status === 'accepted'
                      ? isFr
                        ? 'accepté'
                        : 'accepted'
                      : pub.status}
                  </div>
                )}
              </div>

              <div className="col-span-12 sm:col-span-7 space-y-2">
                <h3 className="font-display text-xl sm:text-2xl text-foreground leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {renderAuthors(pub.authors)}
                </p>
                <p className="text-sm italic text-foreground/60">
                  {pub.venue}
                  {pub.volume && `, ${pub.volume}`}
                  {pub.pages && `, pp. ${pub.pages}`}
                  {pub.arxiv && ` · arXiv:${pub.arxiv}`}
                  {pub.doi && ` · doi:${pub.doi}`}
                </p>
                {pub.keywords && pub.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {pub.keywords.map((k) => (
                      <span
                        key={k}
                        className="meta-label text-foreground/50 border border-foreground/15 px-2 py-0.5"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="col-span-12 sm:col-span-2 flex sm:flex-col items-start gap-3 pt-2">
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-label text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" /> PDF
                  </a>
                )}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-label text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> DOI
                  </a>
                )}
                {pub.arxiv && (
                  <a
                    href={`https://arxiv.org/abs/${pub.arxiv}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-label text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" /> arXiv
                  </a>
                )}
                {pub.codeUrl && (
                  <a
                    href={pub.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta-label text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" /> Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-display text-2xl text-foreground/70 italic">
              {isFr
                ? 'Aucune publication ne correspond à ces filtres.'
                : 'No publications match these filters.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
