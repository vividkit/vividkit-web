import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  AGENTKIT_CHANNEL_UI_FALLBACK_QUERIES,
  AGENTKIT_CHANNEL_UI_SURFACES,
  createAgentKitUiEvidenceEnvelope,
} from '../../scripts/check-agentkit-channel-ui.mjs';

const ROOT = new URL('../../', import.meta.url);

test('browser contract covers all O1 surfaces, locales, invalid queries, history, keyboard, and no-JS', async () => {
  assert.deepEqual(AGENTKIT_CHANNEL_UI_SURFACES, [
    '/guides/agentkit',
    '/guides/cli',
    '/guides/cli-commands',
    '/guides/coexistence',
  ]);
  assert.deepEqual(AGENTKIT_CHANNEL_UI_FALLBACK_QUERIES, [
    '?channel=dev',
    '?channel=Beta',
    '?channel=BETA',
    '?channel=beta&channel=beta',
  ]);

  const source = await readFile(new URL('scripts/check-agentkit-channel-ui.mjs', ROOT), 'utf8');
  assert.match(source, /for \(const route of allSurfacePaths\)/);
  assert.match(source, /runNavigationCase\(\{ browser, baseUrl, route, expected \}\)/);
  assert.match(source, /runKeyboardCase\(\{ browser, baseUrl, route, expected \}\)/);
  assert.match(source, /jsEnabled: false/);
  assert.match(source, /surfaceLinksDropBeta/);
  assert.match(source, /expected !== 'inactive'/);
});

test('UI evidence envelope has bounded retention and rejects raw browser errors', () => {
  const envelope = createAgentKitUiEvidenceEnvelope({
    baseUrl: 'http://127.0.0.1:4321',
    channelExpectation: 'hold',
    results: [{ route: '/guides/agentkit', case: 'desktop-light-hold', failures: [] }],
    now: new Date('2026-07-17T03:00:00.000Z'),
  });
  assert.deepEqual(envelope.retention, {
    classification: 'local-access-controlled',
    owner: 'vividkit-maintainer',
    reviewer: 'phase-8-offline-validation',
    expiresAt: '2026-07-24T03:00:00.000Z',
    disposition: 'delete-after-expiry',
  });
  assert.equal(envelope.capturedAt, '2026-07-17T03:00:00.000Z');
  assert.equal(envelope.baseOrigin, 'http://127.0.0.1:4321');

  const inactive = createAgentKitUiEvidenceEnvelope({
    baseUrl: 'http://127.0.0.1:4321',
    channelExpectation: 'inactive',
    results: [{ route: '/guides/agentkit?channel=beta', case: 'inactive', failures: [] }],
    now: new Date('2026-07-20T08:47:38.356Z'),
  });
  assert.equal(inactive.channelExpectation, 'inactive');

  assert.throws(() => createAgentKitUiEvidenceEnvelope({
    baseUrl: 'http://127.0.0.1:4321',
    channelExpectation: 'published',
    results: [{ route: '/guides/agentkit', case: 'bad', pageErrors: ['SECRET /Users/private/repo'] }],
    now: new Date('2026-07-17T03:00:00.000Z'),
  }), /unsafe UI evidence/i);
});

test('package exposes the UI checker without coupling it to offline verify or build', async () => {
  const packageJson = JSON.parse(await readFile(new URL('package.json', ROOT), 'utf8'));
  assert.equal(packageJson.scripts['check:agentkit-ui'], 'node scripts/check-agentkit-guide-ui.mjs');
  assert.doesNotMatch(packageJson.scripts['verify:agentkit'], /agentkit-ui/);
  assert.doesNotMatch(packageJson.scripts.build, /agentkit-ui/);
});
