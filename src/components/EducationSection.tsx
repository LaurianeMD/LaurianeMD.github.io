import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      year: '2023 – 2025',
      degree: 'Master in Artificial Intelligence',
      school: 'Dakar Institute of Technology · Dakar, Senegal',
      description:
        'Focused on applied machine learning, deep learning, NLP, and computer vision. Completed capstone projects in healthcare AI, fraud detection, and generative AI.',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Python', 'PyTorch', 'TensorFlow'],
    },
    {
      year: '2019 – 2022',
      degree: 'Bachelor in Biomedical Engineering',
      school: 'ESP-UCAD · Dakar, Senegal',
      description:
        'Acquired technical foundations in biomedical systems, electronics, and healthcare technologies. Applied knowledge through academic projects and internships in biomedical equipment maintenance.',
      skills: ['Biomedical Engineering', 'Electronics', 'Medical Devices', 'Healthcare Systems'],
    },
  ];

  const certifications = [
    { name: 'Artificial Intelligence Fundamentals with Capstone Project', issuer: 'IBM', year: 'July 2025', level: 'Intermediate', credentialUrl: 'https://www.credly.com/badges/af4c2a09-353d-4a0a-9b13-bed0ccb043c6/public_url' },
    { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', year: 'November 2024', level: 'Intermediate', credentialUrl: 'https://learn.nvidia.com/certificates?id=9Dft9GA9QHeAY0wE1v-rSw' },
    { name: 'AI Programming with Python', issuer: 'Udacity', year: 'October 2024', level: 'Intermediate', credentialUrl: 'https://www.udacity.com/certificate/e/9cae6de6-2dce-11ef-bf38-5b75f3f41698' },
    { name: 'Introduction to Generative AI with AWS', issuer: 'Udacity', year: 'October 2024', level: 'Introductory', credentialUrl: 'https://www.udacity.com/certificate/e/7d6896d8-17e8-11ef-ac8f-e370719c9447' },
    { name: 'Azure AI Fundamentals', issuer: 'Microsoft', year: 'March 2024', level: 'Fundamental', credentialUrl: 'https://learn.microsoft.com/en-us/users/laurianembagdjedorenan-9823/credentials/feeae7c1e5ed5c62' },
  ];

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ IV</span>
            <span className="meta-label text-foreground/60 block">Education & Credentials</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">Academic</span>
              <br />
              record.
            </h2>
          </div>
        </motion.div>

        {/* Education entries */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( Academic Education )</span>
          </div>
          <div className="lg:col-span-9 space-y-px bg-foreground/15">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-background py-10"
              >
                <div className="grid grid-cols-12 gap-4 mb-4">
                  <div className="col-span-2 font-display text-3xl text-foreground italic">{edu.year}</div>
                  <div className="col-span-10">
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight mb-2">{edu.degree}</h3>
                    <div className="font-display text-lg italic text-foreground/70 mb-1">{edu.school}</div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2" />
                  <div className="col-span-10">
                    <p className="text-base leading-relaxed text-foreground/80 mb-4 max-w-2xl">{edu.description}</p>
                    <div className="flex flex-wrap items-baseline gap-x-2 pt-3 border-t border-foreground/15">
                      <span className="meta-label text-foreground/60 mr-2">Focus —</span>
                      {edu.skills.map((s, i) => (
                        <span key={i} className="font-display text-base text-foreground italic">
                          {s}{i < edu.skills.length - 1 && <span className="text-foreground/30 not-italic ml-2">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications — typographic table */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block">( Professional Certifications )</span>
          </div>
          <div className="lg:col-span-9">
            <div className="border-t border-foreground/30">
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-foreground/15 hover:bg-foreground/5 transition-colors group"
                >
                  <div className="col-span-1 meta-label text-foreground/40 pt-1">{String(i + 1).padStart(2, '0')}</div>
                  <div className="col-span-7 sm:col-span-6">
                    <div className="font-display text-xl text-foreground group-hover:italic transition-all">{cert.name}</div>
                    <div className="meta-label text-foreground/60 mt-1">{cert.issuer}</div>
                  </div>
                  <div className="col-span-2 meta-label text-foreground/60 pt-1">{cert.level}</div>
                  <div className="col-span-1 meta-label text-foreground/60 pt-1 text-right">{cert.year}</div>
                  <div className="col-span-1 flex justify-end">
                    <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground group-hover:rotate-12 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
