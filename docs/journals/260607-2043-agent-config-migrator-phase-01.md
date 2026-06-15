# Agent Config Migrator Phase 1

Implemented Phase 1 of the Universal Agent Config Migration CLI plan.

Built `/Users/thieunv/projects/personal/agent-config-migrator` as a new Go module with `acm scan`, normalized inventory structs, Claude discovery, Codex capability metadata, and compatibility findings.

Reviewer-driven fixes shaped the contract:

- `--global-root` accepts either `$HOME` or `~/.claude`.
- Command-derived skill targets include a stable path hash to avoid nested path collisions.
- Hook compatibility handles JSON and TOML settings.
- Unknown executable dependency warnings cover hook scripts, MCP commands, and nested skill scripts.

Verification passed with `go test ./...`, `go build ./...`, `go vet ./...`, manual scan smoke, and final code-review pass.
