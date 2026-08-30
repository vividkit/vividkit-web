import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-seo',
  command: '/ak:seo',
  kit: 'marketer',
  header: {
    titleEn: '/ak:seo — SEO audit and optimization toolkit',
    titleVi: '/ak:seo — Bộ công cụ SEO',
    taglineEn: 'SEO toolkit for audits, keyword research, programmatic SEO, on-page optimization, JSON-LD schema, Google Search Console data, and Core Web Vitals.',
    taglineVi: 'Bộ công cụ SEO cho audit, keyword research, programmatic SEO, tối ưu on-page, schema JSON-LD, dữ liệu Google Search Console và Core Web Vitals.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'SEO analysis does not authorize live search changes',
    titleVi: 'Phân tích SEO không cấp quyền thay đổi search live',
    contentEn: 'Search Console reads, sitemap submit/delete flags, pSEO bulk generation, schema output, and provider calls each need explicit approval; never infer live indexing or file mutation authority from an audit request.',
    contentVi: 'Đọc Search Console, flag submit/delete sitemap, generate pSEO hàng loạt, output schema và provider call đều cần duyệt rõ; không suy ra quyền indexing live hoặc mutation file từ yêu cầu audit.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Intent', titleVi: 'Đọc intent', descEn: 'Read audit, keywords, pseo, optimize, schema, or target-only requests; only audit, keywords, and pseo have routed reference workflows in this release.', descVi: 'Đọc request audit, keywords, pseo, optimize, schema hoặc chỉ target; trong release này chỉ audit, keywords và pseo có routed reference workflow.' },
    { number: 2, titleEn: 'Load Reference', titleVi: 'Nạp reference', descEn: 'Load the matching routed SEO reference for audit, keyword research, or pSEO; treat optimize and schema as scoped requests or inspect bundled tools before use.', descVi: 'Nạp reference SEO có route cho audit, keyword research hoặc pSEO; xem optimize và schema là request có scope rõ hoặc kiểm tra tool đóng gói trước khi dùng.' },
    { number: 3, titleEn: 'Collect Data', titleVi: 'Thu dữ liệu', descEn: 'Use Search Console, ReviewWeb.site, site crawls, Core Web Vitals checks, or provided page content as needed.', descVi: 'Dùng Search Console, ReviewWeb.site, crawl site, Core Web Vitals hoặc nội dung trang được cung cấp khi cần.' },
    { number: 4, titleEn: 'Analyze Search', titleVi: 'Phân tích search', descEn: 'Review queries, clicks, impressions, CTR, position, keyword volume, difficulty, CPC, competitors, and gaps.', descVi: 'Rà query, click, impression, CTR, position, volume keyword, difficulty, CPC, đối thủ và gap.' },
    { number: 5, titleEn: 'Audit Technicals', titleVi: 'Audit kỹ thuật', descEn: 'Check crawlability, indexing, sitemap, robots, canonical strategy, mobile SEO, schema, and Core Web Vitals.', descVi: 'Kiểm tra crawlability, indexing, sitemap, robots, canonical, mobile SEO, schema và Core Web Vitals.' },
    { number: 6, titleEn: 'Plan Content', titleVi: 'Lập kế hoạch content', descEn: 'Cluster keywords, identify semantic coverage, internal links, readability improvements, and pSEO templates.', descVi: 'Cluster keyword, xác định semantic coverage, internal link, cải thiện readability và template pSEO.' },
    { number: 7, titleEn: 'Generate Assets', titleVi: 'Tạo asset', descEn: 'Produce audit reports, keyword reports, CWV reports, schema files, sitemaps, or pSEO pages.', descVi: 'Tạo audit report, keyword report, CWV report, schema file, sitemap hoặc trang pSEO.' },
    { number: 8, titleEn: 'Route Specialists', titleVi: 'Điều phối chuyên gia', descEn: 'Use seo-specialist for audits and optimization; attraction-specialist for keyword research.', descVi: 'Dùng seo-specialist cho audit/tối ưu; attraction-specialist cho keyword research.' },
  ],
  corePrinciplesEn: [
    'SEO output should connect search demand, technical health, page quality, and measurable search-console performance.',
    'Keyword research needs real volume, difficulty, CPC, clustering, competitor, and content-gap context.',
    'Technical SEO covers crawl/index basics as well as Core Web Vitals, schema, canonical, mobile, sitemap, and robots controls.',
    'pSEO work must include template structure, URL strategy, scale architecture, and quality constraints.',
  ],
  corePrinciplesVi: [
    'Output SEO phải nối demand tìm kiếm, sức khỏe kỹ thuật, chất lượng trang và hiệu suất đo được từ Search Console.',
    'Keyword research cần volume, difficulty, CPC, clustering, competitor và content gap thật.',
    'Technical SEO bao gồm crawl/index cơ bản lẫn Core Web Vitals, schema, canonical, mobile, sitemap và robots.',
    'pSEO phải có cấu trúc template, chiến lược URL, kiến trúc scale và ràng buộc chất lượng.',
  ],
  expertiseAreasEn: ['SEO audits', 'Keyword research', 'Google Search Console', 'Core Web Vitals', 'JSON-LD schema', 'Programmatic SEO', 'Internal linking', 'Technical SEO'],
  expertiseAreasVi: ['SEO audit', 'Keyword research', 'Google Search Console', 'Core Web Vitals', 'Schema JSON-LD', 'Programmatic SEO', 'Internal linking', 'Technical SEO'],
  workflowModes: [
    { flag: 'audit', modeEn: 'Technical SEO audit for a site, page, or domain.', modeVi: 'Audit technical SEO cho site, page hoặc domain.', research: 'Crawl + refs', redTeam: 'Index blockers', validation: 'Audit report' },
    { flag: 'keywords', modeEn: 'Keyword research and planning with volume, difficulty, CPC, clustering, and content gaps.', modeVi: 'Keyword research và planning với volume, difficulty, CPC, clustering và content gap.', research: 'ReviewWeb.site', redTeam: 'Search intent mismatch', validation: 'Keyword report' },
    { flag: 'pseo', modeEn: 'Programmatic SEO template generation and scale planning.', modeVi: 'Tạo template programmatic SEO và lập kế hoạch scale.', research: 'Template refs', redTeam: 'Thin pages', validation: 'pSEO structure' },
  ],
  skillStack: [
    { name: 'seo-specialist', type: 'agent' },
    { name: 'attraction-specialist', type: 'agent' },
    { name: 'ReviewWeb.site API', type: 'tool' },
    { name: 'Google Search Console API', type: 'tool' },
  ],
  promptExamples: [
    { labelEn: 'Audit', labelVi: 'Audit', command: '/ak:seo audit https://example.com', whenEn: 'You need a technical SEO review for a site or page.', whenVi: 'Khi cần review technical SEO cho site hoặc page.', expectedEn: 'SEO audit report covering crawl, index, technical, on-page, and CWV issues.', expectedVi: 'Báo cáo SEO audit bao gồm crawl, index, technical, on-page và vấn đề CWV.', recommended: true },
    { labelEn: 'Keywords', labelVi: 'Keyword', command: '/ak:seo keywords product analytics software', whenEn: 'You need keyword demand, clusters, and content planning.', whenVi: 'Khi cần demand keyword, cluster và kế hoạch content.', expectedEn: 'Keyword report with volume, difficulty, CPC, clusters, and gaps.', expectedVi: 'Báo cáo keyword có volume, difficulty, CPC, cluster và gap.' },
    { labelEn: 'pSEO', labelVi: 'pSEO', command: '/ak:seo pseo city landing pages', whenEn: 'You want scalable page templates for programmatic SEO.', whenVi: 'Khi muốn template page scale được cho programmatic SEO.', expectedEn: 'pSEO template and URL strategy.', expectedVi: 'Template pSEO và chiến lược URL.' },
    { labelEn: 'Schema request', labelVi: 'Request schema', command: '/ak:seo schema pricing page', whenEn: 'Use only as a scoped JSON-LD request after checking the bundled tool effect.', whenVi: 'Chỉ dùng như request JSON-LD có scope rõ sau khi kiểm tra effect của tool đóng gói.', expectedEn: 'Schema guidance or artifact path with effect boundary noted.', expectedVi: 'Hướng dẫn schema hoặc path artifact kèm ranh giới effect.' },
  ],
  reportOutput: {
    titleEn: 'SEO Outputs',
    titleVi: 'Output SEO',
    patternEn: 'Audit, keyword, CWV, schema, sitemap, or pSEO assets',
    patternVi: 'Asset audit, keyword, CWV, schema, sitemap hoặc pSEO',
    locationEn: 'assets/reports/seo/, assets/seo/audits/, assets/seo/keywords/, assets/attraction/pseo-templates/, and assets/seo/schemas/',
    locationVi: 'assets/reports/seo/, assets/seo/audits/, assets/seo/keywords/, assets/attraction/pseo-templates/ và assets/seo/schemas/',
    descEn: 'Docs warn that overview and routed paths can differ; confirm the actual audit, keyword, pSEO, or schema path returned by the run.',
    descVi: 'Docs cảnh báo path overview và path theo route có thể khác nhau; hãy xác nhận path audit, keyword, pSEO hoặc schema thực sự do lần chạy trả về.',
  },
};

export default data;
