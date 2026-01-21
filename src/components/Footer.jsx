import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--charcoal)', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        {/* TOP ROW: 3 COLUMNS */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem', 
          marginBottom: '4rem' 
        }}>
          
          {/* COL 1: BRAND */}
          <div>
            <div style={{ fontSize: '1.8rem', fontFamily: 'Playfair Display', fontWeight: 700, marginBottom: '1rem' }}>
              {/* Haseen's  */}
              <img src="/public/logo.jpg"  width={'76px'} height={'76px'} style=
    {{borderRadius: '38px'}}/>
              <span className="text-gold">.</span>
            </div>
            <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '300px' }}>
              Enhancing natural radiance for brides across the globe. 
              Based in Salem, available worldwide.
            </p>
            <div className="d-flex gap-3 mt-3" style={{width:'150px', justifyContent: 'space-between'}}>
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Mail size={20} />} />
              <SocialIcon icon={<Phone size={20} />} />
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <FooterLink to="/" label="Home" />
              <FooterLink to="/portfolio" label="Portfolio Gallery" />
              <FooterLink to="/packages" label="Bridal Packages" />
              <FooterLink to="/packages" label="Book Consultation" />
            </div>
          </div>

          {/* COL 3: CONTACT */}
          <div>
            <h4 style={{ color: 'var(--gold)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Contact</h4>
            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>Salem, Tamil Nadu, India</p>
            <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>+91 99528 45382</p>
            <p style={{ color: '#ccc' }}>hma@gmail.com</p>
          </div>

        </div>

        {/* DIVIDER */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '2rem' }}></div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          color: '#666', fontSize: '0.8rem' 
        }}>
          <div>
            &copy; {currentYear} Haseen's Makeover Artistry. All rights reserved.
          </div>
          <div className="d-flex align-center gap-1 justify-center">
            Made with 💝
            {/* <Heart size={14} className="text-gold" fill="#D4AF37" /> */}
             for Brides
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

function FooterLink({ to, label }) {
  return (
    <Link to={to} style={{ 
      color: '#ccc', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.95rem' 
    }}
    onMouseOver={(e) => e.target.style.color = 'var(--gold)'}
    onMouseOut={(e) => e.target.style.color = '#ccc'}
    >
      {label}
    </Link>
  );
}

function SocialIcon({ icon }) {
  return (
    <div style={{ 
      width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.borderColor = 'var(--gold)';
      e.currentTarget.style.color = 'var(--gold)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
      e.currentTarget.style.color = 'white';
    }}
    >
      {icon}
    </div>
  );
}