#!/usr/bin/env python3
"""Build source-of-truth registry of all ClaudeKit skills, commands, and agents.

Outputs: reference/skills-registry.json

Sources per branch:
- skills:   parsed from scout JSONs in plans/reports/ (LLM-extracted body+frontmatter)
- commands: parsed directly from `commands/**/*.md` YAML frontmatter
- agents:   parsed directly from `agents/*.md` YAML frontmatter

Flag normalization: only flags declared in `argument-hint` are authoritative.
Body-extracted flags are discarded as noise (script flags in code examples).
"""

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPORTS = ROOT / "plans" / "reports"
OUTPUT = ROOT / "reference" / "skills-registry.json"
INDEX_OUTPUT = ROOT / "reference" / "skills-registry-index.json"

# Per-branch directory layouts. All four branches now use plain `claude/`
# (marketing-stable migrated off the hidden `.claude/` layout as of 2026-06).
# Hard-coded — do not assume uniform layout; re-verify on upstream re-sync.
BRANCH_LAYOUT = {
    "stable":           {"repo": "stable",           "base": "claude"},
    "beta":             {"repo": "beta",             "base": "claude"},
    "marketing-stable": {"repo": "marketing-stable", "base": "claude"},
    "marketing-beta":   {"repo": "marketing-beta",   "base": "claude"},
}

SKILL_SCOUT_FILES = {
    "stable": "scout-260623-1357-skills-stable.json",
    "beta": "scout-260623-1357-skills-beta.json",
    "marketing-stable": "scout-260623-1357-skills-marketing-stable.json",
    "marketing-beta": "scout-260623-1357-skills-marketing-beta.json",
}


# ---------- Helpers ----------

def parse_argument_hint(hint) -> tuple[list[str], list[str]]:
    """Return (args, flags). Only flags declared in argument-hint are kept."""
    if not hint:
        return [], []
    if isinstance(hint, list):
        hint = " ".join(str(x) for x in hint)
    elif not isinstance(hint, str):
        hint = str(hint)
    args = re.findall(r"\[[^\]]+\]", hint)
    flags = sorted({f"--{m}" for m in re.findall(r"--([a-zA-Z][\w-]*)", hint)})
    return args, flags


def parse_frontmatter(text: str) -> dict:
    """Minimal YAML frontmatter parser (no external deps).

    Handles flat scalar/list fields and quoted strings. Sufficient for the
    consistent frontmatter shape used by ClaudeKit skill/command/agent files.
    Returns {} if no frontmatter delimiters found.
    """
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.DOTALL)
    if not m:
        return {}
    body = m.group(1)
    out: dict = {}
    current_key: str | None = None
    multiline_buf: list[str] = []
    for raw in body.splitlines():
        if not raw.strip():
            continue
        if current_key and raw.startswith(("  ", "\t")):
            multiline_buf.append(raw.strip())
            continue
        if current_key:
            out[current_key] = " ".join(multiline_buf).strip().strip('"').strip("'")
            current_key = None
            multiline_buf = []
        if ":" not in raw:
            continue
        key, _, val = raw.partition(":")
        key = key.strip()
        val = val.strip()
        if val == ">-" or val == "|" or val == ">":
            current_key = key
            multiline_buf = []
        else:
            out[key] = val.strip('"').strip("'")
    if current_key:
        out[current_key] = " ".join(multiline_buf).strip().strip('"').strip("'")
    return out


def get_sha(branch: str) -> str | None:
    repo = ROOT / "reference" / BRANCH_LAYOUT[branch]["repo"]
    try:
        return subprocess.check_output(
            ["git", "-C", str(repo), "rev-parse", "HEAD"], text=True
        ).strip()
    except Exception:
        return None


def kit_for(name: str) -> str:
    return "marketer" if name.startswith("ckm:") else "engineer"


# ---------- Skills (from scout JSONs) ----------

def build_skills() -> list[dict]:
    skills: dict[str, dict] = {}
    for branch, filename in SKILL_SCOUT_FILES.items():
        path = REPORTS / filename
        if not path.exists():
            print(f"WARN: missing skill scout {path}")
            continue
        for entry in json.loads(path.read_text()):
            name = entry["name"]
            hint = entry.get("argumentHint", "")
            if isinstance(hint, list):
                hint = " ".join(str(x) for x in hint)
            args, flags = parse_argument_hint(hint)
            sk = skills.setdefault(
                name,
                {"name": name, "kit": kit_for(name), "channels": {}, "deprecated": False},
            )
            sk["channels"][branch] = {
                "version": entry.get("version"),
                "argumentHint": hint,
                "args": args,
                "flags": flags,
                "deprecated": bool(entry.get("deprecated", False)),
                "description": entry.get("description", ""),
            }
            if entry.get("deprecated"):
                sk["deprecated"] = True
    return sorted(skills.values(), key=lambda s: s["name"])


# ---------- Commands (from commands/**/*.md) ----------

def build_commands() -> list[dict]:
    """Walk every branch's commands/ tree. File path → colon-namespaced name.

    e.g. `commands/ckm/plan/archive.md` → `ckm:plan:archive`
    Parent name is the path with the last segment trimmed (None if top-level).
    """
    commands: dict[str, dict] = {}
    for branch, layout in BRANCH_LAYOUT.items():
        cmd_root = ROOT / "reference" / layout["repo"] / layout["base"] / "commands"
        if not cmd_root.is_dir():
            continue
        for md in sorted(cmd_root.rglob("*.md")):
            rel = md.relative_to(cmd_root).with_suffix("")
            parts = list(rel.parts)
            if not parts:
                continue
            name = ":".join(parts)
            parent = ":".join(parts[:-1]) if len(parts) > 1 else None
            fm = parse_frontmatter(md.read_text(errors="ignore"))
            hint = fm.get("argument-hint", "")
            args, flags = parse_argument_hint(hint)
            entry = commands.setdefault(
                name,
                {
                    "name": name,
                    "kit": kit_for(name),
                    "parent": parent,
                    "channels": {},
                    "deprecated": False,
                },
            )
            description = fm.get("description", "")
            entry["channels"][branch] = {
                "argumentHint": hint,
                "args": args,
                "flags": flags,
                "description": description,
            }
            if "deprecated" in description.lower() or "archived" in description.lower():
                entry["deprecated"] = True
    return sorted(commands.values(), key=lambda c: c["name"])


# ---------- Agents (from agents/*.md) ----------

def build_agents() -> list[dict]:
    agents: dict[str, dict] = {}
    for branch, layout in BRANCH_LAYOUT.items():
        agent_root = ROOT / "reference" / layout["repo"] / layout["base"] / "agents"
        if not agent_root.is_dir():
            continue
        kit = "marketer" if "marketing" in branch else "engineer"
        for md in sorted(agent_root.rglob("*.md")):
            fm = parse_frontmatter(md.read_text(errors="ignore"))
            name = fm.get("name") or md.stem
            # Dedupe by (kit, name) — same agent name can exist in both kits.
            key = f"{kit}:{name}"
            entry = agents.setdefault(
                key,
                {"name": name, "kit": kit, "channels": {}},
            )
            tools = fm.get("tools", "")
            entry["channels"][branch] = {
                "description": fm.get("description", ""),
                "model": fm.get("model"),
                "memory": fm.get("memory"),
                "tools": [t.strip() for t in tools.split(",") if t.strip()] if tools else [],
            }
    return sorted(agents.values(), key=lambda a: (a["kit"], a["name"]))


# ---------- Main ----------

def main() -> None:
    skills = build_skills()
    commands = build_commands()
    agents = build_agents()

    registry = {
        "$schema": "./skills-registry.schema.json",
        "lastBuilt": subprocess.check_output(
            ["date", "-u", "+%Y-%m-%dT%H:%M:%SZ"], text=True
        ).strip(),
        "upstreamShas": {b: get_sha(b) for b in BRANCH_LAYOUT},
        "summary": {
            "totalSkills": len(skills),
            "engineerSkills": sum(1 for s in skills if s["kit"] == "engineer"),
            "marketerSkills": sum(1 for s in skills if s["kit"] == "marketer"),
            "deprecatedSkills": sum(1 for s in skills if s["deprecated"]),
            "totalCommands": len(commands),
            "marketerCommands": sum(1 for c in commands if c["kit"] == "marketer"),
            "engineerCommands": sum(1 for c in commands if c["kit"] == "engineer"),
            "totalAgents": len(agents),
            "engineerAgents": sum(1 for a in agents if a["kit"] == "engineer"),
            "marketerAgents": sum(1 for a in agents if a["kit"] == "marketer"),
        },
        "skills": skills,
        "commands": commands,
        "agents": agents,
    }

    OUTPUT.write_text(json.dumps(registry, indent=2, ensure_ascii=False) + "\n")

    # Slim index — load this into LLM context instead of the full registry.
    # Full registry stays on disk for jq queries by name.
    def channels_of(asset: dict) -> list[str]:
        return sorted(asset.get("channels", {}).keys())

    index = {
        "$comment": "Slim index of reference/skills-registry.json. Read THIS into LLM context, query the full registry via `jq` only when entry detail is needed.",
        "lastBuilt": registry["lastBuilt"],
        "upstreamShas": registry["upstreamShas"],
        "summary": registry["summary"],
        "skills":   [{"name": s["name"], "kit": s["kit"], "channels": channels_of(s), "deprecated": s["deprecated"]} for s in skills],
        "commands": [{"name": c["name"], "kit": c["kit"], "parent": c["parent"], "channels": channels_of(c), "deprecated": c["deprecated"]} for c in commands],
        "agents":   [{"name": a["name"], "kit": a["kit"], "channels": channels_of(a)} for a in agents],
    }
    # Pretty-print top-level keys but keep each entry on a single line — keeps
    # the file readable as JSON while being ~10× smaller in line count.
    def render_index(idx: dict) -> str:
        out = ["{"]
        keys = list(idx.keys())
        for i, key in enumerate(keys):
            val = idx[key]
            comma = "," if i < len(keys) - 1 else ""
            if isinstance(val, list):
                out.append(f"  {json.dumps(key)}: [")
                for j, item in enumerate(val):
                    sep = "," if j < len(val) - 1 else ""
                    out.append(f"    {json.dumps(item, ensure_ascii=False)}{sep}")
                out.append(f"  ]{comma}")
            else:
                out.append(f"  {json.dumps(key)}: {json.dumps(val, indent=2, ensure_ascii=False)}{comma}".replace("\n", "\n  "))
        out.append("}")
        return "\n".join(out) + "\n"

    INDEX_OUTPUT.write_text(render_index(index))

    s = registry["summary"]
    print(f"Wrote {OUTPUT}")
    print(f"Wrote {INDEX_OUTPUT} (slim, for LLM context)")
    print(f"  skills:   {s['totalSkills']} ({s['engineerSkills']} engineer + {s['marketerSkills']} marketer, {s['deprecatedSkills']} deprecated)")
    print(f"  commands: {s['totalCommands']} ({s['engineerCommands']} engineer + {s['marketerCommands']} marketer)")
    print(f"  agents:   {s['totalAgents']} ({s['engineerAgents']} engineer + {s['marketerAgents']} marketer)")


if __name__ == "__main__":
    main()
