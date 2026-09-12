import React, { useState, useRef, useEffect } from 'react';
import { CHAT_QUESTIONS, KNOWLEDGE_BASE } from '../data/hampiData';
import { Send, Sparkles, User, ArrowRight, CornerDownLeft, RefreshCw } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function TalkToHistory({ selectedRole, onProceedToMemory }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'guide',
      text: "Namaskara! I am Virashetty, a merchant of the Sule Bazaar in Hampi, 1500 CE. Step into my mandapa—whether you seek to know of our diamond scales, our stone aqueducts, or the emperor Krishnadevaraya, ask, and I shall speak of our living world.",
      time: '1500 CE'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const findAnswer = (query) => {
    const qLower = query.toLowerCase().trim();

    // Exact question match
    const exactMatch = KNOWLEDGE_BASE.find(k => k.question.toLowerCase() === qLower);
    if (exactMatch) return exactMatch.response;

    // Trigger keyword match
    for (const item of KNOWLEDGE_BASE) {
      if (item.triggers.some(trigger => qLower.includes(trigger))) {
        return item.response;
      }
    }

    if (qLower.includes('soldier') || qLower.includes('army') || qLower.includes('guard')) {
      return "Our imperial garrison stands guard across seven concentric granite rings and the steep rapids of the Tungabhadra river. Royal war elephants and archers patrol from morning till nightfall.";
    }
    if (qLower.includes('sculptor') || qLower.includes('stone') || qLower.includes('chariot') || qLower.includes('pillar')) {
      return "Our master shilpis (sculptors) carve monolithic granite boulders into musical pillars at Vittala Temple and sacred shrines for Virupaksha. Every pillar produces a distinct musical note when tapped.";
    }

    // Graceful fallback
    return "I can currently answer questions about trade, daily life, architecture, water, culture and the Vijayanagara world. Ask me about one of these.";
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isTyping) return;

    soundEngine.playChime();

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const fullResponse = findAnswer(text);

    // Simulated typewriter streaming effect
    setTimeout(() => {
      let currentLength = 0;
      const guideMessageId = (Date.now() + 1).toString();

      setMessages(prev => [
        ...prev,
        {
          id: guideMessageId,
          sender: 'guide',
          text: '',
          time: '1500 CE'
        }
      ]);

      const interval = setInterval(() => {
        currentLength += 8;
        const partialText = fullResponse.slice(0, currentLength);

        setMessages(prev =>
          prev.map(m => m.id === guideMessageId ? { ...m, text: partialText } : m)
        );

        if (currentLength >= fullResponse.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 25);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    soundEngine.playChime();
    setMessages([
      {
        id: 'welcome',
        sender: 'guide',
        text: "Namaskara! I am Virashetty, a merchant of the Sule Bazaar in Hampi, 1500 CE. Ask me of our trade, our stone canals, or the court of Vijayanagara.",
        time: '1500 CE'
      }
    ]);
  };

  return (
    <section 
      id="chat"
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
          <Sparkles size={13} color="#d4af37" />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#f3e5ab'
          }}>
            AI HISTORICAL GUIDE — PROTOTYPE
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 900,
          letterSpacing: '0.12em',
          color: '#ffffff',
          lineHeight: 1.15
        }}>
          TALK TO HISTORY
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          color: '#9e9589',
          marginTop: '0.8rem',
          fontWeight: 300
        }}>
          "Ask about the world you just entered."
        </p>
      </div>

      {/* Main Chat Interface Grid */}
      <div style={{
        width: '100%',
        maxWidth: '1140px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        alignItems: 'start',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Character Profile Card */}
        <div style={{
          background: 'rgba(20, 18, 15, 0.88)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '4px',
          padding: '1.8rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 20px 45px rgba(0,0,0,0.7)'
        }}>
          {/* Portrait */}
          <div style={{
            position: 'relative',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #d4af37',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.35)',
            marginBottom: '1.2rem'
          }}>
            <img
              src={`${import.meta.env.BASE_URL}images/merchant_portrait.jpg`}
              alt="Vijayanagara Merchant Portrait"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#4ade80',
              border: '2px solid #0c0b0a'
            }} />
          </div>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            color: '#d4af37',
            marginBottom: '0.3rem'
          }}>
            HISTORICAL CHARACTER GUIDE
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.08em',
            marginBottom: '0.2rem'
          }}>
            VIRASHETTY
          </h3>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#f3e5ab',
            letterSpacing: '0.1em',
            marginBottom: '0.9rem'
          }}>
            VIJAYANAGARA MERCHANT · 1500 CE
          </div>

          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.88rem',
            color: '#9e9589',
            lineHeight: 1.5,
            marginBottom: '1.2rem',
            fontStyle: 'italic'
          }}>
            "Ask me about life in Hampi."
          </div>

          {/* Quick Info Grid */}
          <div style={{
            width: '100%',
            background: 'rgba(12, 11, 10, 0.7)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '2px',
            padding: '0.8rem',
            marginBottom: '1.2rem',
            display: 'flex',
            justifyContent: 'space-around',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem'
          }}>
            <div>
              <div style={{ color: '#9e9589' }}>SECTOR</div>
              <div style={{ color: '#f3e5ab', fontWeight: 700 }}>SULE BAZAAR</div>
            </div>
            <div style={{ width: '1px', background: 'rgba(212, 175, 55, 0.2)' }} />
            <div>
              <div style={{ color: '#9e9589' }}>SPECIALTY</div>
              <div style={{ color: '#f3e5ab', fontWeight: 700 }}>GEMS & SILK</div>
            </div>
          </div>

          {/* Suggested Inquiries */}
          <div style={{ width: '100%', textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              color: '#d4af37',
              marginBottom: '0.6rem',
              textTransform: 'uppercase'
            }}>
              SUGGESTED QUESTIONS:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {CHAT_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  disabled={isTyping}
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '2px',
                    padding: '0.45rem 0.75rem',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.78rem',
                    color: '#ede5dc',
                    cursor: isTyping ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={e => {
                    if (!isTyping) {
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
                      e.currentTarget.style.borderColor = '#d4af37';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isTyping) {
                      e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                    }
                  }}
                >
                  <span>"{q}"</span>
                  <Sparkles size={11} color="#d4af37" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Interactive Chat Box */}
        <div style={{
          background: 'rgba(20, 18, 15, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '4px',
          height: '620px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.85)'
        }}>
          {/* Chat Header */}
          <div style={{
            padding: '1rem 1.4rem',
            borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
            background: 'rgba(12, 11, 10, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px #4ade80'
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#f3e5ab' }}>
                HISTORICAL CONTEXT SIMULATION · 1500 CE
              </span>
            </div>

            <button
              onClick={handleResetChat}
              title="Reset Conversation"
              style={{
                background: 'none',
                border: 'none',
                color: '#9e9589',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem'
              }}
            >
              <RefreshCw size={12} />
              <span>RESET</span>
            </button>
          </div>

          {/* Messages Feed */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.3rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: '#9e9589'
                }}>
                  {msg.sender === 'guide' ? (
                    <>
                      <Sparkles size={11} color="#d4af37" />
                      <span style={{ color: '#d4af37', fontWeight: 700 }}>VIRASHETTY</span>
                      <span>· {msg.time}</span>
                    </>
                  ) : (
                    <>
                      <User size={11} />
                      <span>TRAVELER</span>
                      <span>· {msg.time}</span>
                    </>
                  )}
                </div>

                <div style={{
                  maxWidth: '85%',
                  background: msg.sender === 'user'
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.12) 100%)'
                    : 'rgba(14, 12, 10, 0.85)',
                  border: `1px solid ${msg.sender === 'user' ? 'rgba(212, 175, 55, 0.45)' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: msg.sender === 'user' ? '12px 2px 12px 12px' : '2px 12px 12px 12px',
                  padding: '0.85rem 1.15rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: '#ede5dc',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem' }}>
                <Sparkles size={12} color="#d4af37" className="animate-spin" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#d4af37' }}>
                  Virashetty is recalling memory...
                </span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Bar */}
          <div style={{
            padding: '1rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            background: 'rgba(12, 11, 10, 0.8)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(21, 19, 17, 0.9)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '3px',
              padding: '0.35rem 0.6rem'
            }}>
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask of trade, water, temples, or daily life in Hampi..."
                disabled={isTyping}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  padding: '0.5rem'
                }}
              />

              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                style={{
                  background: inputValue.trim() ? '#d4af37' : 'rgba(255, 255, 255, 0.1)',
                  color: '#0c0b0a',
                  border: 'none',
                  borderRadius: '2px',
                  padding: '0.55rem 0.9rem',
                  cursor: inputValue.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease'
                }}
              >
                <span>SEND</span>
                <Send size={12} />
              </button>
            </div>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: '#6e6559',
              marginTop: '0.5rem',
              textAlign: 'center'
            }}>
              Prototype knowledge engine — zero external API dependency · Future AI ready
            </div>
          </div>
        </div>
      </div>

      {/* Transition to Scene 07: The Memory of Stone */}
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
          PHYSICAL TRACES OF EMPIRE
        </div>
        <button
          onClick={onProceedToMemory}
          className="btn-gold"
          style={{ padding: '0.95rem 2.8rem', fontSize: '0.92rem' }}
        >
          <span>THE MEMORY OF STONE</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
