import type { ReadingData, ReadingSection } from '../types';
import { seo } from './seo';
import { dentimed } from './dentimed';
import { dicta } from './dicta';
import { cinema } from './cinema';
import { everydayWork } from './everyday-work';
import { howWeWork } from './how-we-work';

const sections = [
  {
    id: 'dentimed', label: 'DentiMed', title: dentimed.lockup.title,
    body: `${dentimed.lockup.subhead} ${dentimed.lockup.meta}. ${dentimed.features.security.title} ${dentimed.features.security.items.join(', ')}.`,
    items: dentimed.features.items.map(({ title, body }) => ({ title, body })),
    links: [dentimed.primary, dentimed.demo],
  },
  {
    id: 'dicta', label: 'Dicta', title: dicta.lockup.title,
    body: `${dicta.lockup.subhead} ${dicta.lockup.meta}.`,
    items: dicta.features, links: [dicta.cta],
  },
  {
    id: 'historia', label: cinema.label, title: cinema.title,
    body: `${cinema.leadIn} ${cinema.body}`,
    items: cinema.scenes.map((scene) => ({ title: scene.title, body: scene.line })),
    links: [cinema.skip],
  },
  {
    id: 'que-construimos', label: 'For teams', title: everydayWork.title,
    body: everydayWork.intro, items: everydayWork.items,
  },
  {
    id: 'como-trabajamos', label: howWeWork.label, title: howWeWork.title,
    body: `${howWeWork.leadIn} ${howWeWork.body}`,
    items: howWeWork.steps.map((step) => ({ title: `${step.number}. ${step.title}`, body: `${step.body} ${howWeWork.deliverableLabel}: ${step.deliverable}` })),
  },
] satisfies ReadingSection[];

export const reading = {
  title: 'InnovAI at a glance.',
  description: seo.home.description,
  indexTitle: 'On this page',
  navLabel: 'Overview contents',
  presentation: { label: 'View the animated presentation', href: '/en/' },
  index: [
    { label: 'What InnovAI is', href: '#inicio' },
    ...sections.map((section) => ({ label: section.label, href: `#${section.id}` })),
    { label: 'Frequently asked questions', href: '#preguntas' },
    { label: 'Contact', href: '#contacto' },
  ],
  sections,
} satisfies ReadingData;
