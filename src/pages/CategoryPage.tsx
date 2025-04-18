import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockArticles, getArticlesByCategory } from '../data/mockArticles';
import { Article } from '../types';
import NewsCard from '../components/NewsCard';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API request delay
    setTimeout(() => {
      if (category) {
        if (category.toLowerCase() === 'all') {
          setArticles(mockArticles);
        } else {
          setArticles(getArticlesByCategory(category));
        }
      }
      setIsLoading(false);
    }, 500);
  }, [category]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 h-64">
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-teal-600 mb-4 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-800">
          {category === 'all' ? 'All Articles' : `${category} Articles`}
        </h1>
        <p className="text-gray-600 mt-2">
          {articles.length} {articles.length === 1 ? 'article' : 'articles'} found
        </p>
      </div>
      
      {articles.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h2>
          <p className="text-gray-600">
            We couldn't find any articles in the {category} category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;