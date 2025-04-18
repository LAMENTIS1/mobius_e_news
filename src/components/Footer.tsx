import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Github, 
  Twitter, 
  Facebook, 
  Mail, 
  Globe 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a365d] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Newspaper size={24} className="text-teal-400" />
              <span className="text-xl font-bold">Mobius E-News</span>
            </div>
            <p className="text-gray-300 text-sm">
              Intelligent news and research portal delivering Tomorrow.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/categories/Technology" className="hover:text-teal-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/categories/Science" className="hover:text-teal-400 transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/categories/Health" className="hover:text-teal-400 transition-colors">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/categories/Environment" className="hover:text-teal-400 transition-colors">
                  Environment
                </Link>
              </li>
              <li>
                <Link to="/categories/Energy" className="hover:text-teal-400 transition-colors">
                  Energy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to get the latest updates on technology and research.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white/20 transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-teal-500 hover:bg-teal-600 p-1 rounded-full transition-colors"
                >
                  <Mail size={16} />
                </button>
              </div>
              <p className="text-gray-400 text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart E-News Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
