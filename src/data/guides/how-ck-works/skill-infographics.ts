// Skill infographic data for the how-ck-works guide
// One-page visual summaries matching the design from reference images
// v1 MVP: brainstorm, plan, cook, fix

import type { SkillInfographic } from './workflow-visualizer-types';

export const skillInfographics: SkillInfographic[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:brainstorm — Solution Brainstormer
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'brainstorm',
    command: '/ck:brainstorm',
    kit: 'engineer',

    header: {
      titleEn: '/brainstorm',
      titleVi: '/brainstorm',
      taglineEn: 'Solution brainstormer with trade-off analysis and brutal honesty. Design-first, no code.',
      taglineVi: 'Brainstorm giải pháp với phân tích trade-off và thẳng thắn. Design-first, không code.',
    },

    hardGate: {
      type: 'warning',
      titleEn: 'HARD GATE',
      titleVi: 'CỔNG CỨNG',
      contentEn: 'No code, no scaffolding, no implementation until design is presented and user approves. Applies to every session regardless of complexity.',
      contentVi: 'Không code, không scaffolding, không triển khai cho đến khi design được trình bày và user duyệt. Áp dụng cho mọi phiên làm việc.',
    },

    processFlow: [
      { number: 1, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'Read project docs & code patterns', descVi: 'Đọc docs dự án & code patterns' },
      { number: 2, titleEn: 'Discover', titleVi: 'Khám phá', descEn: 'Ask clarifying questions via AskUser', descVi: 'Hỏi làm rõ qua AskUser' },
      { number: 3, titleEn: 'Scope', titleVi: 'Phạm vi', descEn: 'Decompose if 3+ independent concerns', descVi: 'Phân tách nếu 3+ vấn đề độc lập' },
      { number: 4, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'Parallel researcher agents + web search', descVi: 'Agents nghiên cứu song song + web search' },
      { number: 5, titleEn: 'Analyze', titleVi: 'Phân tích', descEn: 'Evaluate 2-3 approaches with pros/cons', descVi: 'Đánh giá 2-3 hướng với pros/cons' },
      { number: 6, titleEn: 'Debate', titleVi: 'Tranh luận', descEn: 'Challenge assumptions, present options', descVi: 'Thách thức giả định, trình bày options' },
      { number: 7, titleEn: 'Consensus', titleVi: 'Đồng thuận', descEn: 'Align on chosen approach', descVi: 'Thống nhất hướng đi' },
      { number: 8, titleEn: 'Report', titleVi: 'Báo cáo', descEn: 'Write markdown summary', descVi: 'Viết báo cáo markdown' },
      { number: 9, titleEn: 'Next?', titleVi: 'Tiếp?', descEn: 'Ask: create plan? → /plan', descVi: 'Hỏi: tạo plan? → /plan' },
    ],

    corePrinciples: [
      'YAGNI — You Aren\'t Gonna Need It',
      'KISS — Keep It Simple, Stupid',
      'DRY — Don\'t Repeat Yourself',
      'Brutal honesty over diplomacy',
      'Challenge every assumption',
    ],

    expertiseAreas: [
      'System architecture & scalability',
      'Risk assessment & mitigation',
      'UX/DX optimization',
      'Technical debt management',
      'Performance bottleneck identification',
    ],

    skillStack: [
      { name: 'planner agent', type: 'agent' },
      { name: 'docs-manager agent', type: 'agent' },
      { name: 'WebSearch', type: 'tool' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:docs-seeker', type: 'skill' },
      { name: 'ck:ai-multimodal', type: 'skill' },
      { name: 'ck:sequential-thinking', type: 'skill' },
      { name: 'psql', type: 'tool' },
    ],

    reportOutput: {
      titleEn: 'Markdown Summary Report',
      titleVi: 'Báo cáo tổng hợp Markdown',
      patternEn: 'brainstorm-YYMMDD-HHMM-slug.md',
      patternVi: 'brainstorm-YYMMDD-HHMM-slug.md',
      descEn: 'Problem statement • Evaluated approaches • Final recommendation • Implementation risks • Success metrics • Next steps',
      descVi: 'Mô tả vấn đề • Các hướng đánh giá • Khuyến nghị cuối • Rủi ro triển khai • Metrics thành công • Bước tiếp theo',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:plan — Implementation Planner
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'plan',
    command: '/ck:plan',
    kit: 'engineer',

    header: {
      titleEn: '/plan',
      titleVi: '/plan',
      taglineEn: 'Implementation planner with research phases, red-team review, and task hydration. Creates actionable phase files.',
      taglineVi: 'Lập kế hoạch triển khai với phases nghiên cứu, review red-team, và hydrate tasks. Tạo phase files có thể hành động.',
    },

    processFlow: [
      { number: 1, titleEn: 'Pre-Check', titleVi: 'Kiểm tra', descEn: 'Check Plan Context + active plan', descVi: 'Kiểm tra Plan Context + plan đang hoạt động' },
      { number: 2, titleEn: 'Mode', titleVi: 'Chế độ', descEn: 'Auto-detect or explicit flag', descVi: 'Tự động phát hiện hoặc flag rõ ràng' },
      { number: 3, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'Spawn researcher agents', descVi: 'Spawn researcher agents' },
      { number: 4, titleEn: 'Analyze', titleVi: 'Phân tích', descEn: 'Read docs, scout codebase', descVi: 'Đọc docs, scout codebase' },
      { number: 5, titleEn: 'Plan', titleVi: 'Lập kế hoạch', descEn: 'Write plan.md + phase files', descVi: 'Viết plan.md + phase files' },
      { number: 6, titleEn: 'Red Team', titleVi: 'Red Team', descEn: 'Adversarial review (5 personas)', descVi: 'Review đối kháng (5 personas)' },
      { number: 7, titleEn: 'Validate', titleVi: 'Xác thực', descEn: 'Critical questions interview', descVi: 'Phỏng vấn câu hỏi quan trọng' },
      { number: 8, titleEn: 'Hydrate', titleVi: 'Hydrate', descEn: 'Create Claude Tasks from phases', descVi: 'Tạo Claude Tasks từ phases' },
      { number: 9, titleEn: 'Handoff', titleVi: 'Bàn giao', descEn: 'Output /cook command', descVi: 'Xuất lệnh /cook' },
    ],

    workflowModes: [
      { flag: '--auto', modeEn: 'Auto-detect', modeVi: 'Tự động', research: 'Follows mode', redTeam: 'Follows mode', validation: 'Follows mode', cookFlag: 'Follows mode' },
      { flag: '--fast', modeEn: 'Fast', modeVi: 'Nhanh', research: 'Skip', redTeam: 'Skip', validation: 'Skip', cookFlag: '--auto' },
      { flag: '--hard', modeEn: 'Hard', modeVi: 'Khó', research: '2 researchers', redTeam: 'Yes', validation: 'Optional', cookFlag: '—' },
      { flag: '--deep', modeEn: 'Deep', modeVi: 'Sâu', research: '3+ scouts/phase', redTeam: 'Yes', validation: 'Forced', cookFlag: '—' },
      { flag: '--parallel', modeEn: 'Parallel', modeVi: 'Song song', research: '2 researchers', redTeam: 'Yes', validation: 'Optional', cookFlag: '--parallel' },
      { flag: '--two', modeEn: 'Two approaches', modeVi: 'Hai hướng', research: '2+ researchers', redTeam: 'After select', validation: 'After select', cookFlag: '—' },
    ],

    composableFlagsEn: '--tdd (tests-first per phase) and --no-tasks (skip task hydration) can combine with any mode.',
    composableFlagsVi: '--tdd (tests-first mỗi phase) và --no-tasks (bỏ qua task hydration) có thể kết hợp với bất kỳ mode nào.',

    specialOperations: [
      {
        id: 'red-team',
        titleEn: 'red-team',
        titleVi: 'red-team',
        descEn: '5 adversarial personas challenge plan assumptions, find blind spots, test edge cases. Run as /plan red-team.',
        descVi: '5 personas đối kháng thách thức giả định của plan, tìm điểm mù, test edge cases. Chạy /plan red-team.',
        color: 'red',
      },
      {
        id: 'validate',
        titleEn: 'validate',
        titleVi: 'validate',
        descEn: 'Critical questions interview (3-8 questions). Ensures plan completeness before implementation begins.',
        descVi: 'Phỏng vấn câu hỏi quan trọng (3-8 câu). Đảm bảo plan đầy đủ trước khi triển khai.',
        color: 'blue',
      },
      {
        id: 'archive',
        titleEn: 'archive',
        titleVi: 'archive',
        descEn: 'Write journal entry documenting decisions. Archive completed/abandoned plans for future reference.',
        descVi: 'Viết nhật ký ghi lại quyết định. Lưu trữ plans hoàn thành/bỏ dở để tham khảo.',
        color: 'amber',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:cook — Implementation Engine
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cook',
    command: '/ck:cook',
    kit: 'engineer',

    header: {
      titleEn: '/cook',
      titleVi: '/cook',
      taglineEn: 'Implementation engine that follows plans, runs tests, simplifies code, and reviews quality. The workhorse of ClaudeKit.',
      taglineVi: 'Engine triển khai theo plans, chạy tests, đơn giản hóa code, và review chất lượng. Công cụ chính của ClaudeKit.',
    },

    processFlow: [
      { number: 1, titleEn: 'Intent', titleVi: 'Ý định', descEn: 'Detect plan vs task vs bug', descVi: 'Phát hiện plan vs task vs bug' },
      { number: 2, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'Optional: scout codebase', descVi: 'Tùy chọn: scout codebase' },
      { number: 3, titleEn: 'Review', titleVi: 'Xem xét', descEn: 'Review plan/task scope', descVi: 'Xem xét scope của plan/task' },
      { number: 4, titleEn: 'Plan', titleVi: 'Lập kế hoạch', descEn: 'Create mini-plan if needed', descVi: 'Tạo mini-plan nếu cần' },
      { number: 5, titleEn: 'Implement', titleVi: 'Triển khai', descEn: 'Write code following plan', descVi: 'Viết code theo plan' },
      { number: 6, titleEn: 'Test', titleVi: 'Test', descEn: 'Run tests, fix failures', descVi: 'Chạy tests, sửa lỗi' },
      { number: 7, titleEn: 'Simplify', titleVi: 'Đơn giản', descEn: 'Code simplifier pass', descVi: 'Pass đơn giản hóa code' },
      { number: 8, titleEn: 'Review', titleVi: 'Review', descEn: 'Code review for quality', descVi: 'Code review cho chất lượng' },
      { number: 9, titleEn: 'Commit', titleVi: 'Commit', descEn: 'Stage and commit changes', descVi: 'Stage và commit changes' },
    ],

    corePrinciples: [
      'Follow the plan exactly',
      'Test before review',
      'Simplify after implementation',
      'Never skip quality checks',
      'Commit with conventional messages',
    ],

    expertiseAreas: [
      'Full-stack implementation',
      'Test-driven development',
      'Code simplification',
      'Quality assurance',
      'Git workflow management',
    ],

    skillStack: [
      { name: 'tester agent', type: 'agent' },
      { name: 'code-reviewer agent', type: 'agent' },
      { name: 'code-simplifier agent', type: 'agent' },
      { name: 'git-manager agent', type: 'agent' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:test', type: 'skill' },
      { name: 'ck:code-review', type: 'skill' },
    ],

    reportOutput: {
      titleEn: 'Implementation Complete',
      titleVi: 'Triển khai hoàn tất',
      patternEn: 'Commits + updated plan status',
      patternVi: 'Commits + trạng thái plan cập nhật',
      descEn: 'Code changes committed • Tests passing • Quality reviewed • Plan phases marked complete',
      descVi: 'Code changes đã commit • Tests pass • Quality đã review • Plan phases đánh dấu hoàn thành',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:fix — Debugging Pipeline
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'fix',
    command: '/ck:fix',
    kit: 'engineer',

    header: {
      titleEn: '/fix',
      titleVi: '/fix',
      taglineEn: 'Structured debugging pipeline with root cause analysis, fix implementation, and regression prevention.',
      taglineVi: 'Pipeline debug có cấu trúc với phân tích nguyên nhân gốc, triển khai sửa lỗi, và phòng ngừa regression.',
    },

    processFlow: [
      { number: 1, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'Gather evidence: logs, stack traces', descVi: 'Thu thập bằng chứng: logs, stack traces' },
      { number: 2, titleEn: 'Diagnose', titleVi: 'Chẩn đoán', descEn: 'Identify root cause', descVi: 'Xác định nguyên nhân gốc' },
      { number: 3, titleEn: 'Assess', titleVi: 'Đánh giá', descEn: 'Evaluate fix approaches', descVi: 'Đánh giá các hướng sửa' },
      { number: 4, titleEn: 'Fix', titleVi: 'Sửa', descEn: 'Implement the fix', descVi: 'Triển khai sửa lỗi' },
      { number: 5, titleEn: 'Verify', titleVi: 'Xác minh', descEn: 'Run tests, confirm fix', descVi: 'Chạy tests, xác nhận sửa' },
      { number: 6, titleEn: 'Prevent', titleVi: 'Phòng ngừa', descEn: 'Add regression tests', descVi: 'Thêm regression tests' },
    ],

    corePrinciples: [
      'Find root cause, not symptoms',
      'One bug, one commit',
      'Always add regression test',
      'Document the fix',
      'Never ignore test failures',
    ],

    expertiseAreas: [
      'Root cause analysis',
      'Debugging techniques',
      'Test coverage expansion',
      'Error handling patterns',
      'Log analysis',
    ],

    skillStack: [
      { name: 'debugger agent', type: 'agent' },
      { name: 'tester agent', type: 'agent' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:test', type: 'skill' },
      { name: 'ck:sequential-thinking', type: 'skill' },
    ],

    reportOutput: {
      titleEn: 'Bug Fix Report',
      titleVi: 'Báo cáo sửa lỗi',
      patternEn: 'Inline summary + commit',
      patternVi: 'Tóm tắt inline + commit',
      descEn: 'Root cause identified • Fix implemented • Tests passing • Regression test added',
      descVi: 'Nguyên nhân gốc xác định • Sửa lỗi triển khai • Tests pass • Regression test thêm',
    },
  },
];

/** Helper to find infographic by scenario ID */
export function getInfographicById(id: string): SkillInfographic | undefined {
  return skillInfographics.find(info => info.id === id);
}

/** Check if infographic exists for a scenario */
export function hasInfographic(id: string): boolean {
  return skillInfographics.some(info => info.id === id);
}
