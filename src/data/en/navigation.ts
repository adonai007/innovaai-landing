import type { NavigationData } from '../types';
import { LINKEDIN_URL } from '../links';

export const navigation = {
  homeLabel: 'InnovaAI, back to top',
  navLabel: 'Main',
  links: [
    { label: 'DentiMed', href: '#dentimed' },
    { label: 'Dicta', href: '#dicta' },
    { label: 'For teams', href: '#que-construimos' },
    { label: 'How we work', href: '#como-trabajamos' },
    { label: 'FAQ', href: '#preguntas' },
  ],
  lang: { short: 'ES', long: 'Español', href: '/es/', hreflang: 'es', ariaLabel: 'ES, lee esta página en español' },
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  menuTitle: 'Menu',
  linkedin: { label: 'InnovaAI on LinkedIn', href: LINKEDIN_URL, external: true },
} satisfies NavigationData;
