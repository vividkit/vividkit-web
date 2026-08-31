import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-campaign",
  command: "/ak:campaign",
  kit: 'marketer',
  header: {
    titleEn: '/ak:campaign — Campaign command center',
    titleVi: '/ak:campaign — Trung tâm điều phối chiến dịch',
    taglineEn: "Plans, launches, checks, analyzes, and emails marketing campaigns across channels, budgets, timelines, funnels, and performance reports.",
    taglineVi: "Lên kế hoạch, triển khai, theo dõi, phân tích và quản lý email cho chiến dịch marketing đa kênh, gồm ngân sách, timeline, funnel và báo cáo hiệu suất.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse request", titleVi: "Đọc yêu cầu", descEn: "Extract the campaign action and name from the first arguments.", descVi: "Tách hành động chiến dịch và tên chiến dịch từ các tham số đầu tiên." },
    { number: 2, titleEn: "Choose route", titleVi: "Chọn tuyến xử lý", descEn: "Route to create, status, analyze, or email; load the matching reference when present.", descVi: "Đi theo nhánh create, status, analyze hoặc email; tải tài liệu tham chiếu tương ứng nếu có." },
    { number: 3, titleEn: "Create campaign", titleVi: "Tạo chiến dịch", descEn: "For create, gather requirements, use campaign-manager, then funnel-architect, and organize the plan under assets/campaigns.", descVi: "Với create, thu thập yêu cầu, dùng campaign-manager rồi funnel-architect và sắp xếp kế hoạch trong assets/campaigns." },
    { number: 4, titleEn: "Check status", titleVi: "Kiểm tra trạng thái", descEn: "For status, read campaign files and have analytics-analyst summarize progress, blockers, and next moves.", descVi: "Với status, đọc hồ sơ campaign và để analytics-analyst tóm tắt tiến độ, điểm nghẽn và bước tiếp theo." },
    { number: 5, titleEn: "Analyze performance", titleVi: "Phân tích hiệu suất", descEn: "For analyze, combine analytics-analyst with campaign-debugger to inspect metrics and diagnose underperformance.", descVi: "Với analyze, kết hợp analytics-analyst và campaign-debugger để xem chỉ số và chẩn đoán phần đang kém hiệu quả." },
    { number: 6, titleEn: "Manage email", titleVi: "Quản lý email", descEn: "For email, create or manage the email campaign assets tied to the broader campaign plan.", descVi: "Với email, tạo hoặc quản lý các tài sản email gắn với kế hoạch chiến dịch tổng thể." },
    { number: 7, titleEn: "Deliver outputs", titleVi: "Bàn giao kết quả", descEn: "Write briefs, creatives, reports, or diagnostics into the documented campaign and audit paths.", descVi: "Lưu brief, creative, report hoặc chẩn đoán vào đúng đường dẫn campaign và audit đã quy định." },
  ],
  corePrinciplesEn: [
    "Treat campaigns as end-to-end systems: offer, funnel, creative, channel, budget, timeline, and measurement.",
    "Route by explicit action so creation, status checks, analysis, and email work do not blur together.",
    "Use the specialist agents named by the skill for orchestration, funnel design, analytics, and debugging.",
  ],
  corePrinciplesVi: [
    "Xem campaign như một hệ thống trọn vẹn: offer, funnel, creative, kênh, ngân sách, timeline và đo lường.",
    "Định tuyến theo hành động rõ ràng để tạo mới, kiểm tra trạng thái, phân tích và email không bị trộn lẫn.",
    "Dùng đúng các agent chuyên trách mà skill nêu: điều phối, thiết kế funnel, phân tích và gỡ lỗi campaign.",
  ],
  expertiseAreasEn: ["Product launches", "Seasonal promotions", "Brand awareness", "Lead generation", "Re-engagement", "Email campaigns"],
  expertiseAreasVi: ["Ra mắt sản phẩm", "Khuyến mãi theo mùa", "Nhận diện thương hiệu", "Tạo lead", "Kích hoạt lại người dùng", "Chiến dịch email"],
  promptExamples: [
    { labelEn: "Create campaign", labelVi: "Tạo chiến dịch", command: "/ak:campaign create Summer Launch",
      commandVi: '/ak:campaign create Ra mắt Mùa hè', whenEn: "Use when a new multi-channel campaign needs brief, funnel, and creative planning.", whenVi: "Dùng khi cần tạo chiến dịch đa kênh mới với brief, funnel và kế hoạch creative.", expectedEn: "A structured campaign workspace with briefs and creatives under assets/campaigns.", expectedVi: "Một workspace campaign có cấu trúc, gồm brief và creative trong assets/campaigns.", recommended: true },
    { labelEn: "Campaign status", labelVi: "Trạng thái chiến dịch", command: "/ak:campaign status Summer Launch",
      commandVi: '/ak:campaign status Ra mắt Mùa hè', whenEn: "Use when campaign files already exist and you need progress summarized.", whenVi: "Dùng khi đã có hồ sơ campaign và cần tóm tắt tiến độ.", expectedEn: "Progress, blockers, and next actions from the campaign files.", expectedVi: "Tiến độ, điểm nghẽn và hành động tiếp theo từ hồ sơ campaign." },
    { labelEn: "Performance analysis", labelVi: "Phân tích hiệu suất", command: "/ak:campaign analyze Summer Launch",
      commandVi: '/ak:campaign analyze Ra mắt Mùa hè', whenEn: "Use when metrics or channel performance need diagnosis.", whenVi: "Dùng khi cần chẩn đoán chỉ số hoặc hiệu suất theo kênh.", expectedEn: "A performance report and campaign audit recommendations.", expectedVi: "Báo cáo hiệu suất và khuyến nghị audit campaign." },
    { labelEn: "Email campaign", labelVi: "Chiến dịch email", command: "/ak:campaign email Summer Launch",
      commandVi: '/ak:campaign email Ra mắt Mùa hè', whenEn: "Use for email campaign creation or management inside the campaign.", whenVi: "Dùng để tạo hoặc quản lý email trong chiến dịch.", expectedEn: "Email campaign assets aligned to the broader campaign plan.", expectedVi: "Tài sản email bám sát kế hoạch chiến dịch tổng thể." },
  ],
  skillStack: [
    { name: "campaign-manager", type: "agent" },
    { name: "funnel-architect", type: "agent" },
    { name: "analytics-analyst", type: "agent" },
    { name: "campaign-debugger", type: "agent" },
  ],
  reportOutput: {
    titleEn: "Campaign asset paths",
    titleVi: "Đường dẫn tài sản campaign",
    patternEn: "assets/campaigns/{date}-{slug}/... and assets/diagnostics/campaign-audits/{date}-{name}.md",
    patternVi: "assets/campaigns/{date}-{slug}/... và assets/diagnostics/campaign-audits/{date}-{name}.md",
    descEn: "Briefs, creatives, campaign reports, and diagnostic audits are written to the campaign output structure documented by the skill.",
    descVi: "Brief, creative, báo cáo campaign và audit chẩn đoán được lưu theo cấu trúc đầu ra mà skill quy định.",
  },
};

export default data;
