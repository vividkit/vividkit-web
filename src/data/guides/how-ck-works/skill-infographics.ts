// Skill infographic data for the how-ck-works guide
// One-page visual summaries matching the design from reference images
// v1 MVP: brainstorm, plan, cook, fix, team

import type { SkillInfographic } from './workflow-visualizer-types';
import { additionalSkillInfographics } from './skill-infographics-additional';

const coreSkillInfographics: SkillInfographic[] = [
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
      titleEn: 'HARD GATES (4)',
      titleVi: 'HARD GATES (4)',
      contentEn: '① No implementation until design is presented & user approves. ② Scout codebase BEFORE asking any clarifying question (project type, modules, patterns, docs, plans, constraints). ③ Discovery must extract EXACT requirements — expected output, acceptance criteria, scope boundary, non-negotiable constraints, touchpoints. Loop until concrete. ④ Present before ask — write options, trade-offs & recommendation in visible text BEFORE any AskUserQuestion (extended thinking is invisible to the user).',
      contentVi: '① Không triển khai cho đến khi design được trình bày & user duyệt. ② BẮT BUỘC scout codebase TRƯỚC mọi câu hỏi làm rõ (loại dự án, modules, patterns, docs, plans, ràng buộc). ③ Discovery phải trích xuất yêu cầu CHÍNH XÁC — output mong đợi, acceptance criteria, scope boundary, ràng buộc bất khả nhân nhượng, touchpoints. Lặp đến khi cụ thể. ④ Trình bày trước khi hỏi — viết options, trade-off & khuyến nghị trong text hiển thị TRƯỚC mọi AskUserQuestion (extended thinking user không thấy).',
    },

    processFlow: [
      { number: 1, titleEn: 'Scout', titleVi: 'Khảo sát', descEn: 'MANDATORY first step — map project type, modules, patterns, docs, plans', descVi: 'BẮT BUỘC trước tiên — xác định loại dự án, modules, patterns, docs, plans' },
      { number: 2, titleEn: 'Discover', titleVi: 'Khám phá', descEn: 'AskUser loop — extract 5 exact items: output, acceptance, scope, constraints, touchpoints', descVi: 'AskUser lặp — trích 5 mục: output, acceptance, scope, ràng buộc, touchpoints' },
      { number: 3, titleEn: 'Scope', titleVi: 'Phạm vi', descEn: 'Decompose if 3+ independent subsystems', descVi: 'Phân tách nếu 3+ subsystem độc lập' },
      { number: 4, titleEn: 'Research', titleVi: 'Nghiên cứu', descEn: 'planner agent + WebSearch + docs-seeker', descVi: 'planner agent + WebSearch + docs-seeker' },
      { number: 5, titleEn: 'Analyze', titleVi: 'Phân tích', descEn: 'Evaluate 2-3 approaches with pros/cons via YAGNI/KISS/DRY', descVi: 'Đánh giá 2-3 hướng với pros/cons theo YAGNI/KISS/DRY' },
      { number: 6, titleEn: 'Debate', titleVi: 'Tranh luận', descEn: 'Brutal honesty — challenge assumptions, present options', descVi: 'Brutal honesty — thách thức giả định, trình bày options' },
      { number: 7, titleEn: 'Consensus', titleVi: 'Đồng thuận', descEn: 'Align on chosen approach', descVi: 'Thống nhất hướng đi' },
      { number: 8, titleEn: 'Report', titleVi: 'Báo cáo', descEn: 'Markdown summary via ck:project-organization (+ HTML report when --html)', descVi: 'Báo cáo markdown qua ck:project-organization (+ HTML report khi --html)' },
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

    outputFlags: [
      {
        flag: '--html',
        titleEn: 'Editorial HTML report',
        titleVi: 'Report HTML editorial',
        descEn: 'After the markdown report, also write a self-contained editorial-magazine HTML report (same directory & stem).',
        descVi: 'Sau report markdown, viết thêm report HTML editorial-magazine self-contained (cùng thư mục & tên gốc).',
        exampleCommand: '/ck:brainstorm --html Compare auth approaches for our SaaS app',
      },
      {
        flag: '--wiki',
        titleEn: 'Publish to AgentWiki',
        titleVi: 'Publish lên AgentWiki',
        descEn: 'After local reports exist, publish markdown + HTML via agentwiki CLI or MCP. Skips cleanly when unavailable.',
        descVi: 'Sau khi report local đã có, publish markdown + HTML qua agentwiki CLI hoặc MCP. Nếu không khả dụng thì tự bỏ qua bước publish (không làm fail brainstorm).',
        exampleCommand: '/ck:brainstorm --html --wiki Compare auth approaches for our SaaS app',
      },
    ],

    promptExamples: [
      {
        labelEn: 'Start brainstorm',
        labelVi: 'Start brainstorm',
        command: '/ck:brainstorm Choose the best auth approach for our current SaaS app',
        whenEn: 'The direction is unclear and needs repo scouting plus trade-off debate first.',
        whenVi: 'Hướng làm còn mơ hồ, cần scout repo và tranh luận trade-off trước.',
        expectedEn: 'Writes the report at plans/reports/brainstorm-260524-1908-auth-approach.md.',
        expectedVi: 'Viết report tại plans/reports/brainstorm-260524-1908-auth-approach.md.',
      },
      {
        labelEn: 'Same session',
        labelVi: 'Cùng session',
        command: '/ck:plan Create an implementation plan for the auth approach we selected in brainstorm, using the report just created as context',
        whenEn: 'You are still inside the brainstorm session and the agent just wrote the report.',
        whenVi: 'Vẫn đang ở session brainstorm và agent vừa tạo report.',
        expectedEn: 'Plan uses current context plus the report path handed off by brainstorm.',
        expectedVi: 'Plan dùng context hiện tại cùng path report đã được bàn giao.',
      },
      {
        labelEn: 'Fresh session',
        labelVi: 'Session mới',
        command: '/ck:plan plans/reports/brainstorm-260524-1908-auth-approach.md',
        whenEn: 'After a long brainstorm, start a fresh session to avoid context bloat.',
        whenVi: 'Sau brainstorm dài, nên start session mới để tránh đầy context.',
        expectedEn: 'Mention the file path so plan reads the correct brainstorm artifact.',
        expectedVi: 'Phải mention file path để plan đọc đúng brainstorm artifact.',
        recommended: true,
      },
    ],
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

    outputFlags: [
      {
        flag: '--html',
        titleEn: 'Interactive HTML plan',
        titleVi: 'Plan HTML tương tác',
        descEn: 'Self-contained editorial plan.html — phase outlines, full-markdown detail modals, optional watercolor sketches. Generated AFTER red-team & validate so it reflects the final reviewed plan.',
        descVi: 'plan.html editorial self-contained — outline phases, modal chi tiết full-markdown, sketch watercolor tùy chọn. Tạo SAU red-team & validate để phản ánh plan đã review cuối cùng.',
        exampleCommand: '/ck:plan --html Redesign checkout flow to reduce payment failures',
      },
      {
        flag: '--github',
        titleEn: 'Create GitHub issue',
        titleVi: 'Tạo GitHub issue',
        descEn: 'After validation, create/update a GitHub issue with branch, summary, repo-relative plan links, open questions, acceptance criteria, and the `ready to review` label.',
        descVi: 'Sau validate, tạo/cập nhật GitHub issue với branch, tóm tắt, link plan repo-relative, open questions, acceptance criteria, và label `ready to review`.',
        exampleCommand: '/ck:plan --github Redesign checkout flow to reduce payment failures',
      },
      {
        flag: '--wiki',
        titleEn: 'Publish to AgentWiki',
        titleVi: 'Publish lên AgentWiki',
        descEn: 'Publish the final reviewed plan docs or plan.html to AgentWiki via CLI or MCP when available. Skips cleanly (never blocks plan creation) when unavailable.',
        descVi: 'Publish plan docs đã review cuối hoặc plan.html lên AgentWiki qua CLI hoặc MCP khi khả dụng. Nếu không khả dụng thì tự bỏ qua bước publish (không chặn việc tạo plan).',
        exampleCommand: '/ck:plan --html --wiki Redesign checkout flow to reduce payment failures',
      },
    ],

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

    promptExamples: [
      {
        labelEn: '--auto (default)',
        labelVi: '--auto (mặc định)',
        command: '/ck:plan Redesign checkout flow to reduce payment failures',
        whenEn: 'The brief is clear, but the right planning depth is not obvious.',
        whenVi: 'Brief đã đủ rõ, nhưng chưa chắc nên dùng fast, hard hay deep.',
        expectedEn: 'The agent chooses research, validation, and red-team depth by risk.',
        expectedVi: 'Agent tự chọn mức research, validate, red-team theo rủi ro.',
        recommended: true,
      },
      {
        labelEn: '--fast',
        labelVi: '--fast',
        command: '/ck:plan --fast Change the CTA copy in the Pricing section',
        whenEn: 'The task is small, low-dependency, and easy to roll back.',
        whenVi: 'Việc nhỏ, ít dependency, rollback dễ.',
        expectedEn: 'A quick plan without heavy research, red-team, or validation.',
        expectedVi: 'Ra plan nhanh, bỏ research/red-team/validate nặng.',
      },
      {
        labelEn: '--hard',
        labelVi: '--hard',
        command: '/ck:plan --hard Refactor auth flow while preserving backward compatibility',
        whenEn: 'There are real technical constraints, but not a per-phase deep refactor.',
        whenVi: 'Nhiều ràng buộc kỹ thuật, nhưng chưa cần deep theo từng phase.',
        expectedEn: 'Research and red-team catch architectural risk early.',
        expectedVi: 'Có research và red-team để bắt rủi ro kiến trúc sớm.',
      },
      {
        labelEn: '--deep',
        labelVi: '--deep',
        command: '/ck:plan --deep Split billing into subscription, invoice, webhook modules',
        whenEn: 'The refactor is large, dependency-heavy, and touches multiple modules.',
        whenVi: 'Refactor lớn, nhiều dependency, tác động nhiều module.',
        expectedEn: 'Deeper research, stronger validation, and evidence-backed phases.',
        expectedVi: 'Research sâu hơn, validate rõ hơn, phase có bằng chứng hơn.',
      },
      {
        labelEn: '--parallel',
        labelVi: '--parallel',
        command: '/ck:plan --parallel Optimize dashboard loading and chart rendering',
        whenEn: 'The work can be split into independent tracks.',
        whenVi: 'Có thể chia thành nhiều nhánh độc lập chạy song song.',
        expectedEn: 'Clear boundaries that can be handed to cook with --parallel.',
        expectedVi: 'Plan giữ boundary rõ để handoff sang cook với --parallel.',
      },
      {
        labelEn: '--two',
        labelVi: '--two',
        command: '/ck:plan --two Choose an offline-first data sync architecture',
        whenEn: 'Two approaches must be compared before committing to a plan.',
        whenVi: 'Cần so sánh hai hướng tiếp cận trước khi chốt plan.',
        expectedEn: 'Both approaches are analyzed first, then one direction is selected.',
        expectedVi: 'Hai phương án được phân tích trước, rồi mới chọn hướng triển khai.',
      },
      {
        labelEn: '--deep --tdd',
        labelVi: '--deep --tdd',
        command: '/ck:plan --deep --tdd Refactor the billing module',
        whenEn: 'Major refactor or logic with important contracts.',
        whenVi: '--deep --tdd là combo chính cho major refactor hoặc logic có contract quan trọng.',
        expectedEn: 'Tests-first structure added to each phase with deep research.',
        expectedVi: 'Cấu trúc tests-first thêm vào từng phase với research sâu.',
        recommended: true,
      },
      {
        labelEn: '--fast --no-tasks',
        labelVi: '--fast --no-tasks',
        command: '/ck:plan --fast --no-tasks Update guide copy',
        whenEn: 'Best for small or docs-only plans where extra task creation is not needed yet.',
        whenVi: 'Hợp với plan nhỏ hoặc docs-only, khi chưa muốn sinh task phụ.',
        expectedEn: 'Quick plan without Claude Tasks creation.',
        expectedVi: 'Plan nhanh không tạo Claude Tasks.',
      },
      // Extra flag card prompt examples — used by infographic-plan-quick-ref.astro flag cards
      {
        labelEn: 'flag-tdd',
        labelVi: 'flag-tdd',
        command: '/ck:plan --deep --tdd Refactor billing module',
        whenEn: '--deep --tdd is the main combo for major refactors or logic with important contracts.',
        whenVi: '--deep --tdd là combo chính cho major refactor hoặc logic có contract quan trọng.',
        expectedEn: 'Tests-first structure added to each phase.',
        expectedVi: 'Cấu trúc tests-first thêm vào từng phase.',
      },
      {
        labelEn: 'flag-no-tasks',
        labelVi: 'flag-no-tasks',
        command: '/ck:plan --fast --no-tasks Update guide copy',
        whenEn: 'Best for small or docs-only plans where extra task creation is not needed yet.',
        whenVi: 'Hợp với plan nhỏ hoặc docs-only, khi chưa muốn sinh task phụ.',
        expectedEn: 'Quick plan without Claude Tasks creation.',
        expectedVi: 'Plan nhanh không tạo Claude Tasks.',
      },
      // tddCombo entries — used by infographic-plan-quick-ref.astro tdd combos section
      {
        labelEn: 'combo-hard-tdd',
        labelVi: 'combo-hard-tdd',
        command: '--hard --tdd',
        whenEn: 'Use when the task is complex but not a major multi-area refactor.',
        whenVi: 'Khi task phức tạp nhưng chưa phải major refactor nhiều area.',
        expectedEn: 'Complex, needs research',
        expectedVi: 'Complex, cần research',
      },
      {
        labelEn: 'combo-deep-tdd',
        labelVi: 'combo-deep-tdd',
        command: '--deep --tdd',
        whenEn: 'Use for large refactors, 5+ areas, architectural debt, or per-phase scouting.',
        whenVi: 'Dùng khi refactor lớn, 5+ areas, architectural debt, hoặc cần per-phase scouting.',
        expectedEn: 'Recommended for risky refactors',
        expectedVi: 'Khuyến nghị cho refactor rủi ro',
        recommended: true,
      },
      {
        labelEn: 'combo-parallel-tdd',
        labelVi: 'combo-parallel-tdd',
        command: '--parallel --tdd',
        whenEn: 'Use only when independent workstreams can run in parallel and each lane still needs test gates.',
        whenVi: 'Chỉ dùng khi có nhiều workstream độc lập và mỗi lane vẫn cần test gate.',
        expectedEn: 'Niche: parallel + tests-first',
        expectedVi: 'Niche: song song + tests-first',
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

    composableFlagsEn: 'Modes: --interactive (default, user approval each step) · --fast (skip research) · --auto (auto-approve low-risk artifact-validated steps; high-risk changes stop for human approval before finalize/commit/ship) · --parallel (multi-agent) · --no-test (skip tests, side-effect proof relaxed) · plan-path triggers code mode. --tdd composes with any mode: write tests for current behavior first, verify they still pass post-implementation.',
    composableFlagsVi: 'Modes: --interactive (mặc định, user duyệt mỗi bước) · --fast (bỏ research) · --auto (tự duyệt các bước low-risk đã qua artifact validation; thay đổi high-risk dừng để human duyệt trước finalize/commit/ship) · --parallel (multi-agent) · --no-test (bỏ tests, side-effect proof nới lỏng) · plan-path kích hoạt code mode. --tdd kết hợp được mọi mode: viết tests cho behavior hiện tại trước, xác minh chúng vẫn pass sau implementation.',

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

    promptExamples: [
      {
        labelEn: 'Plan path',
        labelVi: 'Plan path',
        command: '/ck:cook /abs/plans/260524-auth/plan.md',
        whenEn: 'A plan.md and phase files already exist.',
        whenVi: 'Đã có plan.md và phase files.',
        expectedEn: 'Uses plan context instead of rediscovering the task.',
        expectedVi: 'Dùng context trong plan, không hỏi lại từ đầu.',
        recommended: true,
      },
      {
        labelEn: 'Feature brief',
        labelVi: 'Feature brief',
        command: '/ck:cook Add email/password login with httpOnly session',
        whenEn: 'No plan exists, but the desired output is clear.',
        whenVi: 'Chưa có plan nhưng output mong muốn rõ.',
        expectedEn: 'Scout -> 5 requirements -> research/plan -> implement.',
        expectedVi: 'Scout -> 5 requirements -> research/plan -> implement.',
      },
      {
        labelEn: '--tdd',
        labelVi: '--tdd',
        command: '/ck:cook --tdd Refactor billing calculation while preserving behavior',
        whenEn: 'Refactor or critical logic.',
        whenVi: 'Refactor hoặc logic quan trọng.',
        expectedEn: 'Tests current behavior first, then verifies after implementation.',
        expectedVi: 'Tests cho behavior hiện tại trước, verify lại sau implement.',
      },
    ],
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
      { number: 5, titleEn: 'Verify + Prevent', titleVi: 'Xác minh + Phòng ngừa', descEn: 'MANDATORY — re-run exact pre-fix repro, regression test, blast-radius sweep, code-reviewer delegate, artifact gate (workflow-artifact-gate.cjs --stage finalize), prevention gate, parallel typecheck/lint/build/test', descVi: 'BẮT BUỘC — chạy lại đúng repro pre-fix, regression test, quét blast-radius, code-reviewer delegate, artifact gate (workflow-artifact-gate.cjs --stage finalize), prevention gate, song song typecheck/lint/build/test' },
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

    promptExamples: [
      {
        labelEn: 'Standard bug',
        labelVi: 'Standard bug',
        command: '/ck:fix Login submit returns 500 in local dev',
        whenEn: 'Let the agent choose mode and scout the repo.',
        whenVi: 'Cần agent tự chọn mode và scout repo.',
        expectedEn: 'Mode -> Scout -> Diagnose -> Root-cause fix -> Verify.',
        expectedVi: 'Mode -> Scout -> Diagnose -> Root cause fix -> Verify.',
        recommended: true,
      },
      {
        labelEn: 'High risk',
        labelVi: 'High risk',
        command: '/ck:fix --review Payment webhook double-charges paid orders',
        whenEn: 'You want a user gate at every step.',
        whenVi: 'Muốn dừng user gate ở mỗi step.',
        expectedEn: 'No finalize/commit before user approval.',
        expectedVi: 'Không finalize/commit trước khi user duyệt.',
      },
      {
        labelEn: 'CI failure',
        labelVi: 'CI failure',
        command: '/ck:fix --quick npm run build fails after latest merge',
        whenEn: 'Build/type/lint failure appears small.',
        whenVi: 'Lỗi build/type/lint có dấu hiệu nhỏ.',
        expectedEn: 'Fast repair while rerunning the exact failing command.',
        expectedVi: 'Fix nhanh nhưng vẫn rerun exact failing command.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:team — Agent Teams Multi-Session Orchestrator
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'team',
    command: '/ck:team',
    kit: 'engineer',

    header: {
      titleEn: '/ck:team',
      titleVi: '/ck:team',
      taglineEn: 'Multi-session orchestration engine — spawn N independent Claude Code teammates in parallel for research, cook, review, or debug. Each teammate has its own context window.',
      taglineVi: 'Engine điều phối đa session — spawn N teammate Claude Code độc lập song song cho research, cook, review, hoặc debug. Mỗi teammate có context window riêng.',
    },

    hardGate: {
      type: 'critical',
      titleEn: 'HARD GATES (3)',
      titleVi: 'HARD GATES (3)',
      contentEn: '① Pre-flight TeamCreate-first — Step 2 of every template calls TeamCreate without pre-checking the tool exists. Success → continue. Error or unrecognized tool → STOP and tell user the env flag is missing. NO fallback to subagents under any circumstance. ② Env + terminal lock — CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 must be set in settings.json env, AND must run in a CLI terminal (Task/Team tools are disabled in the VSCode extension via isTTY check). ③ Model lock — all teammates MUST run Opus 4.6; no other model is allowed for Agent Teams teammates.',
      contentVi: '① Pre-flight TeamCreate-first — Step 2 của mọi template gọi TeamCreate không pre-check tool tồn tại. Success → continue. Error hoặc tool không nhận diện → DỪNG và báo user env flag thiếu. KHÔNG fallback sang subagent trong mọi trường hợp. ② Env + terminal lock — phải set CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 trong env của settings.json, VÀ phải chạy trong CLI terminal (tool Task/Team bị disable trong extension VSCode qua isTTY check). ③ Model lock — mọi teammate BẮT BUỘC dùng Opus 4.6; không model khác cho teammate của Agent Teams.',
    },

    processFlow: [
      { number: 1, titleEn: 'Invoke', titleVi: 'Gọi', descEn: '/ck:team <template> <context> [flags] — pick research / cook / review / debug + optional --devs/--researchers/--reviewers/--debuggers N, --delegate, --worktree', descVi: '/ck:team <template> <context> [flags] — chọn research / cook / review / debug + flag tuỳ chọn --devs/--researchers/--reviewers/--debuggers N, --delegate, --worktree' },
      { number: 2, titleEn: 'Pre-flight', titleVi: 'Tiền kiểm', descEn: 'MANDATORY — call TeamCreate(team_name) directly; success continues, error ABORTS (no subagent fallback). Env flag + CLI terminal + Opus 4.6 must all hold', descVi: 'BẮT BUỘC — gọi thẳng TeamCreate(team_name); success thì tiếp, error thì ABORT (không fallback subagent). Env flag + CLI terminal + Opus 4.6 đều phải đúng' },
      { number: 3, titleEn: 'Derive N', titleVi: 'Tách N', descEn: 'Split input into N independent work items (default N=3) — angles (research) / file-owned tasks + tester blocker (cook) / focuses (review) / competing hypotheses (debug). TaskCreate × N', descVi: 'Tách input thành N work item độc lập (mặc định N=3) — angles (research) / task có file ownership + tester blocker (cook) / focuses (review) / giả thuyết cạnh tranh (debug). TaskCreate × N' },
      { number: 4, titleEn: 'Spawn', titleVi: 'Spawn', descEn: 'Agent tool × N in parallel — model: opus, run_in_background: true, isolation: worktree (cook devs only). Each prompt includes the mandatory CK Context Block', descVi: 'Agent tool × N song song — model: opus, run_in_background: true, isolation: worktree (chỉ cho cook dev). Mỗi prompt có CK Context Block bắt buộc' },
      { number: 5, titleEn: 'Coordinate', titleVi: 'Điều phối', descEn: 'React to TaskCompleted / TeammateIdle hook events (60s TaskList fallback). Teammates DM each other via SendMessage — adversarial in debug, lead-routed in cook', descVi: 'Phản ứng theo hook TaskCompleted / TeammateIdle (fallback 60s qua TaskList). Teammate DM nhau qua SendMessage — adversarial trong debug, routed qua lead trong cook' },
      { number: 6, titleEn: 'Synthesize', titleVi: 'Tổng hợp', descEn: 'Lead reads all reports. research → research-summary-<slug>.md. cook → git merge --no-ff worktree branches sequentially + MANDATORY Docs impact eval. review → dedupe + prioritize CRITICAL/IMPORTANT/MODERATE. debug → surviving theory = root cause', descVi: 'Lead đọc mọi report. research → research-summary-<slug>.md. cook → git merge --no-ff branch worktree tuần tự + BẮT BUỘC eval Docs impact. review → dedupe + ưu tiên CRITICAL/IMPORTANT/MODERATE. debug → giả thuyết còn sống = root cause' },
      { number: 7, titleEn: 'Shutdown', titleVi: 'Đóng', descEn: 'SendMessage(shutdown_request) × N → TeamDelete (NO params) → /ck:journal → report to user. Agent memory at $HOME/.claude/agent-memory/<name>/ persists separately', descVi: 'SendMessage(shutdown_request) × N → TeamDelete (KHÔNG params) → /ck:journal → báo user. Agent memory ở $HOME/.claude/agent-memory/<name>/ tồn tại độc lập' },
    ],

    corePrinciplesEn: [
      'TeamCreate-first — NEVER fall back to subagents on failure',
      'File ownership boundaries — devs must not overlap on cook tasks',
      'CK Context Block in EVERY spawn prompt — teammates need it to find reports/plans',
      'Refer to teammates by NAME (not agent ID) in recipient + owner fields',
      'Adversarial in debug — let competing hypotheses converge by mutual disproof',
    ],
    corePrinciplesVi: [
      'TeamCreate-first — KHÔNG fallback subagent khi fail',
      'File ownership boundaries — dev không được trùng nhau trong cook tasks',
      'CK Context Block trong MỌI spawn prompt — teammate cần để tìm reports/plans',
      'Gọi teammate bằng NAME (không phải agent ID) ở field recipient + owner',
      'Adversarial trong debug — để các giả thuyết cạnh tranh hội tụ bằng mutual disproof',
    ],

    expertiseAreasEn: [
      'Multi-session parallel orchestration with own context per teammate',
      'Worktree isolation for safe parallel code editing (cook --worktree)',
      'Event-driven coordination via TaskCompleted / TeammateIdle hooks',
      'Inter-agent messaging (DM + broadcast + shutdown + plan approval)',
      'Per-template synthesis: summary / merge+docs / severity-dedupe / root-cause',
    ],
    expertiseAreasVi: [
      'Điều phối đa session song song với context riêng cho mỗi teammate',
      'Worktree isolation để sửa code song song an toàn (cook --worktree)',
      'Điều phối theo sự kiện qua hook TaskCompleted / TeammateIdle',
      'Messaging giữa agent (DM + broadcast + shutdown + plan approval)',
      'Synthesis theo template: summary / merge+docs / severity-dedupe / root-cause',
    ],

    specialOperations: [
      {
        id: 'tpl-research',
        titleEn: 'research <topic>',
        titleVi: 'research <topic>',
        descEn: 'Wraps /ck:research. Default 3 angles — architecture & patterns / alternatives & trade-offs / risks & failure modes. Output: research-summary-<slug>.md.',
        descVi: 'Wrap /ck:research. Mặc định 3 góc — architecture & patterns / alternatives & trade-offs / risks & failure modes. Output: research-summary-<slug>.md.',
        color: 'sky',
      },
      {
        id: 'tpl-cook',
        titleEn: 'cook <plan-or-desc>',
        titleVi: 'cook <plan-or-desc>',
        descEn: 'Wraps /ck:cook. Default 4 devs (worktree-isolated) + 1 tester blocked on devs. Lead merges branches sequentially + MANDATORY docs sync eval.',
        descVi: 'Wrap /ck:cook. Mặc định 4 dev (worktree-isolated) + 1 tester chặn theo dev. Lead merge branch tuần tự + BẮT BUỘC eval docs sync.',
        color: 'amber',
      },
      {
        id: 'tpl-review',
        titleEn: 'review <scope>',
        titleVi: 'review <scope>',
        descEn: 'Wraps /ck:code-review. Default 3 focuses — security (OWASP) / performance / test coverage. Output: severity-rated dedupe in review-<slug>.md.',
        descVi: 'Wrap /ck:code-review. Mặc định 3 focus — security (OWASP) / performance / test coverage. Output: dedupe theo severity trong review-<slug>.md.',
        color: 'violet',
      },
      {
        id: 'tpl-debug',
        titleEn: 'debug <issue>',
        titleVi: 'debug <issue>',
        descEn: 'Wraps /ck:fix. Default 3 competing hypotheses — debuggers DM each other to disprove peers. Surviving theory = root cause in debug-<slug>.md.',
        descVi: 'Wrap /ck:fix. Mặc định 3 giả thuyết cạnh tranh — debugger DM nhau để disprove. Giả thuyết còn sống = root cause trong debug-<slug>.md.',
        color: 'rose',
      },
    ],

    skillStack: [
      { name: 'researcher agent', type: 'agent' },
      { name: 'fullstack-developer agent', type: 'agent' },
      { name: 'code-reviewer agent', type: 'agent' },
      { name: 'debugger agent', type: 'agent' },
      { name: 'tester agent', type: 'agent' },
      { name: 'ck:research', type: 'skill' },
      { name: 'ck:cook', type: 'skill' },
      { name: 'ck:code-review', type: 'skill' },
      { name: 'ck:fix', type: 'skill' },
      { name: 'ck:journal', type: 'skill' },
      { name: 'TeamCreate', type: 'tool' },
      { name: 'TeamDelete', type: 'tool' },
      { name: 'TaskCreate', type: 'tool' },
      { name: 'TaskUpdate', type: 'tool' },
      { name: 'Agent', type: 'tool' },
      { name: 'SendMessage', type: 'tool' },
    ],

    reportOutput: {
      titleEn: 'Per-Template Report',
      titleVi: 'Report theo Template',
      patternEn: 'research-summary / cook merge+docs / review-<slug> / debug-<slug>.md',
      patternVi: 'research-summary / cook merge+docs / review-<slug> / debug-<slug>.md',
      locationEn: 'plans/reports/',
      locationVi: 'plans/reports/',
      descEn: 'research → exec summary + comparative analysis + recommendations • cook → merged branches + Docs impact eval + test results • review → severity-dedupe + action items • debug → root cause + evidence chain + disproven hypotheses • All templates close with /ck:journal',
      descVi: 'research → exec summary + comparative analysis + recommendations • cook → branch đã merge + eval Docs impact + kết quả test • review → dedupe theo severity + action items • debug → root cause + evidence chain + giả thuyết đã disproven • Mọi template đều đóng bằng /ck:journal',
    },

    promptExamples: [
      {
        labelEn: 'Research team',
        labelVi: 'Research team',
        command: '/ck:team --research "Evaluate three caching strategies for our API gateway"',
        whenEn: 'Need parallel perspectives from multiple researchers before deciding.',
        whenVi: 'Cần góc nhìn song song từ nhiều researcher trước khi quyết.',
        expectedEn: 'N researchers explore independently, lead synthesizes a comparison report.',
        expectedVi: 'N researcher khám phá độc lập, lead tổng hợp report so sánh.',
        recommended: true,
      },
      {
        labelEn: 'Implementation team',
        labelVi: 'Implementation team',
        command: '/ck:team --cook "Implement auth, dashboard, and notification modules"',
        whenEn: 'Multiple independent features with clear file ownership boundaries.',
        whenVi: 'Nhiều feature độc lập với boundary sở hữu file rõ ràng.',
        expectedEn: 'Parallel implementation agents with distinct file ownership, merged by lead.',
        expectedVi: 'Agent triển khai song song với file ownership riêng, lead merge.',
      },
      {
        labelEn: 'Review team',
        labelVi: 'Review team',
        command: '/ck:team --review "Audit the payment module for security and correctness"',
        whenEn: 'High-risk code needs adversarial review from multiple angles.',
        whenVi: 'Code high-risk cần adversarial review từ nhiều góc.',
        expectedEn: 'Independent reviewers, each with a different lens, synthesized by lead.',
        expectedVi: 'Reviewer độc lập, mỗi người một góc nhìn, lead tổng hợp.',
      },
      {
        labelEn: 'Debug team',
        labelVi: 'Debug team',
        command: '/ck:team --debug "Investigate intermittent 502 errors in production API"',
        whenEn: 'Complex bug requiring parallel investigation tracks.',
        whenVi: 'Bug phức tạp cần nhiều track điều tra song song.',
        expectedEn: 'Multiple debugger agents investigate different hypotheses concurrently.',
        expectedVi: 'Nhiều debugger agent điều tra các giả thuyết khác nhau đồng thời.',
      },
      // Template card prompts — used by infographic-team-quick-ref.astro template cards
      {
        labelEn: 'tpl-research',
        labelVi: 'tpl-research',
        command: '/ck:team research Compare auth strategies for our SaaS app',
        whenEn: 'Architecture decisions, technology evaluation, multi-angle investigation.',
        whenVi: 'Quyết định kiến trúc, đánh giá công nghệ, khảo sát đa góc.',
        expectedEn: 'research-summary-<slug>.md — exec summary, comparative analysis, recommendations.',
        expectedVi: 'research-summary-<slug>.md — exec summary, comparative analysis, recommendations.',
      },
      {
        labelEn: 'tpl-cook',
        labelVi: 'tpl-cook',
        command: '/ck:team cook plans/.../plan.md --devs 4 --worktree',
        whenEn: 'Multi-file feature implementation with parallel devs in isolated worktrees.',
        whenVi: 'Triển khai feature nhiều file với dev song song trong worktree riêng.',
        expectedEn: 'Merged branches via git merge --no-ff + MANDATORY docs sync eval + test results.',
        expectedVi: 'Branch merge qua git merge --no-ff + BẮT BUỘC eval docs sync + kết quả test.',
      },
      {
        labelEn: 'tpl-review',
        labelVi: 'tpl-review',
        command: '/ck:team review src/api --reviewers 3',
        whenEn: 'Pre-merge review with security, performance, and test-coverage lanes in parallel.',
        whenVi: 'Review trước merge với lane song song: security, performance, test coverage.',
        expectedEn: 'review-<slug>.md — severity-dedupe (CRITICAL / IMPORTANT / MODERATE) + action items.',
        expectedVi: 'review-<slug>.md — dedupe theo severity (CRITICAL / IMPORTANT / MODERATE) + action items.',
      },
      {
        labelEn: 'tpl-debug',
        labelVi: 'tpl-debug',
        command: '/ck:team debug "Webhook returns 500 intermittently" --debuggers 3',
        whenEn: 'Hard-to-reproduce bugs where you want adversarial disproof to converge on root cause.',
        whenVi: 'Bug khó reproduce, muốn dùng disproof đối kháng để hội tụ về root cause.',
        expectedEn: 'debug-<slug>.md — root cause + evidence chain + disproven hypotheses.',
        expectedVi: 'debug-<slug>.md — root cause + evidence chain + giả thuyết đã disproven.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:preview — Visual Explanations & File Viewer
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'preview',
    command: '/ck:preview',
    kit: 'engineer',

    header: {
      titleEn: '/ck:preview',
      titleVi: '/ck:preview',
      taglineEn: 'View files or generate visual explanations, diagrams, and slide decks — in the browser or as a self-contained HTML page. A read/visualize utility that never modifies code.',
      taglineVi: 'Xem file hoặc tạo giải thích trực quan, sơ đồ, và slide deck — trên browser hoặc dưới dạng trang HTML độc lập. Utility đọc/trực quan hóa, không sửa code.',
    },

    hardGate: {
      type: 'info',
      titleEn: 'FLAG COMBINATION RULES',
      titleVi: 'LUẬT KẾT HỢP FLAG',
      contentEn: 'Two input shapes: a file path (view/walkthrough) OR a generate flag + topic. --html composes with ANY generate flag (--explain / --diagram / --slides / --ascii) to emit a self-contained browser page — no dev server. The review flags --diff [ref], --plan-review [plan-file], and --recap [timeframe] imply --html (auto-enabled, so --html is optional). Output saves to the active plan folder ({plan_dir}/visuals/) or falls back to plans/visuals/.',
      contentVi: 'Hai dạng input: một file path (view/walkthrough) HOẶC generate flag + topic. --html kết hợp với BẤT KỲ generate flag nào (--explain / --diagram / --slides / --ascii) để xuất trang browser độc lập — không cần dev server. Các review flag --diff [ref], --plan-review [plan-file], và --recap [timeframe] tự bật --html (nên --html là optional). Output lưu vào thư mục plan active ({plan_dir}/visuals/) hoặc fallback plans/visuals/.',
    },

    processFlow: [
      { number: 1, titleEn: 'Input', titleVi: 'Đầu vào', descEn: 'A file path, or a generate flag + topic (add --html for a browser page)', descVi: 'Một file path, hoặc generate flag + topic (thêm --html để có trang browser)' },
      { number: 2, titleEn: 'Plan Context', titleVi: 'Plan Context', descEn: 'Hook injects active plan — visuals save to {plan_dir}/visuals/ (fallback plans/visuals/)', descVi: 'Hook inject plan active — visuals lưu vào {plan_dir}/visuals/ (fallback plans/visuals/)' },
      { number: 3, titleEn: 'Route', titleVi: 'Định tuyến', descEn: 'Path → file preview/walkthrough · Topic → pick explain/diagram/slides/ascii', descVi: 'Path → file preview/walkthrough · Topic → chọn explain/diagram/slides/ascii' },
      { number: 4, titleEn: 'Generate', titleVi: 'Tạo', descEn: 'Build prose + ASCII + Mermaid (mermaidjs-v11 syntax); tech-graph for publish-grade SVG/PNG', descVi: 'Dựng prose + ASCII + Mermaid (cú pháp mermaidjs-v11); tech-graph cho SVG/PNG cấp publish' },
      { number: 5, titleEn: 'Output', titleVi: 'Kết quả', descEn: 'Markdown auto-opens in browser (Mermaid live) · --html = self-contained shareable page', descVi: 'Markdown tự mở trên browser (Mermaid live) · --html = trang độc lập dễ chia sẻ' },
    ],

    corePrinciplesEn: [
      'Read/visualize only — never modifies code',
      '--html is self-contained — opens in any browser, no server',
      'Markdown mode renders Mermaid live via markdown-novel-viewer',
      'Visuals colocate with the active plan folder',
      'Pairs with ck:mermaidjs-v11 (syntax) and ck:tech-graph (publish-grade)',
    ],
    corePrinciplesVi: [
      'Chỉ đọc/trực quan hóa — không sửa code',
      '--html độc lập — mở trên mọi browser, không cần server',
      'Markdown mode render Mermaid trực tiếp qua markdown-novel-viewer',
      'Visuals nằm cùng thư mục plan active',
      'Kết hợp ck:mermaidjs-v11 (cú pháp) và ck:tech-graph (cấp publish)',
    ],

    expertiseAreasEn: [
      'Code walkthroughs & file previews',
      'Architecture & data-flow diagrams',
      'Step-by-step slide decks',
      'Visual diff & plan-vs-codebase review',
      'Project recap / context snapshots',
    ],
    expertiseAreasVi: [
      'Code walkthrough & xem file',
      'Sơ đồ kiến trúc & data-flow',
      'Slide deck từng bước',
      'Visual diff & so sánh plan-vs-codebase',
      'Recap project / snapshot context',
    ],

    workflowModes: [
      { flag: '--explain', modeEn: 'Visual explanation of code or a concept — narrative + ASCII + Mermaid diagrams', modeVi: 'Giải thích trực quan code hoặc concept — narrative + ASCII + sơ đồ Mermaid', research: '', redTeam: '', validation: '' },
      { flag: '--diagram', modeEn: 'Architecture and data-flow diagrams', modeVi: 'Sơ đồ kiến trúc và data-flow', research: '', redTeam: '', validation: '' },
      { flag: '--slides', modeEn: 'Step-by-step walkthrough as a slide deck', modeVi: 'Walkthrough từng bước dạng slide deck', research: '', redTeam: '', validation: '' },
      { flag: '--ascii', modeEn: 'Terminal-friendly ASCII diagram (no browser needed)', modeVi: 'Sơ đồ ASCII thân thiện terminal (không cần browser)', research: '', redTeam: '', validation: '' },
      { flag: '--html', modeEn: 'Self-contained HTML page — composes with any generate flag, opens directly in browser', modeVi: 'Trang HTML độc lập — kết hợp với mọi generate flag, mở thẳng trên browser', research: '', redTeam: '', validation: '' },
      { flag: '--diff [ref]', modeEn: 'Visual diff review of changes (requires --html)', modeVi: 'Review diff trực quan các thay đổi (yêu cầu --html)', research: '', redTeam: '', validation: '' },
      { flag: '--plan-review [plan-file]', modeEn: 'Compare a plan file against the actual codebase — implies --html. Omit the path to use the active plan.', modeVi: 'So sánh plan file với codebase thực tế — tự bật --html. Bỏ path để dùng active plan.', research: '', redTeam: '', validation: '' },
      { flag: '--recap [timeframe]', modeEn: 'Project context snapshot over a timeframe (requires --html)', modeVi: 'Snapshot context project theo khoảng thời gian (yêu cầu --html)', research: '', redTeam: '', validation: '' },
    ],

    composableFlagsEn: '--html composes with any generate flag (--explain / --diagram / --slides / --ascii) for a self-contained browser page. The review flags --diff / --plan-review / --recap require --html.',
    composableFlagsVi: '--html kết hợp với mọi generate flag (--explain / --diagram / --slides / --ascii) để có trang browser độc lập. Các review flag --diff / --plan-review / --recap yêu cầu --html.',

    skillStack: [
      { name: 'ck:mermaidjs-v11', type: 'skill' },
      { name: 'ck:markdown-novel-viewer', type: 'skill' },
      { name: 'ck:tech-graph', type: 'skill' },
      { name: 'ck:ai-multimodal', type: 'skill' },
      { name: 'Mermaid', type: 'tool' },
    ],

    reportOutput: {
      titleEn: 'Visual Output',
      titleVi: 'Output Trực Quan',
      patternEn: '{slug}.md (browser) · {slug}.html (self-contained)',
      patternVi: '{slug}.md (browser) · {slug}.html (độc lập)',
      locationEn: 'Active plan: {plan_dir}/visuals/  •  Fallback: plans/visuals/',
      locationVi: 'Plan active: {plan_dir}/visuals/  •  Fallback: plans/visuals/',
      descEn: 'Explanation / diagram / slides / ascii • Markdown auto-opens with live Mermaid • --html is shareable with no server • Diff / plan-review / recap produce review-grade visuals',
      descVi: 'Giải thích / sơ đồ / slides / ascii • Markdown tự mở với Mermaid live • --html dễ chia sẻ, không cần server • Diff / plan-review / recap tạo visual cấp review',
    },

    promptExamples: [
      {
        labelEn: '--explain',
        labelVi: '--explain',
        command: '/ck:preview --explain How does the auth middleware chain work in this repo',
        whenEn: 'Need a visual explanation of unfamiliar code patterns or complex logic.',
        whenVi: 'Cần giải thích visual pattern code lạ hoặc logic phức tạp.',
        expectedEn: 'Markdown explanation with ASCII + Mermaid diagrams, auto-opens in browser.',
        expectedVi: 'Giải thích Markdown kèm ASCII + Mermaid, tự mở trong browser.',
        recommended: true,
      },
      {
        labelEn: '--diagram',
        labelVi: '--diagram',
        command: '/ck:preview --diagram Data flow from webhook to notification queue',
        whenEn: 'Architecture diagrams and data flow visualization.',
        whenVi: 'Diagram kiến trúc và data flow.',
        expectedEn: 'Mermaid architecture diagram rendered in browser.',
        expectedVi: 'Diagram kiến trúc Mermaid render trong browser.',
      },
      {
        labelEn: '--html --slides',
        labelVi: '--html --slides',
        command: '/ck:preview --html --slides Step-by-step guide to our deployment pipeline',
        whenEn: 'Need a presentation-quality walkthrough of a process.',
        whenVi: 'Cần walkthrough chất lượng presentation cho một quy trình.',
        expectedEn: 'Self-contained HTML slide deck, opens directly in browser.',
        expectedVi: 'HTML slide deck độc lập, mở trực tiếp trong browser.',
      },
      {
        labelEn: '--html --diff',
        labelVi: '--html --diff',
        command: '/ck:preview --html --diff main',
        whenEn: 'Visual diff review before PR submission.',
        whenVi: 'Visual diff review trước khi submit PR.',
        expectedEn: 'HTML diff view comparing current branch against reference.',
        expectedVi: 'HTML diff view so sánh branch hiện tại với reference.',
      },
      // Flag card prompts — used by infographic-preview-quick-ref.astro flag group items
      {
        labelEn: '<file.md>',
        labelVi: '<file.md>',
        command: '/ck:preview plans/.../plan.md',
        whenEn: 'View one markdown file (plan, phase, doc) in the novel-reader UI — Mermaid renders live.',
        whenVi: 'Xem một file markdown (plan, phase, doc) trong novel-reader UI — Mermaid render trực tiếp.',
        expectedEn: 'File opens in the novel-reader UI with live Mermaid rendering.',
        expectedVi: 'File mở trong novel-reader UI với Mermaid render trực tiếp.',
      },
      {
        labelEn: '<dir/>',
        labelVi: '<dir/>',
        command: '/ck:preview plans/260527-.../',
        whenEn: 'Pass a folder to browse every doc inside — e.g. a whole plan folder (plan.md + all phase files).',
        whenVi: 'Truyền một thư mục để duyệt mọi doc bên trong — vd cả thư mục plan (plan.md + tất cả phase file).',
        expectedEn: 'Browse all docs in the folder via the novel-reader UI.',
        expectedVi: 'Duyệt toàn bộ doc trong thư mục qua novel-reader UI.',
      },
      {
        labelEn: '<path>',
        labelVi: '<path>',
        command: '/ck:preview src/auth/middleware.ts',
        whenEn: 'View reads the file as-is. Contrast with generate flags (--explain / --diagram / --slides / --ascii): they take a topic in plain words and build a new visual — not a path.',
        whenVi: 'View đọc file nguyên trạng. Khác với generate flag (--explain / --diagram / --slides / --ascii): chúng nhận topic mô tả bằng lời để dựng visual mới — không đọc path.',
        expectedEn: 'File displayed as-is in the novel-reader UI.',
        expectedVi: 'File hiển thị nguyên trạng trong novel-reader UI.',
      },
      {
        labelEn: '--html',
        labelVi: '--html',
        command: '/ck:preview --html --diagram "DB schema"',
        whenEn: 'Add --html to any generate flag for a self-contained browser page — no dev server.',
        whenVi: 'Thêm --html vào bất kỳ generate flag nào để có trang browser độc lập — không cần dev server.',
        expectedEn: 'Self-contained HTML page saved to {plan_dir}/visuals/ — opens directly in browser.',
        expectedVi: 'Trang HTML độc lập lưu vào {plan_dir}/visuals/ — mở thẳng trên browser.',
      },
      {
        labelEn: '--diff [ref]',
        labelVi: '--diff [ref]',
        command: '/ck:preview --diff HEAD~3',
        whenEn: 'Visual diff review of changes since a reference commit.',
        whenVi: 'Review diff trực quan các thay đổi từ một commit tham chiếu.',
        expectedEn: 'Self-contained HTML diff view comparing current branch against the reference.',
        expectedVi: 'HTML diff view độc lập so sánh branch hiện tại với reference.',
      },
      {
        labelEn: '--plan-review [plan-file]',
        labelVi: '--plan-review [plan-file]',
        command: '/ck:preview --plan-review plans/.../plan.md',
        whenEn: 'Compare a plan file against the actual codebase to check implementation progress.',
        whenVi: 'So sánh plan file với codebase thực tế để kiểm tra tiến độ triển khai.',
        expectedEn: 'HTML review comparing plan vs codebase, auto-enables --html.',
        expectedVi: 'HTML review so sánh plan vs codebase, tự bật --html.',
      },
      {
        labelEn: '--recap [timeframe]',
        labelVi: '--recap [timeframe]',
        command: '/ck:preview --recap "last week"',
        whenEn: 'Project context snapshot over a timeframe — useful for onboarding or catch-up.',
        whenVi: 'Snapshot context project theo khoảng thời gian — hữu ích khi onboard hoặc catch-up.',
        expectedEn: 'Self-contained HTML project recap page, auto-enables --html.',
        expectedVi: 'Trang HTML recap project độc lập, tự bật --html.',
      },
      {
        labelEn: '--slides',
        labelVi: '--slides',
        command: '/ck:preview --slides "onboarding flow"',
        whenEn: 'Step-by-step walkthrough as a slide deck.',
        whenVi: 'Walkthrough từng bước dạng slide deck.',
        expectedEn: 'Slide deck Markdown auto-opens in browser.',
        expectedVi: 'Slide deck Markdown tự mở trong browser.',
      },
      {
        labelEn: '--ascii',
        labelVi: '--ascii',
        command: '/ck:preview --ascii "folder structure"',
        whenEn: 'Terminal-friendly ASCII diagram — no browser needed to understand.',
        whenVi: 'Sơ đồ ASCII thân thiện terminal — không cần browser để hiểu.',
        expectedEn: 'ASCII diagram output suitable for terminal display.',
        expectedVi: 'Output ASCII diagram phù hợp hiển thị terminal.',
      },
    ],

    deepDiveLink: {
      hrefEn: '/guides/commands',
      hrefVi: '/vi/guides/commands',
      labelEn: 'See all ClaudeKit commands',
      labelVi: 'Xem tất cả lệnh ClaudeKit',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // /ck:code-review — Adversarial Three-Stage Code Review
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'code-review',
    command: '/ck:code-review',
    kit: 'engineer',

    header: {
      titleEn: '/ck:code-review',
      titleVi: '/ck:code-review',
      taglineEn: 'Adversarial three-stage review with always-on red-team analysis. Resolves input mode, runs spec compliance → code quality → adversarial reviewer sub-agents, blocks merge on critical findings.',
      taglineVi: 'Review đối kháng ba giai đoạn với red-team luôn bật. Xác định input mode, chạy spec compliance → code quality → adversarial reviewer sub-agent, chặn merge khi có critical findings.',
    },

    hardGate: {
      type: 'critical',
      titleEn: 'HARD GATES (5)',
      titleVi: 'HARD GATES (5)',
      contentEn: '① Spec compliance MUST pass before code quality review — Stage 1 fail → fix → re-run Stage 1, no skipping to Stage 2. ② Adversarial review runs on EVERY review — no exceptions (scope gate only exempts ≤2 files, ≤30 lines, no security files). ③ NO completion claims without fresh verification evidence — tests pass (0 failures), build succeeds (exit 0), original symptom resolved. ④ Critical findings BLOCK merge — must fix before proceeding; deferred findings create GitHub issues. ⑤ Re-review cycle limit: 3 — escalate to user after 3 failed fix/re-review cycles.',
      contentVi: '① Spec compliance PHẢI pass trước code quality review — Stage 1 fail → fix → chạy lại Stage 1, không nhảy sang Stage 2. ② Adversarial review chạy MỌI lần review — không ngoại lệ (scope gate chỉ miễn khi ≤2 files, ≤30 lines, không có security files). ③ KHÔNG claim hoàn thành nếu chưa có bằng chứng verify mới — tests pass (0 failures), build success (exit 0), symptom gốc đã giải quyết. ④ Critical findings CHẶN merge — phải fix trước khi tiến tiếp; deferred findings tạo GitHub issues. ⑤ Re-review cycle giới hạn: 3 — escalate cho user sau 3 vòng fix/re-review thất bại.',
    },

    processFlow: [
      { number: 1, titleEn: 'Input Resolution', titleVi: 'Xác định Input', descEn: 'Auto-detect mode from argument: #PR | commit | --pending | codebase | codebase parallel. If ambiguous, AskUserQuestion to choose review target.', descVi: 'Tự nhận diện mode từ argument: #PR | commit | --pending | codebase | codebase parallel. Nếu mơ hồ, AskUserQuestion để chọn review target.' },
      { number: 2, titleEn: 'Diff Acquisition', titleVi: 'Lấy Diff', descEn: 'Main agent fetches diff: gh pr diff #N · git show <sha> · git diff (staged + unstaged) · full codebase scan. No sub-agents at this step.', descVi: 'Main agent lấy diff: gh pr diff #N · git show <sha> · git diff (staged + unstaged) · quét toàn bộ codebase. Không sub-agent ở bước này.' },
      { number: 3, titleEn: 'Stage 1: Spec Compliance', titleVi: 'Stage 1: Spec Compliance', descEn: 'HARD GATE — main agent verifies code matches plan/spec. Missing requirements? Unjustified extras (YAGNI)? PASS → Stage 2 | FAIL → fix → re-run Stage 1.', descVi: 'HARD GATE — main agent xác minh code khớp plan/spec. Thiếu requirements? Có extras vô lý (YAGNI)? PASS → Stage 2 | FAIL → fix → chạy lại Stage 1.' },
      { number: 4, titleEn: 'Edge Case Scouting', titleVi: 'Scout Edge Case', descEn: 'Invoke /ck:scout with edge-case focus — 2-6 parallel Explore sub-agents scan data flows, error paths, boundary conditions. Findings feed Stage 2.', descVi: 'Gọi /ck:scout tập trung edge case — 2-6 Explore sub-agent song song quét data flows, error paths, boundary conditions. Findings nuôi Stage 2.' },
      { number: 5, titleEn: 'Stage 2: Code Quality', titleVi: 'Stage 2: Code Quality', descEn: 'code-reviewer sub-agent — standards, security, performance, edge cases from scout. For 3+ files: parallel scoped reviewers (e.g. backend + frontend).', descVi: 'code-reviewer sub-agent — standards, security, performance, edge case từ scout. Với 3+ files: parallel scoped reviewer (vd backend + frontend).' },
      { number: 6, titleEn: 'Stage 3: Adversarial', titleVi: 'Stage 3: Adversarial', descEn: 'Adversarial reviewer sub-agent (red team) actively tries to break the code — security holes, false assumptions, race conditions, resource exhaustion, supply chain. Verdicts: Accept / Reject / Defer.', descVi: 'Adversarial reviewer sub-agent (red team) chủ động phá code — security holes, false assumptions, race conditions, resource exhaustion, supply chain. Verdict: Accept / Reject / Defer.' },
      { number: 7, titleEn: 'Verification Gate', titleVi: 'Verification Gate', descEn: 'IRON LAW — run build + tests, read output, confirm 0 failures with FRESH evidence before any completion claim. No "should" / "probably" / "seems to".', descVi: 'IRON LAW — chạy build + tests, đọc output, xác nhận 0 failures với bằng chứng MỚI trước khi claim hoàn thành. Không "should" / "probably" / "seems to".' },
      { number: 8, titleEn: 'Review Report', titleVi: 'Report Review', descEn: 'Findings grouped by severity (Critical / Important / Minor) with verdict per finding. Recommendation: APPROVE | REQUEST CHANGES | BLOCK. Critical → merge blocked.', descVi: 'Findings nhóm theo severity (Critical / Important / Minor) với verdict từng finding. Recommendation: APPROVE | REQUEST CHANGES | BLOCK. Critical → chặn merge.' },
    ],

    corePrinciplesEn: [
      'Resolve input mode FIRST — know exactly WHAT you are reviewing',
      'Technical rigor over social performance — be brutal, evidence-based',
      'Scout edge cases BEFORE requesting code-reviewer',
      'Adversarial review on EVERY review — red-team is non-negotiable',
      'NO completion claims without fresh verification evidence',
    ],
    corePrinciplesVi: [
      'Xác định input mode TRƯỚC — biết chính xác đang review CÁI GÌ',
      'Technical rigor hơn social performance — thẳng thắn, dựa bằng chứng',
      'Scout edge case TRƯỚC khi gọi code-reviewer',
      'Adversarial review MỌI lần — red-team là bắt buộc',
      'KHÔNG claim hoàn thành nếu thiếu bằng chứng verify mới',
    ],

    expertiseAreasEn: [
      'Multi-stage review: spec compliance → code quality → adversarial',
      'Red-team adversarial analysis (security, assumptions, race conditions)',
      'Input mode resolution (PR / commit / pending / codebase)',
      'Parallel scoped reviewers for multi-file features (3+ files)',
      'Task-managed review pipeline with dependency chain',
    ],
    expertiseAreasVi: [
      'Review nhiều giai đoạn: spec compliance → code quality → adversarial',
      'Red-team adversarial analysis (security, giả định, race conditions)',
      'Xác định input mode (PR / commit / pending / codebase)',
      'Parallel scoped reviewer cho feature nhiều file (3+ files)',
      'Pipeline review quản lý qua Task với dependency chain',
    ],

    workflowModes: [
      { flag: '#123 | PR URL', modeEn: 'PR mode — full PR diff via gh pr diff', modeVi: 'PR mode — full PR diff qua gh pr diff', research: '', redTeam: '', validation: '' },
      { flag: 'abc1234', modeEn: 'Commit mode — single commit diff via git show', modeVi: 'Commit mode — diff một commit qua git show', research: '', redTeam: '', validation: '' },
      { flag: '--pending', modeEn: 'Pending mode — staged + unstaged via git diff', modeVi: 'Pending mode — staged + unstaged qua git diff', research: '', redTeam: '', validation: '' },
      { flag: '(no args)', modeEn: 'Default — recent changes in conversation context', modeVi: 'Default — thay đổi gần đây trong context', research: '', redTeam: '', validation: '' },
      { flag: 'codebase', modeEn: 'Codebase scan — full codebase analysis', modeVi: 'Quét codebase — phân tích toàn bộ codebase', research: '', redTeam: '', validation: '' },
      { flag: 'codebase parallel', modeEn: 'Parallel multi-reviewer audit — ultrathink edge cases, then parallel verify', modeVi: 'Audit nhiều reviewer song song — ultrathink edge case, rồi verify song song', research: '', redTeam: '', validation: '' },
    ],

    composableFlagsEn: 'Input modes are mutually exclusive — pick ONE. When invoked without arguments and no recent changes, AskUserQuestion prompts to select review target.',
    composableFlagsVi: 'Các input mode loại trừ lẫn nhau — chọn MỘT. Khi gọi không có argument và không có thay đổi gần đây, AskUserQuestion sẽ hỏi chọn review target.',

    skillStack: [
      { name: 'code-reviewer agent', type: 'agent' },
      { name: 'adversarial-reviewer agent', type: 'agent' },
      { name: 'ck:scout', type: 'skill' },
      { name: 'ck:sequential-thinking', type: 'skill' },
      { name: 'ck:docs-seeker', type: 'skill' },
      { name: 'Agent', type: 'tool' },
      { name: 'TaskCreate', type: 'tool' },
      { name: 'TaskUpdate', type: 'tool' },
      { name: 'AskUserQuestion', type: 'tool' },
      { name: 'Bash (gh / git)', type: 'tool' },
    ],

    specialOperations: [
      {
        id: 'op-spec-compliance',
        titleEn: 'Stage 1: Spec Compliance',
        titleVi: 'Stage 1: Spec Compliance',
        descEn: 'HARD GATE before quality review. Verifies code matches plan/spec — no missing requirements, no YAGNI violations. Fail → fix → re-run Stage 1.',
        descVi: 'HARD GATE trước quality review. Xác minh code khớp plan/spec — không thiếu requirement, không vi phạm YAGNI. Fail → fix → chạy lại Stage 1.',
        color: 'sky',
      },
      {
        id: 'op-quality-review',
        titleEn: 'Stage 2: Code Quality',
        titleVi: 'Stage 2: Code Quality',
        descEn: 'code-reviewer sub-agent reviews standards, security, performance, edge cases. 3+ files → parallel scoped reviewers (backend / frontend).',
        descVi: 'code-reviewer sub-agent review standards, security, performance, edge case. 3+ files → parallel scoped reviewer (backend / frontend).',
        color: 'emerald',
      },
      {
        id: 'op-adversarial-review',
        titleEn: 'Stage 3: Adversarial (Red Team)',
        titleVi: 'Stage 3: Adversarial (Red Team)',
        descEn: 'Adversarial reviewer actively tries to break the code — security holes, false assumptions, race conditions, supply chain risks. Verdicts: Accept / Reject / Defer.',
        descVi: 'Adversarial reviewer chủ động phá code — security holes, giả định sai, race conditions, supply chain risks. Verdict: Accept / Reject / Defer.',
        color: 'rose',
      },
      {
        id: 'op-task-pipeline',
        titleEn: 'Task-Managed Pipeline (3+ files)',
        titleVi: 'Pipeline qua Task (3+ files)',
        descEn: 'scout → review → adversarial → fix → verify, each a Task with dependency chain. Parallel scoped reviewers for independent file groups. Fix task blocks on all reviewers.',
        descVi: 'scout → review → adversarial → fix → verify, mỗi bước là một Task với dependency chain. Parallel scoped reviewer cho nhóm file độc lập. Fix task chặn đến khi mọi reviewer xong.',
        color: 'amber',
      },
      {
        id: 'op-codebase-parallel',
        titleEn: 'codebase parallel — Multi-Reviewer Audit',
        titleVi: 'codebase parallel — Audit Nhiều Reviewer',
        descEn: 'Ultrathink edge cases, then spawn parallel adversarial reviewers across the codebase. Used for deep audits — security review, pre-launch hardening.',
        descVi: 'Ultrathink edge case, rồi spawn nhiều adversarial reviewer song song trên codebase. Dùng cho audit sâu — security review, hardening trước launch.',
        color: 'violet',
      },
    ],

    reportOutput: {
      titleEn: 'Adversarial Review Report',
      titleVi: 'Báo cáo Adversarial Review',
      patternEn: 'Findings grouped by severity (Critical / Important / Minor) + verdict per finding + merge recommendation',
      patternVi: 'Findings nhóm theo severity (Critical / Important / Minor) + verdict từng finding + recommendation merge',
      locationEn: 'Inline review output · plans/reports/review-<slug>.md (when --parallel)',
      locationVi: 'Inline review output · plans/reports/review-<slug>.md (khi --parallel)',
      descEn: 'Each finding: description, file:line, severity, verdict (Accept / Reject / Defer) • Critical → BLOCK merge • Deferred → GitHub issue • Recommendation: APPROVE | REQUEST CHANGES | BLOCK • Verification gate (tests + build) MUST pass before report finalizes',
      descVi: 'Mỗi finding: mô tả, file:line, severity, verdict (Accept / Reject / Defer) • Critical → CHẶN merge • Deferred → GitHub issue • Recommendation: APPROVE | REQUEST CHANGES | BLOCK • Verification gate (tests + build) PHẢI pass trước khi report finalize',
    },

    promptExamples: [
      {
        labelEn: 'Pending changes',
        labelVi: 'Pending changes',
        command: '/ck:code-review --pending',
        whenEn: 'Just finished /ck:cook or /ck:fix, not yet committed.',
        whenVi: 'Vừa làm xong /ck:cook hoặc /ck:fix, chưa commit.',
        expectedEn: 'Reviews all staged + unstaged before commit / ship.',
        expectedVi: 'Review tất cả staged + unstaged trước khi commit / ship.',
        recommended: true,
      },
      {
        labelEn: 'PR review',
        labelVi: 'PR review',
        command: '/ck:code-review #42',
        whenEn: 'PR is open, needs adversarial review before merge.',
        whenVi: 'PR đã mở, cần adversarial review trước merge.',
        expectedEn: 'Findings grouped by severity + verdict per item.',
        expectedVi: 'Findings nhóm theo severity + verdict cho từng item.',
      },
      {
        labelEn: 'Codebase audit',
        labelVi: 'Codebase audit',
        command: '/ck:code-review codebase parallel',
        whenEn: 'Pre-launch or whole-project security audit.',
        whenVi: 'Pre-launch hoặc security audit toàn project.',
        expectedEn: 'Multiple scoped reviewers, severity-dedupe in the report.',
        expectedVi: 'Nhiều reviewer scope khác nhau, severity-dedupe trong report.',
      },
    ],

    deepDiveLink: {
      hrefEn: '/guides/commands',
      hrefVi: '/vi/guides/commands',
      labelEn: 'See all ClaudeKit commands',
      labelVi: 'Xem tất cả lệnh ClaudeKit',
    },
  },
];

export const skillInfographics: SkillInfographic[] = [
  ...coreSkillInfographics,
  ...additionalSkillInfographics,
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
