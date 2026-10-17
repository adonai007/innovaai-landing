import type { PrinciplesData } from '../types';

export const principles = {
  head: { eyebrow: 'Cómo pensamos', title: 'Cuatro reglas para cada proyecto.' },
  items: [
    {
      icon: 'flow-arrow',
      title: 'Primero el proceso',
      body: 'La herramienta correcta aparece después de entender el trabajo. A veces la primera mejora es ordenar el flujo, no sumar IA.',
    },
    {
      icon: 'user-check',
      title: 'La IA prepara, una persona decide',
      body: 'Diseñamos puntos de revisión claros. Lo importante pasa por alguien de tu equipo antes de guardarse o enviarse.',
    },
    {
      icon: 'lock-key',
      title: 'Tus datos, con reglas claras',
      body: 'Desde el diseño definimos quién accede, qué se guarda, por cuánto tiempo y con qué proveedores. No todo necesita guardarse.',
    },
    {
      icon: 'map-pin',
      title: 'Pensado para cómo se trabaja aquí',
      body: 'En español, con los canales que tu equipo ya usa, como WhatsApp, y con un alcance que tenga sentido para tu presupuesto.',
    },
  ],
} satisfies PrinciplesData;
