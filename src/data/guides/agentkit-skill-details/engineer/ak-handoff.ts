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
      "descEn": "Use plans/handoffs/<slug>-<YYYYMMDD-HHmm>.md when a plans root exists, or an explicit workspace-local --output path; ask before writing if no plans root exists.",
      "descVi": "Dùng plans/handoffs/<slug>-<YYYYMMDD-HHmm>.md khi có plans root, hoặc path --output nằm trong workspace; hỏi trước khi ghi nếu không có plans root."
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
      "titleEn": "Fill nine sections",
      "titleVi": "Điền chín mục",
      "descEn": "Emit the required H2 sections in order, including exact next actions with a bold **First safe step** marker.",
      "descVi": "Xuất đủ chín H2 section theo thứ tự, gồm exact next actions với marker **First safe step** in đậm."
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
      "titleEn": "Return pointer only",
      "titleVi": "Chỉ trả con trỏ",
      "descEn": "Print the absolute artifact path and one continuation instruction; do not inline the artifact body.",
      "descVi": "In path tuyệt đối của artifact và một câu hướng dẫn tiếp tục; không dán nội dung artifact vào output."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Capture only: no runtime launch, no code mutation",
    "titleVi": "Chỉ capture: không chạy runtime, không sửa code",
    "contentEn": "ak:handoff never launches an agent, edits code, commits, deletes, or writes outside the workspace. It also refuses credential-looking task focus text and existing outputs without --force.",
    "contentVi": "ak:handoff không bao giờ launch agent, sửa code, commit, xóa hoặc ghi ngoài workspace. Nó cũng từ chối task focus giống credential và output đã tồn tại nếu thiếu --force."
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
    "syntax": "/ak:handoff [task focus] [--output PATH] [--include-diff] [--include-status] [--force]",
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
        "descEn": "Write the handoff to this workspace-local path instead of the auto timestamped plans/handoffs path. It does not imply overwrite permission.",
        "descVi": "Ghi handoff vào path nằm trong workspace này thay vì path plans/handoffs có timestamp tự động. Cờ này không tự cho phép ghi đè.",
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
      "expectedEn": "Creates a workspace-local plans/handoffs Markdown artifact with the required nine H2 sections, fills unknowns as “Not captured in this session,” and returns only the absolute path plus continuation instruction.",
      "expectedVi": "Tạo artifact Markdown trong plans/handoffs của workspace với đủ chín H2 section bắt buộc, ghi phần chưa biết là “Not captured in this session,” và chỉ trả path tuyệt đối cùng câu hướng dẫn tiếp tục.",
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
    "titleEn": "Handoff return value",
    "titleVi": "Giá trị trả về của handoff",
    "patternEn": "Absolute artifact path plus: Read <path> and verify the Current state section against the repo before acting.",
    "patternVi": "Path tuyệt đối của artifact kèm câu: Read <path> and verify the Current state section against the repo before acting.",
    "locationEn": "plans/handoffs/ by default.",
    "locationVi": "Mặc định trong plans/handoffs/.",
    "descEn": "The body stays in the file so the terminal output remains safe and copyable.",
    "descVi": "Nội dung nằm trong file để output terminal vẫn an toàn và dễ copy."
  }
};

export default data;
