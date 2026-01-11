import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TestTube2, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

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

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <TestTube2 size={24} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none">National</span>
                <span className="text-xs font-medium text-slate-500 tracking-wider">DIAGNOSTIC CENTER</span>
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
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
               <a 
                 href={`tel:${CONTACT_INFO.phone}`}
                 className="flex w-full items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-semibold active:scale-95 transition-transform"
               >
                 <Phone size={20} />
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