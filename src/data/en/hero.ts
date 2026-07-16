const whatsappNumber = '59172004767';
const diagnosticMessage =
  'Hi Adonai, I would like to book a free diagnostic session to identify a practical AI use case for my company.';

export const hero = {
  eyebrow: 'APPLIED AI STUDIO · BOLIVIA',
  headlineBefore: 'AI Working in Your Business in',
  headlineAccent: 'Weeks,',
  headlineAfter: 'Not Months.',
  subheadline:
    'InnovaAI is a Bolivian applied AI studio. We diagnose your operation, select the highest-impact use case, and build a useful solution around your real processes, data, and team.',
  ctaPrimary: 'Book a Free Diagnostic',
  ctaPrimaryHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(diagnosticMessage)}`,
  ctaSecondary: 'See Our Products',
  ctaSecondaryHref: '#productos',
  note: 'No cost and no commitment — a direct conversation about your operation.',
  metrics: [
    { value: '17+', label: 'years in enterprise technology' },
    { value: '2', label: 'in-house products built on real workflows' },
    { value: '100%', label: 'Latin American focus' },
  ],
  visual: {
    eyebrow: 'IN-HOUSE PRODUCTS',
    title: 'We build what we recommend.',
    description:
      'Dicta and DentiMed turn voice and everyday workflows into finished work.',
    dictaLabel: 'Dicta · Voice to Text',
    dictaAlt: 'Real view of Dicta, InnovaAI’s voice dictation product',
    dentimedLabel: 'DentiMed · Clinical Close',
    dentimedAlt: 'Real mobile recording screen from DentiMed',
    status: 'Applied AI for real work',
  },
};
