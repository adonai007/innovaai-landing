import type { CinemaData } from '../types';

export const cinema = {
  label: 'Del trabajo manual a la IA aplicada',
  intro: 'Una nueva forma de trabajar',
  skip: { label: 'Ir a los productos', href: '#productos' },
  motionOff: 'Pausar movimiento',
  motionOn: 'Activar movimiento',
  scroll: 'Avanza para transformar',
  concept: 'Una visión de lo que podemos diseñar contigo.',
  scenes: [
    {
      id: 'rutina',
      number: '01',
      eyebrow: 'El punto de partida',
      title: 'La ciudad avanza.\nTu trabajo también puede.',
      description: 'Buscar. Copiar. Volver a escribir. Las pequeñas tareas repetidas ocupan el espacio de las grandes ideas.',
      alt: 'Una persona trabaja con documentos en una oficina frente a una ciudad iluminada.',
      note: 'Tus procesos son el punto de partida.',
    },
    {
      id: 'voz',
      number: '02',
      eyebrow: 'De tu voz a la acción',
      title: 'Una instrucción.\nTodo empieza a conectar.',
      description: 'Tu voz aporta el contexto. Las automatizaciones conectan las tareas. Los agentes preparan el siguiente paso.',
      alt: 'Ondas verdes y azules conectan la voz con flujos de trabajo en la misma oficina.',
      note: 'Voz · Contexto · Automatización',
    },
    {
      id: 'criterio',
      number: '03',
      eyebrow: 'Tecnología con propósito',
      title: 'Menos pasos.\nMás espacio para decidir.',
      description: 'Diseñamos el flujo alrededor de tu equipo: información organizada, trabajo preparado y decisiones que siguen siendo tuyas.',
      alt: 'La oficina transformada, con información organizada y una persona revisando el resultado.',
      note: 'La IA prepara. Tú revisas y confirmas.',
    },
  ],
} satisfies CinemaData;
