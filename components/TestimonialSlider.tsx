import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <div className="relative bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto border border-slate-100">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-primary/10">
        <Quote size={50} className="sm:w-20 sm:h-20" fill="currentColor" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Rating */}
        <div className="flex gap-1 mb-4 sm:mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16}
              className={`sm:w-5 sm:h-5 ${i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} 
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-base md:text-xl text-slate-700 italic font-medium leading-relaxed mb-6 sm:mb-8 min-h-[80px]">
          "{currentTestimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-sm sm:text-base">
            {currentTestimonial.name.charAt(0)}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">{currentTestimonial.name}</h4>
            <p className="text-xs sm:text-sm text-slate-500">{currentTestimonial.role}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-primary hover:text-white transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-primary hover:text-white transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(idx);
            }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-primary w-4 sm:w-6' : 'bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;