import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Database, Brain, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: Terminal,
    skills: ["C", "Python", "Java"],
    glow: "rgba(139, 92, 246, 0.15)", // Purple
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    title: "Web Technologies",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript (Basic)", "React (Pursuing)"],
    glow: "rgba(6, 182, 212, 0.15)", // Cyan
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL (Basic)"],
    glow: "rgba(139, 92, 246, 0.15)",
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    title: "Tools & Libraries",
    icon: Settings,
    skills: ["VS Code", "Git", "OpenCV", "MediaPipe"],
    glow: "rgba(6, 182, 212, 0.15)",
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: ["Machine Learning", "Computer Vision", "NLP (Basics)", "UI/UX Design"],
    glow: "rgba(139, 92, 246, 0.15)",
    borderGlow: "group-hover:border-purple-500/50"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black">
      {/* Accent Background Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-black tracking-tight text-white mb-2"
          >
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">SKILLS</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">MODULAR TAXONOMY // CORE FRAMEWORKS & PROGRAMMING LANGUAGES</p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-card p-6 border border-white/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing spots */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 10%, ${cat.glow} 0%, transparent 60%)`
                  }}
                />
                
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-slate-700 transition-colors">
                        <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-glow-blue transition-all">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[9px] text-slate-500 group-hover:text-slate-400">
                      SEC_ID_0{idx + 1}
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-950/80 hover:bg-slate-900 border border-white/5 hover:border-slate-800 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-md font-mono text-xs cursor-default flex items-center gap-1.5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100" />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Cyber accent line bottom */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500">
                  <span>STATUS: ACTIVATED</span>
                  <span>INTEGRITY: 100%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
