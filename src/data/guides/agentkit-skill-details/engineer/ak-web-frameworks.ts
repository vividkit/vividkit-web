import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-web-frameworks',
  command: '/ak:web-frameworks',
  kit: 'engineer',
  header: {
    titleEn: '/ak:web-frameworks — Modern React web apps',
    titleVi: '/ak:web-frameworks — App React hiện đại',
    taglineEn: 'Build modern React web apps with Next.js App Router, RSC, SSR/SSG/ISR, Turborepo monorepos, shared packages, caching, and RemixIcon UI polish.',
    taglineVi: 'Xây app React hiện đại với Next.js App Router, RSC, SSR/SSG/ISR, monorepo Turborepo, package dùng chung, cache và polish UI bằng RemixIcon.',
  },
  processFlow: [
    { number: 1, titleEn: 'Choose shape', titleVi: 'Chọn mô hình', descEn: 'Decide between a single Next.js app and a Turborepo monorepo based on shared apps, packages, and team needs.', descVi: 'Chọn app Next.js đơn lẻ hay monorepo Turborepo dựa trên nhu cầu nhiều app, package dùng chung và đội nhóm.' },
    { number: 2, titleEn: 'Initialize stack', titleVi: 'Khởi tạo stack', descEn: 'Create the project with create-next-app or create-turbo, then add RemixIcon where the UI needs professional iconography.', descVi: 'Tạo dự án bằng create-next-app hoặc create-turbo, rồi thêm RemixIcon nơi UI cần bộ icon chuyên nghiệp.' },
    { number: 3, titleEn: 'Lay out routes', titleVi: 'Dựng route', descEn: 'Use App Router layouts, pages, loading states, error states, and metadata for the application structure.', descVi: 'Dùng layout, page, loading state, error state và metadata của App Router để dựng cấu trúc ứng dụng.' },
    { number: 4, titleEn: 'Split packages', titleVi: 'Tách package', descEn: 'For monorepos, separate apps from ui, config, types, and API-client packages with clear workspace dependencies.', descVi: 'Với monorepo, tách apps khỏi các package ui, config, types và API client bằng dependency workspace rõ ràng.' },
    { number: 5, titleEn: 'Design data flow', titleVi: 'Thiết kế dữ liệu', descEn: 'Select Server Components by default, use Client Components only when needed, and define fetch caching/revalidation behavior.', descVi: 'Mặc định chọn Server Components, chỉ dùng Client Components khi cần, và định nghĩa hành vi cache/revalidate cho fetch.' },
    { number: 6, titleEn: 'Optimize assets', titleVi: 'Tối ưu asset', descEn: 'Apply Next.js image, font, script, bundle, SEO, and performance optimization patterns.', descVi: 'Áp các pattern tối ưu image, font, script, bundle, SEO và hiệu năng của Next.js.' },
    { number: 7, titleEn: 'Configure pipeline', titleVi: 'Cấu hình pipeline', descEn: 'For Turborepo, define task dependencies, outputs, persistent dev tasks, filters, and remote caching.', descVi: 'Với Turborepo, định nghĩa dependency task, outputs, task dev chạy lâu, filter và remote cache.' },
    { number: 8, titleEn: 'Ship safely', titleVi: 'Ship an toàn', descEn: 'Keep production apps on patched stable Next.js releases and wire CI/CD for build, test, lint, and deployment.', descVi: 'Giữ app production trên bản Next.js stable đã vá lỗi và nối CI/CD cho build, test, lint và deploy.' },
  ],
  corePrinciplesEn: [
    'Use Next.js for SSR, SSG, RSC, routing, metadata, and built-in optimization.',
    'Use Turborepo when multiple apps or packages must share code and cached pipelines.',
    'Default to Server Components; introduce Client Components only for client-side behavior.',
    'Keep stable production releases separate from canary framework drift.',
    'Use RemixIcon accessibly: aria labels, currentColor, and consistent 24x24 alignment.',
  ],
  corePrinciplesVi: [
    'Dùng Next.js cho SSR, SSG, RSC, routing, metadata và tối ưu tích hợp sẵn.',
    'Dùng Turborepo khi nhiều app hoặc package cần chia sẻ code và pipeline có cache.',
    'Mặc định dùng Server Components; chỉ đưa Client Components vào khi cần hành vi phía client.',
    'Tách bản stable cho production khỏi biến động canary của framework.',
    'Dùng RemixIcon có accessibility: aria label, currentColor và căn chuẩn 24x24.',
  ],
  skillStack: [
    { name: 'Next.js App Router', type: 'tool' },
    { name: 'React Server Components', type: 'tool' },
    { name: 'Turborepo', type: 'tool' },
    { name: 'RemixIcon', type: 'tool' },
    { name: 'nextjs_init.py', type: 'tool' },
    { name: 'turborepo_migrate.py', type: 'tool' },
  ],
  specialOperations: [
    { id: 'single-app', titleEn: 'Single application', titleVi: 'Ứng dụng đơn', descEn: 'Best for e-commerce, marketing, SaaS, docs, blogs, and content platforms that do not need shared packages.', descVi: 'Phù hợp e-commerce, marketing, SaaS, docs, blog và nền tảng nội dung chưa cần package dùng chung.', color: 'sky' },
    { id: 'monorepo', titleEn: 'Monorepo', titleVi: 'Monorepo', descEn: 'Best for microfrontends, multi-tenant products, internal tools, and design systems with shared libraries.', descVi: 'Phù hợp microfrontend, sản phẩm multi-tenant, internal tool và design system có thư viện dùng chung.', color: 'violet' },
    { id: 'cache-strategy', titleEn: 'Caching strategy', titleVi: 'Chiến lược cache', descEn: 'Use force-cache, revalidate, or no-store deliberately based on freshness and performance needs.', descVi: 'Chọn force-cache, revalidate hoặc no-store có chủ ý theo nhu cầu độ mới dữ liệu và hiệu năng.', color: 'amber' },
  ],
  promptExamples: [
    { labelEn: 'Plan a Next app', labelVi: 'Lên hướng app Next', command: '/ak:web-frameworks Next.js SaaS dashboard with App Router and cached data fetching', whenEn: 'You are starting or restructuring a standalone React product.', whenVi: 'Đang bắt đầu hoặc tái cấu trúc một sản phẩm React đơn lẻ.', expectedEn: 'Recommends App Router structure, RSC/client boundaries, caching, loading/error states, and optimization steps.', expectedVi: 'Đề xuất cấu trúc App Router, ranh giới RSC/client, cache, loading/error state và các bước tối ưu.', recommended: true },
    { labelEn: 'Plan a monorepo', labelVi: 'Lên hướng monorepo', command: '/ak:web-frameworks Turborepo shared UI package for web and admin apps', whenEn: 'Several apps need shared UI, config, types, or API client packages.', whenVi: 'Nhiều app cần dùng chung UI, config, types hoặc API client.', expectedEn: 'Maps apps/packages layout, turbo task dependencies, outputs, filters, and remote caching.', expectedVi: 'Vạch layout apps/packages, dependency task turbo, outputs, filter và remote cache.' },
    { labelEn: 'Add icons', labelVi: 'Thêm icon', command: '/ak:web-frameworks RemixIcon integration for our navigation and buttons', whenEn: 'A UI needs consistent line/fill icons with accessibility guidance.', whenVi: 'UI cần icon line/fill nhất quán kèm hướng dẫn accessibility.', expectedEn: 'Shows RemixIcon import/use patterns and accessibility constraints.', expectedVi: 'Chỉ ra cách import/dùng RemixIcon và ràng buộc accessibility.' },
  ],
};

export default data;
