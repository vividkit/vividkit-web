# ClaudeKit Engineer Changelog: v2.7.0 → v2.8.1

> **Phân tích:** So sánh chi tiết các thay đổi giữa v2.7.0 (2026-01-26) và v2.8.1 (2026-01-27)

---

## Tóm tắt

| Phiên bản | Ngày phát hành | Thay đổi chính |
|-----------|----------------|----------------|
| v2.7.0 | 2026-01-26 | GLSL shader skill, git workflow improvements |
| v2.8.0 | 2026-01-27 | AI-artist validation workflow, deprecate /fix command |
| v2.8.1 | 2026-01-27 | Python venv fixes, path-extractor improvements |

---

## v2.8.1 (2026-01-27)

### 🐞 Bug Fixes

| Scope | Thay đổi | Issue |
|-------|----------|-------|
| **hooks** | Allow Python venv creation and inject venv rules into subagents | #386 |
| **hooks** | Skip paths after `--exclude` flags in path-extractor | #388 |

### ✅ Tests

| Scope | Thay đổi | Commit |
|-------|----------|--------|
| **hooks** | Add venv creation command tests | `b3c62a6` |

---

## v2.8.0 (2026-01-27)

### 🚀 Features

| Scope | Thay đổi | Issue |
|-------|----------|-------|
| **ai-artist** | Add mandatory validation workflow | #363 |

### 🐞 Bug Fixes

| Scope | Thay đổi | Issue |
|-------|----------|-------|
| - | Deprecate `commands/fix.md` in favor of global fix skill | #382 |
| **statusline** | Remove duplicate percent sign in usage display | - |

---

## Breaking Changes & Deprecations

### Commands deprecated (v2.8.0)

| Command | Trạng thái | Ghi chú |
|---------|------------|---------|
| `/fix` (local) | ⚠️ Deprecated | Sử dụng global `/fix` skill thay thế |
| `/code` | ⚠️ Replaced | Đổi thành `/cook` trong plan commands |

### File Changes

| File | Status | Mô tả |
|------|--------|-------|
| `.claude/commands-archived/fix.md` | Renamed | Archived from commands/fix.md |
| `.claude/skills/ai-artist/references/validation-workflow.md` | Added | New validation workflow docs |

---

## Features mới đáng chú ý

### 1. AI-Artist Validation Workflow (v2.8.0)

- Thêm mandatory validation workflow cho ai-artist skill
- Đảm bảo quality control cho generated prompts
- Giải quyết issue #363

### 2. Python Venv Support in Hooks (v2.8.1)

- Hooks cho phép tạo Python virtual environment
- Inject venv rules vào subagents tự động
- Giải quyết issue #386

### 3. Path Extractor Improvements (v2.8.1)

- Skip paths sau `--exclude` flags
- Cải thiện accuracy của scout-block hook
- Giải quyết issue #388

---

## Files Changed

```
renamed     .claude/commands-archived/fix.md
modified    .claude/commands/ck-help.md
modified    .claude/commands/plan/fast.md
modified    .claude/commands/plan/hard.md
modified    .claude/commands/plan/validate.md
modified    .claude/hooks/lib/scout-checker.cjs
modified    .claude/hooks/scout-block/path-extractor.cjs
modified    .claude/hooks/subagent-init.cjs
modified    .claude/hooks/tests/test-scout-block.cjs
modified    .claude/metadata.json
modified    .claude/scripts/ck-help.py
modified    .claude/skills/ai-artist/SKILL.md
added       .claude/skills/ai-artist/references/validation-workflow.md
modified    .claude/statusline.cjs
modified    CHANGELOG.md
modified    package.json
```

---

## Migration Guide

### Từ v2.7.0 lên v2.8.x

1. **Command `/fix` deprecated:** Sử dụng global `/fix` skill thay vì local command

2. **Command `/code` → `/cook`:** Trong plan files, đổi `/code` thành `/cook`

3. **Python venv:** Hooks giờ hỗ trợ venv creation - không còn bị block

4. **AI-artist skill:** Có thêm validation workflow - prompts sẽ được validate

---

## Related Issues

- #363 - AI-artist validation workflow
- #382 - Deprecate local fix command
- #386 - Python venv creation in hooks
- #388 - Path extractor exclude flag handling

---

## Full Commit History

### v2.7.0 → v2.8.1

```
f80b9fe fix(statusline): remove duplicate percent sign in usage display
b80c6a4 chore: replace deprecated /code with /cook in plan commands
81ab712 fix: deprecate commands/fix.md in favor of global fix skill
c56d80f feat(ai-artist): add mandatory validation workflow
412822b fix(hooks): allow Python venv creation and inject venv rules into subagents
b3c62a6 test(hooks): add venv creation command tests for Issue #386
6479d41 fix(hooks): skip paths after --exclude flags in path-extractor
```

---

*Được tạo: 2026-01-28*
