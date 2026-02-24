import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
function Achievements() {
    return (

        <motion.div className='achievements-content' style={{ paddingTop: '7rem', paddingBottom: '2rem' }}>
            
                <h2 style={{ fontSize: 'var(--font-h2)', textAlign: 'center' }}>Wins & Whistles</h2>

                <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.8 }}
                                            
                                            style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}
                                        >
                <div className='achivements-grid' >
                    <div className="achievement-row" >
                        <div className='award-text' >
                            {/* Text */} <p>Our very own lead makeover artist <b>Ms. Umal Haseen</b>, <i>on award winning recognition for exquisite artistry</i>
                                <br />
                                at <span color='gold'>Scissors Awards 2025</span>, Chennai.</p>
                        </div>

                        <div className='video'>
                            {/* Video */}
                            <video

                                autoPlay loop muted playsInline
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '26px', padding: '12px'
                                }}
                            >
                                <source src="/haseen_award.mp4" type="video/mp4" />
                            </video>
                        </div>

                    </div>
                    <div className="achievement-row" >
                        <div className='photo'>
                            {/* Photo */} <img src="bhadra.jpg" alt="bhadra" style={{
                                width: '300px',
                                height: '300px', margin: 'auto', borderRadius: '26px', padding: '12px'
                            }} />
                        </div>

                        <div className='photo-text'>
                            {/* Text */}  <p><b>Ms. Badhra</b>, our very own creative artist <i> on prize winning soulful Mehandi art, </i>
                                <br /> at
                                <span color='gold'> FlashMob competition 2025</span>, Coimbatore.</p>
                        </div>

                    </div>

                </div>
                </motion.div>

            
        </motion.div>
    )
}

export default Achievements