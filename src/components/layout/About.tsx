import React from 'react';
import { SKILLS_DATA } from '@/constants/skills';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32">
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-[var(--color-border-glow)] pb-8">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
          01. À Propos
        </h2>
        <p className="mt-2 text-sm text-indigo-400 font-mono md:mt-0">
          // qui suis-je ?
        </p>
      </div>

      {/* Grille de contenu */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Texte de présentation */}
{/* Texte de présentation révisé */}
        <div className="lg:col-span-5 text-neutral-400 space-y-6 text-base leading-relaxed">
          <p>
            Actuellement en <span className="text-neutral-200 font-medium">L3 Informatique</span> et fort d'une expérience concrète en entreprise chez Société Reeway, je maîtrise le cycle de développement d'applications modernes, de la maquette Figma à la production.
          </p>
          <p>
            Mon double profil en développement (<span className="text-indigo-400">Next.js, TS, Tailwind</span>) et en administration systèmes (<span className="text-indigo-400">Active Directory, AWS, Linux</span>) me permet de concevoir des solutions logicielles robustes et parfaitement intégrées à leur infrastructure.
          </p>
          <p>
            Je recherche une alternance à partir de <span className="text-neutral-200 font-medium">septembre 2026</span> (rythme 2 semaines école / 3 semaines entreprise) pour rejoindre une équipe technique exigeante.
          </p>
        </div>

        {/* Bloc Compétences */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SKILLS_DATA.map((item) => (
            <div 
              key={item.category} 
              className="rounded-xl border border-[var(--color-border-glow)] bg-[var(--color-card)]/30 p-6 backdrop-blur-sm hover:border-neutral-700 transition-colors"
            >
              <h3 className="text-sm font-semibold text-neutral-200 tracking-wide">
                {item.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {item.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="h-1 w-1 rounded-full bg-indigo-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}