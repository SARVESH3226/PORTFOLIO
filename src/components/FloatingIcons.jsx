import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Terminal, Brain, Shield } from 'lucide-react';

const iconsData = [
  { Icon: Cpu, top: '15%', left: '8%', color: 'text-purple-500/15', size: 48, duration: 8, delay: 0 },
  { Icon: Database, top: '45%', left: '5%', color: 'text-cyan-500/15', size: 36, duration: 11, delay: 1 },
  { Icon: Code, top: '75%', left: '10%', color: 'text-purple-500/15', size: 40, duration: 9, delay: 2 },
  { Icon: Terminal, top: '25%', right: '8%', color: 'text-cyan-500/15', size: 44, duration: 10, delay: 0.5 },
  { Icon: Brain, top: '55%', right: '6%', color: 'text-purple-500/15', size: 52, duration: 12, delay: 1.5 },
  { Icon: Shield, top: '85%', right: '9%', color: 'text-cyan-500/15', size: 38, duration: 7, delay: 2.5 }
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
      {iconsData.map((item, idx) => {
        const { Icon, top, left, right, color, size, duration, delay } = item;
        return (
          <motion.div
            key={idx}
            className={`absolute ${color}`}
            style={{
              top,
              left: left || 'auto',
              right: right || 'auto',
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay,
            }}
          >
            <Icon size={size} className="filter drop-shadow-[0_0_10px_currentColor]" />
          </motion.div>
        );
      })}
    </div>
  );
}
