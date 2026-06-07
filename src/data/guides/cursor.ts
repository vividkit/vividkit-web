export type CursorGuideTabId =
  | 'cursor'
  | 'cursor-subagents'
  | 'cursor-hooks'
  | 'cursor-commands';

export type CursorTopicSlug = 'subagents' | 'hooks' | 'commands';

export type CursorTrack = 'orchestration' | 'control' | 'migration';

export type CursorLocaleText = {
  en: string;
  vi: string;
};

export type CursorTopic = {
  id: CursorGuideTabId;
  slug: CursorTopicSlug;
  track: CursorTrack;
  title: CursorLocaleText;
  desc: CursorLocaleText;
  navLabel: CursorLocaleText;
  kicker: CursorLocaleText;
};

export type CursorSource = {
  label: string;
  url: string;
  note: CursorLocaleText;
};

export type CursorArticleBlock =
  | {
      type: 'playbook';
      title: CursorLocaleText;
      items: {
        step: CursorLocaleText;
        action: CursorLocaleText;
        file: string;
        verify: CursorLocaleText;
      }[];
    }
  | {
      type: 'paragraph';
      text: CursorLocaleText;
    }
  | {
      type: 'bullets';
      items: CursorLocaleText[];
    }
  | {
      type: 'schema';
      title: CursorLocaleText;
      rows: {
        key: string;
        value: CursorLocaleText;
      }[];
    }
  | {
      type: 'code';
      title: CursorLocaleText;
      language: string;
      code: string;
    }
  | {
      type: 'callout';
      title: CursorLocaleText;
      text: CursorLocaleText;
      tone: 'info' | 'warning' | 'success';
    };

export type CursorArticle = {
  slug: CursorTopicSlug;
  title: CursorLocaleText;
  summary: CursorLocaleText;
  kicker: CursorLocaleText;
  blocks: CursorArticleBlock[];
  sources: CursorSource[];
};

export const cursorTrackMeta: Record<
  CursorTrack,
  {
    badge: CursorLocaleText;
    borderAccent: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
  }
> = {
  orchestration: {
    badge: { en: 'Orchestration', vi: 'Điều phối' },
    borderAccent: 'border-l-sky-500',
    badgeBg: 'bg-sky-50 dark:bg-sky-950/50',
    badgeText: 'text-sky-700 dark:text-sky-300',
    iconBg: 'bg-sky-500',
  },
  control: {
    badge: { en: 'Control', vi: 'Kiểm soát' },
    borderAccent: 'border-l-amber-500',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/50',
    badgeText: 'text-amber-700 dark:text-amber-300',
    iconBg: 'bg-amber-500',
  },
  migration: {
    badge: { en: 'Migration', vi: 'Migration' },
    borderAccent: 'border-l-emerald-500',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    iconBg: 'bg-emerald-500',
  },
};

export const cursorTopics: CursorTopic[] = [
  {
    id: 'cursor-subagents',
    slug: 'subagents',
    track: 'orchestration',
    title: {
      en: 'Subagents: delegate research, review, and parallel work',
      vi: 'Subagents: delegate research, review, và việc chạy song song',
    },
    desc: {
      en: 'Create `.cursor/agents/*.md`, write descriptions the parent can route to, and verify the agent is visible before relying on it.',
      vi: 'Tạo `.cursor/agents/*.md`, viết description để parent route đúng, rồi verify agent hiện trong Cursor trước khi dùng thật.',
    },
    navLabel: { en: 'Subagents', vi: 'Subagents' },
    kicker: { en: 'Agent filesystem schema', vi: 'Schema filesystem cho agent' },
  },
  {
    id: 'cursor-hooks',
    slug: 'hooks',
    track: 'control',
    title: {
      en: 'Hooks: guard shell, reads, edits, and subagent runs',
      vi: 'Hooks: guard shell, file reads, edits, và subagent runs',
    },
    desc: {
      en: 'Use `.cursor/hooks.json` for project policy, keep scripts under `.cursor/hooks/`, and test one hook at a time.',
      vi: 'Dùng `.cursor/hooks.json` cho policy cấp project, đặt script trong `.cursor/hooks/`, và test từng hook một.',
    },
    navLabel: { en: 'Hooks', vi: 'Hooks' },
    kicker: { en: 'Control plane schema', vi: 'Schema control plane' },
  },
  {
    id: 'cursor-commands',
    slug: 'commands',
    track: 'migration',
    title: {
      en: 'Commands, Skills, and CLI: what to migrate where',
      vi: 'Commands, Skills, và CLI: migrate cái gì vào đâu',
    },
    desc: {
      en: 'Map slash commands to skills, CLI behavior to `cli-config.json`, project permissions to `.cursor/cli.json`, and note what `ck migrate` misses.',
      vi: 'Map slash commands sang skills, hành vi CLI sang `cli-config.json`, permissions cấp project sang `.cursor/cli.json`, và biết `ck migrate` còn thiếu gì.',
    },
    navLabel: { en: 'Commands and CLI', vi: 'Commands và CLI' },
    kicker: { en: 'CLI and migration map', vi: 'Bản đồ CLI và migration' },
  },
];

export const cursorSources: CursorSource[] = [
  {
    label: 'Cursor Rules',
    url: 'https://cursor.com/docs/rules',
    note: {
      en: 'Project rules, Team/User rules, AGENTS.md, and `.cursor/rules` frontmatter.',
      vi: 'Project rules, Team/User rules, AGENTS.md, và frontmatter trong `.cursor/rules`.',
    },
  },
  {
    label: 'Cursor Skills',
    url: 'https://cursor.com/docs/skills',
    note: {
      en: 'Agent Skills directories, `SKILL.md` schema, `paths`, and official slash-command-to-skill migration.',
      vi: 'Thư mục Agent Skills, schema `SKILL.md`, `paths`, và migration slash command sang skill theo docs chính thức.',
    },
  },
  {
    label: 'Cursor Subagents',
    url: 'https://cursor.com/docs/subagents',
    note: {
      en: '`.cursor/agents`, compatibility paths, fields, background mode, and built-in subagents.',
      vi: '`.cursor/agents`, compatibility paths, fields, background mode, và built-in subagents.',
    },
  },
  {
    label: 'Cursor Hooks',
    url: 'https://cursor.com/docs/hooks',
    note: {
      en: '`.cursor/hooks.json`, hook events, input/output contracts, matchers, and priority order.',
      vi: '`.cursor/hooks.json`, hook events, contract input/output, matchers, và thứ tự ưu tiên.',
    },
  },
  {
    label: 'Cursor CLI',
    url: 'https://cursor.com/docs/cli/overview',
    note: {
      en: '`agent`, modes, print mode, sessions, sandbox controls, Cloud Agent handoff.',
      vi: '`agent`, modes, print mode, sessions, sandbox controls, Cloud Agent handoff.',
    },
  },
];

export const cursorGuideOutcomes = [
  {
    label: { en: 'Pick the right file', vi: 'Chọn đúng file' },
    text: {
      en: 'Rules shape behavior, skills package repeatable workflows, subagents split work, hooks enforce policy, CLI config controls terminal runs.',
      vi: 'Rules định hình hành vi, skills đóng gói workflow lặp lại, subagents tách việc, hooks enforce policy, CLI config điều khiển terminal runs.',
    },
  },
  {
    label: { en: 'Install only what helps', vi: 'Chỉ cài thứ có ích' },
    text: {
      en: 'Start with rules + one command-like skill. Add subagents or hooks only when a real workflow needs isolation or guardrails.',
      vi: 'Bắt đầu bằng rules + một skill giống command. Chỉ thêm subagents hoặc hooks khi workflow thật cần tách context hoặc guardrails.',
    },
  },
  {
    label: { en: 'Verify before scaling', vi: 'Verify trước khi scale' },
    text: {
      en: 'After every config file, trigger it once in Cursor Agent or agent -p, then keep the smallest working version in git.',
      vi: 'Sau mỗi file config, trigger thử trong Cursor Agent hoặc agent -p, rồi commit bản nhỏ nhất đã chạy được.',
    },
  },
];

export const cursorConfigChoices = [
  {
    goal: { en: 'Make Agent follow repo rules', vi: 'Bắt Agent theo rule của repo' },
    file: '.cursor/rules/*.mdc',
    useWhen: {
      en: 'Coding standards, allowed commands, review style, project architecture notes.',
      vi: 'Coding standards, lệnh được phép, style review, ghi chú architecture của project.',
    },
    verify: { en: 'Ask Agent to explain the active rule.', vi: 'Hỏi Agent giải thích rule đang active.' },
  },
  {
    goal: { en: 'Create a reusable workflow', vi: 'Tạo workflow tái sử dụng' },
    file: '.cursor/skills/<name>/SKILL.md',
    useWhen: {
      en: 'A prompt recipe should be discoverable, versioned, and explicitly invoked like a command.',
      vi: 'Một prompt recipe cần dễ tìm, version được, và gọi rõ như command.',
    },
    verify: { en: 'Invoke the skill by name and check the first step.', vi: 'Gọi skill theo tên và kiểm tra step đầu tiên.' },
  },
  {
    goal: { en: 'Delegate noisy work', vi: 'Delegate việc nhiều context' },
    file: '.cursor/agents/<name>.md',
    useWhen: {
      en: 'Research, browser checks, code review, long verification, or any task that would pollute the main thread.',
      vi: 'Research, browser check, code review, verify dài, hoặc task dễ làm bẩn thread chính.',
    },
    verify: { en: 'Ask Agent to use the subagent on a tiny task.', vi: 'Bảo Agent dùng subagent cho một task nhỏ.' },
  },
  {
    goal: { en: 'Guard risky actions', vi: 'Guard hành động rủi ro' },
    file: '.cursor/hooks.json + .cursor/hooks/*',
    useWhen: {
      en: 'Network, shell, secrets, generated files, audit logging, or team policy.',
      vi: 'Network, shell, secrets, generated files, audit logging, hoặc policy team.',
    },
    verify: { en: 'Run the exact matching action and inspect hook output.', vi: 'Chạy đúng action match hook và xem output.' },
  },
  {
    goal: { en: 'Run Cursor from terminal or CI', vi: 'Chạy Cursor từ terminal hoặc CI' },
    file: '~/.cursor/cli-config.json / .cursor/cli.json',
    useWhen: {
      en: 'Headless runs, print mode, worktrees, project permissions, scripts, or repeatable local automation.',
      vi: 'Headless runs, print mode, worktrees, project permissions, scripts, hoặc local automation lặp lại.',
    },
    verify: { en: 'Run agent -p against a read-only prompt first.', vi: 'Chạy agent -p với prompt read-only trước.' },
  },
];

export const cursorStarterChecklist = [
  {
    step: '01',
    title: { en: 'Commit repo instructions first', vi: 'Commit repo instructions trước' },
    text: {
      en: 'Write one .cursor/rules/project.mdc that says what the agent must always know about this repo.',
      vi: 'Viết một .cursor/rules/project.mdc nói rõ agent luôn phải biết gì về repo này.',
    },
  },
  {
    step: '02',
    title: { en: 'Convert one repeated prompt into a skill', vi: 'Convert một prompt lặp lại thành skill' },
    text: {
      en: 'Use disable-model-invocation: true when it should behave like an explicit slash command.',
      vi: 'Dùng disable-model-invocation: true khi muốn nó hoạt động như slash command gọi rõ.',
    },
  },
  {
    step: '03',
    title: { en: 'Add subagents only for separated responsibility', vi: 'Chỉ thêm subagent cho trách nhiệm tách biệt' },
    text: {
      en: 'Good first agents: researcher, reviewer, verifier. Keep descriptions routing-friendly.',
      vi: 'Agent đầu tiên nên là researcher, reviewer, verifier. Description phải dễ route.',
    },
  },
  {
    step: '04',
    title: { en: 'Hook only one risk at a time', vi: 'Hook từng rủi ro một' },
    text: {
      en: 'Start with shell/network approval or generated-file cleanup. Avoid a large hook matrix before the first green run.',
      vi: 'Bắt đầu với approve shell/network hoặc cleanup generated file. Đừng làm hook matrix lớn trước khi có run xanh đầu tiên.',
    },
  },
];

export const cursorStarterTree = `project/
├── AGENTS.md
├── .cursor/
│   ├── rules/
│   │   └── project.mdc
│   ├── skills/
│   │   └── plan/SKILL.md
│   ├── agents/
│   │   ├── researcher.md
│   │   └── verifier.md
│   ├── hooks.json
│   ├── hooks/
│   │   ├── approve-network.sh
│   │   └── format-after-edit.sh
│   └── cli.json
└── .agents/
    └── skills/
        └── shared-workflow/SKILL.md

~/.cursor/
├── cli-config.json
├── skills/**/SKILL.md
├── agents/*.md
└── hooks.json`;

export const cursorMigrationVerdict = [
  {
    label: { en: 'Fits now', vi: 'Đang fit' },
    text: {
      en: '`ck migrate -a cursor` is useful for rules and skills because those map to Cursor-supported project files.',
      vi: '`ck migrate -a cursor` hữu ích cho rules và skills vì chúng map vào file project Cursor support.',
    },
  },
  {
    label: { en: 'Needs manual follow-up', vi: 'Cần làm tay tiếp' },
    text: {
      en: 'Subagents should become `.cursor/agents/*.md`; hooks need `.cursor/hooks.json`; command-like flows should become skills with disable-model-invocation: true.',
      vi: 'Subagents nên thành `.cursor/agents/*.md`; hooks cần `.cursor/hooks.json`; flow giống command nên thành skill với disable-model-invocation: true.',
    },
  },
  {
    label: { en: 'Recommended sequence', vi: 'Thứ tự nên làm' },
    text: {
      en: 'Run migration dry-run, review generated rules/skills, then add agents/hooks manually and verify in Cursor.',
      vi: 'Chạy migration dry-run, review rules/skills sinh ra, rồi thêm agents/hooks thủ công và verify trong Cursor.',
    },
  },
];

export const cursorArticles: Record<CursorTopicSlug, CursorArticle> = {
  subagents: {
    slug: 'subagents',
    title: cursorTopics[0].title,
    summary: {
      en: 'Use subagents when the main Agent should not spend its context on research, browser checks, review, or long verification. Define them as markdown files, give each a routing-friendly description, then test with a tiny delegated task.',
      vi: 'Dùng subagents khi Agent chính không nên tốn context cho research, browser check, review, hoặc verify dài. Định nghĩa bằng markdown, viết description dễ route, rồi test bằng một task delegate nhỏ.',
    },
    kicker: cursorTopics[0].kicker,
    sources: [
      cursorSources[2],
      {
        label: 'Cursor CLI overview',
        url: 'https://cursor.com/docs/cli/overview',
        note: {
          en: 'Confirms subagents work across editor, CLI, and Cloud Agents through the shared Agent surface.',
          vi: 'Xác nhận subagents dùng được qua editor, CLI, và Cloud Agents trên cùng Agent surface.',
        },
      },
    ],
    blocks: [
      {
        type: 'playbook',
        title: { en: 'Build the first useful subagent', vi: 'Tạo subagent đầu tiên thật sự dùng được' },
        items: [
          {
            step: { en: '1. Pick one job', vi: '1. Chọn một việc' },
            action: {
              en: 'Start with a role the parent Agent should delegate often: verifier, researcher, reviewer, or browser-checker.',
              vi: 'Bắt đầu bằng một role parent Agent nên delegate thường xuyên: verifier, researcher, reviewer, hoặc browser-checker.',
            },
            file: '.cursor/agents/verifier.md',
            verify: {
              en: 'If you cannot name the exact output, do not create the agent yet.',
              vi: 'Nếu chưa gọi tên được output cụ thể, chưa nên tạo agent.',
            },
          },
          {
            step: { en: '2. Write the route', vi: '2. Viết route' },
            action: {
              en: 'Make `description` read like a trigger: “Use after implementation to verify tests and UI.”',
              vi: 'Viết `description` như trigger: “Use after implementation to verify tests and UI.”',
            },
            file: 'description',
            verify: {
              en: 'Ask Cursor when it would use this agent; fix wording if the answer is vague.',
              vi: 'Hỏi Cursor khi nào nó dùng agent này; nếu trả lời mơ hồ thì sửa wording.',
            },
          },
          {
            step: { en: '3. Lock permissions', vi: '3. Khóa permission' },
            action: {
              en: 'Use `readonly: true` for research, review, and verification. Disable it only for agents expected to edit files.',
              vi: 'Dùng `readonly: true` cho research, review, và verification. Chỉ tắt khi agent đó được phép edit file.',
            },
            file: 'readonly: true',
            verify: {
              en: 'Run a tiny delegated task and confirm it reports instead of editing.',
              vi: 'Chạy một task delegate nhỏ và confirm agent report thay vì edit.',
            },
          },
          {
            step: { en: '4. Test routing', vi: '4. Test routing' },
            action: {
              en: 'Ask the parent Agent to use the subagent on one small file or question before adding more agents.',
              vi: 'Bảo parent Agent dùng subagent cho một file hoặc câu hỏi nhỏ trước khi thêm agent khác.',
            },
            file: 'Cursor Agent chat',
            verify: {
              en: 'The final answer should include what the subagent checked and what remains risky.',
              vi: 'Final answer nên nói rõ subagent đã check gì và còn rủi ro gì.',
            },
          },
        ],
      },
      {
        type: 'schema',
        title: { en: 'Use / avoid', vi: 'Nên dùng / không nên dùng' },
        rows: [
          {
            key: 'Use subagent',
            value: { en: 'Research, browser checks, code review, long verification, migration audits, or parallel work with a clear return value.', vi: 'Research, browser check, code review, verify dài, audit migration, hoặc việc chạy song song có output rõ.' },
          },
          {
            key: 'Use rule instead',
            value: { en: 'Always-on repo behavior such as coding style, architecture notes, command policy, or review expectations.', vi: 'Hành vi luôn áp dụng cho repo như coding style, architecture note, command policy, hoặc review expectation.' },
          },
          {
            key: 'Use skill instead',
            value: { en: 'A repeatable prompt recipe the user should invoke directly, like planning, release notes, or audit workflow.', vi: 'Một prompt recipe lặp lại mà user nên gọi trực tiếp, như planning, release notes, hoặc audit workflow.' },
          },
        ],
      },
      {
        type: 'schema',
        title: { en: 'Native filesystem schema', vi: 'Schema filesystem native' },
        rows: [
          {
            key: '.cursor/agents/*.md',
            value: { en: 'Project subagents for the current repository.', vi: 'Subagents cấp project cho repo hiện tại.' },
          },
          {
            key: '~/.cursor/agents/*.md',
            value: { en: 'User subagents available across projects.', vi: 'Subagents cấp user, dùng được ở nhiều project.' },
          },
          {
            key: '.claude/agents, .codex/agents',
            value: { en: 'Compatibility locations. `.cursor/` wins on name conflicts.', vi: 'Vị trí compatibility. Khi trùng tên, `.cursor/` được ưu tiên.' },
          },
          {
            key: '~/.cursor/subagents/',
            value: { en: 'Background subagent output/state files.', vi: 'Nơi background subagents ghi output/state.' },
          },
        ],
      },
      {
        type: 'code',
        title: { en: 'Copyable verifier subagent', vi: 'Verifier subagent copy được' },
        language: 'markdown',
        code: `---
name: verifier
description: Use after implementation to inspect changed files, run focused checks, and report what is still risky.
model: inherit
readonly: true
is_background: false
---

You verify that claimed work is actually complete. Do not modify files.

When invoked:
1. Inspect changed files and user-facing behavior.
2. Run the smallest useful build, typecheck, test, or browser check.
3. Report passed checks, incomplete work, and remaining risks.
4. Include exact commands and paths in the final summary.`,
      },
      {
        type: 'schema',
        title: { en: 'Frontmatter fields', vi: 'Các field frontmatter' },
        rows: [
          { key: 'name', value: { en: 'Optional; defaults from filename. Use lowercase letters and hyphens.', vi: 'Không bắt buộc; mặc định lấy từ tên file. Nên dùng chữ thường và dấu gạch ngang.' } },
          { key: 'description', value: { en: 'Optional but important. Agent uses it to decide when to delegate.', vi: 'Không bắt buộc nhưng rất quan trọng. Agent dùng nó để quyết định khi nào delegate.' } },
          { key: 'model', value: { en: '`inherit` or a specific model ID, subject to plan/admin availability.', vi: '`inherit` hoặc model ID cụ thể, tùy plan/admin có cho phép không.' } },
          { key: 'readonly', value: { en: 'When true, restricts edits and state-changing commands.', vi: 'Khi true, hạn chế edit và lệnh thay đổi trạng thái.' } },
          { key: 'is_background', value: { en: 'When true, runs without blocking the parent agent.', vi: 'Khi true, chạy mà không block parent agent.' } },
        ],
      },
      {
        type: 'callout',
        tone: 'success',
        title: { en: 'Verification checklist', vi: 'Checklist verify' },
        text: {
          en: 'After adding an agent, ask Cursor Agent to use it on a small file or question. If routing feels unreliable, fix the `description` before adding more agents.',
          vi: 'Sau khi thêm agent, bảo Cursor Agent dùng nó cho một file hoặc câu hỏi nhỏ. Nếu routing chưa ổn, sửa `description` trước khi thêm agent mới.',
        },
      },
    ],
  },
  hooks: {
    slug: 'hooks',
    title: cursorTopics[1].title,
    summary: {
      en: 'Use hooks when behavior must be enforced outside the model: block risky shell commands, prevent sensitive reads, format after edits, log activity, or load workspace plugins.',
      vi: 'Dùng hooks khi hành vi phải được enforce bên ngoài model: chặn shell rủi ro, ngăn đọc file nhạy cảm, format sau edit, log activity, hoặc load workspace plugins.',
    },
    kicker: cursorTopics[1].kicker,
    sources: [cursorSources[3]],
    blocks: [
      {
        type: 'playbook',
        title: { en: 'Ship one hook without breaking the team', vi: 'Ship một hook mà không làm vỡ workflow team' },
        items: [
          {
            step: { en: '1. Pick one risk', vi: '1. Chọn một rủi ro' },
            action: {
              en: 'Start with a risk that has an obvious trigger: network command, secret read, generated file edit, or subagent spawn.',
              vi: 'Bắt đầu bằng rủi ro có trigger rõ: network command, đọc secret, edit generated file, hoặc spawn subagent.',
            },
            file: '.cursor/hooks.json',
            verify: {
              en: 'Write the exact action that should trigger the hook before writing code.',
              vi: 'Viết trước action chính xác sẽ trigger hook rồi mới code.',
            },
          },
          {
            step: { en: '2. Keep scope local', vi: '2. Giữ scope local' },
            action: {
              en: 'Put project hooks in `.cursor/hooks.json` and scripts in `.cursor/hooks/` so the policy travels with the repo.',
              vi: 'Đặt project hooks trong `.cursor/hooks.json` và script trong `.cursor/hooks/` để policy đi cùng repo.',
            },
            file: '.cursor/hooks/*',
            verify: {
              en: 'Run the script once from project root before wiring it to Cursor.',
              vi: 'Chạy script một lần từ project root trước khi nối vào Cursor.',
            },
          },
          {
            step: { en: '3. Start visible', vi: '3. Bắt đầu dễ thấy' },
            action: {
              en: 'During rollout, return clear warnings or ask decisions. Use fail-closed only after the matcher is proven.',
              vi: 'Khi rollout, trả warning rõ hoặc ask decision. Chỉ fail-closed sau khi matcher đã chứng minh ổn.',
            },
            file: 'failClosed',
            verify: {
              en: 'Trigger one allowed case and one blocked case; both should be understandable.',
              vi: 'Trigger một case được phép và một case bị chặn; cả hai phải dễ hiểu.',
            },
          },
          {
            step: { en: '4. Remove noise', vi: '4. Dọn noise' },
            action: {
              en: 'Log input/output while developing, then remove debug logs when the hook contract is stable.',
              vi: 'Log input/output khi phát triển, rồi bỏ debug log khi hook contract đã ổn định.',
            },
            file: '.cursor/hooks/*.sh',
            verify: {
              en: 'The final hook output should tell the user what happened and what to do next.',
              vi: 'Output cuối nên nói rõ chuyện gì xảy ra và user cần làm gì tiếp.',
            },
          },
        ],
      },
      {
        type: 'schema',
        title: { en: 'Good first hooks', vi: 'Hook đầu tiên nên làm' },
        rows: [
          {
            key: 'beforeShellExecution',
            value: { en: 'Ask before `curl`, `wget`, `nc`, deployment commands, database writes, or scripts that touch production.', vi: 'Ask trước `curl`, `wget`, `nc`, deploy command, database write, hoặc script đụng production.' },
          },
          {
            key: 'beforeReadFile',
            value: { en: 'Block `.env`, private keys, local credentials, payment exports, and customer data unless explicitly approved.', vi: 'Chặn `.env`, private key, local credential, payment export, và customer data trừ khi được approve rõ.' },
          },
          {
            key: 'afterFileEdit',
            value: { en: 'Format only files the hook can safely format. Avoid broad repo rewrites on every edit.', vi: 'Chỉ format file hook có thể format an toàn. Tránh rewrite cả repo sau mỗi edit.' },
          },
        ],
      },
      {
        type: 'schema',
        title: { en: 'Configuration locations and priority', vi: 'Vị trí config và thứ tự ưu tiên' },
        rows: [
          { key: 'Enterprise', value: { en: '`/Library/Application Support/Cursor/hooks.json`, `/etc/cursor/hooks.json`, or `C:\\ProgramData\\Cursor\\hooks.json`.', vi: '`/Library/Application Support/Cursor/hooks.json`, `/etc/cursor/hooks.json`, hoặc `C:\\ProgramData\\Cursor\\hooks.json`.' } },
          { key: 'Team', value: { en: 'Dashboard-distributed Enterprise hooks.', vi: 'Hooks Enterprise phân phối qua dashboard.' } },
          { key: 'Project', value: { en: '`<project>/.cursor/hooks.json`, runs from project root.', vi: '`<project>/.cursor/hooks.json`, chạy từ project root.' } },
          { key: 'User', value: { en: '`~/.cursor/hooks.json`, runs from `~/.cursor/`.', vi: '`~/.cursor/hooks.json`, chạy từ `~/.cursor/`.' } },
          { key: 'Priority', value: { en: 'Enterprise -> Team -> Project -> User.', vi: 'Enterprise -> Team -> Project -> User.' } },
        ],
      },
      {
        type: 'code',
        title: { en: 'Project hook starter', vi: 'Project hook starter' },
        language: 'json',
        code: `{
  "version": 1,
  "hooks": {
    "beforeShellExecution": [
      {
        "command": ".cursor/hooks/approve-network.sh",
        "matcher": "curl|wget|nc",
        "timeout": 30,
        "failClosed": true
      }
    ],
    "afterFileEdit": [
      { "command": ".cursor/hooks/format.sh" }
    ],
    "subagentStart": [
      {
        "command": ".cursor/hooks/check-subagent.sh",
        "matcher": "explore|generalPurpose"
      }
    ]
  }
}`,
      },
      {
        type: 'code',
        title: { en: 'Minimal approve-network.sh', vi: 'approve-network.sh tối thiểu' },
        language: 'bash',
        code: `#!/usr/bin/env bash
set -euo pipefail

echo "Network command detected. Review target URL before approving."
exit 2`,
      },
      {
        type: 'schema',
        title: { en: 'High-signal hook events', vi: 'Các hook event đáng nhớ' },
        rows: [
          { key: 'preToolUse / postToolUse', value: { en: 'Generic tool lifecycle for Shell, Read, Write, Grep, Task, and MCP tools.', vi: 'Lifecycle chung cho Shell, Read, Write, Grep, Task, và MCP tools.' } },
          { key: 'beforeShellExecution', value: { en: 'Allow, deny, or ask before shell commands run.', vi: 'Allow, deny, hoặc ask trước khi chạy shell command.' } },
          { key: 'beforeReadFile', value: { en: 'Can block sensitive file reads before content enters model context.', vi: 'Có thể chặn đọc file nhạy cảm trước khi content vào model context.' } },
          { key: 'subagentStart / subagentStop', value: { en: 'Control Task/subagent creation and react to subagent completion.', vi: 'Kiểm soát việc tạo Task/subagent và phản ứng khi subagent hoàn tất.' } },
          { key: 'workspaceOpen', value: { en: 'Runs on workspace open and can return plugin paths.', vi: 'Chạy khi mở workspace và có thể trả về plugin paths.' } },
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: { en: 'Path rule that prevents most hook bugs', vi: 'Quy tắc path tránh nhiều lỗi hook' },
        text: {
          en: 'For project hooks, use `.cursor/hooks/script.sh`. `./hooks/script.sh` is for user hooks because user hooks run from `~/.cursor/`.',
          vi: 'Với project hooks, dùng `.cursor/hooks/script.sh`. `./hooks/script.sh` dành cho user hooks vì user hooks chạy từ `~/.cursor/`.',
        },
      },
      {
        type: 'callout',
        tone: 'success',
        title: { en: 'Rollout checklist', vi: 'Checklist rollout' },
        text: {
          en: 'Add one hook, trigger exactly one matching action, inspect the hook response, then decide whether the hook should warn, ask, deny, or modify.',
          vi: 'Thêm một hook, trigger đúng một action match, xem hook response, rồi mới quyết định hook nên warn, ask, deny, hay modify.',
        },
      },
    ],
  },
  commands: {
    slug: 'commands',
    title: cursorTopics[2].title,
    summary: {
      en: 'Treat commands as reusable skills, CLI settings as runtime policy, and `ck migrate -a cursor` as a useful first pass that still needs manual agents/hooks follow-up.',
      vi: 'Hãy xem commands như reusable skills, CLI settings như runtime policy, và `ck migrate -a cursor` như bước đầu hữu ích nhưng vẫn cần bổ sung agents/hooks thủ công.',
    },
    kicker: cursorTopics[2].kicker,
    sources: [
      cursorSources[1],
      cursorSources[4],
      {
        label: 'Cursor CLI parameters',
        url: 'https://cursor.com/docs/cli/reference/parameters',
        note: {
          en: 'Global options, `agent` subcommands, print mode, workspace, worktree, and plugin flags.',
          vi: 'Global options, subcommands của `agent`, print mode, workspace, worktree, và plugin flags.',
        },
      },
      {
        label: 'Cursor CLI configuration',
        url: 'https://cursor.com/docs/cli/reference/configuration',
        note: {
          en: '`~/.cursor/cli-config.json`, project `.cursor/cli.json`, permissions, model, and network settings.',
          vi: '`~/.cursor/cli-config.json`, project `.cursor/cli.json`, permissions, model, và network settings.',
        },
      },
    ],
    blocks: [
      {
        type: 'playbook',
        title: { en: 'Migrate one command safely', vi: 'Migrate một command cho chắc' },
        items: [
          {
            step: { en: '1. Classify it', vi: '1. Phân loại' },
            action: {
              en: 'If it is a reusable prompt workflow, convert it to a skill. If it is runtime permission, put it in CLI config instead.',
              vi: 'Nếu là prompt workflow tái sử dụng, chuyển thành skill. Nếu là runtime permission, đưa vào CLI config.',
            },
            file: '.cursor/skills/<name>/SKILL.md',
            verify: {
              en: 'The command should have a clear trigger and a repeatable output.',
              vi: 'Command phải có trigger rõ và output lặp lại được.',
            },
          },
          {
            step: { en: '2. Preserve explicit use', vi: '2. Giữ cách gọi rõ' },
            action: {
              en: 'Add `disable-model-invocation: true` when the old command should behave like “only run when I ask for it.”',
              vi: 'Thêm `disable-model-invocation: true` khi command cũ chỉ nên chạy lúc user gọi rõ.',
            },
            file: 'SKILL.md frontmatter',
            verify: {
              en: 'A vague chat message should not invoke the skill automatically.',
              vi: 'Một chat message mơ hồ không nên tự invoke skill.',
            },
          },
          {
            step: { en: '3. Put policy in config', vi: '3. Đặt policy vào config' },
            action: {
              en: 'Use `~/.cursor/cli-config.json` for personal defaults and `.cursor/cli.json` only for project permissions.',
              vi: 'Dùng `~/.cursor/cli-config.json` cho default cá nhân và `.cursor/cli.json` chỉ cho permissions cấp project.',
            },
            file: '~/.cursor/cli-config.json',
            verify: {
              en: 'Run `agent -p` with a read-only prompt before allowing writes.',
              vi: 'Chạy `agent -p` với prompt read-only trước khi cho phép write.',
            },
          },
          {
            step: { en: '4. Review ck output', vi: '4. Review output ck' },
            action: {
              en: 'Treat `ck migrate -a cursor --dry-run` as the first pass. Add agents and hooks manually after reviewing generated rules/skills.',
              vi: 'Xem `ck migrate -a cursor --dry-run` là pass đầu. Sau khi review rules/skills sinh ra, thêm agents và hooks thủ công.',
            },
            file: 'ck migrate -a cursor --dry-run',
            verify: {
              en: 'No generated file should claim unsupported native command folders.',
              vi: 'Không file generated nào nên claim command folder native chưa được support.',
            },
          },
        ],
      },
      {
        type: 'schema',
        title: { en: 'Where each old command part goes', vi: 'Mỗi phần command cũ nên đi đâu' },
        rows: [
          {
            key: 'Prompt recipe',
            value: { en: 'Move to `.cursor/skills/<name>/SKILL.md` with explicit steps and verification output.', vi: 'Đưa vào `.cursor/skills/<name>/SKILL.md` với steps rõ và output verify.' },
          },
          {
            key: 'File scope',
            value: { en: 'Use `paths` in skill frontmatter, not a hidden command router.', vi: 'Dùng `paths` trong frontmatter của skill, không dùng command router ẩn.' },
          },
          {
            key: 'Allowed tools',
            value: { en: 'Use `.cursor/cli.json` permissions for project CLI runs; use hooks when the policy must inspect runtime input.', vi: 'Dùng permissions trong `.cursor/cli.json` cho CLI runs cấp project; dùng hooks khi policy cần inspect runtime input.' },
          },
          {
            key: 'Long-running work',
            value: { en: 'Use subagents for delegated research/review; use CLI print mode for scripts or CI.', vi: 'Dùng subagents cho research/review được delegate; dùng CLI print mode cho scripts hoặc CI.' },
          },
        ],
      },
      {
        type: 'schema',
        title: { en: 'Command-to-skill schema', vi: 'Schema command sang skill' },
        rows: [
          { key: '.cursor/skills/<name>/SKILL.md', value: { en: 'Native Cursor skill location for project workflows.', vi: 'Vị trí skill native của Cursor cho workflow cấp project.' } },
          { key: '.agents/skills/<name>/SKILL.md', value: { en: 'Also loaded by Cursor for project-level skills; useful for cross-agent skill folders.', vi: 'Cursor cũng load path này cho project-level skills; hữu ích khi muốn skill folder dùng chung nhiều agent.' } },
          { key: '~/.cursor/skills/<name>/SKILL.md', value: { en: 'Global Cursor skill location.', vi: 'Vị trí skill global của Cursor.' } },
          { key: '~/.agents/skills/<name>/SKILL.md', value: { en: 'Also loaded globally by Cursor.', vi: 'Cursor cũng load global skills từ path này.' } },
          { key: 'disable-model-invocation: true', value: { en: 'Preserves explicit slash-command behavior.', vi: 'Giữ hành vi explicit giống slash command.' } },
          { key: 'paths', value: { en: 'Scopes a skill to matching files; replaces legacy `globs` for new skills.', vi: 'Scope skill theo file match; thay `globs` cũ cho skill mới.' } },
          { key: '/migrate-to-skills', value: { en: 'Cursor 2.4+ built-in skill that converts eligible dynamic rules and slash commands.', vi: 'Built-in skill từ Cursor 2.4+ để convert dynamic rules và slash commands đủ điều kiện.' } },
        ],
      },
      {
        type: 'code',
        title: { en: 'Command-like Cursor skill', vi: 'Cursor skill hoạt động như command' },
        language: 'markdown',
        code: `---
name: ck-plan
description: Use only when the user explicitly asks for /ck:plan or planning before implementation.
disable-model-invocation: true
paths:
  - "**/*.ts"
  - "**/*.astro"
---

# CK Plan

Use this when the user explicitly asks for /ck:plan.

1. Scout the repo first.
2. Identify implementation risks.
3. Produce a concise plan with verification steps.
4. Do not edit files unless the user switches from planning to implementation.`,
      },
      {
        type: 'schema',
        title: { en: 'Cursor CLI filesystem and runtime map', vi: 'Bản đồ filesystem và runtime của Cursor CLI' },
        rows: [
          { key: '~/.cursor/cli-config.json', value: { en: 'Global CLI config: version, editor, permissions, model, network, attribution.', vi: 'Config CLI global: version, editor, permissions, model, network, attribution.' } },
          { key: '<project>/.cursor/cli.json', value: { en: 'Project CLI config. Only permissions are supported at project level.', vi: 'Config CLI cấp project. Chỉ permissions được hỗ trợ ở cấp project.' } },
          { key: 'agent -p', value: { en: 'Print/headless mode for scripts and CI. Use `--force` to allow writes.', vi: 'Print/headless mode cho script và CI. Dùng `--force` để cho phép write.' } },
          { key: '--worktree', value: { en: 'Runs in a new Git worktree under `~/.cursor/worktrees`.', vi: 'Chạy trong Git worktree mới dưới `~/.cursor/worktrees`.' } },
          { key: '--plugin-dir', value: { en: 'Loads local plugin directories.', vi: 'Load local plugin directories.' } },
        ],
      },
      {
        type: 'callout',
        tone: 'info',
        title: { en: 'Source-backed command boundary', vi: 'Ranh giới command có nguồn verify' },
        text: {
          en: 'The current official Skills docs explicitly say Cursor 2.4 migrates slash commands into skills with disable-model-invocation: true. In this guide, command migration is therefore modeled through `.cursor/skills` and `.agents/skills`, not an undocumented command folder.',
          vi: 'Docs Skills hiện tại nói rõ Cursor 2.4 migrate slash commands thành skills với disable-model-invocation: true. Vì vậy guide này model migration commands qua `.cursor/skills` và `.agents/skills`, không dựa vào một command folder chưa verify được từ docs chính thức.',
        },
      },
      {
        type: 'callout',
        tone: 'success',
        title: { en: '`ck migrate -a cursor` fit check', vi: 'Đánh giá fit của `ck migrate -a cursor`' },
        text: {
          en: 'Current dry-run behavior is partially fit: rules and skills align with Cursor; hooks need native `.cursor/hooks.json`; subagents should target `.cursor/agents`; command-like workflows should become Cursor skills with disable-model-invocation: true.',
          vi: 'Hành vi dry-run hiện tại chỉ fit một phần: rules và skills đúng hướng với Cursor; hooks cần `.cursor/hooks.json`; subagents nên vào `.cursor/agents`; workflow giống command nên thành Cursor skills với disable-model-invocation: true.',
        },
      },
    ],
  },
};

export function tCursor(text: CursorLocaleText, lang: 'en' | 'vi') {
  return text[lang];
}
