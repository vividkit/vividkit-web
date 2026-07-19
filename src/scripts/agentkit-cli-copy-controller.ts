import { isSafeAgentKitCliCopyPayload } from '../data/guides/agentkit/agentkit-cli-copy-presentation';

const ROOT_SELECTOR = '[data-agentkit-cli-copy-root]';
const BUTTON_SELECTOR = '[data-agentkit-copy-button]';
const READY_ATTRIBUTE = 'data-agentkit-copy-ready';
const resetTimers = new WeakMap<HTMLButtonElement, number>();

function announce(root: HTMLElement, type: 'success' | 'failure', command: string) {
  const status = root.querySelector<HTMLElement>('[data-agentkit-copy-status]');
  if (!status) return;
  const template = type === 'success'
    ? root.dataset.agentkitCopySuccess
    : root.dataset.agentkitCopyFailure;
  status.textContent = (template ?? '').replace('{command}', command);
}

function showCopiedState(button: HTMLButtonElement) {
  button.querySelector<HTMLElement>('[data-agentkit-copy-icon]')?.setAttribute('hidden', '');
  button.querySelector<HTMLElement>('[data-agentkit-copy-check]')?.removeAttribute('hidden');
  const previous = resetTimers.get(button);
  if (previous) window.clearTimeout(previous);
  resetTimers.set(button, window.setTimeout(() => {
    button.querySelector<HTMLElement>('[data-agentkit-copy-icon]')?.removeAttribute('hidden');
    button.querySelector<HTMLElement>('[data-agentkit-copy-check]')?.setAttribute('hidden', '');
    resetTimers.delete(button);
  }, 2000));
}

function bindCopyButton(root: HTMLElement, button: HTMLButtonElement) {
  if (button.dataset.agentkitCopyBound === 'true') return;
  button.dataset.agentkitCopyBound = 'true';
  button.setAttribute(READY_ATTRIBUTE, 'true');
  button.hidden = false;
  button.addEventListener('click', async () => {
    const payload = button.dataset.agentkitCopyPayload ?? '';
    if (!isSafeAgentKitCliCopyPayload(payload) || !navigator.clipboard?.writeText) {
      announce(root, 'failure', payload);
      return;
    }
    try {
      await navigator.clipboard.writeText(payload);
      showCopiedState(button);
      announce(root, 'success', payload);
    } catch {
      announce(root, 'failure', payload);
    }
  });
}

export function initializeAgentKitCliCopyController() {
  for (const root of document.querySelectorAll<HTMLElement>(ROOT_SELECTOR)) {
    for (const button of root.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR)) {
      bindCopyButton(root, button);
    }
  }
}
