import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-web-design-guidelines",
  command: "/ak:web-design-guidelines",
  kit: 'marketer',
  header: {
    titleEn: '/ak:web-design-guidelines — Review UI against Web Interface Guidelines',
    titleVi: '/ak:web-design-guidelines — Review UI theo Web Interface Guidelines',
    taglineEn: "Fresh Web Interface Guidelines review for UI code, accessibility, UX audits, design checks, and site best-practice findings.",
    taglineVi: "Review UI code theo Web Interface Guidelines mới nhất cho accessibility, UX audit, kiểm thiết kế và phát hiện best-practice của website."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Fetch latest",
      titleVi: "Tải bản mới",
      descEn: "Fetch the latest guidelines from the Vercel Labs raw command.md URL before each review.",
      descVi: "Tải guideline mới nhất từ URL raw command.md của Vercel Labs trước mỗi lần review."
    },
    {
      number: 2,
      titleEn: "Resolve target",
      titleVi: "Xác định file",
      descEn: "Use the provided file or pattern; if none is specified, ask which files should be reviewed.",
      descVi: "Dùng file hoặc pattern được cung cấp; nếu chưa có, hỏi cần review file nào."
    },
    {
      number: 3,
      titleEn: "Read files",
      titleVi: "Đọc file",
      descEn: "Read the specified UI code files or matched pattern scope before applying rules.",
      descVi: "Đọc các file UI code được chỉ định hoặc phạm vi khớp pattern trước khi áp luật."
    },
    {
      number: 4,
      titleEn: "Apply rules",
      titleVi: "Áp guideline",
      descEn: "Check all fetched rules, including accessibility, interface behavior, UX quality, and site best practices.",
      descVi: "Kiểm toàn bộ rule đã tải, gồm accessibility, hành vi giao diện, chất lượng UX và best practice cho site."
    },
    {
      number: 5,
      titleEn: "Find evidence",
      titleVi: "Tìm bằng chứng",
      descEn: "Anchor findings to concrete file and line evidence instead of broad opinions.",
      descVi: "Gắn phát hiện vào bằng chứng file và dòng cụ thể thay vì nhận xét chung chung."
    },
    {
      number: 6,
      titleEn: "Output terse",
      titleVi: "Báo ngắn gọn",
      descEn: "Return findings in the terse file:line format specified by the fetched guidelines.",
      descVi: "Trả phát hiện theo format ngắn file:line mà guideline đã yêu cầu."
    }
  ],
  corePrinciplesEn: [
    "Fetch fresh rules every time; do not rely on a stale local memory of the guidelines.",
    "Review the user's specified files or ask for scope when absent.",
    "Findings must be concrete, terse, and file:line grounded."
  ],
  corePrinciplesVi: [
    "Mỗi lần phải tải rule mới; không dựa vào trí nhớ guideline cũ.",
    "Review đúng file người dùng chỉ định hoặc hỏi phạm vi khi chưa có.",
    "Phát hiện phải cụ thể, ngắn và có căn cứ file:line."
  ],
  expertiseAreasEn: [
    "UI code review",
    "Accessibility checks",
    "UX best practices",
    "Design audit findings",
    "Terse evidence-backed reporting"
  ],
  expertiseAreasVi: [
    "Review UI code",
    "Kiểm accessibility",
    "Best practice UX",
    "Phát hiện audit thiết kế",
    "Báo cáo ngắn có bằng chứng"
  ],
  skillStack: [
    {
      name: "web_search",
      type: "tool"
    },
    {
      name: "Vercel Web Interface Guidelines",
      type: "tool"
    }
  ],
  promptExamples: [
    {
      labelEn: "Review files",
      labelVi: "Review file",
      command: "/ak:web-design-guidelines src/app/page.tsx",
      commandVi: '/ak:web-design-guidelines src/app/page.tsx',
      whenEn: "Use when the user points to a concrete UI file or pattern.",
      whenVi: "Dùng khi người dùng chỉ rõ file hoặc pattern UI.",
      expectedEn: "Fresh guideline findings in file:line format with concise evidence and practical remediation notes.",
      expectedVi: "Phát hiện theo guideline mới nhất ở định dạng file:line kèm evidence ngắn và hướng sửa thực tế.",
      recommended: true
    },
    {
      labelEn: "Audit site code",
      labelVi: "Audit code site",
      command: "/ak:web-design-guidelines src/components/**/*.tsx",
      commandVi: '/ak:web-design-guidelines src/components/**/*.tsx',
      whenEn: "Use when auditing multiple UI components against current guidelines.",
      whenVi: "Dùng khi audit nhiều component UI theo guideline hiện hành.",
      expectedEn: "Terse list of concrete violations, affected locations, and the guideline principle behind each issue.",
      expectedVi: "Danh sách ngắn các vi phạm cụ thể, vị trí bị ảnh hưởng và nguyên tắc guideline liên quan."
    },
    { labelEn: 'Pricing page audit', labelVi: 'Audit trang pricing', command: '/ak:web-design-guidelines audit the pricing page UI',
      commandVi: '/ak:web-design-guidelines kiểm tra UI trang định giá', whenEn: 'A live UI surface needs a fresh Web Interface Guidelines review.', whenVi: 'Một bề mặt UI đang chạy cần review theo Web Interface Guidelines mới.', expectedEn: 'file:line findings with guideline principle, evidence, and practical remediation.', expectedVi: 'Phát hiện file:line kèm nguyên tắc guideline, evidence và hướng sửa thực tế.' }
  ],
  reportOutput: {
    titleEn: "Guideline findings",
    titleVi: "Phát hiện guideline",
    patternEn: "file:line terse finding",
    patternVi: "file:line phát hiện ngắn",
    locationEn: "Response output",
    locationVi: "Nội dung phản hồi",
    descEn: "Output follows the fetched guideline instructions, not a generic review template.",
    descVi: "Output đi theo hướng dẫn guideline đã tải, không dùng template review chung chung."
  }
};

export default data;
