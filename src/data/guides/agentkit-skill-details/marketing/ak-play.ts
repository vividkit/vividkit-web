import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-play',
  command: '/ak:play',
  kit: 'marketer',
  header: {
    titleEn: '/ak:play — Marketing playbook orchestrator',
    titleVi: '/ak:play — Điều phối playbook marketing',
    taglineEn: 'Marketing playbook orchestrator with dependency graph routing, template management, goal tracking, quality gates, smart suggestions, and stateful manifest updates.',
    taglineVi: 'Bộ điều phối playbook marketing với dependency graph, template, goal tracking, quality gate, gợi ý thông minh và cập nhật manifest có trạng thái.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'STATE, TEMPLATE, AND SECRET SAFETY',
    titleVi: 'AN TOÀN STATE, TEMPLATE VÀ SECRET',
    contentEn: 'Never expose API keys or credentials, refuse manifest changes for unnamed other playbooks, validate template JSON, reject unrecognized gates or agents, and do not execute arbitrary template commands — route only to existing /ak:* commands.',
    contentVi: 'Không bao giờ lộ API key hoặc credential, từ chối sửa manifest của playbook khác nếu không nêu tên rõ, validate JSON template, reject gate/agent lạ và không chạy command tùy ý trong template — chỉ route tới command /ak:* có sẵn.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Entry', titleVi: 'Đọc entry', descEn: 'Read create, next, status, list, blocked, learn, reset, gate, templates, goals, or treat a name as status.', descVi: 'Đọc create, next, status, list, blocked, learn, reset, gate, templates, goals hoặc xem token đầu là tên để hiển thị status.' },
    { number: 2, titleEn: 'Route Reference', titleVi: 'Định tuyến reference', descEn: 'Load references/{subcommand}.md for the requested operation.', descVi: 'Nạp references/{subcommand}.md cho thao tác được yêu cầu.' },
    { number: 3, titleEn: 'Load Manifest', titleVi: 'Nạp manifest', descEn: 'Read data/playbooks/{slug}/manifest.json for state, template, outputs, timestamps, and learnings.', descVi: 'Đọc data/playbooks/{slug}/manifest.json để lấy state, template, output, timestamp và learning.' },
    { number: 4, titleEn: 'Evaluate Graph', titleVi: 'Đánh giá graph', descEn: 'Use graph logic to determine ready, blocked, stale, gate-pending, in-progress, and completed steps.', descVi: 'Dùng graph logic để xác định step ready, blocked, stale, gate-pending, in-progress và completed.' },
    { number: 5, titleEn: 'Check Goals', titleVi: 'Kiểm tra mục tiêu', descEn: 'Pull or accept metrics, compare against goal targets, and calculate trend or gap.', descVi: 'Kéo hoặc nhận metric, so với target mục tiêu và tính trend hoặc gap.' },
    { number: 6, titleEn: 'Suggest Next', titleVi: 'Gợi ý bước tiếp', descEn: 'Rank the top actions by goal gap, readiness, expected impact, and dependency status.', descVi: 'Xếp hạng hành động tiếp theo theo goal gap, readiness, impact dự kiến và dependency.' },
    { number: 7, titleEn: 'Execute Routed Step', titleVi: 'Chạy step đã định tuyến', descEn: 'Route step definitions to existing agents, skills, or /ak:* commands; keep human gates explicit.', descVi: 'Định tuyến step tới agent, skill hoặc command /ak:* có sẵn; giữ human gate rõ ràng.' },
    { number: 8, titleEn: 'Update State', titleVi: 'Cập nhật state', descEn: 'Write manifest status, outputs, timestamps, goal values, and learnings after the operation.', descVi: 'Ghi trạng thái manifest, output, timestamp, goal value và learning sau thao tác.' },
  ],
  corePrinciplesEn: [
    'A playbook is a stateful dependency graph, not a loose checklist.',
    'Every step has strategy, AI execution, and human-decision layers.',
    'Goal gaps and graph readiness determine what is next.',
    'Templates are validated before use; execution only routes through known commands and rostered agents.',
  ],
  corePrinciplesVi: [
    'Playbook là dependency graph có trạng thái, không phải checklist rời rạc.',
    'Mỗi step có ba lớp: strategy, AI execution và human decision.',
    'Goal gap và graph readiness quyết định bước tiếp theo.',
    'Template phải được validate trước khi dùng; execution chỉ route qua command và agent trong roster đã biết.',
  ],
  workflowModes: [
    { flag: 'create <name> [--template <id>]', modeEn: 'Create a playbook from a named template or custom flow.', modeVi: 'Tạo playbook từ template được nêu tên hoặc flow tùy chỉnh.', research: 'Template', redTeam: 'Invalid schema', validation: 'Manifest created' },
    { flag: 'next [name]', modeEn: 'Show the best ready action from dependency graph and goal gap.', modeVi: 'Hiển thị hành động ready tốt nhất dựa trên dependency graph và goal gap.', research: 'Manifest', redTeam: 'Blocked deps', validation: 'Top actions' },
    { flag: 'status [name]', modeEn: 'Display playbook progress, blocked work, stale steps, goals, and outputs.', modeVi: 'Hiển thị tiến độ playbook, việc blocked, step stale, goal và output.', research: 'State', redTeam: 'Stale data', validation: 'Dashboard' },
    { flag: 'list', modeEn: 'Summarize local playbooks under data/playbooks/.', modeVi: 'Tóm tắt các playbook local trong data/playbooks/.', research: 'Playbook directory', redTeam: 'Missing state', validation: 'Inventory' },
    { flag: 'blocked [name]', modeEn: 'Explain blocked and gate-pending steps and recommend an unblock path.', modeVi: 'Giải thích step bị blocked hoặc gate-pending và đề xuất đường unblock.', research: 'Manifest state', redTeam: 'Wrong unblock', validation: 'Blocked reasons' },
    { flag: 'learn [name]', modeEn: 'Capture user-reviewed reusable patterns into manifest.json and learnings.md.', modeVi: 'Ghi pattern tái sử dụng đã được user review vào manifest.json và learnings.md.', research: 'Reviewed output', redTeam: 'Unvetted pattern', validation: 'Learning saved' },
    { flag: 'reset <name> [step]', modeEn: 'Reset one step or the whole playbook while preserving output files.', modeVi: 'Reset một step hoặc cả playbook nhưng giữ lại output file.', research: 'Reset scope', redTeam: 'Wrong step', validation: 'State reset' },
    { flag: 'gate <name> <step> approve|reject', modeEn: 'Approve or reject a human decision gate.', modeVi: 'Approve hoặc reject một human decision gate.', research: 'Gate state', redTeam: 'Wrong step', validation: 'Manifest update' },
    { flag: 'goals [set|pull]', modeEn: 'Set or pull goal metrics and compare them to targets.', modeVi: 'Set hoặc pull metric mục tiêu rồi so với target.', research: 'Metrics', redTeam: 'No API keys', validation: 'Goal trends' },
    { flag: 'templates [--browse]', modeEn: 'Browse bundled templates such as product-hunt-launch, content-engine, campaign-sprint, and saas-launch.', modeVi: 'Duyệt template có sẵn như product-hunt-launch, content-engine, campaign-sprint và saas-launch.', research: 'Template catalog', redTeam: 'Unsupported gate', validation: 'Schema' },
  ],
  promptExamples: [
    { labelEn: 'Create playbook', labelVi: 'Tạo playbook', command: '/ak:play create saas-launch --template saas-launch', whenEn: 'You need a reproducible marketing playbook from a bundled template.', whenVi: 'Khi cần playbook marketing lặp lại được từ template có sẵn.', expectedEn: 'A manifest-backed playbook with steps, goals, dependencies, and template version.', expectedVi: 'Playbook có manifest với step, goal, dependency và version template.', recommended: true },
    { labelEn: 'Next action', labelVi: 'Hành động tiếp', command: '/ak:play next saas-launch', whenEn: 'You want the highest-impact ready step instead of scanning the whole plan.', whenVi: 'Khi muốn bước ready có impact cao nhất thay vì tự rà toàn bộ plan.', expectedEn: 'Top suggested actions from graph readiness and goal gaps.', expectedVi: 'Các hành động gợi ý hàng đầu từ graph readiness và goal gap.' },
    { labelEn: 'Status dashboard', labelVi: 'Dashboard trạng thái', command: '/ak:play status saas-launch', whenEn: 'You need current progress, blocked steps, stale work, goals, and outputs.', whenVi: 'Khi cần tiến độ hiện tại, step bị block, việc stale, goal và output.', expectedEn: 'Playbook status dashboard.', expectedVi: 'Dashboard trạng thái playbook.' },
    { labelEn: 'Gate decision', labelVi: 'Quyết định gate', command: '/ak:play gate saas-launch pricing-page approve', whenEn: 'A human decision gate is pending and needs an explicit decision.', whenVi: 'Khi human gate đang chờ và cần quyết định rõ.', expectedEn: 'Manifest gate status updated and next ready step recalculated.', expectedVi: 'Manifest cập nhật trạng thái gate và tính lại step ready tiếp theo.' },
    { labelEn: 'Goal pull', labelVi: 'Kéo goal', command: '/ak:play goals pull', whenEn: 'You need current metric progress using available analytics bridges or manual fallback.', whenVi: 'Khi cần cập nhật metric hiện tại qua analytics bridge hoặc fallback nhập tay.', expectedEn: 'Goal values, trends, and smart suggestions.', expectedVi: 'Giá trị goal, trend và gợi ý thông minh.' },
    { labelEn: 'Browse templates', labelVi: 'Duyệt template', command: '/ak:play templates --browse', whenEn: 'You need to inspect bundled playbook templates before creating one.', whenVi: 'Khi cần xem template playbook có sẵn trước khi tạo mới.', expectedEn: 'Lists bundled templates with ids and descriptions and does not create or mutate a playbook manifest.', expectedVi: 'Liệt kê template có sẵn với id và mô tả, không tạo hoặc sửa manifest playbook.' },
  ],
  skillStack: [
    { name: 'campaign-manager', type: 'agent' },
    { name: 'content-creator', type: 'agent' },
    { name: 'copywriter', type: 'agent' },
    { name: 'social-media-manager', type: 'agent' },
    { name: 'email-wizard', type: 'agent' },
    { name: 'analytics-analyst', type: 'agent' },
  ],
};

export default data;
