import { execFileSync } from 'node:child_process';
import { existsSync, lstatSync, readFileSync, realpathSync } from 'node:fs';
import { dirname, isAbsolute, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const EXACT_NODE_VERSION = '22.21.1';
export const EXACT_NPM_VERSION = '10.9.4';

class InvocationRefusal extends Error {}

function refuse(message) {
  throw new InvocationRefusal(message);
}

export function evaluateExactToolchain(actualNode, actualNpm) {
  const mismatches = [];
  if (actualNode !== EXACT_NODE_VERSION) mismatches.push(`Node expected ${EXACT_NODE_VERSION}, received ${actualNode}`);
  if (actualNpm !== EXACT_NPM_VERSION) mismatches.push(`npm expected ${EXACT_NPM_VERSION}, received ${actualNpm}`);
  return {
    ok: mismatches.length === 0,
    expectedNode: EXACT_NODE_VERSION,
    expectedNpm: EXACT_NPM_VERSION,
    actualNode,
    actualNpm,
    mismatches,
  };
}

function readNpmVersionFromUserAgent(userAgent) {
  return userAgent?.match(/(?:^|\s)npm\/([^\s]+)/)?.[1] ?? null;
}

function readValidatedNpmVersion() {
  if (process.env.NODE_OPTIONS || process.env.NODE_PATH) refuse('Node preload and module-path variables are not allowed.');
  if (process.env.npm_lifecycle_event !== 'verify:exact-toolchain' || process.env.npm_command !== 'run-script') {
    refuse('A validated npm run lifecycle is required.');
  }

  const npmExecPath = process.env.npm_execpath;
  const npmNodeExecPath = process.env.npm_node_execpath;
  const packageJsonPath = process.env.npm_package_json;
  const expectedPackageJson = resolve(dirname(fileURLToPath(import.meta.url)), '../package.json');
  if (!npmExecPath || !isAbsolute(npmExecPath)
    || !npmNodeExecPath || !isAbsolute(npmNodeExecPath)
    || !packageJsonPath || !isAbsolute(packageJsonPath)) {
    refuse('Absolute npm invocation paths are required.');
  }
  if (realpathSync(packageJsonPath) !== realpathSync(expectedPackageJson)) refuse('npm invocation belongs to a different project.');
  const nodeExecPath = realpathSync(process.execPath);
  if (realpathSync(npmNodeExecPath) !== nodeExecPath) refuse('npm invocation belongs to a different Node executable.');

  const expectedNpmExecPath = resolve(dirname(nodeExecPath), '../lib/node_modules/npm/bin/npm-cli.js');
  if (!existsSync(npmExecPath) || !existsSync(expectedNpmExecPath)
    || !lstatSync(npmExecPath).isFile()
    || realpathSync(npmExecPath) !== realpathSync(expectedNpmExecPath)) {
    refuse('npm executable is not canonical for the active Node runtime.');
  }

  const npmPackage = JSON.parse(readFileSync(resolve(dirname(npmExecPath), '../package.json'), 'utf8'));
  if (npmPackage.name !== 'npm' || typeof npmPackage.version !== 'string') refuse('npm executable metadata is invalid.');
  const measuredVersion = execFileSync(process.execPath, [npmExecPath, '--version'], {
    encoding: 'utf8',
    env: Object.fromEntries(Object.entries(process.env).filter(([name]) => !['NODE_OPTIONS', 'NODE_PATH'].includes(name))),
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
  const userAgentVersion = readNpmVersionFromUserAgent(process.env.npm_config_user_agent);
  if (measuredVersion !== npmPackage.version || userAgentVersion !== measuredVersion) {
    refuse('npm invocation version evidence is inconsistent.');
  }
  return measuredVersion;
}

function run() {
  let actualNpm;
  try {
    actualNpm = readValidatedNpmVersion();
  } catch (error) {
    const reason = error instanceof InvocationRefusal ? error.message : 'Toolchain evidence could not be validated.';
    console.error(`Exact toolchain invocation refused: ${reason}`);
    process.exitCode = 1;
    return;
  }

  const result = evaluateExactToolchain(process.versions.node, actualNpm);
  if (!result.ok) {
    for (const mismatch of result.mismatches) console.error(mismatch);
    process.exitCode = 1;
    return;
  }
  console.log(`Exact toolchain verified: Node ${result.actualNode}, npm ${result.actualNpm}.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) run();
