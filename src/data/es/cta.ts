const whatsappNumber = '59172004767';
const ctaPrimaryMessage =
  'Hola Adonai, quiero agendar una consultoría de IA para mi empresa.';
const ctaWhatsappMessage =
  'Hola Adonai, vi InnovaAI y me gustaria agendar una consultoría para ver cómo aplicar IA en mi empresa.';

export const cta = {
  title: 'Hablemos de Cómo Usar IA en tu Empresa',
  subtitle:
    'En una primera conversación revisamos tus procesos, tus datos y tus prioridades para definir por dónde empezar sin complicar tu operación.',
  ctaPrimary: 'Agendar Consultoría',
  ctaPrimaryHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ctaPrimaryMessage)}`,
  ctaWhatsApp: 'Escríbenos por WhatsApp',
  whatsappNumber,
  whatsappMessage: ctaWhatsappMessage,
};

export const footer = {
  tagline: 'Consultoría y productos de IA aplicada para Latinoamérica',
  columns: [
    {
      title: 'Servicios',
      links: [
        { label: 'Consultoría en IA', href: '#servicios' },
        { label: 'Automatización práctica', href: '#servicios' },
        { label: 'Adopción del equipo', href: '#servicios' },
      ],
    },
    {
      title: 'Productos',
      links: [
        { label: 'Dicta', href: '#productos' },
        { label: 'DentiMed', href: '#productos' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Pitch Deck', href: '/deck/' },
        // TODO: replace with real /nosotros page when ready
        { label: 'Nosotros', href: '#' },
        // TODO: replace with real /blog when ready
        { label: 'Blog', href: '#' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
  ],
  social: [
    // TODO: replace with founder LinkedIn URL
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, icon: 'whatsapp' },
  ],
  copyright: '© 2026 InnovaAI. Todos los derechos reservados.',
  madeWith: 'Hecho con IA en Latinoamérica',
};
