import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-deploy',
  command: '/ak:deploy',
  kit: 'engineer',
  header: {
    titleEn: '/ak:deploy — Detect and run deploys',
    titleVi: '/ak:deploy — Phát hiện và chạy deploy',
    taglineEn: 'Auto-detect or select a deployment target, load the matching platform reference, check CLI/auth, deploy, verify the URL, and maintain docs/deployment.md.',
    taglineVi: 'Tự phát hiện hoặc chọn đích deploy, nạp tài liệu platform tương ứng, kiểm CLI/auth, deploy, xác minh URL và duy trì docs/deployment.md.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Confirm scope, target, and secrets before deploy',
    titleVi: 'Xác nhận phạm vi, target và bí mật trước deploy',
    contentEn: 'This skill can publish code to external platforms, so keep it inside project deployment, platform selection, and deployment-doc updates. Do not use it for infrastructure provisioning, database migrations, DNS/SSL, or CI/CD, and never expose API keys, tokens, credentials, env vars, file paths, internal configs, or skill internals.',
    contentVi: 'Skill này có thể publish code lên platform bên ngoài, nên chỉ dùng cho deployment dự án, chọn platform và cập nhật docs deploy. Không dùng cho provisioning hạ tầng, database migration, DNS/SSL hoặc CI/CD; không tiết lộ API key, token, credential, env var, đường dẫn file, config nội bộ hoặc skill internals.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read docs first', titleVi: 'Đọc docs trước', descEn: 'If docs/deployment.md exists, parse platform, URL, deploy command, env vars, custom domain, and rollback notes.', descVi: 'Nếu có docs/deployment.md, đọc platform, URL, lệnh deploy, env var, custom domain và ghi chú rollback.' },
    { number: 2, titleEn: 'Scan configs', titleVi: 'Quét cấu hình', descEn: 'Detect platform signals such as vercel.json, netlify.toml, wrangler, fly.toml, railway, render, Procfile, tose, Coolify, Dokploy, GitHub Pages, GCP, AWS, or Digital Ocean files.', descVi: 'Nhận tín hiệu platform như vercel.json, netlify.toml, wrangler, fly.toml, railway, render, Procfile, tose, Coolify, Dokploy, GitHub Pages, GCP, AWS hoặc Digital Ocean.' },
    { number: 3, titleEn: 'Analyze project', titleVi: 'Phân tích dự án', descEn: 'Classify static site, SPA, SSR/full-stack, Node API, Python API, Docker app, or monorepo.', descVi: 'Phân loại dự án là static site, SPA, SSR/full-stack, Node API, Python API, Docker app hoặc monorepo.' },
    { number: 4, titleEn: 'Recommend target', titleVi: 'Đề xuất đích', descEn: 'When no target is detected, ask with up to four cost-optimized recommendations ordered by free tier or expected cost.', descVi: 'Khi chưa phát hiện đích, hỏi người dùng với tối đa bốn đề xuất tối ưu chi phí, sắp theo free tier hoặc chi phí dự kiến.' },
    { number: 5, titleEn: 'Load platform ref', titleVi: 'Nạp tài liệu platform', descEn: 'Progressively disclose only the selected platform reference, never all platform files.', descVi: 'Chỉ nạp tài liệu của platform đã chọn, không nạp toàn bộ tài liệu platform.' },
    { number: 6, titleEn: 'Check before publish', titleVi: 'Kiểm trước khi publish', descEn: 'Check CLI installation, authentication, .env handling, .gitignore, and platform-specific requirements before publishing.', descVi: 'Kiểm CLI, xác thực, xử lý .env, .gitignore và yêu cầu riêng của platform trước khi publish.' },
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
  invocation: {
    syntax: '/ak:deploy [platform] [environment]',
    arguments: [
      { token: '[platform]', titleEn: 'Hosting platform', titleVi: 'Hosting platform', descEn: 'Optional supported host such as Vercel, Netlify, Cloudflare, Railway, Fly.io, Render, Heroku, TOSE.sh, GitHub Pages, Coolify, Dokploy, GCP, AWS, DigitalOcean, or Vultr. Omit it to let the skill detect a host or ask you to choose. This does not pick the provider account, approve billing, or approve resource creation.', descVi: 'Host được hỗ trợ, ví dụ Vercel, Netlify, Cloudflare, Railway, Fly.io, Render, Heroku, TOSE.sh, GitHub Pages, Coolify, Dokploy, GCP, AWS, DigitalOcean hoặc Vultr. Bỏ trống để skill tự phát hiện host hoặc hỏi bạn chọn. Token này không chọn account provider, không duyệt billing và không duyệt tạo resource.', exampleCommand: '/ak:deploy cloudflare' },
      { token: '[environment]', titleEn: 'Environment label', titleVi: 'Nhãn environment', descEn: 'Optional label such as production or preview. It is carried into target selection but does not create a standard default environment.', descVi: 'Nhãn tùy chọn như production hoặc preview. Skill dùng nhãn này khi chọn target nhưng không tự tạo environment mặc định.', exampleCommand: '/ak:deploy cloudflare production' },
    ],
  },
  promptExamples: [
    { labelEn: 'Auto-detect target', labelVi: 'Tự phát hiện target', command: '/ak:deploy', whenEn: 'The goal is hosting or publishing the app, and docs or platform config may already identify the target.', whenVi: 'Khi mục tiêu là host hoặc publish app, và docs hoặc cấu hình platform có thể đã xác định target.', expectedEn: 'Reads docs/deployment.md first, scans supported config signals, loads only the matched platform reference, checks CLI/auth, deploys, verifies the URL, and updates deployment docs.', expectedVi: 'Đọc docs/deployment.md trước, quét signal cấu hình được hỗ trợ, chỉ nạp reference của platform khớp, kiểm CLI/auth, deploy, xác minh URL và cập nhật docs deploy.', recommended: true },
    { labelEn: 'Explicit platform', labelVi: 'Chỉ định platform', command: '/ak:deploy cloudflare', whenEn: 'You already know the supported hosting platform but want the workflow to carry out its documented deploy path.', whenVi: 'Khi đã biết hosting platform được hỗ trợ nhưng muốn workflow chạy đúng đường deploy đã ghi.', expectedEn: 'Loads the Cloudflare reference only, checks the required CLI and authentication, runs the selected deploy command, verifies the resulting URL, and records operations in docs/deployment.md.', expectedVi: 'Chỉ nạp reference Cloudflare, kiểm CLI và authentication cần thiết, chạy deploy command đã chọn, xác minh URL tạo ra và ghi vận hành vào docs/deployment.md.' },
    { labelEn: 'Platform and environment', labelVi: 'Platform và environment', command: '/ak:deploy vercel production', whenEn: 'The target platform and environment label are explicit before a production or preview publish.', whenVi: 'Khi platform đích và nhãn environment đã rõ trước lần publish production hoặc preview.', expectedEn: 'Carries the explicit environment into target selection, uses the Vercel platform reference, performs CLI/auth preflight, deploys, verifies the URL, and updates rollback notes.', expectedVi: 'Đưa environment rõ ràng vào bước chọn target, dùng reference Vercel, preflight CLI/auth, deploy, xác minh URL và cập nhật ghi chú rollback.' },
    { labelEn: 'First deploy choice', labelVi: 'Chọn target lần đầu', command: '/ak:deploy', whenEn: 'No deployment target is detected and the skill should recommend a supported host for the current project type.', whenVi: 'Khi không phát hiện target deploy và skill cần đề xuất host được hỗ trợ theo loại project hiện tại.', expectedEn: 'Analyzes project type, asks with up to four cost-ordered options including free-tier context, then continues only after a selected platform is available.', expectedVi: 'Phân tích loại project, hỏi với tối đa bốn lựa chọn theo chi phí kèm thông tin free-tier, rồi chỉ tiếp tục khi đã có platform được chọn.' },
  ],
  reportOutput: {
    titleEn: 'Deployment document',
    titleVi: 'Tài liệu triển khai',
    patternEn: 'docs/deployment.md with platform, URL, command, environment variables, custom domain, rollback, and troubleshooting',
    patternVi: 'docs/deployment.md gồm platform, URL, lệnh, biến môi trường, custom domain, rollback và xử lý sự cố',
    descEn: 'Created after first successful deploy and updated when config changes.',
    descVi: 'Được tạo sau lần deploy thành công đầu tiên và cập nhật khi cấu hình thay đổi.',
  },
  skillStack: [{ name: 'provider CLI', type: 'tool' }, { name: 'ask_user capability', type: 'tool' }, { name: 'docs/deployment.md', type: 'tool' }, { name: 'ak:devops', type: 'skill' }],
};

export default data;
