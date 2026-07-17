#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE_PATH = resolve(SCRIPT_ROOT, 'scripts/agentkit-type-baseline.json');
const ANSI_PATTERN = /\u001B\[[0-?]*[ -/]*[@-~]/g;
const DIAGNOSTIC_PATTERN = /^(.*?):(\d+):(\d+) - error ([a-z]+)\(([^)]+)\): (.*)$/;
const RESULT_PATTERN = /^Result \((\d+) files\):\s*\n- (\d+) errors?$/m;

function normalizePath(path) {
  return path.split(sep).join('/').replace(/^\.\//, '');
}

export function stripAnsi(text) {
  return text.replace(ANSI_PATTERN, '');
}

export function parseAstroCheckOutput(output) {
  const plain = stripAnsi(output);
  const diagnostics = [];
  for (const line of plain.split(/\r?\n/)) {
    const match = line.match(DIAGNOSTIC_PATTERN);
    if (!match) continue;
    diagnostics.push({
      file: normalizePath(match[1]),
      line: Number(match[2]),
      column: Number(match[3]),
      source: match[4],
      code: match[5],
      message: match[6],
    });
  }

  const result = plain.match(RESULT_PATTERN);
  if (!result) throw new Error('Could not parse the Astro check result summary.');
  const errorCount = Number(result[2]);
  if (diagnostics.length !== errorCount) {
    throw new Error(`Parsed ${diagnostics.length} diagnostics but Astro reported ${errorCount}.`);
  }
  return { checkedFiles: Number(result[1]), errorCount, diagnostics };
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function matchesScope(file, scopeEntry) {
  const normalizedFile = normalizePath(file);
  const pattern = normalizePath(scopeEntry)
    .split('**').map((part) => escapeRegex(part).replace(/\\\*/g, '[^/]*')).join('.*');
  return new RegExp(`^${pattern}$`).test(normalizedFile);
}

export function diagnosticFingerprint(diagnostic) {
  return [diagnostic.file, diagnostic.source, diagnostic.code, diagnostic.message].join('|');
}

export function evaluateTypeDelta(result, baseline) {
  if (!Array.isArray(baseline?.scope) || !Array.isArray(baseline?.allowedScopedFingerprints)) {
    throw new Error('Invalid AgentKit type baseline.');
  }
  const scoped = result.diagnostics.filter(({ file }) => (
    baseline.scope.some((entry) => matchesScope(file, entry))
  ));
  const allowed = new Map();
  for (const fingerprint of baseline.allowedScopedFingerprints) {
    allowed.set(fingerprint, (allowed.get(fingerprint) ?? 0) + 1);
  }
  const unexpected = [];
  for (const diagnostic of scoped) {
    const fingerprint = diagnosticFingerprint(diagnostic);
    const remaining = allowed.get(fingerprint) ?? 0;
    if (remaining > 0) allowed.set(fingerprint, remaining - 1);
    else unexpected.push(diagnostic);
  }
  return { scoped, unexpected };
}

async function runAstroCheck(root) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(
      process.execPath,
      [resolve(root, 'node_modules/astro/bin/astro.mjs'), 'check', '--minimumSeverity', 'error'],
      { cwd: root, env: { ...process.env, NO_COLOR: '1' }, stdio: ['ignore', 'pipe', 'pipe'] },
    );
    let output = '';
    child.stdout.on('data', (chunk) => { output += chunk; process.stdout.write(chunk); });
    child.stderr.on('data', (chunk) => { output += chunk; process.stderr.write(chunk); });
    child.on('error', reject);
    child.on('close', (exitCode, signal) => resolveRun({ exitCode, signal, output }));
  });
}

async function main() {
  const baseline = JSON.parse(await readFile(BASELINE_PATH, 'utf8'));
  if (!Number.isInteger(baseline.observedRepoWideErrors) || baseline.observedRepoWideErrors < 0) {
    throw new Error('Invalid reviewed repo-wide diagnostic snapshot.');
  }
  const run = await runAstroCheck(SCRIPT_ROOT);
  if (run.signal || typeof run.exitCode !== 'number') {
    throw new Error(`Astro check did not complete normally${run.signal ? ` (signal ${run.signal})` : ''}.`);
  }

  const result = parseAstroCheckOutput(run.output);
  if (run.exitCode === 0 && result.errorCount !== 0) {
    throw new Error('Astro check exited successfully while reporting errors.');
  }
  if (run.exitCode !== 0 && result.errorCount === 0) {
    throw new Error(`Astro check failed with exit ${run.exitCode} without reported diagnostics.`);
  }

  const delta = evaluateTypeDelta(result, baseline);
  if (delta.unexpected.length > 0) {
    for (const diagnostic of delta.unexpected) {
      console.error(`[agentkit-type-delta] new ${diagnostic.source}(${diagnostic.code}) ${diagnostic.file}:${diagnostic.line}:${diagnostic.column} ${diagnostic.message}`);
    }
    throw new Error(`${delta.unexpected.length} new scoped AgentKit diagnostic(s).`);
  }

  console.log(`[agentkit-type-delta] scoped pass (${delta.scoped.length} allowed, ${baseline.allowedScopedFingerprints.length} baseline fingerprint(s))`);
  if (result.errorCount > 0) {
    const repoWideDelta = result.errorCount - baseline.observedRepoWideErrors;
    const deltaLabel = repoWideDelta === 0 ? 'matches' : `${repoWideDelta > 0 ? '+' : ''}${repoWideDelta} versus`;
    console.warn(`[agentkit-type-delta] repo-wide Astro check remains red: ${result.errorCount} error(s); ${deltaLabel} reviewed snapshot ${baseline.observedRepoWideErrors}. This is not a global green claim.`);
  } else {
    console.log('[agentkit-type-delta] repo-wide Astro check is now green.');
  }
}

const isCli = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  main().catch((error) => {
    console.error(`[agentkit-type-delta] failed: ${error.message}`);
    process.exitCode = 1;
  });
}
