import type { ExampleData } from '../types';

export const example = {
  head: {
    eyebrow: "Un ejemplo",
    title: "Así trabaja una herramienta que construimos.",
    intro: "Cada empresa es distinta, pero el patrón se repite. Llega el trabajo, la IA prepara un borrador y una persona de tu equipo revisa antes de que algo se guarde o se envíe.",
  },
  steps: [
    { number: "01", title: "Llega el trabajo", body: "Un mensaje de WhatsApp, una factura en PDF o una nota de voz después de una visita. Todo entra a una sola bandeja." },
    { number: "02", title: "La IA prepara un borrador", body: "Lee lo que llegó y arma la respuesta, el registro o el informe con los campos que tu empresa ya usa." },
    { number: "03", title: "Tu equipo revisa y corrige", body: "Cada borrador muestra de dónde salió. La persona ajusta lo que haga falta y aprueba." },
    { number: "04", title: "Se guarda o se envía, con registro", body: "Lo aprobado se guarda o queda listo para que alguien lo envíe. Queda anotado quién aprobó y cuándo." },
  ],
  caption: "Ejemplo ilustrativo con datos de demostración.",
  srSummary: "Demostración: a una bandeja llegan un mensaje de WhatsApp, una factura y una nota de voz. La herramienta prepara un borrador para cada uno. Una persona corrige la respuesta, la aprueba y la envía, y después aprueba los otros dos.",
  inbox: {
    title: "Bandeja de operaciones",
    tabPending: "Pendientes",
    tabApproved: "Aprobados",
    chips: { new: "Nuevo", draft: "Borrador", approved: "Aprobado", sent: "Enviado" },
    rows: [
      { id: "wa", icon: "whatsapp-logo", channel: "WhatsApp", from: "Sofía Mamani", preview: "Hola, ¿pueden entregar las 20 cajas el viernes?", time: "09:12", draftSummary: "Respuesta sugerida lista" },
      { id: "pdf", icon: "file-pdf", channel: "Factura PDF", from: "Proveedor de embalajes", preview: "Factura_0412.pdf", time: "09:40", draftSummary: "Registro: Bs 1.240,00 · vence 30/10" },
      { id: "voice", icon: "microphone", channel: "Nota de voz", from: "Marco Flores", preview: "Visita a cliente, 1:12", time: "10:05", draftSummary: "Informe: reponer 3 productos" },
    ],
    idle: "Aquí aparece el borrador de cada elemento.",
    replyLabel: "Respuesta sugerida",
    preparing: "Preparando borrador",
    replyBefore: "Hola Sofía, sí. Podemos entregar las 20 cajas el viernes ",
    replyOld: "por la mañana",
    replyNew: "después de las 10:00",
    replyAfter: ". ¿Confirmamos la dirección de siempre?",
    source: "De dónde sale: el mensaje de Sofía y la agenda de entregas.",
    edit: "Editar",
    approve: "Aprobar",
    send: "Enviar por WhatsApp",
    sent: "Mensaje enviado por Carla",
    log: "3 de 3 revisados · Aprobado por Carla, 10:12",
  },
} satisfies ExampleData;
