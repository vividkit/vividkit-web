import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:ask [technical-question] [--yagni]',
  arguments: [
    {
      token: '[technical-question]',
      titleEn: 'Technical question',
      titleVi: 'Câu hỏi kỹ thuật',
      descEn:
        'Architecture or technology question to answer, including the decision, constraints, alternatives, and evidence to ground the consultation.',
      descVi:
        'Câu hỏi kiến trúc hoặc công nghệ cần trả lời, gồm quyết định, ràng buộc, phương án và bằng chứng để làm nền cho phần tư vấn.',
      required: true,
      exampleCommand:
        '/ak:ask "Should this service publish domain events directly, or write an outbox record first?"',
    },
  ],
  options: [
    {
      token: '--yagni',
      titleEn: 'Cut unneeded scope',
      titleVi: 'Cắt scope thừa',
      descEn:
        'Challenge and remove scope that is not needed for the stated outcome. Does not remove work required to answer the question.',
      descVi:
        'Chất vấn và bỏ phần phạm vi không cần cho outcome đã nêu. Không bỏ phần cần thiết để trả lời câu hỏi.',
      exampleCommand: '/ak:ask "Do we need event sourcing for audit trails?" --yagni',
    },
  ],
};

const data: SkillInfographic = {
  id: 'ak-ask',
  command: '/ak:ask',
  kit: 'engineer',
  header: {
    titleEn: '/ak:ask — Architecture consultation before code',
    titleVi: '/ak:ask — Tư vấn kiến trúc trước khi sửa mã',
    taglineEn:
      'Answers technical and architectural questions by gathering context, consulting systems, technology, scalability, and risk perspectives, then synthesizing concise strategic guidance without implementing.',
    taglineVi:
      'Trả lời câu hỏi kỹ thuật và kiến trúc bằng cách thu thập bối cảnh, xem từ góc hệ thống, công nghệ, khả năng mở rộng và rủi ro, rồi tổng hợp hướng dẫn chiến lược ngắn gọn mà không triển khai.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Analysis only — no implementation',
    titleVi: 'Chỉ phân tích — không triển khai',
    contentEn:
      'This command provides architectural consultation and strategic guidance. Do not start implementing changes inside the ask workflow.',
    contentVi:
      'Lệnh này chỉ tư vấn kiến trúc và định hướng chiến lược. Không bắt đầu sửa đổi trong workflow ask.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read the question', titleVi: 'Đọc câu hỏi', descEn: 'Identify the design decision, trade-off, or best-practice evaluation the user actually needs answered.', descVi: 'Xác định quyết định thiết kế, đánh đổi hoặc đánh giá best practice mà người dùng thật sự cần trả lời.' },
    { number: 2, titleEn: 'Discover context', titleVi: 'Tìm bối cảnh', descEn: 'Read repository instruction surfaces, README, and relevant docs; verify documentation claims against source, tests, config, or runtime evidence where applicable.', descVi: 'Đọc hướng dẫn repo, README và tài liệu liên quan; kiểm chứng nhận định trong tài liệu bằng source, test, cấu hình hoặc bằng chứng runtime khi cần.' },
    { number: 3, titleEn: 'Scout if needed', titleVi: 'Scout nếu thiếu dữ kiện', descEn: 'If architecture context is insufficient, use ak:scout to gather codebase facts instead of advising from assumptions.', descVi: 'Nếu bối cảnh kiến trúc chưa đủ, dùng ak:scout để lấy dữ kiện codebase thay vì tư vấn từ giả định.' },
    { number: 4, titleEn: 'Consult four lenses', titleVi: 'Soi qua bốn góc', descEn: 'Evaluate system boundaries, technology choices, scalability/reliability, and risks with mitigation and failure conditions.', descVi: 'Đánh giá ranh giới hệ thống, lựa chọn công nghệ, khả năng mở rộng/độ tin cậy và rủi ro kèm cách giảm thiểu và điều kiện thất bại.' },
    { number: 5, titleEn: 'Synthesize guidance', titleVi: 'Tổng hợp hướng dẫn', descEn: 'Combine the lenses into direct architecture analysis, recommendations, technology guidance, implementation strategy, and next actions.', descVi: 'Gộp các góc nhìn thành phân tích kiến trúc trực diện, khuyến nghị, hướng dẫn công nghệ, chiến lược triển khai và bước tiếp theo.' },
    { number: 6, titleEn: 'Stay concise', titleVi: 'Giữ ngắn gọn', descEn: 'Be honest, blunt, and to the point; include alternatives and validation points, but do not drift into coding.', descVi: 'Trung thực, thẳng và đúng trọng tâm; có phương án thay thế và điểm kiểm chứng, nhưng không trượt sang viết mã.' },
  ],
  corePrinciplesEn: [
    'Answer before changing code; this is consultation, not execution.',
    'Context is project-specific, so do not assume every repo has the same docs or architecture files.',
    'Deliver the requested scope fully; only --yagni allows cutting unnecessary scope.',
    'Every recommendation should name trade-offs, risks, and the condition where it stops holding.',
  ],
  corePrinciplesVi: [
    'Trả lời trước khi sửa mã; đây là tư vấn, không phải thực thi.',
    'Bối cảnh phụ thuộc dự án, nên không giả định repo nào cũng có cùng bộ tài liệu hoặc file kiến trúc.',
    'Trả lời đủ phạm vi được yêu cầu; chỉ --yagni cho phép cắt phần không cần thiết.',
    'Mỗi khuyến nghị cần nêu đánh đổi, rủi ro và điều kiện khiến nó không còn đúng.',
  ],
  expertiseAreasEn: ['System boundaries', 'Technology strategy', 'Scalability and reliability', 'Risk analysis', 'Decision trade-offs'],
  expertiseAreasVi: ['Ranh giới hệ thống', 'Chiến lược công nghệ', 'Mở rộng và độ tin cậy', 'Phân tích rủi ro', 'Đánh đổi quyết định'],
  invocation,
  promptExamples: [
    { labelEn: 'Architecture decision', labelVi: 'Quyết định kiến trúc', command: '/ak:ask "Should this service stay REST or move to gRPC for internal calls?"', whenEn: 'Use when you need a strategic answer before planning or coding.', whenVi: 'Dùng khi cần câu trả lời chiến lược trước khi lập kế hoạch hoặc viết mã.', expectedEn: 'Gathers context, compares boundaries and trade-offs, and returns direct guidance.', expectedVi: 'Thu thập bối cảnh, so sánh ranh giới và đánh đổi, rồi trả hướng dẫn trực diện.', recommended: true },
    { labelEn: 'YAGNI architecture challenge', labelVi: 'Phản biện kiến trúc bằng YAGNI', command: '/ak:ask "Do we need event sourcing for audit trails?" --yagni', whenEn: 'Use when you want unnecessary scope challenged and cut from the recommendation.', whenVi: 'Dùng khi muốn khuyến nghị phản biện và cắt phạm vi không cần thiết.', expectedEn: 'Evaluates the full question, then cuts only what is not needed for the stated outcome.', expectedVi: 'Đánh giá đủ câu hỏi, rồi chỉ cắt phần không cần cho kết quả đã nêu.' },
    { labelEn: 'Best-practice review', labelVi: 'Đánh giá best practice', command: '/ak:ask "What auth boundary should our admin dashboard use?"', whenEn: 'Use for implementation strategy, proof-of-concept criteria, and validation points without edits.', whenVi: 'Dùng để có chiến lược triển khai, tiêu chí thử nghiệm và điểm kiểm chứng mà không sửa file.', expectedEn: 'Returns recommendations, alternatives, risks, and next actions rather than a code patch.', expectedVi: 'Trả khuyến nghị, phương án khác, rủi ro và bước tiếp theo thay vì patch mã.' },
  ],
  skillStack: [
    { name: 'ak:scout', type: 'skill' },
  ],
};

export default data;
