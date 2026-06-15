---
title: "Agent Config Migrator Phase 4"
created: "2026-06-08T00:45:46+07:00"
status: completed
plan: "260607-1729-universal-agent-config-migration-cli"
phase: 4
---

# Agent Config Migrator Phase 4

Implemented the first real write boundary for `acm`: conversion now emits generated content and apply writes only from approved plan data. The important contract change is `MigrationPlan.desiredFiles[].content` plus a stamped `planHash`; apply verifies the hash before write mode.

The hard part was not content generation, it was filesystem safety. Reviews caught multiple sharp edges: symlink escape through targets and `.acm`, unsafe hook script paths, global-scope routing, executable hook scripts, and rollback manifest trust. The final design preflights apply paths, validates rollback manifests, verifies backup hashes, and performs rollback mutations only after all entries pass validation.

Validation passed with `go test ./...`, `go test -race ./...`, `go vet ./...`, `go build ./cmd/acm`, and CLI plan/apply/rollback smoke. Final code review reported no remaining rollback issues.

Unresolved questions: none.
