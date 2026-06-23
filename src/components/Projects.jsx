import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, ScanSearch, CheckCircle, FileSpreadsheet } from 'lucide-react';
import { Github } from './BrandIcons';

const projectsData = [
  {
    title: "Gesture-Based Virtual Mouse System",
    desc: "A hands-free cursor controller utilizing computer vision models (MediaPipe and OpenCV) to map finger gestures to real-time mouse actions. Integrates PyAutoGUI to perform mouse movements, clicks, drags, and scrolls without physical hardware.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/SARVESH3226/HAND-CURSOR",
    demo: "#",
    badge: "VISION CORE",
    // Custom simulated UI representation
    renderPreview: () => (
      <div className="w-full h-full bg-slate-950/90 relative overflow-hidden flex flex-col items-center justify-center p-4 border border-cyan-500/10">
        {/* Webcam Grid Overlay */}
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        
        {/* Hand Landmark Skeleton Animation */}
        <svg className="w-2/3 h-2/3 text-cyan-400 drop-shadow-[0_0_8px_currentColor] z-10" viewBox="0 0 100 100">
          {/* Index Finger */}
          <line x1="50" y1="90" x2="45" y2="70" stroke="currentColor" strokeWidth="2" />
          <line x1="45" y1="70" x2="40" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="40" y1="50" x2="38" y2="30" stroke="currentColor" strokeWidth="2" />
          {/* Tip (active gesture) */}
          <circle cx="38" cy="30" r="4" fill="#8b5cf6" className="animate-ping" />
          <circle cx="38" cy="30" r="2.5" fill="currentColor" />

          {/* Thumb */}
          <line x1="50" y1="90" x2="65" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="65" y1="80" x2="72" y2="68" stroke="currentColor" strokeWidth="2" />
          <circle cx="72" cy="68" r="2.5" fill="currentColor" />

          {/* Other skeleton lines */}
          <line x1="50" y1="90" x2="55" y2="72" stroke="currentColor" strokeWidth="2" />
          <line x1="55" y1="72" x2="58" y2="58" stroke="currentColor" strokeWidth="2" />
          <circle cx="58" cy="58" r="2" fill="currentColor" />
          
          <line x1="50" y1="90" x2="60" y2="75" stroke="currentColor" strokeWidth="2" />
        </svg>

        {/* Floating cursor simulator */}
        <motion.div 
          className="absolute w-4 h-4 text-purple-400 drop-shadow-[0_0_5px_currentColor] z-20"
          animate={{
            x: [-40, 20, -10, 40, -40],
            y: [-30, 10, 30, -20, -30]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M4.5 3v15.25l3.75-3.75 3 6 2.25-1.125-3-6h5.25L4.5 3z" />
          </svg>
        </motion.div>

        {/* Live coordinate tracking text */}
        <div className="absolute bottom-2 left-3 font-mono text-[9px] text-cyan-400">
          WEB_CAM FEED // INDEX_X: <span className="text-white">38.2</span> INDEX_Y: <span className="text-white">30.1</span>
        </div>
        <div className="absolute top-2 right-3 font-mono text-[9px] text-purple-400 animate-pulse">
          ● DETECTING GESTURE
        </div>
      </div>
    )
  },
  {
    title: "Deepfake Image Detection System",
    desc: "An AI-based image verification model built using Convolutional Neural Networks (CNN) and Vision Transformers (ViT) to inspect micro-features and classify real versus fake face constructs via simple web interfaces.",
    tech: ["Python", "CNN", "ViT", "HTML", "CSS"],
    github: "https://github.com/SARVESH3226",
    demo: "#",
    badge: "AI INTEGRITY",
    renderPreview: () => (
      <div className="w-full h-full bg-slate-950/90 relative overflow-hidden flex flex-col items-center justify-center p-4 border border-purple-500/10">
        {/* Scanner line animation */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scanline z-20 shadow-[0_0_10px_#8b5cf6]" />

        {/* Split screen Face Scanner Vector */}
        <div className="w-40 h-40 border border-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center bg-black/40">
          <div className="absolute inset-0 flex">
            {/* Left Half (Human) */}
            <div className="w-1/2 h-full border-r border-cyan-500/40 relative flex items-center justify-end overflow-hidden">
              <svg className="w-20 h-32 text-cyan-400/30" viewBox="0 0 100 120">
                <ellipse cx="90" cy="50" rx="30" ry="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="80" cy="45" r="3" fill="currentColor" />
                <path d="M 90 60 Q 80 70 90 80" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <div className="absolute bottom-2 left-2 text-[8px] font-mono text-cyan-400">REAL: 99.1%</div>
            </div>
            {/* Right Half (Synthetic Wireframe) */}
            <div className="w-1/2 h-full relative flex items-center justify-start overflow-hidden bg-purple-950/10">
              <svg className="w-20 h-32 text-purple-400" viewBox="0 0 100 120">
                {/* Wireframe grids */}
                <ellipse cx="10" cy="50" rx="30" ry="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <line x1="-20" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="20" cy="45" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="20" cy="45" r="1" fill="currentColor" />
                <path d="M 10 60 Q 20 70 10 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="absolute bottom-2 right-2 text-[8px] font-mono text-purple-400">FAKE DETECTED</div>
            </div>
          </div>
        </div>

        {/* Scan Results Label */}
        <div className="absolute top-2 left-3 font-mono text-[9px] text-purple-400">
          SCANNER_SYS // RES: <span className="text-red-400 font-bold">SYNTHESIS DETECTED</span>
        </div>
        <div className="absolute bottom-2 right-3 font-mono text-[8px] text-slate-500">
          MODEL: RESNET-50 // SIG: HIGH
        </div>
      </div>
    )
  },
  {
    title: "AI Recruitment System",
    desc: "An AI-powered recruitment platform built using Streamlit and Gemini AI for automated resume parsing, ATS scoring, candidate screening, and job-role matching. Implements PyMuPDF, NLP, and regex workflows.",
    tech: ["Python", "Streamlit", "Gemini AI", "PyMuPDF", "Regex", "NLP", "Pandas", "Scikit-learn"],
    github: "https://github.com/SARVESH3226/AI-Recruitment-System",
    demo: "#",
    badge: "AI RECRUITMENT",
    renderPreview: () => (
      <div className="w-full h-full bg-slate-950/90 relative overflow-hidden flex flex-col justify-between p-4 border border-cyan-500/10">
        {/* Title Bar */}
        <div className="flex justify-between items-center border-b border-white/5 pb-2 font-mono text-[9px] text-slate-500">
          <span>GEMINI_AI_RECRUITER // ACTIVE</span>
          <span className="text-cyan-400">SCREENING...</span>
        </div>

        {/* Parsing simulator screen */}
        <div className="flex-1 flex flex-col justify-center gap-2 font-mono text-[10px] text-left">
          {/* File item */}
          <div className="flex items-center gap-2 text-slate-400">
            <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
            <span>sarveshaa_resume.pdf</span>
          </div>

          {/* Keyword parsing progress */}
          <div className="space-y-1 mt-1">
            <div className="flex justify-between text-[8px] text-slate-500">
              <span>ATS MATCH RATE</span>
              <span className="text-cyan-400 font-bold">94%</span>
            </div>
            <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
              <div className="bg-cyan-400 h-full w-[94%]" />
            </div>
          </div>

          {/* Skills parsed list */}
          <div className="flex gap-1.5 flex-wrap mt-1">
            <span className="text-[8px] bg-purple-500/10 text-purple-300 px-1 py-0.5 rounded border border-purple-500/20">python: parsed</span>
            <span className="text-[8px] bg-cyan-500/10 text-cyan-300 px-1 py-0.5 rounded border border-cyan-500/20">gemini: active</span>
            <span className="text-[8px] bg-purple-500/10 text-purple-300 px-1 py-0.5 rounded border border-purple-500/20">ats: 94% match</span>
          </div>
        </div>

        <div className="text-[9px] font-mono text-slate-500 text-left border-t border-white/5 pt-2 flex justify-between">
          <span>MATCH: AI_ENGINEER_ROLE</span>
          <span className="text-emerald-400 flex items-center gap-0.5"><CheckCircle size={8} /> PASSED ATS</span>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-black tracking-tight text-white mb-2"
          >
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">PROJECTS</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">DEPLOYED APPLICATIONS // PRODUCTION EXPERIMENTAL SYSTEMS</p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col h-full group"
            >
              {/* Preview Window Header */}
              <div className="h-10 bg-slate-900/60 border-b border-white/5 px-4 flex items-center justify-between font-mono text-[9px] text-slate-500">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>
                <span>{project.badge}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                </span>
              </div>

              {/* Animated Mock Screenshot Header */}
              <div className="h-48 relative overflow-hidden bg-slate-950 select-none">
                {project.renderPreview()}
                
                {/* Dimming overlay that fades on hover */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-all duration-300 z-10 pointer-events-none" />
              </div>

              {/* Content Panel */}
              <div className="p-6 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h3 className="font-display font-black text-xl text-white mb-2 group-hover:text-glow-blue transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-slate-900 border border-white/5 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links footer */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-xs font-mono">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      SOURCE_CODE
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
                      onClick={(e) => {
                        if(project.demo === '#') {
                          e.preventDefault();
                          alert("Demo sandbox initialized in mock state. Source is active!");
                        }
                      }}
                    >
                      <ExternalLink size={14} />
                      LIVE_DEMO
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
