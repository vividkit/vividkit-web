export const AGENTKIT_CHANNEL_SURFACE_PATHS = [
  '/guides/agentkit',
  '/guides/cli',
  '/guides/cli-commands',
  '/guides/coexistence',
];

function toSearchParams(input) {
  if (input instanceof URLSearchParams) return input;
  if (input instanceof URL) return input.searchParams;
  const raw = String(input ?? '');
  if (raw.startsWith('?')) return new URLSearchParams(raw.slice(1));
  if (raw.includes('?')) return new URL(raw, 'https://vividkit.local').searchParams;
  return new URLSearchParams(raw);
}

export function normalizeAgentKitChannel(input) {
  const values = toSearchParams(input).getAll('channel');
  if (values.length !== 1) return 'stable';
  return values[0] === 'beta' ? 'beta' : 'stable';
}

function canonicalSurfacePath(pathname) {
  const localeNeutral = pathname.startsWith('/vi/') ? pathname.slice(3) : pathname;
  return localeNeutral.length > 1 ? localeNeutral.replace(/\/+$/, '') : localeNeutral;
}

export function isAgentKitChannelSurface(pathname) {
  return AGENTKIT_CHANNEL_SURFACE_PATHS.includes(canonicalSurfacePath(pathname));
}

export function propagateAgentKitChannel(pathOrUrl, channel) {
  const url = new URL(pathOrUrl, 'https://vividkit.local');
  url.searchParams.delete('channel');
  if (isAgentKitChannelSurface(url.pathname) && channel === 'beta') {
    url.searchParams.set('channel', 'beta');
  }
  return `${url.pathname}${url.search}${url.hash}`;
}

export const withAgentKitChannel = propagateAgentKitChannel;
