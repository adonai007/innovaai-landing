import type { UseCasesData } from '../types';

export const useCases = {
  head: {
    eyebrow: 'Qué construimos',
    title: 'Herramientas que preparan el trabajo de cada día.',
    intro: 'Ejemplos de lo que podemos construir contigo. Todos siguen la misma regla: la IA prepara y una persona revisa.',
  },
  featured: {
    icon: 'microphone',
    title: 'Notas de voz que se vuelven registros',
    body: 'Quien está en terreno o atiende a un cliente cuenta lo que pasó, y la herramienta arma el registro con los campos que tu empresa usa. Alguien lo revisa antes de guardar.',
    footnote: 'Es el mismo principio de DentiMed, nuestro asistente para odontólogos.',
    demo: {
      audioLabel: 'Nota de voz · 0:48',
      recordTitle: 'Registro de visita',
      rows: [
        { label: 'Cliente', value: 'Tienda de doña Rosa' },
        { label: 'Qué se hizo', value: 'Revisión de inventario' },
        { label: 'Próximo paso', value: 'Llamar el lunes' },
      ],
      chip: 'Para revisar',
    },
  },
  items: [
    {
      icon: 'list-checks',
      title: 'Reuniones que terminan en tareas',
      body: 'De una conversación grabada con permiso salen un resumen y tareas propuestas, cada una con la frase de donde salió. Una persona acepta o descarta.',
    },
    {
      icon: 'magnifying-glass',
      title: 'Respuestas sobre tus propios documentos',
      body: 'Manuales, políticas y reportes. Tu equipo pregunta con sus palabras y recibe la respuesta junto al documento de donde sale.',
    },
    {
      icon: 'tray-arrow-down',
      title: 'Documentos que llegan ordenados',
      body: 'Solicitudes, formularios o correos se clasifican y resumen para que la persona correcta los vea primero.',
    },
    {
      icon: 'chat-circle-text',
      title: 'Borradores para atender clientes',
      body: 'Las respuestas frecuentes quedan preparadas con la información correcta. Tu equipo las ajusta y las envía.',
    },
  ],
  wide: {
    icon: 'chalkboard-teacher',
    title: 'Un equipo que sabe usar IA',
    body: 'Talleres prácticos con las herramientas que tu equipo ya usa y reglas claras sobre qué datos se pueden usar y cuáles no.',
  },
  caption: 'Datos de demostración.',
} satisfies UseCasesData;
