import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      period: 'Apr 2025 — Present',
      title: 'CMMS Manager',
      company: 'SSM Systèmes Médicaux SA · Dakar, Senegal',
      type: 'Full-time',
      description: 'Promoted from Biomedical Equipment Technician Intern (Aug 2024 – Mar 2025). Manage the Computerized Maintenance Management System and support biomedical service operations across sites.',
      achievements: [
        'Leveraged CMMS data to improve predictive, preventive, and corrective maintenance strategies.',
        'Supported equipment lifecycle management, including installation, troubleshooting, and client-focused technical assistance.',
        'Collaborated with medical staff, gaining practical exposure to clinical workflows and diagnostic devices.',
      ],
      skills: ['CMMS', 'Maintenance Planning', 'KPI Reporting', 'Biomedical Equipment'],
    },
    {
      period: 'Apr 2025 — Present',
      title: 'Co-founder & Tech Lead',
      company: 'AfriAI Solutions · Dakar, Senegal',
      type: 'Part-time',
      description: 'Co-founder and Tech Lead driving AI product development and community impact at AfriAI Solutions.',
      achievements: [
        'Assist the CTO on AI projects and co-develop applied solutions in multimodal AI and computer vision.',
        'Lead a team of 5 developing EduConnect, an AI platform that recommends opportunities for students.',
        'Delivered training to over 50 participants in data analysis, Power BI, and generative AI.',
      ],
      skills: ['Python', 'PyTorch', 'Computer Vision', 'MLOps', 'Leadership'],
    },
    {
      period: '2024 — Present',
      title: 'AI Engineer — Food Safety Application',
      company: 'eath Startup · Senegal',
      type: 'Part-time',
      description: 'Contributing to AI-powered food safety solutions using computer vision.',
      achievements: [
        'Contributed to ingredient detection pipelines using computer vision techniques.',
        'Curated and annotated datasets for allergen and ingredient classification tasks.',
      ],
      skills: ['Computer Vision', 'Data Annotation', 'Python', 'Deep Learning'],
    },
    {
      period: 'Nov 2024',
      title: 'AI Engineer Intern',
      company: 'FutureIntern',
      type: 'Internship',
      description: 'One-month AI internship focused on hands-on NLP and generative AI projects.',
      achievements: [
        'Completed 3 projects: GPT-2 Text Generation, Stable Diffusion Image Generation, Markov Chain Text Generation.',
        'Delivered notebooks & demos within program timelines (Nov 1–30, 2024).',
      ],
      skills: ['NLP', 'Generative AI', 'Gradio', 'Google Colab'],
    },
    {
      period: 'Sep 2023 — Mar 2024',
      title: 'Biomedical Technician Trainee',
      company: 'MGR3AK Sarl · Dakar, Senegal',
      type: 'Internship',
      description: 'Technical and market-facing trainee role supporting biomedical sales and client success.',
      achievements: [
        'Developed knowledge of medical devices (stethoscopes, blood monitors, paravents, etc.).',
        'Prepared technical proposals to support client satisfaction and growth.',
        'Conducted market prospections and collected strategic data to boost adoption.',
      ],
      skills: ['Biomedical Devices', 'Technical Proposals', 'Market Prospection'],
    },
  ];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ III</span>
            <span className="meta-label text-foreground/60 block">Experience</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">Professional</span>
              <br />
              Journey
            </h2>
          </div>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid lg:grid-cols-12 gap-8 py-12 border-b border-foreground/15 last:border-0"
            >
              <div className="lg:col-span-3 space-y-2">
                <span className="meta-label text-foreground/50 block">{exp.period}</span>
                <span className="meta-label text-foreground/40 block">{exp.type}</span>
              </div>
              <div className="lg:col-span-9 space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground">{exp.title}</h3>
                  <p className="meta-label text-foreground/60 mt-1">{exp.company}</p>
                </div>
                <p className="text-base text-foreground/70 leading-relaxed">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/60">
                      <span className="mt-2 w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="border border-foreground/20 px-3 py-1 font-meta text-xs text-foreground/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;