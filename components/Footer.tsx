import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import LazyImage from './LazyImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LazyImage 
                src="https://res.cloudinary.com/doehytakj/image/upload/v1769064681/WhatsApp_Image_2026-01-22_at_11.07.34_AM_zrckhq.jpg" 
                alt="National Diagnostic Center Logo" 
                className="w-10 h-10 rounded-full border border-slate-700"
                imgClassName="rounded-full"
              />
              <span className="text-xl font-bold text-white">National Diagnostic Center</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Committed to providing accurate, timely, and affordable diagnostic services. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Tests & Packages', 'Offers', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li>Home Sample Collection</li>
              <li>Full Body Checkups</li>
              <li>Diabetes Management</li>
              <li>Thyroid Profiling</li>
              <li>Cardiac Care</li>
              <li>Vitamin Deficiency Tests</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-primary mt-1" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-primary" size={18} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-primary" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} National Diagnostic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;