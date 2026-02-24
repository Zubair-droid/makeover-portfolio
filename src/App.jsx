import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Instagram, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, correctBorderRadius } from 'framer-motion';

// Components
import HeroSection from './components/HeroSection';
import LookBook from './components/LookBook';
import Packages from './components/Packages';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import BeforeAfterSlider from './components/BeforeAfterSlider';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UI State Logic
  const isDarkUI = !isHome || scrolled || isOpen;

  // Dynamic Styles
  const navBackground = isDarkUI ? 'rgba(250, 250, 245, 0.98)' : 'transparent';
  const navColor = isDarkUI ? 'var(--charcoal)' : 'white';
  const navShadow = isDarkUI ? '0 4px 20px rgba(0,0,0,0.05)' : 'none';
  const navPadding = scrolled ? '1rem 2rem' : '1.5rem 3rem';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: navBackground,
        color: navColor,
        boxShadow: navShadow,
        transition: 'all 0.4s ease',
        backdropFilter: isDarkUI ? 'blur(10px)' : 'none',
        padding: navPadding
      }}>
        <div className="navbar-container">

          {/* BRAND LOGO */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', zIndex: 102 }}>
            <div style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display', fontWeight: 700 }}>
              Haseen's
              
               <span className="text-gold" style={{fontWeight: 'bold'}}>.</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <NavLink to="/" label="Home" />
            <NavLink to="/portfolio" label="Portfolio" />
            <NavLink to="/packages" label="Bridal Packages" />
            <NavLink to="/achievements" label="Recognitions" />
           
            <div style={{ width: '1px', height: '20px', background: 'currentColor', opacity: 0.3 }}></div>
            <Instagram size={20} style={{ cursor: 'pointer' }} />
            <Mail size={20} style={{ cursor: 'pointer' }} />
          </div>

          {/* MOBILE TOGGLE (Right Side) */}
          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ zIndex: 102 }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: '#FAFAF5',
              zIndex: 99,
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: '2.5rem'
            }}
          >
            <MobileLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileLink to="/portfolio" label="Portfolio" onClick={() => setIsOpen(false)} />
            <MobileLink to="/packages" label="Bridal Packages" onClick={() => setIsOpen(false)} />
            <MobileLink to="/achievements" label="Recognitions" onClick={() => setIsOpen(false)} />

            <div className="d-flex gap-4 mt-4 text-gold">
              <Instagram size={32} />
              <Mail size={32} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helpers
function NavLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} style={{
      fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1.5px',
      fontWeight: isActive ? 600 : 400,
      borderBottom: isActive ? '2px solid var(--gold)' : '2px solid transparent'
    }}>{label}</Link>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <Link to={to} onClick={onClick} style={{
      color: 'var(--charcoal)', fontSize: '1.8rem', fontFamily: 'Playfair Display',
    }}>{label}</Link>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <div className="container" style={{ padding: 'var(--space-lg) var(--space-md)', textAlign: 'center' }}>
              <h4 className="text-gold" style={{ fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Introduction</h4>
              <h2 style={{ marginBottom: '1.5rem' }}>The Art of Beauty</h2>
              <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: 'var(--font-body)' }}>
                Specializing in HD Bridal Makeup, Reception Looks, and Editorial Styling.
                We believe that every bride deserves to look like the best version of herself.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/portfolio" className="btn-outline">See Our Work</Link>
              </div>
            </div>

            {/* 👇👇👇 INSERT THE SLIDER HERE 👇👇👇 */}
            <BeforeAfterSlider />

            {/* Call to Action Block */}
            <div className="container" style={{ paddingBottom: 'var(--space-lg)', textAlign: 'center' }}>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/portfolio" className="btn-outline">See Full Portfolio</Link>
              </div>
            </div>


          </>
        } />
        <Route path="/portfolio" element={<LookBook />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="achievements" element={<Achievements />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;