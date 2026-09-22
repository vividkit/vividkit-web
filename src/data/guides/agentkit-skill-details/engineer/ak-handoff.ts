import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-handoff",
  "command": "/ak:handoff",
  "kit": "engineer",
  "header": {
    "titleEn": "Agent Continuation Contract",
    "titleVi": "Hợp đồng tiếp tục cho agent",
    "taglineEn": "Create one redacted Markdown handoff that lets a fresh coding agent resume safely, with mission, guardrails, workspace state, decisions, verification, blockers, exact next actions, and source pointers.",
    "taglineVi": "Tạo một bản bàn giao Markdown đã redact để agent coding mới tiếp tục an toàn, gồm mission, guardrail, trạng thái workspace, quyết định, verification, blocker, bước kế tiếp chính xác và nguồn tham chiếu."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Identify reader",
      "titleVi": "Xác định người đọc",
      "descEn": "Use handoff when the next reader is another coding agent continuing this exact task; use watzup for human project status.",
      "descVi": "Dùng handoff khi người đọc kế tiếp là agent coding tiếp tục đúng task này; dùng watzup cho status dự án dành cho con người."
    },
    {
      "number": 2,
      "titleEn": "Resolve destination",
      "titleVi": "Xác định nơi ghi",
      "descEn": "Write plans/handoffs/<slug>-<YYYYMMDD-HHmm>.md under an existing plans root, or a workspace-local --output path. Ask before writing if no plans root exists. Also scan legacy plans/reports/handoff-*.md.",
      "descVi": "Ghi plans/handoffs/<slug>-<YYYYMMDD-HHmm>.md khi đã có plans root, hoặc path --output trong workspace. Hỏi trước khi ghi nếu chưa có plans root. Vẫn quét file cũ plans/reports/handoff-*.md."
    },
    {
      "number": 3,
      "titleEn": "Probe read-only state",
      "titleVi": "Đọc trạng thái chỉ-read",
      "descEn": "Collect git root, branch, HEAD, status, and optional bounded diff/status evidence without mutating the repo.",
      "descVi": "Thu thập git root, branch, HEAD, status và diff/status giới hạn nếu được yêu cầu mà không mutate repo."
    },
    {
      "number": 4,
      "titleEn": "Separate evidence",
      "titleVi": "Tách bằng chứng",
      "descEn": "Distinguish observed facts from session assertions, and use “Not captured in this session” for unknown sections.",
      "descVi": "Tách facts quan sát được khỏi khẳng định từ session, và ghi “Not captured in this session” cho phần chưa biết."
    },
    {
      "number": 5,
      "titleEn": "Fill report schema",
      "titleVi": "Điền schema report",
      "descEn": "Include the verified handoff content: title, time, focus, goal, current state, decisions and rejected approaches, verification, files and pointers, open work, and a fresh-agent prompt.",
      "descVi": "Gồm nội dung handoff đã xác minh: tiêu đề, thời gian, trọng tâm, mục tiêu, trạng thái hiện tại, quyết định và hướng bị loại, verification, file và pointer, việc còn mở, và prompt cho agent mới."
    },
    {
      "number": 6,
      "titleEn": "Redact secrets",
      "titleVi": "Redact bí mật",
      "descEn": "Pass the artifact and optional diff/status through the redaction catalog for tokens, cookies, keys, credentials, private URLs, and personal data.",
      "descVi": "Chạy artifact và diff/status tùy chọn qua catalog redaction cho token, cookie, key, credential, URL riêng tư và dữ liệu cá nhân."
    },
    {
      "number": 7,
      "titleEn": "Guard collisions",
      "titleVi": "Chống ghi đè",
      "descEn": "Refuse an existing target unless --force is explicitly present; never rename or delete silently.",
      "descVi": "Từ chối target đã tồn tại nếu không có --force rõ ràng; không âm thầm rename hoặc delete."
    },
    {
      "number": 8,
      "titleEn": "Write matching outputs",
      "titleVi": "Ghi hai output khớp nhau",
      "descEn": "Return one fenced Markdown block in the response and save the same content as the timestamped report.",
      "descVi": "Trả về một fenced Markdown block trong response và lưu cùng nội dung đó thành report có timestamp."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Capture only, unless --dispatch",
    "titleVi": "Chỉ capture, trừ khi --dispatch",
    "contentEn": "Without --dispatch, ak:handoff never launches a runtime, edits code, commits, deletes, or writes outside the workspace. With --dispatch it captures the artifact, then hands that one job to ak:orchestrate. Credential-looking task text is refused, and an existing output still needs --force.",
    "contentVi": "Không có --dispatch thì ak:handoff không chạy runtime, không sửa code, không commit, không xóa và không ghi ngoài workspace. Có --dispatch thì skill ghi artifact rồi giao đúng một job cho ak:orchestrate. Chuỗi giống credential bị từ chối, và file đã có vẫn cần --force."
  },
  "corePrinciplesEn": [
    "Write a continuation contract, not a transcript dump.",
    "Prefer observed workspace facts and explicit uncertainty over invented continuity.",
    "Redaction and collision safety are part of the artifact, not optional polish."
  ],
  "corePrinciplesVi": [
    "Viết continuation contract, không dump transcript.",
    "Ưu tiên facts quan sát được và sự không chắc chắn rõ ràng hơn là bịa continuity.",
    "Redaction và chống collision là phần cốt lõi của artifact, không phải polish tùy chọn."
  ],
  "expertiseAreasEn": [
    "Session continuation capture",
    "Redacted state summaries",
    "Exact next action handoffs",
    "Workspace-local Markdown artifacts"
  ],
  "expertiseAreasVi": [
    "Capture ngữ cảnh tiếp tục session",
    "Tóm tắt trạng thái đã redact",
    "Bàn giao bước kế tiếp chính xác",
    "Artifact Markdown nằm trong workspace"
  ],
  "invocation": {
    "syntax": "/ak:handoff [task focus] [--output PATH] [--include-diff] [--include-status] [--force] [--dispatch --agent <id> [--handoff PATH] [--cwd PATH] [--model NAME] [--yes]]",
    "arguments": [
      {
        "token": "[task focus]",
        "titleEn": "Next-session focus",
        "titleVi": "Trọng tâm phiên kế tiếp",
        "descEn": "Optional one-line focus for the successor agent. It is used in the Mission section and filename slug after credential-looking values are refused.",
        "descVi": "Trọng tâm một dòng tùy chọn cho agent kế tiếp. Nội dung này được dùng trong mục Mission và slug tên file sau khi từ chối giá trị giống credential.",
        "exampleCommand": "/ak:handoff \"Continue the authentication migration after the failing integration test is diagnosed\""
      }
    ],
    "options": [
      {
        "token": "--output PATH",
        "titleEn": "Exact output path",
        "titleVi": "Path output chính xác",
        "descEn": "Write the handoff to this workspace-local path instead of the auto timestamped plans/reports path. It does not imply overwrite permission.",
        "descVi": "Ghi handoff vào path nằm trong workspace này thay vì path plans/reports có timestamp tự động. Cờ này không tự cho phép ghi đè.",
        "exampleCommand": "/ak:handoff --output plans/handoffs/oauth-callback.md"
      },
      {
        "token": "--include-diff",
        "titleEn": "Include diff evidence",
        "titleVi": "Kèm bằng chứng diff",
        "descEn": "Append redacted git diff --stat and the first 200 diff lines, with truncation marked when the diff is longer.",
        "descVi": "Thêm git diff --stat và 200 dòng diff đầu đã redact, có đánh dấu khi diff dài hơn.",
        "exampleCommand": "/ak:handoff --include-diff --include-status"
      },
      {
        "token": "--include-status",
        "titleEn": "Include status snapshot",
        "titleVi": "Kèm snapshot status",
        "descEn": "Append a redacted git status --short snapshot without turning the handoff into a full repository status report.",
        "descVi": "Thêm snapshot git status --short đã redact mà không biến handoff thành report trạng thái repo đầy đủ.",
        "exampleCommand": "/ak:handoff --include-status"
      },
      {
        "token": "--force",
        "titleEn": "Allow overwrite",
        "titleVi": "Cho phép ghi đè",
        "descEn": "Explicitly allow overwriting an existing handoff target. Without it, an existing file is refused with guidance.",
        "descVi": "Cho phép ghi đè target handoff đã tồn tại một cách rõ ràng. Nếu thiếu cờ này, file có sẵn sẽ bị từ chối kèm hướng dẫn.",
        "exampleCommand": "/ak:handoff --force --output plans/handoffs/oauth-callback.md"
      },
      {
        "token": "--dispatch",
        "titleEn": "Dispatch after capture",
        "titleVi": "Giao sau khi ghi",
        "descEn": "After a valid capture, hand that one artifact to ak:orchestrate. Requires --agent. Stops after capture when ak:orchestrate is not installed.",
        "descVi": "Sau khi ghi hợp lệ, giao đúng artifact đó cho ak:orchestrate. Bắt buộc có --agent. Dừng sau bước ghi nếu kit không có ak:orchestrate.",
        "exampleCommand": "/ak:handoff --dispatch --agent claude-code \"continue the OAuth callback fix\""
      },
      {
        "token": "--agent <id>",
        "titleEn": "Selected runtime",
        "titleVi": "Runtime được chọn",
        "descEn": "Required with --dispatch. Must match a catalog runtime id. No default and no silent substitution.",
        "descVi": "Bắt buộc khi có --dispatch. Phải khớp một id runtime trong catalog. Không có mặc định và không tự thay.",
        "exampleCommand": "/ak:handoff --dispatch --agent codex"
      },
      {
        "token": "--handoff PATH",
        "titleEn": "Reuse artifact",
        "titleVi": "Dùng lại artifact",
        "descEn": "Dispatch an existing handoff file instead of capturing a new one. The file must exist and pass section and redaction checks.",
        "descVi": "Giao một file handoff đã có thay vì ghi file mới. File phải tồn tại và qua kiểm tra mục và redaction.",
        "exampleCommand": "/ak:handoff --dispatch --agent cursor --handoff plans/handoffs/oauth-callback.md"
      },
      {
        "token": "--cwd PATH",
        "titleEn": "Dispatch workspace",
        "titleVi": "Workspace của job",
        "descEn": "Workspace root passed to the orchestrate job. Defaults to the current workspace. --cwd . on a clean tree keeps isolation off worktree.",
        "descVi": "Workspace root đưa vào job orchestrate. Mặc định là workspace hiện tại. --cwd . trên cây sạch thì không tách worktree.",
        "exampleCommand": "/ak:handoff --dispatch --agent codex --cwd ."
      },
      {
        "token": "--model NAME",
        "titleEn": "CLI model override",
        "titleVi": "Đổi model CLI",
        "descEn": "Overrides the model for a CLI runtime job. Rejected when --agent is internal.",
        "descVi": "Đổi model cho job runtime CLI. Bị từ chối khi --agent là internal.",
        "exampleCommand": "/ak:handoff --dispatch --agent opencode --model anthropic/claude-sonnet-5 --yes"
      },
      {
        "token": "--yes",
        "titleEn": "Inherit write approval",
        "titleVi": "Kế thừa duyệt ghi",
        "descEn": "Sets the dispatched job approval from require to inherit. Destructive scope classifications stay require.",
        "descVi": "Đổi approval của job được giao từ require sang inherit. Phân loại phạm vi phá hủy vẫn giữ require.",
        "exampleCommand": "/ak:handoff --dispatch --agent opencode --yes"
      }
    ]
  },
  "outputFlags": [
    {
      "flag": "--output PATH",
      "titleEn": "Explicit output path",
      "titleVi": "Path output rõ ràng",
      "descEn": "Writes to an exact workspace-local path; --force is still required to overwrite.",
      "descVi": "Ghi vào path chính xác trong workspace; vẫn cần --force để ghi đè.",
      "exampleCommand": "/ak:handoff --output plans/handoffs/oauth-callback.md"
    },
    {
      "flag": "--include-diff",
      "titleEn": "Bounded diff evidence",
      "titleVi": "Bằng chứng diff giới hạn",
      "descEn": "Adds git diff --stat plus the first 200 redacted diff lines with truncation marked.",
      "descVi": "Thêm git diff --stat và 200 dòng diff đầu đã redact, có đánh dấu nếu bị cắt.",
      "exampleCommand": "/ak:handoff --include-diff --include-status"
    },
    {
      "flag": "--include-status",
      "titleEn": "Status snapshot",
      "titleVi": "Snapshot status",
      "descEn": "Adds a redacted git status --short snapshot.",
      "descVi": "Thêm snapshot git status --short đã redact.",
      "exampleCommand": "/ak:handoff --include-status"
    },
    {
      "flag": "--force",
      "titleEn": "Explicit overwrite",
      "titleVi": "Ghi đè có chủ ý",
      "descEn": "Allows overwriting an existing handoff target; never implied by --output.",
      "descVi": "Cho phép ghi đè target handoff đã tồn tại; --output không tự ngầm bật flag này.",
      "exampleCommand": "/ak:handoff --force --output plans/handoffs/oauth-callback.md"
    }
  ],
  "guardrails": [
    {
      "thoughtEn": "The transcript has everything; paste it.",
      "thoughtVi": "Transcript có đủ rồi; dán vào.",
      "realityEn": "Never dump raw transcripts or hidden reasoning; capture only actionable continuation facts.",
      "realityVi": "Không dump transcript thô hoặc hidden reasoning; chỉ capture facts hữu ích để tiếp tục.",
      "accent": "red"
    },
    {
      "thoughtEn": "The path exists; overwrite it.",
      "thoughtVi": "Path tồn tại; ghi đè luôn.",
      "realityEn": "Existing targets require explicit --force.",
      "realityVi": "Target đã tồn tại cần --force rõ ràng.",
      "accent": "amber"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Bare capture",
      "labelVi": "Capture mặc định",
      "command": "/ak:handoff",
      "whenEn": "You are about to switch sessions and need a successor-ready contract.",
      "whenVi": "Khi sắp chuyển session và cần contract cho agent kế tiếp.",
      "expectedEn": "Creates a workspace-local plans/reports Markdown artifact with the verified handoff schema, fills unknowns as “Not captured in this session,” and returns the same content as a fenced Markdown block.",
      "expectedVi": "Tạo artifact Markdown trong plans/reports của workspace với schema handoff đã xác minh, ghi phần chưa biết là “Not captured in this session,” và trả cùng nội dung dưới dạng fenced Markdown block.",
      "recommended": true
    },
    {
      "labelEn": "Focused handoff",
      "labelVi": "Bàn giao có trọng tâm",
      "command": "/ak:handoff \"continue the OAuth callback fix\"",
      "whenEn": "The successor should focus on one known thread of work.",
      "whenVi": "Khi agent kế tiếp cần tập trung vào một mạch việc cụ thể.",
      "expectedEn": "Screens the focus for credential-looking values, then uses the safe text in the Mission section and filename slug so the successor agent knows the exact thread to resume.",
      "expectedVi": "Kiểm tra focus để phát hiện giá trị giống credential, rồi dùng nội dung an toàn trong Mission và slug tên file để agent kế tiếp biết đúng mạch việc cần tiếp tục."
    },
    {
      "labelEn": "Explicit artifact",
      "labelVi": "Artifact chỉ định",
      "command": "/ak:handoff --output plans/handoffs/oauth-callback.md",
      "whenEn": "You need a stable handoff path instead of an auto timestamped slug.",
      "whenVi": "Khi cần path handoff ổn định thay vì slug có timestamp tự động.",
      "expectedEn": "Writes to the exact workspace-local path and creates the parent directory if needed; if that target already exists, it refuses with mtime guidance unless --force is explicitly added.",
      "expectedVi": "Ghi đúng path nằm trong workspace và tạo thư mục cha nếu cần; nếu target đã tồn tại, skill từ chối kèm hướng dẫn mtime trừ khi thêm --force rõ ràng."
    },
    {
      "labelEn": "Dispatch one runtime",
      "labelVi": "Giao một runtime",
      "command": "/ak:handoff --dispatch --agent claude-code \"continue the OAuth callback fix\"",
      "whenEn": "The captured contract should be handed to one selected coding runtime, not left as a file.",
      "whenVi": "Khi hợp đồng vừa ghi cần được giao cho đúng một runtime đã chọn, không chỉ để lại file.",
      "expectedEn": "Captures and validates the handoff, builds one orchestrate job, dispatches that runtime, and prints the artifact path, run directory, resolved runtime, and job result.",
      "expectedVi": "Ghi và kiểm tra handoff, dựng một job orchestrate, giao runtime đó, rồi in đường dẫn artifact, thư mục run, runtime đã phân giải và kết quả job."
    },
    {
      "labelEn": "Dirty-worktree evidence",
      "labelVi": "Bằng chứng worktree bẩn",
      "command": "/ak:handoff --include-diff --include-status",
      "whenEn": "The successor needs bounded, redacted workspace evidence about modified or untracked files.",
      "whenVi": "Khi agent kế tiếp cần bằng chứng workspace đã redact và giới hạn về file modified hoặc untracked.",
      "expectedEn": "Adds redacted git status --short plus git diff --stat and the first 200 diff lines with truncation marked, while keeping the main handoff schema and return value unchanged.",
      "expectedVi": "Thêm git status --short đã redact cùng git diff --stat và 200 dòng diff đầu có đánh dấu nếu bị cắt, đồng thời giữ nguyên schema bàn giao và giá trị trả về."
    }
  ],
  "reportOutput": {
    "titleEn": "Handoff report output",
    "titleVi": "Output report handoff",
    "patternEn": "One fenced Markdown block in the response, matching the content saved to the timestamped report.",
    "patternVi": "Một fenced Markdown block trong response, khớp với nội dung được lưu vào report có timestamp.",
    "locationEn": "plans/handoffs/<slug>-YYYYMMDD-HHmm.md by default.",
    "locationVi": "Mặc định là plans/handoffs/<slug>-YYYYMMDD-HHmm.md.",
    "descEn": "The response block and saved report must match, and redacted values must not be reconstructable.",
    "descVi": "Block trong response và report đã lưu phải khớp nhau, và giá trị đã redact không được khôi phục ngược."
  }
};

export default data;
