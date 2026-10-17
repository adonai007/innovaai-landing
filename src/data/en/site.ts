import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = 'Hi Adonai, I saw the InnovaAI website and would like to talk about a task that keeps repeating in my company.';

export const site = {
  lang: 'en',
  skipLink: 'Skip to content',
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  cta: "Let's talk on WhatsApp",
  ctaShort: "Let's talk",
  demoNote: 'Demo data.',
  externalHint: '(opens in a new tab)',
} satisfies SiteData;
