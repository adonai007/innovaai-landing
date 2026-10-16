import type { PrinciplesData } from '../types';

export const principles = {
  head: { eyebrow: 'How we think', title: 'Four rules for every project.' },
  items: [
    {
      icon: 'flow-arrow',
      title: 'Process first',
      body: 'The right tool shows up after we understand the work. Sometimes the first improvement is fixing the workflow, not adding AI.',
    },
    {
      icon: 'user-check',
      title: 'AI prepares, a person decides',
      body: 'We design clear review points. Anything important goes through someone on your team before it is saved or sent.',
    },
    {
      icon: 'lock-key',
      title: 'Your data, with clear rules',
      body: 'From the design stage we decide who has access, what is stored, for how long and with which providers. Not everything needs to be stored.',
    },
    {
      icon: 'map-pin',
      title: 'Built for how work happens here',
      body: 'In Spanish, on the channels your team already uses, like WhatsApp, and with a scope that makes sense for your budget.',
    },
  ],
} satisfies PrinciplesData;
