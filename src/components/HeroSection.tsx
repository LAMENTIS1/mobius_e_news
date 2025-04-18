import React from 'react';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Intelligent News by Mobius",
  subtitle = "Discover the most relevant research, news, and insights powered by machine learning."
}) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-y-0 left-1/4 w-[200px] h-[600px] bg-blue-400 rotate-45 transform -translate-x-1/2"></div>
        <div className="absolute inset-y-0 right-1/4 w-[300px] h-[600px] bg-purple-400 -rotate-45 transform translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fadeIn">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-200">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
              <Link
                to="/categories/Technology"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 hover:bg-blue-50"
              >
                Browse Articles
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl relative">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                  <Newspaper size={24} className="text-white" />
                  <h3 className="text-xl font-semibold">Mobius News</h3>
                </div>
                
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <Newspaper size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="h-3 w-48 bg-white/30 rounded animate-pulse"></div>
                        <div className="h-2 w-32 bg-white/20 rounded mt-2 animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                  <div className="h-3 w-24 bg-white/30 rounded animate-pulse"></div>
                  <div className="bg-white/20 h-8 w-8 rounded-full flex items-center justify-center">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;