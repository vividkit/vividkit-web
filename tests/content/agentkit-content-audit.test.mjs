import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';

import {
  createAuditReport,
  renderDiagnostics,
  runAudit,
  scanText,
  validateAllowlist,
} from '../../scripts/check-agentkit-content.mjs';
import { AGENTKIT_LEGACY_ALLOWLIST } from './agentkit-legacy-allowlist.mjs';

const execFileAsync = promisify(execFile);
const scriptPath = new URL('../../scripts/check-agentkit-content.mjs', import.meta.url).pathname;

async function readTree(directory) {
  const chunks = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) chunks.push(await readTree(path));
    else chunks.push(await readFile(path, 'utf8'));
  }
  return chunks.join('\n');
}

function syntheticCredential() {
  return ['gh', 'p_', 'A'.repeat(40)].join('');
}

test('active AgentKit prose rejects legacy install, CLI, and slash recommendations', () => {
  const diagnostics = scanText({
    file: 'src/data/guides/agentkit/example.ts',
    mode: 'agentkit-active',
    text: [
      'npm install -g claudekit-cli',
      'Run ck update today.',
      'Invoke /ck:cook or /ckm:design.',
    ].join('\n'),
    allowlist: [],
  });

  assert.deepEqual(
    diagnostics.map(({ detector }) => detector).sort(),
    ['legacy-cli-command', 'legacy-cli-install', 'legacy-slash-command', 'legacy-slash-command'],
  );
  assert.deepEqual(diagnostics.map(({ line }) => line), [1, 2, 3, 3]);
});

test('bounded exact allowlist permits only intentional migration mapping occurrences', () => {
  validateAllowlist(AGENTKIT_LEGACY_ALLOWLIST);
  const text = [
    'npm install -g claudekit-cli',
    'ck init',
    '/ck:*',
    '/ckm:*',
  ].join('\n');
  const diagnostics = scanText({
    file: 'src/data/guides/agentkit/agentkit-migration-mapping.ts',
    mode: 'agentkit-active',
    text,
    allowlist: AGENTKIT_LEGACY_ALLOWLIST,
  });
  assert.deepEqual(diagnostics, []);

  const exceeded = scanText({
    file: 'src/data/guides/agentkit/agentkit-migration-mapping.ts',
    mode: 'agentkit-active',
    text: `${text}\n/ck:extra`,
    allowlist: AGENTKIT_LEGACY_ALLOWLIST,
  });
  assert.equal(exceeded.length, 1);
  assert.equal(exceeded[0].detector, 'legacy-slash-command');
});

test('allowlist requires an exact file, known pattern, positive max count, owner, and reason', () => {
  for (const invalid of [
    { file: '**/*', detector: 'legacy-cli-command', pattern: '\\bck\\s+', maxCount: 1, owner: 'docs', reason: 'x' },
    { file: 'a.ts', detector: 'unknown', pattern: 'x', maxCount: 1, owner: 'docs', reason: 'x' },
    { file: 'a.ts', detector: 'legacy-cli-command', pattern: '\\bck\\s+', maxCount: Infinity, owner: 'docs', reason: 'x' },
    { file: 'a.ts', detector: 'legacy-cli-command', pattern: '\\bck\\s+', maxCount: 1, owner: '', reason: '' },
  ]) {
    assert.throws(() => validateAllowlist([invalid]), /invalid allowlist entry/i);
  }
});

test('credential diagnostics, reports, rendered output, and errors disclose zero detected value bytes', () => {
  const credential = syntheticCredential();
  const diagnostics = scanText({
    file: 'src/data/guides/agentkit/example.ts',
    mode: 'agentkit-active',
    text: `credential=${credential}`,
    allowlist: [],
  });
  assert.equal(diagnostics.length, 1);
  assert.deepEqual(Object.keys(diagnostics[0]).sort(), ['category', 'detector', 'file', 'incidentId', 'line']);

  const surfaces = [
    JSON.stringify(diagnostics),
    JSON.stringify(createAuditReport(diagnostics)),
    renderDiagnostics(diagnostics),
  ];
  for (const surface of surfaces) {
    assert.ok(!surface.includes(credential));
    assert.ok(!surface.includes(credential.slice(-20)));
  }
});

test('CLI stdout, stderr, and JSON report do not redisclose a detected credential', async () => {
  const root = await mkdtemp(join(tmpdir(), 'agentkit-audit-'));
  const credential = syntheticCredential();
  const sourceDir = join(root, 'src/data/guides/agentkit');
  await mkdir(sourceDir, { recursive: true });
  await writeFile(join(sourceDir, 'unsafe.ts'), `export const value = '${credential}';\n`);

  try {
    await assert.rejects(
      execFileAsync(process.execPath, [scriptPath, '--root', root, '--json', '--report', 'audit-report.json']),
      (error) => {
        const stdout = String(error.stdout || '');
        const stderr = String(error.stderr || '');
        assert.ok(!stdout.includes(credential));
        assert.ok(!stderr.includes(credential));
        assert.ok(!String(error.message).includes(credential));
        return true;
      },
    );
    const report = await readFile(join(root, 'audit-report.json'), 'utf8');
    assert.ok(!report.includes(credential));
    assert.ok(!report.includes(credential.slice(-20)));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('optional postbuild scan covers HTML, llms, sitemap, source maps, and generated reports', async () => {
  const root = await mkdtemp(join(tmpdir(), 'agentkit-postbuild-'));
  const credential = syntheticCredential();
  const generatedFiles = [
    'dist/guides/agentkit/index.html',
    'dist/llms.txt',
    'dist/sitemap.xml',
    'dist/assets/app.js.map',
    'dist/reports/content-audit.json',
  ];

  try {
    for (const file of generatedFiles) {
      const absolute = join(root, file);
      await mkdir(join(absolute, '..'), { recursive: true });
      await writeFile(absolute, `generated=${credential}\n`);
    }

    const result = await runAudit({
      root,
      scanSource: false,
      scanPostbuild: true,
      allowlist: [],
    });
    assert.deepEqual(
      result.diagnostics.map(({ file }) => file).sort(),
      generatedFiles.sort(),
    );
    assert.ok(!JSON.stringify(result).includes(credential));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('legacy-backlog source remains classified while credentials are still audited', () => {
  const legacyOnly = scanText({
    file: 'src/components/guides/legacy.astro',
    mode: 'legacy-backlog',
    text: 'npm install -g claudekit-cli\n/ck:cook',
    allowlist: [],
  });
  assert.deepEqual(legacyOnly, []);

  const credential = syntheticCredential();
  const credentialHit = scanText({
    file: 'src/components/guides/legacy.astro',
    mode: 'legacy-backlog',
    text: credential,
    allowlist: [],
  });
  assert.equal(credentialHit.length, 1);
  assert.equal(credentialHit[0].category, 'credential');
});

test('AgentKit compatibility sources are active while their legacy route identifiers remain unchanged', async () => {
  const root = await mkdtemp(join(tmpdir(), 'agentkit-how-works-source-'));
  const activeFiles = [
    'src/components/guides/how-ck-works/example.astro',
    'src/data/guides/how-ck-works/example.ts',
    'src/pages/guides/how-ck-works.astro',
    'src/pages/vi/guides/how-ck-works.astro',
    'src/components/guides/what-is-claudekit/example.astro',
    'src/components/guides/WhatIsClaudeKitGuide.astro',
    'src/pages/guides/what-is-claudekit.astro',
    'src/pages/vi/guides/what-is-claudekit.astro',
    'src/i18n/en/what-is-claudekit.ts',
    'src/i18n/vi/what-is-claudekit.ts',
  ];

  try {
    for (const file of activeFiles) {
      const absolute = join(root, file);
      await mkdir(join(absolute, '..'), { recursive: true });
      await writeFile(absolute, 'Invoke /ck:cook and $ck:cook.\n');
    }
    const result = await runAudit({ root, allowlist: [] });
    assert.deepEqual(result.diagnostics.filter(({ detector }) => detector === 'legacy-slash-command').map(({ file }) => file).sort(), activeFiles.sort());
    assert.deepEqual(result.diagnostics.filter(({ detector }) => detector === 'legacy-dollar-command').map(({ file }) => file).sort(), activeFiles.sort());
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('generated EN and VI AgentKit compatibility pages reject legacy skill prefixes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'agentkit-how-works-generated-'));
  const activeFiles = [
    'dist/guides/how-ck-works/index.html',
    'dist/vi/guides/how-ck-works/index.html',
    '.vercel/output/static/guides/how-ck-works/index.html',
    '.vercel/output/static/vi/guides/how-ck-works/index.html',
    'dist/guides/what-is-claudekit/index.html',
    'dist/vi/guides/what-is-claudekit/index.html',
    '.vercel/output/static/guides/what-is-claudekit/index.html',
    '.vercel/output/static/vi/guides/what-is-claudekit/index.html',
  ];

  try {
    for (const file of activeFiles) {
      const absolute = join(root, file);
      await mkdir(join(absolute, '..'), { recursive: true });
      await writeFile(absolute, '<code>/ckm:design</code><code>$ckm:design</code>\n');
    }
    const result = await runAudit({ root, scanSource: false, scanPostbuild: true, allowlist: [] });
    assert.deepEqual(result.diagnostics.filter(({ detector }) => detector === 'legacy-slash-command').map(({ file }) => file).sort(), activeFiles.sort());
    assert.deepEqual(result.diagnostics.filter(({ detector }) => detector === 'legacy-dollar-command').map(({ file }) => file).sort(), activeFiles.sort());
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('How AgentKit Works source uses well-formed unified skill invocations and current branding', async () => {
  const text = [
    await readTree(fileURLToPath(new URL('../../src/components/guides/how-ck-works', import.meta.url))),
    await readTree(fileURLToPath(new URL('../../src/data/guides/how-ck-works', import.meta.url))),
  ].join('\n');

  assert.doesNotMatch(text, /\/(?:ck|ckm):/i);
  assert.doesNotMatch(text, /ClaudeKit/);
  assert.doesNotMatch(text, /\/ak:ak:/i);
  assert.doesNotMatch(text, /\/ak::/i);
  for (const match of text.matchAll(/\/ak:[a-z*][a-z0-9*:-]*/gi)) {
    const token = match[0];
    if (token.endsWith(':') && ['<', '*'].includes(text[match.index + token.length])) continue;
    assert.match(token, /^\/ak:(?:[a-z][a-z0-9-]*|\*)(?::(?:[a-z][a-z0-9-]*|\*))*$/i);
  }
});

test('normal build cannot bypass source or generated-artifact audits', async () => {
  const packageJson = JSON.parse(await readFile(new URL('../../package.json', import.meta.url), 'utf8'));
  assert.equal(packageJson.scripts.build, 'npm run verify:agentkit && astro build');
  assert.match(packageJson.scripts['verify:agentkit'], /check:agentkit-content/);
  assert.match(packageJson.scripts['verify:agentkit'], /check:agentkit-types/);
  assert.match(packageJson.scripts['verify:agentkit'], /test:agentkit-content/);
  assert.match(packageJson.scripts.postbuild, /check-agentkit-content\.mjs --postbuild && npm run test:agentkit-postbuild$/);
  assert.equal(packageJson.scripts['check:agentkit-content'], 'node scripts/check-agentkit-content.mjs');
  assert.equal(packageJson.scripts['test:agentkit-content'], 'node --test tests/**/*.test.mjs');
  assert.equal(packageJson.scripts['test:agentkit-postbuild'], 'node --test tests/content/guide-route-manifest.test.mjs');
});
