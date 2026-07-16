export const productsSection = {
  badge: 'IN-HOUSE PRODUCTS',
  titleBefore: 'Proof that We',
  titleAccent: 'Execute',
  subtitle:
    'We do more than recommend AI. We build complete products, test them with users, and learn from every real workflow.',
};

export const products = [
  {
    name: 'Dicta',
    eyebrow: 'PERSONAL PRODUCTIVITY',
    tagline: 'You speak. Text appears wherever your cursor is.',
    description:
      'Voice dictation for Windows that works inside your applications. Press F9, choose the processing level, and keep working without switching windows.',
    bullets: [
      'Push-to-talk and hands-free modes',
      'Raw, Clean, Polish, and Smart modes',
      'Spanish and English with translation',
      'Lightweight native Windows client',
    ],
    meta: ['WINDOWS', 'ES + EN', '4 MODES'],
    color: 'dicta' as const,
    cta: 'Discover Dicta',
    ctaHref: 'https://dicta-web.onrender.com',
    image: '/images/landing/dicta-product.png',
    imageAlt: 'Real landing page and product demonstration for Dicta',
    visualLabel: 'DICTATION IN ANY APP',
  },
  {
    name: 'DentiMed',
    eyebrow: 'HEALTHCARE · DENTISTRY',
    tagline: 'From one voice note to a visit ready to close.',
    description:
      'A mobile-first assistant for dentists. The doctor dictates what happened and reviews a draft with procedures, payment, estimate, next appointment, and follow-up.',
    bullets: [
      'Dictation between patients',
      'Reviewable clinical draft',
      'Structured payments and estimates',
      'Follow-up prepared for WhatsApp',
    ],
    meta: ['MOBILE-FIRST', 'HUMAN REVIEW', 'DENTAL WORKFLOW'],
    color: 'diariomed' as const,
    cta: 'Explore DentiMed',
    ctaHref: '/en/dentimed/',
    image: '/images/landing/dentist-dictating.webp',
    imageAlt: 'Dentist dictating a voice note between patients',
    secondaryImage: '/images/landing/dentimed-grabacion.png',
    secondaryImageAlt: 'Real DentiMed recording screen',
    tertiaryImage: '/images/landing/dentimed-borrador.png',
    tertiaryImageAlt: 'Real DentiMed draft with procedures and payment',
    visualLabel: 'ASSISTED CLINICAL CLOSE',
  },
];
