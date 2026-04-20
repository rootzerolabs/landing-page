import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const benefits = [
    {
      title: "Hyper-Speed",
      desc: "We don't just ship; we accelerate. Our internal frameworks allow us to deliver production-ready code in timelines that terrify the competition."
    },
    {
      title: "Cognitive AI",
      desc: "We integrate proprietary LLM workflows into every build. Our software doesn't just store data; it thinks and evolves with your operations."
    },
    {
      title: "Zero Compromise",
      desc: "Security, scalability, and technical debt aren't afterthoughts. We build for the next decade of growth, not just the next quarter."
    }
  ];

  const stats = [
    { value: "50+", label: "Elite Projects" },
    { value: "12+", label: "Geographies" },
    { value: "3×", label: "ROI Velocity" },
    { value: "∞", label: "Scalability" },
  ];

  return (
    <section id="about" className="py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 mb-20 items-start">
          <div className="lg:w-2/5">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">The Advantage</p>
            <h2 className="text-5xl md:text-6xl font-heading font-black leading-tight tracking-tight mb-8">
              Why Root Zero Labs?
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-10">
              In a world of average software, we are the exception. We build for those who refuse to settle for "good enough."
            </p>
            <a href="#contact" className="btn-ghost inline-flex">Our Methodology</a>
          </div>

          <div className="lg:w-3/5 border border-border" style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--color-border)' }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface hover:bg-background transition-colors p-10 group"
              >
                <h3 className="text-xl font-heading font-bold mb-3 text-text group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 border border-border"
          style={{ gap: '1px', backgroundColor: 'var(--color-border)' }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-surface text-center py-16 px-8 group hover:bg-background transition-colors">
              <div className="text-5xl md:text-6xl font-heading font-black text-text mb-3 group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-text-muted text-xs font-semibold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
