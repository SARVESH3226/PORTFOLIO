import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    bot_honeypot: '' // Spam Protection Honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Honeypot check for bots
    if (formData.bot_honeypot) {
      console.warn("Spam bot detected via honeypot field.");
      setStatus('success');
      return;
    }

    // 2. Validate fields
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    // Retrieve EmailJS keys from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Graceful fallback for mock demo
      console.info("EmailJS is not configured. Simulating mock submit sequence...");
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('System mock submission successful! Configure your .env variables to connect EmailJS.');
        
        // Trigger confetti explosion
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#a78bfa', '#22d3ee', '#3b82f6']
        });
        
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '', bot_honeypot: '' });
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus('success');
      setStatusMessage('Message transmitted successfully! SARVESHAA S will get back to you shortly.');
      
      // Celebrate!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#a78bfa', '#22d3ee', '#3b82f6']
      });

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '', bot_honeypot: '' });
    } catch (err) {
      console.error("EmailJS transmission failed:", err);
      setStatus('error');
      setStatusMessage('Transmission failed. Please copy email directly or check connection settings.');
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Large CTA Title Banner */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-none"
          >
            LET'S BUILD <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400">
              SOMETHING AMAZING
            </span> <br />
            TOGETHER
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">CONTACT ME</p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: Info & Meta (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-6 flex-1 flex flex-col justify-center">
              <h3 className="font-display font-black text-xl text-white flex items-center gap-2 mb-2">
                <ShieldAlert className="text-cyan-400" size={20} />
                CONTACT METRIC
              </h3>
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">SECURE EMAIL</span>
                  <a href="mailto:sarvesh3226@gmail.com" className="text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors">
                    sarvesh3226@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">SECURE TELEPHONE</span>
                  <a href="tel:+917639700113" className="text-sm font-mono text-slate-300 hover:text-purple-400 transition-colors">
                    +91 76397 00113
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">LINKEDIN NETWORK</span>
                  <a 
                    href="https://www.linkedin.com/in/s-sarveshaa-a13624287/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    linkedin.com/in/s-sarveshaa-a13624287/
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                  <Github size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block">GITHUB ARCHIVE</span>
                  <a 
                    href="https://github.com/SARVESH3226" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    github.com/SARVESH3226
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Active Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 text-left h-full flex flex-col justify-between"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Honeypot Spam Protection (Hidden to real users, filled by bots) */}
                <input
                  type="text"
                  name="bot_honeypot"
                  value={formData.bot_honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 block">NAME // CALLSIGN</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-white/10 focus:border-purple-500 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 font-sans transition-all"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 block">EMAIL // PORT</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 font-mono transition-all"
                    placeholder="name@domain.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 block">SUBJECT // MODULE</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-white/10 focus:border-purple-500 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 font-sans transition-all"
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 block">MESSAGE // DATA</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans transition-all resize-none"
                    placeholder="Write your packet message here..."
                  />
                  {errors.message && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertTriangle size={10} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-slate-800 disabled:to-slate-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 border border-purple-400/20 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      TRANSMIT_MESSAGE
                    </>
                  )}
                </button>
              </form>

              {/* Status messages popup modal/display */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg flex items-start gap-2.5 text-xs"
                  >
                    <CheckCircle size={16} className="shrink-0 mt-0.5" />
                    <div>{statusMessage || 'Transmitted successfully!'}</div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg flex items-start gap-2.5 text-xs"
                  >
                    <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                    <div>{statusMessage}</div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
