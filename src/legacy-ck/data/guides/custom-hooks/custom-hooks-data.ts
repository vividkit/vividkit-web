/**
 * Hook metadata and category definitions for CustomHooksGuide.
 * Each hook includes: id, name, lines, triggers, and description keys (EN/VI).
 */

export interface HookDef {
  id: string;
  name: string;
  lines: number;
  triggers: string[];
  /** Default new-install state, based on the stable ClaudeKit docs/changelog. */
  defaultState: 'on' | 'off' | 'removed';
  /** Reader-facing behavior once the hook is active. */
  flowImpact: 'policy-block' | 'guidance' | 'context' | 'state' | 'removed';
  /** Which disable instructions should be shown in the UI. */
  disableMode?: 'standard' | 'simplify' | 'workflow' | 'removed';
  /** Why the hook has that default state. */
  defaultReason: 'active-default' | 'generated-context' | 'opt-in-gate' | 'agent-teams-opt-in' | 'removed';
  /** Which kits include this hook: 'ek' (Engineer), 'mk' (Marketing), or both */
  kits: ('ek' | 'mk')[];
  /** Whether this hook is in beta only (not yet in stable) */
  isBeta?: boolean;
  /** Whether this hook is deprecated/disabled */
  deprecated?: boolean;
  descEn: string;
  descVi: string;
}

export interface HookCategory {
  id: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  /** Tailwind color name used for accent (e.g. 'blue', 'emerald') */
  color: string;
  icon: string;
  hooks: HookDef[];
}

// ─── Hook Categories ─────────────────────────────────────────────

export const hookCategories: HookCategory[] = [
  {
    id: 'session',
    titleEn: 'Session Lifecycle',
    titleVi: 'Vòng đời Session',
    descEn: 'Initialize, persist, and monitor session state throughout the lifecycle.',
    descVi: 'Khởi tạo, lưu trữ và theo dõi trạng thái session xuyên suốt vòng đời.',
    color: 'blue',
    icon: 'refresh',
    hooks: [
      {
        id: 'session-init',
        name: 'session-init.cjs',
        lines: 379,
        defaultState: 'off',
        flowImpact: 'context',
        defaultReason: 'generated-context',
        kits: ['ek', 'mk'],
        triggers: ['SessionStart (startup/resume/clear/compact)'],
        descEn: 'Initialize session with project detection, config loading, and environment setup. Fires on startup, resume, clear, and compact.',
        descVi: 'Khởi tạo session với project detection, load config, và setup environment. Kích hoạt khi startup, resume, clear, và compact.',
      },
      {
        id: 'session-state',
        name: 'session-state.cjs',
        lines: 94,
        defaultState: 'off',
        flowImpact: 'state',
        defaultReason: 'generated-context',
        kits: ['ek'],
        triggers: ['PostToolUse (Task/TaskCreate/TaskUpdate/TodoWrite)', 'Stop', 'SubagentStop'],
        descEn: 'Persist and restore session progress across compactions. Saves active plan, todo items, and branch status.',
        descVi: 'Lưu và khôi phục tiến trình session qua các lần compact. Lưu plan, todo items, và trạng thái branch.',
      },
      {
        id: 'usage-quota-cache-refresh',
        name: 'usage-quota-cache-refresh.cjs',
        lines: 100,
        defaultState: 'off',
        flowImpact: 'context',
        defaultReason: 'generated-context',
        kits: ['ek'],
        triggers: ['SessionStart (startup/resume/clear/compact)', 'UserPromptSubmit', 'PostToolUse (Task/TaskCreate/TaskUpdate/TodoWrite)'],
        descEn: 'Keep usage quota cache warm for statusline. Smart throttling: 60s for prompts, 300s for tool events.',
        descVi: 'Giữ cache usage quota cho statusline. Throttle thông minh: 60s cho prompt, 300s cho tool events.',
      },
      {
        id: 'usage-context-awareness',
        name: 'usage-context-awareness.cjs',
        lines: 39,
        defaultState: 'off',
        flowImpact: 'context',
        defaultReason: 'generated-context',
        kits: ['ek', 'mk'],
        triggers: ['(optional setting)'],
        descEn: 'Optional switch for usage-quota-cache-refresh. It only adds quota awareness when enabled in .claude/.ck.json.',
        descVi: 'Công tắc tuỳ chọn cho usage-quota-cache-refresh. Chỉ thêm context quota khi được bật trong .claude/.ck.json.',
      },
    ],
  },
  {
    id: 'context',
    titleEn: 'Context Injection',
    titleVi: 'Inject Context',
    descEn: 'Inject rules, environment info, and team context into prompts and subagents.',
    descVi: 'Inject rules, thông tin environment, và team context vào prompts và subagents.',
    color: 'violet',
    icon: 'inject',
    hooks: [
      {
        id: 'dev-rules-reminder',
        name: 'dev-rules-reminder.cjs',
        lines: 90,
        defaultState: 'off',
        flowImpact: 'context',
        defaultReason: 'generated-context',
        kits: ['ek', 'mk'],
        triggers: ['UserPromptSubmit'],
        descEn: 'Inject session info, development rules, modularization reminders, and active plan context on every prompt.',
        descVi: 'Inject session info, development rules, modularization reminders, và plan context vào mỗi prompt.',
      },
      {
        id: 'subagent-init',
        name: 'subagent-init.cjs',
        lines: 229,
        defaultState: 'off',
        flowImpact: 'context',
        defaultReason: 'generated-context',
        kits: ['ek', 'mk'],
        triggers: ['SubagentStart'],
        descEn: 'Inject minimal context (~200 tokens) to subagents using environment variables from SessionStart.',
        descVi: 'Inject context tối giản (~200 tokens) vào subagents dùng env vars từ SessionStart.',
      },
      {
        id: 'team-context-inject',
        name: 'team-context-inject.cjs',
        lines: 176,
        defaultState: 'off',
        flowImpact: 'context',
        defaultReason: 'generated-context',
        kits: ['ek'],
        triggers: ['SubagentStart'],
        descEn: 'Inject peer info and task summary when spawning Agent Team teammates. Non-blocking, fail-open.',
        descVi: 'Inject thông tin đồng đội và task summary khi spawn Agent Team teammates. Non-blocking, fail-open.',
      },
    ],
  },
  {
    id: 'quality',
    titleEn: 'Code Quality',
    titleVi: 'Chất lượng Code',
    descEn: 'Enforce naming conventions, simplification reminders, and plan formatting.',
    descVi: 'Enforce naming conventions, nhắc simplify code, và định dạng plan.',
    color: 'emerald',
    icon: 'check',
    hooks: [
      {
        id: 'descriptive-name',
        name: 'descriptive-name.cjs',
        lines: 46,
        defaultState: 'on',
        flowImpact: 'guidance',
        defaultReason: 'active-default',
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Write)'],
        descEn: 'Enforce descriptive, kebab-case file naming when creating new files.',
        descVi: 'Enforce đặt tên file theo kebab-case mô tả rõ ràng khi tạo file mới.',
      },
      {
        id: 'simplify-gate',
        name: 'simplify-gate.cjs',
        lines: 179,
        defaultState: 'off',
        flowImpact: 'policy-block',
        disableMode: 'simplify',
        defaultReason: 'opt-in-gate',
        kits: ['ek'],
        triggers: ['UserPromptSubmit'],
        descEn: 'Opt-in gate (gate.enabled=false by default). Hard-blocks ship/merge/pr/deploy/publish and soft-warns commit/finalize/release when the working tree carries a large unsimplified diff (400 LOC / 8 files / 200 LOC single-file). Bypass via env CK_SIMPLIFY_DISABLED=1 or .ck.json hooks.simplify-gate=false.',
        descVi: 'Gate opt-in (mặc định gate.enabled=false). Hard-block ship/merge/pr/deploy/publish và soft-warn commit/finalize/release khi working tree có diff lớn chưa simplify (400 LOC / 8 file / 200 LOC một file). Bypass qua env CK_SIMPLIFY_DISABLED=1 hoặc .ck.json hooks.simplify-gate=false.',
      },
      {
        id: 'plan-format-kanban',
        name: 'plan-format-kanban.cjs',
        lines: 101,
        defaultState: 'off',
        flowImpact: 'guidance',
        defaultReason: 'generated-context',
        kits: ['ek'],
        triggers: ['PostToolUse (Edit/Write/MultiEdit)'],
        descEn: 'Warn when plan.md uses filenames as link text instead of human-readable names.',
        descVi: 'Cảnh báo khi plan.md dùng tên file làm link text thay vì tên dễ đọc.',
      },
    ],
  },
  {
    id: 'security',
    titleEn: 'Security & Safety',
    titleVi: 'Bảo mật & An toàn',
    descEn: 'Block access to sensitive files and restricted directories.',
    descVi: 'Chặn truy cập vào file nhạy cảm và thư mục bị hạn chế.',
    color: 'red',
    icon: 'shield',
    hooks: [
      {
        id: 'privacy-block',
        name: 'privacy-block.cjs',
        lines: 189,
        defaultState: 'on',
        flowImpact: 'policy-block',
        defaultReason: 'active-default',
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Bash/Glob/Grep/Read/Edit/Write)'],
        descEn: 'Block access to sensitive files (.env, credentials). Requires explicit user approval to proceed.',
        descVi: 'Chặn truy cập file nhạy cảm (.env, credentials). Cần user phê duyệt để tiếp tục.',
      },
      {
        id: 'scout-block',
        name: 'scout-block.cjs',
        lines: 163,
        defaultState: 'on',
        flowImpact: 'policy-block',
        defaultReason: 'active-default',
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Bash/Glob/Grep/Read/Edit/Write)'],
        descEn: 'Block directory access based on .ckignore patterns. Uses gitignore-spec matching.',
        descVi: 'Chặn truy cập thư mục theo .ckignore patterns. Dùng gitignore-spec matching.',
      },
    ],
  },
  {
    id: 'workflow',
    titleEn: 'Workflow & Teams',
    titleVi: 'Workflow & Teams',
    descEn: 'Coordinate planning, task tracking, and team agent collaboration.',
    descVi: 'Điều phối planning, task tracking, và team agent collaboration.',
    color: 'amber',
    icon: 'workflow',
    hooks: [
      {
        id: 'cook-after-plan-reminder',
        name: 'cook-after-plan-reminder.cjs',
        lines: 72,
        defaultState: 'off',
        flowImpact: 'guidance',
        defaultReason: 'generated-context',
        kits: ['ek'],
        triggers: ['SubagentStop (Plan)'],
        descEn: 'Remind to invoke /ck:cook after Plan subagent completes. Outputs plan path for new sessions.',
        descVi: 'Nhắc chạy /ck:cook sau khi Plan subagent hoàn thành. Xuất plan path cho session mới.',
      },
      {
        id: 'workflow-artifact-gate',
        name: 'workflow-artifact-gate.cjs',
        lines: 119,
        defaultState: 'off',
        flowImpact: 'policy-block',
        disableMode: 'workflow',
        defaultReason: 'opt-in-gate',
        kits: ['ek'],
        triggers: ['PreToolUse (finalize stage)', 'manual CLI'],
        descEn: 'Validate ck:fix/ck:cook review artifacts (context-snippets, verification, review-decision, risk-gate) before finalize and ship-like actions. Optional via .claude/.ck.json; fail-open on crash.',
        descVi: 'Validate review artifacts của ck:fix/ck:cook (context-snippets, verification, review-decision, risk-gate) trước khi finalize và ship-like actions. Có thể bật trong .claude/.ck.json; fail-open khi crash.',
      },
    ],
  },
];
