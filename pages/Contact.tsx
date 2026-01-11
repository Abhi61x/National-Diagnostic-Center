import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">We are here to help. Reach out to us for bookings, reports, or queries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Support</h3>
              <p className="text-slate-500 mb-4">24/7 Helpline for appointments</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Visit Lab</h3>
              <p className="text-slate-500 mb-4">Walk-ins welcome during working hours</p>
              <p className="text-slate-900 font-medium">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Mon - Sat</span>
                  <span className="font-medium text-slate-900">{CONTACT_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Sunday</span>
                  <span className="font-medium text-slate-900">{CONTACT_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 h-[400px]">
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

            {/* Visual Form - CTA to WhatsApp */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Your Phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <div className="pt-2">
                  <Button variant="whatsapp" type="submit">
                    Send via WhatsApp
                  </Button>
                  <p className="text-xs text-slate-400 mt-2">
                    Note: Clicking send will open WhatsApp with your message.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;