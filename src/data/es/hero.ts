const whatsappNumber = '59172004767';
const diagnosticMessage =
  'Hola Adonai, quiero agendar un diagnóstico gratuito para identificar un caso de IA aplicable en mi empresa.';

export const hero = {
  eyebrow: 'ESTUDIO DE IA APLICADA · BOLIVIA',
  headlineBefore: 'IA Funcionando en tu Negocio en',
  headlineAccent: 'Semanas,',
  headlineAfter: 'No Meses.',
  subheadline:
    'InnovaAI es un estudio boliviano de IA aplicada. Diagnosticamos tu operación, elegimos el caso con mayor impacto y construimos una solución útil con tus procesos, datos y equipo reales.',
  ctaPrimary: 'Agendar Diagnóstico Gratuito',
  ctaPrimaryHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(diagnosticMessage)}`,
  ctaSecondary: 'Ver Productos',
  ctaSecondaryHref: '#productos',
  note: 'Sin costo y sin compromiso — una conversación directa sobre tu operación.',
  metrics: [
    { value: '17+', label: 'años en tecnología empresarial' },
    { value: '2', label: 'productos propios con flujos reales' },
    { value: '100%', label: 'enfoque latinoamericano' },
  ],
  visual: {
    eyebrow: 'PRODUCTOS PROPIOS',
    title: 'Construimos lo que recomendamos.',
    description:
      'Dicta y DentiMed convierten voz y procesos cotidianos en trabajo terminado.',
    dictaLabel: 'Dicta · Voz a Texto',
    dictaAlt: 'Vista real de Dicta, producto de dictado por voz de InnovaAI',
    dentimedLabel: 'DentiMed · Cierre Clínico',
    dentimedAlt: 'Pantalla real de grabación móvil de DentiMed',
    status: 'IA aplicada a trabajo real',
  },
};
