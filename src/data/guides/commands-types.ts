// Shared TypeScript interfaces for command guide data

export interface CommandItem {
  command: string;
  // Optional display label for a command group, e.g. /ckm:skill:*.
  // Keep command as a real executable command for validation.
  displayCommand?: string;
  complexity: string;
  label: string;
  desc: string;
  detail: string;
  isSkill?: boolean;
  isBeta?: boolean;
  // Variants/options. Values starting with ":" are rendered as full command variants.
  subcommands?: string[];
  // Space-separated arguments: /mkt:ask [question] → args: ["[question]"]
  args?: string[];
  // Dash flags: --fast, --verbose → flags: ["--fast"]
  flags?: string[];
  // Beta-only flags (rendered with purple BETA tag in command card)
  betaFlags?: string[];
  replacedCommand?: string;
  // Beta syntax annotation (for Marketing Kit)
  betaSyntax?: string;
  // Short beta-only note shown after detail, e.g. "(Beta: /ck:debug)"
  betaNote?: string;
  // Mark command as deprecated (shown with strikethrough styling)
  deprecated?: boolean;
  // Step indicator for ordered workflows (1-based)
  step?: number;
}

export interface CommandCategory {
  name: string;
  description: string;
  color: string;
  icon: string;
  commands: CommandItem[];
}

export type TranslationFn = (key: string) => string;
