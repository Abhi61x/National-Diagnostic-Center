import React, { useState, useEffect } from 'react';
import { PACKAGES, CONTACT_INFO } from '../constants';
import PackageCard from '../components/PackageCard';
import PackageCardSkeleton from '../components/PackageCardSkeleton';
import Button from '../components/Button';
import TestimonialSlider from '../components/TestimonialSlider';
import { Search } from 'lucide-react';

const Packages: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'Full Body Checkup', 'Blood Test', 'Preventive Care'];

  // Simulate loading effect for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [filter]);

  const filteredPackages = filter === 'All' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 pt-8 pb-6 sm:pt-16 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">Tests & Health Packages</h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our wide range of diagnostic tests and preventive health checkups designed for every age group.
          </p>
        </div>
      </div>

      {/* Filters & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium text-xs sm:text-base transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {isLoading 
            ? Array(6).fill(0).map((_, i) => (
                <PackageCardSkeleton key={i} />
              ))
            : filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))
          }
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 sm:mt-28">
           <div className="text-center mb-8">
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900">Why Patients Trust Us</h2>
              <p className="text-slate-600 mt-2">Real feedback from people who chose our packages</p>
           </div>
           <TestimonialSlider />
        </div>

        {/* Custom Requirement CTA */}
        <div className="mt-12 sm:mt-20 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">Didn't find what you are looking for?</h2>
            <p className="text-emerald-50 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              We offer over 500+ individual pathology tests. Upload your prescription or call us to get a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="whatsapp" className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-none text-sm sm:text-base" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, do you have this test?`, '_blank')}>
                Chat on WhatsApp
              </Button>
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <Button variant="call" className="bg-emerald-800 hover:bg-emerald-900 border border-emerald-700 text-sm sm:text-base">
                  Call {CONTACT_INFO.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;