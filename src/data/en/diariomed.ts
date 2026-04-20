export const dmNavigation = {
  logo: 'DiarioMed',
  links: [
    { label: 'Solution', href: '#solucion' },
    { label: 'How It Works', href: '#como-funciona' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Free Trial',
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
  headline: 'Speak. DiarioMed Does the Rest.',
  subheadline:
    'Turn your voice into FHIR clinical records, automatic treatment plans and patient follow-up. No typing. No waiting.',
  ctaPrimary: 'Start 7-Day Free Trial',
  ctaPrimaryHref: '#precios',
  ctaSecondary: 'Watch Live Demo',
  ctaSecondaryHref: '#como-funciona',
  trustItems: ['HL7 FHIR R4 Compliant', 'Data in Your Clinic', 'STT <1s'],
};

export const dmSolution = {
  sectionTitle: 'One Platform, Three Superpowers',
  tabs: [
    {
      id: 'diariomed',
      label: 'DiarioMed',
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
  sectionTitle: 'Real Results, Not Promises',
  sectionSubtitle: 'Clinics already using DiarioMed recover hours every week.',
  counters: [
    {
      value: '15 min',
      label: 'Documentation per day',
      sublabel: 'before: 2 hours',
    },
    {
      value: '40%',
      label: 'More productivity',
      sublabel: 'patients per day',
    },
    {
      value: '85%',
      label: 'Treatment plan acceptance',
      sublabel: 'sent via WhatsApp',
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
        'I cut my documentation time from 2 hours to 15 minutes. Now I see more patients without taking work home.',
      author: 'Dr. Maria Rojas',
      role: 'General Dentist',
      location: 'Cochabamba, Bolivia',
    },
    {
      quote:
        'WhatsApp treatment plans changed everything. The patient receives them before leaving the office.',
      author: 'Dr. Carlos Mendoza',
      role: 'Clinical Director',
      location: 'La Paz, Bolivia',
    },
    {
      quote:
        'Dictating the odontogram and having it update itself is magic. My assistant now handles other more important tasks.',
      author: 'Dr. Andrea Suarez',
      role: 'Orthodontist',
      location: 'Santa Cruz, Bolivia',
    },
  ],
};

export const dmPricing = {
  sectionTitle: 'Simple Pricing, No Surprises',
  sectionSubtitle: '7 days free. All features. No credit card.',
  note: 'Prices in USD. Boliviano invoicing available.',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
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
      cta: 'Start Free Trial',
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
      cta: 'Start Free Trial',
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
    diariomed: 'DiarioMed',
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
  note: 'DiarioMed costs a little more than Wispr Flow, but includes 5x more clinical functionality and zero privacy risk.',
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
        'The doctor ALWAYS validates before saving. DiarioMed is an assistant, not a replacement: every record goes through your review and your approval click.',
    },
  ],
};

export const dmCtaFinal = {
  title: 'Start Documenting by Voice Today',
  subtitle: '7 days free. All features. No credit card.',
  ctaPrimary: 'Create Free Account',
  ctaPrimaryHref: '#precios',
  ctaSecondary: 'Book a 1-on-1 Demo',
  ctaSecondaryHref: '#',
  whatsappNumber: '59175870218',
  whatsappMessage: 'Hello, I\'m interested in DiarioMed for my dental clinic.',
};

export const dmFooter = {
  tagline:
    'Voice-powered dental clinic management with AI. FHIR records, automatic treatment plans and a digital odontogram.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#precios' },
        { label: 'Demo', href: '#como-funciona' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API', href: '#' },
        { label: 'Help Center', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'FHIR Compliance', href: '#' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'WhatsApp', href: '#', icon: 'whatsapp' },
  ],
  copyright: '2024-2026 InnovaAI SRL. All rights reserved.',
  madeWith: 'Made in Bolivia for clinics across Latin America',
};
