import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, Printer } from 'lucide-react';
import { getArticleById, getRelatedArticles } from '../data/mockArticles';
import { Article } from '../types';
import ArticleMeta from '../components/ArticleMeta';
import RelatedArticles from '../components/RelatedArticles';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate loading from API
      setIsLoading(true);
      setTimeout(() => {
        const foundArticle = getArticleById(id);
        setArticle(foundArticle || null);
        
        if (foundArticle) {
          setRelatedArticles(getRelatedArticles(foundArticle.id));
        }
        
        setIsLoading(false);
      }, 300);
      
      // Scroll to top when article changes
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse space-y-8 w-full max-w-3xl">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="flex items-center text-teal-600 hover:text-teal-800 font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to home link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-teal-600 mb-6 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Articles
        </Link>
        
        {/* Article header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {article.summary}
          </p>
        </header>
        
        {/* Article hero image */}
        <div className="relative rounded-xl overflow-hidden mb-10 shadow-lg">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-[400px] object-cover object-center"
          />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-3/4">
            {/* Article metadata */}
            <ArticleMeta article={article} />
            
            {/* Social sharing and actions */}
            <div className="flex items-center justify-between mb-8 py-4 border-y border-gray-200">
              <div className="flex space-x-3">
                <button className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors">
                  <Share2 size={18} />
                  <span className="text-sm">Share</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors">
                  <Bookmark size={18} />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors">
                  <Printer size={18} />
                  <span className="text-sm">Print</span>
                </button>
              </div>
            </div>
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Tags */}
            <div className="mt-10 mb-12">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar with related articles */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;