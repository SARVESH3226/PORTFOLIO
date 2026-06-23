import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Cloud, Cpu, Globe } from 'lucide-react';

const certificates = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    desc: "Comprehensive certification verifying foundations in generative modeling paradigms, prompt design constraints, and AI alignment methodologies.",
    icon: ShieldCheck,
    tag: "ANTHROPIC CORE",
    date: "2026",
    status: "Verified Completion"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    desc: "Rigorous academic certification covering virtualization structures, containers, cloud architecture tiers, and scalable systems.",
    icon: Cloud,
    tag: "NPTEL ELITE",
    date: "2025",
    status: "Elite Certification"
  },
  {
    title: "Introduction to IOT",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    desc: "Systems level study of sensor networking, microcontrollers, connection layers, MQTT protocols, and security audits.",
    icon: Cpu,
    tag: "NPTEL ELITE",
    date: "2025",
    status: "Elite Certification"
  },
  {
    title: "Basic of C, C++, Python",
    issuer: "CSC (Computer Software College)",
    desc: "Foundational programming certification establishing core knowledge in control loops, object representations, functions, and memory structures.",
    icon: Award,
    tag: "TECHNICAL CORE",
    date: "2024",
    status: "CSC Certified"
  },
  {
    title: "ICT Learnathon",
    issuer: "ICT Academy",
    desc: "Intensive multi-day technical hack-sprint focused on fast software synthesis, full-stack modules integration, and cloud service deployments.",
    icon: Award,
    tag: "LEARNATHON",
    date: "2023-2024",
    status: "Active Badge"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-black">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            CERTIFICATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">WALL</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">VERIFIED PROFESSIONAL ACQUISITIONS // ACADEMIC & TECHNICAL CERTIFICATIONS</p>
        </div>

        {/* Certificate Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, idx) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Neon metallic outline glow */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity" />

                {/* Card Body */}
                <div className="w-full">
                  <div className="flex justify-between items-start w-full mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-display font-black text-lg text-white group-hover:text-glow-blue transition-all">
                          {cert.title}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                    
                    {/* Tag badge */}
                    <span className="font-mono text-[9px] bg-slate-900 border border-white/5 text-slate-400 px-2 py-0.5 rounded">
                      {cert.tag}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                    {cert.desc}
                  </p>
                </div>

                {/* Card Footer info */}
                <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-slate-500 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    {cert.status}
                  </span>
                  <span className="text-slate-400 font-bold">{cert.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
