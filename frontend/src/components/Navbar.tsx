import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Get current path

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            StockMarket<span className="text-yellow-400"> Pro</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className={`transition duration-300 ${location.pathname === "/" ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
                }`}
            >
              Dashboard
            </Link>
            <Link
              to="/watchlist"
              className={`transition duration-300 ${location.pathname === "/watchlist" ? "text-yellow-400 font-bold" : "hover:text-yellow-300"
                }`}
            >
              Watchlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
