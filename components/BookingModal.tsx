import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Loader2, MessageSquare } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { CONTACT_INFO } from '../constants';
import Button from './Button';

const BookingModal: React.FC = () => {
  const { isOpen, closeBooking, bookingDetails } = useBooking();
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setPhone('');
      setName('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Construct the message for the admin
    const message = `New Booking Request!
Name: ${name}
Phone: +91 ${phone}
Service: ${bookingDetails || 'General Appointment'}`;

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');

    // Move to a manual confirmation step instead of auto-success
    setStep('confirm-whatsapp');
  };

  const handleManualConfirm = () => {
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={closeBooking}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-8">
          {step === 'form' && (
            <>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Book Appointment</h2>
                <p className="text-slate-500 mt-2">
                  {bookingDetails ? `Requesting: ${bookingDetails}` : 'Enter your details to schedule a visit'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm font-medium">
                      +91
                    </span>
                    <input 
                      required
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full px-4 py-3 rounded-r-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      placeholder="98765 43210" 
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit Indian phone number"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button fullWidth type="submit" className="shadow-xl shadow-primary/20">
                    Confirm Booking
                  </Button>
                </div>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">Or book via WhatsApp</span>
                  </div>
                </div>

                <Button 
                  type="button" 
                  variant="whatsapp" 
                  fullWidth 
                  className="bg-[#25D366] hover:bg-[#20bd5a] shadow-none"
                  onClick={() => {
                    const text = bookingDetails 
                      ? `Hi, I want to book: ${bookingDetails}`
                      : `Hi, I want to book an appointment.`;
                    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </form>
            </>
          )}

          {step === 'processing' && (
            <div className="py-12 text-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900">Opening WhatsApp...</h3>
              <p className="text-slate-500">Please wait while we prepare your message.</p>
            </div>
          )}

          {step === 'confirm-whatsapp' && (
            <div className="py-8 text-center animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp Open Hua?</h3>
              <p className="text-slate-600 mb-6 px-4">
                WhatsApp khul gaya hoga. Message bhejein aur wapas aakar niche click karein.
              </p>
              <div className="space-y-3">
                <Button fullWidth onClick={handleManualConfirm} className="bg-green-600 hover:bg-green-700">
                  I have sent the message
                </Button>
                <Button fullWidth onClick={() => setStep('form')} variant="outline">
                  Back / Try Again
                </Button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="py-8 text-center animate-in zoom-in-50 duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
              <p className="text-slate-600 mb-4">
                Thank you <span className="font-semibold">{name}</span>. We have received your request.
              </p>
              
              {bookingDetails && (
                <div className="mb-6 p-3 bg-sky-50 text-sky-900 rounded-lg border border-sky-100 text-sm font-medium">
                  Service: {bookingDetails}
                </div>
              )}
              
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-start gap-3 text-left">
                <div className="bg-blue-100 p-2 rounded-full shrink-0">
                  <MessageSquare size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">SMS Sent</p>
                  <p className="text-sm text-slate-700">
                    A confirmation SMS has been sent to <span className="font-mono font-medium text-slate-900">+91 {phone}</span> with your appointment reference.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button fullWidth onClick={closeBooking} variant="outline">
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;