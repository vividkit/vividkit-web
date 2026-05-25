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

    specialOperations: [
      {
        id: 'simple-design',
        titleEn: 'Too simple to design?',
        titleVi: 'Quá đơn giản để design?',
        descEn: 'Still write a brief design. Simple work wastes time when assumptions stay implicit.',
        descVi: 'Vẫn viết design ngắn. Việc đơn giản hay phí thời gian khi assumptions bị ẩn.',
        color: 'amber',
      },
      {
        id: 'known-solution',
        titleEn: 'Already know the solution?',
        titleVi: 'Đã biết giải pháp?',
        descEn: 'Then it takes little time to write down. The written design is the alignment checkpoint.',
        descVi: 'Vậy viết ra rất nhanh. Design bằng chữ là checkpoint để cùng hiểu đúng.',
        color: 'sky',
      },
      {
        id: 'prototype-risk',
        titleEn: 'Just prototype quickly?',
        titleVi: 'Prototype nhanh thôi?',
        descEn: 'Rejected by default. Prototypes become production code; design first.',
        descVi: 'Mặc định bị chặn. Prototype thường thành production code; design trước.',
        color: 'violet',
      },
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
      taglineEn: 'Implementation engine with mandatory scout-first, exact-requirements capture, plan-gated execution, and side-effect verification. The workhorse of ClaudeKit.',
      taglineVi: 'Engine triển khai với scout-first bắt buộc, thu thập yêu cầu chính xác, thực thi qua plan-gate, và xác minh side-effect. Công cụ chính của ClaudeKit.',
    },

    hardGate: {
      type: 'warning',
      titleEn: 'HARD GATES (4)',
      titleVi: 'HARD GATES (4)',
      contentEn: '① No implementation until a plan exists & is reviewed — even "simple" tasks (override: user says "just code it"). ② Scout codebase BEFORE planning or any clarifying question — report project type, modules, patterns, docs, plans, contracts. ③ Capture 5 EXACT requirements via AskUser before plan: expected output, acceptance criteria, scope boundary, non-negotiable constraints, touchpoints. ④ Side-effect-free is a gate: code-review + tests must prove no regression, no new lint/type/build errors, public contracts unchanged — STOP via AskUser if any side effect surfaces.',
      contentVi: '① Không triển khai cho đến khi plan tồn tại & được review — kể cả task "đơn giản" (override: user nói "code luôn"). ② BẮT BUỘC scout codebase TRƯỚC khi lập kế hoạch hoặc hỏi làm rõ — báo cáo loại dự án, modules, patterns, docs, plans, contracts. ③ Thu thập 5 yêu cầu CHÍNH XÁC qua AskUser trước plan: output mong đợi, acceptance criteria, scope boundary, ràng buộc bất khả nhân nhượng, touchpoints. ④ Side-effect-free là gate: code-review + tests phải chứng minh không regression, không thêm lỗi lint/type/build, public contracts không đổi — STOP qua AskUser nếu phát hiện side effect.',
    },

    processFlow: [
      { number: 1, titleEn: 'Intent', titleVi: 'Ý định', descEn: 'Detect mode from input (plan path / keywords / explicit flag)', descVi: 'Phát hiện mode từ input (plan path / từ khóa / flag rõ ràng)' },
      { number: 2, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'MANDATORY codebase scan: project type, modules, patterns, docs, plans, contracts (skip only on plan path)', descVi: 'BẮT BUỘC scan codebase: loại dự án, modules, patterns, docs, plans, contracts (chỉ bỏ khi có plan path)' },
      { number: 3, titleEn: 'Summarize', titleVi: 'Tóm tắt', descEn: '3-6 bullet codebase context to user before any clarifying question', descVi: '3-6 gạch đầu dòng tóm tắt codebase cho user trước mọi câu hỏi làm rõ' },
      { number: 4, titleEn: 'Requirements', titleVi: 'Yêu cầu', descEn: 'AskUser loop — 5 exact items: output, acceptance, scope, constraints, touchpoints', descVi: 'AskUser lặp — 5 mục chính xác: output, acceptance, scope, ràng buộc, touchpoints' },
      { number: 5, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'researcher agent (skip in --fast / code mode) → Review Gate', descVi: 'researcher agent (bỏ ở --fast / code mode) → Review Gate' },
      { number: 6, titleEn: 'Plan', titleVi: 'Lập kế hoạch', descEn: 'planner agent → plan.md + phase-XX files → Review Gate', descVi: 'planner agent → plan.md + phase-XX files → Review Gate' },
      { number: 7, titleEn: 'Implement', titleVi: 'Triển khai', descEn: 'Execute phase tasks; conditional simplify via code-simplifier', descVi: 'Thực thi tasks theo phase; simplify có điều kiện qua code-simplifier' },
      { number: 8, titleEn: 'Test', titleVi: 'Test', descEn: 'tester + debugger agents, 100% pass (skip if --no-test) → Review Gate', descVi: 'tester + debugger agents, 100% pass (bỏ nếu --no-test) → Review Gate' },
      { number: 9, titleEn: 'Review', titleVi: 'Review', descEn: 'code-reviewer agent — 5 checks (acceptance, regression, contracts, patterns, lint/type/build); STOP via AskUser if side effect', descVi: 'code-reviewer agent — 5 kiểm tra (acceptance, regression, contracts, patterns, lint/type/build); STOP qua AskUser nếu có side effect' },
      { number: 10, titleEn: 'Finalize', titleVi: 'Hoàn tất', descEn: '/ck:project-management plan sync-back → docs-manager → git-manager → /ck:journal', descVi: '/ck:project-management đồng bộ plan → docs-manager → git-manager → /ck:journal' },
    ],

    corePrinciplesEn: [
      'YAGNI / KISS / DRY — token efficiency, concise reports',
      'Plan-first — no code until plan reviewed (even for "simple" tasks)',
      'Scout-first — scan codebase BEFORE asking questions or planning',
      'Exact requirements — 5 items pinned via AskUser before plan',
      'Verified side-effect-free — code-review + tests prove no regression',
    ],
    corePrinciplesVi: [
      'YAGNI / KISS / DRY — tiết kiệm token, báo cáo súc tích',
      'Plan-first — không code đến khi plan được review (kể cả task "đơn giản")',
      'Scout-first — scan codebase TRƯỚC khi hỏi hay lập kế hoạch',
      'Yêu cầu chính xác — 5 mục được chốt qua AskUser trước plan',
      'Verified side-effect-free — code-review + tests chứng minh không regression',
    ],

    expertiseAreasEn: [
      'Full-stack implementation driven by plan files',
      'Mode auto-detection (interactive / fast / auto / parallel / no-test / code)',
      'Mandatory subagent orchestration (tester, code-reviewer, docs-manager, git-manager)',
      'Touchpoint blast-radius analysis for regression prevention',
      'Plan sync-back via /ck:project-management + journal documentation',
    ],
    expertiseAreasVi: [
      'Triển khai full-stack dẫn dắt bởi plan files',
      'Tự động phát hiện mode (interactive / fast / auto / parallel / no-test / code)',
      'Điều phối subagents bắt buộc (tester, code-reviewer, docs-manager, git-manager)',
      'Phân tích blast-radius touchpoints để phòng regression',
      'Đồng bộ plan qua /ck:project-management + nhật ký kỹ thuật',
    ],

    composableFlagsEn: 'Modes: --interactive (default, user approval each step) · --fast (skip research) · --auto (skip review gates, auto-approve ≥9.5) · --parallel (multi-agent) · --no-test (skip tests, side-effect proof relaxed) · plan-path triggers code mode. --tdd composes with any mode: write tests for current behavior first, verify they still pass post-implementation.',
    composableFlagsVi: 'Modes: --interactive (mặc định, user duyệt mỗi bước) · --fast (bỏ research) · --auto (bỏ review gates, tự duyệt ≥9.5) · --parallel (multi-agent) · --no-test (bỏ tests, side-effect proof nới lỏng) · plan-path kích hoạt code mode. --tdd kết hợp được mọi mode: viết tests cho behavior hiện tại trước, xác minh chúng vẫn pass sau implementation.',

    skillStack: [
      { name: 'tester agent', type: 'agent' },
      { name: 'code-reviewer agent', type: 'agent' },
      { name: 'code-simplifier agent', type: 'agent' },
      { name: 'planner agent', type: 'agent' },
      { name: 'researcher agent', type: 'agent' },
      { name: 'docs-manager agent', type: 'agent' },
      { name: 'git-manager agent', type: 'agent' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:plan', type: 'skill' },
      { name: 'ck:project-management', type: 'skill' },
      { name: 'ck:journal', type: 'skill' },
      { name: 'AskUserQuestion', type: 'tool' },
      { name: 'TaskCreate / TaskUpdate', type: 'tool' },
    ],

    reportOutput: {
      titleEn: 'Implementation Complete',
      titleVi: 'Triển khai hoàn tất',
      patternEn: 'Commits + plan status synced + journal entry',
      patternVi: 'Commits + đồng bộ trạng thái plan + nhật ký',
      descEn: 'Code merged via git-manager • Tests 100% pass • code-reviewer approved (no regression, contracts intact) • plan.md + all phase-XX.md status synced via /ck:project-management • docs updated • /ck:journal entry recorded',
      descVi: 'Code merge qua git-manager • Tests 100% pass • code-reviewer duyệt (không regression, contracts còn nguyên) • plan.md + tất cả phase-XX.md đồng bộ qua /ck:project-management • docs cập nhật • /ck:journal đã ghi',
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
      taglineEn: 'Structured fix pipeline with root cause analysis, side-effect sweep, and prevention. Evidence-based, never silent patch.',
      taglineVi: 'Pipeline sửa lỗi có cấu trúc với phân tích nguyên nhân gốc, quét side-effect, và phòng ngừa. Dựa trên bằng chứng, không bao giờ silent patch.',
    },

    hardGate: {
      type: 'warning',
      titleEn: 'HARD GATES (4)',
      titleVi: 'HARD GATES (4)',
      contentEn: '① No fix until Steps 1-2 (Scout + Diagnose) complete — symptom fixes are failure, 3+ failed attempts must STOP and question architecture. ② Scout-first: collect project type, affected files+callers, related tests, recent commits, existing patterns BEFORE asking clarifying questions. ③ Exact root cause: answer all 6 items in one sentence each — exact symptom, repro steps, expected vs actual, root cause with file:line, why now, blast radius. ④ No side effects: Step 5 must prove symptom gone, blast-radius tests pass, no new lint/type/build errors, public contracts unchanged — STOP and AskUser on any regression.',
      contentVi: '① Không sửa cho đến khi Step 1-2 (Scout + Diagnose) hoàn tất — symptom fix = thất bại, 3+ lần fail phải DỪNG và xét lại kiến trúc. ② Scout-first: thu thập project type, file ảnh hưởng + caller, test liên quan, commit gần đây, pattern hiện có TRƯỚC khi hỏi làm rõ. ③ Exact root cause: trả lời cả 6 mục bằng một câu — symptom chính xác, repro, expected vs actual, root cause kèm file:line, why now, blast radius. ④ No side effects: Step 5 phải chứng minh symptom hết, test blast-radius pass, không lint/type/build error mới, public contract không đổi — DỪNG và AskUser khi có regression.',
    },

    processFlow: [
      { number: 0, titleEn: 'Mode', titleVi: 'Chế độ', descEn: 'AskUser: Autonomous (default) · Review · Quick · Parallel — or pass --auto/--review/--quick/--parallel', descVi: 'AskUser: Autonomous (mặc định) · Review · Quick · Parallel — hoặc truyền --auto/--review/--quick/--parallel' },
      { number: 1, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'MANDATORY — ck:scout or 2-3 parallel Explore: affected files, deps, tests, git log, patterns', descVi: 'BẮT BUỘC — ck:scout hoặc 2-3 Explore song song: file ảnh hưởng, deps, tests, git log, patterns' },
      { number: 2, titleEn: 'Diagnose', titleVi: 'Chẩn đoán', descEn: 'MANDATORY — ck:debug + ck:sequential-thinking, capture pre-fix state, evidence-based RCA, no guessing', descVi: 'BẮT BUỘC — ck:debug + ck:sequential-thinking, capture pre-fix state, RCA dựa bằng chứng, không đoán' },
      { number: 3, titleEn: 'Route', titleVi: 'Định tuyến', descEn: 'Classify Simple/Moderate/Complex/Parallel → workflow + TaskCreate dependency chain (Moderate+)', descVi: 'Phân loại Simple/Moderate/Complex/Parallel → workflow + chuỗi TaskCreate dependency (Moderate+)' },
      { number: 4, titleEn: 'Fix', titleVi: 'Sửa', descEn: 'Implement ROOT CAUSE fix — minimal changes, follow existing patterns', descVi: 'Triển khai sửa NGUYÊN NHÂN GỐC — thay đổi tối thiểu, theo pattern hiện có' },
      { number: 5, titleEn: 'Verify + Prevent', titleVi: 'Xác minh + Phòng ngừa', descEn: 'MANDATORY — re-run exact pre-fix repro, regression test, blast-radius sweep, code-reviewer delegate, prevention gate, parallel typecheck/lint/build/test', descVi: 'BẮT BUỘC — chạy lại đúng repro pre-fix, regression test, quét blast-radius, code-reviewer delegate, prevention gate, song song typecheck/lint/build/test' },
      { number: 6, titleEn: 'Finalize', titleVi: 'Hoàn tất', descEn: 'MANDATORY chain: /ck:project-management → docs-manager → TaskUpdate completed → git-manager (AskUser commit) → /ck:journal', descVi: 'Chuỗi BẮT BUỘC: /ck:project-management → docs-manager → TaskUpdate completed → git-manager (AskUser commit) → /ck:journal' },
    ],

    corePrinciplesEn: [
      'Find root cause, never patch symptoms',
      'Scout BEFORE forming any hypothesis',
      'Evidence-based — no guessing, no "probably"',
      'Side-effect-free or STOP and AskUser',
      '3+ failed attempts = question architecture',
    ],
    corePrinciplesVi: [
      'Tìm nguyên nhân gốc, không vá triệu chứng',
      'Scout TRƯỚC khi hình thành bất kỳ giả thuyết nào',
      'Dựa bằng chứng — không đoán, không "có lẽ"',
      'Không side-effect, nếu có thì DỪNG và AskUser',
      '3+ lần fail = xét lại kiến trúc',
    ],

    expertiseAreasEn: [
      'Structured root cause analysis',
      'Blast-radius mapping & side-effect sweep',
      'Regression test design',
      'Prevention gate / defense-in-depth',
      'Complexity routing (quick/standard/deep/parallel)',
    ],
    expertiseAreasVi: [
      'Phân tích nguyên nhân gốc có cấu trúc',
      'Map blast-radius & quét side-effect',
      'Thiết kế regression test',
      'Prevention gate / defense-in-depth',
      'Định tuyến độ phức tạp (quick/standard/deep/parallel)',
    ],

    skillStack: [
      { name: 'debugger agent', type: 'agent' },
      { name: 'code-reviewer agent', type: 'agent' },
      { name: 'tester agent', type: 'agent' },
      { name: 'fullstack-developer agent', type: 'agent' },
      { name: 'docs-manager agent', type: 'agent' },
      { name: 'git-manager agent', type: 'agent' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:debug', type: 'skill' },
      { name: 'ck:sequential-thinking', type: 'skill' },
      { name: 'ck:problem-solving', type: 'skill' },
      { name: 'ck:project-management', type: 'skill' },
      { name: 'ck:journal', type: 'skill' },
      { name: 'TaskCreate', type: 'tool' },
      { name: 'AskUserQuestion', type: 'tool' },
    ],

    reportOutput: {
      titleEn: 'Bug Fix Report',
      titleVi: 'Báo cáo sửa lỗi',
      patternEn: 'Step markers + confidence score + journal entry',
      patternVi: 'Step markers + điểm confidence + nhật ký kỹ thuật',
      descEn: 'Root cause cited file:line • Fix targeted • Regression test added • Blast-radius swept • Prevention guards in place • Plan/tasks synced • Docs updated • Journal recorded',
      descVi: 'Root cause kèm file:line • Fix đúng đích • Regression test thêm • Quét blast-radius • Prevention guard đặt chỗ • Plan/task đồng bộ • Docs cập nhật • Nhật ký ghi lại',
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
