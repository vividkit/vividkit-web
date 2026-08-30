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
    "syntax": "/ak:sumup [recap request]",
    "arguments": [
      {
        "token": "[recap request]",
        "titleEn": "Recap focus",
        "titleVi": "Trọng tâm tóm tắt",
        "descEn": "Natural-language implementation period, feature, or question to recap. Include the evidence boundary or emphasis you want; it does not trigger implementation, deployment, or a live status check.",
        "descVi": "Khoảng implementation, feature hoặc câu hỏi cần tóm tắt bằng ngôn ngữ tự nhiên. Nêu ranh giới bằng chứng hoặc trọng tâm mong muốn; phần này không kích hoạt triển khai, deploy hay live status check.",
        "exampleCommand": "/ak:sumup \"Recap the implementation we just completed. Separate verified work from untested or unresolved work, explain the main flow, and keep next steps last.\""
      }
    ]
  },
  "promptExamples": [
    {
      "labelEn": "Implementation recap",
      "labelVi": "Tóm tắt triển khai",
      "command": "/ak:sumup summarize the auth refactor and remaining blockers",
      "whenEn": "Use after implementation when a human needs the outcome without replaying the work session.",
      "whenVi": "Dùng sau khi triển khai khi người đọc cần hiểu kết quả mà không xem lại toàn bộ phiên làm việc.",
      "expectedEn": "Produces a concise recap with outcome, strongest evidence, key implemented changes, verification boundaries, unresolved blockers, and actionable next steps.",
      "expectedVi": "Tạo bản tóm tắt gọn gồm outcome, bằng chứng mạnh nhất, thay đổi đã triển khai, ranh giới verification, blocker còn mở và bước tiếp có thể hành động.",
      "recommended": true
    },
    {
      "labelEn": "Failure and workaround recap",
      "labelVi": "Tóm tắt lỗi và workaround",
      "command": "/ak:sumup recap what failed during the queue worker implementation and what remains",
      "whenEn": "Use when failed attempts, workaround choices, or unresolved blockers need to be preserved clearly.",
      "whenVi": "Dùng khi cần giữ lại rõ ràng các lần thử lỗi, lựa chọn workaround hoặc blocker chưa giải quyết.",
      "expectedEn": "Separates resolved recovery steps from unresolved failures, names the evidence for each result, and keeps remaining blockers last.",
      "expectedVi": "Tách các bước phục hồi đã xong khỏi lỗi còn mở, nêu bằng chứng cho từng kết quả và đặt blocker còn lại ở cuối."
    },
    {
      "labelEn": "Behavior or architecture recap",
      "labelVi": "Tóm tắt hành vi hoặc kiến trúc",
      "command": "/ak:sumup explain how the new queue worker works and how to use it",
      "whenEn": "Use when changed behavior, user flow, architecture, database, or UI/UX benefits from a compact explanation.",
      "whenVi": "Dùng khi hành vi, user flow, kiến trúc, database hoặc UI/UX đã đổi và cần giải thích ngắn gọn.",
      "expectedEn": "Explains only applicable operation details, includes a compact clarifying visual when useful, and adds minimal usage steps or commands.",
      "expectedVi": "Chỉ giải thích các chi tiết vận hành có liên quan, thêm visual ngắn khi hữu ích và đưa bước hoặc lệnh sử dụng tối thiểu."
    }
  ]
};

export default data;
