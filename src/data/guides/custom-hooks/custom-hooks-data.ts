/**
 * Hook metadata and category definitions for CustomHooksGuide.
 * Each hook includes: id, name, lines, triggers, and description keys (EN/VI).
 */

export interface HookDef {
  id: string;
  name: string;
  /** The .ck.json hooks.* flag key. Defaults to `id`; set explicitly when one
   *  hook script is shown as separate per-kit rows that share a single flag. */
  configKey?: string;
  lines: number;
  triggers: string[];
  /**
   * What a standard fresh install actually does with this hook. Three layers
   * decide it: wired in settings.json, the .ck.json runtime flag, and any inner gate.
   *  - 'active'  : wired + flag true → fires and acts.
   *  - 'dormant' : wired + flag true, but an inner gate is off → fires yet blocks nothing.
   *  - 'opt-in'  : not wired, or runtime flag false → stays inactive until you turn it on.
   *  - 'removed' : no active hook file in the current stable distribution.
   */
  defaultState: 'active' | 'dormant' | 'opt-in' | 'removed';
  /** Reader-facing behavior once the hook is active. */
  flowImpact: 'policy-block' | 'guidance' | 'context' | 'state' | 'removed';
  /** Which disable instructions should be shown in the UI. */
  disableMode?: 'standard' | 'simplify' | 'workflow' | 'removed';
  /** Which layer determines the default state (verified against settings.json + ck-config defaults). */
  defaultReason:
    | 'wired-active'
    | 'gate-dormant'
    | 'not-wired'
    | 'runtime-flag-false'
    | 'agent-teams-event'
    | 'removed';
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
        defaultState: 'active',
        flowImpact: 'context',
        defaultReason: 'wired-active',
        kits: ['ek', 'mk'],
        triggers: ['SessionStart (startup/resume/clear/compact)'],
        descEn: 'Initialize session with project detection, config loading, and environment setup. Fires on startup, resume, clear, and compact.',
        descVi: 'Khởi tạo session với project detection, load config, và setup environment. Kích hoạt khi startup, resume, clear, và compact.',
      },
      {
        id: 'session-state',
        name: 'session-state.cjs',
        lines: 94,
        defaultState: 'active',
        flowImpact: 'state',
        defaultReason: 'wired-active',
        kits: ['ek'],
        triggers: ['PostToolUse (Task/TaskCreate/TaskUpdate/TodoWrite)', 'Stop', 'SubagentStop'],
        descEn: 'Persist and restore session progress across compactions. Saves active plan, todo items, and branch status.',
        descVi: 'Lưu và khôi phục tiến trình session qua các lần compact. Lưu plan, todo items, và trạng thái branch.',
      },
      {
        id: 'usage-quota-cache-refresh',
        name: 'usage-quota-cache-refresh.cjs',
        lines: 100,
        defaultState: 'active',
        flowImpact: 'context',
        defaultReason: 'wired-active',
        kits: ['ek'],
        triggers: ['SessionStart (startup/resume/clear/compact)', 'UserPromptSubmit', 'PostToolUse (Task/TaskCreate/TaskUpdate/TodoWrite)'],
        descEn: 'Keep usage quota cache warm for statusline. Smart throttling: 60s for prompts, 300s for tool events.',
        descVi: 'Giữ cache usage quota cho statusline. Throttle thông minh: 60s cho prompt, 300s cho tool events.',
      },
      {
        id: 'usage-context-awareness',
        name: 'usage-context-awareness.cjs',
        lines: 39,
        defaultState: 'opt-in',
        flowImpact: 'context',
        defaultReason: 'not-wired',
        kits: ['ek'],
        triggers: ['Not wired in Engineer Kit settings.json'],
        descEn: 'Semantic wrapper around usage-quota-cache-refresh, gated by the hooks.usage-context-awareness flag (default true). Engineer Kit ships the script but does NOT wire it — it wires the quota-refresh hook directly instead, so this named hook stays inactive unless you register the command yourself.',
        descVi: 'Wrapper ngữ nghĩa quanh usage-quota-cache-refresh, kiểm soát bởi flag hooks.usage-context-awareness (mặc định true). Engineer Kit ship script nhưng KHÔNG wire — nó wire thẳng hook quota-refresh, nên hook tên này nằm im trừ khi bạn tự đăng ký command.',
      },
      {
        id: 'usage-context-awareness-mk',
        name: 'usage-context-awareness.cjs',
        configKey: 'usage-context-awareness',
        lines: 39,
        defaultState: 'active',
        flowImpact: 'context',
        defaultReason: 'wired-active',
        kits: ['mk'],
        triggers: ['UserPromptSubmit'],
        descEn: 'Same usage-context-awareness.cjs script, but Marketing Kit wires it into UserPromptSubmit and its hooks.usage-context-awareness flag defaults true, so it runs on every prompt to surface quota awareness.',
        descVi: 'Cùng script usage-context-awareness.cjs, nhưng Marketing Kit wire vào UserPromptSubmit và flag hooks.usage-context-awareness mặc định true, nên nó chạy ở mỗi prompt để hiện quota awareness.',
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
        defaultState: 'active',
        flowImpact: 'context',
        defaultReason: 'wired-active',
        kits: ['ek', 'mk'],
        triggers: ['UserPromptSubmit'],
        descEn: 'Inject session info, development rules, modularization reminders, and active plan context on every prompt.',
        descVi: 'Inject session info, development rules, modularization reminders, và plan context vào mỗi prompt.',
      },
      {
        id: 'subagent-init',
        name: 'subagent-init.cjs',
        lines: 229,
        defaultState: 'active',
        flowImpact: 'context',
        defaultReason: 'wired-active',
        kits: ['ek', 'mk'],
        triggers: ['SubagentStart'],
        descEn: 'Inject minimal context (~200 tokens) to subagents using environment variables from SessionStart.',
        descVi: 'Inject context tối giản (~200 tokens) vào subagents dùng env vars từ SessionStart.',
      },
      {
        id: 'team-context-inject',
        name: 'team-context-inject.cjs',
        lines: 176,
        defaultState: 'opt-in',
        flowImpact: 'context',
        defaultReason: 'not-wired',
        kits: ['ek'],
        triggers: ['SubagentStart (Agent Teams only — not wired in base settings.json)'],
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
        defaultState: 'active',
        flowImpact: 'guidance',
        defaultReason: 'wired-active',
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Write)'],
        descEn: 'Enforce descriptive, kebab-case file naming when creating new files.',
        descVi: 'Enforce đặt tên file theo kebab-case mô tả rõ ràng khi tạo file mới.',
      },
      {
        id: 'simplify-gate',
        name: 'simplify-gate.cjs',
        lines: 179,
        defaultState: 'dormant',
        flowImpact: 'policy-block',
        disableMode: 'simplify',
        defaultReason: 'gate-dormant',
        kits: ['ek'],
        triggers: ['UserPromptSubmit'],
        descEn: 'Wired into UserPromptSubmit and its hooks.simplify-gate flag defaults true, so the hook runs on every prompt — but its inner gate (simplify.gate.enabled) is false by default, so it blocks nothing until you opt in. Once enabled it hard-blocks ship/merge/pr/deploy/publish and soft-warns commit/finalize/release when the working tree carries a large unsimplified diff (400 LOC / 8 files / 200 LOC single-file). Bypass via env CK_SIMPLIFY_DISABLED=1 or .ck.json hooks.simplify-gate=false.',
        descVi: 'Được wire vào UserPromptSubmit và flag hooks.simplify-gate mặc định true, nên hook chạy ở mỗi prompt — nhưng gate bên trong (simplify.gate.enabled) mặc định false, nên không chặn gì cho tới khi bạn bật. Sau khi bật, hook hard-block ship/merge/pr/deploy/publish và soft-warn commit/finalize/release khi working tree có diff lớn chưa simplify (400 LOC / 8 file / 200 LOC một file). Bypass qua env CK_SIMPLIFY_DISABLED=1 hoặc .ck.json hooks.simplify-gate=false.',
      },
      {
        id: 'plan-format-kanban',
        name: 'plan-format-kanban.cjs',
        lines: 101,
        defaultState: 'active',
        flowImpact: 'guidance',
        defaultReason: 'wired-active',
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
        defaultState: 'active',
        flowImpact: 'policy-block',
        defaultReason: 'wired-active',
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Bash/Glob/Grep/Read/Edit/Write)'],
        descEn: 'Block access to sensitive files (.env, credentials). Requires explicit user approval to proceed.',
        descVi: 'Chặn truy cập file nhạy cảm (.env, credentials). Cần user phê duyệt để tiếp tục.',
      },
      {
        id: 'scout-block',
        name: 'scout-block.cjs',
        lines: 163,
        defaultState: 'active',
        flowImpact: 'policy-block',
        defaultReason: 'wired-active',
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
        defaultState: 'active',
        flowImpact: 'guidance',
        defaultReason: 'wired-active',
        kits: ['ek'],
        triggers: ['SubagentStop (Plan)'],
        descEn: 'Remind to invoke /ck:cook after Plan subagent completes. Outputs plan path for new sessions.',
        descVi: 'Nhắc chạy /ck:cook sau khi Plan subagent hoàn thành. Xuất plan path cho session mới.',
      },
      {
        id: 'task-completed-handler',
        name: 'task-completed-handler.cjs',
        lines: 123,
        defaultState: 'opt-in',
        flowImpact: 'state',
        defaultReason: 'agent-teams-event',
        kits: ['ek'],
        triggers: ['TaskCompleted (Agent Teams runtime event)'],
        descEn: 'Log task completions and inject progress context when agents mark tasks done.',
        descVi: 'Log task completions và inject progress context khi agents đánh dấu task hoàn thành.',
      },
      {
        id: 'teammate-idle-handler',
        name: 'teammate-idle-handler.cjs',
        lines: 121,
        defaultState: 'opt-in',
        flowImpact: 'guidance',
        defaultReason: 'agent-teams-event',
        kits: ['ek'],
        triggers: ['TeammateIdle (Agent Teams runtime event)'],
        descEn: 'Inject available task context when a teammate goes idle. Current implementation is non-blocking and fail-open.',
        descVi: 'Inject context về task còn trống khi teammate idle. Implementation hiện tại non-blocking và fail-open.',
      },
      {
        id: 'workflow-artifact-gate',
        name: 'workflow-artifact-gate.cjs',
        lines: 119,
        defaultState: 'opt-in',
        flowImpact: 'policy-block',
        disableMode: 'workflow',
        defaultReason: 'runtime-flag-false',
        kits: ['ek'],
        triggers: ['Skill/CLI invoked (not wired in settings.json)'],
        descEn: 'Validates ck:fix/ck:cook review artifacts (context-snippets, verification, review-decision, risk-gate) before finalize and ship-like actions. Not wired into settings.json and its hooks.workflow-artifact-gate flag defaults to false, so it never fires on a standard install — opt in via .claude/.ck.json. Fail-open on crash.',
        descVi: 'Validate review artifacts của ck:fix/ck:cook (context-snippets, verification, review-decision, risk-gate) trước finalize và ship-like actions. Không được wire vào settings.json và flag hooks.workflow-artifact-gate mặc định false, nên không bao giờ chạy ở bản cài chuẩn — phải opt-in qua .claude/.ck.json. Fail-open khi crash.',
      },
    ],
  },
];
