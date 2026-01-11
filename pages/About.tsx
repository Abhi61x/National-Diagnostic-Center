import React from 'react';
import { Users, Activity, Award, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import LazyImage from '../components/LazyImage';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-slate-50 py-12 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Dedicated to Excellence in Diagnostic Care</h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
              At National Diagnostic Center, we combine medical expertise with cutting-edge technology to provide you with the most accurate health insights.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-20">
          <div>
            <LazyImage 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Lab equipment" 
              className="rounded-3xl shadow-2xl h-[250px] sm:h-[400px]"
              imgClassName="rounded-3xl"
            />
          </div>
          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Our Story & Mission</h2>
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              Founded in 2010, National Diagnostic Center started with a simple mission: to make high-quality diagnostic services accessible to every local family. Over the last decade, we have grown into a state-of-the-art facility trusted by leading doctors and hospitals.
            </p>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              We understand that behind every sample is a person waiting for answers. That’s why we invest heavily in automation to reduce human error and speed up reporting times, ensuring you get the care you need, when you need it.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="border-l-4 border-primary pl-4">
                 <p className="text-2xl sm:text-3xl font-bold text-slate-900">15+</p>
                 <p className="text-xs sm:text-sm text-slate-500">Years Experience</p>
               </div>
               <div className="border-l-4 border-secondary pl-4">
                 <p className="text-2xl sm:text-3xl font-bold text-slate-900">50k+</p>
                 <p className="text-xs sm:text-sm text-slate-500">Patients Served</p>
               </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          <div className="p-6 sm:p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow">
             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-4 sm:mb-6">
               <Activity size={20} className="sm:w-6 sm:h-6" />
             </div>
             <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Accuracy Guaranteed</h3>
             <p className="text-sm sm:text-base text-slate-600">Our NABL accredited labs use 6-sigma quality control processes to ensure every result is precise.</p>
          </div>
          <div className="p-6 sm:p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow">
             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center text-secondary mb-4 sm:mb-6">
               <Users size={20} className="sm:w-6 sm:h-6" />
             </div>
             <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Patient First</h3>
             <p className="text-sm sm:text-base text-slate-600">From painless blood collection to easy-to-read reports, we design our services around your comfort.</p>
          </div>
          <div className="p-6 sm:p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow">
             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 sm:mb-6">
               <Award size={20} className="sm:w-6 sm:h-6" />
             </div>
             <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Transparent Pricing</h3>
             <p className="text-sm sm:text-base text-slate-600">No hidden charges. What you see on our website is exactly what you pay.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center">
           <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to prioritize your health?</h2>
           <div className="flex justify-center gap-4">
              <Button variant="whatsapp" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')} className="text-sm sm:text-base">
                Book an Appointment
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;