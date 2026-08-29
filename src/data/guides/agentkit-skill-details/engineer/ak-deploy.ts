import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-deploy',
  command: '/ak:deploy',
  kit: 'engineer',
  header: {
    titleEn: '/ak:deploy',
    titleVi: '/ak:deploy',
    taglineEn: 'Auto-detect deployment targets, choose cost-optimized hosting, run the platform-specific deploy path, verify the URL, and maintain docs/deployment.md.',
    taglineVi: 'Tự phát hiện đích deploy, chọn hosting tối ưu chi phí, chạy đúng quy trình từng platform, xác minh URL và duy trì docs/deployment.md.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Deployment scope and secrets are protected',
    titleVi: 'Bảo vệ phạm vi deploy và bí mật',
    contentEn: 'This skill deploys projects and updates deployment docs; it does not provision infrastructure, run database migrations, manage DNS/SSL, or create CI/CD. Never expose API keys, tokens, env vars, internal configs, or file paths in deployment output.',
    contentVi: 'Skill này deploy dự án và cập nhật docs triển khai; không provision hạ tầng, không chạy migration DB, không quản lý DNS/SSL, không tạo CI/CD. Không tiết lộ API key, token, env var, config nội bộ hoặc đường dẫn nhạy cảm trong output deploy.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read docs first', titleVi: 'Đọc docs trước', descEn: 'If docs/deployment.md exists, parse platform, URL, deploy command, env vars, custom domain, and rollback notes.', descVi: 'Nếu có docs/deployment.md, đọc platform, URL, lệnh deploy, env var, custom domain và ghi chú rollback.' },
    { number: 2, titleEn: 'Scan configs', titleVi: 'Quét cấu hình', descEn: 'Detect platform signals such as vercel.json, netlify.toml, wrangler, fly.toml, railway, render, Procfile, tose, Coolify, Dokploy, GitHub Pages, GCP, AWS, or Digital Ocean files.', descVi: 'Nhận tín hiệu platform như vercel.json, netlify.toml, wrangler, fly.toml, railway, render, Procfile, tose, Coolify, Dokploy, GitHub Pages, GCP, AWS hoặc Digital Ocean.' },
    { number: 3, titleEn: 'Analyze project', titleVi: 'Phân tích dự án', descEn: 'Classify static site, SPA, SSR/full-stack, Node API, Python API, Docker app, or monorepo.', descVi: 'Phân loại dự án là static site, SPA, SSR/full-stack, Node API, Python API, Docker app hoặc monorepo.' },
    { number: 4, titleEn: 'Recommend target', titleVi: 'Đề xuất đích', descEn: 'When no target is detected, ask with up to four cost-optimized recommendations ordered by free tier or expected cost.', descVi: 'Khi chưa phát hiện đích, hỏi người dùng với tối đa bốn đề xuất tối ưu chi phí, sắp theo free tier hoặc chi phí dự kiến.' },
    { number: 5, titleEn: 'Load platform ref', titleVi: 'Nạp tài liệu platform', descEn: 'Progressively disclose only the selected platform reference, never all platform files.', descVi: 'Chỉ nạp tài liệu của platform đã chọn, không nạp toàn bộ tài liệu platform.' },
    { number: 6, titleEn: 'Preflight deploy', titleVi: 'Preflight deploy', descEn: 'Check CLI installation, authentication, .env handling, .gitignore, and platform-specific requirements before publishing.', descVi: 'Kiểm CLI, xác thực, xử lý .env, .gitignore và yêu cầu riêng của platform trước khi publish.' },
    { number: 7, titleEn: 'Execute and verify', titleVi: 'Chạy và xác minh', descEn: 'Run the selected deploy command, read output, verify the deployment URL, and troubleshoot common failures.', descVi: 'Chạy lệnh deploy đã chọn, đọc output, xác minh URL triển khai và xử lý lỗi thường gặp.' },
    { number: 8, titleEn: 'Document result', titleVi: 'Ghi tài liệu', descEn: 'Create or update docs/deployment.md with platform, production URL, deploy command, env vars list, custom domain, rollback, and troubleshooting notes.', descVi: 'Tạo hoặc cập nhật docs/deployment.md với platform, URL production, lệnh deploy, danh sách env var, custom domain, rollback và ghi chú xử lý sự cố.' },
  ],
  corePrinciplesEn: ['Detect before asking; ask only when target remains unclear.', 'Choose the cheapest suitable platform first.', 'Load one platform reference, not every deployment guide.', 'Verify the live deployment URL before claiming success.', 'Escalate advanced infrastructure and troubleshooting to ak:devops.'],
  corePrinciplesVi: ['Phát hiện trước khi hỏi; chỉ hỏi khi đích vẫn chưa rõ.', 'Ưu tiên platform rẻ nhất nhưng vẫn phù hợp.', 'Chỉ nạp một tài liệu platform, không đọc hết mọi hướng dẫn deploy.', 'Xác minh URL live trước khi nói deploy thành công.', 'Chuyển hạ tầng nâng cao và sự cố phức tạp sang ak:devops.'],
  workflowModes: [
    { flag: 'Vercel / Netlify / Cloudflare', modeEn: 'Frontend and SSR', modeVi: 'Frontend và SSR', research: 'Config + framework scan', redTeam: 'Env and build output', validation: 'Verify production URL' },
    { flag: 'Railway / Render / Fly.io / TOSE.sh', modeEn: 'Backend and full-stack', modeVi: 'Backend và full-stack', research: 'Runtime + Docker scan', redTeam: 'Auth and service health', validation: 'Verify endpoint URL' },
    { flag: 'GitHub Pages / Cloudflare Pages', modeEn: 'Static site', modeVi: 'Website tĩnh', research: 'Static asset scan', redTeam: 'Build directory and routing', validation: 'Verify published pages' },
    { flag: 'Coolify / Dokploy', modeEn: 'Self-hosted', modeVi: 'Tự host', research: 'Docker/Compose signals', redTeam: 'Server boundary', validation: 'Verify deployed service' },
  ],
  promptExamples: [
    { labelEn: 'Auto deploy', labelVi: 'Deploy tự phát hiện', command: '/ak:deploy', whenEn: 'The current project contains deployment docs or platform config files.', whenVi: 'Khi dự án hiện tại có docs triển khai hoặc file cấu hình platform.', expectedEn: 'Detected target, platform-specific command, verified URL, and updated deployment docs.', expectedVi: 'Đích được phát hiện, lệnh đúng platform, URL đã xác minh và docs deploy cập nhật.', recommended: true },
    { labelEn: 'Explicit platform', labelVi: 'Chỉ định platform', command: '/ak:deploy vercel production', whenEn: 'You already know the target platform and environment.', whenVi: 'Khi đã biết platform và môi trường đích.', expectedEn: 'Vercel reference path, auth/build preflight, deploy, URL verification, docs update.', expectedVi: 'Quy trình Vercel, preflight auth/build, deploy, xác minh URL và cập nhật docs.' },
    { labelEn: 'Cost choice', labelVi: 'Chọn theo chi phí', command: '/ak:deploy choose the cheapest host for this static site', whenEn: 'No deployment config exists and platform choice should be cost-optimized.', whenVi: 'Khi chưa có cấu hình deploy và cần chọn platform theo chi phí.', expectedEn: 'Project-type analysis and up to four ranked hosting recommendations.', expectedVi: 'Phân tích loại dự án và tối đa bốn đề xuất hosting theo thứ hạng.' },
  ],
  reportOutput: {
    titleEn: 'Deployment document',
    titleVi: 'Tài liệu triển khai',
    patternEn: 'docs/deployment.md with platform, URL, command, environment variables, custom domain, rollback, and troubleshooting',
    patternVi: 'docs/deployment.md gồm platform, URL, lệnh, biến môi trường, custom domain, rollback và xử lý sự cố',
    descEn: 'Created after first successful deploy and updated when config changes.',
    descVi: 'Được tạo sau lần deploy thành công đầu tiên và cập nhật khi cấu hình thay đổi.',
  },
  skillStack: [{ name: 'platform CLI', type: 'tool' }, { name: 'docs/deployment.md', type: 'tool' }, { name: 'ak:devops', type: 'skill' }],
};

export default data;
