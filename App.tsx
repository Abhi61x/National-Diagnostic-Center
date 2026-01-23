import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { BookingProvider } from './contexts/BookingContext';
import BookingModal from './components/BookingModal';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans relative">
          {/* Accessibility Skip Link */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-5 focus:left-5 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-primary focus:font-bold focus:rounded-xl focus:shadow-2xl focus:border focus:border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            Skip to main content
          </a>

          <Navbar />
          
          <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          
          <Footer />
          <BookingModal />
        </div>
      </Router>
    </BookingProvider>
  );
};

export default App;