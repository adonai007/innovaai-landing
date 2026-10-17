import type { ProductsData } from '../types';
import { DENTIMED_URL, DICTA_URL } from '../links';

export const products = {
  head: {
    eyebrow: 'Our products',
    title: 'We build what we recommend.',
    intro: 'Dicta and DentiMed are ours. Building them teaches us what it really takes to bring AI into daily work: errors, privacy and getting people to want to use it.',
  },
  dentimed: {
    name: 'DentiMed',
    eyebrow: 'For dentists',
    tagline: 'Your assistant prepares the chart. You confirm.',
    body: 'You dictate when the visit ends and DentiMed prepares a draft of the clinical note, procedures by tooth, payment, treatment estimate and next appointment. Nothing is saved without your approval.',
    bullets: [
      "Dictation from the patient's chart",
      'Procedures by tooth and surface, priced from your fee schedule',
      'Next appointment in a free slot, booked with one tap',
      'WhatsApp message ready, sent by you',
    ],
    meta: "From your phone's browser · Founders pilot · Available in Spanish",
    cta: { label: 'Discover DentiMed', href: DENTIMED_URL, external: true, srHint: '(opens dentimed.app, a Spanish-language site, in a new tab)' },
    imageAlt: 'A dentist greets a patient at reception while another patient smiles at his phone.',
    chip: { title: 'Visit draft', detail: 'José Pérez · tooth 36', draft: 'Draft', approved: 'Approved' },
  },
  dicta: {
    name: 'Dicta',
    eyebrow: 'Voice dictation',
    tagline: 'You speak and the text appears where your cursor is.',
    body: 'A lightweight app for your computer. Hold F9, speak, and the text is typed into whatever app you have open.',
    bullets: [
      'Hold F9 to talk or tap it twice for hands-free',
      'Works anywhere you can type',
      'Removes filler words as it transcribes',
      'Spanish and English',
    ],
    meta: 'For Windows and Linux · Free to start',
    cta: { label: 'Discover Dicta', href: DICTA_URL, external: true, srHint: '(opens the Dicta site in a new tab)' },
    mock: {
      windowTitle: 'New message',
      to: 'To: Sales team',
      subject: "Subject: Friday's order",
      text: "Hi team, Friday's order ships at 10:00. Please confirm stock before Thursday.",
      pillIdle: 'Press F9 and speak',
      pillListening: 'Listening... (F9)',
    },
  },
  caption: 'Demo data.',
  next: {
    title: 'The next one could be for your team.',
    body: "If a task repeats every day in your company, let's talk.",
    cta: 'Tell us about your case',
  },
} satisfies ProductsData;
