import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Calendar, BookOpen } from 'lucide-react';

const coursework = [
  "Object Oriented Programming",
  "Design & Analysis of Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Networks",
  "Software Engineering"
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-5xl font-black tracking-tight text-white mb-2"
          >
            ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">EDUCATION</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">ACADEMIC CREDENTIALS // FORMAL COMPUTER SCIENCE TRAINING</p>
        </div>

        {/* Education Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 md:p-10 border border-white/5 text-left relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
        >
          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* College and Degree Core */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 group-hover:text-purple-400 group-hover:bg-purple-500/15 transition-all duration-300">
                <GraduationCap size={32} />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider block mb-1">DEGREE OF STUDY</span>
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  Bachelor of Engineering
                </h3>
                <h4 className="text-lg font-mono text-cyan-400 font-medium">
                  Computer Science and Engineering
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-3 font-mono text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-2 bg-slate-900 border border-white/5 px-3.5 py-1.5 rounded-lg w-full">
                <Landmark size={14} className="text-purple-400" />
                <span>Dr. N.G.P Institute of Technology, Coimbatore</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-white/5 px-3.5 py-1.5 rounded-lg w-full">
                <Calendar size={14} className="text-cyan-400" />
                <span>Expected: June 2027 | CGPA: 8.13</span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework Tag Matrix */}
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-4">
              <BookOpen size={14} /> Core Academic Syllabus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-white/5 hover:border-slate-800 text-slate-300 px-3 py-2 rounded-lg font-mono text-xs text-center flex items-center justify-center transition-all duration-200"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
