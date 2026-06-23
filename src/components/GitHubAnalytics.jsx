import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Flame, Code2, GitFork, Star, Eye } from 'lucide-react';

// Generates a mock grid of 7 rows x 24 columns of GitHub contributions
const generateContributionData = () => {
  const data = [];
  const levels = [0, 1, 2, 3, 4];
  for (let r = 0; r < 7; r++) {
    const row = [];
    for (let c = 0; c < 24; c++) {
      // Create a nice distribution: center columns have more contributions
      const factor = (12 - Math.abs(12 - c)) / 12;
      const rand = Math.random();
      let level = 0;
      if (rand < 0.3) level = 0;
      else if (rand < 0.6) level = Math.floor(levels.length * 0.4 * factor) + 1;
      else level = Math.min(Math.floor(levels.length * factor) + 1, 4);

      row.push(level);
    }
    data.push(row);
  }
  return data;
};

const contributionData = generateContributionData();

// Color maps for github contributions: dark emerald colors
const contributionColors = {
  0: "bg-neutral-900 border-neutral-950",
  1: "bg-emerald-950/60 border-emerald-950/80 shadow-[0_0_2px_rgba(16,185,129,0.1)]",
  2: "bg-emerald-800/80 border-emerald-800 shadow-[0_0_4px_rgba(16,185,129,0.2)]",
  3: "bg-emerald-600 border-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
  4: "bg-emerald-400 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]"
};

const langStats = [
  { name: "Python", pct: 40, color: "bg-cyan-500", text: "text-cyan-400" },
  { name: "TypeScript", pct: 40, color: "bg-purple-500", text: "text-purple-400" },
  { name: "JavaScript", pct: 20, color: "bg-indigo-500", text: "text-indigo-400" }
];

export default function GitHubAnalytics() {
  const [hoveredCell, setHoveredCell] = useState(null);

  return (
    <section id="analytics" className="py-24 relative bg-black">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            GITHUB <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">ANALYTICS</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm font-mono mt-4">CONTRIBUTIONS RECON // DEV COMMIT telemetry SYSTEM</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Stats Cards & Languages (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Stat Counters */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] text-slate-500">SYS: COMMIT_COUNT</span>
                  <GitCommit size={14} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-display font-black text-3xl text-white mb-0.5">1,248+</h3>
                  <span className="font-mono text-[10px] text-slate-400">TOTAL COMMITS</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] text-slate-500">SYS: ACTIVE_STREAK</span>
                  <Flame size={14} className="text-orange-500 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-black text-3xl text-white mb-0.5">48 Days</h3>
                  <span className="font-mono text-[10px] text-slate-400">CURRENT STREAK</span>
                </div>
              </motion.div>
            </div>

            {/* Language Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-left"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-base text-white">LANGUAGE TELEMETRY</h3>
                <Code2 size={16} className="text-cyan-400" />
              </div>

              <div className="space-y-4">
                {langStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1.5 font-mono">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-semibold">{stat.name}</span>
                      <span className={stat.text}>{stat.pct}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className={`${stat.color} h-full rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right panel: Contribution Calendar Grid Mock (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Grid display container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 text-left flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-display font-bold text-base text-white">CONTRIBUTIONS HEATMAP</h3>
                    <span className="font-mono text-[9px] text-slate-500 uppercase">Interactive simulation of dev updates</span>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex items-center gap-1 font-mono text-[9px] text-slate-500">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 rounded bg-neutral-900 border border-neutral-950" />
                    <span className="w-2.5 h-2.5 rounded bg-emerald-950" />
                    <span className="w-2.5 h-2.5 rounded bg-emerald-800" />
                    <span className="w-2.5 h-2.5 rounded bg-emerald-600" />
                    <span className="w-2.5 h-2.5 rounded bg-emerald-400" />
                    <span>More</span>
                  </div>
                </div>

                {/* Heatmap Blocks Grid */}
                <div className="overflow-x-auto pb-4">
                  <div className="flex flex-col gap-1.5 min-w-[320px]">
                    {contributionData.map((row, rIdx) => (
                      <div key={rIdx} className="flex gap-1.5">
                        {row.map((level, cIdx) => {
                          const levelColor = contributionColors[level];
                          return (
                            <motion.div
                              key={cIdx}
                              onMouseEnter={() => setHoveredCell({ row: rIdx, col: cIdx, level })}
                              onMouseLeave={() => setHoveredCell(null)}
                              whileHover={{ scale: 1.25 }}
                              className={`w-3 h-3 rounded-sm border shrink-0 transition-colors cursor-crosshair ${levelColor}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status display / Interactive prompt */}
              <div className="h-10 border-t border-white/5 pt-4 mt-6 flex justify-between items-center font-mono text-[10px] text-slate-400">
                {hoveredCell ? (
                  <span>
                    CELL[{hoveredCell.row},{hoveredCell.col}]:{' '}
                    <span className="text-cyan-400">
                      {hoveredCell.level === 0 ? 'No' : hoveredCell.level * 3 + Math.floor(Math.random()*2)} updates
                    </span>
                  </span>
                ) : (
                  <span>HOVER BLOCKS TO EXTRACT CELL DATA</span>
                )}
                
                <span className="text-purple-400 flex items-center gap-1">
                  <Star size={10} className="animate-spin" />
                  STREAK_STABLE: 126D max
                </span>
              </div>
            </motion.div>

            {/* Extra repository stats mock */}
            <div className="grid grid-cols-3 gap-4 font-mono text-center">
              <div className="glass-card rounded-lg py-3">
                <span className="text-[10px] text-slate-500 block">REPOS</span>
                <span className="text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                  <GitFork size={12} className="text-cyan-400" /> 5
                </span>
              </div>
              <div className="glass-card rounded-lg py-3">
                <span className="text-[10px] text-slate-500 block">STARS</span>
                <span className="text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                  <Star size={12} className="text-purple-400" /> 45
                </span>
              </div>
              <div className="glass-card rounded-lg py-3">
                <span className="text-[10px] text-slate-500 block">WATCHING</span>
                <span className="text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                  <Eye size={12} className="text-cyan-400" /> 12
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
