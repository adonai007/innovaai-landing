import type { APIRoute } from 'astro';
import { reading as es } from '../data/es/reading';
import { reading as en } from '../data/en/reading';
import { faq as esFaq } from '../data/es/faq';
import { faq as enFaq } from '../data/en/faq';
import { site as esSite } from '../data/es/site';
import { site as enSite } from '../data/en/site';
import { readingText } from '../data/reading-text';

export const GET: APIRoute = () => new Response(
  [readingText(es, esFaq, esSite), readingText(en, enFaq, enSite)].join('\n\n'),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
