export const workflows = [
  {
    title: 'Xây Dựng Tính Năng Mới',
    level: 'Beginner',
    duration: '~15-30 phút',
    stepCount: 4,
    bestFor: 'Thêm chức năng mới vào ứng dụng của bạn',
    gradientHeader: 'from-purple-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/brainstorm',
        typeLabel: 'Khám phá ý tưởng',
        description: 'Thảo luận ý tưởng tính năng của bạn với AI để khám phá các khả năng và nhận phản hồi',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1
      },
      {
        command: '/plan',
        typeLabel: 'Tạo kế hoạch triển khai',
        description: 'AI tạo một kế hoạch chi tiết từng bước để xây dựng tính năng của bạn',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Xem xét & điều chỉnh kế hoạch',
        description: 'Xem qua kế hoạch, đặt câu hỏi và yêu cầu thay đổi nếu cần',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/code @plan.md',
        typeLabel: 'Triển khai kế hoạch',
        description: 'AI viết code theo kế hoạch, chạy tests và xem xét công việc',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: '💡 Mẹo: Sử dụng /clear trước /code để tiết kiệm tokens',
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
        typeLabel: 'Điều tra vấn đề',
        description: 'AI phân tích code của bạn để tìm nguyên nhân gốc rễ của vấn đề',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/fix',
        typeLabel: 'Áp dụng bản sửa lỗi',
        description: 'AI sửa lỗi và giải thích những gì đã sai và cách khắc phục',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2
      },
      {
        command: '/test',
        typeLabel: 'Xác minh bản sửa lỗi',
        description: 'Chạy tests để đảm bảo lỗi đã được sửa và không có gì khác bị hỏng',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 Mẹo: /fix tự động định tuyến đến các lệnh sửa lỗi chuyên biệt',
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Triển Khai Nhanh',
    level: 'Intermediate',
    duration: '~10-20 phút',
    stepCount: 1,
    bestFor: 'Các tính năng nhỏ khi bạn biết mình muốn gì',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/cook "nhiệm vụ của bạn"',
        typeLabel: 'Lệnh tất cả trong một',
        description: 'AI tự động nghiên cứu, lập kế hoạch, triển khai, kiểm thử và xem xét tính năng',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      }
    ],
    tip: '💡 Mẹo: Bỏ qua các bước lập kế hoạch để có kết quả nhanh hơn',
    features: [
      'Nghiên cứu các phương pháp và công nghệ tốt nhất',
      'Tạo và thực hiện kế hoạch triển khai',
      'Viết và kiểm thử code',
      'Xem xét chất lượng và các thực tiễn tốt nhất'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Bắt Đầu Dự Án Mới',
    level: 'Advanced',
    duration: '~1-2 giờ',
    stepCount: 1,
    bestFor: 'Tạo ứng dụng hoàn chỉnh từ đầu',
    gradientHeader: 'from-green-500/10 to-emerald-500/10',
    hoverBorderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500 hover:bg-green-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-green-600 dark:text-green-400',
    steps: [
      {
        command: '/bootstrap "mô tả ứng dụng của bạn"',
        typeLabel: 'Thiết lập dự án hoàn chỉnh',
        description: 'AI xây dựng toàn bộ dự án của bạn: nghiên cứu, kiến trúc, thiết kế, triển khai và tài liệu',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Cảnh báo: Lệnh này sử dụng lượng token AI đáng kể',
    features: [
      'Nghiên cứu và lựa chọn tech stack',
      'Cấu trúc và kiến trúc dự án',
      'Thiết kế UI/UX và wireframes',
      'Triển khai hoàn chỉnh với tests',
      'Tài liệu toàn diện'
    ],
    borderColor: 'border-green-500/20'
  }
];
