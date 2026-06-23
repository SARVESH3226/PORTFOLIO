import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal, Shield } from 'lucide-react';

const typingTexts = [
  "Computer Science Engineer",
  "Artificial Intelligence Practitioner",
  "Machine Learning Enthusiast",
  "Web Application Developer"
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = typingTexts[textIdx];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        setSpeed(80);
      }, speed);

      if (typedText === currentFullText) {
        // Wait at full typed state
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        setSpeed(40);
      }, speed);

      if (typedText === "") {
        setIsDeleting(false);
        setTextIdx((prev) => (prev + 1) % typingTexts.length);
        setSpeed(200);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIdx, speed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Pattern Layer */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left: Heading and Core Info */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 border border-purple-500/30 bg-purple-500/5 px-3 py-1.5 rounded-full w-fit mb-6"
          >
            <Shield className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="font-mono text-xs text-purple-300 tracking-widest">SYSTEM ENVIRONMENT // ACTIVE PORTFOLIO</span>
          </motion.div>

          {/* Glowing Animated Main Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-2 leading-none"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-slate-500">
              SARVESHAA
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 drop-shadow-[0_0_35px_rgba(139,92,246,0.3)] animate-pulse-slow">
              S
            </span>
          </motion.h1>

          {/* Subtitles */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-mono text-cyan-400 tracking-wide mb-6 uppercase"
          >
            AI & Machine Learning • Computer Vision • Web Developer
          </motion.h2>

          {/* Animated Console Typing Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-950/80 border border-white/5 rounded-lg p-4 font-mono text-xs md:text-sm text-slate-400 mb-8 max-w-xl flex items-center gap-3 backdrop-blur-md"
          >
            <Terminal className="text-purple-500 shrink-0" size={18} />
            <div className="flex-1 text-left">
              <span className="text-purple-400">user@sarveshaa_s:~$</span>{' '}
              <span className="text-slate-100 font-semibold">{typedText}</span>
              <span className="w-1.5 h-4 bg-cyan-400 inline-block animate-pulse ml-0.5" />
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg border border-purple-400/20 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered. (In production, replace with your PDF file path)");
              }}
              className="flex items-center gap-2 bg-transparent text-slate-200 hover:text-white font-semibold px-6 py-3 rounded-lg border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-transparent text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Right: Premium Dark Cyber Office Concept Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[420px] aspect-square rounded-2xl glass-card p-4 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Corner Bracket Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            {/* Glowing Matrix Console Mockup Vector */}
            <div className="w-full h-full rounded-xl bg-slate-950/90 relative overflow-hidden flex flex-col border border-white/5">
              {/* Toolbar */}
              <div className="h-8 bg-slate-900/80 border-b border-white/5 flex items-center px-4 justify-between font-mono text-[10px] text-slate-500">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span>AI & FULLSTACK DEVELOPER</span>
                <span className="text-cyan-400 animate-pulse">● LIVE</span>
              </div>
              
              {/* Graphic Body */}
              <div className="flex-1 p-4 font-mono text-[10px] text-slate-400 flex flex-col justify-between overflow-hidden relative">
                {/* Abstract coding graphic */}
                <div className="space-y-1.5 z-10 text-left">
                  <div className="text-slate-500">&lt;!-- Cybernetic Workspace Node --&gt;</div>
                  <div><span className="text-cyan-400">const</span> developer = <span className="text-purple-400">new</span> <span className="text-yellow-400">AIEnthusiast</span>({'{'}</div>
                  <div className="pl-4">name: <span className="text-green-300">"SARVESHAA S"</span>,</div>
                  <div className="pl-4">focusAreas: [<span className="text-green-300">"AI"</span>, <span className="text-green-300">"ML"</span>, <span className="text-green-300">"Computer Vision"</span>, <span className="text-green-300">"Web Dev"</span>],</div>
                  <div className="pl-4">integrityVerify: <span className="text-purple-400">true</span>,</div>
                  <div className="pl-4 text-slate-500">/* Decrypted neural framework: */</div>
                  <div className="pl-4">networkStatus: <span className="text-green-300">"Fully Configured"</span></div>
                  <div>{'});'}</div>
                </div>

                {/* SVG Visual Avatar representation of developer in cyber office */}
                <svg className="w-full h-44 absolute bottom-0 left-0 right-0 z-0 opacity-45 pointer-events-none" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing Desk Backdrop */}
                  <defs>
                    <radialGradient id="cyber-office-glow" cx="50%" cy="80%" r="60%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4"/>
                      <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.15"/>
                      <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <rect x="0" y="0" width="200" height="120" fill="url(#cyber-office-glow)"/>
                  
                  {/* Cyber Office Terminal screen outlines in background */}
                  <path d="M 10 30 L 70 30 L 70 80 L 10 80 Z" stroke="#8b5cf6" strokeWidth="0.5" fill="none" opacity="0.3" strokeDasharray="3,3" />
                  <path d="M 130 20 L 190 20 L 190 70 L 130 70 Z" stroke="#06b6d4" strokeWidth="0.5" fill="none" opacity="0.3" />
                  
                  {/* Desk Outline */}
                  <line x1="0" y1="100" x2="200" y2="100" stroke="#1e293b" strokeWidth="2"/>
                  
                  {/* Laptop Outline */}
                  <path d="M 75 100 L 80 85 L 120 85 L 125 100 Z" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
                  <line x1="65" y1="100" x2="135" y2="100" stroke="#334155" strokeWidth="1.5"/>
                  
                  {/* Glowing Laptop screen beam */}
                  <polygon points="80,85 120,85 150,0 50,0" fill="rgba(6, 182, 212, 0.08)" />
                  
                  {/* Server Rack on the side */}
                  <rect x="15" y="65" width="25" height="35" fill="#0b0f19" stroke="#1e293b" strokeWidth="1"/>
                  <circle cx="20" cy="72" r="1.2" fill="#22c55e" className="animate-ping"/>
                  <circle cx="20" cy="80" r="1.2" fill="#8b5cf6"/>
                  <circle cx="20" cy="88" r="1.2" fill="#06b6d4"/>
                  
                  {/* Developer Silhouette */}
                  <path d="M 90 100 C 90 90 95 80 100 80 C 105 80 110 90 110 100 Z" fill="#020617" stroke="#334155" strokeWidth="1"/>
                  <circle cx="100" cy="73" r="6" fill="#020617" stroke="#334155" strokeWidth="1"/>
                  
                  {/* Floating Code Dots */}
                  <circle cx="100" cy="30" r="1" fill="#8b5cf6" opacity="0.8"/>
                  <circle cx="120" cy="40" r="1.5" fill="#06b6d4" opacity="0.8"/>
                  <circle cx="80" cy="45" r="0.8" fill="#ffffff" opacity="0.5"/>
                </svg>
                
                {/* Network Code Statistics Bar */}
                <div className="z-10 bg-black/40 px-2 py-1 rounded border border-white/5 flex justify-between font-mono text-[9px] text-slate-500">
                  <span>SECURE CONNECTED</span>
                  <span className="text-purple-400">RTT: 12ms</span>
                  <span className="text-cyan-400">PACKETS: OK</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
