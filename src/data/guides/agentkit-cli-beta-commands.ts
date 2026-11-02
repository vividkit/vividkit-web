// Commands registered only on the beta CLI (origin/dev). check-ak-guide-pages validates these names
// against the beta command tree and fails once a command reaches stable, so it moves to the main cheatsheet.
// Empty while the beta and stable command trees list the same top-level commands.
import type { AkCliCommand } from './agentkit-cli-cheatsheet';

export const akCliBetaCommands: AkCliCommand[] = [];
