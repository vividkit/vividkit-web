export type CommandCatalogKit = "engineer" | "marketing";

interface ScenarioReference {
  id: string;
  command: string;
  kit?: CommandCatalogKit | "marketer";
}

interface ScenarioResolverOptions {
  kit?: CommandCatalogKit;
  aliases?: Readonly<Record<string, string>>;
}

/**
 * Returns the stable skill identity used for links and search. Display prefixes
 * are deliberately ignored so existing CK scenario IDs survive the AK migration.
 */
export function commandSkillId(command: string): string {
  const match = command.trim().toLowerCase().match(/^\/(?:ak|ckm?|mkt):([a-z0-9-]+)/i);
  return match?.[1] ?? command.trim().toLowerCase();
}

export function legacyCommandAliases(
  command: string,
  kit: CommandCatalogKit,
): string[] {
  const skillId = commandSkillId(command);
  if (!command.trim().toLowerCase().startsWith("/ak:")) return [];
  return kit === "marketing"
    ? [`/ckm:${skillId}`, `/ck:${skillId}`]
    : [`/ck:${skillId}`];
}

export function createScenarioResolver(
  scenarios: readonly ScenarioReference[],
  options: ScenarioResolverOptions = {},
): (command: string) => string | null {
  const fallbackIds = new Map<string, string>();
  const kitIds = new Map<string, string>();

  for (const scenario of scenarios) {
    const skillId = commandSkillId(scenario.command);
    if (!fallbackIds.has(skillId)) fallbackIds.set(skillId, scenario.id);
    const scenarioKit = scenario.kit === "marketer" ? "marketing" : scenario.kit;
    if (options.kit && scenarioKit === options.kit) kitIds.set(skillId, scenario.id);
  }

  return (command: string): string | null => {
    const initialId = commandSkillId(command);
    const resolvedId = options.aliases?.[initialId] ?? initialId;
    return kitIds.get(resolvedId) ?? fallbackIds.get(resolvedId) ?? null;
  };
}
