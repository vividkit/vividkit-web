import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, realpath, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const projectRoot = new URL('../../', import.meta.url);
const packageJson = JSON.parse(
  await readFile(new URL('package.json', projectRoot), 'utf8'),
);
const verifierUrl = new URL('scripts/verify-exact-toolchain.mjs', projectRoot);
const verifierPath = fileURLToPath(verifierUrl);

async function fakeNpm(version) {
  const root = await mkdtemp(join(tmpdir(), 'vividkit-toolchain-npm-'));
  const bin = join(root, 'node_modules/npm/bin');
  await mkdir(bin, { recursive: true });
  await writeFile(
    join(root, 'node_modules/npm/package.json'),
    `${JSON.stringify({ name: 'npm', version })}\n`,
  );
  const cli = join(bin, 'npm-cli.js');
  await writeFile(cli, `process.stdout.write('${version}\\n');\n`);
  return cli;
}

function runVerifier(env) {
  return spawnSync(process.execPath, [verifierPath], {
    encoding: 'utf8',
    env: {
      PATH: process.env.PATH,
      ...env,
    },
  });
}

test('hosted builds accept the Vercel-managed Node 22 and npm 10 lines', () => {
  assert.deepEqual(packageJson.engines, {
    node: '22.x',
    npm: '10.x',
  });
  assert.equal('devEngines' in packageJson, false);
});

test('local and CI evidence keeps an explicit exact toolchain verifier', async () => {
  assert.equal(packageJson.packageManager, 'npm@10.9.4');
  assert.equal(
    packageJson.scripts['verify:exact-toolchain'],
    'node scripts/verify-exact-toolchain.mjs',
  );
  assert.equal(
    (await readFile(new URL('.nvmrc', projectRoot), 'utf8')).trim(),
    '22.21.1',
  );

  const { evaluateExactToolchain } = await import(
    verifierUrl
  );
  assert.deepEqual(evaluateExactToolchain('22.21.1', '10.9.4'), {
    ok: true,
    expectedNode: '22.21.1',
    expectedNpm: '10.9.4',
    actualNode: '22.21.1',
    actualNpm: '10.9.4',
    mismatches: [],
  });
  assert.deepEqual(
    evaluateExactToolchain('22.19.0', '10.9.4').mismatches,
    ['Node expected 22.21.1, received 22.19.0'],
  );
  assert.deepEqual(
    evaluateExactToolchain('22.21.1', '10.8.0').mismatches,
    ['npm expected 10.9.4, received 10.8.0'],
  );
});

test('CLI refuses a forged user agent without a validated npm lifecycle', () => {
  const result = runVerifier({ npm_config_user_agent: 'npm/10.9.4 node/v22.21.1' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /validated npm run lifecycle is required/);
});

test('CLI measures npm executable metadata instead of trusting the user agent', async () => {
  const npmExecPath = await fakeNpm('10.8.0');
  const result = runVerifier({
    npm_command: 'run-script',
    npm_lifecycle_event: 'verify:exact-toolchain',
    npm_execpath: npmExecPath,
    npm_node_execpath: process.execPath,
    npm_package_json: new URL('package.json', projectRoot).pathname,
    npm_config_user_agent: 'npm/10.8.0 node/v22.21.1',
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /npm executable is not canonical for the active Node runtime/);
});

test('CLI rejects npm evidence from a different Node executable', async () => {
  const nodeExecPath = await realpath(process.execPath);
  const npmExecPath = resolve(dirname(nodeExecPath), '../lib/node_modules/npm/bin/npm-cli.js');
  const result = runVerifier({
    npm_command: 'run-script',
    npm_lifecycle_event: 'verify:exact-toolchain',
    npm_execpath: npmExecPath,
    npm_node_execpath: '/usr/bin/false',
    npm_package_json: new URL('package.json', projectRoot).pathname,
    npm_config_user_agent: 'npm/10.9.4 node/v22.21.1',
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /npm invocation belongs to a different Node executable/);
});

test('CLI rejects a forged user agent after validating the canonical npm executable', async () => {
  const nodeExecPath = await realpath(process.execPath);
  const npmExecPath = resolve(dirname(nodeExecPath), '../lib/node_modules/npm/bin/npm-cli.js');
  const result = runVerifier({
    npm_command: 'run-script',
    npm_lifecycle_event: 'verify:exact-toolchain',
    npm_execpath: npmExecPath,
    npm_node_execpath: process.execPath,
    npm_package_json: new URL('package.json', projectRoot).pathname,
    npm_config_user_agent: 'npm/99.0.0 node/v22.21.1',
  });
  assert.equal(result.status, 1);
  assert.match(
    result.stderr,
    existsSync(npmExecPath)
      ? /npm invocation version evidence is inconsistent/
      : /npm executable is not canonical for the active Node runtime/,
  );
});

test('CLI sanitizes filesystem failures without disclosing injected paths', () => {
  const marker = '/private/tmp/PRIVATE-WORKTREE-MARKER';
  const result = runVerifier({
    npm_command: 'run-script',
    npm_lifecycle_event: 'verify:exact-toolchain',
    npm_execpath: marker,
    npm_node_execpath: process.execPath,
    npm_package_json: marker,
    npm_config_user_agent: 'npm/10.9.4 node/v22.21.1',
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Toolchain evidence could not be validated/);
  assert.doesNotMatch(result.stderr, /PRIVATE-WORKTREE-MARKER|\/private\/tmp/);
});
