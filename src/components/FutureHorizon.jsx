import React from 'react';
import { FUTURE_ROADMAP } from '../data/hampiData';
import { RotateCcw, ArrowDown, Globe, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function FutureHorizon({ onReplayJourney }) {
  const handleReplay = () => {
    soundEngine.playChime();
    onReplayJourney();
  };

  return (
    <section 
      id="future"
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
      {/* Background World Lineage Map Aura */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '850px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '3.5rem', position: 'relative', zIndex: 10 }}>
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
          <Globe size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            SCENE 10 · EXPANSION ROADMAP
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
          ONE PLATFORM.<br />
          COUNTLESS WORLDS.
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.1rem',
          color: '#d4c7b8',
          marginTop: '1rem',
          fontWeight: 300
        }}>
          From the boulders of Vijayanagara to the monumental heritage of humanity.
        </p>
      </div>

      {/* Visual Roadmap Chain: HAMPI -> DHOLAVIRA -> AJANTA -> CHOLA TEMPLES -> INDIAN HERITAGE -> GLOBAL HERITAGE */}
      <div style={{
        width: '100%',
        maxWidth: '960px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 10
      }}>
        {FUTURE_ROADMAP.map((item, index) => {
          const isCurrent = item.name === 'HAMPI';

          return (
            <React.Fragment key={item.name}>
              <div style={{
                width: '100%',
                maxWidth: '680px',
                background: isCurrent 
                  ? 'linear-gradient(135deg, rgba(35, 30, 24, 0.95) 0%, rgba(20, 17, 14, 0.95) 100%)' 
                  : 'rgba(18, 16, 14, 0.7)',
                border: isCurrent ? '1.5px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '1.1rem 1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: isCurrent ? '0 10px 30px rgba(212, 175, 55, 0.2)' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    color: isCurrent ? '#f3e5ab' : '#8c8376',
                    width: '85px'
                  }}>
                    {item.era}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: isCurrent ? '#ffffff' : '#ede5dc'
                    }}>
                      {item.name}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#9e9589'
                    }}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  letterSpacing: '0.14em',
                  color: item.color,
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: `1px solid ${item.color}40`,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '2px'
                }}>
                  {item.status}
                </div>
              </div>

              {index < FUTURE_ROADMAP.length - 1 && (
                <div style={{ color: '#d4af37', opacity: 0.6, margin: '2px 0' }}>
                  <ArrowDown size={16} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Culmination Statement */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        maxWidth: '820px',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)',
          fontWeight: 900,
          letterSpacing: '0.16em',
          color: '#ffffff',
          lineHeight: 1.25,
          marginBottom: '2rem'
        }}>
          THE FUTURE OF HERITAGE<br />
          IS INTERACTIVE.
        </div>

        <button
          onClick={handleReplay}
          className="btn-gold"
          style={{ padding: '1.1rem 3.4rem', fontSize: '0.96rem' }}
        >
          <RotateCcw size={18} />
          <span>REPLAY THE JOURNEY</span>
        </button>
      </div>

      {/* Mandatory Footer Disclaimer */}
      <footer style={{
        marginTop: '4rem',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        paddingTop: '2rem',
        width: '100%',
        maxWidth: '920px',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.08em',
        color: '#6e6559',
        lineHeight: 1.6
      }}>
        "Historical reconstructions are interpretive visualizations based on available historical knowledge."
        <div style={{ marginTop: '0.5rem', color: '#4a433a' }}>
          TIMEWEAVE · MINI HACKATHON PROTOTYPE · 100% STATIC & GITHUB PAGES READY
        </div>
      </footer>
    </section>
  );
}
