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
      "descEn": "Use conversation, accepted decisions, current diff, tests, and issue or plan state as the strongest available evidence.",
      "descVi": "Dùng hội thoại, quyết định đã chấp nhận, diff hiện tại, test và trạng thái issue/plan làm bằng chứng mạnh nhất."
    },
    {
      "number": 2,
      "titleEn": "Separate states",
      "titleVi": "Tách trạng thái",
      "descEn": "Separate implemented and verified work from proposed, inferred, untested, unshipped, or unresolved work.",
      "descVi": "Tách phần đã làm và đã kiểm khỏi phần mới đề xuất, suy luận, chưa test, chưa ship hoặc còn mở."
    },
    {
      "number": 3,
      "titleEn": "Extract highlights",
      "titleVi": "Rút điểm chính",
      "descEn": "Identify the highest-value changes, user-visible behavior, architecture, database, and UI/UX details only when applicable.",
      "descVi": "Chọn các thay đổi giá trị nhất, hành vi thấy được, kiến trúc, database và UI/UX chỉ khi có liên quan."
    },
    {
      "number": 4,
      "titleEn": "Record failures",
      "titleVi": "Ghi lỗi và phục hồi",
      "descEn": "Summarize failed attempts, workarounds, results, and remaining blockers before they disappear from memory.",
      "descVi": "Tóm tắt các lần thử lỗi, workaround, kết quả và blocker còn lại trước khi bị mất khỏi ngữ cảnh."
    },
    {
      "number": 5,
      "titleEn": "Explain decisions",
      "titleVi": "Giải thích quyết định",
      "descEn": "Name important trade-offs and why the implementation chose them.",
      "descVi": "Nêu các đánh đổi quan trọng và lý do cách triển khai đã chọn chúng."
    },
    {
      "number": 6,
      "titleEn": "Add useful visual",
      "titleVi": "Thêm visual hữu ích",
      "descEn": "Include a compact table, chart, Mermaid, or ASCII flow when it clarifies behavior, architecture, database, or user flow.",
      "descVi": "Thêm bảng, chart, Mermaid hoặc ASCII flow ngắn khi nó làm rõ hành vi, kiến trúc, database hoặc user flow."
    },
    {
      "number": 7,
      "titleEn": "End with next steps",
      "titleVi": "Kết bằng bước tiếp",
      "descEn": "Keep the answer concise, omit empty sections, and place unresolved items or follow-ups last.",
      "descVi": "Giữ câu trả lời gọn, bỏ mục rỗng và đặt phần còn mở hoặc việc tiếp theo ở cuối."
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
  "promptExamples": [
    {
      "labelEn": "Technical recap",
      "labelVi": "Tóm tắt kỹ thuật",
      "command": "/ak:sumup summarize the auth refactor and remaining blockers",
      "whenEn": "A human needs the outcome without replaying the implementation session.",
      "whenVi": "Người đọc cần hiểu kết quả mà không xem lại toàn bộ phiên triển khai.",
      "expectedEn": "Returns outcome, highlights, failures/recovery, decisions, how it works, usage, and follow-ups as relevant.",
      "expectedVi": "Trả outcome, điểm chính, lỗi/phục hồi, quyết định, cách hoạt động, cách dùng và follow-up khi phù hợp.",
      "recommended": true
    },
    {
      "labelEn": "Architecture recap",
      "labelVi": "Tóm tắt kiến trúc",
      "command": "/ak:sumup explain how the new queue worker works",
      "whenEn": "The implementation changed behavior or architecture that benefits from a compact flow.",
      "whenVi": "Phần triển khai đổi hành vi hoặc kiến trúc và cần một flow ngắn để dễ hiểu.",
      "expectedEn": "Includes a concise behavior or architecture visual plus evidence boundaries.",
      "expectedVi": "Bao gồm visual hành vi/kiến trúc ngắn và ranh giới bằng chứng."
    }
  ]
};

export default data;
