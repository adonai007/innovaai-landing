import type { NavigationData } from '../types';
import { LINKEDIN_URL } from '../links';

export const navigation = {
  homeLabel: 'InnovaAI, back to top',
  navLabel: 'Main',
  links: [
    { label: 'What we build', href: '#que-construimos' },
    { label: 'Products', href: '#productos' },
    { label: 'How we work', href: '#como-trabajamos' },
    { label: 'Questions', href: '#preguntas' },
  ],
  lang: { short: 'ES', long: 'Español', href: '/es/', hreflang: 'es', ariaLabel: 'ES, leer esta página en español' },
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  menuTitle: 'Menu',
  linkedin: { label: 'InnovaAI on LinkedIn', href: LINKEDIN_URL, external: true },
} satisfies NavigationData;
