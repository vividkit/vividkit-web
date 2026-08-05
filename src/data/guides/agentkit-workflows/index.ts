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
} from "./engineer";

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
  { key: "Plan & Research", order: 2, labelEn: "Plan & research", labelVi: "Lên plan & research" },
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
    adviseLabelEn: "Talk it through first",
    adviseLabelVi: "Nói chuyện làm rõ trước",
    adviseBodyEn:
      "Use /ak:advise when the problem is fuzzy. It asks questions and helps you reframe the goal. It does not write code.",
    adviseBodyVi:
      "Dùng /ak:advise khi bài toán còn mơ hồ. Skill sẽ hỏi để làm rõ mục tiêu. Không viết code.",
    adviceLabelEn: "Second opinion while you work",
    adviceLabelVi: "Ý kiến thứ hai khi đang làm",
    adviceBodyEn:
      "Add --advice to /ak:brainstorm, /ak:plan, /ak:cook, /ak:fix, or /ak:vibe when you want extra challenge mid-pipeline. Different from /ak:advise.",
    adviceBodyVi:
      "Thêm --advice vào /ak:brainstorm, /ak:plan, /ak:cook, /ak:fix hoặc /ak:vibe khi muốn bị thách thức giữa chừng. Khác với /ak:advise.",
    badgeNoteEn: "Pick one path that fits — you do not need both every time.",
    badgeNoteVi: "Chọn một cách phù hợp — không cần dùng cả hai mọi lúc.",
    whenSkipEn: "Skip --advice for tiny one-file edits.",
    whenSkipVi: "Đừng gắn --advice cho sửa một file nhỏ.",
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
      dontEn: "Mix up /ak:advise and --advice",
      preferEn: "/ak:advise = reframe first · --advice = supervise another skill",
      dontVi: "Nhầm /ak:advise với --advice",
      preferVi: "/ak:advise = làm rõ trước · --advice = giám sát skill khác",
    },
    {
      id: "AP7",
      dontEn: "Add --advice to every tiny edit",
      preferEn: "Use it when the decision is hard or the blast radius is big",
      dontVi: "Gắn --advice mọi sửa nhỏ",
      preferVi: "Chỉ khi quyết định khó hoặc ảnh hưởng lớn",
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
