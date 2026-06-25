export const productsSection = {
  badge: 'In-House Solutions',
  title: 'Products Built from Real Problems',
  subtitle: 'Beyond consulting, we build our own tools to solve concrete day-to-day problems.',
};

export const products = [
  {
    name: 'Dicta',
    tagline: 'Dictate and translate without switching apps.',
    description: 'Dicta helps you write faster with your voice. It works inside your work applications so you can document, respond, and translate with less friction.',
    pills: ['Write by voice', 'Instant translation', 'For daily work'],
    color: 'dicta' as const,
    logo: '/images/logo_dicta.png',
    cta: 'Download Dicta',
    ctaHref: '/downloads/dIctA-1.0.0-win64.zip',
  },
  {
    name: 'DentiMed',
    tagline: 'Less typing for dental clinics.',
    description: 'DentiMed helps turn the patient conversation into organized records, odontograms, and follow-up for dental clinics.',
    pills: ['Voice records', 'Digital odontogram', 'For dental clinics'],
    color: 'diariomed' as const,
    cta: 'Discover DentiMed',
    ctaHref: '/en/dentimed/',
  },
];
