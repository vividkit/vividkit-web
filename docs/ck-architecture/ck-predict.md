# /ck:predict — Multi-Persona Pre-Analysis

Source: `~/.claude/skills/ck-predict/SKILL.md`

## Authoritative Flow

```
1. Input — read proposed change/feature description
2. Hooks Fire — context injection (session-init, dev-rules-reminder)
3. Read Codebase — grep affected areas if --files provided
4. Independent Analysis — 5 personas analyze in parallel
5. Agreement Check — identify points where 4+ personas align
6. Conflict Resolution — weigh tradeoffs for disagreements
7. Verdict — GO / CAUTION / STOP with recommendations
```

## The 5 Personas

| Persona | Focus |
|---------|-------|
| Architect | System design, scalability, coupling |
| Security | Attack surface, data protection, auth |
| Performance | Latency, memory, queries, bundle size |
| UX | User experience, accessibility, error states |
| Devil's Advocate | Hidden assumptions, simpler alternatives |

## Skills Activated

| Type | Skill |
|------|-------|
| Downstream | ck:scenario (feed risk rows), ck:plan (attach recommendations), ck:cook (CAUTION/STOP as gates) |

## Sub-agents

No dedicated sub-agents spawned. Main agent simulates all 5 personas internally.
Analysis is sequential within a single context window.

## Mode Selection

None — single mode (5-persona debate).

## Complexity Routing

None — all proposals get full 5-persona treatment regardless of size.

## Verdict Levels

| Verdict | Meaning |
|---------|---------|
| GO | All aligned, no critical risks |
| CAUTION | Concerns manageable with mitigations |
| STOP | Critical unresolved issue, needs redesign |

## STOP Triggers

Any one sufficient:
- Security: auth bypass or data exposure with no mitigation
- Architect: fundamental design incompatibility
- Performance: unacceptable latency/query explosion
- Devil's Advocate: false assumption invalidates approach

## Hard Gate

Any STOP trigger blocks implementation until resolved.
