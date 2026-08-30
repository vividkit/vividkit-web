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
      "descEn": "Invoke project-organization to organize outputs, then save the report at the Naming section's Report path; ask the main agent if that path is missing.",
      "descVi": "Gọi project-organization để sắp xếp đầu ra, rồi lưu báo cáo vào đường dẫn Report trong phần Naming; hỏi main agent nếu thiếu đường dẫn đó."
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
  "invocation": {
    "syntax": "/ak:research [topic] [--ultra] [--yagni]",
    "arguments": [
      {
        "token": "[topic]",
        "titleEn": "Research question",
        "titleVi": "Câu hỏi nghiên cứu",
        "descEn": "Free-form technical decision or comparison to research. Include alternatives, constraints, criteria, recency window, research-call budget, and the approved Report path when available; this argument does not authorize implementation or publication.",
        "descVi": "Quyết định kỹ thuật hoặc phần so sánh cần nghiên cứu bằng ngôn ngữ tự nhiên. Nêu alternative, ràng buộc, tiêu chí, khoảng thời gian cần độ mới, budget research call và đường dẫn Report đã duyệt khi có; tham số này không cấp quyền triển khai hay publish.",
        "required": true,
        "exampleCommand": "/ak:research \"Compare Postgres RLS and service-layer authorization for a multi-tenant B2B API; max 4 research calls; Report: plans/research/tenant-authorization.md\""
      }
    ],
    "options": [
      {
        "token": "--ultra",
        "titleEn": "Best-of-5 verifier",
        "titleVi": "Verifier best-of-5",
        "descEn": "Runs five independent read-only candidate researchers from one evidence packet, then a verifier selects one report unchanged or rejects all. It keeps the per-run research-call budget.",
        "descVi": "Chạy năm candidate researcher độc lập chỉ đọc từ cùng một gói bằng chứng, rồi verifier chọn nguyên trạng một report hoặc loại hết. Vẫn giữ budget research call cho từng lượt.",
        "exampleCommand": "/ak:research OAuth device flow security --ultra"
      },
      {
        "token": "--yagni",
        "titleEn": "Cut unneeded scope",
        "titleVi": "Cắt scope thừa",
        "descEn": "Challenges and removes research scope that is not needed for the stated decision or outcome. It must not drop anything the user explicitly requires.",
        "descVi": "Chất vấn và bỏ phần phạm vi nghiên cứu không cần cho quyết định hoặc outcome đã nêu. Không được bỏ nội dung người dùng yêu cầu rõ.",
        "exampleCommand": "/ak:research vector database options for 10k docs --yagni"
      }
    ]
  },
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
      "expectedEn": "A markdown report that defines scope, cites authoritative sources, compares queue options, calls out security/performance tradeoffs, and ends with concrete next steps.",
      "expectedVi": "Báo cáo Markdown xác định phạm vi, dẫn nguồn uy tín, so sánh các lựa chọn queue, nêu tradeoff bảo mật/hiệu năng và kết thúc bằng bước tiếp theo cụ thể.",
      "recommended": true
    },
    {
      "labelEn": "Verifier research",
      "labelVi": "Nghiên cứu có verifier",
      "command": "/ak:research OAuth device flow security --ultra",
      "whenEn": "Use when the answer is high-risk and worth five independent candidate passes.",
      "whenVi": "Dùng khi câu trả lời rủi ro cao và đáng chạy năm lượt ứng viên độc lập.",
      "expectedEn": "Five independent candidate reports are scored by a verifier, which either preserves the winning report with a ranking appendix or stops with reject-all reasoning.",
      "expectedVi": "Năm báo cáo ứng viên độc lập được verifier chấm điểm; verifier giữ nguyên báo cáo thắng kèm phụ lục xếp hạng hoặc dừng với lý do reject-all."
    },
    {
      "labelEn": "YAGNI research",
      "labelVi": "Nghiên cứu cắt bớt phạm vi",
      "command": "/ak:research vector database options for 10k docs --yagni",
      "whenEn": "Use when the likely risk is over-building beyond the stated outcome.",
      "whenVi": "Dùng khi rủi ro chính là thiết kế quá tay so với kết quả cần đạt.",
      "expectedEn": "A focused report that challenges excess scope, keeps only research needed for the stated decision, cites sources, and lists unresolved questions.",
      "expectedVi": "Báo cáo tập trung, chất vấn phần phạm vi dư thừa, chỉ giữ nghiên cứu cần cho quyết định đã nêu, dẫn nguồn và liệt kê câu hỏi còn mở."
    }
  ],
  "reportOutput": {
    "titleEn": "Research report",
    "titleVi": "Báo cáo nghiên cứu",
    "patternEn": "Report path from the Naming section; if absent, ask the main agent for the output path",
    "patternVi": "Đường dẫn Report trong phần Naming; nếu thiếu thì hỏi main agent về đường dẫn đầu ra",
    "descEn": "Markdown report with sources, methodology, findings, recommendations, references, and unresolved questions.",
    "descVi": "Báo cáo Markdown có nguồn, phương pháp, phát hiện, khuyến nghị, tài liệu tham khảo và câu hỏi chưa giải quyết."
  }
};

export default data;
