import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-interview-docs",
  "command": "/ak:interview-docs",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:interview-docs",
    "titleVi": "/ak:interview-docs",
    "taglineEn": "Guided interview that turns the user's own vision, decisions, and taste into durable README, ADR, strategy, or principles documents.",
    "taglineVi": "Phỏng vấn có dẫn dắt để biến chính tầm nhìn, quyết định và gu của user thành README, ADR, chiến lược hoặc tài liệu nguyên tắc bền vững."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Select mode",
      "titleVi": "Chọn chế độ",
      "descEn": "Pick vision mode, structured-doc mode, or ask one concise question if both fit.",
      "descVi": "Chọn chế độ vision, structured-doc, hoặc hỏi một câu ngắn nếu yêu cầu phù hợp cả hai."
    },
    {
      "number": 2,
      "titleEn": "Read context",
      "titleVi": "Đọc bối cảnh",
      "descEn": "For vision work, read README.md and docs/adr before asking anything; for structured docs, read nearby documents.",
      "descVi": "Với vision, đọc README.md và docs/adr trước khi hỏi; với tài liệu có cấu trúc, đọc các tài liệu lân cận."
    },
    {
      "number": 3,
      "titleEn": "Ask precisely",
      "titleVi": "Hỏi đúng trọng tâm",
      "descEn": "Vision mode asks a batch of five varied questions; structured-doc mode asks exactly one open, specific question.",
      "descVi": "Vision mode hỏi một loạt năm câu đa dạng; structured-doc mode chỉ hỏi đúng một câu mở và cụ thể."
    },
    {
      "number": 4,
      "titleEn": "Patch after answer",
      "titleVi": "Cập nhật sau mỗi câu trả lời",
      "descEn": "After every answer, re-read the affected target and patch the user's words before continuing.",
      "descVi": "Sau mỗi câu trả lời, đọc lại phần bị ảnh hưởng và vá chính lời của user vào tài liệu trước khi tiếp tục."
    },
    {
      "number": 5,
      "titleEn": "Separate authority",
      "titleVi": "Tách đúng thẩm quyền",
      "descEn": "Keep README focused on vision; record explicit decisions in short ADRs with Status, Context, Decision, Consequences.",
      "descVi": "Giữ README cho tầm nhìn; ghi quyết định đã được user chốt vào ADR ngắn gồm Status, Context, Decision, Consequences."
    },
    {
      "number": 6,
      "titleEn": "Preserve wording",
      "titleVi": "Giữ ngôn từ user",
      "descEn": "Treat lists as unordered unless user approves rank; preserve edits and avoid speculative sections.",
      "descVi": "Xem danh sách là chưa có thứ tự nếu user chưa duyệt xếp hạng; giữ chỉnh sửa và tránh thêm mục suy đoán."
    },
    {
      "number": 7,
      "titleEn": "Continue or close",
      "titleVi": "Tiếp tục hoặc chốt",
      "descEn": "Continue the interview until the user ends it; keep replies concise and plain English.",
      "descVi": "Tiếp tục phỏng vấn đến khi user dừng; phản hồi ngắn gọn, tiếng Anh đơn giản."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Interview authority only",
    "titleVi": "Chỉ ghi điều user cung cấp",
    "contentEn": "Do not invent content, prioritize unordered lists, derive docs from source code, write secrets/personal data, or use ADRs to make unapproved architectural decisions.",
    "contentVi": "Không tự bịa nội dung, không tự xếp ưu tiên danh sách chưa có thứ tự, không suy tài liệu từ source code, không ghi secrets/dữ liệu cá nhân, và không dùng ADR để quyết định kiến trúc chưa được duyệt."
  },
  "corePrinciplesEn": [
    "User answers are the source of truth",
    "Ask before ranking or sequencing user-provided lists",
    "Patch incrementally after each answer",
    "README carries vision; ADRs carry approved decisions"
  ],
  "corePrinciplesVi": [
    "Câu trả lời của user là nguồn chân lý",
    "Hỏi trước khi xếp hạng hoặc sắp thứ tự danh sách user đưa",
    "Cập nhật từng bước sau mỗi câu trả lời",
    "README giữ tầm nhìn; ADR giữ quyết định đã duyệt"
  ],
  "expertiseAreasEn": [
    "README vision direction",
    "ADR decision capture",
    "Principles and strategy documents",
    "Guided stakeholder interviews"
  ],
  "expertiseAreasVi": [
    "Định hướng tầm nhìn README",
    "Ghi nhận quyết định ADR",
    "Tài liệu nguyên tắc và chiến lược",
    "Phỏng vấn stakeholder có dẫn dắt"
  ],
  "promptExamples": [
    {
      "labelEn": "Vision interview",
      "labelVi": "Phỏng vấn vision",
      "command": "/ak:interview-docs vision for our new analytics product",
      "whenEn": "The durable document should come from the user's vision rather than AI proposing strategy.",
      "whenVi": "Khi tài liệu bền vững phải xuất phát từ tầm nhìn của user, không phải AI tự đề xuất chiến lược.",
      "expectedEn": "Reads existing docs, asks five varied questions, and patches README/ADRs after each answer.",
      "expectedVi": "Đọc tài liệu hiện có, hỏi năm câu đa dạng và vá README/ADR sau từng câu trả lời.",
      "recommended": true
    },
    {
      "labelEn": "Structured document",
      "labelVi": "Tài liệu có cấu trúc",
      "command": "/ak:interview-docs docs/principles.md",
      "whenEn": "A specific principles, strategy, review, or framework document needs user-authored content.",
      "whenVi": "Khi một tài liệu nguyên tắc, chiến lược, review hoặc framework cần nội dung do user cung cấp.",
      "expectedEn": "Creates a minimal skeleton once, then asks one specific open question at a time.",
      "expectedVi": "Tạo skeleton tối giản một lần, rồi hỏi từng câu mở và cụ thể."
    }
  ],
  "reportOutput": {
    "titleEn": "Durable project document",
    "titleVi": "Tài liệu dự án bền vững",
    "patternEn": "README.md or short numbered ADR files",
    "patternVi": "README.md hoặc các ADR đánh số ngắn",
    "locationEn": "Project README/docs/adr or requested document path",
    "locationVi": "README/docs/adr của dự án hoặc path tài liệu được yêu cầu",
    "descEn": "User wording • approved decisions • context • consequences • no speculative authority",
    "descVi": "Ngôn từ user • quyết định đã duyệt • bối cảnh • hệ quả • không thêm thẩm quyền suy đoán"
  }
};

export default data;
