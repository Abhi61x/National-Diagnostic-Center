import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, FileText, Home, CreditCard, Clock, Search } from 'lucide-react';
import Button from '../components/Button';
import { CONTACT_INFO } from '../constants';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const faqs = [
    {
      category: "Test Preparations",
      icon: Clock,
      questions: [
        {
          q: "Do I need to fast before a blood test?",
          a: "It depends on the test. For Lipid Profile, Fasting Blood Sugar, and Thyroid profiles, 10-12 hours of fasting is typically recommended. For random blood sugar or CBC, fasting is usually not required. We will guide you specifically when you book."
        },
        {
          q: "Can I drink water during fasting?",
          a: "Yes, you can drink plain water. However, avoid tea, coffee, milk, or any other beverages as they may alter test results."
        }
      ]
    },
    {
      category: "Home Collection",
      icon: Home,
      questions: [
        {
          q: "Is home sample collection free?",
          a: "Yes, we offer free home sample collection across Lucknow for bills above ₹500. For smaller amounts, a nominal visiting charge may apply."
        },
        {
          q: "How safe is home collection?",
          a: "Our phlebotomists follow strict hygiene protocols, including wearing fresh gloves, masks, and using sterile, single-use vacuum tubes for every patient."
        }
      ]
    },
    {
      category: "Reports & Delivery",
      icon: FileText,
      questions: [
        {
          q: "When will I get my report?",
          a: "Most routine test reports (like CBC, Sugar, Thyroid) are delivered within 6-24 hours via WhatsApp and Email. Specialized tests may take 2-3 days."
        },
        {
          q: "Can I get a hard copy of the report?",
          a: "Yes, hard copies can be collected from our center. If you need it delivered to your home, a small courier fee may apply."
        }
      ]
    },
    {
      category: "Payments",
      icon: CreditCard,
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and major Credit/Debit cards. You can pay at the center or to the phlebotomist during home collection."
        },
        {
          q: "Is there an advance payment for home collection?",
          a: "No, you can pay the full amount after the sample is collected."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(section => {
    const filteredQuestions = section.questions.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...section, questions: filteredQuestions };
  }).filter(section => section.questions.length > 0);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
             <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about your health checkups, reports, and our services.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-shadow shadow-sm"
              placeholder="Search for questions (e.g., fasting, payment, report)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredFaqs.length > 0 ? (
          <div className="grid gap-8">
            {filteredFaqs.map((section, sectionIdx) => (
              <div key={sectionIdx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-3">
                  <section.icon className="text-primary w-5 h-5" />
                  <h2 className="font-bold text-slate-900">{section.category}</h2>
                </div>
                
                <div>
                  {section.questions.map((item, qIdx) => {
                    const isOpen = openQuestion === item.q;
                    
                    return (
                      <div key={qIdx} className="border-b border-slate-50 last:border-0">
                        <button
                          onClick={() => toggleFAQ(item.q)}
                          className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span className={`font-medium text-base sm:text-lg ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                            {item.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="text-primary shrink-0 ml-4" size={20} />
                          ) : (
                            <ChevronDown className="text-slate-400 shrink-0 ml-4" size={20} />
                          )}
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 sm:p-6 pt-0 text-slate-600 leading-relaxed text-sm sm:text-base">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">No results found</h3>
                <p className="text-slate-500 mt-2">Try searching for something else or browse the categories.</p>
            </div>
        )}

        {/* Still have questions CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 sm:p-12 text-center text-white">
           <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
           <p className="text-slate-300 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="whatsapp" onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}>
               Chat on WhatsApp
             </Button>
             <a href={`tel:${CONTACT_INFO.phone}`}>
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                 Call {CONTACT_INFO.phone}
               </Button>
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;