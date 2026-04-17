import React from 'react';

const Marquee = () => {
  const logos = [
    "ACME CORP", "NAVAMED", "SHIFT RETAIL", "LEGAL EDGE", "QUICK CART", "URBAN DRIVE",
    "CLOUDSYNC", "PULSE VENTURE", "NEXUS LOG", "APEX REAL ESTATE"
  ];

  return (
    <div className="py-16 border-y border-white/[0.03] bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
          Engineering products for industry titans
        </p>
      </div>
      
      <div className="flex relative items-center">
        {/* Faders */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center pr-24">
          {[...logos, ...logos].map((logo, index) => (
            <span 
              key={index}
              className="text-4xl md:text-5xl font-heading font-black text-transparent stroke-white/20 hover:stroke-white/40 transition-all duration-300 cursor-default tracking-tighter"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
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
