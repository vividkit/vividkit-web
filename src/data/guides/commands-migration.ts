// Commands Migration Data
// Extracted from commands-migration-table.astro to separate data from presentation
// Phase 1 of modularization: src/data/guides/commands-migration.ts

export interface MigrationRow {
  old: string;
  /** new command - uses 'ck:' prefix by default unless prefixType is 'purple' (ckm:) */
  new: string;
  /** 'teal' = Engineer Kit (ck:), 'purple' = Marketing Kit (ckm:) */
  prefixType?: 'teal' | 'purple';
  /** optional section divider label rendered as a colspan row */
  dividerLabel?: string;
}

// ─── Engineer Kit: Always-visible rows ───────────────────────────────────────
export const engineerMigrationAlways: MigrationRow[] = [
  { old: '/debug', new: '/ck:debug' },
  { old: '/plan', new: '/ck:plan' },
  { old: '/code @plan.md', new: '/ck:cook @plan.md' },
  { old: '/code:no-test', new: '/ck:cook add footer --no-test' },
  { old: '/code:parallel', new: '/ck:cook refactor api --parallel' },
  { old: '/code:auto', new: '/ck:cook add pagination --auto' },
  { old: '/plan:fast', new: '/ck:plan --fast add auth' },
  { old: '/plan:hard', new: '/ck:plan --hard migrate to microservices' },
];

// ─── Engineer Kit: Expandable extra rows ─────────────────────────────────────
export const engineerMigrationExtra: MigrationRow[] = [
  { old: '/plan:archive', new: '/ck:plan archive' },
  { old: '/plan:ci', new: '/ck:fix CI build failing --auto' },
  { old: '/fix:ci', new: '/ck:fix deploy pipeline error --auto' },
  { old: '/fix:test', new: '/ck:fix auth tests failing --review' },
  { old: '/fix:types', new: '/ck:fix type errors in utils --quick' },
  { old: '/fix:ui', new: '/ck:fix layout broken on mobile --parallel' },
  { old: '/git:cm', new: '/ck:git cm' },
  { old: '/git:cp', new: '/ck:git cp' },
  { old: '/git:pr', new: '/ck:git pr' },
  { old: '/git:merge', new: '/ck:git merge' },
  { old: '/design:video', new: '/ck:remotion [video or component]' },
  { old: '/design:3d', new: '/ck:threejs spinning globe with markers' },
  { old: '/design:screenshot', new: '/ck:frontend-design' },
  { old: '/design:describe', new: '/ck:frontend-design' },
  { old: '/review:codebase', new: '/ck:code-review codebase' },
  { old: '/review:codebase:parallel', new: '/ck:code-review codebase parallel' },
  { old: '/docs:init', new: '/ck:docs init' },
  { old: '/docs:update', new: '/ck:docs update' },
  { old: '/docs:summarize', new: '/ck:docs summarize' },
  { old: '/content:blog', new: '/ck:copywriting blog [context]' },
  { old: '/content:landing', new: '/ck:copywriting landing [context]' },
  { old: '/skill:create foo', new: '/ck:skill-creator foo' },
  { old: '/integrate:stripe', new: '/ck:payment-integration stripe checkout' },
  { old: '/integrate:sepay', new: '/ck:payment-integration sepay webhook' },
  { old: '/bootstrap:auto', new: '/ck:bootstrap --auto' },
  { old: '/bootstrap:auto:fast', new: '/ck:bootstrap --fast' },
  { old: '/bootstrap:auto:parallel', new: '/ck:bootstrap --parallel' },
  { old: '/test:ui', new: '/ck:test ui [url]' },
];

// ─── Marketing Kit: Always-visible rows ──────────────────────────────────────
export const marketingMigrationAlways: MigrationRow[] = [
  { old: '/mkt:plan', new: '/ckm:plan [task]', prefixType: 'purple' },
  { old: '/mkt:plan:fast', new: '/ckm:plan --fast [task]', prefixType: 'purple' },
  { old: '/mkt:plan:hard', new: '/ckm:plan --hard [task]', prefixType: 'purple' },
  { old: '/mkt:plan:cro', new: '/ckm:plan --cro landing-page', prefixType: 'purple' },
  { old: '/mkt:write:good', new: '/ckm:write:good [topic]', prefixType: 'purple' },
  { old: '/mkt:write:fast', new: '/ckm:write:fast [topic]', prefixType: 'purple' },
];

// ─── Marketing Kit: Expandable extra rows ────────────────────────────────────
export const marketingMigrationExtra: MigrationRow[] = [
  { old: '/mkt:write:cro', new: '/ckm:write:cro [page-url]', prefixType: 'purple' },
  { old: '/mkt:write:enhance', new: '/ckm:write:enhance [file]', prefixType: 'purple' },
  { old: '/mkt:write:blog', new: '/ckm:write:blog [topic]', prefixType: 'purple' },
  { old: '/mkt:write:audit', new: '/ckm:write:audit', prefixType: 'purple' },
  { old: '/mkt:write:publish', new: '/ckm:write:publish [file]', prefixType: 'purple' },
  { old: '/mkt:campaign:create', new: '/ckm:campaign:create [name]', prefixType: 'purple' },
  { old: '/mkt:campaign:status', new: '/ckm:campaign:status', prefixType: 'purple' },
  { old: '/mkt:campaign:analyze', new: '/ckm:campaign:analyze [period]', prefixType: 'purple' },
  { old: '/mkt:campaign:email', new: '/ckm:campaign:email [series]', prefixType: 'purple' },
  { old: '/mkt:seo:keywords', new: '/ckm:seo:keywords [query]', prefixType: 'purple' },
  { old: '/mkt:seo:audit', new: '/ckm:seo:audit [url]', prefixType: 'purple' },
  { old: '/mkt:seo:pseo', new: '/ckm:seo:pseo [template]', prefixType: 'purple' },
  { old: '/mkt:email:flow', new: '/ckm:email:flow [type]', prefixType: 'purple' },
  { old: '/mkt:email:sequence', new: '/ckm:email:sequence [type]', prefixType: 'purple' },
  { old: '/mkt:social:schedule', new: '/ckm:social:schedule', prefixType: 'purple' },
  { old: '/mkt:competitor', new: '/ckm:competitor [url]', prefixType: 'purple' },
  { old: '/mkt:video:create', new: '/ckm:video:create [topic]', prefixType: 'purple' },
  { old: '/mkt:video:script', new: '/ckm:video:script [topic]', prefixType: 'purple' },
  { old: '/mkt:youtube:blog', new: '/ckm:youtube:blog [url]', prefixType: 'purple' },
  { old: '/mkt:brand:update', new: '/ckm:brand:update [element]', prefixType: 'purple' },
  { old: '/mkt:docs:init', new: '/ckm:docs:init', prefixType: 'purple' },
  { old: '/mkt:docs:update', new: '/ckm:docs:update', prefixType: 'purple' },
  { old: '/fixing', new: '/ck:fix [issue] --auto|--review|--quick' },
  { old: '/test-orchestrator', new: '/ck:test [ui|workflow] [target]' },
  { old: '/mkt:preview', new: '/ckm:preview [path] --explain|--slides|--diagram|--ascii', prefixType: 'purple' },
  { old: '/mkt:storage', new: '/ckm:storage', prefixType: 'purple' },
  { old: '/mkt:storage:list', new: '/ckm:storage:list', prefixType: 'purple' },
  { old: '/mkt:storage:sync', new: '/ckm:storage:sync', prefixType: 'purple' },
  { old: '/mkt:storage:upload', new: '/ckm:storage:upload', prefixType: 'purple' },
  { old: '/mkt:storage:url', new: '/ckm:storage:url', prefixType: 'purple' },
  { old: '/mkt:dashboard', new: '/ckm:dashboard', prefixType: 'purple' },
  { old: '/mkt:dashboard:check', new: '/ckm:dashboard:check', prefixType: 'purple' },
  { old: '/mkt:analyze:report', new: '/ckm:analyze:report', prefixType: 'purple' },
  { old: '/mkt:init', new: '/ckm:init', prefixType: 'purple' },
  { old: '/mkt:ask [question]', new: '/ckm:ask [question]', prefixType: 'purple' },
  { old: '/mkt:funnel [action]', new: '/ckm:funnel [action] [type]', prefixType: 'purple' },
  { old: '/mkt:persona [action]', new: '/ckm:persona [action]', prefixType: 'purple' },
  { old: '/mkt:plan:parallel', new: '/ckm:plan --parallel [task]', prefixType: 'purple' },
  { old: '/mkt:plan:archive', new: '/ckm:plan archive', prefixType: 'purple' },
  { old: '/mkt:plan:validate', new: '/ckm:plan validate', prefixType: 'purple' },
  { old: '/mkt:write:formula [type]', new: '/ck:copywriting formula [type]' },
  { old: '/mkt:video:storyboard', new: '/ckm:video:storyboard [topic]', prefixType: 'purple' },
  { old: '/mkt:youtube:infographic', new: '/ckm:youtube:infographic [url]', prefixType: 'purple' },
  { old: '/mkt:youtube:social', new: '/ckm:youtube:social [url]', prefixType: 'purple' },
  { old: '/mkt:docs:summarize', new: '/ckm:docs:summarize', prefixType: 'purple' },
  { old: '/mkt:docs:llms', new: '/ckm:docs:llms', prefixType: 'purple' },
  { old: '/mkt:hub', new: '/ckm:hub [--stop|--scan]', prefixType: 'purple' },
  { old: '/mkt:slides:create', new: '/ckm:slides:create [topic]', prefixType: 'purple' },
  { old: '/mkt:skill:create', new: '/ckm:skill:create [name]', prefixType: 'purple' },
  { old: '/mkt:use-mcp', new: '/ckm:use-mcp', prefixType: 'purple' },
  { old: '/mkt:journal', new: '/ckm:journal', prefixType: 'purple' },
  { old: '/mkt:kanban', new: '/ckm:kanban', prefixType: 'purple' },
  { old: '/mkt:watzup', new: '/ckm:watzup', prefixType: 'purple' },
  { old: '/mkt:worktree', new: '/ckm:worktree', prefixType: 'purple' },
  { old: '/mkt:plan:two', new: '/ckm:plan --two [task]', prefixType: 'purple' },
  { old: '/mkt:plan:ci', new: '/ckm:fix ci [url]', prefixType: 'purple' },
  { old: '/mkt:ck-help', new: '/ckm:ck-help', prefixType: 'purple' },
  { old: '/mkt:write:blog-youtube', new: '/ckm:write:blog-youtube [url]', prefixType: 'purple' },
  { old: '/mkt:skill:add', new: '/ckm:skill:add [file]', prefixType: 'purple' },
  { old: '/mkt:skill:fix-logs', new: '/ckm:skill:fix-logs', prefixType: 'purple' },
  { old: '/mkt:skill:optimize', new: '/ckm:skill:optimize [name]', prefixType: 'purple' },
  { old: '/mkt:skill:optimize:auto', new: '/ckm:skill:optimize:auto [name]', prefixType: 'purple' },
  { old: '/mkt:skill:plan', new: '/ckm:skill:plan [name]', prefixType: 'purple' },
  { old: '/mkt:skill:update', new: '/ckm:skill:update [name]', prefixType: 'purple' },
  { old: '/mkt:test:ui', new: '/ck:test:ui [url]' },
  { old: '/mkt:test:workflow', new: '/ck:test:workflow [name]' },
];

// ─── Marketing Kit: Renamed skills section dividers ──────────────────────────
export const marketingRenamedMkt: MigrationRow[] = [
  { old: '/brand-guidelines', new: '/ckm:brand', prefixType: 'purple' },
  { old: '/campaign-management', new: '/ckm:campaign', prefixType: 'purple' },
  { old: '/competitor-alternatives', new: '/ckm:competitor', prefixType: 'purple' },
  { old: '/Debugging', new: '/ckm:debugging', prefixType: 'purple' },
  { old: '/email-marketing', new: '/ckm:email', prefixType: 'purple' },
  { old: '/seo-optimization', new: '/ckm:seo', prefixType: 'purple' },
  { old: '/slides-design', new: '/ckm:slides', prefixType: 'purple' },
  { old: '/social-media', new: '/ckm:social', prefixType: 'purple' },
  { old: '/video-production', new: '/ckm:video', prefixType: 'purple' },
  { old: '/youtube-handling', new: '/ckm:youtube', prefixType: 'purple' },
];

export const marketingRenamedShared: MigrationRow[] = [
  { old: '/frontend-dev-guidelines', new: '/ck:frontend-development' },
  { old: '/Problem-Solving Techniques', new: '/ck:problem-solving' },
  { old: '/remotion-best-practices', new: '/ck:remotion' },
];
