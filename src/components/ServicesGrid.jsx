import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { num: "01", title: "Web & Enterprise", desc: "Architecting high-concurrency platforms and SEO-native ecosystems built for rapid scaling." },
  { num: "02", title: "Native Mobile", desc: "Uncompromising iOS & Android performance via React Native, focused on fluid UX." },
  { num: "03", title: "Custom LLMs", desc: "Tailored AI models and conversational engines that actually understand your business." },
  { num: "04", title: "Autonomous Agents", desc: "Self-correcting AI workflows that automate the operational complexity of your business." },
  { num: "05", title: "AI Voice Ops", desc: "Next-gen voice assistants for customer support that pass the Turing test." },
  { num: "06", title: "Intelligent ERP", desc: "CRM and operational software that predicts bottlenecks before they happen." },
  { num: "07", title: "Scalable E-com", desc: "Global storefronts with sub-second page loads and predictive inventory AI." },
  { num: "08", title: "API Ecosystems", desc: "Building robust, developer-first APIs that bridge your data to the world." },
  { num: "09", title: "SaaS Foundry", desc: "End-to-end engineering for SaaS startups looking to ship MVP to Scale in record time." },
  { num: "10", title: "BI Dashboards", desc: "Real-time visualization layers that turn raw data into strategic execution." },
  { num: "11", title: "Growth Engineering", desc: "Data-driven SEO and conversion optimization that drives measurable ROI." },
  { num: "12", title: "Product Design", desc: "Creating design systems that are as scalable as the code behind them." },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">Our Capabilities</p>
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight max-w-xl">
              Everything You Need To Outpace The Market.
            </h2>
          </div>
          <p className="text-text-muted text-base max-w-xs leading-relaxed md:text-right">
            We don't just provide services — we engineer unfair advantages for our clients.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border border-border"
          style={{ gap: '1px', backgroundColor: 'var(--color-border)' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="service-card p-8 flex flex-col gap-5"
            >
              <span className="text-xs font-black text-accent tracking-widest">{service.num}</span>
              <div>
                <h3 className="text-base font-heading font-bold mb-2.5 text-text">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
