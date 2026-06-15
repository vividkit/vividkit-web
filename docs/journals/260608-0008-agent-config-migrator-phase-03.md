---
title: "Agent Config Migrator Phase 3"
date: "2026-06-08"
plan: "260607-1729-universal-agent-config-migration-cli"
phase: 3
---

# Agent Config Migrator Phase 3

## Context

Phase 3 made `acm` useful as a guided planner, not only a scan/plan skeleton. Target Go module remains `/Users/thieunv/projects/personal/agent-config-migrator`.

## What Happened

- Added `internal/bundles` with embedded YAML role bundles and optional bundle-file overlays.
- Added `acm bundles list --json`.
- Extended `acm plan` with bundle selection flags: `--include`, `--exclude`, `--only`, `--skip`.
- Added `MigrationPlan.selection` so custom choices survive in plan JSON.
- Added plain-TTY `acm wizard` prompts with flag-equivalent non-interactive behavior.
- Added direct tests for bundles, wizard prompt parsing, and Phase 3 CLI flows.

## Decisions

- Plain-TTY wizard is enough for MVP now; Bubble Tea polish can follow once Phase 4 conversion/apply behavior is deterministic.
- `--exclude` is pattern-based; `--only` and `--skip` are artifact-group based and fail on unknown groups.
- Warnings are generated after bundle filtering so excluded artifacts do not keep nagging users in the final plan.
- Dependency hints focus on script-backed skills when hooks/MCP are excluded by flag or role bundle.

## Verification

- `go test ./...`
- `go test -race ./...`
- `go vet ./...`
- `go build ./cmd/acm`
- CLI smoke for `bundles list`, `plan`, `wizard`, custom one-skill selection, excluded hooks, and invalid artifact groups.
- Tester/code-reviewer subagents reviewed; concrete findings fixed.

## Next

- Phase 4: deterministic conversion, suggested fixes, backup/apply, rollback.
- Phase 5: fixture matrix, release docs, CI, coverage depth.

## Unresolved Questions

- None.
