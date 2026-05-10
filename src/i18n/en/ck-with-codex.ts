// EN translations - "ClaudeKit x Codex CLI" guide namespace.
// Page route: /guides/ck-with-codex
export const ck_with_codex = {
  // Hero
  'ckWithCodex.hero.eyebrow': 'ClaudeKit + Codex CLI Guide',
  'ckWithCodex.hero.title': 'Run ClaudeKit workflows in native Codex CLI',
  'ckWithCodex.hero.tldr':
    'Codex CLI is OpenAI\'s native terminal runtime. Use `ck migrate -a codex` to install ClaudeKit content into Codex-native locations, then launch through CCS with `ccsx`, `ccsx codex`, or `ccsxp` — all without permanently rewriting your Codex provider config.',

  // Why CCS
  'ckWithCodex.why.heading': 'Why keep CCS in the loop?',
  'ckWithCodex.why.intro':
    'Plain Codex CLI is enough for a single local account. Add CCS when you want Codex plus shared account routing, live quota checks, and one dashboard for the runtime layer.',
  'ckWithCodex.why.reasons.rotation.title': 'Quota-aware account routing',
  'ckWithCodex.why.reasons.rotation.body':
    'For CCS-routed Codex sessions, CLIProxy owns the runtime rotation. CCS gives you the knobs: `routing set`, `pause`, `resume`, and `default` so exhausted or parked accounts can be skipped.',
  'ckWithCodex.why.reasons.quota.title': 'Live Codex quota visibility',
  'ckWithCodex.why.reasons.quota.body':
    '`ccs cliproxy quota --provider codex` fetches live Codex quota windows across authenticated accounts, including five-hour and weekly usage windows when upstream exposes them.',
  'ckWithCodex.why.reasons.analytics.title': 'Central runtime analytics',
  'ckWithCodex.why.reasons.analytics.body':
    '`ccs config` opens the dashboard with CLIProxy stats: total requests, success/failure counts, model breakdown, and token totals split into input and output.',
  'ckWithCodex.why.reasons.control.title': 'One place to manage the bridge',
  'ckWithCodex.why.reasons.control.body':
    'Use the same dashboard to manage providers, OAuth accounts, routing state, analytics, and Codex-compatible runtime settings instead of editing scattered files.',
  'ckWithCodex.why.caveat':
    'Important: CCS does not magically create more quota. Rotation only helps when you have multiple eligible accounts or projects with independent quota pools — for example, several **OpenAI ChatGPT subscription accounts**, each with its own Codex usage window. If accounts share the same upstream quota pool, failover will still hit the same limit.',
  'ckWithCodex.why.cta.title': 'First time hearing about CCS?',
  'ckWithCodex.why.cta.body':
    'Codex setup is covered step-by-step below. For deeper context on **CCS itself** — providers, OAuth accounts, routing, and the dashboard — open the dedicated guide.',
  'ckWithCodex.why.cta.link': 'Open the CCS guide',

  // Architecture
  'ckWithCodex.arch.heading': 'How the pieces fit together',
  'ckWithCodex.arch.intro':
    '**Two jobs, no overlap.** `ck migrate -a codex` reads ClaudeKit source from the current working directory and writes Codex-native files to global locations. CCS only launches Codex with the right runtime target and transient provider overrides.<br/><br/>**Heads-up:** even `-g` reads CWD first (upstream `claudekit-cli` limitation) — `cd ~` before running migrate if you want global → global.',
  'ckWithCodex.arch.lane1.title': 'Source project (./.claude/)',
  'ckWithCodex.arch.lane1.desc': '`ck migrate` discovers source files from the current repo first, then falls back to `~/.claude/*` when a source type is missing locally.',
  'ckWithCodex.arch.lane2.title': 'Global Codex CK files',
  'ckWithCodex.arch.lane2.desc': 'With `-g`: writes `~/.codex/{agents,hooks}` + `~/.agents/skills/` + `~/.codex/AGENTS.md`. Commands land as `source-command-*` skills, not `~/.codex/prompts/*`.<br/><span class="text-slate-500 dark:text-slate-500">Drop `-g` for project-local equivalents under `.codex/*` and `.agents/skills/*`.</span>',
  'ckWithCodex.arch.lane3.title': 'CLIProxyAPI :8317',
  'ckWithCodex.arch.lane3.desc': 'Local HTTP proxy embedded inside CCS Runtime.<ul class="list-disc pl-5 mt-2 space-y-1"><li>`ccsx codex` <span class="text-slate-500 dark:text-slate-500">→ via CCS Runtime, CLIProxy under the hood, no extra config</span></li><li>`ccsxp` <span class="text-slate-500 dark:text-slate-500">→ direct CLIProxy, requires `CLIPROXY_API_KEY=ccs-internal-managed` in env</span></li></ul><span class="block mt-2 text-slate-500 dark:text-slate-500">Skipped in bare native auth mode.</span>',
  'ckWithCodex.arch.lane4.title': 'Codex CLI runtime',
  'ckWithCodex.arch.lane4.desc': 'The same OpenAI `codex` binary, but launched by CCS so it inherits provider routing and OAuth config — calling `codex` directly bypasses CCS. Common entrypoints:<ul class="list-disc pl-5 mt-2 space-y-1"><li>`ccsx` <span class="text-slate-500 dark:text-slate-500">(native GPT OAuth subscription)</span></li><li>`ccsx codex` <span class="text-slate-500 dark:text-slate-500">(CCS Runtime + CLIProxy)</span></li><li>`ccsxp` <span class="text-slate-500 dark:text-slate-500">(direct CLIProxy shortcut)</span></li></ul>',

  // Prerequisites
  'ckWithCodex.prereq.heading': 'Before you start',
  'ckWithCodex.prereq.intro': 'Four moving parts. CCS handles the wiring; you bring the rest.',
  'ckWithCodex.prereq.node.title': 'Node.js 18+',
  'ckWithCodex.prereq.node.desc': 'Required by both `ck` and `ccs`. Use `nvm` if you juggle versions.',
  'ckWithCodex.prereq.codex.title': 'Codex CLI binary',
  'ckWithCodex.prereq.codex.desc': 'Install OpenAI Codex CLI per upstream docs. Must support `-c key=value` flags.',
  'ckWithCodex.prereq.ccs.title': 'CCS (Claude Code Switch)',
  'ckWithCodex.prereq.ccs.desc': 'Install via `npm install -g @kaitranntt/ccs`, then run `ccs config`.',
  'ckWithCodex.prereq.ck.title': 'ClaudeKit (`ck`) CLI',
  'ckWithCodex.prereq.ck.desc': 'Project content provider. Run `ck init` inside the repo you want skills available.',

  // Setup walkthrough
  'ckWithCodex.setup.heading': 'Five-minute setup',
  'ckWithCodex.setup.intro': 'Run the machine setup once. Run `ck init` in each project, then run `ck migrate -a codex` from the project whose ClaudeKit content you want copied into Codex-native locations. Without `-g`, writes are project-local (`.codex/*`, `.agents/skills/*`); add `-g` to write globally (`~/.codex/*`, `~/.agents/skills/*`). For global → global, `cd ~` first — see the Step 4 caveat.<br/><br/>**Version note:** this guide tracks `claudekit-cli` `v4.0.0-dev.5+`. Run `ck update -d -y` to grab the latest beta so paths and behaviour match.',

  'ckWithCodex.setup.step1.title': 'Install CCS and ClaudeKit',
  'ckWithCodex.setup.step1.badge': 'one-time',
  'ckWithCodex.setup.step1.desc': 'Skip if both CLIs are already on your PATH. CCS handles routing; ClaudeKit ships skills and legacy prompt compatibility files.',
  'ckWithCodex.setup.step1.code': 'npm install -g @kaitranntt/ccs\nnpm install -g claudekit-cli',
  'ckWithCodex.setup.step1.hint.label': 'verify',
  'ckWithCodex.setup.step1.hint.body': '`ccs --version` · `ck --version`',

  'ckWithCodex.setup.step2.title': 'Authenticate Codex via CCS',
  'ckWithCodex.setup.step2.badge': 'oauth',
  'ckWithCodex.setup.step2.desc': 'Two ways to wire one or more Codex OAuth accounts into CLIProxyAPI. Pick whichever fits your workflow — both end up at the same OAuth flow.',
  'ckWithCodex.setup.step2.optionA.label': 'Option A · Dashboard',
  'ckWithCodex.setup.step2.optionA.title': 'Add via the CLIProxy dashboard',
  'ckWithCodex.setup.step2.optionA.body': 'Open `ccs config` → click **CLIProxy** (`/cliproxy`) → pick **Codex** → scroll to **Accounts** → **Add**. A model picker appears; complete OAuth in the browser.',
  'ckWithCodex.setup.step2.optionA.code': 'ccs config\n# → CLIProxy → Codex → Accounts → Add',
  'ckWithCodex.setup.step2.optionB.label': 'Option B · CLI',
  'ckWithCodex.setup.step2.optionB.title': 'Add via one-shot CLI prompt',
  'ckWithCodex.setup.step2.optionB.body': '`ccs codex --auth` reports how many Codex accounts are already authenticated and prompts to add another. Press `y` to launch the browser OAuth flow (paste-callback fallback if headless).',
  'ckWithCodex.setup.step2.optionB.code': 'ccs codex --auth\n# [i] 1 account(s) already authenticated for Codex\n# [?] Add another account? (y/N): y',

  'ckWithCodex.setup.step3.title': 'Confirm the Codex bridge is healthy',
  'ckWithCodex.setup.step3.badge': 'verify',
  'ckWithCodex.setup.step3.desc': 'Run `ccs doctor` and look for the `Codex Auth` row. Seeing `[OK]  Authenticated (DD/MM/YYYY)` means the bridge is wired up and you can move on. Pipe through `grep -i codex` to focus on just the Codex rows.',
  'ckWithCodex.setup.step3.code': 'ccs doctor 2>&1 | grep -i codex\n# Codex Auth │ [OK] │ Authenticated (09/05/2026)',
  'ckWithCodex.setup.step3.hint.label': 'success',
  'ckWithCodex.setup.step3.hint.body': '`Codex Auth` row reads `[OK] Authenticated`',

  'ckWithCodex.setup.step4.title': 'Initialize ClaudeKit, then migrate from that project',
  'ckWithCodex.setup.step4.badge': 'migrate',
  'ckWithCodex.setup.step4.desc': '`ck init` plants the ClaudeKit source layout. `ck migrate -a codex` then copies that content into Codex-native locations.',
  'ckWithCodex.setup.step4.warning.label': 'read this first',
  'ckWithCodex.setup.step4.warning.title': 'Source ignores `-g` — destination follows it',
  'ckWithCodex.setup.step4.warning.tip': '**Global → global:** run `cd ~` first to align CWD, then `ck migrate -a codex -g --dry-run` to verify SOURCE before applying.',
  'ckWithCodex.setup.step4.code': 'cd your-project\nck init',
  'ckWithCodex.setup.step4.init.label': 'init',
  'ckWithCodex.setup.step4.init.body': 'plant `.claude/*` source layout in CWD',
  'ckWithCodex.setup.step4.dryRun.label': 'preview',
  'ckWithCodex.setup.step4.dryRun.body': 'Prints SOURCE and DESTINATION without touching disk. Confirm SOURCE matches what you want copied.',
  'ckWithCodex.setup.step4.dryRun.code': 'ck migrate -a codex --dry-run',
  'ckWithCodex.setup.step4.apply.label': 'apply',
  'ckWithCodex.setup.step4.apply.body': 'Writes Codex-native files for real. Run only after `--dry-run` looks correct.',
  'ckWithCodex.setup.step4.apply.code': 'ck migrate -a codex --yes',

  'ckWithCodex.setup.step5.title': 'Launch Codex with ClaudeKit available',
  'ckWithCodex.setup.step5.badge': 'launch',
  'ckWithCodex.setup.step5.desc': 'Both entrypoints below open Codex through CCS. Pick interactive for `$ck:*` work; pick `exec` for one-shot prompts and scripts. Use `ccsx codex` when you specifically want CCS Runtime quota routing.',
  'ckWithCodex.setup.step5.interactive.label': 'interactive',
  'ckWithCodex.setup.step5.interactive.title': 'Multi-turn Codex session',
  'ckWithCodex.setup.step5.interactive.body': 'Opens a native Codex REPL. Best for `$ck:plan`, `$ck:cook`, and `$ck:review` chains where you continue the same context.',
  'ckWithCodex.setup.step5.interactive.code': 'ccsx codex\n# alias for: ccs codex --target codex',
  'ckWithCodex.setup.step5.exec.label': 'non-interactive',
  'ckWithCodex.setup.step5.exec.title': 'One-shot via `codex exec`',
  'ckWithCodex.setup.step5.exec.body': 'Streams a single prompt non-interactively, prints the response, exits. Use for shell pipelines, CI hooks, and quick edits.',
  'ckWithCodex.setup.step5.exec.code': "ccsx codex exec 'draft a $ck:plan for the auth refactor'",

  // Launching (interactive mode + runtime aliases)
  'ckWithCodex.interactive.heading': 'Launching Codex with CCS',
  'ckWithCodex.interactive.intro':
    'CCS exposes several runtime entrypoints for native Codex CLI. If you omit the prompt text, CCS opens an interactive Codex session — best for multi-turn `$ck:*` work because you can inspect the plan, refine instructions, and continue in the same Codex context.',
  'ckWithCodex.interactive.prompt.title': 'Invoke ClaudeKit workflows with `$...`',
  'ckWithCodex.interactive.prompt.body':
    'After migration, Codex can use the installed CK content. In interactive mode, run one workflow at a time and let Codex continue the same session.',
  'ckWithCodex.interactive.ps.title': 'Prompts vs Skills in Codex',
  'ckWithCodex.interactive.ps.intro':
    '`ck migrate -a codex` writes reusable skill directories and may still write compatibility prompt files when commands are discovered. Treat the prompt output as legacy compatibility, not the main Codex workflow surface.',
  'ckWithCodex.interactive.ps.prompt.label': 'prompt file',
  'ckWithCodex.interactive.ps.prompt.title': 'No longer written',
  'ckWithCodex.interactive.ps.prompt.body':
    'Used to live at `~/.codex/prompts/*.md`. OpenAI deprecated Codex custom prompts, and `claudekit-cli` followed suit in `v4.0.0-dev.5+` — commands now migrate as scoped skills. The legacy prompts path is no longer written.',
  'ckWithCodex.interactive.ps.skill.label': 'skill directory',
  'ckWithCodex.interactive.ps.skill.title': 'Workflow playbook',
  'ckWithCodex.interactive.ps.skill.body':
    'Lives in `~/.agents/skills/skill-name/SKILL.md`. Skills carry the deeper instructions, references, scripts, and rules Codex can load when the task matches.',
  'ckWithCodex.interactive.ps.relationship':
    'In current Codex CLI, `$skill-name` is what invokes migrated ClaudeKit content — that is the workflow surface. `/command-name` is reserved for Codex CLI built-ins (e.g. `/init`, `/compact`) and does NOT run migrated CK commands.',
  'ckWithCodex.interactive.ps.agentScope':
    'Project and global Codex agents are independent — they don\'t merge or override. Keep repo-only definitions in `.codex/agents/agent-name.toml` and repo-only rules in project `AGENTS.md` so they travel with the codebase, not with your machine.',

  // Aliases reference
  'ckWithCodex.aliases.heading': 'Runtime entrypoints, decoded',
  'ckWithCodex.aliases.intro': 'CCS exposes native Codex target aliases plus one cliproxy shortcut. Pick based on whether you want normal GPT OAuth routing, CCS Runtime quota rotation, or direct CLIProxy.',
  'ckWithCodex.aliases.col.command': 'Command',
  'ckWithCodex.aliases.col.routes': 'Routes through',
  'ckWithCodex.aliases.col.useWhen': 'Use when',
  'ckWithCodex.aliases.recommended': 'Recommended',
  'ckWithCodex.aliases.row1.routes': 'Native Codex target with existing GPT/Codex OAuth routing',
  'ckWithCodex.aliases.row1.useWhen': 'You want the shortest native Codex launcher and a single GPT/Codex OAuth account is enough.',
  'ckWithCodex.aliases.row2.routes': 'Built-in Codex profile through CCS Runtime + CLIProxy',
  'ckWithCodex.aliases.row2.useWhen': 'You want quota rotation across multiple GPT accounts and live quota visibility through `ccs cliproxy quota --provider codex`.',
  'ckWithCodex.aliases.row4.routes': 'Direct CLIProxy provider override',
  'ckWithCodex.aliases.row4.useWhen': 'You want a thinner path that skips CCS Runtime and talks straight to CLIProxy. Requires `CLIPROXY_API_KEY=ccs-internal-managed`; pins `CODEX_HOME` to `~/.codex` unless `CCSXP_CODEX_HOME` is set.',

  // Workflows
  'ckWithCodex.workflows.heading': 'Workflows that map cleanly to Codex',
  'ckWithCodex.workflows.intro':
    'These ClaudeKit chains work best after `ck migrate -a codex` has installed the Codex-compatible skills, agents, rules, legacy prompts, and hooks.',
  'ckWithCodex.workflows.flow1.label': 'Build loop',
  'ckWithCodex.workflows.flow1.title': 'Plan → Cook → Test',
  'ckWithCodex.workflows.flow1.desc': 'Classic build loop. `$ck:plan` drafts the design, `$ck:cook` implements, `$ck:test` verifies. Codex tends to be fast on the cook step.',
  'ckWithCodex.workflows.flow2.label': 'Triage loop',
  'ckWithCodex.workflows.flow2.title': 'Fix → Test → Review',
  'ckWithCodex.workflows.flow2.desc': '`$ck:fix` triages a failing test or log, then `$ck:test` re-runs and `$ck:review` audits the diff before commit.',
  'ckWithCodex.workflows.flow3.label': 'Investigation',
  'ckWithCodex.workflows.flow3.title': 'Scout → Brainstorm → Plan',
  'ckWithCodex.workflows.flow3.desc': '`$ck:scout` discovers files, `$ck:brainstorm` weighs trade-offs, `$ck:plan` locks in the approach. Pure investigation, no edits.',
  'ckWithCodex.workflows.outro.cmdsLabel': 'Reference',
  'ckWithCodex.workflows.outro.cmdsTitle': 'Full command catalog',
  'ckWithCodex.workflows.outro.cmdsBody': 'Every `$ck:*` command, what it does, and when to reach for it.',
  'ckWithCodex.workflows.outro.flowsLabel': 'Reference',
  'ckWithCodex.workflows.outro.flowsTitle': 'All workflow recipes',
  'ckWithCodex.workflows.outro.flowsBody': 'Longer chains: ship, debug, retro, and more.',

  'ckWithCodex.aliases.footnote':
    '**Heads-up:** these entrypoints inject `model_provider`, `base_url`, and `env_key` via `-c` at launch — runtime only. The dashboard editor at `ccs config → Compatible → Codex CLI` shows the persisted user layer, not these overrides.',
} as const;
