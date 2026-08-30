import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-interview-docs",
  "command": "/ak:interview-docs",
  "kit": "engineer",
  "header": {
    "titleEn": "Interview-Driven Docs",
    "titleVi": "Viết tài liệu bằng phỏng vấn",
    "taglineEn": "Turn the user’s own vision, decisions, and wording into durable README, ADR, principles, strategy, review, or framework documents through a guided interview.",
    "taglineVi": "Biến vision, quyết định và ngôn từ của chính user thành README, ADR, principles, strategy, review hoặc framework bền vững qua phỏng vấn có hướng dẫn."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Select mode",
      "titleVi": "Chọn chế độ",
      "descEn": "Choose vision mode for project vision, README direction, and ADR decisions; choose structured-doc mode for one user-authored principles, strategy, review, or framework document.",
      "descVi": "Chọn vision mode cho vision dự án, hướng README và quyết định ADR; chọn structured-doc mode cho một tài liệu do user làm chủ như principles, strategy, review hoặc framework."
    },
    {
      "number": 2,
      "titleEn": "Ask if ambiguous",
      "titleVi": "Hỏi khi mơ hồ",
      "descEn": "If both modes fit, ask one concise question before writing.",
      "descVi": "Nếu cả hai mode đều phù hợp, hỏi một câu ngắn trước khi viết."
    },
    {
      "number": 3,
      "titleEn": "Read nearby docs",
      "titleVi": "Đọc tài liệu gần đó",
      "descEn": "In vision mode, read README.md and docs/adr first; in structured mode, read nearby documents and create only a minimal skeleton once.",
      "descVi": "Ở vision mode, đọc README.md và docs/adr trước; ở structured mode, đọc tài liệu gần đó và chỉ tạo skeleton tối thiểu một lần."
    },
    {
      "number": 4,
      "titleEn": "Interview from user",
      "titleVi": "Phỏng vấn từ user",
      "descEn": "Ask five high-variety questions in vision mode, or exactly one specific open question at a time in structured-doc mode.",
      "descVi": "Hỏi năm câu đa dạng ở vision mode, hoặc đúng một câu mở cụ thể mỗi lượt ở structured-doc mode."
    },
    {
      "number": 5,
      "titleEn": "Patch after each answer",
      "titleVi": "Patch sau mỗi câu trả lời",
      "descEn": "After every answer, re-read the affected document or section and patch the user’s words before asking the next question.",
      "descVi": "Sau mỗi câu trả lời, đọc lại tài liệu hoặc section bị ảnh hưởng và patch lời của user trước khi hỏi tiếp."
    },
    {
      "number": 6,
      "titleEn": "Preserve decisions",
      "titleVi": "Giữ đúng quyết định",
      "descEn": "Keep README to vision and record explicit architectural decisions in short numbered ADRs with Status, Context, Decision, and Consequences.",
      "descVi": "Giữ README cho vision và ghi quyết định kiến trúc đã được duyệt vào ADR ngắn đánh số với Status, Context, Decision và Consequences."
    },
    {
      "number": 7,
      "titleEn": "Respect unordered lists",
      "titleVi": "Tôn trọng danh sách chưa xếp hạng",
      "descEn": "Treat a user-provided list as unordered until the user explicitly approves rank, sequence, or priority.",
      "descVi": "Xem danh sách user đưa là chưa có thứ tự cho đến khi user duyệt rõ rank, sequence hoặc priority."
    },
    {
      "number": 8,
      "titleEn": "Stop speculation",
      "titleVi": "Dừng suy đoán",
      "descEn": "Never invent content, overwrite existing docs, add speculative sections, or use ADRs to make unapproved architecture decisions.",
      "descVi": "Không bịa nội dung, ghi đè tài liệu có sẵn, thêm section suy đoán hoặc dùng ADR để ra quyết định kiến trúc chưa được duyệt."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "User answers are the source of truth",
    "titleVi": "Câu trả lời của user là nguồn sự thật",
    "contentEn": "This skill does not invent content, prioritize unordered user lists, derive docs from source code, or record unapproved architectural decisions.",
    "contentVi": "Skill này không bịa nội dung, không tự xếp hạng danh sách chưa có thứ tự, không suy tài liệu từ source code và không ghi quyết định kiến trúc chưa được duyệt."
  },
  "corePrinciplesEn": [
    "The document should preserve the user’s knowledge, taste, and decisions.",
    "Ask before ranking, sequencing, or prioritizing user-provided material.",
    "Use ak-brainstorm for AI proposals and ak-docs for code-derived documentation."
  ],
  "corePrinciplesVi": [
    "Tài liệu phải giữ kiến thức, gu và quyết định của user.",
    "Hỏi trước khi xếp hạng, sắp thứ tự hoặc ưu tiên nội dung user đưa.",
    "Dùng ak-brainstorm khi cần AI đề xuất và ak-docs khi tài liệu phải suy từ code."
  ],
  "invocation": {
    "syntax": "/ak:interview-docs <vision | document-path | topic>",
    "arguments": [
      {
        "token": "<vision | document-path | topic>",
        "titleEn": "Interview target",
        "titleVi": "Đích phỏng vấn",
        "descEn": "Intent hint for the interview: name vision mode, a document path, or a topic, plus audience, scope, protected sections, and when to stop. It is not a fixed parser and does not authorize the Skill to invent decisions.",
        "descVi": "Gợi ý intent cho cuộc phỏng vấn: nêu vision mode, đường dẫn tài liệu hoặc topic, kèm audience, scope, section được bảo vệ và lúc cần dừng. Đây không phải parser cố định và không cho phép Skill tự bịa quyết định.",
        "required": true,
        "exampleCommand": "/ak:interview-docs ./docs/product-principles.md \"Interview me to capture five product principles in my wording.\""
      }
    ]
  },
  "expertiseAreasEn": [
    "Guided documentation interviews",
    "README vision updates",
    "ADR capture",
    "Principles and strategy documents",
    "User-wording preservation"
  ],
  "expertiseAreasVi": [
    "Phỏng vấn để viết tài liệu",
    "Cập nhật vision README",
    "Ghi ADR",
    "Tài liệu principles và strategy",
    "Giữ wording của user"
  ],
  "guardrails": [
    {
      "thoughtEn": "The user listed five ideas; order them by importance.",
      "thoughtVi": "User đưa năm ý; tự xếp theo quan trọng.",
      "realityEn": "A user list is unordered unless they approve rank or priority.",
      "realityVi": "Danh sách của user là chưa có thứ tự nếu họ chưa duyệt rank hoặc priority.",
      "accent": "amber"
    },
    {
      "thoughtEn": "The code reveals the architecture; write an ADR.",
      "thoughtVi": "Code cho thấy kiến trúc; viết ADR luôn.",
      "realityEn": "ADR records only decisions the user explicitly made.",
      "realityVi": "ADR chỉ ghi quyết định user đã đưa ra rõ ràng.",
      "accent": "red"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Vision interview",
      "labelVi": "Phỏng vấn vision",
      "command": "/ak:interview-docs vision for README direction and first ADRs",
      "whenEn": "The user’s own answers should become the project vision, README direction, and recorded decisions.",
      "whenVi": "Khi câu trả lời của user cần trở thành vision dự án, hướng README và các quyết định được ghi nhận.",
      "expectedEn": "Reads README.md and docs/adr first, asks a batch of five varied questions, then patches user wording into README or numbered ADRs after each answer.",
      "expectedVi": "Đọc README.md và docs/adr trước, hỏi năm câu đa dạng, rồi patch wording của user vào README hoặc ADR đánh số sau mỗi câu trả lời.",
      "recommended": true
    },
    {
      "labelEn": "Focused vision area",
      "labelVi": "Mảng vision tập trung",
      "command": "/ak:interview-docs vision focused on product principles",
      "whenEn": "The interview should stay on a requested focus area instead of a broad project vision pass.",
      "whenVi": "Khi cuộc phỏng vấn cần bám vào một mảng trọng tâm được yêu cầu thay vì quét rộng toàn bộ vision dự án.",
      "expectedEn": "Uses vision mode with the requested focus, asks an adjusted question batch, and keeps README content separate from explicit ADR decisions.",
      "expectedVi": "Dùng vision mode với trọng tâm đã yêu cầu, điều chỉnh cụm câu hỏi và tách nội dung README khỏi các quyết định ADR rõ ràng."
    },
    {
      "labelEn": "Structured document",
      "labelVi": "Tài liệu có cấu trúc",
      "command": "/ak:interview-docs docs/principles.md",
      "whenEn": "One durable user-authored document should be built through one-question-at-a-time interviewing.",
      "whenVi": "Khi cần xây một tài liệu bền vững do user làm chủ bằng phỏng vấn từng câu một.",
      "expectedEn": "Reads nearby documents, creates the minimal skeleton once, asks exactly one specific open question, then re-reads and patches the target section.",
      "expectedVi": "Đọc tài liệu gần đó, tạo skeleton tối thiểu một lần, hỏi đúng một câu mở cụ thể, rồi đọc lại và patch section đích."
    },
    {
      "labelEn": "Decision capture",
      "labelVi": "Ghi nhận quyết định",
      "command": "/ak:interview-docs ADR for the deployment approach",
      "whenEn": "A user-approved architectural decision should be recorded without letting the assistant decide architecture.",
      "whenVi": "Khi một quyết định kiến trúc đã được user duyệt cần được ghi lại mà không để assistant tự quyết kiến trúc.",
      "expectedEn": "Confirms the decision from the user’s answer and records only approved content in a short ADR with Status, Context, Decision, and Consequences.",
      "expectedVi": "Xác nhận quyết định từ câu trả lời của user và chỉ ghi nội dung đã duyệt vào ADR ngắn có Status, Context, Decision và Consequences."
    }
  ],
  "reportOutput": {
    "titleEn": "Interview-docs output",
    "titleVi": "Đầu ra interview-docs",
    "patternEn": "Updated README, ADR, or target document with user-sourced wording and explicit decisions only.",
    "patternVi": "README, ADR hoặc tài liệu đích được cập nhật bằng wording từ user và chỉ quyết định rõ ràng.",
    "descEn": "The process continues answer by answer until the user ends the interview.",
    "descVi": "Quy trình tiếp tục từng câu trả lời cho đến khi user kết thúc phỏng vấn."
  }
};

export default data;
