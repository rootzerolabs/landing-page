import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const servicesList = [
  "Web & Enterprise Platforms", "Native Mobile Apps", "Custom LLM Training",
  "Autonomous AI Agents", "Voice Intelligence", "Predictive ERP/CRM",
  "Global E-commerce", "High-Performance APIs", "SaaS Engineering",
  "Data Visualization", "Growth Engineering", "Industrial UI/UX", "Other"
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="contact" className="py-32 bg-surface border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-start">

          {/* Form Side */}
          <div className="lg:w-3/5">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">Get In Touch</p>
            <h2 className="text-5xl md:text-6xl font-heading font-black tracking-tight mb-4">
              Start a Project
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-md">
              Tell us about your mission. Our engineers will review your requirements and respond with a strategy in 24 hours.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2 group/input">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest group-focus-within/input:text-accent transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent border-b border-border py-3 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors text-base"
                />
              </div>

              <div className="flex flex-col gap-2 group/input">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest group-focus-within/input:text-accent transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-b border-border py-3 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors text-base"
                />
              </div>

              <div className="flex flex-col gap-2 group/input">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest group-focus-within/input:text-accent transition-colors">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="bg-transparent border-b border-border py-3 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors text-base"
                />
              </div>

              <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                  Service
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-between border-b py-3 text-base transition-colors text-left ${
                    selectedService ? "text-text" : "text-text-muted/40"
                  } ${isDropdownOpen ? "border-accent" : "border-border"}`}
                >
                  {selectedService || "Select a service"}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 text-text-muted ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-full mt-1 z-[60] bg-background border border-border rounded-lg shadow-lg overflow-hidden max-h-[280px] overflow-y-auto"
                    >
                      {servicesList.map((service, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => { setSelectedService(service); setIsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-3 hover:bg-surface text-text-muted hover:text-text transition-colors text-sm border-b border-border/50 last:border-0"
                        >
                          {service}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2 group/input">
                <label className="text-xs font-semibold text-text-muted uppercase tracking-widest group-focus-within/input:text-accent transition-colors">
                  Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Describe what you're building..."
                  className="bg-transparent border-b border-border py-3 text-text placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors text-base resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button type="submit" className="btn-primary group w-full md:w-auto !px-10 !py-4">
                  Send Message
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Side */}
          <div className="lg:w-2/5 lg:pt-28">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-heading font-bold tracking-tight mb-8">Collaborate Anywhere.</h3>
                <div className="flex flex-col">
                  {[
                    { city: "Bengaluru, India", detail: "Indiranagar, 100 Feet Rd\nBengaluru, KA 560038", tag: "HQ" },
                    { city: "Boston, US", detail: "Strategic Partnerships\nInnovation District", tag: "Partnerships" },
                    { city: "Patna, India", detail: "Regional Growth Hub\nBihar, IN", tag: "Regional" },
                  ].map((loc, i) => (
                    <div key={i} className="flex gap-5 items-start py-6 border-b border-border last:border-0">
                      <span className="text-xs font-semibold text-accent bg-accent-light px-2.5 py-1 rounded mt-0.5 shrink-0">
                        {loc.tag}
                      </span>
                      <div>
                        <h4 className="font-semibold text-text mb-1">{loc.city}</h4>
                        <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">{loc.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="p-8 bg-background border border-border rounded-lg">
                <p className="text-text-muted text-sm leading-relaxed italic mb-4">
                  "Root Zero Labs doesn't just build software; they build the weapons our company needs to dominate our market."
                </p>
                <cite className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                  — CEO, Acme Disrupt
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
