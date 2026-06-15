# /ck:bootstrap — New Project Scaffolding

Source: `~/.claude/skills/bootstrap/SKILL.md` + `references/`

## Authoritative Flow

```
Step 0: Git Init → ensure repo exists
Step 1: Research → parallel researcher sub-agents explore idea/challenges
Step 2: Tech Stack → planner + researchers pick best-fit stack → docs/
Step 3: Design → ui-ux-designer + researcher → wireframes, design guidelines → [Design Gate]
Step 4: Planning → activate ck:plan skill with mode flag
Step 5: Implementation → activate ck:cook skill with plan path
Step 6: Test + Review → handled by ck:cook (tester → debugger → code-reviewer)
Step 7: Docs + Onboard → docs-manager, project-manager sub-agents → final report + git commit
```

## Mode Selection

| Mode | Flag | Research | User Gates | Planning Skill | Cook Skill |
|------|------|----------|------------|----------------|------------|
| full | --full | Yes | Every phase | --hard | interactive |
| auto | --auto | Yes | Design only | --auto | --auto |
| fast | --fast | Light | Cook review gates | --fast | interactive |
| parallel | --parallel | Yes | Design only | --parallel | --parallel |

Detection: explicit flag → default `--full`.

## Skills Activated

| Phase | Skill |
|-------|-------|
| Step 4 | ck:plan (planning) |
| Step 5-6 | ck:cook (implementation + test + review) |
| Step 3 | ck:ai-multimodal (image generation), ck:agent-browser (screenshots) |
| Step 7 | ck:journal (final entry) |

## Sub-agents Spawned

| Phase | Agent | Mandatory |
|-------|-------|-----------|
| Git Init | git-manager | Yes (all modes) |
| Research | researcher (parallel) | Yes, bounded/light in fast |
| Tech Stack | planner + researcher | Yes, bounded/light in fast |
| Design | ui-ux-designer + researcher | Yes; fast skips design gate only |
| Planning | via ck:plan skill | Yes |
| Implementation | via ck:cook skill | Yes |
| Docs | docs-manager | Yes |
| Docs | project-manager | Yes |

## Critical Rules

- DO NOT implement code directly — delegate through ck:plan → ck:cook
- All research reports ≤150 lines
- Plans to `./plans`, docs to `./docs`
- YAGNI / KISS / DRY enforced
- Run /ck:journal on completion

## Design Gate (auto/parallel modes)

Only user approval gate in auto mode. Wireframes generated as HTML at `./docs/wireframe/`.
If rejected, iterate until approved. Full mode gates every major phase; fast mode runs
bounded parallel research/design setup, skips the design gate, and keeps ck:cook review gates.

## Shared Phases (Step 5-7)

After planning, ck:cook handles: implementation → testing → code review.
Then bootstrap resumes: docs-manager creates README, codebase-summary, code-standards,
system-architecture. project-manager creates roadmap. Onboarding guides user (1 question
at a time). Final report summarizes all changes + suggests next steps.
