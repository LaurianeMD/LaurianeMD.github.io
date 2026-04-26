import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogCardProps {
  post: {
    title: string;
    description: string;
    date: string;
    category: string;
    readTime: string;
    link: string;
    type: string;
    author?: string;
    tags?: string[];
    image?: string;
  };
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const { t } = useLanguage();

  const dateLabel = new Date(post.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <article className="group grid grid-cols-12 gap-6 py-12 border-b border-foreground/15">
      {/* Index */}
      <div className="col-span-12 sm:col-span-1">
        <div className="meta-label text-foreground/70">
          № {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Plate (optional) */}
      {post.image ? (
        <div className="col-span-12 sm:col-span-4">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden bg-foreground/10 aspect-[4/3]"
          >
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ mixBlendMode: 'multiply' }}
            />
            <div className="absolute top-2 left-2 meta-label text-background bg-foreground px-2 py-1">
              Plate {String(index + 1).padStart(2, '0')}
            </div>
          </a>
        </div>
      ) : (
        <div className="hidden sm:block col-span-4" />
      )}

      {/* Content */}
      <div className={`col-span-12 ${post.image ? 'sm:col-span-7' : 'sm:col-span-11'} flex flex-col`}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 meta-label text-foreground/70 mb-4">
          <span>( {post.type.toUpperCase()} )</span>
          <span aria-hidden="true">—</span>
          <span>{post.category}</span>
          <span aria-hidden="true">—</span>
          <time dateTime={post.date} className="tabular-nums">{dateLabel}</time>
          <span aria-hidden="true">—</span>
          <span>{post.readTime}</span>
          {post.author && (
            <>
              <span aria-hidden="true">—</span>
              <span>{post.author}</span>
            </>
          )}
        </div>

        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-[1.02] tracking-tighter mb-4 group-hover:italic transition-all duration-500">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
        </h3>

        <p className="text-base leading-relaxed text-foreground/80 mb-6 max-w-2xl">
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap items-baseline gap-x-2 mb-6 pt-3 border-t border-foreground/15">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70 mr-2">
              [ KEYWORDS ]
            </span>
            {post.tags.map((tag, i) => (
              <span key={i} className="font-mono text-xs text-foreground">
                {tag}
                {i < post.tags!.length - 1 && (
                  <span className="text-foreground/40 mx-2">—</span>
                )}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 meta-label text-foreground border-b border-foreground pb-1 hover:gap-3 transition-all"
          >
            {t('blog.readMore')}
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
