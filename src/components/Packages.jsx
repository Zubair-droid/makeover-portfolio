import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Sparkles, Mars } from 'lucide-react';

const config = {
    whatsappNumber: +919952845382
}
// --- DATA: THE MENU ---
const BRIDAL_PACKAGES = [
    {
        id: 1,
        title: "The Classic Bride",
        price: "₹15,000",
        description: "Perfect for the minimalist bride who wants a natural, glowing look.",
        features: ["HD Natural Makeup", "Standard Hair Styling", "Saree Draping", "Lashes Included"],
        isPopular: false
    },
    {
        id: 2,
        title: "The Royal Combo",
        price: "₹45,000",
        description: "Our signature package covering both your big events with distinct looks.",
        features: ["Reception High-Glam Look", "Muhurtham Traditional Look", "Airbrush Makeup (Waterproof)", "Premium Hair Extensions", "Jewellery Setting"],
        isPopular: true // 🌟 This triggers the Gold Border
    },
    {
        id: 3,
        title: "The Editorial",
        price: "₹25,000",
        description: "High-fashion, sharp contouring designed specifically for 4K video and photography.",
        features: ["4K Ultra-HD Makeup", "Intricate Hair Artistry", "2 Saree Draping Styles", "Touch-up Kit Gifted"],
        isPopular: false
    }
];

const EXTRAS = [
    { service: "Party Makeup (Guest)", price: "₹3,500" },
    { service: "Mature Skin (Mother)", price: "₹4,000" },
    { service: "Saree Draping Only", price: "₹1,500" },
    { service: "Pre-Wedding Shoot", price: "₹8,000" },
];

export default function Packages() {
    return (
        <div className="container" style={{ padding: 'var(--space-lg) var(--space-md)' }}>

            {/* HEADER */}
            <div className="text-center mb-5" style={{ marginTop: '3%', display: 'grid', justifyContent:'center' }}>
                <h4 className="text-gold" style={{ fontSize: '1.5rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '800' }}>GLOWY Investment</h4>
                <h2 style={{ fontSize: 'var(--font-h2)' }}>Bridal Packages</h2>
                <p style={{ maxWidth: '620px', margin: '0 auto' }}>
                    Curated experiences for your special day. All packages include a personalized consultation on skin types and premium international products (MAC, Huda, Bobbi Brown).
                </p>

                
            </div>

            {/* PRICING CARDS GRID */}
            <div

                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem',
                    marginTop: '32px'
                }}>
                {BRIDAL_PACKAGES.map((pkg, index) => (
                    <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            position: 'relative',
                            background: 'white',
                            border: pkg.isPopular ? '2px solid var(--gold)' : '1px solid rgba(0,0,0,0.05)',
                            borderRadius: '8px',
                            padding: '2.5rem',
                            boxShadow: pkg.isPopular ? '0 10px 40px rgba(212, 175, 55, 0.15)' : '0 4px 20px rgba(0,0,0,0.05)',
                            transform: pkg.isPopular ? 'scale(1.05)' : 'scale(1)',
                            zIndex: pkg.isPopular ? 2 : 1
                        }}
                    >
                        {pkg.isPopular && (
                            <div style={{
                                position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                                background: 'var(--gold)', color: 'white',
                                padding: '5px 15px', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase',
                                borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px'
                            }}>
                                <Star size={12} fill="white" /> Most Loved
                            </div>
                        )}

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
                        <div style={{ fontSize: '2rem', fontFamily: 'Playfair Display', color: 'var(--gold)', marginBottom: '1rem' }}>
                            {pkg.price}
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem', minHeight: '60px' }}>
                            {pkg.description}
                        </p>

                        {/* FEATURES LIST */}
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                            {pkg.features.map((feat, i) => (
                                <li key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', fontSize: '0.9rem', alignItems: 'center' }}>
                                    <div style={{
                                        minWidth: '20px', height: '20px', borderRadius: '50%', background: 'var(--gold-light)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Check size={12} color="var(--charcoal)" />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={pkg.isPopular ? 'btn-primary' : 'btn-outline'}
                            style={{ width: '100%' }}
                            onClick={() => {
                                // Defines the message: "Hi! I am interested in [Package Name]..."
                                const text = `Hi! I am interested in the ${pkg.title} package (${pkg.price}). Is my date available?`;
                                // Opens WhatsApp immediately
                                window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                            }}
                        >
                            Check Availability
                        </button>
                    </motion.div>
                ))}
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px'}}>

                <p style={{
                    
                    color: 'var(--gold)', background: 'white',
                    padding: '8px', fontSize: '0.95rem', 
                    borderRadius: '20px',
                    fontFamily: 'Playfair Display',
                                   }}> 
                 Complimentary <i style={{color: '#738957', fontWeight: 'bold'}}>Mehandi</i> services included on all our services for your special occasions 💝
                </p>
                </div>

            {/* A LA CARTE MENU */}
            <div className="text-center mb-4">
                <Sparkles size={24} className="text-gold mb-3" />
                <h3>A La Carte Services</h3>
            </div>

            <div style={{
                maxWidth: '800px', margin: '0 auto',
                background: 'white', padding: '2rem', borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                {EXTRAS.map((item, i) => (
                    <div key={i} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        borderBottom: i === EXTRAS.length - 1 ? 'none' : '1px dashed #eee',
                        padding: '1rem 0'
                    }}>
                        <span style={{ fontSize: '1rem', fontWeight: 500 }}>{item.service}</span>
                        <span style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', color: 'var(--gold)' }}>{item.price}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}