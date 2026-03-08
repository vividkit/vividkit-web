// v2.13.0 Stable workflows - skill-based approach
// /cook uses native Claude Tasks, /fix supports flags
export const stableWorkflows = [
  {
    title: 'Xây Dựng Feature Mới',
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
        command: '/brainstorm',
        typeLabel: 'Brainstorm ý tưởng (skill)',
        description: 'Dùng /brainstorm hoặc nói "brainstorm ideas for [feature]" để khám phá',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/plan',
        typeLabel: 'Tạo implementation plan',
        description: 'AI tạo plan chi tiết từng bước để build feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → /clear → Implement',
        description: 'Review plan, chạy /clear để giải phóng context (bắt buộc từ CK engineer@v2.13.0), rồi implement',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/cook @plan.md',
        typeLabel: 'Implement plan (skill)',
        description: 'AI viết code theo plan, chạy tests và review công việc',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    tip: '⚠️ CK engineer@v2.13.0: /clear bắt buộc sau /plan trước /cook',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Sửa Lỗi (Bug Fix)',
    level: 'Beginner',
    duration: '~5-15 phút',
    stepCount: 3,
    bestFor: 'Sửa lỗi và hành vi không mong muốn',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/debug',
        typeLabel: 'Debug vấn đề (skill)',
        description: 'AI phân tích code để tìm root cause',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/fix',
        typeLabel: 'Apply fix (skill)',
        description: 'AI tự động route đến specialized fix và áp dụng giải pháp',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/test',
        typeLabel: 'Verify fix',
        description: 'Chạy tests để đảm bảo bug đã được sửa và không break gì khác',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 /debug & /fix skills: intelligent routing với flags --auto, --review, --quick, --parallel',
    fixFlags: [
      { flag: '--auto', desc: 'Tự động hoàn toàn (mặc định)', color: 'green' },
      { flag: '--review', desc: 'Human-in-the-loop mode', color: 'amber' },
      { flag: '--quick', desc: 'Sửa nhanh bug đơn giản', color: 'purple' },
      { flag: '--parallel', desc: 'Parallel fullstack agents', color: 'blue' }
    ],
    fixMappings: [
      { old: '/fix:fast', new: '/fix --quick', desc: 'Quick mode cho bug đơn giản' },
      { old: '/fix:hard', new: '/fix --review', desc: 'Human-in-the-loop mode' },
      { old: '/fix:parallel', new: '/fix --parallel', desc: 'Parallel fullstack agents' }
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
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
        command: '/cook "nhiệm vụ của bạn"',
        typeLabel: 'All-in-one skill',
        description: 'AI tự động research, plan, implement, test và review feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '💡 Xem bảng mapping ở trên để chuyển đổi từ v2.4 variants. --interactive là default, dùng native Claude Tasks API.',
    cookMappings: [
      { old: '/cook:auto', new: '/cook --auto', desc: 'Tự động duyệt tất cả bước' },
      { old: '/cook:auto:fast', new: '/cook --auto --fast', desc: 'Nhanh + tự động duyệt' },
      { old: '/cook:auto:parallel', new: '/cook --auto --parallel', desc: 'Chạy song song + tự động' },
      { old: '/code:no-test', new: '/cook --no-test', desc: 'Bỏ qua chạy test' },
      { old: '/code:parallel', new: '/cook --parallel', desc: 'Chạy các phase song song' }
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
        command: '/bootstrap "mô tả ứng dụng của bạn"',
        typeLabel: 'Full project setup',
        description: 'AI build toàn bộ project: research, architecture, design, implementation và docs',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Warning: Command này dùng nhiều AI tokens',
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
        command: '/remotion',
        typeLabel: 'Video creation (skill)',
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
    tip: '💡 Mới trong v2.13.0: Thay thế /design:video command',
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
    level: 'Beginner',
    duration: '~10-20 phút',
    stepCount: 3,
    bestFor: 'Tạo giải thích trực quan và sơ đồ cho plan',
    gradientHeader: 'from-indigo-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/plan',
        typeLabel: 'Tạo plan trước',
        description: 'Tạo plan có cấu trúc — visuals sẽ được lưu vào thư mục plan',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      },
      {
        command: '/preview --explain "chủ đề"',
        typeLabel: 'Tạo giải thích (skill)',
        description: 'Tạo sơ đồ ASCII + Mermaid kèm giải thích văn bản cho chủ đề',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/preview --diagram "chủ đề"',
        typeLabel: 'Tạo sơ đồ tập trung (skill)',
        description: 'Tạo sơ đồ Mermaid + ASCII tập trung cho luồng dữ liệu hoặc kiến trúc cụ thể',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/preview',
    tip: '💡 Mới trong engineer@2.10+: /preview giờ tạo visual content. Cũng có: --slides, --ascii',
    features: [
      'Sơ đồ ASCII + Mermaid (--explain)',
      'Định dạng trình bày (--slides)',
      'Sơ đồ tập trung (--diagram)',
      'Output thân thiện terminal (--ascii)'
    ],
    borderColor: 'border-indigo-500/20'
  },
  {
    title: 'Code Review với Edge Cases',
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
        command: '/cook @plan.md',
        typeLabel: 'Implement plan (skill)',
        description: 'AI viết code theo plan với auto test & review cycles',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/scout',
        typeLabel: 'Scout edge cases (skill)',
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
        command: '/git cm',
        typeLabel: 'Merge & commit',
        description: 'Commit code đã review với conventional commit message',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    featureCommand: '/scout',
    tip: '💡 engineer@2.10+: /scout tích hợp code-reviewer để phát hiện edge cases trước review',
    features: [
      'Phát hiện edge case qua /scout',
      'Phân tích boundary conditions',
      'Scout luồng dữ liệu & error paths',
      'Tích hợp code-reviewer tự động'
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Plan + Validate + Implement',
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
        command: '/plan',
        typeLabel: 'Tạo plan',
        description: 'AI tạo plan triển khai chi tiết với các phases',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1
      },
      {
        command: '/plan:validate',
        typeLabel: 'Validate quyết định plan',
        description: 'Validation gate kiểu phỏng vấn. Quyết định tự động propagate xuống phase files',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: '/clear (bắt buộc)',
        description: 'Giải phóng context trước khi implement — bắt buộc từ engineer@v2.13.0',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>'
      },
      {
        command: '/cook @plan.md',
        typeLabel: 'Implement plan đã validate (skill)',
        description: 'AI implement với decisions đã validate sẵn propagate vào mỗi phase',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    featureCommand: '/plan:validate',
    tip: '💡 engineer@2.10+: /plan:validate decisions tự propagate xuống phase files — không cần update thủ công',
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
        command: '/plan --hard "feature"',
        typeLabel: 'Tạo plan với phases',
        description: 'Tạo plan chi tiết với các phase có thể chạy song song cho team execution',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1
      },
      {
        command: '/team cook @plan',
        typeLabel: 'Team chạy song song (skill)',
        description: 'Spawn nhiều dev agent song song, mỗi agent xử lý một phase. Auto test → review → merge',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: '⚠️ Cần CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 trong settings.json. Mới trong engineer@v2.11.0+',
    features: [
      'Nhiều dev agent song song (--devs N)',
      'Pipeline tự động test → review → merge',
      'Event-driven hooks + agent memory',
      'Cũng có: /team research, /team review, /team debug'
    ],
    borderColor: 'border-cyan-500/20'
  },
  {
    title: 'Red-Team Plan Review',
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
        command: '/plan --hard "feature"',
        typeLabel: 'Tạo plan',
        description: 'Tạo plan chi tiết. Hard/parallel/two modes tự động chạy red-team sau khi tạo',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/plan:red-team plans/',
        typeLabel: 'Review đối kháng (skill)',
        description: 'Spawn hostile reviewers: Bảo mật, Failure Mode, Phá giả định, Phê bình Scope',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: '💡 Mới trong engineer@v2.11.0+: Tự scale reviewers theo độ phức tạp plan (2-4 adversarial lenses)',
    features: [
      'Security Adversary (auth bypass, injection, OWASP)',
      'Failure Mode Analyst (race conditions, mất dữ liệu)',
      'Assumption Destroyer (deps ẩn, claims sai)',
      'Scope & Complexity Critic (over-engineering, YAGNI)'
    ],
    borderColor: 'border-amber-500/20'
  }
];

// v2.14.0 Beta workflows - identical to stable + beta-specific notes
// Beta v2.14.0-beta.5 is a superset of stable v2.13.0 (adds ck:llms skill, minor refinements)
export const betaWorkflows = stableWorkflows;

// Legacy v2.4.x workflows - kept in source for reference, NOT rendered
// These use old command syntax: /code, /git:cm, /design:screenshot, /fix:types
export const legacyWorkflows = [
  {
    title: 'Xây Dựng Feature Mới',
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
        command: '/brainstorm',
        typeLabel: 'Brainstorm ý tưởng (command)',
        description: 'Chạy /brainstorm "feature idea" để khám phá khả năng',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1
      },
      {
        command: '/plan',
        typeLabel: 'Tạo implementation plan',
        description: 'AI tạo plan chi tiết từng bước để build feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → Implement',
        description: 'Review plan và tiến hành implementation',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/code @plan.md',
        typeLabel: 'Implement plan',
        description: 'AI viết code theo plan, chạy tests và review công việc',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: '💡 Tip: /code @plan.md đọc và implement plan của bạn',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Sửa Lỗi (Bug Fix)',
    level: 'Beginner',
    duration: '~5-15 phút',
    stepCount: 3,
    bestFor: 'Sửa lỗi và hành vi không mong muốn',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/debug',
        typeLabel: 'Debug vấn đề',
        description: 'AI phân tích code để tìm root cause',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/fix',
        typeLabel: 'Apply fix',
        description: 'AI sửa bug và giải thích gì sai và cách fix',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2
      },
      {
        command: '/test',
        typeLabel: 'Verify fix',
        description: 'Chạy tests để đảm bảo bug đã được sửa và không break gì khác',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 Tip: Dùng /fix:types, /fix:ui, /fix:ci cho specialized fixes',
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
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
        command: '/cook "nhiệm vụ của bạn"',
        typeLabel: 'All-in-one command',
        description: 'AI tự động research, plan, implement, test và review feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      }
    ],
    tip: '💡 Xem bảng variants bên dưới cho các chế độ thực thi khác nhau',
    cookVariants: [
      { command: '/cook', desc: 'Workflow đầy đủ: research, plan, implement, test, review' },
      { command: '/cook:auto', desc: 'Tự động duyệt tất cả bước không cần xác nhận' },
      { command: '/cook:auto:fast', desc: 'Bỏ qua research, triển khai nhanh' },
      { command: '/cook:auto:parallel', desc: 'Chạy các phase triển khai song song' },
      { command: '/code:no-test', desc: 'Bỏ qua chạy test sau khi code' },
      { command: '/code:parallel', desc: 'Thực thi các phase của plan song song' }
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
        command: '/bootstrap "mô tả ứng dụng của bạn"',
        typeLabel: 'Full project setup',
        description: 'AI build toàn bộ project: research, architecture, design, implementation và docs',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Warning: Command này dùng nhiều AI tokens',
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
    title: 'Design từ Screenshot',
    level: 'Intermediate',
    duration: '~15-25 phút',
    stepCount: 2,
    bestFor: 'Tái tạo UI từ designs hoặc screenshots',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/design:screenshot',
        typeLabel: 'Phân tích design',
        description: 'AI phân tích screenshot và hiểu các UI components',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1
      },
      {
        command: '/code',
        typeLabel: 'Implement design',
        description: 'AI generate code matching design',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2
      }
    ],
    tip: '💡 Tip: Cung cấp screenshots chất lượng cao để có kết quả tốt hơn',
    borderColor: 'border-pink-500/20'
  }
];

// Legacy export for backwards compatibility
export const workflows = legacyWorkflows;
