// CCS CLI cheatsheet — categorized command reference
// Source-of-truth: reference/ccs/src/commands/*-command.ts
// Mirrors the pattern of commands-engineer-kit.ts but simpler (no complexity tier).
import type { Language } from "@/i18n";

export interface CCSCheatsheetCommand {
  cmd: string; // raw CLI invocation
  descKey: string; // i18n key for one-line explanation
}

export interface CCSCheatsheetCategory {
  id: string;
  titleKey: string;
  descKey: string;
  color: "emerald" | "blue" | "amber" | "purple" | "cyan";
  icon: string; // inline <svg> path content
  commands: CCSCheatsheetCommand[];
}

export const CCS_CHEATSHEET_CATEGORIES: CCSCheatsheetCategory[] = [
  {
    id: "basics",
    titleKey: "ccs.cheatsheet.basics_title",
    descKey: "ccs.cheatsheet.basics_desc",
    color: "emerald",
    icon: `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>`,
    commands: [
      { cmd: "ccs", descKey: "ccs.cheatsheet.basics_default" },
      { cmd: "ccs <profile>", descKey: "ccs.cheatsheet.basics_profile" },
      { cmd: "ccs glm", descKey: "ccs.cheatsheet.basics_glm" },
      { cmd: "ccs kimi", descKey: "ccs.cheatsheet.basics_kimi" },
      { cmd: "ccs codex", descKey: "ccs.cheatsheet.basics_codex" },
      { cmd: 'ccs <profile> "<prompt>"', descKey: "ccs.cheatsheet.basics_oneshot" },
    ],
  },
  {
    id: "config",
    titleKey: "ccs.cheatsheet.config_title",
    descKey: "ccs.cheatsheet.config_desc",
    color: "blue",
    icon: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
    commands: [
      { cmd: "ccs config", descKey: "ccs.cheatsheet.config_dashboard" },
      { cmd: "ccs config channels", descKey: "ccs.cheatsheet.config_channels" },
      { cmd: "ccs config auth", descKey: "ccs.cheatsheet.config_auth" },
      { cmd: "ccs config thinking", descKey: "ccs.cheatsheet.config_thinking" },
      { cmd: "ccs auth create <profile>", descKey: "ccs.cheatsheet.config_auth_create" },
      { cmd: "ccs api create --preset <name>", descKey: "ccs.cheatsheet.config_api_create" },
    ],
  },
  {
    id: "operations",
    titleKey: "ccs.cheatsheet.ops_title",
    descKey: "ccs.cheatsheet.ops_desc",
    color: "amber",
    icon: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
    commands: [
      { cmd: "ccs doctor", descKey: "ccs.cheatsheet.ops_doctor" },
      { cmd: "ccs persist", descKey: "ccs.cheatsheet.ops_persist" },
      { cmd: "ccs migrate", descKey: "ccs.cheatsheet.ops_migrate" },
      { cmd: "ccs cleanup", descKey: "ccs.cheatsheet.ops_cleanup" },
      { cmd: "ccs update", descKey: "ccs.cheatsheet.ops_update" },
      { cmd: "ccs --version", descKey: "ccs.cheatsheet.ops_version" },
    ],
  },
  {
    id: "runtimes",
    titleKey: "ccs.cheatsheet.runtimes_title",
    descKey: "ccs.cheatsheet.runtimes_desc",
    color: "purple",
    icon: `<circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M11 6h5a2 2 0 0 1 2 2v7M13 18H8a2 2 0 0 1-2-2V9"/>`,
    commands: [
      { cmd: "ccs --target droid <profile>", descKey: "ccs.cheatsheet.runtimes_target" },
      { cmd: "ccs-droid <profile>", descKey: "ccs.cheatsheet.runtimes_droid" },
      { cmd: "ccsd <profile>", descKey: "ccs.cheatsheet.runtimes_ccsd" },
      { cmd: "ccs-codex <profile>", descKey: "ccs.cheatsheet.runtimes_codex" },
      { cmd: "ccsx <profile>", descKey: "ccs.cheatsheet.runtimes_ccsx" },
      { cmd: "ccsxp <profile>", descKey: "ccs.cheatsheet.runtimes_ccsxp" },
    ],
  },
  {
    id: "docker",
    titleKey: "ccs.cheatsheet.docker_title",
    descKey: "ccs.cheatsheet.docker_desc",
    color: "cyan",
    icon: `<path d="M22 11.5V8a2 2 0 0 0-2-2h-3.5"/><path d="M2 11.5V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5"/><rect x="2" y="6" width="14" height="6" rx="1"/>`,
    commands: [
      { cmd: "ccs docker up", descKey: "ccs.cheatsheet.docker_up" },
      { cmd: "ccs docker down", descKey: "ccs.cheatsheet.docker_down" },
      { cmd: "ccs docker status", descKey: "ccs.cheatsheet.docker_status" },
      { cmd: "ccs docker logs", descKey: "ccs.cheatsheet.docker_logs" },
    ],
  },
];

export const COLOR_STYLES = {
  emerald: {
    border: "border-emerald-200/60 dark:border-emerald-500/20",
    bg: "bg-emerald-50/40 dark:bg-emerald-500/5",
    headerBg: "bg-emerald-100 dark:bg-emerald-900/40",
    headerBorder: "border-emerald-200 dark:border-emerald-800",
    iconText: "text-emerald-600 dark:text-emerald-400",
    cmdText: "text-emerald-700 dark:text-emerald-300",
  },
  blue: {
    border: "border-blue-200/60 dark:border-blue-500/20",
    bg: "bg-blue-50/40 dark:bg-blue-500/5",
    headerBg: "bg-blue-100 dark:bg-blue-900/40",
    headerBorder: "border-blue-200 dark:border-blue-800",
    iconText: "text-blue-600 dark:text-blue-400",
    cmdText: "text-blue-700 dark:text-blue-300",
  },
  amber: {
    border: "border-amber-200/60 dark:border-amber-500/20",
    bg: "bg-amber-50/40 dark:bg-amber-500/5",
    headerBg: "bg-amber-100 dark:bg-amber-900/40",
    headerBorder: "border-amber-200 dark:border-amber-800",
    iconText: "text-amber-600 dark:text-amber-400",
    cmdText: "text-amber-700 dark:text-amber-300",
  },
  purple: {
    border: "border-purple-200/60 dark:border-purple-500/20",
    bg: "bg-purple-50/40 dark:bg-purple-500/5",
    headerBg: "bg-purple-100 dark:bg-purple-900/40",
    headerBorder: "border-purple-200 dark:border-purple-800",
    iconText: "text-purple-600 dark:text-purple-400",
    cmdText: "text-purple-700 dark:text-purple-300",
  },
  cyan: {
    border: "border-cyan-200/60 dark:border-cyan-500/20",
    bg: "bg-cyan-50/40 dark:bg-cyan-500/5",
    headerBg: "bg-cyan-100 dark:bg-cyan-900/40",
    headerBorder: "border-cyan-200 dark:border-cyan-800",
    iconText: "text-cyan-600 dark:text-cyan-400",
    cmdText: "text-cyan-700 dark:text-cyan-300",
  },
} as const;

export type CCSColor = keyof typeof COLOR_STYLES;

// Marker so unused-imports/lint won't strip Language import (kept for future per-lang content)
export type _LangRef = Language;
