import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Deep-dive immersion into your business goals, target user personas, and technical constraints."
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Engineering a custom architectural roadmap and high-fidelity prototype that guarantees conversion."
    },
    {
      num: "03",
      title: "Execute",
      desc: "Synchronized dual-track development using modular architecture and AI-accelerated workflows."
    },
    {
      num: "04",
      title: "Evolve",
      desc: "Post-launch hyper-monitoring, technical optimization, and iterative scaling for market dominance."
    }
  ];

  return (
    <section className="py-24 bg-background border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-20">
          <div className="h-1 w-20 bg-accent-primary mb-6" />
          <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 tracking-tighter">
            Our <span className="text-accent-primary">Battle-Tested</span> <br />
            Process
          </h2>
          <p className="text-xl text-white/40 leading-relaxed">
            From architecture to deployment, we operate with surgical precision and absolute transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all overflow-hidden"
            >
              {/* Highlight background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity" />
              
              <div className="text-xs font-black text-accent-primary mb-12 tracking-widest uppercase">
                Phase {step.num}
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-accent-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.desc}
              </p>
              
              {/* Massive back-number */}
              <div className="absolute -bottom-8 -right-4 text-9xl font-heading font-black text-white/[0.02] select-none group-hover:text-white/[0.04] transition-all">
                {step.num}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
