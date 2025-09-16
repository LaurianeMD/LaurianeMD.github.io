
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      period: 'Apr 2025 – Present',
      title: 'CMMS Manager (promoted from Biomedical Equipment Technician Intern)',
      company: 'SSM Systèmes Médicaux SA · Dakar, Senegal',
      type: 'Full-time',
      description:
        'Manage the Computerized Maintenance Management System (CMMS) and support biomedical service operations across sites.',
      achievements: [
        'Coordinate CMMS administration; standardize workflows, SLAs, and preventive/corrective schedules with senior engineers',
        'Organize & prioritize work orders; coordinate technicians and vendors; support compliant installations/calibrations and after-sales service',
        'Monitor maintenance data, prepare KPI reports, and recommend actions to improve uptime and spare-parts planning'
      ],
      skills: ['CMMS', 'Maintenance Planning', 'Process Standardization', 'KPI Reporting']
    },
    {
      period: 'Apr 2025 – Present',
      title: 'Co-founder, Lead Data Scientist & Acting CGO (Part-time)',
      company: 'AfriAI Solutions · Dakar, Senegal',
      type: 'Part-time',
      description:
        'As co-founder and Lead Data Scientist, I shape the vision of AfriAI Solutions by bridging AI product development, business growth, and community impact.',
      achievements: [
        'Designed and delivered AI prototypes, including a **multimodal pre-consultation health chatbot** (text/audio + NLP/LLM)',
        'Implemented lightweight **MLOps workflows** (Git, Docker, W&B) to support scalable and reproducible experiments',
        'Co-led the **Python & Data Analysis training program (7 weeks)**, empowering students and early-career professionals',
        'Defined and executed the **go-to-market strategy**, including partnerships, community-driven growth, and content initiatives',
        'Established and tracked **OKRs/KPIs** to measure progress and impact across both technical and business domains'
      ],
      skills: [
        'Python',
        'PyTorch',
        'Streamlit',
        'MLOps (Git, Docker, W&B)',
        'Leadership',
        'Go-to-Market Strategy'
      ]
    },
    {
      period: 'Aug 2024 – Mar 2025',
      title: 'Biomedical Equipment Technician Intern',
      company: 'SSM Systèmes Médicaux SA · Dakar, Senegal',
      type: 'Internship',
      description:
        'Hands-on maintenance and support on diagnostic/therapeutic devices under senior supervision.',
      achievements: [
        'Assisted with troubleshooting, calibration, and technical documentation',
        'Supported installation and acceptance testing of biomedical equipment'
      ],
      skills: ['Biomedical Equipment', 'Calibration', 'Technical Documentation']
    },
    {
      period: 'Nov 2024',
      title: 'AI Fellowship — FutureIntern',
      company: 'FutureIntern (Remote) · Dakar Institute of Technology',
      type: 'Fellowship',
      description:
        'One-month AI fellowship focused on hands-on NLP/GenAI projects and deliverables.',
      achievements: [
        'Completed 3 projects: GPT-2 Text Generation, Stable Diffusion Image Generation, Markov Chain Text Generation',
        'Delivered notebooks & demos within program timelines (Nov 1–30, 2024)'
      ],
      skills: ['NLP', 'Generative AI', 'Gradio', 'Colab/Notebooks']
    },
    {
      period: 'Sep 2023 – Mar 2024',
      title: 'Biomedical Technician Trainee',
      company: 'MGR3AK Sarl · Dakar, Senegal',
      type: 'Internship',
      description:
        'Technical and market-facing trainee role supporting biomedical sales and client success.',
      achievements: [
        'Developed knowledge of medical devices (stethoscopes, blood monitors, paravents, gloves, etc.)',
        'Prepared technical proposals to support client satisfaction and growth',
        'Conducted market prospections and collected strategic data to boost adoption'
      ],
      skills: ['Biomedical Devices', 'Technical Proposals', 'Market Prospection']
    }
  ];


  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the challenges I've tackled
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-tech-blue hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-tech-blue rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-tech-blue">
                            {exp.title}
                          </h3>
                          <Badge variant={exp.type === 'Full-time' ? 'default' : 'secondary'}>
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="text-lg text-gray-700 font-medium mb-1">
                          {exp.company}
                        </div>
                        <div className="text-sm text-gray-500 mb-4">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-tech-purple border-tech-purple">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
