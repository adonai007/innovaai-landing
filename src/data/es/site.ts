import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = 'Hola, vi la web de InnovaAI y quiero conversar sobre una tarea que se repite en mi trabajo.';

export const site = {
  lang: 'es',
  skipLink: 'Saltar al contenido',
  h1: 'InnovaAI, equipo que desarrolla productos con inteligencia artificial',
  ribbon: {
    text: 'InnovaAI es un equipo que desarrolla productos con inteligencia artificial. Desde Latinoamérica, para el mundo.',
    link: { label: 'Conócenos', href: '#historia' },
  },
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  whatsappHint: '(abre WhatsApp en una pestaña nueva)',
  cta: 'Conversemos por WhatsApp',
  ctaShort: 'Conversemos',
  externalHint: '(se abre en una pestaña nueva)',
} satisfies SiteData;
