import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-skill-creator",
  "command": "/ak:skill-creator",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:skill-creator — Claude Skill Authoring",
    "titleVi": "/ak:skill-creator — Tạo Claude skill",
    "taglineEn": "Creates and refines Claude skills with progressive disclosure, scoped structure, validation-driven iteration, benchmark-aware descriptions, scripts, references, packaging, and optional Kongming advice.",
    "taglineVi": "Tạo và cải tiến Claude skill bằng progressive disclosure, cấu trúc đúng scope, lặp theo validation, tối ưu description cho benchmark, script, reference, đóng gói và tùy chọn cố vấn Kongming."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Project scope and security are mandatory",
    "titleVi": "Bắt buộc đúng scope và bảo mật",
    "contentEn": "Create new skills in the current project scope unless the user explicitly asks for user-scope authoring, and include refusal/leakage-prevention policy before packaging or distribution.",
    "contentVi": "Skill mới phải được tạo trong scope dự án hiện tại trừ khi người dùng yêu cầu rõ user-scope, và phải có policy từ chối/chống rò rỉ trước khi đóng gói hoặc phân phối."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Capture intent",
      "titleVi": "Nắm ý định",
      "descEn": "Use human-in-the-loop clarification to define what the skill does, when it should trigger, and what it should output.",
      "descVi": "Trao đổi với người dùng để xác định skill làm gì, khi nào nên kích hoạt và cần xuất ra gì."
    },
    {
      "number": 2,
      "titleEn": "Research patterns",
      "titleVi": "Nghiên cứu mẫu",
      "descEn": "Use docs-seeker and research guidance to ground skill best practices before drafting.",
      "descVi": "Dùng docs-seeker và hướng dẫn nghiên cứu để bám vào best practice trước khi viết nháp."
    },
    {
      "number": 3,
      "titleEn": "Plan resources",
      "titleVi": "Lập tài nguyên",
      "descEn": "Choose which instructions stay in SKILL.md and which details belong in scripts, references, agents, or assets.",
      "descVi": "Chọn phần nào đặt trong SKILL.md và phần nào đưa vào script, reference, agent hoặc asset."
    },
    {
      "number": 4,
      "titleEn": "Initialize structure",
      "titleVi": "Khởi tạo cấu trúc",
      "descEn": "Create the skill folder with required SKILL.md and optional scripts, references, agents, and assets.",
      "descVi": "Tạo thư mục skill với SKILL.md bắt buộc và các phần tùy chọn như script, reference, agent, asset."
    },
    {
      "number": 5,
      "titleEn": "Write instructions",
      "titleVi": "Viết hướng dẫn",
      "descEn": "Keep instructions imperative, concise, pushy in metadata, and free of duplicated material across references.",
      "descVi": "Viết hướng dẫn ở dạng mệnh lệnh, ngắn gọn, metadata kích hoạt mạnh và không lặp nội dung giữa các reference."
    },
    {
      "number": 6,
      "titleEn": "Evaluate and optimize",
      "titleVi": "Đánh giá và tối ưu",
      "descEn": "Run validation and evals, compare with and without the skill, then refine description and workflows for benchmark accuracy.",
      "descVi": "Chạy validation và eval, so sánh có/không có skill, rồi tinh chỉnh description và workflow để tăng độ chính xác benchmark."
    },
    {
      "number": 7,
      "titleEn": "Package and review",
      "titleVi": "Đóng gói và review",
      "descEn": "Validate metadata, token use, script dependencies, structure, portability, and marketplace readiness before packaging.",
      "descVi": "Kiểm tra metadata, token, dependency script, cấu trúc, tính portable và mức sẵn sàng marketplace trước khi đóng gói."
    },
    {
      "number": 8,
      "titleEn": "Iterate from feedback",
      "titleVi": "Lặp theo phản hồi",
      "descEn": "Generalize from failures or user feedback instead of adding one-off workaround instructions.",
      "descVi": "Tổng quát hóa từ lỗi hoặc phản hồi người dùng thay vì thêm hướng dẫn chữa cháy một trường hợp."
    }
  ],
  "corePrinciplesEn": [
    "Skills are practical instructions, not documentation",
    "Metadata triggers first; details load progressively",
    "Validation and evals drive iteration",
    "Keep SKILL.md below 300 lines and references focused"
  ],
  "corePrinciplesVi": [
    "Skill là hướng dẫn thực hành, không phải tài liệu mô tả",
    "Metadata kích hoạt trước; chi tiết được nạp dần",
    "Validation và eval quyết định vòng lặp cải tiến",
    "Giữ SKILL.md dưới 300 dòng và reference thật tập trung"
  ],
  "expertiseAreasEn": [
    "skill anatomy",
    "progressive disclosure",
    "eval design",
    "metadata optimization",
    "packaging",
    "marketplace portability"
  ],
  "expertiseAreasVi": [
    "cấu trúc skill",
    "progressive disclosure",
    "thiết kế eval",
    "tối ưu metadata",
    "đóng gói",
    "portable cho marketplace"
  ],
  "promptExamples": [
    {
      "labelEn": "Create a project skill",
      "labelVi": "Tạo skill trong dự án",
      "command": "/ak:skill-creator csv reconciliation skill",
      "whenEn": "A new scoped capability should be added to the current project.",
      "whenVi": "Cần thêm một năng lực mới trong scope dự án hiện tại.",
      "expectedEn": "Captures intent, initializes structure, writes SKILL.md/resources, validates, and packages when ready.",
      "expectedVi": "Nắm ý định, khởi tạo cấu trúc, viết SKILL.md/tài nguyên, validate và đóng gói khi sẵn sàng.",
      "recommended": true
    },
    {
      "labelEn": "Refine trigger accuracy",
      "labelVi": "Cải thiện kích hoạt",
      "command": "/ak:skill-creator improve the deployment skill description",
      "whenEn": "A skill undertriggers or triggers too broadly.",
      "whenVi": "Một skill kích hoạt thiếu hoặc kích hoạt quá rộng.",
      "expectedEn": "Optimizes description wording, examples, scope boundaries, and eval coverage.",
      "expectedVi": "Tối ưu wording description, ví dụ, ranh giới scope và coverage eval."
    },
    {
      "labelEn": "Advised authoring",
      "labelVi": "Tạo skill có cố vấn",
      "command": "/ak:skill-creator browser automation skill --advice",
      "whenEn": "The skill design or distribution target is high stakes.",
      "whenVi": "Thiết kế skill hoặc mục tiêu phân phối có rủi ro cao.",
      "expectedEn": "Adds Kongming checkpoints after planning, after draft/evals, before distribution, or when stuck.",
      "expectedVi": "Thêm các điểm cố vấn Kongming sau plan, sau draft/eval, trước phân phối hoặc khi bị kẹt."
    }
  ],
  "outputFlags": [
    {
      "flag": "--advice",
      "titleEn": "Kongming supervision",
      "titleVi": "Cố vấn Kongming",
      "descEn": "Adds advisory-only checkpoints during planning, draft/eval review, packaging, and stuck states.",
      "descVi": "Thêm các điểm cố vấn chỉ tư vấn khi lập plan, review draft/eval, đóng gói và lúc bị kẹt.",
      "exampleCommand": "/ak:skill-creator data-cleaning skill --advice"
    }
  ]
};

export default data;
