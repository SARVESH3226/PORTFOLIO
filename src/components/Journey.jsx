import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Layers, Database, Laptop, Brain, Eye, Cpu } from 'lucide-react';

const steps = [
  {
    title: "C Programming",
    icon: Code,
    desc: "Learned variables, loops, custom function syntax, pointer manipulation, structure declarations, and static allocations.",
    tech: ["Pointers", "Memory Management", "Algorithms", "Control Flow"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Java Programming",
    icon: Laptop,
    desc: "Mastered Object-Oriented principles, multi-threading models, collection libraries, exception hierarchies, and interfaces.",
    tech: ["OOPs", "Collections API", "Multi-threading", "JDK/JVM"],
    color: "from-indigo-500 to-cyan-500"
  },
  {
    title: "Data Structures & Algorithms",
    icon: Layers,
    desc: "Implemented complex data representations: linked lists, binary heaps, search trees, recursion, sorting, and big-O analysis.",
    tech: ["Trees & Graphs", "Dynamic Programming", "Time Complexity", "Search/Sort"],
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: "SQL & Database Management",
    icon: Database,
    desc: "Designed entity schemas, relations, triggers, complex joins, indexing strategies, normalization forms, and storage optimization.",
    tech: ["MySQL", "Schema Design", "Queries", "Indexing"],
    color: "from-teal-500 to-purple-500"
  },
  {
    title: "Full Stack Development",
    icon: Code,
    desc: "Built modern, secure clients using React combined with high-throughput backend services using Node.js, Express, and APIs.",
    tech: ["React.js", "Node.js", "Express", "REST APIs"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Machine Learning",
    icon: Brain,
    desc: "Trained predictive regression models, classification splits, support vectors, neural structures, and processed dense datasets.",
    tech: ["Supervised ML", "Scikit-Learn", "Model Training", "Data Cleaning"],
    color: "from-pink-500 to-blue-500"
  },
  {
    title: "Computer Vision",
    icon: Eye,
    desc: "Worked on image transforms, edge filters, shape tracking, threshold splits, contour models, and video processing loops.",
    tech: ["OpenCV", "Python", "Image Processing", "Feature Extraction"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Applications",
    icon: Cpu,
    desc: "Synthesized NLP pipelines, deep neural architectures, and custom integrations to deliver end-to-end intelligent systems.",
    tech: ["NLP", "Transformers", "Neural Networks", "API Deployments"],
    color: "from-cyan-500 to-purple-500"
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative bg-black">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            LEARNING <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">JOURNEY</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">ACQUISITION OF CORE DOMAINS // SYSTEM ARCHITECTURE HISTORY</p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central Vertical Line (hidden on small mobile screens to keep it simple) */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 transform -translate-x-1/2 opacity-20 hidden md:block" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch justify-center md:gap-8">
                  {/* Left Side spacer/content */}
                  <div className={`flex-1 flex justify-end text-right hidden md:flex ${isEven ? 'order-1' : 'order-3'}`}>
                    {isEven && (
                      <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-2xl p-6 w-full max-w-[450px] border-r-2 border-r-purple-500"
                      >
                        <span className="font-mono text-xs text-purple-400 font-semibold mb-1 block">STAGE 0{idx + 1}</span>
                        <h3 className="font-display font-bold text-lg text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{step.desc}</p>
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {step.tech.map((t, tIdx) => (
                            <span key={tIdx} className="bg-slate-900 border border-white/5 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Bullet Center Indicator */}
                  <div className="absolute left-4 md:relative md:left-auto md:translate-x-0 order-2 flex items-center justify-center shrink-0 w-8 h-8 z-10">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className={`w-8 h-8 rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:border-purple-500 hover:text-purple-400 cursor-help shadow-[0_0_10px_rgba(6,182,212,0.3)]`}
                    >
                      <IconComponent size={14} />
                    </motion.div>
                  </div>

                  {/* Right Side spacer/content */}
                  <div className={`flex-1 flex justify-start text-left md:pl-0 pl-12 ${!isEven ? 'order-1 md:order-3' : 'order-3 md:order-1'}`}>
                    {(!isEven || window.innerWidth < 768) && (
                      <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-2xl p-6 w-full max-w-[450px] border-l-2 border-l-cyan-400"
                      >
                        <span className="font-mono text-xs text-cyan-400 font-semibold mb-1 block">STAGE 0{idx + 1}</span>
                        <h3 className="font-display font-bold text-lg text-white mb-3">{step.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{step.desc}</p>
                        <div className="flex flex-wrap gap-1.5 justify-start">
                          {step.tech.map((t, tIdx) => (
                            <span key={tIdx} className="bg-slate-900 border border-white/5 text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
