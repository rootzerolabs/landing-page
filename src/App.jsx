import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ServicesGrid from './components/ServicesGrid';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-background text-white selection:bg-accent-primary/30">
      {/* Global Noise Overlay */}
      <div className="noise" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <ServicesGrid />
        <WhyUs />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
