import type { FaqData, ReadingData, SiteData } from './types';
import { SITE_URL } from './links';

const plain = (text: string): string => text.replace(/\s+/g, ' ').trim();

/** Text export of the same content used by the HTML reading view. */
export function readingText(data: ReadingData, faq: FaqData, site: SiteData): string {
  const base = new URL(site.reading.href, SITE_URL);
  return [
    `# ${data.title}`, '', `> ${data.description}`, '',
    `[${site.reading.label}](${base.href})`, '',
    `## ${data.indexTitle}`, '',
    ...data.index.map((link) => `- [${link.label}](${new URL(link.href, base).href})`), '',
    ...data.sections.flatMap((section) => [
      `## ${plain(section.label)}`, '', plain(section.title), '', plain(section.body), '',
      ...section.items.map((item) => `- **${plain(item.title)}** ${plain(item.body)}`), '',
      ...(section.links ?? []).map((link) => `- [${link.label}](${new URL(link.href, base).href})`), '',
    ]),
    `## ${faq.title}`, '',
    ...faq.items.flatMap((item, i) => [`### ${item.question}`, '', item.answer, '', `[${item.question}](${base.href}#pregunta-${i + 1})`, '']),
    `[${site.cta}](${site.whatsappHref})`, '',
  ].join('\n');
}
