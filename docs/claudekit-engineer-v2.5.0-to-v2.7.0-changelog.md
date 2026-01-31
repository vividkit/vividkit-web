# ClaudeKit Engineer Changelog: v2.5.0 → v2.7.0

> **Phân tích:** So sánh chi tiết các thay đổi giữa v2.5.0 (2026-01-23) và v2.7.0 (2026-01-26)

---

## Tóm tắt

| Phiên bản | Ngày phát hành | Thay đổi chính |
|-----------|----------------|----------------|
| v2.5.0 | 2026-01-23 | Beads integration, Tasks API, MCP manager, new skills |
| v2.6.0 | 2026-01-26 | Hooks config toggle, agent-browser skill, statusline modes |
| v2.7.0 | 2026-01-26 | GLSL shader skill, git workflow improvements |

---

## v2.7.0 (2026-01-26)

### 🚀 Features

| Scope | Thay đổi | Commit |
|-------|----------|--------|
| **shader** | Add GLSL fragment shader skill | `83ca0cd` |
| **git** | Improve commit standards and workflow notes | `836c81f` |

### 🐞 Bug Fixes

| Scope | Thay đổi | Commit |
|-------|----------|--------|
| **hooks** | Avoid stuck at descriptive name hook | `35e960e` |
| **release** | Pump v2.6.1-beta.0 | `0fed02e` |
| - | Resolve merge conflicts from main into dev | `7074a60` |
| - | Resolve merge conflict in package.json version | `e435700` |

---

## v2.6.0 (2026-01-26)

### 🚀 Features

| Scope | Thay đổi | Issue |
|-------|----------|-------|
| **hooks** | Add config toggle for enabling/disabling hooks | #367 |
| **statusline** | Add configurable display modes | #368 |
| **skills** | Add `agent-browser` skill for AI-optimized browser automation | - |
| **metadata** | Add deletions array for archived commands cleanup | - |

### 🐞 Bug Fixes

| Scope | Thay đổi | Issue |
|-------|----------|-------|
| **hooks** | Add fallback for usage API when OAuth unavailable | #369 |
| **deletions** | Add removed agents: `copywriter`, `database-admin`, `scout`, `scout-external` | - |
| **deletions** | Add `skills/brainstorming/**` (renamed to `brainstorm`) | - |
| **deletions** | Add verified deprecated commands and skills | - |
| **release** | Include only `plans/templates` in release assets | - |
| **release** | Preserve deletions array in metadata.json during releases | - |
| **release** | Prevent data loss in release scripts | - |
| **metadata** | Restore deletions array lost during rebase conflict | - |

### 📚 Documentation

- **git:** Add merge-main-first reminder to PR and merge workflows
- **git:** Add note to search GitHub issues for commit context
- Simplify primary workflow instructions

### ♻️ Code Refactoring

- **deletions:** Use glob patterns instead of explicit paths

### 👷 CI

- Add auto-sync workflow to merge main back to dev after releases

---

## Breaking Changes & Deprecations

### Agents bị xóa (v2.6.0)

| Agent | Trạng thái | Ghi chú |
|-------|------------|---------|
| `copywriter` | ❌ Removed | Đã loại bỏ hoàn toàn |
| `database-admin` | ❌ Removed | Đã loại bỏ hoàn toàn |
| `scout` | ❌ Removed | Đã loại bỏ hoàn toàn |
| `scout-external` | ❌ Removed | Đã loại bỏ hoàn toàn |

### Skills đổi tên (v2.5.0 → v2.6.0)

| Cũ | Mới |
|----|-----|
| `brainstorming` | `brainstorm` |

### Commands/Skills deprecated

- Nhiều commands và skills cũ đã được archive và thêm vào `deletions` array trong `metadata.json`

---

## Features mới đáng chú ý

### 1. Agent Browser Skill (v2.6.0)

- AI-optimized browser automation
- Tích hợp với Puppeteer/Playwright workflows

### 2. GLSL Shader Skill (v2.7.0)

- Hỗ trợ viết GLSL fragment shaders
- Dành cho 3D graphics và WebGL projects

### 3. Hooks Configuration Toggle (v2.6.0)

- Cho phép enable/disable hooks thông qua config
- Giải quyết issue #367

### 4. Statusline Display Modes (v2.6.0)

- Configurable display modes cho statusline
- Giải quyết issue #368

### 5. Deletions Array in Metadata (v2.6.0)

- Tự động cleanup archived commands khi update
- Sử dụng glob patterns thay vì explicit paths

---

## Migration Guide

### Từ v2.5.0 lên v2.6.0/v2.7.0

1. **Agents đã bị xóa:** Nếu đang dùng `copywriter`, `database-admin`, `scout`, `scout-external` - cần tìm alternatives hoặc tự implement

2. **Skill rename:** Đổi `brainstorming` → `brainstorm` trong code/config

3. **Hooks config:** Kiểm tra cấu hình hooks mới nếu muốn toggle on/off

4. **Usage API fallback:** OAuth không available? Hooks sẽ tự động fallback

---

## Related Issues

- #367 - Hooks config toggle
- #368 - Statusline display modes
- #369 - Usage API OAuth fallback

---

## Full Commit History

### v2.5.0 → v2.6.0

```
7544d87 feat(hooks): add config toggle for enabling/disabling hooks
947b891 feat(metadata): add deletions array for archived commands cleanup
a4ae50e feat(skills): add agent-browser skill for AI-optimized browser automation
ab12ee2 feat(statusline): add configurable display modes
0cb28a1 fix(deletions): add removed agents
702ceb3 fix(deletions): add skills/brainstorming/** (renamed to brainstorm)
3fe04ee fix(deletions): add verified deprecated commands and skills
4d10d70 fix(hooks): add fallback for usage API when OAuth unavailable
685a120 fix(release): include only plans/templates in release assets
2be49b7 fix(release): preserve deletions array in metadata.json
ad4a151 fix(release): prevent data loss in release scripts
04677c7 docs(git): add merge-main-first reminder to PR and merge workflows
21823de docs(git): add note to search GitHub issues for commit context
11329c7 docs: simplify primary workflow instructions
9c4a8ed refactor(deletions): use glob patterns instead of explicit paths
cd45b07 ci: add auto-sync workflow to merge main back to dev after releases
```

### v2.6.0 → v2.7.0

```
83ca0cd feat(shader): add GLSL fragment shader skill
836c81f feat(git): improve commit standards and workflow notes
35e960e fix(hooks): avoid stuck at descriptive name hook
0fed02e fix(release): pump v2.6.1-beta.0
e435700 fix: resolve merge conflict in package.json version
7074a60 fix: resolve merge conflicts from main into dev
```

---

*Được tạo: 2026-01-27*
