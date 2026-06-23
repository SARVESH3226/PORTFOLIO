import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Internship', href: '#internship' },
  { name: 'Certs', href: '#certifications' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      // Toggle navbar background fill on scroll
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/75 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Monogram */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Shield className="w-8 h-8 text-cyan-400 group-hover:text-purple-500 transition-colors duration-300" />
            <Terminal className="w-4 h-4 text-purple-400 absolute inset-0 m-auto group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-glow-blue transition-all duration-300">
            SARVESHAA <span className="text-cyan-400 font-mono">S</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm font-mono tracking-wider text-slate-400 hover:text-cyan-400 transition-colors duration-200 relative group py-1"
            >
              <span className="text-purple-500 mr-0.5">/</span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-md font-mono text-xs font-bold text-cyan-400 border border-cyan-400/30 hover:border-purple-500 hover:text-purple-400 bg-cyan-400/5 hover:bg-purple-500/10 shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
          >
            SYS_INIT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors duration-200"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-violet-600 to-cyan-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-black/95 backdrop-blur-lg border-b border-purple-500/20 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6 font-mono text-base">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 border-b border-white/5 pb-2"
                >
                  <span className="text-purple-500 mr-2">&gt;</span>
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 rounded-md font-mono text-sm font-bold text-cyan-400 border border-cyan-400/40 bg-cyan-400/5 hover:bg-purple-500/10 transition-all duration-300"
              >
                SECURE_CONNECT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
