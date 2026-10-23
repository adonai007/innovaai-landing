import type { CinemaData } from '../types';

export const cinema = {
  label: 'The studio',
  title: 'Less repetition.\nMore judgment.',
  leadIn: "What we learned building DentiMed and Dicta, we bring to your team’s work.",
  body: 'A vision, in three scenes, of what we can design with you.',
  skip: { label: 'Skip to the tools', href: '#que-construimos' },
  pause: 'Pause motion',
  resume: 'Resume motion',
  scenes: [
    {
      id: 'rutina',
      label: 'Routine',
      title: 'The city moves forward.\nYour work can too.',
      line: 'Search. Copy. Type it again. Repetitive tasks take the time good ideas deserve.',
      alt: 'A person works with documents in an office overlooking a lit city.',
    },
    {
      id: 'voz',
      label: 'Voice',
      title: 'One instruction.\nEverything starts to connect.',
      line: 'Your voice gives the context. Software organizes the information and gets the next step ready.',
      alt: 'Green and blue waves connect a voice to the work in the same office.',
    },
    {
      id: 'criterio',
      label: 'Judgment',
      title: 'Fewer steps.\nMore room to decide.',
      line: 'Information arrives in order, and you choose the next step.',
      alt: 'The same office, with the information in order and a person reviewing the result.',
    },
  ],
} satisfies CinemaData;
