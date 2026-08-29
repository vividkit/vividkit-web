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
      'Before multi-step delivery or workspace mutation, capture outcome, constraints, non-goals, and acceptance criteria. Never claim current behavior from intent alone.',
    contentVi:
      'Trước việc giao nhiều bước hoặc thay đổi workspace, phải ghi kết quả cần đạt, ràng buộc, ngoài phạm vi và tiêu chí nghiệm thu. Không bao giờ khẳng định hành vi hiện tại chỉ từ ý định.',
  },
  processFlow: [
    { number: 1, titleEn: 'Detect need', titleVi: 'Xác định có cần không', descEn: 'Skip the design loop for direct answers or low-level read-only utilities; continue when delivery is multi-step or choices are material.', descVi: 'Bỏ vòng thiết kế cho câu trả lời trực tiếp hoặc tiện ích chỉ đọc nhỏ; tiếp tục khi việc giao nhiều bước hoặc lựa chọn thật sự quan trọng.' },
    { number: 2, titleEn: 'Capture contract', titleVi: 'Ghi hợp đồng', descEn: 'Collect the user-visible or operational outcome, safety/compatibility/time/technology constraints, non-goals, and observable acceptance criteria.', descVi: 'Thu thập kết quả người dùng thấy hoặc trạng thái vận hành, ràng buộc an toàn/tương thích/thời gian/công nghệ, ngoài phạm vi và tiêu chí nghiệm thu quan sát được.' },
    { number: 3, titleEn: 'Reuse settled design', titleVi: 'Tái dùng quyết định đã chốt', descEn: 'If an accepted plan or design already has the four fields, identify only material gaps instead of making the user repeat settled decisions.', descVi: 'Nếu plan hoặc thiết kế đã chấp nhận có đủ bốn trường, chỉ nêu khoảng trống quan trọng thay vì bắt người dùng nhắc lại quyết định đã chốt.' },
    { number: 4, titleEn: 'Diagnose bugs first', titleVi: 'Bug thì chẩn đoán trước', descEn: 'For failures, frame expected repaired behavior, scout the affected path, capture failing state, and prove root cause before brainstorming fixes.', descVi: 'Với lỗi, nêu hành vi kỳ vọng sau sửa, rà soát đường ảnh hưởng, ghi trạng thái lỗi và chứng minh nguyên nhân gốc trước khi brainstorm cách sửa.' },
    { number: 5, titleEn: 'Inspect evidence', titleVi: 'Kiểm tra bằng chứng', descEn: 'Read the smallest relevant source, docs, tests, live state, and current plans before claiming an approach is feasible.', descVi: 'Đọc phần source, tài liệu, test, trạng thái live và kế hoạch hiện có nhỏ nhất liên quan trước khi nói một hướng khả thi.' },
    { number: 6, titleEn: 'Compare options', titleVi: 'So sánh phương án', descEn: 'Present up to three viable approaches with trade-offs, load-bearing assumptions, failure conditions, and worst plausible cases.', descVi: 'Nêu tối đa ba phương án khả thi cùng đánh đổi, giả định trọng yếu, điều kiện thất bại và trường hợp xấu hợp lý.' },
    { number: 7, titleEn: 'Recommend smallest fit', titleVi: 'Khuyến nghị hướng nhỏ nhất đủ dùng', descEn: 'Choose the smallest approach that satisfies the contract, preferring easy-to-abandon paths when assumptions cannot be resolved now.', descVi: 'Chọn phương án nhỏ nhất đáp ứng hợp đồng, ưu tiên hướng dễ bỏ nếu giả định chưa thể xác minh ngay.' },
    { number: 8, titleEn: 'Handoff or report', titleVi: 'Bàn giao hoặc báo cáo', descEn: 'Pass contract, chosen direction, evidence, and risks to plan/cook/fix, or stop with a recommendation for exploration-only work.', descVi: 'Truyền hợp đồng, hướng chọn, bằng chứng và rủi ro sang plan/cook/fix, hoặc dừng với khuyến nghị nếu chỉ là khám phá.' },
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
  promptExamples: [
    { labelEn: 'Feature direction', labelVi: 'Hướng tính năng', command: '/ak:brainstorm "How should we redesign onboarding for teams?"', whenEn: 'Use when the desired outcome is clear enough to discuss but the approach is not settled.', whenVi: 'Dùng khi kết quả mong muốn đủ rõ để bàn nhưng cách làm chưa chốt.', expectedEn: 'Captures the contract, inspects evidence, compares options, recommends a direction, and hands off.', expectedVi: 'Ghi hợp đồng, kiểm tra bằng chứng, so sánh phương án, khuyến nghị hướng đi và bàn giao.', recommended: true },
    { labelEn: 'Durable report', labelVi: 'Báo cáo bền vững', command: '/ak:brainstorm "Pick an architecture for preview sharing" --report', whenEn: 'Use when the accepted brainstorm needs to survive the session or feed a plan.', whenVi: 'Dùng khi kết quả brainstorm đã chấp nhận cần tồn tại sau phiên hoặc cấp dữ liệu cho plan.', expectedEn: 'Writes the report to the configured plan-scoped or standalone reports directory.', expectedVi: 'Ghi báo cáo vào thư mục reports theo plan hoặc thư mục reports độc lập đã cấu hình.' },
    { labelEn: 'Visual brief', labelVi: 'Brief trực quan', command: '/ak:brainstorm "Landing page structure for the launch" --html', whenEn: 'Use when the user should preview a self-contained HTML brief before delivery starts.', whenVi: 'Dùng khi người dùng cần xem brief HTML độc lập trước khi bắt đầu giao việc.', expectedEn: 'Creates HTML with contract fields, compared approaches, recommendation, risks, and required diagrams or mockups when UI is involved.', expectedVi: 'Tạo HTML gồm hợp đồng, phương án so sánh, khuyến nghị, rủi ro và diagram/mockup bắt buộc khi có UI.' },
    { labelEn: 'Ultra brainstorm', labelVi: 'Brainstorm ultra', command: '/ak:brainstorm "Compare three data-sync approaches" --ultra --yagni', whenEn: 'Use when five independent candidate contracts and a verifier are worth the overhead.', whenVi: 'Dùng khi đáng tốn chi phí cho năm hợp đồng ứng viên độc lập và một bộ xác minh.', expectedEn: 'Builds one evidence packet, fans to five candidates, and emits the winning contract unchanged with ranking appendix.', expectedVi: 'Tạo một gói bằng chứng, tách sang năm ứng viên và xuất hợp đồng thắng nguyên vẹn kèm phụ lục xếp hạng.' },
  ],
  outputFlags: [
    { flag: '--html', titleEn: 'Self-contained HTML brief', titleVi: 'Brief HTML độc lập', descEn: 'Writes brainstorm.html with contract fields, trade-offs, recommendation, risks, diagrams, and UI mockups when applicable.', descVi: 'Ghi brainstorm.html với các trường hợp đồng, đánh đổi, khuyến nghị, rủi ro, diagram và mockup UI khi phù hợp.', exampleCommand: '/ak:brainstorm "Plan a dashboard refresh" --html' },
    { flag: '--report', titleEn: 'Markdown decision report', titleVi: 'Báo cáo quyết định Markdown', descEn: 'Persists the accepted brainstorm as a timestamped report in the configured reports location.', descVi: 'Lưu brainstorm đã chấp nhận thành báo cáo có timestamp tại nơi reports đã cấu hình.', exampleCommand: '/ak:brainstorm "Choose an API migration path" --report' },
  ],
  composableFlagsEn: '--advice adds kongming supervision at phase, stuck, and high-stakes checkpoints. --ultra composes with --html, --report, --advice, and --yagni. --no-antv, --no-diagram-design, and --no-editorial-visuals only affect HTML visual treatment.',
  composableFlagsVi: '--advice thêm giám sát kongming ở checkpoint theo pha, khi kẹt và khi rủi ro cao. --ultra đi cùng được với --html, --report, --advice và --yagni. --no-antv, --no-diagram-design và --no-editorial-visuals chỉ ảnh hưởng lớp hình ảnh của HTML.',
};

export default data;
