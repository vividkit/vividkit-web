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
    { number: 1, titleEn: 'Inventory native MCP', titleVi: 'Kiểm kê MCP native', descEn: 'Inspect MCP resources and tools already registered in the active Claude Code, Codex, or Pi runtime.', descVi: 'Kiểm tra resource và tool MCP đã đăng ký trong runtime Claude Code, Codex hoặc Pi hiện tại.' },
    { number: 2, titleEn: 'Choose narrowest path', titleVi: 'Chọn đường hẹp nhất', descEn: 'Use runtime-native MCP when visible; use direct scripts only for configured .claude/.mcp.json stdio servers or deterministic CLI workflows.', descVi: 'Dùng MCP runtime-native khi thấy được; chỉ dùng direct script cho stdio server trong .claude/.mcp.json hoặc workflow CLI xác định.' },
    { number: 3, titleEn: 'Select smallest tool', titleVi: 'Chọn tool nhỏ nhất', descEn: 'Pick the smallest registered tool that directly satisfies the task and matches the user-requested mutation scope.', descVi: 'Chọn tool đã đăng ký nhỏ nhất giải quyết đúng task và khớp phạm vi thay đổi người dùng yêu cầu.' },
    { number: 4, titleEn: 'Inspect schema', titleVi: 'Kiểm schema', descEn: 'Validate required arguments and constraints from the live tool definition or the persisted assets/tools.json catalog.', descVi: 'Kiểm argument bắt buộc và constraint từ định nghĩa tool live hoặc catalog assets/tools.json đã lưu.' },
    { number: 5, titleEn: 'Classify effects', titleVi: 'Phân loại tác động', descEn: 'Separate discovery, read-only access, external writes, destructive actions, credential use, uploads, and provider-cost calls.', descVi: 'Tách discovery, truy cập read-only, write ra ngoài, hành động phá huỷ, dùng credential, upload và call có thể tốn phí provider.' },
    { number: 6, titleEn: 'Approve and call', titleVi: 'Duyệt rồi gọi', descEn: 'Confirm consequential mutations before execution, keep side effects inside scope, and report the server, tool, bounded arguments, result, and changed-state evidence.', descVi: 'Xác nhận thay đổi có hậu quả trước khi chạy, giữ tác động phụ trong scope, rồi báo server, tool, argument đã giới hạn, kết quả và bằng chứng trạng thái đã đổi.' },
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
    { labelEn: 'Discover available tools', labelVi: 'Tìm tool đang có', command: '/ak:use-mcp list the MCP tools available for the current runtime without calling mutating tools', whenEn: 'You need capability discovery before choosing a server/tool.', whenVi: 'Cần biết runtime hiện tại có capability nào trước khi chọn server/tool.', expectedEn: 'Inventories the active runtime MCP surface first, keeps discovery read-only, then reports visible servers/tools or the visibility boundary that requires direct scripts.', expectedVi: 'Kiểm kê bề mặt MCP của runtime hiện tại trước, giữ discovery read-only, rồi báo server/tool thấy được hoặc ranh giới visibility cần direct script.', recommended: true },
    { labelEn: 'Call a known tool', labelVi: 'Gọi tool đã biết', command: '/ak:use-mcp call the existing GitHub MCP tool to read issue 42 without changing the issue', whenEn: 'A server/tool is already registered and the task has a concrete read target.', whenVi: 'Server/tool đã đăng ký sẵn và task có mục tiêu đọc cụ thể.', expectedEn: 'Selects the smallest matching GitHub tool, validates its live input schema, classifies the call as read-only, executes it, and reports the bounded arguments and result.', expectedVi: 'Chọn GitHub tool phù hợp nhỏ nhất, kiểm schema input live, phân loại call là read-only, chạy tool, rồi báo argument đã giới hạn và kết quả.' },
    { labelEn: 'Use scripted fallback', labelVi: 'Dùng direct script', command: '/ak:use-mcp discover tools from .claude/.mcp.json for this project and persist the catalog', whenEn: 'The runtime does not expose a configured stdio server but the project MCP config exists.', whenVi: 'Runtime không hiện stdio server đã cấu hình nhưng project có MCP config.', expectedEn: 'Uses the bundled scripts client for the project configuration, runs list-tools/list-prompts/list-resources as needed, and persists assets/tools.json for schema review before any call.', expectedVi: 'Dùng client script đi kèm cho cấu hình project, chạy list-tools/list-prompts/list-resources khi cần, và lưu assets/tools.json để xem schema trước mọi call.' },
    { labelEn: 'Guard Chrome profile access', labelVi: 'Giữ đúng profile Chrome', command: '/ak:use-mcp inspect the Chrome DevTools MCP options for my logged-in browser profile before using cookies', whenEn: 'An MCP-backed browser task depends on real cookies or an exact Chrome profile.', whenVi: 'Task browser qua MCP phụ thuộc cookie thật hoặc đúng profile Chrome.', expectedEn: 'Recognizes the DevTools MCP profile boundary, routes profile setup through ak:chrome-profile first, then uses only the returned visible MCP/browser capability for scoped work.', expectedVi: 'Nhận diện ranh giới profile của DevTools MCP, chuyển phần thiết lập profile qua ak:chrome-profile trước, rồi chỉ dùng capability MCP/browser đang thấy cho việc đúng scope.' },
  ],
};

export default data;
