import type { HowWeWorkData } from '../types';

export const howWeWork = {
  head: {
    eyebrow: 'How we work',
    title: 'First we understand the work. Then we choose the tool.',
    intro: 'A small first case, measured with your team. We set the real scope together after the first conversation.',
  },
  deliverableLabel: 'What you take away',
  steps: [
    {
      number: '01',
      title: 'We look at how work happens today',
      body: 'We talk with the people who live the problem and pick one concrete task, with a clear way to measure whether it improved.',
      deliverable: 'One chosen case and how we will measure it',
      offerName: 'Process diagnostic',
    },
    {
      number: '02',
      title: 'We test with real material',
      body: 'We build a first version with your documents, conversations or data, and a small group from your team tries it.',
      deliverable: 'A test version your team can already use',
      offerName: 'Prototype with real material',
    },
    {
      number: '03',
      title: 'We get it running for good',
      body: 'We measure, fix and train the team until the tool is part of the daily routine.',
      deliverable: 'A tool in use and a team that knows how to use it',
      offerName: 'Implementation and adoption',
    },
  ],
  visuals: {
    map: {
      title: 'How work happens today',
      rows: ['The order arrives on WhatsApp', 'Someone copies it into the spreadsheet', 'The reply gets written', "It's sent to the customer"],
      highlightIndex: 1,
      highlightTag: 'Repeats all day',
      measureLabel: "What we'll measure",
      measure: 'How long an order takes from arrival to reply.',
    },
    prototype: {
      badge: 'Test version',
      title: 'Order for Ana Quispe',
      fields: [
        { label: 'Order', value: '12 boxes' },
        { label: 'Delivery', value: 'This Friday' },
      ],
      missing: { label: 'Payment method', value: 'Missing' },
      comment: {
        initials: 'CR',
        name: 'Carla Rojas',
        role: 'Sales supervisor',
        text: 'The payment method is missing. Customers almost always ask for it.',
      },
    },
    inUse: {
      title: 'Orders prepared today',
      rows: [
        { name: 'Ana Quispe', detail: '12 boxes', status: 'Approved', tone: 'ok' },
        { name: 'Jorge Flores', detail: '4 boxes', status: 'Edited and approved', tone: 'edited' },
        { name: 'Rosa Choque', detail: '6 units', status: 'Approved', tone: 'ok' },
        { name: 'Marco Vargas', detail: 'Incomplete order', status: 'Sent back to sales', tone: 'returned' },
      ],
    },
  },
  caption: 'Demo data.',
} satisfies HowWeWorkData;
