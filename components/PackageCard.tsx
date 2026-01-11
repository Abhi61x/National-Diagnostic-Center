import React from 'react';
import { CheckCircle2, Clock, FileText } from 'lucide-react';
import { TestPackage } from '../types';
import Button from './Button';
import { useBooking } from '../contexts/BookingContext';

interface PackageCardProps {
  pkg: TestPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const { openBooking } = useBooking();
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full overflow-hidden relative group">
      {pkg.isPopular && (
        <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Most Popular
        </div>
      )}
      
      <div className="p-6 pb-2">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
          {pkg.category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
        <p className="text-slate-500 text-sm mb-4">Recommended for: {pkg.recommendedFor}</p>
        
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-3xl font-bold text-slate-900">₹{pkg.price}</span>
          <span className="text-sm text-slate-400 line-through">₹{pkg.originalPrice}</span>
          <span className="text-sm font-semibold text-green-600 ml-2">{discount}% OFF</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mx-6"></div>

      <div className="p-6 pt-4 flex-grow">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-slate-700">
           <FileText size={16} className="text-secondary" />
           <span>Includes {pkg.parameters} Parameters</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {pkg.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
          {pkg.features.length > 4 && (
            <li className="text-xs text-primary font-medium pl-6">
              + {pkg.features.length - 4} more tests
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
           <Clock size={14} />
           <span>Report within 24 hours</span>
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Button 
           variant="whatsapp" 
           fullWidth 
           onClick={() => openBooking(pkg.title)}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;