import React from 'react';
import { PROJECTS_DATA } from '@/constants/projects';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32">
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-[var(--color-border-glow)] pb-8">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">
          02. Projets Sélectionnés
        </h2>
        <p className="mt-2 text-sm text-indigo-400 font-mono md:mt-0">
          // production_ready_apps
        </p>
      </div>

      {/* Grille de projets */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.title}
            className="group relative flex flex-col justify-between rounded-xl border border-[var(--color-border-glow)] bg-[var(--color-card)]/20 p-6 backdrop-blur-sm hover:bg-[var(--color-card)]/40 hover:border-neutral-700 transition-all duration-300"
          >
            <div>
              {/* Entête de la carte */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-indigo-400 uppercase">
                    {project.company ? `${project.company} • ${project.role}` : project.role}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-neutral-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>
            </div>

            {/* Tags & Liens finaux */}
            <div className="mt-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens (Action) */}
              <div className="mt-6 flex gap-4 border-t border-neutral-900 pt-4">
                {project.links.github && (
                  <a 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors"
                  >
                    Code Source →
                  </a>
                )}
                {project.links.live && (
                  <a 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors"
                  >
                    Démonstration Live →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}