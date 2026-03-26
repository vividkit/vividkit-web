// Beta-only workflow additions (v2.14.0) - Vietnamese
// Combined with stableWorkflows in the index to form betaWorkflows

export const betaOnlyWorkflows = [
  {
    title: 'Ship Feature',
    category: 'Shipping',
    level: 'Intermediate',
    duration: '~5-10 phút',
    stepCount: 1,
    bestFor: 'Ship feature branch với test, review và tạo PR tự động',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ck:ship [--official|--beta] [--skip-tests] [--skip-review]',
        typeLabel: 'Ship pipeline (skill)',
        description: 'Merge main, chạy test, review pre-landing, bump version, cập nhật changelog, push, tạo PR',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:ship tự nhận diện test runner, format version file và changelog style',
    features: [
      'Hỗ trợ chế độ official (→main) và beta (→dev)',
      'Merge origin/main (hoặc dev cho beta) trước khi test',
      'Tự nhận diện npm/pytest/cargo/go test',
      'Review code 2 pass + adversarial review (giai đoạn 3)',
      'Bump version và cập nhật CHANGELOG.md',
      'Tạo PR với summary, kết quả test và linked issues'
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Deploy Ứng Dụng',
    category: 'Shipping',
    level: 'Intermediate',
    duration: '~5-15 phút',
    stepCount: 1,
    bestFor: 'Deploy lên Vercel, Netlify, Railway, Fly.io, AWS, GCP và nhiều hơn',
    gradientHeader: 'from-orange-500/10 to-amber-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ck:deploy [platform]',
        typeLabel: 'Auto-deploy (skill)',
        description: 'AI tự nhận diện project type và deploy lên 15+ nền tảng mà không cần cấu hình thủ công',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:deploy tự nhận diện stack và xử lý biến môi trường, build steps và cấu hình platform',
    features: [
      'Tự nhận diện project type (Next.js, Astro, Express, ...)',
      'Hỗ trợ 15+ nền tảng sẵn có',
      'Xử lý env vars và cấu hình build',
      'Vercel, Netlify, Railway, Fly.io, AWS, GCP, Azure'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Tạo LLMs.txt',
    category: 'Research & Docs',
    level: 'Beginner',
    duration: '~5-10 phút',
    stepCount: 1,
    bestFor: 'Làm cho project dễ đọc với các AI/LLM tools',
    gradientHeader: 'from-violet-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/ck:llms [path]',
        typeLabel: 'Tạo index (skill)',
        description: 'Tạo llms.txt theo chuẩn llmstxt.org — giúp AI đọc hiểu docs của bạn dễ dàng',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:llms tạo llms.txt chuẩn hóa để AI tools có thể hiểu nhanh codebase của bạn',
    features: [
      'Tuân theo chuẩn llmstxt.org',
      'Tạo từ docs, README hoặc codebase',
      'Bao gồm reference files và cấu trúc tổng quan',
      'Hoạt động với mọi loại project'
    ],
    borderColor: 'border-violet-500/20'
  },
  {
    title: 'Giải Thích Trực Quan',
    category: 'Docs & Communication',
    level: 'Beginner',
    duration: '~2-5 phút',
    stepCount: 1,
    bestFor: 'Tạo giải thích trực quan, sơ đồ và slide deck chất lượng cao dạng HTML',
    gradientHeader: 'from-rose-500/10 to-pink-500/10',
    hoverBorderColor: 'hover:border-rose-500/50',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-rose-600 dark:text-rose-400',
    steps: [
      {
        command: '/ck:preview --html --explain <topic>',
        typeLabel: 'Tạo HTML (skill)',
        description: 'HTML độc lập với theme toggle, sơ đồ Mermaid và Chart.js — mở thẳng trên trình duyệt',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Dùng --slides cho slide deck, --diagram cho kiến trúc, --diff cho visual code review, --recap cho snapshot project',
    features: [
      'Output HTML độc lập chất lượng cao',
      'Chế độ: --explain, --diagram, --slides, --diff, --plan-review, --recap',
      'Theme toggle (sáng/tối) tích hợp sẵn',
      'Sơ đồ Mermaid v11 với custom theming',
      'Biểu đồ dữ liệu Chart.js'
    ],
    borderColor: 'border-rose-500/20'
  },
  {
    title: 'Sprint Retrospective',
    category: 'Session & Management',
    level: 'Beginner',
    duration: '~2-5 phút',
    stepCount: 1,
    bestFor: 'Review sprint dựa trên dữ liệu git metrics, chỉ số sức khỏe và đề xuất hành động',
    gradientHeader: 'from-amber-500/10 to-yellow-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ck:retro [timeframe] [--compare] [--team] [--format html|md]',
        typeLabel: 'Phân tích sprint (skill)',
        description: 'Thu thập git metrics (commits, LOC, hotspots, churn), tính chỉ số sức khỏe, tạo báo cáo retrospective',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:retro 2w --compare --team tạo retro 2 tuần với so sánh kỳ trước và phân tích theo tác giả',
    features: [
      'Git metrics: commits/ngày, LOC thêm/xóa, file hotspots',
      'Chỉ số sức khỏe: churn rate, test ratio, active day ratio',
      'So sánh với kỳ trước bằng --compare',
      'Phân tích theo tác giả với --team',
      'Xuất định dạng HTML hoặc Markdown'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Thiết Kế UI với AI (Stitch)',
    category: 'Design & Frontend',
    level: 'Intermediate',
    duration: '~5-15 phút',
    stepCount: 3,
    bestFor: 'Tạo thiết kế UI độ trung thực cao từ text prompt qua Google Stitch',
    gradientHeader: 'from-sky-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-sky-500/50',
    buttonColor: 'bg-sky-500 hover:bg-sky-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-sky-600 dark:text-sky-400',
    steps: [
      {
        command: '/ck:stitch generate "prompt"',
        typeLabel: 'Tạo thiết kế (skill)',
        description: 'Tạo thiết kế UI từ text prompt bằng Google Stitch AI',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:stitch export --format all',
        typeLabel: 'Export assets (skill)',
        description: 'Export dạng Tailwind/HTML + DESIGN.md spec để implement',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:frontend-design',
        typeLabel: 'Implement components (skill)',
        description: 'Xây dựng React components từ design spec đã export',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    tip: 'Cài Stitch MCP server trong .claude/.mcp.json để tích hợp trực tiếp',
    features: [
      'Text-to-UI design qua Google Stitch API',
      'Export sang Tailwind/HTML và DESIGN.md',
      'Pipeline design-to-code với các skill hiện có',
      'Hỗ trợ layout mobile, desktop và tablet',
      'Hạn mức: 200 credits/ngày (Flash), 50/ngày (Pro)'
    ],
    borderColor: 'border-sky-500/20'
  }
];
