import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-sumup",
  "command": "/ak:sumup",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:sumup — Implementation Recap",
    "titleVi": "/ak:sumup — Tóm tắt phần đã triển khai",
    "taglineEn": "Summarizes completed engineering work, evidence, failures, trade-offs, behavior, architecture, usage, and follow-ups without replaying the full session.",
    "taglineVi": "Tóm tắt phần kỹ thuật đã hoàn tất, bằng chứng, lỗi và cách xử lý, đánh đổi, hành vi, kiến trúc, cách dùng và việc tiếp theo mà không bắt người đọc xem lại cả phiên làm việc."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Recap is not implementation or deployment",
    "titleVi": "Tóm tắt không phải triển khai hay deploy",
    "contentEn": "Do not mutate files, claim deployment, fabricate verification, expose secrets, or replace a live status check with narrative.",
    "contentVi": "Không sửa file, không tuyên bố đã deploy, không bịa verification, không lộ bí mật và không thay thế kiểm tra trạng thái thật bằng lời kể."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Gather evidence",
      "titleVi": "Gom bằng chứng",
      "descEn": "Use the conversation, accepted decisions, current diff, tests, and relevant issue or plan state as the strongest available evidence.",
      "descVi": "Dùng hội thoại, quyết định đã chấp nhận, diff hiện tại, test và trạng thái issue/plan liên quan làm bằng chứng mạnh nhất."
    },
    {
      "number": 2,
      "titleEn": "Separate evidence states",
      "titleVi": "Tách trạng thái bằng chứng",
      "descEn": "Separate implemented and verified work from proposed, inferred, untested, unshipped, or still-unresolved work.",
      "descVi": "Tách phần đã triển khai và đã kiểm khỏi phần mới đề xuất, suy luận, chưa test, chưa ship hoặc vẫn còn mở."
    },
    {
      "number": 3,
      "titleEn": "Highlight relevant substance",
      "titleVi": "Nêu phần quan trọng liên quan",
      "descEn": "Summarize outcomes, high-value changes, failures and workarounds, decisions, how the result works, practical usage, follow-ups, and next steps.",
      "descVi": "Tóm tắt outcome, thay đổi giá trị cao, lỗi và workaround, quyết định, cách kết quả hoạt động, cách dùng thực tế, follow-up và bước tiếp."
    },
    {
      "number": 4,
      "titleEn": "Add a clarifying visual",
      "titleVi": "Thêm visual làm rõ",
      "descEn": "Use a compact table, chart, Mermaid diagram, or ASCII flow when it clarifies behavior, user flow, architecture, database, or UI/UX; otherwise briefly say why no visual helps.",
      "descVi": "Dùng bảng, chart, Mermaid hoặc ASCII flow ngắn khi nó làm rõ hành vi, user flow, kiến trúc, database hoặc UI/UX; nếu không hữu ích thì nói ngắn lý do."
    },
    {
      "number": 5,
      "titleEn": "Keep unresolved work last",
      "titleVi": "Đặt phần còn mở ở cuối",
      "descEn": "Keep the recap concise, use the user's language, omit empty sections, and put unresolved items last.",
      "descVi": "Giữ bản tóm tắt gọn, dùng ngôn ngữ của người dùng, bỏ mục rỗng và đặt các phần còn mở ở cuối."
    }
  ],
  "corePrinciplesEn": [
    "Evidence first, narrative second",
    "Verified is not the same as proposed",
    "Use visuals only when they clarify",
    "Keep unresolved work last and actionable"
  ],
  "corePrinciplesVi": [
    "Bằng chứng trước, lời kể sau",
    "Đã kiểm khác với mới đề xuất",
    "Chỉ dùng visual khi nó làm rõ vấn đề",
    "Để phần còn mở ở cuối và phải hành động được"
  ],
  "expertiseAreasEn": [
    "implementation recap",
    "verification summary",
    "failure recovery",
    "architecture explanation",
    "follow-up prioritization"
  ],
  "expertiseAreasVi": [
    "tóm tắt triển khai",
    "tóm tắt verification",
    "phục hồi sau lỗi",
    "giải thích kiến trúc",
    "ưu tiên follow-up"
  ],
  "invocation": {
    "syntax": "/ak:sumup [task|PR|branch|recent]",
    "arguments": [
      {
        "token": "[task|PR|branch|recent]",
        "titleEn": "Recap scope",
        "titleVi": "Phạm vi tóm tắt",
        "descEn": "Optional evidence boundary: one task, a pull request, a branch, or recent work. Omit it to recap the strongest nearby implementation evidence. It does not implement, deploy, or replace a live status check.",
        "descVi": "Ranh giới bằng chứng tùy chọn: một task, một pull request, một branch, hoặc phần việc gần đây. Bỏ qua để tóm tắt bằng chứng triển khai mạnh nhất ở gần. Không triển khai, không deploy và không thay live status check.",
        "required": false,
        "exampleCommand": "/ak:sumup recent",
        "exampleCommandVi": "/ak:sumup recent"
      }
    ],
    "subcommands": [
      {
        "name": "task",
        "syntax": "/ak:sumup task",
        "titleEn": "Task recap",
        "titleVi": "Tóm tắt task",
        "descEn": "Recap one completed task: outcome, verified changes, failures, decisions, and remaining work.",
        "descVi": "Tóm tắt một task đã xong: outcome, thay đổi đã kiểm, lỗi, quyết định và việc còn mở.",
        "outcomeEn": "A concise task recap with evidence boundaries and unresolved items last.",
        "outcomeVi": "Bản tóm tắt task gọn với ranh giới bằng chứng và phần còn mở ở cuối.",
        "exampleCommand": "/ak:sumup task",
        "exampleCommandVi": "/ak:sumup task"
      },
      {
        "name": "PR",
        "syntax": "/ak:sumup PR",
        "titleEn": "Pull request recap",
        "titleVi": "Tóm tắt pull request",
        "descEn": "Recap the implemented work bounded by a pull request without claiming it is deployed.",
        "descVi": "Tóm tắt phần đã triển khai trong ranh giới pull request mà không tuyên bố đã deploy.",
        "outcomeEn": "PR-bounded highlights, verification state, and follow-ups without a deployment claim.",
        "outcomeVi": "Điểm nhấn trong ranh giới PR, trạng thái verification và follow-up, không tuyên bố deploy.",
        "exampleCommand": "/ak:sumup PR",
        "exampleCommandVi": "/ak:sumup PR"
      },
      {
        "name": "branch",
        "syntax": "/ak:sumup branch",
        "titleEn": "Branch recap",
        "titleVi": "Tóm tắt branch",
        "descEn": "Recap implemented work on the named or current branch using diff, tests, and accepted decisions.",
        "descVi": "Tóm tắt phần đã làm trên branch đã nêu hoặc branch hiện tại bằng diff, test và quyết định đã chấp nhận.",
        "outcomeEn": "Branch-scoped outcome, key changes, failures, and remaining blockers with evidence named.",
        "outcomeVi": "Outcome theo branch, thay đổi chính, lỗi và blocker còn lại, kèm bằng chứng được nêu rõ.",
        "exampleCommand": "/ak:sumup branch",
        "exampleCommandVi": "/ak:sumup branch"
      },
      {
        "name": "recent",
        "syntax": "/ak:sumup recent",
        "titleEn": "Recent work recap",
        "titleVi": "Tóm tắt việc gần đây",
        "descEn": "Recap the most recent implementation period without replaying the whole session.",
        "descVi": "Tóm tắt khoảng triển khai gần nhất mà không xem lại cả phiên làm việc.",
        "outcomeEn": "Recent-work recap that separates verified results from untested or unresolved items.",
        "outcomeVi": "Tóm tắt việc gần đây, tách kết quả đã kiểm khỏi phần chưa test hoặc còn mở.",
        "exampleCommand": "/ak:sumup recent",
        "exampleCommandVi": "/ak:sumup recent"
      }
    ]
  },
  "promptExamples": [
    {
      "labelEn": "Default recap",
      "labelVi": "Tóm tắt mặc định",
      "command": "/ak:sumup",
      "whenEn": "After implementation, when a human needs the outcome without replaying the work session.",
      "whenVi": "Sau khi triển khai, khi người đọc cần hiểu kết quả mà không xem lại toàn bộ phiên làm việc.",
      "expectedEn": "Produces a concise recap with outcome, strongest nearby evidence, key implemented changes, verification boundaries, unresolved blockers, and actionable next steps last.",
      "expectedVi": "Tạo bản tóm tắt gọn gồm outcome, bằng chứng mạnh nhất ở gần, thay đổi đã triển khai, ranh giới verification, blocker còn mở và bước tiếp có thể hành động ở cuối.",
      "recommended": true
    },
    {
      "labelEn": "Task recap",
      "labelVi": "Tóm tắt task",
      "command": "/ak:sumup task",
      "whenEn": "One completed task needs an evidence-bounded recap of what changed and what remains.",
      "whenVi": "Một task đã xong cần bản tóm tắt có ranh giới bằng chứng về phần đã đổi và phần còn lại.",
      "expectedEn": "Summarizes that task's outcome, verified changes, failures and workarounds, decisions, and remaining blockers without implementing anything new.",
      "expectedVi": "Tóm tắt outcome của task, thay đổi đã kiểm, lỗi và workaround, quyết định và blocker còn lại mà không triển khai thêm gì."
    },
    {
      "labelEn": "Pull request recap",
      "labelVi": "Tóm tắt pull request",
      "command": "/ak:sumup PR",
      "whenEn": "The pull request is the evidence boundary and must not be treated as a live deploy.",
      "whenVi": "Pull request là ranh giới bằng chứng và không được coi như đã deploy.",
      "expectedEn": "Recaps PR-bounded implemented work, separates verified from untested changes, and refuses to claim deployment without runtime evidence.",
      "expectedVi": "Tóm tắt phần đã làm trong ranh giới PR, tách phần đã kiểm khỏi phần chưa test, và từ chối tuyên bố deploy khi chưa có bằng chứng runtime."
    },
    {
      "labelEn": "Branch recap",
      "labelVi": "Tóm tắt branch",
      "command": "/ak:sumup branch",
      "whenEn": "You need the implemented story of the current or named branch without a live status check.",
      "whenVi": "Cần câu chuyện phần đã làm trên branch hiện tại hoặc đã nêu, không phải live status check.",
      "expectedEn": "Uses branch diff, tests, and accepted decisions as evidence, explains how the result works when useful, and keeps unresolved items last.",
      "expectedVi": "Dùng diff branch, test và quyết định đã chấp nhận làm bằng chứng, giải thích cách kết quả hoạt động khi hữu ích, và để phần còn mở ở cuối."
    },
    {
      "labelEn": "Recent work recap",
      "labelVi": "Tóm tắt việc gần đây",
      "command": "/ak:sumup recent",
      "whenEn": "The latest implementation period should be recapped without replaying the whole session.",
      "whenVi": "Khoảng triển khai gần nhất cần được tóm tắt mà không xem lại cả phiên.",
      "expectedEn": "Gathers recent conversation, diff, and test evidence, omits empty sections, and adds a compact visual only when it clarifies behavior or architecture.",
      "expectedVi": "Gom bằng chứng hội thoại, diff và test gần đây, bỏ mục rỗng, và chỉ thêm visual ngắn khi nó làm rõ hành vi hoặc kiến trúc."
    }
  ]
};

export default data;
