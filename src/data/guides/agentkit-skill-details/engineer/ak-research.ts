import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-research",
  "command": "/ak:research",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:research",
    "titleVi": "/ak:research",
    "taglineEn": "Run concise, source-backed technical research from scope definition through multi-source gathering, synthesis, recommendations, and saved report.",
    "taglineVi": "Thực hiện nghiên cứu kỹ thuật ngắn gọn có nguồn dẫn: xác định phạm vi, thu thập đa nguồn, tổng hợp, khuyến nghị và lưu báo cáo."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Respect scope and search budget",
    "titleVi": "Tôn trọng phạm vi và giới hạn tìm kiếm",
    "contentEn": "Deliver the full requested scope without adding extras. Use at most five research tool calls, cite sources, and mark unresolved questions honestly.",
    "contentVi": "Phải giao đủ phạm vi được yêu cầu, không thêm việc ngoài yêu cầu. Tối đa năm lần gọi công cụ nghiên cứu, có trích nguồn và nêu rõ câu hỏi chưa giải quyết."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Define scope",
      "titleVi": "Xác định phạm vi",
      "descEn": "Name key concepts, recency requirements, source evaluation criteria, and research boundaries.",
      "descVi": "Nêu khái niệm chính, yêu cầu độ mới, tiêu chí đánh giá nguồn và ranh giới nghiên cứu."
    },
    {
      "number": 2,
      "titleEn": "Plan searches",
      "titleVi": "Lập chiến lược tìm kiếm",
      "descEn": "Craft precise queries for official docs, repositories, authoritative blogs, changelogs, security, and performance evidence.",
      "descVi": "Soạn truy vấn chính xác cho tài liệu chính thức, repo, blog uy tín, changelog, bằng chứng bảo mật và hiệu năng."
    },
    {
      "number": 3,
      "titleEn": "Gather evidence",
      "titleVi": "Thu thập bằng chứng",
      "descEn": "Use native web_search for current external research, running independent queries in parallel when allowed and never exceeding five calls.",
      "descVi": "Dùng web_search gốc cho thông tin bên ngoài mới, chạy truy vấn độc lập song song khi được phép và không vượt quá năm lần gọi."
    },
    {
      "number": 4,
      "titleEn": "Analyze deeply",
      "titleVi": "Phân tích sâu",
      "descEn": "Read official docs, API references, specs, README files, releases, and video sources when relevant.",
      "descVi": "Đọc tài liệu chính thức, API reference, đặc tả, README, release và nguồn video khi liên quan."
    },
    {
      "number": 5,
      "titleEn": "Cross-check claims",
      "titleVi": "Đối chiếu thông tin",
      "descEn": "Validate across independent sources, note dates, consensus, conflicts, deprecations, and migration paths.",
      "descVi": "Xác thực qua các nguồn độc lập, ghi ngày tháng, điểm đồng thuận, mâu thuẫn, cảnh báo deprecate và đường migrate."
    },
    {
      "number": 6,
      "titleEn": "Synthesize report",
      "titleVi": "Tổng hợp báo cáo",
      "descEn": "Produce an executive summary, methodology, findings, comparative analysis, recommendations, resources, and appendices as needed.",
      "descVi": "Viết executive summary, phương pháp, phát hiện, so sánh, khuyến nghị, tài nguyên và phụ lục khi cần."
    },
    {
      "number": 7,
      "titleEn": "Organize output",
      "titleVi": "Sắp xếp đầu ra",
      "descEn": "Use project-organization to choose the report path, include timestamp, navigation, diagrams when helpful, next steps, and unresolved questions.",
      "descVi": "Dùng project-organization để chọn đường dẫn báo cáo, thêm thời điểm, mục lục, sơ đồ khi hữu ích, bước tiếp theo và câu hỏi còn mở."
    }
  ],
  "corePrinciplesEn": [
    "KISS and DRY guide scope and recommendations",
    "Current, authoritative sources beat volume",
    "Security and performance research must check recent advisories and benchmarks",
    "--ultra is a best-of-5 verifier pass, not a different research algorithm"
  ],
  "corePrinciplesVi": [
    "KISS và DRY định hướng phạm vi cũng như khuyến nghị",
    "Nguồn mới và có thẩm quyền quan trọng hơn số lượng",
    "Nghiên cứu bảo mật và hiệu năng phải kiểm tra advisory mới và benchmark",
    "--ultra là vòng verifier best-of-5, không phải thuật toán nghiên cứu khác"
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Single research report",
      "modeVi": "Một báo cáo nghiên cứu",
      "research": "One controlled multi-source pass",
      "redTeam": "None",
      "validation": "Cross-source verification"
    },
    {
      "flag": "--ultra",
      "modeEn": "Best-of-5 verifier",
      "modeVi": "Verifier best-of-5",
      "research": "Five independent candidate reports from one evidence packet",
      "redTeam": "None",
      "validation": "Strongest verifier ranks and selects or rejects"
    },
    {
      "flag": "--yagni",
      "modeEn": "Scope cutter",
      "modeVi": "Cắt phần không cần",
      "research": "Challenges unneeded scope",
      "redTeam": "None",
      "validation": "Only keeps work needed for stated outcome"
    }
  ],
  "outputFlags": [
    {
      "flag": "--ultra",
      "titleEn": "Verifier mode",
      "titleVi": "Chế độ verifier",
      "descEn": "Dispatches exactly five read-only candidate researchers and a verifier from one evidence packet.",
      "descVi": "Chạy đúng năm researcher chỉ đọc và một verifier từ cùng gói bằng chứng.",
      "exampleCommand": "/ak:research React Server Components caching --ultra"
    },
    {
      "flag": "--yagni",
      "titleEn": "YAGNI filter",
      "titleVi": "Bộ lọc YAGNI",
      "descEn": "Cuts scope not needed for the stated decision or outcome.",
      "descVi": "Cắt phần phạm vi không cần cho quyết định hoặc kết quả đã nêu.",
      "exampleCommand": "/ak:research database queue choices --yagni"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Technical evaluation",
      "labelVi": "Đánh giá kỹ thuật",
      "command": "/ak:research choose a durable queue for Next.js background jobs",
      "whenEn": "Use before implementation when architecture, compatibility, security, and maintenance tradeoffs matter.",
      "whenVi": "Dùng trước khi triển khai nếu cần cân nhắc kiến trúc, tương thích, bảo mật và bảo trì.",
      "expectedEn": "A cited decision-ready report with tradeoffs and next steps.",
      "expectedVi": "Báo cáo có nguồn dẫn, đủ để ra quyết định, kèm tradeoff và bước tiếp theo.",
      "recommended": true
    },
    {
      "labelEn": "Verifier research",
      "labelVi": "Nghiên cứu có verifier",
      "command": "/ak:research OAuth device flow security --ultra",
      "whenEn": "Use when the answer is high-risk and worth five independent candidate passes.",
      "whenVi": "Dùng khi câu trả lời rủi ro cao và đáng chạy năm lượt ứng viên độc lập.",
      "expectedEn": "A winning report or reject-all result with ranking appendix.",
      "expectedVi": "Một báo cáo thắng hoặc kết quả reject-all kèm phụ lục xếp hạng."
    },
    {
      "labelEn": "YAGNI research",
      "labelVi": "Nghiên cứu cắt bớt phạm vi",
      "command": "/ak:research vector database options for 10k docs --yagni",
      "whenEn": "Use when the likely risk is over-building beyond the stated outcome.",
      "whenVi": "Dùng khi rủi ro chính là thiết kế quá tay so với kết quả cần đạt.",
      "expectedEn": "A lean recommendation that removes unnecessary scope.",
      "expectedVi": "Khuyến nghị gọn, loại bỏ phần không cần."
    }
  ],
  "reportOutput": {
    "titleEn": "Research report",
    "titleVi": "Báo cáo nghiên cứu",
    "patternEn": "Report path from project-organization or plans/research/ when configured",
    "patternVi": "Đường dẫn Report từ project-organization hoặc plans/research/ khi được cấu hình",
    "descEn": "Markdown report with sources, methodology, findings, recommendations, references, and unresolved questions.",
    "descVi": "Báo cáo Markdown có nguồn, phương pháp, phát hiện, khuyến nghị, tài liệu tham khảo và câu hỏi chưa giải quyết."
  }
};

export default data;
