import React from 'react';
import { FastForward, Brain, Users, TrendingUp, Globe, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const benefits = [
    {
      icon: <FastForward size={28} className="text-white" />,
      title: "Hyper-Speed",
      desc: "We don't just ship; we accelerate. Our internal frameworks allow us to deliver production-ready code in timelines that terrify the competition."
    },
    {
      icon: <Brain size={28} className="text-white" />,
      title: "Cognitive AI",
      desc: "We integrate proprietary LLM workflows into every build. Our software doesn't just store data; it thinks and evolves with your operations."
    },
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      title: "Zero Compromise",
      desc: "Security, scalability, and technical debt aren't afterthoughts. We build for the next decade of growth, not just the next quarter."
    }
  ];

  const stats = [
    { value: "50+", label: "Elite Projects" },
    { value: "12+", label: "Geographies" },
    { value: "3x", label: "ROI Velocity" },
    { value: "∞", label: "Scalability" }
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Why Us */}
        <div className="flex flex-col lg:flex-row gap-24 mb-40 items-start">
          <div className="lg:w-2/5">
            <div className="p-3 w-fit rounded-xl bg-accent-secondary/10 text-accent-secondary text-xs font-black uppercase tracking-[0.3em] mb-8">
              The Advantage
            </div>
            <h2 className="text-5xl md:text-8xl font-heading font-black leading-[0.85] tracking-tighter mb-10 uppercase italic">
              Why <br />
              <span className="text-accent-primary">Root Zero</span> <br />
              Labs?
            </h2>
            <p className="text-xl text-white/40 leading-relaxed font-light mb-12">
              In a world of average software, we are the exception. We build for those who refuse to settle for "good enough."
            </p>
            <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-all">
              Our Methodology
            </button>
          </div>
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-1 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-accent-primary group-hover:bg-accent-secondary transition-colors duration-500 shadow-xl shadow-accent-primary/20">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-black mb-4 tracking-tight">{benefit.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed group-hover:text-white/60 transition-colors">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-y border-white/[0.05] relative bg-white/[0.01]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <motion.div
                whileInView={{ scale: [0.9, 1.1, 1] }}
                className="text-6xl md:text-8xl font-heading font-black text-white mb-4 tracking-tighter group-hover:text-accent-primary transition-colors duration-500"
              >
                {stat.value}
              </motion.div>
              <div className="text-white/20 text-xs font-black uppercase tracking-[0.4em]">
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
