import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-skill-creator",
  "command": "/ak:skill-creator",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:skill-creator — Skill Creator",
    "titleVi": "/ak:skill-creator — Tạo Skill",
    "taglineEn": "Creates or updates Claude skills through intent capture, research, progressive-disclosure planning, scaffolding, SKILL.md/resources, evals, description optimization, packaging, and optional Kongming advice.",
    "taglineVi": "Tạo hoặc cập nhật Claude skill qua ghi nhận intent, research, lập progressive disclosure, scaffold, SKILL.md/tài nguyên, eval, tối ưu description, đóng gói và cố vấn Kongming tùy chọn."
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
      "titleEn": "Test and evaluate",
      "titleVi": "Test và evaluate",
      "descEn": "Run validation and evals, then compare baseline behavior with and without the skill.",
      "descVi": "Chạy validation và eval, rồi so sánh baseline khi có và không có skill."
    },
    {
      "number": 7,
      "titleEn": "Optimize description",
      "titleVi": "Tối ưu description",
      "descEn": "Refine pushy metadata, standard terminology, examples, and scope language for trigger accuracy and benchmark scoring.",
      "descVi": "Tinh chỉnh metadata kích hoạt mạnh, thuật ngữ chuẩn, ví dụ và ngôn ngữ scope để tăng độ chính xác trigger và điểm benchmark."
    },
    {
      "number": 8,
      "titleEn": "Package",
      "titleVi": "Đóng gói",
      "descEn": "Validate metadata, token use, script dependencies, structure, portability, and marketplace readiness before producing a zip.",
      "descVi": "Kiểm tra metadata, token, dependency script, cấu trúc, tính portable và mức sẵn sàng marketplace trước khi tạo zip."
    },
    {
      "number": 9,
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
      "command": "/ak:skill-creator project-scoped release notes skill",
      "whenEn": "A repeatable workflow should become a versioned Claude Skill in the current project.",
      "whenVi": "Một workflow lặp lại cần trở thành Claude Skill được version hóa trong project hiện tại.",
      "expectedEn": "Captures tasks, triggers, outputs, scope, refusal behavior, and test cases; scaffolds the project skill directory, writes concise SKILL.md/resources, validates structure, and packages only when requested.",
      "expectedVi": "Ghi nhận task, trigger, output, scope, refusal behavior và test case; scaffold thư mục skill trong project, viết SKILL.md/tài nguyên ngắn gọn, validate cấu trúc và chỉ đóng gói khi được yêu cầu.",
      "recommended": true
    },
    {
      "labelEn": "Refine trigger accuracy",
      "labelVi": "Cải thiện độ chính xác trigger",
      "command": "/ak:skill-creator improve the deployment skill description",
      "whenEn": "An existing skill undertriggers, overtriggers, or has vague discovery metadata.",
      "whenVi": "Một skill hiện có kích hoạt thiếu, kích hoạt quá rộng hoặc có discovery metadata mơ hồ.",
      "expectedEn": "Audits when-to-use language, sharpens pushy description wording, adds clear use and non-use boundaries, preserves progressive disclosure, and checks eval coverage against the intended trigger contexts.",
      "expectedVi": "Audit ngôn ngữ when-to-use, làm rõ description kích hoạt mạnh, thêm ranh giới dùng/không dùng, giữ progressive disclosure và kiểm tra coverage eval theo trigger context mong muốn."
    },
    {
      "labelEn": "Add packaging readiness",
      "labelVi": "Bổ sung sẵn sàng đóng gói",
      "command": "/ak:skill-creator package the data-cleaning skill for Claude Code distribution",
      "whenEn": "A skill needs validation evidence and a reviewable distribution zip.",
      "whenVi": "Một skill cần bằng chứng validation và file zip phân phối có thể review.",
      "expectedEn": "Runs the bundled quick validator, reviews metadata, token use, script dependencies, structure, portability, placeholder files, and output destination before producing or replacing any distribution archive.",
      "expectedVi": "Chạy quick validator đi kèm, review metadata, token, dependency script, cấu trúc, tính portable, file placeholder và nơi xuất trước khi tạo hoặc thay archive phân phối."
    },
    {
      "labelEn": "Advised authoring",
      "labelVi": "Tạo skill có cố vấn",
      "command": "/ak:skill-creator browser automation skill --advice",
      "whenEn": "The skill design, eval results, packaging step, or distribution target needs advisory supervision.",
      "whenVi": "Thiết kế skill, kết quả eval, bước đóng gói hoặc mục tiêu phân phối cần cố vấn giám sát.",
      "expectedEn": "Adds advisory-only Kongming checkpoints after intent capture and planning, after the SKILL.md draft and eval results, before packaging or distribution, and when repeated failures block progress.",
      "expectedVi": "Thêm checkpoint Kongming chỉ tư vấn sau intent capture và planning, sau bản nháp SKILL.md cùng kết quả eval, trước packaging hoặc distribution và khi lỗi lặp lại chặn tiến độ."
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
