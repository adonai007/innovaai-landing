export const dmNavigation = {
  logo: 'DentiMed',
  links: [
    { label: 'Solucion', href: '#solucion' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Features', href: '#features' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Agendar Demo',
  menuLabel: 'Abrir menu',
  closeLabel: 'Cerrar menu',
};

export const dmProblem = {
  sectionTitle: 'El 70% del tiempo del dentista se va en papeleo',
  sectionSubtitle:
    'Documentacion manual, presupuestos lentos y herramientas que no hablan tu idioma. Algo tiene que cambiar.',
  problems: [
    {
      icon: 'clock',
      title: '2-3 horas diarias escribiendo',
      description:
        'Tiempo que podrias invertir en mas pacientes o en tu familia. La documentacion manual agota.',
    },
    {
      icon: 'money',
      title: 'Presupuestos demorados = pacientes perdidos',
      description:
        'Cada dia que un paciente espera el presupuesto, la probabilidad de aceptacion cae un 20%.',
    },
    {
      icon: 'warning',
      title: 'Registros fragmentados y sin estandar',
      description:
        'Papel, Excel, WhatsApp y un EMR viejo. Ningun estandar clinico, cero interoperabilidad.',
    },
    {
      icon: 'lock',
      title: 'Herramientas cloud que capturan pantallas',
      description:
        'Algunas apps de dictado suben capturas al servidor. Con datos clinicos, eso no es aceptable.',
    },
  ],
};

export const dmHero = {
  badge: 'Nuevo: Odontograma IA en tiempo real',
  headline: 'Habla. DentiMed hace el resto.',
  subheadline:
    'DentiMed es un software dental por voz para clinicas de Latinoamerica. Convierte tu voz en historias clinicas FHIR, presupuestos automaticos y seguimiento de pacientes.',
  ctaPrimary: 'Agendar Demo Guiada',
  ctaPrimaryHref: '#cta-final',
  ctaSecondary: 'Como Funciona',
  ctaSecondaryHref: '#como-funciona',
  trustItems: ['Cumple HL7 FHIR R4', 'Datos en tu clinica', 'STT <1s'],
};

export const dmSolution = {
  sectionTitle: 'Una plataforma, tres superpoderes',
  tabs: [
    {
      id: 'diariomed',
      label: 'DentiMed',
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

export const dmResults = {
  sectionTitle: 'Objetivos medibles, no promesas',
  sectionSubtitle: 'Lo que DentiMed apunta a entregar — metas claras, no marketing.',
  counters: [
    {
      value: 'Hasta 87%',
      label: 'menos tiempo en documentacion',
      sublabel: 'objetivo de diseño',
    },
    {
      value: 'Hasta 3x',
      label: 'mas tiempo para pacientes',
      sublabel: 'al automatizar papeleo',
    },
    {
      value: 'Hasta 85%',
      label: 'de aceptacion proyectada',
      sublabel: 'presupuestos por WhatsApp',
    },
    {
      value: '<1s',
      label: 'Latencia STT',
      sublabel: 'transcripcion en vivo',
    },
  ],
  testimonials: [
    {
      quote:
        'Construi DentiMed porque vi a mi propio dentista perder horas escribiendo en lugar de atender. Si lo que ves resuelve un problema que reconoces, hablemos.',
      author: 'Adonai Callejas',
      role: 'Fundador, InnovaAI',
      location: 'Cochabamba, Bolivia',
    },
  ],
};

export const dmPricing = {
  sectionTitle: 'Precios simples, sin sorpresas',
  sectionSubtitle: '7 dias gratis. Todas las features. Sin tarjeta.',
  note: 'Precios en USD. Facturacion en Bs. disponible.',
  billingMonthly: 'Mensual',
  billingAnnual: 'Anual',
  billingToggleLabel: 'Cambiar entre facturacion mensual y anual',
  badgePopular: 'Popular',
  contactLabel: 'Contactar',
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
      cta: 'Agendar Demo',
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
      cta: 'Agendar Demo',
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

export const dmSecurity = {
  sectionTitle: 'Seguridad y compliance de primer nivel',
  sectionSubtitle:
    'Tus datos clinicos merecen el mismo estandar que los bancos. Y mucho mas.',
  cards: [
    {
      icon: 'shield',
      title: 'FHIR R4 Compliant',
      description:
        'Estandar internacional de salud HL7 FHIR R4. Preparado para la regulacion LatAm que viene.',
    },
    {
      icon: 'lock',
      title: 'Datos encriptados',
      description:
        'AES-256 en reposo, TLS 1.3 en transito. Ni nosotros podemos leer tus historias.',
    },
    {
      icon: 'server',
      title: 'On-premise disponible',
      description:
        'En plan Enterprise, todo corre en tu propio servidor. El audio nunca sale de tu clinica.',
    },
    {
      icon: 'eye-off',
      title: 'Sin capturas de pantalla',
      description:
        'A diferencia de Wispr Flow y otras, jamas capturamos tu pantalla. Solo procesamos tu voz.',
    },
  ],
  badges: ['HL7 FHIR R4', 'SNOMED-CT', 'ICD-10', 'AES-256', 'TLS 1.3'],
};

export const dmComparison = {
  sectionTitle: 'Compara antes de decidir',
  sectionSubtitle:
    'No somos los mas baratos. Somos los unicos pensados para odontologia LatAm.',
  columns: {
    diariomed: 'DentiMed',
    wispr: 'Wispr Flow',
    cloudEmr: 'Cloud EMR',
  },
  rows: [
    { feature: 'Dictado por voz', diariomed: 'Si', wispr: 'Si', cloudEmr: 'No' },
    {
      feature: 'Presupuestos automaticos',
      diariomed: 'Si',
      wispr: 'No',
      cloudEmr: 'No',
    },
    { feature: 'Historia FHIR R4', diariomed: 'Si', wispr: 'No', cloudEmr: 'Si' },
    {
      feature: 'Sin capturas de pantalla',
      diariomed: 'Si',
      wispr: 'No',
      cloudEmr: 'Si',
    },
    {
      feature: 'Odontograma FDI',
      diariomed: 'Si',
      wispr: 'No',
      cloudEmr: 'No',
    },
    {
      feature: 'On-premise',
      diariomed: 'Si',
      wispr: 'No',
      cloudEmr: 'No',
    },
    {
      feature: 'Especifico dental',
      diariomed: 'Si',
      wispr: 'No',
      cloudEmr: 'Generico',
    },
    {
      feature: 'Soporte LatAm + Bs.',
      diariomed: 'Si',
      wispr: 'No',
      cloudEmr: 'No',
    },
    {
      feature: 'Precio',
      diariomed: '$49/mes',
      wispr: '$24/mes',
      cloudEmr: '$200+/mes',
    },
  ],
  note: 'DentiMed cuesta un poco mas que Wispr Flow, pero incluye 5x mas funcionalidad clinica y zero riesgo de privacidad.',
  recommendedLabel: 'Recomendado',
};

export const dmFaq = {
  sectionTitle: 'Preguntas frecuentes',
  sectionSubtitle: 'Todo lo que dentistas nos preguntan antes de empezar.',
  items: [
    {
      question: '¿Que necesito para empezar?',
      answer:
        'Solo un navegador moderno (Chrome, Edge o Firefox) y un microfono. No instalas nada, no cambias tu flujo.',
    },
    {
      question: '¿Funciona con mi microfono actual?',
      answer:
        'Si. Funciona con cualquier microfono USB, integrado de laptop o auricular Bluetooth. Recomendamos USB para mejor precision.',
    },
    {
      question: '¿Necesito internet?',
      answer:
        'Para la transcripcion en la nube si, pero solo usa pocos KB por minuto. En plan Enterprise ofrecemos modo offline con modelos locales.',
    },
    {
      question: '¿Que pasa con mis datos?',
      answer:
        'Encriptados con AES-256 en reposo y TLS 1.3 en transito. Si eliges el plan Enterprise on-premise, todo queda en TU servidor. Nunca vendemos ni compartimos nada.',
    },
    {
      question: '¿Puedo exportar mis datos?',
      answer:
        'Si, en cualquier momento. Exportamos en FHIR R4 JSON (estandar internacional) y en PDF listo para imprimir. Sin costos ni restricciones.',
    },
    {
      question: '¿Funciona para otras especialidades?',
      answer:
        'Actualmente optimizado para odontologia (con odontograma FDI, NER dental). Medicina general y otras especialidades llegan en Q3 2026.',
    },
    {
      question: '¿Tiene app movil?',
      answer:
        'Dicta, nuestra app de dictado, ya esta en Android (solo 50MB). La version iOS esta en desarrollo. La consola web funciona perfecto en tablet.',
    },
    {
      question: '¿Como cancelo?',
      answer:
        'Un click desde tu panel de administracion, sin llamadas ni formularios. Al cancelar puedes exportar todos tus datos gratis en FHIR + PDF.',
    },
    {
      question: '¿Acepta Bolivianos?',
      answer:
        'Si. Facturacion en Bs. con IVA 13% y credito fiscal. Tambien aceptamos tarjetas internacionales y transferencia bancaria.',
    },
    {
      question: '¿Que pasa si la IA se equivoca?',
      answer:
        'El doctor SIEMPRE valida antes de guardar. DentiMed es un asistente, no un reemplazo: toda historia pasa por tu revision y tu click de aprobacion.',
    },
  ],
};

const dmWhatsappNumber = '59172004767';
const dmWaPrimaryMessage =
  'Hola Adonai, vi DentiMed y quiero hablar con el fundador sobre mi clinica dental.';
const dmWaSecondaryMessage =
  'Quiero agendar una demo 1-a-1 de DentiMed para mi clinica dental.';
const dmWaFooterMessage = 'Hola, vi DentiMed y quiero agendar una demo para mi clinica dental.';

export const dmCtaFinal = {
  title: 'Hablemos de tu clinica',
  subtitle:
    'Dia 1 todavia. Sin pruebas automaticas: agendamos una demo guiada por WhatsApp y te muestro DentiMed en vivo.',
  ctaPrimary: 'Hablar con el Fundador',
  ctaPrimaryHref: `https://wa.me/${dmWhatsappNumber}?text=${encodeURIComponent(dmWaPrimaryMessage)}`,
  ctaSecondary: 'Agendar Demo 1-a-1',
  ctaSecondaryHref: `https://wa.me/${dmWhatsappNumber}?text=${encodeURIComponent(dmWaSecondaryMessage)}`,
  whatsappNumber: dmWhatsappNumber,
  whatsappMessage: dmWaFooterMessage,
};

export const dmFooter = {
  tagline:
    'Gestion clinica dental por voz con IA. Historias FHIR, presupuestos automaticos y odontograma digital.',
  location: 'Bolivia · Latinoamerica',
  columns: [
    {
      title: 'Producto',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Precios', href: '#precios' },
        { label: 'Demo', href: '#como-funciona' },
      ],
    },
  ],
  social: [
    { label: 'WhatsApp', href: `https://wa.me/${dmWhatsappNumber}`, icon: 'whatsapp' },
  ],
  copyright: '2024-2026 InnovaAI SRL. Todos los derechos reservados.',
  madeWith: 'Hecho en Bolivia para clinicas de toda Latinoamerica',
};
