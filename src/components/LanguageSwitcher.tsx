import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="font-meta border border-foreground/20 h-9 inline-flex items-center px-2 gap-1 rounded-none"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-1 transition-colors ${
          language === 'en' ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-foreground/40" aria-hidden="true">·</span>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        className={`px-1 transition-colors ${
          language === 'fr' ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
