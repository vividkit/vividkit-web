import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-mintlify',
  command: '/ak:mintlify',
  kit: 'engineer',
  header: { titleEn: '/ak:mintlify', titleVi: '/ak:mintlify', taglineEn: 'Build and maintain Mintlify documentation sites: docs.json, MDX, navigation, API docs, AI assets, theming, validation, and deployment.', taglineVi: 'Xây và bảo trì site tài liệu Mintlify: docs.json, MDX, navigation, tài liệu API, asset AI, theme, validate và deploy.' },
  processFlow: [
    { number: 1, titleEn: 'Identify docs task', titleVi: 'Xác định việc docs', descEn: 'Clarify whether the work is site setup, docs.json, MDX pages, navigation, API docs, AI assets, validation, or deployment.', descVi: 'Làm rõ việc là tạo site, docs.json, trang MDX, navigation, tài liệu API, asset AI, validate hay deploy.' },
    { number: 2, titleEn: 'Inspect structure', titleVi: 'Kiểm tra cấu trúc', descEn: 'Read docs.json, page frontmatter, navigation groups, tabs, products, versions, languages, and existing component patterns.', descVi: 'Đọc docs.json, frontmatter trang, nhóm navigation, tab, product, version, ngôn ngữ và pattern component hiện có.' },
    { number: 3, titleEn: 'Choose theme and nav', titleVi: 'Chọn theme và navigation', descEn: 'Use supported Mintlify themes, colors, branding, groups, dropdowns, anchors, and localization intentionally.', descVi: 'Dùng theme, màu, branding, group, dropdown, anchor và localization được Mintlify hỗ trợ một cách có chủ đích.' },
    { number: 4, titleEn: 'Author MDX', titleVi: 'Viết MDX', descEn: 'Write frontmatter and content with Mintlify components such as Note, CodeGroup, Steps, API components, and diagrams.', descVi: 'Viết frontmatter và nội dung với component Mintlify như Note, CodeGroup, Steps, API component và sơ đồ.' },
    { number: 5, titleEn: 'Add API and AI assets', titleVi: 'Thêm API và asset AI', descEn: 'Wire OpenAPI/AsyncAPI docs, playgrounds, llms.txt, skill.md, and contextual AI integrations when required.', descVi: 'Kết nối docs OpenAPI/AsyncAPI, playground, llms.txt, skill.md và tích hợp AI theo ngữ cảnh khi cần.' },
    { number: 6, titleEn: 'Validate locally', titleVi: 'Validate cục bộ', descEn: 'Use Mintlify CLI checks for config, broken links, accessibility, and OpenAPI validity.', descVi: 'Dùng CLI Mintlify để kiểm tra config, link hỏng, accessibility và tính hợp lệ của OpenAPI.' },
    { number: 7, titleEn: 'Prepare deployment', titleVi: 'Chuẩn bị deploy', descEn: 'Confirm GitHub/GitLab integration, preview deployments, custom domains, subpath hosting, or provider targets.', descVi: 'Xác nhận tích hợp GitHub/GitLab, preview deploy, custom domain, subpath hosting hoặc nền tảng deploy.' },
  ],
  corePrinciplesEn: ['docs.json owns site structure and navigation', 'MDX pages should reuse Mintlify components instead of ad hoc HTML', 'Validate config, links, accessibility, and OpenAPI before shipping', 'AI docs assets are first-class docs deliverables'],
  corePrinciplesVi: ['docs.json là nơi quản lý cấu trúc site và navigation', 'Trang MDX nên dùng component Mintlify thay vì HTML tự chế', 'Validate config, link, accessibility và OpenAPI trước khi giao', 'Asset docs cho AI là sản phẩm tài liệu quan trọng, không phải phụ trợ'],
  expertiseAreasEn: ['docs.json configuration', 'MDX authoring and components', 'Navigation architecture', 'OpenAPI and AsyncAPI docs', 'llms.txt and skill.md', 'Mintlify CLI validation'],
  expertiseAreasVi: ['Cấu hình docs.json', 'Viết MDX và dùng component', 'Kiến trúc navigation', 'Docs OpenAPI và AsyncAPI', 'llms.txt và skill.md', 'Validate bằng Mintlify CLI'],
  promptExamples: [
    { labelEn: 'Docs structure', labelVi: 'Cấu trúc docs', command: '/ak:mintlify reorganize API docs navigation', whenEn: 'Use when docs.json navigation or page grouping needs work.', whenVi: 'Dùng khi cần chỉnh navigation docs.json hoặc nhóm trang.', expectedEn: 'Updated structure using Mintlify navigation patterns.', expectedVi: 'Cấu trúc được cập nhật theo pattern navigation của Mintlify.', recommended: true },
    { labelEn: 'MDX page', labelVi: 'Trang MDX', command: '/ak:mintlify add quickstart page with Steps and CodeGroup', whenEn: 'Use when adding or improving content pages.', whenVi: 'Dùng khi thêm hoặc cải thiện trang nội dung.', expectedEn: 'MDX with frontmatter and supported Mintlify components.', expectedVi: 'MDX có frontmatter và component Mintlify được hỗ trợ.' },
    { labelEn: 'API docs', labelVi: 'Docs API', command: '/ak:mintlify connect OpenAPI spec to docs site', whenEn: 'Use when interactive API documentation is needed.', whenVi: 'Dùng khi cần tài liệu API tương tác.', expectedEn: 'OpenAPI-aware documentation and validation path.', expectedVi: 'Tài liệu hiểu OpenAPI và có bước validate.' },
  ],
  skillStack: [{ name: 'Mintlify CLI', type: 'tool' }, { name: 'docs.json', type: 'tool' }, { name: 'MDX', type: 'tool' }, { name: 'OpenAPI', type: 'tool' }, { name: 'AsyncAPI', type: 'tool' }],
  reportOutput: { titleEn: 'Docs Site Output', titleVi: 'Output site tài liệu', patternEn: 'docs.json + MDX pages + validated docs assets', patternVi: 'docs.json + trang MDX + asset docs đã validate', descEn: 'Mintlify site changes should preserve navigation, use supported components, and pass local checks relevant to the edited surface.', descVi: 'Thay đổi site Mintlify phải giữ navigation nhất quán, dùng component được hỗ trợ và qua các kiểm tra cục bộ liên quan.' },
};

export default data;
