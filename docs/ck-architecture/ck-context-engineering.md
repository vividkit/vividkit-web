# /ck:context-engineering - Context Diagnostics

## Authoritative Flow

1. Classify the request: runtime usage, degradation, optimization, compression, memory, multi-agent, evaluation, tool design, or pipeline.
2. Load only the smallest relevant context topic.
3. Inspect available runtime signals, transcript, context file, or artifact trail.
4. Score risk: utilization, lost-in-middle, poisoning, stale docs, weak trail, or poor retrieval.
5. Choose a strategy: Write, Select, Compress, or Isolate.
6. Apply the topic-specific pattern: budget, compaction, masking, memory, agent partitioning, probes, or tool redesign.
7. Return concise diagnosis, thresholds, next actions, and reusable artifact.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Mandatory | ck:context-engineering |
| Conditional | ck:scout, ck:fix |
| Tools | context analyzer, compression evaluator, runtime awareness hook |

## Sub-agents

No mandatory sub-agent is declared. Sub-agents are recommended for context isolation when work can be partitioned, not for role-play.

## Mode Selection

| Route | Behavior |
|------|----------|
| runtime | Usage and context-window awareness |
| degradation | Lost-in-middle, poisoning, contradictions, stale docs |
| optimization | Compaction, masking, cache ordering, partitioning |
| compression | Summary quality and probe generation |
| memory | Cross-session memory design |
| multi-agent | Context isolation and coordination |
| tool design | Tool consolidation and clearer descriptions |

## Complexity Routing

Use the smallest strategy that restores signal. Escalate from selection to compression to isolation only when measurement shows the previous layer is insufficient.

## Hard Gate

Measure before optimizing. Plan compaction around 70% context usage, optimize aggressively around 80%, and treat 90% as critical. Critical information belongs at the beginning or end. Summaries should be probe-checkable.
