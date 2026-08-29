import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-team",
  "command": "/ak:team",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:team — Agent Teams Orchestrator",
    "titleVi": "/ak:team — Điều phối đội agent",
    "taglineEn": "Coordinates live Agent Teams for genuinely independent research, implementation, review, and debug workstreams with shared state, direct messages, ownership, verification, shutdown, and cleanup.",
    "taglineVi": "Điều phối Agent Teams thật cho các luồng nghiên cứu, triển khai, review và debug độc lập, có shared state, nhắn trực tiếp, ownership, verification, shutdown và cleanup."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Live team surface or abort",
    "titleVi": "Không có team surface thì dừng",
    "contentEn": "Discover the live collaboration capabilities before starting. If required team creation, shared work, delegation, messaging, waiting, approval, shutdown, or cleanup is absent or fails, stop and report; never silently substitute ordinary subagents.",
    "contentVi": "Phải khám phá capability cộng tác đang hoạt động trước khi bắt đầu. Nếu thiếu hoặc lỗi phần tạo team, shared work, delegation, messaging, wait, approval, shutdown hoặc cleanup, hãy dừng và báo; không âm thầm thay bằng subagent thường."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Discover runtime",
      "titleVi": "Khám phá runtime",
      "descEn": "Inspect live capabilities and parameters for team lifecycle, shared work, delegation, messaging, wait, approval, shutdown, and cleanup.",
      "descVi": "Kiểm tra capability và tham số hiện có cho vòng đời team, shared work, delegation, messaging, wait, approval, shutdown và cleanup."
    },
    {
      "number": 2,
      "titleEn": "Choose template",
      "titleVi": "Chọn template",
      "descEn": "Use research, cook, review, or debug only when there are truly independent workstreams.",
      "descVi": "Chỉ dùng research, cook, review hoặc debug khi có các luồng việc thật sự độc lập."
    },
    {
      "number": 3,
      "titleEn": "Decompose ownership",
      "titleVi": "Chia ownership",
      "descEn": "Split the request into explicit outputs, dependencies, non-overlapping file scopes, and acceptance criteria.",
      "descVi": "Chia yêu cầu thành output rõ ràng, dependency, phạm vi file không chồng lấn và tiêu chí chấp nhận."
    },
    {
      "number": 4,
      "titleEn": "Create team",
      "titleVi": "Tạo team",
      "descEn": "Create the team through the live surface and register durable work items with owners and report destinations.",
      "descVi": "Tạo team qua surface đang hoạt động và đăng ký work item bền vững với owner và nơi ghi report."
    },
    {
      "number": 5,
      "titleEn": "Spawn teammates",
      "titleVi": "Khởi chạy teammate",
      "descEn": "Delegate through the live runtime, run independent scopes concurrently, and use isolated worktrees for concurrent writers when supported.",
      "descVi": "Giao việc qua runtime hiện có, chạy các scope độc lập song song và dùng worktree tách biệt cho writer đồng thời khi được hỗ trợ."
    },
    {
      "number": 6,
      "titleEn": "Coordinate state",
      "titleVi": "Điều phối trạng thái",
      "descEn": "Use direct/team messages, waits, and shared state; treat idle as waiting, not completion.",
      "descVi": "Dùng tin nhắn trực tiếp/toàn đội, wait và shared state; coi idle là đang chờ, không phải đã xong."
    },
    {
      "number": 7,
      "titleEn": "Integrate and verify",
      "titleVi": "Tích hợp và kiểm tra",
      "descEn": "Integrate only after prerequisites finish, then verify the combined result because completion messages are not proof.",
      "descVi": "Chỉ tích hợp sau khi prerequisite xong, rồi kiểm tra kết quả chung vì lời báo hoàn thành không phải bằng chứng."
    },
    {
      "number": 8,
      "titleEn": "Shutdown cleanly",
      "titleVi": "Tắt gọn gàng",
      "descEn": "Collect acknowledgements or concise handoffs, shut down teammates gracefully, and invoke cleanup via the live runtime.",
      "descVi": "Thu acknowledgement hoặc handoff ngắn, tắt teammate tử tế và gọi cleanup qua runtime đang hoạt động."
    }
  ],
  "corePrinciplesEn": [
    "The lead owns decomposition and integration",
    "Use the smallest team that creates real concurrency",
    "Idle is not complete",
    "Teammate completion is not verification"
  ],
  "corePrinciplesVi": [
    "Lead chịu trách nhiệm chia việc và tích hợp",
    "Dùng đội nhỏ nhất nhưng tạo được song song thật",
    "Idle không có nghĩa là hoàn thành",
    "Teammate báo xong không thay thế verification"
  ],
  "expertiseAreasEn": [
    "multi-session teams",
    "parallel research",
    "delegated implementation",
    "evidence review",
    "competing debug hypotheses",
    "worktree isolation"
  ],
  "expertiseAreasVi": [
    "đội nhiều phiên",
    "nghiên cứu song song",
    "triển khai được giao",
    "review bằng chứng",
    "giả thuyết debug cạnh tranh",
    "tách worktree"
  ],
  "promptExamples": [
    {
      "labelEn": "Research team",
      "labelVi": "Đội nghiên cứu",
      "command": "/ak:team research compare billing providers --researchers 3",
      "whenEn": "Three independent research angles can run in parallel.",
      "whenVi": "Có ba góc nghiên cứu độc lập có thể chạy song song.",
      "expectedEn": "Creates researcher work items, waits for evidence, and synthesizes one recommendation.",
      "expectedVi": "Tạo work item cho researcher, đợi bằng chứng và tổng hợp một khuyến nghị.",
      "recommended": true
    },
    {
      "labelEn": "Implementation team",
      "labelVi": "Đội triển khai",
      "command": "/ak:team cook implement accepted auth plan --devs 3",
      "whenEn": "An accepted plan can be split into non-overlapping implementation groups.",
      "whenVi": "Một plan đã chấp nhận có thể chia thành các nhóm triển khai không chồng lấn.",
      "expectedEn": "Delegates developers, integrates results, and runs combined verification.",
      "expectedVi": "Giao cho developer, tích hợp kết quả và chạy verification tổng hợp."
    },
    {
      "labelEn": "Review team",
      "labelVi": "Đội review",
      "command": "/ak:team review audit checkout changes --reviewers 4",
      "whenEn": "Security, performance, accessibility, and architecture review can be independent.",
      "whenVi": "Review bảo mật, hiệu năng, accessibility và kiến trúc có thể tách độc lập.",
      "expectedEn": "Deduplicates evidence-backed findings and produces an ordered action list.",
      "expectedVi": "Gộp các phát hiện có bằng chứng, bỏ trùng và tạo danh sách hành động theo thứ tự."
    },
    {
      "labelEn": "Delegate lead",
      "labelVi": "Lead chỉ điều phối",
      "command": "/ak:team cook migrate settings page --devs 2 --delegate",
      "whenEn": "The lead should coordinate but not edit or run implementation commands.",
      "whenVi": "Lead cần điều phối nhưng không sửa file hoặc chạy lệnh triển khai.",
      "expectedEn": "Keeps the lead to coordination, approval, synthesis, and reporting.",
      "expectedVi": "Giữ lead ở vai trò điều phối, phê duyệt, tổng hợp và báo cáo."
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
      "flag": "--delegate",
      "titleEn": "Delegate-only lead",
      "titleVi": "Lead chỉ giao việc",
      "descEn": "Keeps the lead in coordination mode without implementation edits or commands.",
      "descVi": "Giữ lead ở chế độ điều phối, không sửa file hoặc chạy lệnh triển khai.",
      "exampleCommand": "/ak:team cook feature plan --delegate"
    }
  ],
  "workflowModes": [
    {
      "flag": "research",
      "modeEn": "Research",
      "modeVi": "Nghiên cứu",
      "research": "Independent angles",
      "redTeam": "Compare risks",
      "validation": "Synthesize evidence"
    },
    {
      "flag": "cook",
      "modeEn": "Cook",
      "modeVi": "Triển khai",
      "research": "Accepted plan",
      "redTeam": "Ownership conflicts",
      "validation": "Combined tests/review"
    },
    {
      "flag": "review",
      "modeEn": "Review",
      "modeVi": "Review",
      "research": "Read-only scopes",
      "redTeam": "Severity evidence",
      "validation": "Deduped findings"
    },
    {
      "flag": "debug",
      "modeEn": "Debug",
      "modeVi": "Debug",
      "research": "Competing hypotheses",
      "redTeam": "Evidence against",
      "validation": "Surviving root cause"
    }
  ]
};

export default data;
