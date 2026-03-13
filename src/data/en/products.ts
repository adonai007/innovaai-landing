export const productsSection = {
  badge: 'Our Products',
  title: 'AI Products That Solve Real Problems',
  subtitle: 'Smart tools designed for everyday use.',
};

export const products = [
  {
    name: 'Dicta',
    tagline: 'Speak. Translate. Done.',
    description: 'Press a hotkey in ANY application and dictate with your voice. Dicta transcribes and translates your text with AI-powered accuracy.',
    pills: ['Works in any app', 'Real-time translation', 'Monthly subscription'],
    color: 'dicta' as const,
    cta: 'Download Dicta',
    ctaHref: '/downloads/dIctA-1.0.0-win64.zip',
  },
  {
    name: 'DiarioMed',
    tagline: 'Your medical history, structured and smart.',
    description: 'Record symptoms, consultations, and treatments. DiarioMed organizes your information in FHIR format, the international medical data standard.',
    pills: ['FHIR format', 'Smart history', 'Privacy first'],
    color: 'diariomed' as const,
    cta: 'Discover DiarioMed',
    ctaHref: '#',
  },
];
