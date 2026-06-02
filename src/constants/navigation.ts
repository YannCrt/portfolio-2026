export interface NavItem {
  label: string;
  href: string;
}

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];