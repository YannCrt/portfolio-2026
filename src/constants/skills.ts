export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Front-End & State",
    skills: ["React 19 / Next.js 15", "TypeScript", "Tailwind CSS v4", "Redux Toolkit", "Next-intl (i18n)"]
  },
  {
    category: "Back-End & Cloud",
    skills: ["Node.js", "PHP (MVC)", "Ruby on Rails", "PostgreSQL / MySQL", "AWS Cloud Certified"]
  },
  {
    category: "Système & DevOps",
    skills: ["Admin Linux & Windows", "Active Directory / GPO", "Git / GitHub Professional", "CI/CD & Vercel Shipping"]
  }
];