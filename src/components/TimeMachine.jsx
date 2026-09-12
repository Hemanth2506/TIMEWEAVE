import React, { useState } from 'react';
import { TIMELINE_PERIODS } from '../data/hampiData';
import { Clock, ArrowRight, Activity, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function TimeMachine({ onEnterHistoricalWorld }) {
  const [selectedIndex, setSelectedIndex] = useState(2); // Default is 1500 CE (index 2)

  const currentPeriod = TIMELINE_PERIODS[selectedIndex] || TIMELINE_PERIODS[2];

  const handleIndexChange = (index) => {
    if (index !== selectedIndex) {
      soundEngine.playChime();
      setSelectedIndex(index);
    }
  };

  const handleEnterWorld = () => {
    soundEngine.playChime();
    onEnterHistoricalWorld();
  };

  return (
    <section 
      id="timeline"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, #0c0b0a 0%, #14120f 50%, #0c0b0a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        overflow: 'hidden'
      }}
    >
      {/* Background Time Portal Concentric Energy Rings */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '880px',
        height: '880px',
        borderRadius: '50%',
        border: '1px dashed rgba(212, 175, 55, 0.12)',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(212, 175, 55, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.09) 0%, transparent 70%)',
            boxShadow: '0 0 80px rgba(212, 175, 55, 0.12)'
          }} />
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.9rem',
          borderRadius: '9999px',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          marginBottom: '0.9rem'
        }}>
          <Clock size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            CHRONOLOGICAL ACCELERATOR · HERO MACHINE
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
          HAMPI THROUGH TIME
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          color: '#9e9589',
          marginTop: '0.8rem',
          fontWeight: 300
        }}>
          Manipulate the chronological dial across six centuries to watch the capital emerge, flourish, and endure.
        </p>
      </div>

      {/* Main Time Machine Console */}
      <div style={{
        width: '100%',
        maxWidth: '1080px',
        background: 'rgba(20, 18, 15, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 175, 55, 0.38)',
        borderRadius: '4px',
        padding: 'clamp(1.8rem, 3.5vw, 3rem)',
        boxShadow: '0 30px 70px rgba(0,0,0,0.85), 0 0 40px rgba(212, 175, 55, 0.12)',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Top Time Coordinates Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(212, 175, 55, 0.18)',
          paddingBottom: '1.2rem',
          marginBottom: '2.2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#9e9589' }}>
              CHRONO-COORDINATE:
            </span>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#f3e5ab'
            }}>
              {currentPeriod.year}
            </span>
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#d4af37',
            background: 'rgba(212, 175, 55, 0.1)',
            padding: '0.35rem 0.8rem',
            borderRadius: '2px',
            border: '1px solid rgba(212, 175, 55, 0.25)'
          }}>
            {currentPeriod.statusText}
          </div>
        </div>

        {/* Interactive Timeline Rail with Expanding Portal Effect */}
        <div style={{ margin: '2.5rem 0' }}>
          {/* Draggable Range Slider */}
          <div style={{ position: 'relative', marginBottom: '1.8rem' }}>
            <input
              type="range"
              min="0"
              max={TIMELINE_PERIODS.length - 1}
              step="1"
              value={selectedIndex}
              onChange={(e) => handleIndexChange(parseInt(e.target.value, 10))}
              aria-label="Timeline Year Selection"
            />
          </div>

          {/* Chronological Milestone Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${TIMELINE_PERIODS.length}, 1fr)`,
            gap: '0.6rem',
            textAlign: 'center'
          }}>
            {TIMELINE_PERIODS.map((period, idx) => {
              const isSelected = idx === selectedIndex;
              const isHero1500 = period.year === '1500 CE';

              return (
                <button
                  key={period.id}
                  onClick={() => handleIndexChange(idx)}
                  style={{
                    background: isSelected 
                      ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(212, 175, 55, 0.1) 100%)' 
                      : 'rgba(255, 255, 255, 0.02)',
                    border: isSelected 
                      ? '1.5px solid #d4af37' 
                      : isHero1500 
                        ? '1px dashed rgba(212, 175, 55, 0.45)' 
                        : '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '3px',
                    padding: '0.85rem 0.35rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 0 20px rgba(212, 175, 55, 0.3)' : 'none',
                    transform: isSelected ? 'scale(1.04)' : 'none'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(0.85rem, 1.4vw, 1.2rem)',
                    fontWeight: isSelected ? 900 : 500,
                    color: isSelected ? '#ffffff' : '#9e9589',
                    letterSpacing: '0.05em'
                  }}>
                    {period.year}
                  </div>
                  {isHero1500 && (
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.1em',
                      color: '#d4af37',
                      marginTop: '3px',
                      textTransform: 'uppercase'
                    }}>
                      APEX ERA
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Period Information Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          background: 'rgba(14, 12, 10, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          padding: 'clamp(1.6rem, 3vw, 2.4rem)',
          borderRadius: '3px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.18em',
              color: '#d4af37',
              marginBottom: '0.4rem',
              textTransform: 'uppercase'
            }}>
              {currentPeriod.title}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              {currentPeriod.eraTitle}
            </h3>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              color: '#d4c7b8',
              lineHeight: 1.7,
              marginBottom: '1.4rem'
            }}>
              {currentPeriod.description}
            </p>

            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.94rem',
              color: '#f3e5ab',
              borderLeft: '2px solid #d4af37',
              paddingLeft: '1rem',
              lineHeight: 1.6
            }}>
              {currentPeriod.quote}
            </blockquote>
          </div>

          {/* Visual Indicators Gauge Box */}
          <div style={{
            background: 'rgba(21, 19, 16, 0.88)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '3px',
            padding: '1.6rem'
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: '#f3e5ab',
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              paddingBottom: '0.6rem'
            }}>
              <span>CIVIC FLOURISHING GAUGES</span>
              <Activity size={14} color="#d4af37" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: 'TRADE', value: currentPeriod.indicators.trade, color: '#d4af37' },
                { label: 'ARCHITECTURE', value: currentPeriod.indicators.architecture, color: '#f3e5ab' },
                { label: 'CULTURE', value: currentPeriod.indicators.culture, color: '#c87d55' },
                { label: 'WATER', value: currentPeriod.indicators.water, color: '#38bdf8' },
                { label: 'PEOPLE', value: currentPeriod.indicators.people, color: '#4ade80' }
              ].map(ind => (
                <div key={ind.label}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    color: '#9e9589',
                    marginBottom: '0.3rem'
                  }}>
                    <span>{ind.label}</span>
                    <span style={{ color: ind.color, fontWeight: 700 }}>{ind.value}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${ind.value}%`,
                      height: '100%',
                      background: ind.color,
                      borderRadius: '2px',
                      transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero CTA Button: ENTER 1500 CE */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2.5rem',
          borderTop: '1px solid rgba(212, 175, 55, 0.15)',
          paddingTop: '2rem'
        }}>
          <button
            onClick={handleEnterWorld}
            className="btn-gold"
            style={{ padding: '1.05rem 3.4rem', fontSize: '0.95rem' }}
          >
            <span>ENTER 1500 CE</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
