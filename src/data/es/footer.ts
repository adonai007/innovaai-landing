import type { FooterData } from '../types';
import { DENTIMED_URL, DICTA_URL, LINKEDIN_URL } from '../links';
import { site } from './site';

export const footer = {
  tagline: 'InnovaAI es un estudio de producto con IA. Desde Latinoamérica, para el mundo.',
  columns: [
    {
      title: 'Productos',
      links: [
        { label: 'DentiMed', href: DENTIMED_URL, external: true },
        { label: 'Dicta', href: DICTA_URL, external: true },
      ],
    },
    {
      title: 'Estudio',
      links: [
        { label: 'Para equipos', href: '#que-construimos' },
        { label: 'Cómo trabajamos', href: '#como-trabajamos' },
        { label: 'Preguntas', href: '#preguntas' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'WhatsApp', href: site.whatsappHref, external: true, srHint: site.whatsappHint },
        { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
      ],
    },
  ],
  copyright: 'Copyright © {year} InnovaAI. Todos los derechos reservados.',
  location: 'DentiMed y Dicta son productos de InnovaAI. Con base en La Paz, Bolivia.',
  lang: { label: 'English', href: '/en/', hreflang: 'en' },
} satisfies FooterData;
