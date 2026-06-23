import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const logs = [
  "SYSTEM BOOT: v3.12.0-core",
  "ESTABLISHING SECURE SSH TUNNEL...",
  "STATUS: CONNECTING TO HOST 127.0.0.1",
  "DECRYPTING PORTFOLIO DATABASE...",
  "RESOLVING ASSETS: AI, MACHINE LEARNING, VISION",
  "VERIFYING INTEGRITY CHECK: SHA-256 MATCHED",
  "ACCESS GRANTED: WELCOME SARVESHAA S"
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    // Progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoadingFinished(true);
            setTimeout(onComplete, 500); // Allow fade out animation to finish
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Sync logs printing with progress
    const logInterval = setInterval(() => {
      if (logIndex < logs.length) {
        setVisibleLogs((prev) => [...prev, logs[logIndex]]);
        setLogIndex((prev) => prev + 1);
      } else {
        clearInterval(logInterval);
      }
    }, 300);

    return () => clearInterval(logInterval);
  }, [logIndex]);

  return (
    <AnimatePresence>
      {!loadingFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-50 flex flex-col justify-between p-6 md:p-12 font-mono text-sm md:text-base border-4 border-slate-900 select-none cyber-scanner"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-purple-500 border-b border-purple-500/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
              <span className="font-bold tracking-widest text-glow-purple">PORTFL_CORE.SYS</span>
            </div>
            <div>STATUS: INITIALIZING...</div>
          </div>

          {/* Terminal Console Logs */}
          <div className="flex-1 my-8 flex flex-col gap-2 overflow-y-auto max-h-[60vh] text-left">
            {visibleLogs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${
                  idx === logs.length - 1 
                    ? 'text-cyan-400 text-glow-blue font-bold mt-2' 
                    : 'text-slate-400'
                }`}
              >
                <span className="text-purple-500 mr-2">&gt;</span>
                {log}
              </motion.div>
            ))}
            <span className="w-2 h-4 bg-slate-400 inline-block animate-pulse" />
          </div>

          {/* Progress Bar & Footer */}
          <div className="flex flex-col gap-4 border-t border-purple-500/20 pt-6">
            <div className="flex justify-between items-center text-xs md:text-sm text-cyan-400">
              <span className="tracking-wider">DECRYPTION STAGE</span>
              <span className="font-bold font-mono">{Math.min(progress, 100)}%</span>
            </div>
            <div className="w-full bg-slate-950 border border-slate-800 rounded-full h-3 overflow-hidden p-0.5 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
              <motion.div 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                layout
              />
            </div>
            <div className="flex justify-between items-center text-[10px] md:text-xs text-slate-500 font-mono mt-2">
              <span>SECURE ACCESS ONLY</span>
              <span>© {new Date().getFullYear()} SARVESHAA S</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
