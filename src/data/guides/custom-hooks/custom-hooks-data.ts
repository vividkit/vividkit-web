/**
 * Hook metadata and category definitions for CustomHooksGuide.
 * Each hook includes: id, name, lines, triggers, and description keys (EN/VI).
 */

export interface HookDef {
  id: string;
  name: string;
  lines: number;
  triggers: string[];
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

export interface LibModule {
  name: string;
  descEn: string;
  descVi: string;
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
        kits: ['ek', 'mk'],
        triggers: ['SessionStart'],
        descEn: 'Initialize session with project detection, config loading, and environment setup. Fires on startup, resume, clear, and compact.',
        descVi: 'Khởi tạo session với project detection, load config, và setup environment. Kích hoạt khi startup, resume, clear, và compact.',
      },
      {
        id: 'session-state',
        name: 'session-state.cjs',
        lines: 94,
        kits: ['ek'],
        triggers: ['PostToolUse', 'Stop', 'SubagentStop'],
        descEn: 'Persist and restore session progress across compactions. Saves active plan, todo items, and branch status.',
        descVi: 'Lưu và khôi phục tiến trình session qua các lần compact. Lưu plan, todo items, và trạng thái branch.',
      },
      {
        id: 'usage-quota-cache-refresh',
        name: 'usage-quota-cache-refresh.cjs',
        lines: 100,
        kits: ['ek'],
        triggers: ['SessionStart', 'UserPromptSubmit', 'PostToolUse'],
        descEn: 'Keep usage quota cache warm for statusline. Smart throttling: 60s for prompts, 300s for tool events.',
        descVi: 'Giữ cache usage quota cho statusline. Throttle thông minh: 60s cho prompt, 300s cho tool events.',
      },
      {
        id: 'usage-context-awareness',
        name: 'usage-context-awareness.cjs',
        lines: 39,
        kits: ['ek', 'mk'],
        triggers: ['(config-gated)'],
        descEn: 'Config gate wrapper for usage-quota-cache-refresh. Enables usage awareness via ck-config flag.',
        descVi: 'Config gate wrapper cho usage-quota-cache-refresh. Bật usage awareness qua ck-config flag.',
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
        kits: ['ek', 'mk'],
        triggers: ['UserPromptSubmit'],
        descEn: 'Inject session info, development rules, modularization reminders, and active plan context on every prompt.',
        descVi: 'Inject session info, development rules, modularization reminders, và plan context vào mỗi prompt.',
      },
      {
        id: 'subagent-init',
        name: 'subagent-init.cjs',
        lines: 229,
        kits: ['ek', 'mk'],
        triggers: ['SubagentStart'],
        descEn: 'Inject minimal context (~200 tokens) to subagents using environment variables from SessionStart.',
        descVi: 'Inject context tối giản (~200 tokens) vào subagents dùng env vars từ SessionStart.',
      },
      {
        id: 'team-context-inject',
        name: 'team-context-inject.cjs',
        lines: 176,
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
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Write)'],
        descEn: 'Enforce descriptive, kebab-case file naming when creating new files.',
        descVi: 'Enforce đặt tên file theo kebab-case mô tả rõ ràng khi tạo file mới.',
      },
      {
        id: 'simplify-gate',
        name: 'simplify-gate.cjs',
        lines: 85,
        kits: ['ek'],
        triggers: ['PostToolUse (Edit/Write/MultiEdit)'],
        descEn: 'Replaces post-edit-simplify-reminder. Auto-triggers code-simplifier when edit thresholds (400 LOC / 8 files) are breached.',
        descVi: 'Thay thế post-edit-simplify-reminder. Tự động trigger code-simplifier khi vượt ngưỡng edit (400 LOC / 8 files).',
      },
      {
        id: 'plan-format-kanban',
        name: 'plan-format-kanban.cjs',
        lines: 101,
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
        kits: ['ek', 'mk'],
        triggers: ['PreToolUse (Bash/Glob/Grep/Read/Edit/Write)'],
        descEn: 'Block access to sensitive files (.env, credentials). Requires explicit user approval to proceed.',
        descVi: 'Chặn truy cập file nhạy cảm (.env, credentials). Cần user phê duyệt để tiếp tục.',
      },
      {
        id: 'scout-block',
        name: 'scout-block.cjs',
        lines: 163,
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
        kits: ['ek'],
        triggers: ['SubagentStop (Plan)'],
        descEn: 'Remind to invoke /ck:cook after Plan subagent completes. Outputs plan path for new sessions.',
        descVi: 'Nhắc chạy /ck:cook sau khi Plan subagent hoàn thành. Xuất plan path cho session mới.',
      },
      {
        id: 'task-completed-handler',
        name: 'task-completed-handler.cjs',
        lines: 123,
        kits: ['ek'],
        triggers: ['TaskCompleted'],
        descEn: 'Log task completions and inject progress context when agents mark tasks done.',
        descVi: 'Log task completions và inject progress context khi agents đánh dấu task hoàn thành.',
      },
      {
        id: 'teammate-idle-handler',
        name: 'teammate-idle-handler.cjs',
        lines: 121,
        kits: ['ek'],
        triggers: ['TeammateIdle'],
        descEn: 'Inject available task context when a teammate goes idle. Can prevent idle via exit code.',
        descVi: 'Inject available task context khi teammate idle. Có thể ngăn idle qua exit code.',
      },
      {
        id: 'workflow-artifact-gate',
        name: 'workflow-artifact-gate.cjs',
        lines: 119,
        kits: ['ek'],
        triggers: ['PreToolUse (finalize stage)', 'manual CLI'],
        descEn: 'Validate ck:fix/ck:cook review artifacts (context-snippets, verification, review-decision, risk-gate) before finalize and ship-like actions. Opt-in via ck-config; fail-open on crash.',
        descVi: 'Validate review artifacts của ck:fix/ck:cook (context-snippets, verification, review-decision, risk-gate) trước khi finalize và ship-like actions. Bật qua ck-config; fail-open khi crash.',
      },
    ],
  },
  {
    id: 'deprecated',
    titleEn: 'Deprecated',
    titleVi: 'Deprecated',
    descEn: 'Hooks that are disabled or removed from the active distribution.',
    descVi: 'Hooks đã bị vô hiệu hoặc đã bị remove khỏi distribution hiện tại.',
    color: 'slate',
    icon: 'archive',
    hooks: [
      {
        id: 'skill-dedup',
        name: 'skill-dedup.cjs',
        lines: 269,
        kits: ['ek'],
        triggers: ['(disabled)'],
        deprecated: true,
        descEn: 'Prevented local skills from shadowing global versions. Disabled in v2.9.1 due to race condition with parallel sessions.',
        descVi: 'Ngăn local skills shadow global versions. Bị vô hiệu từ v2.9.1 do race condition với parallel sessions.',
      },
    ],
  },
];

// ─── Utility Library Modules ─────────────────────────────────────

export const libModules: LibModule[] = [
  { name: 'ck-config-utils', descEn: 'Read/validate .ck.json configuration', descVi: 'Đọc/validate cấu hình .ck.json' },
  { name: 'colors', descEn: 'ANSI color formatting', descVi: 'Format màu ANSI' },
  { name: 'config-counter', descEn: 'Track skills, hooks, agents counts', descVi: 'Đếm skills, hooks, agents' },
  { name: 'context-builder', descEn: 'Build session context with WARN 70% / CRITICAL 90% thresholds', descVi: 'Build session context với ngưỡng WARN 70% / CRITICAL 90%' },
  { name: 'git-info-cache', descEn: 'Cache git status for performance', descVi: 'Cache git status cho hiệu suất' },
  { name: 'hook-logger', descEn: 'Structured diagnostics with performance tracking', descVi: 'Structured diagnostics với performance tracking' },
  { name: 'privacy-checker', descEn: 'Block access to sensitive files (.env, credentials)', descVi: 'Chặn truy cập file nhạy cảm (.env, credentials)' },
  { name: 'project-detector', descEn: 'Detect project type and package manager', descVi: 'Nhận diện loại project và package manager' },
  { name: 'scout-checker', descEn: 'Check if scout agents are available', descVi: 'Kiểm tra scout agents có sẵn' },
  { name: 'session-state-manager', descEn: 'Manage session state persistence', descVi: 'Quản lý lưu trạng thái session' },
  { name: 'transcript-parser', descEn: 'Parse Claude conversation transcripts', descVi: 'Parse transcripts hội thoại Claude' },
  { name: 'usage-limits-cache', descEn: 'Atomic cache for usage quota snapshots', descVi: 'Atomic cache cho usage quota snapshots' },
];
