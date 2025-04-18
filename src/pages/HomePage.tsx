import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import NewsCard from '../components/NewsCard';
import { mockArticles, getCategories } from '../data/mockArticles';
import { Article } from '../types';

const HomePage: React.FC = () => {
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Get the first article as featured (in a real app, this would be selected differently)
    setFeaturedArticle(mockArticles[0]);
    
    // Get all articles except the featured one, sorted by date
    const sortedArticles = [...mockArticles]
      .filter(article => article.id !== mockArticles[0].id)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setRecentArticles(sortedArticles);
    setCategories(getCategories());
  }, []);

  if (!featuredArticle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Article
            </h2>
            <Link 
              to="/categories/all" 
              className="flex items-center text-teal-600 hover:text-teal-800 font-medium"
            >
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <NewsCard article={featuredArticle} featured={true} />
        </section>
        
        {/* Recent Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Clock size={22} className="text-teal-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Recent Articles</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.slice(0, 6).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/categories/all" 
              className="inline-flex items-center rounded-full bg-teal-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600"
            >
              View More Articles
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </section>
        
        {/* Categories Section */}
        <section>
          <div className="flex items-center mb-8">
            <TrendingUp size={22} className="text-teal-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Browse by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/categories/${category}`}
                className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#2a4365]/80 transition-opacity group-hover:opacity-90"></div>
                <div className="relative h-40 p-6 flex flex-col justify-center items-center text-center text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform">
                    {category}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                    <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                      View Articles
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;