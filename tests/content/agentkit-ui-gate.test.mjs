import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  AGENTKIT_CHANNEL_UI_FALLBACK_QUERIES,
  AGENTKIT_CHANNEL_UI_SURFACES,
  createAgentKitUiEvidenceEnvelope,
} from '../../scripts/check-agentkit-channel-ui.mjs';

const ROOT = new URL('../../', import.meta.url);

function source(path) {
  return readFile(new URL(path, ROOT), 'utf8');
}

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
    '?channel=stable&channel=beta',
  ]);

  const channelChecker = await source('scripts/check-agentkit-channel-ui.mjs');
  assert.match(channelChecker, /for \(const route of allSurfacePaths\)/);
  assert.match(channelChecker, /runNavigationCase\(\{ browser, baseUrl, route, expected \}\)/);
  assert.match(channelChecker, /runKeyboardCase\(\{ browser, baseUrl, route, expected \}\)/);
  assert.match(channelChecker, /jsEnabled: false/);
  assert.match(channelChecker, /surfaceLinksDropBeta/);
  assert.match(channelChecker, /width:\s*390/);
  assert.match(channelChecker, /width:\s*768/);
  assert.match(channelChecker, /width:\s*1024/);
  assert.match(channelChecker, /width:\s*1440/);
  assert.match(channelChecker, /expected === 'hold'/);
  assert.match(channelChecker, /choiceCount/);
  assert.match(channelChecker, /noticeRole/);
  assert.match(channelChecker, /staticHoldNotice/);
  assert.match(channelChecker, /ref=nav/);
  assert.match(channelChecker, /#recovery/);
});

test('archive browser gate covers one in-flow notice without header collision or overflow', async () => {
  const guideChecker = await source('scripts/check-agentkit-guide-ui.mjs');
  const archiveChecker = await source('scripts/check-legacy-archive-ui.mjs');

  assert.match(guideChecker, /runLegacyArchiveUiMatrix/);
  assert.match(archiveChecker, /width:\s*390/);
  assert.match(archiveChecker, /width:\s*1440/);
  assert.match(archiveChecker, /data-legacy-archive-banner/);
  assert.match(archiveChecker, /position/);
  assert.match(archiveChecker, /headerBottom/);
  assert.match(archiveChecker, /noticeTop/);
  assert.match(archiveChecker, /scrollWidth/);
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

  assert.throws(() => createAgentKitUiEvidenceEnvelope({
    baseUrl: 'http://127.0.0.1:4321',
    channelExpectation: 'published',
    results: [{ route: '/guides/agentkit', case: 'bad', pageErrors: ['SECRET /Users/private/repo'] }],
    now: new Date('2026-07-17T03:00:00.000Z'),
  }), /unsafe UI evidence/i);
});

test('package exposes the UI checker without coupling it to offline verify or build', async () => {
  const packageJson = JSON.parse(await source('package.json'));
  assert.equal(packageJson.scripts['check:agentkit-ui'], 'node scripts/check-agentkit-guide-ui.mjs');
  assert.doesNotMatch(packageJson.scripts['verify:agentkit'], /agentkit-ui/);
  assert.doesNotMatch(packageJson.scripts.build, /agentkit-ui/);
});

test('reader journey browser gate covers 390px, no-JS destinations, and independent static stages', async () => {
  const guideChecker = await source('scripts/check-agentkit-guide-ui.mjs');
  const journeyChecker = await source('scripts/check-agentkit-reader-journey-ui.mjs');

  assert.match(guideChecker, /runAgentKitReaderJourneyUiMatrix/);
  assert.match(journeyChecker, /width:\s*390/);
  assert.match(journeyChecker, /setJavaScriptEnabled\(false\)/);
  assert.match(journeyChecker, /data-agentkit-reader-lane/);
  assert.match(journeyChecker, /data-agentkit-route-group/);
  assert.match(journeyChecker, /data-agentkit-stage-details/);
  assert.match(journeyChecker, /bothStagesOpen/);
  assert.match(journeyChecker, /data-agentkit-advanced-references/);
  assert.doesNotMatch(journeyChecker, /data-agentkit-router-evaluate|data-agentkit-router-result/);
  assert.match(journeyChecker, /:focus-visible/);
  assert.match(journeyChecker, /mainScrollWidth\s*>\s*initial\.mainClientWidth/);
  assert.match(journeyChecker, /visibleChromeBottom/);
  assert.match(journeyChecker, /targetTop\s*>?=\s*metrics\.viewportHeight/);
  assert.match(journeyChecker, /targetBottom\s*<=\s*metrics\.visibleChromeBottom/);
  assert.match(journeyChecker, /waitForNavigation/);
});

test('CLI copy browser gate covers localized safe payloads, failures, Astro rebinding, themes, and 44px controls', async () => {
  const guideChecker = await source('scripts/check-agentkit-guide-ui.mjs');
  const copyChecker = await source('scripts/check-agentkit-cli-copy-ui.mjs');

  assert.match(guideChecker, /runAgentKitCliCopyUiMatrix/);
  assert.match(copyChecker, /width:\s*390/);
  assert.match(copyChecker, /\['light', 'dark'\]/);
  assert.match(copyChecker, /ak update --dry-run/);
  assert.match(copyChecker, /ak self-update --check/);
  assert.match(copyChecker, /data-agentkit-copy-status/);
  assert.match(copyChecker, /astro:page-load/);
  assert.match(copyChecker, /clipboardWriteCount/);
  assert.match(copyChecker, /buttonHeight\s*<\s*44/);
  assert.match(copyChecker, /scrollWidth\s*>\s*metrics\.clientWidth/);
  assert.match(copyChecker, /copy-failure/);
  assert.match(copyChecker, /strayZeroCount/);
});
