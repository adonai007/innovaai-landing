export const productsSection = {
  badge: 'PRODUCTOS PROPIOS',
  titleBefore: 'Prueba de que',
  titleAccent: 'Ejecutamos',
  subtitle:
    'No sólo recomendamos IA. Construimos productos completos, los probamos con usuarios y aprendemos de cada flujo real.',
};

export const products = [
  {
    name: 'Dicta',
    eyebrow: 'PRODUCTIVIDAD PERSONAL',
    tagline: 'Hablas. El texto aparece donde está tu cursor.',
    description:
      'Dictado por voz para Windows que funciona dentro de tus aplicaciones. Usa F9, elige el nivel de procesamiento y sigue trabajando sin cambiar de ventana.',
    bullets: [
      'Push-to-talk y manos libres',
      'Modos Crudo, Limpio, Pulido e Inteligente',
      'Español e inglés con traducción',
      'Cliente nativo ligero para Windows',
    ],
    meta: ['WINDOWS', 'ES + EN', '4 MODOS'],
    color: 'dicta' as const,
    cta: 'Conocer Dicta',
    ctaHref: 'https://dicta-web.onrender.com',
    image: '/images/landing/dicta-product.png',
    imageAlt: 'Landing y demostración real del producto Dicta',
    visualLabel: 'DICTADO EN CUALQUIER APP',
  },
  {
    name: 'DentiMed',
    eyebrow: 'SALUD · ODONTOLOGÍA',
    tagline: 'De una nota de voz a una atención lista para cerrar.',
    description:
      'Un asistente mobile-first para odontólogos. La doctora dicta lo ocurrido y revisa un borrador con procedimientos, cobro, presupuesto, próxima cita y seguimiento.',
    bullets: [
      'Dictado entre paciente y paciente',
      'Borrador clínico revisable',
      'Cobros y presupuestos estructurados',
      'Seguimiento preparado para WhatsApp',
    ],
    meta: ['MOBILE-FIRST', 'REVISIÓN HUMANA', 'FLUJO DENTAL'],
    color: 'diariomed' as const,
    cta: 'Explorar DentiMed',
    ctaHref: '/es/dentimed/',
    image: '/images/landing/dentist-dictating.webp',
    imageAlt: 'Odontóloga dictando una nota de voz entre pacientes',
    secondaryImage: '/images/landing/dentimed-grabacion.png',
    secondaryImageAlt: 'Pantalla real de grabación de DentiMed',
    tertiaryImage: '/images/landing/dentimed-borrador.png',
    tertiaryImageAlt: 'Borrador real con cobro y procedimientos en DentiMed',
    visualLabel: 'CIERRE CLÍNICO ASISTIDO',
  },
];
