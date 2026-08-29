import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-ask",
  command: "/ak:ask",
  kit: 'marketer',
  header: {
    titleEn: "Technical Consultation",
    titleVi: "Tư vấn kỹ thuật",
    taglineEn: "Answer technical and architectural questions with evidence-grounded senior analysis before changing code, comparing design options, risks, scalability, and implementation strategy.",
    taglineVi: "Trả lời câu hỏi kỹ thuật và kiến trúc bằng phân tích senior có bằng chứng trước khi sửa code, so sánh hướng thiết kế, rủi ro, khả năng scale và chiến lược triển khai.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Analysis only",
    titleVi: "Chỉ phân tích",
    contentEn: "The SKILL.md is explicit: this command provides architectural consultation and strategic guidance; do not start implementing anything.",
    contentVi: "SKILL.md nói rõ: lệnh này chỉ tư vấn kiến trúc và chiến lược; không bắt đầu triển khai bất cứ thứ gì.",
  },
  processFlow: [
    { number: 1, titleEn: "Understand question", titleVi: "Hiểu câu hỏi", descEn: "Parse the technical or architectural challenge from arguments and identify what decision the answer must support.", descVi: "Đọc vấn đề kỹ thuật hoặc kiến trúc từ tham số và xác định quyết định mà câu trả lời cần hỗ trợ." },
    { number: 2, titleEn: "Discover context", titleVi: "Tìm ngữ cảnh", descEn: "Read repository instructions, root README, and relevant workflow, architecture, product, operations, source, test, config, and runtime evidence.", descVi: "Đọc instruction repo, README gốc và bằng chứng liên quan trong workflow, kiến trúc, product, vận hành, source, test, config và runtime." },
    { number: 3, titleEn: "Verify claims", titleVi: "Xác minh nhận định", descEn: "Check documentation claims against current source and evidence; if the architecture context is missing, scout the codebase again.", descVi: "Đối chiếu nhận định trong docs với source và bằng chứng hiện tại; nếu thiếu ngữ cảnh kiến trúc thì scout codebase lại." },
    { number: 4, titleEn: "Systems lens", titleVi: "Góc nhìn hệ thống", descEn: "Evaluate boundaries, interfaces, data flow, ownership, component interactions, and where complexity should or should not live.", descVi: "Đánh giá ranh giới, interface, luồng dữ liệu, ownership, tương tác component và nơi complexity nên hoặc không nên nằm." },
    { number: 5, titleEn: "Technology lens", titleVi: "Góc nhìn công nghệ", descEn: "Compare technology choices, frameworks, architecture patterns, trade-offs, and fit with existing project conventions.", descVi: "So sánh lựa chọn công nghệ, framework, pattern kiến trúc, trade-off và mức khớp với convention hiện có của project." },
    { number: 6, titleEn: "Scale and risk lens", titleVi: "Góc nhìn scale và rủi ro", descEn: "Assess performance, reliability, growth, dependencies, failure modes, and conditions where the recommendation stops holding.", descVi: "Đánh giá performance, reliability, tăng trưởng, dependency, failure mode và điều kiện khiến khuyến nghị không còn đúng." },
    { number: 7, titleEn: "Synthesize advice", titleVi: "Tổng hợp tư vấn", descEn: "Combine advisor views into architecture analysis, design recommendations, technology guidance, and a phased implementation strategy.", descVi: "Kết hợp các góc nhìn thành phân tích kiến trúc, khuyến nghị thiết kế, hướng công nghệ và chiến lược triển khai theo giai đoạn." },
    { number: 8, titleEn: "Validate strategy", titleVi: "Kiểm tra chiến lược", descEn: "Ensure the answer aligns with business goals, technical constraints, KISS, DRY, and --yagni scope-cutting when requested.", descVi: "Đảm bảo câu trả lời khớp mục tiêu kinh doanh, ràng buộc kỹ thuật, KISS, DRY và cắt scope theo --yagni khi được yêu cầu." },
  ],
  corePrinciplesEn: [
    "Answer with expert consultation before changing code.",
    "Ground advice in current repository evidence instead of generic architecture memory.",
    "State trade-offs, risks, alternatives, and the conditions under which the recommendation fails.",
    "With --yagni, actively challenge and remove scope not needed for the stated outcome.",
  ],
  corePrinciplesVi: [
    "Tư vấn như chuyên gia trước khi động vào code.",
    "Neo lời khuyên vào bằng chứng hiện tại của repo thay vì kiến thức kiến trúc chung chung.",
    "Nêu trade-off, rủi ro, phương án thay thế và điều kiện khiến khuyến nghị thất bại.",
    "Với --yagni, chủ động chất vấn và cắt scope không cần cho kết quả đã nêu.",
  ],
  expertiseAreasEn: ["Architecture analysis", "Design recommendations", "Technology guidance", "Scalability review", "Risk analysis", "Implementation strategy"],
  expertiseAreasVi: ["Phân tích kiến trúc", "Khuyến nghị thiết kế", "Định hướng công nghệ", "Review khả năng scale", "Phân tích rủi ro", "Chiến lược triển khai"],
  promptExamples: [
    { labelEn: "Architecture decision", labelVi: "Quyết định kiến trúc", command: "/ak:ask Should we move checkout state server-side?", whenEn: "You need evidence-backed advice before implementation.", whenVi: "Khi cần tư vấn có bằng chứng trước khi triển khai.", expectedEn: "Architecture analysis, options, trade-offs, risks, and implementation strategy without code changes.", expectedVi: "Phân tích kiến trúc, phương án, trade-off, rủi ro và chiến lược triển khai mà không sửa code.", recommended: true },
    { labelEn: "YAGNI review", labelVi: "Review theo YAGNI", command: "/ak:ask Do we need a plugin system for this feature? --yagni", whenEn: "A proposed design may be bigger than the stated outcome requires.", whenVi: "Khi thiết kế đề xuất có thể lớn hơn nhu cầu thật của outcome.", expectedEn: "A scope-cutting recommendation that challenges unnecessary abstractions.", expectedVi: "Khuyến nghị cắt scope, chất vấn abstraction không cần thiết." },
  ],
};

export default data;
