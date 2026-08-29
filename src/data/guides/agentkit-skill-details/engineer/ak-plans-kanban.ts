import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-plans-kanban',
  command: '/ak:plans-kanban',
  kit: 'engineer',
  header: { titleEn: '/ak:plans-kanban — AgentKit plans dashboard', titleVi: '/ak:plans-kanban — Dashboard kế hoạch AgentKit', taglineEn: 'Open the AgentKit plans dashboard for kanban/grid progress views, timeline checks, and quick navigation into plan and phase files.', taglineVi: 'Mở dashboard kế hoạch AgentKit để xem kanban/grid, kiểm tra timeline và điều hướng nhanh vào plan/phase file.' },
  hardGate: { type: 'info', titleEn: 'LAUNCHER ONLY', titleVi: 'CHỈ LÀ LAUNCHER', contentEn: 'plans-kanban opens the integrated dashboard; live ak plan --help remains authoritative for dependency, status, and mutation operations. Deprecated launcher inputs are warned, ignored, or translated by the script.', contentVi: 'plans-kanban chỉ mở dashboard tích hợp; ak plan --help đang chạy mới là nguồn chuẩn cho thao tác dependency, status và mutation. Input launcher cũ được script cảnh báo, bỏ qua hoặc chuyển đổi.' },
  processFlow: [
    { number: 1, titleEn: 'Check dashboard status', titleVi: 'Kiểm tra dashboard', descEn: 'Read AgentKit config status and reuse an already-running dashboard port when one exists.', descVi: 'Đọc trạng thái config AgentKit và dùng lại cổng dashboard đang chạy nếu có.' },
    { number: 2, titleEn: 'Start if needed', titleVi: 'Khởi động nếu cần', descEn: 'If no dashboard is running, start the integrated config UI on the default plans-capable port without opening twice.', descVi: 'Nếu dashboard chưa chạy, khởi động config UI tích hợp trên cổng mặc định hỗ trợ plans và tránh mở trùng.' },
    { number: 3, titleEn: 'Probe capability', titleVi: 'Probe khả năng', descEn: 'Confirm /api/health advertises plans-dashboard or /api/plans responds successfully before opening the browser.', descVi: 'Xác nhận /api/health có plans-dashboard hoặc /api/plans trả lời thành công trước khi mở browser.' },
    { number: 4, titleEn: 'Open plans route', titleVi: 'Mở route plans', descEn: 'Navigate the browser to /plans, preserving any existing dir query from the dashboard context.', descVi: 'Mở browser tới /plans và giữ dir query sẵn có từ dashboard context nếu có.' },
    { number: 5, titleEn: 'Review views', titleVi: 'Xem tiến độ', descEn: 'Use kanban, grid, timeline, progress overview, active/completed filters, and links into plan.md or phase files.', descVi: 'Dùng kanban, grid, timeline, overview tiến độ, lọc active/completed và link vào plan.md hoặc phase file.' },
    { number: 6, titleEn: 'Respect scope', titleVi: 'Giữ đúng scope', descEn: 'Project dashboards show project-scoped plans; global dashboards show global-scoped plans.', descVi: 'Dashboard project chỉ hiển thị plan scope project; dashboard global chỉ hiển thị plan scope global.' },
    { number: 7, titleEn: 'Handle incompatibility', titleVi: 'Xử lý không tương thích', descEn: 'If the CLI lacks plans-dashboard support, print the upgrade message and exit without opening an unusable page.', descVi: 'Nếu CLI chưa hỗ trợ plans-dashboard, in hướng dẫn nâng cấp và thoát, không mở trang không dùng được.' },
  ],
  corePrinciplesEn: ['Thin launcher, not a plan mutation surface', 'Reuse the integrated AgentKit config dashboard', 'Capability probe before browser open', 'Scope-aware plan roots come from dashboard context'],
  corePrinciplesVi: ['Chỉ là launcher mỏng, không phải nơi sửa plan', 'Dùng dashboard config tích hợp của AgentKit', 'Probe khả năng trước khi mở browser', 'Root plan theo scope đến từ dashboard context'],
  expertiseAreasEn: ['Plans dashboard launch', 'Kanban and grid views', 'Timeline and progress visibility', 'Plan file navigation', 'CLI compatibility probing'],
  expertiseAreasVi: ['Mở dashboard plan', 'View kanban và grid', 'Theo dõi timeline và tiến độ', 'Điều hướng file plan', 'Probe tương thích CLI'],
  promptExamples: [
    { labelEn: 'Open dashboard', labelVi: 'Mở dashboard', command: '/ak:plans-kanban', whenEn: 'Use when you need visual progress across active plans.', whenVi: 'Dùng khi cần xem tiến độ trực quan của các plan đang active.', expectedEn: 'Browser opens the integrated /plans dashboard when supported.', expectedVi: 'Browser mở dashboard /plans tích hợp khi CLI hỗ trợ.', recommended: true },
    { labelEn: 'Inspect plans', labelVi: 'Kiểm tra plan', command: '/ak:plans-kanban', whenEn: 'Use to jump from overview into plan.md and phase files.', whenVi: 'Dùng để nhảy từ overview vào plan.md và các phase file.', expectedEn: 'Kanban or grid view with links into plan documents.', expectedVi: 'View kanban hoặc grid có link tới tài liệu plan.' },
  ],
  skillStack: [{ name: 'ak config start', type: 'tool' }, { name: 'ak config status', type: 'tool' }, { name: 'ak plan --help', type: 'tool' }, { name: 'AgentKit dashboard', type: 'tool' }],
  reportOutput: { titleEn: 'Dashboard Output', titleVi: 'Output dashboard', patternEn: 'http://127.0.0.1:8766/plans or the live configured dashboard URL', patternVi: 'http://127.0.0.1:8766/plans hoặc URL dashboard đang được cấu hình', descEn: 'The launcher either opens the plans dashboard, reuses an existing instance, or reports the exact CLI upgrade/action needed.', descVi: 'Launcher sẽ mở dashboard plans, dùng lại instance đang chạy hoặc báo đúng bước nâng cấp/hành động cần làm.' },
};

export default data;
