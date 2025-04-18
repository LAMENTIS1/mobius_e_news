import React from 'react';
import { Clock, User, Tag, ExternalLink } from 'lucide-react';
import { Article } from '../types';

interface ArticleMetaProps {
  article: Article;
}

const ArticleMeta: React.FC<ArticleMetaProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <User size={18} className="text-gray-400" />
          <span className="font-medium">{article.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-gray-400" />
          <span>{formatDate(article.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Tag size={18} className="text-gray-400" />
          <span className="bg-teal-100 text-teal-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {article.tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <span>Source:</span>
        <a 
          href="#" 
          className="text-teal-600 hover:text-teal-800 flex items-center gap-1"
        >
          {article.source}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default ArticleMeta;