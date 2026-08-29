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
      "labelEn": "Architecture reasoning",
      "labelVi": "Suy luận kiến trúc",
      "command": "/ak:sequential-thinking compare event sourcing vs audit-log tables for this service",
      "whenEn": "Use when a problem has multiple dependent tradeoffs and may need revision.",
      "whenVi": "Dùng khi vấn đề có nhiều tradeoff phụ thuộc nhau và có thể cần sửa nhận định.",
      "expectedEn": "Stepwise analysis with assumptions, branches, verification, and final rationale.",
      "expectedVi": "Phân tích từng bước có giả định, nhánh, kiểm chứng và lý do chốt.",
      "recommended": true
    },
    {
      "labelEn": "Debug hypothesis",
      "labelVi": "Giả thuyết debug",
      "command": "/ak:sequential-thinking analyze why uploads intermittently fail after deploy",
      "whenEn": "Use for unclear failures where hypotheses need testing and revision.",
      "whenVi": "Dùng cho lỗi chưa rõ nguyên nhân, cần kiểm tra và sửa giả thuyết.",
      "expectedEn": "Hypothesis and verification thoughts until the likely cause is supported.",
      "expectedVi": "Các thought giả thuyết và kiểm chứng đến khi nguyên nhân có bằng chứng hỗ trợ."
    }
  ]
};

export default data;
