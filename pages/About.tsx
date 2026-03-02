import React, { useState, useEffect } from 'react';
import { Users, Activity, Award, X, ZoomIn } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import LazyImage from '../components/LazyImage';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const galleryImages = [
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769010359/IMG_1911_ehywqs.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769010360/IMG_9741_vjmgtl.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769010362/IMG_2502_v54han.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769010363/IMG_8796_qna75i.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769064941/IMG-20260122-WA0010_kzpkaq.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769064942/IMG_8337_y0xump.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170085/IMG-20260123-WA0017_rd0d2w.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170085/IMG-20260123-WA0016_nx65z0.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170086/IMG-20260123-WA0014_ckuwzf.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170086/IMG-20260123-WA0018_hteohi.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170086/IMG-20260123-WA0015_kcurvo.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170086/IMG-20260123-WA0012_ylresz.jpg",
    "https://res.cloudinary.com/djhgkdqwl/image/upload/v1769170087/IMG-20260123-WA0013_t7a0au.jpg"
  ];

  return (
    <div className="bg-white relative">
      <SEO 
        title="About Us - National Diagnostic Center Lucknow"
        description="Learn about National Diagnostic Center's mission to provide accurate and affordable pathology services in Lucknow. 15+ years of experience."
        keywords="About National Diagnostic Center, NABL Accredited Lab Lucknow, Pathology Lab History, Dr Pathologist Lucknow, Automated Lab Technology, Medical Team Lucknow"
      />

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Facility Preview" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}

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
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center mb-16 sm:mb-24">
          <div>
            <LazyImage 
              src="https://res.cloudinary.com/djhgkdqwl/image/upload/v1769010363/IMG_8796_qna75i.jpg" 
              alt="Lab equipment and staff" 
              className="rounded-3xl shadow-2xl h-[300px] sm:h-[400px] lg:h-[450px]"
              imgClassName="rounded-3xl object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Our Story & Mission</h2>
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              Founded in 2010, National Diagnostic Center started with a simple mission: to make high-quality diagnostic services accessible to every local family. Over the last decade, we have grown into a state-of-the-art facility trusted by leading doctors and hospitals.
            </p>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              We understand that behind every sample is a person waiting for answers. That’s why we invest heavily in automation to reduce human error and speed up reporting times.
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

        {/* Video Section */}
        <div className="mb-20 sm:mb-28">
           <div className="text-center mb-8">
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900">See Our Lab in Action</h2>
              <p className="text-slate-600 mt-2">A glimpse into our daily operations and standards</p>
           </div>
           <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video max-w-5xl mx-auto border-4 border-white">
              <video 
                 controls 
                 className="w-full h-full object-cover"
                 preload="metadata"
                 poster="https://res.cloudinary.com/djhgkdqwl/image/upload/v1769010359/IMG_1911_ehywqs.jpg"
              >
                 <source src="https://res.cloudinary.com/djhgkdqwl/video/upload/v1769010364/IMG_0736_az5pnn.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
              </video>
           </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20 sm:mb-28">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">Our Advanced Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {galleryImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                        <LazyImage 
                            src={img} 
                            alt={`Lab facility view ${idx + 1}`} 
                            className="w-full h-full"
                            imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30">
                              <ZoomIn size={32} />
                            </div>
                          </div>
                        </div>
                    </div>
                ))}
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