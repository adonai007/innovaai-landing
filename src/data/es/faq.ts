import type { FaqData } from '../types';

export const faq = {
  head: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de empezar.',
    // Text before the WhatsApp link; FAQ.astro renders it in SectionHead's slot (SPEC 4.9).
    intro: 'Respuestas directas a lo que suele salir en una primera conversación. Si tienes otra duda, ',
  },
  introLink: 'escríbenos por WhatsApp',
  introEnd: '.',
  items: [
    {
      question: '¿Qué tipo de procesos pueden mejorar con IA?',
      answer:
        'Procesos con trabajo repetitivo, búsqueda de información, clasificación de documentos, redacción frecuente, atención al cliente o decisiones que dependen de reunir datos dispersos. Durante el diagnóstico priorizamos un caso concreto.',
    },
    {
      question: '¿Necesito tener mis datos perfectos?',
      answer:
        'No. Primero revisamos qué información existe, qué tan confiable es y qué puede usarse sin generar riesgo. Muchas veces el primer avance consiste precisamente en ordenar el flujo y sus datos.',
    },
    {
      question: '¿La IA reemplaza a mi equipo?',
      answer:
        'No. La herramienta prepara borradores y reúne la información; tu equipo revisa y decide lo importante.',
    },
    {
      question: '¿Cómo manejan información sensible?',
      answer:
        'Definimos acceso, retención, proveedores y puntos de revisión desde el diseño. No todas las soluciones necesitan guardar la misma información ni usar el mismo modelo.',
    },
    {
      question: '¿Cuánto tarda un primer caso?',
      answer:
        'Un caso acotado puede llegar a prototipo en una semana y validarse en las siguientes, dependiendo de acceso a datos, integraciones y alcance. Lo confirmamos después del diagnóstico.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer:
        'Depende del caso y del alcance. La primera conversación no tiene costo. Si encontramos un buen caso, te proponemos un alcance y un presupuesto claros antes de empezar cualquier trabajo.',
    },
    {
      question: '¿Quién está detrás de InnovaAI?',
      answer:
        'InnovaAI es un estudio de IA aplicada fundado en Bolivia por Adonai Callejas. Además de trabajar con empresas, construimos y mantenemos nuestros propios productos: Dicta y DentiMed.',
    },
  ],
} satisfies FaqData;
