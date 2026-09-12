import React, { useState, useRef } from 'react';
import { HERITAGE_DESTINATIONS } from '../data/hampiData';
import { Lock, ArrowRight, Sparkles, MapPin, Compass } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function HeritageSelection({ onSelectHampi }) {
  const hampi = HERITAGE_DESTINATIONS.find(d => d.id === 'hampi');
  const upcoming = HERITAGE_DESTINATIONS.filter(d => d.id !== 'hampi');
  const cardRef = useRef(null);

  // 3D Tilt & Dynamic Light Reflection State
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -6; // max 6 deg
    const tiltY = ((x - centerX) / centerX) * 6;  // max 6 deg
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: tiltX, y: tiltY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const handleHampiClick = () => {
    soundEngine.playChime();
    onSelectHampi();
  };

  return (
    <section 
      id="heritage"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        padding: '7rem 2rem 5rem 2rem',
        background: '#0c0b0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
        perspective: '1200px'
      }}
    >
      {/* Background Subtle Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '420px',
        background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.22em',
          color: '#d4af37',
          textTransform: 'uppercase',
          marginBottom: '0.8rem'
        }}>
          GEOGRAPHIC ARCHIVE · WORLD SELECTION
        </div>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
          fontWeight: 800,
          letterSpacing: '0.12em',
          color: '#ffffff',
          lineHeight: 1.15
        }}>
          CHOOSE A WORLD TO REVISIT
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          color: '#9e9589',
          marginTop: '0.8rem',
          fontWeight: 300
        }}>
          Reconstructed historical realities created from architectural surveys and primary eyewitness chronicles.
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '1140px', position: 'relative', zIndex: 10 }}>
        {/* Featured Hero Card with 3D Hover Depth: HAMPI */}
        {hampi && (
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              background: 'linear-gradient(135deg, rgba(32, 28, 24, 0.92) 0%, rgba(18, 16, 14, 0.96) 100%)',
              border: `1px solid ${isHovered ? 'rgba(212, 175, 55, 0.65)' : 'rgba(212, 175, 55, 0.35)'}`,
              borderRadius: '4px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: isHovered 
                ? '0 30px 60px rgba(0,0,0,0.85), 0 0 40px rgba(212, 175, 55, 0.22)' 
                : '0 20px 50px rgba(0,0,0,0.7), 0 0 25px rgba(212, 175, 55, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: isHovered ? 'border-color 0.2s, box-shadow 0.2s' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s'
            }}
          >
            {/* Dynamic Light Reflection Layer */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)`,
              pointerEvents: 'none',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }} />

            {/* Left Column: Metadata & Interaction */}
            <div style={{
              transform: isHovered ? 'translateZ(25px)' : 'none',
              transition: 'transform 0.4s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  background: 'rgba(212, 175, 55, 0.2)',
                  color: '#f3e5ab',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2px',
                  border: '1px solid rgba(212, 175, 55, 0.4)'
                }}>
                  {hampi.era}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: '#4ade80',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  FULLY INTERACTIVE
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                fontWeight: 900,
                letterSpacing: '0.14em',
                color: '#ffffff',
                marginBottom: '0.2rem'
              }}>
                {hampi.name}
              </h3>

              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                color: '#d4af37',
                marginBottom: '1.2rem'
              }}>
                {hampi.subheading}
              </div>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.1rem',
                color: '#d4c7b8',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '1.8rem',
                fontStyle: 'italic'
              }}>
                "{hampi.description}"
              </p>

              {/* Statistics Micro-grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                paddingTop: '1.2rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9e9589' }}>POPULATION</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#f3e5ab', fontWeight: 700 }}>
                    {hampi.stats.peakPopulation}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9e9589' }}>METROPOLIS</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#f3e5ab', fontWeight: 700 }}>
                    {hampi.stats.urbanArea}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9e9589' }}>GLOBAL RANK</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#f3e5ab', fontWeight: 700 }}>
                    #2 in 1500 CE
                  </div>
                </div>
              </div>

              <button
                onClick={handleHampiClick}
                className="btn-gold"
                style={{ padding: '0.95rem 2.5rem', fontSize: '0.88rem' }}
              >
                <span>ENTER HAMPI</span>
                <ArrowRight size={17} />
              </button>
            </div>

            {/* Right Column: 3D Layered Visual Preview */}
            <div style={{
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              height: '320px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              transform: isHovered ? 'translateZ(35px) scale(1.02)' : 'none',
              transition: 'transform 0.4s ease'
            }}>
              <img
                src={`${import.meta.env.BASE_URL}images/hampi_1500ce.jpg`}
                alt="Hampi 1500 CE Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(112%) brightness(92%)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                background: 'rgba(12, 11, 10, 0.88)',
                backdropFilter: 'blur(8px)',
                padding: '0.6rem 1rem',
                borderRadius: '2px',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#f3e5ab' }}>
                  RECONSTRUCTION STAGE 1500 CE
                </span>
                <Sparkles size={14} color="#d4af37" />
              </div>
            </div>
          </div>
        )}

        {/* Small Notice: TIMEWEAVE begins with Hampi */}
        <div style={{
          textAlign: 'center',
          fontFamily: 'var(--font-serif)',
          fontSize: '0.92rem',
          letterSpacing: '0.12em',
          color: '#d4af37',
          marginBottom: '1.8rem',
          textTransform: 'uppercase'
        }}>
          "TIMEWEAVE begins with Hampi."
        </div>

        {/* Scalability: Future Worlds */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {upcoming.map(dest => (
            <div
              key={dest.id}
              style={{
                background: 'rgba(18, 16, 14, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '3px',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                opacity: 0.8
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.16em',
                    color: '#9e9589'
                  }}>
                    {dest.era}
                  </span>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.14em',
                    color: '#d4af37',
                    background: 'rgba(212, 175, 55, 0.1)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '2px',
                    border: '1px solid rgba(212, 175, 55, 0.25)'
                  }}>
                    <Lock size={10} />
                    {dest.status}
                  </span>
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: '#ede5dc',
                  marginBottom: '0.3rem'
                }}>
                  {dest.name}
                </h4>

                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.12em',
                  color: '#997a3a',
                  marginBottom: '0.8rem'
                }}>
                  {dest.subheading}
                </div>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: '#7a7267',
                  lineHeight: 1.55
                }}>
                  {dest.description}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1.2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#60584e'
              }}>
                <MapPin size={12} />
                <span>{dest.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
