/** Shared class for inline code / path chips in AgentKit guides (HTML fragments + AkInlineCode). */
export const akInlineCodeClass =
  'rounded-md border border-slate-200/80 bg-slate-100 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-800 break-all dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100';

export function akCode(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return `<code class="${akInlineCodeClass}">${escaped}</code>`;
}
