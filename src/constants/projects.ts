export interface Project {
    title: string;
    description: string;
    tags: string[];
    role: string;
    company?: string;
    links: {
        github?: string;
        live?: string;
    };
}

export const PROJECTS_DATA: Project[] = [
    {
    title: "Application Web d'Entreprise",
    description: "Développement Front-end d'une application web moderne. Intégration complète de maquettes Figma complexes, gestion de l'état global et internationalisation complète du produit.",
    role: "Développeur Front-End JavaScript",
    company: "Société Reeway",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Next-intl", "Jest"],
    links: {
      live: "https://reeway.fr", // À adapter ou laisser générique
    }
  },
  {
    title: "Lab Personnel Active Directory",
    description: "Conception et déploiement d'une infrastructure réseau et d'un contrôleur de domaine AD. Gestion sécurisée des utilisateurs, déploiement de GPO (restrictions USB, lecteurs réseau) et supervision des incidents via GLPI.",
    role: "Administrateur Système / DevOps",
    tags: ["Active Directory", "Windows Server", "DNS", "GPO", "Linux (Debian)", "GLPI"],
    links: {
      github: "https://github.com/YannCrt",
    }
  }
]