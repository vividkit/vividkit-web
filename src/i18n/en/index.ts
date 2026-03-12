// EN translations index - re-exports all namespaces
import { commands } from './commands';
import { ccs } from './ccs';
import { uiux } from './uiux';
import { guides } from './guides';
import { cli } from './cli';
import { session_recovery } from './session-recovery';
import { token_tips } from './token-tips';
import { ide_config } from './ide-config';
import { workflows } from './workflows';
import { happy_ccs } from './happy-ccs';
import { pricing } from './pricing';
import { common } from './common';

export default {
  ...commands,
  ...ccs,
  ...uiux,
  ...guides,
  ...cli,
  ...session_recovery,
  ...token_tips,
  ...ide_config,
  ...workflows,
  ...happy_ccs,
  ...pricing,
  ...common,
} as const;
