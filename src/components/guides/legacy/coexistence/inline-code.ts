// Render inline `code`, **bold**, and *italic* markdown snippets to HTML.
// Used by coexistence guide components to highlight technical terms.

export function renderInlineMarkdown(text: string, codeAccent: 'slate' | 'purple' | 'emerald' | 'rose' | 'sky' | 'violet' = 'purple'): string {
  const accentClass: Record<string, string> = {
    slate: 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700/60',
    purple: 'bg-slate-100 dark:bg-slate-800/90 text-purple-700 dark:text-purple-300 border-slate-200 dark:border-slate-700/60',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    rose: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    sky: 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/60',
    violet: 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/60',
  };
  const cls = accentClass[codeAccent];
  return text
    .replace(/`([^`]+)`/g, `<code class="px-1.5 py-0.5 rounded-md ${cls} font-mono text-[0.9em] border whitespace-normal break-words [overflow-wrap:anywhere]">$1</code>`)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-semibold">$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em class="italic">$2</em>');
}
