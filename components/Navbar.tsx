import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
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
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3"
            onClick={() => setIsOpen(false)}
          >
            <LazyImage
              src="https://res.cloudinary.com/doehytakj/image/upload/v1769064681/WhatsApp_Image_2026-01-22_at_11.07.34_AM_zrckhq.jpg"
              alt="National Diagnostic Center Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-100 shadow-sm"
              imgClassName="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-none">
                National
              </span>
              <span className="text-[8px] sm:text-[10px] lg:text-xs font-medium text-slate-500 tracking-wider">
                DIAGNOSTIC CENTER
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group relative py-2"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      active ? 'text-primary' : 'text-slate-600 group-hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out rounded-full ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Phone size={18} />
              {CONTACT_INFO.phone}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex items-center p-2 text-slate-600 hover:text-primary transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {createPortal(
        <div 
          className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
            isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-300'
          }`}
        >
          <div 
            className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          <div 
            className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <span className="font-bold text-lg text-slate-900">Menu</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all ${
                        active 
                          ? 'bg-primary/10 text-primary font-semibold' 
                          : 'text-slate-700 font-medium hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <ChevronRight size={18} />}
                    </Link>
                  );
                })}
              </div>
              <div className="p-5 border-t border-slate-100 bg-slate-50">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-bold shadow-lg shadow-primary/30 active:scale-95 transition-all"
                >
                  <Phone size={20} />
                  Call {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;