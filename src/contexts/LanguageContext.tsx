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
    'nav.contact': 'Contact',
    'nav.contactMe': 'Contact Me',
    'nav.portfolio': 'Portfolio',
    
    // Hero Section
    'hero.name': 'Lauriane Mbagdjé Dorenan',
    'hero.titles.dataScientist': 'Data Scientist',
    'hero.titles.ai&mlEngineer': 'AI & ML Engineer',
    'hero.description': 'Passionate about AI and innovation, I aim to turn ideas into impactful solutions that improve lives and shape the future.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Learn about my journey, values, and professional aspirations',
    'about.journey.title': 'My Journey',
    'about.journey.description': 'My journey began in biomedical engineering, where I worked as a Biomedical Equipment Technician and gained first-hand insight into the challenges of healthcare systems. This experience sparked my curiosity for technology and data-driven solutions, leading me to pursue a Master\’s degree in Artificial Intelligence & Data Science at the Dakar Institute of Technology. Today, I bridge these two worlds, healthcare and AI, by working on projects that apply AI where it matters most, creating innovative solutions with real impact.',
    'about.values.title': 'My Values',
    'about.values.description': 'I value ethical and inclusive AI, driven by collaboration and knowledge sharing. I believe technology should serve people first, especially in communities where access to innovation is limited. Continuous learning and responsibility guide my work as I strive to use AI for positive societal impact.',
    'about.goals.title': 'Career Goals',
    'about.goals.description': 'I aim to grow as an AI Engineer dedicated to building impactful solutions that improve lives and strengthen communities. Beyond technology, my mission is to mentor future women in tech and help shape a world where AI drives ethical innovation and lasting change.',
    
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
    
    // Blog Section
    'blog.title': 'Blog & Publications',
    'blog.subtitle': 'Sharing insights, research findings, and technical knowledge with the community',
    'blog.readTime': 'read',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Posts',
    'blog.categories.ml': 'Machine Learning',
    'blog.categories.ai': 'Artificial Intelligence',
    'blog.categories.research': 'Research',
    'blog.categories.tutorial': 'Tutorial',
    'blog.categories.conference': 'Conference',
    'blog.categories.data': 'Data Science',
    'blog.posts.ml.title': 'Advanced Feature Engineering Techniques for Time Series Forecasting',
    'blog.posts.ml.description': 'Exploring sophisticated feature extraction methods and their impact on predictive model performance in temporal data analysis.',
    'blog.posts.ai.title': 'Ethical AI: Building Responsible Machine Learning Systems',
    'blog.posts.ai.description': 'A comprehensive guide to implementing fairness, accountability, and transparency in AI systems while maintaining high performance.',
    'blog.posts.research.title': 'Deep Learning Approaches for Natural Language Understanding in Healthcare',
    'blog.posts.research.description': 'Research paper published in IEEE Transactions on AI, presenting novel architectures for medical text processing and clinical decision support.',
    'blog.posts.tutorial.title': 'Building Scalable MLOps Pipelines with Docker and Kubernetes',
    'blog.posts.tutorial.description': 'Step-by-step tutorial on creating production-ready machine learning deployment workflows using containerization and orchestration.',
    'blog.posts.conference.title': 'Presentation: AI-Driven Predictive Analytics in FinTech',
    'blog.posts.conference.description': 'Conference presentation at TechFinance 2023 showcasing real-world applications of machine learning in financial risk assessment.',
    'blog.posts.data.title': 'Data Visualization Best Practices for Complex Datasets',
    'blog.posts.data.description': 'Comprehensive guide to creating effective visualizations that communicate insights clearly to both technical and non-technical stakeholders.',
    
    // Footer
    'footer.title': 'Professional Portfolio',
    'footer.description': 'Data Scientist and AI Engineer passionate about transforming complex data into actionable insights and building innovative solutions that drive meaningful impact.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect With Me',
    'footer.backToTop': '↑ Back to Top',
    'footer.copyright': 'All rights reserved. Built with passion and cutting-edge technology.',
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
    'nav.contact': 'Contact',
    'nav.contactMe': 'Me contacter',
    'nav.portfolio': 'Portfolio',
    
    // Hero Section
    'hero.name': 'Lauriane Mbagdje Dorenan',
    'hero.titles.dataScientist': 'Data Scientist',
    'hero.titles.ai&mlEngineer': 'Ingénieure IA et Machine Learning',
    'hero.description': 'Passionnée par la transformation de données complexes en insights exploitables et la création de solutions innovantes qui stimulent la croissance des entreprises. Je me spécialise dans l\'apprentissage automatique, l\'intelligence artificielle et le développement full-stack pour créer un impact significatif.',
    'hero.viewWork': 'Voir mes projets',
    'hero.getInTouch': 'Me contacter',
    
    // About Section
    'about.title': 'À propos de moi',
    'about.subtitle': 'Découvrez mon parcours, mes valeurs et mes aspirations professionnelles',
    'about.journey.title': 'Mon Parcours',
    'about.journey.description': 'Avec plus de 5 ans d\'expérience en science des données et développement logiciel, j\'ai évolué de l\'analyse statistique traditionnelle vers l\'intelligence artificielle de pointe. Mon parcours m\'a mené à travers diverses industries, enrichissant ma compréhension des défis business et des solutions technologiques.',
    'about.values.title': 'Mes Valeurs',
    'about.values.description': 'Je crois en l\'innovation responsable et au développement éthique de l\'IA. La transparence dans les algorithmes, l\'impact sociétal positif et l\'apprentissage continu guident mon travail. La collaboration et le partage des connaissances sont au cœur de ma philosophie professionnelle.',
    'about.goals.title': 'Objectifs de Carrière',
    'about.goals.description': 'Mon objectif est de devenir un leader technique en IA appliquée, dirigeant des équipes pluridisciplinaires pour créer des solutions innovantes. Je vise à contribuer à des projets ayant un impact sociétal significatif tout en continuant à repousser les limites technologiques.',
    
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
    
    // Blog Section
    'blog.title': 'Blog & Publications',
    'blog.subtitle': 'Partage d\'insights, de résultats de recherche et de connaissances techniques avec la communauté',
    'blog.readTime': 'lecture',
    'blog.readMore': 'Lire la suite',
    'blog.viewAll': 'Voir tous les articles',
    'blog.categories.ml': 'Machine Learning',
    'blog.categories.ai': 'Intelligence Artificielle',
    'blog.categories.research': 'Recherche',
    'blog.categories.tutorial': 'Tutoriel',
    'blog.categories.conference': 'Conférence',
    'blog.categories.data': 'Science des Données',
    'blog.posts.ml.title': 'Techniques Avancées d\'Ingénierie des Caractéristiques pour la Prévision de Séries Temporelles',
    'blog.posts.ml.description': 'Exploration de méthodes sophistiquées d\'extraction de caractéristiques et leur impact sur les performances des modèles prédictifs dans l\'analyse de données temporelles.',
    'blog.posts.ai.title': 'IA Éthique : Construire des Systèmes d\'Apprentissage Automatique Responsables',
    'blog.posts.ai.description': 'Un guide complet pour implémenter l\'équité, la responsabilité et la transparence dans les systèmes d\'IA tout en maintenant de hautes performances.',
    'blog.posts.research.title': 'Approches d\'Apprentissage Profond pour la Compréhension du Langage Naturel en Santé',
    'blog.posts.research.description': 'Article de recherche publié dans IEEE Transactions on AI, présentant de nouvelles architectures pour le traitement de texte médical et l\'aide à la décision clinique.',
    'blog.posts.tutorial.title': 'Construire des Pipelines MLOps Évolutifs avec Docker et Kubernetes',
    'blog.posts.tutorial.description': 'Tutoriel étape par étape pour créer des workflows de déploiement d\'apprentissage automatique prêts pour la production en utilisant la conteneurisation et l\'orchestration.',
    'blog.posts.conference.title': 'Présentation : Analytique Prédictive Pilotée par l\'IA dans la FinTech',
    'blog.posts.conference.description': 'Présentation de conférence à TechFinance 2023 montrant des applications réelles de l\'apprentissage automatique dans l\'évaluation des risques financiers.',
    'blog.posts.data.title': 'Meilleures Pratiques de Visualisation de Données pour les Jeux de Données Complexes',
    'blog.posts.data.description': 'Guide complet pour créer des visualisations efficaces qui communiquent clairement les insights aux parties prenantes techniques et non techniques.',
    
    // Footer
    'footer.title': 'Portfolio Professionnel',
    'footer.description': 'Data Scientist et Ingénieur IA passionné par la transformation de données complexes en insights exploitables et la création de solutions innovantes qui génèrent un impact significatif.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.connect': 'Me Contacter',
    'footer.backToTop': '↑ Retour en haut',
    'footer.copyright': 'Tous droits réservés. Conçu avec passion et technologie de pointe.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
