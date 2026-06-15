# /ck:agent-browser — Browser Automation Workflow

## Authoritative Flow

```text
Step 1: Verify CLI, browser binaries, daemon/provider, and install health.
Step 2: Load version-matched browser workflow reference.
Step 3: Open or connect to the target browser/session/provider.
Step 4: Snapshot interactive elements.
Step 5: Act through element refs, semantic locators, or CSS fallback.
Step 6: Wait for expected URL, text, state, network, or custom condition.
Step 7: Re-snapshot and capture screenshots, video, HAR, trace, or console data.
Step 8: Save artifacts, close session, and report concise findings.
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:agent-browser |
| Conditional | browser automation CLI |
| Optional | Chrome DevTools MCP for low-level diagnostics |

## Sub-agents

None required. The browser CLI can run autonomous chat or scripted command batches, but the main agent owns test scope and evidence review.

## Mode Selection

| Mode | Trigger | Behavior |
|------|---------|----------|
| Web automation | URL or app QA task | Open, snapshot, act, verify |
| Dogfood QA | Exploratory testing | Browser-only issue discovery with screenshots/video |
| Electron | CDP app target | Connect to app launched with remote debugging |
| Cloud provider | Browserbase or AgentCore | Run browser session in cloud |
| React/perf | React or vitals task | Enable React tools when needed, capture vitals |
| Chat | Natural-language browser task | Browser agent handles multi-step interaction |

## Complexity Routing

Use isolated sessions for role-based testing, cloud providers for remote/browserbase needs, and batch commands for deterministic sequences.

## Hard Gate

Element refs expire after page changes; re-snapshot before acting again. Do not expose secrets through screenshots, HAR, auth state, or reports. Destructive repair requires explicit repair mode.
