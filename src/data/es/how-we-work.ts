import type { HowWeWorkData } from '../types';

export const howWeWork = {
  head: {
    eyebrow: 'Cómo trabajamos',
    title: 'Primero entendemos el trabajo. Después elegimos la herramienta.',
    intro: 'Un primer caso pequeño, medido con tu equipo. El alcance real lo definimos juntos después de la primera conversación.',
  },
  deliverableLabel: 'Lo que te llevas',
  steps: [
    {
      number: '01',
      title: 'Miramos cómo se trabaja hoy',
      body: 'Conversamos con quienes viven el problema y elegimos una tarea concreta, con una forma clara de medir si mejoró.',
      deliverable: 'Un caso elegido y cómo lo vamos a medir',
      offerName: 'Diagnóstico de procesos',
    },
    {
      number: '02',
      title: 'Probamos con material real',
      body: 'Armamos una primera versión con tus documentos, conversaciones o datos, y la prueba un grupo pequeño de tu equipo.',
      deliverable: 'Una versión de prueba que tu equipo ya puede usar',
      offerName: 'Prototipo con material real',
    },
    {
      number: '03',
      title: 'Lo dejamos funcionando',
      body: 'Medimos, corregimos y capacitamos al equipo hasta que la herramienta sea parte del día a día.',
      deliverable: 'Una herramienta en uso y un equipo que sabe usarla',
      offerName: 'Implementación y adopción',
    },
  ],
  visuals: {
    map: {
      title: 'Así se trabaja hoy',
      rows: ['Llega el pedido por WhatsApp', 'Alguien lo copia a la planilla', 'Se arma la respuesta', 'Se envía al cliente'],
      highlightIndex: 1,
      highlightTag: 'Se repite todo el día',
      measureLabel: 'Lo que vamos a medir',
      measure: 'Cuánto tarda un pedido desde que llega hasta que se responde.',
    },
    prototype: {
      badge: 'Versión de prueba',
      title: 'Pedido de Ana Quispe',
      fields: [
        { label: 'Pedido', value: '12 cajas' },
        { label: 'Entrega', value: 'Este viernes' },
      ],
      missing: { label: 'Forma de pago', value: 'Falta' },
      comment: {
        initials: 'CR',
        name: 'Carla Rojas',
        role: 'Supervisora de ventas',
        text: 'Falta la forma de pago. Casi siempre la piden.',
      },
    },
    inUse: {
      title: 'Pedidos preparados hoy',
      rows: [
        { name: 'Ana Quispe', detail: '12 cajas', status: 'Aprobado', tone: 'ok' },
        { name: 'Jorge Flores', detail: '4 cajas', status: 'Editado y aprobado', tone: 'edited' },
        { name: 'Rosa Choque', detail: '6 unidades', status: 'Aprobado', tone: 'ok' },
        { name: 'Marco Vargas', detail: 'Pedido incompleto', status: 'Devuelto a ventas', tone: 'returned' },
      ],
    },
  },
  caption: 'Datos de demostración.',
} satisfies HowWeWorkData;
