/**
 * How AgentKit skills are invoked in the runtime, for the channel these guides document (stable).
 *
 * Since v3.0.0 (stable), runtimes register skills only as /ak-<slug> (Claude Code) and $ak-<slug>
 * (Codex); v2 used /ak:<slug>. Most guide data is still authored in the older colon form; everything
 * rendered passes through akInvocationText, which rewrites it to the separator below.
 */
export const AK_STABLE_SKILL_SEPARATOR: ':' | '-' = '-';

/** True only if stable used the v2 colon form, i.e. beta would differ from stable and need a callout. */
export const akStableUsesColon = AK_STABLE_SKILL_SEPARATOR === ':';

export function akCmd(slug: string, runtime: 'claude' | 'codex' = 'claude'): string {
  const bare = slug.replace(/^ak[-:]/, '');
  return `${runtime === 'codex' ? '$' : '/'}ak${AK_STABLE_SKILL_SEPARATOR}${bare}`;
}

/** Placeholder form for prose, e.g. /ak:<skill>. */
export function akCmdPattern(runtime: 'claude' | 'codex' = 'claude'): string {
  return akCmd('<skill>', runtime);
}

// /ak:x, $ak:x and the bare prefixes /ak:… or $ak: in prose.
const PREFIXED_COLON_RE = /(^|[^A-Za-z0-9_.])([/$])ak:/g;
// ak:x without a prefix, as the ak CLI accepts it (ak skills install ak:scout).
const BARE_COLON_RE = /(^|[^A-Za-z0-9_./$])ak:([a-z0-9])/g;

/** Rewrite colon-form skill invocations (/ak:x, $ak:x, ak:x, /ak:…) to the current stable separator. */
export function akInvocationText(text: string): string {
  if (AK_STABLE_SKILL_SEPARATOR === ':' || !text.includes('ak:')) return text;
  return text
    .replace(PREFIXED_COLON_RE, `$1$2ak${AK_STABLE_SKILL_SEPARATOR}`)
    .replace(BARE_COLON_RE, `$1ak${AK_STABLE_SKILL_SEPARATOR}$2`);
}

/** Apply akInvocationText to every string inside plain data (arrays and object literals). */
export function withAkInvocation<T>(value: T): T {
  if (AK_STABLE_SKILL_SEPARATOR === ':') return value;
  return mapStrings(value) as T;
}

function mapStrings(value: unknown): unknown {
  if (typeof value === 'string') return akInvocationText(value);
  if (Array.isArray(value)) return value.map(mapStrings);
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v)]));
  }
  return value;
}
