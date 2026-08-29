import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-handover",
  "command": "/ak:handover",
  "kit": "engineer",
  "header": {
    "titleEn": "Captured Agent Handover",
    "titleVi": "Bàn giao sang agent có kiểm soát",
    "taglineEn": "Hand in-progress work to one selected coding runtime by producing or validating a handoff, wiring a deterministic single-job orchestration spec, dispatching through ak:orchestrate, and reporting the result.",
    "taglineVi": "Chuyển việc đang làm sang một runtime coding đã chọn bằng cách tạo hoặc xác thực handoff, nối vào spec orchestration một job, dispatch qua ak:orchestrate và báo kết quả."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Require runtime",
      "titleVi": "Bắt buộc runtime",
      "descEn": "Resolve --agent against the runtime catalog; there is no default and no silent substitution.",
      "descVi": "Resolve --agent theo runtime catalog; không có default và không được âm thầm thay runtime."
    },
    {
      "number": 2,
      "titleEn": "Screen task text",
      "titleVi": "Kiểm tra task text",
      "descEn": "Refuse task text that embeds credentials before writing any artifact.",
      "descVi": "Từ chối task text chứa credential trước khi ghi artifact."
    },
    {
      "number": 3,
      "titleEn": "Capture or load",
      "titleVi": "Capture hoặc nạp handoff",
      "descEn": "Invoke ak:handoff unless a valid existing --handoff PATH is supplied.",
      "descVi": "Gọi ak:handoff trừ khi user cung cấp --handoff PATH hợp lệ."
    },
    {
      "number": 4,
      "titleEn": "Validate handoff",
      "titleVi": "Xác thực handoff",
      "descEn": "Check required H2 sections, first-safe-step marker, redaction patterns, and handoff-version before dispatch.",
      "descVi": "Kiểm tra H2 section bắt buộc, marker first-safe-step, pattern redaction và handoff-version trước khi dispatch."
    },
    {
      "number": 5,
      "titleEn": "Build spec",
      "titleVi": "Tạo spec",
      "descEn": "Construct one single-job orchestration spec: prompt reads the artifact as context, task enum is chosen from next actions, effect is scoped-write, approval defaults to require.",
      "descVi": "Tạo một spec orchestration một job: prompt đọc artifact như context, enum task lấy từ next actions, effect là scoped-write, approval mặc định require."
    },
    {
      "number": 6,
      "titleEn": "Route model",
      "titleVi": "Định tuyến model",
      "descEn": "Pass --model only for CLI runtimes; reject --model with --agent internal because internal jobs omit model.",
      "descVi": "Chỉ truyền --model cho CLI runtime; từ chối --model với --agent internal vì job internal không đặt model."
    },
    {
      "number": 7,
      "titleEn": "Dispatch",
      "titleVi": "Dispatch",
      "descEn": "Invoke ak:orchestrate and leave preflight, runtime matrix, capture, resume, and arbiter review to it.",
      "descVi": "Gọi ak:orchestrate và để preflight, runtime matrix, capture, resume và arbiter review cho skill đó."
    },
    {
      "number": 8,
      "titleEn": "Report pointers",
      "titleVi": "Báo bằng con trỏ",
      "descEn": "Print the handoff path, orchestrate run directory, runtime/model, job result, verification, first safe step, next action, and blockers.",
      "descVi": "In path handoff, thư mục run của orchestrate, runtime/model, kết quả job, verification, first safe step, bước kế tiếp và blocker."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "No malformed handoff, no silent runtime fallback, no bypass flags",
    "titleVi": "Không handoff lỗi, không fallback âm thầm, không flag bypass",
    "contentEn": "Dispatch is blocked if the handoff fails schema/redaction checks, if the selected runtime fails preflight, if --model targets internal, or if the job would embed permission-bypass flags.",
    "contentVi": "Dispatch bị chặn nếu handoff lỗi schema/redaction, runtime được chọn fail preflight, --model dùng với internal, hoặc job chứa flag bypass permission."
  },
  "corePrinciplesEn": [
    "Compose ak:handoff and ak:orchestrate; do not duplicate their internals.",
    "The user selects the runtime; the skill wires and validates, not “best agent” advice.",
    "Reference artifacts and run logs by path instead of inlining them."
  ],
  "corePrinciplesVi": [
    "Compose ak:handoff và ak:orchestrate; không copy logic nội bộ của chúng.",
    "User chọn runtime; skill chỉ nối và xác thực, không tư vấn “agent tốt nhất”.",
    "Tham chiếu artifact và run log bằng path thay vì dán inline."
  ],
  "expertiseAreasEn": [
    "Single-job orchestration specs",
    "Runtime-catalog handover",
    "Handoff schema validation",
    "Approval and isolation wiring"
  ],
  "expertiseAreasVi": [
    "Spec orchestration một job",
    "Bàn giao theo runtime catalog",
    "Xác thực schema handoff",
    "Nối approval và isolation"
  ],
  "skillStack": [
    {
      "name": "ak:handoff",
      "type": "skill"
    },
    {
      "name": "ak:orchestrate",
      "type": "skill"
    },
    {
      "name": "runtime catalog",
      "type": "tool"
    },
    {
      "name": "arbiter review",
      "type": "agent"
    }
  ],
  "guardrails": [
    {
      "thoughtEn": "Pick a fallback runtime if the requested one fails.",
      "thoughtVi": "Nếu runtime được yêu cầu fail thì tự chọn runtime khác.",
      "realityEn": "No silent substitution; report the blocker and suggest rerun with another --agent.",
      "realityVi": "Không thay thế âm thầm; báo blocker và gợi ý chạy lại với --agent khác.",
      "accent": "red"
    },
    {
      "thoughtEn": "Permission-bypass flags help the successor move faster.",
      "thoughtVi": "Flag bypass permission giúp agent kế tiếp chạy nhanh hơn.",
      "realityEn": "Runtime-specific bypass flags are refused by this skill.",
      "realityVi": "Skill này từ chối flag bypass riêng của runtime.",
      "accent": "red"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Capture then dispatch",
      "labelVi": "Capture rồi dispatch",
      "command": "/ak:handover --agent claude-code \"continue the OAuth callback fix\"",
      "whenEn": "You want a selected coding runtime to continue the current task from a fresh handoff.",
      "whenVi": "Khi muốn runtime coding đã chọn tiếp tục task hiện tại từ handoff mới.",
      "expectedEn": "Creates a handoff, validates it, builds a single-job spec, dispatches through orchestrate, and reports paths/status.",
      "expectedVi": "Tạo handoff, xác thực, dựng spec một job, dispatch qua orchestrate và báo path/status.",
      "recommended": true
    },
    {
      "labelEn": "Use existing handoff",
      "labelVi": "Dùng handoff có sẵn",
      "command": "/ak:handover --agent codex --handoff plans/handoffs/oauth-callback.md",
      "whenEn": "A valid handoff artifact already exists and should be consumed as context.",
      "whenVi": "Khi đã có artifact handoff hợp lệ và cần dùng nó làm context.",
      "expectedEn": "Skips new capture, validates the artifact, and dispatches the selected runtime.",
      "expectedVi": "Bỏ qua capture mới, xác thực artifact và dispatch runtime đã chọn."
    },
    {
      "labelEn": "Model override",
      "labelVi": "Override model",
      "command": "/ak:handover --agent opencode --model anthropic/claude-sonnet-5 --yes",
      "whenEn": "A CLI runtime should use a specific model and the user has approved write continuation.",
      "whenVi": "Khi runtime CLI cần dùng model cụ thể và user đã duyệt tiếp tục việc có ghi.",
      "expectedEn": "Passes model to the CLI-runtime job and flips approval to inherit when --yes is accepted.",
      "expectedVi": "Truyền model cho job CLI-runtime và chuyển approval sang inherit khi --yes được chấp nhận."
    }
  ],
  "reportOutput": {
    "titleEn": "Handover result",
    "titleVi": "Kết quả handover",
    "patternEn": "Handoff artifact, orchestrate run, runtime, model, job result, verification, first safe step, next action, unresolved.",
    "patternVi": "Artifact handoff, run orchestrate, runtime, model, kết quả job, verification, first safe step, bước kế tiếp, unresolved.",
    "descEn": "The report is a pointer summary; handoff bodies, stdout, and logs stay referenced by path.",
    "descVi": "Báo cáo là tóm tắt bằng con trỏ; nội dung handoff, stdout và log chỉ được tham chiếu bằng path."
  }
};

export default data;
