import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = "Hi, I saw the InnovaAI website and I’d like to talk about a task that keeps repeating in my work.";

export const site = {
  lang: 'en',
  skipLink: 'Skip to content',
  h1: 'InnovaAI, a team that builds AI products',
  ribbon: {
    text: 'InnovaAI is a team that builds AI products. From Latin America, for the world.',
    link: { label: 'Get to know us', href: '#historia' },
  },
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  whatsappHint: '(opens WhatsApp in a new tab)',
  cta: "Let’s talk on WhatsApp",
  ctaShort: "Let’s talk",
  externalHint: '(opens in a new tab)',
} satisfies SiteData;
