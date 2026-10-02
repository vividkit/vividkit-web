import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-mcp-builder',
  command: '/ak:mcp-builder',
  kit: 'engineer',
  header: {
    titleEn: '/ak:mcp-builder — High-signal MCP servers',
    titleVi: '/ak:mcp-builder — Xây MCP server có ích',
    taglineEn: 'Build, upgrade, test, and publish MCP servers that expose external services as tools, targeting the 2026-07-28 protocol with the TypeScript SDK v2 or Python mcp v2 (MCPServer).',
    taglineVi: 'Dựng, nâng cấp, test và publish MCP server đưa dịch vụ bên ngoài thành tool, nhắm protocol 2026-07-28 với TypeScript SDK v2 hoặc Python mcp v2 (MCPServer).',
  },
  hardGate: { type: 'warning', titleEn: 'Research, evaluation, and publishing reach external systems', titleVi: 'Research, evaluation và publish đều chạm tới hệ thống bên ngoài', contentEn: 'Get approval before using credentials, calling live or chargeable APIs, creating remote resources, running mutating tools, deploying a remote server, sending project data to an evaluation model, or publishing to a registry. Tool annotations never replace server-side authorization.', contentVi: 'Xin phép trước khi dùng credential, gọi API thật hoặc tính phí, tạo tài nguyên từ xa, chạy tool làm thay đổi dữ liệu, deploy server từ xa, gửi dữ liệu project cho model đánh giá, hoặc publish lên registry. Annotation của tool không bao giờ thay cho việc kiểm quyền phía server.' },
  processFlow: [
    { number: 1, titleEn: 'Start from the task', titleVi: 'Bắt đầu từ tác vụ', descEn: 'Define the user task and the first tool contract (inputs, output shape, side effects, auth) before choosing infrastructure.', descVi: 'Xác định tác vụ của người dùng và contract của tool đầu tiên (input, dạng output, tác dụng phụ, auth) trước khi chọn hạ tầng.' },
    { number: 2, titleEn: 'Inspect the stack', titleVi: 'Kiểm stack hiện có', descEn: 'Check the project language, SDK version, and transport. Upgrade a v1 SDK only when asked or when a required feature needs it; read the protocol reference for deprecated features (sampling, roots, logging, SSE).', descVi: 'Kiểm ngôn ngữ, phiên bản SDK và transport của project. Chỉ nâng SDK v1 khi được yêu cầu hoặc khi tính năng cần thiết bắt buộc; đọc tài liệu protocol khi gặp tính năng đã deprecated (sampling, roots, logging, SSE).' },
    { number: 3, titleEn: 'Pick the transport', titleVi: 'Chọn transport', descEn: 'Default to stdio for local single-user servers and Streamable HTTP for remote or multi-user servers. Never start a new server on the deprecated HTTP+SSE transport.', descVi: 'Mặc định dùng stdio cho server local một người dùng và Streamable HTTP cho server từ xa hoặc nhiều người dùng. Không bao giờ dựng server mới trên transport HTTP+SSE đã deprecated.' },
    { number: 4, titleEn: 'Build one complete tool', titleVi: 'Làm trọn một tool', descEn: 'Build one working path from validated input through authorized upstream calls to bounded, structured output: constrained input schema, outputSchema with structuredContent, accurate annotations, actionable isError results, timeouts, and pagination.', descVi: 'Làm một luồng chạy được từ input đã validate, qua lời gọi upstream có kiểm quyền, tới output có cấu trúc và giới hạn: input schema có ràng buộc, outputSchema kèm structuredContent, annotation chính xác, kết quả isError chỉ rõ cách xử lý, timeout và phân trang.' },
    { number: 5, titleEn: 'Authorize and confirm', titleVi: 'Kiểm quyền và xác nhận', descEn: 'Authorize every operation server-side. Confirm destructive actions through elicitation; for clients that cannot prompt, refuse until an explicit confirmation argument arrives. Keep credentials in environment variables or validated OAuth tokens and never pass client tokens upstream.', descVi: 'Kiểm quyền mọi thao tác phía server. Xác nhận thao tác phá huỷ qua elicitation; với client không hỏi được người dùng thì từ chối cho tới khi có tham số xác nhận rõ ràng. Giữ credential trong biến môi trường hoặc OAuth token đã validate và không bao giờ chuyển token của client lên upstream.' },
    { number: 6, titleEn: 'Verify with a real client', titleVi: 'Xác minh bằng client thật', descEn: 'Type- or import-check, then drive the server with MCP Inspector CLI or an SDK client: valid calls, invalid input, upstream failures, pagination, and for HTTP 401/403/Origin. Use bounded, harness-owned processes and stop those you started.', descVi: 'Kiểm type hoặc import, rồi chạy server bằng MCP Inspector CLI hoặc client SDK: lời gọi hợp lệ, input sai, lỗi upstream, phân trang, và với HTTP thì 401/403/Origin. Dùng tiến trình có giới hạn do harness quản lý và dừng những tiến trình đã khởi động.' },
    { number: 7, titleEn: 'Evaluate task quality', titleVi: 'Đánh giá chất lượng tác vụ', descEn: 'Write read-only evaluation questions and run scripts/evaluation.py; add tools only as the requested workflow needs them and rerun checks after each change.', descVi: 'Viết câu hỏi evaluation chỉ đọc và chạy scripts/evaluation.py; chỉ thêm tool khi workflow được yêu cầu cần tới và chạy lại check sau mỗi thay đổi.' },
    { number: 8, titleEn: 'Report, publish on request', titleVi: 'Báo cáo, publish khi được yêu cầu', descEn: 'Report working tools, observed client results, and missing or unverified capabilities; registration alone is not completion. Publish server.json to the MCP Registry only when the user asks.', descVi: 'Báo tool chạy được, kết quả quan sát từ client và năng lực còn thiếu hoặc chưa xác minh; đăng ký tool chưa phải là xong. Chỉ publish server.json lên MCP Registry khi người dùng yêu cầu.' },
  ],
  corePrinciplesEn: ['Define the task and first tool contract before infrastructure', 'Annotations are hints, not enforcement; authorize every operation server-side', 'One complete, verified tool beats many registered ones', 'Registration alone is not completion; report what a real client observed'],
  corePrinciplesVi: ['Chốt tác vụ và contract tool đầu tiên trước khi chọn hạ tầng', 'Annotation chỉ là gợi ý, không phải cơ chế bảo vệ; kiểm quyền mọi thao tác phía server', 'Một tool chạy trọn và đã xác minh tốt hơn nhiều tool chỉ đăng ký', 'Đăng ký tool chưa phải là xong; báo đúng những gì client thật quan sát được'],
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
  expertiseAreasEn: ['MCP spec 2026-07-28', 'TypeScript SDK v2 and Python mcp v2 servers', 'Tool design, schemas, and annotations', 'HTTP auth and OAuth', 'Inspector checks and evaluations', 'MCP Registry publishing'],
  expertiseAreasVi: ['MCP spec 2026-07-28', 'Server TypeScript SDK v2 và Python mcp v2', 'Thiết kế tool, schema và annotation', 'Auth HTTP và OAuth', 'Kiểm bằng Inspector và evaluation', 'Publish lên MCP Registry'],
  promptExamples: [
    { labelEn: 'Default API server', labelVi: 'Server API mặc định', command: '/ak:mcp-builder Linear issue triage API',
      commandVi: '/ak:mcp-builder API triage issue Linear', whenEn: 'Invoke when building an MCP server or tool surface for an external service.', whenVi: 'Dùng khi xây MCP server hoặc tool surface cho một dịch vụ bên ngoài.', expectedEn: 'Defines the triage task and first tool contract, builds one complete tool with structured output and annotations, drives it with MCP Inspector, then adds tools the workflow needs.', expectedVi: 'Chốt tác vụ triage và contract tool đầu tiên, làm trọn một tool có output cấu trúc và annotation, chạy thử bằng MCP Inspector, rồi thêm các tool mà workflow cần.', recommended: true },
    { labelEn: 'Python MCPServer', labelVi: 'Server Python MCPServer', command: '/ak:mcp-builder Python mcp v2 server for customer search over stdio',
      commandVi: '/ak:mcp-builder server Python mcp v2 tìm kiếm khách hàng qua stdio', whenEn: 'Use when the server should be built in Python with the mcp v2 SDK.', whenVi: 'Dùng khi server nên viết bằng Python với SDK mcp v2.', expectedEn: 'Uses the Python server reference with MCPServer, defines constrained inputs and an outputSchema, keeps credentials in environment variables, and verifies valid, invalid, and upstream-failure calls.', expectedVi: 'Dùng tài liệu server Python với MCPServer, định nghĩa input có ràng buộc và outputSchema, giữ credential trong biến môi trường, và kiểm các lời gọi hợp lệ, input sai và lỗi upstream.' },
    { labelEn: 'Remote TypeScript server', labelVi: 'Server TypeScript từ xa', command: '/ak:mcp-builder TypeScript server for billing admin workflows over Streamable HTTP with OAuth',
      commandVi: '/ak:mcp-builder server TypeScript cho quy trình quản trị billing qua Streamable HTTP có OAuth', whenEn: 'Use when the host project needs a multi-user remote server on @modelcontextprotocol/server v2.', whenVi: 'Dùng khi project cần server từ xa nhiều người dùng trên @modelcontextprotocol/server v2.', expectedEn: 'Builds on Streamable HTTP, validates OAuth tokens for this server, confirms destructive billing actions through elicitation, and tests 401, 403, and Origin handling.', expectedVi: 'Dựng trên Streamable HTTP, validate OAuth token dành cho server này, xác nhận thao tác billing phá huỷ qua elicitation, và test xử lý 401, 403 và Origin.' },
    { labelEn: 'Upgrade a v1 server', labelVi: 'Nâng cấp server v1', command: '/ak:mcp-builder migrate our v1 SSE server to the 2026-07-28 protocol',
      commandVi: '/ak:mcp-builder chuyển server SSE v1 của chúng tôi sang protocol 2026-07-28', whenEn: 'Use when an existing server relies on v1 SDKs or deprecated features such as SSE, sampling, roots, or logging.', whenVi: 'Dùng khi server đang có dựa vào SDK v1 hoặc tính năng deprecated như SSE, sampling, roots hay logging.', expectedEn: 'Reads the protocol migration reference, moves the transport off HTTP+SSE, upgrades the SDK, and reruns Inspector checks and evaluations to show the tools still behave the same.', expectedVi: 'Đọc tài liệu chuyển đổi protocol, bỏ transport HTTP+SSE, nâng SDK, và chạy lại kiểm tra bằng Inspector cùng evaluation để chứng minh tool vẫn hoạt động như cũ.' },
  ],
  skillStack: [
    { name: 'MCP spec 2026-07-28', type: 'tool' },
    { name: '@modelcontextprotocol/server v2', type: 'tool' },
    { name: 'Python mcp v2 (MCPServer)', type: 'tool' },
    { name: 'MCP Inspector', type: 'tool' },
    { name: 'scripts/evaluation.py', type: 'tool' },
    { name: 'MCP Registry', type: 'tool' },
  ],
  reportOutput: { titleEn: 'MCP Deliverables', titleVi: 'Sản phẩm MCP', patternEn: 'Server code + tool schemas + client results + evaluations', patternVi: 'Code server + schema tool + kết quả từ client + evaluation', descEn: 'Working tools, observed client results from Inspector or an SDK client, evaluation outcomes, and any missing or unverified capabilities; a registry entry only when publishing was requested.', descVi: 'Các tool chạy được, kết quả quan sát từ Inspector hoặc client SDK, kết quả evaluation và năng lực còn thiếu hoặc chưa xác minh; chỉ có mục trên registry khi được yêu cầu publish.' },
};

export default data;
