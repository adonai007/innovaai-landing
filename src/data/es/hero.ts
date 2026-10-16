import type { HeroData } from '../types';

export const hero = {
  eyebrow: 'Estudio de IA aplicada en Bolivia',
  title: 'La IA prepara el trabajo. Tu equipo decide.',
  lead: 'Elegimos contigo la tarea donde tu equipo pierde más tiempo y construimos una herramienta que la prepara: borradores, registros y respuestas listos para revisar. La decisión sigue en manos de tu gente.',
  ctaSecondary: { label: 'Ver un ejemplo', href: '#ejemplo' },
  reassurance: 'La primera conversación dura 30 minutos, no tiene costo y puede ser en español o inglés.',
  photoAlt: 'Una persona señala un diagrama de procesos dibujado en papel, junto a una computadora portátil.',
  draft: {
    ariaLabel: 'Ejemplo con datos de demostración: una nota de voz de ventas se convierte en un pedido listo para revisar.',
    badge: 'Preparado por la IA',
    statusDraft: 'Borrador',
    statusApproved: 'Aprobado',
    title: 'Pedido de Ana Quispe',
    source: 'De una nota de voz de Luis · 0:42',
    fields: [
      { label: 'Pedido', value: '12 cajas' },
      { label: 'Entrega', value: 'Este viernes' },
      { label: 'Por confirmar', value: 'Precio de la lista de octubre' },
    ],
    approve: 'Aprobar',
    approved: 'Aprobado por ti',
    undo: 'Deshacer',
    approvedNote: 'Listo. El pedido quedó registrado.',
  },
} satisfies HeroData;
