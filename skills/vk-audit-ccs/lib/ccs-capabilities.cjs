/**
 * Audit per-provider capabilities from `src/cliproxy/provider-capabilities.ts`.
 *
 * Builds a matrix: provider → { displayName, oauthFlow, callbackPort, refreshOwnership,
 * authFilePrefixes, tokenTypeValues, aliases } and cross-checks each documented
 * provider in VK CCS guide.
 *
 * Also enumerates `src/cliproxy/ai-providers/managed-model-prefixes.ts` for the
 * model→provider routing rules.
 */

const fs = require("fs");
const path = require("path");
const {
  readFileOrNull,
  extractRecordOfObjects,
  extractStringArray,
} = require("./ts-source-parser.cjs");

const CAPABILITIES_FILE = "src/cliproxy/provider-capabilities.ts";
const MODEL_PREFIXES_FILE = "src/cliproxy/ai-providers/managed-model-prefixes.ts";

function parseCapabilities(ccsDir) {
  const fp = path.join(ccsDir, CAPABILITIES_FILE);
  const src = readFileOrNull(fs, fp);
  if (!src) return null;

  const capabilities = extractRecordOfObjects(src, "PROVIDER_CAPABILITIES");
  // CLIPROXY_PROVIDER_IDS is built dynamically from PROVIDER_CAPABILITIES keys.
  const providerIds = Object.keys(capabilities);
  // QUOTA_SUPPORTED_PROVIDER_IDS is a frozen array.
  const quotaSupported = extractStringArray(src, "QUOTA_SUPPORTED_PROVIDER_IDS");

  return {
    capabilities,
    providerIds,
    quotaSupported,
    sourceFile: CAPABILITIES_FILE,
  };
}

function parseModelPrefixes(ccsDir) {
  const fp = path.join(ccsDir, MODEL_PREFIXES_FILE);
  const src = readFileOrNull(fs, fp);
  if (!src) return null;

  // Extract `provider: ['prefix1', 'prefix2', ...]` shape, regardless of variable name.
  const result = {};
  const recordRe = /([a-zA-Z_$][\w$-]*)\s*:\s*\[([^\]]+)\]/g;
  let m;
  while ((m = recordRe.exec(src)) !== null) {
    const key = m[1];
    if (key.length < 2 || key.length > 20) continue;
    const items = [...m[2].matchAll(/['"`]([^'"`]+)['"`]/g)].map((x) => x[1]);
    if (items.length === 0) continue;
    result[key] = items;
  }
  return { rules: result, sourceFile: MODEL_PREFIXES_FILE };
}

function buildMatrix(parsed, modelPrefixes, profilesShipped, guideText) {
  if (!parsed) return [];
  const rows = [];
  for (const id of parsed.providerIds) {
    const cap = parsed.capabilities[id] || {};
    const prefixes = modelPrefixes && modelPrefixes.rules ? modelPrefixes.rules[id] || [] : [];
    const inGuide = guideText.includes(id) || (cap.displayName && guideText.includes(cap.displayName));
    const inProfiles = profilesShipped.includes(id);
    const quotaSupported = (parsed.quotaSupported || []).includes(id);
    rows.push({
      id,
      displayName: cap.displayName || id,
      description: cap.description || "",
      oauthFlow: cap.oauthFlow || "—",
      callbackPort: cap.callbackPort,
      refreshOwnership: cap.refreshOwnership || "—",
      authFilePrefixes: cap.authFilePrefixes || [],
      tokenTypeValues: cap.tokenTypeValues || [],
      aliases: cap.aliases || [],
      modelPrefixes: prefixes,
      quotaSupported,
      inProfiles,
      inGuide,
    });
  }
  return rows;
}

function renderReport(matrix, parsed, modelPrefixes, meta) {
  const date = new Date().toISOString().split("T")[0];
  const lines = [];
  lines.push(`# CCS Provider Capabilities Audit — ${date}`);
  lines.push("");
  lines.push(`- **Source**: \`${parsed ? parsed.sourceFile : "(missing)"}\``);
  lines.push(`- **Repo**: ${meta.repo}`);
  lines.push(`- **CLIProxy providers**: ${matrix.length}`);
  lines.push(
    `- **With base profile shipped**: ${matrix.filter((r) => r.inProfiles).length}`
  );
  lines.push(`- **Quota-tracked**: ${matrix.filter((r) => r.quotaSupported).length}`);
  lines.push("");

  lines.push("## Capability Matrix");
  lines.push("");
  lines.push(
    "| ID | Display | OAuth Flow | Callback Port | Refresh Owner | Aliases | In Guide | Quota |"
  );
  lines.push("|---|---|---|---|---|---|---|---|");
  for (const r of matrix) {
    const port = r.callbackPort === null ? "n/a (device_code)" : r.callbackPort;
    const aliases = r.aliases.length ? r.aliases.map((a) => `\`${a}\``).join(", ") : "—";
    lines.push(
      `| \`${r.id}\` | ${r.displayName} | ${r.oauthFlow} | ${port} | ${r.refreshOwnership} | ${aliases} | ${r.inGuide ? "yes" : "**no**"} | ${r.quotaSupported ? "yes" : "—"} |`
    );
  }
  lines.push("");

  lines.push("## Per-Provider Detail");
  lines.push("");
  for (const r of matrix) {
    lines.push(`### \`${r.id}\` — ${r.displayName}`);
    lines.push("");
    lines.push(`- ${r.description}`);
    lines.push(`- OAuth flow: \`${r.oauthFlow}\`${r.callbackPort ? ` (callback port \`${r.callbackPort}\`)` : ""}`);
    lines.push(`- Refresh ownership: \`${r.refreshOwnership}\``);
    if (r.authFilePrefixes.length) {
      lines.push(`- Auth file prefixes: ${r.authFilePrefixes.map((p) => `\`${p}\``).join(", ")}`);
    }
    if (r.tokenTypeValues.length) {
      lines.push(`- Token type values: ${r.tokenTypeValues.map((v) => `\`${v}\``).join(", ")}`);
    }
    if (r.aliases.length) {
      lines.push(`- Aliases: ${r.aliases.map((a) => `\`${a}\``).join(", ")}`);
    }
    if (r.modelPrefixes.length) {
      lines.push(`- Model prefixes routed: ${r.modelPrefixes.map((p) => `\`${p}\``).join(", ")}`);
    }
    lines.push(`- Base profile shipped: ${r.inProfiles ? "yes" : "no"}`);
    lines.push(`- Documented in VK guide: ${r.inGuide ? "yes" : "**no**"}`);
    if (r.quotaSupported) lines.push(`- Quota tracking: enabled`);
    lines.push("");
  }

  if (modelPrefixes && Object.keys(modelPrefixes.rules || {}).length) {
    lines.push("## Model Prefix Routing");
    lines.push("");
    lines.push(`Source: \`${modelPrefixes.sourceFile}\``);
    lines.push("");
    lines.push("Prefix matches in this file determine which CLIProxy provider serves a model name.");
    lines.push("");
  }

  // Suggestions
  const missingGuide = matrix.filter((r) => !r.inGuide);
  const noProfile = matrix.filter((r) => !r.inProfiles);
  lines.push("## Suggestions");
  lines.push("");
  if (missingGuide.length) {
    lines.push(`- **${missingGuide.length} provider(s) with declared capabilities but missing from VK guide**:`);
    for (const r of missingGuide) lines.push(`  - \`${r.id}\` (${r.displayName})`);
  }
  if (noProfile.length) {
    lines.push(`- **${noProfile.length} provider(s) declared in capabilities but no \`base-<id>.settings.json\`**:`);
    for (const r of noProfile) lines.push(`  - \`${r.id}\` — verify whether profile is intentionally absent (e.g. OAuth-only)`);
  }
  if (!missingGuide.length && !noProfile.length) {
    lines.push("_All declared providers have profiles + guide coverage._");
  }
  lines.push("");

  return lines.join("\n");
}

function validateDrift(matrix) {
  const issues = [];
  const missing = matrix.filter((r) => !r.inGuide);
  if (missing.length) {
    issues.push(
      `capabilities: ${missing.length} CLIProxy provider(s) with declared capabilities missing from VK guide: ${missing.map((r) => r.id).join(", ")}`
    );
  }
  return issues;
}

module.exports = {
  parseCapabilities,
  parseModelPrefixes,
  buildMatrix,
  renderReport,
  validateDrift,
};
