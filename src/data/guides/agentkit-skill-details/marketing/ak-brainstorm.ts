import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-brainstorm",
  command: "/ak:brainstorm",
  kit: 'marketer',
  header: {
    titleEn: "Brainstorm",
    titleVi: "Brainstorm có ràng buộc",
    taglineEn: "Turn incomplete intent into a bounded delivery contract, inspect evidence, compare real options, choose the smallest sufficient direction, and hand off cleanly to plan, cook, or fix.",
    taglineVi: "Biến ý định chưa đủ rõ thành contract giao việc có ranh giới, kiểm tra bằng chứng, so sánh phương án thật, chọn hướng nhỏ nhất đủ dùng và handoff sạch sang plan, cook hoặc fix.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Evidence before feasibility claims",
    titleVi: "Có bằng chứng rồi mới nói khả thi",
    contentEn: "The skill says never to claim current behavior from intent alone. Inspect relevant repository or live state before saying an approach is feasible.",
    contentVi: "Skill cấm khẳng định hành vi hiện tại chỉ từ ý định. Phải kiểm tra repo hoặc trạng thái live liên quan trước khi nói một hướng là khả thi.",
  },
  processFlow: [
    { number: 1, titleEn: "Capture contract", titleVi: "Chốt contract", descEn: "For multi-step delivery, record outcome, constraints, non-goals, and acceptance criteria unless an accepted design already contains them.", descVi: "Với việc nhiều bước, ghi outcome, constraint, non-goal và acceptance criteria, trừ khi thiết kế đã được chấp nhận đã có đủ." },
    { number: 2, titleEn: "Stay proportional", titleVi: "Giữ vừa đủ", descEn: "For concrete requests, summarize briefly and continue; ask only when a missing answer materially changes outcome, safety, or public contract.", descVi: "Với yêu cầu rõ, tóm tắt ngắn rồi làm tiếp; chỉ hỏi khi thiếu câu trả lời sẽ đổi outcome, biên an toàn hoặc public contract." },
    { number: 3, titleEn: "Inspect evidence", titleVi: "Kiểm tra bằng chứng", descEn: "Read the smallest relevant source, docs, tests, plans, or live state before judging options or feasibility.", descVi: "Đọc phần nhỏ nhất có liên quan trong source, docs, test, plan hoặc trạng thái live trước khi đánh giá phương án hay độ khả thi." },
    { number: 4, titleEn: "Route bugs differently", titleVi: "Tách đường bug", descEn: "For bugs, frame the repaired behavior, scout the failing path, prove root cause, then compare cause-aligned fixes only if there are real choices.", descVi: "Với bug, định nghĩa hành vi sau sửa, scout đường lỗi, chứng minh root cause, rồi chỉ so sánh fix theo đúng nguyên nhân khi thật sự có lựa chọn." },
    { number: 5, titleEn: "Compare options", titleVi: "So sánh phương án", descEn: "When a design choice remains, present up to three viable approaches with trade-offs, main assumption, and first failure condition.", descVi: "Khi còn quyết định thiết kế, đưa tối đa ba hướng khả thi với trade-off, giả định chính và điều kiện thất bại đầu tiên." },
    { number: 6, titleEn: "Recommend small", titleVi: "Chọn hướng nhỏ", descEn: "Recommend the smallest approach that satisfies the contract; if an assumption cannot be resolved, prefer the option cheapest to abandon.", descVi: "Khuyến nghị hướng nhỏ nhất đáp ứng contract; nếu giả định chưa thể xác minh, ưu tiên phương án rẻ nhất để bỏ." },
    { number: 7, titleEn: "Handle modes", titleVi: "Xử lý mode", descEn: "Apply --html, --report, --advice, --ultra, or --yagni only when requested, preserving the core contract and downstream handoff.", descVi: "Chỉ áp dụng --html, --report, --advice, --ultra hoặc --yagni khi được yêu cầu, vẫn giữ contract lõi và handoff downstream." },
    { number: 8, titleEn: "Handoff owner", titleVi: "Bàn giao owner", descEn: "Pass contract fields, chosen direction, evidence, and unresolved risks to ak-plan, ak-cook, ak-fix, or stop with an exploration report.", descVi: "Bàn giao contract, hướng đã chọn, bằng chứng và rủi ro còn lại sang ak-plan, ak-cook, ak-fix, hoặc dừng với báo cáo exploration." },
    { number: 9, titleEn: "Report unresolved", titleVi: "Báo điều chưa rõ", descEn: "List unresolved questions last; write durable summaries only when decisions must survive the session or feed a plan.", descVi: "Đặt câu hỏi chưa giải quyết ở cuối; chỉ ghi summary bền vững khi quyết định cần sống qua session hoặc nuôi plan." },
  ],
  corePrinciplesEn: [
    "Brainstorming shapes intent and choices; it does not replace implementation, diagnosis, or verification.",
    "Clear requests should not be converted into ceremonial interviews.",
    "Options are useful only when they are grounded in inspected evidence and real trade-offs.",
    "KISS, DRY, and --yagni keep the accepted contract from absorbing nearby unrequested work.",
  ],
  corePrinciplesVi: [
    "Brainstorm định hình intent và lựa chọn; nó không thay thế triển khai, chẩn đoán hay xác minh.",
    "Yêu cầu đã rõ không nên bị biến thành phỏng vấn nghi thức.",
    "Phương án chỉ hữu ích khi dựa trên bằng chứng đã kiểm tra và trade-off thật.",
    "KISS, DRY và --yagni giữ contract đã chốt không nuốt thêm việc lân cận ngoài yêu cầu.",
  ],
  expertiseAreasEn: ["Outcome framing", "Constraints and non-goals", "Acceptance criteria", "Option comparison", "Bug diagnosis routing", "HTML or report briefs", "Verifier mode"],
  expertiseAreasVi: ["Đóng khung outcome", "Constraint và non-goal", "Acceptance criteria", "So sánh phương án", "Định tuyến chẩn đoán bug", "Brief HTML hoặc report", "Mode verifier"],
  promptExamples: [
    { labelEn: "Bound a launch", labelVi: "Đóng khung launch", command: "/ak:brainstorm launch campaign for the new feature", whenEn: "The work is multi-step and needs outcome, constraints, non-goals, and acceptance before execution.", whenVi: "Khi việc nhiều bước cần chốt outcome, constraint, non-goal và acceptance trước khi làm.", expectedEn: "A bounded delivery contract plus the smallest recommended route.", expectedVi: "Contract giao việc có ranh giới và route nhỏ nhất được khuyến nghị.", recommended: true },
    { labelEn: "Preview as HTML", labelVi: "Xem trước bằng HTML", command: "/ak:brainstorm landing page redesign --html", whenEn: "The decision should be previewed as a self-contained HTML brief before delivery.", whenVi: "Khi cần xem quyết định dưới dạng brief HTML tự chứa trước khi giao triển khai.", expectedEn: "A contract, compared approaches, recommendation, risks, and implementation diagram in HTML.", expectedVi: "HTML gồm contract, phương án so sánh, khuyến nghị, rủi ro và sơ đồ triển khai." },
    { labelEn: "Cut scope", labelVi: "Cắt scope", command: "/ak:brainstorm onboarding flow --yagni", whenEn: "The request may attract unnecessary abstractions or adjacent work.", whenVi: "Khi yêu cầu dễ kéo theo abstraction hoặc việc lân cận không cần thiết.", expectedEn: "A contract that challenges and removes scope not needed for the stated outcome.", expectedVi: "Contract chất vấn và loại bỏ scope không cần cho outcome đã nêu." },
  ],
  outputFlags: [
    { flag: "--advice", titleEn: "Advisory supervision", titleVi: "Giám sát tư vấn", descEn: "Run under kongming supervision at phase checkpoints, stuck points, high-stakes decisions, and downstream PR review handoff.", descVi: "Chạy dưới giám sát kongming ở checkpoint từng phase, khi bị kẹt, trước quyết định rủi ro cao và handoff review PR downstream." },
    { flag: "--html", titleEn: "HTML brief", titleVi: "Brief HTML", descEn: "Write a self-contained brainstorm.html with contract fields, options, recommendation, risks, and required implementation diagram.", descVi: "Ghi brainstorm.html tự chứa với contract, phương án, khuyến nghị, rủi ro và sơ đồ triển khai bắt buộc." },
    { flag: "--report", titleEn: "Markdown report", titleVi: "Báo cáo Markdown", descEn: "Persist a timestamped markdown report in the configured reports location with summary, contract, trade-offs, recommendation, and unresolved questions.", descVi: "Lưu báo cáo Markdown có timestamp vào nơi reports đã cấu hình, gồm summary, contract, trade-off, khuyến nghị và câu hỏi còn mở." },
    { flag: "--ultra", titleEn: "Best-of-5 verifier", titleVi: "Verifier best-of-5", descEn: "Dispatch five independent read-only candidate brainstorms, then let one verifier rank and select or reject the candidates.", descVi: "Gửi năm brainstorm candidate read-only độc lập, rồi để một verifier xếp hạng và chọn hoặc bác bỏ các candidate." },
    { flag: "--yagni", titleEn: "Scope cutter", titleVi: "Cắt scope theo YAGNI", descEn: "Challenge and remove scope not needed for the stated outcome, and pass the flag to downstream handoffs.", descVi: "Chất vấn và loại bỏ scope không cần cho outcome đã nêu, đồng thời truyền flag này qua các handoff downstream." },
    { flag: "--no-antv", titleEn: "Disable AntV visuals", titleVi: "Tắt visual AntV", descEn: "Disable the AntV infographic tile layer when HTML/editorial visual output would otherwise use it.", descVi: "Tắt lớp tile infographic AntV khi output HTML/editorial visual mặc định sẽ dùng nó." },
    { flag: "--no-diagram-design", titleEn: "Disable diagram-design", titleVi: "Tắt diagram-design", descEn: "Disable the diagram-design Quadrant vernacular for approach comparison visuals.", descVi: "Tắt phong cách diagram-design Quadrant cho visual so sánh phương án." },
    { flag: "--no-editorial-visuals", titleEn: "Disable editorial visuals", titleVi: "Tắt editorial visuals", descEn: "Disable the additive editorial visual layer for brainstorm HTML output.", descVi: "Tắt lớp editorial visual bổ sung cho output HTML của brainstorm." },
  ],
};

export default data;
