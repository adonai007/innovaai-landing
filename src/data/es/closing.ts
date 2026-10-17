import type { ClosingData } from '../types';
import { LINKEDIN_URL } from '../links';

export const closing = {
  eyebrow: 'Primer paso',
  title: 'Empecemos por una tarea concreta.',
  body: 'En una conversación de 30 minutos revisamos tu operación y vemos si hay un buen caso para empezar. Si la IA no es la respuesta, también te lo decimos.',
  reassurance: 'Sin costo · Sin compromiso · En español o inglés',
  founder: { text: 'Te responde Adonai Callejas, fundador de InnovaAI.' },
  linkedin: { label: 'Ver InnovaAI en LinkedIn', href: LINKEDIN_URL, external: true },
  stepsTitle: 'Qué pasa en esos 30 minutos',
  steps: [
    'Nos cuentas qué tarea se repite y quién la hace.',
    'Vemos juntos si hay un buen caso para empezar y cómo medirlo.',
    'Si tiene sentido, te proponemos un primer paso pequeño.',
  ],
} satisfies ClosingData;
