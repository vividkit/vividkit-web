import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-social',
  command: '/ak:social',
  kit: 'marketer',
  header: {
    titleEn: '/ak:social — Social content and publishing',
    titleVi: '/ak:social — Nội dung và publish social',
    taglineEn: 'Social media creation, scheduling, and real publishing through provider adapters for X, LinkedIn, Instagram, TikTok, YouTube, Facebook, Threads, Bluesky, Mastodon, and more.',
    taglineVi: 'Tạo nội dung, lên lịch và publish thật qua provider adapter cho X, LinkedIn, Instagram, TikTok, YouTube, Facebook, Threads, Bluesky, Mastodon và nhiều kênh khác.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'PROVIDER AND SECRET SAFETY',
    titleVi: 'AN TOÀN PROVIDER VÀ SECRET',
    contentEn: 'Secrets stay in .env files and logs only show redacted safe headers. Publishing must go through the adapter interface, never direct provider REST calls from other scripts. --dry-run validates without touching the network.',
    contentVi: 'Secret phải ở trong file .env và log chỉ hiển thị header an toàn đã redact. Publish phải đi qua adapter interface, không gọi trực tiếp REST API provider từ script khác. --dry-run validate mà không đụng network.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Request', titleVi: 'Đọc request', descEn: 'Read publish, schedule, list-providers, or a platform plus content type such as post, thread, carousel, story, or reel.', descVi: 'Đọc publish, schedule, list-providers hoặc platform kèm content type như post, thread, carousel, story hoặc reel.' },
    { number: 2, titleEn: 'Load Config', titleVi: 'Nạp config', descEn: 'Resolve project and global config, secrets, provider defaults, channel routing, and writing styles.', descVi: 'Resolve config project/global, secret, provider mặc định, route channel và writing style.' },
    { number: 3, titleEn: 'Draft Strategy', titleVi: 'Dựng chiến lược nội dung', descEn: 'For drafting, use social-media-manager plus content-creator or copywriter and apply platform-specific style.', descVi: 'Với drafting, dùng social-media-manager cùng content-creator hoặc copywriter và áp dụng style theo platform.' },
    { number: 4, titleEn: 'Format Platform', titleVi: 'Format theo nền tảng', descEn: 'Apply platform specs, hook writing, hashtags, thread, carousel, reel, and engagement templates.', descVi: 'Áp dụng spec platform, viết hook, hashtag, thread, carousel, reel và engagement template.' },
    { number: 5, titleEn: 'Resolve Provider', titleVi: 'Resolve provider', descEn: 'Provider precedence is explicit CLI provider, channel config, default provider, then clear failure with env guidance.', descVi: 'Thứ tự provider là provider explicit, config theo channel, provider mặc định, rồi fail rõ kèm hướng dẫn env.' },
    { number: 6, titleEn: 'Validate Content', titleVi: 'Validate nội dung', descEn: 'Check content against platform rules, provider capabilities, rate limits, and missing credential states.', descVi: 'Kiểm tra content theo rule platform, capability provider, rate limit và trạng thái thiếu credential.' },
    { number: 7, titleEn: 'Publish or Schedule', titleVi: 'Publish hoặc schedule', descEn: 'Run the provider adapter for publish or schedule flows, or use legacy scheduling helper when requested.', descVi: 'Chạy provider adapter cho flow publish/schedule, hoặc dùng helper schedule legacy khi được yêu cầu.' },
    { number: 8, titleEn: 'Save Drafts', titleVi: 'Lưu draft', descEn: 'Write drafts to assets/posts/{platform}/{date}-{slug}.md and report provider result or validation output.', descVi: 'Lưu draft vào assets/posts/{platform}/{date}-{slug}.md và báo kết quả provider hoặc validation.' },
  ],
  corePrinciplesEn: [
    'Drafting and publishing are distinct paths: draft content first, then route publish/schedule through adapters.',
    'Provider resolution is deterministic: explicit provider, channel map, default provider, then a clear missing-provider failure.',
    'Platform fit matters: X threads, LinkedIn posts, Instagram carousels, TikTok reels, YouTube, Facebook, and emerging networks have different rules.',
    'Secrets and API keys are never exposed; adapter logs redact unsafe headers and name the env var users need to set.',
  ],
  corePrinciplesVi: [
    'Drafting và publishing là hai đường riêng: viết content trước, rồi route publish/schedule qua adapter.',
    'Resolve provider có thứ tự cố định: provider explicit, channel map, provider mặc định, rồi fail rõ nếu thiếu provider.',
    'Độ phù hợp platform rất quan trọng: X thread, LinkedIn post, Instagram carousel, TikTok reel, YouTube, Facebook và mạng mới đều có rule khác nhau.',
    'Secret và API key không bao giờ được lộ; log adapter redact header không an toàn và nêu env var cần cấu hình.',
  ],
  expertiseAreasEn: ['Platform-specific posts', 'Threads and carousels', 'Provider adapters', 'Scheduling', 'Publishing', 'Writing styles', 'Hook writing', 'Rate limits'],
  expertiseAreasVi: ['Post theo platform', 'Thread và carousel', 'Provider adapter', 'Scheduling', 'Publishing', 'Writing style', 'Viết hook', 'Rate limit'],
  workflowModes: [
    { flag: '<platform> <type>', modeEn: 'Draft platform-specific content for x, linkedin, instagram, tiktok, youtube, facebook, threads, bluesky, mastodon, pinterest, or reddit.', modeVi: 'Draft content theo platform cho x, linkedin, instagram, tiktok, youtube, facebook, threads, bluesky, mastodon, pinterest hoặc reddit.', research: 'Platform specs', redTeam: 'Format mismatch', validation: 'Draft saved' },
    { flag: 'publish', modeEn: 'Publish or schedule through a provider adapter.', modeVi: 'Publish hoặc schedule qua provider adapter.', research: 'Provider config', redTeam: 'Missing env', validation: 'Adapter result' },
    { flag: 'schedule', modeEn: 'Use the legacy scheduling helper when compatibility is needed.', modeVi: 'Dùng helper schedule legacy khi cần compatibility.', research: 'Schedule args', redTeam: 'Provider mismatch', validation: 'Scheduled output' },
    { flag: 'list-providers', modeEn: 'Print adapters, channels, and environment status.', modeVi: 'In danh sách adapter, channel và trạng thái môi trường.', research: 'Config + env', redTeam: 'Secret leakage', validation: 'Provider list' },
  ],
  skillStack: [
    { name: 'social-media-manager', type: 'agent' },
    { name: 'content-creator', type: 'agent' },
    { name: 'copywriter', type: 'agent' },
    { name: 'Postiz', type: 'tool' },
    { name: 'Buffer', type: 'tool' },
    { name: 'Typefully', type: 'tool' },
  ],
  promptExamples: [
    { labelEn: 'LinkedIn post', labelVi: 'Post LinkedIn', command: '/ak:social linkedin post', whenEn: 'You need a platform-optimized LinkedIn post draft.', whenVi: 'Khi cần draft post LinkedIn tối ưu theo nền tảng.', expectedEn: 'LinkedIn-ready copy with hook, structure, and saved draft.', expectedVi: 'Copy sẵn cho LinkedIn với hook, cấu trúc và draft đã lưu.', recommended: true },
    { labelEn: 'X thread', labelVi: 'Thread X', command: '/ak:social x thread', whenEn: 'You need a thread with platform-appropriate hooks and sequence.', whenVi: 'Khi cần thread với hook và chuỗi nội dung đúng platform.', expectedEn: 'Thread draft formatted for X/Twitter.', expectedVi: 'Draft thread format cho X/Twitter.' },
    { labelEn: 'Publish', labelVi: 'Publish', command: '/ak:social publish', whenEn: 'You need to publish or schedule content through configured providers.', whenVi: 'Khi cần publish hoặc schedule content qua provider đã cấu hình.', expectedEn: 'Provider-routed publish or schedule result.', expectedVi: 'Kết quả publish hoặc schedule đã route qua provider.' },
    { labelEn: 'Providers', labelVi: 'Provider', command: '/ak:social list-providers', whenEn: 'You need to see available adapters, channels, and env status.', whenVi: 'Khi cần xem adapter, channel và trạng thái env hiện có.', expectedEn: 'Provider inventory without exposing secrets.', expectedVi: 'Danh sách provider không lộ secret.' },
  ],
  reportOutput: {
    titleEn: 'Social Outputs',
    titleVi: 'Output social',
    patternEn: 'Drafts → assets/posts/{platform}/{date}-{slug}.md',
    patternVi: 'Draft → assets/posts/{platform}/{date}-{slug}.md',
    locationEn: 'assets/posts/{platform}/',
    locationVi: 'assets/posts/{platform}/',
    descEn: 'Drafts are saved by platform; publish and schedule flows report provider adapter status.',
    descVi: 'Draft lưu theo platform; flow publish và schedule báo trạng thái provider adapter.',
  },
};

export default data;
