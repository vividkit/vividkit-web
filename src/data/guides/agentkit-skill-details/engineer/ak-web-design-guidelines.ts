import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-web-design-guidelines',
  command: '/ak:web-design-guidelines',
  kit: 'engineer',
  header: {
    titleEn: '/ak:web-design-guidelines',
    titleVi: '/ak:web-design-guidelines',
    taglineEn: 'Review UI code against the latest Web Interface Guidelines for accessibility, UX, and design best-practice compliance, then report terse file:line findings.',
    taglineVi: 'Rà soát mã UI theo Web Interface Guidelines mới nhất về accessibility, UX và best practice thiết kế, rồi báo lỗi ngắn gọn dạng file:line.',
  },
  processFlow: [
    { number: 1, titleEn: 'Fetch rules', titleVi: 'Lấy guideline', descEn: 'Retrieve the latest command.md from the Web Interface Guidelines source before each review.', descVi: 'Lấy command.md mới nhất từ nguồn Web Interface Guidelines trước mỗi lần review.' },
    { number: 2, titleEn: 'Resolve target', titleVi: 'Xác định mục tiêu', descEn: 'Use the provided file or pattern; if none was supplied, ask which UI files to review.', descVi: 'Dùng file hoặc pattern được đưa vào; nếu chưa có, hỏi cần review các file UI nào.' },
    { number: 3, titleEn: 'Read UI code', titleVi: 'Đọc mã UI', descEn: 'Open only the specified surfaces so the audit stays bounded to the requested interface.', descVi: 'Chỉ mở các bề mặt được chỉ định để audit giữ đúng phạm vi giao diện được yêu cầu.' },
    { number: 4, titleEn: 'Apply all rules', titleVi: 'Áp toàn bộ luật', descEn: 'Check the fetched accessibility, interaction, layout, content, and UX rules without cherry-picking.', descVi: 'Kiểm toàn bộ luật vừa fetch về accessibility, tương tác, layout, nội dung và UX; không chọn lọc tùy tiện.' },
    { number: 5, titleEn: 'Pin evidence', titleVi: 'Gắn bằng chứng', descEn: 'Attach each issue to an exact file and line so the user can act on it immediately.', descVi: 'Gắn mỗi phát hiện vào đúng file và dòng để người dùng xử lý ngay được.' },
    { number: 6, titleEn: 'Report tersely', titleVi: 'Báo ngắn gọn', descEn: 'Output findings in the terse file:line format required by the fetched guidelines.', descVi: 'Xuất phát hiện theo đúng format file:line ngắn gọn mà guideline mới nhất yêu cầu.' },
  ],
  corePrinciplesEn: [
    'Always fetch fresh guidelines; the source document owns the current rules.',
    'Review the requested UI surface, not the whole app by default.',
    'Findings must be actionable and line-specific.',
    'Accessibility and UX checks come from the guideline source, not personal taste.',
  ],
  corePrinciplesVi: [
    'Luôn lấy guideline mới; tài liệu nguồn quyết định bộ luật hiện tại.',
    'Review đúng bề mặt UI được yêu cầu, không tự mở rộng ra cả app.',
    'Phát hiện phải hành động được và có dòng cụ thể.',
    'Kiểm accessibility và UX theo guideline nguồn, không theo gu cá nhân.',
  ],
  skillStack: [
    { name: 'Web Interface Guidelines', type: 'tool' },
    { name: 'web_search', type: 'tool' },
    { name: 'UI source files', type: 'tool' },
  ],
  reportOutput: {
    titleEn: 'Guideline findings',
    titleVi: 'Phát hiện theo guideline',
    patternEn: 'file:line terse findings',
    patternVi: 'phát hiện ngắn dạng file:line',
    locationEn: 'Terminal response',
    locationVi: 'Trả lời trong terminal',
    descEn: 'Each finding points to the violating UI code and follows the fetched guideline output format.',
    descVi: 'Mỗi phát hiện trỏ tới mã UI vi phạm và theo đúng format output của guideline vừa lấy.',
  },
  promptExamples: [
    { labelEn: 'Audit one component', labelVi: 'Audit một component', command: '/ak:web-design-guidelines src/components/AppHeader.tsx', whenEn: 'A specific UI file needs accessibility or UX review.', whenVi: 'Một file UI cụ thể cần review accessibility hoặc UX.', expectedEn: 'Fetches current guidelines, reviews that file, and emits terse file:line findings.', expectedVi: 'Lấy guideline hiện tại, review file đó và xuất phát hiện ngắn dạng file:line.', recommended: true },
    { labelEn: 'Audit a pattern', labelVi: 'Audit theo pattern', command: '/ak:web-design-guidelines "src/app/**/*.tsx"', whenEn: 'A bounded route or component set needs guideline compliance review.', whenVi: 'Một nhóm route hoặc component có phạm vi rõ cần kiểm theo guideline.', expectedEn: 'Applies all fetched rules across the matched UI files without expanding beyond the pattern.', expectedVi: 'Áp toàn bộ luật đã fetch cho các file UI khớp pattern, không tự mở rộng ngoài pattern.' },
  ],
};

export default data;
