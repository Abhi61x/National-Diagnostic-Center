import React from 'react';
import { OFFERS, CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import { Timer, Tag, ArrowRight } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import SEO from '../components/SEO';

const Offers: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Special Health Offers & Discounts | National Diagnostic Center"
        description="Grab limited-time discounts on blood tests and health checkup packages. Family wellness discounts, early bird specials, and more in Lucknow."
        keywords="Pathology Lab Offers, Blood Test Discount, Health Checkup Deals, Medical Test Coupons"
      />

      {/* Hero */}
      <div className="bg-white pt-8 pb-6 sm:pt-16 sm:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs sm:text-sm font-bold mb-3 sm:mb-4 tracking-wide uppercase">Limited Time Deals</span>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">Special Offers & Promotions</h1>
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Prioritize your health without breaking the bank. Grab these exclusive discounts before they expire.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {OFFERS.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:transform hover:-translate-y-1 transition-all duration-300">
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${offer.bgGradient} p-5 sm:p-6 text-white h-28 sm:h-32 flex flex-col justify-center relative`}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <Tag size={18} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{offer.discountPercentage}% OFF</h3>
                <p className="text-white/90 font-medium text-sm sm:text-base">{offer.expiryDate === 'Limited Time' ? 'Limited Time Only' : `Expires: ${offer.expiryDate}`}</p>
              </div>
              
              <div className="p-5 sm:p-6 flex-grow flex flex-col">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{offer.title}</h4>
                <p className="text-slate-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">{offer.description}</p>
                
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-3 mb-6 text-center">
                  <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">Use Code</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-slate-800 tracking-wider">{offer.code}</span>
                </div>

                <Button 
                  variant="whatsapp" 
                  fullWidth 
                  className="text-sm sm:text-base py-2.5 sm:py-3"
                  onClick={() => openBooking(`Offer ${offer.code} - ${offer.title}`)}
                >
                  Claim Offer
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Section */}
        <div className="mt-12 sm:mt-16 bg-slate-900 rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Don't Delay Your Health Checkup</h2>
            <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto">Prevention is better than cure. Early detection can save lives. Book your test today and get same-day sample collection.</p>
            <div className="flex justify-center">
               <a href={`tel:${CONTACT_INFO.phone}`} className="inline-flex items-center text-primary font-bold hover:text-white transition-colors text-sm sm:text-base">
                  Call Us for Immediate Booking <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;