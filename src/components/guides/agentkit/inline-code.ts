// Turn `inline code` in AgentKit guide copy into real <code> elements.
// Purple accent matches guide command-highlight convention so CLI tokens read clearly in prose.

export const inlineCodeClass =
  'rounded-md border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-purple-600 dark:border-slate-700 dark:bg-slate-800/90 dark:text-purple-400';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderInlineCode(value: string): string {
  return value
    .split(/(`[^`]+`)/g)
    .map((part) => {
      if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
        return `<code class="${inlineCodeClass}">${escapeHtml(part.slice(1, -1))}</code>`;
      }
      return escapeHtml(part);
    })
    .join('');
}
