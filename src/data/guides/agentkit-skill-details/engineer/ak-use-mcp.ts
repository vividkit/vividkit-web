import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-use-mcp',
  command: '/ak:use-mcp',
  kit: 'engineer',
  header: {
    titleEn: '/ak:use-mcp — Run existing MCP tools',
    titleVi: '/ak:use-mcp — Chạy tool MCP đã có',
    taglineEn: 'Discover and execute existing MCP server tools through the narrowest runtime-native path or deterministic direct scripts, without copying credentials across runtimes.',
    taglineVi: 'Tìm và chạy các tool MCP đã có bằng đường runtime-native hẹp nhất hoặc script trực tiếp có thể lặp lại, không sao chép credential sang runtime khác.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Credential and runtime boundary',
    titleVi: 'Ranh giới credential và runtime',
    contentEn: 'Use tools actually visible in the active runtime first. Direct scripts may read .claude/.mcp.json, but never silently copy credentials into another runtime and never copy that file into Pi config.',
    contentVi: 'Ưu tiên tool thật sự đang hiện trong runtime hiện tại. Script trực tiếp có thể đọc .claude/.mcp.json, nhưng không được âm thầm chép credential sang runtime khác và tuyệt đối không chép file đó vào cấu hình Pi.',
  },
  processFlow: [
    { number: 1, titleEn: 'Classify path', titleVi: 'Chọn đường chạy', descEn: 'Decide whether the active Claude Code, Codex, or Pi session already exposes the needed MCP server/tool.', descVi: 'Xác định session Claude Code, Codex hoặc Pi hiện tại đã có server/tool MCP cần dùng hay chưa.' },
    { number: 2, titleEn: 'Inspect native tools', titleVi: 'Xem tool có sẵn', descEn: 'List or search the runtime-visible MCP resources, prompts, and tools before assuming anything is unavailable.', descVi: 'Liệt kê hoặc tìm trong resources, prompts và tools MCP đang hiện ở runtime trước khi kết luận là không có.' },
    { number: 3, titleEn: 'Pick the minimum', titleVi: 'Chọn tool nhỏ nhất', descEn: 'Select the smallest registered tool that directly satisfies the task and matches the user requested mutation scope.', descVi: 'Chọn tool đã đăng ký nhỏ nhất giải quyết đúng việc và khớp phạm vi thay đổi người dùng yêu cầu.' },
    { number: 4, titleEn: 'Validate args', titleVi: 'Kiểm tham số', descEn: 'Read the actual schema, fill only required arguments, and avoid invented names shared by other runtimes.', descVi: 'Đọc schema thật, điền đúng tham số cần thiết, và không tự bịa tên tool theo runtime khác.' },
    { number: 5, titleEn: 'Call safely', titleVi: 'Gọi an toàn', descEn: 'Execute the runtime-native tool when present; keep side effects inside the requested target.', descVi: 'Chạy tool runtime-native khi có; giữ mọi tác động phụ trong đúng mục tiêu đã được yêu cầu.' },
    { number: 6, titleEn: 'Fallback script', titleVi: 'Dự phòng bằng script', descEn: 'If the server only exists in .claude/.mcp.json, install the scripts package and use cli.ts list-tools/list-prompts/list-resources/call-tool.', descVi: 'Nếu server chỉ có trong .claude/.mcp.json, cài gói scripts rồi dùng cli.ts list-tools/list-prompts/list-resources/call-tool.' },
    { number: 7, titleEn: 'Persist catalog', titleVi: 'Lưu catalog', descEn: 'Use list-tools to regenerate assets/tools.json and review it before unknown tool or argument calls.', descVi: 'Dùng list-tools để tạo lại assets/tools.json và xem catalog đó trước khi gọi tool hoặc tham số chưa rõ.' },
    { number: 8, titleEn: 'Report boundary', titleVi: 'Báo ranh giới', descEn: 'State which MCP path was used and whether any visibility/profile limitation affected the result.', descVi: 'Nói rõ đã dùng đường MCP nào và có giới hạn visibility/profile nào ảnh hưởng kết quả hay không.' },
  ],
  corePrinciplesEn: [
    'Prefer runtime-native MCP when the active session already exposes the server.',
    'Use direct scripts for deterministic discovery and calls against .claude/.mcp.json servers.',
    'Trust actual visible tool schemas over assumed Claude/Codex/Pi tool names.',
    'Consume existing servers; use ak:mcp-builder only for creating new MCP servers.',
  ],
  corePrinciplesVi: [
    'Ưu tiên MCP runtime-native khi session hiện tại đã thấy server.',
    'Dùng script trực tiếp để khám phá và gọi ổn định các server trong .claude/.mcp.json.',
    'Tin schema tool đang thấy thật, không đoán tên chung giữa Claude/Codex/Pi.',
    'Chỉ tiêu thụ server đã có; ak:mcp-builder dành cho việc tạo server MCP mới.',
  ],
  skillStack: [
    { name: 'Runtime MCP tools', type: 'tool' },
    { name: 'scripts/cli.ts', type: 'tool' },
    { name: '@modelcontextprotocol/sdk', type: 'tool' },
    { name: 'assets/tools.json', type: 'tool' },
    { name: 'ak:chrome-profile', type: 'skill' },
  ],
  specialOperations: [
    { id: 'native-first', titleEn: 'Runtime-native first', titleVi: 'Ưu tiên runtime-native', descEn: 'Lowest setup cost when the server is already registered in the active assistant runtime.', descVi: 'Tốn ít thiết lập nhất khi server đã được đăng ký trong runtime assistant hiện tại.', color: 'sky' },
    { id: 'direct-script', titleEn: 'Direct scripts', titleVi: 'Script trực tiếp', descEn: 'Use cli.ts when you need explicit server names, JSON arguments, persisted schemas, or CI-friendly repetition.', descVi: 'Dùng cli.ts khi cần tên server rõ ràng, tham số JSON, schema được lưu, hoặc quy trình lặp lại được trong CI.', color: 'violet' },
    { id: 'chrome-profile', titleEn: 'Chrome profile work', titleVi: 'Việc cần profile Chrome', descEn: 'Chrome DevTools MCP is profile-blind; invoke ak:chrome-profile first when cookies or an exact browser profile matter.', descVi: 'Chrome DevTools MCP không tự biết profile; gọi ak:chrome-profile trước khi cần cookie hoặc đúng profile trình duyệt.', color: 'amber' },
  ],
  promptExamples: [
    { labelEn: 'Discover available tools', labelVi: 'Tìm tool đang có', command: '/ak:use-mcp list the MCP tools available for the current runtime', whenEn: 'You need capability discovery before choosing a server/tool.', whenVi: 'Cần biết runtime hiện tại có những capability nào trước khi chọn server/tool.', expectedEn: 'Uses runtime-visible MCP discovery or falls back to the scripted catalog path.', expectedVi: 'Dùng discovery MCP đang hiện trong runtime hoặc dự phòng bằng đường catalog script.', recommended: true },
    { labelEn: 'Call a known tool', labelVi: 'Gọi tool đã biết', command: '/ak:use-mcp call the existing GitHub MCP tool to read issue 42', whenEn: 'A server/tool is already registered and the task has a concrete target.', whenVi: 'Server/tool đã đăng ký sẵn và việc cần làm có mục tiêu cụ thể.', expectedEn: 'Validates the exact schema, calls the smallest suitable tool, and reports the result.', expectedVi: 'Kiểm schema thật, gọi tool phù hợp nhỏ nhất, rồi báo kết quả.' },
    { labelEn: 'Use scripted fallback', labelVi: 'Dùng dự phòng bằng script', command: '/ak:use-mcp discover tools from .claude/.mcp.json for this project', whenEn: 'The runtime does not expose a configured server but the project MCP config exists.', whenVi: 'Runtime không hiện server đã cấu hình nhưng dự án có MCP config.', expectedEn: 'Runs the scripts client path and persists a reviewable tool catalog.', expectedVi: 'Chạy đường client trong scripts và lưu catalog tool để kiểm tra.' },
  ],
};

export default data;
