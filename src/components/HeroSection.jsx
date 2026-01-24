import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow motion luxury feel
    }
  }, []);

  // --- ANIMATION SETTINGS ---
  // 1. The Container orchestrates the timing (Stagger)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.3 // Delay between each child element
      }
    }
  };

  // 2. The Children (Text/Buttons) slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div style={{ height: '95vh', position: 'relative', overflow: 'hidden', backgroundColor: 'black' }}>
      
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        style={{
          position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%',
          objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: 0,
          filter: 'contrast(1.1) brightness(0.6)'
        }}
      >
        <source src="/makeover_video.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(26,26,26,0.1) 50%, rgba(0,0,0,0.5) 100%)',
        zIndex: 1
      }}></div>

      {/* CONTENT LAYER */}
      <div className="container" style={{ 
        position: 'relative', zIndex: 2, height: '100%', 
        display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', textAlign: 'center' 
      }}>
        
        {/* ✨ ANIMATED GLASS CARD ✨ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            //background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(1px)',
            //border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '3rem 2rem',
            borderRadius: '20px',
            //boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            //maxWidth: '800px'
          }}
        >
          {/* SUBTITLE */}
          <motion.p 
            variants={itemVariants}
            style={{ 
              color: 'rgba(255,255,255,0.9)', 
              letterSpacing: '4px', textTransform: 'uppercase', 
              fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
            }}
          >
            Professional Makeover Artistry
          </motion.p>

          {/* MAIN HEADLINE */}
          <motion.h1 
            variants={itemVariants}
            style={{ 
              fontSize: 'var(--font-h1)', 
              color: 'var(--gold-light)',
              marginBottom: '1.5rem',
              textShadow: `
                0px 4px 3px rgba(0,0,0,0.4),
                0px 8px 13px rgba(0,0,0,0.1),
                0px 18px 23px rgba(0,0,0,0.1),
                0 0 20px rgba(212, 175, 55, 0.3) 
              `
            }} 
          >
            Enhancing Your <br/> 
            <span style={{ fontStyle: 'italic', fontFamily: 'Playfair Display', color:'white' }}>Natural Radiance</span>
          </motion.h1>

          {/* BUTTONS CONTAINER */}
          <motion.div 
            variants={itemVariants}
            style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            {/* BUTTON 1: HOVER EFFECT ADDED */}
            <Link to="/portfolio">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="btn" 
                style={{ 
                  padding: '12px 30px',
                  color: 'var(--gold-light)',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid var(--gold-light)',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  width:'177px',
                  fontFamily: 'Playfair Display',
                  fontSize: '1rem'
                }}
              >
                View Portfolio
              </motion.button>
            </Link>

            {/* BUTTON 2: HOVER EFFECT ADDED */}
            <Link to="/packages">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="btn" 
                style={{ 
                  padding: '12px 30px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E08E 50%, #D4AF37 100%)',
                  color: '#000', 
                  border: 'none',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                  cursor: 'pointer',
                  fontFamily: 'Playfair Display',
                  fontSize: '1rem'
                }}
              >
                 Book Consultation
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}