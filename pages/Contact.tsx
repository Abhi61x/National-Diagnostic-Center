import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Stethoscope, User } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'patient' | 'doctor'>('patient');

  // Generic handler for form submission simulation
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = formType === 'patient' 
      ? "Hi, I'm contacting you from the website regarding an inquiry."
      : "Hi, I am a doctor looking to refer a patient for diagnostics.";
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Contact Us - Phone Number & Address | National Diagnostic Center"
        description="Contact National Diagnostic Center Lucknow for home sample collection and test inquiries. Call +91 87072 62043 or visit us in Vasundhara Bihar."
        keywords="Contact National Diagnostic Center, Lab Phone Number Lucknow, Address Pathology Lab Vasundhara Bihar, Diagnostic Center Timings, Book Appointment WhatsApp, Lab Location Lucknow"
      />

      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-slate-600">We are here to help. Reach out to us for bookings, reports, or referrals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 lg:space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4">
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">Phone Support</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">24/7 Helpline</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-base sm:text-lg font-bold text-slate-900 hover:text-primary transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">Visit Lab</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">Vasundhara Bihar</p>
              <p className="text-xs sm:text-sm text-slate-900 font-medium line-clamp-2">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Clock size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">Working Hours</h3>
              <div className="w-full space-y-1">
                <div className="flex justify-between text-[10px] sm:text-xs">
                  <span className="text-slate-500">Daily</span>
                  <span className="font-medium text-slate-900">8AM - 9:30PM</span>
                </div>
                <div className="flex justify-between text-[10px] sm:text-xs pt-1 border-t border-slate-100">
                  <span className="font-bold text-red-500">Emergency</span>
                  <span className="font-bold text-red-600">24x7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Visual Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              
              {/* Tabs */}
              <div className="flex p-1 bg-slate-100 rounded-xl mb-6 sm:mb-8">
                <button
                  onClick={() => setFormType('patient')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    formType === 'patient' 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <User size={18} />
                  Patient Inquiry
                </button>
                <button
                  onClick={() => setFormType('doctor')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    formType === 'doctor' 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <Stethoscope size={18} />
                  Doctor Referral
                </button>
              </div>

              {formType === 'patient' ? (
                /* Patient Form */
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Your Name</label>
                      <input type="text" className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Enter name" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Enter phone" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="pt-2">
                    <Button variant="whatsapp" type="submit" className="text-sm sm:text-base">
                      Send Inquiry via WhatsApp
                    </Button>
                  </div>
                </form>
              ) : (
                /* Doctor Referral Form */
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                   <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 mb-4">
                      <p className="text-sm text-sky-800">
                        <strong>Doctors:</strong> Use this form to refer patients for diagnostic tests. We ensure priority processing for referred cases.
                      </p>
                   </div>
                   
                   <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">Doctor Details</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Doctor Name</label>
                      <input type="text" required className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Dr. Name" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Clinic/Hospital</label>
                      <input type="text" required className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Clinic Name" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 mt-6">Patient Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Patient Name</label>
                      <input type="text" required className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Patient Name" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Patient Phone</label>
                      <input type="tel" required className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Patient Phone" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Tests Required / Clinical Notes</label>
                    <textarea required rows={3} className="w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="List required tests..."></textarea>
                  </div>
                  <div className="pt-2">
                    <Button variant="primary" type="submit" className="text-sm sm:text-base w-full md:w-auto">
                      Submit Referral
                    </Button>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-2">
                      Clicking submit will open WhatsApp to send these details to our center manager.
                    </p>
                  </div>
                </form>
              )}
            </div>

             {/* Map */}
             <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-[300px]">
              <iframe 
                src={CONTACT_INFO.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;