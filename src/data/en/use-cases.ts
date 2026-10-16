import type { UseCasesData } from '../types';

export const useCases = {
  head: {
    eyebrow: 'What we build',
    title: 'Tools that prepare your everyday work.',
    intro: 'Examples of what we can build with you. They all follow the same rule: AI prepares, a person reviews.',
  },
  featured: {
    icon: 'microphone',
    title: 'Voice notes that become records',
    body: 'Whoever is in the field or with a client describes what happened, and the tool fills in the record with the fields your company uses. Someone reviews it before saving.',
    footnote: "It's the same principle behind DentiMed, our assistant for dentists.",
    demo: {
      audioLabel: 'Voice note · 0:48',
      recordTitle: 'Visit record',
      rows: [
        { label: 'Customer', value: "Doña Rosa's shop" },
        { label: 'What was done', value: 'Inventory check' },
        { label: 'Next step', value: 'Call on Monday' },
      ],
      chip: 'To review',
    },
  },
  items: [
    {
      icon: 'list-checks',
      title: 'Meetings that end in tasks',
      body: 'A conversation recorded with consent becomes a summary and proposed tasks, each with the sentence it came from. A person accepts or discards them.',
    },
    {
      icon: 'magnifying-glass',
      title: 'Answers from your own documents',
      body: 'Manuals, policies and reports. Your team asks in plain words and gets the answer next to the document it comes from.',
    },
    {
      icon: 'tray-arrow-down',
      title: 'Documents that arrive sorted',
      body: 'Requests, forms or emails are sorted and summarized so the right person sees them first.',
    },
    {
      icon: 'chat-circle-text',
      title: 'Drafts for customer replies',
      body: 'Frequent answers are prepared with the right information. Your team adjusts them and sends them.',
    },
  ],
  wide: {
    icon: 'chalkboard-teacher',
    title: 'A team that knows how to use AI',
    body: 'Hands-on workshops with the tools your team already uses, with clear rules about which data can be used and which cannot.',
  },
  caption: 'Demo data.',
} satisfies UseCasesData;
