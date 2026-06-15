# /ck:security - STRIDE + OWASP Security Audit

Source: local `ck:security` skill.

## Authoritative Flow

1. Resolve scope: file glob, folder, or `full`.
2. Run STRIDE analysis across the selected code/data flow.
3. Map findings to OWASP Top 10 categories.
4. Run dependency audits and secret detection.
5. Categorize severity and produce a security report.
6. Optional red-team mode runs four attacker lenses before the final sweep.
7. Optional fix mode sorts findings by severity, applies one targeted fix, verifies, commits, and repeats until done or blocked.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Analysis | STRIDE, OWASP Top 10, red-team personas |
| Dependency tools | `npm audit`, `pip-audit`, `govulncheck`, `bundle audit`, Maven dependency-check, `cargo audit` |
| Related skills | `ck:predict`, `ck:autoresearch`, `ck:scenario`, `ck:plan` |
| Fix guards | Tests, lint, git commit |

## Sub-agents

The workflow uses attacker personas rather than mandatory Task-spawned sub-agents: Security Adversary, Supply Chain Attacker, Insider Threat, and Infrastructure Attacker.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default | Audit only; report findings. |
| `--red-team` | Run attacker personas before STRIDE/OWASP sweep. |
| `--fix` | Apply targeted fixes with verification after each finding. |
| `--iterations N` | Cap red-team or fix iterations. |

## Hard Gate

- Never expose raw secrets. Mask JWTs, long hex tokens, AWS keys, passwords, and connection strings.
- Critical severity blocks release.
- Audit-only and red-team-only modes do not change code.
- Code changes require explicit `--fix`.
- Fix mode stops if tests/lint guard fails.

## Artifacts

- Markdown Security Audit Report.
- `security-audit-results.tsv` for red-team findings.
- Persona/STRIDE/OWASP coverage summary.
- Fix mode creates source patches and one commit per fixed finding.
