// Shared TypeScript interfaces for command guide data

export interface CommandItem {
  command: string;
  complexity: string;
  label: string;
  desc: string;
  detail: string;
  isSkill?: boolean;
  isBeta?: boolean;
  flags?: string[];
  replacedCommand?: string;
  // Beta syntax annotation (for Marketing Kit)
  betaSyntax?: string;
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
