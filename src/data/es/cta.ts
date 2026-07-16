const whatsappNumber = '59172004767';
const whatsappMessage =
  'Hola Adonai, quiero agendar un diagnóstico gratuito para identificar un caso de IA aplicable en mi empresa.';
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const cta = {
  eyebrow: 'PRIMER PASO',
  titleBefore: 'Encuentra el Caso de IA que',
  titleAccent: 'Sí Vale la Pena.',
  subtitle:
    'En una conversación de 30 minutos revisamos tu operación, detectamos oportunidades y definimos si existe un buen punto de partida.',
  ctaPrimary: 'Agendar por WhatsApp',
  ctaPrimaryHref: whatsappHref,
  ctaSecondary: 'Ver Pitch Deck',
  ctaSecondaryHref: '/deck/',
  note: 'Sin costo · Sin compromiso · En español o inglés',
  whatsappNumber,
  whatsappMessage,
};

export const footer = {
  tagline:
    'Consultoría y productos de IA aplicada para empresas que quieren resultados concretos, no más abstracción.',
  location: 'La Paz, Bolivia · Latinoamérica',
  columns: [
    {
      title: 'Explorar',
      links: [
        { label: 'Implementación', href: '#servicios' },
        { label: 'Productos', href: '#productos' },
        { label: 'Proceso', href: '#proceso' },
      ],
    },
    {
      title: 'Productos',
      links: [
        { label: 'Dicta', href: 'https://dicta-web.onrender.com' },
        { label: 'DentiMed', href: '/es/dentimed/' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: 'Diagnóstico Gratuito', href: whatsappHref },
        { label: 'Pitch Deck', href: '/deck/' },
        { label: 'English', href: '/en/' },
      ],
    },
  ],
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/innovai-click/',
      icon: 'linkedin',
    },
    { label: 'WhatsApp', href: whatsappHref, icon: 'whatsapp' },
  ],
  copyright: '© 2026 InnovaAI. Todos los derechos reservados.',
  madeWith: 'IA Aplicada, No Teórica',
};
