export const productsSection = {
  badge: 'Soluciones Propias',
  title: 'Productos que Nacen de Problemas Reales',
  subtitle: 'Además de consultoría, construimos herramientas propias para resolver dolores concretos del día a día.',
};

export const products = [
  {
    name: 'Dicta',
    tagline: 'Dicta y traduce sin cambiar de aplicación.',
    description: 'Dicta ayuda a escribir más rápido usando la voz. Funciona dentro de tus aplicaciones de trabajo para documentar, responder y traducir con menos fricción.',
    pills: ['Escribe por voz', 'Traduce al instante', 'Para trabajo diario'],
    color: 'dicta' as const,
    logo: '/images/logo_dicta.png',
    cta: 'Descargar Dicta',
    ctaHref: '/downloads/dIctA-1.0.0-win64.zip',
  },
  {
    name: 'DentiMed',
    tagline: 'Menos escritura para clínicas dentales.',
    description: 'DentiMed ayuda a convertir la conversación con el paciente en registros ordenados, odontograma y seguimiento para clínicas dentales.',
    pills: ['Historias por voz', 'Odontograma digital', 'Para clínicas dentales'],
    color: 'diariomed' as const,
    cta: 'Descubre DentiMed',
    ctaHref: '/es/dentimed/',
  },
];
