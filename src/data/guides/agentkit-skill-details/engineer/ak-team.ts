import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-team",
  "command": "/ak:team",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:team — Agent Teams",
    "titleVi": "/ak:team — Đội agent",
    "taglineEn": "Orchestrates coordinated multi-session Agent Teams for independent research, implementation, review, and debug workstreams through a lead, shared work state, and direct communication.",
    "taglineVi": "Điều phối Agent Teams nhiều phiên cho các luồng nghiên cứu, triển khai, review và debug độc lập thông qua lead, shared work state và giao tiếp trực tiếp."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Live team surface or abort",
    "titleVi": "Không có team surface thì dừng",
    "contentEn": "Before starting, discover the live collaboration surface for team creation, shared work, delegation, messages, waits, approvals, shutdown, and cleanup. If any required capability is absent or fails, report the observed error instead of substituting ordinary subagents.",
    "contentVi": "Trước khi bắt đầu, phải khám phá surface cộng tác đang hoạt động cho tạo team, shared work, delegation, nhắn tin, wait, approval, shutdown và cleanup. Nếu thiếu hoặc lỗi capability bắt buộc, hãy báo lỗi quan sát được thay vì thay bằng subagent thường."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Discover live surface",
      "titleVi": "Khám phá surface live",
      "descEn": "Resolve the available lifecycle, shared-state, delegation, messaging, wait, approval, shutdown, and cleanup capabilities from the current runtime.",
      "descVi": "Xác định capability vòng đời, shared state, delegation, nhắn tin, wait, approval, shutdown và cleanup từ runtime hiện tại."
    },
    {
      "number": 2,
      "titleEn": "Decompose work",
      "titleVi": "Chia nhỏ công việc",
      "descEn": "Choose research, cook, review, or debug only when the request can be split into independent scopes with explicit outputs.",
      "descVi": "Chỉ chọn research, cook, review hoặc debug khi yêu cầu có thể chia thành các scope độc lập với output rõ ràng."
    },
    {
      "number": 3,
      "titleEn": "Create team",
      "titleVi": "Tạo team",
      "descEn": "Create the team through the discovered lifecycle surface instead of relying on cached command names or ordinary subagent fallbacks.",
      "descVi": "Tạo team qua lifecycle surface đã khám phá, không dựa vào tên lệnh cache sẵn hoặc fallback sang subagent thường."
    },
    {
      "number": 4,
      "titleEn": "Register work",
      "titleVi": "Đăng ký work",
      "descEn": "Record work items with acceptance criteria, dependencies, owners, and durable report or plan destinations.",
      "descVi": "Ghi work item với tiêu chí chấp nhận, dependency, owner và nơi lưu report hoặc plan bền vững."
    },
    {
      "number": 5,
      "titleEn": "Spawn teammates",
      "titleVi": "Khởi chạy teammate",
      "descEn": "Delegate through the live surface, run independent scopes concurrently, and isolate concurrent writers with worktrees when supported and needed.",
      "descVi": "Giao việc qua surface live, chạy các scope độc lập song song và tách writer đồng thời bằng worktree khi được hỗ trợ và cần thiết."
    },
    {
      "number": 6,
      "titleEn": "Coordinate state",
      "titleVi": "Điều phối trạng thái",
      "descEn": "Use direct and team-wide messages, waits, and shared-state inspection; treat idle as waiting rather than completion.",
      "descVi": "Dùng tin nhắn trực tiếp/toàn đội, wait và kiểm tra shared state; coi idle là đang chờ chứ không phải hoàn thành."
    },
    {
      "number": 7,
      "titleEn": "Integrate and verify",
      "titleVi": "Tích hợp và kiểm tra",
      "descEn": "Integrate reports or branches only after prerequisites complete, then verify the combined result because completion messages are not proof.",
      "descVi": "Chỉ tích hợp report hoặc branch sau khi prerequisite xong, rồi kiểm tra kết quả chung vì lời báo hoàn thành không phải bằng chứng."
    },
    {
      "number": 8,
      "titleEn": "Shutdown and clean up",
      "titleVi": "Shutdown và dọn dẹp",
      "descEn": "Collect acknowledgements or concise handoffs, shut down teammates gracefully, invoke runtime cleanup, and finish with the required journal step unless opted out.",
      "descVi": "Thu acknowledgement hoặc handoff ngắn, shutdown teammate tử tế, gọi cleanup runtime và kết thúc bằng bước journal bắt buộc trừ khi đã opt-out."
    }
  ],
  "corePrinciplesEn": [
    "Use a live team surface or abort",
    "The lead owns decomposition, integration, verification, shutdown, and cleanup",
    "Use the smallest team that creates genuinely independent workstreams",
    "Idle is not complete, and teammate completion is not proof"
  ],
  "corePrinciplesVi": [
    "Dùng team surface live hoặc dừng",
    "Lead chịu trách nhiệm chia việc, tích hợp, verification, shutdown và cleanup",
    "Dùng đội nhỏ nhất nhưng tạo được các luồng việc thật sự độc lập",
    "Idle không phải hoàn thành, và teammate báo xong không phải bằng chứng"
  ],
  "expertiseAreasEn": [
    "multi-session teams",
    "parallel research",
    "delegated implementation",
    "evidence-based review",
    "competing debug hypotheses",
    "worktree isolation"
  ],
  "expertiseAreasVi": [
    "đội nhiều phiên",
    "nghiên cứu song song",
    "triển khai được giao",
    "review dựa trên bằng chứng",
    "giả thuyết debug cạnh tranh",
    "tách worktree"
  ],
  "promptExamples": [
    {
      "labelEn": "Research team",
      "labelVi": "Đội nghiên cứu",
      "command": "/ak:team research compare billing providers --researchers 3",
      "whenEn": "Use for coordinated multi-session research when distinct angles can run independently.",
      "whenVi": "Dùng cho nghiên cứu nhiều phiên có phối hợp khi các góc phân tích có thể chạy độc lập.",
      "expectedEn": "Discovers the live team surface, registers one owned research item per angle, waits for reports and shared state, then synthesizes recommendations and unresolved questions.",
      "expectedVi": "Khám phá team surface live, đăng ký một research item có owner cho từng góc, đợi report và shared state, rồi tổng hợp khuyến nghị cùng câu hỏi còn mở.",
      "recommended": true
    },
    {
      "labelEn": "Cook team with approval",
      "labelVi": "Đội triển khai có phê duyệt",
      "command": "/ak:team cook implement accepted auth plan --devs 3 --plan-approval --worktree",
      "whenEn": "Use for coordinated multi-session implementation when an accepted plan can split into non-overlapping ownership.",
      "whenVi": "Dùng cho triển khai nhiều phiên có phối hợp khi plan đã chấp nhận có thể chia ownership không chồng lấn.",
      "expectedEn": "Keeps developers read-only until scoped plans are approved, spawns isolated implementation work when supported, integrates completed branches, runs combined gates, and records docs impact.",
      "expectedVi": "Giữ developer ở chế độ chỉ đọc cho đến khi plan theo scope được phê duyệt, khởi chạy phần triển khai tách biệt khi được hỗ trợ, tích hợp branch đã xong, chạy gate tổng hợp và ghi docs impact."
    },
    {
      "labelEn": "Review team",
      "labelVi": "Đội review",
      "command": "/ak:team review audit checkout changes --reviewers 4",
      "whenEn": "Use for coordinated multi-session review when security, performance, tests, and architecture can be separate focuses.",
      "whenVi": "Dùng cho review nhiều phiên có phối hợp khi bảo mật, hiệu năng, test và kiến trúc có thể là các trọng tâm riêng.",
      "expectedEn": "Registers read-only reviewer scopes, requires severity with evidence and recommendations, waits for all required work, deduplicates disagreements, and produces an ordered action list.",
      "expectedVi": "Đăng ký scope reviewer chỉ đọc, yêu cầu mức độ nghiêm trọng kèm bằng chứng và khuyến nghị, đợi mọi phần bắt buộc, gộp các điểm bất đồng và tạo danh sách hành động theo thứ tự."
    },
    {
      "labelEn": "Debug team",
      "labelVi": "Đội debug",
      "command": "/ak:team debug diagnose intermittent checkout timeout --debuggers 3",
      "whenEn": "Use for coordinated multi-session debugging when competing hypotheses predict different observable evidence.",
      "whenVi": "Dùng cho debug nhiều phiên có phối hợp khi các giả thuyết cạnh tranh dự đoán bằng chứng quan sát khác nhau.",
      "expectedEn": "Assigns one debugger per hypothesis with evidence-for and evidence-against requirements, encourages direct challenges, identifies the surviving theory, and writes a durable root-cause report.",
      "expectedVi": "Giao một debugger cho mỗi giả thuyết với yêu cầu bằng chứng ủng hộ và phản bác, khuyến khích phản biện trực tiếp, xác định giả thuyết còn đứng vững và viết report root-cause bền vững."
    }
  ],
  "outputFlags": [
    {
      "flag": "--devs N",
      "titleEn": "Developer count",
      "titleVi": "Số developer",
      "descEn": "Sets implementation teammate count for cook workflows.",
      "descVi": "Đặt số teammate triển khai cho workflow cook.",
      "exampleCommand": "/ak:team cook implement dashboard --devs 3"
    },
    {
      "flag": "--researchers N",
      "titleEn": "Researcher count",
      "titleVi": "Số researcher",
      "descEn": "Sets independent researcher count for research workflows.",
      "descVi": "Đặt số researcher độc lập cho workflow research.",
      "exampleCommand": "/ak:team research compare databases --researchers 3"
    },
    {
      "flag": "--reviewers N",
      "titleEn": "Reviewer count",
      "titleVi": "Số reviewer",
      "descEn": "Sets reviewer count for independent review focuses.",
      "descVi": "Đặt số reviewer cho các trọng tâm review độc lập.",
      "exampleCommand": "/ak:team review checkout PR --reviewers 4"
    },
    {
      "flag": "--debuggers N",
      "titleEn": "Debugger count",
      "titleVi": "Số debugger",
      "descEn": "Sets debugger count for competing root-cause hypotheses.",
      "descVi": "Đặt số debugger cho các giả thuyết root-cause cạnh tranh.",
      "exampleCommand": "/ak:team debug diagnose flaky login --debuggers 3"
    },
    {
      "flag": "--plan-approval",
      "titleEn": "Plan approval gate",
      "titleVi": "Gate phê duyệt plan",
      "descEn": "Keeps implementation teammates read-only until the lead approves their scoped plans through the live approval surface.",
      "descVi": "Giữ teammate triển khai ở chế độ chỉ đọc cho đến khi lead phê duyệt plan theo scope qua approval surface live.",
      "exampleCommand": "/ak:team cook implement settings --plan-approval"
    },
    {
      "flag": "--no-plan-approval",
      "titleEn": "Skip plan approval gate",
      "titleVi": "Bỏ gate phê duyệt plan",
      "descEn": "Disables the implementation plan gate when plan approval is not requested.",
      "descVi": "Tắt gate phê duyệt plan khi không yêu cầu plan approval.",
      "exampleCommand": "/ak:team cook implement settings --no-plan-approval"
    },
    {
      "flag": "--delegate",
      "titleEn": "Delegate-only lead",
      "titleVi": "Lead chỉ giao việc",
      "descEn": "Keeps the lead in coordination, approval, synthesis, and reporting mode without implementation edits, commands, tests, or merges.",
      "descVi": "Giữ lead ở vai trò điều phối, phê duyệt, tổng hợp và báo cáo, không sửa file, chạy lệnh triển khai, test hoặc merge.",
      "exampleCommand": "/ak:team cook feature plan --delegate"
    },
    {
      "flag": "--worktree",
      "titleEn": "Worktree isolation",
      "titleVi": "Tách worktree",
      "descEn": "Requests isolated worktrees for implementation teammates when the live runtime supports them and concurrent writers need isolation.",
      "descVi": "Yêu cầu worktree tách biệt cho teammate triển khai khi runtime live hỗ trợ và writer đồng thời cần cách ly.",
      "exampleCommand": "/ak:team cook implement dashboard --devs 3 --worktree"
    }
  ],
  "workflowModes": [
    {
      "flag": "research",
      "modeEn": "Research",
      "modeVi": "Nghiên cứu",
      "research": "Distinct angles",
      "redTeam": "Alternatives and risks",
      "validation": "Comparison report"
    },
    {
      "flag": "cook",
      "modeEn": "Cook",
      "modeVi": "Triển khai",
      "research": "Accepted plan",
      "redTeam": "Ownership conflicts",
      "validation": "Combined tests and review"
    },
    {
      "flag": "review",
      "modeEn": "Review",
      "modeVi": "Review",
      "research": "Read-only scopes",
      "redTeam": "Evidence and impact",
      "validation": "Ordered action list"
    },
    {
      "flag": "debug",
      "modeEn": "Debug",
      "modeVi": "Debug",
      "research": "Competing hypotheses",
      "redTeam": "Evidence against",
      "validation": "Root-cause report"
    }
  ],
  "skillStack": [
    {
      "name": "/ak:journal",
      "type": "skill"
    },
    {
      "name": "team-coordination-rules.md",
      "type": "tool"
    },
    {
      "name": "agent-teams-controls-and-modes.md",
      "type": "tool"
    },
    {
      "name": "agent-teams-examples-and-best-practices.md",
      "type": "tool"
    },
    {
      "name": "agent-teams-official-docs.md",
      "type": "tool"
    }
  ]
};

export default data;
