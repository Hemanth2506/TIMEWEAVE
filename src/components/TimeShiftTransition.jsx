import React, { useEffect, useRef, useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';

export default function TimeShiftTransition({ isActive, onComplete }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState(0); // 0: initial flash/darken, 1: coordinates, 2: 1500 expand, 3: reveal

  useEffect(() => {
    if (!isActive) {
      setPhase(0);
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 400);  // Coordinates emerge
    const t2 = setTimeout(() => setPhase(2), 1200); // 1500 CE expands
    const t3 = setTimeout(() => setPhase(3), 2000); // Hampi reveal
    const t4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isActive, onComplete]);

  // Hyperspace / Time-tunnel particle warp acceleration
  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 220 }, () => ({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      z: Math.random() * canvas.width,
      pz: Math.random() * canvas.width
    }));

    let speed = 6;

    const render = () => {
      speed += 0.8;
      ctx.fillStyle = 'rgba(12, 11, 10, 0.35)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach(s => {
        s.z -= speed;
        if (s.z <= 0) {
          s.z = canvas.width;
          s.x = (Math.random() - 0.5) * canvas.width;
          s.y = (Math.random() - 0.5) * canvas.height;
          s.pz = s.z;
        }

        const k = 250 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;

        const prevK = 250 / s.pz;
        const ppx = s.x * prevK + cx;
        const ppy = s.y * prevK + cy;
        s.pz = s.z;

        ctx.beginPath();
        ctx.moveTo(ppx, ppy);
        ctx.lineTo(px, py);
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = Math.min(2.5, (1 - s.z / canvas.width) * 3);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999,
      background: '#0c0b0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      userSelect: 'none'
    }}>
      {/* 3D Hyperspace Warp Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Cinematic Center Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '850px'
      }}>
        {/* Step 1: TIME SHIFTING... */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
          letterSpacing: '0.35em',
          color: '#d4af37',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          opacity: phase >= 0 ? 1 : 0,
          transform: phase >= 0 ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.5s ease'
        }}>
          TIME SHIFTING...
        </div>

        {/* Step 2: Coordinates HUD */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.4rem 1.2rem',
          borderRadius: '9999px',
          background: 'rgba(212, 175, 55, 0.15)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.2em',
          color: '#f3e5ab',
          marginBottom: '2rem',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.5s ease'
        }}>
          <Compass size={14} color="#d4af37" />
          <span>15.3350° N, 76.4600° E · ELEVATION 467M</span>
        </div>

        {/* Step 3: Expanding 1500 CE Year Portal */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3.8rem, 12vw, 8.5rem)',
          fontWeight: 900,
          letterSpacing: '0.14em',
          color: '#ffffff',
          lineHeight: 1,
          textShadow: '0 0 60px rgba(212, 175, 55, 0.7), 0 0 120px rgba(212, 175, 55, 0.35)',
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'scale(1)' : 'scale(0.7)',
          transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          1500 CE
        </div>

        {/* Subtitle: VIJAYANAGARA EMPIRE */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)',
          fontWeight: 700,
          letterSpacing: '0.24em',
          color: '#f3e5ab',
          marginTop: '1.2rem',
          textTransform: 'uppercase',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s'
        }}>
          VIJAYANAGARA EMPIRE
        </div>

        {/* Final Reveal: HAMPI */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          letterSpacing: '0.3em',
          color: '#4ade80',
          marginTop: '2rem',
          opacity: phase >= 3 ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}>
          ENTRY POINT REACHED · ENTERING HAMPI
        </div>
      </div>
    </div>
  );
}
