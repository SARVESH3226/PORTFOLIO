import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Terminal, Code2 } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-24 relative bg-black">
      {/* Background Dots Grid */}
      <div className="absolute inset-0 cyber-dot-bg opacity-30 pointer-events-none" />

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
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">SARVESHAA S</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Professional Introduction Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 glass-card rounded-2xl p-8 flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-purple-400" />
                <h3 className="font-display font-bold text-xl text-white">OBJECTIVE_SUMMARY.LOG</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 font-sans text-base">
                Hello! I am a Computer Science Engineering student with hands-on experience in Artificial Intelligence, Machine Learning, Computer Vision, and Web Development. My development mindset is focused on combining predictive models with responsive client structures.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans text-base">
                I develop real-time intelligent applications using Python, OpenCV, MediaPipe, CNN, and Vision Transformers. I am passionate about solving real-world problems through innovative technology and continuously learning emerging technologies.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-6 font-mono text-xs text-slate-400">
              <div>
                <span className="text-purple-400">ROLE:</span> CSE Student
              </div>
              <div>
                <span className="text-cyan-400">LOC:</span> Cuddalore, TN
              </div>
              <div>
                <span className="text-purple-400">VERIFY:</span> Active
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 glass-card rounded-2xl p-8 flex flex-col justify-center border-l-2 border-l-cyan-400 text-left relative overflow-hidden"
          >
            {/* Background overlay accent */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-cyan-400 animate-pulse" />
              <h3 className="font-display font-bold text-xl text-white">MISSION STATEMENT</h3>
            </div>
            <p className="font-display font-medium text-lg text-slate-200 leading-relaxed italic border-l border-cyan-400/20 pl-4 mb-4">
              "To engineer intelligent, secure, and resilient systems that resolve real-world computational complexities and deliver elegant, world-class user experiences."
            </p>
            <p className="text-sm font-mono text-slate-400">
              Striving to build solutions that remain highly scalable, performant under peak loads, and protected against potential exploit vectors.
            </p>
          </motion.div>

          {/* Staggered Passions / Focus Grid */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 glass-card rounded-2xl p-6 text-left"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Brain size={24} />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Artificial Intelligence & ML</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Designing deep neural models, implementing computer vision systems using OpenCV, and building predictive engines that reveal hidden data insights.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 glass-card rounded-2xl p-6 text-left"
          >
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Code2 size={24} />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Full Stack Architectures</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Creating responsive React frontend layers and secure backend systems with Node/Express to enable modular, reactive data processing.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 glass-card rounded-2xl p-6 text-left"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Shield size={24} />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Algorithmic Problem Solving</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Applying advanced data structures and algorithm patterns to solve complex problems with high memory/CPU efficiency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
