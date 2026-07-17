import assert from 'node:assert/strict';
import test from 'node:test';

import {
  AGENTKIT_LIFECYCLE_SANITIZED_REPORT_KEYS,
  AGENTKIT_SANITIZED_REPORT_KEYS,
  sanitizeAgentKitReport,
  sanitizeAgentKitLifecycleReport,
} from '../../src/data/guides/agentkit/agentkit-report-sanitizer.mjs';

test('sanitizer emits one allowlisted schema and drops nested/raw error fields', () => {
  const output = sanitizeAgentKitReport({
    category: 'repository-context',
    stage: 'contract',
    tool: { name: 'agentkit-truth-audit', version: '1.0.0' },
    expectedCode: 'reviewed-truth-contract',
    actualCode: 'owner-unavailable',
    incidentId: 'AK-CONTRACT-001',
    stdout: 'should-not-pass',
    stderr: 'should-not-pass',
    error: { stack: 'Error: secret\n at /Users/alice/private/repo/file.mjs:1:2' },
  });

  assert.deepEqual(Object.keys(output), AGENTKIT_SANITIZED_REPORT_KEYS);
  assert.deepEqual(output.tool, { name: 'agentkit-truth-audit', version: '1.0.0' });
  assert.equal('stdout' in output, false);
  assert.equal('stderr' in output, false);
  assert.equal('error' in output, false);
});

test('sanitizer redacts credentials, URLs/remotes, usernames, home paths, private names, stacks, and nested secrets', () => {
  const hostile = [
    'sk-proj-1234567890abcdefghijklmnop',
    'ghp_1234567890abcdefghijklmnop',
    'https://alice:password@example.com/private/repo.git',
    'git@github.com:private-org/secret-repo.git',
    '/Users/alice/private-company/secret-repo/file.mjs',
    '/home/bob/private-company/secret-repo/file.mjs',
    'C:\\Users\\carol\\private-company\\secret-repo\\file.mjs',
    'user=alice license_key=lic_1234567890abcdef api_key=abcdef1234567890abcdef1234567890',
    'Error: failed\n    at run (/Users/alice/private-company/file.mjs:1:2)',
    'Bearer super-secret-token',
    'AKIAIOSFODNN7EXAMPLE',
    'plain-private-repository-name',
  ].join(' | ');

  const output = sanitizeAgentKitReport({
    category: 'bundle-integrity',
    stage: 'fixtures',
    tool: { name: 'agentkit-truth-audit', version: '1.0.0' },
    expectedCode: 'not-allowlisted',
    actualCode: 'not-allowlisted',
    expectedSummary: hostile,
    actualSummary: hostile,
    incidentId: 'AK-PRIVATE-REPOSITORY-NAME',
    nested: { token: hostile },
  });
  const serialized = JSON.stringify(output);

  for (const forbidden of [
    'alice', 'bob', 'carol', 'password', 'private-org', 'secret-repo',
    'sk-proj-', 'ghp_', 'license_key', 'api_key', '/Users/', '/home/', 'C:\\\\Users', ' at run ',
    'Bearer', 'super-secret-token', 'AKIAIOSFODNN7EXAMPLE', 'plain-private-repository-name',
  ]) {
    assert.equal(serialized.includes(forbidden), false, forbidden);
  }
  assert.match(serialized, /redacted/i);
});

test('lifecycle support sanitizer adds only allowlisted channel, detector, and stage facts', () => {
  const output = sanitizeAgentKitLifecycleReport({
    tool: { name: 'agentkit-truth-audit', version: '1.0.0' },
    channel: 'stable',
    detectorCategory: 'npm',
    lifecycleStage: 'remove-ck-control-plane',
    expectedCode: 'reviewed-truth-contract',
    actualCode: 'diagnostic-redacted',
    incidentId: 'AK-REMOVAL-001',
    stdout: '/Users/alice/private-repo token=secret',
  });

  assert.deepEqual(Object.keys(output), AGENTKIT_LIFECYCLE_SANITIZED_REPORT_KEYS);
  assert.equal(output.channel, 'stable');
  assert.equal(output.detectorCategory, 'npm');
  assert.equal(output.lifecycleStage, 'remove-ck-control-plane');
  assert.equal(JSON.stringify(output).includes('/Users/alice'), false);
});
