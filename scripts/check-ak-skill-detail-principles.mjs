#!/usr/bin/env node
/**
 * Fail when skill-detail operating-rule cards would hide, empty, or dummy
 * a core principle. Mirrors infographic-generic-command-quick-ref.astro:
 * every corePrinciples* string becomes one card; expertiseAreas is not used.
 *
 * Also fail command-only or overlong skill-detail H1 titles, and a renderer
 * that still copies the tagline into the headline.
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

function extractHeaderBlock(src) {
  const m = /["']?header["']?\s*:\s*\{/.exec(src);
  if (!m) return '';
  let depth = 0;
  const start = m.index + m[0].length - 1;
  for (let i = start; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) return src.slice(start + 1, i);
    }
  }
  return '';
}

function extractField(block, key) {
  const re = new RegExp(
    `["']?${key}["']?\\s*:\\s*(?:\`([^\`]*)\`|"((?:\\\\.|[^"\\\\])*)"|'((?:\\\\.|[^'\\\\])*)')`,
  );
  const m = re.exec(block);
  if (!m) return '';
  return (m[1] ?? m[2] ?? m[3] ?? '').replace(/\\'/g, "'").replace(/\\"/g, '"');
}

function stripCommand(headline) {
  return String(headline || '')
    .replace(/^[/\$]ak:[^\s—–]+(?:\s*[—–-]\s*)?/i, '')
    .trim();
}

function firstSentence(text) {
  const t = String(text || '').trim();
  const part = t.split(/(?<=[.!?])\s+/)[0] || t;
  return part.replace(/[.]$/, '').trim();
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
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
  if (/blurb\.split/.test(src) || /clause\.length\s*>=\s*12/.test(src)) {
    violations.push('renderer still falls back from tagline/blurb for headlines');
  }
  return violations;
}

function checkTitles(src, kit, file) {
  const header = extractHeaderBlock(src);
  if (!header) return [];
  const titleEn = extractField(header, 'titleEn');
  const titleVi = extractField(header, 'titleVi');
  const loc = `${kit}/${file}`;
  if (!titleEn && !titleVi) return [`${loc}: missing header.titleEn/titleVi`];
  const taglineEn = extractField(header, 'taglineEn');
  const taglineVi = extractField(header, 'taglineVi');
  const violations = [];
  const en = stripCommand(titleEn);
  const vi = stripCommand(titleVi);
  if (!en) violations.push(`${loc}: empty EN title after command strip`);
  else {
    const words = en.split(/\s+/).filter(Boolean);
    if (words.length > 7) violations.push(`${loc}: EN title ${words.length} words (max 7)`);
    if (en.length > 50) violations.push(`${loc}: EN title ${en.length} chars (max 50)`);
    if (normalize(en) === normalize(firstSentence(taglineEn))) {
      violations.push(`${loc}: EN title equals first tagline sentence`);
    }
  }
  if (!vi) violations.push(`${loc}: empty VI title after command strip`);
  else {
    if (vi.length > 60) violations.push(`${loc}: VI title ${vi.length} chars (max 60)`);
    if (normalize(vi) === normalize(firstSentence(taglineVi))) {
      violations.push(`${loc}: VI title equals first tagline sentence`);
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
  violations.push(...checkTitles(src, kit, file));
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

  const prefixOk = checkTitles(
    `header: {
      titleEn: '/ak:codex-goal — Guide Codex /goal work',
      titleVi: '/ak:codex-goal — Dẫn dắt công việc Codex /goal',
      taglineEn: 'Guide Codex /goal work with one durable objective.',
      taglineVi: 'Dẫn dắt công việc Codex /goal với một mục tiêu bền.',
    }`,
    'engineer',
    'ak-codex-goal.ts',
  );
  if (prefixOk.length) {
    throw new Error(`self-test prefix should pass, got ${JSON.stringify(prefixOk)}`);
  }

  const reexportOk = checkTitles(
    `import engineer from '../engineer/ak-bro';
const data = { ...engineer, kit: 'marketer' };`,
    'marketing',
    'ak-bro.ts',
  );
  if (reexportOk.length) {
    throw new Error(`self-test re-export should skip, got ${JSON.stringify(reexportOk)}`);
  }

  const emptyHeader = checkTitles(
    `header: { titleEn: '', titleVi: '', taglineEn: 'Long tagline sentence here.', taglineVi: 'Câu tagline dài.' }`,
    'engineer',
    'ak-empty.ts',
  );
  if (!emptyHeader.some((v) => v.includes('missing header.titleEn/titleVi'))) {
    throw new Error(`self-test empty header titles should fail, got ${JSON.stringify(emptyHeader)}`);
  }

  const commandOnly = checkTitles(
    `header: {
      titleEn: '/ak:scenario',
      titleVi: '/ak:scenario',
      taglineEn: 'Expand a feature into edge cases.',
      taglineVi: 'Mở rộng feature thành ca biên.',
    }`,
    'engineer',
    'ak-scenario.ts',
  );
  if (!commandOnly.some((v) => v.includes('empty EN')) || !commandOnly.some((v) => v.includes('empty VI'))) {
    throw new Error(`self-test command-only should empty-strip, got ${JSON.stringify(commandOnly)}`);
  }

  const equalSentence = checkTitles(
    `header: {
      titleEn: '/ak:demo — Expand a feature into edge cases',
      titleVi: '/ak:demo — Mở rộng feature thành ca biên',
      taglineEn: 'Expand a feature into edge cases.',
      taglineVi: 'Mở rộng feature thành ca biên.',
    }`,
    'engineer',
    'ak-demo.ts',
  );
  if (!equalSentence.some((v) => v.includes('equals first tagline sentence'))) {
    throw new Error(`self-test equality should fail, got ${JSON.stringify(equalSentence)}`);
  }

  const tooLong = checkTitles(
    `header: {
      titleEn: '/ak:demo — One two three four five six seven eight',
      titleVi: '/ak:demo — ${'x'.repeat(61)}',
      taglineEn: 'Something else entirely lives here.',
      taglineVi: 'Câu tagline khác hẳn title.',
    }`,
    'engineer',
    'ak-long.ts',
  );
  if (!tooLong.some((v) => v.includes('8 words')) || !tooLong.some((v) => v.includes('61 chars'))) {
    throw new Error(`self-test length should fail, got ${JSON.stringify(tooLong)}`);
  }

  const rendererFallback = checkRenderer('const first = (blurb.split(/(?<=[.!?])\\s+/)[0] || blurb); const clause = first; return clause.length >= 12 ? clause : first;');
  if (!rendererFallback.some((v) => v.includes('tagline/blurb'))) {
    throw new Error(`self-test renderer fallback missed, got ${JSON.stringify(rendererFallback)}`);
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
