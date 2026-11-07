#!/usr/bin/env node
/**
 * Keep the AgentKit skill detail pages' modernEngineer links in step with the
 * guides actually published in the modernEngineer "agentkit-skills" series.
 *
 * The skill detail page shows the modernEngineer card only for slugs listed in
 * src/data/guides/agentkit-modernengineer-guides.ts, so an unpublished guide
 * never becomes a 404 link. This script refreshes and checks that list against
 * the public catalog API (no key needed):
 *   GET https://modernengineer.dev/api/catalog?locale=<en|vi>&series=agentkit-skills
 *
 *   node scripts/check-ak-modernengineer-guides.mjs           # check (default)
 *   node scripts/check-ak-modernengineer-guides.mjs --write   # rewrite the data file from the live catalog
 *
 * Exit codes:
 *   0  data file matches the live catalog
 *   1  data file differs from the live catalog (run --write)
 *   2  catalog unreachable (network error, timeout, 5xx/429 after retries). Transient: re-run later.
 *   3  catalog answer failed validation (empty, incomplete, wrong locale or route, 4xx),
 *      an unknown argument, or a local error. Needs a person to look.
 * Exit 2 and 3 never write anything.
 * Local skills without a published guide are reported but never fail: their card stays hidden.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = join(ROOT, 'src/data/guides/agentkit-modernengineer-guides.ts');
const DETAILS_DIR = join(ROOT, 'src/data/guides/agentkit-skill-details');
const API = 'https://modernengineer.dev/api/catalog';
const SERIES = 'agentkit-skills';
const LOCALES = ['en', 'vi'];
const PAGE_SIZE = 100;
const REQUEST_TIMEOUT_MS = 10_000;
const ATTEMPTS = 4;

/** Not retried: a 4xx answer means the API contract changed, not a blip. */
class FatalHttpError extends Error {}
/** Still failing after every retry: network error, timeout or 5xx/429. Transient. */
class NetworkError extends Error {}

/** GET JSON, retrying network errors, timeouts, bad JSON and 5xx/429 with a short backoff. */
async function getJson(url) {
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
      if (res.ok) return await res.json();
      await res.body?.cancel();
      const retryable = res.status === 408 || res.status === 429 || res.status >= 500;
      if (!retryable) throw new FatalHttpError(`GET ${url} -> HTTP ${res.status}`);
      if (i >= ATTEMPTS) throw new NetworkError(`GET ${url} -> HTTP ${res.status} after ${ATTEMPTS} attempts`);
    } catch (err) {
      if (err instanceof FatalHttpError || err instanceof NetworkError) throw err;
      if (i >= ATTEMPTS) {
        const cause = err.cause?.code || err.cause?.message;
        if (err instanceof SyntaxError) throw new Error(`GET ${url} -> response is not JSON`);
        throw new NetworkError(`GET ${url} -> ${err.message}${cause ? ` (${cause})` : ''}`);
      }
    }
    await new Promise((r) => setTimeout(r, 500 * 2 ** (i - 1)));
  }
}

/** One full paged read of a locale; validates every item and the total. */
async function readSeriesOnce(locale) {
  const slugs = new Set();
  let offset = 0;
  let total = null;
  for (let guard = 0; guard < 50; guard++) {
    const url = `${API}?locale=${locale}&series=${SERIES}&limit=${PAGE_SIZE}&offset=${offset}`;
    const body = await getJson(url);
    if (!body || !Array.isArray(body.items) || typeof body.total !== 'number') {
      throw new Error(`GET ${url} -> unexpected response shape`);
    }
    total = body.total;
    for (const item of body.items) {
      const slug = item?.slug;
      if (typeof slug !== 'string' || !slug) throw new Error(`${locale}: item without slug`);
      // The page links to /<locale>/library/<slug>; refuse anything that would not resolve there.
      if (item.locale !== locale) throw new Error(`${locale}: ${slug} came back as locale ${item.locale}`);
      if (item.route !== `/${locale}/library/${slug}`) throw new Error(`${locale}: ${slug} has route ${item.route}`);
      slugs.add(slug);
    }
    if (typeof body.nextOffset !== 'number') return { slugs: [...slugs].sort(), total };
    offset = body.nextOffset;
  }
  throw new Error(`${locale}: catalog paging did not finish`);
}

/**
 * Every slug in the series for one locale. An empty series or a count that
 * differs from `total` (catalog changed mid-read) is retried once, then refused,
 * so a bad answer can never be written over a good list.
 */
async function fetchSeriesSlugs(locale) {
  let last;
  for (let attempt = 1; attempt <= 2; attempt++) {
    const { slugs, total } = await readSeriesOnce(locale);
    if (slugs.length > 0 && slugs.length === total) return slugs;
    last = `${locale}: catalog returned ${slugs.length} slugs for total ${total}`;
  }
  throw new Error(last);
}

/**
 * Slugs of the skill detail pages. The file name is the slug; a top-level
 * literal id must match it. Marketing files that spread the engineer file of
 * the same name inherit its id. Only used for advisory output.
 */
function readLocalSkillSlugs() {
  const slugs = new Set();
  const warnings = [];
  for (const kit of ['engineer', 'marketing']) {
    for (const name of readdirSync(join(DETAILS_DIR, kit))) {
      if (!name.endsWith('.ts')) continue;
      const slug = name.slice(0, -3);
      const src = readFileSync(join(DETAILS_DIR, kit, name), 'utf8');
      const m = src.match(/^ {2}['"]?id['"]?:\s*['"]([^'"]+)['"]/m);
      if (m && m[1] !== slug) warnings.push(`${kit}/${name}: id '${m[1]}' does not match file name`);
      slugs.add(slug);
    }
  }
  return { slugs: [...slugs].sort(), warnings };
}

/** Best-effort read of the stored lists, only to explain a difference. */
function readStoredLists(src) {
  const out = {};
  for (const locale of LOCALES) {
    const block = src.match(new RegExp(`^\\s*${locale}:\\s*\\[([\\s\\S]*?)\\]`, 'm'));
    out[locale] = block ? [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];
  }
  return out;
}

function renderDataFile(byLocale) {
  const list = (slugs) => slugs.map((s) => `    '${s}',`).join('\n');
  return `// Generated by scripts/check-ak-modernengineer-guides.mjs --write. Do not edit by hand.
// Slugs of the guides published in the modernEngineer "agentkit-skills" series, per language.
// A skill detail page shows its modernEngineer card only when its slug is listed here.

export type AkModernEngineerLocale = 'en' | 'vi';

export const akModernEngineerGuideSlugs: Record<AkModernEngineerLocale, readonly string[]> = {
${LOCALES.map((l) => `  ${l}: [\n${list(byLocale[l])}\n  ],`).join('\n')}
};

const published = Object.fromEntries(
  Object.entries(akModernEngineerGuideSlugs).map(([locale, slugs]) => [locale, new Set(slugs)]),
) as Record<AkModernEngineerLocale, Set<string>>;

/** URL of the skill's modernEngineer guide in this language, or null when it is not published. */
export function getAkModernEngineerGuideHref(locale: AkModernEngineerLocale, slug: string): string | null {
  return published[locale].has(slug) ? \`https://modernengineer.dev/\${locale}/library/\${slug}\` : null;
}
`;
}

const diff = (a, b) => a.filter((x) => !b.includes(x));

function readFileOrEmpty(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return '';
  }
}

async function main(argv) {
  // pnpm forwards a bare `--` (pnpm audit:ak-modernengineer -- --write), so accept it.
  const unknown = argv.filter((a) => a !== '--write' && a !== '--');
  if (unknown.length) {
    process.stderr.write(`Unknown argument: ${unknown.join(' ')}\nUsage: check-ak-modernengineer-guides.mjs [--write]\n`);
    process.exit(3);
  }
  const write = argv.includes('--write');

  const live = {};
  try {
    for (const locale of LOCALES) live[locale] = await fetchSeriesSlugs(locale);
  } catch (err) {
    const transient = err instanceof NetworkError;
    process.stderr.write(
      `modernEngineer catalog ${transient ? 'unreachable' : 'answer failed validation'}: ${err.message}\nNothing was written.\n`,
    );
    process.exit(transient ? 2 : 3);
  }

  const local = readLocalSkillSlugs();
  for (const w of local.warnings) process.stdout.write(`  warning ${w}\n`);
  for (const locale of LOCALES) {
    const missing = diff(local.slugs, live[locale]);
    process.stdout.write(`${locale}: catalog=${live[locale].length} local=${local.slugs.length} without-guide=${missing.length}\n`);
    for (const slug of missing) process.stdout.write(`  no-guide ${locale} ${slug} (card hidden)\n`);
  }

  const expected = renderDataFile(live);
  if (write) {
    writeFileSync(DATA_FILE, expected);
    process.stdout.write(`wrote ${DATA_FILE.replace(`${ROOT}/`, '')}\n`);
    return;
  }

  const current = readFileOrEmpty(DATA_FILE);
  if (current === expected) {
    process.stdout.write('modernEngineer guide list in sync\n');
    return;
  }
  const stored = readStoredLists(current);
  for (const locale of LOCALES) {
    for (const slug of diff(live[locale], stored[locale])) {
      process.stdout.write(`  stale ${locale} ${slug}: published but not in data file\n`);
    }
    for (const slug of diff(stored[locale], live[locale])) {
      process.stdout.write(`  stale ${locale} ${slug}: in data file but no longer published (404 link)\n`);
    }
  }
  process.stderr.write('Data file differs from the generated output. Run: node scripts/check-ak-modernengineer-guides.mjs --write\n');
  process.exit(1);
}

main(process.argv.slice(2)).catch((err) => {
  // Local I/O or other unexpected errors: not "stale" (1) and not a network blip (2).
  process.stderr.write(`check-ak-modernengineer-guides failed: ${err.stack || err.message}\n`);
  process.exit(3);
});
