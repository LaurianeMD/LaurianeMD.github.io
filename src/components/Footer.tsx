
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lauriane-mbagdje-dorenan',
      icon: '💼'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/LaurianeMD',
      icon: '💻'
    },
    {
      name: 'Email',
      href: 'mailto:dmbagdjelauriane@gmail.com',
      icon: '📧'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-width">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              {t('footer.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              {[t('nav.about'), t('nav.skills'), t('nav.projects'), t('nav.experience'), t('nav.education'), t('nav.blog'), t('nav.contact')].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const sections = ['about', 'skills', 'projects', 'experience', 'education', 'blog', 'contact'];
                    const element = document.getElementById(sections[index]);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-tech-blue transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button
              onClick={scrollToTop}
              className="mt-6 bg-tech-blue hover:bg-tech-purple transition-colors px-4 py-2 rounded text-sm"
            >
              {t('footer.backToTop')}
            </button>
          </div>
        </div>
        
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400 space-y-2">
              {/* 🚧 Under construction notice */}
              <p className="italic text-yellow-400">
                🚧 This site is under construction — more content coming soon!
              </p>

              <p>
                © {currentYear} {t('hero.name')}. {t('footer.copyright')}
              </p>
            </div>


      </div>
    </footer>
  );
};

export default Footer;
