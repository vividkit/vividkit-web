import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  getCliCommandsCheatsheet,
} from '../../src/data/guides/cli-commands-cheatsheet.ts';
import {
  getAgentKitCliFact,
} from '../../src/data/guides/agentkit/agentkit-cli-facts.ts';
import { AGENTKIT_BETA_CHANNEL_FACTS } from '../../src/data/guides/agentkit/agentkit-beta-channel-facts.mjs';

const ROOT = new URL('../../', import.meta.url);

async function source(path) {
  return readFile(new URL(path, ROOT), 'utf8');
}

test('all four O1 surfaces share one channel shell and keep stable facts in the SSR fallback', async () => {
  for (const file of [
    'src/components/guides/AgentKitGuide.astro',
    'src/components/guides/CLIGuide.astro',
    'src/components/guides/CLICommandsGuide.astro',
    'src/components/guides/CoexistenceGuide.astro',
  ]) {
    const text = await source(file);
    assert.match(text, /AgentKitChannelSwitcher/, file);
    assert.match(text, /data-agentkit-channel-root/, file);
    assert.match(text, /data-agentkit-stable-facts/, file);
  }
});

test('channel controller imports only the build alias and never stores or reports query state', async () => {
  const controller = await source('src/scripts/agentkit-channel-controller.mjs');
  assert.match(controller, /from ['"]@agentkit-beta-loader['"]/);
  assert.doesNotMatch(controller, /(?:from|import\()[^\n]*agentkit-beta-view|agentkit-beta-loader-published\.mjs/);
  assert.doesNotMatch(controller, /localStorage|sessionStorage|document\.cookie|CustomEvent|gtag|analytics/i);
  assert.match(controller, /popstate/);
  assert.match(controller, /pushState|replaceState/);
});

test('hold and published loaders have disjoint executable closures', async () => {
  const hold = await source('src/scripts/agentkit-beta-loader-hold.mjs');
  const published = await source('src/scripts/agentkit-beta-loader-published.mjs');
  const betaView = await source('src/scripts/agentkit-beta-view.mjs');

  assert.match(hold, /agentkit-beta-hold-v1/);
  assert.doesNotMatch(hold, /agentkit-beta-view|agentkit-beta-loader-published|2\.3\.1-beta\.1/);
  assert.match(published, /import\(['"]\.\/agentkit-beta-view\.mjs['"]\)/);
  assert.doesNotMatch(published, /agentkit-beta-hold-v1/);
  assert.match(betaView, /agentkit-public-beta-view-v1/);
  assert.match(betaView, /agentkit-beta-channel-facts/);
});

test('published beta view consumes the independently reviewed release fixture without inventing commands', async () => {
  const fixture = JSON.parse(await source('tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json'));
  assert.equal(AGENTKIT_BETA_CHANNEL_FACTS.channel, fixture.channel);
  assert.equal(AGENTKIT_BETA_CHANNEL_FACTS.version, fixture.version);
  assert.equal(AGENTKIT_BETA_CHANNEL_FACTS.verifiedAt, fixture.verifiedAt);
  assert.equal(AGENTKIT_BETA_CHANNEL_FACTS.sourceUrl, fixture.sourceUrl);
  assert.equal(AGENTKIT_BETA_CHANNEL_FACTS.claimId, fixture.claims[0].id);
  assert.equal(AGENTKIT_BETA_CHANNEL_FACTS.commandFactCount, 0);
});

test('CLI cheatsheet is a presentation projection of canonical channel facts, never a beta-to-stable fallback', () => {
  const stable = getCliCommandsCheatsheet('stable');
  const beta = getCliCommandsCheatsheet('beta');

  assert.ok(stable.length > 0);
  assert.deepEqual(beta, []);
  for (const command of stable) {
    const fact = getAgentKitCliFact(command.id, 'stable');
    assert.ok(fact, command.id);
    assert.equal(command.name, fact.command, command.id);
    assert.equal(command.channel, fact.channel, command.id);
    assert.equal(command.sourceUrl, fact.sourceUrl, command.id);
    assert.equal(command.verifiedAt, fact.verifiedAt, command.id);
    assert.equal(command.mutatesDisk, fact.mutatesDisk, command.id);
    assert.deepEqual(command.keyFlags, [...fact.flags], command.id);
  }
});

test('CLI setup/lifecycle resolve commands from canonical facts and coexistence is closed-beta only', async () => {
  const setup = await source('src/components/guides/cli-guide/AgentKitCliSetup.astro');
  const lifecycle = await source('src/components/guides/cli-guide/AgentKitCliLifecycle.astro');
  const coexistence = await source('src/components/guides/CoexistenceGuide.astro');

  assert.match(setup, /getAgentKitCliFact/);
  assert.match(lifecycle, /getAgentKitCliFact/);
  assert.doesNotMatch(`${setup}\n${lifecycle}`, /command:\s*['"]ak |code=\{['"]ak /);
  assert.match(coexistence, /closed-beta|closed beta/i);
  assert.match(coexistence, /kill switch|exit criteria/i);
  assert.doesNotMatch(coexistence, /stage ak beside ck|stage ak cạnh ck/i);
  assert.doesNotMatch(coexistence, /same-scope coexistence|coexistence cùng scope/i);
});
