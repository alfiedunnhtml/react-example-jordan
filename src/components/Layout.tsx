import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// This Layout component wraps all pages
// It ensures the Header and Footer are always present
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      
      {/* 
        The 'main' tag contains the specific content of the current page.
        'flex-grow' pushes the footer to the bottom if content is short.
      */}
      <main className="flex-grow">
        {/* Outlet is where the child route components (Home, About) will be rendered */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
