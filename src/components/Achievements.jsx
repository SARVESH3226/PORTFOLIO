import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Users, ShieldAlert } from 'lucide-react';

const achievementsList = [
  {
    title: "CodeZap 2026 Hackathon",
    subtitle: "Descience Open Source Club",
    desc: "Explored Generative AI prompting methodologies and Vibe Coding workflows to design and build an Expense Tracker application featuring adding, tracking, viewing list filters, and deleting entries using Agile teamwork.",
    icon: Trophy,
    stat: "Hackathon 2026",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "LeetCode Challenges",
    subtitle: "Algorithm Solver",
    desc: "Solved 236 algorithmic challenges (177 Easy, 51 Medium, 8 Hard) with 246 submissions in the past year, achieving a global profile ranking of 650,480.",
    icon: Target,
    stat: "236 Solved",
    color: "from-cyan-500 to-teal-500"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-black">
      {/* Background Dots */}
      <div className="absolute inset-0 cyber-dot-bg opacity-20 pointer-events-none" />

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
            SYSTEMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">ACHIEVEMENTS</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">VERIFIED SUCCESS RECORDS // COMPETITIONS & HACKATHONS</p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {achievementsList.map((ach, idx) => {
            const Icon = ach.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300"
              >
                {/* Visual Gradient Glow behind Icon */}
                <div className={`absolute -top-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-br ${ach.color} opacity-10 group-hover:opacity-20 blur-xl transition-opacity pointer-events-none`} />

                <div>
                  {/* Icon and stat */}
                  <div className="flex justify-between items-start w-full mb-6">
                    <div className="p-2.5 bg-slate-900 rounded-xl border border-white/5 text-slate-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-cyan-400 font-bold bg-cyan-500/5 border border-cyan-500/20 px-2 py-0.5 rounded">
                      {ach.stat}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg text-white mb-1 group-hover:text-glow-blue transition-all">
                    {ach.title}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-500 block mb-4 uppercase tracking-wider">
                    {ach.subtitle}
                  </span>
                  
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {ach.desc}
                  </p>
                </div>

                {/* Footer line */}
                <div className="mt-8 pt-4 border-t border-white/5 w-full flex items-center justify-between font-mono text-[9px] text-slate-500">
                  <span>LOG: SUCCESS</span>
                  <span>SYS: VALID</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
