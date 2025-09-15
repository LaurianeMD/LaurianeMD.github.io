
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      year: '2019',
      degree: 'Master of Science in Data Science & AI',
      school: 'University of Technology',
      description: 'Specialized program in machine learning, deep learning, and big data analytics. Thesis project focused on computer vision applications in healthcare.',
      grade: 'Magna Cum Laude',
      skills: ['Machine Learning', 'Deep Learning', 'Statistics', 'Python', 'R']
    },
    {
      year: '2017',
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      description: 'Comprehensive foundation in computer science with focus on software development, algorithms, and database systems.',
      grade: 'Cum Laude',
      skills: ['Algorithms', 'Programming', 'Databases', 'Java', 'C++']
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      year: '2023',
      level: 'Expert'
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      year: '2022',
      level: 'Advanced'
    },
    {
      name: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      level: 'Fundamental'
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera - DeepLearning.AI',
      year: '2021',
      level: 'Advanced'
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      year: '2021',
      level: 'Professional'
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Academic Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-tech-blue">
              Academic Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-tech-blue font-medium mb-2">
                          {edu.school}
                        </p>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm text-gray-500">{edu.year}</span>
                          <Badge className="bg-green-100 text-green-800">
                            {edu.grade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-tech-purple border-tech-purple">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Professional Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-tech-purple">
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-tech-purple text-sm font-medium mb-1">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500">{cert.year}</span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              cert.level === 'Expert' 
                                ? 'border-red-400 text-red-600' 
                                : cert.level === 'Advanced'
                                ? 'border-orange-400 text-orange-600'
                                : 'border-blue-400 text-blue-600'
                            }`}
                          >
                            {cert.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
