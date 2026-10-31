import type { SiteData } from '../types';
import { waHref } from '../links';

const whatsappMessage = "Hi, I saw the InnovAI website and I’d like to talk about a task that keeps repeating in my work.";

export const site = {
  lang: 'en',
  skipLink: 'Skip to content',
  h1: 'InnovAI, a team that builds AI products',
  whatsappMessage,
  whatsappHref: waHref(whatsappMessage),
  whatsappHint: '(opens WhatsApp in a new tab)',
  cta: "Let’s talk on WhatsApp",
  ctaShort: "Let’s talk",
  externalHint: '(opens in a new tab)',
} satisfies SiteData;
