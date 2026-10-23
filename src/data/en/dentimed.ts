import type { DentimedData } from '../types';
import { DENTIMED_URL, waHref } from '../links';

export const dentimed = {
  lockup: {
    name: 'DentiMed',
    title: 'Finish the visit\nwith the chart ready.',
    subhead: 'Say what you did. DentiMed drafts the chart.',
    meta: "For dentists · In your phone’s browser · In Spanish · Founders pilot",
    metaSmall: 'For dentists · In Spanish · Founders pilot',
  },
  primary: { label: 'Explore DentiMed', href: DENTIMED_URL, external: true, srHint: '(opens dentimed.app, a Spanish-language site, in a new tab)' },
  demo: {
    label: 'Request a demo',
    href: waHref("Hi, I’m a dentist and I’d like to see a DentiMed demo."),
    external: true,
    srHint: '(opens WhatsApp in a new tab)',
  },
  phonesLabel: 'Two DentiMed screens, in Spanish: dictating a visit, and the draft with procedures, clinical note and medications, ready to review.',
  photoAlt: 'A dentist dictates the visit into her phone, next to the dental chair.',
  features: {
    title: 'From your voice to the chart.',
    items: [
      { id: 'dictado', label: 'Dictation', title: 'Dictate the way you talk.',
        body: "Record from the patient’s chart and pause whenever you need to. DentiMed transcribes with dental terminology and uses the prices in your fee schedule." },
      { id: 'revision', label: 'Review', title: 'You confirm. Every time.',
        body: 'Everything arrives as a draft for you to review, correct and approve. If a medication conflicts with a recorded allergy, you see an alert before you approve.' },
      { id: 'cita', label: 'Next appointment', title: 'Next appointment and message, ready.',
        body: 'DentiMed suggests a free slot in your calendar and you book it with one tap. The WhatsApp message is prefilled, and you send it when you tap Enviar.' },
    ],
    security: {
      label: 'Security',
      title: "Your patients’ data, under clear rules.",
      items: ['Clinic isolation', 'Audit log', 'Append-only financial ledger', 'Mandatory human review'],
    },
    more: { label: 'See everything DentiMed does', href: DENTIMED_URL, external: true, srHint: '(opens dentimed.app, a Spanish-language site, in a new tab)' },
  },
} satisfies DentimedData;
