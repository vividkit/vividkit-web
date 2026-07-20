import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';

import { htmlToText } from '../../scripts/generate-llms-full.mjs';
import { llmExportPolicy } from '../../src/data/guides-llms-index.mjs';

const projectRoot = new URL('../..', import.meta.url).pathname;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

test('LLM extraction keeps stable guidance and strips beta, controls, and archive nodes', () => {
  assert.deepEqual(llmExportPolicy, {
    channel: 'stable',
    queryCreatesRouteIdentity: false,
    betaArtifactPublished: false,
    legacyArchiveIncluded: false,
  });
  const text = htmlToText(`
    <main>
      <p>Stable AgentKit 2.4.0 lifecycle and support-assisted boundary.</p>
      <section data-agentkit-channel-controls><p>Stable/Beta selector ?channel=beta</p></section>
      <section data-llms-exclude><p>Promoted prerelease 2.4.0-beta.7</p></section>
      <div data-llms-channel="beta">beta-only release facts</div>
      <p>Read <a href="/legacy/guides/migrate">ClaudeKit archive</a> only if requested.</p>
    </main>
  `);
  assert.match(text, /Stable AgentKit 2\.4\.0 lifecycle and support-assisted boundary/);
  assert.doesNotMatch(text, /2\.4\.0-beta\.7|\?channel=beta|beta-only release facts|ClaudeKit archive|\/legacy\/guides/);
});

test('LLM full export retains AgentKit App and legacy-cleanup safety boundaries', async (context) => {
  if (process.env.npm_lifecycle_event !== 'test:agentkit-postbuild') {
    context.skip('postbuild-only LLM assertion');
    return;
  }
  const output = join(projectRoot, 'dist', 'llms-full.txt');
  assert.equal(await exists(output), true, 'postbuild llms-full.txt missing');

  const text = await readFile(output, 'utf8');
  const indexText = await readFile(join(projectRoot, 'dist', 'llms.txt'), 'utf8');
  const agentKitHtml = await readFile(join(projectRoot, 'dist', 'guides', 'agentkit', 'index.html'), 'utf8');
  const stageSevenPublished = agentKitHtml.includes('data-stage-seven-details="published"');
  assert.match(text, /Public availability is not established/);
  assert.match(text, /CLI registry and Desktop App use separate sessions/);
  assert.match(text, /linked release was unavailable when verified/);
  assert.match(text, /Unknown ownership means no uninstall command/);
  assert.doesNotMatch(text, /2\.3\.1-beta\.1|\?channel=beta|beta-only release facts/i);
  assert.doesNotMatch(`${indexText}\n${text}`, /\/legacy\/guides|ClaudeKit archive/i);
  if (stageSevenPublished) {
    assert.match(text, /Match exact package-manager ownership/);
    assert.match(text, /Manual-only · exact path ownership and publication approval required/);
    assert.doesNotMatch(text, /Detailed removal guidance is not published in this build/);
  } else {
    assert.match(text, /Detailed removal guidance is not published in this build/);
    assert.match(text, /Read-only detectors remain available, but exact uninstall details are held by the build-time publication record/);
  }
  assert.match(text, /ClaudeKit is historical context, not the current install path/);
  assert.match(text, /One skill identity, target-correct syntax/);
  assert.match(text, /ClaudeKit was the original toolkit/);

  const primerStart = text.indexOf('## What is ClaudeKit? From CK to AgentKit');
  const primerEnd = text.indexOf('\n## ', primerStart + 3);
  assert.notEqual(primerStart, -1, 'what-is-claudekit LLM section missing');
  const primer = text.slice(primerStart, primerEnd === -1 ? undefined : primerEnd);
  assert.doesNotMatch(primer, /(?:\/|\$)(?:ck|ckm):/i);
  assert.doesNotMatch(primer, /\bck\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\b/i);
});
