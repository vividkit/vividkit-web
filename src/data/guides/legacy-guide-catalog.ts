/**
 * Full ClaudeKit docs archive catalog under /legacy/guides.
 * Spec: full catalog In; Out = agentkit, deals*, donate, lucky-draw, promotions.
 */

export type LegacyGuidePathwayId =
  | 'start'
  | 'commands'
  | 'config'
  | 'providers'
  | 'environments'
  | 'reliability'
  | 'deep';

export type LegacyFreezeStatus = 'stub' | 'frozen';

export interface LegacyGuideCatalogEntry {
  /** Path suffix after /legacy/guides/ — empty string = archive home */
  suffix: string;
  titleEn: string;
  titleVi: string;
  pathway: LegacyGuidePathwayId;
  /** Matching live AgentKit (or retained) guide under /guides */
  currentGuideSuffix: string;
  freezeStatus: LegacyFreezeStatus;
}

export const LEGACY_GUIDE_PATHWAY_META: Record<
  LegacyGuidePathwayId,
  { titleEn: string; titleVi: string; order: number }
> = {
  start: { titleEn: 'Start here', titleVi: 'Bắt đầu', order: 1 },
  commands: { titleEn: 'Commands & workflows', titleVi: 'Commands & workflows', order: 2 },
  config: { titleEn: 'Configure & extend', titleVi: 'Cấu hình & mở rộng', order: 3 },
  providers: { titleEn: 'AI tools & runtimes', titleVi: 'AI tools & runtimes', order: 4 },
  environments: { titleEn: 'Environments & devices', titleVi: 'Môi trường & thiết bị', order: 5 },
  reliability: { titleEn: 'Debug, recover & polish', titleVi: 'Debug, recover & polish', order: 6 },
  deep: { titleEn: 'Deep dives', titleVi: 'Đi sâu', order: 7 },
};

const stub = {
  freezeStatus: 'stub' as const,
};

/** Content pages only (excludes archive index). */
export const LEGACY_GUIDE_CATALOG = [
  { suffix: 'what-is-claudekit', titleEn: 'What is ClaudeKit?', titleVi: 'ClaudeKit là gì?', pathway: 'start', currentGuideSuffix: 'what-is-claudekit', ...stub },
  { suffix: 'how-ck-works', titleEn: 'How ClaudeKit Works', titleVi: 'How ClaudeKit Works', pathway: 'start', currentGuideSuffix: 'how-ck-works', ...stub },
  { suffix: 'cli', titleEn: 'CLI Guide', titleVi: 'Hướng dẫn CLI', pathway: 'start', currentGuideSuffix: 'cli', ...stub },
  { suffix: 'cli-commands', titleEn: 'CLI Commands', titleVi: 'Lệnh CLI', pathway: 'start', currentGuideSuffix: 'cli-commands', ...stub },

  { suffix: 'commands', titleEn: 'Commands', titleVi: 'Commands', pathway: 'commands', currentGuideSuffix: 'commands', ...stub },
  { suffix: 'workflows', titleEn: 'Workflows', titleVi: 'Workflows', pathway: 'commands', currentGuideSuffix: 'workflows', ...stub },
  { suffix: 'flowchart', titleEn: 'Visual Flowchart', titleVi: 'Flowchart', pathway: 'commands', currentGuideSuffix: 'flowchart', ...stub },
  { suffix: 'finding-unknowns', titleEn: 'Finding Your Unknowns', titleVi: 'Finding Your Unknowns', pathway: 'commands', currentGuideSuffix: 'finding-unknowns', ...stub },

  { suffix: 'claude-mechanics', titleEn: 'Claude Mechanics', titleVi: 'Claude Mechanics', pathway: 'config', currentGuideSuffix: 'claude-mechanics', freezeStatus: 'frozen' },
  { suffix: 'permissions', titleEn: 'Permissions', titleVi: 'Permissions', pathway: 'config', currentGuideSuffix: 'permissions', ...stub },
  { suffix: 'hooks', titleEn: 'Hooks', titleVi: 'Hooks', pathway: 'config', currentGuideSuffix: 'hooks', ...stub },
  { suffix: 'ui-review-gate', titleEn: 'UI Review Gate', titleVi: 'UI Review Gate', pathway: 'config', currentGuideSuffix: 'ui-review-gate', ...stub },
  { suffix: 'coexistence', titleEn: 'Coexistence', titleVi: 'Coexistence', pathway: 'config', currentGuideSuffix: 'coexistence', freezeStatus: 'frozen' },

  { suffix: 'ccs', titleEn: 'CCS', titleVi: 'CCS', pathway: 'providers', currentGuideSuffix: 'ccs', ...stub },
  { suffix: 'happy-ccs', titleEn: 'Happy CCS', titleVi: 'Happy CCS', pathway: 'providers', currentGuideSuffix: 'happy-ccs', ...stub },
  { suffix: 'ck-with-codex', titleEn: 'CK with Codex', titleVi: 'CK with Codex', pathway: 'providers', currentGuideSuffix: 'ck-with-codex', freezeStatus: 'frozen' },
  { suffix: 'codex-app', titleEn: 'Codex App', titleVi: 'Codex App', pathway: 'providers', currentGuideSuffix: 'codex-app', ...stub },
  { suffix: 'migrate', titleEn: 'Migrate (CK provider migrate)', titleVi: 'Migrate (CK provider migrate)', pathway: 'providers', currentGuideSuffix: 'migrate', ...stub },

  { suffix: 'ide-config', titleEn: 'IDE Config', titleVi: 'IDE Config', pathway: 'environments', currentGuideSuffix: 'ide-config', ...stub },
  { suffix: 'remote-control', titleEn: 'Remote Control', titleVi: 'Remote Control', pathway: 'environments', currentGuideSuffix: 'remote-control', ...stub },

  { suffix: 'uiux', titleEn: 'UI/UX', titleVi: 'UI/UX', pathway: 'reliability', currentGuideSuffix: 'uiux', ...stub },
  { suffix: 'session-recovery', titleEn: 'Session Recovery', titleVi: 'Session Recovery', pathway: 'reliability', currentGuideSuffix: 'session-recovery', ...stub },
  { suffix: 'fix-logs', titleEn: 'Fix from Logs', titleVi: 'Fix from Logs', pathway: 'reliability', currentGuideSuffix: 'fix-logs', ...stub },

  { suffix: 'inside-claudekit', titleEn: 'Inside ClaudeKit', titleVi: 'Inside ClaudeKit', pathway: 'deep', currentGuideSuffix: 'inside-claudekit', ...stub },
  { suffix: 'inside-claudekit/frontend-design', titleEn: 'Frontend Design', titleVi: 'Frontend Design', pathway: 'deep', currentGuideSuffix: 'inside-claudekit/frontend-design', ...stub },
  { suffix: 'inside-claudekit/getting-started', titleEn: 'Getting Started', titleVi: 'Getting Started', pathway: 'deep', currentGuideSuffix: 'inside-claudekit/getting-started', ...stub },
  { suffix: 'inside-claudekit/guard-rails', titleEn: 'Guard Rails', titleVi: 'Guard Rails', pathway: 'deep', currentGuideSuffix: 'inside-claudekit/guard-rails', ...stub },
  { suffix: 'inside-claudekit/plan-modes', titleEn: 'Plan Modes', titleVi: 'Plan Modes', pathway: 'deep', currentGuideSuffix: 'inside-claudekit/plan-modes', ...stub },
] as const satisfies readonly LegacyGuideCatalogEntry[];

export type LegacyGuideSuffix = (typeof LEGACY_GUIDE_CATALOG)[number]['suffix'];

export const LEGACY_GUIDE_SUFFIXES: readonly string[] = LEGACY_GUIDE_CATALOG.map((entry) => entry.suffix);

export const LEGACY_FROZEN_SUFFIXES = LEGACY_GUIDE_CATALOG
  .filter((entry) => entry.freezeStatus === 'frozen')
  .map((entry) => entry.suffix);

export function getLegacyGuideEntry(suffix: string): LegacyGuideCatalogEntry | undefined {
  return LEGACY_GUIDE_CATALOG.find((entry) => entry.suffix === suffix);
}

export function legacyGuidePath(suffix: string, lang: 'en' | 'vi' = 'en'): string {
  const base = suffix ? `/legacy/guides/${suffix}` : '/legacy/guides';
  return lang === 'vi' ? `/vi${base}` : base;
}

export function currentGuidePath(suffix: string, lang: 'en' | 'vi' = 'en'): string {
  const base = suffix ? `/guides/${suffix}` : '/guides';
  return lang === 'vi' ? `/vi${base}` : base;
}

export function legacyGuidesByPathway(): Array<{
  pathway: LegacyGuidePathwayId;
  meta: (typeof LEGACY_GUIDE_PATHWAY_META)[LegacyGuidePathwayId];
  entries: readonly LegacyGuideCatalogEntry[];
}> {
  return (Object.keys(LEGACY_GUIDE_PATHWAY_META) as LegacyGuidePathwayId[])
    .sort((a, b) => LEGACY_GUIDE_PATHWAY_META[a].order - LEGACY_GUIDE_PATHWAY_META[b].order)
    .map((pathway) => ({
      pathway,
      meta: LEGACY_GUIDE_PATHWAY_META[pathway],
      entries: LEGACY_GUIDE_CATALOG.filter((entry) => entry.pathway === pathway),
    }));
}
