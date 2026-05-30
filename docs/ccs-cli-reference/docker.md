# `ccs docker` — Integrated Single-Container Stack

Source: `reference/ccs/src/commands/docker/`. Boots the stack named `ccs-cliproxy`, supervised by `supervisord`.

## Stack Overview

One container runs **two services side-by-side**:

| Service | Default Host Port | In-container Log |
|---|---|---|
| CCS Dashboard (Node web UI) | `3000` | `/var/log/ccs/ccs-dashboard.log` |
| CLIProxy (LLM proxy daemon) | `8317` | `/var/log/ccs/cliproxy.log` |

Both managed via `supervisorctl -c /etc/supervisord.conf` (programs: `ccs-dashboard`, `cliproxy`).

The compose file is **bundled with the npm package** at `<package-root>/docker/docker-compose.integrated.yml` (alongside `Dockerfile.integrated`, `supervisord.conf`, `entrypoint-integrated.sh`). **Not generated** — port + version values flow in via env vars (`CCS_DASHBOARD_PORT`, `CCS_CLIPROXY_PORT`, `CCS_NPM_VERSION`). Service name + container name = `ccs-cliproxy`.

For remote deploys, assets `scp`'d to `~/.ccs/docker` on the target host.

## Root Flag

| Flag | Purpose |
|---|---|
| `--host <target>` | SSH against remote host (alias or `user@host`). Accepted at root (`ccs docker --host x up`) — `index.ts` normalizes to `ccs docker up --host x` before dispatch (only when `--host` is first token) |
| `--help`/`-h` | Show help |

---

## `up`

```
ccs docker up [--host <t>] [--port <n>] [--proxy-port <n>]
```

**What** — Builds and starts the integrated stack in detached mode.

**How**
1. If `--host`: `ssh <host> mkdir -p ~/.ccs/docker` → `scp` the four bundled assets there.
2. Resolve compose CLI: prefers `docker compose`, fallback `docker-compose` (cached per-process via `cachedLocalComposePrefix`).
3. `docker compose -f docker-compose.integrated.yml up -d --build` with env: `CCS_NPM_VERSION` (from package.json), `CCS_DASHBOARD_PORT`, `CCS_CLIPROXY_PORT`.
4. Remote: `cd ~/.ccs/docker && export CCS_*=... && docker compose ... up -d --build` over SSH.
5. Build timeout **5 min** (`REMOTE_DOCKER_BUILD_TIMEOUT_MS`).

**Flags**

| Flag | Default | Notes |
|---|---|---|
| `--port <n>` | `3000` | Dashboard host port |
| `--proxy-port <n>` | `8317` | CLIProxy host port |
| `--host <t>` | — | Remote SSH target |

Validation: ports must be 1-65535 integers.

**Step-by-step** — `ccs docker up` → "Starting integrated Docker stack..." → on success prints dashboard + proxy ports. Remote success appends hint to `docker exec -it ccs-cliproxy ccs config auth setup` for full management.

---

## `down`

```
ccs docker down [--host <t>]
```

**What** — Stops and removes the stack via `docker compose down`.

**How** — `runCompose(['down'], options)` — local or SSH. Default sync timeout (10s local / 30s remote). Volumes are **NOT pruned** (no `-v`).

---

## `status`

```
ccs docker status [--host <t>]
```

**What** — Two-step status: compose `ps` + supervisor `status`.

**How**
1. `docker compose -f ... ps` (must succeed, else throws).
2. If exit 0: `docker exec ccs-cliproxy supervisorctl -c /etc/supervisord.conf status`.
3. Output sections: `Compose:` (table), `Supervisor:` (per-program state). Supervisor failure prints stderr/stdout under info message.

Sample output rows: `ccs-dashboard RUNNING`, `cliproxy RUNNING`.

---

## `update`

```
ccs docker update [--host <t>]
```

**What** — In-place upgrade of CCS + CLIProxy inside the running container.

**How** — Single `docker exec ccs-cliproxy sh -lc <script>`:
```
npm install -g @kaitranntt/ccs@latest --force
&& ccs cliproxy --latest
&& supervisorctl -c /etc/supervisord.conf restart ccs-dashboard cliproxy
```

Build timeout 5 min. **Container is NOT rebuilt** — only the in-container CCS npm package + cliproxy binary refresh; supervisord restarts both programs.

**Caveat** — Drifts from the original `docker compose up --build` image. For full image refresh, `down` then `up`.

---

## `logs`

```
ccs docker logs [--host <t>] [--follow] [--service ccs|cliproxy]
```

**What** — Tails container log files (NOT `docker logs`).

**How** — Reads files directly inside container:
- `ccs` → `/var/log/ccs/ccs-dashboard.log`
- `cliproxy` → `/var/log/ccs/cliproxy.log`

Always touches files first to avoid `tail` errors on cold starts:
- `--follow`: `mkdir -p /var/log/ccs && touch <files> && tail -n 100 -F <files>` — streamed via `stdio: 'inherit'` (no timeout).
- No follow + `--service`: single-file `tail -n 100`.
- No follow + no service: prints `== ccs ==` header + tail, then `== cliproxy ==` header + tail.

**Flags**

| Flag | Notes |
|---|---|
| `--follow` | Stream continuously, blocking (Ctrl-C exits) |
| `--service ccs\|cliproxy` | Filter to one log |
| `--host <t>` | Remote |

---

## `config`

```
ccs docker config [--host <t>]
```

**What** — Read-only summary table of paths and defaults. Does NOT show rendered compose file or run `docker compose config`.

**Output rows**

| Setting | Source |
|---|---|
| Mode | `local` or `remote (<host>)` |
| Local CCS Dir | `getCcsDir()` (`~/.ccs` or `$CCS_HOME`) |
| Bundled Docker Dir | `<pkg>/docker` |
| Compose File | `docker-compose.integrated.yml` path |
| Dockerfile | `Dockerfile.integrated` path |
| Supervisor Config | `supervisord.conf` path |
| Entrypoint | `entrypoint-integrated.sh` path |
| Remote Deploy Dir | `~/.ccs/docker` |
| Compose Service | `ccs-cliproxy` |
| Container Name | `ccs-cliproxy` |
| Dashboard Port | `3000` |
| CLIProxy Port | `8317` |

`--host` only changes the Mode row label.

---

## `show-key`

```
ccs docker show-key [--host <t>] [--full] [--container-scope] [--banner-only]
```

**What** — Prints the Docker CLIProxy API key. Masked by default; `--full` reveals the full key. Added in 8.1.0.

**How** — Host mode delegates to `DockerExecutor.showKey({host}, full)` which `docker exec`s into `ccs-cliproxy`. Inside the container (auto-detected via `/.dockerenv`, or forced with `--container-scope`), reads `docker-key-rotation` state directly: current key, legacy-grace expiry, and a state-path repair notice if the marker was unreadable.

**Flags**

| Flag | Effect |
|---|---|
| `--full` | Reveal full unmasked key |
| `--banner-only` | Print only the rotation banner (skips UI init — CI-friendly) |
| `--container-scope` | Force in-container volume read (auto-on inside `/.dockerenv`) |

## `finalize-key-rotation`

```
ccs docker finalize-key-rotation [--host <t>] [--container-scope]
```

**What** — Ends the legacy Docker API key grace period immediately. Added in 8.1.0.

**How** — Host mode delegates to `DockerExecutor.finalizeKeyRotation({host})`. In-container mode (auto-detected, or `--container-scope`) calls `finalizeDockerKeyRotation()` and regenerates the CLIProxy config on `CLIPROXY_DEFAULT_PORT` if one exists. Prompts user to restart CLIProxy to reload the regenerated config.

---

## First-Time Deploy Walkthrough

```bash
ccs docker config                     # 1. sanity-check defaults + bundled assets
ccs docker up                         # 2. starts stack (builds image first time, ~minutes)
# -> "Starting integrated Docker stack..."
# -> "Docker stack is running locally."
# -> "Dashboard port: 3000 / CLIProxy port: 8317"

ccs docker status                     # 3. verify RUNNING
# Compose: ccs-cliproxy ... Up
# Supervisor: ccs-dashboard RUNNING, cliproxy RUNNING

ccs docker logs --follow              # 4. tail while exercising the dashboard
open http://localhost:3000            # macOS — or http://<host>:3000 remote

# 5. (Remote only) bootstrap dashboard auth so it's not read-only:
docker exec -it ccs-cliproxy ccs config auth setup

ccs docker update                     # 6. later: refresh in place
ccs docker down                       # 7. tear down
```

**Verification checklist**
- `docker ps` shows container `ccs-cliproxy` healthy.
- `curl -sI http://localhost:3000` returns 200/302 (dashboard).
- `curl -sI http://localhost:8317` reachable (CLIProxy).
- `ccs docker logs --service ccs` shows dashboard startup messages.

---

## Internals

- **`--host` arg normalization** (`index.ts`): rewrites `ccs docker --host x up` → `ccs docker up --host x` only when `--host` is first token.
- **Remote command building** uses POSIX single-quoting (`quotePosix`).
- **Timeouts**: local sync 10s, remote sync 30s, build/update 5 min. Timeout errors include actionable hints.
- **`ensureSuccess`** decorates failures with `Run 'ccs docker up --host <h>' first.` when remote stderr matches `No such file|no configuration file|can't cd|not found`.
- **CLIProxy in-container bootstrap** (`docker-bootstrap.ts`): `entrypoint-integrated.sh` invokes `node dist/docker/docker-bootstrap.js run-cliproxy`, which lazy-installs the binary, generates/regenerates config, registers a session lock, then `spawn`s the proxy with `stdio: 'inherit'`.
- **Supervisord lifecycle** (`supervisord-lifecycle.ts`): inside the container, restarts MUST go through `supervisorctl restart cliproxy` — direct kill+respawn causes FATAL/EADDRINUSE.

## Unresolved Questions

- Volume preservation across `down` → `up`: no `-v` flag confirmed, but exact volume mounts in the bundled compose not enumerated.
