import type { DictaData } from '../types';
import { DICTA_URL } from '../links';

export const dicta = {
  lockup: {
    name: 'Dicta',
    title: 'Escribe con la voz.\nDonde esté tu cursor.',
    subhead: 'Mantén F9, habla y el texto aparece en la aplicación que tengas abierta.',
    meta: 'Para Windows y Linux · Empieza gratis',
  },
  cta: { label: 'Conocer Dicta', href: DICTA_URL, external: true, srHint: '(abre el sitio de Dicta en una pestaña nueva)' },
  mock: {
    windowTitle: 'Nota',
    text: 'Hablo y el texto aparece aquí, donde está el cursor.',
    pillIdle: 'Mantén F9 y habla',
    pillListening: 'Escuchando… (F9)',
    key: 'F9',
  },
  features: [
    { title: 'Una tecla.', body: 'Mantén F9 para hablar o tócala dos veces para dictar con manos libres.' },
    { title: 'Sin muletillas.', body: 'Quita las muletillas al transcribir, para que el texto se lea limpio.' },
    { title: 'Español e inglés.', body: 'Funciona en los dos idiomas, en Windows y Linux.' },
  ],
} satisfies DictaData;
