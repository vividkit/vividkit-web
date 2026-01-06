import type { APIRoute } from 'astro';

/**
 * Dynamic sitemap generator with i18n support
 * Generates XML sitemap for all pages including Vietnamese translations
 */
export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://vividkit.com';

  // Define all pages with their properties
  const pages = [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/guides', changefreq: 'weekly', priority: '0.9' },
    { path: '/guides/commands', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/workflows', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/uiux', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/ccs', changefreq: 'monthly', priority: '0.8' },
    { path: '/guides/permissions', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/fix-logs', changefreq: 'monthly', priority: '0.7' },
    { path: '/guides/session-recovery', changefreq: 'monthly', priority: '0.7' },
  ];

  const lastmod = new Date().toISOString().split('T')[0];

  // Generate URL entries for both English and Vietnamese
  const urlEntries = pages.flatMap((page) => [
    // English version (default)
    `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="vi" href="${siteUrl}/vi${page.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${page.path}" />
  </url>`,
    // Vietnamese version
    `  <url>
    <loc>${siteUrl}/vi${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${(Number(page.priority) * 0.9).toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${page.path}" />
    <xhtml:link rel="alternate" hreflang="vi" href="${siteUrl}/vi${page.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${page.path}" />
  </url>`,
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
