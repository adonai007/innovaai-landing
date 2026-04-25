const whatsappNumber = '59172004767';
const ctaPrimaryMessage =
  'Hola Adonai, quiero agendar una consulta gratuita de IA para mi empresa.';
const ctaWhatsappMessage =
  'Hola Adonai, vi InnovaAI y me gustaria conversar sobre IA para mi empresa.';

export const cta = {
  title: '¿Listo para transformar tu negocio con IA?',
  subtitle:
    'Agenda una consulta gratuita y descubre cómo la inteligencia artificial puede impulsar tus resultados.',
  ctaPrimary: 'Agenda tu Consulta Gratuita',
  ctaPrimaryHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ctaPrimaryMessage)}`,
  ctaWhatsApp: 'Escríbenos por WhatsApp',
  whatsappNumber,
  whatsappMessage: ctaWhatsappMessage,
};

export const footer = {
  tagline: 'Inteligencia Artificial para Latinoamérica',
  columns: [
    {
      title: 'Servicios',
      links: [
        { label: 'Estrategia de IA', href: '#servicios' },
        { label: 'Desarrollo', href: '#servicios' },
        { label: 'Capacitación', href: '#servicios' },
      ],
    },
    {
      title: 'Productos',
      links: [
        { label: 'Dicta', href: '#productos' },
        { label: 'DiarioMed', href: '#productos' },
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
