import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail/*, GraduationCap, BookOpen*/ } from 'lucide-react'; // GraduationCap & BookOpen à réactiver quand tu seras chercheuse

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/about', label: t('nav.about') },
    { path: '/skills', label: t('nav.skills') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/experience', label: t('nav.experience') },
    { path: '/education', label: t('nav.education') },
    { path: '/blog', label: t('nav.blog') },
    // { path: '/publications', label: t('nav.publications') }, // À activer quand tu seras chercheuse
    { path: '/contact', label: t('nav.contact') },
  ];

  // TODO: replace placeholder URLs with real profile links
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/LaurianeMD', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/lauriane-mbagdje-dorenan', icon: Linkedin },
    // { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=YOUR_ID', icon: GraduationCap }, // À activer quand tu seras chercheuse
    // { name: 'ORCID', href: 'https://orcid.org/0000-0000-0000-0000', icon: BookOpen }, // À activer quand tu seras chercheuse
    { name: 'Email', href: 'mailto:dmbagdjelauriane@gmail.com', icon: Mail },
  ];

  return (
    <footer className="relative bg-paper text-ink border-t border-ink/15">
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        {/* Editorial CTA */}
        <div className="grid grid-cols-12 gap-x-6 mb-24 lg:mb-32">
          <div className="col-span-12 lg:col-span-3">
            <p className="font-meta text-ink/60 flex items-center gap-4">
              <span className="w-8 h-px bg-ink/30" />
              Colophon
            </p>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tight text-balance text-ink">
              Let's correspond.
              <span className="block italic font-light mt-2">{t('footer.connect')}</span>
            </h2>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-4 font-meta text-ink border-b border-ink pb-2 group"
            >
              {t('nav.contactMe')}
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>

        {/* Index strip */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 border-t border-ink/15 pt-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-meta text-ink/60 mb-4">{t('footer.title')}</p>
            <p className="font-serif text-lg leading-relaxed text-ink/80 max-w-xs text-pretty">
              {t('footer.description')}
            </p>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="font-meta text-ink/60 mb-4">{t('footer.quickLinks')}</p>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="font-serif text-lg text-ink hover:italic transition-all"
                  >
                    <span className="font-meta text-ink/40 mr-3 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="font-meta text-ink/60 mb-4">Correspondence</p>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-ink hover:italic inline-flex items-center gap-3 transition-all group"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.name}
                    <span className="font-meta text-ink/40 group-hover:text-ink transition-colors">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-20 pt-6 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-3 font-meta text-ink/50">
          <div className="flex flex-col gap-1">
            <p className="text-amber-500/80 italic text-xs">🚧 Site under construction — more content coming soon</p>
            <p>© {currentYear} {t('hero.name')} — {t('footer.copyright')}</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-ink transition-colors inline-flex items-center gap-2"
            aria-label={t('footer.backToTop')}
          >
            <span aria-hidden="true">↑</span>
            {t('footer.backToTop').replace(/^[↑\s]+/, '')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
