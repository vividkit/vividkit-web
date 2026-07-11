// Commands Migration Data
// Extracted from commands-migration-table.astro to separate data from presentation
// Phase 1 of modularization: src/data/guides/commands-migration.ts
import { AGENTKIT_MIGRATION_MAPPING_BY_LOCALE } from './agentkit/agentkit-migration-mapping.ts';

export interface MigrationRow {
  old: string;
  /** Canonical AgentKit replacement. */
  new: string;
  /** All rows intentionally preserve historical syntax. */
  legacy: true;
  /** Reader-facing compatibility context for the legacy syntax. */
  compatibilityNote: string;
  compatibilityNoteVi: string;
  /** Retained only for visual grouping; both kits now share /ak:. */
  prefixType?: 'teal' | 'purple';
  /** optional section divider label rendered as a colspan row */
  dividerLabel?: string;
}

type MigrationRowInput = Omit<MigrationRow, 'legacy' | 'compatibilityNote' | 'compatibilityNoteVi'> & {
  compatibilityNote?: string;
  compatibilityNoteVi?: string;
};

const prefixNotes = {
  engineer: {
    en: AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.en.find(({ id }) => id === 'engineer-prefix')!.summary,
    vi: AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.vi.find(({ id }) => id === 'engineer-prefix')!.summary,
  },
  marketing: {
    en: AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.en.find(({ id }) => id === 'marketing-prefix')!.summary,
    vi: AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.vi.find(({ id }) => id === 'marketing-prefix')!.summary,
  },
};

function withLegacyMetadata(rows: MigrationRowInput[]): MigrationRow[] {
  return rows.map((row) => {
    const note = row.prefixType === 'purple' ? prefixNotes.marketing : prefixNotes.engineer;
    return {
      ...row,
      legacy: true,
      compatibilityNote: row.compatibilityNote ?? note.en,
      compatibilityNoteVi: row.compatibilityNoteVi ?? note.vi,
    };
  });
}

// ─── Engineer Kit: Always-visible rows ───────────────────────────────────────
export const engineerMigrationAlways: MigrationRow[] = withLegacyMetadata([
  { old: '/debug', new: '/ak:debug' },
  { old: '/plan', new: '/ak:plan' },
  { old: '/code @plan.md', new: '/ak:cook @plan.md' },
  { old: '/code:no-test', new: '/ak:cook add footer --no-test' },
  { old: '/code:parallel', new: '/ak:cook refactor api --parallel' },
  { old: '/code:auto', new: '/ak:cook add pagination --auto' },
  { old: '/plan:fast', new: '/ak:plan --fast add auth' },
  { old: '/plan:hard', new: '/ak:plan --hard migrate to microservices' },
]);

// ─── Engineer Kit: Expandable extra rows ─────────────────────────────────────
export const engineerMigrationExtra: MigrationRow[] = withLegacyMetadata([
  { old: '/plan:archive', new: '/ak:plan archive' },
  { old: '/plan:ci', new: '/ak:fix CI build failing --auto' },
  { old: '/fix:ci', new: '/ak:fix deploy pipeline error --auto' },
  { old: '/fix:test', new: '/ak:fix auth tests failing --review' },
  { old: '/fix:types', new: '/ak:fix type errors in utils --quick' },
  { old: '/fix:ui', new: '/ak:fix layout broken on mobile --parallel' },
  { old: '/git:cm', new: '/ak:git cm' },
  { old: '/git:cp', new: '/ak:git cp' },
  { old: '/git:pr', new: '/ak:git pr' },
  { old: '/git:merge', new: '/ak:git merge' },
  { old: '/design:video', new: '/ak:remotion [video or component]' },
  { old: '/design:3d', new: '/ak:threejs rotating globe with markers' },
  { old: '/design:screenshot', new: '/ak:frontend-design' },
  { old: '/design:describe', new: '/ak:frontend-design' },
  { old: '/review:codebase', new: '/ak:code-review codebase' },
  { old: '/review:codebase:parallel', new: '/ak:code-review codebase parallel' },
  { old: '/docs:init', new: '/ak:docs init' },
  { old: '/docs:update', new: '/ak:docs update' },
  { old: '/docs:summarize', new: '/ak:docs summarize' },
  { old: '/content:blog', new: '/ak:copywriting blog [context]' },
  { old: '/content:landing', new: '/ak:copywriting landing [context]' },
  { old: '/skill:create foo', new: '/ak:skill-creator foo' },
  { old: '/integrate:stripe', new: '/ak:payment-integration stripe checkout' },
  { old: '/integrate:sepay', new: '/ak:payment-integration sepay webhook' },
  { old: '/bootstrap:auto', new: '/ak:bootstrap --auto' },
  { old: '/bootstrap:auto:fast', new: '/ak:bootstrap --fast' },
  { old: '/bootstrap:auto:parallel', new: '/ak:bootstrap --parallel' },
  { old: '/test:ui', new: '/ak:test ui [url]' },
]);

// ─── Marketing Kit: Always-visible rows ──────────────────────────────────────
export const marketingMigrationAlways: MigrationRow[] = withLegacyMetadata([
  { old: '/mkt:plan', new: '/ak:plan [task]', prefixType: 'purple' },
  { old: '/mkt:plan:fast', new: '/ak:plan --fast [task]', prefixType: 'purple' },
  { old: '/mkt:plan:hard', new: '/ak:plan --hard [task]', prefixType: 'purple' },
  { old: '/mkt:plan:cro', new: '/ak:plan --cro landing-page', prefixType: 'purple' },
  { old: '/mkt:write:good', new: '/ak:write:good [topic]', prefixType: 'purple' },
  { old: '/mkt:write:fast', new: '/ak:write:fast [topic]', prefixType: 'purple' },
]);

// ─── Marketing Kit: Expandable extra rows ────────────────────────────────────
export const marketingMigrationExtra: MigrationRow[] = withLegacyMetadata([
  { old: '/mkt:write:cro', new: '/ak:write:cro [page-url]', prefixType: 'purple' },
  { old: '/mkt:write:enhance', new: '/ak:write:enhance [file]', prefixType: 'purple' },
  { old: '/mkt:write:blog', new: '/ak:write:blog [topic]', prefixType: 'purple' },
  { old: '/mkt:write:audit', new: '/ak:write:audit', prefixType: 'purple' },
  { old: '/mkt:write:publish', new: '/ak:write:publish [file]', prefixType: 'purple' },
  { old: '/mkt:campaign:create', new: '/ak:campaign:create [name]', prefixType: 'purple' },
  { old: '/mkt:campaign:status', new: '/ak:campaign:status', prefixType: 'purple' },
  { old: '/mkt:campaign:analyze', new: '/ak:campaign:analyze [period]', prefixType: 'purple' },
  { old: '/mkt:campaign:email', new: '/ak:campaign:email [series]', prefixType: 'purple' },
  { old: '/mkt:seo:keywords', new: '/ak:seo:keywords [query]', prefixType: 'purple' },
  { old: '/mkt:seo:audit', new: '/ak:seo:audit [url]', prefixType: 'purple' },
  { old: '/mkt:seo:pseo', new: '/ak:seo:pseo [template]', prefixType: 'purple' },
  { old: '/mkt:email:flow', new: '/ak:email:flow [type]', prefixType: 'purple' },
  { old: '/mkt:email:sequence', new: '/ak:email:sequence [type]', prefixType: 'purple' },
  { old: '/mkt:social:schedule', new: '/ak:social:schedule', prefixType: 'purple' },
  { old: '/mkt:competitor', new: '/ak:competitor [url]', prefixType: 'purple' },
  { old: '/mkt:video:create', new: '/ak:video:create [topic]', prefixType: 'purple' },
  { old: '/mkt:video:script', new: '/ak:video:script [topic]', prefixType: 'purple' },
  { old: '/mkt:youtube:blog', new: '/ak:youtube:blog [url]', prefixType: 'purple' },
  { old: '/mkt:brand:update', new: '/ak:brand:update [element]', prefixType: 'purple' },
  { old: '/mkt:docs:init', new: '/ak:docs:init', prefixType: 'purple' },
  { old: '/mkt:docs:update', new: '/ak:docs:update', prefixType: 'purple' },
  { old: '/fixing', new: '/ak:fix [issue] --auto|--review|--quick' },
  { old: '/test-orchestrator', new: '/ak:test [ui|workflow] [target]' },
  { old: '/mkt:preview', new: '/ak:preview [path] --explain|--slides|--diagram|--ascii', prefixType: 'purple' },
  { old: '/mkt:storage', new: '/ak:storage', prefixType: 'purple' },
  { old: '/mkt:storage:list', new: '/ak:storage:list', prefixType: 'purple' },
  { old: '/mkt:storage:sync', new: '/ak:storage:sync', prefixType: 'purple' },
  { old: '/mkt:storage:upload', new: '/ak:storage:upload', prefixType: 'purple' },
  { old: '/mkt:storage:url', new: '/ak:storage:url', prefixType: 'purple' },
  { old: '/mkt:dashboard', new: '/ak:dashboard', prefixType: 'purple' },
  { old: '/mkt:dashboard:check', new: '/ak:dashboard:check', prefixType: 'purple' },
  { old: '/mkt:analyze:report', new: '/ak:analyze:report', prefixType: 'purple' },
  { old: '/mkt:init', new: '/ak:init', prefixType: 'purple' },
  { old: '/mkt:ask [question]', new: '/ak:ask [question]', prefixType: 'purple' },
  { old: '/mkt:funnel [action]', new: '/ak:funnel [action] [type]', prefixType: 'purple' },
  { old: '/mkt:persona [action]', new: '/ak:persona [action]', prefixType: 'purple' },
  { old: '/mkt:plan:parallel', new: '/ak:plan --parallel [task]', prefixType: 'purple' },
  { old: '/mkt:plan:archive', new: '/ak:plan archive', prefixType: 'purple' },
  { old: '/mkt:plan:validate', new: '/ak:plan validate', prefixType: 'purple' },
  { old: '/mkt:write:formula [type]', new: '/ak:copywriting formula [type]' },
  { old: '/mkt:video:storyboard', new: '/ak:video:storyboard [topic]', prefixType: 'purple' },
  { old: '/mkt:youtube:infographic', new: '/ak:youtube:infographic [url]', prefixType: 'purple' },
  { old: '/mkt:youtube:social', new: '/ak:youtube:social [url]', prefixType: 'purple' },
  { old: '/mkt:docs:summarize', new: '/ak:docs:summarize', prefixType: 'purple' },
  { old: '/mkt:docs:llms', new: '/ak:docs:llms', prefixType: 'purple' },
  { old: '/mkt:hub', new: '/ak:hub [--stop|--scan]', prefixType: 'purple' },
  { old: '/mkt:slides:create', new: '/ak:slides:create [topic]', prefixType: 'purple' },
  { old: '/mkt:skill:create', new: '/ak:skill:create [name]', prefixType: 'purple' },
  { old: '/mkt:use-mcp', new: '/ak:use-mcp', prefixType: 'purple' },
  { old: '/mkt:journal', new: '/ak:journal', prefixType: 'purple' },
  { old: '/mkt:kanban', new: '/ak:kanban', prefixType: 'purple' },
  { old: '/mkt:watzup', new: '/ak:watzup', prefixType: 'purple' },
  { old: '/mkt:worktree', new: '/ak:worktree', prefixType: 'purple' },
  { old: '/mkt:plan:two', new: '/ak:plan --two [task]', prefixType: 'purple' },
  { old: '/mkt:plan:ci', new: '/ak:fix ci [url]', prefixType: 'purple' },
  { old: '/mkt:ck-help', new: '/ak:ck-help', prefixType: 'purple' },
  { old: '/mkt:write:blog-youtube', new: '/ak:write:blog-youtube [url]', prefixType: 'purple' },
  { old: '/mkt:skill:add', new: '/ak:skill:add [file]', prefixType: 'purple' },
  { old: '/mkt:skill:fix-logs', new: '/ak:skill:fix-logs', prefixType: 'purple' },
  { old: '/mkt:skill:optimize', new: '/ak:skill:optimize [name]', prefixType: 'purple' },
  { old: '/mkt:skill:optimize:auto', new: '/ak:skill:optimize:auto [name]', prefixType: 'purple' },
  { old: '/mkt:skill:plan', new: '/ak:skill:plan [name]', prefixType: 'purple' },
  { old: '/mkt:skill:update', new: '/ak:skill:update [name]', prefixType: 'purple' },
  { old: '/mkt:test:ui', new: '/ak:test:ui [url]' },
  { old: '/mkt:test:workflow', new: '/ak:test:workflow [name]' },
]);

// ─── Marketing Kit: Renamed skills section dividers ──────────────────────────
export const marketingRenamedMkt: MigrationRow[] = withLegacyMetadata([
  { old: '/brand-guidelines', new: '/ak:brand', prefixType: 'purple' },
  { old: '/campaign-management', new: '/ak:campaign', prefixType: 'purple' },
  { old: '/competitor-alternatives', new: '/ak:competitor', prefixType: 'purple' },
  { old: '/Debugging', new: '/ak:debugging', prefixType: 'purple' },
  { old: '/email-marketing', new: '/ak:email', prefixType: 'purple' },
  { old: '/seo-optimization', new: '/ak:seo', prefixType: 'purple' },
  { old: '/slides-design', new: '/ak:slides', prefixType: 'purple' },
  { old: '/social-media', new: '/ak:social', prefixType: 'purple' },
  { old: '/video-production', new: '/ak:video', prefixType: 'purple' },
  { old: '/youtube-handling', new: '/ak:youtube', prefixType: 'purple' },
]);

export const marketingRenamedShared: MigrationRow[] = withLegacyMetadata([
  { old: '/frontend-dev-guidelines', new: '/ak:frontend-development' },
  { old: '/Problem-Solving Techniques', new: '/ak:problem-solving' },
  { old: '/remotion-best-practices', new: '/ak:remotion' },
]);
