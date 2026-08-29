import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-agentkit",
  command: "/ak:agentkit",
  kit: 'marketer',
  header: {
    titleEn: "AgentKit Router",
    titleVi: "Bộ định tuyến AgentKit",
    taglineEn: "Classify ambiguous or multi-domain work, pick the right installed skills, chain the shortest workflow that fits, and spawn subagents only where they improve quality.",
    taglineVi: "Phân loại việc mơ hồ hoặc đa miền, chọn đúng skill đã cài, nối workflow ngắn nhất đủ dùng và chỉ spawn subagent ở điểm thật sự nâng chất lượng.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Route orchestration away",
    titleVi: "Chuyển việc orchestration ra đúng skill",
    contentEn: "If the task is about headless jobs, CLI runtimes, parallel worktrees, or multi-session teams, the SKILL.md says to hand off to ak-orchestrate or ak-team and stop routing here.",
    contentVi: "Nếu việc là job headless, nhiều CLI runtime, parallel worktree hoặc team nhiều session, SKILL.md yêu cầu chuyển sang ak-orchestrate hoặc ak-team rồi dừng routing tại đây.",
  },
  processFlow: [
    { number: 1, titleEn: "Proportionality gate", titleVi: "Cổng tương xứng", descEn: "Avoid routing ceremony: direct skill names, obvious single-skill work, and pure conversation bypass the router.", descVi: "Tránh nghi thức thừa: người dùng đã nêu skill, việc rõ một skill, hoặc chỉ hỏi đáp thì bỏ qua router." },
    { number: 2, titleEn: "Classify task", titleVi: "Phân loại việc", descEn: "Use the taxonomy to emit workflow class, size, risk, and domain count before building a chain.", descVi: "Dùng taxonomy để xác định class workflow, quy mô, rủi ro và số domain trước khi dựng chuỗi." },
    { number: 3, titleEn: "Inventory installs", titleVi: "Kiểm kê đã cài", descEn: "Confirm installed skills and agents from the runtime-native source; never route to a capability that is absent.", descVi: "Xác nhận skill và agent đã cài từ nguồn đúng runtime; không route tới capability chưa có." },
    { number: 4, titleEn: "Select skills", titleVi: "Chọn skill", descEn: "Prefer a user-named skill, then domain-specific owners, with one primary skill per distinct intent.", descVi: "Ưu tiên skill người dùng đã gọi, rồi owner theo domain, và chỉ một skill chính cho mỗi intent riêng." },
    { number: 5, titleEn: "Chain shortest path", titleVi: "Nối đường ngắn nhất", descEn: "Use owning references and chaining patterns for understand, decide, execute, verify, and deliver; collapse steps when one skill owns them better.", descVi: "Dùng reference của owner và chaining pattern cho hiểu, quyết định, thực thi, kiểm chứng, bàn giao; gộp bước khi một skill làm tốt hơn." },
    { number: 6, titleEn: "Spawn deliberately", titleVi: "Spawn có chủ đích", descEn: "Use subagents only for fresh context, enforced boundaries, parallel work, specialist prompts, implementation testing, or high-risk review.", descVi: "Chỉ dùng subagent khi cần context mới, ranh giới bắt buộc, chạy song song, prompt chuyên môn, tester sau implement hoặc reviewer cho việc rủi ro cao." },
    { number: 7, titleEn: "Gate by risk", titleVi: "Chặn theo rủi ro", descEn: "Low risk uses executor checks; elevated risk adds verification; high risk requires verification, independent review, and confirmation before irreversible actions.", descVi: "Rủi ro thấp dùng check của executor; rủi ro vừa thêm xác minh; rủi ro cao cần xác minh, review độc lập và xác nhận trước hành động khó đảo ngược." },
    { number: 8, titleEn: "Report route", titleVi: "Báo tuyến đã chạy", descEn: "Finish with outcome, links run, agents used, verification performed, and any missing installed capability or remaining gap.", descVi: "Kết thúc bằng kết quả, các link đã chạy, agent đã dùng, xác minh đã làm và capability/gap còn thiếu nếu có." },
  ],
  corePrinciplesEn: [
    "The router decides and dispatches; routed skills and agents own execution.",
    "Routing overhead is a quality failure when one obvious skill can do the job.",
    "Never invent installed capabilities; inventory first, then route.",
    "Subagents should raise quality through specialization, fresh context, or parallelism, not fragment simple work.",
  ],
  corePrinciplesVi: [
    "Router chỉ quyết định và điều phối; skill và agent được route mới là nơi thực thi.",
    "Routing rườm rà là lỗi chất lượng khi một skill rõ ràng đã đủ làm việc.",
    "Không bịa capability đã cài; kiểm kê trước rồi mới route.",
    "Subagent phải nâng chất lượng bằng chuyên môn, context mới hoặc song song, không chia nhỏ việc đơn giản vô ích.",
  ],
  expertiseAreasEn: ["Skill routing", "Workflow chaining", "Subagent timing", "Risk-based quality gates", "Capability inventory"],
  expertiseAreasVi: ["Định tuyến skill", "Nối workflow", "Canh thời điểm subagent", "Quality gate theo rủi ro", "Kiểm kê capability"],
  promptExamples: [
    { labelEn: "Route a marketing launch", labelVi: "Route một launch marketing", command: "/ak:agentkit launch a campaign for the new feature", whenEn: "The request spans research, persona, campaign, content, and analytics.", whenVi: "Khi yêu cầu trải qua research, persona, campaign, content và analytics.", expectedEn: "A classified route with the shortest skill chain and justified agent trigger points.", expectedVi: "Nhận tuyến đã phân loại với chuỗi skill ngắn nhất và điểm kích hoạt agent có lý do.", recommended: true },
    { labelEn: "Ambiguous work", labelVi: "Việc còn mơ hồ", command: "/ak:agentkit improve conversion for our signup flow", whenEn: "It is unclear whether research, funnel, A/B testing, analytics, or implementation should lead.", whenVi: "Khi chưa rõ research, funnel, A/B testing, analytics hay implementation nên dẫn dắt.", expectedEn: "A proportional route that picks installed owners and names any capability gap.", expectedVi: "Một route vừa đủ, chọn đúng owner đã cài và nêu gap capability nếu có." },
  ],
};

export default data;
