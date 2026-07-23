import assert from 'node:assert/strict';
import { access, readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  AGENTKIT_SOURCE_SNAPSHOT,
} from '../../src/data/guides/agentkit/agentkit-source-contract.ts';
import {
  getAgentKitCliFact,
  getStableAgentKitCliFacts,
} from '../../src/data/guides/agentkit/agentkit-cli-facts.ts';

const ROOT = new URL('../../', import.meta.url);
const FIXTURE_ROOT = new URL('../fixtures/agentkit-release/', import.meta.url);

async function source(path) {
  return readFile(new URL(path, ROOT), 'utf8');
}

async function readJson(url) {
  return JSON.parse(await readFile(url, 'utf8'));
}

async function activeSourceFiles(directory = new URL('../../src/', import.meta.url)) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === 'legacy-ck') continue;
    const url = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directory);
    if (entry.isDirectory()) files.push(...await activeSourceFiles(url));
    else if (/\.(?:astro|[cm]?[jt]s)$/.test(entry.name)) files.push(url);
  }
  return files;
}

test('current source snapshot preserves stable default with an active public beta', () => {
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.releaseVersion, '2.4.0');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.latestPrerelease, '2.5.0-beta.1');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.promotedFromPrerelease, null);
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.hasActiveBeta, true);
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.activeBetaVersion, '2.5.0-beta.1');
});

test('current release index names 2.4 stable and active 2.5 beta fixtures', async () => {
  const current = await readJson(new URL('current-release.json', FIXTURE_ROOT));
  assert.equal(current.schemaVersion, 1);
  assert.equal(current.latestStable, '2.4.0');
  assert.equal(current.latestPrerelease, '2.5.0-beta.1');
  assert.equal(current.promotedFromPrerelease, null);
  assert.equal(current.activeBetaVersion, '2.5.0-beta.1');
  assert.equal(current.hasActiveBeta, true);
  assert.equal(current.stableFixture, 'stable-v2.4.0.json');
  assert.equal(current.prereleaseFixture, 'prerelease-v2.5.0-beta.1.json');
  assert.equal(current.commandEvidence.exactTag, 'v2.4.0');
  assert.equal(current.commandEvidence.parityManifestSha256, '198c9e4957b8f445496ed3714901a599f45c84667fdb0a6bb1a3f3c6b4e88c4c');
  assert.equal(current.commandEvidence.fullInventoryCount, 120);
  assert.deepEqual(current.commandEvidence.curatedPaths, [
    'audit', 'backups/list', 'backups/restore', 'backups/verify', 'doctor', 'kit/init',
    'kit/list-kits', 'kit/refresh', 'kit/uninstall', 'licenses', 'login', 'migrate',
    'recover', 'self-update', 'uninstall', 'versions', 'whoami',
  ]);

  for (const name of [
    'stable-v2.4.0.json',
    'prerelease-v2.5.0-beta.1.json',
    'prerelease-v2.4.0-beta.7.json',
    'stable-v2.3.0.json',
    'beta-v2.3.1-beta.1.json',
  ]) await access(new URL(name, FIXTURE_ROOT));

  const [stable, prerelease] = await Promise.all([
    readJson(new URL(current.stableFixture, FIXTURE_ROOT)),
    readJson(new URL(current.prereleaseFixture, FIXTURE_ROOT)),
  ]);
  assert.deepEqual([stable.channel, stable.version], ['stable', '2.4.0']);
  assert.deepEqual([prerelease.releaseStatus, prerelease.version], ['pre-release', '2.5.0-beta.1']);
});

test('stable 2.4 facts contain the curated safe command subset', () => {
  const expected = new Map([
    ['install-unix', 'curl -fsSL https://agentkit.best/install.sh | sh'],
    ['doctor', 'ak doctor'],
    ['doctor-offline', 'ak doctor --offline'],
    ['login-email', 'ak login --email <account-email>'],
    ['whoami', 'ak whoami'],
    ['licenses', 'ak licenses'],
    ['kit-init', 'ak kit init <kit> --target <agent>'],
    ['kit-init-global', 'ak kit init <kit> --target <agent> --global'],
    ['kit-list', 'ak kit list-kits'],
    ['kit-refresh', 'ak kit refresh <kit> --yes'],
    ['kit-uninstall', 'ak kit uninstall <kit> --dry-run'],
    ['audit', 'ak audit'],
    ['backups-list', 'ak backups list'],
    ['backups-verify', 'ak backups verify <backup-id>'],
    ['backups-restore', 'ak backups restore <backup-id> --dry-run'],
    ['recover', 'ak recover --latest --dry-run'],
    ['migrate', 'ak migrate --from=ck'],
    ['self-update-check', 'ak self-update --check --channel stable'],
    ['self-update-apply', 'ak self-update --channel stable --yes'],
    ['versions-local', 'ak versions --local-only'],
    ['uninstall', 'ak uninstall --dry-run'],
    ['portable-export', 'ak kit init engineer --target portable --build-only --out ./agentkit-portable'],
  ]);

  assert.ok(getStableAgentKitCliFacts().length >= expected.size);
  for (const [id, command] of expected) {
    const fact = getAgentKitCliFact(id, 'stable');
    assert.ok(fact, `missing curated fact: ${id}`);
    assert.equal(fact.command, command, id);
    assert.equal(fact.releaseVersion, '2.4.0', id);
    assert.equal(fact.sourceUrl, 'https://agentkit.best/docs', id);
  }
  assert.equal(getAgentKitCliFact('uninstall', 'stable')?.scope, 'project');
  assert.match(getAgentKitCliFact('migrate', 'stable')?.note ?? '', /support/i);
});

test('AgentKit migration hub stays cutover-only while CLI and What-is own install/explain', async () => {
  const [guide, cli, whatIs, scenarios] = await Promise.all([
    source('src/components/guides/AgentKitGuide.astro'),
    source('src/components/guides/CLIGuide.astro'),
    source('src/components/guides/WhatIsAgentKitGuide.astro'),
    source('src/components/guides/agentkit/agentkit-scenario-command-guide.astro'),
  ]);
  assert.doesNotMatch(guide, /AgentKitScenarioCommandGuide|AgentKitPathLanes|AgentKitKitTargets|AgentKitQuickStart|AgentKitContinuityFaq|AgentKitDesktopAppOverview|AgentKitCompatibilityAndTroubleshooting/);
  assert.match(guide, /AgentKitMigrationChecklist/);
  assert.match(guide, /AgentKitCommandMapping/);
  assert.match(guide, /AgentKitLegacySkillCleanup/);
  assert.match(cli, /AgentKitQuickStart/);
  assert.match(cli, /AgentKitCompatibilityAndTroubleshooting/);
  assert.match(whatIs, /AgentKitContinuityFaq/);
  assert.match(whatIs, /AgentKitDesktopAppOverview/);
  assert.match(scenarios, /lang:\s*Language|lang=|isVi/);
  assert.match(scenarios, /getAgentKitCliFact|getStableAgentKitCliFacts|cliFacts/);
  assert.match(scenarios, /id:\s*'offline'/);
  assert.match(scenarios, /href=\{[^}]*sourceUrl[^}]*\}/);
  assert.match(scenarios, /<article class="[^"]*min-w-0/);
  assert.doesNotMatch(scenarios, /data-agentkit-command-(?:search|filter)|type=["']search["']|full command catalog/i);
});

test('official AgentKit links are centralized and consumed by facts and rendered recipes', async () => {
  const linksUrl = new URL('../../src/data/guides/agentkit/agentkit-official-links.mjs', import.meta.url);
  const links = await import(linksUrl.href);
  assert.deepEqual(links.AGENTKIT_OFFICIAL_LINKS, {
    docs: 'https://agentkit.best/docs',
    changelog: 'https://agentkit.best/changelog',
  });

  const files = await activeSourceFiles();
  const duplicates = [];
  for (const file of files) {
    const text = await readFile(file, 'utf8');
    if (text.includes('https://agentkit.best/docs')) duplicates.push(file.pathname);
  }
  assert.deepEqual(duplicates, [linksUrl.pathname]);

  for (const consumer of [
    'src/data/guides/agentkit/agentkit-source-contract.ts',
    'src/data/guides/agentkit/agentkit-cli-facts.ts',
    'src/components/guides/agentkit/agentkit-scenario-command-guide.astro',
  ]) assert.match(await source(consumer), /agentkit-official-links/);
});

test('curated copy rejects known 2.4 command and safety traps', async () => {
  const [facts, scenarios] = await Promise.all([
    source('src/data/guides/agentkit/agentkit-cli-facts.ts'),
    source('src/components/guides/agentkit/agentkit-scenario-command-guide.astro'),
  ]);
  const active = `${facts}\n${scenarios}`;
  assert.doesNotMatch(active, /\bak kit list\b(?!-kits)/);
  assert.doesNotMatch(scenarios, /\bend-user core\b/i);
  assert.doesNotMatch(active, /--fresh\b/);
  assert.doesNotMatch(scenarios, /ak kit init[^\n'"`]*--target (?:claude-code|codex)[^\n'"`]*--remote\b/);
  assert.doesNotMatch(getAgentKitCliFact('setup', 'stable')?.flags.join(' ') ?? '', /--dry-run/);
  assert.doesNotMatch(getAgentKitCliFact('kit-uninstall', 'stable')?.flags.join(' ') ?? '', /--target|--global/);
  assert.doesNotMatch(scenarios, /ak setup[^\n]*--dry-run|ak setup[^\n]*--config-only/i);
  assert.match(getAgentKitCliFact('portable-export', 'stable')?.command ?? '', /--build-only\b.*--out\b/);
  assert.doesNotMatch(scenarios, /ak migrate[^\n]*(?:--dry-run=false|--yes|\bapply\b)/i);
});

test('active-beta switcher advertises public beta while hold builds keep stable rendered facts', async () => {
  const [switcher, controller, guide, betaFacts] = await Promise.all([
    source('src/components/guides/agentkit/agentkit-channel-switcher.astro'),
    source('src/scripts/agentkit-channel-controller.mjs'),
    source('src/components/guides/AgentKitGuide.astro'),
    source('src/data/guides/agentkit/agentkit-beta-channel-facts.mjs'),
  ]);
  assert.match(switcher, /hasActiveBeta|AGENTKIT_SOURCE_SNAPSHOT/);
  assert.match(switcher, /data-agentkit-channel-choice="beta"/);
  assert.match(switcher, /\?channel=beta/);
  assert.doesNotMatch(switcher, /cursor-not-allowed|aria-disabled="true"/);
  assert.match(controller, /import\(['"][^'"]*beta|@agentkit-beta-loader/);
  assert.doesNotMatch(guide, /agentkit-beta-view|agentkit-beta-channel-facts/);
  assert.match(guide, /data-agentkit-active-channel=["'{]stable/);
  assert.match(betaFacts, /activeBetaVersion:\s*'2\.5\.0-beta\.1'/);
  assert.match(betaFacts, /commandFactCount:\s*0/);
  assert.doesNotMatch(betaFacts, /2\.4\.0-beta\.7/);
});

test('truth and LLM source closures include stable 2.4 scenarios and active beta fixture identity', async () => {
  const [manifest, llmGenerator, llmIndex] = await Promise.all([
    source('scripts/agentkit-truth-audit-source-manifest.mjs'),
    source('scripts/generate-llms-full.mjs'),
    source('src/data/guides-llms-index.mjs'),
  ]);
  for (const path of [
    'src/components/guides/agentkit/agentkit-scenario-command-guide.astro',
    'src/data/guides/agentkit/agentkit-official-links.mjs',
    'tests/fixtures/agentkit-release/current-release.json',
    'tests/fixtures/agentkit-release/stable-v2.4.0.json',
    'tests/fixtures/agentkit-release/prerelease-v2.5.0-beta.1.json',
  ]) assert.ok(manifest.includes(path), path);
  assert.match(`${llmGenerator}\n${llmIndex}`, /stable/i);
  assert.doesNotMatch(`${llmGenerator}\n${llmIndex}`, /activeBetaVersion|2\.5\.0-beta\.1/);
});
