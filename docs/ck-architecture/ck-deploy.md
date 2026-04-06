# /ck:deploy — Auto-Detect Deploy Pipeline

Source: `~/.claude/skills/deploy/SKILL.md` + `references/`

## Authoritative Flow (from SKILL.md)

```
Step 1:  Detect target     → Read docs/deployment.md, scan config files, analyze project type
Step 2:  Platform recommend → Cost-optimized suggestion based on project type + free tiers
Step 3:  User confirmation  → AskUserQuestion with top 4 platform options (if no auto-detect)
Step 4:  CLI setup          → Check/install platform CLI, check/run auth login
Step 5:  Deploy execution   → Run platform-specific deploy command
Step 6:  Verify + docs      → Check deployment URL, create/update docs/deployment.md
Step 7:  Troubleshooting    → Auto-fix common errors or escalate to /ck:devops
```

## Detection Signals (14 platforms)

| File/Pattern | Platform |
|---|---|
| `vercel.json`, `.vercel/` | Vercel |
| `netlify.toml`, `_redirects` | Netlify |
| `wrangler.toml` | Cloudflare |
| `fly.toml` | Fly.io |
| `railway.json` | Railway |
| `render.yaml` | Render |
| `Procfile` + `app.json` | Heroku |
| `tose.yaml` | TOSE.sh |
| `docker-compose.yml` + coolify ref | Coolify |
| `dokploy.yml` | Dokploy |
| `.github/workflows/*pages*` | Github Pages |
| `app.yaml` (GAE) | GCP |
| `amplify.yml` / `buildspec.yml` | AWS |
| `.do/app.yaml` | Digital Ocean |

## Platform Priority (Cost-Optimized)

**Free (static):** Github Pages → Cloudflare Pages → Vercel → Netlify
**Free (backend):** Railway ($5 credit) → Render (750h) → Fly.io (3 VMs)
**Pay-as-you-go:** TOSE.sh → Cloudflare Workers → Railway
**Self-hosted:** Coolify → Dokploy
**Enterprise:** AWS, GCP, Digital Ocean, Vultr, Heroku

## Scope Boundaries

- **Handles:** deployment, platform selection, deployment docs
- **Does NOT handle:** infra provisioning, DB migrations, DNS, SSL, CI/CD pipelines
- **Escalation:** unresolvable errors → `/ck:devops`

## Reference Loading

Progressive disclosure — loads ONLY the platform reference needed from `references/platforms/{name}.md`.

## Post-Deploy Output

Creates/updates `docs/deployment.md` with: platform, URL, deploy command, env vars, custom domain setup, rollback instructions.
