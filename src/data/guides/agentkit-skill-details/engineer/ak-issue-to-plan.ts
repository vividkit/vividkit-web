import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-issue-to-plan",
  "command": "/ak:issue-to-plan",
  "kit": "engineer",
  "header": {
    "titleEn": "Issue-to-Plan Audit Gate",
    "titleVi": "Cổng audit từ issue sang plan",
    "taglineEn": "Convert a GitHub issue into audited plan files only after scouting and a hard brainstorm gate; validate, red-team, push a plan branch, and hand off on the issue without implementing.",
    "taglineVi": "Chuyển GitHub issue thành file plan đã audit chỉ sau scouting và cổng brainstorm cứng; validate, red-team, push branch plan và bàn giao trên issue mà không implement."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Resolve issue",
      "titleVi": "Resolve issue",
      "descEn": "Accept an issue URL or number, resolve the repo with gh, compare URL repo to current repo, and stop on mismatch unless --repo targets it.",
      "descVi": "Nhận URL hoặc số issue, resolve repo bằng gh, so repo trong URL với repo hiện tại và dừng nếu lệch mà không có --repo chỉ định."
    },
    {
      "number": 2,
      "titleEn": "Fetch and classify",
      "titleVi": "Fetch và phân loại",
      "descEn": "Fetch title, body, comments, labels, linked PRs, and state; classify bug, feature, refactor, docs, security-risk, research/task, or decision.",
      "descVi": "Fetch title, body, comment, label, PR liên quan và state; phân loại bug, feature, refactor, docs, security-risk, research/task hoặc decision."
    },
    {
      "number": 3,
      "titleEn": "Extract requirements",
      "titleVi": "Rút yêu cầu",
      "descEn": "Extract explicit requirements, constraints, acceptance criteria, links, prior decisions, and unresolved questions while treating issue text as untrusted.",
      "descVi": "Rút yêu cầu rõ ràng, ràng buộc, acceptance criteria, link, quyết định trước đó và câu hỏi mở, đồng thời xem nội dung issue là untrusted."
    },
    {
      "number": 4,
      "titleEn": "Scout evidence",
      "titleVi": "Scout bằng chứng",
      "descEn": "Activate /ak:scout to verify whether the issue is real, already implemented, duplicate, out of scope, or under-specified.",
      "descVi": "Kích hoạt /ak:scout để kiểm issue là thật, đã implement, duplicate, ngoài scope hay thiếu thông tin."
    },
    {
      "number": 5,
      "titleEn": "Brainstorm gate",
      "titleVi": "Cổng brainstorm",
      "descEn": "Activate /ak:brainstorm and decide exactly one outcome: proceed, needs decisions, duplicate/already handled, reject/defer, or not worth implementing.",
      "descVi": "Kích hoạt /ak:brainstorm và chọn đúng một outcome: proceed, needs decisions, duplicate/already handled, reject/defer hoặc not worth implementing."
    },
    {
      "number": 6,
      "titleEn": "Stop or plan",
      "titleVi": "Dừng hoặc lập plan",
      "descEn": "Post the evaluation comment before stopping or planning; if the gate rejects, defers, duplicates, or needs decisions without a useful decision plan, stop without worktree or branch.",
      "descVi": "Post comment evaluation trước khi dừng hoặc plan; nếu gate reject, defer, duplicate hoặc cần quyết định mà không cần plan quyết định, dừng không tạo worktree hoặc branch."
    },
    {
      "number": 7,
      "titleEn": "Generate plan",
      "titleVi": "Tạo plan",
      "descEn": "Only after a proceed decision, run /ak:plan with --html --wiki when supported, and ensure plan.md plus phase files include scope, phases, tests, security, migration, questions, and rollback.",
      "descVi": "Chỉ sau quyết định proceed, chạy /ak:plan với --html --wiki khi hỗ trợ, và bảo đảm plan.md cùng phase files có scope, phases, tests, security, migration, questions và rollback."
    },
    {
      "number": 8,
      "titleEn": "Validate and red-team",
      "titleVi": "Validate và red-team",
      "descEn": "Run /ak:plan validate and /ak:plan red-team; revise the plan and record any rejected findings before handoff.",
      "descVi": "Chạy /ak:plan validate và /ak:plan red-team; sửa plan và ghi lý do nếu finding nào không được áp dụng trước bàn giao."
    },
    {
      "number": 9,
      "titleEn": "Persist branch",
      "titleVi": "Lưu trên branch",
      "descEn": "Create a worktree/branch such as plan/issue-<n>-<slug>, save under plans/<timestamp>-<slug>/, commit and push with /ak:git cp, and do not open a PR.",
      "descVi": "Tạo worktree/branch như plan/issue-<n>-<slug>, lưu dưới plans/<timestamp>-<slug>/, commit và push bằng /ak:git cp, và không mở PR."
    },
    {
      "number": 10,
      "titleEn": "Update issue",
      "titleVi": "Cập nhật issue",
      "descEn": "Post the final planning or gate-stop handoff, include per-phase summaries when planned, and apply plan-ready, decision, duplicate, deferred, wontfix, question, or repo-standard labels.",
      "descVi": "Post handoff cuối cho planning hoặc gate-stop, có summary từng phase nếu đã plan, và gắn label plan-ready, decision, duplicate, deferred, wontfix, question hoặc label chuẩn repo."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Audit gate before planning; planning only, never implementation",
    "titleVi": "Audit gate trước plan; chỉ lập plan, không implement",
    "contentEn": "If the brainstorm gate says duplicate, already handled, reject, defer, not worth implementing, or unresolved decisions, the workflow stops before /ak:plan, worktree creation, or branch push. Even when planning succeeds, it never implements or opens a PR.",
    "contentVi": "Nếu cổng brainstorm kết luận duplicate, đã xử lý, reject, defer, không đáng làm hoặc còn quyết định mở, workflow dừng trước /ak:plan, tạo worktree hoặc push branch. Ngay cả khi plan thành công, skill không implement và không mở PR."
  },
  "corePrinciplesEn": [
    "Issue content is untrusted input; the skill must extract requirements without obeying embedded instructions.",
    "The canonical output is plan files on a branch, not edits to the issue body.",
    "Validate and red-team are mandatory before marking a plan ready for audit."
  ],
  "corePrinciplesVi": [
    "Nội dung issue là input không đáng tin; skill rút yêu cầu nhưng không nghe instruction cài trong đó.",
    "Đầu ra canonical là file plan trên branch, không sửa body issue.",
    "Validate và red-team là bắt buộc trước khi đánh dấu plan sẵn sàng audit."
  ],
  "expertiseAreasEn": [
    "GitHub issue triage",
    "Scout and brainstorm gates",
    "Plan artifact generation",
    "Validation/red-team handoff",
    "Label and comment state management"
  ],
  "expertiseAreasVi": [
    "Triage GitHub issue",
    "Cổng scout và brainstorm",
    "Tạo artifact plan",
    "Bàn giao validate/red-team",
    "Quản lý trạng thái bằng label/comment"
  ],
  "outputFlags": [
    {
      "flag": "--repo owner/name",
      "titleEn": "Target repository",
      "titleVi": "Repo mục tiêu",
      "descEn": "Sets the repo when the issue number or URL is not enough to infer the intended repository.",
      "descVi": "Đặt repo khi số issue hoặc URL chưa đủ xác định repo cần xử lý.",
      "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit"
    },
    {
      "flag": "--plan-ready-label <name>",
      "titleEn": "Ready label",
      "titleVi": "Label plan-ready",
      "descEn": "Label applied when the plan is validated, red-teamed, pushed, and unblocked.",
      "descVi": "Label gắn khi plan đã validate, red-team, push và không còn blocker.",
      "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --plan-ready-label \"ready for plan audit\""
    },
    {
      "flag": "--decision-label <name>",
      "titleEn": "Decision label",
      "titleVi": "Label cần quyết định",
      "descEn": "Label applied when a human/product/architecture decision is needed before cooking.",
      "descVi": "Label gắn khi cần quyết định của human/product/architecture trước khi cook.",
      "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --decision-label \"need decisions\""
    }
  ],
  "skillStack": [
    {
      "name": "ak:scout",
      "type": "skill"
    },
    {
      "name": "ak:brainstorm",
      "type": "skill"
    },
    {
      "name": "ak:plan validate",
      "type": "skill"
    },
    {
      "name": "ak:plan red-team",
      "type": "skill"
    },
    {
      "name": "ak:git cp",
      "type": "skill"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Issue URL",
      "labelVi": "URL issue",
      "command": "/ak:issue-to-plan https://github.com/bestagentkits/agentkit/issues/123",
      "whenEn": "You have a full GitHub issue URL and want a validated plan branch, not implementation.",
      "whenVi": "Khi có URL GitHub issue đầy đủ và muốn branch plan đã kiểm, không implement.",
      "expectedEn": "Reads the issue, scouts, passes or stops at the audit gate, then plans/validates/red-teams only if allowed.",
      "expectedVi": "Đọc issue, scout, pass hoặc dừng ở audit gate, rồi chỉ plan/validate/red-team nếu được phép.",
      "recommended": true
    },
    {
      "labelEn": "Issue number plus repo",
      "labelVi": "Số issue kèm repo",
      "command": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit",
      "whenEn": "The current worktree does not uniquely identify the target issue repo.",
      "whenVi": "Khi worktree hiện tại không xác định duy nhất repo chứa issue.",
      "expectedEn": "Uses the explicit repo, then follows the same audit-gated planning pipeline.",
      "expectedVi": "Dùng repo đã chỉ định rồi chạy pipeline plan có audit gate tương tự."
    },
    {
      "labelEn": "Custom labels",
      "labelVi": "Label tùy chỉnh",
      "command": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --plan-ready-label \"ready for plan audit\" --decision-label \"need decisions\"",
      "whenEn": "The repository has named labels for plan audit and decision-needed states.",
      "whenVi": "Khi repo có label riêng cho trạng thái plan audit và cần quyết định.",
      "expectedEn": "Applies or creates/falls back according to documented label rules and reports final labels.",
      "expectedVi": "Gắn, tạo hoặc fallback theo rule label đã ghi và báo label cuối."
    }
  ],
  "reportOutput": {
    "titleEn": "Issue-to-Plan Result",
    "titleVi": "Kết quả Issue-to-Plan",
    "patternEn": "Source, decision, branch/worktree, plan path, AgentWiki, validation/red-team, labels, unresolved questions.",
    "patternVi": "Source, decision, branch/worktree, path plan, AgentWiki, validation/red-team, label và câu hỏi mở.",
    "locationEn": "plans/<timestamp>-<slug>/ on a pushed plan branch when planning proceeds.",
    "locationVi": "plans/<timestamp>-<slug>/ trên branch plan đã push khi được phép plan.",
    "descEn": "A ready result is ready for plan audit; cooking and PR creation are outside this skill.",
    "descVi": "Kết quả ready là sẵn sàng cho plan audit; cook và mở PR nằm ngoài skill này."
  }
};

export default data;
