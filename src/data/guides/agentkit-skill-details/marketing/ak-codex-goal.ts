import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-codex-goal",
  command: "/ak:codex-goal",
  kit: 'marketer',
  header: {
    titleEn: "Codex durable goal contract",
    titleVi: "Hợp đồng mục tiêu bền cho Codex",
    taglineEn: "Shapes Codex /goal work into a clear objective with feature availability, validation checkpoints, boundaries, and a verifiable stop condition.",
    taglineVi: "Biến công việc Codex /goal thành mục tiêu rõ ràng có kiểm tra tính năng, checkpoint xác minh, ranh giới và điều kiện dừng đo được.",
  },
  hardGate: {
    type: "critical",
    titleEn: "Do not use /goal for vague or unsafe work",
    titleVi: "Không dùng /goal cho việc mơ hồ hoặc rủi ro",
    contentEn: "The skill says /goal is not a safety boundary, not a substitute for product decisions, and not a way to run an unbounded backlog. Use it only with a clear scope and verifiable stop condition.",
    contentVi: "Skill nêu rõ /goal không phải ranh giới an toàn, không thay quyết định sản phẩm và không dùng để chạy backlog vô hạn. Chỉ dùng khi phạm vi rõ và có điều kiện dừng kiểm chứng được.",
  },
  processFlow: [
    { number: 1, titleEn: "Check availability", titleVi: "Kiểm tra khả dụng", descEn: "Confirm /goal appears in Codex slash commands; if absent, enable goals in config or with codex features enable goals.", descVi: "Xác nhận /goal có trong danh sách slash command của Codex; nếu chưa có, bật goals trong config hoặc bằng codex features enable goals." },
    { number: 2, titleEn: "Apply use test", titleVi: "Kiểm tra có nên dùng", descEn: "Use /goal only for longer-than-one-turn, mainly mechanical work with a testable stop condition and clear scope.", descVi: "Chỉ dùng /goal cho việc dài hơn một lượt, chủ yếu cơ học, có điều kiện dừng kiểm thử được và phạm vi rõ." },
    { number: 3, titleEn: "Reject bad fit", titleVi: "Loại trường hợp không hợp", descEn: "Avoid exploratory work, vague improvements, production credential changes, destructive infrastructure, and unrelated backlogs.", descVi: "Tránh việc khám phá, yêu cầu cải thiện mơ hồ, đổi credential production, hạ tầng phá hủy và backlog không liên quan." },
    { number: 4, titleEn: "Draft objective", titleVi: "Soạn mục tiêu", descEn: "Write one objective with files to read first, fixed constraints, validation command, checkpoints, and stop condition.", descVi: "Viết một mục tiêu gồm file cần đọc trước, ràng buộc không đổi, lệnh xác minh, checkpoint và điều kiện dừng." },
    { number: 5, titleEn: "Protect tests", titleVi: "Bảo vệ test", descEn: "Explicitly prohibit weakening, narrowing, skipping, or deleting tests to satisfy the goal.", descVi: "Cấm rõ việc làm yếu, thu hẹp, bỏ qua hoặc xóa test để hoàn thành goal." },
    { number: 6, titleEn: "Run with checkpoints", titleVi: "Chạy theo checkpoint", descEn: "Ask Codex to validate after each checkpoint, keep a brief progress log, and pause for ambiguity.", descVi: "Yêu cầu Codex xác minh sau từng checkpoint, ghi log tiến độ ngắn và tạm dừng khi gặp mơ hồ." },
    { number: 7, titleEn: "Review final diff", titleVi: "Duyệt diff cuối", descEn: "Review the final diff before merging or accepting the autonomous run outcome.", descVi: "Duyệt diff cuối trước khi merge hoặc chấp nhận kết quả chạy tự động." },
  ],
  corePrinciplesEn: [
    "A goal needs one objective and a verifiable end state, not a wishlist.",
    "Codex can continue mechanical work, but it must pause for product or architecture decisions.",
    "Official /goal documentation is the source of truth; do not claim undocumented lifecycle behavior.",
  ],
  corePrinciplesVi: [
    "Goal cần một mục tiêu và trạng thái kết thúc kiểm chứng được, không phải wishlist.",
    "Codex có thể tiếp tục việc cơ học, nhưng phải dừng khi cần quyết định sản phẩm hoặc kiến trúc.",
    "Tài liệu /goal chính thức là nguồn chuẩn; không khẳng định hành vi lifecycle chưa được ghi." ,
  ],
  promptExamples: [
    { labelEn: "Draft a goal", labelVi: "Soạn goal", command: "/ak:codex-goal Complete the pricing page refactor with tests passing after each checkpoint", whenEn: "Use when an autonomous Codex run needs a bounded objective and validation loop.", whenVi: "Dùng khi một phiên Codex tự chạy cần mục tiêu có ranh giới và vòng xác minh.", expectedEn: "A /goal contract with read-first files, constraints, validation, checkpoints, and stop condition.", expectedVi: "Một hợp đồng /goal có file đọc trước, ràng buộc, xác minh, checkpoint và điều kiện dừng.", recommended: true },
    { labelEn: "Evaluate fit", labelVi: "Đánh giá độ phù hợp", command: "/ak:codex-goal migrate these mechanical lint fixes across the repo", whenEn: "Use to decide whether a proposed long-running task belongs in goal mode.", whenVi: "Dùng để quyết định một việc dài hơi có phù hợp với goal mode không.", expectedEn: "A fit assessment against mechanical scope, operational clarity, durable checkpoints, and verifiable stop conditions.", expectedVi: "Đánh giá độ phù hợp theo tính cơ học, độ rõ phạm vi và điều kiện dừng kiểm chứng được." },
    { labelEn: "Refine draft", labelVi: "Tinh chỉnh bản nháp", command: "/ak:codex-goal goal draft for adding missing tests to checkout flow", whenEn: "Use when the user already has a rough goal but needs a safer contract.", whenVi: "Dùng khi người dùng đã có bản nháp goal nhưng cần hợp đồng an toàn hơn.", expectedEn: "A tightened goal with explicit boundaries, required validation, and no test-weakening escape hatch.", expectedVi: "Goal được siết lại với ranh giới rõ và không có đường né bằng cách làm yếu test." },
  ],
  guardrails: [
    { thoughtEn: "Goal mode can just keep going until everything is better.", thoughtVi: "Goal mode có thể cứ chạy đến khi mọi thứ tốt hơn.", realityEn: "The skill requires a bounded objective and a stop condition.", realityVi: "Skill yêu cầu mục tiêu có ranh giới và điều kiện dừng.", accent: "red" },
    { thoughtEn: "Codex can decide ambiguous product tradeoffs.", thoughtVi: "Codex có thể tự quyết các đánh đổi sản phẩm mơ hồ.", realityEn: "Pause when progress needs human product or architecture input.", realityVi: "Phải tạm dừng khi cần đầu vào của người về sản phẩm hoặc kiến trúc.", accent: "amber" },
  ],
};

export default data;
