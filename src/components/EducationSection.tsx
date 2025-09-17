
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      year: '2023 – 2025',
      degree: 'Master in Artificial Intelligence & Data Science',
      school: 'Dakar Institute of Technology · Dakar, Senegal',
      description:
        'Focused on applied machine learning, deep learning, NLP, and computer vision. Completed capstone projects in healthcare AI, fraud detection, and generative AI.',
      grade: 'Graduated',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Python', 'PyTorch', 'TensorFlow']
    },
    {
      year: '2019 – 2022',
      degree: 'Bachelor in Biomedical Engineering',
      school: 'ESP-UCAD · Dakar, Senegal',
      description:
        'Acquired technical foundations in biomedical systems, electronics, and healthcare technologies. Applied knowledge through academic projects and internships in biomedical equipment maintenance.',
      grade: 'Graduated',
      skills: ['Biomedical Engineering', 'Electronics', 'Medical Devices', 'Maintenance', 'Healthcare Systems']
    }
  ];

  const certifications = [
    {
      name: 'Artificial Intelligence Fundamentals with Capstone Project',
      issuer: 'IBM',
      year: 'July 2025',
      level: 'Intermediate',
      link: 'https://www.credly.com/badges/af4c2a09-353d-4a0a-9b13-bed0ccb043c6/public_url'
    },
    {
      name: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      year: 'November 2024',
      level: 'Intermediate',
      link: 'https://learn.nvidia.com/certificates?id=9Dft9GA9QHeAY0wE1v-rSw'
    },
    {
      name: 'AI Programming with Python',
      issuer: 'Udacity',
      year: 'October 2024',
      level: 'Intermediate',
      link: 'https://www.udacity.com/certificate/e/9cae6de6-2dce-11ef-bf38-5b75f3f41698'
    },
    {
      name: 'Introduction to Generative AI with AWS',
      issuer: 'Udacity',
      year: 'October 2024',
      level: 'Introductory',
      link: 'https://www.udacity.com/certificate/e/7d6896d8-17e8-11ef-ac8f-e370719c9447'
    },
    {
      name: 'Azure AI Fundamentals',
      issuer: 'Microsoft',
      year: 'March 2024',
      level: 'Fundamental',
      link: 'https://learn.microsoft.com/en-us/users/laurianembagdjedorenan-9823/credentials/feeae7c1e5ed5c62?ref=https%3A%2F%2Fwww.linkedin.com%2F&source=docs'
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
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                        <p className="text-tech-purple text-sm font-medium mb-1">{cert.issuer}</p>
                        <div className="flex items-center gap-3 mb-3">
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

                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center px-3 py-2 rounded-md bg-tech-blue text-white text-sm hover:bg-tech-purple transition-colors"
                          title="View certificate"
                        >
                          View Certificate
                        </a>
                      )}
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
