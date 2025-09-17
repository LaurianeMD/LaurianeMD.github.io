
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Calendar, User } from 'lucide-react';

const BlogSection = () => {
  const { t } = useLanguage();

  const blogPosts = [

      {
    title: t('blog.posts.medium.title'),
    description: t('blog.posts.medium.description'),
    date: '2025-04-20', // date réelle ou approximative
    category: 'Artificial Intelligence',
    readTime: '4 min',
    link: 'https://medium.com/@dmbagdjelauriane/from-cvs-to-smart-hiring-building-an-ai-powered-resume-evaluator-with-gemini-dbf3647255a3',
    type: 'article'
  }
// <    {
//       title: t('blog.posts.ml.title'),
//       description: t('blog.posts.ml.description'),
//       date: '2024-03-15',
//       category: t('blog.categories.ml'),
//       readTime: '8 min',
//       link: '#',
//       type: 'article'
//     },
//     {
//       title: t('blog.posts.ai.title'),
//       description: t('blog.posts.ai.description'),
//       date: '2024-02-28',
//       category: t('blog.categories.ai'),
//       readTime: '12 min',
//       link: '#',
//       type: 'article'
//     },
//     {
//       title: t('blog.posts.research.title'),
//       description: t('blog.posts.research.description'),
//       date: '2024-01-20',
//       category: t('blog.categories.research'),
//       readTime: '15 min',
//       link: '#',
//       type: 'publication'
//     },
//     {
//       title: t('blog.posts.tutorial.title'),
//       description: t('blog.posts.tutorial.description'),
//       date: '2023-12-10',
//       category: t('blog.categories.tutorial'),
//       readTime: '10 min',
//       link: '#',
//       type: 'article'
//     },
//     {
//       title: t('blog.posts.conference.title'),
//       description: t('blog.posts.conference.description'),
//       date: '2023-11-05',
//       category: t('blog.categories.conference'),
//       readTime: '6 min',
//       link: '#',
//       type: 'presentation'
//     },
//     {
//       title: t('blog.posts.data.title'),
//       description: t('blog.posts.data.description'),
//       date: '2023-10-22',
//       category: t('blog.categories.data'),
//       readTime: '9 min',
//       link: '#',
//       type: 'article'
//     }
  ]; 

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'publication':
        return 'bg-tech-purple text-white';
      case 'presentation':
        return 'bg-tech-indigo text-white';
      default:
        return 'bg-tech-blue text-white';
    }
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{t('blog.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(post.type)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500 text-xs">
                    <User className="w-3 h-3 mr-1" />
                    {post.readTime} {t('blog.readTime')}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-tech-blue hover:text-tech-purple"
                    onClick={() => window.open(post.link, '_blank')}
                  >
                    {t('blog.readMore')}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            className="bg-tech-blue hover:bg-tech-purple transition-colors"
            onClick={() => window.open('#', '_blank')}
          >
            {t('blog.viewAll')}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
