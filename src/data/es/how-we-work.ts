import type { HowWeWorkData } from '../types';

export const howWeWork = {
  label: 'Cómo trabajamos',
  title: 'Primero el trabajo.\nDespués la herramienta.',
  leadIn: 'Empezamos con una tarea concreta.',
  body: 'La medimos con tu equipo y avanzamos en tres pasos.',
  deliverableLabel: 'Lo que te llevas',
  steps: [
    { number: '01', title: 'Entendemos el trabajo.',
      body: 'Conversamos con quienes hacen el trabajo, elegimos una tarea concreta y acordamos cómo medir si mejora.',
      deliverable: 'Un caso elegido y una forma de medirlo.', offerName: 'Diagnóstico de procesos' },
    { number: '02', title: 'Probamos con material real.',
      body: 'Construimos una primera versión con tus documentos o datos, y la usa un grupo pequeño de tu equipo.',
      deliverable: 'Una versión que tu equipo ya puede usar.', offerName: 'Prototipo con material real' },
    { number: '03', title: 'Lo dejamos en uso.',
      body: 'Medimos, ajustamos y acompañamos a tu equipo hasta que la herramienta sea parte del día.',
      deliverable: 'Una herramienta en uso y un equipo que la domina.', offerName: 'Implementación y adopción' },
  ],
} satisfies HowWeWorkData;
