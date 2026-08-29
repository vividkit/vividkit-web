import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-better-auth',
  command: '/ak:better-auth',
  kit: 'engineer',
  header: {
    titleEn: '/ak:better-auth — Better Auth integration',
    titleVi: '/ak:better-auth — Tích hợp Better Auth',
    taglineEn:
      'Adds TypeScript authentication with Better Auth: email/password, OAuth, sessions, protected routes, 2FA, passkeys, magic links, organizations, rate limiting, framework handlers, migrations, and security-sensitive plugin checks.',
    taglineVi:
      'Thêm xác thực TypeScript bằng Better Auth: email/password, OAuth, session, route được bảo vệ, 2FA, passkey, magic link, organization, rate limit, handler theo framework, migration và kiểm tra plugin nhạy cảm bảo mật.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Verify security-sensitive plugin fixes',
    titleVi: 'Phải kiểm tra bản vá cho plugin nhạy cảm',
    contentEn:
      'When enabling oidc-provider, mcp, magicLink, organizations, invitations, or device authorization paths, verify the installed Better Auth version includes current fixes and keep safer defaults unless the threat model explicitly says otherwise.',
    contentVi:
      'Khi bật oidc-provider, mcp, magicLink, organization, invitation hoặc device authorization, phải kiểm tra phiên bản Better Auth đã có bản vá hiện hành và giữ mặc định an toàn trừ khi threat model cho phép khác.',
  },
  processFlow: [
    { number: 1, titleEn: 'Choose auth method', titleVi: 'Chọn cách đăng nhập', descEn: 'Pick email/password, OAuth, passkeys, magic link, organizations, rate limiting, or a combination based on user friction, security, browser support, and enterprise needs.', descVi: 'Chọn email/password, OAuth, passkey, magic link, organization, rate limit hoặc kết hợp theo ma sát người dùng, bảo mật, hỗ trợ trình duyệt và nhu cầu doanh nghiệp.' },
    { number: 2, titleEn: 'Install and env', titleVi: 'Cài đặt và env', descEn: 'Install better-auth, set BETTER_AUTH_SECRET and BETTER_AUTH_URL, then add provider secrets such as GitHub or Google only where needed.', descVi: 'Cài better-auth, đặt BETTER_AUTH_SECRET và BETTER_AUTH_URL, rồi thêm secret provider như GitHub hoặc Google chỉ khi cần.' },
    { number: 3, titleEn: 'Create server auth', titleVi: 'Tạo auth server', descEn: 'Define the betterAuth server instance with database config, email/password, social providers, and selected plugins.', descVi: 'Định nghĩa instance server betterAuth với cấu hình database, email/password, social provider và plugin đã chọn.' },
    { number: 4, titleEn: 'Generate schema', titleVi: 'Sinh schema', descEn: 'Run Better Auth CLI generate and migrate where supported, and regenerate schema whenever plugins add tables or fields.', descVi: 'Chạy CLI Better Auth generate và migrate khi được hỗ trợ, và sinh lại schema mỗi khi plugin thêm bảng hoặc trường.' },
    { number: 5, titleEn: 'Mount handlers', titleVi: 'Gắn handler', descEn: 'Wire the framework API handler, such as Next.js App Router toNextJsHandler, or the matching reference for Nuxt, SvelteKit, Remix, Astro, Hono, or Express.', descVi: 'Nối handler API theo framework, như toNextJsHandler cho Next.js App Router, hoặc tham chiếu tương ứng cho Nuxt, SvelteKit, Remix, Astro, Hono hay Express.' },
    { number: 6, titleEn: 'Add client and UI', titleVi: 'Thêm client và UI', descEn: 'Create the auth client, implement sign-up, sign-in, social login, session reads, protected routes, and middleware.', descVi: 'Tạo auth client, triển khai đăng ký, đăng nhập, social login, đọc session, route được bảo vệ và middleware.' },
    { number: 7, titleEn: 'Harden production', titleVi: 'Gia cố production', descEn: 'Configure email sending, verification/reset flows, rate limiting, error handling, safer plugin defaults, and complete end-to-end auth flow tests.', descVi: 'Cấu hình gửi email, luồng xác minh/reset, rate limit, xử lý lỗi, mặc định plugin an toàn và test end-to-end toàn bộ luồng auth.' },
  ],
  corePrinciplesEn: [
    'Better Auth is framework-agnostic but every framework still needs the correct server handler and client wiring.',
    'Start with the simplest auth method that meets security and user-experience needs, then add plugins deliberately.',
    'Schema generation follows feature selection; plugin changes often require regenerated tables or fields.',
    'Security defaults matter: single-use magic links, verified invitations, confidential clients, PKCE, and bound device codes prevent real attacks.',
  ],
  corePrinciplesVi: [
    'Better Auth không phụ thuộc framework nhưng mỗi framework vẫn cần handler server và client đúng cách.',
    'Bắt đầu bằng phương thức auth đơn giản nhất đáp ứng bảo mật và trải nghiệm, rồi thêm plugin có chủ đích.',
    'Sinh schema đi sau chọn tính năng; thay đổi plugin thường cần sinh lại bảng hoặc trường.',
    'Mặc định bảo mật rất quan trọng: magic link dùng một lần, invitation đã xác minh, client bí mật, PKCE và device code gắn session chặn lỗi thật.',
  ],
  expertiseAreasEn: ['Email/password auth', 'OAuth providers', 'Sessions and protected routes', '2FA and passkeys', 'Organizations and RBAC', 'Auth schema migrations'],
  expertiseAreasVi: ['Auth email/password', 'Provider OAuth', 'Session và route bảo vệ', '2FA và passkey', 'Organization và RBAC', 'Migration schema auth'],
  promptExamples: [
    { labelEn: 'Email/password setup', labelVi: 'Thiết lập email/password', command: '/ak:better-auth email-password', whenEn: 'Use for a standard TypeScript app with traditional accounts and session handling.', whenVi: 'Dùng cho app TypeScript tiêu chuẩn với tài khoản truyền thống và session.', expectedEn: 'Installs Better Auth, configures env, server, schema, handler, client, UI, routes, and tests.', expectedVi: 'Cài Better Auth, cấu hình env, server, schema, handler, client, UI, route và test.', recommended: true },
    { labelEn: 'Social OAuth', labelVi: 'OAuth mạng xã hội', command: '/ak:better-auth "GitHub and Google OAuth"', whenEn: 'Use when fast signup with social providers is the primary requirement.', whenVi: 'Dùng khi yêu cầu chính là đăng ký nhanh bằng provider xã hội.', expectedEn: 'Adds provider config, secrets, login calls, callback handling, session reads, and protected route checks.', expectedVi: 'Thêm cấu hình provider, secret, lời gọi login, xử lý callback, đọc session và kiểm tra route bảo vệ.' },
    { labelEn: 'Advanced auth', labelVi: 'Auth nâng cao', command: '/ak:better-auth "organizations with passkeys and 2FA"', whenEn: 'Use for team or enterprise auth where plugins and current security notes matter.', whenVi: 'Dùng cho auth nhóm/doanh nghiệp khi plugin và ghi chú bảo mật hiện hành quan trọng.', expectedEn: 'Selects plugins, regenerates schema, and verifies safer defaults for sensitive flows.', expectedVi: 'Chọn plugin, sinh lại schema và kiểm tra mặc định an toàn cho luồng nhạy cảm.' },
  ],
};

export default data;
