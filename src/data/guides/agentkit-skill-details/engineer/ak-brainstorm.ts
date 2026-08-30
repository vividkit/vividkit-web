import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-brainstorm',
  command: '/ak:brainstorm',
  kit: 'engineer',
  header: {
    titleEn: '/ak:brainstorm — Bounded outcome and option design',
    titleVi: '/ak:brainstorm — Chốt kết quả và thiết kế phương án có giới hạn',
    taglineEn:
      'Turns unclear intent or meaningful solution choices into an accepted delivery contract: outcome, constraints, non-goals, acceptance criteria, evidence-backed options, recommendation, and handoff to plan, cook, or fix.',
    taglineVi:
      'Biến ý định chưa rõ hoặc lựa chọn giải pháp có ý nghĩa thành hợp đồng giao việc đã chấp nhận: kết quả, ràng buộc, ngoài phạm vi, tiêu chí nghiệm thu, phương án dựa trên bằng chứng, khuyến nghị và bàn giao sang plan, cook hoặc fix.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Contract first for delivery',
    titleVi: 'Việc giao sản phẩm phải có hợp đồng trước',
    contentEn:
      'Before multi-step delivery or workspace mutation, reuse or capture outcome, constraints, non-goals, and acceptance criteria. Never claim current behavior from intent alone.',
    contentVi:
      'Trước delivery nhiều bước hoặc thay đổi workspace, phải tái dùng hoặc ghi outcome, constraint, non-goal và acceptance criteria. Không bao giờ khẳng định hành vi hiện tại chỉ từ ý định.',
  },
  processFlow: [
    { number: 1, titleEn: 'Decide if the gate applies', titleVi: 'Xác định gate có áp dụng không', descEn: 'Direct answers and low-level read-only utilities skip the design loop; multi-step delivery or workspace mutation must satisfy the opening contract gate.', descVi: 'Câu trả lời trực tiếp và tiện ích chỉ đọc nhỏ bỏ qua vòng thiết kế; delivery nhiều bước hoặc thay đổi workspace phải đạt gate contract mở đầu.' },
    { number: 2, titleEn: 'Reuse or capture contract', titleVi: 'Tái dùng hoặc ghi contract', descEn: 'Reuse an accepted design or plan when it already has outcome, constraints, non-goals, and acceptance criteria; otherwise capture those four fields.', descVi: 'Tái dùng thiết kế hoặc plan đã duyệt khi đã có outcome, constraint, non-goal và acceptance criteria; nếu chưa có thì ghi bốn trường đó.' },
    { number: 3, titleEn: 'Stay proportional', titleVi: 'Giữ mức độ vừa đủ', descEn: 'For concrete requests, summarize and continue; ask only when a missing answer materially changes the result, safety boundary, or public contract and cannot be discovered.', descVi: 'Với yêu cầu cụ thể, tóm tắt rồi tiếp tục; chỉ hỏi khi câu trả lời còn thiếu làm thay đổi đáng kể kết quả, ranh giới an toàn hoặc public contract và không thể tự tìm.' },
    { number: 4, titleEn: 'Route bugs through diagnosis', titleVi: 'Đưa bug qua chẩn đoán', descEn: 'For failures, frame expected repaired behavior, scout the affected path, capture failing state, and prove root cause before comparing cause-aligned repairs.', descVi: 'Với lỗi, nêu hành vi kỳ vọng sau sửa, rà soát đường ảnh hưởng, ghi trạng thái lỗi và chứng minh root cause trước khi so sánh cách sửa bám theo nguyên nhân.' },
    { number: 5, titleEn: 'Inspect relevant evidence', titleVi: 'Kiểm tra bằng chứng liên quan', descEn: 'Read the smallest useful source, docs, tests, current plans, or live state before claiming an approach is feasible; separate discoverable unknowns from true uncertainty.', descVi: 'Đọc tập source, tài liệu, test, plan hiện có hoặc trạng thái live nhỏ nhất cần thiết trước khi nói một hướng khả thi; tách ẩn số có thể tự tìm khỏi bất định thật.' },
    { number: 6, titleEn: 'Compare material choices', titleVi: 'So sánh lựa chọn quan trọng', descEn: 'Present up to three viable approaches with meaningful trade-offs, evidence gaps, load-bearing assumptions, first failure conditions, and worst plausible cases.', descVi: 'Nêu tối đa ba phương án khả thi cùng đánh đổi có ý nghĩa, khoảng trống bằng chứng, giả định trọng yếu, điều kiện thất bại đầu tiên và trường hợp xấu hợp lý.' },
    { number: 7, titleEn: 'Recommend and resolve', titleVi: 'Khuyến nghị và xử lý bất đồng', descEn: 'Choose the smallest approach that satisfies the contract; when assumptions cannot be resolved now, prefer the path that is cheapest to abandon and resolve material disagreement before implementation.', descVi: 'Chọn hướng nhỏ nhất đáp ứng contract; khi chưa xử lý được giả định, ưu tiên hướng rẻ nhất để từ bỏ và giải quyết bất đồng quan trọng trước implementation.' },
    { number: 8, titleEn: 'Handoff or stop', titleVi: 'Bàn giao hoặc dừng', descEn: 'Pass contract, chosen direction, evidence, and unresolved risks to plan, cook, or fix; for exploration-only work, report the recommendation and stop.', descVi: 'Chuyển contract, hướng chọn, bằng chứng và rủi ro chưa xử lý sang plan, cook hoặc fix; với việc chỉ khám phá, báo recommendation rồi dừng.' },
  ],
  corePrinciplesEn: [
    'Brainstorm shapes intent and options; it does not implement the solution.',
    'Do not turn a clear request into a ceremonial interview; proportional behavior matters.',
    'Challenge assumptions with evidence, not vibes.',
    'Full requested scope remains default; --yagni is required to cut unnecessary scope.',
  ],
  corePrinciplesVi: [
    'Brainstorm định hình ý định và phương án; nó không triển khai giải pháp.',
    'Đừng biến yêu cầu đã rõ thành buổi phỏng vấn hình thức; mức độ vừa đủ rất quan trọng.',
    'Phản biện giả định bằng bằng chứng, không bằng cảm giác.',
    'Mặc định giữ đủ phạm vi được yêu cầu; cần --yagni để cắt phần không cần thiết.',
  ],
  invocation: {
    syntax: '/ak:brainstorm [topic or problem] [--advice] [--html] [--report] [--ultra] [--yagni] [--no-antv|--no-diagram-design|--no-editorial-visuals]',
    arguments: [
      { token: '[topic or problem]', titleEn: 'Decision to shape', titleVi: 'Quyết định cần định hình', descEn: 'Natural-language request, problem, bug choice, or product/code/docs maintenance direction to turn into a bounded contract and recommendation.', descVi: 'Yêu cầu, vấn đề, lựa chọn sửa bug hoặc hướng product/code/docs maintenance bằng ngôn ngữ tự nhiên để chuyển thành contract có giới hạn và recommendation.', exampleCommand: '/ak:brainstorm "Choose how to add offline draft recovery to the editor. Preserve current storage formats, avoid a new service, and define observable recovery behavior."' },
    ],
    options: [
      { token: '--advice', titleEn: 'Advisory checkpoints', titleVi: 'Checkpoint cố vấn', descEn: 'Adds kongming counsel after decisions, when blocked, and before high-risk choices. Counsel cannot edit, approve, or widen authority.', descVi: 'Thêm tư vấn kongming sau quyết định, khi bị chặn và trước lựa chọn rủi ro cao. Cố vấn không thể sửa, phê duyệt hoặc mở rộng quyền hạn.', exampleCommand: '/ak:brainstorm "Choose an auth migration direction" --advice' },
      { token: '--ultra', titleEn: 'Best-of-5 verifier', titleVi: 'Verifier best-of-5', descEn: 'Runs five independent read-only brainstorm drafts against the same evidence and rubric. A verifier selects one unchanged or rejects all; it does not blend candidates.', descVi: 'Chạy năm bản brainstorm chỉ đọc độc lập trên cùng bằng chứng và tiêu chí chấm. Verifier chọn một bản nguyên vẹn hoặc loại tất cả; không trộn các candidate.', exampleCommand: '/ak:brainstorm "Compare three data-sync approaches" --ultra' },
      { token: '--yagni', titleEn: 'Cut unneeded scope', titleVi: 'Cắt scope thừa', descEn: 'Challenges and removes work not needed for the stated outcome. Without this flag, the skill preserves the full requested scope and rejects only unrequested additions.', descVi: 'Chất vấn và bỏ phần việc không cần cho outcome đã nêu. Nếu không có flag này, skill giữ đủ phạm vi đã yêu cầu và chỉ loại phần thêm ngoài yêu cầu.', exampleCommand: '/ak:brainstorm "Simplify the onboarding redesign" --yagni' },
      { token: '--no-antv', titleEn: 'No AntV visuals', titleVi: 'Không visual AntV', descEn: 'Disables optional AntV KPI/card visuals for the HTML brief. It does not change the delivery contract.', descVi: 'Tắt visual KPI/card AntV tùy chọn trong brief HTML. Không thay đổi delivery contract.', exampleCommand: '/ak:brainstorm "Plan a dashboard refresh" --html --no-antv' },
      { token: '--no-diagram-design', titleEn: 'No comparison diagram layer', titleVi: 'Không lớp diagram so sánh', descEn: 'Disables optional diagram-design comparison visuals for the HTML brief. It does not remove the required delivery-flow diagram or change the contract.', descVi: 'Tắt visual so sánh diagram-design tùy chọn trong brief HTML. Không bỏ delivery-flow diagram bắt buộc và không đổi contract.', exampleCommand: '/ak:brainstorm "Compare onboarding flows" --html --no-diagram-design' },
      { token: '--no-editorial-visuals', titleEn: 'No editorial visuals', titleVi: 'Không visual biên tập', descEn: 'Disables all optional editorial visual layers for the HTML brief. Required content and the delivery contract remain unchanged.', descVi: 'Tắt toàn bộ lớp visual biên tập tùy chọn trong brief HTML. Nội dung bắt buộc và delivery contract không đổi.', exampleCommand: '/ak:brainstorm "Choose a launch page structure" --html --no-editorial-visuals' },
    ],
  },
  promptExamples: [
    { labelEn: 'Feature direction', labelVi: 'Hướng tính năng', command: '/ak:brainstorm "Choose how to add offline draft recovery to the editor. Preserve current storage formats, avoid a new service, and define observable recovery behavior."', whenEn: 'Use at the opening of multi-step delivery when the desired outcome is clear enough to discuss but the approach is not settled.', whenVi: 'Dùng ở đầu delivery nhiều bước khi kết quả mong muốn đủ rõ để bàn nhưng cách làm chưa chốt.', expectedEn: 'Frames the four-field delivery contract, inspects relevant evidence before feasibility claims, compares up to three material approaches, recommends the smallest fitting direction, and hands off to plan, cook, or fix.', expectedVi: 'Định hình delivery contract bốn trường, kiểm tra bằng chứng liên quan trước khi khẳng định khả thi, so sánh tối đa ba hướng quan trọng, đề xuất hướng nhỏ nhất phù hợp và bàn giao sang plan, cook hoặc fix.', recommended: true },
    { labelEn: 'Durable report', labelVi: 'Báo cáo bền vững', command: '/ak:brainstorm "Pick an architecture for preview sharing" --report', whenEn: 'Use when the accepted brainstorm needs a timestamped Markdown decision record in the configured plan or standalone reports location.', whenVi: 'Dùng khi brainstorm đã chấp nhận cần một decision record Markdown có timestamp trong vị trí reports của plan hoặc reports độc lập đã cấu hình.', expectedEn: 'Persists a Markdown report with frontmatter, summary, the four contract fields, compared options, recommendation, unresolved questions last, and the active-plan or standalone reports path convention.', expectedVi: 'Lưu báo cáo Markdown có frontmatter, summary, bốn trường contract, các option đã so sánh, recommendation, câu hỏi chưa giải quyết ở cuối và đúng quy ước thư mục reports của plan đang active hoặc reports độc lập.' },
    { labelEn: 'Self-contained HTML brief', labelVi: 'Brief HTML độc lập', command: '/ak:brainstorm "Landing page structure for the launch" --html', whenEn: 'Use when the brainstorm should produce a local previewable brief alongside the delivery contract, especially for UI or UX decisions.', whenVi: 'Dùng khi brainstorm cần tạo brief cục bộ có thể preview bên cạnh delivery contract, nhất là với quyết định UI hoặc UX.', expectedEn: 'Writes brainstorm.html in the configured report location with inline CSS/JS, no network-required assets, the contract and option comparison, a required delivery-flow diagram, and annotated UI mockups when the topic touches UI/UX.', expectedVi: 'Ghi brainstorm.html vào vị trí report đã cấu hình với CSS/JS inline, không cần asset mạng, contract và so sánh option, diagram delivery-flow bắt buộc và mockup UI có chú thích khi chủ đề liên quan UI/UX.' },
    { labelEn: 'Ultra verifier pass', labelVi: 'Lượt verifier ultra', command: '/ak:brainstorm "Compare three data-sync approaches" --ultra --yagni', whenEn: 'Use when a high-stakes delivery direction justifies five independent read-only candidate brainstorms and a verifier ranking pass.', whenVi: 'Dùng khi hướng delivery rủi ro cao đáng tốn chi phí cho năm candidate brainstorm chỉ đọc độc lập và một lượt verifier xếp hạng.', expectedEn: 'Builds one immutable evidence packet and rubric, dispatches exactly five read-only candidates, has a verifier select one winning contract unchanged or reject all, records a short ranking appendix, and applies --yagni scope cuts.', expectedVi: 'Tạo một evidence packet và rubric bất biến, dispatch đúng năm candidate chỉ đọc, để verifier chọn một contract thắng nguyên vẹn hoặc reject tất cả, ghi phụ lục xếp hạng ngắn và áp dụng cắt scope theo --yagni.' },
  ],
  outputFlags: [
    { flag: '--html', titleEn: 'Self-contained HTML brief', titleVi: 'Brief HTML độc lập', descEn: 'Writes brainstorm.html in the configured report location with contract fields, trade-offs, recommendation, risks, at least one delivery-flow diagram, and annotated UI mockups when the topic touches UI/UX.', descVi: 'Ghi brainstorm.html vào vị trí report đã cấu hình với các trường contract, đánh đổi, khuyến nghị, rủi ro, ít nhất một diagram delivery-flow và mockup UI có chú thích khi chủ đề liên quan UI/UX.', exampleCommand: '/ak:brainstorm "Plan a dashboard refresh" --html' },
    { flag: '--report', titleEn: 'Markdown decision report', titleVi: 'Báo cáo quyết định Markdown', descEn: 'Persists the accepted brainstorm as a timestamped Markdown report in the active plan reports directory, standalone plans/reports, or injected Report path.', descVi: 'Lưu brainstorm đã chấp nhận thành báo cáo Markdown có timestamp trong thư mục reports của plan đang active, plans/reports độc lập hoặc đường dẫn Report được inject.', exampleCommand: '/ak:brainstorm "Choose an API migration path" --report' },
  ],
  composableFlagsEn: '--advice adds kongming supervision at phase, stuck, and high-stakes checkpoints. --ultra composes with --html, --report, --advice, and --yagni. --no-antv, --no-diagram-design, and --no-editorial-visuals only affect HTML visual treatment.',
  composableFlagsVi: '--advice thêm giám sát kongming ở checkpoint theo pha, khi kẹt và khi rủi ro cao. --ultra đi cùng được với --html, --report, --advice và --yagni. --no-antv, --no-diagram-design và --no-editorial-visuals chỉ ảnh hưởng lớp hình ảnh của HTML.',
};

export default data;
