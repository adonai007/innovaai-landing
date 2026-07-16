const whatsappNumber = '59172004767';
const whatsappMessage =
  'Hi Adonai, I would like to book a free diagnostic session to identify a practical AI use case for my company.';
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const cta = {
  eyebrow: 'FIRST STEP',
  titleBefore: 'Find the AI Use Case that Is',
  titleAccent: 'Actually Worth It.',
  subtitle:
    'In a 30-minute conversation, we review your operation, identify opportunities, and determine whether there is a strong place to start.',
  ctaPrimary: 'Book on WhatsApp',
  ctaPrimaryHref: whatsappHref,
  ctaSecondary: 'View Pitch Deck',
  ctaSecondaryHref: '/deck/',
  note: 'No cost · No commitment · In Spanish or English',
  whatsappNumber,
  whatsappMessage,
};

export const footer = {
  tagline:
    'Applied AI consulting and products for companies that want concrete results, not more abstraction.',
  location: 'La Paz, Bolivia · Latin America',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Implementation', href: '#servicios' },
        { label: 'Products', href: '#productos' },
        { label: 'Process', href: '#proceso' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Dicta', href: 'https://dicta-web.onrender.com' },
        { label: 'DentiMed', href: '/en/dentimed/' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Free Diagnostic', href: whatsappHref },
        { label: 'Pitch Deck', href: '/deck/' },
        { label: 'Español', href: '/es/' },
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
  copyright: '© 2026 InnovaAI. All rights reserved.',
  madeWith: 'Applied AI, Not Theory',
};
