// Shared TypeScript interfaces for command guide data

// A chip can be a raw string (legacy, used by Marketing Kit until migrated)
// or a structured ChipItem with an i18n key for its 1-line explanation.
export interface ChipItem {
  // Chip label as shown in card, e.g. "--fast", "archive", "[question]"
  name: string;
  // i18n key resolving to the chip's explanation in the expandable Details section
  descKey: string;
}

export type Chip = string | ChipItem;

export interface CommandItem {
  command: string;
  complexity: string;
  label: string;
  desc: string;
  detail: string;
  isSkill?: boolean;
  isBeta?: boolean;
  // Colon-separated subcommands: /mkt:plan:cro → subcommands: [{ name: "cro", ... }]
  subcommands?: Chip[];
  // Space-separated arguments: /mkt:ask [question] → args: [{ name: "[question]", ... }]
  args?: Chip[];
  // Dash flags: --fast, --verbose → flags: [{ name: "--fast", ... }]
  flags?: Chip[];
  // Beta-only flags (rendered with purple BETA tag in command card)
  betaFlags?: Chip[];
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

// Helpers for renderer: accept both legacy string chips (MK) and new ChipItem (EK).
export function chipName(c: Chip): string {
  return typeof c === "string" ? c : c.name;
}

export function chipDescKey(c: Chip): string | null {
  return typeof c === "string" ? null : c.descKey;
}
