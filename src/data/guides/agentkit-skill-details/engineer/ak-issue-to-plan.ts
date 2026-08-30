import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-issue-to-plan",
  "command": "/ak:issue-to-plan",
  "kit": "engineer",
  "header": {
    "titleEn": "Issue-to-Plan Audit Gate",
    "titleVi": "Cổng audit từ issue sang plan",
    "taglineEn": "Take a GitHub issue through repo scouting, a hard brainstorm gate, and—only if it passes—validated plan files, a pushed plan branch, and an issue handoff without implementation.",
    "taglineVi": "Đưa GitHub issue qua scouting repo, hard brainstorm gate, và—chỉ khi pass—file plan đã validate, branch plan đã push cùng issue handoff mà không implement."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Resolve issue",
      "titleVi": "Resolve issue",
      "descEn": "Accept an issue URL or number, resolve the repo with gh, compare URL repo to the current repo, and stop on mismatch unless --repo explicitly targets it.",
      "descVi": "Nhận URL hoặc số issue, resolve repo bằng gh, so repo trong URL với repo hiện tại và dừng khi lệch trừ khi --repo chỉ định rõ target."
    },
    {
      "number": 2,
      "titleEn": "Fetch and classify",
      "titleVi": "Fetch và phân loại",
      "descEn": "Fetch title, body, comments, labels, state, and linked PR evidence; classify bug, feature, refactor, docs, security-risk, research/task, or decision.",
      "descVi": "Fetch title, body, comment, label, state và bằng chứng PR liên quan; phân loại bug, feature, refactor, docs, security-risk, research/task hoặc decision."
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
      "descEn": "Only after a proceed decision, run /ak:plan and request --html --wiki; if unsupported, keep Markdown output and record that HTML/AgentWiki are pending.",
      "descVi": "Chỉ sau quyết định proceed, chạy /ak:plan và yêu cầu --html --wiki; nếu chưa hỗ trợ, giữ output Markdown và ghi HTML/AgentWiki đang pending."
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
      "descVi": "Tạo worktree/branch như plan/issue-<n>-<slug>, lưu dưới plans/<timestamp>-<slug>/, commit và push bằng /ak:git cp, không mở PR."
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
    "contentEn": "If the brainstorm gate says duplicate, already handled, reject, defer, not worth implementing, or needs decisions without a useful decision-oriented plan, the workflow stops before /ak:plan, worktree creation, or branch push. Even when planning succeeds, it never implements or opens a PR.",
    "contentVi": "Nếu cổng brainstorm kết luận duplicate, đã xử lý, reject, defer, không đáng làm hoặc cần quyết định mà không có decision-oriented plan hữu ích, workflow dừng trước /ak:plan, tạo worktree hoặc push branch. Ngay cả khi plan thành công, skill không implement và không mở PR."
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
      "descEn": "Sets the target repository explicitly; for issue numbers it supplies the repo, and for URLs it must match the intended local worktree.",
      "descVi": "Đặt repo mục tiêu rõ ràng; với số issue thì cung cấp repo, còn với URL thì phải khớp worktree local dự kiến.",
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
      "descEn": "Label applied when human, product, or architecture decisions are needed before downstream implementation.",
      "descVi": "Label gắn khi cần quyết định của human, product hoặc architecture trước khi implementation downstream.",
      "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --decision-label \"need decisions\""
    }
  ],
  "invocation": {
    "syntax": "/ak:issue-to-plan <github-issue-url | issue-number> [--repo owner/name] [--plan-ready-label <name>] [--decision-label <name>]",
    "arguments": [
      {
        "token": "<github-issue-url | issue-number>",
        "titleEn": "GitHub issue",
        "titleVi": "GitHub issue",
        "descEn": "Issue URL or issue number to audit and convert into a plan. A bare number requires --repo so the workflow can resolve the correct repository.",
        "descVi": "URL issue hoặc số issue cần audit rồi chuyển thành plan. Nếu chỉ nhập số thì cần --repo để workflow resolve đúng repository.",
        "required": true,
        "exampleCommand": "/ak:issue-to-plan https://github.com/bestagentkits/agentkit/issues/123"
      }
    ],
    "options": [
      {
        "token": "--repo owner/name",
        "titleEn": "Target repository",
        "titleVi": "Repo mục tiêu",
        "descEn": "Explicit repository used for issue lookup and mismatch checks. Required when the invocation uses an issue number instead of a full URL.",
        "descVi": "Repository rõ ràng dùng để lookup issue và kiểm tra mismatch. Bắt buộc khi invocation dùng số issue thay vì URL đầy đủ.",
        "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit"
      },
      {
        "token": "--plan-ready-label <name>",
        "titleEn": "Plan-ready label",
        "titleVi": "Label plan-ready",
        "descEn": "Label applied after the plan is validated, red-teamed, pushed, and has no blocking decisions. Defaults to ready for plan audit.",
        "descVi": "Label gắn sau khi plan đã validate, red-team, push và không còn quyết định blocking. Mặc định là ready for plan audit.",
        "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --plan-ready-label \"ready for plan audit\""
      },
      {
        "token": "--decision-label <name>",
        "titleEn": "Decision label",
        "titleVi": "Label cần quyết định",
        "descEn": "Label applied when human, product, or architecture decisions are needed before planning or downstream implementation. Defaults to need decisions.",
        "descVi": "Label gắn khi cần quyết định từ human, product hoặc architecture trước khi lập plan hoặc implementation downstream. Mặc định là need decisions.",
        "exampleCommand": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --decision-label \"need decisions\""
      }
    ]
  },
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
      "name": "ak:plan",
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
      "whenEn": "A GitHub issue is the accepted source for a proposed change, and you want planning only.",
      "whenVi": "Khi GitHub issue là nguồn đã chấp nhận cho thay đổi đề xuất và bạn chỉ muốn lập plan.",
      "expectedEn": "Resolves the repository from the URL, reads the issue as untrusted input, scouts current code and docs, posts the evaluation gate, then creates validated plan files and a pushed plan branch only if the gate proceeds.",
      "expectedVi": "Resolve repository từ URL, đọc issue như input không tin cậy, scout code và docs hiện tại, post evaluation gate, rồi chỉ tạo file plan đã validate cùng branch plan đã push nếu gate cho proceed.",
      "recommended": true
    },
    {
      "labelEn": "Issue number plus repo",
      "labelVi": "Số issue kèm repo",
      "command": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit",
      "whenEn": "You have an issue number and need to bind the workflow to a specific repository/worktree.",
      "whenVi": "Khi bạn có số issue và cần gắn workflow với một repository/worktree cụ thể.",
      "expectedEn": "Uses the explicit repo for gh issue lookup, stops on target mismatch, then runs the same scout plus brainstorm gate before any /ak:plan or branch work.",
      "expectedVi": "Dùng repo đã chỉ định để gh đọc issue, dừng nếu target lệch, rồi chạy scout và brainstorm gate trước mọi /ak:plan hoặc branch work."
    },
    {
      "labelEn": "Custom labels",
      "labelVi": "Label tùy chỉnh",
      "command": "/ak:issue-to-plan 123 --repo bestagentkits/agentkit --plan-ready-label \"ready for plan audit\" --decision-label \"need decisions\"",
      "whenEn": "The repository uses custom labels for plan-audit readiness or human-decision states.",
      "whenVi": "Khi repository dùng label riêng cho trạng thái sẵn sàng plan audit hoặc cần quyết định từ người.",
      "expectedEn": "Applies the configured ready or decision label after the gate result, creating or falling back only as documented, and reports final labels in the GitHub handoff.",
      "expectedVi": "Gắn ready hoặc decision label đã cấu hình sau kết quả gate, chỉ tạo hoặc fallback theo tài liệu, và báo label cuối trong GitHub handoff."
    }
  ],
  "reportOutput": {
    "titleEn": "Issue-to-Plan Result",
    "titleVi": "Kết quả Issue-to-Plan",
    "patternEn": "Source, gate decision, branch/worktree, plan path, HTML/AgentWiki when produced, validation/red-team status, labels, unresolved questions.",
    "patternVi": "Source, gate decision, branch/worktree, path plan, HTML/AgentWiki khi có, trạng thái validation/red-team, label và câu hỏi mở.",
    "locationEn": "plans/<timestamp>-<slug>/ on a pushed plan branch when planning proceeds.",
    "locationVi": "plans/<timestamp>-<slug>/ trên branch plan đã push khi được phép plan.",
    "descEn": "A ready result is ready for plan audit; cooking and PR creation are outside this skill.",
    "descVi": "Kết quả ready là sẵn sàng cho plan audit; cook và mở PR nằm ngoài skill này."
  }
};

export default data;
