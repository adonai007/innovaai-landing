import type { HowWeWorkData } from '../types';

export const howWeWork = {
  label: 'How we work',
  title: 'Work first.\nTools second.',
  leadIn: 'We start with one specific task.',
  body: 'We measure it with your team and move forward in three steps.',
  deliverableLabel: 'What you get',
  steps: [
    { number: '01', title: 'We learn the work.',
      body: 'We talk with the people who do the work, pick one specific task and agree on how to measure improvement.',
      deliverable: 'A chosen task and a way to measure it.', offerName: 'Process diagnostic' },
    { number: '02', title: 'We test with real material.',
      body: 'We build a first version with your documents or data, and a small group from your team uses it.',
      deliverable: 'A version your team can already use.', offerName: 'Prototype with real material' },
    { number: '03', title: 'We put it to use.',
      body: 'We measure, adjust and support your team until the tool is part of the workday.',
      deliverable: 'A tool in use and a team that knows it well.', offerName: 'Implementation and adoption' },
  ],
} satisfies HowWeWorkData;
