import type { AudienceData } from '../types';

export const audience = {
  head: {
    eyebrow: "Who it's for",
    title: 'For teams with work that keeps repeating.',
    intro: 'It works best when there is a concrete task in mind and someone on your team who deals with it every day.',
  },
  items: [
    'Your team copies, sorts or summarizes the same information every day.',
    'Your team answers many questions on WhatsApp or email, and the answers look alike.',
    'You want to start with a small, measurable case.',
    'You need a person to review what matters before it is saved or sent.',
  ],
  note: "If you don't have a clear case yet, the first conversation helps you find one.",
} satisfies AudienceData;
