/**
 * Lightweight regex-based TS source parser for CCS audit.
 *
 * Limitations: handles flat object literals + string arrays + arrays-of-objects.
 * Sufficient for `command-catalog.ts` and `provider-capabilities.ts` which use
 * stable, hand-written `as const` exports — not arbitrary TypeScript.
 */

function readFileOrNull(fs, fp) {
  try {
    return fs.readFileSync(fp, "utf8");
  } catch {
    return null;
  }
}

function findExportStart(src, varName) {
  const re = new RegExp(`export const ${varName}\\b[^=]*=\\s*`, "m");
  const m = src.match(re);
  if (!m) return -1;
  return m.index + m[0].length;
}

// Walk balanced brackets [...] starting at `start` (which points to the opening [).
function extractBracketBody(src, start, open = "[", close = "]") {
  if (src[start] !== open) return null;
  let depth = 1;
  let i = start + 1;
  let inStr = null;
  let prev = "";
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (inStr) {
      if (ch === inStr && prev !== "\\") inStr = null;
    } else {
      if (ch === "'" || ch === '"' || ch === "`") inStr = ch;
      else if (ch === open) depth++;
      else if (ch === close) depth--;
    }
    prev = ch;
    if (depth === 0) break;
    i++;
  }
  return src.slice(start + 1, i);
}

// Extract a string-only array: `['a','b','c'] as const`
function extractStringArray(src, varName) {
  const start = findExportStart(src, varName);
  if (start < 0) return [];
  // Skip whitespace
  let p = start;
  while (p < src.length && /\s/.test(src[p])) p++;
  if (src[p] !== "[") return [];
  const body = extractBracketBody(src, p);
  if (body === null) return [];
  return [...body.matchAll(/['"`]([^'"`]+)['"`]/g)].map((m) => m[1]);
}

// Split body of an array-of-objects into top-level `{...}` chunks.
function splitObjectArray(body) {
  const chunks = [];
  let depth = 0;
  let objStart = -1;
  let inStr = null;
  let prev = "";
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (inStr) {
      if (ch === inStr && prev !== "\\") inStr = null;
      prev = ch;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === "`") {
      inStr = ch;
    } else if (ch === "{") {
      if (depth === 0) objStart = i;
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && objStart >= 0) {
        chunks.push(body.slice(objStart, i + 1));
        objStart = -1;
      }
    }
    prev = ch;
  }
  return chunks;
}

// Extract simple key/value pairs from a flat object literal.
// Handles: string, number, boolean, null, string-array. Ignores nested objects.
function parseObjectLiteral(text) {
  const obj = {};
  // Strip outer braces if present
  let body = text.trim();
  if (body.startsWith("{") && body.endsWith("}")) body = body.slice(1, -1);

  // String value: key: 'value' | "value" | `value`
  const strRe = /(\w+)\s*:\s*['"`]([^'"`]*)['"`]/g;
  let m;
  while ((m = strRe.exec(body)) !== null) obj[m[1]] = m[2];

  // Number: key: 123  /  key: null
  const numRe = /(\w+)\s*:\s*(-?\d+(?:\.\d+)?|null|true|false)\b/g;
  while ((m = numRe.exec(body)) !== null) {
    const key = m[1];
    if (obj[key] !== undefined) continue;
    const val = m[2];
    if (val === "null") obj[key] = null;
    else if (val === "true") obj[key] = true;
    else if (val === "false") obj[key] = false;
    else obj[key] = Number(val);
  }

  // String array: key: ['a','b'] (only on flat lines — fragile, but works for our cases)
  const arrRe = /(\w+)\s*:\s*\[([^\[\]]*)\]/g;
  while ((m = arrRe.exec(body)) !== null) {
    const key = m[1];
    if (obj[key] !== undefined) continue;
    const items = [...m[2].matchAll(/['"`]([^'"`]+)['"`]/g)].map((x) => x[1]);
    obj[key] = items;
  }

  return obj;
}

// Extract array-of-objects: returns parsed object array.
function extractObjectArray(src, varName) {
  const start = findExportStart(src, varName);
  if (start < 0) return [];
  let p = start;
  while (p < src.length && /\s/.test(src[p])) p++;
  if (src[p] !== "[") return [];
  const body = extractBracketBody(src, p);
  if (body === null) return [];
  return splitObjectArray(body).map(parseObjectLiteral);
}

// Extract a Record<string, ObjectLiteral>: returns { key: parsedObj }.
// Use for `PROVIDER_CAPABILITIES: Record<...> = { gemini: {...}, codex: {...} }`.
function extractRecordOfObjects(src, varName) {
  const start = findExportStart(src, varName);
  if (start < 0) return {};
  let p = start;
  while (p < src.length && /\s/.test(src[p])) p++;
  if (src[p] !== "{") return {};
  const body = extractBracketBody(src, p, "{", "}");
  if (body === null) return {};

  const result = {};
  let depth = 0;
  let keyStart = 0;
  let inStr = null;
  let prev = "";
  let i = 0;
  while (i < body.length) {
    // skip whitespace + commas at top-level
    while (i < body.length && /[\s,]/.test(body[i])) i++;
    if (i >= body.length) break;
    keyStart = i;
    // scan key (quoted or identifier)
    if (body[i] === "'" || body[i] === '"') {
      const q = body[i];
      i++;
      while (i < body.length && body[i] !== q) i++;
      i++; // past closing quote
    } else {
      while (i < body.length && /[\w-]/.test(body[i])) i++;
    }
    const keyRaw = body.slice(keyStart, i).replace(/^['"]|['"]$/g, "");
    // skip ':' and whitespace
    while (i < body.length && /[\s:]/.test(body[i])) i++;
    if (body[i] !== "{") break; // value must be object
    // walk balanced object
    depth = 1;
    const valStart = i;
    i++;
    inStr = null;
    prev = "";
    while (i < body.length && depth > 0) {
      const ch = body[i];
      if (inStr) {
        if (ch === inStr && prev !== "\\") inStr = null;
      } else {
        if (ch === "'" || ch === '"' || ch === "`") inStr = ch;
        else if (ch === "{") depth++;
        else if (ch === "}") depth--;
      }
      prev = ch;
      i++;
    }
    const valText = body.slice(valStart, i);
    result[keyRaw] = parseObjectLiteral(valText);
  }
  return result;
}

module.exports = {
  readFileOrNull,
  extractStringArray,
  extractObjectArray,
  extractRecordOfObjects,
  parseObjectLiteral,
};
