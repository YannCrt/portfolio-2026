import React from 'react';
import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';
import Projects from '@/components/layout/Projects';
import Contact from '@/components/layout/Contact';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact/>
    </main>
  );
}