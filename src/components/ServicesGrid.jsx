import React from 'react';
import { 
  Globe, Laptop, MessageSquare, Zap, Mic, Users, 
  ShoppingCart, Share2, Rocket, BarChart, Search, Palette 
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe size={24} />,
    title: "Web & Enterprise",
    desc: "Architecting high-concurrency platforms and SEO-native ecosystems built for rapid scaling."
  },
  {
    icon: <Laptop size={24} />,
    title: "Native Mobile",
    desc: "Uncompromising iOS & Android performance via React Native, focused on fluid UX."
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Custom LLMs",
    desc: "Tailored AI models and conversational engines that actually understand your business."
  },
  {
    icon: <Zap size={24} />,
    title: "Autonomous Agents",
    desc: "Self-correcting AI workflows that automate the operational complexity of your business."
  },
  {
    icon: <Mic size={24} />,
    title: "AI Voice Ops",
    desc: "Next-gen voice assistants for customer support that pass the Turing test."
  },
  {
    icon: <Users size={24} />,
    title: "Intelligent ERP",
    desc: "CRM and operational software that predicts bottlenecks before they happen."
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "Scalable E-com",
    desc: "Global storefronts with sub-second page loads and predictive inventory AI."
  },
  {
    icon: <Share2 size={24} />,
    title: "API Ecosystems",
    desc: "Building robust, developer-first APIs that bridge your data to the world."
  },
  {
    icon: <Rocket size={24} />,
    title: "SaaS Foundry",
    desc: "End-to-end engineering for SaaS startups looking to ship MVP to Scale in record time."
  },
  {
    icon: <BarChart size={24} />,
    title: "BI Dashboards",
    desc: "Real-time visualization layers that turn raw data into strategic execution."
  },
  {
    icon: <Search size={24} />,
    title: "Growth Engineering",
    desc: "Data-driven SEO and conversion optimization that drives measurable ROI."
  },
  {
    icon: <Palette size={24} />,
    title: "Product Design",
    desc: "Creating design systems that are as scalable as the code behind them."
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-32 bg-background relative">
      {/* Background glow behind grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent-primary/10 blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-primary font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Our Capabilities
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter">
            Everything You Need <br /> To <span className="text-accent-primary">Outpace</span> The Market.
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed font-body">
            We don't just provide services; we engineer unfair advantages for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-blur p-10 rounded-[2.5rem] group relative overflow-hidden flex flex-col items-start text-left"
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-accent-primary group-hover:text-white transition-all duration-500 shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-extrabold mb-4 tracking-tight group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300 flex-grow">
                {service.desc}
              </p>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-accent-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
