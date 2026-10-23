import type { ClosingData } from '../types';
import { LINKEDIN_URL } from '../links';

export const closing = {
  title: "Let’s start with a conversation.",
  body: "Tell us which task keeps repeating in your work. In 30 minutes, we’ll see whether there’s a good place to start. If AI isn’t the answer, we’ll tell you that too.",
  reassurance: 'Free · No commitment · In Spanish or English',
  linkedin: { label: 'InnovaAI on LinkedIn', href: LINKEDIN_URL, external: true },
} satisfies ClosingData;
