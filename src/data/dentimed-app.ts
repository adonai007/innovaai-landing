/**
 * DentiMed product UI strings and DentiMed's own example patient, owned by DentiMed (https://dentimed.app).
 * Spanish on /es/ and /en/ because DentiMed is a Spanish-language product. Used only by src/components/dentimed/*.
 */
export const dmApp = {
  time: '10:24',
  patient: { name: 'José Pérez', initials: 'JP', detail: '09:00 · Control y restauración' },
  record: { title: 'Dictado', timer: '00:52', status: 'Grabando · micrófono activo', finish: 'Terminar' },
  /** waveform bar heights in % (static, 40 bars) */
  wave: [18, 32, 46, 28, 60, 74, 52, 38, 66, 88, 70, 44, 30, 56, 80, 92, 64, 40, 26, 48, 72, 58, 34, 22, 50, 84, 76, 54, 36, 24, 42, 68, 90, 62, 38, 28, 46, 30, 20, 14],
  draft: { kicker: 'Borrador de la atención', sections: '6 secciones', badge: 'Borrador', confirm: 'Confirmar', edit: 'Editar' },
  cards: [
    { id: 'procedimientos', icon: 'tooth', title: 'Procedimientos', lines: [
      { label: 'Profilaxis', value: 'Bs 200' },
      { label: 'Composite · pieza 36 · oclusal', value: 'Bs 250' },
    ] },
    { id: 'nota', icon: 'clipboard-text', title: 'Nota clínica',
      text: 'Sensibilidad al frío en zona inferior izquierda. Caries oclusal en 36 sin compromiso pulpar. Se restaura con composite.' },
    { id: 'medicamentos', icon: 'pill', title: 'Medicamentos',
      lines: [{ label: 'Ibuprofeno 400 mg', value: 'c/8 h si hay dolor' }],
      alert: 'Alergia registrada a ibuprofeno. Revisa antes de aprobar.' },
    { id: 'plan', icon: 'list-checks', title: 'Plan y presupuesto',
      lines: [{ label: 'Composite · pieza 46 · distal', value: 'Bs 250' }], text: 'Precio según tu arancel.' },
    { id: 'cobro', icon: 'receipt', title: 'Cobro de hoy', lines: [
      { label: 'Efectivo', value: 'Bs 450' },
      { label: 'Saldo', value: 'Bs 0' },
    ] },
    { id: 'cita', icon: 'calendar-check', title: 'Próxima cita', when: 'Jue 21 · 10:30',
      text: 'Restauración pieza 46 · horario libre en tu agenda', schedule: 'Agendar' },
  ],
  message: {
    to: 'Para: José Pérez',
    text: 'Hola José, soy la Dra. Mónica. Te confirmo tu próxima cita el jueves 21 a las 10:30 para la restauración de la pieza 46. Cualquier duda me escribes.',
    send: 'Enviar',
  },
} as const;
