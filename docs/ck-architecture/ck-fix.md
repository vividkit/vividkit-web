# /ck:fix — Bug Fix Pipeline

Source: `~/.claude/skills/fix/SKILL.md` + `references/`

## Authoritative Flow (from SKILL.md mermaid diagram)

```
Step 0: Mode Selection → auto | review | quick (AskUserQuestion)
Step 1: Scout (MANDATORY) → ck:scout skill OR 2-3 parallel Explore subagents
Step 2: Diagnose (MANDATORY) → ck:debug + ck:sequential-thinking + debugger subagent
  └─ Complexity Assessment happens HERE (implicit, not a separate step)
Step 3: Route to workflow based on complexity
Step 4: Fix Implementation
Step 5: Verify + Prevent (MANDATORY)
Step 6: Finalize
```

## Complexity Assessment

Happens AFTER Scout + Diagnose (not before). Source: `references/complexity-assessment.md`

| Level | Indicators | Workflow | Task Phases |
|-------|------------|----------|-------------|
| Simple | 1 file, clear error (type/lint) | workflow-quick.md | 5 steps, no Tasks |
| Moderate | 2-5 files, multi-file fix | workflow-standard.md | 6 phases with Tasks |
| Complex | 5+ files, architecture impact | workflow-deep.md | 9 phases with Tasks |
| Parallel | 2+ independent issues or --parallel flag | Multiple fullstack-developer agents | Separate task trees |

## Workflow Differences

### Quick (Simple)
1. Scout (minimal — file + direct deps only)
2. Diagnose (abbreviated — ck:debug + ck:sequential)
3. Fix + Verify (combined step, parallel Bash for typecheck+lint)
4. Review (code-reviewer subagent) + Prevention (abbreviated)
5. Complete (git-manager if autonomous)

### Standard (Moderate) — 6 Task Phases
1. Scout → ck:scout OR parallel Explore subagents
2. Diagnose → ck:debug + ck:sequential + debugger subagent + Explore
3. Implement fix
4. Verify + Prevent → tester subagent + parallel Bash (typecheck/lint/build/test)
5. Code Review → code-reviewer subagent
6. Finalize → ck:project-management + docs-manager + git-manager + journal

### Deep (Complex) — 9 Task Phases
1-2-3. Scout + Diagnose + Research (PARALLEL) → researcher subagent
4. Brainstorm → ck:brainstorm skill
5. Plan → planner subagent
6. Implement fix
7. Verify + Prevent → tester + parallel Bash
8. Code Review → code-reviewer subagent
9. Finalize → ck:project-management + docs-manager + git-manager + journal

## Sub-agents Spawned by Workflow

### Standard (shown in VividKit guide)

| Step | Sub-agents | Type |
|------|------------|------|
| Scout | 2-3 Explore | Built-in subagent type |
| Diagnose | debugger + Explore | CK agent + built-in |
| Verify | tester + parallel Bash | CK agent + built-in |
| Review | code-reviewer | CK agent |
| Finalize | docs-manager + git-manager + project-manager | CK agents |

### Deep (additional agents)

| Step | Sub-agents | Type |
|------|------------|------|
| Research | researcher | CK agent (parallel with Scout+Diagnose) |
| Brainstorm | (main agent, ck:brainstorm skill) | — |
| Plan | planner | CK agent |

### Parallel (additional agents)

| Step | Sub-agents | Type |
|------|------------|------|
| Per-issue | fullstack-developer (one per independent issue) | CK agent |

## VividKit Guide Design Decisions

1. Pipeline shows the **Standard workflow** as default (most representative)
2. Complexity Routing is NOT a separate step — implicit after Diagnose
3. Mode Selection is part of user input step (flags + interactive prompt)
4. Steps that spawn sub-agents are visually indented with "spawned by main agent" label
5. Deep/Parallel workflow details shown in Diagnose explain text (not separate UI branches)
6. Conditional skills (ck:context-engineering, ck:ai-multimodal) not shown — too edge-case for overview
