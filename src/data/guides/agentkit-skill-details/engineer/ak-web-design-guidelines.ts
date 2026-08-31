import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-web-design-guidelines',
  command: '/ak:web-design-guidelines',
  kit: 'engineer',
  header: {
    titleEn: '/ak:web-design-guidelines — Review UI against Web Interface Guidelines',
    titleVi: '/ak:web-design-guidelines — Rà soát UI theo Web Interface Guidelines',
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
  invocation: {
    syntax: '/ak:web-design-guidelines [file-or-pattern]',
    arguments: [
      {
        token: '[file-or-pattern]',
        titleEn: 'Files to review',
        titleVi: 'File cần review',
        descEn: 'One or more exact UI files or a narrow pattern to check. If omitted, the skill asks for the review scope instead of defaulting to the whole repository.',
        descVi: 'Một hoặc nhiều file UI cụ thể hoặc pattern hẹp cần kiểm. Nếu bỏ trống, skill hỏi phạm vi review thay vì mặc định quét toàn bộ repository.',
        exampleCommand: '/ak:web-design-guidelines "src/components/account-dialog.tsx src/styles/theme.css"',
          exampleCommandVi: '/ak:web-design-guidelines "src/components/account-dialog.tsx src/styles/theme.css"',
      },
    ],
  },
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
    { labelEn: 'Audit one component', labelVi: 'Audit một component', command: '/ak:web-design-guidelines src/components/AppHeader.tsx',
      commandVi: '/ak:web-design-guidelines src/components/AppHeader.tsx', whenEn: 'A UI file needs an accessibility or UX guideline review.', whenVi: 'Một file UI cần được review theo guideline về accessibility hoặc UX.', expectedEn: 'Fetches the fresh Web Interface Guidelines, reads only the component file, applies every rule, and reports terse file:line findings.', expectedVi: 'Lấy Web Interface Guidelines mới nhất, chỉ đọc file component đó, áp toàn bộ luật và báo phát hiện ngắn dạng file:line.', recommended: true },
    { labelEn: 'Audit a route set', labelVi: 'Audit nhóm route', command: '/ak:web-design-guidelines "src/app/**/*.tsx"',
      commandVi: '/ak:web-design-guidelines "src/app/**/*.tsx"', whenEn: 'A bounded route or component set needs Web Interface Guidelines compliance review.', whenVi: 'Một nhóm route hoặc component có phạm vi rõ cần review theo Web Interface Guidelines.', expectedEn: 'Fetches the guideline source, reads the matched UI files, checks all fetched rules, and keeps output limited to guideline-specified findings.', expectedVi: 'Lấy nguồn guideline, đọc các file UI khớp pattern, kiểm toàn bộ luật đã fetch và chỉ xuất phát hiện theo format guideline.' },
    { labelEn: 'Ask for scope first', labelVi: 'Hỏi phạm vi trước', command: '/ak:web-design-guidelines',
      commandVi: '/ak:web-design-guidelines', whenEn: 'You want a UI review but have not chosen the files or pattern yet.', whenVi: 'Bạn muốn review UI nhưng chưa chọn file hoặc pattern cần kiểm.', expectedEn: 'Asks which files or pattern to review before fetching the current guidelines and checking the selected UI code against them.', expectedVi: 'Hỏi cần review file hoặc pattern nào trước khi lấy guideline hiện tại và kiểm mã UI đã chọn theo các luật đó.' },
  ],
};

export default data;
