// Marketing Kit workflows (Vietnamese)
// Commands và technical terms giữ nguyên tiếng Anh

export const marketingKitWorkflows = [
  // === CONTENT & COPY ===
  {
    title: 'Viết & Đăng Bài Blog',
    category: 'Content & Copy',
    level: 'Beginner',
    duration: '~20-30 min',
    stepCount: 4,
    bestFor: 'Tạo nội dung blog tối ưu SEO từ đầu',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ckm:write:good "topic"',
        typeLabel: 'Nghiên cứu & soạn thảo',
        description: 'AI nghiên cứu chủ đề, phân tích đối thủ, và soạn nội dung tối ưu SEO',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1
      },
      {
        command: '/ckm:seo audit',
        typeLabel: 'Tối ưu SEO',
        description: 'Kiểm tra mật độ keyword, meta tags, và tối ưu tìm kiếm',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 2
      },
      {
        command: '/ckm:write:enhance',
        typeLabel: 'Nâng cấp & hoàn thiện',
        description: 'Cải thiện khả năng đọc, thêm CTA, và tối ưu engagement',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3
      },
      {
        command: '/ckm:write:publish',
        typeLabel: 'Đăng nội dung',
        description: 'Định dạng cho CMS, thêm hình ảnh, và chuẩn bị xuất bản',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Dùng /ckm:write:good cho nội dung chất lượng cao; /ckm:write:fast cho bản nháp nhanh',
    features: [
      'Phân tích nội dung đối thủ',
      'Tích hợp keyword SEO',
      'Tối ưu khả năng đọc',
      'Định dạng sẵn cho CMS'
    ],
    borderColor: 'border-pink-500/20'
  },
  {
    title: 'Tạo Chuỗi Email',
    category: 'Content & Copy',
    level: 'Intermediate',
    duration: '~30-45 min',
    stepCount: 4,
    bestFor: 'Xây dựng campaign email nurture tự động',
    gradientHeader: 'from-cyan-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-cyan-500/50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    steps: [
      {
        command: '/ckm:persona',
        typeLabel: 'Xác định đối tượng',
        description: 'Tạo buyer persona để nhắm mục tiêu thông điệp hiệu quả',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1
      },
      {
        command: '/ckm:email flow "welcome"',
        typeLabel: 'Thiết kế email flow',
        description: 'Tạo chuỗi tự động với timing và trigger phù hợp',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        command: '/ck:copywriting',
        typeLabel: 'Viết copy (skill)',
        description: 'Tạo subject line hấp dẫn và nội dung email thuyết phục',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 3,
        isSkill: true
      },
      {
        command: '/ckm:email sequence',
        typeLabel: 'Tạo chuỗi',
        description: 'Xuất chuỗi email hoàn chỉnh với các biến thể A/B',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Thêm biến thể A/B testing cho subject line để tối ưu tỷ lệ mở email',
    features: [
      'Nhắm đối tượng theo buyer persona',
      'Thiết lập trigger tự động',
      'Biến thể A/B testing',
      'Xuất file sẵn cho ESP'
    ],
    borderColor: 'border-cyan-500/20'
  },

  // === CAMPAIGN & ANALYTICS ===
  {
    title: 'Triển Khai Campaign Marketing',
    category: 'Campaign & Analytics',
    level: 'Advanced',
    duration: '~45-60 min',
    stepCount: 5,
    bestFor: 'Lập kế hoạch và thực thi campaign đa kênh',
    gradientHeader: 'from-purple-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/ckm:marketing-planning',
        typeLabel: 'Lập chiến lược (skill)',
        description: 'Xác định mục tiêu campaign, KPI, timeline, và phân bổ ngân sách',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:campaign create',
        typeLabel: 'Tạo campaign',
        description: 'Thiết lập cấu trúc campaign với các kênh và thông điệp',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 2
      },
      {
        command: '/ckm:content-marketing',
        typeLabel: 'Tạo nội dung (skill)',
        description: 'Tạo tài nguyên campaign trên tất cả các kênh',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 3,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:social schedule',
        typeLabel: 'Lên lịch phân phối',
        description: 'Lập kế hoạch và lên lịch nội dung trên các nền tảng social',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 4
      },
      {
        command: '/ckm:analytics',
        typeLabel: 'Thiết lập tracking (skill)',
        description: 'Cấu hình analytics và theo dõi conversion',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 5,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Dùng /ckm:campaign status để theo dõi hiệu suất trong quá trình chạy campaign',
    features: [
      'Phối hợp đa kênh',
      'Lập kế hoạch phân bổ ngân sách',
      'Tạo lịch nội dung',
      'Thiết lập theo dõi hiệu suất'
    ],
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Thiết Lập A/B Testing',
    category: 'Campaign & Analytics',
    level: 'Intermediate',
    duration: '~20-30 min',
    stepCount: 4,
    bestFor: 'Thử nghiệm các biến thể để tối ưu tỷ lệ conversion',
    gradientHeader: 'from-amber-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ckm:funnel analyze',
        typeLabel: 'Xác định điểm nghẽn',
        description: 'Phân tích funnel hiện tại để tìm cơ hội tối ưu',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/ckm:ab-test-setup',
        typeLabel: 'Thiết kế test (skill)',
        description: 'Tạo hypothesis, biến thể, và chỉ số đánh giá',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:plan cro',
        typeLabel: 'Kế hoạch triển khai',
        description: 'Tạo kế hoạch chi tiết để thực thi bài test',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3
      },
      {
        command: '/ckm:analyze report',
        typeLabel: 'Phân tích kết quả',
        description: 'Phân tích thống kê và đưa ra khuyến nghị',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Chạy test tối thiểu 2 tuần để có kết quả có ý nghĩa thống kê',
    features: [
      'Xây dựng hypothesis',
      'Thiết kế biến thể',
      'Tính toán độ tin cậy thống kê',
      'Triển khai phiên bản thắng'
    ],
    borderColor: 'border-amber-500/20'
  },

  // === SEO & GROWTH ===
  {
    title: 'Thực Hiện SEO Audit',
    category: 'SEO & Growth',
    level: 'Beginner',
    duration: '~15-25 min',
    stepCount: 3,
    bestFor: 'Phân tích toàn diện sức khỏe website và SEO',
    gradientHeader: 'from-amber-500/10 to-yellow-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ckm:seo audit "url"',
        typeLabel: 'Audit kỹ thuật',
        description: 'Phân tích cấu trúc site, tốc độ, thân thiện mobile, và khả năng crawl',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/ckm:seo keywords "niche"',
        typeLabel: 'Nghiên cứu keyword',
        description: 'Khám phá keyword giá trị cao và content gap',
        color: 'bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
        number: 2
      },
      {
        command: '/ckm:competitor seo "url"',
        typeLabel: 'Phân tích đối thủ',
        description: 'Phân tích thứ hạng và hồ sơ backlink của đối thủ',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: 'Chạy audit hàng tháng để theo dõi tiến độ SEO và phát hiện vấn đề sớm',
    features: [
      'Checklist SEO kỹ thuật',
      'Bản đồ cơ hội keyword',
      'Phân tích content gap đối thủ',
      'Danh sách ưu tiên hành động'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Tối Ưu Landing Page',
    category: 'SEO & Growth',
    level: 'Intermediate',
    duration: '~25-35 min',
    stepCount: 4,
    bestFor: 'Cải thiện tỷ lệ conversion trên landing page',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ckm:funnel analyze "url"',
        typeLabel: 'Phân tích hiệu suất',
        description: 'Xem xét chỉ số hiện tại, bounce rate, và luồng người dùng',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1
      },
      {
        command: '/ckm:form-cro "url"',
        typeLabel: 'Tối ưu form (skill)',
        description: 'Tối ưu trường form, CTA, và các điểm gây ma sát',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:copywriting',
        typeLabel: 'Tối ưu copy (skill)',
        description: 'Cải thiện headlines, value proposition, và yếu tố thuyết phục',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3,
        isSkill: true
      },
      {
        command: '/ckm:plan cro',
        typeLabel: 'Tạo kế hoạch CRO',
        description: 'Ghi lại thay đổi và thiết lập tracking cho các cải tiến',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Tập trung tối ưu từng điểm một để đo lường tác động chính xác',
    features: [
      'Phân tích heatmap',
      'Tối ưu trường form',
      'Biến thể A/B cho copy',
      'Theo dõi conversion'
    ],
    borderColor: 'border-emerald-500/20'
  },

  // === DESIGN & CREATIVE ===
  {
    title: 'Tạo Marketing Assets',
    category: 'Design & Creative',
    level: 'Intermediate',
    duration: '~30-45 min',
    stepCount: 4,
    bestFor: 'Tạo bộ visual assets đồng nhất cho campaign',
    gradientHeader: 'from-teal-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-teal-500/50',
    buttonColor: 'bg-teal-500 hover:bg-teal-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-teal-600 dark:text-teal-400',
    steps: [
      {
        command: '/ckm:brand review',
        typeLabel: 'Xem xét brand guidelines',
        description: 'Tải màu sắc, font chữ, và hướng dẫn phong cách brand',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 1
      },
      {
        command: '/ckm:design-system',
        typeLabel: 'Hệ thống thiết kế (skill)',
        description: 'Tạo thư viện component phù hợp với brand',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:design banner',
        typeLabel: 'Tạo assets (skill)',
        description: 'Tạo banner, quảng cáo, và đồ họa khuyến mãi',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:assets-organizing',
        typeLabel: 'Tổ chức assets (skill)',
        description: 'Sắp xếp và xuất assets cho các nền tảng khác nhau',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Dùng /ckm:brand create để thiết lập brand guidelines trước nếu chưa có',
    features: [
      'Thiết kế nhất quán với brand',
      'Xuất nhiều kích thước',
      'Định dạng theo từng nền tảng',
      'Tổ chức thư viện asset'
    ],
    borderColor: 'border-teal-500/20'
  },
  {
    title: 'Thiết Kế Đồ Họa Social',
    category: 'Design & Creative',
    level: 'Beginner',
    duration: '~15-25 min',
    stepCount: 3,
    bestFor: 'Tạo visual hấp dẫn cho social media',
    gradientHeader: 'from-pink-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ckm:design social',
        typeLabel: 'Tạo đồ họa (skill)',
        description: 'Tạo đồ họa social media tối ưu cho từng nền tảng',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:copywriting',
        typeLabel: 'Viết caption (skill)',
        description: 'Tạo caption hấp dẫn kèm hashtag phù hợp',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ckm:social schedule',
        typeLabel: 'Lên lịch đăng bài',
        description: 'Lập lịch đăng bài để tối ưu engagement',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: 'Mỗi nền tảng có kích thước hình ảnh tối ưu riêng — /ckm:design tự động định dạng',
    features: [
      'Kích thước theo từng nền tảng',
      'Nhất quán với brand',
      'Tạo caption tự động',
      'Gợi ý hashtag'
    ],
    borderColor: 'border-pink-500/20'
  },

  // === STRATEGY & RESEARCH ===
  {
    title: 'Phân Tích Đối Thủ',
    category: 'Strategy & Research',
    level: 'Intermediate',
    duration: '~25-35 min',
    stepCount: 4,
    bestFor: 'Hiểu rõ bức tranh cạnh tranh và cơ hội thị trường',
    gradientHeader: 'from-blue-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/ckm:competitor list',
        typeLabel: 'Xác định đối thủ',
        description: 'Khám phá đối thủ trực tiếp và gián tiếp trong lĩnh vực',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      },
      {
        command: '/ckm:competitor analyze "url"',
        typeLabel: 'Phân tích chuyên sâu',
        description: 'Phân tích định vị, thông điệp, và giá trị độc đáo',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2
      },
      {
        command: '/ckm:competitor content',
        typeLabel: 'Audit nội dung',
        description: 'Phân tích chiến lược content, chủ đề, và engagement',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3
      },
      {
        command: '/ckm:marketing-research',
        typeLabel: 'Insight thị trường (skill)',
        description: 'Tổng hợp kết quả thành các insight có thể hành động',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Theo dõi 3-5 đối thủ chính đều đặn để có thông tin cạnh tranh liên tục',
    features: [
      'Bản đồ đối thủ cạnh tranh',
      'Phân tích định vị',
      'Xác định content gap',
      'Ma trận cơ hội'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Xây Dựng Kế Hoạch Marketing',
    category: 'Strategy & Research',
    level: 'Advanced',
    duration: '~40-60 min',
    stepCount: 5,
    bestFor: 'Tạo chiến lược marketing toàn diện',
    gradientHeader: 'from-indigo-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/ckm:persona',
        typeLabel: 'Xác định persona',
        description: 'Tạo buyer persona chi tiết và phân khúc khách hàng',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1
      },
      {
        command: '/ckm:marketing-research',
        typeLabel: 'Nghiên cứu thị trường (skill)',
        description: 'Phân tích xu hướng thị trường, quy mô, và cơ hội',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:funnel design',
        typeLabel: 'Thiết kế funnel',
        description: 'Vẽ bản đồ hành trình khách hàng và các điểm conversion',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3
      },
      {
        command: '/ckm:marketing-planning',
        typeLabel: 'Kế hoạch chiến lược (skill)',
        description: 'Tạo tài liệu chiến lược marketing toàn diện',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 4,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:dashboard',
        typeLabel: 'Thiết lập tracking',
        description: 'Cấu hình dashboard KPI và báo cáo',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 5
      }
    ],
    tip: 'Xem xét và cập nhật kế hoạch marketing mỗi quý để đạt kết quả tốt nhất',
    features: [
      'Phát triển persona',
      'Chiến lược kênh phân phối',
      'Phân bổ ngân sách',
      'Khung KPI'
    ],
    borderColor: 'border-indigo-500/20'
  },

  // === PLAYBOOK & ORCHESTRATION ===
  {
    title: 'Chạy Marketing Playbook',
    category: 'Playbook & Orchestration',
    level: 'Intermediate',
    duration: '~30-60 min',
    stepCount: 4,
    bestFor: 'Điều phối campaign marketing end-to-end với template, mục tiêu, và gợi ý thông minh',
    gradientHeader: 'from-violet-500/10 to-fuchsia-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/ckm:play create --template saas-launch',
        typeLabel: 'Tạo playbook (skill)',
        description: 'Chọn từ các template: saas-launch, product-hunt-launch, content-engine, campaign-sprint',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:play goals set',
        typeLabel: 'Đặt mục tiêu (skill)',
        description: 'Xác định KPI và target — tích hợp với chỉ số GA4, GSC, Stripe',
        color: 'bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:play next',
        typeLabel: 'Bước tiếp theo thông minh (skill)',
        description: 'AI gợi ý hành động có tác động cao nhất dựa trên khoảng cách mục tiêu và trạng thái bước',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 3,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ckm:play status',
        typeLabel: 'Theo dõi tiến độ (skill)',
        description: 'Dashboard tổng quan tất cả bước, mục tiêu, và điểm nghẽn',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Dùng /ckm:play learn để ghi lại insight sau khi hoàn thành mỗi bước',
    features: [
      'Định tuyến dependency-graph giữa các bước',
      'Quality gate cho các checkpoint phê duyệt thủ công',
      'Theo dõi mục tiêu tích hợp GA4/GSC/Stripe',
      'Gợi ý thông minh dựa trên khoảng cách mục tiêu',
      '4 template tích hợp: SaaS launch, Product Hunt, content engine, campaign sprint'
    ],
    borderColor: 'border-violet-500/20'
  },

  // === VIDEO & MEDIA ===
  {
    title: 'Thiết Kế YouTube Thumbnails',
    category: 'Video & Media',
    level: 'Beginner',
    duration: '~10-20 min',
    stepCount: 3,
    bestFor: 'Tạo YouTube thumbnails tối ưu CTR với AI generation',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ckm:youtube-thumbnail-design',
        typeLabel: 'Thiết kế thumbnail (skill)',
        description: 'AI tạo thumbnail hoàn chỉnh có text qua Gemini Pro (lên đến 4K)',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:ai-multimodal',
        typeLabel: 'Xem xét & tinh chỉnh (skill)',
        description: 'Phân tích thumbnail đã tạo và cải thiện theo phản hồi',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ckm:assets-organizing',
        typeLabel: 'Tổ chức file xuất (skill)',
        description: 'Sắp xếp thumbnail theo video slug với quy tắc đặt tên biến thể',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '17 phong cách art direction: facecam, mystery, bold-text, before-after, và nhiều hơn',
    features: [
      '17 phong cách art direction với đánh giá tác động CTR',
      'Hướng dẫn theo niche: tech, gaming, education, cooking, fitness, business',
      'Tạo hàng loạt biến thể cho A/B testing',
      'Hỗ trợ ảnh khuôn mặt tham chiếu để đồng nhất brand',
      'Hỗ trợ Google Font và overlay mũi tên'
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Viết Script & Storyboard Video',
    category: 'Video & Media',
    level: 'Intermediate',
    duration: '~25-40 min',
    stepCount: 3,
    bestFor: 'Lập kế hoạch pre-production cho nội dung video',
    gradientHeader: 'from-orange-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ckm:video script "topic"',
        typeLabel: 'Viết script',
        description: 'Tạo script video với hook, nội dung chính, và CTA',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1
      },
      {
        command: '/ckm:video storyboard',
        typeLabel: 'Tạo storyboard',
        description: 'Phân cảnh chi tiết từng shot kèm thời lượng',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2
      },
      {
        command: '/ckm:elevenlabs speak',
        typeLabel: 'Tạo voiceover (skill)',
        description: 'Tạo giọng đọc AI từ script',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Giữ video dưới 2 phút cho social media; dưới 10 phút cho YouTube',
    features: [
      'Tối ưu hook mở đầu',
      'Phân cảnh chi tiết',
      'Hướng dẫn timing',
      'Tùy chọn voiceover AI'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Sản Xuất Video Content',
    category: 'Video & Media',
    level: 'Advanced',
    duration: '~45-60 min',
    stepCount: 4,
    bestFor: 'Quy trình sản xuất video đầy đủ',
    gradientHeader: 'from-red-500/10 to-pink-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ckm:video script',
        typeLabel: 'Script & lập kế hoạch',
        description: 'Tạo script và kế hoạch sản xuất',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/ckm:video create',
        typeLabel: 'Tạo video',
        description: 'Tạo video với sự hỗ trợ AI hoặc hướng dẫn chỉnh sửa',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 2
      },
      {
        command: '/ckm:youtube social',
        typeLabel: 'Cắt clip',
        description: 'Tạo clip social media từ nội dung dài',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 3
      },
      {
        command: '/ckm:seo keywords "video"',
        typeLabel: 'Tối ưu metadata',
        description: 'Tạo tiêu đề, mô tả, và tag SEO',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Dùng /ckm:youtube blog để chuyển đổi video thành bài blog',
    features: [
      'Quy trình sản xuất đầy đủ',
      'Tạo clip social',
      'Tối ưu SEO',
      'Xuất đa nền tảng'
    ],
    borderColor: 'border-red-500/20'
  }
];
