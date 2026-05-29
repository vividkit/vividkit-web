// Shared shell-snippet styling helpers used across ck-with-codex guide sections.
// Keeps every shell box (setup steps, interactive entrypoints, workflows) visually
// consistent — same prompt glyph, dimmed comments, copy button, traffic-light dots.

// Follow project CLAUDE.md UI/styling convention: code snippet boxes must support
// both light and dark mode (bg-slate-100 dark:bg-slate-800/90, text-slate-700 dark:text-slate-200).
export const PRE_BASE = 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-mono leading-relaxed whitespace-pre-wrap break-words';
export const PRE_LG = `${PRE_BASE} text-[12.5px] md:text-[13px] px-5 py-4`;
export const PRE_SM = `${PRE_BASE} text-[12px] px-4 py-3`;

// Positioned in the chrome header (top-right) so it sits inline with the
// `shell · ccsx` title and traffic-light dots, not floating over the snippet body.
export const COPY_BTN_LG = 'copy-btn absolute top-1.5 right-2 p-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors';
export const COPY_BTN_SM = 'copy-btn absolute top-1 right-1.5 p-1 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors';
export const COPY_ICON_LG = 'copy-icon w-3.5 h-3.5';
export const CHECK_ICON_LG = 'check-icon w-3.5 h-3.5 hidden text-emerald-600 dark:text-emerald-400';
export const COPY_ICON_SM = 'copy-icon w-3 h-3';
export const CHECK_ICON_SM = 'check-icon w-3 h-3 hidden text-emerald-600 dark:text-emerald-400';

const COMMENT_CLS = 'text-slate-500 dark:text-slate-400 italic';
const promptHtml = (glyph: string) =>
  `<span class="text-purple-600 dark:text-purple-400 select-none mr-1.5" aria-hidden="true">${glyph}</span>`;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Render a multi-line shell snippet: prepend a prompt glyph (default `$`) to the first
// line of each command, render continuation lines (those following a trailing `\`) with
// an invisible placeholder so the command body stays vertically aligned without a fake
// extra prompt. Dim full-line `#` comments and trailing ` # ...` annotations. Pass `>`
// for REPL prompts so it doesn't visually collide with `$ck:*` workflow invocations.
export function renderShellSnippet(code: string, prompt: string = '$'): string {
  const PROMPT_HTML = promptHtml(prompt);
  const CONTINUATION_HTML = promptHtml(' ');
  let prevContinues = false;
  return code.split('\n').map((line) => {
    const trimmed = line.trimStart();
    if (trimmed.length === 0) {
      prevContinues = false;
      return '';
    }
    if (trimmed.startsWith('#')) {
      prevContinues = false;
      return `<span class="${COMMENT_CLS}">${escapeHtml(line)}</span>`;
    }
    const isContinuation = prevContinues;
    prevContinues = line.trimEnd().endsWith('\\');
    const prefix = isContinuation ? CONTINUATION_HTML : PROMPT_HTML;
    const m = line.match(/^(.*?)(\s+#.*)$/);
    if (m) return `${prefix}${escapeHtml(m[1])}<span class="${COMMENT_CLS}">${escapeHtml(m[2])}</span>`;
    return `${prefix}${escapeHtml(line)}`;
  }).join('\n');
}

// Clipboard payload: drop `#`-only lines and trailing ` # ...` annotations, then
// preserve original line breaks so `\<newline>` continuations stay intact and separate
// commands paste as separate lines (bash runs them sequentially as written).
export function stripShellComments(code: string): string {
  return code.split('\n')
    .map((line) => {
      if (line.trimStart().startsWith('#')) return null;
      const m = line.match(/^(.*?)(\s+#.*)$/);
      return (m ? m[1] : line).trimEnd();
    })
    .filter((line): line is string => line !== null && line.length > 0)
    .join('\n');
}
