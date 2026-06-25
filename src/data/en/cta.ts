const whatsappNumber = '59172004767';
const ctaPrimaryMessage =
  'Hi Adonai, I would like to book an AI consulting session for my company.';
const ctaWhatsappMessage =
  'Hi Adonai, I saw InnovaAI and would like to book a consulting session to see how AI could help my company.';

export const cta = {
  title: 'Let Us Talk About How AI Can Help Your Company',
  subtitle:
    'In the first conversation we review your processes, data, and priorities to define where to start without complicating your operation.',
  ctaPrimary: 'Book a Consulting Session',
  ctaPrimaryHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ctaPrimaryMessage)}`,
  ctaWhatsApp: 'Message Us on WhatsApp',
  whatsappNumber,
  whatsappMessage: ctaWhatsappMessage,
};

export const footer = {
  tagline: 'Consulting and applied AI products for Latin America',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'AI Consulting', href: '#servicios' },
        { label: 'Practical automation', href: '#servicios' },
        { label: 'Team adoption', href: '#servicios' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Dicta', href: '#productos' },
        { label: 'DentiMed', href: '#productos' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Pitch Deck', href: '/deck/' },
        // TODO: replace with real /about page when ready
        { label: 'About', href: '#' },
        // TODO: replace with real /blog when ready
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#contacto' },
      ],
    },
  ],
  social: [
    // TODO: replace with founder LinkedIn URL
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, icon: 'whatsapp' },
  ],
  copyright: '© 2026 InnovaAI. All rights reserved.',
  madeWith: 'Made with AI in Latin America',
};
