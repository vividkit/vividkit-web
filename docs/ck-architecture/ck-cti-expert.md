# /ck:cti-expert - CTI and OSINT Investigation

Source: local `ck:cti-expert` skill.

## Authoritative Flow

1. Acquire: collect public evidence via sweep, query, username, phone, email, subdomain, breach, dork, threat, and domain modules.
2. Enrich: pivot and connect identifiers with branch, crossref, timeline, link-subjects, signatures, and parallel fanout when there are 3+ subjects.
3. Assess: score and verify with exposure, threat-model, validate, coverage, verify-finding, blind-spots, and source-check.
4. Deliver: package findings via report, brief, render, workspace save, and IOC exports.

## Skills Activated

| Type | Skill / Tooling |
|------|-----------------|
| Collection | Browser automation, web search/fetch, Scrapling, direct curl |
| OSINT CLI | Maigret, Sherlock, Blackbird, PhoneInfoga, Holehe, h8mail, theHarvester, Subfinder, Amass, GAU, TruffleHog, Gitleaks |
| Analysis | AgentFlow fanout, timelines, graph/path tools, source confidence checks |
| Reporting | DOCX generator, pandoc fallback, Python chart/diagram post-processing |

## Sub-agents

No fixed persona is mandatory. Parallel enrichment can fan out across subjects when Acquire finds 3+ subjects, then merge by `(subject, finding_type, source)` with higher-trust resolution.

## Mode Selection

| Mode | Meaning |
|------|---------|
| Default | Practitioner mode with normal confirmations. |
| `/novice` | Lower-jargon guided mode. |
| `/novice off` | Specialist mode with denser detail. |
| `--case` | Case workflow. |
| `--sweep` | Broad evidence sweep. |
| `--query` | Query-led investigation. |
| `--flow` | Guided person/domain/email/quick flow. |
| `--yolo` | Autonomous mode while keeping ethics, trust, citation, validate, and coverage gates. |

## Hard Gate

- Public data only.
- No stalking, harassment, doxing, unauthorized access, social engineering, or unlawful activity.
- High-risk findings require acknowledgment.
- Critical protected-subject cases require explicit responsibility acceptance or abort.
- Destructive operations, PII export, bulk operations, resource-heavy sweeps, and external sharing require confirmation.
- Security-audit templates require owned domain or written permission.
- Delivery requires legal/ethics pass, target coverage, corroboration for critical/high findings, confidence, limitations, citations, and saved paths.

## Artifacts

- `OSINT-REPORT-[CASE-ID]-[YYYY-MM-DD].md`
- `OSINT-REPORT-[CASE-ID]-[YYYY-MM-DD].docx`
- JSON/CSV reports when requested.
- IOC exports: STIX JSON, flat text, and CSV.
- ASCII visuals: entity map, timeline, risk heatmap, network topology, threat path, and attack surface.
- Workspace save/open/list/diff artifacts.
