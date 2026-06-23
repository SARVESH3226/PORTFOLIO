import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ParticlesBackground from './components/ParticlesBackground';
import FloatingIcons from './components/FloatingIcons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import GitHubAnalytics from './components/GitHubAnalytics';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll logic for hash links
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden cyber-scanner font-sans">
          {/* Static Canvas Particle System */}
          <ParticlesBackground />

          {/* Spring-Based Neon Cursor */}
          <CustomCursor />

          {/* Floating Technology Symbols */}
          <FloatingIcons />

          {/* Glassmorphic Sticky Header Navigation */}
          <Navbar />

          {/* Scrollable Layout Context */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Internship />
            <Certifications />
            <Education />
            <Achievements />
            <GitHubAnalytics />
            <CodingProfiles />
            <Contact />
            <Footer />
          </main>

          {/* Quick Return scroll helper */}
          <BackToTop />
        </div>
      )}
    </>
  );
}
