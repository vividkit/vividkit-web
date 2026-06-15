# /ck:ask — Technical Consultation

## Authoritative Flow

```text
Step 1: Parse the technical or architecture question.
Step 2: Gather project, workflow, and constraint context.
Step 3: Scout the codebase if context is too thin.
Step 4: Evaluate through system boundary, technology, scalability, and risk lenses.
Step 5: Synthesize one architectural position.
Step 6: Present tradeoffs and alternatives.
Step 7: End with next validation actions.
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:ask |
| Conditional | ck:scout |
| Optional | none |

## Sub-agents

No dedicated sub-agent is required. Advisor lenses are conceptual roles used by the main agent.

## Mode Selection

| Mode | Trigger | Behavior |
|------|---------|----------|
| Consultation | clear question | Direct architecture or technical guidance |
| Context recovery | insufficient context | Scout first, then answer |

## Complexity Routing

Questions that depend on local code should load enough context before recommending. Answers should stay direct and avoid overbuilding.

## Hard Gate

Analysis only. Do not implement. Recommendations must honor YAGNI, KISS, and DRY, and should include practical validation steps.
