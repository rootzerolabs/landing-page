import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

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

  // Close dropdown when clicking outside
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
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-primary/10 blur-[150px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">

          {/* Form Side */}
          <div className="lg:w-3/5 glass p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tighter">
                Initiate <br /><span className="text-accent-primary">Development</span>
              </h2>
              <p className="text-xl text-white/40 font-light max-w-md leading-relaxed">
                Tell us about your mission. Our engineers will review your requirements and respond with a strategy in 24 hours.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3 group/input">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] group-focus-within/input:text-accent-primary transition-colors">Commander Name</label>
                <input
                  type="text"
                  placeholder="The person in charge"
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-primary transition-all font-body text-lg"
                />
              </div>

              <div className="flex flex-col gap-3 group/input">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] group-focus-within/input:text-accent-primary transition-colors">Direct Channel (Email)</label>
                <input
                  type="email"
                  placeholder="Where we reach you"
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-primary transition-all font-body text-lg"
                />
              </div>

              <div className="flex flex-col gap-3 group/input">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] group-focus-within/input:text-accent-primary transition-colors">Entity / Organization</label>
                <input
                  type="text"
                  placeholder="Who you represent"
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-primary transition-all font-body text-lg"
                />
              </div>

              {/* Custom Dropdown */}
              <div className="flex flex-col gap-3 relative" ref={dropdownRef}>
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] transition-colors">Strategic Interest</label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-between border-b py-3 text-lg font-body transition-all text-left ${selectedService ? "text-white" : "text-white/20"
                    } ${isDropdownOpen ? "border-accent-primary" : "border-white/10"}`}
                >
                  {selectedService || "Select Requirement"}
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-accent-primary" : "text-white/30"}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-full mt-2 z-[60] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[300px] overflow-y-auto"
                    >
                      <div className="p-2 space-y-1">
                        {servicesList.map((service, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => {
                              setSelectedService(service);
                              setIsDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all text-base font-body"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-3 md:col-span-2 group/input">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] group-focus-within/input:text-accent-primary transition-colors">Mission Brief (Message)</label>
                <textarea
                  rows="3"
                  placeholder="Describe the problem we're solving..."
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-primary transition-all font-body text-lg resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-6">
                <button
                  type="submit"
                  className="w-full py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-accent-primary hover:text-white transition-all hover:shadow-[0_0_40px_rgba(108,99,255,0.4)] active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-4"
                >
                  Send Brief
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Side */}
          <div className="lg:w-2/5 flex flex-col justify-center gap-16">
            <div className="space-y-12">
              <h3 className="text-3xl font-heading font-black tracking-tighter uppercase italic">Collaborate <br /><span className="text-accent-primary">Anywhere.</span></h3>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-primary shrink-0"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Bengaluru, India HQ</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Indiranagar, 100 Feet Rd <br /> Bengaluru, KA 560038</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-primary shrink-0"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Boston, US</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Strategic Partnerships <br /> Innovation District</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-primary shrink-0"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Patna, India</h4>
                    <p className="text-white/40 text-sm leading-relaxed">Regional Growth Hub <br /> Bihar, IN</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-sm">
                <p className="text-white/70 text-sm font-medium leading-relaxed italic">
                  "Root Zero Labs doesn't just build software; they build the weapons our company needs to dominate our market."
                </p>
                <p className="text-white/40 text-xs mt-4 font-bold uppercase tracking-widest">— CEO, Acme Disrupt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
