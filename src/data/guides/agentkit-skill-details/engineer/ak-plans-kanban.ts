import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-plans-kanban',
  command: '/ak:plans-kanban',
  kit: 'engineer',
  header: { titleEn: '/ak:plans-kanban — Plans dashboard', titleVi: '/ak:plans-kanban — Dashboard kế hoạch', taglineEn: 'Open AgentKit’s integrated plans dashboard for kanban/grid views, progress tracking, timeline checks, and quick navigation into plan files.', taglineVi: 'Mở dashboard kế hoạch tích hợp của AgentKit để xem kanban/grid, theo dõi tiến độ, kiểm tra timeline và nhảy nhanh vào file kế hoạch.' },
  hardGate: { type: 'warning', titleEn: 'Probe dashboard support before opening', titleVi: 'Phải probe hỗ trợ dashboard trước khi mở', contentEn: 'The launcher opens /plans only after /api/health advertises plans-dashboard or /api/plans returns 2xx. Without that capability it prints the CLI upgrade message, exits 1, and does not open an unusable page.', contentVi: 'Launcher chỉ mở /plans sau khi /api/health báo plans-dashboard hoặc /api/plans trả 2xx. Nếu thiếu khả năng này, nó in thông báo nâng cấp CLI, thoát 1 và không mở trang không dùng được.' },
  processFlow: [
    { number: 1, titleEn: 'Check dashboard status', titleVi: 'Kiểm tra dashboard', descEn: 'Read ak config status --json and reuse an already-running dashboard URL when another port is active.', descVi: 'Đọc ak config status --json và dùng lại URL dashboard đang chạy nếu một cổng khác đang active.' },
    { number: 2, titleEn: 'Start if needed', titleVi: 'Khởi động nếu cần', descEn: 'If no dashboard is running, start the integrated config UI with ak config start --port 8766 --no-open --no-interactive.', descVi: 'Nếu dashboard chưa chạy, khởi động config UI tích hợp bằng ak config start --port 8766 --no-open --no-interactive.' },
    { number: 3, titleEn: 'Probe capability', titleVi: 'Probe khả năng', descEn: 'Confirm /api/health lists plans-dashboard or /api/plans responds with a 2xx status before opening the browser.', descVi: 'Xác nhận /api/health liệt kê plans-dashboard hoặc /api/plans trả trạng thái 2xx trước khi mở browser.' },
    { number: 4, titleEn: 'Open plans route', titleVi: 'Mở route plans', descEn: 'Open http://127.0.0.1:8766/plans, or the status-reported dashboard URL with its existing dir query context.', descVi: 'Mở http://127.0.0.1:8766/plans, hoặc URL dashboard do status báo kèm context dir query sẵn có.' },
    { number: 5, titleEn: 'Review plan views', titleVi: 'Xem view kế hoạch', descEn: 'Use multi-plan kanban and grid views, timeline/progress overview, active/completed visibility, and links into plan.md or phase-*.md files.', descVi: 'Dùng view kanban và grid nhiều plan, overview timeline/tiến độ, trạng thái active/completed và link vào plan.md hoặc phase-*.md.' },
    { number: 6, titleEn: 'Respect scope', titleVi: 'Giữ đúng scope', descEn: 'Project dashboards show project-scoped plans only; global dashboards show global-scoped plans only.', descVi: 'Dashboard project chỉ hiển thị plan scope project; dashboard global chỉ hiển thị plan scope global.' },
    { number: 7, titleEn: 'Defer plan mutations', titleVi: 'Để CLI sửa plan', descEn: 'Use live ak plan --help for dependency, status, and mutation operations because plans-kanban is only a launcher.', descVi: 'Dùng ak plan --help đang chạy cho thao tác dependency, status và mutation vì plans-kanban chỉ là launcher.' },
  ],
  corePrinciplesEn: ['Thin launcher, not a plan mutation surface', 'Reuse the integrated AgentKit config dashboard', 'Capability probe before browser open', 'Scope-aware plan roots come from dashboard context'],
  corePrinciplesVi: ['Chỉ là launcher mỏng, không phải nơi sửa plan', 'Dùng dashboard config tích hợp của AgentKit', 'Probe khả năng trước khi mở browser', 'Root plan theo scope đến từ dashboard context'],
  expertiseAreasEn: ['Plans dashboard launch', 'Kanban and grid views', 'Timeline and progress visibility', 'Plan file navigation', 'CLI compatibility probing'],
  expertiseAreasVi: ['Mở dashboard plan', 'View kanban và grid', 'Theo dõi timeline và tiến độ', 'Điều hướng file plan', 'Probe tương thích CLI'],
  invocation: {
    syntax: '/ak:plans-kanban [--no-open|--stop]',
    options: [
      { token: '--no-open', titleEn: 'Report URL only', titleVi: 'Chỉ báo URL', descEn: 'Perform discovery and capability checks, then report the /plans URL without opening a browser.', descVi: 'Thực hiện discovery và kiểm tra capability, rồi báo URL /plans mà không mở browser.', exampleCommand: '/ak:plans-kanban --no-open' },
      { token: '--stop', titleEn: 'Stop dashboard', titleVi: 'Dừng dashboard', descEn: 'Delegate to ak config stop and return that command result instead of opening /plans.', descVi: 'Ủy quyền cho ak config stop và trả kết quả lệnh đó thay vì mở /plans.', exampleCommand: '/ak:plans-kanban --stop' },
    ],
  },
  promptExamples: [
    { labelEn: 'Open dashboard', labelVi: 'Mở dashboard', command: '/ak:plans-kanban', whenEn: 'Use when you want to open the visual plans dashboard.', whenVi: 'Dùng khi muốn mở dashboard kế hoạch trực quan.', expectedEn: 'The launcher reuses a running config dashboard or starts one on port 8766, probes plans support, then opens /plans in the browser.', expectedVi: 'Launcher dùng lại dashboard config đang chạy hoặc khởi động cổng 8766, probe hỗ trợ plans rồi mở /plans trong browser.', recommended: true },
    { labelEn: 'Inspect plan progress', labelVi: 'Kiểm tra tiến độ plan', command: '/ak:plans-kanban', whenEn: 'Use when you need kanban, grid, timeline, or progress views for plans.', whenVi: 'Dùng khi cần view kanban, grid, timeline hoặc tiến độ cho các plan.', expectedEn: 'The integrated dashboard shows active and completed plan visibility with links into plan.md and phase-*.md files.', expectedVi: 'Dashboard tích hợp hiển thị plan active/completed và có link vào các file plan.md cùng phase-*.md.' },
    { labelEn: 'Stop launcher dashboard', labelVi: 'Dừng dashboard do launcher mở', command: '/ak:plans-kanban --stop', whenEn: 'Use when you need to stop a dashboard instance started by the launcher.', whenVi: 'Dùng khi cần dừng instance dashboard do launcher khởi động.', expectedEn: 'The launcher handles --stop for its managed dashboard instead of opening /plans, matching the troubleshooting guidance.', expectedVi: 'Launcher xử lý --stop cho dashboard nó quản lý thay vì mở /plans, đúng theo hướng dẫn troubleshooting.' },
  ],
  skillStack: [{ name: 'scripts/open-dashboard.cjs', type: 'tool' }, { name: 'ak config status --json', type: 'tool' }, { name: 'ak config start', type: 'tool' }, { name: 'ak plan --help', type: 'tool' }],
  reportOutput: { titleEn: 'Dashboard output', titleVi: 'Output dashboard', patternEn: 'http://127.0.0.1:8766/plans or the dashboard URL reported by ak config status --json', patternVi: 'http://127.0.0.1:8766/plans hoặc URL dashboard do ak config status --json báo', descEn: 'The launcher opens the supported plans dashboard, reuses an existing dashboard instance, or reports the exact CLI upgrade/action needed.', descVi: 'Launcher mở dashboard plans được hỗ trợ, dùng lại instance dashboard đang chạy hoặc báo đúng bước nâng cấp/hành động cần làm.' },
};

export default data;
