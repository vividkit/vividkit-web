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
      "descEn": "Print the handoff path, orchestrate run directory, runtime/model, job result, arbiter verification, produced artifact pointers, first safe step, next action, and blockers.",
      "descVi": "In path handoff, thư mục run của orchestrate, runtime/model, kết quả job, arbiter verification, con trỏ artifact tạo ra, first safe step, bước kế tiếp và blocker."
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
  "invocation": {
    "syntax": "/ak:handover [task] --agent <id> [--cwd PATH] [--task TEXT] [--handoff PATH] [--model NAME] [--yes]",
    "arguments": [
      {
        "token": "[task]",
        "titleEn": "Successor focus",
        "titleVi": "Trọng tâm cho agent kế nhiệm",
        "descEn": "Optional natural-language focus for the coding agent that continues the work. It is written into the handoff mission and the orchestrate job prompt; use --task TEXT as the flag form.",
        "descVi": "Trọng tâm tùy chọn bằng ngôn ngữ tự nhiên cho coding agent tiếp tục công việc. Nội dung này được đưa vào mission của handoff và prompt job orchestrate; dùng --task TEXT nếu muốn dạng flag.",
        "exampleCommand": "/ak:handover --agent claude-code \"continue the OAuth callback fix\""
      }
    ],
    "options": [
      {
        "token": "--agent <id>",
        "titleEn": "Coding runtime",
        "titleVi": "Runtime code",
        "descEn": "Required selected runtime such as claude-code, codex, opencode, cursor, or internal. It must resolve in the runtime catalog; the skill never picks a fallback silently.",
        "descVi": "Runtime được chọn và bắt buộc, ví dụ claude-code, codex, opencode, cursor hoặc internal. Runtime phải resolve trong runtime catalog; skill không bao giờ tự chọn fallback im lặng.",
        "exampleCommand": "/ak:handover --agent codex --task \"implement the next action in the handoff\""
      },
      {
        "token": "--cwd PATH",
        "titleEn": "Workspace root",
        "titleVi": "Root workspace",
        "descEn": "Workspace root for the dispatched job. Defaults to the current workspace root and is passed to ak:orchestrate as cwd.",
        "descVi": "Root workspace cho job được dispatch. Mặc định là root workspace hiện tại và được truyền sang ak:orchestrate dưới dạng cwd.",
        "exampleCommand": "/ak:handover --agent codex --cwd . --task \"implement the next action in the handoff\""
      },
      {
        "token": "--task TEXT",
        "titleEn": "Flag task text",
        "titleVi": "Task text dạng flag",
        "descEn": "Alternative to the positional task text. If both are provided, the positional task wins and --task is ignored with a warning.",
        "descVi": "Dạng thay thế cho task positional. Nếu cả hai cùng có, task positional thắng và --task bị bỏ qua kèm cảnh báo.",
        "exampleCommand": "/ak:handover --agent codex --task \"implement the next action in the handoff\""
      },
      {
        "token": "--handoff PATH",
        "titleEn": "Existing handoff",
        "titleVi": "Handoff có sẵn",
        "descEn": "Use an existing handoff artifact instead of generating a new one. The path must exist and pass schema and redaction validation before dispatch.",
        "descVi": "Dùng artifact handoff có sẵn thay vì tạo mới. Path phải tồn tại và pass validation schema và redaction trước khi dispatch.",
        "exampleCommand": "/ak:handover --agent cursor --handoff plans/handoffs/oauth-callback.md"
      },
      {
        "token": "--model NAME",
        "titleEn": "CLI model",
        "titleVi": "Model CLI",
        "descEn": "Model override for CLI-runtime jobs only. Rejected with --agent internal because internal jobs omit model.",
        "descVi": "Override model chỉ cho job chạy bằng runtime CLI. Bị từ chối với --agent internal vì job internal không đặt model.",
        "exampleCommand": "/ak:handover --agent opencode --model anthropic/claude-sonnet-5"
      },
      {
        "token": "--yes",
        "titleEn": "Approve continuation",
        "titleVi": "Duyệt tiếp tục",
        "descEn": "Explicitly approve write or destructive continuation work by changing the generated job approval from require to inherit.",
        "descVi": "Duyệt rõ việc tiếp tục có ghi hoặc phá hủy bằng cách đổi approval của job được tạo từ require sang inherit.",
        "exampleCommand": "/ak:handover --agent opencode --model anthropic/claude-sonnet-5 --yes"
      }
    ]
  },
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
      "labelEn": "Generate handoff and dispatch",
      "labelVi": "Tạo handoff rồi dispatch",
      "command": "/ak:handover --agent claude-code \"continue the OAuth callback fix\"",
      "whenEn": "You need a chosen coding runtime to continue the current work from a captured continuation contract.",
      "whenVi": "Khi cần runtime coding đã chọn tiếp tục việc hiện tại từ continuation contract vừa capture.",
      "expectedEn": "Runs ak:handoff first, validates the artifact schema and redaction state, builds one claude-code job with approval required, invokes ak:orchestrate, then reports the handoff and run paths.",
      "expectedVi": "Chạy ak:handoff trước, xác thực schema và trạng thái redaction của artifact, tạo một job claude-code với approval require, gọi ak:orchestrate rồi báo path handoff và run.",
      "recommended": true
    },
    {
      "labelEn": "Dispatch an existing handoff",
      "labelVi": "Dispatch handoff có sẵn",
      "command": "/ak:handover --agent cursor --handoff plans/handoffs/oauth-callback.md",
      "whenEn": "A handoff artifact already exists and should be validated and handed to a specific runtime without recapturing.",
      "whenVi": "Khi artifact handoff đã tồn tại và cần được xác thực rồi chuyển cho một runtime cụ thể mà không capture lại.",
      "expectedEn": "Skips fresh capture, checks the supplied file for required H2 sections, first-safe-step marker, version, and raw-secret patterns, then dispatches a single cursor job through orchestrate.",
      "expectedVi": "Bỏ qua capture mới, kiểm tra file được cung cấp về H2 section bắt buộc, marker first-safe-step, version và raw-secret pattern, rồi dispatch một job cursor qua orchestrate."
    },
    {
      "labelEn": "Set cwd and task text",
      "labelVi": "Đặt cwd và task text",
      "command": "/ak:handover --agent codex --cwd . --task \"implement the next action in the handoff\"",
      "whenEn": "The successor should run in a specific workspace root and receive an explicit task string in the orchestrate prompt.",
      "whenVi": "Khi successor cần chạy trong workspace root cụ thể và nhận task string rõ ràng trong prompt của orchestrate.",
      "expectedEn": "Uses the current workspace as the orchestrate cwd, includes the task text in the handoff mission and job prompt, maps the routing enum from next actions, and keeps default scoped-write approval.",
      "expectedVi": "Dùng workspace hiện tại làm cwd của orchestrate, đưa task text vào mission handoff và job prompt, map routing enum từ next actions, đồng thời giữ approval scoped-write mặc định."
    },
    {
      "labelEn": "CLI model override with approval",
      "labelVi": "Override model CLI kèm approval",
      "command": "/ak:handover --agent opencode --model anthropic/claude-sonnet-5 --yes",
      "whenEn": "A CLI runtime should use a particular model and the user has explicitly approved write continuation.",
      "whenVi": "Khi runtime CLI cần dùng model cụ thể và user đã duyệt rõ việc tiếp tục có ghi.",
      "expectedEn": "Passes the model only because opencode is a CLI runtime, flips the generated job approval to inherit, preserves scoped-write isolation, and still leaves preflight and arbiter review to ak:orchestrate.",
      "expectedVi": "Chỉ truyền model vì opencode là CLI runtime, chuyển approval của job sang inherit, giữ isolation scoped-write và vẫn để preflight cùng arbiter review cho ak:orchestrate."
    }
  ],
  "reportOutput": {
    "titleEn": "Handover result",
    "titleVi": "Kết quả handover",
    "patternEn": "Handoff artifact, orchestrate run, runtime, model, job result, verification, produced artifact pointers, first safe step, next action, unresolved.",
    "patternVi": "Artifact handoff, run orchestrate, runtime, model, kết quả job, verification, con trỏ artifact tạo ra, first safe step, bước kế tiếp, unresolved.",
    "descEn": "The report is a pointer summary; handoff bodies, stdout, and logs stay referenced by path.",
    "descVi": "Báo cáo là tóm tắt bằng con trỏ; nội dung handoff, stdout và log chỉ được tham chiếu bằng path."
  }
};

export default data;
