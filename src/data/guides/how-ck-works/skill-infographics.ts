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
      titleEn: 'HARD GATES (3)',
      titleVi: 'HARD GATES (3)',
      contentEn: '① No implementation until design is presented & user approves. ② Scout codebase BEFORE asking any clarifying question (project type, modules, patterns, docs, plans, constraints). ③ Discovery must extract EXACT requirements — expected output, acceptance criteria, scope boundary, non-negotiable constraints, touchpoints. Loop until concrete.',
      contentVi: '① Không triển khai cho đến khi design được trình bày & user duyệt. ② BẮT BUỘC scout codebase TRƯỚC mọi câu hỏi làm rõ (loại dự án, modules, patterns, docs, plans, ràng buộc). ③ Discovery phải trích xuất yêu cầu CHÍNH XÁC — output mong đợi, acceptance criteria, scope boundary, ràng buộc bất khả nhân nhượng, touchpoints. Lặp đến khi cụ thể.',
    },

    processFlow: [
      { number: 1, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'MANDATORY first step — map project type, modules, patterns, docs, plans', descVi: 'BẮT BUỘC trước tiên — xác định loại dự án, modules, patterns, docs, plans' },
      { number: 2, titleEn: 'Discover', titleVi: 'Khám phá', descEn: 'AskUser loop — extract 5 exact items: output, acceptance, scope, constraints, touchpoints', descVi: 'AskUser lặp — trích 5 mục: output, acceptance, scope, ràng buộc, touchpoints' },
      { number: 3, titleEn: 'Scope', titleVi: 'Phạm vi', descEn: 'Decompose if 3+ independent subsystems', descVi: 'Phân tách nếu 3+ subsystem độc lập' },
      { number: 4, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'planner agent + WebSearch + docs-seeker', descVi: 'planner agent + WebSearch + docs-seeker' },
      { number: 5, titleEn: 'Analyze', titleVi: 'Phân tích', descEn: 'Evaluate 2-3 approaches with pros/cons via YAGNI/KISS/DRY', descVi: 'Đánh giá 2-3 hướng với pros/cons theo YAGNI/KISS/DRY' },
      { number: 6, titleEn: 'Debate', titleVi: 'Tranh luận', descEn: 'Brutal honesty — challenge assumptions, present options', descVi: 'Brutal honesty — thách thức giả định, trình bày options' },
      { number: 7, titleEn: 'Consensus', titleVi: 'Đồng thuận', descEn: 'Align on chosen approach', descVi: 'Thống nhất hướng đi' },
      { number: 8, titleEn: 'Report', titleVi: 'Báo cáo', descEn: 'Markdown summary via ck:project-organization', descVi: 'Báo cáo markdown qua ck:project-organization' },
      { number: 9, titleEn: 'Handoff', titleVi: 'Bàn giao', descEn: 'AskUser: /ck:plan --tdd (refactor/critical) · /ck:plan (default) · end', descVi: 'AskUser: /ck:plan --tdd (refactor/critical) · /ck:plan (default) · kết thúc' },
      { number: 10, titleEn: 'Journal', titleVi: 'Nhật ký', descEn: '/ck:journal — concise technical entry', descVi: '/ck:journal — entry kỹ thuật ngắn gọn' },
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
      taglineEn: 'Implementation planner with cross-plan scan, scope challenge, research phases, red-team review, and task hydration. Creates actionable phase files via the ck CLI.',
      taglineVi: 'Lập kế hoạch triển khai với cross-plan scan, scope challenge, phases nghiên cứu, review red-team, và hydrate tasks. Tạo phase files có thể hành động qua ck CLI.',
    },

    hardGate: {
      type: 'warning',
      titleEn: 'HARD GATE',
      titleVi: 'HARD GATE',
      contentEn: 'No code implementation — /ck:plan only creates plans. CLI-owned scaffolding via `ck plan create/check/uncheck`; never hand-edit the phases table when CLI is available. Plans must live under project or global plan roots, never arbitrary user directories.',
      contentVi: 'Không triển khai code — /ck:plan chỉ tạo plans. Scaffolding do CLI sở hữu qua `ck plan create/check/uncheck`; không sửa tay bảng phases khi CLI có sẵn. Plans phải nằm dưới project hoặc global plan roots, không phải thư mục user tùy ý.',
    },

    processFlow: [
      { number: 1, titleEn: 'Pre-Check', titleVi: 'Kiểm tra', descEn: 'Check Plan Context: active / suggested / none', descVi: 'Kiểm tra Plan Context: active / suggested / none' },
      { number: 2, titleEn: 'Cross-Scan', titleVi: 'Quét chéo', descEn: 'Scan unfinished plans, detect blockedBy/blocks', descVi: 'Quét plans dang dở, phát hiện blockedBy/blocks' },
      { number: 3, titleEn: 'Scope', titleVi: 'Phạm vi', descEn: 'Scope Challenge (skip if --fast or trivial)', descVi: 'Scope Challenge (bỏ nếu --fast hoặc trivial)' },
      { number: 4, titleEn: 'Mode', titleVi: 'Chế độ', descEn: 'Auto-detect or explicit flag', descVi: 'Tự động phát hiện hoặc flag rõ ràng' },
      { number: 5, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'Spawn researcher agents (skip in fast)', descVi: 'Spawn researcher agents (bỏ trong fast)' },
      { number: 6, titleEn: 'Analyze', titleVi: 'Phân tích', descEn: 'Read docs, scout codebase if stale', descVi: 'Đọc docs, scout codebase nếu cũ' },
      { number: 7, titleEn: 'Plan', titleVi: 'Lập kế hoạch', descEn: 'Planner writes plan.md + phase files via ck CLI', descVi: 'Planner viết plan.md + phase files qua ck CLI' },
      { number: 8, titleEn: 'Red Team', titleVi: 'Red Team', descEn: 'Adversarial review (2-4 reviewers)', descVi: 'Review đối kháng (2-4 reviewers)' },
      { number: 9, titleEn: 'Validate', titleVi: 'Xác thực', descEn: 'Verification pass + critical questions', descVi: 'Verification pass + câu hỏi quan trọng' },
      { number: 10, titleEn: 'Hydrate', titleVi: 'Hydrate', descEn: 'Create Claude Tasks per phase + critical steps', descVi: 'Tạo Claude Tasks cho mỗi phase + bước quan trọng' },
      { number: 11, titleEn: 'Handoff', titleVi: 'Bàn giao', descEn: 'Boundary reminder → AskUser: validate/red-team/cook/end', descVi: 'Nhắc boundary → AskUser: validate/red-team/cook/end' },
    ],

    corePrinciplesEn: [
      'YAGNI / KISS / DRY — be honest, brutal, concise',
      'CLI-owned scaffolding — use `ck plan` commands, never hand-edit phases',
      'Whole-plan consistency sweep after every validate/red-team edit',
      'No code implementation — plans only, hand off via /ck:cook',
      'Plans live under project or global roots, never arbitrary directories',
    ],
    corePrinciplesVi: [
      'YAGNI / KISS / DRY — thẳng thắn, brutal, súc tích',
      'CLI sở hữu scaffolding — dùng lệnh `ck plan`, không sửa tay phases',
      'Quét tính nhất quán toàn plan sau mỗi lần validate/red-team edit',
      'Không triển khai code — chỉ plans, bàn giao qua /ck:cook',
      'Plans nằm dưới project hoặc global roots, không phải thư mục tùy ý',
    ],

    expertiseAreasEn: [
      'Cross-plan dependency mapping (blockedBy / blocks)',
      'Scope challenge & mode auto-detection',
      'Phase decomposition & canonical phase template',
      'Adversarial red-team review with 2-4 reviewers',
      'Task hydration with TaskCreate dependency chains',
    ],
    expertiseAreasVi: [
      'Mapping phụ thuộc cross-plan (blockedBy / blocks)',
      'Scope challenge & auto-detect mode',
      'Phân rã phases & canonical phase template',
      'Red-team đối kháng với 2-4 reviewers',
      'Hydrate tasks với chuỗi phụ thuộc TaskCreate',
    ],

    workflowModes: [
      { flag: '--auto', modeEn: 'Auto-detect', modeVi: 'Tự động', research: 'Follows mode', redTeam: 'Follows mode', validation: 'Follows mode', cookFlag: 'Follows mode' },
      { flag: '--fast', modeEn: 'Fast', modeVi: 'Nhanh', research: 'Skip', redTeam: 'Skip', validation: 'Skip', cookFlag: '—' },
      { flag: '--hard', modeEn: 'Hard', modeVi: 'Khó', research: '2 researchers', redTeam: 'Yes', validation: 'Optional', cookFlag: '—' },
      { flag: '--deep', modeEn: 'Deep', modeVi: 'Sâu', research: '2-3 + per-phase scout', redTeam: 'Yes', validation: 'Yes', cookFlag: '—' },
      { flag: '--parallel', modeEn: 'Parallel', modeVi: 'Song song', research: '2 researchers', redTeam: 'Yes', validation: 'Optional', cookFlag: '--parallel' },
      { flag: '--two', modeEn: 'Two approaches', modeVi: 'Hai hướng', research: '2+ researchers', redTeam: 'After select', validation: 'After select', cookFlag: '—' },
    ],

    composableFlagsEn: '--tdd (tests-first per phase) and --no-tasks (skip task hydration) combine with any mode.',
    composableFlagsVi: '--tdd (tests-first mỗi phase) và --no-tasks (bỏ task hydration) kết hợp được với mọi mode.',

    deepDiveLink: {
      hrefEn: '/guides/inside-claudekit/plan-modes',
      hrefVi: '/vi/guides/inside-claudekit/plan-modes',
      labelEn: 'Deep dive: when to use --deep and --tdd',
      labelVi: 'Đọc thêm: khi nào dùng --deep và --tdd',
    },

    skillStack: [
      { name: 'planner agent', type: 'agent' },
      { name: 'researcher agent', type: 'agent' },
      { name: 'code-reviewer agent', type: 'agent' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:docs-seeker', type: 'skill' },
      { name: 'ck:sequential-thinking', type: 'skill' },
      { name: 'ck:project-organization', type: 'skill' },
      { name: 'ck:journal', type: 'skill' },
      { name: 'ck CLI (plan create/check)', type: 'tool' },
      { name: 'TaskCreate / TaskList', type: 'tool' },
      { name: 'AskUserQuestion', type: 'tool' },
    ],

    specialOperations: [
      {
        id: 'red-team',
        titleEn: 'red-team',
        titleVi: 'red-team',
        descEn: '2-4 code-reviewer agents challenge plan assumptions, find blind spots, test edge cases. Run as /ck:plan red-team {plan-path}.',
        descVi: '2-4 code-reviewer agents thách thức giả định plan, tìm điểm mù, test edge cases. Chạy /ck:plan red-team {plan-path}.',
        color: 'red',
      },
      {
        id: 'validate',
        titleEn: 'validate',
        titleVi: 'validate',
        descEn: 'Critical questions interview (3-8 questions) + verification pass. Triggers whole-plan consistency sweep on edits.',
        descVi: 'Phỏng vấn câu hỏi quan trọng (3-8 câu) + verification pass. Kích hoạt whole-plan consistency sweep khi edit.',
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

    reportOutput: {
      titleEn: 'Plan Directory + Cook Handoff',
      titleVi: 'Thư mục Plan + Bàn giao Cook',
      patternEn: 'plans/YYMMDD-HHMM-{slug}/plan.md + phase-XX-*.md',
      patternVi: 'plans/YYMMDD-HHMM-{slug}/plan.md + phase-XX-*.md',
      locationEn: 'Project: ./plans/  •  Global: ~/.claude/plans/',
      locationVi: 'Project: ./plans/  •  Global: ~/.claude/plans/',
      descEn: 'plan.md (frontmatter + phases table) • phase-XX files (canonical template) • Claude Tasks per phase • Post-plan AskUser: validate / red-team / /ck:cook {absolute-path} / end',
      descVi: 'plan.md (frontmatter + bảng phases) • file phase-XX (template chuẩn) • Claude Tasks mỗi phase • Post-plan AskUser: validate / red-team / /ck:cook {absolute-path} / end',
    },
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
