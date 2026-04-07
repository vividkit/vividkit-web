// v2.14.0 Stable workflows - skill-based approach với prefix /ck:
// /ck:cook dùng native Claude Tasks, /ck:fix hỗ trợ flags
export const stableWorkflows = [
  {
    title: 'Xây Dựng Feature Mới',
    category: 'Getting Started',
    level: 'Beginner',
    duration: '~15-30 phút',
    stepCount: 4,
    bestFor: 'Thêm feature mới vào app của bạn',
    gradientHeader: 'from-purple-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/ck:brainstorm',
        typeLabel: 'Brainstorm ý tưởng',
        description: 'Dùng /ck:brainstorm hoặc nói "brainstorm ideas for [feature]" để khám phá',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:plan',
        typeLabel: 'Tạo implementation plan',
        description: 'AI tạo plan chi tiết từng bước để build feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → /clear → Implement',
        description: 'Review plan, chạy /clear để giải phóng context (bắt buộc), rồi implement',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/ck:cook @plan.md',
        typeLabel: 'Implement plan',
        description: 'AI viết code theo plan, chạy tests và review công việc',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    tip: '/clear bắt buộc sau /ck:plan trước /ck:cook',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Sửa Lỗi (Bug Fix)',
    category: 'Debugging & Fixes',
    level: 'Beginner',
    duration: '~10-20 phút',
    stepCount: 6,
    bestFor: 'Chẩn đoán và sửa lỗi có cấu trúc',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ck:fix',
        typeLabel: 'Pipeline 6 bước',
        description: 'Chạy pipeline đầy đủ: Scout → Chẩn đoán → Đánh giá → Sửa → Xác minh → Phòng ngừa',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true
      },
      {
        typeLabel: '① Scout',
        description: 'Thu thập bằng chứng — logs, stack traces, files bị ảnh hưởng',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        hasIcon: true,
        icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'
      },
      {
        typeLabel: '② Chẩn đoán → ③ Đánh giá',
        description: 'Phân tích root cause dựa trên bằng chứng, sau đó đánh giá mức độ nghiêm trọng',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        typeLabel: '④ Sửa lỗi',
        description: 'Áp dụng fix có mục tiêu dựa trên root cause đã chẩn đoán',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 4,
        hasIcon: true,
        icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
      },
      {
        typeLabel: '⑤ Xác minh',
        description: 'Chạy tests để xác nhận fix hoạt động và không có regression',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 5,
        hasIcon: true,
        icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
      },
      {
        typeLabel: '⑥ Phòng ngừa',
        description: 'Thêm guards, tests, hoặc documentation để ngăn tái phát',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 6,
        hasIcon: true,
        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
      }
    ],
    tip: '/ck:fix v2.0: RCA dựa trên bằng chứng. Flags: --auto, --review, --quick, --parallel',
    fixFlags: [
      { flag: '--auto', desc: 'Tự động apply fix không cần xác nhận', color: 'green' },
      { flag: '--review', desc: 'Review fix trước khi apply', color: 'purple' },
      { flag: '--quick', desc: 'Fix nhanh không phân tích sâu', color: 'orange' },
      { flag: '--parallel', desc: 'Fix nhiều issues song song', color: 'blue' }
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
    category: 'Getting Started',
    level: 'Intermediate',
    duration: '~10-20 phút',
    stepCount: 1,
    bestFor: 'Features nhỏ khi bạn biết mình muốn gì',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/ck:cook "nhiệm vụ của bạn"',
        typeLabel: 'All-in-one skill',
        description: 'AI tự động research, plan, implement, test và review feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '--interactive là mặc định, dùng native Claude Tasks API.',
    cookFlags: [
      { flag: '--interactive', desc: 'Từng bước rà soát (mặc định)', color: 'teal' },
      { flag: '--fast', desc: 'Bỏ qua research, code luôn', color: 'purple' },
      { flag: '--parallel', desc: 'Chạy agent song song', color: 'blue' },
      { flag: '--auto', desc: 'Tự động duyệt mọi bước', color: 'green' },
      { flag: '--no-test', desc: 'Không bắt buộc test', color: 'orange' }
    ],
    features: [
      'Research best practices và technologies',
      'Tạo và execute implementation plan',
      'Viết và test code',
      'Review quality và best practices'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Bootstrap Project Mới',
    category: 'Getting Started',
    level: 'Advanced',
    duration: '~1-2 giờ',
    stepCount: 1,
    bestFor: 'Tạo app hoàn chỉnh từ đầu',
    gradientHeader: 'from-green-500/10 to-emerald-500/10',
    hoverBorderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500 hover:bg-green-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-green-600 dark:text-green-400',
    steps: [
      {
        command: '/ck:bootstrap "mô tả ứng dụng của bạn"',
        typeLabel: 'Full project setup',
        description: 'AI build toàn bộ project: research, architecture, design, implementation và docs',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: 'Warning: Command này dùng nhiều AI tokens',
    features: [
      'Research và chọn tech stack',
      'Project structure và architecture',
      'UI/UX design và wireframes',
      'Full implementation với tests',
      'Comprehensive documentation'
    ],
    borderColor: 'border-green-500/20'
  },
  {
    title: 'Tạo Video Content',
    category: 'Media & Creative',
    level: 'Intermediate',
    duration: '~20-40 phút',
    stepCount: 2,
    bestFor: 'Tạo video lập trình với React',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ck:remotion',
        typeLabel: 'Video creation',
        description: 'Tạo video lập trình với React và Remotion',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true
      },
      {
        command: 'render',
        typeLabel: 'Render output',
        description: 'Export ra MP4, GIF hoặc image sequences',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2
      }
    ],
    tip: 'Tạo video compositions dựa trên React',
    features: [
      'Animations và transitions',
      'Text animations và captions',
      '3D graphics integration',
      'Audio synchronization'
    ],
    borderColor: 'border-pink-500/20'
  },
  {
    title: 'Visual Documentation',
    category: 'Research & Docs',
    level: 'Beginner',
    duration: '~2-10 phút',
    stepCount: 3,
    bestFor: 'Tạo giải thích trực quan, sơ đồ và slide deck dạng Markdown hoặc HTML độc lập',
    gradientHeader: 'from-indigo-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/ck:preview --explain "chủ đề"',
        typeLabel: 'Giải thích Markdown',
        description: 'Tạo sơ đồ ASCII + Mermaid kèm giải thích (mở trong novel-reader UI)',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:preview --html --explain "chủ đề"',
        typeLabel: 'Giải thích HTML',
        description: 'HTML độc lập với theme toggle, Mermaid v11 và Chart.js — mở thẳng trên trình duyệt',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:preview --html --slides "chủ đề"',
        typeLabel: 'Slide deck HTML',
        description: 'Slide trình bày chất lượng cao dạng HTML độc lập',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:preview',
    tip: 'Thêm --html vào bất kỳ mode nào để có output HTML chất lượng cao. Còn có: --diagram, --diff, --plan-review, --recap',
    features: [
      'Markdown: --explain, --slides, --diagram, --ascii',
      'HTML: --html --explain, --html --slides, --html --diagram',
      'HTML-only: --diff, --plan-review, --recap',
      'Theme toggle (sáng/tối) trong mọi trang HTML',
      'Sơ đồ Mermaid v11 + biểu đồ dữ liệu Chart.js'
    ],
    borderColor: 'border-indigo-500/20'
  },
  {
    title: 'Code Review với Edge Cases',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~20-30 phút',
    stepCount: 4,
    bestFor: 'Review code kỹ lưỡng với scout edge cases',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ck:cook @plan.md',
        typeLabel: 'Implement plan',
        description: 'AI viết code theo plan với auto test & review cycles',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:scout',
        typeLabel: 'Scout edge cases',
        description: 'AI scout các file bị ảnh hưởng, luồng dữ liệu, error paths và boundary conditions',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
      },
      {
        typeLabel: 'Code-reviewer review',
        description: 'Code-reviewer subagent review findings từ scout và đánh giá chất lượng code',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/ck:git cm',
        typeLabel: 'Merge & commit',
        description: 'Commit code đã review với conventional commit message',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    featureCommand: '/ck:scout',
    tip: '/ck:scout tích hợp code-reviewer để phát hiện edge cases trước review',
    features: [
      'Phát hiện edge case qua /ck:scout',
      'Phân tích boundary conditions',
      'Scout luồng dữ liệu & error paths',
      'Tích hợp code-reviewer tự động'
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Plan + Validate + Implement',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~20-40 phút',
    stepCount: 4,
    bestFor: 'Plan đã validate với auto-propagate decisions',
    gradientHeader: 'from-sky-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-sky-500/50',
    buttonColor: 'bg-sky-500 hover:bg-sky-600',
    icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    iconColor: 'text-sky-600 dark:text-sky-400',
    steps: [
      {
        command: '/ck:plan',
        typeLabel: 'Tạo plan',
        description: 'AI tạo plan triển khai chi tiết với các phases',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1
      },
      {
        command: '/ck:plan validate',
        typeLabel: 'Validate quyết định plan',
        description: 'Validation gate kiểu phỏng vấn. Quyết định tự động propagate xuống phase files',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: '/clear (bắt buộc)',
        description: 'Giải phóng context trước khi implement. Bước bắt buộc',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>'
      },
      {
        command: '/ck:cook @plan.md',
        typeLabel: 'Implement plan đã validate',
        description: 'AI implement với decisions đã validate sẵn propagate vào mỗi phase',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    featureCommand: '/ck:plan validate',
    tip: '/ck:plan validate decisions tự propagate xuống phase files',
    planFlags: [
      { flag: '--hard', desc: 'Plan phức tạp nhiều phase với red-team review', color: 'red' },
      { flag: '--parallel', desc: 'Plan thiết kế cho agent chạy song song', color: 'blue' },
      { flag: '--two', desc: 'Plan 2 phase (plan → implement)', color: 'teal' },
      { flag: 'validate', desc: 'Cổng validation kiểu phỏng vấn', color: 'purple' },
      { flag: 'red-team', desc: 'Spawn adversarial reviewers', color: 'orange' }
    ],
    features: [
      'Validate plan kiểu phỏng vấn',
      'Tự động propagate xuống phase files',
      'Decisions đã validate hướng dẫn implementation',
      'Giảm rework từ quyết định plan không rõ ràng'
    ],
    borderColor: 'border-sky-500/20'
  },
  {
    title: 'Agent Teams (Song Song)',
    category: 'Advanced',
    level: 'Advanced',
    duration: '~30-60 phút',
    stepCount: 2,
    bestFor: 'Tác vụ lớn với nhiều agent chạy song song',
    gradientHeader: 'from-cyan-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-cyan-500/50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    steps: [
      {
        command: '/ck:plan --hard "feature"',
        typeLabel: 'Tạo plan với phases',
        description: 'Tạo plan chi tiết với các phase có thể chạy song song cho team execution',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1
      },
      {
        command: '/ck:team cook @plan',
        typeLabel: 'Team chạy song song',
        description: 'Spawn nhiều dev agent song song, mỗi agent xử lý một phase. Auto test → review → merge',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: 'Cần CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 trong settings.json',
    teamFlags: [
      { flag: '--devs N', desc: 'Số lượng dev agent song song (mặc định: 2)', color: 'cyan' },
      { flag: '--tester', desc: 'Thêm tester agent riêng', color: 'green' },
      { flag: '--reviewer', desc: 'Thêm code reviewer agent', color: 'purple' },
      { flag: '--worktree', desc: 'Mỗi agent chạy trong git worktree riêng', color: 'blue' }
    ],
    features: [
      'Nhiều dev agent song song (--devs N)',
      'Pipeline tự động test → review → merge',
      'Event-driven hooks + agent memory',
      'Còn có: /ck:team research, /ck:team review, /ck:team debug'
    ],
    borderColor: 'border-cyan-500/20'
  },
  {
    title: 'Red-Team Plan Review',
    category: 'Planning & Review',
    level: 'Advanced',
    duration: '~10-20 phút',
    stepCount: 2,
    bestFor: 'Tìm lỗ hổng trong plan trước khi implement',
    gradientHeader: 'from-amber-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ck:plan --hard "feature"',
        typeLabel: 'Tạo plan',
        description: 'Tạo plan chi tiết. Hard/parallel/two modes tự động chạy red-team sau khi tạo',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/ck:plan red-team plans/',
        typeLabel: 'Review đối kháng',
        description: 'Spawn hostile reviewers: Bảo mật, Failure Mode, Phá giả định, Phê bình Scope',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: 'Tự scale reviewers theo độ phức tạp plan (2-4 adversarial lenses)',
    features: [
      'Security Adversary (auth bypass, injection, OWASP)',
      'Failure Mode Analyst (race conditions, mất dữ liệu)',
      'Assumption Destroyer (deps ẩn, claims sai)',
      'Scope & Complexity Critic (over-engineering, YAGNI)'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Research & Documentation',
    category: 'Research & Docs',
    level: 'Beginner',
    duration: '~10-20 phút',
    stepCount: 3,
    bestFor: 'Nghiên cứu topic và tạo tài liệu kỹ thuật',
    gradientHeader: 'from-orange-500/10 to-yellow-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ck:research "topic"',
        typeLabel: 'Deep research',
        description: 'AI nghiên cứu topic kỹ lưỡng bằng web search và documentation',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:docs-seeker "library"',
        typeLabel: 'Tìm docs thư viện',
        description: 'Tìm kiếm documentation chính thức qua llms.txt để lấy API info mới nhất',
        color: 'bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:docs',
        typeLabel: 'Tạo docs project',
        description: 'Tạo hoặc cập nhật documentation dựa trên phân tích codebase',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:research',
    tip: '/ck:docs-seeker dùng context7 để lấy docs thư viện mới nhất',
    features: [
      'Web search và tổng hợp',
      'Tra cứu documentation thư viện',
      'Tạo documentation project',
      'Hỗ trợ viết technical docs'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Security Audit',
    category: 'Debugging & Fixes',
    level: 'Intermediate',
    duration: '~15-25 phút',
    stepCount: 3,
    bestFor: 'Tìm lỗ hổng bảo mật và secrets',
    gradientHeader: 'from-rose-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-rose-500/50',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    iconColor: 'text-rose-600 dark:text-rose-400',
    steps: [
      {
        command: '/ck:security-scan',
        typeLabel: 'Quét lỗ hổng',
        description: 'Quét codebase tìm OWASP issues, hardcoded secrets và dependency vulnerabilities',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:code-review --security',
        typeLabel: 'Review bảo mật chi tiết',
        description: 'Review code sâu tập trung vào authentication, authorization và data handling',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:fix --security',
        typeLabel: 'Apply security fixes',
        description: 'AI áp dụng các fix bảo mật được đề xuất với giải thích chi tiết',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:security-scan',
    tip: 'Phát hiện SQL injection, XSS, CSRF và các OWASP Top 10 issues',
    features: [
      'Phát hiện hardcoded secrets',
      'Quét dependency vulnerability',
      'Bao phủ OWASP Top 10',
      'Đề xuất security fixes'
    ],
    borderColor: 'border-rose-500/20'
  },
  {
    title: 'Database Operations',
    category: 'Backend & Infra',
    level: 'Intermediate',
    duration: '~15-30 phút',
    stepCount: 3,
    bestFor: 'Thiết kế schema database và migrations',
    gradientHeader: 'from-violet-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/ck:databases "schema design"',
        typeLabel: 'Thiết kế schema',
        description: 'Thiết kế schema database với relationships, indexes và constraints',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:plan "migration"',
        typeLabel: 'Plan migration',
        description: 'Tạo plan migration an toàn với rollback strategy',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2
      },
      {
        command: '/ck:cook @plan.md',
        typeLabel: 'Execute migration',
        description: 'Implement migration với proper error handling và validation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:databases',
    tip: 'Hỗ trợ MongoDB, PostgreSQL, MySQL và SQLite',
    features: [
      'Thiết kế schema với relationships',
      'Tối ưu hóa index',
      'Tạo migration script',
      'Phân tích query performance'
    ],
    borderColor: 'border-violet-500/20'
  },
  {
    title: 'DevOps & Deployment',
    category: 'Shipping',
    level: 'Advanced',
    duration: '~20-40 phút',
    stepCount: 3,
    bestFor: 'Thiết lập CI/CD và deployment pipelines',
    gradientHeader: 'from-slate-500/10 to-zinc-500/10',
    hoverBorderColor: 'hover:border-slate-500/50',
    buttonColor: 'bg-slate-500 hover:bg-slate-600',
    icon: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    iconColor: 'text-slate-600 dark:text-slate-400',
    steps: [
      {
        command: '/ck:devops "setup CI/CD"',
        typeLabel: 'Cấu hình DevOps',
        description: 'Thiết lập CI/CD pipelines cho GitHub Actions, GitLab CI hoặc platforms khác',
        color: 'bg-slate-500/10 dark:bg-slate-500/20 text-slate-600 dark:text-slate-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:deploy',
        typeLabel: 'Deploy lên platform',
        description: 'Deploy lên Cloudflare, Vercel, GCP hoặc Kubernetes với auto-detection',
        color: 'bg-zinc-500/10 dark:bg-zinc-500/20 text-zinc-600 dark:text-zinc-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:test --e2e',
        typeLabel: 'Chạy E2E tests',
        description: 'Verify deployment với end-to-end tests',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    featureCommand: '/ck:devops',
    tip: 'Hỗ trợ Docker, Kubernetes, serverless và container deployments',
    features: [
      'Tạo CI/CD pipeline',
      'Deploy đa platform',
      'Cấu hình environment',
      'Setup rollback và monitoring'
    ],
    borderColor: 'border-slate-500/20'
  },
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
        typeLabel: 'Ship pipeline',
        description: 'Merge main, chạy test, review pre-landing, bump version, cập nhật changelog, push, tạo PR',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
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
        typeLabel: 'Auto-deploy',
        description: 'AI tự nhận diện project type và deploy lên 15+ nền tảng mà không cần cấu hình thủ công',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
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
    title: 'Isolated Feature Branching',
    category: 'Advanced',
    level: 'Intermediate',
    duration: '~2-5 phút',
    stepCount: 3,
    bestFor: 'Phát triển song song trong các monorepos sử dụng git worktrees',
    gradientHeader: 'from-orange-500/10 to-amber-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm-6 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM6 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ck:worktree info',
        typeLabel: 'Bước 1: Lấy thông tin Repo',
        description: 'Phân tích loại repo, base branch và các projects hiện có',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      },
      {
        typeLabel: 'Bước 2: Detect Branch Naming Mode',
        description: 'Nhận diện theo quy ước thông thường hoặc dùng --no-prefix cho key Jira chính xác',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Bước 3: Chuyển đổi thành Slug',
        description: 'Định dạng branch name thành kebab-case (hoặc bỏ qua nếu bật cờ --no-prefix)',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M16 3h5v5M4 20L21 3M4 14l7 7M14 4l7 7"/>'
      }
    ],
    featureCommand: '/ck:worktree',
    tip: 'Sử dụng cờ --no-prefix để giữ nguyên tên branch chính xác cho các Jira key (như ND-1377-cleanup-docs).',
    features: [
      'Git worktrees độc lập cho từng tính năng',
      'Giữ nguyên chính xác issue keys (--no-prefix)',
      'Khả năng tự động nhận diện branch prefix',
      'Hỗ trợ dự án có cấu trúc monorepo'
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
        typeLabel: 'Tạo index',
        description: 'Tạo llms.txt theo chuẩn llmstxt.org — giúp AI đọc hiểu docs của bạn dễ dàng',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
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
  }
];
