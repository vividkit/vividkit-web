// Styles and complexity color mappings for command guide cards
import type { TranslationFn } from "./commands-types";

// Color scheme definitions for each category color variant
export const styles: Record<string, Record<string, string>> = {
  blue: {
    border: "border-blue-500/30 group-hover:border-blue-500/50",
    bg: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
    text: "text-blue-600 dark:text-blue-400",
    hover: "hover:border-blue-500/30",
    badge: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  red: {
    border: "border-red-500/30 group-hover:border-red-500/50",
    bg: "bg-gradient-to-r from-red-500/10 to-orange-500/10",
    text: "text-red-600 dark:text-red-400",
    hover: "hover:border-red-500/30",
    badge: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  },
  green: {
    border: "border-green-500/30 group-hover:border-green-500/50",
    bg: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    text: "text-green-600 dark:text-green-400",
    hover: "hover:border-green-500/30",
    badge: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  purple: {
    border: "border-purple-500/30 group-hover:border-purple-500/50",
    bg: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
    text: "text-purple-600 dark:text-purple-400",
    hover: "hover:border-purple-500/30",
    badge: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  pink: {
    border: "border-pink-500/30 group-hover:border-pink-500/50",
    bg: "bg-gradient-to-r from-pink-500/10 to-rose-500/10",
    text: "text-pink-600 dark:text-pink-400",
    hover: "hover:border-pink-500/30",
    badge: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  orange: {
    border: "border-orange-500/30 group-hover:border-orange-500/50",
    bg: "bg-gradient-to-r from-orange-500/10 to-amber-500/10",
    text: "text-orange-600 dark:text-orange-400",
    hover: "hover:border-orange-500/30",
    badge: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  amber: {
    border: "border-amber-500/30 group-hover:border-amber-500/50",
    bg: "bg-gradient-to-r from-amber-500/10 to-yellow-500/10",
    text: "text-amber-600 dark:text-amber-400",
    hover: "hover:border-amber-500/30",
    badge: "bg-green-500/20 text-green-600 dark:text-green-400",
  },
  cyan: {
    border: "border-cyan-500/30 group-hover:border-cyan-500/50",
    bg: "bg-gradient-to-r from-cyan-500/10 to-sky-500/10",
    text: "text-cyan-600 dark:text-cyan-400",
    hover: "hover:border-cyan-500/30",
    badge: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  teal: {
    border: "border-teal-500/30 group-hover:border-teal-500/50",
    bg: "bg-gradient-to-r from-teal-500/10 to-emerald-500/10",
    text: "text-teal-600 dark:text-teal-400",
    hover: "hover:border-teal-500/30",
    badge: "bg-teal-500/20 text-teal-600 dark:text-teal-400",
  },
  emerald: {
    border: "border-emerald-500/30 group-hover:border-emerald-500/50",
    bg: "bg-gradient-to-r from-emerald-500/10 to-green-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    hover: "hover:border-emerald-500/30",
    badge: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  slate: {
    border: "border-slate-400/30 group-hover:border-slate-400/50",
    bg: "bg-gradient-to-r from-slate-400/10 to-slate-500/10",
    text: "text-slate-500 dark:text-slate-400",
    hover: "hover:border-slate-400/30",
    badge: "bg-slate-400/20 text-slate-500 dark:text-slate-400",
  },
};

// Returns complexity label → tailwind class mapping, requires t() for i18n keys
export function getComplexityColors(t: TranslationFn): Record<string, string> {
  const colors: Record<string, string> = {
    [t("commands.label.easy")]: "bg-green-500/20 text-green-700 dark:text-green-400",
    [t("commands.label.medium")]: "bg-amber-500/20 text-amber-700 dark:text-amber-400",
    [t("commands.label.advanced")]: "bg-red-500/20 text-red-700 dark:text-red-400",
  };
  // Fallback for direct English string matching
  colors["Easy"] = colors[t("commands.label.easy")];
  colors["Medium"] = colors[t("commands.label.medium")];
  colors["Advanced"] = colors[t("commands.label.advanced")];
  return colors;
}
