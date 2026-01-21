import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div style={{ height: '95vh', position: 'relative', overflow: 'hidden' }}>

      {/* BACKGROUND */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.65)' // Slightly darker for better text contrast
      }}></div>

      

      {/* CONTENT */}
      <div className="container" style={{
        position: 'relative', zIndex: 2, height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center'
      }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '4px', textTransform: 'uppercase',
            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', marginBottom: '1rem'
          }}
        >
          Certified Professional Makeover Artist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            // 🛑 USE THE CSS VARIABLE: This makes it scale perfectly
            fontSize: 'var(--font-h1)',
            color: 'var(--gold-light)'
          }}
        >
          Enhancing Your <br />
          <span style={{ fontStyle: 'italic', fontFamily: 'Playfair Display' }}>Natural Radiance</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link to="/portfolio" className="btn-primary" style={{ borderColor: 'var(--gold-light)', color: 'var(--gold-light)' }}>
            View Portfolio
          </Link>
          <Link to="/packages" className="btn-primary" style={{ background: 'var(--gold-light)', color: '#000', border: 'none' }}>
            Book Consultation
          </Link>
        </motion.div>

      </div>
    </div>
  );
}