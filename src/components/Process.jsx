import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: "01", title: "Discover", desc: "Deep-dive immersion into your business goals, target user personas, and technical constraints." },
    { num: "02", title: "Strategy", desc: "Engineering a custom architectural roadmap and high-fidelity prototype that guarantees conversion." },
    { num: "03", title: "Execute", desc: "Synchronized dual-track development using modular architecture and AI-accelerated workflows." },
    { num: "04", title: "Evolve", desc: "Post-launch monitoring, technical optimization, and iterative scaling for sustained growth." },
  ];

  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-20">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">How We Work</p>
          <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-6">
            Our Battle-Tested Process
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            From architecture to deployment, we operate with surgical precision and absolute transparency.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-4 border border-border"
          style={{ gap: '1px', backgroundColor: 'var(--color-border)' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background hover:bg-accent-light transition-colors p-10 group"
            >
              <div className="text-5xl font-black text-accent/15 mb-10 group-hover:text-accent/30 transition-colors font-heading">
                {step.num}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-text group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
