import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Microscope, Clock, MapPin, Star, 
  FileText, Home as HomeIcon, Award, Zap, CheckCircle2, 
  Phone, ArrowRight, Percent, Activity, Users,
  CalendarCheck, Truck, Stethoscope
} from 'lucide-react';
import { PACKAGES, OFFERS, CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import PackageCard from '../components/PackageCard';
import TestimonialSlider from '../components/TestimonialSlider';
import LazyImage from '../components/LazyImage';
import { useBooking } from '../contexts/BookingContext';

const Home: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <div className="flex flex-col w-full">
      
      {/* 1️⃣ Hero Section (Above the Fold) */}
      <section className="relative bg-gradient-to-b from-sky-50 to-white pt-6 pb-8 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white shadow-sm border border-slate-100 mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-slate-700 uppercase tracking-wide">Lucknow's Trusted Lab</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight lg:leading-[1.15]">
                Trusted Diagnostic & <br className="hidden lg:block" />
                <span className="text-primary">Pathology Lab</span>
              </h1>
              
              <p className="text-sm sm:text-lg lg:text-xl text-slate-600 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Accurate Blood Tests • Fast Reports • Free Home Sample Collection
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-2 lg:pt-4">
                <Button variant="whatsapp" onClick={() => openBooking('WhatsApp Booking from Hero')}>
                  Book on WhatsApp
                </Button>
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Button variant="call" className="w-full sm:w-auto">
                    Call for Home Visit
                  </Button>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 pt-2 flex items-center justify-center lg:justify-start gap-2">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 fill-yellow-500" />
                <span>Rated 4.9/5 by 10,000+ Patients</span>
              </p>
            </div>
            
            <div className="relative mt-2 lg:mt-0 order-1 lg:order-2">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Lab Technician" 
                className="relative rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl border-4 border-white z-10 w-full h-[220px] sm:h-[400px] lg:h-[500px]"
              />
              {/* Floating Card - Adjusted for mobile */}
              <div className="absolute bottom-3 left-3 lg:-left-8 bg-white p-2 sm:p-4 rounded-xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-[160px] sm:max-w-none">
                 <div className="bg-green-100 p-1.5 sm:p-3 rounded-full">
                   <Clock className="text-green-600 w-4 h-4 sm:w-6 sm:h-6" />
                 </div>
                 <div>
                   <p className="font-bold text-slate-900 text-xs sm:text-base">Reports in 24 Hrs</p>
                   <p className="text-[9px] sm:text-xs text-slate-500">Digital & Accurate</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Trust Proof Strip */}
      <section className="bg-slate-900 py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-2 lg:gap-6 text-white">
             {[
               { icon: ShieldCheck, text: "NABL Standards" },
               { icon: Users, text: "10,000+ Patients" },
               { icon: Zap, text: "Same Day Reports" },
               { icon: Award, text: "Trained Experts" }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-row items-center justify-center gap-2 lg:gap-3 text-center md:text-left">
                 <item.icon className="text-primary w-5 h-5 sm:w-8 sm:h-8" />
                 <span className="font-semibold text-xs sm:text-base">{item.text}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Services Overview */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">Our Core Services</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 sm:mt-2">Everything you need for a complete health analysis</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 justify-center">
            {[
              { title: "Blood Tests", icon: Microscope, desc: "CBC, Lipid, Thyroid & more", color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Full Body Checkup", icon: Activity, desc: "Comprehensive health screening", color: "text-teal-600", bg: "bg-teal-50" },
              { title: "Preventive Care", icon: ShieldCheck, desc: "Diabetes & Heart health", color: "text-indigo-600", bg: "bg-indigo-50" },
              { title: "Home Collection", icon: HomeIcon, desc: "Free doorstep sample pickup", color: "text-orange-600", bg: "bg-orange-50" },
              { title: "Doctor Consultation", icon: Stethoscope, desc: "Connect with expert doctors", color: "text-rose-600", bg: "bg-rose-50" },
            ].map((service, idx) => (
              <div key={idx} className="group p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center lg:block gap-4" onClick={() => openBooking(`Inquiry: ${service.title}`)}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center lg:mb-4 group-hover:scale-110 transition-transform shrink-0`}>
                  <service.icon size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-0.5 lg:mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mb-0 lg:mb-4">{service.desc}</p>
                  <span className="text-primary font-semibold text-xs lg:text-sm hidden lg:flex items-center group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: How It Works Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs lg:text-sm">Process</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mt-1 sm:mt-2">How It Works</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 sm:mt-2">Get your health checkup done in 4 simple steps</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {[
                { 
                  step: "01", 
                  title: "Book Appointment", 
                  desc: "Call or WhatsApp us to schedule a home visit or lab walk-in.", 
                  icon: CalendarCheck,
                  color: "bg-blue-500"
                },
                { 
                  step: "02", 
                  title: "Sample Collection", 
                  desc: "Our phlebotomist collects samples safely from your home.", 
                  icon: Truck,
                  color: "bg-teal-500"
                },
                { 
                  step: "03", 
                  title: "Lab Processing", 
                  desc: "Samples are tested in our fully automated NABL compliant lab.", 
                  icon: Microscope,
                  color: "bg-indigo-500"
                },
                { 
                  step: "04", 
                  title: "Digital Report", 
                  desc: "Receive accurate reports via WhatsApp & Email within 24 hours.", 
                  icon: FileText,
                  color: "bg-orange-500"
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white lg:bg-transparent rounded-xl p-5 sm:p-6 lg:p-0 shadow-sm lg:shadow-none relative group text-center lg:text-left border border-slate-100 lg:border-none">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200 mx-auto lg:mx-0 mb-3 sm:mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={22} className="sm:w-6 sm:h-6" />
                    <div className="absolute -top-2 -right-2 bg-white text-slate-900 text-[10px] sm:text-xs font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border border-slate-100 shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Popular Test Packages */}
      <section id="packages" className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 sm:mb-8 lg:mb-10 gap-2 lg:gap-4">
            <div className="w-full md:w-auto">
              <span className="text-primary font-bold tracking-wider uppercase text-[10px] sm:text-xs lg:text-sm">Most Booked</span>
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mt-1">Popular Health Packages</h2>
            </div>
            <Link to="/packages" className="hidden md:block">
              <button className="text-slate-600 hover:text-primary font-medium flex items-center transition-colors">
                View All Packages <ArrowRight size={20} className="ml-1" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {PACKAGES.filter(p => p.isPopular).slice(0, 3).map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          
          <div className="mt-6 text-center md:hidden">
            <Link to="/packages">
              <Button variant="outline" fullWidth>View All Packages</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5️⃣ Why Choose Us */}
      <section className="py-8 sm:py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-16">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-2 lg:mb-4">Why Families Trust Us</h2>
            <p className="text-sm lg:text-base text-slate-600">We don't just test samples; we care for your health with precision and hygiene.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
            {[
              { title: "Accurate & Hygienic", text: "NABL compliant labs with automated machines ensuring zero human error.", icon: ShieldCheck },
              { title: "Experienced Staff", text: "Qualified technicians and pathologists with over 10 years of experience.", icon: Award },
              { title: "Transparent Pricing", text: "No hidden costs. The price you see is the price you pay.", icon: Percent },
              { title: "Timely Reports", text: "Get your reports delivered digitally via WhatsApp as soon as they are ready.", icon: Clock },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4 items-start">
                <div className="bg-sky-50 p-2 sm:p-3 rounded-lg text-primary shrink-0">
                  <feature.icon size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-0.5 sm:mb-1">{feature.title}</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Home Sample Collection */}
      <section className="py-8 sm:py-12 lg:py-20 bg-teal-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-800/30 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <span className="bg-teal-700 text-teal-100 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                Comfort at Home
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Free Home Sample Collection
              </h2>
              <p className="text-teal-100 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
                Why step out when we can come to you? Book a blood test from the comfort of your home. Our phlebotomists follow strict safety protocols.
              </p>
              
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                {['Safe & Hygienic Sample Collection', 'On-time Technician Arrival', 'No Extra Visit Charges'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle2 className="text-teal-300 w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium text-xs sm:text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="whatsapp" className="!bg-white !text-teal-900 hover:!bg-teal-50 shadow-none border-0 w-full sm:w-auto text-sm sm:text-base font-bold" onClick={() => openBooking('Home Collection Request')}>
                Book Home Sample Pickup
              </Button>
            </div>
            <div className="relative h-[220px] sm:h-[300px] lg:h-[500px] hidden md:block">
               <LazyImage 
                 src="https://res.cloudinary.com/djhgkdqwl/image/upload/v1768151189/AdobeStock_109612366_ydmiyv.jpg"
                 alt="Home collection kit"
                 className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl border-4 border-teal-700/50"
                 imgClassName="rounded-3xl"
               />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-10">
               <h2 className="text-xl sm:text-3xl font-bold text-slate-900">What Our Patients Say</h2>
               <p className="text-sm sm:text-base text-slate-600 mt-2">Real reviews from people who trust us with their health</p>
            </div>
            <TestimonialSlider />
         </div>
      </section>

      {/* 7️⃣ Offers & Promotions */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-6 sm:mb-8 lg:mb-10">
             <h2 className="text-xl sm:text-3xl font-bold text-slate-900">Limited Time Offers</h2>
             <p className="text-sm sm:text-base text-slate-600">Save more on your family's health checkups</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {OFFERS.slice(0,3).map((offer, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl p-5 lg:p-6 relative overflow-hidden bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition-shadow">
                   <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] lg:text-xs font-bold px-3 py-1 rounded-bl-xl">
                      Limited Time
                   </div>
                   <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-2">{offer.title}</h3>
                   <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{offer.discountPercentage}% OFF</div>
                   <p className="text-slate-500 text-xs lg:text-sm mb-4">{offer.description}</p>
                   <div className="border-t border-slate-100 pt-4 mt-auto">
                      <Button variant="outline" fullWidth className="text-sm py-2" onClick={() => openBooking(`Claim Offer: ${offer.code}`)}>
                        Claim {offer.code}
                      </Button>
                   </div>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* 8️⃣ Reports & Accuracy (Credibility) */}
      <section className="py-8 sm:py-12 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
             <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Precision in Every Report</h2>
                 <div className="space-y-4 sm:space-y-6">
                    <div className="flex gap-3 sm:gap-4">
                       <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary shrink-0">
                         <FileText size={20} className="lg:w-6 lg:h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-sm sm:text-base lg:text-lg text-slate-900">Digital Smart Reports</h4>
                         <p className="text-xs sm:text-sm text-slate-600">Easy to understand PDF reports delivered directly to your WhatsApp and Email.</p>
                       </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                       <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                         <ShieldCheck size={20} className="lg:w-6 lg:h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-sm sm:text-base lg:text-lg text-slate-900">6-Sigma Quality Control</h4>
                         <p className="text-xs sm:text-sm text-slate-600">Our labs undergo rigorous daily quality checks to ensure 99.9% accuracy.</p>
                       </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                       <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0">
                         <Zap size={20} className="lg:w-6 lg:h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-sm sm:text-base lg:text-lg text-slate-900">Fast Turnaround</h4>
                         <p className="text-xs sm:text-sm text-slate-600">Most routine test reports are available within 6-24 hours.</p>
                       </div>
                    </div>
                 </div>
               </div>
               <div className="bg-slate-100 h-40 sm:h-48 lg:h-auto relative">
                  <LazyImage 
                    src="https://res.cloudinary.com/djhgkdqwl/image/upload/v1768151062/MedTech-Round-Table-The-ROI-of-Surgical-Digital-Transformation-Resize_yvsxpg.jpg" 
                    alt="Digital Report on Tablet" 
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 sm:p-6 lg:p-8 z-10">
                    <p className="text-white font-medium text-xs sm:text-sm lg:text-base">Secure, Private & Confidential Reports</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 9️⃣ Location & Local Trust */}
      <section className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 lg:mb-6">Visit Our Lab Center</h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 lg:mb-8">
                Located conveniently in <strong>Lucknow</strong>, we are accessible for all your diagnostic needs. Walk-ins are welcome.
              </p>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start gap-4">
                   <MapPin className="text-primary shrink-0 mt-1" size={24} />
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm lg:text-base">Address</h4>
                     <p className="text-sm lg:text-base text-slate-600">{CONTACT_INFO.address}</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Clock className="text-primary shrink-0 mt-1" size={24} />
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm lg:text-base">Timings</h4>
                     <p className="text-sm lg:text-base text-slate-600">{CONTACT_INFO.hours.weekdays}</p>
                     <p className="text-sm lg:text-base text-slate-600">{CONTACT_INFO.hours.sunday} (Sunday)</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Phone className="text-primary shrink-0 mt-1" size={24} />
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm lg:text-base">Contact</h4>
                     <p className="text-sm lg:text-base text-slate-600">{CONTACT_INFO.phone}</p>
                   </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-8">
                 <Button onClick={() => window.open(CONTACT_INFO.mapUrl, '_blank')} fullWidth={true} className="md:w-auto">
                   Get Directions on Google Maps
                 </Button>
              </div>
            </div>
            
            <div className="h-[250px] sm:h-[300px] lg:h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200 order-1 lg:order-2">
               <iframe 
                  src={CONTACT_INFO.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lab Location"
                ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Final Strong CTA */}
      <section className="bg-primary py-8 sm:py-12 lg:py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Book Your Test Today</h2>
           <p className="text-sm sm:text-base lg:text-xl text-sky-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
             Don't ignore your health. Fast, accurate, and trusted diagnostic services are just a click away.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             {/* Force text color to be WhatsApp green against white background */}
             <Button variant="whatsapp" className="bg-white !text-[#25D366] hover:bg-slate-50" onClick={() => openBooking('Bottom CTA Booking')}>
               Book via WhatsApp
             </Button>
             <a href={`tel:${CONTACT_INFO.phone}`}>
               <Button className="bg-sky-700 hover:bg-sky-800 border border-sky-600 text-white shadow-none w-full sm:w-auto">
                 Call Now: {CONTACT_INFO.phone}
               </Button>
             </a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;