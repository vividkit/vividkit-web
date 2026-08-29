import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-fable-thinking",
  command: "/ak:fable-thinking",
  kit: "engineer",
  header: {
    titleEn: "/ak:fable-thinking — Evidence-grounded reasoning",
    titleVi: "/ak:fable-thinking — Suy luận dựa trên bằng chứng",
    taglineEn: "Evidence-grounded reasoning protocol for hard diagnosis, review, decisions, constrained writing, and calibrated outcome-first delivery.",
    taglineVi: "Giao thức suy luận dựa trên bằng chứng cho chẩn đoán khó, review, quyết định, viết có ràng buộc và bàn giao đúng mức tự tin.",
  },
  hardGate: {
    type: "critical",
    titleEn: "FLOOR NEVER SKIPPED",
    titleVi: "KHÔNG BAO GIỜ BỎ FLOOR",
    contentEn: "Run Goal, Follow-through, and Leftovers before every answer. Surface constraints require the Constraint Loop with mechanical verification; re-reading is not verification.",
    contentVi: "Luôn chạy Goal, Follow-through và Leftovers trước mọi câu trả lời. Ràng buộc bề mặt phải dùng Constraint Loop có kiểm tra cơ học; đọc lại không phải xác minh.",
  },
  processFlow: [
    { number: 1, titleEn: "Run the Floor", titleVi: "Chạy Floor", descEn: "State the real end-state goal, simulate the answer through to verification, and account for every request detail.", descVi: "Nêu trạng thái đích thật, mô phỏng câu trả lời đến điểm được xác minh và dùng hết mọi chi tiết trong yêu cầu." },
    { number: 2, titleEn: "Set Depth", titleVi: "Chọn độ sâu", descEn: "Use proportionality: Direct for trivial reversible tasks, Standard for normal work, Full for high-stakes or contested outcomes.", descVi: "Dùng proportionality: Direct cho việc nhỏ dễ đảo, Standard cho việc thường, Full cho việc rủi ro cao hoặc còn tranh cãi." },
    { number: 3, titleEn: "Constraint Loop", titleVi: "Vòng ràng buộc", descEn: "For exact counts, banned letters, acrostics, strict formats, or other surface constraints, expand, draft, mechanically verify, repair, and re-verify.", descVi: "Với số lượng chính xác, ký tự cấm, acrostic, format chặt hoặc ràng buộc bề mặt khác, phải mở rộng, nháp, kiểm tra cơ học, sửa và kiểm lại." },
    { number: 4, titleEn: "Frame", titleVi: "Đóng khung", descEn: "Restate the ask, separate literal request from underlying goal, mark scope boundaries, and pick load-bearing facts.", descVi: "Diễn đạt lại yêu cầu, tách lời yêu cầu khỏi mục tiêu thật, vạch ranh giới phạm vi và chọn facts chịu lực." },
    { number: 5, titleEn: "Ground", titleVi: "Neo vào bằng chứng", descEn: "Sort claims as observed, derived, prior, or assumed; verify load-bearing facts with tools or primary sources.", descVi: "Phân loại claim là observed, derived, prior hoặc assumed; xác minh facts chịu lực bằng tool hoặc nguồn chính." },
    { number: 6, titleEn: "Reason", titleVi: "Suy luận", descEn: "Hold multiple hypotheses, choose discriminating tests, demand mechanisms, simulate concrete values, and scan negative space.", descVi: "Giữ nhiều giả thuyết, chọn test phân biệt, đòi cơ chế, mô phỏng giá trị cụ thể và nhìn phần còn thiếu." },
    { number: 7, titleEn: "Attack", titleVi: "Phản biện", descEn: "Try to kill the conclusion, run cheap kill-tests, audit confidence, and name the weakest link.", descVi: "Cố bác bỏ kết luận, chạy kill-test rẻ, kiểm lại độ tự tin và chỉ ra mắt xích yếu nhất." },
    { number: 8, titleEn: "Deliver Calibrated", titleVi: "Bàn giao đúng mức", descEn: "Lead with outcome, match grammar to evidence level, report partials plainly, and close with unresolved risks if any.", descVi: "Mở đầu bằng kết quả, dùng ngữ pháp đúng cấp bằng chứng, báo phần chưa trọn rõ ràng và chốt bằng rủi ro còn lại nếu có." },
  ],
  corePrinciplesEn: [
    "Familiarity is retrieval, not verification.",
    "A fluent explanation is not evidence.",
    "User goals are absolute; user diagnoses are testimony to verify.",
    "Surface-form constraints are solved by mechanical checks, not by rereading.",
    "Confidence rises only when evidence improves.",
  ],
  corePrinciplesVi: [
    "Cảm giác quen thuộc là truy hồi, không phải xác minh.",
    "Một lời giải thích trôi chảy không phải bằng chứng.",
    "Mục tiêu người dùng là tuyệt đối; chẩn đoán của họ là lời chứng cần kiểm tra.",
    "Ràng buộc bề mặt phải giải bằng kiểm tra cơ học, không phải đọc lại.",
    "Độ tự tin chỉ tăng khi bằng chứng tốt hơn.",
  ],
  expertiseAreasEn: [
    "Multi-hypothesis debugging and root-cause analysis",
    "Architecture, strategy, and contested technical decisions",
    "Evidence-backed code review and security-style reasoning",
    "Strict-format and constrained-writing verification",
    "Calibrated delivery with claim discipline",
  ],
  expertiseAreasVi: [
    "Debug nhiều giả thuyết và phân tích nguyên nhân gốc",
    "Quyết định kiến trúc, chiến lược và kỹ thuật còn tranh cãi",
    "Review code và suy luận kiểu bảo mật dựa trên bằng chứng",
    "Xác minh format chặt và bài viết có ràng buộc",
    "Bàn giao đúng mức tự tin với kỷ luật claim",
  ],
  workflowModes: [
    { flag: "Direct", modeEn: "Low risk", modeVi: "Rủi ro thấp", research: "Floor + Claim Discipline", redTeam: "Check leftovers", validation: "Answer directly", cookFlag: "trivial/reversible" },
    { flag: "Standard", modeEn: "Normal work", modeVi: "Việc thông thường", research: "All five moves internally", redTeam: "Attack pass", validation: "Evidence-grounded deliverable", cookFlag: "bugfix/review/analysis" },
    { flag: "Full", modeEn: "High stakes", modeVi: "Rủi ro cao", research: "Written five moves", redTeam: "Mandatory Attack", validation: "Weakest link stated", cookFlag: "irreversible/contested" },
  ],
  guardrails: [
    { thoughtEn: "This looks like a standard case.", thoughtVi: "Việc này giống case quen thuộc.", realityEn: "Template hijack is most likely when the surface looks familiar. Run the Floor first.", realityVi: "Template hijack dễ xảy ra nhất khi bề mặt có vẻ quen. Chạy Floor trước.", accent: "amber" },
    { thoughtEn: "The wording satisfies the constraint.", thoughtVi: "Câu chữ có vẻ đúng ràng buộc.", realityEn: "Surface constraints require enumeration or tooling. Re-reading is the failure mode.", realityVi: "Ràng buộc bề mặt cần đếm hoặc dùng tool. Đọc lại chính là lỗi.", accent: "red" },
    { thoughtEn: "I have one strong hypothesis.", thoughtVi: "Tôi có một giả thuyết rất mạnh.", realityEn: "One hypothesis is pattern matching. Add a competing mechanism and pick a discriminating test.", realityVi: "Một giả thuyết là pattern matching. Thêm cơ chế cạnh tranh và chọn test phân biệt.", accent: "violet" },
  ],
  skillStack: [
    { name: "ak:problem-solving", type: "skill" },
    { name: "ak:sequential-thinking", type: "skill" },
    { name: "tools / primary sources", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "Root cause reasoning", labelVi: "Suy luận nguyên nhân gốc", command: "/ak:fable-thinking diagnose why this flaky test passes locally but fails in CI", whenEn: "The issue is familiar-looking but root cause is not proven.", whenVi: "Vấn đề trông quen nhưng nguyên nhân gốc chưa được chứng minh.", expectedEn: "Frames the goal, grounds evidence, tests competing hypotheses, attacks the conclusion, and delivers calibrated findings.", expectedVi: "Đóng khung mục tiêu, neo bằng chứng, kiểm thử giả thuyết cạnh tranh, phản biện kết luận và bàn giao nhận định đúng mức.", recommended: true },
    { labelEn: "Constrained output", labelVi: "Output có ràng buộc", command: "/ak:fable-thinking write a product tagline with exactly seven words", whenEn: "The hard part is satisfying a mechanically checkable surface constraint.", whenVi: "Phần khó là thỏa ràng buộc bề mặt có thể kiểm cơ học.", expectedEn: "Runs the Constraint Loop and verifies the exact delivered text before finalizing.", expectedVi: "Chạy Constraint Loop và xác minh chính xác text sẽ bàn giao trước khi chốt." },
    { labelEn: "Decision review", labelVi: "Review quyết định", command: "/ak:fable-thinking decide whether to rewrite or patch this subsystem", whenEn: "A decision has architecture, risk, or long-term maintenance impact.", whenVi: "Quyết định có ảnh hưởng kiến trúc, rủi ro hoặc bảo trì dài hạn.", expectedEn: "Uses Full or Standard depth, states evidence levels, and names the weakest link.", expectedVi: "Dùng độ sâu Full hoặc Standard, nêu cấp bằng chứng và chỉ ra mắt xích yếu nhất." },
  ],
};

export default data;
