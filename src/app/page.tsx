import React from 'react';
import Hero from '@/components/layout/Hero';
import About from '@/components/layout/About';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}