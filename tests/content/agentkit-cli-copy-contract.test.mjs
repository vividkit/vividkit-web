import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { getAgentKitCliFact } from '../../src/data/guides/agentkit/agentkit-cli-facts.ts';
import {
  getAgentKitCliCopyPresentation,
  isSafeAgentKitCliCopyPayload,
} from '../../src/data/guides/agentkit/agentkit-cli-copy-presentation.ts';
import { cliCommandsCheatsheet } from '../../src/data/guides/cli-commands-cheatsheet.ts';

const ROOT = new URL('../../', import.meta.url);
const source = (path) => readFile(new URL(path, ROOT), 'utf8');

test('CLI reference derives 18 commands across 5 groups from presentation data', async () => {
  assert.equal(cliCommandsCheatsheet.length, 18);
  assert.equal(new Set(cliCommandsCheatsheet.map(({ category }) => category)).size, 5);

  const hero = await source('src/components/guides/cli-commands/cli-commands-hero.astro');
  assert.match(hero, /totalCommands/);
  assert.match(hero, /categoryCount/);
  assert.match(hero, /commands across/);
  assert.match(hero, /lệnh trong/);
  assert.doesNotMatch(hero, /verified command groups|nhóm lệnh đã xác minh/);
});

test('safe-copy projection selects reviewed previews and omits unsafe mutations', () => {
  const cases = [
    ['update', 'ak update --dry-run', 'dry-run'],
    ['self-update', 'ak self-update --check', 'check'],
    ['migrate', 'ak migrate --from=ck', 'preview-default'],
    ['new', null, 'manual'],
    ['init', null, 'manual'],
    ['login-email', null, 'manual'],
    ['kit-init', null, 'manual'],
    ['doctor', 'ak doctor', 'read-only'],
    ['versions', 'ak versions', 'read-only'],
  ];

  for (const [id, copyPayload, safety] of cases) {
    const fact = getAgentKitCliFact(id);
    assert.ok(fact, id);
    const projection = getAgentKitCliCopyPresentation(fact);
    assert.equal(projection.copyPayload, copyPayload, id);
    assert.equal(projection.safety, safety, id);
    assert.equal(projection.copyable, copyPayload !== null, id);
    if (copyPayload) assert.equal(isSafeAgentKitCliCopyPayload(copyPayload), true, id);
  }
});

test('copy payload validator rejects prompts, placeholders, controls, chaining and apply forms', () => {
  for (const payload of [
    '$ ak doctor',
    'ak login --email <account-email>',
    'ak doctor\u0007',
    'ak doctor && ak update',
    'ak doctor; ak update',
    'ak doctor | sh',
    'rm -rf .agentkit',
    'ak update --yes',
    'ak update --force',
    'ak migrate --apply',
    'ak update --dry-run=false',
  ]) assert.equal(isSafeAgentKitCliCopyPayload(payload), false, payload);
});

test('CLI copy UI is modular, localized, announced and rebound after Astro navigation', async () => {
  const guide = await source('src/components/guides/CLICommandsGuide.astro');
  const cheatsheet = await source('src/components/guides/cli-commands/cli-commands-cheatsheet.astro');
  const card = await source('src/components/guides/cli-commands/cli-command-card.astro');
  const controller = await source('src/scripts/agentkit-cli-copy-controller.ts');

  assert.match(guide, /aria-live="polite"/);
  assert.match(guide, /aria-atomic="true"/);
  assert.match(guide, /data-agentkit-copy-status/);
  assert.match(guide, /data-agentkit-copy-success/);
  assert.match(guide, /data-agentkit-copy-failure/);
  assert.match(guide, /initializeAgentKitCliCopyController/);
  assert.match(guide, /astro:page-load/);
  assert.doesNotMatch(guide, /DOMContentLoaded|console\.error/);

  assert.match(cheatsheet, /CliCommandCategorySection/);
  assert.ok(cheatsheet.split('\n').length < 100, 'cheatsheet orchestrator should remain focused');
  assert.match(controller, /navigator\.clipboard\.writeText/);
  assert.match(controller, /data-agentkit-copy-ready/);
  assert.match(controller, /data-agentkit-copy-status/);
  assert.match(card, /const hasCommandMetadata =/);
  assert.doesNotMatch(card, /\(command\.subcommands\?\.length \|\| command\.keyFlags\.length\)\s*&&/);
});
