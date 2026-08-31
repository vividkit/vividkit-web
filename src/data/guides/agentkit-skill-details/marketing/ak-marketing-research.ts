import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-marketing-research",
  command: "/ak:marketing-research",
  kit: 'marketer',
  header: {
    titleEn: '/ak:marketing-research — Market, competitor, and audience research',
    titleVi: '/ak:marketing-research — Nghiên cứu thị trường, đối thủ và audience',
    taglineEn: "Actionable market, competitor, audience, trend, benchmark, and best-practice research that feeds data-driven marketing planning.",
    taglineVi: "Nghiên cứu thị trường, đối thủ, audience, trend, benchmark và best practice có thể hành động, làm đầu vào cho marketing planning dựa trên dữ liệu."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Define scope",
      titleVi: "Xác định phạm vi",
      descEn: "Clarify target segments, competitive boundaries, KPIs, geography, timeframe, and research depth.",
      descVi: "Làm rõ segment mục tiêu, ranh giới đối thủ, KPI, địa lý, timeframe và độ sâu nghiên cứu."
    },
    {
      number: 2,
      titleEn: "Plan searches",
      titleVi: "Lập truy vấn",
      descEn: "Craft precise search queries and decide carefully before each research call because the cap is five.",
      descVi: "Soạn truy vấn chính xác và cân nhắc trước từng lượt research vì giới hạn tối đa là năm."
    },
    {
      number: 3,
      titleEn: "Gather sources",
      titleVi: "Gom nguồn",
      descEn: "Use native web_search, prefer official docs, authoritative blogs, recognized experts, and current materials.",
      descVi: "Dùng web_search native, ưu tiên docs chính thức, blog uy tín, chuyên gia được công nhận và nguồn mới."
    },
    {
      number: 4,
      titleEn: "Deep analyze",
      titleVi: "Phân tích sâu",
      descEn: "Use docs-seeker for promising GitHub repository URLs and read primary docs, APIs, changelogs, and specs.",
      descVi: "Dùng docs-seeker cho URL GitHub có tiềm năng và đọc docs chính, API, changelog, spec."
    },
    {
      number: 5,
      titleEn: "Cross-check",
      titleVi: "Đối chiếu chéo",
      descEn: "Validate across independent sources, check publication dates, and note consensus, controversy, or conflicts.",
      descVi: "Xác thực qua nguồn độc lập, kiểm tra ngày xuất bản và ghi rõ đồng thuận, tranh cãi hoặc mâu thuẫn."
    },
    {
      number: 6,
      titleEn: "Synthesize",
      titleVi: "Tổng hợp",
      descEn: "Identify patterns, pros/cons, maturity, stability, security, performance, compatibility, and integrations.",
      descVi: "Rút ra pattern, ưu/nhược, độ trưởng thành, ổn định, bảo mật, hiệu năng, tương thích và tích hợp."
    },
    {
      number: 7,
      titleEn: "Write report",
      titleVi: "Viết report",
      descEn: "Save a concise but comprehensive markdown report at the required Report path with timestamp and citations.",
      descVi: "Lưu report markdown ngắn gọn nhưng đầy đủ tại Report path bắt buộc, có timestamp và citation."
    },
    {
      number: 8,
      titleEn: "Close actions",
      titleVi: "Chốt hành động",
      descEn: "End with actionable next steps and unresolved questions, if any.",
      descVi: "Kết thúc bằng bước tiếp theo có thể làm ngay và câu hỏi còn mở nếu có."
    }
  ],
  hardGate: {
    type: "critical",
    titleEn: "Research cap and path authority",
    titleVi: "Giới hạn research và quyền quyết định path",
    contentEn: "At most five research tool calls are allowed, and user-requested lower limits must be respected. Reports must use the Report path from Naming; if unavailable, ask the main agent for the output path.",
    contentVi: "Tối đa năm lượt gọi research, và nếu user yêu cầu ít hơn thì phải tôn trọng. Report phải dùng Report path trong Naming; nếu không có, hỏi main agent path output."
  },
  corePrinciplesEn: [
    "Actionable intelligence over raw source collection",
    "Currency and attribution are mandatory",
    "Cross-reference before claiming consensus",
    "Be honest, brutal, straight to the point, and concise",
    "Unresolved questions belong at the end"
  ],
  corePrinciplesVi: [
    "Ưu tiên intelligence hành động được hơn gom nguồn thô",
    "Nguồn mới và attribution là bắt buộc",
    "Đối chiếu chéo trước khi nói có đồng thuận",
    "Thẳng thắn, sắc gọn và đi vào trọng tâm",
    "Câu hỏi chưa giải quyết đặt cuối report"
  ],
  expertiseAreasEn: [
    "Market trends",
    "Competitor analysis",
    "Audience insights",
    "Campaign benchmarks",
    "Best-practice research",
    "Technical intelligence reports"
  ],
  expertiseAreasVi: [
    "Xu hướng thị trường",
    "Phân tích đối thủ",
    "Insight audience",
    "Benchmark campaign",
    "Research best practice",
    "Report intelligence kỹ thuật"
  ],
  promptExamples: [{
      labelEn: "Market scan",
      labelVi: "Quét thị trường",
      command: "/ak:marketing-research AI meeting notes market for SMB teams",
      commandVi: '/ak:marketing-research thị trường ghi chú cuộc họp AI cho các nhóm SMB',
      whenEn: "Marketing planning needs evidence about market, audience, competitors, and benchmarks.",
      whenVi: "Khi marketing planning cần bằng chứng về thị trường, audience, đối thủ và benchmark.",
      expectedEn: "Scopes research, uses up to five focused searches, cross-checks sources, and writes a cited report with next steps.",
      expectedVi: "Chốt phạm vi, dùng tối đa năm lượt tìm tập trung, đối chiếu nguồn và viết report có citation cùng bước tiếp theo.",
      recommended: true
    },
    {
      labelEn: "Competitor landscape",
      labelVi: "Bức tranh đối thủ",
      command: "/ak:marketing-research competitors for privacy-first analytics SaaS",
      commandVi: '/ak:marketing-research đối thủ cạnh tranh cho SaaS phân tích ưu tiên quyền riêng tư',
      whenEn: "You need competitive landscape boundaries and positioning opportunities.",
      whenVi: "Khi cần xác định ranh giới cạnh tranh và cơ hội positioning.",
      expectedEn: "Finds key competitors, current trends, best practices, risks, and implementation recommendations.",
      expectedVi: "Tìm đối thủ chính, trend hiện tại, best practice, rủi ro và khuyến nghị triển khai."
    },
    { labelEn: 'ICP and competitors', labelVi: 'ICP và đối thủ', command: '/ak:marketing-research ICP and competitors for AI bookkeeping',
      commandVi: '/ak:marketing-research ICP và đối thủ cạnh tranh cho kế toán AI', whenEn: 'You need actionable market research with a defined segment and competitive set.', whenVi: 'Khi cần nghiên cứu thị trường hành động được với segment và tập đối thủ rõ.', expectedEn: 'ICP, competitor map, benchmarks, and recommended next research or GTM move.', expectedVi: 'ICP, bản đồ đối thủ, benchmark và bước research hoặc GTM tiếp theo.' }
  ],
  skillStack: [
    {
      name: "web_search",
      type: "tool"
    },
    {
      name: "docs-seeker",
      type: "skill"
    }
  ],
  reportOutput: {
    titleEn: "Marketing research report",
    titleVi: "Report nghiên cứu marketing",
    patternEn: "Descriptive markdown report at the Report path from Naming",
    patternVi: "Report markdown tên mô tả tại Report path trong Naming",
    descEn: "Executive summary • methodology • key findings • comparisons • recommendations • resources • unresolved questions",
    descVi: "Tóm tắt điều hành • phương pháp • phát hiện chính • so sánh • khuyến nghị • nguồn tham khảo • câu hỏi còn mở"
  }
};

export default data;
