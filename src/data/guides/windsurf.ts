import type { Language } from '@/i18n';

export type Accent = 'teal' | 'sky' | 'amber' | 'rose' | 'slate';

export const windsurfCopy = {
  en: {
    pageTitle: 'Windsurf IDE Explained',
    pageDescription:
      'Understand Windsurf IDE surfaces, Cascade, context, customization, hooks, and ClaudeKit migration.',
    hero: {
      kicker: 'Windsurf IDE guide',
      title: 'Windsurf IDE, explained from first keystroke to agent workflow',
      body:
        'A practical map of Tab, Command, Chat, Cascade, context, customization, terminal safety, worktrees, hooks, and ClaudeKit migration.',
      badge: 'IDE only',
    },
    decisionsTitle: 'Start with the surface that matches the job',
    decisions: [
      ['Typing code now', 'Use Tab or Autocomplete for low-friction suggestions.', 'teal'],
      ['Need a focused edit', 'Use Command on the cursor or selected code.', 'sky'],
      ['Need explanation', 'Use Chat when the answer matters more than immediate edits.', 'amber'],
      ['Need real work done', 'Use Cascade when the task needs files, tools, terminal, or checkpoints.', 'rose'],
    ],
    ladderTitle: 'The Windsurf surface ladder',
    ladderIntro:
      'Each layer adds more agency. The trick is not using the biggest surface every time.',
    ladder: [
      ['Tab', 'Passive suggestions while you type.', 'Lowest'],
      ['Command', 'Targeted edits from natural language.', 'Focused'],
      ['Chat', 'Questions, explanations, code discussion.', 'Read-first'],
      ['Cascade', 'Agentic work with files, tools, terminal, and recovery.', 'Workhorse'],
      ['Agent Command Center', 'Kanban-style view for local and cloud agent sessions.', 'Orchestration'],
    ],
    systemTitle: 'How the pieces work together',
    systemIntro:
      'Cascade sits in the middle. It reads context, follows durable instructions, chooses tools, and can execute work through the terminal or MCP.',
    systemNodes: [
      ['Project context', 'Open files, indexed code, pinned context, docs, and Fast Context retrieval.', 'teal'],
      ['Instruction layer', 'Rules, AGENTS.md, Memories, Workflows, and Skills tell Cascade how to behave.', 'amber'],
      ['Cascade planner', 'Plans, edits, runs tools, reads diagnostics, and creates checkpoints.', 'rose'],
      ['Execution layer', 'Terminal, MCP tools, worktrees, app deploys, and hook callbacks.', 'sky'],
    ],
    customizationTitle: 'Customization without mixing the jobs',
    customizationIntro:
      'Windsurf has several persistence surfaces. They overlap in purpose, but not in shape.',
    customization: [
      ['Rules', '.windsurf/rules/*.md', 'Durable behavior with activation modes.'],
      ['AGENTS.md', 'Any workspace directory', 'Directory-scoped instructions fed into the Rules engine.'],
      ['Memories', '~/.codeium/windsurf/memories/', 'Local auto-generated context, not committed.'],
      ['Workflows', '.windsurf/workflows/*.md', 'Manual slash-command procedures.'],
      ['Skills', '.windsurf/skills/<name>/SKILL.md', 'Multi-step task bundles with supporting files.'],
      ['Hooks', '.windsurf/hooks.json', 'Pre/post automation around Cascade actions.'],
    ],
    hooksTitle: 'Hooks are first-class in current Windsurf',
    hooksBody:
      'Cascade Hooks can run before or after reads, writes, terminal commands, MCP calls, user prompts, Cascade responses, and worktree setup. Pre-hooks can block by exiting with code 2.',
    migrationTitle: 'ClaudeKit migration status',
    migrationBody:
      '`ck migrate -a windsurf` fits the core Windsurf folders, but hook migration is the current gap.',
    migrationLabels: {
      source: 'Source',
      destination: 'Destination',
      status: 'Status',
      hookWarning: 'Hooks are discovered by ClaudeKit but currently reported as unsupported for Windsurf.',
    },
    migrationRows: [
      ['Agents', '.windsurf/rules', 'Supported'],
      ['Skills', '.windsurf/skills', 'Supported'],
      ['Config / CLAUDE.md', '.windsurf/rules/rules.md', 'Supported'],
      ['Rules', '.windsurf/rules', 'Supported'],
      ['Commands', '.windsurf/workflows', 'Supported by provider'],
      ['Hooks', '.windsurf/hooks.json', 'Not migrated yet'],
    ],
    nextTitle: 'Where this guide should grow next',
    next: [
      ['Cascade deep dive', 'Modes, checkpoints, terminal, MCP, worktrees, review, deploy.', '/guides/windsurf/cascade'],
      ['Customization deep dive', 'Rules vs AGENTS.md vs Memories vs Workflows vs Skills vs Hooks.', '/guides/windsurf/customization'],
      ['Migration deep dive', 'ClaudeKit path mapping, limitations, and custom hook migration script.', '/guides/windsurf/migration'],
    ],
  },
  vi: {
    pageTitle: 'Giải Thích Windsurf IDE',
    pageDescription:
      'Hiểu Windsurf IDE, Cascade, context, customization, hooks, và migration từ ClaudeKit.',
    hero: {
      kicker: 'Hướng dẫn Windsurf IDE',
      title: 'Windsurf IDE, từ gợi ý đầu tiên tới workflow agent',
      body:
        'Bản đồ thực dụng về Tab, Command, Chat, Cascade, context, customization, terminal safety, worktrees, hooks, và ClaudeKit migration.',
      badge: 'Chỉ IDE',
    },
    decisionsTitle: 'Bắt đầu bằng đúng bề mặt làm việc',
    decisions: [
      ['Đang gõ code', 'Dùng Tab hoặc Autocomplete để nhận gợi ý nhanh.', 'teal'],
      ['Cần sửa một đoạn cụ thể', 'Dùng Command tại cursor hoặc phần code đã chọn.', 'sky'],
      ['Cần hiểu vấn đề', 'Dùng Chat khi câu trả lời quan trọng hơn việc sửa ngay.', 'amber'],
      ['Cần làm task thật', 'Dùng Cascade khi task cần đọc file, dùng tool, terminal, hoặc checkpoint.', 'rose'],
    ],
    ladderTitle: 'Các tầng làm việc của Windsurf',
    ladderIntro:
      'Mỗi tầng thêm nhiều quyền hành động hơn. Bí quyết là không dùng tầng nặng nhất cho mọi việc.',
    ladder: [
      ['Tab', 'Gợi ý thụ động khi bạn đang gõ.', 'Nhẹ nhất'],
      ['Command', 'Sửa code có mục tiêu bằng ngôn ngữ tự nhiên.', 'Tập trung'],
      ['Chat', 'Hỏi đáp, giải thích, thảo luận code.', 'Đọc trước'],
      ['Cascade', 'Agent làm việc với file, tool, terminal, và recovery.', 'Chủ lực'],
      ['Agent Command Center', 'Bảng Kanban cho các agent session local và cloud.', 'Điều phối'],
    ],
    systemTitle: 'Các thành phần phối hợp như thế nào',
    systemIntro:
      'Cascade nằm ở giữa. Nó đọc context, theo instruction bền vững, chọn tool, rồi thực thi qua terminal hoặc MCP khi cần.',
    systemNodes: [
      ['Project context', 'Open files, indexed code, pinned context, docs, và Fast Context retrieval.', 'teal'],
      ['Instruction layer', 'Rules, AGENTS.md, Memories, Workflows, và Skills hướng dẫn Cascade.', 'amber'],
      ['Cascade planner', 'Lập plan, edit file, chạy tool, đọc diagnostics, tạo checkpoint.', 'rose'],
      ['Execution layer', 'Terminal, MCP tools, worktrees, app deploys, và hook callbacks.', 'sky'],
    ],
    customizationTitle: 'Customization: mỗi thứ một nhiệm vụ',
    customizationIntro:
      'Windsurf có nhiều bề mặt lưu ngữ cảnh. Chúng gần nhau về mục đích, nhưng khác nhau về hình dạng.',
    customization: [
      ['Rules', '.windsurf/rules/*.md', 'Hành vi bền vững với activation modes.'],
      ['AGENTS.md', 'Bất kỳ thư mục nào trong workspace', 'Instruction theo thư mục, chạy qua Rules engine.'],
      ['Memories', '~/.codeium/windsurf/memories/', 'Context local do Cascade tự tạo, không commit.'],
      ['Workflows', '.windsurf/workflows/*.md', 'Quy trình gọi thủ công bằng slash command.'],
      ['Skills', '.windsurf/skills/<name>/SKILL.md', 'Gói task nhiều bước kèm file hỗ trợ.'],
      ['Hooks', '.windsurf/hooks.json', 'Automation pre/post quanh hành động của Cascade.'],
    ],
    hooksTitle: 'Hooks hiện là phần native của Windsurf',
    hooksBody:
      'Cascade Hooks có thể chạy trước/sau read, write, terminal command, MCP call, user prompt, Cascade response, và worktree setup. Pre-hook có thể block bằng exit code 2.',
    migrationTitle: 'Trạng thái ClaudeKit migration',
    migrationBody:
      '`ck migrate -a windsurf` fit các thư mục core của Windsurf, nhưng hooks là gap hiện tại.',
    migrationLabels: {
      source: 'Source',
      destination: 'Destination',
      status: 'Status',
      hookWarning: 'ClaudeKit phát hiện hooks, nhưng hiện báo unsupported khi target là Windsurf.',
    },
    migrationRows: [
      ['Agents', '.windsurf/rules', 'Hỗ trợ'],
      ['Skills', '.windsurf/skills', 'Hỗ trợ'],
      ['Config / CLAUDE.md', '.windsurf/rules/rules.md', 'Hỗ trợ'],
      ['Rules', '.windsurf/rules', 'Hỗ trợ'],
      ['Commands', '.windsurf/workflows', 'Provider hỗ trợ'],
      ['Hooks', '.windsurf/hooks.json', 'Chưa migrate'],
    ],
    nextTitle: 'Guide này nên mở rộng tiếp ở đâu',
    next: [
      ['Deep dive Cascade', 'Modes, checkpoints, terminal, MCP, worktrees, review, deploy.', '/guides/windsurf/cascade'],
      ['Deep dive customization', 'Rules vs AGENTS.md vs Memories vs Workflows vs Skills vs Hooks.', '/guides/windsurf/customization'],
      ['Deep dive migration', 'ClaudeKit path mapping, limitations, và hook migration script.', '/guides/windsurf/migration'],
    ],
  },
} satisfies Record<Language, any>;

export type WindsurfDeepDiveTopic = 'cascade' | 'customization' | 'migration';

export const windsurfDeepDiveCopy = {
  en: {
    cascade: {
      pageTitle: 'Windsurf Cascade Deep Dive',
      pageDescription:
        'A practical deep dive into Cascade modes, context flow, checkpoints, terminal use, MCP, worktrees, and review loops.',
      hero: {
        kicker: 'Windsurf deep dive',
        title: 'Cascade is the workbench, not just a chat panel',
        body:
          'Use Cascade when the job needs a loop: understand context, plan, edit, run tools, read feedback, checkpoint, and recover.',
        badge: 'Agent workflow',
      },
      mapTitle: 'The Cascade loop',
      mapIntro:
        'The productive mental model is a controlled loop. Give Cascade the right context, let it act through tools, then use checkpoints and review to keep the work reversible.',
      diagram: {
        title: 'A complete Cascade run has six handoffs',
        body:
          'Cascade is strongest when every step produces evidence for the next step. The loop below is the shape you want for real implementation work.',
        nodes: [
          {
            label: 'Input',
            title: 'Scope the job',
            body: 'Name the goal, files, constraints, source of truth, and verification command.',
          },
          {
            label: 'Plan',
            title: 'Pick the path',
            body: 'Ask for a short plan when the change can touch architecture, data, auth, or deployment.',
          },
          {
            label: 'Act',
            title: 'Edit and run tools',
            body: 'Let Cascade change files, read diagnostics, run terminal checks, or call MCP when needed.',
          },
          {
            label: 'Evidence',
            title: 'Read the result',
            body: 'Use test output, build output, logs, screenshots, and diff review as the next context.',
          },
          {
            label: 'Checkpoint',
            title: 'Keep recovery cheap',
            body: 'Create or rely on checkpoints before broad edits, dependency changes, or worktree experiments.',
          },
          {
            label: 'Ship',
            title: 'Close the loop',
            body: 'Summarize files changed, commands run, open risks, and the next review or deploy step.',
          },
        ],
        feedback:
          'If any step is weak, tighten that step only: add missing context, narrow scope, rerun verification, or roll back the last checkpoint instead of restarting the whole task.',
      },
      sections: [
        {
          title: '1. Start with scoped context',
          body:
            'Cascade works best when the prompt names the goal, target files, constraints, and expected verification. Add pinned files or docs when repo search alone is not enough.',
          points: ['Open or pin the files that define the task.', 'State boundaries: what can change, what should stay untouched.', 'Ask for a plan first when the blast radius is unclear.'],
        },
        {
          title: '2. Let tools close the feedback loop',
          body:
            'Cascade can read files, edit files, run terminal commands, call MCP tools, and use diagnostics. Treat each run as evidence, not ceremony.',
          points: ['Use terminal runs for tests, typecheck, lint, and local app checks.', 'Use MCP for external systems only when the task truly needs them.', 'Keep secrets and destructive commands behind explicit rules or hooks.'],
        },
        {
          title: '3. Use checkpoints as recovery points',
          body:
            'Checkpoints make agentic edits less risky. Before large changes, create a known-good point; after verification, keep the diff narrow and explain what changed.',
          points: ['Checkpoint before broad edits or dependency changes.', 'Review diffs after each meaningful phase.', 'Roll back the phase, not the whole conversation, when a branch goes sideways.'],
        },
        {
          title: '4. Split isolated work into worktrees',
          body:
            'Worktrees help when Cascade needs to explore a risky implementation or run parallel agent sessions. Remember that environment files are not copied automatically.',
          points: ['Use worktrees for experiments, migrations, and parallel tasks.', 'Prepare post-setup hooks for env, install, or seed steps.', 'Merge only the verified slice back into the main workspace.'],
        },
      ],
      practical: {
        kicker: 'Hands-on playbook',
        title: 'Prompts with real operating context',
        intro:
          'Use these when Cascade is doing real repo work, not just answering a question. The first template is ClaudeKit-aware so migrated rules, workflows, and skills stay part of the operating context.',
        blocks: [
          {
            label: 'ClaudeKit note',
            title: 'ClaudeKit-aware Cascade brief',
            body:
              'Use this after running `ck migrate -a windsurf`, or when a repo keeps ClaudeKit conventions alongside Windsurf. The key is to tell Cascade which layer is source of truth.',
            items: ['Use `.windsurf/rules`, `.windsurf/workflows`, and `.windsurf/skills` as Windsurf-native instructions.', 'Keep `.claude` / ClaudeKit source files unchanged unless the task is explicitly migration work.', 'Do not assume every `/ck:*` command is available as a Windsurf slash command unless it was migrated into `.windsurf/workflows`.'],
            codeLabel: 'ClaudeKit + Windsurf prompt',
            code: `Goal:
Implement <feature/fix> in this Windsurf workspace while respecting the migrated ClaudeKit setup.

Instruction sources:
- Read README.md and nearest AGENTS.md first.
- Use .windsurf/rules as active project policy.
- If a relevant .windsurf/skills/<name>/SKILL.md exists, follow it.
- If a matching .windsurf/workflows/<name>.md exists, treat it as the runbook.
- Treat .claude/ or upstream ClaudeKit files as source material only; do not edit them unless I ask for migration changes.

Scope:
- Read first: <files/directories/docs>
- Allowed to edit: <files/directories>
- Do not touch: <files/directories/behavior>

Plan:
First inspect the repo and propose a short plan.
Stop for confirmation if the change affects auth, billing, data deletion, schema, secrets, hooks, or deployment.

Verification:
- Run: <npm test / npm run build / pytest / go test ./...>
- Also check the relevant Windsurf rule/workflow expectations.

Final response:
Summarize changed files, ClaudeKit/Windsurf instructions used, verification output, and remaining risks.`,
          },
          {
            label: 'Debug mode',
            title: 'Root-cause loop for failing code',
            body:
              'Use this when you have an error, log, failing test, or regression. Cascade should reproduce, trace, patch, then prove the fix instead of guessing.',
            items: ['Paste the exact error and command.', 'Point to likely files only if you know them.', 'Require a failing-before, passing-after proof.'],
            codeLabel: 'debug prompt',
            code: `I need root-cause debugging, not a speculative fix.

Failure:
- Command: <exact command>
- Error/log: <paste exact output>
- Expected behavior: <what should happen>
- Recent change, if known: <commit/file/session>

Please:
1. Reproduce or inspect the failure path.
2. Identify the smallest root cause with file references.
3. Propose the minimal fix.
4. Apply it only after explaining the plan.
5. Run the same command again and report the result.

Do not refactor unrelated code.`,
          },
          {
            label: 'Worktree mode',
            title: 'Risky experiment in an isolated workspace',
            body:
              'Use Worktree mode at the start of a Cascade session for risky migrations, parallel attempts, or broad refactors. Keep setup explicit because untracked env files are not copied automatically.',
            items: ['Use it before the first Cascade message.', 'Add a post-setup hook for env/install steps.', 'Merge only after tests and diff review.'],
            codeLabel: 'worktree prompt',
            code: `Work in a Windsurf worktree for this experiment.

Objective:
Explore <migration/refactor/architecture option> without changing the main workspace.

Setup assumptions:
- If dependencies are missing, run <install command>.
- If env is missing, stop and tell me which files/vars are needed.

Deliverable:
- One recommended implementation path.
- Files changed in the worktree.
- Commands run and results.
- Clear merge/no-merge recommendation.`,
          },
          {
            label: 'Ship loop',
            title: 'Feature-to-deploy checklist',
            body:
              'Borrow the practical deploy flow: build with Cascade, review the diff, commit, push to the right branch, then let CI or deployment automation prove the release.',
            items: ['Break large features into reviewable stages.', 'Run build/test before commit.', 'Use branch-based environments for staging review.'],
            codeLabel: 'release prompt',
            code: `Prepare this change for review.

Checklist:
1. Inspect the diff and flag surprising files.
2. Run <lint>, <typecheck>, and <test/build>.
3. Check package/dependency changes.
4. Draft a concise commit message.
5. Draft PR notes with:
   - What changed
   - How verified
   - Rollback notes
   - Follow-up risks

Do not push or deploy unless I explicitly ask.`,
          },
        ],
      },
      checklistTitle: 'Good Cascade prompt checklist',
      checklist: ['Goal', 'Scope', 'Constraints', 'Verification command', 'Rollback expectation'],
    },
    customization: {
      pageTitle: 'Windsurf Customization Deep Dive',
      pageDescription:
        'Understand Rules, AGENTS.md, Memories, Workflows, Skills, Hooks, and how they fit together in Windsurf IDE.',
      hero: {
        kicker: 'Windsurf deep dive',
        title: 'Customize behavior by choosing the right persistence layer',
        body:
          'Windsurf has several instruction surfaces. The hard part is deciding which one owns behavior, context, procedure, or automation.',
        badge: 'Instruction system',
      },
      mapTitle: 'Use one layer for one job',
      mapIntro:
        'Avoid putting the same instruction everywhere. Durable policy, local memory, slash procedures, reusable task bundles, and hook automation each have a different job.',
      sections: [
        {
          title: 'Rules: durable behavior',
          body:
            'Rules are the normal place for project or team instructions. Use them for coding standards, workflow expectations, safety boundaries, and repo-specific conventions.',
          points: ['Commit project rules when the team should share them.', 'Keep rules concise and testable.', 'Prefer directory-scoped rules for local ownership boundaries.'],
        },
        {
          title: 'AGENTS.md: directory-scoped context',
          body:
            'AGENTS.md lets instructions live near the code they govern. In Windsurf, it feeds into the rules system, so treat it as local operating context.',
          points: ['Put package-specific instructions near the package.', 'Keep global guidance out of leaf folders.', 'Use it for ownership, test commands, and architectural constraints.'],
        },
        {
          title: 'Memories: private local recall',
          body:
            'Memories are local context that Windsurf can create and reuse. They are useful for personal workflow facts, but should not replace committed project docs.',
          points: ['Do not rely on memories for team-critical behavior.', 'Review stale memories when behavior feels odd.', 'Keep sensitive content out unless you understand the local storage impact.'],
        },
        {
          title: 'Workflows and Skills: reusable procedures',
          body:
            'Workflows are manual slash-command procedures. Skills are larger task bundles with supporting files. Use them when the same job repeats across projects.',
          points: ['Use workflows for short, human-triggered recipes.', 'Use skills when scripts, templates, or references make the task reliable.', 'Keep outputs and verification expectations explicit.'],
        },
        {
          title: 'Hooks: automation around actions',
          body:
            'Hooks run before or after Cascade actions such as reads, writes, terminal commands, MCP calls, prompts, responses, and worktree setup.',
          points: ['Use pre-hooks for guardrails and privacy blocks.', 'Use post-hooks for formatting, indexing, or notifications.', 'Document exit behavior so the block reason is obvious.'],
        },
      ],
      practical: {
        kicker: 'Reference setup',
        title: 'A practical Windsurf workspace layout',
        intro:
          'Start with a small committed instruction system. Put shared policy in rules, local ownership in AGENTS.md, repeatable slash procedures in workflows, larger bundles in skills, and automatic checks in hooks.',
        blocks: [
          {
            label: 'Folder layout',
            title: 'Minimum useful `.windsurf` structure',
            body:
              'This layout gives a team enough structure without turning the repo into an instruction dump. Add files only when the behavior is actually reused.',
            items: ['Commit shared rules, workflows, skills, and workspace hooks.', 'Keep private memories out of git.', 'Keep folder-level AGENTS.md close to the code it governs.'],
            codeLabel: 'workspace layout',
            code: `.windsurf/
  rules/
    project-style.md
    safety-boundaries.md
  workflows/
    review-diff.md
    release-check.md
  skills/
    api-contract-audit/
      SKILL.md
      references/
        api-style.md
  hooks.json
AGENTS.md
packages/
  web/
    AGENTS.md`,
          },
          {
            label: 'Rule file',
            title: 'Project rule that stays actionable',
            body:
              'Rules work best when they are short, testable, and tied to real repo commands. Avoid broad personality instructions that cannot be verified.',
            items: ['Include conventions and commands.', 'Add stop conditions for risky work.', 'Point to source docs instead of duplicating everything.'],
            codeLabel: '.windsurf/rules/project-style.md',
            code: `---
trigger: glob
description: Project coding and verification rules
globs:
  - "src/**/*.{ts,tsx,astro}"
---

- Read README.md and the nearest AGENTS.md before editing.
- Follow existing Astro and Tailwind patterns before adding abstractions.
- Do not change unrelated copy, routes, or generated files.
- Before final response, run:
  - npm run build
  - git diff --check
- Stop and ask before touching auth, payment, analytics, secrets, or deployment config.`,
          },
          {
            label: 'Workflow file',
            title: 'Slash workflow for repeatable review',
            body:
              'Use workflows for procedures humans intentionally trigger. They are lighter than skills and perfect for review, release, or migration checklists.',
            items: ['Keep the command focused.', 'Name the output format.', 'Tell Cascade when to stop.'],
            codeLabel: '.windsurf/workflows/review-diff.md',
            code: `# Review current diff

Use when I ask for "/review-diff".

Steps:
1. Inspect git status and changed files.
2. Read only the changed files and nearby callsites.
3. Report bugs, regressions, missing tests, and risky assumptions first.
4. Include file references and exact verification gaps.
5. Do not edit files unless I explicitly ask for fixes.

Output:
- Findings ordered by severity.
- Open questions.
- Verification already run or still needed.`,
          },
          {
            label: 'Hook config',
            title: 'Guardrails around file writes and commands',
            body:
              'Hooks are for automatic policy. Use pre-hooks to block dangerous actions and post-hooks for formatting, indexing, notifications, or audit logs.',
            items: ['Use exit code 2 only for intentional pre-hook blocks.', 'Keep hook scripts deterministic and fast.', 'Treat transcript hooks as sensitive data handlers.'],
            codeLabel: '.windsurf/hooks.json',
            code: `{
  "hooks": {
    "pre_write_code": [
      {
        "command": "node scripts/windsurf-guard-write.mjs",
        "show_output": true
      }
    ],
    "post_write_code": [
      {
        "command": "npm run format -- --write",
        "show_output": false
      }
    ],
    "pre_run_command": [
      {
        "command": "node scripts/windsurf-guard-command.mjs",
        "show_output": true
      }
    ],
    "post_setup_worktree": [
      {
        "command": "npm install",
        "show_output": true
      }
    ]
  }
}`,
          },
        ],
      },
      checklistTitle: 'Layer decision checklist',
      checklist: ['Shared policy -> Rules', 'Local folder context -> AGENTS.md', 'Private recall -> Memories', 'Repeatable recipe -> Workflow or Skill', 'Automatic guardrail -> Hook'],
    },
    migration: {
      pageTitle: 'Windsurf Migration Deep Dive',
      pageDescription:
        'Map ClaudeKit assets into Windsurf, identify the current hooks gap, and plan a safer custom migration script.',
      hero: {
        kicker: 'Windsurf deep dive',
        title: 'Migration works for core folders; hooks need a dedicated bridge',
        body:
          '`ck migrate -a windsurf` already matches the main Windsurf ecosystem shape. The missing piece is converting ClaudeKit hooks into Windsurf hook events safely.',
        badge: 'ClaudeKit bridge',
      },
      mapTitle: 'Migration path',
      mapIntro:
        'Treat migration as an audited copy, not a blind file move. Dry-run first, inspect output, then bridge unsupported pieces with explicit scripts.',
      sections: [
        {
          title: '1. Dry-run the supported migration',
          body:
            'Start with the CLI dry run so you can see exactly what maps into .windsurf before touching the workspace.',
          points: ['Run `ck migrate -a windsurf --dry-run --yes`.', 'Confirm agents, skills, rules, config, and commands land in the expected folders.', 'Keep the dry-run output in the contribution notes.'],
        },
        {
          title: '2. Verify the folder mapping',
          body:
            'The current mapping fits Windsurf IDE: rules, skills, and workflows are the natural destinations for ClaudeKit assets.',
          points: ['Agents and rules -> `.windsurf/rules`.', 'Skills -> `.windsurf/skills`.', 'Commands -> `.windsurf/workflows`.', 'Config or CLAUDE.md -> `.windsurf/rules/rules.md`.'],
        },
        {
          title: '3. Bridge hooks separately',
          body:
            'ClaudeKit can discover hooks, but Windsurf hook migration is currently the gap. A custom bridge should translate events, commands, blockers, and messages deliberately.',
          points: ['Map source hook event names to Windsurf Cascade hook events.', 'Preserve blocking semantics for pre-hooks with exit code 2.', 'Generate `.windsurf/hooks.json` plus a migration report.'],
        },
        {
          title: '4. Contribute upstream only after replay tests',
          body:
            'Before upstreaming to claudekit-cli, test with small fixtures: no hooks, one pre-command hook, one post-write hook, and mixed unsupported hooks.',
          points: ['Snapshot expected output for each fixture.', 'Fail loudly on ambiguous hook events.', 'Document limitations in the CLI help and VividKit guide.'],
        },
      ],
      practical: {
        kicker: 'Migration kit',
        title: 'A safer local migration workflow',
        intro:
          'Treat `ck migrate -a windsurf` as the supported base layer, then add a separate hook bridge with fixtures before proposing upstream support.',
        blocks: [
          {
            label: 'Dry run',
            title: 'Capture what the CLI already maps',
            body:
              'The current command fits core Windsurf folders. Preserve the dry-run output so the upstream PR can show what changed and what stayed unsupported.',
            items: ['Run from a disposable copy or clean worktree.', 'Review every generated path.', 'Keep hook gaps explicit instead of silently dropping them.'],
            codeLabel: 'terminal',
            code: `ck migrate -a windsurf --dry-run --yes | tee windsurf-migrate-dry-run.log

# After review, run the real migration in a clean branch/worktree:
ck migrate -a windsurf --yes

# Inspect generated files:
find .windsurf -maxdepth 3 -type f | sort
git diff -- .windsurf AGENTS.md`,
          },
          {
            label: 'Hook bridge',
            title: 'Event mapping for a custom script',
            body:
              'ClaudeKit hooks and Windsurf hooks are similar in spirit, but not identical. A migration script should map only known-safe events and report every unsupported case.',
            items: ['Map pre-command to `pre_run_command`.', 'Map post-write style hooks to `post_write_code`.', 'Preserve blocking behavior only for pre-hooks.'],
            codeLabel: 'migration mapping sketch',
            code: `const eventMap = {
  PreToolUse_Bash: "pre_run_command",
  PostToolUse_Bash: "post_run_command",
  PreToolUse_Read: "pre_read_code",
  PostToolUse_Read: "post_read_code",
  PreToolUse_Edit: "pre_write_code",
  PostToolUse_Edit: "post_write_code",
  UserPromptSubmit: "pre_user_prompt",
  Stop: "post_cascade_response"
};

// Unknown events should be written to unsupported-hooks.md,
// not guessed into a Windsurf event.`,
          },
          {
            label: 'Fixture tests',
            title: 'Minimum fixtures before upstream PR',
            body:
              'Do not contribute hook migration until replay tests prove generated `.windsurf/hooks.json` for common and edge cases.',
            items: ['No hooks: empty output is valid.', 'Single blocking pre-command hook.', 'Mixed supported and unsupported hooks.'],
            codeLabel: 'fixture layout',
            code: `fixtures/
  no-hooks/
    input/.claude/settings.json
    expected/.windsurf/hooks.json
  pre-command-block/
    input/.claude/settings.json
    input/.claude/hooks/block-dangerous-command.sh
    expected/.windsurf/hooks.json
  mixed-events/
    input/.claude/settings.json
    expected/.windsurf/hooks.json
    expected/unsupported-hooks.md`,
          },
          {
            label: 'PR notes',
            title: 'What to document for claudekit-cli',
            body:
              'The upstream change needs to be boring and reviewable: source formats, destination format, unsupported event handling, and exact safety semantics.',
            items: ['Explain why core migration already fits.', 'Call out hooks as newly supported.', 'Document exit-code and transcript privacy caveats.'],
            codeLabel: 'upstream checklist',
            code: `Upstream PR checklist:
- Add Windsurf hook provider support.
- Add event mapping table in docs/help output.
- Add fixture tests for supported and unsupported hooks.
- Preserve pre-hook blocking with exit code 2.
- Never migrate transcript-writing hooks without a privacy warning.
- Update VividKit guide after release.`,
          },
        ],
      },
      checklistTitle: 'Migration contribution checklist',
      checklist: ['Dry-run output', 'Fixture coverage', 'Hook event matrix', 'Unsupported hook report', 'Upstream PR notes'],
    },
  },
  vi: {
    cascade: {
      pageTitle: 'Deep Dive Windsurf Cascade',
      pageDescription:
        'Đi sâu vào Cascade modes, context flow, checkpoints, terminal, MCP, worktrees, và vòng review.',
      hero: {
        kicker: 'Windsurf deep dive',
        title: 'Cascade là bàn làm việc agent, không chỉ là khung chat',
        body:
          'Dùng Cascade khi task cần một vòng lặp: hiểu context, lập plan, edit, chạy tool, đọc feedback, checkpoint, rồi recover khi cần.',
        badge: 'Agent workflow',
      },
      mapTitle: 'Vòng lặp Cascade',
      mapIntro:
        'Mental model tốt nhất là một vòng lặp có kiểm soát. Đưa đúng context, cho Cascade hành động qua tool, rồi dùng checkpoint và review để giữ thay đổi có thể đảo ngược.',
      diagram: {
        title: 'Một lượt Cascade đầy đủ có sáu điểm bàn giao',
        body:
          'Cascade mạnh nhất khi mỗi bước tạo bằng chứng cho bước kế tiếp. Đây là shape nên dùng khi để Cascade làm implementation thật.',
        nodes: [
          {
            label: 'Input',
            title: 'Scope task',
            body: 'Nêu goal, file, constraint, source of truth, và lệnh verify.',
          },
          {
            label: 'Plan',
            title: 'Chọn đường đi',
            body: 'Yêu cầu plan ngắn khi thay đổi có thể chạm architecture, data, auth, hoặc deployment.',
          },
          {
            label: 'Act',
            title: 'Edit và chạy tool',
            body: 'Cho Cascade sửa file, đọc diagnostics, chạy terminal, hoặc gọi MCP khi cần.',
          },
          {
            label: 'Evidence',
            title: 'Đọc kết quả',
            body: 'Dùng test output, build output, logs, screenshot, và diff review làm context tiếp theo.',
          },
          {
            label: 'Checkpoint',
            title: 'Giữ recovery rẻ',
            body: 'Dùng checkpoint trước broad edit, dependency change, hoặc experiment bằng worktree.',
          },
          {
            label: 'Ship',
            title: 'Đóng vòng',
            body: 'Tóm tắt file đổi, command đã chạy, risk còn lại, và bước review/deploy tiếp theo.',
          },
        ],
        feedback:
          'Nếu một bước yếu, chỉ tighten bước đó: thêm context, thu hẹp scope, chạy lại verify, hoặc rollback checkpoint gần nhất thay vì làm lại toàn bộ task.',
      },
      sections: [
        {
          title: '1. Bắt đầu bằng context có phạm vi',
          body:
            'Cascade chạy tốt hơn khi prompt nói rõ goal, file liên quan, constraint, và cách verify. Pin file hoặc docs khi repo search chưa đủ.',
          points: ['Mở hoặc pin file định nghĩa task.', 'Nói rõ ranh giới: được sửa gì, không đụng gì.', 'Yêu cầu plan trước khi phạm vi thay đổi còn mơ hồ.'],
        },
        {
          title: '2. Dùng tool để đóng feedback loop',
          body:
            'Cascade có thể đọc file, edit file, chạy terminal, gọi MCP, và đọc diagnostics. Mỗi lần chạy nên tạo bằng chứng thật.',
          points: ['Dùng terminal cho test, typecheck, lint, và local app check.', 'Chỉ dùng MCP khi task thật sự cần hệ thống ngoài.', 'Đưa secrets và command nguy hiểm vào rules hoặc hooks rõ ràng.'],
        },
        {
          title: '3. Dùng checkpoint như điểm recovery',
          body:
            'Checkpoint giúp agentic edit ít rủi ro hơn. Trước thay đổi lớn, tạo điểm tốt đã biết; sau verify, giữ diff hẹp và giải thích thay đổi.',
          points: ['Checkpoint trước broad edit hoặc đổi dependency.', 'Review diff sau từng phase có nghĩa.', 'Rollback theo phase thay vì phá cả conversation.'],
        },
        {
          title: '4. Tách việc rủi ro bằng worktrees',
          body:
            'Worktrees hữu ích khi Cascade cần thử nghiệm implementation rủi ro hoặc chạy nhiều agent session song song. Lưu ý .env không được copy tự động.',
          points: ['Dùng worktrees cho experiment, migration, task song song.', 'Chuẩn bị post-setup hooks cho env, install, hoặc seed.', 'Chỉ merge phần đã verify về workspace chính.'],
        },
      ],
      practical: {
        kicker: 'Playbook thực chiến',
        title: 'Prompt có operating context thật',
        intro:
          'Dùng khi Cascade làm việc trực tiếp trên repo, không chỉ hỏi đáp. Template đầu tiên có note riêng cho ClaudeKit để rules, workflows, và skills đã migrate vẫn được dùng đúng vai trò.',
        blocks: [
          {
            label: 'ClaudeKit note',
            title: 'Brief Cascade khi repo có ClaudeKit',
            body:
              'Dùng sau khi chạy `ck migrate -a windsurf`, hoặc khi repo vẫn giữ convention ClaudeKit cạnh Windsurf. Điểm quan trọng là nói rõ lớp nào là source of truth.',
            items: ['Dùng `.windsurf/rules`, `.windsurf/workflows`, và `.windsurf/skills` như instruction native của Windsurf.', 'Giữ `.claude` / ClaudeKit source files nguyên vẹn trừ khi task là migration.', 'Đừng giả định mọi `/ck:*` command đều có trong Windsurf nếu chưa được migrate thành `.windsurf/workflows`.'],
            codeLabel: 'ClaudeKit + Windsurf prompt',
            code: `Goal:
Implement <feature/fix> in this Windsurf workspace while respecting the migrated ClaudeKit setup.

Instruction sources:
- Read README.md and nearest AGENTS.md first.
- Use .windsurf/rules as active project policy.
- If a relevant .windsurf/skills/<name>/SKILL.md exists, follow it.
- If a matching .windsurf/workflows/<name>.md exists, treat it as the runbook.
- Treat .claude/ or upstream ClaudeKit files as source material only; do not edit them unless I ask for migration changes.

Scope:
- Read first: <files/directories/docs>
- Allowed to edit: <files/directories>
- Do not touch: <files/directories/behavior>

Plan:
First inspect the repo and propose a short plan.
Stop for confirmation if the change affects auth, billing, data deletion, schema, secrets, hooks, or deployment.

Verification:
- Run: <npm test / npm run build / pytest / go test ./...>
- Also check the relevant Windsurf rule/workflow expectations.

Final response:
Summarize changed files, ClaudeKit/Windsurf instructions used, verification output, and remaining risks.`,
          },
          {
            label: 'Debug mode',
            title: 'Vòng root-cause cho lỗi thật',
            body:
              'Dùng khi có error, log, test fail, hoặc regression. Cascade cần reproduce, trace, patch, rồi chứng minh fix thay vì đoán.',
            items: ['Paste đúng error và command.', 'Chỉ point file nghi ngờ nếu bạn biết.', 'Yêu cầu bằng chứng fail-before, pass-after.'],
            codeLabel: 'debug prompt',
            code: `I need root-cause debugging, not a speculative fix.

Failure:
- Command: <exact command>
- Error/log: <paste exact output>
- Expected behavior: <what should happen>
- Recent change, if known: <commit/file/session>

Please:
1. Reproduce or inspect the failure path.
2. Identify the smallest root cause with file references.
3. Propose the minimal fix.
4. Apply it only after explaining the plan.
5. Run the same command again and report the result.

Do not refactor unrelated code.`,
          },
          {
            label: 'Worktree mode',
            title: 'Thử nghiệm rủi ro trong workspace riêng',
            body:
              'Dùng Worktree mode từ đầu Cascade session cho migration, refactor rộng, hoặc nhiều hướng thử song song. Ghi setup rõ vì file env untracked không tự copy.',
            items: ['Bật trước message đầu tiên.', 'Dùng post-setup hook cho env/install nếu cần.', 'Chỉ merge sau test và review diff.'],
            codeLabel: 'worktree prompt',
            code: `Work in a Windsurf worktree for this experiment.

Objective:
Explore <migration/refactor/architecture option> without changing the main workspace.

Setup assumptions:
- If dependencies are missing, run <install command>.
- If env is missing, stop and tell me which files/vars are needed.

Deliverable:
- One recommended implementation path.
- Files changed in the worktree.
- Commands run and results.
- Clear merge/no-merge recommendation.`,
          },
          {
            label: 'Ship loop',
            title: 'Checklist từ feature tới deploy',
            body:
              'Luồng thực tế nên là: build với Cascade, review diff, commit, push đúng branch, rồi để CI/deploy automation chứng minh release.',
            items: ['Tách feature lớn thành từng phase review được.', 'Chạy build/test trước commit.', 'Dùng branch-based environment để review staging.'],
            codeLabel: 'release prompt',
            code: `Prepare this change for review.

Checklist:
1. Inspect the diff and flag surprising files.
2. Run <lint>, <typecheck>, and <test/build>.
3. Check package/dependency changes.
4. Draft a concise commit message.
5. Draft PR notes with:
   - What changed
   - How verified
   - Rollback notes
   - Follow-up risks

Do not push or deploy unless I explicitly ask.`,
          },
        ],
      },
      checklistTitle: 'Checklist prompt Cascade tốt',
      checklist: ['Goal', 'Scope', 'Constraints', 'Lệnh verify', 'Kỳ vọng rollback'],
    },
    customization: {
      pageTitle: 'Deep Dive Windsurf Customization',
      pageDescription:
        'Hiểu Rules, AGENTS.md, Memories, Workflows, Skills, Hooks, và cách chúng phối hợp trong Windsurf IDE.',
      hero: {
        kicker: 'Windsurf deep dive',
        title: 'Customize hành vi bằng đúng lớp persistence',
        body:
          'Windsurf có nhiều bề mặt instruction. Phần khó là biết lớp nào sở hữu behavior, context, procedure, hoặc automation.',
        badge: 'Instruction system',
      },
      mapTitle: 'Mỗi lớp một nhiệm vụ',
      mapIntro:
        'Tránh nhét cùng một instruction vào mọi nơi. Policy bền vững, memory local, slash procedure, task bundle, và hook automation đều có job khác nhau.',
      sections: [
        {
          title: 'Rules: hành vi bền vững',
          body:
            'Rules là nơi tự nhiên cho project/team instructions: coding standard, workflow expectation, safety boundary, và convention riêng của repo.',
          points: ['Commit project rules khi cả team cần dùng.', 'Giữ rule ngắn và kiểm chứng được.', 'Dùng directory-scoped rules cho boundary theo ownership.'],
        },
        {
          title: 'AGENTS.md: context theo thư mục',
          body:
            'AGENTS.md để instruction nằm gần code mà nó quản lý. Trong Windsurf, nó đi vào rules system, nên hãy xem như local operating context.',
          points: ['Đặt instruction của package gần package đó.', 'Đừng nhét global guidance vào leaf folder.', 'Dùng cho ownership, test command, và architectural constraint.'],
        },
        {
          title: 'Memories: recall local riêng tư',
          body:
            'Memories là context local Windsurf có thể tạo và dùng lại. Nó hữu ích cho thói quen cá nhân, nhưng không thay thế docs đã commit.',
          points: ['Đừng dựa vào memories cho behavior quan trọng của team.', 'Review memory cũ khi agent hành xử lạ.', 'Cẩn thận với dữ liệu nhạy cảm trong local storage.'],
        },
        {
          title: 'Workflows và Skills: quy trình tái sử dụng',
          body:
            'Workflows là slash-command procedure gọi thủ công. Skills là task bundle lớn hơn, có file hỗ trợ. Dùng khi cùng một job lặp lại.',
          points: ['Dùng workflows cho recipe ngắn.', 'Dùng skills khi script, template, hoặc reference giúp task đáng tin hơn.', 'Ghi rõ output và cách verify.'],
        },
        {
          title: 'Hooks: automation quanh action',
          body:
            'Hooks chạy trước/sau các action của Cascade như read, write, terminal command, MCP call, prompt, response, và worktree setup.',
          points: ['Dùng pre-hooks cho guardrail và privacy block.', 'Dùng post-hooks cho format, index, hoặc notification.', 'Document exit behavior để lý do block dễ hiểu.'],
        },
      ],
      practical: {
        kicker: 'Setup tham khảo',
        title: 'Layout Windsurf workspace thực dụng',
        intro:
          'Bắt đầu bằng instruction system nhỏ nhưng commit được: shared policy trong rules, ownership gần code trong AGENTS.md, procedure lặp lại trong workflows, bundle lớn trong skills, và check tự động trong hooks.',
        blocks: [
          {
            label: 'Folder layout',
            title: 'Cấu trúc `.windsurf` tối thiểu nhưng hữu ích',
            body:
              'Layout này đủ cho team dùng chung mà không biến repo thành bãi instruction. Chỉ thêm file khi behavior thật sự được dùng lại.',
            items: ['Commit rules, workflows, skills, và workspace hooks dùng chung.', 'Không commit memories cá nhân.', 'Đặt AGENTS.md gần code nó quản lý.'],
            codeLabel: 'workspace layout',
            code: `.windsurf/
  rules/
    project-style.md
    safety-boundaries.md
  workflows/
    review-diff.md
    release-check.md
  skills/
    api-contract-audit/
      SKILL.md
      references/
        api-style.md
  hooks.json
AGENTS.md
packages/
  web/
    AGENTS.md`,
          },
          {
            label: 'Rule file',
            title: 'Project rule ngắn và kiểm chứng được',
            body:
              'Rules hiệu quả khi ngắn, testable, và bám vào command thật của repo. Tránh instruction kiểu tính cách chung chung.',
            items: ['Ghi convention và command.', 'Thêm stop condition cho việc rủi ro.', 'Link tới source docs thay vì copy mọi thứ.'],
            codeLabel: '.windsurf/rules/project-style.md',
            code: `---
trigger: glob
description: Project coding and verification rules
globs:
  - "src/**/*.{ts,tsx,astro}"
---

- Read README.md and the nearest AGENTS.md before editing.
- Follow existing Astro and Tailwind patterns before adding abstractions.
- Do not change unrelated copy, routes, or generated files.
- Before final response, run:
  - npm run build
  - git diff --check
- Stop and ask before touching auth, payment, analytics, secrets, or deployment config.`,
          },
          {
            label: 'Workflow file',
            title: 'Slash workflow cho review lặp lại',
            body:
              'Dùng workflows cho procedure do con người chủ động gọi. Nó nhẹ hơn skills và rất hợp cho review, release, hoặc checklist migration.',
            items: ['Giữ command tập trung.', 'Nêu rõ output format.', 'Nói Cascade khi nào phải dừng.'],
            codeLabel: '.windsurf/workflows/review-diff.md',
            code: `# Review current diff

Use when I ask for "/review-diff".

Steps:
1. Inspect git status and changed files.
2. Read only the changed files and nearby callsites.
3. Report bugs, regressions, missing tests, and risky assumptions first.
4. Include file references and exact verification gaps.
5. Do not edit files unless I explicitly ask for fixes.

Output:
- Findings ordered by severity.
- Open questions.
- Verification already run or still needed.`,
          },
          {
            label: 'Hook config',
            title: 'Guardrail quanh write và command',
            body:
              'Hooks dành cho policy tự động. Dùng pre-hooks để block action nguy hiểm; dùng post-hooks cho format, index, notification, hoặc audit log.',
            items: ['Chỉ dùng exit code 2 khi pre-hook chủ ý block.', 'Giữ hook script deterministic và nhanh.', 'Xem transcript hooks như dữ liệu nhạy cảm.'],
            codeLabel: '.windsurf/hooks.json',
            code: `{
  "hooks": {
    "pre_write_code": [
      {
        "command": "node scripts/windsurf-guard-write.mjs",
        "show_output": true
      }
    ],
    "post_write_code": [
      {
        "command": "npm run format -- --write",
        "show_output": false
      }
    ],
    "pre_run_command": [
      {
        "command": "node scripts/windsurf-guard-command.mjs",
        "show_output": true
      }
    ],
    "post_setup_worktree": [
      {
        "command": "npm install",
        "show_output": true
      }
    ]
  }
}`,
          },
        ],
      },
      checklistTitle: 'Checklist chọn đúng lớp',
      checklist: ['Shared policy -> Rules', 'Context theo folder -> AGENTS.md', 'Recall riêng -> Memories', 'Recipe lặp lại -> Workflow hoặc Skill', 'Guardrail tự động -> Hook'],
    },
    migration: {
      pageTitle: 'Deep Dive Windsurf Migration',
      pageDescription:
        'Map ClaudeKit assets sang Windsurf, nhận diện gap hooks hiện tại, và plan script migrate an toàn hơn.',
      hero: {
        kicker: 'Windsurf deep dive',
        title: 'Core folders đã fit; hooks cần bridge riêng',
        body:
          '`ck migrate -a windsurf` đã khớp hình dạng chính của Windsurf ecosystem. Mảnh còn thiếu là convert ClaudeKit hooks sang Windsurf hook events một cách an toàn.',
        badge: 'ClaudeKit bridge',
      },
      mapTitle: 'Đường đi migration',
      mapIntro:
        'Xem migration như audited copy, không phải move file mù. Dry-run trước, inspect output, rồi bridge phần unsupported bằng script rõ ràng.',
      sections: [
        {
          title: '1. Dry-run migration được hỗ trợ',
          body:
            'Bắt đầu bằng CLI dry run để thấy chính xác asset nào map vào .windsurf trước khi đụng workspace thật.',
          points: ['Chạy `ck migrate -a windsurf --dry-run --yes`.', 'Xác nhận agents, skills, rules, config, và commands vào đúng folder.', 'Giữ dry-run output trong contribution notes.'],
        },
        {
          title: '2. Verify folder mapping',
          body:
            'Mapping hiện tại fit Windsurf IDE: rules, skills, và workflows là destination tự nhiên cho ClaudeKit assets.',
          points: ['Agents và rules -> `.windsurf/rules`.', 'Skills -> `.windsurf/skills`.', 'Commands -> `.windsurf/workflows`.', 'Config hoặc CLAUDE.md -> `.windsurf/rules/rules.md`.'],
        },
        {
          title: '3. Bridge hooks riêng',
          body:
            'ClaudeKit có thể discover hooks, nhưng Windsurf hook migration hiện là gap. Bridge custom nên translate event, command, blocker, và message có chủ ý.',
          points: ['Map hook event name nguồn sang Windsurf Cascade hook events.', 'Giữ blocking semantic cho pre-hooks bằng exit code 2.', 'Generate `.windsurf/hooks.json` kèm migration report.'],
        },
        {
          title: '4. Chỉ contribute upstream sau replay tests',
          body:
            'Trước khi upstream vào claudekit-cli, test bằng fixture nhỏ: không hooks, một pre-command hook, một post-write hook, và mixed unsupported hooks.',
          points: ['Snapshot expected output cho từng fixture.', 'Fail rõ khi hook event mơ hồ.', 'Document limitations trong CLI help và VividKit guide.'],
        },
      ],
      practical: {
        kicker: 'Migration kit',
        title: 'Workflow migrate local an toàn hơn',
        intro:
          'Xem `ck migrate -a windsurf` là base layer đã support, rồi thêm hook bridge riêng có fixture trước khi đề xuất upstream.',
        blocks: [
          {
            label: 'Dry run',
            title: 'Capture phần CLI đã map đúng',
            body:
              'Command hiện fit core Windsurf folders. Giữ dry-run output để upstream PR chứng minh phần nào đã ổn và phần nào còn unsupported.',
            items: ['Chạy trong disposable copy hoặc clean worktree.', 'Review từng path được generate.', 'Không silently drop hook gap.'],
            codeLabel: 'terminal',
            code: `ck migrate -a windsurf --dry-run --yes | tee windsurf-migrate-dry-run.log

# After review, run the real migration in a clean branch/worktree:
ck migrate -a windsurf --yes

# Inspect generated files:
find .windsurf -maxdepth 3 -type f | sort
git diff -- .windsurf AGENTS.md`,
          },
          {
            label: 'Hook bridge',
            title: 'Event mapping cho custom script',
            body:
              'ClaudeKit hooks và Windsurf hooks giống nhau về ý tưởng, nhưng không trùng hoàn toàn. Script migrate chỉ nên map event chắc chắn và report mọi case unsupported.',
            items: ['Map pre-command sang `pre_run_command`.', 'Map post-write style hooks sang `post_write_code`.', 'Chỉ giữ blocking behavior cho pre-hooks.'],
            codeLabel: 'migration mapping sketch',
            code: `const eventMap = {
  PreToolUse_Bash: "pre_run_command",
  PostToolUse_Bash: "post_run_command",
  PreToolUse_Read: "pre_read_code",
  PostToolUse_Read: "post_read_code",
  PreToolUse_Edit: "pre_write_code",
  PostToolUse_Edit: "post_write_code",
  UserPromptSubmit: "pre_user_prompt",
  Stop: "post_cascade_response"
};

// Unknown events should be written to unsupported-hooks.md,
// not guessed into a Windsurf event.`,
          },
          {
            label: 'Fixture tests',
            title: 'Fixture tối thiểu trước upstream PR',
            body:
              'Đừng contribute hook migration trước khi replay tests chứng minh `.windsurf/hooks.json` generate đúng cho case thường gặp và edge case.',
            items: ['Không có hooks: output rỗng vẫn valid.', 'Một blocking pre-command hook.', 'Mixed supported và unsupported hooks.'],
            codeLabel: 'fixture layout',
            code: `fixtures/
  no-hooks/
    input/.claude/settings.json
    expected/.windsurf/hooks.json
  pre-command-block/
    input/.claude/settings.json
    input/.claude/hooks/block-dangerous-command.sh
    expected/.windsurf/hooks.json
  mixed-events/
    input/.claude/settings.json
    expected/.windsurf/hooks.json
    expected/unsupported-hooks.md`,
          },
          {
            label: 'PR notes',
            title: 'Cần document gì cho claudekit-cli',
            body:
              'Upstream change nên thật dễ review: source format, destination format, unsupported event handling, và safety semantics.',
            items: ['Giải thích vì sao core migration đã fit.', 'Gọi hooks là phần mới được support.', 'Document exit-code và transcript privacy caveat.'],
            codeLabel: 'upstream checklist',
            code: `Upstream PR checklist:
- Add Windsurf hook provider support.
- Add event mapping table in docs/help output.
- Add fixture tests for supported and unsupported hooks.
- Preserve pre-hook blocking with exit code 2.
- Never migrate transcript-writing hooks without a privacy warning.
- Update VividKit guide after release.`,
          },
        ],
      },
      checklistTitle: 'Checklist contribution migration',
      checklist: ['Dry-run output', 'Fixture coverage', 'Hook event matrix', 'Unsupported hook report', 'Upstream PR notes'],
    },
  },
} satisfies Record<Language, Record<WindsurfDeepDiveTopic, any>>;

export const accentClasses: Record<Accent, { soft: string; border: string; text: string; dot: string }> = {
  teal: {
    soft: 'bg-teal-50 dark:bg-teal-950/25',
    border: 'border-teal-200 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-300',
    dot: 'bg-teal-500',
  },
  sky: {
    soft: 'bg-sky-50 dark:bg-sky-950/25',
    border: 'border-sky-200 dark:border-sky-800/60',
    text: 'text-sky-700 dark:text-sky-300',
    dot: 'bg-sky-500',
  },
  amber: {
    soft: 'bg-amber-50 dark:bg-amber-950/25',
    border: 'border-amber-200 dark:border-amber-800/60',
    text: 'text-amber-700 dark:text-amber-300',
    dot: 'bg-amber-500',
  },
  rose: {
    soft: 'bg-rose-50 dark:bg-rose-950/25',
    border: 'border-rose-200 dark:border-rose-800/60',
    text: 'text-rose-700 dark:text-rose-300',
    dot: 'bg-rose-500',
  },
  slate: {
    soft: 'bg-slate-50 dark:bg-slate-900/50',
    border: 'border-slate-200 dark:border-slate-800',
    text: 'text-slate-700 dark:text-slate-300',
    dot: 'bg-slate-500',
  },
};
