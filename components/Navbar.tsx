import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import LazyImage from './LazyImage';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tests & Packages', path: '/packages' },
    { name: 'Offers', path: '/offers' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Calculate top offset for mobile menu based on navbar height (h-16 on mobile/sm)
  const mobileMenuTopClass = "top-16 sm:top-20";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setIsOpen(false)}>
              <LazyImage 
                src="https://res.cloudinary.com/djhgkdqwl/image/upload/v1768151471/508002437_516683774863954_1954367889223686531_n_z7zaaz.jpg" 
                alt="National Diagnostic Center Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-100 shadow-sm"
                imgClassName="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-slate-900 leading-none">National</span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wider">DIAGNOSTIC CENTER</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
             <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                <Phone size={18} />
                <span>{CONTACT_INFO.phone}</span>
             </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`md:hidden fixed inset-x-0 ${mobileMenuTopClass} bottom-0 bg-white/98 backdrop-blur-md z-40 overflow-y-auto border-t border-slate-100`}>
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 mt-6 border-t border-slate-100">
               <a 
                 href={`tel:${CONTACT_INFO.phone}`}
                 className="flex w-full items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform"
               >
                 <Phone size={22} />
                 Call Now: {CONTACT_INFO.phone}
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;