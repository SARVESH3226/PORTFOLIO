import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8 mt-16 font-mono text-[10px] text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <Shield size={12} className="text-cyan-400" />
          <span>SARVESHAA S // PGP_KEY: 0x4B7C9D2E VERIFIED</span>
        </div>
        
        {/* Center */}
        <div>
          © {new Date().getFullYear()} SARVESHAA S. ALL RIGHTS RESERVED.
        </div>
        
        {/* Right Side */}
        <div>
          DESIGNED FOR RECRUITERS & SECURE WEB STANDARDS
        </div>
      </div>
    </footer>
  );
}
