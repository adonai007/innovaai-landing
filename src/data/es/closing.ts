import type { ClosingData } from '../types';
import { LINKEDIN_URL } from '../links';

export const closing = {
  title: 'Empecemos por una conversación.',
  body: 'Cuéntanos qué tarea se repite en tu trabajo. En 30 minutos vemos si hay un buen caso para empezar. Si la IA no es la respuesta, también te lo decimos.',
  reassurance: 'Sin costo · Sin compromiso · En español o inglés',
  founder: 'Te responde Adonai Callejas, fundador de InnovaAI.',
  linkedin: { label: 'InnovaAI en LinkedIn', href: LINKEDIN_URL, external: true },
} satisfies ClosingData;
