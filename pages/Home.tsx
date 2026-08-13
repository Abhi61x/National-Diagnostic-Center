import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Microscope, Clock, MapPin, Star, 
  FileText, Home as HomeIcon, Award, Zap, CheckCircle2, 
  Phone, ArrowRight, Activity, Users,
  CalendarCheck, Truck, Stethoscope, Bell, Search, HeartPulse
} from 'lucide-react';
import { PACKAGES, CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import PackageCard from '../components/PackageCard';
import TestimonialSlider from '../components/TestimonialSlider';
import LazyImage from '../components/LazyImage';
import { useBooking } from '../contexts/BookingContext';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const { openBooking } = useBooking();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/packages?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "National Diagnostic Center",
    "image": "https://res.cloudinary.com/doehytakj/image/upload/v1769064681/WhatsApp_Image_2026-01-22_at_11.07.34_AM_zrckhq.jpg",
    "@id": "https://nationaldiagnostic.vercel.app",
    "url": "https://nationaldiagnostic.vercel.app",
    "telephone": CONTACT_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tedipuliya ring road shope no 3 Vasundhara Bihar gate",
      "addressLocality": "Lucknow",
      "postalCode": "226022",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.878,
      "longitude": 80.956
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:30"
    },
    "sameAs": [
      "https://www.facebook.com/share/1734QNKL1p/?mibextid=wwXIfr",
      "https://www.instagram.com/nationaldiagnosticc?igsh=aHVsbjZwZWdtenNp"
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="National Diagnostic Center | Lucknow's Advanced Pathology & Labs"
        description="Premium diagnostic services in Lucknow. NABL standards, automated processing, and free doorstep sample collection. Trusted by thousands for accurate health reports."
        schema={localBusinessSchema}
      />

      {/* Notification Banner */}
      <div className="bg-slate-900 text-white text-[11px] sm:text-xs font-semibold py-2.5 overflow-hidden relative z-50">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-12 px-4">
           <span className="flex items-center gap-2"><Bell size={14} className="text-primary" /> Free Home Collection on all orders above ₹500</span>
           <span className="flex items-center gap-2"><Clock size={14} className="text-secondary" /> Daily Reporting: 8:00 AM - 9:30 PM | Open 24x7</span>
           <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-blue-400" /> NABL & ISO Standards Compliance</span>
           <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> Hotline: {CONTACT_INFO.phone}</span>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-28 lg:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/70 backdrop-blur-md border border-slate-100 shadow-sm mx-auto md:mx-0">
                <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-slate-600 uppercase tracking-widest">Lucknow's Excellence in Diagnostics</span>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  Healthcare With <br className="hidden sm:block" />
                  <span className="text-primary">Precision & Care.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-base lg:text-xl text-slate-600 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
                  Advanced automated testing with 99.9% accuracy. Experience seamless health checkups with Lucknow's most trusted pathology team.
                </p>
              </div>

              <form onSubmit={handleSearch} className="max-w-md mx-auto md:mx-0 relative">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-11 pr-28 sm:pr-32 py-3.5 sm:py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-lg shadow-slate-200/50 text-sm sm:text-base"
                    placeholder="Search for a test..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 px-4 sm:px-6 bg-primary text-white rounded-xl font-bold hover:bg-sky-600 transition-all text-xs sm:text-sm">
                    Find Test
                  </button>
                </div>
              </form>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Button variant="whatsapp" className="w-full sm:w-auto px-8 shadow-xl shadow-green-500/20 py-3.5 sm:py-4" onClick={() => openBooking('Hero WhatsApp')}>
                  Book Appointment
                </Button>
                <a href={`tel:${CONTACT_INFO.phone}`} className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  Contact Helpline
                </a>
              </div>
            </div>
            
            <div className="relative mt-8 md:mt-0">
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-8 sm:border-[12px] border-white group bg-[#0e5c62]">
                <LazyImage 
                  src="https://res.cloudinary.com/gdlht4be/image/upload/v1786633049/WhatsApp_Image_2026-08-13_at_8.25.05_PM_a55ikj.jpg" 
                  alt="Laboratory Excellence" 
                  className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square bg-[#0e5c62]"
                  imgClassName="!object-contain w-full h-full p-2"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-slate-900">Same-Day Reporting</p>
                      <p className="text-xs text-slate-500">Fast, accurate results delivered via WhatsApp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900">Recommended Health Packages</h2>
            <Link to="/packages">
              <Button variant="outline" className="px-8 border-slate-200 text-slate-700 hover:border-primary">View All Packages</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.filter(p => p.isPopular).map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">Why Choose National Diagnostic?</h2>
            <p className="text-slate-600 text-lg">We combine advanced technology with a patient-first approach to deliver excellence in healthcare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <ShieldCheck className="text-blue-500" />, title: "NABL Standards", desc: "Strict adherence to international quality protocols for 100% reliability." },
              { icon: <Zap className="text-orange-500" />, title: "Fast Reporting", desc: "Automated processing ensures most reports are delivered within 24 hours." },
              { icon: <Truck className="text-green-500" />, title: "Home Collection", desc: "Professional phlebotomists at your doorstep for maximum convenience." },
              { icon: <Award className="text-purple-500" />, title: "Expert Team", desc: "Highly qualified pathologists and technicians with years of experience." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4">Trusted by Thousands</h2>
            <p className="text-slate-600">See what our patients have to say about our services.</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;