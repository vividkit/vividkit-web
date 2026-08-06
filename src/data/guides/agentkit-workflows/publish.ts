/**
 * Progressive public reveal for AgentKit workflows (content series).
 *
 * - `null` → show full catalog on the guide page
 * - `string[]` → only these workflow IDs are public; add IDs as you publish posts
 *
 * Catalog data in engineer.ts stays complete — this only gates what the page renders.
 */
export const akWorkflowPublicIds: readonly string[] | null = [
  "A1", // Xây feature mới / Build a new feature
  "A2", // Implement nhanh / Quick implement
  "L1", // Chuỗi feature có tư vấn / Advised feature chain
  "B2", // Plan có cổng kiểm / Plan with gates
];
