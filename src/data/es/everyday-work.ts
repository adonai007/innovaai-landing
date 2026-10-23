import type { EverydayWorkData } from '../types';

export const everydayWork = {
  title: 'Herramientas que preparan el trabajo de cada día.',
  intro: 'Cada herramienta empieza por una tarea concreta de tu equipo. Estos son ejemplos de lo que podemos construir contigo.',
  items: [
    { icon: 'microphone', title: 'De nota de voz a registro.',
      body: 'Cuentas lo que pasó y la herramienta llena los campos que usa tu empresa. Alguien lo revisa antes de guardar.' },
    { icon: 'list-checks', title: 'Reuniones que terminan en tareas.',
      body: 'De una reunión grabada con permiso salen un resumen y tareas propuestas, cada una con la frase de donde salió.' },
    { icon: 'magnifying-glass', title: 'Respuestas desde tus documentos.',
      body: 'Tu equipo pregunta con sus palabras y recibe la respuesta junto a su fuente.' },
    { icon: 'tray-arrow-down', title: 'Documentos en orden.',
      body: 'Solicitudes, formularios y correos llegan clasificados y resumidos a la persona correcta.' },
    { icon: 'chat-circle-text', title: 'Respuestas listas para tus clientes.',
      body: 'Las consultas frecuentes reciben un borrador con la información de tu empresa. Tu equipo lo ajusta y lo envía.' },
    { icon: 'chalkboard-teacher', title: 'Un equipo que sabe usar IA.',
      body: 'Talleres prácticos con las herramientas que ya usas y reglas claras sobre qué datos usar.' },
  ],
  cta: 'Conversemos sobre tu caso',
} satisfies EverydayWorkData;
