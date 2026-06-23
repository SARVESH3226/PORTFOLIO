import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckSquare, Wrench } from 'lucide-react';

const internships = [
  {
    company: "Gateway Software Solutions",
    role: "AI & Generative AI Intern",
    duration: "2025",
    responsibilities: [
      "Worked on Generative AI and LLM-based applications.",
      "Developed prototype solutions using AI tools."
    ],
    tech: ["Generative AI", "LLMs", "AI Tools", "Python"],
    color: "border-l-purple-500"
  },
  {
    company: "CodSoft",
    role: "Web Development Intern",
    duration: "2025",
    responsibilities: [
      "Built responsive web pages using HTML, CSS, JavaScript.",
      "Improved UI design and debugging skills."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI Debugging"],
    color: "border-l-cyan-500"
  }
];

export default function Internship() {
  return (
    <section id="internship" className="py-24 relative bg-black">
      {/* Background Dots */}
      <div className="absolute inset-0 cyber-dot-bg opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-black tracking-tight text-white mb-2"
          >
            INTERNSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">EXPERIENCE</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">CHRONOLOGICAL FIELD PLACEMENTS // APPLIED TECHNICAL SKILLS</p>
        </div>

        {/* Internships List */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className={`glass-card rounded-2xl p-6 md:p-8 border-l-4 ${intern.color} text-left relative overflow-hidden group`}
            >
              {/* Background Accent Hover Spot */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
                <div>
                  <h3 className="font-display font-black text-xl text-white group-hover:text-glow-blue transition-all">
                    {intern.company}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-cyan-400 font-mono text-sm">
                    <Briefcase size={14} />
                    <span>{intern.role}</span>
                  </div>
                </div>
                
                {/* Date display */}
                <div className="flex items-center gap-2 bg-slate-900 border border-white/5 px-3.5 py-1.5 rounded-lg font-mono text-xs text-slate-400 w-fit shrink-0">
                  <Calendar size={12} className="text-purple-400" />
                  <span>{intern.duration}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-6">
                <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <CheckSquare size={12} /> Key Contributions
                </h4>
                <ul className="space-y-2 text-sm text-slate-300 list-none font-sans">
                  {intern.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-purple-500 font-mono mt-0.5">&gt;</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-white/5">
                <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mb-3">
                  <Wrench size={12} /> Tech Stack Leveraged
                </h4>
                <div className="flex flex-wrap gap-2">
                  {intern.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-slate-950 border border-white/5 text-slate-300 text-xs font-mono px-3 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
