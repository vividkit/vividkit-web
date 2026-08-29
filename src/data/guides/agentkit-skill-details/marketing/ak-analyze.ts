import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-analyze",
  command: "/ak:analyze",
  kit: 'marketer',
  header: {
    titleEn: "Analyze Reports",
    titleVi: "Tạo báo cáo phân tích",
    taglineEn: "Generate focused analytics and performance reports for traffic, campaigns, conversions, funnels, content, and engagement using real data where available.",
    taglineVi: "Tạo báo cáo analytics và hiệu suất tập trung cho traffic, campaign, conversion, funnel, content và engagement, ưu tiên dữ liệu thật khi có.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse type", titleVi: "Đọc loại phân tích", descEn: "Read the requested analysis type from arguments: traffic, campaigns, conversions, funnel, content, engagement, or the report subcommand.", descVi: "Đọc loại phân tích từ tham số: traffic, campaigns, conversions, funnel, content, engagement hoặc subcommand report." },
    { number: 2, titleEn: "Gather data", titleVi: "Thu thập dữ liệu", descEn: "Use the analytics-analyst role, activate analytics frameworks, and pull GA4 or Search Console metrics when integrations are available.", descVi: "Dùng vai trò analytics-analyst, kích hoạt framework analytics và lấy metric GA4 hoặc Search Console khi có tích hợp." },
    { number: 3, titleEn: "Fallback locally", titleVi: "Dùng dữ liệu sẵn có", descEn: "When external MCP data is not available, analyze available project data, campaign exports, documents, or existing reports instead of fabricating metrics.", descVi: "Khi không có dữ liệu MCP bên ngoài, phân tích dữ liệu project, export campaign, tài liệu hoặc báo cáo hiện có thay vì bịa metric." },
    { number: 4, titleEn: "Run type lens", titleVi: "Áp lăng kính theo loại", descEn: "For traffic inspect sources, pages, and trends; for campaigns inspect ROI, conversions, and cost; for conversions and funnel inspect stages and drop-offs.", descVi: "Với traffic xem source, page và trend; với campaign xem ROI, conversion và cost; với conversion/funnel xem stage và điểm rơi." },
    { number: 5, titleEn: "Analyze content", titleVi: "Phân tích content", descEn: "For content and engagement reports, evaluate shares, time on page, audience interaction, and performance against goals.", descVi: "Với báo cáo content và engagement, đánh giá share, thời gian trên trang, tương tác audience và hiệu suất so với mục tiêu." },
    { number: 6, titleEn: "Benchmark goals", titleVi: "So với mục tiêu", descEn: "Compare metrics to campaign goals, historical baselines, channel expectations, and funnel targets.", descVi: "So metric với mục tiêu campaign, baseline lịch sử, kỳ vọng từng kênh và target của funnel." },
    { number: 7, titleEn: "Generate insights", titleVi: "Tạo insight", descEn: "Identify trends, patterns, anomalies, bottlenecks, and likely drivers before recommending actions.", descVi: "Xác định trend, pattern, anomaly, nút thắt và nguyên nhân có khả năng cao trước khi đề xuất hành động." },
    { number: 8, titleEn: "Write report", titleVi: "Viết báo cáo", descEn: "Save the report to the documented analytics report location with findings, recommendations, and next steps.", descVi: "Lưu báo cáo vào vị trí analytics report đã ghi trong skill, gồm phát hiện, khuyến nghị và bước tiếp theo." },
  ],
  corePrinciplesEn: [
    "Start from the requested analysis type so the report has a sharp lens.",
    "Use real GA4 or Search Console metrics when available; otherwise analyze existing project data honestly.",
    "Benchmark before recommending so numbers are interpreted in context.",
    "The output is a useful report, not a generic metrics dump.",
  ],
  corePrinciplesVi: [
    "Bắt đầu từ loại phân tích được yêu cầu để báo cáo có lăng kính rõ.",
    "Dùng metric thật từ GA4 hoặc Search Console khi có; nếu không thì phân tích dữ liệu project hiện có một cách trung thực.",
    "Benchmark trước khi khuyến nghị để số liệu được đặt đúng ngữ cảnh.",
    "Đầu ra phải là báo cáo hữu dụng, không phải dump metric chung chung.",
  ],
  expertiseAreasEn: ["Traffic analysis", "Campaign performance", "Conversion funnels", "Content performance", "Engagement metrics", "Periodic reports"],
  expertiseAreasVi: ["Phân tích traffic", "Hiệu suất campaign", "Funnel conversion", "Hiệu suất content", "Metric engagement", "Báo cáo định kỳ"],
  promptExamples: [
    { labelEn: "Traffic report", labelVi: "Báo cáo traffic", command: "/ak:analyze traffic", whenEn: "You need sources, pages, and trend analysis.", whenVi: "Khi cần phân tích nguồn traffic, trang và xu hướng.", expectedEn: "A traffic report grounded in available metrics with trends and recommendations.", expectedVi: "Báo cáo traffic dựa trên metric sẵn có, có trend và khuyến nghị.", recommended: true },
    { labelEn: "Campaign overview", labelVi: "Tổng quan campaign", command: "/ak:analyze campaigns", whenEn: "Campaign ROI, conversions, and costs need review.", whenVi: "Khi cần review ROI, conversion và chi phí campaign.", expectedEn: "A campaign-performance overview with benchmarks, anomalies, and next actions.", expectedVi: "Tổng quan hiệu suất campaign với benchmark, anomaly và hành động tiếp theo." },
    { labelEn: "Periodic report", labelVi: "Báo cáo định kỳ", command: "/ak:analyze report", whenEn: "You need the documented report subcommand path.", whenVi: "Khi cần dùng subcommand report đã được ghi trong skill.", expectedEn: "The report reference is loaded and executed with remaining arguments.", expectedVi: "Reference report được nạp và thực thi với phần tham số còn lại." },
  ],
  skillStack: [
    { name: "analytics", type: 'skill' },
    { name: "analytics-analyst", type: 'agent' },
    { name: "funnel-architect", type: 'agent' },
    { name: "GA4", type: 'tool' },
    { name: "Search Console", type: 'tool' },
  ],
  reportOutput: {
    titleEn: "Analytics report",
    titleVi: "Báo cáo analytics",
    patternEn: "reports/analytics/{date}-{type}.md",
    patternVi: "reports/analytics/{date}-{type}.md",
    descEn: "The skill writes type-specific analytics reports with insights and recommendations.",
    descVi: "Skill ghi báo cáo analytics theo từng loại, kèm insight và khuyến nghị.",
  },
};

export default data;
