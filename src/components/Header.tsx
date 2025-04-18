import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  User 
} from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/categories/Technology" className="hover:text-blue-200 transition-colors">Technology</Link>
            <Link to="/categories/Science" className="hover:text-blue-200 transition-colors">Science</Link>
            <Link to="/categories/Health" className="hover:text-blue-200 transition-colors">Health</Link>
            
            <form onSubmit={handleSearch} className="relative ml-4">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 px-4 py-1 rounded-full bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
              >
                <Search size={16} />
              </button>
            </form>
            
            <Link 
              to="/admin" 
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <User size={16} />
              <span>Admin</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/20 animate-fadeIn">
            <ul className="space-y-4 pb-4">
              <li>
                <Link 
                  to="/" 
                  className="block hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/Technology" 
                  className="block hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/Science" 
                  className="block hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Science
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories/Health" 
                  className="block hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Health
                </Link>
              </li>
              <li className="pt-2">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  >
                    <Search size={18} />
                  </button>
                </form>
              </li>
              <li className="pt-2">
                <Link 
                  to="/admin" 
                  className="flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  <span>Admin Login</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;