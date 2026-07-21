import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

import { activateAgentKitBetaChannel } from '../../src/scripts/agentkit-beta-loader-published.mjs';

import {
  AGENTKIT_CHANNEL_SURFACE_PATHS,
  isAgentKitChannelSurface,
  normalizeAgentKitChannel,
  propagateAgentKitChannel,
  withAgentKitChannel,
} from '../../src/data/guides/agentkit/agentkit-channel-policy.mjs';

test('invalid, missing, empty, repeated, conflicting, and case-variant channel input normalizes to stable', () => {
  for (const input of [
    '',
    '?channel=',
    '?channel=dev',
    '?channel=Beta',
    '?channel=BETA',
    '?channel=beta&channel=beta',
    '?channel=stable&channel=beta',
  ]) {
    assert.equal(normalizeAgentKitChannel(input), 'stable', input);
  }
  assert.equal(normalizeAgentKitChannel('?channel=stable'), 'stable');
  assert.equal(normalizeAgentKitChannel('?channel=beta'), 'beta');
});

test('O1 propagation is bounded to Hub, CLI, CLI Commands, and Coexistence in EN/VI', () => {
  assert.deepEqual(AGENTKIT_CHANNEL_SURFACE_PATHS, [
    '/guides/agentkit',
    '/guides/cli',
    '/guides/cli-commands',
    '/guides/coexistence',
  ]);

  for (const path of AGENTKIT_CHANNEL_SURFACE_PATHS) {
    assert.equal(isAgentKitChannelSurface(path), true, path);
    assert.equal(isAgentKitChannelSurface(`/vi${path}`), true, `/vi${path}`);
    assert.equal(propagateAgentKitChannel(path, 'beta'), `${path}?channel=beta`);
    assert.equal(propagateAgentKitChannel(`/vi${path}`, 'beta'), `/vi${path}?channel=beta`);
    assert.equal(isAgentKitChannelSurface(`${path}/`), true, `${path}/`);
    assert.equal(isAgentKitChannelSurface(`/vi${path}/`), true, `/vi${path}/`);
    assert.equal(propagateAgentKitChannel(`${path}/`, 'beta'), `${path}/?channel=beta`);
    assert.equal(propagateAgentKitChannel(`/vi${path}/`, 'beta'), `/vi${path}/?channel=beta`);
  }

  assert.equal(isAgentKitChannelSurface('/guides/what-is-claudekit'), false);
  assert.equal(propagateAgentKitChannel('/guides/what-is-claudekit?channel=beta&ref=nav', 'beta'), '/guides/what-is-claudekit?ref=nav');
});

test('stable links remove channel identity while beta preserves unrelated query and hash state', () => {
  assert.equal(
    propagateAgentKitChannel('/guides/agentkit?ref=nav&channel=beta#lifecycle', 'stable'),
    '/guides/agentkit?ref=nav#lifecycle',
  );
  assert.equal(
    propagateAgentKitChannel('/guides/agentkit?ref=nav#lifecycle', 'beta'),
    '/guides/agentkit?ref=nav&channel=beta#lifecycle',
  );
  assert.equal(
    withAgentKitChannel('/vi/guides/cli/?ref=nav#install', 'beta'),
    '/vi/guides/cli/?ref=nav&channel=beta#install',
  );
  assert.equal(
    withAgentKitChannel('/guides/migrate?channel=beta&ref=nav', 'beta'),
    '/guides/migrate?ref=nav',
  );
});

test('stale beta activation is cancelled before it can mutate the stable fallback', async () => {
  const root = { dataset: {}, querySelector() { throw new Error('stale request touched DOM'); } };
  const result = await activateAgentKitBetaChannel({
    root,
    locale: 'en',
    surface: 'hub',
    isCurrent: () => false,
  });
  assert.deepEqual(result, { activeChannel: 'stable', status: 'superseded', focusTarget: null });
  assert.deepEqual(root.dataset, {});

  const controller = await readFile(new URL('../../src/scripts/agentkit-channel-controller.mjs', import.meta.url), 'utf8');
  assert.match(controller, /channelRequestGeneration/);
  assert.match(controller, /isCurrent/);
});
