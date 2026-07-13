import type { HookCategory, HookDef } from "@legacy-ck/data/guides/custom-hooks/custom-hooks-data";

export type KitToken = "ek" | "mk" | "both";

export interface HookViewModel extends HookDef {
  categoryId: string;
  categoryTitleEn: string;
  categoryTitleVi: string;
  categoryColor: string;
  kitToken: KitToken;
  easyDescEn: string;
  easyDescVi: string;
  exampleEn: string;
  exampleVi: string;
  defaultStateLabelEn: string;
  defaultStateLabelVi: string;
  defaultReasonEn: string;
  defaultReasonVi: string;
  flowImpactLabelEn: string;
  flowImpactLabelVi: string;
  flowImpactDescEn: string;
  flowImpactDescVi: string;
  disableTextEn: string;
  disableTextVi: string;
  disableSnippet: string;
  failureModeEn: string;
  failureModeVi: string;
}

export interface HookCategoryViewModel extends HookCategory {
  hooks: HookViewModel[];
}

export const colorMap: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    dot: string;
    badge: string;
  }
> = {
  blue: {
    bg: "bg-blue-50/70 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/25",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  },
  violet: {
    bg: "bg-violet-50/70 dark:bg-violet-500/10",
    border: "border-violet-200 dark:border-violet-500/25",
    text: "text-violet-700 dark:text-violet-300",
    dot: "bg-violet-500",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  },
  emerald: {
    bg: "bg-emerald-50/70 dark:bg-emerald-500/10",
    border: "border-emerald-200 dark:border-emerald-500/25",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
  red: {
    bg: "bg-red-50/70 dark:bg-red-500/10",
    border: "border-red-200 dark:border-red-500/25",
    text: "text-red-700 dark:text-red-300",
    dot: "bg-red-500",
    badge: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  },
  amber: {
    bg: "bg-amber-50/70 dark:bg-amber-500/10",
    border: "border-amber-200 dark:border-amber-500/25",
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
  slate: {
    bg: "bg-slate-50 dark:bg-slate-800/45",
    border: "border-slate-200 dark:border-slate-700",
    text: "text-slate-600 dark:text-slate-300",
    dot: "bg-slate-500",
    badge: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
  },
};

export function kitToken(kits: ("ek" | "mk")[]): KitToken {
  const hasEK = kits.includes("ek");
  const hasMK = kits.includes("mk");
  if (hasEK && hasMK) return "both";
  if (hasEK) return "ek";
  return "mk";
}

const easyHookDescriptions: Record<string, { en: string; vi: string }> = {
  "session-init": {
    en: "Sets up the workspace context when Claude Code starts, so later hooks know the project, config, and environment.",
    vi: "Chuẩn bị context của workspace khi Claude Code bắt đầu, để các hooks sau biết project, config, và environment.",
  },
  "session-state": {
    en: "Keeps track of active plans, todos, and branch state so a session can recover after compaction or handoff.",
    vi: "Theo dõi plan, todo, và branch hiện tại để session có thể phục hồi sau compact hoặc handoff.",
  },
  "usage-quota-cache-refresh": {
    en: "Refreshes quota information in the background so statusline data is available without slowing every prompt.",
    vi: "Refresh quota ở nền để statusline có dữ liệu mà không làm chậm mỗi prompt.",
  },
  "usage-context-awareness": {
    en: "Acts as the on/off switch for quota awareness when a project wants that context.",
    vi: "Đóng vai trò bật/tắt usage awareness khi project muốn dùng context về quota.",
  },
  "dev-rules-reminder": {
    en: "Adds the important project rules back into each prompt so the agent does not forget local conventions.",
    vi: "Đưa các quy tắc quan trọng của project vào mỗi prompt để agent không quên conventions nội bộ.",
  },
  "subagent-init": {
    en: "Gives each new subagent the minimum context it needs instead of dumping the whole session.",
    vi: "Đưa cho mỗi subagent context tối thiểu cần thiết thay vì đổ toàn bộ session vào.",
  },
  "team-context-inject": {
    en: "Helps agent teammates know who is doing what, reducing duplicated work in team-mode runs.",
    vi: "Giúp các agent teammate biết ai đang làm gì, giảm việc làm trùng trong team-mode.",
  },
  "descriptive-name": {
    en: "Stops vague new filenames early and nudges the agent toward descriptive kebab-case names.",
    vi: "Chặn tên file mới quá mơ hồ và nhắc agent dùng kebab-case mô tả rõ hơn.",
  },
  "simplify-gate": {
    en: "Warns or blocks shipping when the diff is getting too large and needs simplification first.",
    vi: "Cảnh báo hoặc chặn ship khi diff quá lớn và cần simplify trước.",
  },
  "plan-format-kanban": {
    en: "Keeps plan links readable by catching file-name-only link text.",
    vi: "Giữ plan dễ đọc bằng cách bắt các link chỉ dùng tên file làm text.",
  },
  "privacy-block": {
    en: "Blocks sensitive files such as .env or credentials until the user explicitly approves access.",
    vi: "Chặn file nhạy cảm như .env hoặc credentials cho tới khi user phê duyệt rõ ràng.",
  },
  "scout-block": {
    en: "Protects ignored or restricted folders using .ckignore patterns before tools read or edit them.",
    vi: "Bảo vệ folder bị ignore hoặc hạn chế bằng .ckignore trước khi tools đọc hoặc sửa.",
  },
  "cook-after-plan-reminder": {
    en: "When planning is done, reminds the agent to move into implementation with the right next command.",
    vi: "Khi planning xong, nhắc agent chuyển sang implementation bằng command tiếp theo phù hợp.",
  },
  "workflow-artifact-gate": {
    en: "Checks review artifacts before finalize or ship-like actions, so the workflow does not skip evidence.",
    vi: "Kiểm tra review artifacts trước finalize hoặc ship-like actions để workflow không bỏ qua evidence.",
  },
};

const hookExamples: Record<string, { en: string; vi: string }> = {
  "session-init": {
    en: "You open Claude Code inside a repo. This hook detects the project, config, package manager, and branch so later hooks know the workspace.",
    vi: "Bạn mở Claude Code trong một repo. Hook này nhận diện project, config, package manager, và branch để các hook sau hiểu workspace.",
  },
  "session-state": {
    en: "After compaction or handoff, AgentKit can restore the active plan and todo list instead of treating the session as blank.",
    vi: "Sau compact hoặc handoff, AgentKit có thể khôi phục plan và todo đang làm thay vì xem session như mới hoàn toàn.",
  },
  "usage-quota-cache-refresh": {
    en: "A statusline can show quota context from cache without making every prompt wait for a fresh quota check.",
    vi: "Statusline có thể hiện context quota từ cache mà không bắt mỗi prompt chờ kiểm tra quota mới.",
  },
  "usage-context-awareness": {
    en: "If a project enables usage awareness, this hook lets quota context appear. If not enabled, it stays quiet.",
    vi: "Nếu project bật usage awareness, hook này cho phép context quota xuất hiện. Nếu chưa bật, nó im lặng.",
  },
  "dev-rules-reminder": {
    en: "You ask for a UI edit. The hook adds project rules back into context, such as read README first and do not revert unrelated changes.",
    vi: "Bạn yêu cầu sửa UI. Hook đưa project rules vào lại context, ví dụ đọc README trước và không revert thay đổi không liên quan.",
  },
  "subagent-init": {
    en: "A review subagent starts. It receives the task and compact repo context, not the entire main conversation.",
    vi: "Một review subagent bắt đầu. Nó nhận task và context repo gọn, không nhận toàn bộ cuộc hội thoại chính.",
  },
  "team-context-inject": {
    en: "In a team run, a frontend teammate can see which file another teammate owns, reducing duplicated edits.",
    vi: "Trong team run, một frontend teammate thấy file nào teammate khác đang phụ trách, giảm việc sửa trùng.",
  },
  "descriptive-name": {
    en: "If the agent tries to create `utils.ts`, the hook nudges it toward a clearer name like `format-campaign-countdown.ts`.",
    vi: "Nếu agent định tạo `utils.ts`, hook nhắc dùng tên rõ hơn như `format-campaign-countdown.ts`.",
  },
  "simplify-gate": {
    en: "Before shipping, a very large diff can trigger a warning or block so the agent simplifies the change first.",
    vi: "Trước khi ship, một diff quá lớn có thể bị cảnh báo hoặc chặn để agent simplify thay đổi trước.",
  },
  "plan-format-kanban": {
    en: "If a plan link only says `task-1.md`, the hook asks for human-readable link text so the plan is easier to scan.",
    vi: "Nếu link trong plan chỉ ghi `task-1.md`, hook nhắc dùng text dễ đọc để plan dễ scan hơn.",
  },
  "privacy-block": {
    en: "A tool tries to read `.env`. The hook blocks the read and asks for explicit user approval first.",
    vi: "Một tool định đọc `.env`. Hook chặn lượt đọc đó và yêu cầu user phê duyệt rõ ràng trước.",
  },
  "scout-block": {
    en: "A tool tries to inspect a folder ignored by `.ckignore`. The hook blocks it before the agent reads or edits that path.",
    vi: "Một tool định xem thư mục bị `.ckignore` bỏ qua. Hook chặn trước khi agent đọc hoặc sửa path đó.",
  },
  "cook-after-plan-reminder": {
    en: "When the planning agent finishes, this hook points the next step toward implementation with the generated plan path.",
    vi: "Khi planning agent hoàn tất, hook chỉ bước tiếp theo sang implementation kèm path của plan vừa tạo.",
  },
  "workflow-artifact-gate": {
    en: "Before finalize, the hook checks that verification and review artifacts exist so the workflow does not skip evidence.",
    vi: "Trước finalize, hook kiểm tra verification và review artifacts tồn tại để workflow không bỏ qua evidence.",
  },
};

const defaultStateLabels: Record<HookDef["defaultState"], { en: string; vi: string }> = {
  on: { en: "Default ON", vi: "Mặc định bật" },
  off: { en: "Default OFF", vi: "Mặc định tắt" },
  removed: { en: "Removed", vi: "Đã remove" },
};

const defaultReasonText: Record<HookDef["defaultReason"], { en: string; vi: string }> = {
  "active-default": {
    en: "Registered in the current default guardrail set.",
    vi: "Đang chạy sẵn trong bộ guard rails mặc định.",
  },
  "generated-context": {
    en: "Source still ships, but new installs do not register generated context hooks by default.",
    vi: "File hook vẫn có sẵn, nhưng project mới không tự bật nhóm hook inject context này.",
  },
  "opt-in-gate": {
    en: "Available as an opt-in gate; it only acts after you enable its gate config.",
    vi: "Có sẵn nhưng chỉ chạy sau khi bạn chủ động bật gate.",
  },
  "agent-teams-opt-in": {
    en: "Used by Agent Teams flows; not part of the normal single-agent default.",
    vi: "Dùng cho Agent Teams; single-agent bình thường không chạy hook này.",
  },
  removed: {
    en: "No active hook file in the current stable distribution.",
    vi: "Không còn file hook active trong stable hiện tại.",
  },
};

const flowImpactText: Record<
  HookDef["flowImpact"],
  { labelEn: string; labelVi: string; descEn: string; descVi: string }
> = {
  "policy-block": {
    labelEn: "Can block",
    labelVi: "Có thể chặn",
    descEn: "When enabled, an intentional policy match can stop the current tool/action.",
    descVi: "Khi bật, nếu rule thật sự match thì hook có thể chặn action hiện tại.",
  },
  guidance: {
    labelEn: "Guidance only",
    labelVi: "Chỉ nhắc",
    descEn: "Adds a reminder or warning, then lets work continue.",
    descVi: "Thêm nhắc nhở hoặc cảnh báo, rồi để flow tiếp tục.",
  },
  context: {
    labelEn: "Adds context",
    labelVi: "Thêm context",
    descEn: "Injects useful context for the main agent or subagents.",
    descVi: "Đưa thêm context hữu ích cho main agent hoặc subagents.",
  },
  state: {
    labelEn: "Saves state",
    labelVi: "Lưu state",
    descEn: "Records progress so later steps can recover or summarize it.",
    descVi: "Ghi lại tiến độ để bước sau khôi phục hoặc tổng hợp.",
  },
  removed: {
    labelEn: "Not active",
    labelVi: "Không active",
    descEn: "This hook is no longer part of the active stable flow.",
    descVi: "Hook này không còn thuộc flow stable đang active.",
  },
};

function standardDisableSnippet(hookId: string): string {
  return `{
  "hooks": {
    "${hookId}": false
  }
}`;
}

function disableSnippet(hook: HookDef): string {
  if (hook.disableMode === "workflow") {
    return `{
  "hooks": {
    "workflow-artifact-gate": false
  },
  "workflowArtifactGate": {
    "enabled": false
  }
}`;
  }

  if (hook.disableMode === "simplify") {
    return `{
  "hooks": {
    "simplify-gate": false
  },
  "simplify": {
    "gate": {
      "enabled": false
    }
  }
}`;
  }

  if (hook.disableMode === "removed" || hook.defaultState === "removed") {
    return `# No active stable hook file.
# If an old project still calls it, remove that command from .claude/settings.json.`;
  }

  return standardDisableSnippet(hook.id);
}

function disableText(hook: HookDef): { en: string; vi: string } {
  if (hook.disableMode === "workflow") {
    return {
      en: "It is off by default. If you opted in, set the hook flag or workflow gate to false. Emergency bypass: CK_WORKFLOW_ARTIFACT_GATE_DISABLED=1.",
      vi: "Mặc định đang tắt. Nếu đã bật thủ công, set hook flag hoặc workflow gate về false. Bypass khẩn cấp: CK_WORKFLOW_ARTIFACT_GATE_DISABLED=1.",
    };
  }

  if (hook.disableMode === "simplify") {
    return {
      en: "The gate is off by default. If you enabled it, turn off the hook flag or set simplify.gate.enabled to false. Emergency bypass: CK_SIMPLIFY_DISABLED=1.",
      vi: "Gate mặc định đang tắt. Nếu đã bật thủ công, tắt hook flag hoặc set simplify.gate.enabled=false. Bypass khẩn cấp: CK_SIMPLIFY_DISABLED=1.",
    };
  }

  if (hook.disableMode === "removed" || hook.defaultState === "removed") {
    return {
      en: "Nothing to disable in current stable. If an old settings file still references it, remove that stale command.",
      vi: "Stable hiện tại không còn gì để tắt. Nếu settings cũ vẫn gọi hook này, xoá command cũ đó.",
    };
  }

  if (hook.defaultState === "off") {
    return {
      en: "It is already off in new installs. If a project manually restored the hook command, set this flag to false or remove the settings entry.",
      vi: "Project mới đã tắt sẵn. Nếu project đã bật lại command thủ công, set flag này về false hoặc xoá entry trong settings.",
    };
  }

  return {
    en: "Set the hook flag to false in .claude/.ck.json. Delete the line, or set it back to true, to re-enable.",
    vi: "Set hook flag về false trong .claude/.ck.json. Muốn bật lại thì xoá dòng đó hoặc set lại true.",
  };
}

function failureMode(hook: HookDef): { en: string; vi: string } {
  if (hook.flowImpact === "policy-block") {
    return {
      en: "Unexpected crashes fail open, so normal work continues. A real policy match can still intentionally block the current action.",
      vi: "Nếu crash ngoài ý muốn, hook được bỏ qua để flow tiếp tục. Nếu rule thật sự match, hook vẫn có thể chặn action đó vì đây là guard rail đúng.",
    };
  }

  if (hook.flowImpact === "removed") {
    return {
      en: "It has no effect unless an old settings entry still calls a missing file. In that case, remove the stale command.",
      vi: "Không ảnh hưởng gì trừ khi settings cũ vẫn gọi file đã mất. Khi đó, xoá command cũ trong settings.",
    };
  }

  if (hook.flowImpact === "state") {
    return {
      en: "Unexpected crashes fail open. The flow continues, but progress/state may not be recorded for the next step.",
      vi: "Nếu crash ngoài ý muốn, flow vẫn tiếp tục. Chỉ có progress/state của hook này có thể không được ghi cho bước sau.",
    };
  }

  if (hook.flowImpact === "context") {
    return {
      en: "Unexpected crashes fail open. The flow continues, but Claude may lose that extra context or cached awareness.",
      vi: "Nếu crash ngoài ý muốn, flow vẫn tiếp tục. Claude chỉ có thể thiếu phần context hoặc awareness mà hook này định thêm.",
    };
  }

  return {
    en: "Unexpected crashes fail open. The flow continues, but the reminder or warning may be missing.",
    vi: "Nếu crash ngoài ý muốn, flow vẫn tiếp tục. Chỉ có nhắc nhở hoặc cảnh báo của hook này có thể bị thiếu.",
  };
}

export function buildHookViewModels(categories: HookCategory[]): HookCategoryViewModel[] {
  return categories.map((category) => ({
    ...category,
    hooks: category.hooks.map((hook) => {
      const token = kitToken(hook.kits);

      return {
        ...hook,
        categoryId: category.id,
        categoryTitleEn: category.titleEn,
        categoryTitleVi: category.titleVi,
        categoryColor: category.color,
        kitToken: token,
        easyDescEn: easyHookDescriptions[hook.id]?.en || hook.descEn,
        easyDescVi: easyHookDescriptions[hook.id]?.vi || hook.descVi,
        exampleEn: hookExamples[hook.id]?.en || hook.descEn,
        exampleVi: hookExamples[hook.id]?.vi || hook.descVi,
        defaultStateLabelEn: defaultStateLabels[hook.defaultState].en,
        defaultStateLabelVi: defaultStateLabels[hook.defaultState].vi,
        defaultReasonEn: defaultReasonText[hook.defaultReason].en,
        defaultReasonVi: defaultReasonText[hook.defaultReason].vi,
        flowImpactLabelEn: flowImpactText[hook.flowImpact].labelEn,
        flowImpactLabelVi: flowImpactText[hook.flowImpact].labelVi,
        flowImpactDescEn: flowImpactText[hook.flowImpact].descEn,
        flowImpactDescVi: flowImpactText[hook.flowImpact].descVi,
        disableTextEn: disableText(hook).en,
        disableTextVi: disableText(hook).vi,
        disableSnippet: disableSnippet(hook),
        failureModeEn: failureMode(hook).en,
        failureModeVi: failureMode(hook).vi,
      };
    }),
  }));
}

export function flattenHooks(categories: HookCategoryViewModel[]): HookViewModel[] {
  return categories.flatMap((category) => category.hooks);
}
