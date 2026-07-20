import type { APIRoute } from 'astro';
import { CANONICAL_SITE_ORIGIN } from '@/data/site-origin.mjs';

/**
 * Dynamic robots.txt generator
 * Allows all crawlers and references sitemap
 */
export const GET: APIRoute = () => {
  const siteUrl = CANONICAL_SITE_ORIGIN;

  const robotsTxt = `# VividKit Robots.txt
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${siteUrl}/sitemap.xml

# LLM-friendly documentation index (https://llmstxt.org)
# LLM-Index: ${siteUrl}/llms.txt

# Crawl-delay for politeness
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
