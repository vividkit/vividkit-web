import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-mcp-builder',
  command: '/ak:mcp-builder',
  kit: 'engineer',
  header: {
    titleEn: '/ak:mcp-builder',
    titleVi: '/ak:mcp-builder',
    taglineEn: 'Design and build high-signal MCP servers around real agent workflows, not thin endpoint wrappers.',
    taglineVi: 'Thiết kế và xây MCP server có ích cho workflow thật của agent, không chỉ bọc API endpoint một cách máy móc.',
  },
  hardGate: { type: 'warning', titleEn: 'STDIO SERVER TESTING WARNING', titleVi: 'CẢNH BÁO KHI TEST SERVER STDIO', contentEn: 'MCP servers are long-running processes. Do not run python server.py or node dist/index.js directly in the main process without a harness or timeout; use the evaluation harness, tmux, or a bounded timeout.', contentVi: 'MCP server là tiến trình chạy lâu. Không chạy trực tiếp python server.py hoặc node dist/index.js trong tiến trình chính nếu không có harness hoặc timeout; hãy dùng evaluation harness, tmux hoặc timeout có giới hạn.' },
  processFlow: [
    { number: 1, titleEn: 'Research workflow', titleVi: 'Nghiên cứu workflow', descEn: 'Understand the service, the agent tasks it should enable, auth, rate limits, pagination, models, and error shapes.', descVi: 'Hiểu dịch vụ, các việc agent cần làm, xác thực, rate limit, phân trang, mô hình dữ liệu và dạng lỗi.' },
    { number: 2, titleEn: 'Read MCP sources', titleVi: 'Đọc nguồn MCP', descEn: 'Load the current MCP protocol, best-practices reference, and the Python or TypeScript SDK guide for the chosen stack.', descVi: 'Đọc MCP protocol hiện tại, best practices và guide SDK Python hoặc TypeScript theo stack đã chọn.' },
    { number: 3, titleEn: 'Plan tools', titleVi: 'Lập kế hoạch tool', descEn: 'Select workflow-level tools that complete real tasks, consolidate related operations, and respect limited context.', descVi: 'Chọn tool ở cấp workflow để hoàn thành việc thật, gom các thao tác liên quan và tiết kiệm context.' },
    { number: 4, titleEn: 'Design contracts', titleVi: 'Thiết kế hợp đồng', descEn: 'Define validation schemas, response formats, concise/detail modes, truncation limits, and actionable error messages.', descVi: 'Định nghĩa schema validate, format trả về, chế độ ngắn/chi tiết, giới hạn cắt bớt và thông báo lỗi có hướng xử lý.' },
    { number: 5, titleEn: 'Build infrastructure', titleVi: 'Xây nền tảng', descEn: 'Implement API helpers, auth/token handling, pagination utilities, formatting helpers, and shared error handling first.', descVi: 'Làm trước helper gọi API, xử lý auth/token, phân trang, format kết quả và xử lý lỗi dùng chung.' },
    { number: 6, titleEn: 'Implement tools', titleVi: 'Cài đặt tool', descEn: 'Register each MCP tool with strict input models, full descriptions, async I/O, limits, and proper tool annotations.', descVi: 'Đăng ký từng MCP tool với model input chặt, mô tả đầy đủ, I/O async, giới hạn rõ và annotation phù hợp.' },
    { number: 7, titleEn: 'Review quality', titleVi: 'Review chất lượng', descEn: 'Check DRY, composability, consistency, type safety, docs, error handling, and language-specific checklist items.', descVi: 'Kiểm tra DRY, khả năng tái dùng, tính nhất quán, type safety, tài liệu, xử lý lỗi và checklist riêng theo ngôn ngữ.' },
    { number: 8, titleEn: 'Evaluate usefulness', titleVi: 'Đánh giá độ hữu dụng', descEn: 'Create realistic read-only evaluation questions, solve them, and verify the server helps an LLM answer stable tasks.', descVi: 'Tạo câu hỏi đánh giá read-only sát thực tế, tự giải và xác minh server giúp LLM trả lời được các tác vụ ổn định.' },
  ],
  corePrinciplesEn: ['Build workflow tools, not endpoint wrappers', 'Optimize every response for scarce agent context', 'Errors must teach the next action', 'Evaluate with realistic tasks before calling the server useful'],
  corePrinciplesVi: ['Xây tool theo workflow, không chỉ bọc endpoint', 'Tối ưu từng phản hồi vì context của agent có hạn', 'Lỗi phải chỉ rõ bước xử lý tiếp theo', 'Phải đánh giá bằng tác vụ thực tế trước khi xem server là hữu dụng'],
  expertiseAreasEn: ['FastMCP Python servers', 'TypeScript MCP SDK servers', 'Agent-centric tool design', 'Schema validation and annotations', 'Evaluation-driven server refinement'],
  expertiseAreasVi: ['Server FastMCP bằng Python', 'Server MCP SDK bằng TypeScript', 'Thiết kế tool xoay quanh agent', 'Schema validation và annotation', 'Cải thiện server bằng evaluation'],
  promptExamples: [
    { labelEn: 'API integration', labelVi: 'Tích hợp API', command: '/ak:mcp-builder Linear issue triage API', whenEn: 'You need an MCP surface for an external SaaS or internal service.', whenVi: 'Khi cần MCP surface cho SaaS bên ngoài hoặc dịch vụ nội bộ.', expectedEn: 'Research-backed MCP server plan and implementation path.', expectedVi: 'Kế hoạch và hướng triển khai MCP server dựa trên nghiên cứu.', recommended: true },
    { labelEn: 'Python server', labelVi: 'Server Python', command: '/ak:mcp-builder FastMCP server for customer search', whenEn: 'Use when the repo or team prefers Python and Pydantic validation.', whenVi: 'Dùng khi repo hoặc team ưu tiên Python và Pydantic.', expectedEn: 'FastMCP-oriented tool design, helpers, schemas, and tests/evaluations.', expectedVi: 'Thiết kế tool theo FastMCP, helper, schema và phần test/evaluation.' },
    { labelEn: 'TypeScript server', labelVi: 'Server TypeScript', command: '/ak:mcp-builder TypeScript MCP server for billing admin workflows', whenEn: 'Use when strict TypeScript and Zod fit the host project.', whenVi: 'Dùng khi project phù hợp với TypeScript strict và Zod.', expectedEn: 'Node/TypeScript MCP server structure with strict schemas and build checks.', expectedVi: 'Cấu trúc MCP server Node/TypeScript với schema chặt và kiểm tra build.' },
  ],
  skillStack: [
    { name: 'MCP Protocol', type: 'tool' },
    { name: 'FastMCP', type: 'tool' },
    { name: 'TypeScript MCP SDK', type: 'tool' },
    { name: 'Pydantic', type: 'tool' },
    { name: 'Zod', type: 'tool' },
  ],
  reportOutput: { titleEn: 'MCP Deliverables', titleVi: 'Sản phẩm MCP', patternEn: 'Server code + tool schemas + evaluations', patternVi: 'Code server + schema tool + evaluation', descEn: 'A task-oriented MCP server with concise responses, strict inputs, actionable errors, safe long-running test strategy, and realistic evaluation questions.', descVi: 'MCP server theo tác vụ, phản hồi gọn, input chặt, lỗi có hướng xử lý, cách test tiến trình dài an toàn và bộ câu hỏi đánh giá thực tế.' },
};

export default data;
