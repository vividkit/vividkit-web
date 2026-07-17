import { activateAgentKitBetaChannel } from '@agentkit-beta-loader';
import {
  isAgentKitChannelSurface,
  normalizeAgentKitChannel,
  withAgentKitChannel,
} from '../data/guides/agentkit/agentkit-channel-policy.mjs';

const ROOT_SELECTOR = '[data-agentkit-channel-root]';
const CHOICE_SELECTOR = '[data-agentkit-channel-choice]';
let channelRequestGeneration = 0;

function resetRoot(root) {
  root.dataset.agentkitRequestedChannel = 'stable';
  root.dataset.agentkitActiveChannel = 'stable';
  root.dataset.agentkitChannelStatus = 'stable';
  delete root.dataset.agentkitBetaLoader;
  root.querySelector('[data-agentkit-stable-facts]')?.removeAttribute('hidden');
  const notice = root.querySelector('[data-agentkit-channel-notice]');
  if (notice) notice.hidden = true;
  const betaView = root.querySelector('[data-agentkit-beta-view]');
  if (betaView) {
    betaView.replaceChildren();
    betaView.hidden = true;
  }
}

function updateChoiceState(root, requestedChannel) {
  for (const choice of root.querySelectorAll(CHOICE_SELECTOR)) {
    const channel = choice.dataset.agentkitChannelChoice;
    const selected = channel === requestedChannel;
    choice.setAttribute('aria-current', selected ? 'true' : 'false');
    choice.dataset.agentkitChannelSelected = selected ? 'true' : 'false';
  }
}

function updateDocumentLinks(activeChannel) {
  for (const anchor of document.querySelectorAll('a[href]')) {
    if (anchor.matches(CHOICE_SELECTOR)) continue;
    const currentHref = anchor.getAttribute('href');
    if (!currentHref || currentHref.startsWith('#') || /^(?:mailto:|tel:|javascript:)/i.test(currentHref)) continue;
    const baseHref = anchor.dataset.agentkitChannelBaseHref ?? currentHref;
    const url = new URL(baseHref, window.location.href);
    if (url.origin !== window.location.origin) continue;
    anchor.dataset.agentkitChannelBaseHref = baseHref;
    anchor.setAttribute('href', withAgentKitChannel(`${url.pathname}${url.search}${url.hash}`, activeChannel));
  }
}

function normalizeInvalidQuery() {
  const url = new URL(window.location.href);
  const values = url.searchParams.getAll('channel');
  if (values.length === 0 || (values.length === 1 && values[0] === 'beta')) return;
  url.searchParams.delete('channel');
  window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

async function applyRequestedChannel({ focus = false } = {}) {
  if (!isAgentKitChannelSurface(window.location.pathname)) return;
  const requestGeneration = ++channelRequestGeneration;
  const isCurrent = () => requestGeneration === channelRequestGeneration;
  normalizeInvalidQuery();
  const requestedChannel = normalizeAgentKitChannel(window.location.search);
  let effectiveChannel = 'stable';
  let focusTarget = null;

  for (const root of document.querySelectorAll(ROOT_SELECTOR)) {
    resetRoot(root);
    root.dataset.agentkitRequestedChannel = requestedChannel;
    updateChoiceState(root, requestedChannel);
    if (requestedChannel === 'beta') {
      try {
        const result = await activateAgentKitBetaChannel({
          root,
          locale: root.dataset.agentkitLocale === 'vi' ? 'vi' : 'en',
          surface: root.dataset.agentkitSurface,
          isCurrent,
        });
        if (!isCurrent()) return;
        effectiveChannel = result.activeChannel;
        focusTarget = result.focusTarget ?? focusTarget;
        root.dataset.agentkitActiveChannel = result.activeChannel;
        root.dataset.agentkitChannelStatus = result.status;
      } catch {
        if (!isCurrent()) return;
        const notice = root.querySelector('[data-agentkit-channel-notice]');
        if (notice) {
          notice.hidden = false;
          notice.querySelector('[data-agentkit-channel-notice-title]').textContent = root.dataset.agentkitLocale === 'vi'
            ? 'Không tải được public beta'
            : 'Public beta could not be loaded';
          notice.querySelector('[data-agentkit-channel-notice-body]').textContent = root.dataset.agentkitLocale === 'vi'
            ? 'Đã khôi phục stable fallback. Hãy thử lại hoặc tiếp tục với stable.'
            : 'The stable fallback was restored. Retry later or continue with stable.';
          focusTarget = notice;
        }
        root.dataset.agentkitChannelStatus = 'load-error';
      }
    }
  }

  if (!isCurrent()) return;
  updateDocumentLinks(effectiveChannel);
  if (focus && focusTarget instanceof HTMLElement) focusTarget.focus();
}

function bindChannelNavigation() {
  const documentRoot = document.documentElement;
  if (documentRoot.dataset.agentkitChannelControllerBound === 'true') return;
  documentRoot.dataset.agentkitChannelControllerBound = 'true';

  document.addEventListener('click', (event) => {
    const choice = event.target instanceof Element ? event.target.closest(CHOICE_SELECTOR) : null;
    if (!(choice instanceof HTMLAnchorElement)) return;
    event.preventDefault();
    window.history.pushState(null, '', choice.href);
    void applyRequestedChannel({ focus: true });
  });
  window.addEventListener('popstate', () => void applyRequestedChannel());
}

export function initializeAgentKitChannelController() {
  if (!document.querySelector(ROOT_SELECTOR) || !isAgentKitChannelSurface(window.location.pathname)) return;
  bindChannelNavigation();
  void applyRequestedChannel();
}
