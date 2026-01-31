# ClaudeKit Engineer Changelog: v2.8.1 → v2.9.0-beta.1

> **Phân tích:** So sánh chi tiết các thay đổi giữa v2.8.1 (2026-01-27) và v2.9.0-beta.1 (2026-01-28)

---

## Tóm tắt

| Phiên bản | Ngày phát hành | Thay đổi chính |
|-----------|----------------|----------------|
| v2.8.1 | 2026-01-27 | Python venv fixes, path-extractor improvements |
| v2.9.0-beta.1 | 2026-01-28 | Native Claude Tasks, find-skills skill, Stripe references |

---

## v2.9.0-beta.1 (2026-01-28)

### 🚀 Features

| Scope | Thay đổi | Commit |
|-------|----------|--------|
| **find-skills** | New skill to discover and install skills from ecosystem | `c08b276` |
| **payment-integration** | Add Stripe references for best practices and API upgrades | `57b3379` |

### ⚡ Performance Improvements

| Scope | Thay đổi | Commit |
|-------|----------|--------|
| **cook** | Enhance skill with native Claude Tasks integration | `85de5b6` |

### 👷 CI

| Scope | Thay đổi | Commit |
|-------|----------|--------|
| - | Add workflow to sync dev to main after release | `b93f548` |

---

## Features mới đáng chú ý

### 1. Native Claude Tasks trong `/cook` Skill (v2.9.0)

Cải tiến lớn nhất: `/cook` skill giờ sử dụng native Claude Tasks (`TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList`).

**Thay đổi chính:**
- Sử dụng `TaskCreate` để tạo tasks cho mỗi unchecked item với priority order và dependencies
- Sử dụng `TaskUpdate` để mark tasks `in_progress` khi pick up task
- Sử dụng `TaskUpdate` để mark tasks `complete` ngay sau khi finalize
- Parallel mode: Agents assign task ownership qua `TaskUpdate`

**Workflow modes clarified:**
- `--interactive`: Full workflow với user input (**default**)
- `--fast`: Skip research, scout→plan→code
- `--parallel`: Multi-agent execution
- `--no-test`: Skip testing step
- `--auto`: Auto-approve all steps

**Review Gates cải tiến:**
- Post-Plan gate: Thêm option "Validate" để run `/plan:validate`
- Tất cả modes (trừ auto) đều có "**User approval at each step**"

### 2. Find-Skills Skill (v2.9.0)

Skill mới giúp discover và install skills từ ecosystem.

**Use when:**
- User hỏi "how do I do X"
- User nói "find a skill for X" hoặc "is there a skill for X"
- User hỏi "can you do X" với specialized capability
- User muốn extend agent capabilities

**Key commands:**
```bash
npx skills find [query]     # Search skills
npx skills add <package>    # Install skill
npx skills check            # Check for updates
npx skills update           # Update all skills
```

**Browse skills:** https://skills.sh/

### 3. Stripe References (v2.9.0)

Thêm 2 reference docs cho payment-integration skill:

**stripe-best-practices.md:**
- Prefer CheckoutSessions API over PaymentIntents for on-session payments
- Never recommend Charges API, Sources API, or legacy Card Element
- Use dynamic payment methods instead of specific payment_method_types
- Platform/Connect integration recommendations

**stripe-upgrade.md:**
- API versioning guide (date-based: `2025-12-15.clover`, etc.)
- Server-side SDK versioning (dynamically vs strongly-typed)
- Stripe.js versioning (evergreen model)
- Mobile SDK versioning (semantic versioning)
- Upgrade checklist

---

## Files Changed

```
added       .agents/skills/find-skills/SKILL.md
added       .claude/skills/find-skills/SKILL.md
added       .claude/skills/payment-integration/references/stripe/stripe-best-practices.md
added       .claude/skills/payment-integration/references/stripe/stripe-upgrade.md
added       .github/workflows/sync-dev-after-release.yml
modified    .claude/metadata.json
modified    .claude/skills/cook/SKILL.md (+14/-6)
modified    .claude/skills/cook/references/workflow-steps.md (+28/-12)
modified    .claude/skills/payment-integration/README.md (+43/-11)
modified    .claude/skills/payment-integration/SKILL.md (+31/-3)
modified    CHANGELOG.md
modified    package.json
modified    package-lock.json
```

---

## Migration Guide

### Từ v2.8.1 lên v2.9.0-beta.1

1. **`/cook` skill:** Giờ sử dụng native Claude Tasks
   - Nếu dùng custom task tracking → migrate sang TaskCreate/TaskUpdate
   - Default mode giờ là `--interactive` (không phải auto)

2. **Find-skills skill:** Skill mới để discover skills
   - Sử dụng khi user hỏi về capabilities hoặc muốn extend functions
   - CLI: `npx skills find [query]`

3. **Stripe integration:** Có thêm best practices và upgrade guides
   - Tham khảo khi implement payment features
   - Follow CheckoutSessions API over Charges/PaymentIntents

---

## Related Issues/PRs

- #390 - feat: enhance skills and hooks with native tasks and improvements

---

## Full Commit History

### v2.8.1 → v2.9.0-beta.1

```
b93f548 ci: add workflow to sync dev to main after release
57b3379 feat(payment-integration): add Stripe references for best practices and API upgrades
c08b276 feat: added new find-skill skill
85de5b6 perf(skills): enhance `cook` skill with native claude tasks
e98a0d9 fix: resolve merge conflict in CHANGELOG.md
e7156f0 Merge pull request #390 from claudekit/goon
fabc944 chore(release): 2.9.0-beta.1 [skip ci]
```

---

*Được tạo: 2026-01-29*
