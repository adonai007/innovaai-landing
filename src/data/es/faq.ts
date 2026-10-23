import type { FaqData } from '../types';

export const faq = {
  title: 'Preguntas frecuentes.',
  introBefore: '¿Tienes otra pregunta? ',
  introLink: 'Escríbenos por WhatsApp',
  introAfter: '.',
  items: [
    { question: '¿Qué es InnovaAI?',
      answer: 'Un estudio de producto con IA fundado por Adonai Callejas, con base en La Paz, Bolivia. Creamos y mantenemos nuestros propios productos, DentiMed y Dicta, y diseñamos herramientas con equipos de otras empresas.' },
    { question: '¿Trabajan con equipos de otros países?',
      answer: 'Sí. Conversamos por WhatsApp, en español o en inglés, estés donde estés. El alcance y la forma de trabajo los definimos juntos.' },
    { question: '¿Dónde puedo usar DentiMed?',
      answer: 'DentiMed está hecho para odontólogos y hoy está en español. Se usa desde el navegador del teléfono, sin descargar nada de una tienda de aplicaciones, y tú eliges la moneda principal de tu clínica. Está en piloto para fundadores.' },
    { question: '¿La IA reemplaza a las personas?',
      answer: 'No. Nuestras herramientas reúnen la información y dejan listo un borrador. Una persona revisa y confirma lo importante antes de que se guarde o se envíe.' },
    { question: '¿Cómo cuidan la información sensible?',
      answer: 'Desde el diseño definimos quién accede, qué se guarda, por cuánto tiempo y con qué proveedores. En DentiMed, cada clínica está aislada de las demás, las acciones importantes quedan en un registro de auditoría y ningún borrador se guarda sin revisión humana.' },
    { question: '¿Cuánto cuesta?',
      answer: 'Depende del alcance. Si hay un buen caso, te proponemos un alcance y un presupuesto claros antes de empezar. La primera conversación no tiene costo. DentiMed está en piloto para fundadores y Dicta se puede empezar a usar gratis.' },
    { question: '¿Por dónde empezamos?',
      answer: 'Por una conversación de 30 minutos. Nos cuentas qué tarea se repite y vemos juntos si hay un buen caso para empezar.' },
  ],
} satisfies FaqData;
