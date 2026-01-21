import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  // STABLE PEXELS IMAGES (Ensure they align well)
  // Ideally, the artist provides perfectly aligned photos. 
  // These mockups demonstrate the effect.
  const beforeImage = "https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=800"; // No makeup / Natural
  const afterImage = "https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&w=800";  // Full glam

  return (
    <div className="container" style={{ padding: 'var(--space-lg) var(--space-md)' }}>
      
      {/* SECTION HEADER */}
      <div className="text-center mb-5">
        <h4 className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase' }}>The Transformation</h4>
        <h2 style={{ fontSize: 'var(--font-h2)' }}>See the Difference</h2>
        <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: '1rem auto' }}></div>
      </div>

      {/* THE SLIDER CONTAINER */}
      <div style={{ 
        maxWidth: '900px', margin: '0 auto', 
        borderRadius: '12px', overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        border: '4px solid white'
      }}>
        <ReactCompareSlider
          /* The Handle = The vertical line and the central button */
          handle={
            <div style={{ display: 'grid', placeItems: 'center', height: '100%' }}>
              {/* The vertical line */}
              <div style={{ width: '2px', height: '100%', background: 'white', position: 'absolute' }}></div>
              {/* The central jewel button */}
              <div style={{ 
                width: '50px', height: '50px', borderRadius: '50%', 
                background: 'var(--gold)', border: '3px solid white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', zIndex: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
              }}>
                <ChevronsLeftRight size={24} />
              </div>
            </div>
          }
          /* The two images */
          itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before makeup" />}
          itemTwo={<ReactCompareSliderImage src={afterImage} alt="After bridal makeup" />}
          style={{ height: '100%', minHeight: '500px' }} // Ensure it has height on mobile
        />
      </div>

      {/* LABELS (Optional: Adds clarity) */}
      <div style={{ maxWidth: '900px', margin: '1rem auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, color: '#999' }}>
        <span>Before</span>
        <span>After</span>
      </div>

    </div>
  );
}