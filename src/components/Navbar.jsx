import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'JurisAI', href: '/juris-ai' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled
        ? 'py-4 bg-background/95 backdrop-blur-sm border-b border-border'
        : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo-full.svg" alt="RootZero Labs" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-text p-2"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-8 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-text hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center">Let's Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
