import type { IntroData } from '../types';

export const intro = {
  line: 'A team that builds AI products. From Latin America, for the world.',
  items: [
    {
      id: 'dentimed',
      name: 'DentiMed',
      body: 'An assistant for dentists. You dictate when the visit ends and DentiMed drafts the record.',
      link: { label: 'See DentiMed', href: '#dentimed' },
    },
    {
      id: 'dicta',
      name: 'Dicta',
      body: 'Write with your voice wherever your cursor is. On Windows and Linux.',
      link: { label: 'See Dicta', href: '#dicta' },
    },
    {
      id: 'equipos',
      name: 'For teams',
      body: 'Tools that prepare the everyday work of your team.',
      link: { label: 'See what we build', href: '#que-construimos' },
    },
  ],
} satisfies IntroData;
