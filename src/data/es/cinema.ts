import type { CinemaData } from '../types';

export const cinema = {
  label: 'El equipo',
  title: 'Menos repetición.\nMás criterio.',
  leadIn: 'Lo que aprendimos al construir DentiMed y Dicta, lo llevamos al trabajo de tu equipo.',
  body: 'Una visión, en tres escenas, de lo que podemos diseñar contigo.',
  skip: { label: 'Saltar a las herramientas', href: '#que-construimos' },
  pause: 'Pausar movimiento',
  resume: 'Reanudar movimiento',
  scenes: [
    {
      id: 'rutina',
      label: 'Rutina',
      title: 'La ciudad avanza.\nTu trabajo también puede.',
      line: 'Buscar. Copiar. Volver a escribir. Las tareas repetidas ocupan el tiempo de las buenas ideas.',
      alt: 'Una persona trabaja con documentos en una oficina frente a una ciudad iluminada.',
    },
    {
      id: 'voz',
      label: 'Voz',
      title: 'Una instrucción.\nTodo empieza a conectar.',
      line: 'Tu voz da el contexto. El software ordena la información y deja listo el siguiente paso.',
      alt: 'Ondas verdes y azules conectan la voz con el trabajo en la misma oficina.',
    },
    {
      id: 'criterio',
      label: 'Criterio',
      title: 'Menos pasos.\nMás espacio para decidir.',
      line: 'La información llega en orden y tú eliges el siguiente paso.',
      alt: 'La misma oficina, con la información en orden y una persona revisando el resultado.',
    },
  ],
} satisfies CinemaData;
