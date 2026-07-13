/**
 * Isolated ClaudeKit-era i18n dictionary for /legacy/guides.
 * Does not merge into live AgentKit translations.
 */
import { commands } from './en/commands';
import { workflows } from './en/workflows';
import { cli } from './en/cli';
import { uiux } from './en/uiux';
import { guides } from './en/guides';
import { common } from './en/common';
import { ccs } from './en/ccs';
import { happy_ccs } from './en/happy-ccs';
import { coexistence } from './en/coexistence';
import { ck_with_codex } from './en/ck-with-codex';
import { session_recovery } from './en/session-recovery';
import { ide_config } from './en/ide-config';
import { token_tips } from './en/token-tips';

import { commands as commandsVi } from './vi/commands';
import { workflows as workflowsVi } from './vi/workflows';
import { cli as cliVi } from './vi/cli';
import { uiux as uiuxVi } from './vi/uiux';
import { guides as guidesVi } from './vi/guides';
import { common as commonVi } from './vi/common';
import { ccs as ccsVi } from './vi/ccs';
import { happy_ccs as happy_ccs_vi } from './vi/happy-ccs';
import { coexistence as coexistenceVi } from './vi/coexistence';
import { ck_with_codex as ck_with_codex_vi } from './vi/ck-with-codex';
import { session_recovery as session_recovery_vi } from './vi/session-recovery';
import { ide_config as ide_config_vi } from './vi/ide-config';
import { token_tips as token_tips_vi } from './vi/token-tips';

const en = {
  ...commands,
  ...workflows,
  ...cli,
  ...uiux,
  ...guides,
  ...common,
  ...ccs,
  ...happy_ccs,
  ...coexistence,
  ...ck_with_codex,
  ...session_recovery,
  ...ide_config,
  ...token_tips,
} as const;

const vi = {
  ...commandsVi,
  ...workflowsVi,
  ...cliVi,
  ...uiuxVi,
  ...guidesVi,
  ...commonVi,
  ...ccsVi,
  ...happy_ccs_vi,
  ...coexistenceVi,
  ...ck_with_codex_vi,
  ...session_recovery_vi,
  ...ide_config_vi,
  ...token_tips_vi,
} as const;

export const legacyCkTranslations = { en, vi } as const;

export function useTranslations(lang: keyof typeof legacyCkTranslations = 'en') {
  return function t(key: string): string {
    const table = legacyCkTranslations[lang] as Record<string, string>;
    const fallback = legacyCkTranslations.en as Record<string, string>;
    return table[key] || fallback[key] || key;
  };
}
