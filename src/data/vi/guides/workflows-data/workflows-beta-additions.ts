// Beta-only workflow additions (v2.14.0) - Vietnamese
// Combined with stableWorkflows in the index to form betaWorkflows

export const betaOnlyWorkflows = [
  {
    title: 'Frontend Design Aesthetics',
    category: 'Design & Frontend',
    level: 'Advanced',
    duration: '~30-60 phút',
    stepCount: 4,
    bestFor: 'Tạo các giao diện frontend nổi bật, chuẩn production, tránh phong cách AI chung chung',
    gradientHeader: 'from-fuchsia-500/10 to-pink-500/10',
    hoverBorderColor: 'hover:border-fuchsia-500/50',
    buttonColor: 'bg-fuchsia-500 hover:bg-fuchsia-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    steps: [
      {
        command: '/ck:ui-ux-pro-max',
        typeLabel: 'Design Intelligence',
        description: 'Phân tích tham chiếu thiết kế và system styling với kiến thức chuyên môn UX/UI',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1,
        isSkill: true
      },
      {
        command: 'Design Thinking',
        typeLabel: 'Cổng Bắt Buộc',
        description: 'Xác định Purpose, Tone, Constraints và Differentiation trước khi code để có phong cách BOLD.',
        color: 'bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400',
        number: 2,
        hasIcon: true,
        icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
      },
      {
        command: 'Frontend Aesthetics',
        typeLabel: 'Kiểm Soát Thẩm Mỹ',
        description: 'Cỡ chữ >= 16px cho inputs, thiết kế mobile-first và dùng Google Fonts chuẩn hỗ trợ Tiếng Việt.',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M20 7h-7L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>'
      },
      {
        command: '/ck:frontend-design',
        typeLabel: 'Triển Khai Giao Diện',
        description: 'Code UI với cá tính mạnh thông qua điều chỉnh các thông số Design Dials.',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 4,
        isSkill: true
      }
    ],
    featureCommand: '/ck:frontend-design',
    tip: 'Anti-slop typography yêu cầu các Google Fonts đang trending hỗ trợ tiếng Việt tốt (như Inter, Outfit).',
    features: [
      'Kiểm soát Design Dials (Sự biến đổi, mật độ, motion)',
      'Tuân thủ chặt chẽ cổng ràng buộc Design Thinking',
      'Quy tắc Motion: CSS-only (HTML) hoặc Motion (React)',
      'Thiết kế thẩm mỹ vượt trên chuẩn mặc định chung'
    ],
    borderColor: 'border-fuchsia-500/20'
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
        typeLabel: 'Phân tích sprint',
        description: 'Thu thập git metrics (commits, LOC, hotspots, churn), tính chỉ số sức khỏe, tạo báo cáo retrospective',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1,
        isSkill: true
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
        typeLabel: 'Tạo thiết kế',
        description: 'Tạo thiết kế UI từ text prompt bằng Google Stitch AI',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:stitch export --format all',
        typeLabel: 'Export assets',
        description: 'Export dạng Tailwind/HTML + DESIGN.md spec để implement',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:frontend-design',
        typeLabel: 'Implement components',
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
  },
  {
    title: 'Automated Research Loop',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~10-30 phút',
    stepCount: 1,
    bestFor: 'Tối ưu metric lặp đi lặp lại với thử nghiệm tự động',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/ck:autoresearch',
        typeLabel: 'Research loop',
        description: 'Chạy N vòng lặp với metric, tự giữ/bỏ thay đổi dựa trên kết quả',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true,

      }
    ],
    tip: 'Đặt metric rõ ràng, đo lường được (coverage %, bundle size, latency) để có kết quả tốt nhất',
    features: [
      'Vòng lặp lặp đi lặp lại tự động',
      'Học từ git history giữa các vòng',
      'Tự giữ/bỏ dựa trên metric delta',
      'Hoạt động với mọi metric đo lường được'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Dự Đoán Impact Trước Khi Code',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~5-10 phút',
    stepCount: 1,
    bestFor: 'Phát hiện vấn đề architecture, security, performance trước khi implement',
    gradientHeader: 'from-amber-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ck:predict',
        typeLabel: '5 chuyên gia tranh luận',
        description: '5 persona chuyên gia tranh luận về thay đổi — architect, security, performance, UX, ops',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1,
        isSkill: true,

      }
    ],
    tip: 'Chạy trước feature lớn hoặc refactor rủi ro để phát hiện vấn đề sớm',
    features: [
      '5 persona chuyên gia với góc nhìn riêng',
      'Phân tích architecture, security, performance',
      'Đánh giá tác động UX và ops',
      'Báo cáo đồng thuận với xếp hạng rủi ro'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Tạo Test Scenarios',
    category: 'Debugging & Fixes',
    level: 'Beginner',
    duration: '~5-10 phút',
    stepCount: 1,
    bestFor: 'Khám phá edge case toàn diện trước khi implement hoặc test',
    gradientHeader: 'from-purple-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/ck:scenario',
        typeLabel: 'Phân tích 12 chiều',
        description: 'Phân tách feature theo 12 chiều để tạo test scenarios toàn diện',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true,

      }
    ],
    tip: 'Dùng trước khi viết test để đảm bảo coverage đầy đủ edge cases',
    features: [
      'Phân tách feature theo 12 chiều',
      'Khám phá edge case và boundary condition',
      'Tạo test scenarios với độ ưu tiên',
      'Tích hợp với /ck:test để thực thi'
    ],
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'STRIDE Security Audit',
    category: 'Debugging & Fixes',
    level: 'Intermediate',
    duration: '~10-20 phút',
    stepCount: 1,
    bestFor: 'Phân tích bảo mật STRIDE + OWASP toàn diện với auto-fix tùy chọn',
    gradientHeader: 'from-red-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ck:security',
        typeLabel: 'STRIDE audit',
        description: 'STRIDE threat modeling + OWASP scan với phân loại severity và auto-fix tùy chọn',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true,

      }
    ],
    tip: 'Kết hợp với /ck:security-scan để coverage vulnerability + threat toàn diện',
    features: [
      'STRIDE threat modeling framework',
      'OWASP vulnerability pattern matching',
      'Phân loại severity và ưu tiên',
      'Auto-fix lặp đi lặp lại tùy chọn theo pattern autoresearch'
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Tạo Diagram Excalidraw',
    category: 'Design & Frontend',
    level: 'Intermediate',
    duration: '~5-15 phút',
    stepCount: 1,
    bestFor: 'Tạo diagram phong cách hand-drawn với hình dạng phản ánh ý nghĩa thực sự',
    gradientHeader: 'from-violet-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/ck:excalidraw',
        typeLabel: 'Tạo diagram',
        description: 'Tạo diagram Excalidraw hand-drawn từ text prompt — architecture, flowcharts, system designs',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Hỗ trợ auto-diagram: phân tích codebase bất kỳ và tự động tạo architecture diagram',
    features: [
      'Phong cách hand-drawn với bảng màu semantic',
      'Auto-diagram: visualization codebase không cần config',
      'File-based workflow với Playwright rendering',
      'MCP canvas workflow để chỉnh sửa trực tiếp'
    ],
    borderColor: 'border-violet-500/20'
  },
  {
    title: 'Nghiên Cứu & Port Tính Năng (Xia)',
    category: 'Planning & Review',
    level: 'Advanced',
    duration: '~10-30 phút',
    stepCount: 3,
    bestFor: 'Phân tích và port tính năng từ repos GitHub bên ngoài vào dự án của bạn an toàn',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ck:xia <repo> --compare',
        typeLabel: 'Phân tích mã nguồn',
        description: 'So sánh song song kiến trúc source repo, pattern, và feature implementation',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:xia <repo> [feature] --improve',
        typeLabel: 'Port & refactor',
        description: 'Sao chép tính năng từ source và refactor để phù hợp với local codebase',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:test',
        typeLabel: 'Validate port',
        description: 'Chạy tests để verify tính năng đã port hoạt động đúng trong local context',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    tip: 'Nên chạy --compare trước để đánh giá sự tương thích của kiến trúc trước khi port',
    features: [
      'Phân tích bất kỳ GitHub repo hay thư mục local nào',
      'Đánh giá quyết định qua Challenge framework',
      'AI tự tạo bảng ma trận đánh đổi (trade-offs) và điểm rủi ro trước khi thực thi'
    ],
    xiaModeFlags: [
      { flag: '--compare', desc: 'Chỉ mổ xẻ và so sánh kiến trúc song song', color: 'blue' },
      { flag: '--copy', desc: 'Bê y nguyên cấu trúc gốc sang, sửa tối thiểu để chạy', color: 'emerald' },
      { flag: '--improve', desc: 'Copy cấu trúc nhưng AI sẽ refactor và dọn anti-patterns', color: 'teal' },
      { flag: '--port', desc: 'Chỉ lấy ý tưởng, code lại bằng chuẩn local stack (Mặc định)', color: 'purple' }
    ],
    xiaSpeedFlags: [
      { flag: '--fast', desc: 'Bỏ qua research & validation, tiến hành auto-approve', color: 'orange' },
      { flag: '--auto', desc: 'Giữ nguyên luồng làm việc nhưng tự động approve các gates', color: 'cyan' },
      { flag: 'Mặc định', desc: 'Chạy workflow đầy đủ với các cổng cần phê duyệt', color: 'slate' }
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Showcase & Nội Dung Mạng Xã Hội',
    category: 'Media & Creative',
    level: 'Beginner',
    duration: '~5-10 phút',
    stepCount: 1,
    bestFor: 'Tạo trang HTML showcase đẹp mắt cho demo, bài viết, và mạng xã hội',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ck:show-off',
        typeLabel: 'Tạo showcase',
        description: 'Tạo trang HTML nhiều section với parallax, chuyển đổi theme, nội dung song ngữ (VI/EN), và tự động chụp screenshots',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Xuất screenshots ở tỷ lệ 16:9, 9:16, và 1:1 — sẵn sàng cho các nền tảng mạng xã hội',
    features: [
      'Layout cuộn nhiều section với hiệu ứng parallax',
      'Tự động chuyển đổi theme (system/light/dark)',
      'Chụp screenshot song song ở nhiều tỷ lệ khung hình'
    ],
    borderColor: 'border-pink-500/20'
  }
];
