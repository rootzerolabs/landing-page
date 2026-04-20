import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-text-muted text-xs font-medium mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              AI-First Software Solutions
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-black leading-[0.92] mb-8 tracking-tight">
              Software That <br />
              <span className="text-accent">Accelerates</span> <br />
              Your Reality.
            </h1>

            <p className="text-lg md:text-xl text-text-muted mb-14 max-w-lg leading-relaxed">
              We build the intelligence layer between where your business is and where it needs to be. Fast, smart, and unapologetically ambitious.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#contact" className="btn-primary group">
                Book a Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#services" className="btn-ghost">
                See Our Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-10 border-t border-border flex flex-wrap gap-x-16 gap-y-6"
        >
          {[
            { value: "50+", label: "Projects shipped" },
            { value: "12+", label: "Countries served" },
            { value: "3×", label: "Average ROI" },
            { value: "24h", label: "Response time" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-heading font-black text-text mb-1">{stat.value}</div>
              <div className="text-xs text-text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
