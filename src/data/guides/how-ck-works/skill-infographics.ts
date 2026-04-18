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
      titleEn: '/ck:brainstorm',
      titleVi: '/ck:brainstorm',
      taglineEn: 'Solution brainstormer with trade-off analysis and brutal honesty. Design-first, no code.',
      taglineVi: 'Brainstorm giải pháp với phân tích trade-off và thẳng thắn. Design-first, không code.',
    },

    hardGate: {
      type: 'warning',
      titleEn: 'HARD GATE',
      titleVi: 'HARD GATE',
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

    corePrinciplesEn: [
      'YAGNI — You Aren\'t Gonna Need It',
      'KISS — Keep It Simple, Stupid',
      'DRY — Don\'t Repeat Yourself',
      'Brutal honesty over diplomacy',
      'Challenge every assumption',
    ],
    corePrinciplesVi: [
      'YAGNI — Đừng xây thứ chưa cần',
      'KISS — Giữ cho đơn giản',
      'DRY — Không lặp lại code',
      'Ưu tiên thẳng thắn, không vòng vo',
      'Thách thức mọi giả định',
    ],

    expertiseAreasEn: [
      'System architecture & scalability',
      'Risk assessment & mitigation',
      'UX/DX optimization',
      'Technical debt management',
      'Performance bottleneck identification',
    ],
    expertiseAreasVi: [
      'Kiến trúc hệ thống & khả năng mở rộng',
      'Đánh giá & giảm thiểu rủi ro',
      'Tối ưu UX/DX',
      'Quản lý technical debt',
      'Xác định bottleneck hiệu năng',
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
      locationEn: 'plans/reports/',
      locationVi: 'plans/reports/',
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
      titleEn: '/ck:plan',
      titleVi: '/ck:plan',
      taglineEn: 'Implementation planner with research phases, red-team review, and task hydration. Creates actionable phase files.',
      taglineVi: 'Lập kế hoạch triển khai với phases nghiên cứu, review red-team, và hydrate tasks. Tạo phase files có thể hành động.',
    },

    processFlow: [
      { number: 1, titleEn: 'Pre-Check', titleVi: 'Kiểm tra', descEn: 'Check Plan Context + active plan', descVi: 'Kiểm tra Plan Context + plan đang hoạt động' },
      { number: 2, titleEn: 'Mode', titleVi: 'Chế độ', descEn: 'Auto-detect or explicit flag', descVi: 'Tự động phát hiện hoặc flag rõ ràng' },
      { number: 3, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'Spawn researcher agents', descVi: 'Spawn researcher agents' },
      { number: 4, titleEn: 'Analyze', titleVi: 'Phân tích', descEn: 'Read docs, scout codebase', descVi: 'Đọc docs, scout codebase' },
      { number: 5, titleEn: 'Plan', titleVi: 'Lập kế hoạch', descEn: 'Write plan.md + phase files', descVi: 'Viết plan.md + phase files' },
      { number: 6, titleEn: 'Red Team', titleVi: 'Red Team', descEn: 'Adversarial review (2-4 reviewers)', descVi: 'Review đối kháng (2-4 reviewers)' },
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
        descEn: '2-4 code-reviewer agents challenge plan assumptions, find blind spots, test edge cases. Run as /plan red-team.',
        descVi: '2-4 code-reviewer agents thách thức giả định của plan, tìm điểm mù, test edge cases. Chạy /plan red-team.',
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
      titleEn: '/ck:cook',
      titleVi: '/ck:cook',
      taglineEn: 'Implementation engine that follows plans, runs tests, simplifies code, and reviews quality. The workhorse of ClaudeKit.',
      taglineVi: 'Engine triển khai theo plans, chạy tests, đơn giản hóa code, và review chất lượng. Công cụ chính của ClaudeKit.',
    },

    processFlow: [
      { number: 1, titleEn: 'Intent', titleVi: 'Ý định', descEn: 'Detect mode from input', descVi: 'Phát hiện mode từ input' },
      { number: 2, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'Scout codebase (skip if fast)', descVi: 'Scout codebase (bỏ nếu fast)' },
      { number: 3, titleEn: 'Plan', titleVi: 'Lập kế hoạch', descEn: 'Create plan.md + phases', descVi: 'Tạo plan.md + phases' },
      { number: 4, titleEn: 'Implement', titleVi: 'Triển khai', descEn: 'Execute phase tasks', descVi: 'Thực thi tasks theo phase' },
      { number: 5, titleEn: 'Test', titleVi: 'Test', descEn: 'Run tests via tester agent', descVi: 'Chạy tests qua tester agent' },
      { number: 6, titleEn: 'Review', titleVi: 'Review', descEn: 'Code review via reviewer agent', descVi: 'Code review qua reviewer agent' },
      { number: 7, titleEn: 'Finalize', titleVi: 'Hoàn tất', descEn: 'Sync plan + docs + commit', descVi: 'Sync plan + docs + commit' },
    ],

    corePrinciplesEn: [
      'Follow the plan exactly',
      'Test before review',
      'Delegate to subagents (tester, reviewer)',
      'Never skip quality checks',
      'Finalize with docs + commit',
    ],
    corePrinciplesVi: [
      'Theo plan chính xác',
      'Test trước review',
      'Delegate cho subagents (tester, reviewer)',
      'Không bỏ qua kiểm tra chất lượng',
      'Hoàn tất với docs + commit',
    ],

    expertiseAreasEn: [
      'Full-stack implementation',
      'Test-driven development',
      'Subagent orchestration',
      'Quality assurance',
      'Git workflow management',
    ],
    expertiseAreasVi: [
      'Triển khai full-stack',
      'Test-driven development',
      'Điều phối subagents',
      'Đảm bảo chất lượng',
      'Quản lý Git workflow',
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
      titleEn: '/ck:fix',
      titleVi: '/ck:fix',
      taglineEn: 'Structured debugging pipeline with root cause analysis, fix implementation, and regression prevention.',
      taglineVi: 'Pipeline debug có cấu trúc với phân tích nguyên nhân gốc, triển khai sửa lỗi, và phòng ngừa regression.',
    },

    processFlow: [
      { number: 1, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'Gather evidence: logs, stack traces', descVi: 'Thu thập bằng chứng: logs, stack traces' },
      { number: 2, titleEn: 'Diagnose', titleVi: 'Chẩn đoán', descEn: 'Root cause analysis (no guessing)', descVi: 'Phân tích nguyên nhân gốc (không đoán)' },
      { number: 3, titleEn: 'Route', titleVi: 'Định tuyến', descEn: 'Assess complexity → workflow', descVi: 'Đánh giá độ phức tạp → workflow' },
      { number: 4, titleEn: 'Fix', titleVi: 'Sửa', descEn: 'Implement the fix', descVi: 'Triển khai sửa lỗi' },
      { number: 5, titleEn: 'Verify', titleVi: 'Xác minh', descEn: 'Run tests + add regression test', descVi: 'Chạy tests + thêm regression test' },
      { number: 6, titleEn: 'Finalize', titleVi: 'Hoàn tất', descEn: 'Docs + commit + journal', descVi: 'Docs + commit + journal' },
    ],

    corePrinciplesEn: [
      'Find root cause, not symptoms',
      'One bug, one commit',
      'Always add regression test',
      'Document the fix',
      'Never ignore test failures',
    ],
    corePrinciplesVi: [
      'Tìm nguyên nhân gốc, không phải triệu chứng',
      'Một bug, một commit',
      'Luôn thêm regression test',
      'Ghi lại bản sửa',
      'Không bỏ qua test thất bại',
    ],

    expertiseAreasEn: [
      'Root cause analysis',
      'Debugging techniques',
      'Test coverage expansion',
      'Error handling patterns',
      'Log analysis',
    ],
    expertiseAreasVi: [
      'Phân tích nguyên nhân gốc',
      'Kỹ thuật debug',
      'Mở rộng test coverage',
      'Patterns xử lý lỗi',
      'Phân tích log',
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

/** Get processFlow phase count for a scenario (for badge display) */
export function getPhaseCount(id: string): number | undefined {
  const info = skillInfographics.find(i => i.id === id);
  return info?.processFlow?.length;
}
