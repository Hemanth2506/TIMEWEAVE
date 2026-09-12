import React, { useState, useEffect, useRef } from 'react';
import { ARCHAEOLOGICAL_OBJECTS } from '../data/hampiData';
import { Sparkles, ArrowRight, Layers, Box, Eye, Compass } from 'lucide-react';
import { soundEngine } from '../utils/audio';

// Interactive 3D Canvas Rendering of an Archaeological Fragment
function Fragment3DCanvas({ shape, isHovered, color = '#d4af37' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let angleX = 0.2;
    let angleY = 0.4;
    let angleZ = 0.1;

    const size = 110;
    canvas.width = size;
    canvas.height = size;

    // Define 3D vertices based on geometric shape
    let vertices = [];
    let edges = [];

    if (shape === 'cube') {
      // Stone block
      vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
      ].map(v => [v[0] * 28, v[1] * 28, v[2] * 28]);
      edges = [
        [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
      ];
    } else if (shape === 'octahedron') {
      // Inscription Slab
      vertices = [
        [0, -38, 0], [0, 38, 0], [-30, 0, -12], [30, 0, -12],
        [30, 0, 12], [-30, 0, 12]
      ];
      edges = [
        [0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],
        [2,3],[3,4],[4,5],[5,2]
      ];
    } else if (shape === 'cylinder') {
      // Musical Pillar
      const segments = 8;
      vertices = [];
      edges = [];
      for (let i = 0; i < segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        vertices.push([Math.cos(a) * 22, -34, Math.sin(a) * 22]); // top
        vertices.push([Math.cos(a) * 22, 34, Math.sin(a) * 22]);  // bottom
      }
      for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        edges.push([i * 2, i * 2 + 1]);
        edges.push([i * 2, next * 2]);
        edges.push([i * 2 + 1, next * 2 + 1]);
      }
    } else {
      // Water Channel / Sculptural Geometry
      vertices = [
        [-28, -18, -20], [28, -18, -20], [24, 18, -14], [-24, 18, -14],
        [-24, -18, 20], [24, -18, 20], [20, 18, 14], [-20, 18, 14]
      ];
      edges = [
        [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7]
      ];
    }

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      const speed = isHovered ? 0.035 : 0.012;
      angleY += speed;
      angleX += speed * 0.6;

      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const cosZ = Math.cos(angleZ), sinZ = Math.sin(angleZ);

      // Rotate & Project 3D -> 2D
      const projected = vertices.map(v => {
        let x = v[0], y = v[1], z = v[2];

        // Y rot
        let x1 = x * cosY + z * sinY;
        let z1 = -x * sinY + z * cosY;

        // X rot
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        // Z rot
        let x3 = x1 * cosZ - y2 * sinZ;
        let y3 = x1 * sinZ + y2 * cosZ;

        const fov = 160;
        const scale = fov / (fov + z2 + 50);
        return [x3 * scale + size / 2, y3 * scale + size / 2, z2];
      });

      // Draw Edges with gold glow
      ctx.strokeStyle = color;
      ctx.lineWidth = isHovered ? 2 : 1.4;
      ctx.shadowBlur = isHovered ? 12 : 6;
      ctx.shadowColor = color;

      edges.forEach(e => {
        const p1 = projected[e[0]];
        const p2 = projected[e[1]];
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      });

      // Draw glowing vertices
      ctx.fillStyle = '#ffffff';
      projected.forEach(p => {
        ctx.beginPath();
        ctx.arc(p[0], p[1], isHovered ? 2.5 : 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [shape, isHovered, color]);

  return <canvas ref={canvasRef} style={{ width: '110px', height: '110px' }} />;
}

export default function MemoryOfStone({ onProceedToComparison }) {
  const [activeObj, setActiveObj] = useState(ARCHAEOLOGICAL_OBJECTS[0]);
  const [hoveredId, setHoveredId] = useState(null);

  const handleSelect = (obj) => {
    soundEngine.playChime();
    setActiveObj(obj);
  };

  const handleNext = () => {
    soundEngine.playChime();
    onProceedToComparison();
  };

  return (
    <section 
      id="memory"
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
      {/* Subtle Background Radial Mist */}
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '750px',
        height: '450px',
        background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '3.5rem', position: 'relative', zIndex: 10 }}>
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
          <Box size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            SCENE 07 · ARCHAEOLOGICAL ARTIFACTS
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
          THE CITY REMEMBERED
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          color: '#f3e5ab',
          marginTop: '1.2rem',
          fontStyle: 'italic',
          letterSpacing: '0.04em'
        }}>
          "Even when civilizations change, physical traces remain."
        </p>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.98rem',
          color: '#9e9589',
          marginTop: '0.6rem',
          fontWeight: 300
        }}>
          Inspect 3D wireframe fragments surviving from the 16th century imperial enclosures.
        </p>
      </div>

      {/* Floating 3D Archaeological Fragments Grid */}
      <div style={{
        width: '100%',
        maxWidth: '1160px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '1.4rem',
        marginBottom: '2.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {ARCHAEOLOGICAL_OBJECTS.map((obj) => {
          const isSelected = activeObj.id === obj.id;
          const isHovered = hoveredId === obj.id;

          return (
            <div
              key={obj.id}
              onClick={() => handleSelect(obj)}
              onMouseEnter={() => setHoveredId(obj.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: isSelected 
                  ? 'linear-gradient(180deg, rgba(35, 30, 24, 0.95) 0%, rgba(18, 16, 14, 0.95) 100%)' 
                  : 'rgba(18, 16, 14, 0.7)',
                border: isSelected ? '1.5px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '1.4rem 1rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isSelected 
                  ? '0 15px 40px rgba(0,0,0,0.85), 0 0 25px rgba(212, 175, 55, 0.22)' 
                  : isHovered 
                    ? '0 10px 25px rgba(0,0,0,0.6), 0 0 12px rgba(212, 175, 55, 0.1)' 
                    : 'none',
                transform: isSelected ? 'translateY(-5px)' : isHovered ? 'translateY(-2px)' : 'none'
              }}
            >
              {/* 3D Wireframe Rotating Canvas */}
              <div style={{ marginBottom: '1rem' }}>
                <Fragment3DCanvas shape={obj.shape} isHovered={isHovered || isSelected} />
              </div>

              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.14em',
                color: '#d4af37',
                marginBottom: '0.2rem'
              }}>
                {obj.subtitle}
              </div>

              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1rem',
                fontWeight: 800,
                color: isSelected ? '#ffffff' : '#ede5dc',
                letterSpacing: '0.06em'
              }}>
                {obj.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Fragment Deep Dive Card */}
      {activeObj && (
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          background: 'rgba(22, 19, 16, 0.92)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '4px',
          padding: 'clamp(1.5rem, 3vw, 2.2rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          position: 'relative',
          zIndex: 10
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.14em',
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#f3e5ab',
                padding: '0.2rem 0.6rem',
                borderRadius: '2px',
                border: '1px solid rgba(212, 175, 55, 0.35)'
              }}>
                {activeObj.coordinates}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9e9589' }}>
                SURVIVING SPECIMEN
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.08em',
              marginBottom: '0.3rem'
            }}>
              {activeObj.title}
            </h3>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#d4af37',
              letterSpacing: '0.12em',
              marginBottom: '1rem'
            }}>
              MATERIAL: {activeObj.material}
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.98rem',
              color: '#d4c7b8',
              lineHeight: 1.65
            }}>
              {activeObj.significance}
            </p>
          </div>

          <div style={{
            background: 'rgba(12, 11, 10, 0.7)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '3px',
            padding: '1.4rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Fragment3DCanvas shape={activeObj.shape} isHovered={true} color="#f3e5ab" />
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#9e9589',
              marginTop: '0.5rem'
            }}>
              INTERACTIVE 3D ARTIFACT SCAN · REAL-TIME PROJECTION
            </div>
          </div>
        </div>
      )}

      {/* CTA to Past vs Present */}
      <div style={{
        marginTop: '3.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          letterSpacing: '0.16em',
          color: '#d4af37',
          marginBottom: '0.8rem',
          textTransform: 'uppercase'
        }}>
          WITNESS THE TRANSFORMATION
        </div>
        <button
          onClick={handleNext}
          className="btn-gold"
          style={{ padding: '0.95rem 2.8rem', fontSize: '0.92rem' }}
        >
          <span>WHAT SURVIVED? (PAST VS PRESENT)</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
