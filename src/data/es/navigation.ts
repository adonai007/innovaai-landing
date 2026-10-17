import type { NavigationData } from '../types';
import { LINKEDIN_URL } from '../links';

export const navigation = {
  homeLabel: 'InnovaAI, volver al inicio',
  navLabel: 'Principal',
  links: [
    { label: 'Qué construimos', href: '#que-construimos' },
    { label: 'Productos', href: '#productos' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'Preguntas', href: '#preguntas' },
  ],
  lang: { short: 'EN', long: 'English', href: '/en/', hreflang: 'en', ariaLabel: 'EN, read this page in English' },
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
  menuTitle: 'Menú',
  linkedin: { label: 'InnovaAI en LinkedIn', href: LINKEDIN_URL, external: true },
} satisfies NavigationData;
