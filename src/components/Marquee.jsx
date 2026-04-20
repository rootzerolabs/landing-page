import React from 'react';

const Marquee = () => {
  const logos = [
    "ACME CORP", "NAVAMED", "SHIFT RETAIL", "LEGAL EDGE", "QUICK CART",
    "URBAN DRIVE", "CLOUDSYNC", "PULSE VENTURE", "NEXUS LOG", "APEX REAL ESTATE"
  ];

  return (
    <div className="py-10 border-y border-border relative overflow-hidden bg-surface">
      <div className="container mx-auto px-6 mb-7 text-center">
        <p className="text-text-muted text-xs font-medium tracking-widest uppercase">
          Engineering products for industry titans
        </p>
      </div>

      <div className="flex relative items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center pr-20">
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-2xl font-heading font-black text-text-muted/25 hover:text-accent/40 transition-colors duration-300 cursor-default tracking-tight"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
