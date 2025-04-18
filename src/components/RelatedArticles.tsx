import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Article } from '../types';

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  articles, 
  title = "Related Articles" 
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="group flex gap-3 p-2 rounded-lg hover:bg-white transition-colors"
          >
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-800 leading-tight mb-1 line-clamp-2">
                {article.title}
              </h4>
              <div className="flex items-center justify-between mt-2">
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  {article.category}
                </span>
                <Link 
                  to={`/article/${article.id}`} 
                  className="text-teal-600 text-sm font-medium flex items-center hover:text-teal-800"
                >
                  Read
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;