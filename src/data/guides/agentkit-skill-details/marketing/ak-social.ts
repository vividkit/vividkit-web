import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-social',
  command: '/ak:social',
  kit: 'marketer',
  header: {
    titleEn: '/ak:social — Social content and publishing',
    titleVi: '/ak:social — Nội dung và publish social',
    taglineEn: 'Social media drafting and schedule planning for X/Twitter, LinkedIn, Instagram, TikTok, YouTube, Facebook, and Threads; bundled scheduling previews queued posts, while real publishing requires a separate integration.',
    taglineVi: 'Soạn nội dung social và lập lịch cho X/Twitter, LinkedIn, Instagram, TikTok, YouTube, Facebook và Threads; lịch đóng gói chỉ preview post trong queue, còn publish thật cần integration riêng.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'API examples can change live accounts',
    titleVi: 'Ví dụ API có thể đổi tài khoản live',
    contentEn: 'Provider reference workflows can upload media, publish posts, reply, comment, or repost. Drafting and scheduling requests must not execute external calls without exact account, content, visibility, credential, provider-contract, and human approval.',
    contentVi: 'Reference workflow của provider có thể upload media, publish post, reply, comment hoặc repost. Yêu cầu draft và schedule không được gọi external nếu chưa duyệt rõ account, content, visibility, credential, provider contract và con người.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Request', titleVi: 'Đọc request', descEn: 'Read a platform plus content type, or schedule with week, month, or campaign scope.', descVi: 'Đọc platform kèm content type, hoặc schedule với scope week, month hay campaign.' },
    { number: 2, titleEn: 'Load Context', titleVi: 'Nạp context', descEn: 'Resolve brand rules, voice, campaign context, media paths, timezone, owner, and draft-only boundary.', descVi: 'Resolve brand rule, voice, bối cảnh campaign, media path, timezone, owner và ranh giới draft-only.' },
    { number: 3, titleEn: 'Draft Strategy', titleVi: 'Dựng chiến lược nội dung', descEn: 'Use social-media-manager plus content-creator or copywriter and apply platform-specific style.', descVi: 'Dùng social-media-manager cùng content-creator hoặc copywriter và áp dụng style theo platform.' },
    { number: 4, titleEn: 'Format Platform', titleVi: 'Format theo nền tảng', descEn: 'Apply platform specs, hook writing, hashtags, thread, carousel, reel, and engagement templates.', descVi: 'Áp dụng spec platform, viết hook, hashtag, thread, carousel, reel và engagement template.' },
    { number: 5, titleEn: 'Validate Artifact', titleVi: 'Validate artifact', descEn: 'Check current platform policies, disclosure rules, media assumptions, and unsupported claims before approval.', descVi: 'Kiểm platform policy hiện hành, rule disclosure, giả định media và claim không được hỗ trợ trước khi duyệt.' },
    { number: 6, titleEn: 'Plan Schedule', titleVi: 'Lập lịch', descEn: 'For schedule, create weekly, monthly, or campaign Markdown/calendar artifacts; local pending status is only a preview.', descVi: 'Với schedule, tạo artifact Markdown/calendar theo tuần, tháng hoặc campaign; trạng thái pending local chỉ là preview.' },
    { number: 7, titleEn: 'Save Drafts', titleVi: 'Lưu draft', descEn: 'Write drafts to assets/posts/{platform}/{date}-{slug}.md or schedule files, then list every external action still pending.', descVi: 'Ghi draft vào assets/posts/{platform}/{date}-{slug}.md hoặc file schedule, rồi liệt kê mọi external action còn chờ.' },
    { number: 8, titleEn: 'Report Boundary', titleVi: 'Báo ranh giới', descEn: 'Return files, sources, validation warnings, proposed times, timezone, and publish status without claiming remote publication.', descVi: 'Trả file, source, warning validation, thời gian đề xuất, timezone và publish status mà không claim đã publish remote.' },
  ],
  corePrinciplesEn: [
    'Drafting, scheduling, and real publishing are distinct paths; local schedule output is not remote state.',
    'The canonical shape is [platform] [type] or schedule week|month|campaign.',
    'Platform fit matters: X/Twitter threads, LinkedIn posts, Instagram carousels, TikTok reels, YouTube, Facebook, and Threads have different rules.',
    'Secrets, OAuth, and live account mutations require a separately approved provider workflow.',
  ],
  corePrinciplesVi: [
    'Drafting, scheduling và publish thật là các đường riêng; output schedule local không phải trạng thái remote.',
    'Dạng canonical là [platform] [type] hoặc schedule week|month|campaign.',
    'Độ phù hợp platform rất quan trọng: X/Twitter thread, LinkedIn post, Instagram carousel, TikTok reel, YouTube, Facebook và Threads có rule khác nhau.',
    'Secret, OAuth và mutation tài khoản live cần workflow provider được duyệt riêng.',
  ],
  expertiseAreasEn: ['Platform-specific posts', 'Threads and carousels', 'Schedule planning', 'Writing styles', 'Hook writing', 'Media assumptions', 'Approval boundaries'],
  expertiseAreasVi: ['Post theo platform', 'Thread và carousel', 'Lập lịch nội dung', 'Writing style', 'Viết hook', 'Giả định media', 'Ranh giới phê duyệt'],
  workflowModes: [
    { flag: '<platform> <type>', modeEn: 'Draft platform-specific content for twitter/x, linkedin, instagram, tiktok, youtube, facebook, or threads.', modeVi: 'Draft content theo platform cho twitter/x, linkedin, instagram, tiktok, youtube, facebook hoặc threads.', research: 'Platform specs', redTeam: 'Format mismatch', validation: 'Draft saved' },
    { flag: 'schedule week|month|campaign [name]', modeEn: 'Build a local schedule artifact; pending status is only a preview, not remote scheduling.', modeVi: 'Dựng artifact lịch local; trạng thái pending chỉ là preview, không phải lịch remote.', research: 'Content inventory', redTeam: 'Capacity mismatch', validation: 'Schedule artifact' },
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
    { labelEn: 'Schedule campaign', labelVi: 'Lịch campaign', command: '/ak:social schedule campaign "August launch"', whenEn: 'You need a UTC content calendar from approved posts and owner availability.', whenVi: 'Khi cần lịch content UTC từ post đã duyệt và availability của owner.', expectedEn: 'Local schedule and calendar artifacts with pending external actions named.', expectedVi: 'Artifact lịch và calendar local kèm các external action còn chờ được nêu rõ.' },
  ],
  reportOutput: {
    titleEn: 'Social Outputs',
    titleVi: 'Output social',
    patternEn: 'Drafts → assets/posts/{platform}/{date}-{slug}.md; schedules → assets/posts/schedule-{period}.md and optional calendar-{period}.md',
    patternVi: 'Draft → assets/posts/{platform}/{date}-{slug}.md; schedule → assets/posts/schedule-{period}.md và calendar-{period}.md tùy chọn',
    locationEn: 'assets/posts/{platform}/ and assets/posts/',
    locationVi: 'assets/posts/{platform}/ và assets/posts/',
    descEn: 'Drafts and schedule artifacts are saved locally; remote scheduling or publication requires a separate approved integration.',
    descVi: 'Draft và artifact schedule được lưu local; schedule hoặc publish remote cần integration riêng đã được duyệt.',
  },
};

export default data;
