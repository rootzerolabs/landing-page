import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-white/[0.08]' : 'py-8 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Sexy breathing glow background */}
            <div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full scale-50 group-hover:scale-110 transition-transform duration-700 animate-pulse" />

            <svg
              viewBox="0 0 24 24"
              className="relative w-full h-full text-accent-primary drop-shadow-[0_0_12px_rgba(108,99,255,0.8)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent-primary)" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              {/* Stylized Square Root Symbol - slightly wider for space */}
              <path d="M2 13h2l3 7 6-16h9" stroke="url(#logo-grad)" />
              {/* The Slashed Zero inside - more space from the root line */}
              <g transform="translate(15.5, 9.5) skewX(-15)" className="group-hover:translate-y-[-1px] transition-transform duration-500">
                <ellipse cx="2.5" cy="3.5" rx="2.2" ry="3.8" className="text-white" strokeWidth="2.5" />
                <path d="M1 5.5 L4 1.5" className="text-white/80" strokeWidth="1.2" />
              </g>
            </svg>
          </div>
          <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase italic transition-all duration-500">
            Root<span className="text-accent-primary group-hover:text-white transition-colors">Zero</span>
            <span className="ml-2 text-white/30 group-hover:text-accent-primary transition-colors text-xl font-light">Labs</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-accent-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="px-6 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-accent-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 py-10 px-6 flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-heading font-bold text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-5 rounded-2xl bg-accent-primary text-white font-black uppercase tracking-widest text-sm">
            Book a Free Consultation
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
