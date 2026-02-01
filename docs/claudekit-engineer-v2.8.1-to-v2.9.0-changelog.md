# ClaudeKit Engineer Changelog: v2.8.1 → v2.9.0-beta.9

> **Phân tích:** So sánh chi tiết các thay đổi giữa v2.8.1 (2026-01-27) và v2.9.0-beta.9 (2026-01-31)

---

## Tóm tắt

| Phiên bản | Ngày | Thay đổi chính |
|-----------|------|----------------|
| v2.8.1 | 01-27 | Python venv fixes, path-extractor improvements |
| v2.9.0-beta.1 | 01-28 | Native Claude Tasks, find-skills skill, Stripe refs |
| v2.9.0-beta.2 | 01-29 | Debug skill cleanup |
| v2.9.0-beta.3 | 01-29 | Stale refs cleanup (#391) |
| v2.9.0-beta.4 | 01-29 | Skill-creator plugin marketplace |
| v2.9.0-beta.5 | 01-29 | Gemini model ID fix |
| v2.9.0-beta.6 | 01-29 | Google ADK Python v1.0.0+ |
| v2.9.0-beta.7 | 01-30 | `/fix --parallel` flag |
| v2.9.0-beta.8 | 01-31 | debug.md metadata cleanup |
| v2.9.0-beta.9 | 01-31 | plan:validate log template |

---

## 🚀 Features

| Scope | Thay đổi | Beta | Issue |
|-------|----------|------|-------|
| **find-skills** | New skill to discover/install skills from ecosystem | 1 | - |
| **payment-integration** | Add Stripe best practices & API upgrade refs | 1 | - |
| **google-adk-python** | Update to v1.0.0+ with 7 reference files | 6 | #396 |
| **fix** | Add `--parallel` flag for explicit parallel mode | 7 | #400 |

---

## ⚡ Performance

| Scope | Thay đổi | Beta |
|-------|----------|------|
| **cook** | Native Claude Tasks integration (`TaskCreate/Update/Get/List`) | 1 |
| **skill-creator** | Plugin marketplace support | 4 |

---

## 🐞 Bug Fixes

| Scope | Thay đổi | Beta | Issue |
|-------|----------|------|-------|
| **deletions** | Add `skills/debugging/**` for renamed debug skill | 2 | - |
| **ck-help** | Remove stale CATEGORY_GUIDES for deleted commands | 3 | #391 |
| **refs** | Clean up stale agent/skill references (brainstorming→brainstorm, aesthetic→ui-ux-pro-max, copywriter→fullstack-developer) | 3 | #391 |
| **gemini** | Replace invalid `gemini-3.0-flash` with `gemini-3-flash-preview` | 5 | #394 |
| **google-adk-python** | Correct API inaccuracies (LongRunningFunctionTool, ExampleTool, load_artifact) | 6 | - |
| **gemini** | Update refs to `gemini-2.5-flash`, add gemini-3 preview | 6 | - |
| **fix** | Update `/fix:parallel` syntax to `/fix --parallel` | 7 | #400 |
| **metadata** | Add deprecated debug.md to deletions and archive | 8 | #403 |
| **plan:validate** | Enrich Step 5 with detailed validation log template | 9 | #402 |

---

## 📚 Documentation

| Thay đổi | Beta | Issue |
|----------|------|-------|
| Update stale agent, command, and skill references | 3 | #391 |
| Mintlify skill update to v2.0.0 with 4 new refs | 6-7 | - |

---

## Features Chi tiết

### 1. Native Claude Tasks trong `/cook` (beta.1)

`/cook` giờ sử dụng native Claude Tasks thay vì custom tracking.

**API sử dụng:**
- `TaskCreate` - tạo tasks với priority và dependencies
- `TaskUpdate` - mark `in_progress` khi pick up, `complete` khi done
- `TaskGet/TaskList` - query task status

**Workflow modes:**
- `--interactive` (default): Full workflow với user input
- `--fast`: Skip research, scout→plan→code
- `--parallel`: Multi-agent execution
- `--no-test`: Skip testing
- `--auto`: Auto-approve all steps

### 2. Google ADK Python v1.0.0+ (beta.6)

Rebuild từ official sources với 7 reference files:
- Agent types (LlmAgent, BaseAgent, workflow agents)
- Tools/MCP integration
- Multi-agent/A2A patterns
- Sessions/state/memory
- Callbacks/plugins
- Evaluation/CLI
- Deployment options

**Gemini model updates:**
- Default: `gemini-2.5-flash`
- Preview: `gemini-3-flash-preview`, `gemini-3-pro-preview`
- Sunset: `gemini-2.0-flash` (Mar 2026)

### 3. `/fix --parallel` Flag (beta.7)

Explicit parallel mode cho `/fix` skill:
```bash
/fix --parallel "fix all linting errors"
```

Skips complexity assessment, directly spawns parallel fullstack-developer agents.

### 4. plan:validate Template (beta.9)

Enhanced validation log capturing:
- Full question text và all options
- Verbatim custom "Other" responses
- Rationale per decision
- Phase impact analysis
- Session history (re-validations append as Session N blocks)

### 5. Skill-Creator Plugin Marketplace (beta.4)

Thêm plugin marketplace support cho skill creation workflow.

---

## Renamed Skills/Agents

| Old | New | Cleaned in |
|-----|-----|------------|
| `brainstorming` | `brainstorm` | v2.6.0 |
| `aesthetic` | `ui-ux-pro-max` | beta.3 |
| `copywriter` | `fullstack-developer` | beta.3 |
| `debugging` | `debug` | beta.2 |
| `scout` agent | removed | v2.6.0 |

---

## Migration Guide

### Từ v2.8.1 → v2.9.0

1. **`/cook` skill:** Migrate custom task tracking → native TaskCreate/TaskUpdate

2. **Gemini models:** Update model IDs
   - `gemini-2.0-flash` → `gemini-2.5-flash`
   - `gemini-3.0-flash` → `gemini-3-flash-preview`

3. **`/fix` skill:** Use `--parallel` flag thay vì `:parallel` suffix
   ```bash
   # Old (không hợp lệ)
   /fix:parallel "..."

   # New
   /fix --parallel "..."
   ```

4. **Stale refs:** Cập nhật nếu dùng:
   - `brainstorming` → `brainstorm`
   - `aesthetic` → `ui-ux-pro-max`
   - `copywriter` → `fullstack-developer`

---

## Related Issues/PRs

| Issue | Description |
|-------|-------------|
| #390 | Enhance skills/hooks with native tasks |
| #391 | Clean up stale references |
| #394 | Invalid Gemini model ID |
| #396 | Update google-adk-python skill |
| #400 | `/fix --parallel` syntax |
| #402 | plan:validate log template |
| #403 | debug.md metadata cleanup |

---

## Full Commit History

```
c810d9a chore(release): 2.9.0-beta.9
58ce22b fix: enrich plan:validate Step 5 with detailed validation log template
177821c chore(release): 2.9.0-beta.8
2abf65c fix: add deprecated debug.md to metadata deletions and archive
0d3f238 chore(release): 2.9.0-beta.7
3b7ae4f feat: add --parallel flag to /fix skill
074ac52 fix: update /fix:parallel syntax to /fix --parallel
ac710eb chore(release): 2.9.0-beta.6
8bef76d fix(skills): update gemini model refs to 2.5-flash
a81b756 fix(skills): correct API inaccuracies in google-adk-python
2effa64 feat(skills): update google-adk-python skill with v1.0.0+
8a5081f Merge: update mintlify skill to v2.0.0
0d78b8a chore(release): 2.9.0-beta.5
44cf1e1 fix: replace invalid gemini-3.0-flash model ID
0b74fab chore(release): 2.9.0-beta.4
aeee285 perf(skills): enhance skill-creator with plugin marketplace
ea24fff chore(release): 2.9.0-beta.3
888b856 fix(ck-help): remove stale CATEGORY_GUIDES
ef45c04 fix: clean up stale references to deleted agents/skills
1405364 chore(release): 2.9.0-beta.2
b2a2558 fix(deletions): add skills/debugging/**
fabc944 chore(release): 2.9.0-beta.1
85de5b6 perf(skills): enhance cook skill with native claude tasks
57b3379 feat(payment-integration): add Stripe references
c08b276 feat: added new find-skill skill
b93f548 ci: add workflow to sync dev to main after release
```

---

*Cập nhật: 2026-02-01*
