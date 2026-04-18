# /ck:security — Security Audit (STRIDE + OWASP)

Source: `~/.claude/skills/ck-security/SKILL.md`

## Authoritative Flow

```
1. Scope Resolution — expand glob or `full` keyword into file list, read all in-scope files
2. STRIDE Analysis — evaluate 6 threat categories systematically:
   S=Spoofing, T=Tampering, R=Repudiation, I=Info Disclosure, D=DoS, E=Elevation
3. OWASP Top 10 Check — map findings to A01–A10 categories
   → Uses references/stride-owasp-checklist.md for per-category checks
4. Dependency Audit — run stack-appropriate tool (npm audit / pip-audit / govulncheck / bundle audit)
5. Secret Detection — regex scan for API keys, passwords, tokens, private keys
   → Redact values in output (first 4 + last 2 chars only)
6. Finding Categorization — assign severity (Critical → High → Medium → Low → Info)
7. Output — severity-ranked findings report with fix recommendations
8. [--fix] Iterative Fix — sort by severity, apply one fix at a time, guard with tests
   → Uses ck:autoresearch pattern for regression prevention
   → Commit each fix: `security(fix-N): <description>`
   → Stop early if guard fails
```

## Modes

| Mode | Invocation | Behavior |
|------|-----------|----------|
| Audit only | `/ck:security <scope>` | Scan → categorize → report |
| Audit + Fix | `/ck:security <scope> --fix` | Scan → categorize → fix iteratively |
| Bounded fix | `/ck:security <scope> --fix --iterations N` | Cap fix iterations to N |

## Severity Definitions

| Severity | Description | Fix Priority |
|----------|-------------|-------------|
| Critical | Exploitable now, data breach/RCE risk | Immediate — block release |
| High | Exploitable with moderate effort | This sprint |
| Medium | Limited exploitability or impact | Next sprint |
| Low | Theoretical risk, defense-in-depth | Backlog |
| Info | Best practice suggestion | Optional |

## Integration with Other Skills

| Skill | Relationship |
|-------|-------------|
| ck:predict | Run security audit when predict's security persona flags concerns |
| ck:autoresearch | Feed Critical/High findings for automated remediation (--fix mode) |
| ck:scenario | Deeper auth flow testing with `--focus authorization` |
| ck:plan | Schedule Medium/Low findings as sprint tasks |

## Hard Gates

1. **Secret redaction** — NEVER output actual secret values in reports.
2. **No auto-modification without --fix** — audit-only mode is read-only.
3. **Guard must pass** — each fix iteration verified by tests before proceeding.
4. **Real credential found** — recommend immediate rotation.
