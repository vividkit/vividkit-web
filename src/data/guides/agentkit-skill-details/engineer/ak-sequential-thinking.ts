import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-sequential-thinking",
  "command": "/ak:sequential-thinking",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:sequential-thinking",
    "titleVi": "/ak:sequential-thinking",
    "taglineEn": "Use reflective step-by-step analysis with dynamic expansion, contraction, revision, branching, hypothesis verification, and explicit final convergence.",
    "taglineVi": "Dùng phân tích từng bước có phản tư, tự mở rộng/thu gọn, sửa nhận định, rẽ nhánh, kiểm chứng giả thuyết và hội tụ cuối rõ ràng."
  },
  "invocation": {
    "syntax": "/ak:sequential-thinking [problem to analyze step-by-step]",
    "arguments": [
      {
        "token": "[problem to analyze step-by-step]",
        "titleEn": "Problem to analyze",
        "titleVi": "Vấn đề cần phân tích",
        "descEn": "States the concrete decision, diagnosis, constraints, available evidence, rejected alternatives, authority boundary, and useful response bound for revisable step-by-step reasoning.",
        "descVi": "Nêu decision hoặc diagnosis cụ thể, constraint, evidence hiện có, alternative đã loại, ranh giới quyền hạn và giới hạn phản hồi hữu ích cho suy luận từng bước có thể revision.",
        "required": true,
        "exampleCommand": "/ak:sequential-thinking \"Choose a migration strategy for splitting the audit log from the primary database. Use at most 8 concise checkpoints, compare dual-write and change-data-capture branches, revise assumptions when evidence conflicts, and finish with a decision, verification plan, and unresolved questions.\""
      }
    ]
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Estimate loosely",
      "titleVi": "Ước lượng lỏng",
      "descEn": "Start with an initial thought count such as Thought 1/5, knowing the total can change.",
      "descVi": "Bắt đầu với số bước dự kiến như Thought 1/5, biết rằng tổng số có thể thay đổi."
    },
    {
      "number": 2,
      "titleEn": "Structure thoughts",
      "titleVi": "Cấu trúc từng bước",
      "descEn": "Each thought builds on prior context, handles one aspect, states assumptions or uncertainty, and points to the next step.",
      "descVi": "Mỗi thought nối tiếp ngữ cảnh trước, xử lý một khía cạnh, nêu giả định hoặc điều chưa chắc và chỉ ra bước kế tiếp."
    },
    {
      "number": 3,
      "titleEn": "Adjust dynamically",
      "titleVi": "Điều chỉnh động",
      "descEn": "Expand when complexity appears, contract when simpler, revise when insight invalidates earlier work, and branch for alternatives.",
      "descVi": "Mở rộng khi phát hiện phức tạp, thu gọn khi đơn giản hơn, sửa khi insight mới làm sai bước trước và rẽ nhánh cho lựa chọn khác."
    },
    {
      "number": 4,
      "titleEn": "Mark revisions",
      "titleVi": "Đánh dấu sửa đổi",
      "descEn": "When correcting a previous thought, name the original, why it changed, and what downstream impact follows.",
      "descVi": "Khi sửa thought trước đó, nêu thought gốc, lý do thay đổi và tác động kéo theo."
    },
    {
      "number": 5,
      "titleEn": "Explore branches",
      "titleVi": "Khảo sát nhánh",
      "descEn": "For competing approaches, label branches from the parent thought, compare them explicitly, then converge with rationale.",
      "descVi": "Với các hướng cạnh tranh, gắn nhãn nhánh từ thought cha, so sánh rõ ràng rồi hội tụ bằng lý do chọn."
    },
    {
      "number": 6,
      "titleEn": "Verify hypotheses",
      "titleVi": "Kiểm chứng giả thuyết",
      "descEn": "Generate hypotheses, run or reason through verification evidence, and iterate until the candidate solution is supported.",
      "descVi": "Sinh giả thuyết, chạy hoặc lập luận bằng bằng chứng kiểm chứng, rồi lặp đến khi hướng giải được chống đỡ."
    },
    {
      "number": 7,
      "titleEn": "Finalize only ready",
      "titleVi": "Chốt khi đủ chắc",
      "descEn": "Mark final only when the solution is verified, critical aspects are covered, confidence is adequate, and no key uncertainty remains.",
      "descVi": "Chỉ đánh dấu final khi giải pháp đã được kiểm chứng, phần trọng yếu đã phủ, đủ tự tin và không còn bất định chính."
    }
  ],
  "corePrinciplesEn": [
    "The total number of thoughts is adjustable, not a promise",
    "Revision is a feature, not a failure",
    "Branches must converge with explicit rationale",
    "Use visible markers only when useful; otherwise apply the method internally"
  ],
  "corePrinciplesVi": [
    "Tổng số thought có thể điều chỉnh, không phải lời hứa cố định",
    "Sửa nhận định là tính năng, không phải thất bại",
    "Nhánh phải hội tụ bằng lý do rõ ràng",
    "Chỉ hiển thị marker khi hữu ích; còn lại áp dụng phương pháp bên trong"
  ],
  "expertiseAreasEn": [
    "Complex decomposition",
    "Adaptive planning",
    "Revision cascades",
    "Alternative comparison",
    "Hypothesis-driven debugging",
    "Uncertainty management"
  ],
  "expertiseAreasVi": [
    "Tách vấn đề phức tạp",
    "Lập kế hoạch thích ứng",
    "Chuỗi sửa nhận định",
    "So sánh phương án",
    "Debug theo giả thuyết",
    "Quản lý bất định"
  ],
  "workflowModes": [
    {
      "flag": "Explicit",
      "modeEn": "Visible thought markers",
      "modeVi": "Hiển thị marker thought",
      "research": "Use for requested breakdowns",
      "redTeam": "None",
      "validation": "Final marker after verification"
    },
    {
      "flag": "Implicit",
      "modeEn": "Internal reasoning aid",
      "modeVi": "Hỗ trợ suy luận nội bộ",
      "research": "Use for routine problem solving",
      "redTeam": "None",
      "validation": "Cleaner user-facing answer"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Architecture tradeoff",
      "labelVi": "Đánh đổi kiến trúc",
      "command": "/ak:sequential-thinking compare event sourcing vs audit-log tables for this service",
      "whenEn": "Use when a complex decision has dependent tradeoffs and may need branching or revision.",
      "whenVi": "Dùng khi quyết định phức tạp có nhiều đánh đổi phụ thuộc nhau và có thể cần rẽ nhánh hoặc sửa nhận định.",
      "expectedEn": "Starts with a loose thought estimate, structures assumptions and alternatives, branches the competing approaches, verifies the strongest option, and finishes with a final decision rationale.",
      "expectedVi": "Bắt đầu bằng ước lượng số thought lỏng, cấu trúc giả định và phương án, rẽ nhánh các hướng cạnh tranh, kiểm chứng lựa chọn mạnh nhất rồi chốt bằng lý do quyết định.",
      "recommended": true
    },
    {
      "labelEn": "Debug hypothesis",
      "labelVi": "Giả thuyết debug",
      "command": "/ak:sequential-thinking analyze why uploads intermittently fail after deploy",
      "whenEn": "Use for unclear failures where hypotheses need verification and course correction.",
      "whenVi": "Dùng cho lỗi chưa rõ nguyên nhân, nơi giả thuyết cần được kiểm chứng và điều chỉnh hướng.",
      "expectedEn": "Builds a thought sequence around likely causes, marks revised assumptions when evidence changes the model, records verification steps, and stops only when the supported cause is clear.",
      "expectedVi": "Xây dựng chuỗi thought quanh các nguyên nhân khả dĩ, đánh dấu giả định được sửa khi bằng chứng thay đổi mô hình, ghi bước kiểm chứng và chỉ dừng khi nguyên nhân có hỗ trợ rõ ràng."
    },
    {
      "labelEn": "Adaptive implementation plan",
      "labelVi": "Kế hoạch triển khai thích ứng",
      "command": "/ak:sequential-thinking plan a safe migration from REST polling to webhook delivery",
      "whenEn": "Use when scope may expand or contract as risks, dependencies, and rollout constraints become clearer.",
      "whenVi": "Dùng khi phạm vi có thể mở rộng hoặc thu gọn khi rủi ro, phụ thuộc và ràng buộc rollout rõ hơn.",
      "expectedEn": "Produces a step-by-step plan that can adjust its thought count, names uncertainties and next areas to inspect, revises invalidated steps, and ends with verified readiness criteria.",
      "expectedVi": "Tạo kế hoạch từng bước có thể điều chỉnh số thought, nêu bất định và vùng cần xem tiếp, sửa các bước bị bác bỏ và kết thúc bằng tiêu chí sẵn sàng đã kiểm chứng."
    },
    {
      "labelEn": "Branch alternatives",
      "labelVi": "Rẽ nhánh phương án",
      "command": "/ak:sequential-thinking choose between queue-backed retries, cron repair, and synchronous retry for payments",
      "whenEn": "Use when several approaches deserve separate exploration before convergence.",
      "whenVi": "Dùng khi nhiều hướng giải đáng được khảo sát riêng trước khi hội tụ.",
      "expectedEn": "Labels branches from a parent thought, compares the alternatives explicitly, captures any revisions from new insights, verifies the preferred path, and marks a final thought only when uncertainties are resolved.",
      "expectedVi": "Gắn nhãn các nhánh từ thought cha, so sánh phương án rõ ràng, ghi các sửa đổi từ insight mới, kiểm chứng hướng ưu tiên và chỉ đánh dấu final khi bất định đã được giải quyết."
    }
  ]
};

export default data;
