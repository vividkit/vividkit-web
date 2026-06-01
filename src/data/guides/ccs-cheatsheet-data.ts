// CCS CLI cheatsheet — categorized command reference
// Source-of-truth: reference/ccs/src/commands/command-catalog.ts
// Audit synced via .claude/skills/vk-audit-ccs (see reference/.last-sync-ccs).
import type { Language } from "@/i18n";

export interface CCSCheatsheetCommand {
  cmd: string; // raw CLI invocation
  descKey: string; // i18n key for one-line explanation
}

export interface CCSCheatsheetCategory {
  id: string;
  titleKey: string;
  descKey: string;
  color: "emerald" | "blue" | "amber" | "purple" | "cyan" | "rose" | "orange";
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
      { cmd: "ccs setup", descKey: "ccs.cheatsheet.basics_setup" },
    ],
  },
  {
    id: "profiles",
    titleKey: "ccs.cheatsheet.profiles_title",
    descKey: "ccs.cheatsheet.profiles_desc",
    color: "rose",
    icon: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>`,
    commands: [
      { cmd: "ccs auth create <profile>", descKey: "ccs.cheatsheet.profiles_auth_create" },
      { cmd: "ccs auth list", descKey: "ccs.cheatsheet.profiles_auth_list" },
      { cmd: "ccs auth show <profile>", descKey: "ccs.cheatsheet.profiles_auth_show" },
      { cmd: "ccs auth default <profile>", descKey: "ccs.cheatsheet.profiles_auth_default" },
      { cmd: "ccs auth reset-default", descKey: "ccs.cheatsheet.profiles_auth_reset_default" },
      { cmd: "ccs auth backup", descKey: "ccs.cheatsheet.profiles_auth_backup" },
      { cmd: "ccs auth resources", descKey: "ccs.cheatsheet.profiles_auth_resources" },
      { cmd: "ccs auth remove <profile>", descKey: "ccs.cheatsheet.profiles_auth_remove" },
      { cmd: "ccs api create --preset <name>", descKey: "ccs.cheatsheet.profiles_api_create" },
      { cmd: "ccs api list", descKey: "ccs.cheatsheet.profiles_api_list" },
      { cmd: "ccs api discover", descKey: "ccs.cheatsheet.profiles_api_discover" },
      { cmd: "ccs api copy <name>", descKey: "ccs.cheatsheet.profiles_api_copy" },
      { cmd: "ccs api export <name>", descKey: "ccs.cheatsheet.profiles_api_export" },
      { cmd: "ccs api import <file>", descKey: "ccs.cheatsheet.profiles_api_import" },
      { cmd: "ccs api remove <name>", descKey: "ccs.cheatsheet.profiles_api_remove" },
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
      { cmd: "ccs config auth", descKey: "ccs.cheatsheet.config_auth" },
      { cmd: "ccs config channels", descKey: "ccs.cheatsheet.config_channels" },
      { cmd: "ccs config thinking", descKey: "ccs.cheatsheet.config_thinking" },
      { cmd: "ccs config image-analysis", descKey: "ccs.cheatsheet.config_image_analysis" },
    ],
  },
  {
    id: "cliproxy",
    titleKey: "ccs.cheatsheet.cliproxy_title",
    descKey: "ccs.cheatsheet.cliproxy_desc",
    color: "orange",
    icon: `<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
    commands: [
      { cmd: "ccs cliproxy create", descKey: "ccs.cheatsheet.cliproxy_create" },
      { cmd: "ccs cliproxy edit", descKey: "ccs.cheatsheet.cliproxy_edit" },
      { cmd: "ccs cliproxy list", descKey: "ccs.cheatsheet.cliproxy_list" },
      { cmd: "ccs cliproxy default <variant>", descKey: "ccs.cheatsheet.cliproxy_default" },
      { cmd: "ccs cliproxy routing", descKey: "ccs.cheatsheet.cliproxy_routing" },
      { cmd: "ccs cliproxy catalog", descKey: "ccs.cheatsheet.cliproxy_catalog" },
      { cmd: "ccs cliproxy sync", descKey: "ccs.cheatsheet.cliproxy_sync" },
      { cmd: "ccs cliproxy quota", descKey: "ccs.cheatsheet.cliproxy_quota" },
      { cmd: "ccs cliproxy start", descKey: "ccs.cheatsheet.cliproxy_start" },
      { cmd: "ccs cliproxy restart", descKey: "ccs.cheatsheet.cliproxy_restart" },
      { cmd: "ccs cliproxy stop", descKey: "ccs.cheatsheet.cliproxy_stop" },
      { cmd: "ccs cliproxy status", descKey: "ccs.cheatsheet.cliproxy_status" },
      { cmd: "ccs cliproxy doctor", descKey: "ccs.cheatsheet.cliproxy_doctor" },
      { cmd: "ccs cliproxy pause", descKey: "ccs.cheatsheet.cliproxy_pause" },
      { cmd: "ccs cliproxy resume", descKey: "ccs.cheatsheet.cliproxy_resume" },
      { cmd: "ccs cliproxy remove", descKey: "ccs.cheatsheet.cliproxy_remove" },
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
      { cmd: "ccs sync", descKey: "ccs.cheatsheet.ops_sync" },
      { cmd: "ccs env <profile>", descKey: "ccs.cheatsheet.ops_env" },
      { cmd: "ccs tokens", descKey: "ccs.cheatsheet.ops_tokens" },
      { cmd: "ccs proxy start", descKey: "ccs.cheatsheet.ops_proxy_start" },
      { cmd: "ccs proxy stop", descKey: "ccs.cheatsheet.ops_proxy_stop" },
      { cmd: "ccs proxy status", descKey: "ccs.cheatsheet.ops_proxy_status" },
      { cmd: "ccs proxy activate", descKey: "ccs.cheatsheet.ops_proxy_activate" },
      { cmd: "ccs help <topic>", descKey: "ccs.cheatsheet.ops_help" },
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
      { cmd: "ccs --target droid <profile>", descKey: "ccs.cheatsheet.runtimes_target_droid" },
      { cmd: "ccs --target codex <profile>", descKey: "ccs.cheatsheet.runtimes_target_codex" },
      { cmd: "ccs --target claude <profile>", descKey: "ccs.cheatsheet.runtimes_target_claude" },
      { cmd: "ccs-droid <profile>", descKey: "ccs.cheatsheet.runtimes_droid" },
      { cmd: "ccsd <profile>", descKey: "ccs.cheatsheet.runtimes_ccsd" },
      { cmd: "ccs-codex <profile>", descKey: "ccs.cheatsheet.runtimes_codex" },
      { cmd: "ccsx <profile>", descKey: "ccs.cheatsheet.runtimes_ccsx" },
      { cmd: "ccsxp <profile>", descKey: "ccs.cheatsheet.runtimes_ccsxp" },
      { cmd: "ccs browser", descKey: "ccs.cheatsheet.runtimes_browser" },
      { cmd: "ccs cursor", descKey: "ccs.cheatsheet.runtimes_cursor" },
      { cmd: "ccs copilot", descKey: "ccs.cheatsheet.runtimes_copilot" },
      { cmd: "ccs help completion", descKey: "ccs.cheatsheet.ops_help_completion" },
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
      { cmd: "ccs docker update", descKey: "ccs.cheatsheet.docker_update" },
      { cmd: "ccs docker config", descKey: "ccs.cheatsheet.docker_config" },
      { cmd: "ccs docker show-key", descKey: "ccs.cheatsheet.docker_show_key" },
      { cmd: "ccs docker finalize-key-rotation", descKey: "ccs.cheatsheet.docker_finalize_key_rotation" },
    ],
  },
];

export const COLOR_STYLES = {
  emerald: {
    accent: "bg-emerald-400",
    panel: "from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/20",
    text: "text-emerald-700 dark:text-emerald-300",
    chip: "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200",
    ring: "border-emerald-200/80 dark:border-emerald-400/20",
  },
  blue: {
    accent: "bg-sky-400",
    panel: "from-sky-50 to-blue-50 dark:from-sky-950/40 dark:to-blue-950/20",
    text: "text-sky-700 dark:text-sky-300",
    chip: "bg-sky-100 text-sky-800 dark:bg-sky-400/10 dark:text-sky-200",
    ring: "border-sky-200/80 dark:border-sky-400/20",
  },
  amber: {
    accent: "bg-amber-400",
    panel: "from-amber-50 to-orange-50 dark:from-amber-950/35 dark:to-orange-950/20",
    text: "text-amber-700 dark:text-amber-300",
    chip: "bg-amber-100 text-amber-800 dark:bg-amber-400/10 dark:text-amber-200",
    ring: "border-amber-200/80 dark:border-amber-400/20",
  },
  purple: {
    accent: "bg-purple-400",
    panel: "from-purple-50 to-fuchsia-50 dark:from-purple-950/40 dark:to-fuchsia-950/20",
    text: "text-purple-700 dark:text-purple-300",
    chip: "bg-purple-100 text-purple-800 dark:bg-purple-400/10 dark:text-purple-200",
    ring: "border-purple-200/80 dark:border-purple-400/20",
  },
  cyan: {
    accent: "bg-cyan-400",
    panel: "from-cyan-50 to-slate-50 dark:from-cyan-950/35 dark:to-slate-950/20",
    text: "text-cyan-700 dark:text-cyan-300",
    chip: "bg-cyan-100 text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-200",
    ring: "border-cyan-200/80 dark:border-cyan-400/20",
  },
  rose: {
    accent: "bg-rose-400",
    panel: "from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/20",
    text: "text-rose-700 dark:text-rose-300",
    chip: "bg-rose-100 text-rose-800 dark:bg-rose-400/10 dark:text-rose-200",
    ring: "border-rose-200/80 dark:border-rose-400/20",
  },
  orange: {
    accent: "bg-orange-400",
    panel: "from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/20",
    text: "text-orange-700 dark:text-orange-300",
    chip: "bg-orange-100 text-orange-800 dark:bg-orange-400/10 dark:text-orange-200",
    ring: "border-orange-200/80 dark:border-orange-400/20",
  },
} as const;

export type CCSColor = keyof typeof COLOR_STYLES;

// CCS upstream version reflected by this cheatsheet (synced via vk-audit-ccs).
export const CCS_SYNCED_VERSION = "8.1.0";
export const CCS_SYNCED_DATE = "2026-05-26";

// Marker so unused-imports/lint won't strip Language import (kept for future per-lang content)
export type _LangRef = Language;
