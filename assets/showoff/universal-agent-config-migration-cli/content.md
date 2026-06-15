# Universal Agent Config Migration CLI

## 1. Hero / Mở bài

### VI

`acm` là CLI Go để chuyển một project Claude Code / ClaudeKit sang cấu hình Codex mà không phải bê nguyên cả thư mục `.claude` rồi hy vọng mọi thứ chạy đúng.

Ý chính: quét trước, lập plan trước, xem cảnh báo trước, rồi mới apply. Nếu apply lỗi hoặc kết quả không như ý, dùng manifest để rollback.

### EN

`acm` is a Go CLI for moving a Claude Code / ClaudeKit-style project into a Codex-compatible config without blindly copying the whole `.claude` tree and hoping it works.

The core idea: scan first, plan first, review compatibility warnings, then apply. If the result is wrong, rollback from the backup manifest.

## 2. Why This Exists / Vì sao cần tool này

### VI

Claude Code và Codex đều dùng file cấu hình theo project, nhưng cách đặt instruction, skill, agent, hook, MCP và rules không giống nhau. Một migration tốt phải hiểu khác biệt đó:

- `CLAUDE.md` không tự động tương đương với mọi phần của `AGENTS.md`.
- Hooks cần kiểm tra event nào Codex hỗ trợ, event nào phải gợi ý sửa.
- Skills và agents nên được chọn theo vai trò, không nhất thiết copy toàn bộ.
- Apply phải có backup và rollback, vì cấu hình agent là phần có thể làm đổi hành vi của cả repo.

### EN

Claude Code and Codex both use project-level configuration, but their instruction files, skills, agents, hooks, MCP files, and rules do not map one-to-one. A good migration needs to understand those differences:

- `CLAUDE.md` is not automatically equivalent to every `AGENTS.md` section.
- Hooks need event-level compatibility checks.
- Skills and agents should be selected by role, not always copied wholesale.
- Apply needs backup and rollback because agent config can change the behavior of the whole repository.

## 3. Product Shape / Hình dáng sản phẩm

### VI

MVP ưu tiên Claude-to-Codex:

```sh
acm wizard --from claude --to codex --project ./my-claude-project
acm plan --from claude --to codex --project ./my-claude-project --bundle engineer --json > plan.json
acm apply plan.json --dry-run
acm apply plan.json --yes
acm check --target codex --project ./my-claude-project
acm rollback BACKUP_ID --project ./my-claude-project
```

Các provider như Gemini, OpenCode, Cursor, Windsurf đang là roadmap adapter, chưa được mô tả như target migration-ready.

### EN

The MVP focuses on Claude-to-Codex:

```sh
acm wizard --from claude --to codex --project ./my-claude-project
acm plan --from claude --to codex --project ./my-claude-project --bundle engineer --json > plan.json
acm apply plan.json --dry-run
acm apply plan.json --yes
acm check --target codex --project ./my-claude-project
acm rollback BACKUP_ID --project ./my-claude-project
```

Gemini, OpenCode, Cursor, and Windsurf are roadmap adapters, not migration-ready targets yet.

## 4. Architecture / Kiến trúc

### VI

`cmd/acm` chỉ giữ command và flags. Core engine đi qua các bước:

1. `discovery` đọc source tree thành inventory.
2. `bundles` lọc theo role hoặc custom selection.
3. `compat` tạo findings và suggested fixes.
4. `convert` tạo write-neutral `MigrationPlan`.
5. `apply` là package duy nhất được ghi file, tạo backup và manifest.
6. `rollback` khôi phục dựa trên backup id hợp lệ.

### EN

`cmd/acm` only owns commands and flags. The core engine moves through:

1. `discovery` reads the source tree into an inventory.
2. `bundles` filters by role or custom selection.
3. `compat` emits findings and suggested fixes.
4. `convert` creates a write-neutral `MigrationPlan`.
5. `apply` is the only package allowed to write files, creating backups and manifests.
6. `rollback` restores from a validated backup id.

## 5. Safety Contract / Hợp đồng an toàn

### VI

Các guardrail đã được kiểm thử:

- `go test ./...`, race test, vet, build, `make check`, `make build-all`.
- Test fixtures cho scan, plan, apply, rollback, output snapshot.
- Private-path scan để docs public không lộ path máy local.
- Rollback hardening: giữ file mode, validate backup id, không xóa thư mục ngoài target.
- Unknown provider features thành warnings, không silent drop.

### EN

The tested guardrails:

- `go test ./...`, race tests, vet, build, `make check`, `make build-all`.
- Fixtures for scan, plan, apply, rollback, and human-output snapshots.
- Private-path scan so public docs do not leak local machine paths.
- Rollback hardening: preserve file modes, validate backup ids, avoid deleting directories outside the target.
- Unknown provider features become warnings, not silent drops.

## References

- Local plan: `/Users/thieunv/projects/personal/vividkit-web/plans/260607-1729-universal-agent-config-migration-cli/plan.md`
- Local CLI README: `/Users/thieunv/projects/personal/agent-config-migrator/README.md`
- Local comparison doc: `/Users/thieunv/projects/personal/agent-config-migrator/docs/ck-migrate-comparison.md`
- Local compatibility matrix: `/Users/thieunv/projects/personal/agent-config-migrator/docs/compatibility-matrix.md`
- OpenAI Codex `AGENTS.md` note: https://github.com/openai/codex/blob/main/docs/agents_md.md
- Claude Code settings docs: https://code.claude.com/docs/en/settings
- Claude Code hooks reference: https://code.claude.com/docs/en/hooks
- Bubble Tea project: https://github.com/charmbracelet/bubbletea
