import React, { useState } from 'react';
import { HISTORICAL_ROLES } from '../data/hampiData';
import { UserCheck, Sparkles, ArrowRight, ShieldCheck, Compass, Hammer, Briefcase } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function ChooseRole({ selectedRole, onSelectRole, onMeetGuide }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getRoleIcon = (id) => {
    switch (id) {
      case 'merchant': return <Briefcase size={20} color="#d4af37" />;
      case 'sculptor': return <Hammer size={20} color="#c87d55" />;
      case 'soldier': return <ShieldCheck size={20} color="#f3e5ab" />;
      case 'traveler': return <Compass size={20} color="#38bdf8" />;
      default: return <UserCheck size={20} />;
    }
  };

  const handleRoleClick = (role) => {
    soundEngine.playChime();
    onSelectRole(role);
  };

  const handleMeet = () => {
    soundEngine.playChime();
    onMeetGuide();
  };

  return (
    <section 
      id="roles"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, #0c0b0a 0%, #16130f 50%, #0c0b0a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        overflow: 'hidden'
      }}
    >
      {/* Dramatic Transition Heading */}
      <div style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '3.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)',
          letterSpacing: '0.24em',
          color: '#d4af37',
          marginBottom: '0.75rem',
          textTransform: 'uppercase'
        }}>
          History is not only architecture. IT IS PEOPLE.
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
          fontWeight: 900,
          letterSpacing: '0.12em',
          color: '#ffffff',
          lineHeight: 1.15
        }}>
          BECOME PART OF HISTORY
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.1rem',
          color: '#d4c7b8',
          marginTop: '0.8rem',
          fontStyle: 'italic',
          fontWeight: 300
        }}>
          "See Hampi through the eyes of someone who lived here."
        </p>
      </div>

      {/* Role Cards Grid with 3D Tilt */}
      <div style={{
        width: '100%',
        maxWidth: '1160px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem',
        position: 'relative',
        zIndex: 10
      }}>
        {HISTORICAL_ROLES.map((role) => {
          const isSelected = selectedRole?.id === role.id;
          const isHovered = hoveredCard === role.id;
          const isMerchant = role.id === 'merchant';

          return (
            <div
              key={role.id}
              onClick={() => handleRoleClick(role)}
              onMouseEnter={() => setHoveredCard(role.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: isSelected 
                  ? 'linear-gradient(180deg, rgba(38, 32, 26, 0.95) 0%, rgba(20, 17, 14, 0.95) 100%)' 
                  : 'rgba(18, 16, 14, 0.72)',
                border: isSelected ? '1.5px solid #d4af37' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '1.8rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isSelected 
                  ? '0 20px 45px rgba(0,0,0,0.85), 0 0 30px rgba(212, 175, 55, 0.25)' 
                  : isHovered 
                    ? '0 15px 35px rgba(0,0,0,0.7), 0 0 15px rgba(212, 175, 55, 0.1)' 
                    : 'none',
                position: 'relative',
                transform: isSelected ? 'translateY(-6px)' : isHovered ? 'translateY(-3px)' : 'none'
              }}
            >
              {/* Badge & Icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: isSelected ? 'rgba(212, 175, 55, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.35)'
                }}>
                  {getRoleIcon(role.id)}
                </div>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.14em',
                  color: isMerchant ? '#0c0b0a' : '#f3e5ab',
                  background: isMerchant ? '#d4af37' : 'rgba(212, 175, 55, 0.15)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                  fontWeight: 800
                }}>
                  {role.tag}
                </span>
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: isSelected ? '#ffffff' : '#ede5dc',
                  letterSpacing: '0.08em',
                  marginBottom: '0.25rem'
                }}>
                  {role.title}
                </h3>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#d4af37',
                  letterSpacing: '0.12em',
                  marginBottom: '0.8rem'
                }}>
                  {role.roleName}
                </div>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: '#ede5dc',
                  lineHeight: 1.5,
                  marginBottom: '0.6rem',
                  fontStyle: 'italic'
                }}>
                  "{role.description}"
                </p>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  color: '#9e9589',
                  lineHeight: 1.55,
                  marginBottom: '1.2rem'
                }}>
                  {role.perspective}
                </p>

                {/* Today's World Focus Areas */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.9rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    color: '#f3e5ab',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                  }}>
                    TODAY'S WORLD:
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {role.todayWorld.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.64rem',
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                          color: '#d4c7b8',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '2px'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: isSelected ? '#d4af37' : '#6b6357'
              }}>
                <span>{isSelected ? 'ACTIVE ROLE' : 'CLICK TO SELECT'}</span>
                <Sparkles size={13} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Role Summary Bar & CTA */}
      <div style={{
        width: '100%',
        maxWidth: '860px',
        background: 'rgba(25, 22, 18, 0.92)',
        border: '1px solid rgba(212, 175, 55, 0.38)',
        borderRadius: '3px',
        padding: '1.4rem 2.2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.65)',
        position: 'relative',
        zIndex: 10
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9e9589', letterSpacing: '0.14em' }}>
            YOUR HISTORICAL IDENTITY:
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.3rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: '#f3e5ab'
          }}>
            {selectedRole ? selectedRole.roleName : 'VIJAYANAGARA MERCHANT'}
          </div>
        </div>

        <button
          onClick={handleMeet}
          className="btn-gold"
          style={{ padding: '0.9rem 2.4rem', fontSize: '0.9rem' }}
        >
          <span>MEET YOUR GUIDE</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
