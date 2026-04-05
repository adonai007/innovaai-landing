export const dmNavigation = {
  logo: 'DiarioMed',
  links: [
    { label: 'Solucion', href: '#solucion' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Features', href: '#features' },
    { label: 'Precios', href: '#precios' },
  ],
  cta: 'Prueba Gratis',
};

export const dmHero = {
  badge: 'Nuevo: Odontograma IA en tiempo real',
  headline: 'Habla. DiarioMed hace el resto.',
  subheadline:
    'Transforma tu voz en historias clinicas FHIR, presupuestos automaticos y seguimiento de pacientes. Sin teclear. Sin esperar.',
  ctaPrimary: 'Prueba Gratis 7 Dias',
  ctaPrimaryHref: '#precios',
  ctaSecondary: 'Ver Demo en Vivo',
  ctaSecondaryHref: '#como-funciona',
  trustItems: ['Cumple HL7 FHIR R4', 'Datos en tu clinica', 'STT <1s'],
};

export const dmSolution = {
  sectionTitle: 'Una plataforma, tres superpoderes',
  tabs: [
    {
      id: 'diariomed',
      label: 'DiarioMed',
      icon: 'clipboard',
      tagline: 'Dicta. Se genera. Se valida.',
      features: [
        'Transcripcion real-time',
        'FHIR R4 compliance',
        'Odontograma FDI internacional',
        'NLP dental (BioBERT + SapBERT)',
        'ICD-10/SNOMED automatico',
      ],
    },
    {
      id: 'dicta',
      label: 'Dicta',
      icon: 'mic',
      tagline: 'F9 para empezar. Tu voz, tus reglas.',
      features: [
        'Whisper <1s latencia',
        'Desktop + Android',
        'App de solo 50MB',
        'Push-to-talk o manos libres',
        'Modo offline disponible',
      ],
    },
    {
      id: 'presupuestos',
      label: 'Auto-Presupuestos',
      icon: 'calculator',
      tagline: 'De la voz al WhatsApp del paciente en 2 minutos',
      features: [
        'Tarifario personalizable',
        'PDF automatico',
        'Envio por WhatsApp',
        'Tracking de aceptacion',
        'Facturacion SIN Bolivia',
      ],
    },
  ],
};

export const dmHowItWorks = {
  sectionTitle: 'Como funciona',
  sectionSubtitle: 'De tu voz a la historia clinica en segundos',
  steps: [
    {
      icon: 'mic',
      title: 'El doctor habla',
      description: 'Presiona F9 y dicta como si hablaras con tu asistente.',
    },
    {
      icon: 'brain',
      title: 'IA transcribe y clasifica',
      description: 'BioBERT extrae condiciones, procedimientos y medicamentos.',
    },
    {
      icon: 'split',
      title: 'Acciones en paralelo',
      description: 'Historia FHIR + Presupuesto + Indexacion RAG se generan juntos.',
    },
    {
      icon: 'screen',
      title: 'Doctor valida con 1 click',
      description: 'Revisa el odontograma y aprueba o ajusta antes de guardar.',
    },
    {
      icon: 'whatsapp',
      title: 'Paciente recibe presupuesto',
      description: 'El presupuesto PDF llega al WhatsApp del paciente al instante.',
    },
  ],
};

export const dmFeatures = {
  sectionTitle: 'Todo lo que necesitas',
  sectionSubtitle: 'Construido para dentistas que valoran su tiempo',
  cards: [
    {
      icon: 'zap',
      title: 'Transcripcion real-time',
      description: 'Sub-1 segundo de latencia',
    },
    {
      icon: 'shield',
      title: 'FHIR R4 compliance',
      description: 'Preparado para regulacion',
    },
    {
      icon: 'file-text',
      title: 'Presupuestos automaticos',
      description: 'Voz a PDF en segundos',
    },
    {
      icon: 'smile',
      title: 'Odontograma interactivo',
      description: 'FDI internacional, 52 dientes',
    },
    {
      icon: 'search',
      title: 'Busqueda semantica',
      description: 'Encuentra por sintomas, no codigos',
    },
    {
      icon: 'download',
      title: 'Export PDF + JSON',
      description: 'Historia completa descargable',
    },
    {
      icon: 'server',
      title: 'On-premise disponible',
      description: 'Audio nunca sale de tu clinica',
    },
    {
      icon: 'message-circle',
      title: 'Slang boliviano',
      description: 'Picadura, calza, muela del juicio',
    },
    {
      icon: 'phone',
      title: 'WhatsApp integrado',
      description: 'Presupuestos al celular del paciente',
    },
  ],
};

export const dmPricing = {
  sectionTitle: 'Precios simples, sin sorpresas',
  sectionSubtitle: '7 dias gratis. Todas las features. Sin tarjeta.',
  note: 'Precios en USD. Facturacion en Bs. disponible.',
  plans: [
    {
      name: 'Starter',
      price: 49,
      priceAnnual: 39,
      period: '/mes',
      popular: false,
      features: [
        '1 doctor',
        '100 pacientes',
        'Dictado + FHIR',
        'Odontograma',
        'Export PDF',
      ],
      cta: 'Empezar Prueba Gratis',
    },
    {
      name: 'Clinic',
      price: 149,
      priceAnnual: 119,
      period: '/mes',
      popular: true,
      features: [
        '5 doctores',
        'Pacientes ilimitados',
        'Todo en Starter +',
        'Presupuestos auto',
        'WhatsApp integrado',
        'RAG busqueda',
        'Agenda',
      ],
      cta: 'Empezar Prueba Gratis',
    },
    {
      name: 'Enterprise',
      price: 0,
      priceAnnual: 0,
      period: '',
      popular: false,
      features: [
        'Doctores ilimitados',
        'Pacientes ilimitados',
        'Todo en Clinic +',
        'Multi-clinica',
        'SSO / LDAP',
        'On-premise',
        'Soporte dedicado',
      ],
      cta: 'Contactar Ventas',
    },
  ],
};

export const dmCtaFinal = {
  title: 'Empieza a documentar con la voz hoy',
  subtitle: '7 dias gratis. Todas las features. Sin tarjeta.',
  ctaPrimary: 'Crear Cuenta Gratis',
  ctaPrimaryHref: '#precios',
  ctaSecondary: 'Agendar Demo 1-a-1',
  ctaSecondaryHref: '#',
  whatsappNumber: '59175870218',
  whatsappMessage: 'Hola, me interesa DiarioMed para mi clinica dental.',
};

export const dmFooter = {
  tagline:
    'Gestion clinica dental por voz con IA. Historias FHIR, presupuestos automaticos y odontograma digital.',
  columns: [
    {
      title: 'Producto',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Precios', href: '#precios' },
        { label: 'Demo', href: '#como-funciona' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Documentacion', href: '#' },
        { label: 'API', href: '#' },
        { label: 'Centro de Ayuda', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Terminos', href: '#' },
        { label: 'FHIR Compliance', href: '#' },
      ],
    },
  ],
  social: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'WhatsApp', href: '#', icon: 'whatsapp' },
  ],
  copyright: '2024-2026 InnovaAI SRL. Todos los derechos reservados.',
  madeWith: 'Hecho en Bolivia para clinicas de toda Latinoamerica',
};
