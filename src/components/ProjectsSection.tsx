import React, { useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectCard from './projects/ProjectCard';
import ProjectFilter from './projects/ProjectFilter';
import { motion, useInView } from 'framer-motion';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Skin Disease Classification (ViT-based)',
      description: 'Fine-tuned a Vision Transformer (ViT-base) for 22-class dermatological disease classification. Applied data augmentation and normalization techniques, achieving 98.49% accuracy after just 5 epochs. Model published on Hugging Face.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=250&fit=crop',
      technologies: ['Python', 'PyTorch', 'Vision Transformer', 'Hugging Face', 'Kaggle'],
      category: 'ai',
      impact: '98.49% Accuracy',
      githubUrl: 'https://huggingface.co/LaurianeMD/vit-skin-disease',
      demoUrl: 'https://huggingface.co/LaurianeMD/vit-skin-disease',
      metrics: [{ label: 'Accuracy', value: '98.49%' }, { label: 'Classes', value: '22' }],
    },
    {
      title: 'MedBot — Multimodal Pre-consultation Chatbot',
      description: 'LLM-based health assistant fine-tuned on LLaMA-3.2-3B with LoRA + 4-bit quantization. Integrated Whisper ASR for speech input, MMS-TTS for audio output, and NLLB-200 for multilingual translations.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
      technologies: ['PyTorch', 'LoRA/QLoRA', 'Whisper', 'MMS-TTS', 'NLLB-200'],
      category: 'ai',
      impact: 'Multilingual + Audio',
      githubUrl: 'https://github.com/LaurianeMD/MedLLM',
      demoUrl: 'https://github.com/LaurianeMD/MedLLM',
      metrics: [{ label: 'Modalities', value: 'Audio + Text' }, { label: 'Languages', value: 'Multilingual' }],
    },
    {
      title: 'COVID-19 X-ray Classifier',
      description: 'Built a Convolutional Neural Network (Keras) to classify chest X-rays (COVID vs normal), achieving 88% accuracy after 10 epochs. Deployed as an interactive Streamlit app for real-time model use.',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=250&fit=crop',
      technologies: ['Python', 'Keras', 'TensorFlow', 'Streamlit'],
      category: 'ml',
      impact: '≈88% Accuracy',
      githubUrl: 'https://github.com/LaurianeMD/COVID_Classification',
      demoUrl: 'https://covid-detection.streamlit.app/',
      metrics: [{ label: 'Accuracy', value: '≈88%' }, { label: 'Epochs', value: '10' }],
    },
    {
      title: 'Text Summarization Application',
      description: 'Streamlit app for automatic text summarization using TextRank, LexRank, LSA, and a custom algorithm. Integrated language detection (English/French) to improve usability and accessibility.',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=250&fit=crop',
      technologies: ['Python', 'Streamlit', 'NLTK', 'Scikit-learn'],
      category: 'nlp',
      impact: 'Multilingual Summarization',
      githubUrl: 'https://github.com/LaurianeMD/Text_Summarization',
      demoUrl: 'https://laurianemd-text-summarization-script-cndf9n.streamlit.app',
      metrics: [{ label: 'Algorithms', value: '4' }, { label: 'Languages', value: 'EN / FR' }],
    },
    {
      title: 'Text Generation with GPT-2 — Odyssey Project',
      description: "Fine-tuned a GPT-2 model on Homer's Odyssey to generate poetic text inspired by the epic. Built an interactive Gradio interface to experiment with prompts and visualize outputs in real time.",
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
      technologies: ['Python', 'PyTorch', 'GPT-2', 'Gradio', 'Google Colab'],
      category: 'nlp',
      impact: 'Creative Text Generation',
      githubUrl: 'https://github.com/LaurianeMD/FutureIntern_AI_01',
      demoUrl: 'https://colab.research.google.com/github/LaurianeMD/FutureIntern_AI_01/blob/main/Text_Generation.ipynb',
      metrics: [{ label: 'Model', value: 'GPT-2' }, { label: 'Interface', value: 'Gradio' }],
    },
    {
      title: 'Image Generation with Stable Diffusion',
      description: 'Developed an interactive Gradio app powered by Stable Diffusion to generate images from text prompts. The system supports GPU acceleration and displays multiple outputs in a gallery format for creative exploration.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop',
      technologies: ['Python', 'Stable Diffusion', 'Gradio', 'Hugging Face', 'Google Colab'],
      category: 'ai',
      impact: 'Creative AI — Image Generation',
      githubUrl: 'https://github.com/LaurianeMD/FutureIntern_AI_02',
      demoUrl: 'https://colab.research.google.com/github/LaurianeMD/FutureIntern_AI_02/blob/main/Image_Generation.ipynb',
      metrics: [{ label: 'Model', value: 'Stable Diffusion' }, { label: 'Output', value: 'Gallery' }],
    },
    {
      title: 'News Article Classification with BERT',
      description: 'Fine-tuned BERT (bert-base-uncased) to classify news articles into categories with 96% accuracy and 0.1 loss. Built a FastAPI service for inference, exposing endpoints to predict categories from headlines and articles.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop',
      technologies: ['Python', 'BERT', 'PyTorch', 'Transformers', 'FastAPI'],
      category: 'nlp',
      impact: '96% Accuracy',
      githubUrl: 'https://github.com/LaurianeMD/news_classification',
      demoUrl: 'https://github.com/LaurianeMD/news_classification',
      metrics: [{ label: 'Accuracy', value: '96%' }, { label: 'Loss', value: '0.1' }],
    },
    {
      title: 'FAQ Chatbot — Jumia Sénégal',
      description: 'A chatbot built with Gradio to answer frequently asked questions about payments on Jumia Sénégal. Uses a FAQ dataset and a KNN-based model for responses. Deployed on Render with a user-friendly web interface.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=250&fit=crop',
      technologies: ['Python', 'Gradio', 'Scikit-learn', 'Pandas', 'Render'],
      category: 'ai',
      impact: 'Deployed Chatbot',
      githubUrl: 'https://github.com/LaurianeMD/chatbot_faq',
      demoUrl: 'https://chatbot-faq-tkmb.onrender.com/',
      metrics: [{ label: 'Deployment', value: 'Render' }, { label: 'Interface', value: 'Gradio' }],
    },
    {
      title: 'Advanced Dialogue Manager for Goal-Oriented Chatbots',
      description: 'Deep dialogue system using Reinforcement Learning (DQN) for goal-oriented conversations. Integrated NLU, NLG, multiple dialogue agents, and user simulators. Includes a Django-based interface for experimentation.',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=250&fit=crop',
      technologies: ['Python', 'Reinforcement Learning', 'NLU/NLG', 'PyTorch', 'Django'],
      category: 'ai',
      impact: 'End-to-End Dialogue',
      githubUrl: 'https://github.com/LaurianeMD/Advanced-Dialogue-Managersfor-Goal-Oriented-Dialogue-Systems',
      demoUrl: 'https://github.com/LaurianeMD/Advanced-Dialogue-Managersfor-Goal-Oriented-Dialogue-Systems',
      metrics: [{ label: 'Method', value: 'DQN' }, { label: 'Interface', value: 'Django' }],
    },
  ];

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  const technologies = ['all', ...Array.from(new Set(projects.flatMap(p => p.technologies)))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const technologyMatch = selectedTechnology === 'all' || project.technologies.includes(selectedTechnology);
      return categoryMatch && technologyMatch;
    });
  }, [projects, selectedCategory, selectedTechnology]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedTechnology('all');
  };

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ V</span>
            <span className="meta-label text-foreground/60 block">{t('projects.title')}</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">Selected</span>
              <br />
              works.
            </h2>
            <p className="meta-label text-foreground/60 mt-6">
              {filteredProjects.length} of {projects.length} entries shown
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-12 gap-8 mb-12"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( Filter Index )</span>
          </div>
          <div className="lg:col-span-9">
            <ProjectFilter
              categories={categories}
              technologies={technologies}
              selectedCategory={selectedCategory}
              selectedTechnology={selectedTechnology}
              onCategoryChange={setSelectedCategory}
              onTechnologyChange={setSelectedTechnology}
              onReset={handleReset}
            />
          </div>
        </motion.div>

        {/* Projects list — editorial chronology */}
        <div className="border-t border-foreground/30">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border-t border-foreground/15">
            <p className="font-display text-2xl text-foreground/70 italic mb-4">{t('projects.noResults')}</p>
            <Button onClick={handleReset} variant="outline" className="rounded-none border-foreground">
              {t('projects.clearFilters')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
