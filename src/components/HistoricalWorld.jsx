import React, { useState, useRef } from 'react';
import { HOTSPOTS_1500 } from '../data/hampiData';
import { Sparkles, X, ChevronRight, Compass, Info, Layers, Eye, MapPin } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function HistoricalWorld({ onProceedToRole }) {
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS_1500[1]); // Default Market (02)
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const sceneRef = useRef(null);

  // Mouse Parallax Camera Movement
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setParallax({ x, y });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
    setHoveredHotspot(null);
  };

  const handleSelectHotspot = (hotspot) => {
    soundEngine.playChime();
    setActiveHotspot(hotspot);
    setModalOpen(true);
  };

  const handleContinue = () => {
    soundEngine.playChime();
    onProceedToRole();
  };

  return (
    <section
      id="world"
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
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        overflow: 'hidden'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '2.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.9rem',
          borderRadius: '9999px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          marginBottom: '0.8rem'
        }}>
          <Compass size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            1500 CE · HAMPI · VIJAYANAGARA
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 900,
          letterSpacing: '0.12em',
          color: '#ffffff',
          lineHeight: 1.15
        }}>
          HAMPI — 1500 CE
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          color: '#9e9589',
          marginTop: '0.8rem',
          fontWeight: 300
        }}>
          Explore the living urban sectors that sustained one of the wealthiest medieval cities on Earth.
        </p>
      </div>

      {/* Main Interactive 2.5D/3D Hybrid Scene Container with Parallax */}
      <div
        ref={sceneRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1180px',
          height: 'clamp(440px, 62vh, 660px)',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.92), 0 0 45px rgba(212, 175, 55, 0.18)',
          zIndex: 10
        }}
      >
        {/* Layer 1: Reconstructed Panoramic City Background with Mouse Parallax */}
        <div style={{
          position: 'absolute',
          inset: '-20px',
          transform: `translate(${parallax.x * -0.6}px, ${parallax.y * -0.6}px) scale(1.05)`,
          transition: 'transform 0.15s ease-out'
        }}>
          <img
            src={`${import.meta.env.BASE_URL}images/hampi_1500ce.jpg`}
            alt="Hampi 1500 CE Reconstructed Scene"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 42%',
              filter: 'contrast(110%) brightness(92%) saturate(106%)'
            }}
          />
        </div>

        {/* Layer 2: Sunlight Depth & Atmospheric Fog Gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(12, 11, 10, 0.82) 0%, rgba(12, 11, 10, 0.12) 45%, rgba(212, 175, 55, 0.12) 100%)',
          pointerEvents: 'none'
        }} />

        {/* 5 Interactive Floating Hotspots */}
        {HOTSPOTS_1500.map((hotspot) => {
          const isSelected = activeHotspot?.id === hotspot.id;
          const isHovered = hoveredHotspot?.id === hotspot.id;

          return (
            <div
              key={hotspot.id}
              style={{
                position: 'absolute',
                top: hotspot.y,
                left: hotspot.x,
                transform: `translate(calc(-50% + ${parallax.x * 0.4}px), calc(-50% + ${parallax.y * 0.4}px))`,
                transition: 'transform 0.15s ease-out',
                zIndex: isHovered ? 40 : 20
              }}
              onMouseEnter={() => setHoveredHotspot(hotspot)}
              onMouseLeave={() => setHoveredHotspot(null)}
            >
              <button
                onClick={() => handleSelectHotspot(hotspot)}
                style={{
                  position: 'relative',
                  background: isSelected ? '#ffffff' : '#d4af37',
                  color: '#0c0b0a',
                  border: '2px solid #ffffff',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 900,
                  boxShadow: '0 0 24px rgba(212, 175, 55, 0.95)',
                  transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                  transition: 'all 0.2s ease'
                }}
                aria-label={`Hotspot ${hotspot.code}: ${hotspot.title}`}
              >
                {hotspot.code}

                {/* Radar ripple rings */}
                <div
                  className="hotspot-pulse"
                  style={{
                    position: 'absolute',
                    inset: '-7px',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(212, 175, 55, 0.85)',
                    pointerEvents: 'none'
                  }}
                />
              </button>

              {/* Hover Expanding Tooltip with Title, Icon and Short Description */}
              <div style={{
                position: 'absolute',
                top: '115%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(14, 12, 10, 0.94)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                borderRadius: '3px',
                padding: '0.65rem 1rem',
                minWidth: isHovered ? '240px' : 'auto',
                maxWidth: '280px',
                pointerEvents: 'none',
                boxShadow: '0 8px 24px rgba(0,0,0,0.85)',
                transition: 'all 0.25s ease',
                opacity: 1
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.12em',
                  color: '#f3e5ab',
                  fontWeight: 700
                }}>
                  <MapPin size={11} color="#d4af37" />
                  <span>{hotspot.title}</span>
                </div>

                {isHovered && (
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    color: '#d4c7b8',
                    lineHeight: 1.45,
                    marginTop: '0.35rem'
                  }}>
                    {hotspot.overview}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Scene HUD Header with Orientation Indicator */}
        <div style={{
          position: 'absolute',
          top: '1.2rem',
          left: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'none'
        }}>
          <div style={{
            background: 'rgba(12, 11, 10, 0.88)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            padding: '0.45rem 1rem',
            borderRadius: '2px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#f3e5ab',
            letterSpacing: '0.14em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Compass size={14} color="#d4af37" />
            <span>HEADING: 32° NE · TUNGABHADRA CORRIDOR</span>
          </div>

          <div style={{
            background: 'rgba(12, 11, 10, 0.88)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            padding: '0.45rem 1rem',
            borderRadius: '2px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#d4af37',
            letterSpacing: '0.12em'
          }}>
            5 HOTSPOTS DISCOVERED
          </div>
        </div>
      </div>

      {/* Hotspot Sector Selector Buttons (Mobile & Accessible) */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.75rem',
        marginTop: '1.5rem',
        width: '100%',
        maxWidth: '1180px'
      }}>
        {HOTSPOTS_1500.map((hotspot) => {
          const isSelected = activeHotspot?.id === hotspot.id;

          return (
            <button
              key={hotspot.id}
              onClick={() => handleSelectHotspot(hotspot)}
              style={{
                background: isSelected ? 'rgba(212, 175, 55, 0.25)' : 'rgba(21, 19, 17, 0.7)',
                border: `1px solid ${isSelected ? '#d4af37' : 'rgba(255, 255, 255, 0.1)'}`,
                color: isSelected ? '#ffffff' : '#9e9589',
                padding: '0.65rem 1.2rem',
                borderRadius: '2px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ color: '#d4af37', fontWeight: 800 }}>{hotspot.code}</span>
              <span>{hotspot.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Hotspot Detailed Panel */}
      {activeHotspot && (
        <div style={{
          width: '100%',
          maxWidth: '1180px',
          background: 'rgba(21, 19, 17, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '3px',
          padding: 'clamp(1.6rem, 3vw, 2.4rem)',
          marginTop: '1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#0c0b0a',
                background: '#d4af37',
                padding: '0.15rem 0.5rem',
                borderRadius: '2px',
                fontWeight: 800
              }}>
                SECTOR {activeHotspot.code}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: '#f3e5ab'
              }}>
                {activeHotspot.badge}
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.9rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.08em',
              marginBottom: '0.2rem'
            }}>
              {activeHotspot.title}
            </h3>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#d4af37',
              letterSpacing: '0.12em',
              marginBottom: '1rem'
            }}>
              {activeHotspot.subtitle}
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: '#ede5dc',
              lineHeight: 1.65,
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              "{activeHotspot.overview}"
            </p>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              color: '#9e9589',
              lineHeight: 1.65
            }}>
              {activeHotspot.description}
            </p>
          </div>

          {/* Architecture & Chronicler Note */}
          <div style={{
            background: 'rgba(12, 11, 10, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.22)',
            borderRadius: '2px',
            padding: '1.5rem'
          }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#d4af37',
                letterSpacing: '0.15em',
                marginBottom: '0.35rem'
              }}>
                ARCHITECTURAL ENGINEERING
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                color: '#d4c7b8',
                lineHeight: 1.6
              }}>
                {activeHotspot.architectureDetail}
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#f3e5ab',
                letterSpacing: '0.15em',
                marginBottom: '0.35rem'
              }}>
                CHRONICLER RECORD
              </div>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '0.88rem',
                color: '#9e9589',
                lineHeight: 1.55
              }}>
                "{activeHotspot.funFact}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Transition to Role Selection CTA */}
      <div style={{
        marginTop: '3.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          letterSpacing: '0.16em',
          color: '#d4af37',
          marginBottom: '0.8rem',
          textTransform: 'uppercase'
        }}>
          History is not only architecture. IT IS PEOPLE.
        </div>
        <button
          onClick={handleContinue}
          className="btn-gold"
          style={{ padding: '0.95rem 2.8rem', fontSize: '0.92rem' }}
        >
          <span>BECOME PART OF HISTORY</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
