import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-analytics",
  command: "/ak:analytics",
  kit: 'marketer',
  header: {
    titleEn: "Marketing Analytics",
    titleVi: "Phân tích marketing",
    taglineEn: "Measure campaign performance, KPIs, attribution, ROI, A/B results, funnel health, and reporting dashboards so marketing decisions are driven by comparable evidence.",
    taglineVi: "Đo hiệu suất campaign, KPI, attribution, ROI, kết quả A/B, sức khỏe funnel và dashboard báo cáo để quyết định marketing dựa trên bằng chứng có thể so sánh.",
  },
  processFlow: [
    { number: 1, titleEn: "Define success", titleVi: "Định nghĩa thành công", descEn: "Clarify the metric or report type and select the KPI framework for acquisition, engagement, conversion, retention, and revenue.", descVi: "Làm rõ metric hoặc loại báo cáo và chọn khung KPI cho acquisition, engagement, conversion, retention và revenue." },
    { number: 2, titleEn: "Load templates", titleVi: "Nạp template", descEn: "Use marketing-kpis, report-templates, attribution-models, and analysis-workflows references to ground the analysis structure.", descVi: "Dùng các reference marketing-kpis, report-templates, attribution-models và analysis-workflows để đặt cấu trúc phân tích." },
    { number: 3, titleEn: "Pull data", titleVi: "Lấy dữ liệu", descEn: "Gather comparable data from GA4, ads platforms, CRM, email tools, campaign exports, or available project data.", descVi: "Thu thập dữ liệu có thể so sánh từ GA4, nền tảng ads, CRM, email tool, export campaign hoặc dữ liệu sẵn có trong project." },
    { number: 4, titleEn: "Calculate ratios", titleVi: "Tính tỷ lệ", descEn: "Compute CAC, CPL, traffic, CTR, time on site, bounce, CVR, ROAS, revenue, LTV, churn, NPS, and other relevant ratios.", descVi: "Tính CAC, CPL, traffic, CTR, time on site, bounce, CVR, ROAS, revenue, LTV, churn, NPS và các tỷ lệ liên quan." },
    { number: 5, titleEn: "Compare fairly", titleVi: "So sánh công bằng", descEn: "Use matching timeframes, segments, channels, and benchmarks before concluding performance changes.", descVi: "Dùng cùng khung thời gian, segment, kênh và benchmark trước khi kết luận thay đổi hiệu suất." },
    { number: 6, titleEn: "Model attribution", titleVi: "Mô hình attribution", descEn: "Choose an attribution model, name its limitations, and avoid treating attribution as proof of causation.", descVi: "Chọn mô hình attribution, nêu giới hạn của nó và không coi attribution là bằng chứng nhân quả." },
    { number: 7, titleEn: "Find insights", titleVi: "Tìm insight", descEn: "Identify trends, anomalies, funnel drop-offs, channel differences, A/B test results, and leading indicators that explain performance.", descVi: "Tìm trend, anomaly, điểm rơi trong funnel, khác biệt theo kênh, kết quả A/B test và leading indicator giải thích hiệu suất." },
    { number: 8, titleEn: "Recommend actions", titleVi: "Đề xuất hành động", descEn: "Turn findings into prioritized next steps with owners, cadence, expected impact, and what should be automated for recurring reports.", descVi: "Chuyển phát hiện thành bước tiếp theo có ưu tiên, owner, cadence, tác động kỳ vọng và phần nên tự động hóa cho báo cáo định kỳ." },
  ],
  corePrinciplesEn: [
    "Track leading indicators, not only lagging revenue outcomes.",
    "Compare apples to apples: same timeframe, segment, channel, and measurement definition.",
    "Require statistical significance before treating A/B test differences as decisions.",
    "Report insights and prioritized actions, not just numbers.",
  ],
  corePrinciplesVi: [
    "Theo dõi leading indicator, không chỉ kết quả doanh thu đến muộn.",
    "So sánh đúng chuẩn: cùng thời gian, segment, kênh và định nghĩa đo lường.",
    "Cần ý nghĩa thống kê trước khi biến khác biệt A/B test thành quyết định.",
    "Báo insight và hành động ưu tiên, không chỉ ném số liệu.",
  ],
  expertiseAreasEn: ["KPI frameworks", "Reporting dashboards", "Attribution analysis", "ROI calculation", "A/B test analysis", "Funnel optimization", "GA4 reporting"],
  expertiseAreasVi: ["Khung KPI", "Dashboard báo cáo", "Phân tích attribution", "Tính ROI", "Phân tích A/B test", "Tối ưu funnel", "Báo cáo GA4"],
  promptExamples: [
    { labelEn: "Campaign report", labelVi: "Báo cáo campaign", command: "/ak:analytics campaign performance", whenEn: "A campaign needs KPI, ROI, and channel-performance analysis.", whenVi: "Khi campaign cần phân tích KPI, ROI và hiệu suất theo kênh.", expectedEn: "A structured performance readout with comparable metrics, insights, and prioritized actions.", expectedVi: "Báo cáo hiệu suất có cấu trúc với metric so sánh được, insight và hành động ưu tiên.", recommended: true },
    { labelEn: "ROI analysis", labelVi: "Phân tích ROI", command: "/ak:analytics ROI report", whenEn: "Marketing spend needs to be tied to conversions, revenue, and attribution assumptions.", whenVi: "Khi cần nối spend marketing với conversion, doanh thu và giả định attribution.", expectedEn: "ROI calculations with attribution caveats, benchmarks, and recommended budget moves.", expectedVi: "Tính ROI kèm lưu ý attribution, benchmark và đề xuất chuyển ngân sách." },
  ],
  skillStack: [
    { name: "GA4", type: 'tool' },
    { name: "Ads platforms", type: 'tool' },
    { name: "CRM", type: 'tool' },
    { name: "Email tools", type: 'tool' },
  ],
  reportOutput: {
    titleEn: "Analytics report",
    titleVi: "Báo cáo analytics",
    patternEn: "assets/reports/analytics/{date}-{report-type}.md",
    patternVi: "assets/reports/analytics/{date}-{report-type}.md",
    descEn: "Reports include charts, prioritized recommendation tables, and actionable next steps with owners.",
    descVi: "Báo cáo gồm chart, bảng khuyến nghị theo ưu tiên và bước tiếp theo có owner rõ ràng.",
  },
};

export default data;
