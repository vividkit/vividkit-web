import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-mintlify',
  command: '/ak:mintlify',
  kit: 'engineer',
  header: {
    titleEn: '/ak:mintlify — Mintlify docs sites',
    titleVi: '/ak:mintlify — Site docs Mintlify',
    taglineEn: 'Build and maintain Mintlify docs sites across docs.json, MDX components, navigation, frontmatter, theming, API docs, AI assets, deployment, and local Mintlify CLI checks.',
    taglineVi: 'Xây và bảo trì site docs Mintlify qua docs.json, component MDX, navigation, frontmatter, theme, docs API, asset AI, deploy và kiểm tra cục bộ bằng Mintlify CLI.',
  },
  processFlow: [
    { number: 1, titleEn: 'Scope the Mintlify task', titleVi: 'Khoanh vùng việc Mintlify', descEn: 'Confirm whether the request targets site structure, MDX content, docs.json config, navigation, API docs, AI docs assets, deployment, or local checks.', descVi: 'Xác nhận yêu cầu nhắm vào cấu trúc site, nội dung MDX, cấu hình docs.json, navigation, docs API, asset AI, deploy hay kiểm tra cục bộ.' },
    { number: 2, titleEn: 'Inspect docs.json', titleVi: 'Kiểm tra docs.json', descEn: 'Review theme, branding, colors, integrations, navigation groups, tabs, anchors, products, versions, languages, and existing page frontmatter.', descVi: 'Rà theme, branding, màu, integration, nhóm navigation, tab, anchor, product, version, ngôn ngữ và frontmatter trang hiện có.' },
    { number: 3, titleEn: 'Plan navigation and content', titleVi: 'Lập navigation và nội dung', descEn: 'Choose supported Mintlify themes, locales, navigation patterns, page modes, redirects, and component usage that match the existing docs site.', descVi: 'Chọn theme, locale, pattern navigation, page mode, redirect và cách dùng component Mintlify được hỗ trợ, khớp với site docs hiện có.' },
    { number: 4, titleEn: 'Author MDX pages', titleVi: 'Viết trang MDX', descEn: 'Write frontmatter and MDX with Mintlify-specific components such as Note, CodeGroup, Steps, API components, callouts, diagrams, and interactive blocks.', descVi: 'Viết frontmatter và MDX với component riêng của Mintlify như Note, CodeGroup, Steps, component API, callout, sơ đồ và khối tương tác.' },
    { number: 5, titleEn: 'Connect API and AI docs', titleVi: 'Kết nối docs API và AI', descEn: 'Add OpenAPI or AsyncAPI documentation, playgrounds, multi-language examples, llms.txt, skill.md, MCP support, and contextual AI menu options when needed.', descVi: 'Thêm tài liệu OpenAPI hoặc AsyncAPI, playground, ví dụ đa ngôn ngữ, llms.txt, skill.md, hỗ trợ MCP và tuỳ chọn menu AI theo ngữ cảnh khi cần.' },
    { number: 6, titleEn: 'Run local checks', titleVi: 'Chạy kiểm tra cục bộ', descEn: 'Use the relevant Mintlify CLI commands: mint dev for preview, mint validate for docs.json, mint broken-links, mint a11y, and mint openapi-check.', descVi: 'Dùng lệnh Mintlify CLI phù hợp: mint dev để preview, mint validate cho docs.json, mint broken-links, mint a11y và mint openapi-check.' },
    { number: 7, titleEn: 'Prepare deployment', titleVi: 'Chuẩn bị deploy', descEn: 'Align the site with GitHub or GitLab auto-deploy, preview deployments, custom domains, subpath hosting, or Vercel, Cloudflare, and AWS targets.', descVi: 'Căn site theo auto-deploy GitHub hoặc GitLab, preview deploy, custom domain, subpath hosting hoặc target Vercel, Cloudflare và AWS.' },
  ],
  corePrinciplesEn: ['docs.json defines theme, navigation, branding, colors, and integrations', 'MDX pages should use Mintlify frontmatter and built-in components', 'API docs can be generated from OpenAPI or AsyncAPI specs with playgrounds and examples', 'AI docs assets such as llms.txt and skill.md are first-class Mintlify deliverables'],
  corePrinciplesVi: ['docs.json định nghĩa theme, navigation, branding, màu và integration', 'Trang MDX nên dùng frontmatter và component tích hợp của Mintlify', 'Docs API có thể sinh từ spec OpenAPI hoặc AsyncAPI với playground và ví dụ', 'Asset docs cho AI như llms.txt và skill.md là deliverable Mintlify quan trọng'],
  expertiseAreasEn: ['docs.json configuration', 'MDX frontmatter and Mintlify components', 'Navigation architecture and localization', 'OpenAPI and AsyncAPI documentation', 'AI docs assets: llms.txt, skill.md, and MCP support', 'Mintlify CLI preview and validation'],
  expertiseAreasVi: ['Cấu hình docs.json', 'Frontmatter MDX và component Mintlify', 'Kiến trúc navigation và localization', 'Tài liệu OpenAPI và AsyncAPI', 'Asset docs AI: llms.txt, skill.md và hỗ trợ MCP', 'Preview và validate bằng Mintlify CLI'],
  promptExamples: [
    { labelEn: 'Docs structure', labelVi: 'Cấu trúc docs', command: '/ak:mintlify reorganize API docs navigation', whenEn: 'Use when Mintlify docs site structure, navigation, or page grouping needs work.', whenVi: 'Dùng khi cấu trúc site docs Mintlify, navigation hoặc nhóm trang cần chỉnh.', expectedEn: 'Reworks docs.json navigation using supported groups, tabs, anchors, products, versions, or language patterns while preserving page frontmatter.', expectedVi: 'Sắp xếp lại navigation docs.json bằng group, tab, anchor, product, version hoặc pattern ngôn ngữ được hỗ trợ, đồng thời giữ frontmatter trang.', recommended: true },
    { labelEn: 'MDX page', labelVi: 'Trang MDX', command: '/ak:mintlify add quickstart page with Steps and CodeGroup', whenEn: 'Use when adding or improving Mintlify MDX content pages.', whenVi: 'Dùng khi thêm hoặc cải thiện trang nội dung MDX của Mintlify.', expectedEn: 'Creates or updates an MDX page with correct frontmatter and Mintlify components such as Steps, CodeGroup, Note, callouts, or diagrams.', expectedVi: 'Tạo hoặc cập nhật trang MDX với frontmatter đúng và component Mintlify như Steps, CodeGroup, Note, callout hoặc sơ đồ.' },
    { labelEn: 'API docs', labelVi: 'Docs API', command: '/ak:mintlify connect OpenAPI spec to docs site', whenEn: 'Use when Mintlify interactive API documentation is needed.', whenVi: 'Dùng khi cần tài liệu API tương tác trong Mintlify.', expectedEn: 'Connects OpenAPI or AsyncAPI specs to Mintlify API documentation, including playground behavior, multi-language examples, and openapi-check validation.', expectedVi: 'Kết nối spec OpenAPI hoặc AsyncAPI vào tài liệu API Mintlify, gồm hành vi playground, ví dụ đa ngôn ngữ và validate bằng openapi-check.' },
    { labelEn: 'Local checks', labelVi: 'Kiểm tra cục bộ', command: '/ak:mintlify run local validation for docs.json and links', whenEn: 'Use when a Mintlify docs site needs preview, configuration, links, accessibility, or API-spec checks before shipping.', whenVi: 'Dùng khi site docs Mintlify cần preview, kiểm tra cấu hình, link, accessibility hoặc spec API trước khi giao.', expectedEn: 'Runs the relevant Mintlify CLI path such as mint dev, mint validate, mint broken-links, mint a11y, or mint openapi-check and reports fixes needed.', expectedVi: 'Chạy luồng Mintlify CLI phù hợp như mint dev, mint validate, mint broken-links, mint a11y hoặc mint openapi-check và báo phần cần sửa.' },
  ],
  skillStack: [
    { name: 'Mintlify CLI (mint)', type: 'tool' },
    { name: 'docs.json', type: 'tool' },
    { name: 'Mintlify MDX components', type: 'tool' },
    { name: 'OpenAPI / AsyncAPI specs', type: 'tool' },
    { name: 'llms.txt / skill.md', type: 'tool' },
  ],
  reportOutput: {
    titleEn: 'Mintlify Docs Site Output',
    titleVi: 'Output site docs Mintlify',
    patternEn: 'docs.json + MDX pages + API or AI docs assets + relevant mint CLI checks',
    patternVi: 'docs.json + trang MDX + asset docs API hoặc AI + kiểm tra mint CLI phù hợp',
    descEn: 'Mintlify work should preserve the site structure, use supported configuration and components, and run the local checks relevant to the changed surface.',
    descVi: 'Việc Mintlify nên giữ cấu trúc site, dùng cấu hình và component được hỗ trợ, rồi chạy kiểm tra cục bộ phù hợp với bề mặt đã đổi.',
  },
};

export default data;
