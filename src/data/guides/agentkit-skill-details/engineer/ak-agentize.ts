import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-agentize',
  command: '/ak:agentize',
  kit: 'engineer',
  header: {
    titleEn: '/ak:agentize — Wrap existing code as CLI and/or MCP',
    titleVi: '/ak:agentize — Đóng gói mã hiện có thành CLI và/hoặc MCP',
    taglineEn:
      'Converts an existing codebase, feature, or module into an agent-friendly CLI, MCP server, and companion skill with shared core logic, credential handling, tests, docs, CI, and release-ready packaging.',
    taglineVi:
      'Chuyển codebase, tính năng hoặc module hiện có thành CLI, MCP server và skill đi kèm cho agent, với lõi dùng chung, xử lý credential, test, tài liệu, CI và đóng gói sẵn sàng phát hành.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Track and scout before designing wrappers',
    titleVi: 'Phải lập kế hoạch và rà soát trước khi thiết kế lớp bọc',
    contentEn:
      'Phase 0 project-management and Phase 1 scout are mandatory. Do not decide CLI/MCP shape or scaffold until the target behavior, side effects, config, credentials, and existing tests have been read.',
    contentVi:
      'Bắt buộc có pha 0 project-management và pha 1 scout. Chưa được quyết định dạng CLI/MCP hoặc scaffold trước khi đọc hành vi đích, side effect, cấu hình, credential và test hiện có.',
  },
  processFlow: [
    { number: 1, titleEn: 'Track the plan', titleVi: 'Theo dõi kế hoạch', descEn: 'Create the dated plan directory, register phase tasks, store invocation mode and target, and resolve blockers before touching code.', descVi: 'Tạo thư mục kế hoạch theo ngày, đăng ký task từng pha, lưu mode và mục tiêu gọi lệnh, rồi gỡ blocker trước khi đụng mã.' },
    { number: 2, titleEn: 'Scout the target', titleVi: 'Rà soát mục tiêu', descEn: 'Use ak:scout to map entry points, capabilities, inputs, outputs, side effects, config, secrets, runtime, dependencies, and reusable tests.', descVi: 'Dùng ak:scout để lập bản đồ entry point, năng lực, input, output, side effect, cấu hình, bí mật, runtime, phụ thuộc và test có thể tái dùng.' },
    { number: 3, titleEn: 'Build the map', titleVi: 'Lập bản đồ agent hóa', descEn: 'Produce an Agentization Map ranking agent and CLI value for each candidate capability, and avoid wrapping every function just because it exists.', descVi: 'Tạo Agentization Map chấm giá trị cho agent và CLI của từng năng lực ứng viên, tránh bọc mọi hàm chỉ vì nó tồn tại.' },
    { number: 4, titleEn: 'Decide surfaces', titleVi: 'Chọn bề mặt', descEn: 'Resolve --both, --mcp, or --cli, tool names, transports, deployment targets, and package metadata; ask the user only in --ask mode or when credentials are unclear.', descVi: 'Chốt --both, --mcp hoặc --cli, tên tool, transport, nơi deploy và metadata package; chỉ hỏi người dùng ở --ask hoặc khi credential chưa rõ.' },
    { number: 5, titleEn: 'Extract shared core', titleVi: 'Tách lõi dùng chung', descEn: 'Keep core code free of CLI/MCP imports; expose plain functions so thin adapters can reuse one source of truth.', descVi: 'Giữ phần core không import gì thuộc CLI/MCP; xuất hàm thuần để các adapter mỏng cùng dùng một nguồn sự thật.' },
    { number: 6, titleEn: 'Wrap CLI and MCP', titleVi: 'Bọc CLI và MCP', descEn: 'Add scriptable CLI commands and MCP tools built on the official SDK with structured schemas, actionable errors, auth boundaries, and stdio/HTTP transport decisions.', descVi: 'Thêm lệnh CLI scriptable và tool MCP dựa trên SDK chính thức với schema có cấu trúc, lỗi chỉ cách khắc phục, ranh giới auth và quyết định transport stdio/HTTP.' },
    { number: 7, titleEn: 'Harden the package', titleVi: 'Gia cố gói', descEn: 'Invoke test, CI, docs, companion-skill, dependency audit, secret scan, redaction checks, MCP auth tests, and Docker non-root checks before handoff.', descVi: 'Chạy các bước test, CI, tài liệu, skill đi kèm, audit phụ thuộc, quét bí mật, kiểm tra che dữ liệu, test auth MCP và Docker non-root trước khi bàn giao.' },
    { number: 8, titleEn: 'Handoff release', titleVi: 'Bàn giao phát hành', descEn: 'Return repo path, package names, deployment docs, staged companion skill, decision record, and release checklist.', descVi: 'Trả đường dẫn repo, tên package, tài liệu deploy, skill đi kèm đã staging, bản ghi quyết định và checklist phát hành.' },
  ],
  corePrinciplesEn: [
    'Convert existing capability; do not use this to build a server from scratch or scaffold raw npm packages.',
    'Design workflows for agents, not endpoint mirrors; use --detailed style opt-ins instead of bloated defaults.',
    'One source of truth: shared core first, thin CLI and MCP adapters second.',
    'Credential resolution, redaction, auth tests, docs, and CI are part of done, not polish.',
  ],
  corePrinciplesVi: [
    'Chuyển đổi năng lực đã có; không dùng skill này để xây server từ đầu hoặc scaffold npm thô.',
    'Thiết kế workflow cho agent, không sao chép endpoint; dùng kiểu opt-in chi tiết thay vì mặc định cồng kềnh.',
    'Một nguồn sự thật: tách core dùng chung trước, rồi mới adapter CLI và MCP mỏng.',
    'Chuỗi credential, che dữ liệu, test auth, tài liệu và CI là điều kiện hoàn thành, không phải phần trang trí.',
  ],
  workflowModes: [
    { flag: '--both', modeEn: 'CLI + MCP monorepo', modeVi: 'Monorepo CLI + MCP', research: 'Default output mode', redTeam: 'Shared core prevents drift', validation: 'CLI, MCP, docs, CI, skill all ship' },
    { flag: '--mcp', modeEn: 'MCP only', modeVi: 'Chỉ MCP', research: 'Use when agent/tool surface is the value', redTeam: 'Skip needless CLI packaging', validation: 'Tool schemas and transports verified' },
    { flag: '--cli', modeEn: 'CLI only', modeVi: 'Chỉ CLI', research: 'Use when scriptable human shell UX is the value', redTeam: 'Skip MCP if no agent value exists', validation: 'Argv, exit codes, JSON output verified' },
    { flag: '--ask', modeEn: 'User-challenged decisions', modeVi: 'Quyết định có hỏi người dùng', research: 'After analysis, clarify v1 scope, mutability, credentials, target, package metadata', redTeam: 'Challenges weak answers', validation: 'Decision record reflects explicit answers' },
  ],
  promptExamples: [
    { labelEn: 'Default both surfaces', labelVi: 'Mặc định cả hai bề mặt', command: '/ak:agentize packages/payments --both --auto', whenEn: 'Use when an existing module should become both an npm CLI and MCP server.', whenVi: 'Dùng khi module hiện có cần trở thành cả npm CLI và MCP server.', expectedEn: 'Creates tracked work, scouts real behavior, records the selected commands/tools, extracts shared core logic, wraps CLI and MCP adapters, then hardens tests, docs, CI, security checks, and the companion skill before package handoff.', expectedVi: 'Tạo kế hoạch có theo dõi, rà soát hành vi thật, ghi lại lệnh/tool đã chọn, tách core dùng chung, bọc adapter CLI và MCP, rồi gia cố test, tài liệu, CI, kiểm tra bảo mật và skill đi kèm trước khi bàn giao gói.', recommended: true },
    { labelEn: 'MCP with user decisions', labelVi: 'MCP có hỏi người dùng', command: '/ak:agentize "Expose report generation to agents" --mcp --ask', whenEn: 'Use when mutating/read-only scope, deployment target, or credential source needs human choice.', whenVi: 'Dùng khi phạm vi đọc/ghi, nơi deploy hoặc nguồn credential cần người dùng quyết định.', expectedEn: 'Runs the mandatory track and scout phases first, then blocks in Phase 3 for scope, mutation, credential, deployment, package, ownership, and replacement-CLI answers before implementing the MCP surface.', expectedVi: 'Chạy các pha bắt buộc là lập kế hoạch và rà soát trước, rồi dừng ở pha 3 để hỏi về scope, thao tác ghi, credential, deploy, package, owner và CLI cần thay thế trước khi triển khai bề mặt MCP.' },
    { labelEn: 'Ultra decision pass', labelVi: 'Chế độ quyết định ultra', command: '/ak:agentize src/exporter --cli --ultra', whenEn: 'Use when capability selection and wrapper design deserve five independent decision records.', whenVi: 'Dùng khi việc chọn năng lực và thiết kế lớp bọc đáng có năm bản quyết định độc lập.', expectedEn: 'Runs tracking and scouting once, fans only the Agentization Map and decision record to five read-only candidates, lets one verifier select a winning record unchanged, then implements the CLI package from that winner.', expectedVi: 'Chạy lập kế hoạch và rà soát một lần, chỉ tách nhánh Agentization Map và decision record cho năm ứng viên chỉ đọc, để một verifier chọn bản thắng không chỉnh sửa, rồi triển khai gói CLI từ bản đó.' },
    { labelEn: 'YAGNI cut', labelVi: 'Cắt scope bằng YAGNI', command: '/ak:agentize "Wrap the billing reconciliation module" --both --yagni', whenEn: 'Use when the wrapper should challenge unneeded capabilities rather than expose the full requested surface.', whenVi: 'Dùng khi lớp bọc cần phản biện năng lực không cần thiết thay vì mở toàn bộ bề mặt được yêu cầu.', expectedEn: 'Scouts the module, builds an Agentization Map, challenges requested capabilities that do not serve the stated outcome, passes the literal --yagni flag downstream, and packages only the justified CLI/MCP surface.', expectedVi: 'Rà soát module, lập Agentization Map, phản biện những năng lực được yêu cầu nhưng không phục vụ mục tiêu đã nêu, truyền nguyên cờ --yagni xuống dưới và chỉ đóng gói bề mặt CLI/MCP có lý do.' },
  ],
  skillStack: [
    { name: 'ak:project-management', type: 'skill' },
    { name: 'ak:scout', type: 'skill' },
    { name: 'ak:test', type: 'skill' },
    { name: 'ak:docs', type: 'skill' },
    { name: 'ak:skill-creator', type: 'skill' },
  ],
  composableFlagsEn: '--auto is the default interaction mode; --ask blocks for decision questions. --ultra applies only to analysis/decision after scout. --advice adds kongming supervision without bypassing gates. --yagni allows cutting unnecessary scope.',
  composableFlagsVi: '--auto là mode tương tác mặc định; --ask dừng để hỏi quyết định. --ultra chỉ áp dụng cho phân tích/quyết định sau scout. --advice thêm giám sát kongming nhưng không bỏ qua gate. --yagni cho phép cắt scope không cần.',
};

export default data;
