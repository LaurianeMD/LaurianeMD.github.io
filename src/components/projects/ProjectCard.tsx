import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    impact: string;
    githubUrl: string;
    demoUrl: string;
    metrics?: { label: string; value: string }[];
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useLanguage();

  return (
    <article className="group grid grid-cols-12 gap-6 py-12 border-b border-foreground/15 hover:bg-foreground/5 transition-colors">
      {/* Index */}
      <div className="col-span-12 sm:col-span-1">
        <div className="meta-label text-foreground/40">№ {String(index + 1).padStart(2, '0')}</div>
      </div>

      {/* Plate (grayscale image) */}
      <div className="col-span-12 sm:col-span-4">
        <div className="relative overflow-hidden bg-foreground/10 aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            style={{ mixBlendMode: 'multiply' }}
          />
          <div className="absolute top-2 left-2 meta-label text-background bg-foreground px-2 py-1">
            Plate {String(index + 1).padStart(2, '0')}
          </div>
        </div>
        <div className="meta-label text-foreground/60 mt-3">
          ( {project.category.toUpperCase()} ) — {project.impact}
        </div>
      </div>

      {/* Content */}
      <div className="col-span-12 sm:col-span-7 flex flex-col">
        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-[1.02] tracking-tighter mb-3 group-hover:italic transition-all duration-500">
          {project.title}
        </h3>
        <p className="text-base leading-relaxed text-foreground/70 mb-6 max-w-2xl">
          {project.description}
        </p>

        {project.metrics && (
          <div className="grid grid-cols-2 gap-6 mb-6">
            {project.metrics.map((m, i) => (
              <div key={i} className="border-l border-foreground/20 pl-4">
                <div className="font-display text-3xl text-foreground italic leading-none">{m.value}</div>
                <div className="meta-label text-foreground/60 mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-baseline gap-x-2 mb-6 pt-3 border-t border-foreground/15">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/60 mr-2">
            [ SCHEMA_TECH ]
          </span>
          {project.technologies.map((tech, i) => (
            <span key={i} className="font-mono text-xs text-foreground">
              {tech}
              {i < project.technologies.length - 1 && (
                <span className="text-foreground/30 mx-2">—</span>
              )}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 meta-label text-foreground border-b border-foreground pb-1 hover:gap-3 transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            {t('projects.viewCode')}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:rotate-45 transition-transform" />
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 meta-label text-foreground border-b border-foreground pb-1 hover:gap-3 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {t('projects.liveDemo')}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
