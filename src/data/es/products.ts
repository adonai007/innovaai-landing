import type { ProductsData } from '../types';
import { DENTIMED_URL, DICTA_URL } from '../links';

export const products = {
  head: {
    eyebrow: 'Nuestros productos',
    title: 'Construimos lo que recomendamos.',
    intro: 'Dicta y DentiMed son nuestros. Hacerlos nos enseña lo que de verdad cuesta llevar IA al trabajo diario: los errores, la privacidad y que la gente quiera usarla.',
  },
  dentimed: {
    name: 'DentiMed',
    eyebrow: 'Para odontólogos',
    tagline: 'Tu asistente prepara la ficha, tú confirmas.',
    body: 'Dictas al terminar la atención y DentiMed prepara el borrador de la nota clínica, los procedimientos por pieza, el cobro, el presupuesto y la próxima cita. Nada se guarda sin tu aprobación.',
    bullets: [
      'Dictado desde la ficha del paciente',
      'Procedimientos por pieza y superficie, con tu arancel',
      'Próxima cita en un horario libre, que reservas con un toque',
      'Mensaje de WhatsApp listo, que envías tú',
    ],
    meta: 'Desde el navegador del teléfono · Piloto para fundadores',
    cta: { label: 'Conocer DentiMed', href: DENTIMED_URL, external: true, srHint: '(abre dentimed.app en una pestaña nueva)' },
    imageAlt: 'Una odontóloga saluda a una paciente en la recepción mientras otro paciente sonríe mirando su teléfono.',
    chip: { title: 'Borrador de la atención', detail: 'José Pérez · pieza 36', draft: 'Borrador', approved: 'Aprobado' },
  },
  dicta: {
    name: 'Dicta',
    eyebrow: 'Dictado por voz',
    tagline: 'Hablas y el texto aparece donde está tu cursor.',
    body: 'Una aplicación liviana para tu computadora. Mantienes F9, hablas y el texto se escribe en la aplicación que tengas abierta.',
    bullets: [
      'Mantén F9 para hablar o tócalo dos veces para manos libres',
      'Funciona donde puedas escribir',
      'Quita las muletillas al transcribir',
      'Español e inglés',
    ],
    meta: 'Para Windows y Linux · Empieza gratis',
    cta: { label: 'Conocer Dicta', href: DICTA_URL, external: true, srHint: '(abre el sitio de Dicta en una pestaña nueva)' },
    mock: {
      windowTitle: 'Nuevo mensaje',
      to: 'Para: Equipo de ventas',
      subject: 'Asunto: Pedido del viernes',
      text: 'Hola equipo, el pedido del viernes sale a las 10:00. Por favor confirmen el stock antes del jueves.',
      pillIdle: 'Presiona F9 y habla',
      pillListening: 'Escuchando... (F9)',
    },
  },
  caption: 'Datos de demostración.',
  next: {
    title: 'El próximo puede ser para tu equipo.',
    body: 'Si una tarea se repite todos los días en tu empresa, conversemos.',
    cta: 'Cuéntanos tu caso',
  },
} satisfies ProductsData;
