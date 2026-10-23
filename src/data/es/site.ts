import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = 'Hola Adonai, vi la web de InnovaAI y quiero conversar sobre una tarea que se repite en mi trabajo.';

export const site = {
  lang: 'es',
  skipLink: 'Saltar al contenido',
  h1: 'InnovaAI, estudio de producto con IA',
  ribbon: {
    text: 'InnovaAI es un estudio de producto con IA. Desde Latinoamérica, para el mundo.',
    link: { label: 'Conoce el estudio', href: '#historia' },
  },
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  whatsappHint: '(abre WhatsApp en una pestaña nueva)',
  cta: 'Conversemos por WhatsApp',
  ctaShort: 'Conversemos',
  externalHint: '(se abre en una pestaña nueva)',
} satisfies SiteData;
