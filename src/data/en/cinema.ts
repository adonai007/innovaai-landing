import type { CinemaData } from '../types';

export const cinema = {
  label: 'From manual work to applied AI',
  intro: 'A new way to work',
  skip: { label: 'Go to the products', href: '#productos' },
  motionOff: 'Pause motion',
  motionOn: 'Enable motion',
  scroll: 'Scroll to transform',
  concept: 'A vision of what we can design with you.',
  scenes: [
    {
      id: 'rutina',
      number: '01',
      eyebrow: 'The starting point',
      title: 'The city moves forward.\nYour work can, too.',
      description: 'Search. Copy. Type it again. Small repetitive tasks take up the space that big ideas deserve.',
      alt: 'A person works with documents in an office overlooking an illuminated city.',
      note: 'Your processes are the starting point.',
    },
    {
      id: 'voz',
      number: '02',
      eyebrow: 'From your voice to action',
      title: 'One instruction.\nEverything starts to connect.',
      description: 'Your voice provides the context. Automations connect the tasks. Agents prepare the next step.',
      alt: 'Green and blue waves connect voice to workflows in the same office.',
      note: 'Voice · Context · Automation',
    },
    {
      id: 'criterio',
      number: '03',
      eyebrow: 'Technology with purpose',
      title: 'Fewer steps.\nMore room to decide.',
      description: 'We design the workflow around your team: organized information, work prepared and decisions that remain yours.',
      alt: 'The transformed office, with organized information and a person reviewing the result.',
      note: 'AI prepares. You review and confirm.',
    },
  ],
} satisfies CinemaData;
