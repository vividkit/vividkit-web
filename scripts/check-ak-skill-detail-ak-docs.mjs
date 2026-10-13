#!/usr/bin/env node
/**
 * Same-kit EN+VI fact-check of skill-detail invocation flags against
 * structured ak-docs sections (tables + Run-the-Skill fences).
 *
 * Classification follows skills/vk-audit-ak-skills/references/authority.md:
 * - page flag absent from docs tables but present in the same-channel kit skill directory
 *   (SKILL.md, references/, scripts/) is `docs-omit` (kept, not failed); absent from both is `wrong`.
 * - docs-table flag absent from the page is `missed` when SKILL.md argument-hint lists
 *   it, `helper` when a reviewer recorded it as a helper-CLI flag in HELPER_FLAGS
 *   (kept off skill invocation), and `missed` otherwise until reviewed.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSnapshot, resolvePageSkill, showFileRaw } from './lib/ak-kit-sources.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DETAILS = join(ROOT, 'src/data/guides/agentkit-skill-details');
const FLAG_RE = /--[a-z0-9][a-z0-9-]*/g;
const HELPER_FLAGS = join(ROOT, 'reference/ak-docs-skills-meta/ak-docs-helper-flags.json');

function loadHelperFlags() {
  if (!existsSync(HELPER_FLAGS)) return {};
  const raw = JSON.parse(readFileSync(HELPER_FLAGS, 'utf8'));
  return raw.pages || {};
}

function argumentHint(skillMd) {
  const m = String(skillMd || '').match(/^argument-hint:\s*(.*)$/m);
  return m ? m[1] : '';
}

function parseArgs(argv) {
  const out = {
    akDocs: '',
    kit: 'all',
    selfTest: false,
    kitRoot: '',
    stableRef: 'origin/main',
    betaRef: 'origin/dev',
    akDocsStableRef: 'origin/main',
    akDocsBetaRef: 'origin/dev',
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--ak-docs') out.akDocs = argv[++i] || '';
    else if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--stable-ref') out.stableRef = argv[++i] || out.stableRef;
    else if (a === '--beta-ref') out.betaRef = argv[++i] || out.betaRef;
    else if (a === '--ak-docs-stable-ref') out.akDocsStableRef = argv[++i] || out.akDocsStableRef;
    else if (a === '--ak-docs-beta-ref') out.akDocsBetaRef = argv[++i] || out.akDocsBetaRef;

    else if (a === '--kit') out.kit = argv[++i] || 'all';
    else if (a === '--self-test') out.selfTest = true;
  }
  return out;
}

function flagsIn(text) {
  const out = new Set();
  const re = new RegExp(FLAG_RE.source, 'g');
  let m;
  while ((m = re.exec(String(text || '')))) out.add(m[0]);
  return out;
}

function structuredText(mdx) {
  const tables = String(mdx).match(/(?:^|\n)(?:\|.*\|\n)+/g) || [];
  return tables
    .filter((table) => {
      const header = table.split('\n').find((line) => line.includes('|')) || '';
      return /\b(option|flag|mode|input)\b/i.test(header);
    })
    .join('\n');
}
function extractDocFlags(mdx) {
  return flagsIn(structuredText(mdx));
}

function extractDetailFlags(src) {
  const flags = new Set();
  // Matches both `invocation: {` and `const invocation: SkillInvocation = {`.
  // A page that builds its invocation from `engineer.invocation` (spread or assigned)
  // extends the appended engineer block, so keep reading the next invocation block;
  // otherwise the first block wins.
  const invRe = /["']?invocation["']?\s*:\s*(?:SkillInvocation\s*=\s*)?\{/g;
  let inv;
  while ((inv = invRe.exec(src))) {
    let block = '';
    let depth = 0;
    for (let i = inv.index; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}') {
        depth--;
        if (depth === 0) {
          block = src.slice(inv.index, i + 1);
          break;
        }
      }
    }
    for (const f of flagsIn(block)) flags.add(f);
    if (!/\bengineer\.invocation\b/.test(src.slice(0, inv.index + block.length))) break;
    invRe.lastIndex = inv.index + block.length;
  }
  // workflowModes render each `flag` value to readers as a mode chip.
  const modes = src.match(/["']?workflowModes["']?\s*:\s*\[/);
  if (modes && modes.index != null) {
    const end = src.indexOf('\n  ]', modes.index);
    const block = src.slice(modes.index, end === -1 ? undefined : end);
    for (const m of block.matchAll(/["']?flag["']?\s*:\s*(['"])(.*?)\1/g)) {
      for (const f of flagsIn(m[2])) flags.add(f);
    }
  }
  const out = src.match(/["']?outputFlags["']?\s*:\s*\[/);
  if (out && out.index != null) {
    for (const f of flagsIn(src.slice(out.index, out.index + 5000))) flags.add(f);
  }
  return flags;
}

/**
 * Marketing pages often `...engineer` spread (or reuse `engineer.invocation` from) an engineer detail module. The page then
 * inherits engineer invocation/outputFlags unless it overrides them, so append the
 * engineer source: extractDetailFlags takes the first match, which is the override when present.
 */
function effectiveDetailSource(src) {
  if (!/\.\.\.engineer\b|\bengineer\.invocation\b/.test(src)) return src;
  const m = src.match(/import\s+engineer\s+from\s+'\.\.\/engineer\/(ak-[a-z0-9-]+)'/);
  if (!m) return src;
  const path = join(DETAILS, 'engineer', `${m[1]}.ts`);
  return existsSync(path) ? `${src}\n${readFileSync(path, 'utf8')}` : src;
}

function readDocMdx(akDocs, channel, kit, slug, locale, refs) {
  const rel = `content/docs/${channel}/kits/${kit}/skills/${slug}.${locale}.mdx`;
  const ref = channel === 'beta' ? refs.beta : refs.stable;
  if (akDocs && existsSync(join(akDocs, '.git')) && ref) {
    const raw = showFileRaw(akDocs, ref, rel);
    return raw ? raw.toString('utf8') : '';
  }
  const abs = join(akDocs, rel);
  return existsSync(abs) ? readFileSync(abs, 'utf8') : '';
}


function checkFile(detailSrc, enMdx, viMdx, skillMd = '', helperFlags = []) {
  const detail = extractDetailFlags(detailSrc);
  const en = extractDocFlags(enMdx);
  const vi = extractDocFlags(viMdx);
  const docs = new Set([...en, ...vi]);
  const skillFlags = flagsIn(skillMd);
  const hintFlags = flagsIn(argumentHint(skillMd));
  const helper = new Set(helperFlags);
  const notInDocs = [...detail].filter((f) => !docs.has(f)).sort();
  const invented = notInDocs.filter((f) => !skillFlags.has(f));
  const docsOmit = notInDocs.filter((f) => skillFlags.has(f));
  const notOnPage = [...docs].filter((f) => !detail.has(f)).sort();
  const missed = notOnPage.filter((f) => hintFlags.has(f) || !helper.has(f));
  const helperKept = notOnPage.filter((f) => !hintFlags.has(f) && helper.has(f));
  const localeDrift = [...en].filter((f) => !vi.has(f)).concat([...vi].filter((f) => !en.has(f))).sort();
  return { invented, missed, localeDrift, docsOmit, helperKept };
}

function selfTest() {
  const r = checkFile(
    `invocation: { options: [{ token: '--html' }, { token: '--ghost' }] }`,
    `| Option | Effect |\n| --- | --- |\n| \`--html\` | Write HTML |\n| \`--wiki\` | Share |\n`,
    `| Option | Effect |\n| --- | --- |\n| \`--html\` | Ghi HTML |\n| \`--wiki\` | Chia sẻ |\n`,
  );
  if (!r.invented.includes('--ghost')) throw new Error('invented');
  if (!r.missed.includes('--wiki')) throw new Error('missed');
  const table = `| Option | Effect |\n| --- | --- |\n| \`--html\` | Write HTML |\n| \`--copy\` | Clipboard |\n| \`--fast\` | Fast |\n`;
  const k = checkFile(
    `invocation: { options: [{ token: '--html' }, { token: '--skip-journal' }] }`,
    table,
    table,
    'argument-hint: "[task] [--fast] [--skip-journal]"\n',
    ['--copy', '--fast'],
  );
  if (k.invented.length || !k.docsOmit.includes('--skip-journal')) throw new Error('docs-omit');
  const extended = checkFile(
    `const base = engineer.invocation;\nconst invocation: SkillInvocation = { ...base, options: [{ token: '--fast' }] };\n` +
      `const invocation: SkillInvocation = { options: [{ token: '--html' }] };`,
    table,
    table,
    '',
    [],
  );
  if (extended.missed.includes('--html')) throw new Error('engineer.invocation extension not merged');
  const typed = checkFile(`const invocation: SkillInvocation = { options: [{ token: '--html' }] };`, table, table, '', ['--copy', '--fast']);
  if (typed.missed.includes('--html')) throw new Error('typed invocation const not parsed');
  if (!k.helperKept.includes('--copy')) throw new Error('helper');
  if (!k.missed.includes('--fast')) throw new Error('hint flag must stay missed even if listed as helper');
  process.stdout.write('self-test ok\n');
}

function main(argv) {
  const args = parseArgs(argv);
  if (args.selfTest) {
    selfTest();
    return;
  }
  if (!args.akDocs) {
    process.stderr.write('Missing --ak-docs\n');
    process.exit(2);
  }
  if (!args.kitRoot) {
    process.stderr.write('Missing --kit-root\n');
    process.exit(2);
  }
  const kitRoot = resolve(args.kitRoot);
  let snapshot;
  try {
    snapshot = buildSnapshot(args, kitRoot);
  } catch (err) {
    process.stderr.write(`check-ak-skill-detail-ak-docs: ${err.message}\n`);
    process.exit(2);
  }
  const docsRefs = { stable: args.akDocsStableRef, beta: args.akDocsBetaRef };
  const helperFlags = loadHelperFlags();
  // SKILL.md text plus every flag token found anywhere in the skill directory
  // (references/, scripts/). argument-hint is still read from SKILL.md only.
  const skillMdAt = (ref, gitPath) => {
    if (!ref || !gitPath) return '';
    const raw = showFileRaw(kitRoot, ref, `${gitPath}/SKILL.md`);
    let tree = '';
    try {
      tree = execFileSync('git', ['-C', kitRoot, 'grep', '-h', '-o', '-I', '-E', '--', '--[a-z0-9][a-z0-9-]*', ref, '--', gitPath], {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
        maxBuffer: 32 * 1024 * 1024,
      });
    } catch {
      tree = '';
    }
    return `${raw ? raw.toString('utf8') : ''}\n${tree}`;
  };
  let docsOmitCount = 0;
  let helperCount = 0;
  const kits = args.kit === 'all' ? ['engineer', 'marketing'] : [args.kit];
  const rows = [];
  const missingDocs = [];
  const betaRows = [];
  let files = 0;
  for (const kit of kits) {
    const dir = join(DETAILS, kit);
    for (const name of readdirSync(dir).filter((n) => n.startsWith('ak-') && n.endsWith('.ts')).sort()) {
      files++;
      const id = name.slice(0, -3);
      const slug = id.replace(/^ak-/, '');
      const resolved = resolvePageSkill(snapshot, kit, id);
      const channel = resolved.channel || 'stable';
      const src = effectiveDetailSource(readFileSync(join(dir, name), 'utf8'));
      const en = readDocMdx(args.akDocs, channel, kit, slug, 'en', docsRefs);
      const vi = readDocMdx(args.akDocs, channel, kit, slug, 'vi', docsRefs);
      if (!en || !vi) {
        missingDocs.push(
          `${kit}/${id} missing ${!en ? 'en' : ''}${!en && !vi ? '+' : ''}${!vi ? 'vi' : ''} mdx channel=${channel}`,
        );
      } else {
        const skillMd = skillMdAt(resolved.ref, resolved.gitPath);
        const result = checkFile(src, en, vi, skillMd, helperFlags[`${kit}/${id}`]);
        docsOmitCount += result.docsOmit.length;
        helperCount += result.helperKept.length;
        if (result.invented.length || result.missed.length || result.localeDrift.length) {
          rows.push({ kit, id, channel, ...result });
        }
      }
      if (
        channel === 'stable' &&
        resolved.stableRec &&
        resolved.betaRec &&
        (resolved.stableRec.stable?.skillMd || null) !== (resolved.betaRec.beta?.skillMd || null)
      ) {
        const betaEn = readDocMdx(args.akDocs, 'beta', kit, slug, 'en', docsRefs);
        const betaVi = readDocMdx(args.akDocs, 'beta', kit, slug, 'vi', docsRefs);
        if (!betaEn || !betaVi) {
          betaRows.push({
            kit,
            id,
            missing: `docs-beta ${docsRefs.beta} missing ${!betaEn ? 'en' : ''}${!betaVi ? 'vi' : ''} mdx`,
          });
        } else {
          const betaMd = skillMdAt(snapshot.betaRef, resolved.betaRec.gitPath?.beta);
          const result = checkFile(src, betaEn, betaVi, betaMd, helperFlags[`${kit}/${id}`]);
          if (result.invented.length || result.missed.length || result.localeDrift.length) {
            betaRows.push({ kit, id, ...result });
          }
        }
      }
    }
  }


  for (const m of missingDocs) process.stdout.write(`missing-docs ${m}\n`);
  if (betaRows.length) {
    process.stdout.write(
      `beta-docs-delta ${betaRows.length} shared pages (advisory, not gated) docs-beta=${docsRefs.beta}\n`,
    );
    for (const row of betaRows) {
      process.stdout.write(`\nbeta-docs ${row.kit}/${row.id}\n`);
      if (row.missing) process.stdout.write(`  - ${row.missing}\n`);
      for (const f of row.invented || []) process.stdout.write(`  - wrong ${f}\n`);
      for (const f of row.missed || []) process.stdout.write(`  - missed ${f}\n`);
      for (const f of row.localeDrift || []) process.stdout.write(`  - en/vi drift ${f}\n`);
    }
  }
  process.stdout.write(
    `docs-omit ${docsOmitCount} page flags kept from the kit skill directory; helper ${helperCount} reviewed helper-CLI docs flags kept off pages\n`,
  );
  if (!rows.length && !missingDocs.length) {
    process.stdout.write(`ok ${files} skill-detail files vs same-kit ak-docs\n`);
    process.exit(0);
  }
  process.stdout.write(`${rows.length} mapped files with drift; ${missingDocs.length} missing same-kit mdx; ${files} total\n`);
  for (const row of rows) {
    process.stdout.write(`\n${row.kit}/${row.id} channel=${row.channel}\n`);
    for (const f of row.invented) process.stdout.write(`  - wrong ${f}\n`);
    for (const f of row.missed) process.stdout.write(`  - missed ${f}\n`);
    for (const f of row.localeDrift) process.stdout.write(`  - en/vi drift ${f}\n`);
  }
  process.exit(rows.some((r) => r.invented.length || r.missed.length) ? 1 : 0);

}


main(process.argv.slice(2));
