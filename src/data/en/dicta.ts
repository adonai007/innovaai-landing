import type { DictaData } from '../types';
import { DICTA_URL } from '../links';

export const dicta = {
  lockup: {
    name: 'Dicta',
    title: 'Write with your voice.\nWherever your cursor is.',
    subhead: 'Hold F9, speak, and your words appear in whatever app you have open.',
    meta: 'For Windows and Linux · Free to start',
  },
  cta: { label: 'Explore Dicta', href: DICTA_URL, external: true, srHint: '(opens the Dicta site in a new tab)' },
  mock: {
    windowTitle: 'Note',
    text: 'I speak and the text appears right here, at the cursor.',
    pillIdle: 'Hold F9 and speak',
    pillListening: 'Listening… (F9)',
    key: 'F9',
  },
  features: [
    { title: 'One key.', body: 'Hold F9 to talk, or tap it twice to dictate hands-free.' },
    { title: 'No filler words.', body: 'It removes filler words as it transcribes, so your text reads clean.' },
    { title: 'Spanish and English.', body: 'Works in both languages, on Windows and Linux.' },
  ],
} satisfies DictaData;
