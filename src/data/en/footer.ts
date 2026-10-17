import type { FooterData } from '../types';
import { DENTIMED_URL, DICTA_URL, LINKEDIN_URL } from '../links';
import { site } from './site';

export const footer = {
  tagline: 'Applied AI studio in Bolivia. We build tools that prepare the work so your team can decide.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'What we build', href: '#que-construimos' },
        { label: 'Products', href: '#productos' },
        { label: 'How we work', href: '#como-trabajamos' },
        { label: 'Questions', href: '#preguntas' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'DentiMed', href: DENTIMED_URL, external: true },
        { label: 'Dicta', href: DICTA_URL, external: true },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'WhatsApp', href: site.whatsappHref, external: true },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
        { label: 'Español', href: '/es/', hreflang: 'es' },
      ],
    },
  ],
  legal: '© {year} InnovaAI · La Paz, Bolivia',
  demoNote: 'Examples on this page use demo data.',
  colophon: 'InnovaAI',
} satisfies FooterData;
