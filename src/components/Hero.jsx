import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-grid">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-mesh pointer-events-none opacity-40" />
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-secondary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-secondary"></span>
                </span>
                AI-First Software Solutions
              </div>

              <h1 className="text-6xl md:text-8xl font-heading font-black leading-[0.95] mb-8 tracking-tighter">
                Software That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  Accelerates
                </span> <br />
                Your Reality.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl font-light leading-relaxed">
                We build the intelligence layer between where your business is and where it needs to be. Fast, smart, and unapologetically ambitious.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <button className="btn-primary group">
                  Book a Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-ghost group">
                  <Play size={18} fill="currentColor" />
                  See Our Work
                </button>
              </div>
            </motion.div>
          </div>

          {/* Abstract Visual - The 'Vercel' Sphere */}
          <div className="lg:w-2/5 relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] rounded-full animate-pulse" />
              
              {/* Sphere Mockup */}
              <div className="absolute inset-x-8 inset-y-8 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center p-8 backdrop-blur-sm overflow-hidden">
                {/* Internal CSS Sphere Effect */}
                <div className="w-full h-full rounded-full bg-background relative overflow-hidden ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/30 via-transparent to-accent-secondary/20" />
                  <motion.div 
                    animate={{ 
                      y: [-20, 20, -20],
                      x: [-10, 10, -10]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-primary blur-[80px] rounded-full opacity-40" 
                  />
                  {/* Grid overlay within sphere */}
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  
                  {/* Floating elements */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-4 left-1/2 w-2 h-2 bg-accent-secondary rounded-full shadow-[0_0_10px_#F59E0B]" />
                    <div className="absolute bottom-4 left-1/2 w-1 h-1 bg-white rounded-full opacity-50" />
                  </motion.div>
                </div>
              </div>

              {/* Orbital Rings */}
              <div className="absolute inset-0 border border-white/5 rounded-full rotate-[30deg]" />
              <div className="absolute inset-4 border border-white/5 rounded-full -rotate-[15deg]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
