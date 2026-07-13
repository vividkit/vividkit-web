export const inlineCodeClass = 'rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-[12px] text-slate-800 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100';

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
      if (part.startsWith('`') && part.endsWith('`')) {
        return `<code class="${inlineCodeClass}">${escapeHtml(part.slice(1, -1))}</code>`;
      }
      return escapeHtml(part);
    })
    .join('');
}
