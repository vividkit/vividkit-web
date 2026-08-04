# /ck:document-skills — Office document skill router

Source: `reference/beta/claude/skills/document-skills/SKILL.md`

## Authoritative Flow

```
1. Document Task: Unclear Office document request
2. Detect Type: docx / pdf / pptx / xlsx from cues
3. Dispatch: Invoke matching specialist skill
4. Specialist Result: Output of the routed document skill
```

## Hard Gate

Router only — dispatches to docx/pdf/pptx/xlsx specialists.

## Skills / Tools Activated

| Type | Name |
|------|------|
| skill | `ck:docx` |
| skill | `ck:pdf` |
| skill | `ck:pptx` |
| skill | `ck:xlsx` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

In-session report; optional files under plans/ when flags request them.
