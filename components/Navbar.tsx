import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  // Better active route handling
  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  // Scroll lock when mobile menu open
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

          {/* Logo */}
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
              <span className="text-lg sm:text-xl font-bold text-slate-900 leading-none">
                National
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wider">
                DIAGNOSTIC CENTER
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Phone size={18} />
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="md:hidden flex items-center p-2 text-slate-600 hover:text-primary"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Portal to body) */}
      {isOpen && createPortal(
        <div className="md:hidden fixed top-16 sm:top-20 left-0 right-0 bottom-0 z-[60] bg-white overflow-y-auto border-t border-slate-100 shadow-xl animate-in slide-in-from-right duration-300">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-4 rounded-xl text-lg font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
              >
                <Phone size={22} />
                Call Now: {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;