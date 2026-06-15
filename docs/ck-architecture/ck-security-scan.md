# /ck:security-scan — Lightweight Security Scanner

Source: `reference/stable/claude/skills/security-scan/SKILL.md`

## Authoritative Flow

```
1. Detect Project Type — identify JS/TS, Python, Go, Ruby, or other stacks
2. Secret Scanning — always scan credentials first, verify placeholders, redact output
3. Dependency Audit — run stack-appropriate audit when applicable
   npm audit / pip audit / govulncheck / bundle audit
4. Code Pattern Analysis — check common OWASP-style vulnerability patterns
5. Env Exposure Check — detect tracked .env files and .gitignore coverage gaps
6. Generate Report — severity summary, findings, recommendations, and scope declaration
```

## Modes

| Mode | Invocation | Behavior |
|------|-----------|----------|
| Scoped scan | `/ck:security-scan <scope>` | Scan a bounded path or glob |
| Secrets only | `/ck:security-scan --secrets-only` | Only secret and credential detection |
| Dependencies only | `/ck:security-scan --deps-only` | Only dependency audit |
| Full scan | `/ck:security-scan --full` | Secrets + dependencies + code patterns + env exposure |

No-fix rule: this skill reports findings only. It does not modify code automatically.

## Scan Categories

| Category | Method | Priority | Output |
|----------|--------|----------|--------|
| Secrets | Regex patterns + placeholder verification | High | Redacted findings and rotation guidance |
| Dependencies | Stack audit tools | Medium | Severity summary and package details |
| Code patterns | OWASP-style grep/review patterns | Medium | File/line findings with recommendations |
| Env exposure | `git ls-files` + ignore checks | High | Tracked env warnings and remediation notes |

## Report Output

| Section | Contents |
|---------|----------|
| Summary | Project, scan date, files checked, severity counts |
| Findings | Grouped by Secrets, Dependencies, Code, Env |
| Recommendations | Rotation, dependency upgrades, code hardening |
| Scope declaration | What the scan handles and what it does not cover |

If `--auto` mode is active inside ck:cook, save report to `{CK_REPORTS_PATH}` or
`plans/reports/security-scan-{date}.md`.

## Integration with Other Skills

| Skill | Relationship |
|-------|-------------|
| ck:ship | Use before release when security gate is needed |
| ck:test | Validate dependency/build impact after recommended fixes are applied elsewhere |
| ck:plan | Turn Medium/Low findings into implementation tasks |
| ck:security | Use for deeper STRIDE/OWASP audit or remediation workflow |

## Hard Gates

1. **Secret redaction** — never output actual secret values.
2. **No credential execution** — never test or execute found credentials.
3. **Report-only** — never modify code automatically.
4. **Real credential found** — recommend immediate rotation.
