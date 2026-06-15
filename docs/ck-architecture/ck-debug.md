# /ck:debug — Root-Cause Investigation

## Authoritative Flow

```text
Step 1: Assess scope, symptoms, severity, timeframe, and recent changes.
Step 2: Collect evidence from logs, stack traces, CI, DB state, metrics, and repro.
Step 3: Trace backward through data and call chains to the first trigger.
Step 4: Compare working examples, dependencies, and similar patterns.
Step 5: Test one hypothesis with the smallest experiment.
Step 6: Apply a targeted root-cause fix only after evidence.
Step 7: Add prevention such as regression tests, guards, or instrumentation.
Step 8: Verify with fresh command/browser evidence and report.
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:debug |
| Conditional | ck:scout, ck:docs-seeker, ck:repomix, ck:problem-solving |
| Optional | ck:fix, ck:brainstorm |

## Sub-agents

Parallel evidence collectors can be used for multi-source investigations. Main agent owns hypothesis control and final root-cause synthesis.

## Mode Selection

| Mode | Trigger | Behavior |
|------|---------|----------|
| Code bug | Error or failing behavior | Four-phase root-cause debugging |
| CI/CD | Build or workflow failure | Inspect logs and dependency/install state |
| Performance | Latency or resource issue | Quantify, isolate, measure before/after |
| Frontend | UI or browser issue | Screenshot, DOM, console, responsive checks |
| Test pollution | Polluter symptom | Use polluter helper and isolate source |

## Complexity Routing

Investigations with 3+ meaningful steps should be task-tracked. After 3 failed fix attempts, stop and question the architecture rather than stacking more patches.

## Hard Gate

No fix before evidence. One hypothesis at a time. No completion claim without fresh verification output. UI changes need visual/console verification when relevant.
