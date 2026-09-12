import React, { useState } from 'react';
import { SURVIVAL_METRICS } from '../data/hampiData';
import { Sparkles, ArrowRight, Sliders, AlertCircle } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function PastVsPresent({ onProceedToImpact }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isAutoShifting, setIsAutoShifting] = useState(false);

  const handleTimeShift = () => {
    soundEngine.playChime();
    setIsAutoShifting(true);
    let target = sliderPos < 50 ? 95 : 5;
    let current = sliderPos;
    const step = target > current ? 2 : -2;

    const interval = setInterval(() => {
      current += step;
      setSliderPos(current);
      if ((step > 0 && current >= target) || (step < 0 && current <= target)) {
        clearInterval(interval);
        setIsAutoShifting(false);
      }
    }, 20);
  };

  return (
    <section 
      id="comparison"
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
      {/* Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '2.8rem', position: 'relative', zIndex: 10 }}>
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
          <Sliders size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            CHRONOLOGICAL REVEAL · PAST VS PRESENT
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
          WHAT SURVIVED?
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.1rem',
          color: '#d4c7b8',
          marginTop: '0.8rem',
          fontWeight: 300
        }}>
          Drag the lens between the living metropolis of 1500 CE and the protected granite ruins of today.
        </p>
      </div>

      {/* Interactive Visual Comparison Stage */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1140px',
        marginBottom: '2rem',
        zIndex: 10
      }}>
        {/* Comparison Viewer Window */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(380px, 55vh, 580px)',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 30px 70px rgba(0,0,0,0.9), 0 0 40px rgba(212, 175, 55, 0.18)',
          userSelect: 'none'
        }}>
          {/* Base Layer: PRESENT DAY RUINS (Right side) */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <img
              src={`${import.meta.env.BASE_URL}images/hampi_present.jpg`}
              alt="Hampi Present Day Ruins"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(105%) brightness(95%)'
              }}
            />
            {/* Present Badge */}
            <div style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.5rem',
              background: 'rgba(12, 11, 10, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.4rem 0.9rem',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: '#ede5dc'
            }}>
              HAMPI — TODAY (RUINS)
            </div>
          </div>

          {/* Top Layer Clipped: 1500 CE RECONSTRUCTION (Left side) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            width: `${sliderPos}%`,
            overflow: 'hidden',
            borderRight: '2.5px solid #d4af37',
            boxShadow: '4px 0 24px rgba(212, 175, 55, 0.7)'
          }}>
            <img
              src={`${import.meta.env.BASE_URL}images/hampi_1500ce.jpg`}
              alt="Hampi 1500 CE Reconstructed"
              style={{
                width: '100%',
                height: '100%',
                minWidth: '1140px',
                objectFit: 'cover',
                filter: 'contrast(108%) brightness(92%) saturate(105%)'
              }}
            />
            {/* Past Badge */}
            <div style={{
              position: 'absolute',
              top: '1.2rem',
              left: '1.5rem',
              background: 'rgba(12, 11, 10, 0.88)',
              border: '1px solid rgba(212, 175, 55, 0.45)',
              padding: '0.4rem 0.9rem',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: '#f3e5ab'
            }}>
              HAMPI — 1500 CE (RECONSTRUCTED)
            </div>
          </div>

          {/* Drag Handle Indicator */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: `${sliderPos}%`,
            transform: 'translate(-50%, -50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f3e5ab, #d4af37)',
            border: '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0c0b0a',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.95)',
            pointerEvents: 'none',
            zIndex: 30
          }}>
            <Sliders size={20} />
          </div>
        </div>

        {/* Comparison Interactive Slider Controls */}
        <div style={{
          marginTop: '1.4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={e => setSliderPos(parseInt(e.target.value, 10))}
              aria-label="Split Comparison Lens Slider"
            />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#9e9589',
              marginTop: '0.4rem'
            }}>
              <span style={{ color: '#d4af37' }}>◀ 1500 CE RECONSTRUCTION</span>
              <span>LENS: {sliderPos}%</span>
              <span style={{ color: '#ede5dc' }}>TODAY'S RUINS ▶</span>
            </div>
          </div>

          {/* Past -> Present Trigger Button */}
          <button
            onClick={handleTimeShift}
            disabled={isAutoShifting}
            className="btn-outline"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.78rem' }}
          >
            <span>PAST → PRESENT REVEAL</span>
          </button>
        </div>
      </div>

      {/* The Central Message */}
      <div style={{
        textAlign: 'center',
        margin: '1.5rem 0 2.5rem 0',
        padding: '1.4rem 2.2rem',
        background: 'rgba(21, 19, 17, 0.7)',
        border: '1px solid rgba(212, 175, 55, 0.28)',
        borderRadius: '3px',
        maxWidth: '850px'
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
          fontWeight: 700,
          color: '#f3e5ab',
          letterSpacing: '0.06em',
          lineHeight: 1.5
        }}>
          "History leaves traces. TimeWeave helps us see the world behind them."
        </p>
      </div>

      {/* Category Survival Metrics */}
      <div style={{
        width: '100%',
        maxWidth: '1140px',
        background: 'rgba(18, 16, 14, 0.88)',
        border: '1px solid rgba(212, 175, 55, 0.28)',
        borderRadius: '4px',
        padding: 'clamp(1.6rem, 3vw, 2.4rem)',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.8rem',
          borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
          paddingBottom: '0.8rem'
        }}>
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.3rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.08em'
            }}>
              HERITAGE CONTINUITY AUDIT
            </h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9e9589' }}>
              CATEGORICAL ANALYSIS OF ARCHAEOLOGICAL & CULTURAL SURVIVAL
            </div>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#d4af37',
            background: 'rgba(212, 175, 55, 0.1)',
            padding: '0.3rem 0.65rem',
            borderRadius: '2px',
            border: '1px solid rgba(212, 175, 55, 0.25)'
          }}>
            <AlertCircle size={12} />
            <span>Prototype visualization</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.4rem'
        }}>
          {SURVIVAL_METRICS.map(item => (
            <div
              key={item.category}
              style={{
                background: 'rgba(12, 11, 10, 0.78)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '3px',
                padding: '1.3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    color: '#f3e5ab',
                    fontWeight: 700
                  }}>
                    {item.category}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: item.color
                  }}>
                    {item.percentage}%
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{
                  width: '100%',
                  height: '4px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  marginBottom: '0.8rem'
                }}>
                  <div style={{
                    width: `${item.percentage}%`,
                    height: '100%',
                    background: item.color,
                    borderRadius: '2px'
                  }} />
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: item.color,
                  marginBottom: '0.4rem',
                  fontWeight: 600
                }}>
                  {item.status}
                </div>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  color: '#9e9589',
                  lineHeight: 1.55
                }}>
                  {item.lossDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proceed to Conservation CTA */}
      <div style={{
        marginTop: '3.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <button
          onClick={onProceedToImpact}
          className="btn-gold"
          style={{ padding: '0.95rem 2.8rem', fontSize: '0.92rem' }}
        >
          <span>CONSERVATION & PRESERVATION</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
