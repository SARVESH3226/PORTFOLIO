import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Award } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const profiles = [
  {
    name: "LeetCode",
    username: "sarv_esh",
    desc: "Solved 236 algorithmic challenges (177 Easy, 51 Medium, 8 Hard) with 246 submissions in the past year, achieving a global profile ranking of 650,480.",
    icon: Code2,
    link: "https://leetcode.com/u/sarv_esh/",
    tag: "236 SOLVED",
    color: "group-hover:border-yellow-500/30 group-hover:text-yellow-400"
  },
  {
    name: "GitHub",
    username: "SARVESH3226",
    desc: "Publishing computer vision workflows, full stack web apps, NLP screens, and deep learning algorithms code bases.",
    icon: Github,
    link: "https://github.com/SARVESH3226",
    tag: "18 REPOS",
    color: "group-hover:border-slate-500/30 group-hover:text-white"
  },
  {
    name: "LinkedIn",
    username: "SARVESHAA S",
    desc: "Connecting with industry peers, sharing technical updates, and seeking full stack / AI engineering openings.",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/s-sarveshaa-a13624287/",
    tag: "CONNECT",
    color: "group-hover:border-blue-500/30 group-hover:text-blue-400"
  }
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-16 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-12 flex justify-between items-end border-b border-white/5 pb-4">
          <div>
            <h3 className="font-display font-black text-xl text-white">CODING PROFILES</h3>
            <span className="font-mono text-[9px] text-slate-500 uppercase">External developer hubs // Verification endpoints</span>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6">
          {profiles.map((prof, idx) => {
            const Icon = prof.icon;

            return (
              <motion.a
                key={idx}
                href={prof.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card rounded-xl p-5 border border-white/5 text-left flex flex-col justify-between h-48 transition-all duration-300 group"
              >
                <div>
                  {/* Top line header */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[8px] text-slate-500 uppercase">SYS_HUB_NODE0{idx + 1}</span>
                    <span className={`font-mono text-[9px] border border-white/10 px-2 py-0.5 rounded text-slate-400 ${prof.color}`}>
                      {prof.tag}
                    </span>
                  </div>

                  {/* Body Title */}
                  <h4 className="font-display font-black text-lg text-white group-hover:text-glow-blue transition-all flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {prof.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 block mb-3">@{prof.username}</span>

                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    {prof.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="font-mono text-[9px] text-slate-500 text-right group-hover:text-cyan-400 transition-colors">
                  RESOLVE_LINK &gt;&gt;
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
