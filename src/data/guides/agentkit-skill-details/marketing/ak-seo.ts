import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-seo',
  command: '/ak:seo',
  kit: 'marketer',
  header: {
    titleEn: '/ak:seo',
    titleVi: '/ak:seo',
    taglineEn: 'SEO toolkit for audits, keyword research, programmatic SEO, on-page optimization, JSON-LD schema, Google Search Console data, and Core Web Vitals.',
    taglineVi: 'Bộ công cụ SEO cho audit, keyword research, programmatic SEO, tối ưu on-page, schema JSON-LD, dữ liệu Google Search Console và Core Web Vitals.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Intent', titleVi: 'Đọc intent', descEn: 'Route audit, keywords, pseo, optimize, schema, or target-only requests from the first argument.', descVi: 'Định tuyến audit, keywords, pseo, optimize, schema hoặc request chỉ có target từ argument đầu tiên.' },
    { number: 2, titleEn: 'Load Reference', titleVi: 'Nạp reference', descEn: 'Load the matching SEO reference for audit, keyword research, pSEO, technical SEO, on-page SEO, schema, or links.', descVi: 'Nạp reference SEO phù hợp cho audit, keyword research, pSEO, technical SEO, on-page SEO, schema hoặc link building.' },
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
    { flag: 'optimize', modeEn: 'On-page and technical optimization for a target page or content set.', modeVi: 'Tối ưu on-page và technical cho page hoặc bộ content mục tiêu.', research: 'Page content', redTeam: 'Over-optimization', validation: 'Optimization plan' },
    { flag: 'schema', modeEn: 'Generate or validate JSON-LD schema for a page.', modeVi: 'Tạo hoặc validate schema JSON-LD cho một trang.', research: 'Page type', redTeam: 'Invalid markup', validation: 'Schema file' },
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
    { labelEn: 'Schema', labelVi: 'Schema', command: '/ak:seo schema pricing page', whenEn: 'You need JSON-LD schema for a page type.', whenVi: 'Khi cần schema JSON-LD cho một loại trang.', expectedEn: 'Schema asset and validation guidance.', expectedVi: 'Schema asset và hướng dẫn validate.' },
  ],
  reportOutput: {
    titleEn: 'SEO Outputs',
    titleVi: 'Output SEO',
    patternEn: 'Audit, keyword, CWV, schema, sitemap, or pSEO assets',
    patternVi: 'Asset audit, keyword, CWV, schema, sitemap hoặc pSEO',
    locationEn: 'assets/reports/seo/ and assets/seo/schemas/',
    locationVi: 'assets/reports/seo/ và assets/seo/schemas/',
    descEn: 'Outputs include SEO reports, keyword plans, Core Web Vitals findings, schema files, sitemaps, and pSEO pages.',
    descVi: 'Output gồm SEO report, keyword plan, finding Core Web Vitals, schema file, sitemap và trang pSEO.',
  },
};

export default data;
