import React, { useState } from 'react';
import { CheckCircle2, Clock, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { TestPackage } from '../types';
import Button from './Button';
import { useBooking } from '../contexts/BookingContext';

interface PackageCardProps {
  pkg: TestPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const { openBooking } = useBooking();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  const INITIAL_DISPLAY_COUNT = 3;
  const hasMore = pkg.features.length > INITIAL_DISPLAY_COUNT;
  const displayedFeatures = isExpanded ? pkg.features : pkg.features.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full overflow-hidden relative group">
      {pkg.isPopular && (
        <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide">
          Most Popular
        </div>
      )}
      
      <div className="p-4 sm:p-6 pb-2">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold mb-3">
          {pkg.category}
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
        <p className="text-slate-500 text-xs sm:text-sm mb-4">Recommended for: {pkg.recommendedFor}</p>
        
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900">₹{pkg.price}</span>
          <span className="text-xs sm:text-sm text-slate-400 line-through">₹{pkg.originalPrice}</span>
          <span className="text-xs sm:text-sm font-semibold text-green-600 ml-2">{discount}% OFF</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mx-4 sm:mx-6"></div>

      <div className="p-4 sm:p-6 pt-4 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-slate-700">
           <FileText size={16} className="text-secondary" />
           <span>Includes {pkg.parameters} Parameters</span>
        </div>
        
        <ul className="space-y-2 sm:space-y-3 mb-4">
          {displayedFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 animate-in fade-in slide-in-from-top-1 duration-300">
              <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {hasMore && (
           <button 
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-xs font-semibold text-primary hover:text-sky-700 transition-colors flex items-center gap-1 mb-4 focus:outline-none w-fit"
           >
             {isExpanded ? (
               <>Read Less <ChevronUp size={14} /></>
             ) : (
               <>Read More (+{pkg.features.length - INITIAL_DISPLAY_COUNT} tests) <ChevronDown size={14} /></>
             )}
           </button>
        )}

        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-400 mb-6 mt-auto">
           <Clock size={14} />
           <span>Report within 24 hours</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 pt-0 mt-auto">
        <Button 
           variant="whatsapp" 
           fullWidth 
           onClick={() => openBooking(pkg.title)}
           className="text-sm sm:text-base py-2.5 sm:py-3"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;