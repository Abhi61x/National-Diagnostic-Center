import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'call';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary hover:bg-sky-600 text-white shadow-lg shadow-primary/30 focus:ring-primary",
    secondary: "bg-secondary hover:bg-teal-800 text-white shadow-lg shadow-secondary/30 focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    whatsapp: "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-500/30 focus:ring-green-500",
    call: "bg-slate-800 hover:bg-slate-900 text-white shadow-lg focus:ring-slate-800",
  };

  const widthClass = fullWidth ? 'w-full' : '';

  // Specialized buttons for WhatsApp and Call
  if (variant === 'whatsapp') {
    return (
      <button 
        className={`${baseStyles} ${variants.whatsapp} ${widthClass} ${className}`} 
        {...props}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {children || 'Book on WhatsApp'}
      </button>
    );
  }

  if (variant === 'call') {
    return (
      <button 
        className={`${baseStyles} ${variants.call} ${widthClass} ${className}`} 
        {...props}
      >
        <Phone className="w-5 h-5 mr-2" />
        {children || 'Call Now'}
      </button>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;