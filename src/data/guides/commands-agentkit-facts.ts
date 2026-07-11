import {
  AGENTKIT_SKILL_FACTS,
  type AgentKitSkillFact,
} from './agentkit/agentkit-skill-facts.ts';

const skillFactsById = new Map<AgentKitSkillFact['id'], AgentKitSkillFact>(
  AGENTKIT_SKILL_FACTS.map((fact) => [fact.id, fact]),
);

export function agentKitClaudeCodeInvocation(id: AgentKitSkillFact['id']): `/ak:${string}` {
  const fact = skillFactsById.get(id);
  if (!fact) throw new Error(`Missing AgentKit skill fact for ${id}`);
  return fact.invocations.claudeCode;
}

/** Replaces the skill token only; workflow arguments and flags stay intact. */
export function canonicalizeFactBackedInvocation(command: string): string {
  const match = command.match(/^(\/ak:[a-z0-9-]+)(.*)$/i);
  if (!match) return command;
  const id = match[1].slice(1).toLowerCase() as AgentKitSkillFact['id'];
  const fact = skillFactsById.get(id);
  return fact ? `${fact.invocations.claudeCode}${match[2]}` : command;
}

