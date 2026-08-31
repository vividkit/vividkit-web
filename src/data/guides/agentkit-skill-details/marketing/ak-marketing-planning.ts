import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-marketing-planning",
  command: "/ak:marketing-planning",
  kit: 'marketer',
  header: {
    titleEn: '/ak:marketing-planning — Research-backed marketing strategy and calendars',
    titleVi: '/ak:marketing-planning — Chiến lược marketing và lịch content có research',
    taglineEn: "Create research-backed marketing strategies, campaign plans, content calendars, acquisition funnels, and multi-channel initiatives using proven frameworks.",
    taglineVi: "Tạo chiến lược marketing, campaign plan, lịch content, funnel acquisition và sáng kiến đa kênh có nền tảng research và framework rõ ràng."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Check plan state",
      titleVi: "Kiểm tra plan state",
      descEn: "Read injected Plan Context: active plan can continue after asking; suggested plan is only a hint; none means create new.",
      descVi: "Đọc Plan Context được inject: active plan có thể tiếp tục sau khi hỏi; suggested chỉ là gợi ý; none thì tạo plan mới."
    },
    {
      number: 2,
      titleEn: "Research first",
      titleVi: "Nghiên cứu trước",
      descEn: "Activate marketing-research unless research reports are already provided.",
      descVi: "Kích hoạt marketing-research trừ khi đã có report nghiên cứu."
    },
    {
      number: 3,
      titleEn: "Understand brand",
      titleVi: "Hiểu brand",
      descEn: "Load brand context and fully respect ./docs/brand-guidelines.md when present.",
      descVi: "Nạp bối cảnh brand và tôn trọng đầy đủ ./docs/brand-guidelines.md nếu có."
    },
    {
      number: 4,
      titleEn: "Synthesize insights",
      titleVi: "Tổng hợp insight",
      descEn: "Analyze market, competitors, audience, and positioning opportunities before choosing tactics.",
      descVi: "Phân tích thị trường, đối thủ, audience và cơ hội positioning trước khi chọn tactic."
    },
    {
      number: 5,
      titleEn: "Design strategy",
      titleVi: "Thiết kế chiến lược",
      descEn: "Define positioning, channels, messaging, funnels, content strategy, and trade-offs.",
      descVi: "Định nghĩa positioning, kênh, messaging, funnel, chiến lược content và trade-off."
    },
    {
      number: 6,
      titleEn: "Document plan",
      titleVi: "Viết plan",
      descEn: "Create a self-contained marketing plan with research, reports, plan.md, and phase files when appropriate.",
      descVi: "Tạo kế hoạch marketing tự đủ ngữ cảnh với research, reports, plan.md và file theo phase khi phù hợp."
    },
    {
      number: 7,
      titleEn: "Break down tasks",
      titleVi: "Chia việc",
      descEn: "Turn strategy into actionable tasks detailed enough for a marketing team to execute.",
      descVi: "Biến chiến lược thành task hành động đủ chi tiết để team marketing triển khai."
    },
    {
      number: 8,
      titleEn: "Review feasibility",
      titleVi: "Rà tính khả thi",
      descEn: "Check completeness, feasibility, differentiation, brand alignment, and creative clarity.",
      descVi: "Kiểm tra độ đầy đủ, khả thi, khác biệt cạnh tranh, hợp brand và độ rõ của creative."
    },
    {
      number: 9,
      titleEn: "Report location",
      titleVi: "Báo vị trí",
      descEn: "Return plan file path and summary, using the correct active-plan or default report path rules.",
      descVi: "Trả path file kế hoạch và summary, theo đúng rule report path của active plan hoặc default."
    }
  ],
  hardGate: {
    type: "critical",
    titleEn: "Plan, don't execute",
    titleVi: "Chỉ lập kế hoạch, không thực thi",
    contentEn: "Do not execute campaigns. If an active plan path is injected, ask whether to continue; suggested plans are hints only and must not be auto-used.",
    contentVi: "Không chạy campaign. Nếu có active plan path được inject, phải hỏi có tiếp tục không; suggested plan chỉ là gợi ý và không được tự dùng."
  },
  corePrinciplesEn: [
    "Research-backed plans beat brainstormed tactics",
    "Brand guidelines are binding",
    "Plans must be self-contained and executable by a team",
    "Multiple options need explicit trade-offs",
    "Active plan state prevents version sprawl"
  ],
  corePrinciplesVi: [
    "Kế hoạch dựa trên research tốt hơn tactic nghĩ nhanh",
    "Brand guideline là ràng buộc",
    "Plan phải tự đủ ngữ cảnh và team triển khai được",
    "Nhiều option phải có trade-off rõ",
    "Active plan state tránh sinh nhiều version rác"
  ],
  expertiseAreasEn: [
    "Campaign strategy",
    "Content calendars",
    "Positioning and messaging",
    "Acquisition funnels",
    "Multi-channel initiatives",
    "Plan organization"
  ],
  expertiseAreasVi: [
    "Chiến lược campaign",
    "Lịch content",
    "Positioning và messaging",
    "Funnel acquisition",
    "Sáng kiến đa kênh",
    "Tổ chức plan"
  ],
  promptExamples: [{
      labelEn: "Quarterly plan",
      labelVi: "Kế hoạch theo quý",
      command: "/ak:marketing-planning Q4 launch campaign for our design collaboration SaaS",
      commandVi: '/ak:marketing-planning chiến dịch ra mắt Q4 cho SaaS cộng tác thiết kế của chúng tôi',
      whenEn: "You need a comprehensive marketing plan with research, strategy, phases, and outputs.",
      whenVi: "Khi cần kế hoạch marketing toàn diện với research, strategy, phase và output.",
      expectedEn: "Runs or uses research, respects brand docs, writes a structured plan, and reports path plus summary.",
      expectedVi: "Chạy hoặc dùng research, tôn trọng brand docs, viết plan có cấu trúc và báo path kèm summary.",
      recommended: true
    },
    {
      labelEn: "Content calendar",
      labelVi: "Lịch content",
      command: "/ak:marketing-planning 8-week content calendar for onboarding analytics",
      commandVi: '/ak:marketing-planning lịch nội dung 8 tuần cho analytics onboarding',
      whenEn: "A content initiative needs strategy, sequencing, and execution-ready tasks.",
      whenVi: "Khi một sáng kiến content cần strategy, thứ tự triển khai và task sẵn sàng làm.",
      expectedEn: "Produces a plan organized around audience, channels, messages, schedule, and measurable outcomes.",
      expectedVi: "Tạo plan theo audience, kênh, thông điệp, lịch và kết quả đo được."
    },
    { labelEn: 'Q4 campaign plan', labelVi: 'Plan campaign Q4', command: '/ak:marketing-planning Q4 content and paid campaign plan',
      commandVi: '/ak:marketing-planning Kế hoạch nội dung và chiến dịch trả phí Q4', whenEn: 'You need a research-backed plan package, not immediate campaign execution.', whenVi: 'Khi cần gói plan có research, không phải chạy campaign ngay.', expectedEn: 'Strategy, calendar, channel mix, and open questions for Q4.', expectedVi: 'Chiến lược, lịch, mix kênh và câu hỏi còn mở cho Q4.' }
  ],
  reportOutput: {
    titleEn: "Marketing plan package",
    titleVi: "Gói kế hoạch marketing",
    patternEn: "plans/{date}-campaign-name/ with plan.md, research, reports, and phase files",
    patternVi: "plans/{date}-campaign-name/ gồm plan.md, research, reports và file theo phase",
    descEn: "Research • brand context • strategy • campaign brief • tasks • trade-offs • success metrics",
    descVi: "Research • bối cảnh brand • chiến lược • campaign brief • task • trade-off • metric thành công"
  }
};

export default data;
