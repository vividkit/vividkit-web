import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-research-prompt",
  "command": "/ak:research-prompt",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:research-prompt",
    "titleVi": "/ak:research-prompt",
    "taglineEn": "Draft one self-contained research brief paragraph that another human or AI researcher can execute without a follow-up exchange.",
    "taglineVi": "Soạn một đoạn brief nghiên cứu tự đủ ngữ cảnh để người hoặc AI researcher khác có thể thực hiện mà không cần hỏi lại."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Brief only, no research run",
    "titleVi": "Chỉ viết brief, không chạy nghiên cứu",
    "contentEn": "Return exactly one focused paragraph. Do not perform the research, add headings, expose secrets, or include private URLs, credentials, or personal data.",
    "contentVi": "Chỉ trả đúng một đoạn tập trung. Không tự nghiên cứu, không thêm heading, không lộ secret, URL riêng tư, credential hoặc dữ liệu cá nhân."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Collect inputs",
      "titleVi": "Thu thập đầu vào",
      "descEn": "Extract the decision, audience, deadline, known facts, constraints, intended use, and relevant project context.",
      "descVi": "Rút ra quyết định cần hỗ trợ, độc giả, hạn chót, sự thật đã biết, ràng buộc, mục đích dùng và ngữ cảnh dự án liên quan."
    },
    {
      "number": 2,
      "titleEn": "Set context",
      "titleVi": "Đặt bối cảnh",
      "descEn": "Open the paragraph with plain-English project context and situation for a reader with no prior knowledge.",
      "descVi": "Mở đoạn bằng bối cảnh dự án và tình huống bằng ngôn ngữ rõ ràng cho người chưa biết gì trước đó."
    },
    {
      "number": 3,
      "titleEn": "Frame one question",
      "titleVi": "Đóng khung một câu hỏi",
      "descEn": "Define one research question and name the decision that the answer will inform.",
      "descVi": "Xác định một câu hỏi nghiên cứu và nêu rõ quyết định mà câu trả lời sẽ phục vụ."
    },
    {
      "number": 4,
      "titleEn": "Add sub-questions",
      "titleVi": "Thêm câu hỏi con",
      "descEn": "Include three to six numbered inline sub-questions that cover the decision without mixing unrelated missions.",
      "descVi": "Thêm ba đến sáu câu hỏi con đánh số ngay trong đoạn, bao phủ quyết định nhưng không trộn nhiệm vụ không liên quan."
    },
    {
      "number": 5,
      "titleEn": "Specify evidence rules",
      "titleVi": "Nêu quy tắc bằng chứng",
      "descEn": "State include/avoid constraints, source hierarchy, contradiction handling, gap round, and completion bar.",
      "descVi": "Nêu điều cần bao gồm/tránh, thứ tự ưu tiên nguồn, cách xử lý mâu thuẫn, vòng tìm lỗ hổng và tiêu chuẩn hoàn tất."
    },
    {
      "number": 6,
      "titleEn": "Define finding format",
      "titleVi": "Quy định định dạng phát hiện",
      "descEn": "Require each finding to carry a URL, exact claim, and one-line relevance to the decision, delivered as one detailed Markdown result.",
      "descVi": "Yêu cầu mỗi phát hiện có URL, claim cụ thể và một dòng nói rõ liên quan gì đến quyết định, rồi trả trong một kết quả Markdown chi tiết."
    },
    {
      "number": 7,
      "titleEn": "Return one paragraph",
      "titleVi": "Trả đúng một đoạn",
      "descEn": "Remove prefaces, headings, marketing copy, speculative solutions, and any private or fabricated facts.",
      "descVi": "Bỏ lời dẫn, heading, văn marketing, giải pháp suy đoán và mọi thông tin riêng tư hoặc bịa đặt."
    }
  ],
  "corePrinciplesEn": [
    "The output is the assignment, not the answer",
    "One paragraph must be enough context for a cold researcher",
    "Primary sources outrank forums and social posts",
    "Contradictions and single-source claims require a gap round"
  ],
  "corePrinciplesVi": [
    "Đầu ra là đề bài nghiên cứu, không phải câu trả lời",
    "Một đoạn phải đủ ngữ cảnh cho researcher chưa biết gì",
    "Nguồn chính thống quan trọng hơn forum và bài mạng xã hội",
    "Mâu thuẫn và claim chỉ có một nguồn phải có vòng kiểm tra lỗ hổng"
  ],
  "expertiseAreasEn": [
    "Research brief writing",
    "Decision framing",
    "Evidence hierarchy",
    "Contradiction handling",
    "Per-finding citation format"
  ],
  "expertiseAreasVi": [
    "Viết brief nghiên cứu",
    "Đóng khung quyết định",
    "Thứ tự ưu tiên bằng chứng",
    "Xử lý nguồn mâu thuẫn",
    "Định dạng trích nguồn cho từng phát hiện"
  ],
  "promptExamples": [
    {
      "labelEn": "Decision brief",
      "labelVi": "Brief cho quyết định",
      "command": "/ak:research-prompt whether to adopt Turbopack for this Next.js app",
      "whenEn": "Use when you need to hand off research instead of doing it now.",
      "whenVi": "Dùng khi cần giao nghiên cứu cho người khác thay vì tự làm ngay.",
      "expectedEn": "Exactly one self-contained paragraph with question, sub-questions, source rules, and output requirements.",
      "expectedVi": "Đúng một đoạn tự đủ ngữ cảnh, có câu hỏi, câu hỏi con, quy tắc nguồn và yêu cầu đầu ra.",
      "recommended": true
    },
    {
      "labelEn": "Architecture handoff",
      "labelVi": "Handoff nghiên cứu kiến trúc",
      "command": "/ak:research-prompt compare queue options for our image rendering pipeline",
      "whenEn": "Use when another researcher needs project context and decision criteria.",
      "whenVi": "Dùng khi researcher khác cần bối cảnh dự án và tiêu chí quyết định.",
      "expectedEn": "A brief that asks for source-backed findings, contradictions, gaps, and decision relevance.",
      "expectedVi": "Brief yêu cầu phát hiện có nguồn, mâu thuẫn, lỗ hổng và liên hệ với quyết định."
    }
  ]
};

export default data;
