import type { DentimedData } from '../types';
import { DENTIMED_URL, waHref } from '../links';

export const dentimed = {
  lockup: {
    name: 'DentiMed',
    title: 'Termina la atención\ncon la ficha lista.',
    subhead: 'Cuentas lo que hiciste. DentiMed arma el borrador.',
    meta: 'Para odontólogos · Desde el navegador del teléfono · Piloto para fundadores',
    metaSmall: 'Para odontólogos · Piloto para fundadores',
  },
  primary: { label: 'Conocer DentiMed', href: DENTIMED_URL, external: true, srHint: '(abre dentimed.app en una pestaña nueva)' },
  demo: {
    label: 'Pedir una demo',
    href: waHref('Hola, soy odontólogo/a y quiero ver una demo de DentiMed.'),
    external: true,
    srHint: '(abre WhatsApp en una pestaña nueva)',
  },
  phonesLabel: 'Dos pantallas de DentiMed: el dictado de una atención y el borrador con procedimientos, nota clínica y medicamentos, listo para revisar.',
  photoAlt: 'Una odontóloga dicta la atención en su teléfono, junto al sillón dental.',
  features: {
    title: 'De la voz a la ficha.',
    items: [
      { id: 'dictado', label: 'Dictado', title: 'Dictas como hablas.',
        body: 'Grabas desde la ficha del paciente y pausas cuando lo necesites. DentiMed transcribe con terminología dental y usa los precios de tu arancel.' },
      { id: 'revision', label: 'Revisión', title: 'Tú confirmas. Siempre.',
        body: 'Todo llega como borrador para que lo revises, corrijas y apruebes. Si un medicamento choca con una alergia registrada, ves una alerta antes de aprobar.' },
      { id: 'cita', label: 'Próxima cita', title: 'La próxima cita y el mensaje, listos.',
        body: 'DentiMed propone un horario libre de tu agenda y lo reservas con un toque. El mensaje de WhatsApp queda prellenado y lo envías tú cuando tocas Enviar.' },
    ],
    security: {
      label: 'Seguridad',
      title: 'Los datos de tus pacientes, bajo reglas claras.',
      items: ['Aislamiento por clínica', 'Registro de auditoría', 'Libro financiero de solo agregar', 'Revisión humana obligatoria'],
    },
    more: { label: 'Conoce todo lo que hace DentiMed', href: DENTIMED_URL, external: true, srHint: '(abre dentimed.app en una pestaña nueva)' },
  },
} satisfies DentimedData;
