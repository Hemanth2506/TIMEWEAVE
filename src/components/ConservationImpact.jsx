import React from 'react';
import { IMPACT_PILLARS } from '../data/hampiData';
import { BookOpen, Map, Landmark, ArrowRight, Heart, Sparkles, Database } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ConservationImpact({ onProceedToFuture }) {
  const getIcon = (id) => {
    switch (id) {
      case 'edu': return <BookOpen size={24} color="#d4af37" />;
      case 'tourism': return <Map size={24} color="#c87d55" />;
      case 'preservation': return <Landmark size={24} color="#38bdf8" />;
      default: return <Heart size={24} />;
    }
  };

  const handleNext = () => {
    soundEngine.playChime();
    onProceedToFuture();
  };

  return (
    <section 
      id="impact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, #0c0b0a 0%, #171410 50%, #0c0b0a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        overflow: 'hidden'
      }}
    >
      {/* Background Heritage Scan Grid Matrix */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Main Philosophy Header */}
      <div style={{ textAlign: 'center', maxWidth: '880px', marginBottom: '3.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.9rem',
          borderRadius: '9999px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          marginBottom: '1rem'
        }}>
          <Database size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            SCENE 09 · CONSERVATION & ARCHIVAL IMPACT
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
          fontWeight: 900,
          letterSpacing: '0.14em',
          color: '#ffffff',
          lineHeight: 1.15
        }}>
          EXPERIENCE.<br />
          UNDERSTAND.<br />
          PRESERVE.
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
          color: '#d4c7b8',
          lineHeight: 1.8,
          maxWidth: '740px',
          marginTop: '1.4rem',
          fontWeight: 300
        }}>
          "Digital heritage can extend access to historical knowledge beyond physical visits and help future generations connect with places that have survived centuries."
        </p>
      </div>

      {/* Three Impact Pillar Cards */}
      <div style={{
        width: '100%',
        maxWidth: '1140px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.8rem',
        marginBottom: '3.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {IMPACT_PILLARS.map(pillar => (
          <div
            key={pillar.id}
            style={{
              background: 'rgba(20, 18, 15, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(212, 175, 55, 0.28)',
              borderRadius: '4px',
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 15px 40px rgba(0,0,0,0.65)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.65)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.28)';
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.4rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}>
                  {getIcon(pillar.id)}
                </div>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.16em',
                  color: '#d4af37',
                  background: 'rgba(212, 175, 55, 0.12)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px'
                }}>
                  {pillar.tag}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem'
              }}>
                {pillar.title}
              </h3>

              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.98rem',
                color: '#f3e5ab',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                "{pillar.headline}"
              </div>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                color: '#9e9589',
                lineHeight: 1.65,
                marginBottom: '1.5rem'
              }}>
                {pillar.description}
              </p>
            </div>

            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '1rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#d4af37'
              }}>
                {pillar.stat}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: '#6e6559'
              }}>
                {pillar.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA to Scene 10: Future */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <button
          onClick={handleNext}
          className="btn-gold"
          style={{ padding: '0.95rem 2.8rem', fontSize: '0.92rem' }}
        >
          <span>THE FUTURE OF HERITAGE</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
