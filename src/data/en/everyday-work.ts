import type { EverydayWorkData } from '../types';

export const everydayWork = {
  title: 'Tools that get everyday work ready.',
  intro: 'Every tool starts with one specific task on your team. Here are examples of what we can build with you.',
  items: [
    { icon: 'microphone', title: 'From voice\u00a0note to record.',
      body: "Describe what happened and the tool fills in the fields your company uses. Someone reviews it before it’s saved." },
    { icon: 'list-checks', title: 'Meetings that end in tasks.',
      body: 'A meeting recorded with consent becomes a summary and suggested tasks, each with the sentence it came from.' },
    { icon: 'magnifying-glass', title: 'Answers from your own documents.',
      body: 'Your team asks in plain words and gets the answer with its source.' },
    { icon: 'tray-arrow-down', title: 'Documents, sorted.',
      body: 'Requests, forms and emails arrive classified and summarized for the right person.' },
    { icon: 'chat-circle-text', title: 'Replies ready for your customers.',
      body: "Common questions get a draft built from your company’s information. Your team edits it and sends it." },
    { icon: 'chalkboard-teacher', title: 'A team that knows how to use AI.',
      body: "Hands-on workshops with your team’s tools and clear rules on which data to share." },
  ],
  cta: "Let’s talk about your case",
} satisfies EverydayWorkData;
