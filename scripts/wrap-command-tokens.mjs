/** Highlight /ak:…, $ak:…, --flags, and short flags only after whitespace/start. */
export const LONG_TOKEN_RE = /(?:\/ak:[a-z0-9-]+|\$ak:[a-z0-9-]+|--[a-z0-9][a-z0-9-]*)/g;
export const SHORT_FLAG_RE = /(^|[\s"'`])(-[a-z]{1,3})(?=[\s"'`|,)]|$)/g;

const SHORT_CHIP = '$1<code class="token">$2</code>';
export function wrapCommandTokens(value = '') {
  const escaped = String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped
    .replace(new RegExp(LONG_TOKEN_RE.source, 'g'), (flag) => `<code class="token">${flag}</code>`)
    .replace(new RegExp(SHORT_FLAG_RE.source, 'g'), SHORT_CHIP);
}

export function selfTestWrapCommandTokens() {
  const prose = wrapCommandTokens(
    '/ak:storage "privacy-first read-only 15-second pricing-page" --html -v',
  );
  const misses = [];
  if (!prose.includes('<code class="token">/ak:storage</code>')) misses.push('ak-command');
  if (!prose.includes('<code class="token">--html</code>')) misses.push('long-flag');
  if (!prose.includes('<code class="token">-v</code>')) misses.push('short-flag');
  if (prose.includes('<code class="token">-first</code>')) misses.push('hyphen-first');
  if (prose.includes('<code class="token">-only</code>')) misses.push('hyphen-only');
  if (prose.includes('<code class="token">-second</code>')) misses.push('hyphen-second');
  if (prose.includes('<code class="token">-page</code>')) misses.push('hyphen-page');
  if (!prose.includes('privacy-first')) misses.push('kept-privacy-first');
  if (misses.length) throw new Error(`wrap-command-tokens regression: ${misses.join(', ')}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  selfTestWrapCommandTokens();
  process.stdout.write('wrap-command-tokens self-test ok\n');
}
