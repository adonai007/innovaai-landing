import type { AudienceData } from '../types';

export const audience = {
  head: {
    eyebrow: 'Para quién es',
    title: 'Para equipos con trabajo que se repite.',
    intro: 'Funciona mejor cuando hay una tarea concreta en mente y alguien en tu equipo que la vive todos los días.',
  },
  items: [
    'Tu equipo copia, ordena o resume la misma información todos los días.',
    'Tu equipo responde muchas consultas por WhatsApp o correo, y las respuestas se parecen.',
    'Quieres empezar con un caso pequeño y medible.',
    'Necesitas que una persona revise lo importante antes de que se guarde o se envíe.',
  ],
  note: 'Si todavía no tienes un caso claro, la primera conversación sirve para encontrarlo.',
} satisfies AudienceData;
