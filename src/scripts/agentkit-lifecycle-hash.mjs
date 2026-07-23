export function expandAgentKitLifecycleStageFromHash() {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash.startsWith('stage-')) return;

  const target = document.getElementById(hash);
  const details = target?.querySelector('[data-agentkit-stage-details]');
  if (details instanceof HTMLDetailsElement) {
    details.open = true;
  }
}

export function initializeAgentKitLifecycleHashNavigation() {
  if (!document.querySelector('[data-agentkit-lifecycle-stages]')) return;
  expandAgentKitLifecycleStageFromHash();
  window.addEventListener('hashchange', expandAgentKitLifecycleStageFromHash);
}
