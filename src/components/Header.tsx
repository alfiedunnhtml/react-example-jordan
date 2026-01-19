import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-bakery-800 rounded-full flex items-center justify-center text-white text-xl shadow-lg group-hover:bg-bakery-900 transition-colors">
            J
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-bakery-900' : 'text-bakery-900'}`}>
            Jordan's Bakery
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-bakery-600 ${
              isActive('/') ? 'text-bakery-800 font-semibold' : 'text-bakery-900/70'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-bakery-600 ${
              isActive('/about') ? 'text-bakery-800 font-semibold' : 'text-bakery-900/70'
            }`}
          >
            Our Story
          </Link>
          <button className="bg-bakery-800 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-bakery-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Order Online
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
