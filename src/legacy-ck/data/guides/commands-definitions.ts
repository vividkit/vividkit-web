// Definitions, Q&A, modifiers, and help items for command guide tips section
import type { TranslationFn } from "./commands-types";

// Glossary definitions shown in the "What's New" migration section
export function getDefinitions(t: TranslationFn) {
  return [
    { term: t("commands.tips.def.command"), desc: t("commands.tips.def.command_desc") },
    { term: t("commands.tips.def.git"), desc: t("commands.tips.def.git_desc") },
    { term: t("commands.tips.def.deployment"), desc: t("commands.tips.def.deployment_desc") },
    { term: t("commands.tips.def.integration"), desc: t("commands.tips.def.integration_desc") },
    { term: t("commands.tips.def.testing"), desc: t("commands.tips.def.testing_desc") },
    { term: t("commands.tips.def.token"), desc: t("commands.tips.def.token_desc") },
  ];
}

// Frequently asked questions
export function getQA(t: TranslationFn) {
  return [
    { q: t("commands.tips.qa.q1"), a: t("commands.tips.qa.a1") },
    { q: t("commands.tips.qa.q2"), a: t("commands.tips.qa.a2") },
    { q: t("commands.tips.qa.q3"), a: t("commands.tips.qa.a3") },
    { q: t("commands.tips.qa.q4"), a: t("commands.tips.qa.a4") },
    { q: t("commands.tips.qa.q5"), a: t("commands.tips.qa.a5") },
  ];
}

// Command modifier reference table (legacy :fast, :hard, etc.)
export function getModifiers(t: TranslationFn) {
  return [
    {
      mod: ":fast",
      meaning: t("commands.modifiers.fast_meaning"),
      impact: t("commands.modifiers.fast_impact"),
      example: "/plan:fast, /bootstrap:auto:fast",
    },
    {
      mod: ":hard",
      meaning: t("commands.modifiers.hard_meaning"),
      impact: t("commands.modifiers.hard_impact"),
      example: "/plan:hard",
    },
    {
      mod: ":parallel",
      meaning: t("commands.modifiers.parallel_meaning"),
      impact: t("commands.modifiers.parallel_impact"),
      example: "/plan:parallel, /bootstrap:auto:parallel",
    },
    {
      mod: ":two",
      meaning: t("commands.modifiers.two_meaning"),
      impact: t("commands.modifiers.two_impact"),
      example: "/plan:two",
    },
  ];
}

// Help prompts shown in the tips sidebar
export function getHelpItems(t: TranslationFn): string[] {
  return [
    t("commands.help.stuck"),
    t("commands.help.ideas"),
    t("commands.help.progress"),
    t("commands.help.broken"),
    t("commands.help.tokens"),
  ];
}
