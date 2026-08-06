// AgentKit Workflows data index.
// Plan: 260805-1058-agentkit-recommended-skill-combo-workflows
// Engineer flagship (16) + more (20); Marketing empty (Coming soon).

export type {
  AkWorkflow,
  AkWorkflowStep,
  AkWorkflowLevel,
  AkWorkflowRisk,
  AkWorkflowCategory,
  AkWorkflowCategoryMeta,
  AkWorkflowAdviceVariant,
  AkWorkflowPageChrome,
} from "./types";

export {
  akEngineerWorkflows,
  akEngineerFlagshipWorkflows,
  akEngineerMoreWorkflows,
  akEngineerWorkflowCount,
  akEngineerFlagshipCount,
  akEngineerMoreCount,
  akEngineerCatalogCount,
} from "./engineer";

export { akWorkflowPublicIds } from "./publish";

export { akMarketingWorkflows, akMarketingWorkflowCount } from "./marketing";

import type {
  AkWorkflow,
  AkWorkflowCategory,
  AkWorkflowCategoryMeta,
  AkWorkflowLevel,
  AkWorkflowPageChrome,
} from "./types";
import {
  akEngineerFlagshipWorkflows,
  akEngineerMoreWorkflows,
  akEngineerWorkflows,
} from "./engineer";
import { akMarketingWorkflows } from "./marketing";

/** Category order for Engineer tab filters / section headers */
export const akWorkflowCategoryOrder: AkWorkflowCategoryMeta[] = [
  { key: "Getting Started", order: 1, labelEn: "Getting started", labelVi: "Bắt đầu" },
  { key: "Plan & Research", order: 2, labelEn: "Plan & advise", labelVi: "Lên plan & tư vấn" },
  { key: "Debug & Fix", order: 3, labelEn: "Debug & fix", labelVi: "Debug & sửa lỗi" },
  { key: "Review & Ship", order: 4, labelEn: "Review & ship", labelVi: "Review & ship" },
  { key: "Security", order: 5, labelEn: "Security", labelVi: "Bảo mật" },
  { key: "Design & Frontend", order: 6, labelEn: "Design & UI", labelVi: "Design & UI" },
  { key: "Backend & Data", order: 7, labelEn: "Backend & data", labelVi: "Backend & dữ liệu" },
  { key: "Docs & Explain", order: 8, labelEn: "Docs & explain", labelVi: "Docs & giải thích" },
  { key: "Parallel", order: 9, labelEn: "Parallel work", labelVi: "Làm song song" },
  { key: "AI / MCP", order: 10, labelEn: "AI tools / MCP", labelVi: "AI tools / MCP" },
];

/** Page chrome — bilingual fields (skills-cheatsheet pattern). UI phase resolves by locale. */
export const akWorkflowPageChrome: AkWorkflowPageChrome = {
  skeleton: {
    titleEn: "A simple way to work",
    titleVi: "Cách làm việc đơn giản",
    bodyEn:
      "Good results usually follow five beats. Skip steps only when the task is small and low risk.",
    bodyVi:
      "Kết quả tốt thường đi theo năm nhịp. Chỉ bỏ bước khi việc nhỏ và ít rủi ro.",
    stagesEn: "Understand · Decide · Do · Check · Ship",
    stagesVi: "Hiểu · Quyết · Làm · Kiểm · Giao",
  },
  adviseVsAdvice: {
    titleEn: "Two ways to get advice",
    titleVi: "Hai cách nhờ tư vấn",
    adviseLabelEn: "Pressure-test before you commit",
    adviseLabelVi: "Thử thách hướng đi trước khi cam kết",
    adviseBodyEn:
      "Use /ak:advise for an honest second opinion before you lock a direction. It runs on the main session model (not kongming), interviews you one question at a time, you confirm the reframing, then you get actionable advice and a checklist — no code.",
    adviseBodyVi:
      "Dùng /ak:advise để nhận second opinion thẳng thắn trước khi cam kết một hướng. Chạy bằng model của main session (không phải kongming), hỏi từng câu, bạn xác nhận reframing, rồi nhận advice + checklist có thể hành động — không viết code.",
    adviceLabelEn: "Kongming checkpoint while you work",
    adviceLabelVi: "Checkpoint kongming khi đang làm",
    adviceBodyEn:
      "Add --advice to /ak:brainstorm, /ak:plan, /ak:cook, /ak:fix, or /ak:vibe so kongming supervises mid-run. It cannot approve or replace your plan review. Different from /ak:advise (and from --agent).",
    adviceBodyVi:
      "Thêm --advice vào /ak:brainstorm, /ak:plan, /ak:cook, /ak:fix hoặc /ak:vibe để kongming giám sát giữa chừng. Không phê duyệt hay thay bước bạn duyệt plan. Khác với /ak:advise (và khác --agent).",
    badgeNoteEn: "Pick one path that fits — you do not need both every time.",
    badgeNoteVi: "Chọn một cách phù hợp — không cần dùng cả hai mọi lúc.",
    whenSkipEn: "Skip --advice for tiny one-file edits. --hard --advice is expensive — keep for high-risk work.",
    whenSkipVi: "Đừng gắn --advice cho sửa một file nhỏ. --hard --advice rất nặng — giữ cho việc high-risk.",
  },
  adviseAgent: {
    titleEn: "/ak:advise vs /ak:advise --agent",
    titleVi: "/ak:advise vs /ak:advise --agent",
    bodyEn:
      "Same advisory logic. Different mainly in model, context isolation, and how questions are asked. Neither summons kongming.",
    bodyVi:
      "Logic tư vấn cuối cùng giống nhau. Khác chủ yếu ở model, context isolation và cách hỏi đáp. Cả hai đều không gọi kongming.",
    inlineCmd: '/ak:advise "problem"',
    agentCmd: '/ak:advise "problem" --agent',
    inlinePointsEn: [
      "Main agent + current session model",
      "Uses full conversation context",
      "Faster and cheaper — default for most cases",
      "Works the same on Claude Code and Codex",
    ],
    inlinePointsVi: [
      "Main agent + model session hiện tại",
      "Dùng toàn bộ conversation context",
      "Nhanh và rẻ hơn — mặc định cho hầu hết case",
      "Giống nhau trên Claude Code và Codex",
    ],
    agentPointsEn: [
      "Fully supported on Claude Code only",
      "Subagent advisor on fable + AskUserQuestion relay + state file re-spawn",
      "Isolated context; slower / more tokens",
      "On Codex: falls back to inline — no advisor/fable isolation",
    ],
    agentPointsVi: [
      "Chỉ hỗ trợ đầy đủ trên Claude Code",
      "Subagent advisor / fable + relay AskUserQuestion + state file re-spawn",
      "Context cô lập; chậm / tốn token hơn",
      "Trên Codex: fallback về inline — không có isolation advisor/fable",
    ],
    whenInlineEn: "Use inline for ~80–90% of cases.",
    whenInlineVi: "Dùng inline cho khoảng 80–90% trường hợp.",
    whenAgentEn:
      "Use --agent on Claude Code when stakes are high, the interview will be long, you want an independent second look, or you want to keep the main context clean for plan/cook.",
    whenAgentVi:
      "Dùng --agent trên Claude Code khi stakes cao, phỏng vấn dài, muốn góc nhìn độc lập, hoặc muốn giữ main context sạch cho plan/cook.",
    footerEn:
      "Codex can still spawn other subagents — only the advise --agent relay workflow is not ported yet, so --agent falls back to inline. kongming appears with plan/cook --advice — not with advise.",
    footerVi:
      "Codex vẫn spawn được subagent khác — chỉ workflow relay của advise --agent chưa port, nên --agent fallback về inline. kongming xuất hiện với plan/cook --advice — không phải với advise.",
  },
  router: {
    titleEn: "Not sure where to start?",
    titleVi: "Chưa biết bắt đầu từ đâu?",
    bodyEn:
      'Describe the task once. /ak:agentkit picks a sensible path. If you already know the skill, call it directly.',
    bodyVi:
      'Mô tả task một lần. /ak:agentkit sẽ chọn đường hợp lý. Đã biết skill thì gọi thẳng.',
  },
  marketingEmpty: {
    titleEn: "Marketing recipes are on the way",
    titleVi: "Recipe Marketing sắp có",
    bodyEn:
      "Right now this page focuses on engineering day-to-day work. Marketing skill chains will show up here when they are ready.",
    bodyVi:
      "Hiện trang tập trung việc coding hằng ngày. Chuỗi skill Marketing sẽ hiện ở đây khi sẵn sàng.",
  },
  moreSection: {
    titleEn: "More reference workflows",
    titleVi: "Thêm workflow tham khảo",
    bodyEn: "Same skills, different situations — payments, flaky bugs, handoffs, and more.",
    bodyVi: "Cùng skill, khác tình huống — thanh toán, bug flaky, bàn giao, và hơn nữa.",
  },
  antiPatterns: [
    {
      id: "AP1",
      dontEn: "A long chain for a one-file tweak",
      preferEn: "One quick /ak:cook --fast (or the domain skill you already know)",
      dontVi: "Chuỗi dài cho sửa một file",
      preferVi: "Một lệnh /ak:cook --fast (hoặc skill domain bạn đã biết)",
    },
    {
      id: "AP2",
      dontEn: "Skip review on login or payments",
      preferEn: "Keep security + review steps for auth and money paths",
      dontVi: "Bỏ review trên đăng nhập / thanh toán",
      preferVi: "Giữ bước security + review cho auth và tiền",
    },
    {
      id: "AP3",
      dontEn: "Ship before tests pass",
      preferEn: "Test (and review when risk is high) before /ak:ship",
      dontVi: "Ship trước khi test xong",
      preferVi: "Test (và review nếu rủi ro cao) trước /ak:ship",
    },
    {
      id: "AP4",
      dontEn: "Jump to a new plan without new facts",
      preferEn: "Fix the broken step, then continue the chain",
      dontVi: "Nhảy plan mới khi chưa có bằng chứng mới",
      preferVi: "Sửa bước đang hỏng, rồi tiếp tục chuỗi",
    },
    {
      id: "AP5",
      dontEn: "Call a skill that is not installed",
      preferEn: "Check the skills list, or run /ak:find-skills first",
      dontVi: "Gọi skill chưa cài",
      preferVi: "Xem bảng skills, hoặc chạy /ak:find-skills trước",
    },
    {
      id: "AP6",
      dontEn: "Mix up /ak:advise, --agent, and --advice",
      preferEn:
        "/ak:advise = main model · --agent = advisor/fable · plan/cook --advice = kongming",
      dontVi: "Nhầm /ak:advise, --agent, và --advice",
      preferVi:
        "/ak:advise = model main · --agent = advisor/fable · plan/cook --advice = kongming",
    },
    {
      id: "AP7",
      dontEn: "Add --advice to every tiny edit",
      preferEn: "Use it when the decision is hard or the blast radius is big",
      dontVi: "Gắn --advice mọi sửa nhỏ",
      preferVi: "Chỉ khi quyết định khó hoặc ảnh hưởng lớn",
    },
    {
      id: "AP8",
      dontEn: "Always chain cook → test → code-review → ship",
      preferEn:
        "cook already runs tester + reviewer; extra gates only when you want an independent check",
      dontVi: "Luôn xâu cook → test → code-review → ship",
      preferVi:
        "cook đã chạy tester + reviewer; cổng thêm chỉ khi muốn kiểm độc lập",
    },
  ],
};

/** Invocation hint for page chrome (Claude Code / Cursor vs Codex) */
export const akWorkflowInvocationHint = {
  en: "In Claude Code or Cursor type /ak:… · In Codex type $ak:…",
  vi: "Claude Code hoặc Cursor: gõ /ak:… · Codex: gõ $ak:…",
} as const;

export function getAkWorkflowById(id: string): AkWorkflow | undefined {
  return akEngineerWorkflows.find((w) => w.id === id);
}

export function filterAkWorkflows(options: {
  featured?: boolean;
  category?: AkWorkflowCategory | string;
  level?: AkWorkflowLevel;
  list?: AkWorkflow[];
}): AkWorkflow[] {
  const list = options.list ?? akEngineerWorkflows;
  return list.filter((w) => {
    if (options.featured !== undefined && w.featured !== options.featured) return false;
    if (options.category && w.category !== options.category) return false;
    if (options.level && w.level !== options.level) return false;
    return true;
  });
}

/** All skill commands referenced in structured steps (for drift tracker seed). */
export function extractAkWorkflowSkillCommands(
  list: AkWorkflow[] = akEngineerWorkflows,
): string[] {
  const set = new Set<string>();
  for (const w of list) {
    for (const s of w.steps) {
      if (!s.command) continue;
      // Normalize to base /ak:slug (strip args/flags for inventory keys)
      const m = s.command.match(/^(\/ak:[a-z0-9-]+)/i);
      if (m) set.add(m[1]);
    }
  }
  return [...set].sort();
}

export const akWorkflowsForUi = {
  engineer: akEngineerWorkflows,
  engineerFlagship: akEngineerFlagshipWorkflows,
  engineerMore: akEngineerMoreWorkflows,
  marketing: akMarketingWorkflows,
} as const;
