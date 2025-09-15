import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
        {
      title: 'MedBot — Multimodal Pre-consultation Chatbot',
      description: 'LLM-based health assistant fine-tuned on LLaMA-3.2-3B with LoRA + 4-bit quantization. Integrated Whisper ASR for speech input, MMS-TTS for audio output, and NLLB-200 for multilingual translations.',
      image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?w=400&h=250&fit=crop',
      technologies: ['PyTorch', 'LoRA/QLoRA', 'Whisper', 'MMS-TTS', 'NLLB-200'],
      impact: 'Multilingual + Audio',
      githubUrl: 'https://github.com/LaurianeMD/MedLLM',
      demoUrl: 'https://nlp-tool-demo.com'
    },
    {
      title: 'COVID-19 X-ray Classifier',
      description: 'Built a Convolutional Neural Network (Keras) to classify chest X-rays (COVID vs normal), achieving 88% accuracy after 10 epochs. Deployed as an interactive Streamlit app for real-time model use.',
      image: 'https://github.com/LaurianeMD/COVID_Classification/raw/main/image.png',
      technologies: ['Python', 'Keras', 'TensorFlow', 'Streamlit'],
      impact: '≈88% Accuracy',
      githubUrl: 'https://github.com/LaurianeMD/COVID_Classification',
      demoUrl: 'https://covid-detection.streamlit.app/'
    },
    {
      title: 'Text Summarization Application',
      description: 'Streamlit app for automatic text summarization using TextRank, LexRank, LSA, and a custom algorithm. Integrated language detection (English/French) to improve usability and accessibility.',
      image: 'https://github.com/LaurianeMD/Text_Summarization/blob/main/images/blue2.png?raw=true',
      technologies: ['Python', 'Streamlit', 'NLTK', 'Scikit-learn'],
      impact: 'Multilingual Summarization',
      githubUrl: 'https://github.com/LaurianeMD/Text_Summarization',
      demoUrl: 'https://laurianemd-text-summarization-script-cndf9n.streamlit.app'
    },
    {
    title: 'Text Generation with GPT-2 — Odyssey Project',
    description:
      'Fine-tuned a GPT-2 model on Homer’s Odyssey to generate poetic text inspired by the epic. Built an interactive Gradio interface to experiment with prompts and visualize outputs in real time.',
    image: 'https://github.com/LaurianeMD/FutureIntern_AI_01/raw/main/image.png', // Mets ton image.png du repo dans public/images/projects
    technologies: ['Python', 'PyTorch/Transformers', 'GPT-2', 'Gradio', 'Google Colab'],
    impact: 'Creative Text Generation',
    githubUrl: 'https://github.com/LaurianeMD/FutureIntern_AI_01',
    demoUrl: 'https://colab.research.google.com/github/LaurianeMD/FutureIntern_AI_01/blob/main/Text_Generation.ipynb'
   },
   {
    title: 'Image Generation with Stable Diffusion',
    description:
      'Developed an interactive Gradio app powered by Stable Diffusion to generate images from text prompts. The system supports GPU acceleration and displays multiple outputs in a gallery format for creative exploration.',
    image: 'https://github.com/LaurianeMD/FutureIntern_AI_02/raw/main/image.png', // mets ton image.png du repo dans public/images/projects
    technologies: ['Python', 'Stable Diffusion', 'Gradio', 'Hugging Face', 'Google Colab'],
    impact: 'Creative AI — Image Generation',
    githubUrl: 'https://github.com/LaurianeMD/FutureIntern_AI_02',
    demoUrl: 'https://colab.research.google.com/github/LaurianeMD/FutureIntern_AI_02/blob/main/Image_Generation.ipynb'
  },
  {
    title: 'Text Generation — Markov Chains',
    description:
      'Implemented a Markov Chain text generator in Python with an interactive Gradio interface. Users can train the model on custom input, tune the context size (n), and generate text dynamically in a Google Colab notebook.',
    image: 'https://github.com/LaurianeMD/Futureinter_AI_03/raw/main/image.png', // mets une capture du notebook/Gradio ici
    technologies: ['Python', 'Markov Chains', 'Gradio', 'Jupyter/Colab'],
    impact: 'Interactive NLP',
    githubUrl: 'https://github.com/LaurianeMD/FutureIntern_AI_03', // remplace si différent
    demoUrl: 'https://colab.research.google.com/github/LaurianeMD/FutureIntern_AI_03/blob/main/Markov_Text_Generation.ipynb' // remplace par ton lien Colab réel
  },
  {
    title: 'FAQ Chatbot — Jumia Sénégal',
    description:
      'A simple chatbot built with Gradio to answer frequently asked questions about payments on Jumia Sénégal. It uses a FAQ dataset (faq.csv) and a KNN-based model for responses, handling greetings, politeness, and common queries. Deployed on Render with a user-friendly web interface.',
    image:
      'data:image/jpeg;base64,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',
    technologies: ['Python', 'Gradio', 'scikit-learn', 'Pandas', 'Render'],
    impact: 'Deployed Chatbot',
    githubUrl: 'https://github.com/LaurianeMD/chatbot_faq',
    demoUrl: 'https://chatbot-faq-tkmb.onrender.com/'
  },
  {
    title: 'Advanced Dialogue Manager for Goal-Oriented Chatbots',
    description:
      'Developed a deep dialogue system using Reinforcement Learning (DQN) for goal-oriented conversations. Integrated Natural Language Understanding (NLU), Natural Language Generation (NLG), multiple dialogue agents, and user simulators. Includes a Django-based interface for experimentation and deployment.',
    image: '/images/projects/dialogue_manager.png', // ajoute une capture de l’interface ou du flow
    technologies: ['Python', 'Reinforcement Learning', 'NLU/NLG', 'PyTorch', 'Django'],
    impact: 'End-to-End Goal-Oriented Dialogue',
    githubUrl: 'https://github.com/LaurianeMD/Advanced-Dialogue-Managersfor-Goal-Oriented-Dialogue-Systems',
    demoUrl: 'https://demo-dialogue-manager.example.com' // si tu déploies une démo
  },
  {
    title: 'News Article Classification with BERT',
    description:
      'Fine-tuned BERT (bert-base-uncased) to classify news articles into categories with 96% accuracy and 0.1 loss. Built a FastAPI service for inference, exposing endpoints to predict categories from headlines and articles.',
    image: '/images/projects/news_classification.png', // ajoute une capture de l’app Hugging Face ou Swagger UI
    technologies: ['Python', 'BERT', 'PyTorch', 'Transformers', 'FastAPI', 'Hugging Face'],
    impact: '96% Accuracy',
    githubUrl: 'https://github.com/LaurianeMD/news_classification', // adapte selon ton repo
    demoUrl: 'https://huggingface.co/spaces/ton-utilisateur/news-classification' // mets ton vrai lien Hugging Face
}
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('projects.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-tech-blue text-white">
                    {project.impact}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-tech-blue">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-tech-purple border-tech-purple">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-tech-blue hover:bg-tech-purple transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    {t('projects.viewCode')}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    {t('projects.liveDemo')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
