const whatsappNumber = '59172004767';
const ctaPrimaryMessage =
  'Hi Adonai, I would like to schedule a free AI consultation for my company.';
const ctaWhatsappMessage =
  'Hi Adonai, I saw InnovaAI and would like to talk about AI for my company.';

export const cta = {
  title: 'Ready to Transform Your Business with AI?',
  subtitle:
    'Book a free consultation and discover how artificial intelligence can boost your results.',
  ctaPrimary: 'Book Your Free Consultation',
  ctaPrimaryHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ctaPrimaryMessage)}`,
  ctaWhatsApp: 'Message Us on WhatsApp',
  whatsappNumber,
  whatsappMessage: ctaWhatsappMessage,
};

export const footer = {
  tagline: 'Artificial Intelligence for Latin America',
  columns: [
    {
      title: 'Services',
      links: [
        { label: 'AI Strategy', href: '#servicios' },
        { label: 'Development', href: '#servicios' },
        { label: 'Training', href: '#servicios' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Dicta', href: '#productos' },
        { label: 'DiarioMed', href: '#productos' },
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
