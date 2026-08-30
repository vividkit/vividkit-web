#!/usr/bin/env node
/**
 * Same-kit EN+VI fact-check of skill-detail invocation flags against
 * structured ak-docs sections (tables + Run-the-Skill fences).
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DETAILS = join(ROOT, 'src/data/guides/agentkit-skill-details');
const FLAG_RE = /--[a-z0-9][a-z0-9-]*/g;

function parseArgs(argv) {
  const out = { akDocs: '', kit: 'all', selfTest: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--ak-docs') out.akDocs = argv[++i] || '';
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
  const inv = src.match(/["']?invocation["']?\s*:\s*\{/);
  if (inv && inv.index != null) {
    let depth = 0;
    for (let i = inv.index; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}') {
        depth--;
        if (depth === 0) {
          for (const f of flagsIn(src.slice(inv.index, i + 1))) flags.add(f);
          break;
        }
      }
    }
  }
  const out = src.match(/["']?outputFlags["']?\s*:\s*\[/);
  if (out && out.index != null) {
    for (const f of flagsIn(src.slice(out.index, out.index + 5000))) flags.add(f);
  }
  return flags;
}

function docPath(akDocs, kit, slug, locale) {
  return join(akDocs, 'content/docs/stable/kits', kit, 'skills', `${slug}.${locale}.mdx`);
}

function checkFile(detailSrc, enMdx, viMdx) {
  const detail = extractDetailFlags(detailSrc);
  const en = extractDocFlags(enMdx);
  const vi = extractDocFlags(viMdx);
  const docs = new Set([...en, ...vi]);
  const invented = [...detail].filter((f) => !docs.has(f)).sort();
  const missed = [...docs].filter((f) => !detail.has(f)).sort();
  const localeDrift = [...en].filter((f) => !vi.has(f)).concat([...vi].filter((f) => !en.has(f))).sort();
  return { invented, missed, localeDrift };
}

function selfTest() {
  const r = checkFile(
    `invocation: { options: [{ token: '--html' }, { token: '--ghost' }] }`,
    `| Option | Effect |\n| --- | --- |\n| \`--html\` | Write HTML |\n| \`--wiki\` | Share |\n`,
    `| Option | Effect |\n| --- | --- |\n| \`--html\` | Ghi HTML |\n| \`--wiki\` | Chia sẻ |\n`,
  );
  if (!r.invented.includes('--ghost')) throw new Error('invented');
  if (!r.missed.includes('--wiki')) throw new Error('missed');
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
  const kits = args.kit === 'all' ? ['engineer', 'marketing'] : [args.kit];
  const rows = [];
  const missingDocs = [];
  let files = 0;
  for (const kit of kits) {
    const dir = join(DETAILS, kit);
    for (const name of readdirSync(dir).filter((n) => n.startsWith('ak-') && n.endsWith('.ts')).sort()) {
      files++;
      const id = name.slice(0, -3);
      const slug = id.replace(/^ak-/, '');
      const en = docPath(args.akDocs, kit, slug, 'en');
      const vi = docPath(args.akDocs, kit, slug, 'vi');
      if (!existsSync(en) || !existsSync(vi)) {
        missingDocs.push(`${kit}/${id} missing ${!existsSync(en) ? 'en' : ''}${!existsSync(en) && !existsSync(vi) ? '+' : ''}${!existsSync(vi) ? 'vi' : ''} mdx`);
        continue;
      }
      const result = checkFile(
        readFileSync(join(dir, name), 'utf8'),
        readFileSync(en, 'utf8'),
        readFileSync(vi, 'utf8'),
      );
      if (result.invented.length || result.missed.length || result.localeDrift.length) {
        rows.push({ kit, id, ...result });
      }
    }
  }

  for (const m of missingDocs) process.stdout.write(`missing-docs ${m}\n`);
  if (!rows.length && !missingDocs.length) {
    process.stdout.write(`ok ${files} skill-detail files vs same-kit ak-docs\n`);
    return;
  }
  process.stdout.write(`${rows.length} mapped files with drift; ${missingDocs.length} missing same-kit mdx; ${files} total\n`);
  for (const row of rows) {
    process.stdout.write(`\n${row.kit}/${row.id}\n`);
    for (const f of row.invented) process.stdout.write(`  - wrong ${f}\n`);
    for (const f of row.missed) process.stdout.write(`  - missed ${f}\n`);
    for (const f of row.localeDrift) process.stdout.write(`  - en/vi drift ${f}\n`);
  }
  process.exit(rows.some((r) => r.invented.length || r.missed.length) ? 1 : 0);
}

main(process.argv.slice(2));
