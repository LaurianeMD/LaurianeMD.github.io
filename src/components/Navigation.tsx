import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Strict, single source of truth for nav heights — keep in sync with page top padding.
// Page wrappers use: pt-16 lg:pt-20 (= NAV_H_MOBILE / NAV_H_DESKTOP).
const NAV_HEIGHT_CLASS = 'h-16 lg:h-20';
const MOBILE_MENU_OFFSET = 'top-16 lg:top-20';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close mobile menu when crossing to desktop breakpoint
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const navItems = [
    { id: '/', label: t('nav.home') },
    { id: '/about', label: t('nav.about') },
    { id: '/skills', label: t('nav.skills') },
    { id: '/projects', label: t('nav.projects') },
    { id: '/experience', label: t('nav.experience') },
    { id: '/education', label: t('nav.education') },
    { id: '/blog', label: t('nav.blog') },
    // { id: '/publications', label: t('nav.publications') }, // À activer quand tu seras chercheuse
    { id: '/contact', label: t('nav.contact') },
  ];

  const year = new Date().getFullYear();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-background/90 backdrop-blur-xl border-b ${
          isScrolled ? 'border-border shadow-sm' : 'border-border/60'
        }`}
        aria-label="Primary"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`flex items-center justify-between gap-4 ${NAV_HEIGHT_CLASS}`}>
            {/* Left — name + meta */}
            <Link to="/" className="group flex items-baseline gap-3 min-w-0 flex-shrink">
              <span className="font-display text-lg lg:text-xl italic font-medium tracking-tight text-foreground whitespace-nowrap">
                {t('hero.name')}
              </span>
              <span className="hidden xl:inline meta-label text-muted-foreground whitespace-nowrap">
                — Vol. 04 / {year}
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const active = location.pathname === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      to={item.id}
                      className={`relative meta-label transition-colors hover:text-foreground ${
                        active ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 right-0 h-px bg-foreground"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right — tools */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <ThemeToggle />
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-9 h-9 border border-border/40 hover:border-border text-foreground transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-x-0 bottom-0 ${MOBILE_MENU_OFFSET} z-40 bg-background overflow-y-auto lg:hidden`}
          >
            <div className="max-w-[1600px] mx-auto px-6 pt-8 pb-16">
              <div className="meta-label text-muted-foreground mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-border" />
                Index
              </div>
              <ul className="grid grid-cols-1">
                {navItems.map((item, i) => {
                  const active = location.pathname === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="border-b border-border"
                    >
                      <Link
                        to={item.id}
                        className="group flex items-baseline justify-between py-4"
                      >
                        <span className="flex items-baseline gap-5">
                          <span className="meta-label text-muted-foreground tabular-nums">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`font-display text-3xl sm:text-4xl tracking-tight transition-all ${
                              active
                                ? 'italic text-foreground'
                                : 'text-foreground group-hover:italic group-hover:translate-x-2'
                            }`}
                          >
                            {item.label}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="meta-label text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          ↗
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-10 meta-label text-muted-foreground flex justify-between">
                <span>Vol. 04 — {year}</span>
                <span>{t('hero.name')}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
