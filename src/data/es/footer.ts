import type { FooterData } from '../types';
import { DENTIMED_URL, DICTA_URL, LINKEDIN_URL } from '../links';
import { site } from './site';

export const footer = {
  tagline: 'Estudio de IA aplicada en Bolivia. Construimos herramientas que preparan el trabajo para que tu equipo decida.',
  columns: [
    {
      title: 'Explorar',
      links: [
        { label: 'Qué construimos', href: '#que-construimos' },
        { label: 'Productos', href: '#productos' },
        { label: 'Cómo trabajamos', href: '#como-trabajamos' },
        { label: 'Preguntas', href: '#preguntas' },
      ],
    },
    {
      title: 'Productos',
      links: [
        { label: 'DentiMed', href: DENTIMED_URL, external: true },
        { label: 'Dicta', href: DICTA_URL, external: true },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'WhatsApp', href: site.whatsappHref, external: true },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
        { label: 'English', href: '/en/', hreflang: 'en' },
      ],
    },
  ],
  legal: '© {year} InnovaAI · La Paz, Bolivia',
  demoNote: 'Los ejemplos de esta página usan datos de demostración.',
  colophon: 'InnovaAI',
} satisfies FooterData;
