import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, PlusCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GlobalXFund</span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            <Link 
              to="/campaigns" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Explore
            </Link>
            <Link 
              to="/create" 
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center hover:bg-green-700"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Start a Campaign
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}