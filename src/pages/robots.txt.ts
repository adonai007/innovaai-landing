import type { APIRoute } from 'astro';

const DISCOVERY_BOTS = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'PerplexityBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
] as const;

const buildRobotsTxt = (sitemapURL: URL) => {
  const botRules = DISCOVERY_BOTS.flatMap((bot) => [
    `User-agent: ${bot}`,
    'Allow: /',
    '',
  ]);

  return [
    'User-agent: *',
    'Allow: /',
    '',
    ...botRules,
    `Sitemap: ${sitemapURL.href}`,
    '',
  ].join('\n');
};

export const GET: APIRoute = ({ site }) => {
  const baseURL = site ?? new URL('https://innovai.click');
  const sitemapURL = new URL('/sitemap-index.xml', baseURL);

  return new Response(buildRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
