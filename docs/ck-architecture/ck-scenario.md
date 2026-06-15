# /ck:scenario - Scenario Explorer

Source: local `ck:scenario` skill.

## Authoritative Flow

1. Read target file(s) or parse the feature description.
2. Identify relevant dimensions from the 12-dimension matrix and explicitly skip irrelevant ones.
3. Generate scenarios: one-shot 3-5 per relevant dimension, or iterative one concrete situation per iteration.
4. Classify severity as Critical, High, Medium, or Low.
5. Iterative mode classifies novelty as New, Variant, Duplicate, Out of scope, or Low value.
6. Keep New/Variant scenarios, discard the rest with reasons, and log TSV rows.
7. Halt by exact iteration count or saturation.
8. Output scenario report, severity summary, and optional coverage matrix/composite score.

## Skills Activated

| Type | Tool / Skill |
|------|--------------|
| Input | File read/search and feature parsing |
| Output | Structured table and TSV logging |
| Downstream | `ck:test`, `ck:plan`, `ck:predict` |

## Sub-agents

None required. The command is report-only and runs on the main agent.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default | One-shot scenario generation. |
| `--iterations N` | Run exactly N iterations. |
| `--saturation` | Stop after 2 consecutive no-new iterations. |
| `--domain` | Tune dimensions for software/product/business/security/marketing. |
| `--focus` | Bias toward edge cases, failures, security, or scale. |
| `--format` | Table, use cases, test scenarios, or threat scenarios. |

## Hard Gate

- Report-only: discovers risks and test targets, does not implement fixes.
- Duplicates, low-value cases, and out-of-scope items are discarded, not counted as coverage.
- After 3 same-dimension iterations, force rotation.
- Saturation stops after 2 consecutive no-new iterations.

## Artifacts

- Scenario Report table.
- Dimensions analyzed/skipped and severity summary.
- `scenario-results.tsv` in iterative mode.
- Coverage matrix, composite score, and halt reason when applicable.
