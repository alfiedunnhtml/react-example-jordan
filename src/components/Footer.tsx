import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bakery-900 text-bakery-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-bakery-100 rounded-full flex items-center justify-center text-bakery-900 text-sm font-bold">
                J
              </div>
              <span className="text-xl font-bold font-serif">Jordan's Bakery</span>
            </Link>
            <p className="text-bakery-200/80 leading-relaxed">
              Crafting memories one loaf at a time. Fresh, organic, and made with love in the heart of the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-bakery-200/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-bakery-200/80 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-bakery-200/80 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="text-bakery-200/80 hover:text-white transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-bakery-200/80">
              <li>42 High Street<br />London, SW1A 1AA</li>
              <li>+44 20 7123 4567</li>
              <li>hello@jordansbakery.co.uk</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Stay in the loop</h4>
            <p className="text-bakery-200/80 mb-4">Subscribe for seasonal specials.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-bakery-800 text-white placeholder-bakery-400 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-bakery-400"
              />
              <button className="bg-white text-bakery-900 px-4 py-2 rounded-lg font-medium hover:bg-bakery-100 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-bakery-800 pt-8 text-center text-bakery-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Jordan's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
