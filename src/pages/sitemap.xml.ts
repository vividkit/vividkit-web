import type { APIRoute } from 'astro';
import { GUIDE_ROUTE_MANIFEST } from '@/data/guides/guide-route-manifest';
import { CANONICAL_SITE_ORIGIN } from '@/data/site-origin.mjs';

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const siteUrl = CANONICAL_SITE_ORIGIN;
  const lastmod = new Date().toISOString().split('T')[0];
  const entries = GUIDE_ROUTE_MANIFEST.filter((entry) => entry.includeInSitemap && entry.viPath);

  const urlEntries = entries.flatMap((entry) => {
    const priority = entry.enPath === '/' ? '1.0' : entry.enPath === '/guides' || entry.enPath === '/guides/agentkit' || entry.enPath === '/guides/what-is-agentkit' || entry.enPath === '/guides/cli' ? '0.9' : '0.7';
    const changefreq = entry.enPath === '/' || entry.enPath === '/guides' ? 'weekly' : 'monthly';
    const enUrl = escapeXml(`${siteUrl}${entry.enPath}`);
    const viUrl = escapeXml(`${siteUrl}${entry.viPath}`);
    const alternates = `
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="vi" href="${viUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`;
    return [
      `  <url>\n    <loc>${enUrl}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${alternates}\n  </url>`,
      `  <url>\n    <loc>${viUrl}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${(Number(priority) * 0.9).toFixed(1)}</priority>${alternates}\n  </url>`,
    ];
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
