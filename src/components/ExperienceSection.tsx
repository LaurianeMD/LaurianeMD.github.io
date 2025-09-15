
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Senior Data Scientist',
      company: 'TechCorp Solutions',
      type: 'Full-time',
      description: 'Lead a team of 5 data scientists developing innovative AI solutions. Implemented complete MLOps architecture and developed high-value predictive models that drive business decisions.',
      achievements: [
        'Reduced operational costs by 35% through automated processes',
        'Deployed 15+ machine learning models to production',
        'Trained 20+ colleagues in AI and machine learning practices'
      ],
      skills: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      period: '2020 - 2022',
      title: 'Data Scientist',
      company: 'FinanceAI Inc.',
      type: 'Full-time',
      description: 'Developed fraud detection and risk analysis models for the financial sector. Collaborated closely with business teams to translate requirements into technical solutions.',
      achievements: [
        'Achieved 99.2% accuracy in fraud detection',
        'Generated $2M in annual savings through improved risk models',
        'Reduced false positives by 60% in fraud detection system'
      ],
      skills: ['Python', 'Scikit-learn', 'SQL', 'Tableau', 'Git']
    },
    {
      period: '2019 - 2020',
      title: 'Junior Data Analyst',
      company: 'StartupTech',
      type: 'Full-time',
      description: 'First professional experience in a dynamic startup environment. Analyzed user data, created dashboards, and supported strategic decision-making processes.',
      achievements: [
        'Implemented automated reporting system',
        'Analyzed behavior patterns of 10K+ users',
        'Optimized conversion rate by 25%'
      ],
      skills: ['R', 'SQL', 'Power BI', 'Excel', 'Statistics']
    },
    {
      period: '2019',
      title: 'Data Science Intern',
      company: 'University Research Lab',
      type: 'Internship',
      description: 'Capstone project in university research lab. Worked on medical image processing algorithms using deep learning for automated diagnosis assistance.',
      achievements: [
        'Published research paper in peer-reviewed journal',
        'Developed novel image segmentation algorithm',
        'Presented findings at 3 scientific conferences'
      ],
      skills: ['Python', 'OpenCV', 'PyTorch', 'Jupyter', 'LaTeX']
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
