export const productsSection = {
  badge: 'Nuestros Productos',
  title: 'Productos de IA que Resuelven Problemas Reales',
  subtitle: 'Herramientas inteligentes diseñadas para el día a día.',
};

export const products = [
  {
    name: 'Dicta',
    tagline: 'Habla. Traduce. Listo.',
    description: 'Presiona un atajo de teclado en CUALQUIER aplicación y dicta con tu voz. Dicta transcribe y traduce tu texto con precisión impulsada por IA.',
    pills: ['Funciona en toda app', 'Traducción en tiempo real', 'Suscripción mensual'],
    color: 'dicta' as const,
    logo: '/images/logo_dicta.png',
    cta: 'Descargar Dicta',
    ctaHref: '/downloads/dIctA-1.0.0-win64.zip',
  },
  {
    name: 'DiarioMed',
    tagline: 'Tu historial médico, estructurado e inteligente.',
    description: 'Registra síntomas, consultas y tratamientos. DiarioMed organiza tu información en formato FHIR, el estándar internacional de datos médicos.',
    pills: ['Formato FHIR', 'Historial inteligente', 'Privacidad primero'],
    color: 'diariomed' as const,
    cta: 'Descubre DiarioMed',
    ctaHref: '#',
  },
];
