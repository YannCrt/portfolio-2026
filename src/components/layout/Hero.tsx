import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center sm:px-8">
      {/* Badge "Disponibilité" style Tech */}
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-glow)] bg-[var(--color-card)]/50 px-4 py-1.5 backdrop-blur-sm animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium text-neutral-300">Disponible pour de nouveaux défis en 2026</span>
      </div>

      {/* Titre Principal (Headline) */}
      <h1 className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-100 sm:text-6xl md:text-7xl">
        Bâtir des expériences web <br />
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          haut de gamme & performantes
        </span>
      </h1>

      {/* Sous-titre (Subheadline) */}
      <p className="mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg">
        Je m'appelle Yann Cretin, je suis Développeur Full-Stack. Je suis passionné par le développement web et la création d'applications web et recherche une alternance pour septembre 2026.    </p>

      {/* Boutons d'action (Call to Action) */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        <a 
          href="#projects" 
          className="group relative inline-flex h-11 items-center justify-center rounded-lg bg-neutral-100 px-6 text-sm font-semibold text-[var(--color-background)] transition-all hover:bg-neutral-200 active:scale-95"
        >
          Voir mes projets
        </a>
        <a 
          href="#contact" 
          className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--color-border-glow)] bg-[var(--color-card)]/30 px-6 text-sm font-medium text-neutral-300 transition-colors hover:bg-[var(--color-card)]/80 hover:text-neutral-100 active:scale-95"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}