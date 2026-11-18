import type { FaqData } from './types';

export function faqSchema(pageURL: string, data: FaqData): Record<string, unknown> {
  return {
    '@type': 'FAQPage', '@id': `${pageURL}#preguntas`, url: `${pageURL}#preguntas`,
    mainEntity: data.items.map((item, i) => ({
      '@type': 'Question', '@id': `${pageURL}#pregunta-${i + 1}`, name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
