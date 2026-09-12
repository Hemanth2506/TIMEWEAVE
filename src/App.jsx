import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CinematicLanding from './components/CinematicLanding';
import HeritageSelection from './components/HeritageSelection';
import TimeMachine from './components/TimeMachine';
import TimeShiftTransition from './components/TimeShiftTransition';
import HistoricalWorld from './components/HistoricalWorld';
import ChooseRole from './components/ChooseRole';
import TalkToHistory from './components/TalkToHistory';
import MemoryOfStone from './components/MemoryOfStone';
import PastVsPresent from './components/PastVsPresent';
import ConservationImpact from './components/ConservationImpact';
import FutureHorizon from './components/FutureHorizon';
import { HISTORICAL_ROLES } from './data/hampiData';
import { soundEngine } from './utils/audio';

export default function App() {
  const [activeSection, setActiveSection] = useState('landing');
  const [selectedRole, setSelectedRole] = useState(HISTORICAL_ROLES[0]); // Default Merchant
  const [isTimeShifting, setIsTimeShifting] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartTimeShift = () => {
    setIsTimeShifting(true);
  };

  const handleTimeShiftComplete = () => {
    setIsTimeShifting(false);
    scrollToSection('world');
  };

  // Intersection observer to track current scene for navbar progress
  useEffect(() => {
    const sections = [
      'landing',
      'heritage',
      'timeline',
      'world',
      'roles',
      'chat',
      'memory',
      'comparison',
      'impact',
      'future'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0c0b0a' }}>
      {/* Background Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Cinematic Time Warp Transition Overlay */}
      <TimeShiftTransition
        isActive={isTimeShifting}
        onComplete={handleTimeShiftComplete}
      />

      {/* Global Minimal Museum Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isTimeShifting={isTimeShifting}
      />

      {/* Main Experience Flow: 10 Seamless Scenes */}
      <main>
        {/* SCENE 01: The Awakening */}
        <CinematicLanding
          onEnterPast={() => scrollToSection('heritage')}
          onExploreHampi={() => scrollToSection('timeline')}
        />

        {/* SCENE 02: Choose a World */}
        <HeritageSelection
          onSelectHampi={() => scrollToSection('timeline')}
        />

        {/* SCENE 03: The Time Machine */}
        <TimeMachine
          onEnterHistoricalWorld={handleStartTimeShift}
        />

        {/* SCENE 04: Enter Hampi (1500 CE 2.5D Environment & Hotspots) */}
        <HistoricalWorld
          onProceedToRole={() => scrollToSection('roles')}
        />

        {/* SCENE 05: Human History (Role Selection) */}
        <ChooseRole
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
          onMeetGuide={() => scrollToSection('chat')}
        />

        {/* SCENE 06: Talk to History (AI Historical Guide Prototype) */}
        <TalkToHistory
          selectedRole={selectedRole}
          onProceedToMemory={() => scrollToSection('memory')}
        />

        {/* SCENE 07: The Memory of Stone (3D Archaeological Fragments) */}
        <MemoryOfStone
          onProceedToComparison={() => scrollToSection('comparison')}
        />

        {/* SCENE 08: Past vs Present (Dual Lens Comparison) */}
        <PastVsPresent
          onProceedToImpact={() => scrollToSection('impact')}
        />

        {/* SCENE 09: Conservation & Preservation */}
        <ConservationImpact
          onProceedToFuture={() => scrollToSection('future')}
        />

        {/* SCENE 10: Future (Roadmap & Replay) */}
        <FutureHorizon
          onReplayJourney={() => scrollToSection('landing')}
        />
      </main>
    </div>
  );
}
