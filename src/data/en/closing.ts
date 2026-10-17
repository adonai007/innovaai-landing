import type { ClosingData } from '../types';
import { LINKEDIN_URL } from '../links';

export const closing = {
  eyebrow: 'First step',
  title: "Let's start with one concrete task.",
  body: "In a 30-minute conversation we review your operation and see whether there is a good case to start with. If AI isn't the answer, we'll tell you that too.",
  reassurance: 'No cost · No commitment · In Spanish or English',
  founder: { text: "You'll hear back from Adonai Callejas, founder of InnovaAI." },
  linkedin: { label: 'See InnovaAI on LinkedIn', href: LINKEDIN_URL, external: true },
  stepsTitle: 'What happens in those 30 minutes',
  steps: [
    'You tell us which task repeats and who does it.',
    'Together we see whether there is a good case to start with and how to measure it.',
    'If it makes sense, we propose a small first step.',
  ],
} satisfies ClosingData;
