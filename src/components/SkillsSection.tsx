
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.programming'),
      color: 'tech-blue',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'R', level: 70 },
        { name: 'SQL', level: 70 },
        { name: 'Scala', level: 60 }

      ]
    },
    {
      title: t('skills.ml'),
      color: 'tech-purple',
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'Numpy', level: 85 },
        { name: 'Scikit-learn', level: 75 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 80 },
        { name: 'Keras ', level: 80 },
        { name: 'Pytorch ', level: 80 }
      ]
    },
    {
      title: t('skills.tools'),
      color: 'tech-indigo',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'VS Code / PyCharm / IntelliJ', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Tableau/Power BI', level: 85 },
        { name: 'Jira', level: 85 }
      ]
    },
    {
      title: t('skills.soft'),
      color: 'tech-cyan',
      skills: [
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 80 },
        { name: 'Project Management', level: 80 },
        { name: 'Adaptability', level: 90 },
        { name: 'Problem Solving', level: 85 }
      ]
    }
  ];

  const languages = [
    { name: 'French', level: 'Native/C2' },
    { name: 'English', level: 'B2 - Intermediate' },
    { name: 'Spanish', level: 'A2 - Basic' }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('skills.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className={`text-lg font-semibold mb-4 text-${category.color}`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="card-hover">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-tech-blue">
              {t('skills.languages')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    {language.name}
                  </div>
                  <div className="text-gray-600">
                    {language.level}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
