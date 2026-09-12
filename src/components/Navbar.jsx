import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Clock, Compass } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar({ activeSection, onNavigate, isTimeShifting }) {
  const [isAudioOn, setIsAudioOn] = useState(false);

  const toggleSound = () => {
    const newState = soundEngine.toggle();
    setIsAudioOn(newState);
  };

  // 5 Global Navigation categories as requested: JOURNEY, TIMELINE, EXPLORE, HISTORY, IMPACT
  const navItems = [
    { id: 'landing', label: 'JOURNEY', targetId: 'landing' },
    { id: 'timeline', label: 'TIMELINE', targetId: 'timeline' },
    { id: 'world', label: 'EXPLORE', targetId: 'world' },
    { id: 'chat', label: 'HISTORY', targetId: 'chat' },
    { id: 'impact', label: 'IMPACT', targetId: 'impact' }
  ];

  // Calculate progress percentage through the 10 scenes
  const sectionOrder = ['landing', 'heritage', 'timeline', 'world', 'roles', 'chat', 'memory', 'comparison', 'impact', 'future'];
  const currentIndex = Math.max(0, sectionOrder.indexOf(activeSection));
  const progressPercent = Math.round(((currentIndex + 1) / sectionOrder.length) * 100);

  if (isTimeShifting) return null; // Disappear during cinematic time shift transition

  return (
    <header style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 2.5rem)',
      maxWidth: '1120px',
      zIndex: 80,
      background: 'rgba(15, 13, 11, 0.78)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(212, 175, 55, 0.22)',
      borderRadius: '9999px',
      padding: '0.55rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 10px 35px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.08)',
      transition: 'opacity 0.4s ease, transform 0.4s ease'
    }}>
      {/* Brand */}
      <div 
        onClick={() => onNavigate('landing')} 
        style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }}
      >
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '1.5px solid #d4af37',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 80%)',
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)'
        }}>
          <Sparkles size={14} color="#f3e5ab" />
        </div>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 800,
          letterSpacing: '0.22em',
          fontSize: '1rem',
          color: '#ffffff'
        }}>
          TIMEWEAVE
        </div>
      </div>

      {/* Global Clean Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.4rem'
      }}>
        {navItems.map(item => {
          const isActive = activeSection === item.id || 
            (item.id === 'journey' && ['landing', 'heritage'].includes(activeSection)) ||
            (item.id === 'explore' && ['world', 'roles'].includes(activeSection)) ||
            (item.id === 'history' && ['chat', 'memory'].includes(activeSection)) ||
            (item.id === 'impact' && ['comparison', 'impact', 'future'].includes(activeSection));

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.targetId)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: isActive ? '#f3e5ab' : '#8c8376',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '0.2rem 0'
              }}
            >
              {item.label}
              {isActive && (
                <span style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '14px',
                  height: '2px',
                  backgroundColor: '#d4af37',
                  borderRadius: '1px',
                  boxShadow: '0 0 6px #d4af37'
                }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Progress & Audio Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        {/* Journey Progress Indicator */}
        <div 
          title={`Journey Progress: ${progressPercent}%`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#d4af37',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            padding: '0.25rem 0.65rem',
            borderRadius: '9999px'
          }}
        >
          <div style={{
            width: '28px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${progressPercent}%`,
              height: '100%',
              background: '#d4af37',
              borderRadius: '2px',
              transition: 'width 0.4s ease'
            }} />
          </div>
          <span>{progressPercent}%</span>
        </div>

        {/* Ambience Toggle */}
        <button
          onClick={toggleSound}
          title={isAudioOn ? 'Mute Sacred Atmosphere Drone' : 'Enable Sacred Atmosphere Drone'}
          style={{
            background: isAudioOn ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${isAudioOn ? '#d4af37' : 'rgba(255, 255, 255, 0.12)'}`,
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            color: isAudioOn ? '#f3e5ab' : '#8c8376',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          {isAudioOn ? <Volume2 size={14} color="#d4af37" /> : <VolumeX size={14} />}
        </button>
      </div>
    </header>
  );
}
