import type { HeroData } from '../types';

export const hero = {
  eyebrow: 'Applied AI studio in Bolivia',
  title: 'AI prepares the work. Your team decides.',
  lead: 'Together we pick the task where your team loses the most time, and we build a tool that prepares it: drafts, records and replies ready to review. The decision stays with your people.',
  ctaSecondary: { label: 'See an example', href: '#ejemplo' },
  reassurance: 'The first conversation takes 30 minutes, costs nothing and can be in Spanish or English.',
  photoAlt: 'A person points at a process diagram drawn on paper, next to a laptop.',
  draft: {
    ariaLabel: 'Example with demo data: a sales voice note becomes an order ready to review.',
    badge: 'Prepared by AI',
    statusDraft: 'Draft',
    statusApproved: 'Approved',
    title: 'Order for Ana Quispe',
    source: 'From a voice note by Luis · 0:42',
    fields: [
      { label: 'Order', value: '12 boxes' },
      { label: 'Delivery', value: 'This Friday' },
      { label: 'To confirm', value: 'October price list' },
    ],
    approve: 'Approve',
    approved: 'Approved by you',
    undo: 'Undo',
    approvedNote: 'Done. The order has been recorded.',
  },
} satisfies HeroData;
