import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.blog': 'Blog',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.contactMe': 'Contact Me',
    'nav.portfolio': 'Portfolio',

    // Hero Section
    'hero.name': 'Lauriane Mbagdje Dorenan',
    'hero.titles.dataScientist': 'Data Scientist',
    'hero.titles.aiEngineer': 'AI Engineer',
    'hero.titles.fullStackDeveloper': 'Full Stack Developer',
    'hero.titles.mlEngineer': 'Machine Learning Engineer',
    'hero.description': 'I am passionate about leveraging Artificial Intelligence to solve real-world challenges, especially in healthcare and underserved communities. With a background bridging Biomedical Engineering and AI, my work spans NLP, computer vision, and generative models — building intelligent systems that improve lives, support decision-making, and make technology accessible where it matters most.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.downloadCV': 'Download CV',
    'hero.certificates': 'Certificates',
    'hero.publications': 'Publications',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Learn about my journey, values, and professional aspirations',
    'about.journey.title': 'My Journey',
    'about.journey.description': "My journey began with a Bachelor's in Biomedical Engineering, where I built a foundation in healthcare systems and medical devices. Working as a Biomedical Equipment Technician gave me first-hand insight into the real challenges of healthcare. This experience sparked my curiosity for technology and data-driven solutions, leading me to pursue a Master's in Artificial Intelligence at the Dakar Institute of Technology. Today, I bridge these two worlds — healthcare and AI — by working on projects that apply AI where it matters most.",
    'about.values.title': 'My Values',
    'about.values.description': "I value ethical and inclusive AI, driven by collaboration and knowledge sharing. I believe technology should serve people first, especially in communities where access to innovation is limited. Continuous learning and responsibility guide my work as I strive to use AI for positive societal impact.",
    'about.goals.title': 'Career Goals',
    'about.goals.description': "I aim to grow as an AI Engineer dedicated to building impactful solutions that improve lives and strengthen communities. Beyond technology, my mission is to mentor future women in tech and help shape a world where AI drives ethical innovation and lasting change.",
    'about.stats.title': 'Key Numbers',
    'about.stats.years': 'Years Experience',
    'about.stats.projects': 'Projects Delivered',
    'about.stats.technologies': 'Technologies',
    'about.stats.languages': 'Languages',
    'about.documents': 'Documents',
    'about.documentsDesc': 'Download my CV or view my certifications.',
    'about.interests': 'Interests',
    'about.community': 'Community',
    'about.workshops': 'Workshops & Teaching',
    'certificates.title': 'Certifications & Credentials',
    'certificates.subtitle': 'Professional certifications demonstrating expertise in cloud, AI, and data engineering.',

    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'An overview of my technical expertise and professional capabilities',
    'skills.programming': 'Programming Languages',
    'skills.ml': 'Machine Learning & AI',
    'skills.tools': 'Tools & Platforms',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',

    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Explore my most impactful work and the results achieved',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    'projects.filters': 'Filters',
    'projects.category': 'Category',
    'projects.technology': 'Technology',
    'projects.allCategories': 'All Categories',
    'projects.allTechnologies': 'All Technologies',
    'projects.clearFilters': 'Clear Filters',
    'projects.showing': 'Showing',
    'projects.of': 'of',
    'projects.projects': 'projects',
    'projects.noResults': 'No projects found matching your criteria',
    'projects.stats.totalProjects': 'Total Projects',
    'projects.stats.technologies': 'Technologies',
    'projects.stats.categories': 'Categories',
    'projects.stats.featured': 'Featured',

    // Blog Section
    'blog.title': 'Blog & Publications',
    'blog.subtitle': 'Sharing insights, research findings, and technical knowledge with the community',
    'blog.readTime': 'read',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Posts',
    'blog.filters': 'Filters',
    'blog.category': 'Category',
    'blog.year': 'Year',
    'blog.sortBy': 'Sort By',
    'blog.allCategories': 'All Categories',
    'blog.allYears': 'All Years',
    'blog.selectYear': 'Select Year',
    'blog.newestFirst': 'Newest First',
    'blog.oldestFirst': 'Oldest First',
    'blog.alphabetical': 'Alphabetical',
    'blog.clearFilters': 'Clear Filters',
    'blog.showing': 'Showing',
    'blog.of': 'of',
    'blog.posts': 'posts',
    'blog.noResults': 'No posts found matching your criteria',
    'blog.stats.totalPosts': 'Total Posts',
    'blog.stats.categories': 'Categories',
    'blog.stats.publications': 'Publications',
    'blog.stats.thisYear': 'This Year',
    'blog.categories.ml': 'Machine Learning',
    'blog.categories.ai': 'Artificial Intelligence',
    'blog.categories.research': 'Research',
    'blog.categories.tutorial': 'Tutorial',
    'blog.categories.conference': 'Conference',
    'blog.categories.data': 'Data Science',
    'blog.posts.medium.title': 'From CVs to Smart Hiring: Building an AI-Powered Resume Evaluator with Gemini',
    'blog.posts.medium.description': 'A practical walkthrough of building an AI-powered resume evaluator using Google Gemini — from parsing CVs to generating structured, actionable feedback for hiring workflows.',

    // Experience Section
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey and the challenges I have tackled',
    'experience.achievements': 'Key Achievements',

    // Education Section
    'education.title': 'Education & Certifications',
    'education.subtitle': 'My academic background and professional certifications',
    'education.academic': 'Academic Education',
    'education.certifications': 'Professional Certifications',
    'education.viewCertificate': 'View Certificate',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's discuss your projects and explore collaboration opportunities",
    'contact.info': 'Contact Information',
    'contact.form.title': 'Send Me a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your full name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subjectPlaceholder': "What's this about?",
    'contact.form.messagePlaceholder': 'Tell me about your project or idea...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.successDesc': "Thank you for reaching out. I'll get back to you soon.",
    'contact.availability': "I'm always open to interesting opportunities and meaningful collaborations. Whether you have a project in mind, want to discuss potential partnerships, or just want to connect, feel free to reach out!",

    // Footer
    'footer.title': 'Lauriane Mbagdje Dorenan',
    'footer.description': 'Data Scientist and AI Engineer passionate about building intelligent systems that create real-world impact, especially in healthcare and underserved communities.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect With Me',
    'footer.backToTop': 'Back to Top',
    'footer.copyright': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.blog': 'Blog',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    'nav.contactMe': 'Me contacter',
    'nav.portfolio': 'Portfolio',

    // Hero Section
    'hero.name': 'Lauriane Mbagdje Dorenan',
    'hero.titles.dataScientist': 'Data Scientist',
    'hero.titles.aiEngineer': 'Ingénieure IA',
    'hero.titles.fullStackDeveloper': 'Développeuse Full Stack',
    'hero.titles.mlEngineer': 'Ingénieure Machine Learning',
    'hero.description': "Passionnée par l'utilisation de l'Intelligence Artificielle pour résoudre des défis concrets, notamment dans le domaine de la santé et des communautés sous-desservies. Avec un parcours alliant Génie Biomédical et IA, mes travaux couvrent le NLP, la vision par ordinateur et les modèles génératifs — pour construire des systèmes intelligents qui améliorent les vies et rendent la technologie accessible là où elle compte le plus.",
    'hero.viewWork': 'Voir mes projets',
    'hero.getInTouch': 'Me contacter',
    'hero.downloadCV': 'Télécharger CV',
    'hero.certificates': 'Certificats',
    'hero.publications': 'Publications',

    // About Section
    'about.title': 'À propos de moi',
    'about.subtitle': 'Découvrez mon parcours, mes valeurs et mes aspirations professionnelles',
    'about.journey.title': 'Mon Parcours',
    'about.journey.description': "Mon parcours a commencé en génie biomédical, où j'ai travaillé comme technicienne en équipements biomédicaux et acquis une vision concrète des défis des systèmes de santé. Cette expérience a éveillé ma curiosité pour la technologie et les solutions basées sur les données, me poussant à poursuivre un Master en Intelligence Artificielle au Dakar Institute of Technology. Aujourd'hui, je relie ces deux mondes — santé et IA — en travaillant sur des projets qui appliquent l'IA là où elle compte le plus.",
    'about.values.title': 'Mes Valeurs',
    'about.values.description': "Je valorise une IA éthique et inclusive, portée par la collaboration et le partage des connaissances. Je crois que la technologie doit servir les personnes en priorité, surtout dans les communautés où l'accès à l'innovation est limité. L'apprentissage continu et la responsabilité guident mon travail.",
    'about.goals.title': 'Objectifs de Carrière',
    'about.goals.description': "Je souhaite évoluer en tant qu'ingénieure IA dédiée à construire des solutions à impact qui améliorent les vies et renforcent les communautés. Au-delà de la technologie, ma mission est de mentorer les futures femmes dans la tech et de contribuer à un monde où l'IA favorise une innovation éthique et durable.",
    'about.stats.title': 'Chiffres Clés',
    'about.stats.years': "Années d'expérience",
    'about.stats.projects': 'Projets livrés',
    'about.stats.technologies': 'Technologies',
    'about.stats.languages': 'Langues',
    'about.documents': 'Documents',
    'about.documentsDesc': 'Téléchargez mon CV ou consultez mes certifications.',
    'about.interests': "Centres d'intérêt",
    'about.community': 'Engagement',
    'about.workshops': 'Ateliers & Enseignement',
    'certificates.title': 'Certifications & Accréditations',
    'certificates.subtitle': "Certifications professionnelles démontrant une expertise en cloud, IA et ingénierie des données.",

    // Skills Section
    'skills.title': 'Compétences',
    'skills.subtitle': 'Un aperçu de mon expertise technique et de mes capacités professionnelles',
    'skills.programming': 'Langages de Programmation',
    'skills.ml': 'Machine Learning & IA',
    'skills.tools': 'Outils & Plateformes',
    'skills.soft': 'Compétences Relationnelles',
    'skills.languages': 'Langues',

    // Projects Section
    'projects.title': 'Projets',
    'projects.subtitle': 'Explorez mes travaux les plus impactants et les résultats obtenus',
    'projects.viewCode': 'Voir le code',
    'projects.liveDemo': 'Démo en direct',
    'projects.filters': 'Filtres',
    'projects.category': 'Catégorie',
    'projects.technology': 'Technologie',
    'projects.allCategories': 'Toutes les catégories',
    'projects.allTechnologies': 'Toutes les technologies',
    'projects.clearFilters': 'Effacer les filtres',
    'projects.showing': 'Affichage de',
    'projects.of': 'sur',
    'projects.projects': 'projets',
    'projects.noResults': 'Aucun projet trouvé correspondant à vos critères',
    'projects.stats.totalProjects': 'Projets totaux',
    'projects.stats.technologies': 'Technologies',
    'projects.stats.categories': 'Catégories',
    'projects.stats.featured': 'Mis en avant',

    // Blog Section
    'blog.title': 'Blog & Publications',
    'blog.subtitle': "Partage d'insights, de résultats de recherche et de connaissances techniques avec la communauté",
    'blog.readTime': 'lecture',
    'blog.readMore': 'Lire la suite',
    'blog.viewAll': 'Voir tous les articles',
    'blog.filters': 'Filtres',
    'blog.category': 'Catégorie',
    'blog.year': 'Année',
    'blog.sortBy': 'Trier par',
    'blog.allCategories': 'Toutes les catégories',
    'blog.allYears': 'Toutes les années',
    'blog.selectYear': 'Sélectionner une année',
    'blog.newestFirst': 'Plus récents en premier',
    'blog.oldestFirst': 'Plus anciens en premier',
    'blog.alphabetical': 'Alphabétique',
    'blog.clearFilters': 'Effacer les filtres',
    'blog.showing': 'Affichage de',
    'blog.of': 'sur',
    'blog.posts': 'articles',
    'blog.noResults': 'Aucun article trouvé correspondant à vos critères',
    'blog.stats.totalPosts': 'Articles totaux',
    'blog.stats.categories': 'Catégories',
    'blog.stats.publications': 'Publications',
    'blog.stats.thisYear': 'Cette année',
    'blog.categories.ml': 'Machine Learning',
    'blog.categories.ai': 'Intelligence Artificielle',
    'blog.categories.research': 'Recherche',
    'blog.categories.tutorial': 'Tutoriel',
    'blog.categories.conference': 'Conférence',
    'blog.categories.data': 'Science des Données',
    'blog.posts.medium.title': "Des CVs au recrutement intelligent : construire un évaluateur de CV alimenté par l'IA avec Gemini",
    'blog.posts.medium.description': "Un guide pratique pour construire un évaluateur de CV alimenté par l'IA avec Google Gemini — de l'analyse des CVs à la génération de retours structurés et actionnables.",

    // Experience Section
    'experience.title': 'Expérience',
    'experience.subtitle': "Mon parcours professionnel et les défis que j'ai relevés",
    'experience.achievements': 'Réalisations Clés',

    // Education Section
    'education.title': 'Formation & Certifications',
    'education.subtitle': 'Mon parcours académique et mes certifications professionnelles',
    'education.academic': 'Formation Académique',
    'education.certifications': 'Certifications Professionnelles',
    'education.viewCertificate': 'Voir le certificat',

    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Discutons de vos projets et explorons les opportunités de collaboration',
    'contact.info': 'Informations de Contact',
    'contact.form.title': 'Envoyez-moi un Message',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Votre nom complet',
    'contact.form.emailPlaceholder': 'votre@email.com',
    'contact.form.subjectPlaceholder': "De quoi s'agit-il ?",
    'contact.form.messagePlaceholder': 'Parlez-moi de votre projet ou idée...',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.successDesc': "Merci de m'avoir contactée. Je vous répondrai bientôt.",
    'contact.availability': "Je suis toujours ouverte aux opportunités intéressantes et aux collaborations significatives. N'hésitez pas à me contacter !",

    // Footer
    'footer.title': 'Lauriane Mbagdje Dorenan',
    'footer.description': "Data Scientist et Ingénieure IA passionnée par la construction de systèmes intelligents qui créent un impact réel, notamment dans le domaine de la santé et des communautés sous-desservies.",
    'footer.quickLinks': 'Liens Rapides',
    'footer.connect': 'Me Contacter',
    'footer.backToTop': 'Retour en haut',
    'footer.copyright': 'Tous droits réservés.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const fallbackContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {
    if (typeof console !== 'undefined') {
      console.warn('useLanguage: setLanguage called without a LanguageProvider in the tree.');
    }
  },
  t: (key: string) => translations.en[key as keyof typeof translations.en] || key,
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context ?? fallbackContext;
};