import React from 'react';
import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      {/* Les prochaines sections (About, Projects, Contact) viendront se glisser ici */}
    </main>
  );
}