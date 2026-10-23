import type { FaqData } from '../types';

export const faq = {
  title: 'Frequently asked questions.',
  introBefore: 'Have another question? ',
  introLink: 'Message us on WhatsApp',
  introAfter: '.',
  items: [
    { question: 'What is InnovaAI?',
      answer: 'An AI product studio based in La Paz, Bolivia. We build and maintain our own products, DentiMed and Dicta, and design tools with teams at other companies.' },
    { question: 'Do you work with teams in other countries?',
      answer: 'Yes. We talk on WhatsApp, in Spanish or English, wherever you are. We agree on the scope and the way of working together.' },
    { question: 'Where can I use DentiMed?',
      answer: "DentiMed is made for dentists and is available in Spanish. It runs in your phone’s browser, with nothing to download from an app store, and you choose your clinic’s main currency. It’s currently in a founders pilot." },
    { question: 'Does AI replace people?',
      answer: 'No. Our tools gather the information and leave a draft. Nothing is saved or sent until someone on your team approves it.' },
    { question: 'How do you handle sensitive information?',
      answer: 'From the design stage we define who has access, what is stored, for how long and with which providers. In DentiMed, each clinic is isolated from the others, important actions are recorded in an audit log, and no draft is saved without human review.' },
    { question: 'How much does it cost?',
      answer: "It depends on the scope. If there’s a good fit, we propose a clear scope and budget before any work begins. The first conversation is free. DentiMed is in a founders pilot, and Dicta is free to start." },
    { question: 'Where do we start?',
      answer: 'With a 30-minute conversation on WhatsApp.' },
  ],
} satisfies FaqData;
