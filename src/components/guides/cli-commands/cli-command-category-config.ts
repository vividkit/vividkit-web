import type { CliCommandCategory } from '@/data/guides/cli-commands-cheatsheet';

export interface CliCommandCategoryConfig {
  id: CliCommandCategory;
  labelKey: string;
  iconSvg: string;
  accent: string;
  panel: string;
  text: string;
  chip: string;
  ring: string;
}

export const CLI_COMMAND_CATEGORY_CONFIGS = [
  {
    id: 'setup', labelKey: 'cli.cheatsheet.cat.setup', accent: 'bg-emerald-400',
    iconSvg: '<path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />',
    panel: 'from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/20',
    text: 'text-emerald-700 dark:text-emerald-300', chip: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200', ring: 'border-emerald-200/80 dark:border-emerald-400/20',
  },
  {
    id: 'management', labelKey: 'cli.cheatsheet.cat.management', accent: 'bg-sky-400',
    iconSvg: '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />',
    panel: 'from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/20',
    text: 'text-sky-700 dark:text-sky-300', chip: 'bg-sky-100 text-sky-800 dark:bg-sky-400/10 dark:text-sky-200', ring: 'border-sky-200/80 dark:border-sky-400/20',
  },
  {
    id: 'distribution', labelKey: 'cli.cheatsheet.cat.distribution', accent: 'bg-fuchsia-400',
    iconSvg: '<circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />',
    panel: 'from-fuchsia-50 to-rose-50 dark:from-fuchsia-950/30 dark:to-rose-950/20',
    text: 'text-fuchsia-700 dark:text-fuchsia-300', chip: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-400/10 dark:text-fuchsia-200', ring: 'border-fuchsia-200/80 dark:border-fuchsia-400/20',
  },
  {
    id: 'workflow', labelKey: 'cli.cheatsheet.cat.workflow', accent: 'bg-amber-400',
    iconSvg: '<path d="M13 10V3L4 14h7v7l9-11h-7z" />',
    panel: 'from-amber-50 to-orange-50 dark:from-amber-950/35 dark:to-orange-950/20',
    text: 'text-amber-700 dark:text-amber-300', chip: 'bg-amber-100 text-amber-800 dark:bg-amber-400/10 dark:text-amber-200', ring: 'border-amber-200/80 dark:border-amber-400/20',
  },
  {
    id: 'integration', labelKey: 'cli.cheatsheet.cat.integration', accent: 'bg-cyan-400',
    iconSvg: '<path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10" />',
    panel: 'from-cyan-50 to-slate-50 dark:from-cyan-950/35 dark:to-slate-950/20',
    text: 'text-cyan-700 dark:text-cyan-300', chip: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-200', ring: 'border-cyan-200/80 dark:border-cyan-400/20',
  },
] as const satisfies readonly CliCommandCategoryConfig[];
