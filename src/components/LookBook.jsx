import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient'; // Uncomment when connected

// MOCK DATA (Use this until you upload real photos to Supabase)

const MOCK_IMAGES = [
    { 
      id: 1, 
          // Smokey Eye / Bold Makeup
          url: 'https://i.pinimg.com/736x/fb/e8/e4/fbe8e40584588d95ca9f0fae7af7f178.jpg?auto=compress&w=600', 
          category: 'Party', 
          title: 'Smokey Eye' 
    
  },
  { 
    id: 2, 
    // High Fashion / Golden Hour Look
    url: 'https://i.pinimg.com/1200x/9c/15/1b/9c151b96ca094fc05c52af392bf84566.jpg?auto=compress&w=600', 
    category: 'Editorial', 
    title: 'Golden Hour' 
  },
  { 
    id: 3, 
    // Indian Bride in Red Saree (Stable Pexels Link)
    
    url: 'https://i.pinimg.com/736x/c5/37/d2/c537d2f1f954e904920c2f7aaed5227f.jpg?auto=compress&w=600', 
    category: 'Bridal', 
    title: 'Traditional Red' 
  },
  { 
    id: 4, 
    // Reception Glam / Elegant Look
    url: 'https://i.pinimg.com/736x/f0/b6/c0/f0b6c0c82a44bac932bfd4213b6b19fe.jpg?auto=compress&w=600', 
    category: 'Bridal', 
    title: 'Reception Glam' 
  },
  { 
    id: 7, 
    // Bridal Mehandi / Haldi
    url: 'https://i.pinimg.com/736x/24/95/4f/24954fbe7704d3ed21a4bb97e588e22f.jpg?auto=compress&cs=tinysrgb&w=600', 
    category: 'Mehandi', 
    title: 'Reception' 
  },
  { 
    id: 5, 
    // Modern Art / Creative Makeup
     url: 'https://image2url.com/r2/default/images/1771393251923-04ab9b3d-bff9-49aa-9113-eab7a4f35e06.jpeg',
     //'https://instasize.com/api/image/57ed0eb669b620d83add5792919790489e415474f4c4db3791eb8030bdef2b0d.jpeg', 
    category: 'Editorial', 
    title: 'Western Glam' 
  },
  { 
    id: 8, 
    // Party Night / Festival
    url: 'https://i.pinimg.com/1200x/40/92/48/409248bff380247e2fde5043214ffc03.jpg?auto=compress&cs=tinysrgb&w=600', 
    category: 'Mehandi', 
    title: 'Muhurtham' 
  },
  { 
    id: 6, 
    // Party Night / Cocktail Look
    url: 'https://i.pinimg.com/736x/e8/a9/40/e8a9408f26b65add7a9638d2855e5386.jpg?auto=compress&cs=tinysrgb&w=600',
    // https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600 
    category: 'Party', 
    title: 'Cocktail Night' 
  },

  { 
    id: 9, 
    // Bridal Mehandi / Reception
    url: 'https://i.pinimg.com/1200x/77/d4/1e/77d41e532218a7c0ab26a3d7efa28326.jpg?auto=compress&cs=tinysrgb&w=600', 
    category: 'Mehandi', 
    title: 'Haldi Ceremony' 
  }

];




export default function LookBook() {
    const [filter, setFilter] = useState('All');
    const [filteredImages, setFilteredImages] = useState(MOCK_IMAGES);
    const [images, setImages] = useState([]); // <--- State for REAL images
    const [loading, setLoading] = useState(true);
    
    // Filter Logic
    useEffect(() => {
        if (filter === 'All') {
            setFilteredImages(MOCK_IMAGES);
        } else {
            setFilteredImages(MOCK_IMAGES.filter(img => img.category === filter));
        }
    }, [filter]);

    // CATEGORY BUTTONS
    const categories = ['All', 'Bridal', 'Party', 'Editorial', 'Mehandi'];

    return (
        
        <div className="container" style={{ padding: '4rem 2rem' }}>

            {/* SECTION HEADER */}
            <div className="text-center mb-5">
                <h4 className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Portfolio</h4>
                <h2 style={{ fontSize: 'var(--font-h2)', textAlign: 'center' }}>The Look Book</h2>
                <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: '1rem auto' }}></div>
            </div>

            {/* FILTER TABS */}
            <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            borderBottom: filter === cat ? '1px solid var(--charcoal)' : '1px solid transparent',
                            padding: '5px 10px',
                            fontFamily: 'Manrope',
                            fontSize: '0.9rem',
                            color: filter === cat ? 'var(--charcoal)' : '#999',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* MASONRY GRID */}
            <motion.div layout style={{ columnCount: 3, columnGap: '1.5rem', marginTop: '25px' }} className="masonry-grid">
                <AnimatePresence>
                    {filteredImages.map((img) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={img.id}
                            style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}
                        >
                            <div className="portfolio-item" style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    style={{ width: '100%', display: 'block' }}
                                />

                                {/* HOVER OVERLAY */}
                                <div className="overlay" style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                    background: 'rgba(0,0,0,0.4)', opacity: 0, transition: '0.3s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', flexDirection: 'column'
                                }}>
                                    <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.2rem' }}>{img.title}</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginTop: '5px' }}>{img.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <style>{`
        @media (max-width: 768px) {
          .masonry-grid { column-count: 2 !important; }
        }
        @media (max-width: 480px) {
          .masonry-grid { column-count: 1 !important; }
        }
        .portfolio-item:hover .overlay { opacity: 1 !important; }
      `}</style>
        </div>
    );
}