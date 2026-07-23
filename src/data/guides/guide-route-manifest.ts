import { LEGACY_GUIDE_CATALOG } from './legacy-guide-catalog.ts';

export type RouteCompatibilityPolicy =
  | 'preserve'
  | 'legacy-slug'
  | 'legacy-archive'
  | 'planned'
  | 'internal-only';

export interface GuideRouteManifestEntry {
  id: string;
  enPath: string;
  viPath?: string;
  requiredBuild: boolean;
  includeInSitemap: boolean;
  includeInLlms: boolean;
  compatibilityPolicy: RouteCompatibilityPolicy;
}

const LLM_GUIDE_SUFFIXES = new Set([
  '', 'ccs', 'ck-with-codex', 'claude-mechanics', 'cli', 'cli-commands', 'codex-app',
  'coexistence', 'commands', 'finding-unknowns', 'fix-logs', 'flowchart', 'happy-ccs',
  'hooks', 'how-ck-works', 'ide-config', 'inside-claudekit',
  'inside-claudekit/frontend-design', 'inside-claudekit/getting-started',
  'inside-claudekit/guard-rails', 'inside-claudekit/plan-modes', 'migrate', 'permissions',
  'promotions', 'remote-control', 'session-recovery', 'ui-review-gate', 'uiux',
  'what-is-claudekit', 'what-is-agentkit', 'workflows', 'agentkit',
]);

const LEGACY_SLUG_SUFFIXES = new Set([
  'ck-with-codex',
  'how-ck-works',
  'inside-claudekit',
  'inside-claudekit/frontend-design',
  'inside-claudekit/getting-started',
  'inside-claudekit/guard-rails',
  'inside-claudekit/plan-modes',
  'what-is-claudekit',
]);

const BASELINE_GUIDE_SUFFIXES = [
  '',
  'ccs',
  'ck-with-codex',
  'claude-mechanics',
  'cli',
  'cli-commands',
  'codex-app',
  'coexistence',
  'commands',
  'deals',
  'deals-admin',
  'donate',
  'finding-unknowns',
  'fix-logs',
  'flowchart',
  'happy-ccs',
  'hooks',
  'how-ck-works',
  'ide-config',
  'inside-claudekit',
  'inside-claudekit/frontend-design',
  'inside-claudekit/getting-started',
  'inside-claudekit/guard-rails',
  'inside-claudekit/plan-modes',
  'lucky-draw',
  'migrate',
  'permissions',
  'promotions',
  'remote-control',
  'session-recovery',
  'ui-review-gate',
  'uiux',
  'what-is-agentkit',
  'what-is-claudekit',
  'workflows',
] as const;

function guideEntry(suffix: string, requiredBuild = true): GuideRouteManifestEntry {
  const enPath = suffix ? `/guides/${suffix}` : '/guides';
  return {
    id: suffix || 'guides-home',
    enPath,
    viPath: `/vi${enPath}`,
    requiredBuild,
    includeInSitemap: true,
    includeInLlms: LLM_GUIDE_SUFFIXES.has(suffix),
    compatibilityPolicy: requiredBuild
      ? (LEGACY_SLUG_SUFFIXES.has(suffix) ? 'legacy-slug' : 'preserve')
      : 'planned',
  };
}

function legacyArchiveEntry(suffix: string): GuideRouteManifestEntry {
  const enPath = suffix ? `/legacy/guides/${suffix}` : '/legacy/guides';
  return {
    id: suffix ? `legacy:${suffix}` : 'legacy-guides-home',
    enPath,
    viPath: `/vi${enPath}`,
    requiredBuild: true,
    includeInSitemap: false,
    includeInLlms: false,
    compatibilityPolicy: 'legacy-archive',
  };
}

export const GUIDE_ROUTE_MANIFEST = [
  {
    id: 'home',
    enPath: '/',
    viPath: '/vi',
    requiredBuild: true,
    includeInSitemap: true,
    includeInLlms: false,
    compatibilityPolicy: 'preserve',
  },
  ...BASELINE_GUIDE_SUFFIXES.map((suffix) => guideEntry(suffix)),
  guideEntry('agentkit'),
  legacyArchiveEntry(''),
  ...LEGACY_GUIDE_CATALOG.map((entry) => legacyArchiveEntry(entry.suffix)),
  {
    id: 'not-found',
    enPath: '/404',
    requiredBuild: true,
    includeInSitemap: false,
    includeInLlms: false,
    compatibilityPolicy: 'internal-only',
  },
  {
    id: 'design-system',
    enPath: '/dev/design-system',
    requiredBuild: true,
    includeInSitemap: false,
    includeInLlms: false,
    compatibilityPolicy: 'internal-only',
  },
] satisfies readonly GuideRouteManifestEntry[];

function flattenRoutes(entries: readonly GuideRouteManifestEntry[]): readonly string[] {
  return entries.flatMap(({ enPath, viPath }) => viPath ? [enPath, viPath] : [enPath]);
}

export const BASELINE_ROUTE_IDENTITIES = flattenRoutes(
  GUIDE_ROUTE_MANIFEST.filter(({ id, requiredBuild, compatibilityPolicy }) => (
    id !== 'agentkit'
    && requiredBuild
    && compatibilityPolicy !== 'legacy-archive'
  )),
);

export const AGENTKIT_ROUTE_IDENTITIES = ['/guides/agentkit', '/vi/guides/agentkit'] as const;

export const LEGACY_ARCHIVE_ROUTE_IDENTITIES = flattenRoutes(
  GUIDE_ROUTE_MANIFEST.filter(({ compatibilityPolicy }) => compatibilityPolicy === 'legacy-archive'),
);

export const requiredBuildRouteIdentities = flattenRoutes(
  GUIDE_ROUTE_MANIFEST.filter(({ requiredBuild }) => requiredBuild),
);

export const sitemapRouteIdentities = flattenRoutes(
  GUIDE_ROUTE_MANIFEST.filter(({ includeInSitemap }) => includeInSitemap),
);

export const llmsRouteIdentities = flattenRoutes(
  GUIDE_ROUTE_MANIFEST.filter(({ includeInLlms }) => includeInLlms),
);
