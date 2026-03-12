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
