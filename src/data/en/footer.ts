import type { FooterData } from '../types';
import { DENTIMED_URL, DICTA_URL, LINKEDIN_URL } from '../links';
import { site } from './site';

export const footer = {
  tagline: 'InnovaAI is an AI product studio. From Latin America, for the world.',
  columns: [
    {
      title: 'Products',
      links: [
        { label: 'DentiMed', href: DENTIMED_URL, external: true, srHint: '(opens dentimed.app, a Spanish-language site, in a new tab)' },
        { label: 'Dicta', href: DICTA_URL, external: true, srHint: '(opens the Dicta site in a new tab)' },
      ],
    },
    {
      title: 'Studio',
      links: [
        { label: 'For teams', href: '#que-construimos' },
        { label: 'How we work', href: '#como-trabajamos' },
        { label: 'FAQ', href: '#preguntas' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'WhatsApp', href: site.whatsappHref, external: true, srHint: site.whatsappHint },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
      ],
    },
  ],
  copyright: 'Copyright © {year} InnovaAI. All rights reserved.',
  location: 'DentiMed and Dicta are InnovaAI products. Based in La Paz, Bolivia.',
  lang: { label: 'Español', href: '/es/', hreflang: 'es' },
} satisfies FooterData;
