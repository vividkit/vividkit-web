#!/usr/bin/env node
/**
 * Fail when skill-detail operating-rule cards would hide, empty, or dummy
 * a core principle. Mirrors infographic-generic-command-quick-ref.astro:
 * every corePrinciples* string becomes one card; expertiseAreas is not used.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DETAILS = join(ROOT, 'src/data/guides/agentkit-skill-details');
const RENDERER = join(
  ROOT,
  'src/components/guides/how-ck-works/infographic/infographic-generic-command-quick-ref.astro',
);
const GENERIC_RE =
  /Giữ command chạy đúng ranh giới của workflow\.?|Keeps the command inside its intended workflow boundary\.?/i;

function extractStringArray(src, key) {
  const re = new RegExp(`["']?${key}["']?\\s*:\\s*\\[`);
  const m = re.exec(src);
  if (!m) return [];
  let depth = 0;
  const start = m.index + m[0].length - 1;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) {
        const body = src.slice(start + 1, i);
        return [...body.matchAll(/'((?:\\'|[^'])*)'/g), ...body.matchAll(/"((?:\\"|[^"])*)"/g)]
          .map((hit) => hit[1].replace(/\\'/g, "'").replace(/\\"/g, '"').trim());
      }
    }
  }
  return [];
}

function listDetailFiles() {
  const files = [];
  for (const kit of ['engineer', 'marketing']) {
    const dir = join(DETAILS, kit);
    for (const name of readdirSync(dir).filter((f) => f.endsWith('.ts') && f.startsWith('ak-'))) {
      files.push({ kit, file: name, path: join(dir, name) });
    }
  }
  return files;
}

function checkRenderer(src) {
  const violations = [];
  if (/principles\.slice\(/.test(src) || /ruleCards\s*=\s*principles\.slice\(/.test(src)) {
    violations.push('renderer still slices core principles');
  }
  if (/expertise\[index\]/.test(src)) {
    violations.push('renderer still pairs principle cards with expertiseAreas');
  }
  if (GENERIC_RE.test(src)) {
    violations.push('renderer still contains generic workflow-boundary fallback copy');
  }
  if (!/Nguyên tắc/.test(src) || !/Rule \$\{/.test(src) && !/`Rule /.test(src)) {
    if (!/Nguyên tắc/.test(src) || !/Rule /.test(src)) {
      violations.push('renderer missing numbered Rule / Nguyên tắc headings');
    }
  }
  return violations;
}

function checkFile(src, kit, file) {
  const violations = [];
  const en = extractStringArray(src, 'corePrinciplesEn');
  const vi = extractStringArray(src, 'corePrinciplesVi');
  if (en.length !== vi.length) {
    violations.push(`${kit}/${file}: EN ${en.length} principles vs VI ${vi.length}`);
  }
  en.forEach((p, i) => {
    if (!p) violations.push(`${kit}/${file}: empty corePrinciplesEn[${i}]`);
    if (GENERIC_RE.test(p)) violations.push(`${kit}/${file}: generic EN principle ${i}`);
  });
  vi.forEach((p, i) => {
    if (!p) violations.push(`${kit}/${file}: empty corePrinciplesVi[${i}]`);
    if (GENERIC_RE.test(p)) violations.push(`${kit}/${file}: generic VI principle ${i}`);
  });
  return { en, vi, violations };
}

function selfTest() {
  const src = `
    corePrinciplesEn: ['Keep the plan files canonical.', 'Do not implement while planning.'],
    corePrinciplesVi: ['File plan là nguồn chuẩn.', 'Không triển khai khi đang lập plan.'],
  `;
  const { en, vi, violations } = checkFile(src, 'engineer', 'ak-plan.ts');
  if (en.length !== 2 || vi.length !== 2 || violations.length) {
    throw new Error(`self-test parse failed: ${JSON.stringify({ en, vi, violations })}`);
  }
  const bad = checkFile(
    `corePrinciplesEn: ['', 'Keeps the command inside its intended workflow boundary.'], corePrinciplesVi: ['Một']`,
    'engineer',
    'ak-bad.ts',
  );
  if (bad.violations.length < 3) {
    throw new Error(`self-test expected count/empty/generic failures, got ${JSON.stringify(bad.violations)}`);
  }
  process.stdout.write('self-test ok\n');
}

function main(argv) {
  if (argv.includes('--self-test')) {
    selfTest();
    return;
  }
  const renderer = readFileSync(RENDERER, 'utf8');
  const violations = checkRenderer(renderer);
  const files = listDetailFiles();
  const counts = new Map();
  for (const item of files) {
    const src = readFileSync(item.path, 'utf8');
    const result = checkFile(src, item.kit, item.file);
    violations.push(...result.violations);
    const n = result.en.length;
    counts.set(n, (counts.get(n) || 0) + 1);
  }
  if (violations.length) {
    process.stderr.write(`${violations.length} principle-card violation(s)\n`);
    for (const v of violations) process.stderr.write(`  - ${v}\n`);
    process.exit(1);
  }
  const summary = [...counts.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([n, c]) => `${c} file(s) with ${n} principle(s)`)
    .join(', ');
  process.stdout.write(`ok ${files.length} skill-detail files (${summary})\n`);
}

main(process.argv.slice(2));
