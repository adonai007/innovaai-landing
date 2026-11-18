import type { APIRoute } from 'astro';
import { reading as es } from '../data/es/reading';
import { reading as en } from '../data/en/reading';
import { site as esSite } from '../data/es/site';
import { site as enSite } from '../data/en/site';
import { SITE_URL, LINKEDIN_URL, DENTIMED_URL, DICTA_URL } from '../data/links';

export const GET: APIRoute = () => new Response([
  '# InnovAI', '', `> ${es.description}`, '',
  `- [${es.title}](${new URL(esSite.reading.href, SITE_URL).href})`,
  `- [${en.title}](${new URL(enSite.reading.href, SITE_URL).href})`,
  `- [llms-full.txt](${SITE_URL}/llms-full.txt)`, '',
  `## ${es.indexTitle}`, '',
  ...es.index.map((link) => `- [${link.label}](${new URL(esSite.reading.href + link.href, SITE_URL).href})`), '',
  `## ${en.indexTitle}`, '',
  ...en.index.map((link) => `- [${link.label}](${new URL(enSite.reading.href + link.href, SITE_URL).href})`), '',
  `- [DentiMed](${DENTIMED_URL})`,
  `- [Dicta](${DICTA_URL})`,
  `- [${esSite.cta}](${esSite.whatsappHref})`,
  `- [LinkedIn](${LINKEDIN_URL})`, '',
].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
