import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = 'Hola, vi la web de InnovAI y quiero conversar sobre una tarea que se repite en mi trabajo.';

export const site = {
  lang: 'es',
  skipLink: 'Saltar al contenido',
  h1: 'InnovAI, equipo que desarrolla productos con inteligencia artificial',
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  whatsappHint: '(abre WhatsApp en una pestaña nueva)',
  cta: 'Conversemos por WhatsApp',
  ctaShort: 'Conversemos',
  externalHint: '(se abre en una pestaña nueva)',
} satisfies SiteData;
