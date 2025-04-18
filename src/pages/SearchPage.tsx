import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { searchArticles } from '../data/mockArticles';
import { Article } from '../types';
import NewsCard from '../components/NewsCard';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      
      // Simulate API request delay
      setTimeout(() => {
        setArticles(searchArticles(query));
        setIsLoading(false);
      }, 500);
    } else {
      setArticles([]);
      setIsLoading(false);
    }
  }, [query]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
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
        
        <div className="flex items-center">
          <Search size={24} className="text-teal-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">
            Search Results for "{query}"
          </h1>
        </div>
        <p className="text-gray-600 mt-2 ml-9">
          {articles.length} {articles.length === 1 ? 'result' : 'results'} found
        </p>
      </div>
      
      {articles.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm p-8">
          <Search size={48} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No results found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any articles matching "{query}". Please try different keywords.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center rounded-full bg-teal-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600"
          >
            Browse All Articles
          </Link>
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

export default SearchPage;