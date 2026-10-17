import type { FaqData } from '../types';

export const faq = {
  head: {
    eyebrow: 'Frequently asked questions',
    title: 'Before you start.',
    // Text before the WhatsApp link; FAQ.astro renders it in SectionHead's slot (SPEC 4.9).
    intro: 'Direct answers to what usually comes up in a first conversation. If you have another question, ',
  },
  introLink: 'message us on WhatsApp',
  introEnd: '.',
  items: [
    {
      question: 'What kinds of processes can AI improve?',
      answer:
        'Processes involving repetitive work, information search, document classification, frequent writing, customer service or decisions that depend on gathering scattered data. During the diagnostic, we prioritize one concrete use case.',
    },
    {
      question: 'Does my data need to be perfect?',
      answer:
        'No. We first review what information exists, how reliable it is and what can be used safely. Often the first improvement is precisely organizing the workflow and its data.',
    },
    {
      question: 'Will AI replace my team?',
      answer:
        'No. The tool prepares drafts and gathers information; your team reviews and decides what matters.',
    },
    {
      question: 'How do you handle sensitive information?',
      answer:
        'We define access, retention, providers and review points from the design stage. Not every solution needs to store the same information or use the same model.',
    },
    {
      question: 'How long does a first use case take?',
      answer:
        'A focused use case can reach a prototype in one week and be validated over the following weeks, depending on data access, integrations and scope. We confirm this after the diagnostic.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'It depends on the case and the scope. The first conversation is free. If we find a good case, we propose a clear scope and budget before any work starts.',
    },
    {
      question: 'Who is behind InnovaAI?',
      answer:
        'InnovaAI is an applied AI studio founded in Bolivia by Adonai Callejas. Besides working with companies, we build and maintain our own products: Dicta and DentiMed.',
    },
  ],
} satisfies FaqData;
