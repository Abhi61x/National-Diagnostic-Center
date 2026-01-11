import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isOpen: boolean;
  openBooking: (details?: string) => void;
  closeBooking: () => void;
  bookingDetails: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState('');

  const openBooking = (details = '') => {
    setBookingDetails(details);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setBookingDetails('');
  };

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking, bookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
};