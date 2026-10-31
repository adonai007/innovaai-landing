import type { IntroData } from '../types';

export const intro = {
  line: 'Un equipo que desarrolla productos con inteligencia artificial. Desde Latinoamérica, para el mundo.',
  items: [
    {
      id: 'dentimed',
      name: 'DentiMed',
      body: 'Asistente para odontólogos. Dictas al terminar la atención y DentiMed arma el borrador.',
      link: { label: 'Ver DentiMed', href: '#dentimed' },
    },
    {
      id: 'dicta',
      name: 'Dicta',
      body: 'Escribe con la voz donde esté tu cursor. En Windows y Linux.',
      link: { label: 'Ver Dicta', href: '#dicta' },
    },
    {
      id: 'equipos',
      name: 'Para equipos',
      body: 'Herramientas que preparan el trabajo de cada día en tu equipo.',
      link: { label: 'Ver qué construimos', href: '#que-construimos' },
    },
  ],
} satisfies IntroData;
