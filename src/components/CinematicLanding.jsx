import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, Compass, Sparkles, Clock } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function CinematicLanding({ onEnterPast, onExploreHampi }) {
  const canvasRef = useRef(null);
  const [imgError, setImgError] = useState(false);
  const [stage, setStage] = useState(0); // 0: dark awakening, 1: silhouette, 2: title, 3: full presentation

  // Cinematic awakening sequence (0 - 3.5s timing)
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1600);
    const t3 = setTimeout(() => setStage(3), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Subtle floating dust/golden ember particle simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.5,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(243, 229, 171, ',
      alpha: Math.random() * 0.5 + 0.15,
      vy: -(Math.random() * 0.35 + 0.12),
      vx: (Math.random() - 0.5) * 0.25
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#d4af37';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleEnterClick = () => {
    soundEngine.playChime();
    onEnterPast();
  };

  return (
    <section 
      id="landing"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '7rem 1.5rem 2.5rem 1.5rem',
        overflow: 'hidden',
        background: '#0c0b0a'
      }}
    >
      {/* Background Architectural Silhouette & Slow Camera Push */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {!imgError ? (
          <img
            src={`${import.meta.env.BASE_URL}images/hampi_1500ce.jpg`}
            alt="Hampi 1500 CE Silhouette"
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              opacity: stage >= 1 ? 0.38 : 0,
              filter: 'contrast(120%) saturate(110%) brightness(80%)',
              transform: stage >= 1 ? 'scale(1.06)' : 'scale(1.0)',
              transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1), transform 12s ease-out'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at 50% 40%, rgba(212, 175, 55, 0.15) 0%, rgba(12, 11, 10, 0.98) 75%)'
          }} />
        )}

        {/* Cinematic Vignettes & Shadow Grading */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(12, 11, 10, 0.3) 0%, rgba(12, 11, 10, 0.85) 75%, #0c0b0a 100%)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '280px',
          background: 'linear-gradient(to top, #0c0b0a 0%, transparent 100%)'
        }} />
      </div>

      {/* Floating Gold Dust Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          opacity: stage >= 1 ? 1 : 0.3,
          transition: 'opacity 2s ease'
        }}
      />

      {/* Top Episode Tag */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.4rem 1.1rem',
        borderRadius: '9999px',
        background: 'rgba(21, 19, 17, 0.75)',
        border: '1px solid rgba(212, 175, 55, 0.35)',
        backdropFilter: 'blur(10px)',
        opacity: stage >= 2 ? 1 : 0,
        transform: stage >= 2 ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'all 1s ease'
      }}>
        <div style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#d4af37',
          boxShadow: '0 0 8px #d4af37'
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.22em',
          color: '#f3e5ab',
          textTransform: 'uppercase'
        }}>
          EPISODE 01 · HAMPI RECONSTRUCTED
        </span>
      </div>

      {/* Center Cinematic Awakening Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '980px',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Title */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 7.5vw, 6.2rem)',
          fontWeight: 900,
          letterSpacing: '0.16em',
          lineHeight: 1.05,
          color: '#ffffff',
          textShadow: '0 4px 35px rgba(0,0,0,0.9), 0 0 70px rgba(212, 175, 55, 0.25)',
          opacity: stage >= 2 ? 1 : 0,
          transform: stage >= 2 ? 'scale(1)' : 'scale(0.96)',
          transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          TIMEWEAVE
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.2rem, 2.6vw, 2.2rem)',
          fontWeight: 600,
          letterSpacing: '0.18em',
          marginTop: '1.4rem',
          textTransform: 'uppercase',
          color: '#f3e5ab',
          textShadow: '0 2px 16px rgba(0,0,0,0.8)',
          opacity: stage >= 2 ? 1 : 0,
          transform: stage >= 2 ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
        }}>
          HISTORY ISN'T A PLACE.<br />
          IT'S A MOMENT IN TIME.
        </div>

        {/* Supporting Hook */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1rem, 1.35vw, 1.2rem)',
          fontWeight: 300,
          color: '#d4c7b8',
          lineHeight: 1.7,
          maxWidth: '660px',
          marginTop: '1.4rem',
          opacity: stage >= 3 ? 1 : 0,
          transform: stage >= 3 ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
        }}>
          "Step beyond the ruins. Enter the world that once surrounded them."
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2rem',
          marginTop: '2.6rem',
          opacity: stage >= 3 ? 1 : 0,
          transform: stage >= 3 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s'
        }}>
          <button
            onClick={handleEnterClick}
            className="btn-gold"
            style={{ fontSize: '0.9rem', padding: '1rem 2.6rem' }}
          >
            <span>ENTER THE PAST</span>
            <ChevronRight size={18} />
          </button>

          <button
            onClick={onExploreHampi}
            className="btn-outline"
          >
            <span>EXPLORE HAMPI</span>
          </button>
        </div>
      </div>

      {/* Bottom Technical Status Bar */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '920px',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        paddingTop: '1.2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        opacity: stage >= 3 ? 1 : 0,
        transition: 'opacity 1.2s ease 0.9s'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#f5f0eb'
          }}>
            HAMPI
          </span>
          <span style={{ color: 'rgba(212, 175, 55, 0.4)' }}>|</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.16em',
            color: '#d4af37'
          }}>
            VIJAYANAGARA EMPIRE
          </span>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: '#ffffff',
          background: 'rgba(212, 175, 55, 0.15)',
          padding: '0.25rem 0.8rem',
          borderRadius: '2px',
          border: '1px solid rgba(212, 175, 55, 0.4)'
        }}>
          1500 CE
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: '#9e9589'
        }}>
          <Compass size={13} color="#d4af37" />
          <span>15.3350° N, 76.4600° E · KARNATAKA</span>
        </div>
      </div>
    </section>
  );
}
