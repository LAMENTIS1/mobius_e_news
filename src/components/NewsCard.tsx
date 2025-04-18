import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ExternalLink } from 'lucide-react';
import { Article } from '../types';

interface NewsCardProps {
  article: Article;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl bg-white hover:translate-y-[-8px]">
        <div className="relative h-72 overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <div className="mb-2 flex items-center space-x-2 text-sm">
              <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold">
                {article.category}
              </span>
            </div>
            <h2 className="mb-2 text-2xl font-bold leading-tight">
              {article.title}
            </h2>
          </div>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-600">{article.summary}</p>
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
              <Clock size={16} />
              <span>{formatDate(article.date)}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              to={`/article/${article.id}`} 
              className="inline-flex items-center rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600"
            >
              Read More
              <ExternalLink size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] bg-white">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold leading-tight text-gray-800 line-clamp-2">
          {article.title}
        </h3>
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          {article.summary}
        </p>
        <div className="flex flex-wrap items-center justify-between text-xs text-gray-500">
          <div className="mb-2 flex items-center space-x-2">
            <User size={14} />
            <span>{article.author}</span>
          </div>
          <div className="mb-2 flex items-center space-x-2">
            <Clock size={14} />
            <span>{formatDate(article.date)}</span>
          </div>
        </div>
        <Link 
          to={`/article/${article.id}`} 
          className="mt-2 inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-800"
        >
          Read More
          <ExternalLink size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;