import type { APIRoute } from 'astro';

/**
 * Dynamic robots.txt generator
 * Allows all crawlers and references sitemap
 */
export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://vividkit.com';

  const robotsTxt = `# VividKit Robots.txt
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${siteUrl}/sitemap.xml

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
