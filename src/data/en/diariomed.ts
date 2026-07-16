export const dmNavigation = {
  logo: 'DentiMed',
  links: [
    { label: 'Solution', href: '#solucion' },
    { label: 'How It Works', href: '#como-funciona' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Schedule Demo',
  menuLabel: 'Open menu',
  closeLabel: 'Close menu',
};

export const dmProblem = {
  sectionTitle: '70% of a dentist\'s time goes to paperwork',
  sectionSubtitle:
    'Manual documentation, slow treatment plans and tools that don\'t speak your language. Something has to change.',
  problems: [
    {
      icon: 'clock',
      title: '2-3 hours a day of typing',
      description:
        'Time you could invest in more patients or in your family. Manual documentation is exhausting.',
    },
    {
      icon: 'money',
      title: 'Delayed treatment plans = lost patients',
      description:
        'For every day a patient waits for a treatment plan, the probability of acceptance drops 20%.',
    },
    {
      icon: 'warning',
      title: 'Fragmented records with no standard',
      description:
        'Paper, Excel, WhatsApp and an old EMR. No clinical standard, zero interoperability.',
    },
    {
      icon: 'lock',
      title: 'Cloud tools that capture screenshots',
      description:
        'Some dictation apps upload screenshots to the server. With clinical data, that is not acceptable.',
    },
  ],
};

export const dmHero = {
  badge: 'New: Real-Time AI Odontogram',
  headline: 'Speak. DentiMed Does the Rest.',
  subheadline:
    'DentiMed is voice-powered dental software for clinics in Latin America. It turns speech into FHIR clinical records, treatment plans, and patient follow-up.',
  ctaPrimary: 'Schedule a Guided Demo',
  ctaPrimaryHref: '#cta-final',
  ctaSecondary: 'How It Works',
  ctaSecondaryHref: '#como-funciona',
  trustItems: ['HL7 FHIR R4 Compliant', 'Data in Your Clinic', 'STT <1s'],
};

export const dmSolution = {
  sectionTitle: 'One Platform, Three Superpowers',
  tabs: [
    {
      id: 'diariomed',
      label: 'DentiMed',
      icon: 'clipboard',
      tagline: 'Dictate. Generate. Validate.',
      features: [
        'Real-time transcription',
        'FHIR R4 compliance',
        'International FDI odontogram',
        'Dental NLP (BioBERT + SapBERT)',
        'Automatic ICD-10/SNOMED',
      ],
    },
    {
      id: 'dicta',
      label: 'Dicta',
      icon: 'mic',
      tagline: 'F9 to start. Your voice, your rules.',
      features: [
        'Whisper <1s latency',
        'Desktop + Android',
        'Only 50MB app',
        'Push-to-talk or hands-free',
        'Offline mode available',
      ],
    },
    {
      id: 'presupuestos',
      label: 'Auto Treatment Plans',
      icon: 'calculator',
      tagline: 'From voice to the patient\'s WhatsApp in 2 minutes',
      features: [
        'Customizable fee schedule',
        'Automatic PDF',
        'Sent via WhatsApp',
        'Acceptance tracking',
        'SIN Bolivia tax invoicing',
      ],
    },
  ],
};

export const dmHowItWorks = {
  sectionTitle: 'How It Works',
  sectionSubtitle: 'From your voice to the clinical record in seconds',
  steps: [
    {
      icon: 'mic',
      title: 'The doctor speaks',
      description: 'Press F9 and dictate as if you were talking to your assistant.',
    },
    {
      icon: 'brain',
      title: 'AI transcribes and classifies',
      description: 'BioBERT extracts conditions, procedures and medications.',
    },
    {
      icon: 'split',
      title: 'Parallel actions',
      description: 'FHIR record + treatment plan + RAG indexing are generated together.',
    },
    {
      icon: 'screen',
      title: 'Doctor validates with 1 click',
      description: 'Review the odontogram and approve or adjust before saving.',
    },
    {
      icon: 'whatsapp',
      title: 'Patient receives treatment plan',
      description: 'The PDF treatment plan arrives on the patient\'s WhatsApp instantly.',
    },
  ],
};

export const dmFeatures = {
  sectionTitle: 'Everything You Need',
  sectionSubtitle: 'Built for dentists who value their time',
  cards: [
    {
      icon: 'zap',
      title: 'Real-time transcription',
      description: 'Sub-1 second latency',
    },
    {
      icon: 'shield',
      title: 'FHIR R4 compliance',
      description: 'Ready for regulation',
    },
    {
      icon: 'file-text',
      title: 'Automatic treatment plans',
      description: 'Voice to PDF in seconds',
    },
    {
      icon: 'smile',
      title: 'Interactive odontogram',
      description: 'International FDI, 52 teeth',
    },
    {
      icon: 'search',
      title: 'Semantic search',
      description: 'Find by symptoms, not codes',
    },
    {
      icon: 'download',
      title: 'PDF + JSON export',
      description: 'Full record downloadable',
    },
    {
      icon: 'server',
      title: 'On-premise available',
      description: 'Audio never leaves your clinic',
    },
    {
      icon: 'message-circle',
      title: 'Bolivian Spanish slang',
      description: 'Picadura, calza, muela del juicio',
    },
    {
      icon: 'phone',
      title: 'WhatsApp integrated',
      description: 'Treatment plans to the patient\'s phone',
    },
  ],
};

export const dmResults = {
  sectionTitle: 'Measurable Goals, Not Promises',
  sectionSubtitle: 'What DentiMed is built to deliver — clear targets, not marketing.',
  counters: [
    {
      value: 'Up to 87%',
      label: 'less time on documentation',
      sublabel: 'design target',
    },
    {
      value: 'Up to 3x',
      label: 'more time for patients',
      sublabel: 'by automating paperwork',
    },
    {
      value: 'Up to 85%',
      label: 'projected acceptance',
      sublabel: 'treatment plans via WhatsApp',
    },
    {
      value: '<1s',
      label: 'STT latency',
      sublabel: 'live transcription',
    },
  ],
  testimonials: [
    {
      quote:
        'I built DentiMed because I watched my own dentist spend hours typing instead of treating patients. If what you see here matches a problem you recognize, let us talk.',
      author: 'Adonai Callejas',
      role: 'Founder, InnovaAI',
      location: 'Cochabamba, Bolivia',
    },
  ],
};

export const dmPricing = {
  sectionTitle: 'Simple Pricing, No Surprises',
  sectionSubtitle: '7 days free. All features. No credit card.',
  note: 'Prices in USD. Boliviano invoicing available.',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
  billingToggleLabel: 'Switch between monthly and annual billing',
  badgePopular: 'Popular',
  contactLabel: 'Contact Us',
  plans: [
    {
      name: 'Starter',
      price: 49,
      priceAnnual: 39,
      period: '/mo',
      popular: false,
      features: [
        '1 doctor',
        '100 patients',
        'Dictation + FHIR',
        'Odontogram',
        'PDF export',
      ],
      cta: 'Schedule Demo',
    },
    {
      name: 'Clinic',
      price: 149,
      priceAnnual: 119,
      period: '/mo',
      popular: true,
      features: [
        '5 doctors',
        'Unlimited patients',
        'Everything in Starter +',
        'Auto treatment plans',
        'WhatsApp integrated',
        'RAG search',
        'Scheduling',
      ],
      cta: 'Schedule Demo',
    },
    {
      name: 'Enterprise',
      price: 0,
      priceAnnual: 0,
      period: '',
      popular: false,
      features: [
        'Unlimited doctors',
        'Unlimited patients',
        'Everything in Clinic +',
        'Multi-clinic',
        'SSO / LDAP',
        'On-premise',
        'Dedicated support',
      ],
      cta: 'Contact Sales',
    },
  ],
};

export const dmSecurity = {
  sectionTitle: 'Top-Tier Security and Compliance',
  sectionSubtitle:
    'Your clinical data deserves the same standard as the banks. And much more.',
  cards: [
    {
      icon: 'shield',
      title: 'FHIR R4 Compliant',
      description:
        'International HL7 FHIR R4 health standard. Ready for the LatAm regulation on the horizon.',
    },
    {
      icon: 'lock',
      title: 'Encrypted data',
      description:
        'AES-256 at rest, TLS 1.3 in transit. Not even we can read your records.',
    },
    {
      icon: 'server',
      title: 'On-premise available',
      description:
        'On the Enterprise plan, everything runs on your own server. Audio never leaves your clinic.',
    },
    {
      icon: 'eye-off',
      title: 'No screen capture',
      description:
        'Unlike Wispr Flow and others, we never capture your screen. We only process your voice.',
    },
  ],
  badges: ['HL7 FHIR R4', 'SNOMED-CT', 'ICD-10', 'AES-256', 'TLS 1.3'],
};

export const dmComparison = {
  sectionTitle: 'Compare Before You Decide',
  sectionSubtitle:
    'We\'re not the cheapest. We\'re the only ones built for LatAm dentistry.',
  columns: {
    diariomed: 'DentiMed',
    wispr: 'Wispr Flow',
    cloudEmr: 'Cloud EMR',
  },
  rows: [
    { feature: 'Voice dictation', diariomed: 'Yes', wispr: 'Yes', cloudEmr: 'No' },
    {
      feature: 'Automatic treatment plans',
      diariomed: 'Yes',
      wispr: 'No',
      cloudEmr: 'No',
    },
    { feature: 'FHIR R4 records', diariomed: 'Yes', wispr: 'No', cloudEmr: 'Yes' },
    {
      feature: 'No screen capture',
      diariomed: 'Yes',
      wispr: 'No',
      cloudEmr: 'Yes',
    },
    {
      feature: 'FDI odontogram',
      diariomed: 'Yes',
      wispr: 'No',
      cloudEmr: 'No',
    },
    {
      feature: 'On-premise',
      diariomed: 'Yes',
      wispr: 'No',
      cloudEmr: 'No',
    },
    {
      feature: 'Dental-specific',
      diariomed: 'Yes',
      wispr: 'No',
      cloudEmr: 'Generic',
    },
    {
      feature: 'LatAm support + Boliviano billing',
      diariomed: 'Yes',
      wispr: 'No',
      cloudEmr: 'No',
    },
    {
      feature: 'Price',
      diariomed: '$49/mo',
      wispr: '$24/mo',
      cloudEmr: '$200+/mo',
    },
  ],
  note: 'DentiMed costs a little more than Wispr Flow, but includes 5x more clinical functionality and zero privacy risk.',
  recommendedLabel: 'Recommended',
};

export const dmFaq = {
  sectionTitle: 'Frequently Asked Questions',
  sectionSubtitle: 'Everything dentists ask us before getting started.',
  items: [
    {
      question: 'What do I need to get started?',
      answer:
        'Just a modern browser (Chrome, Edge or Firefox) and a microphone. You don\'t install anything, you don\'t change your workflow.',
    },
    {
      question: 'Does it work with my current microphone?',
      answer:
        'Yes. It works with any USB microphone, laptop built-in mic or Bluetooth headset. We recommend USB for better accuracy.',
    },
    {
      question: 'Do I need internet?',
      answer:
        'For cloud transcription yes, but it only uses a few KB per minute. On the Enterprise plan we offer offline mode with local models.',
    },
    {
      question: 'What happens to my data?',
      answer:
        'Encrypted with AES-256 at rest and TLS 1.3 in transit. If you choose the on-premise Enterprise plan, everything stays on YOUR server. We never sell or share anything.',
    },
    {
      question: 'Can I export my data?',
      answer:
        'Yes, at any time. We export in FHIR R4 JSON (international standard) and print-ready PDF. No fees, no restrictions.',
    },
    {
      question: 'Does it work for other specialties?',
      answer:
        'Currently optimized for dentistry (with FDI odontogram, dental NER). General medicine and other specialties arrive in Q3 2026.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Dicta, our dictation app, is already on Android (only 50MB). The iOS version is in development. The web console works perfectly on tablet.',
    },
    {
      question: 'How do I cancel?',
      answer:
        'One click from your admin panel, no calls or forms. When you cancel, you can export all your data for free in FHIR + PDF.',
    },
    {
      question: 'Do you accept Bolivianos?',
      answer:
        'Yes. Boliviano invoicing with 13% VAT and tax credit. We also accept international cards and bank transfers.',
    },
    {
      question: 'What if the AI gets something wrong?',
      answer:
        'The doctor ALWAYS validates before saving. DentiMed is an assistant, not a replacement: every record goes through your review and your approval click.',
    },
  ],
};

const dmWhatsappNumber = '59172004767';
const dmWaPrimaryMessage =
  'Hi Adonai, I saw DentiMed and would like to talk to the founder about my dental clinic.';
const dmWaSecondaryMessage =
  'I would like to schedule a 1-on-1 DentiMed demo for my dental clinic.';
const dmWaFooterMessage =
  'Hi, I saw DentiMed and would like to schedule a demo for my dental clinic.';

export const dmCtaFinal = {
  title: 'Let\'s Talk About Your Clinic',
  subtitle:
    'Still day 1. No automatic trials yet — we set up a guided demo over WhatsApp and I show you DentiMed live.',
  ctaPrimary: 'Talk to the Founder',
  ctaPrimaryHref: `https://wa.me/${dmWhatsappNumber}?text=${encodeURIComponent(dmWaPrimaryMessage)}`,
  ctaSecondary: 'Schedule a 1-on-1 Demo',
  ctaSecondaryHref: `https://wa.me/${dmWhatsappNumber}?text=${encodeURIComponent(dmWaSecondaryMessage)}`,
  whatsappNumber: dmWhatsappNumber,
  whatsappMessage: dmWaFooterMessage,
};

export const dmFooter = {
  tagline:
    'Voice-powered dental clinic management with AI. FHIR records, automatic treatment plans and a digital odontogram.',
  location: 'Bolivia · Latin America',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#precios' },
        { label: 'Demo', href: '#como-funciona' },
      ],
    },
  ],
  social: [
    { label: 'WhatsApp', href: `https://wa.me/${dmWhatsappNumber}`, icon: 'whatsapp' },
  ],
  copyright: '2024-2026 InnovaAI SRL. All rights reserved.',
  madeWith: 'Made in Bolivia for clinics across Latin America',
};
