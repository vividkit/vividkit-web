import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-mcp-builder',
  command: '/ak:mcp-builder',
  kit: 'engineer',
  header: {
    titleEn: '/ak:mcp-builder — High-signal MCP servers',
    titleVi: '/ak:mcp-builder — Xây MCP server có ích',
    taglineEn: 'Design and build high-signal MCP servers around real agent workflows, not thin endpoint wrappers.',
    taglineVi: 'Thiết kế và xây MCP server có ích cho workflow thật của agent, không chỉ bọc API endpoint một cách máy móc.',
  },
  hardGate: { type: 'warning', titleEn: 'STDIO SERVER TESTING WARNING', titleVi: 'CẢNH BÁO KHI TEST SERVER STDIO', contentEn: 'MCP servers are long-running processes. Do not run python server.py or node dist/index.js directly in the main process without a harness or timeout; use the evaluation harness, tmux, or a bounded timeout.', contentVi: 'MCP server là tiến trình chạy lâu. Không chạy trực tiếp python server.py hoặc node dist/index.js trong tiến trình chính nếu không có harness hoặc timeout; hãy dùng evaluation harness, tmux hoặc timeout có giới hạn.' },
  processFlow: [
    { number: 1, titleEn: 'Study agent design', titleVi: 'Nghiên cứu thiết kế agent', descEn: 'Start from workflow-first tools, limited context, actionable errors, natural task grouping, and evaluation-driven iteration.', descVi: 'Bắt đầu từ tool theo workflow, context giới hạn, lỗi có hướng xử lý, nhóm tác vụ tự nhiên và cải thiện bằng evaluation.' },
    { number: 2, titleEn: 'Load MCP references', titleVi: 'Đọc tài liệu MCP', descEn: 'Fetch the current MCP protocol, best-practices reference, and the Python or TypeScript SDK material for the chosen stack.', descVi: 'Tải MCP protocol hiện tại, best-practices reference và tài liệu SDK Python hoặc TypeScript cho stack đã chọn.' },
    { number: 3, titleEn: 'Study the API', titleVi: 'Nghiên cứu API', descEn: 'Read the service documentation for auth, rate limits, pagination, error shapes, endpoints, parameters, and data models.', descVi: 'Đọc tài liệu dịch vụ về auth, rate limit, phân trang, dạng lỗi, endpoint, tham số và mô hình dữ liệu.' },
    { number: 4, titleEn: 'Plan tools and contracts', titleVi: 'Lập kế hoạch tool và hợp đồng', descEn: 'Choose high-value workflow operations, shared helpers, validation schemas, response formats, truncation limits, and error handling.', descVi: 'Chọn thao tác workflow có giá trị, helper dùng chung, schema validate, format phản hồi, giới hạn cắt bớt và xử lý lỗi.' },
    { number: 5, titleEn: 'Set up the server', titleVi: 'Dựng cấu trúc server', descEn: 'Create the Python/FastMCP or Node/TypeScript project shape with Pydantic or Zod validation and SDK registration patterns.', descVi: 'Tạo cấu trúc Python/FastMCP hoặc Node/TypeScript với validation Pydantic hoặc Zod và mẫu đăng ký SDK.' },
    { number: 6, titleEn: 'Implement shared infrastructure', titleVi: 'Cài đặt nền tảng dùng chung', descEn: 'Build API request helpers, auth/token handling, pagination utilities, response formatting, and reusable external-call errors first.', descVi: 'Làm trước helper gọi API, xử lý auth/token, phân trang, format phản hồi và lỗi gọi dịch vụ bên ngoài dùng lại được.' },
    { number: 7, titleEn: 'Register and review tools', titleVi: 'Đăng ký và review tool', descEn: 'Add each tool with strict inputs, descriptions, async I/O, annotations, language checklist review, and safe build/syntax checks.', descVi: 'Thêm từng tool với input chặt, mô tả, I/O async, annotation, review checklist theo ngôn ngữ và kiểm tra build/cú pháp an toàn.' },
    { number: 8, titleEn: 'Create evaluations', titleVi: 'Tạo evaluation', descEn: 'Load the evaluation guide, inspect tools, explore read-only data, create 10 realistic verified questions, and output XML.', descVi: 'Đọc evaluation guide, kiểm tra tool, khám phá dữ liệu read-only, tạo 10 câu hỏi thực tế đã xác minh và xuất XML.' },
  ],
  corePrinciplesEn: ['Build workflow tools, not endpoint wrappers', 'Optimize every response for scarce agent context', 'Errors must teach the next action', 'Evaluate with realistic tasks before calling the server useful'],
  corePrinciplesVi: ['Xây tool theo workflow, không chỉ bọc endpoint', 'Tối ưu từng phản hồi vì context của agent có hạn', 'Lỗi phải chỉ rõ bước xử lý tiếp theo', 'Phải đánh giá bằng tác vụ thực tế trước khi xem server là hữu dụng'],
  invocation: {
    syntax: '/ak:mcp-builder [service or API to integrate]',
    arguments: [
      {
        token: '[service or API to integrate]',
        titleEn: 'Target integration',
        titleVi: 'Integration đích',
        descEn: 'External service or API to turn into a new MCP server or expanded tool/resource surface. Include intended workflows, language, transport, auth model, permissions, rate limits, data volume, and allowed external effects when known.',
        descVi: 'Dịch vụ hoặc API bên ngoài cần biến thành MCP server mới hoặc mở rộng bề mặt tool/resource. Nêu workflow dự kiến, ngôn ngữ, transport, auth, quyền, rate limit, khối lượng dữ liệu và tác động ngoài được phép nếu đã biết.',
        required: true,
        exampleCommand: '/ak:mcp-builder "Build a TypeScript MCP server for the Acme tickets API with read-only search first, cursor pagination, and stdio transport"',
          exampleCommandVi: '/ak:mcp-builder "Build một TypeScript MCP server cho Acme tickets API với search chỉ-đọc trước, cursor pagination, và stdio transport"',
      },
    ],
  },
  expertiseAreasEn: ['FastMCP Python servers', 'TypeScript MCP SDK servers', 'Agent-centric tool design', 'Schema validation and annotations', 'Evaluation-driven server refinement'],
  expertiseAreasVi: ['Server FastMCP bằng Python', 'Server MCP SDK bằng TypeScript', 'Thiết kế tool xoay quanh agent', 'Schema validation và annotation', 'Cải thiện server bằng evaluation'],
  promptExamples: [
    { labelEn: 'Default API server', labelVi: 'Server API mặc định', command: '/ak:mcp-builder Linear issue triage API',
      commandVi: '/ak:mcp-builder API triage issue Linear', whenEn: 'Invoke when building an MCP server or tool surface for an external service.', whenVi: 'Dùng khi xây MCP server hoặc tool surface cho một dịch vụ bên ngoài.', expectedEn: 'Researches MCP references and Linear API docs, plans workflow-level tools, implements shared helpers and schemas, then creates verified evaluation questions.', expectedVi: 'Nghiên cứu tài liệu MCP và API Linear, lập kế hoạch tool cấp workflow, cài helper/schema dùng chung, rồi tạo câu hỏi evaluation đã xác minh.', recommended: true },
    { labelEn: 'Python FastMCP server', labelVi: 'Server Python FastMCP', command: '/ak:mcp-builder FastMCP server for customer search',
      commandVi: '/ak:mcp-builder máy chủ FastMCP cho tìm kiếm khách hàng', whenEn: 'Use when the MCP surface should be built in Python with Pydantic validation.', whenVi: 'Dùng khi MCP surface nên được xây bằng Python với validation Pydantic.', expectedEn: 'Loads Python MCP guidance, sets up FastMCP registration, defines Pydantic inputs, implements async API helpers, and verifies usefulness with read-only evaluations.', expectedVi: 'Đọc hướng dẫn MCP Python, dựng đăng ký FastMCP, định nghĩa input Pydantic, cài helper API async và xác minh độ hữu dụng bằng evaluation read-only.' },
    { labelEn: 'TypeScript MCP server', labelVi: 'Server MCP TypeScript', command: '/ak:mcp-builder TypeScript MCP server for billing admin workflows',
      commandVi: '/ak:mcp-builder máy chủ MCP TypeScript cho quy trình quản trị billing', whenEn: 'Use when the host project needs a Node/TypeScript MCP SDK server.', whenVi: 'Dùng khi project cần server MCP SDK bằng Node/TypeScript.', expectedEn: 'Loads TypeScript SDK guidance, configures project structure and strict Zod schemas, registers tools with annotations, runs build checks, and prepares XML evaluations.', expectedVi: 'Đọc hướng dẫn TypeScript SDK, cấu hình cấu trúc project và schema Zod chặt, đăng ký tool kèm annotation, chạy kiểm tra build và chuẩn bị evaluation XML.' },
    { labelEn: 'Evaluation-focused build', labelVi: 'Xây tập trung evaluation', command: '/ak:mcp-builder MCP server for read-only knowledge base questions',
      commandVi: '/ak:mcp-builder máy chủ MCP cho câu hỏi knowledge base chỉ đọc', whenEn: 'Use when tool usefulness must be proven against stable, realistic agent questions.', whenVi: 'Dùng khi cần chứng minh độ hữu dụng của tool bằng câu hỏi agent thực tế, ổn định.', expectedEn: 'Designs read-only workflows, inspects the implemented tools, explores available content, writes 10 independent verifiable questions, and emits the required XML format.', expectedVi: 'Thiết kế workflow read-only, kiểm tra tool đã cài, khám phá nội dung có sẵn, viết 10 câu hỏi độc lập kiểm chứng được và xuất đúng định dạng XML.' },
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
