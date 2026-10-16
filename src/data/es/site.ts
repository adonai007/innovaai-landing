import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = 'Hola Adonai, vi la web de InnovaAI y quiero conversar sobre una tarea que se repite en mi empresa.';

export const site = {
  lang: 'es',
  skipLink: 'Saltar al contenido',
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  cta: 'Conversemos por WhatsApp',
  ctaShort: 'Conversemos',
  demoNote: 'Datos de demostración.',
  externalHint: '(se abre en una pestaña nueva)',
} satisfies SiteData;
