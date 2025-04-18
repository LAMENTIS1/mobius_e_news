import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  Search,
  Edit,
  Trash2,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { mockArticles } from '../data/mockArticles';
import { Article } from '../types';

const AdminDashboard: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [filterQuery, setFilterQuery] = useState('');
  const navigate = useNavigate();
  
  // Filtered articles based on search query
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
    article.category.toLowerCase().includes(filterQuery.toLowerCase())
  );
  
  const handleLogout = () => {
    // In a real app, this would clear auth state
    navigate('/admin');
  };
  
  const handleDeleteArticle = (id: string) => {
    // In a real app, this would call an API
    if (window.confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(article => article.id !== id));
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1a365d] text-white min-h-screen hidden md:block">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <LayoutDashboard size={24} className="text-teal-400" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin/dashboard" 
                className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-white/10 text-white"
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/articles" 
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                <FileText size={20} />
                <span>Articles</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/users" 
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                <Users size={20} />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/settings" 
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
          
          <div className="mt-8 pt-4 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-white/5 transition-colors w-full"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <button
                onClick={handleLogout}
                className="md:hidden text-gray-600 hover:text-red-600"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>
        
        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Total Articles</p>
                  <h3 className="text-3xl font-bold text-gray-800">{articles.length}</h3>
                </div>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FileText size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Categories</p>
                  <h3 className="text-3xl font-bold text-gray-800">5</h3>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <LayoutDashboard size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Active Users</p>
                  <h3 className="text-3xl font-bold text-gray-800">124</h3>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <Users size={24} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Articles table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Articles</h2>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={filterQuery}
                      onChange={(e) => setFilterQuery(e.target.value)}
                      className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 w-full"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  
                  <button className="flex items-center justify-center gap-1 bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                    <Plus size={18} />
                    <span>New Article</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredArticles.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No articles found
                      </td>
                    </tr>
                  ) : (
                    filteredArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-md overflow-hidden">
                              <img 
                                src={article.imageUrl} 
                                alt={article.title}
                                className="h-full w-full object-cover" 
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                {article.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {article.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {article.author}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(article.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {article.id.length % 2 === 0 ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <CheckCircle size={12} className="mr-1" />
                              Published
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <XCircle size={12} className="mr-1" />
                              Draft
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              className="text-indigo-600 hover:text-indigo-800 p-1 rounded-full hover:bg-indigo-50"
                              title="Edit"
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50"
                              title="Delete"
                              onClick={() => handleDeleteArticle(article.id)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
              <div className="text-sm text-gray-500">
                Showing {filteredArticles.length} of {articles.length} articles
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;