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
  "invocation": {
    "syntax": "/ak:skill-creator <create|update|audit|optimize> [skill-name|path|kit|--all] [--kit <kit>|--project|--user] [--long-horizon] [--apply] [--from-audit <report>] [--advice]",
    "arguments": [
      {
        "token": "<create|update|audit|optimize>",
        "titleEn": "Workflow",
        "titleVi": "Workflow",
        "descEn": "Required skill argument: create a new skill, update an existing one, audit routing/behavior, or optimize description and evals. Not an ak CLI subcommand.",
        "descVi": "Đối số skill bắt buộc: tạo skill mới, cập nhật skill có sẵn, audit routing/hành vi, hoặc tối ưu description và eval. Không phải subcommand CLI ak.",
        "required": true,
        "exampleCommand": "/ak:skill-creator create release-notes"
      },
      {
        "token": "[skill-name|path|kit|--all]",
        "titleEn": "Target",
        "titleVi": "Đích",
        "descEn": "Skill name, path, kit, or --all for audit/optimize across a kit. Combine with --kit, --project, or --user to set install scope.",
        "descVi": "Tên skill, path, kit, hoặc --all khi audit/optimize cả kit. Kết hợp --kit, --project hoặc --user để chọn scope cài.",
        "required": false,
        "exampleCommand": "/ak:skill-creator audit --all --kit engineer"
      }
    ],
    "subcommands": [
      {
        "name": "create",
        "syntax": "/ak:skill-creator create [skill-name or description] [--kit <kit>|--project|--user] [--long-horizon] [--advice]",
        "titleEn": "Create",
        "titleVi": "Tạo",
        "descEn": "Capture intent, author SKILL.md and resources, evaluate, then package only when requested.",
        "descVi": "Ghi nhận intent, soạn SKILL.md và tài nguyên, evaluate, rồi chỉ đóng gói khi được yêu cầu.",
        "exampleCommand": "/ak:skill-creator create release-notes --project"
      },
      {
        "name": "update",
        "syntax": "/ak:skill-creator update [skill-name|path] [--apply] [--from-audit <report>] [--advice]",
        "titleEn": "Update",
        "titleVi": "Cập nhật",
        "descEn": "Change an existing skill from a request or an audit report. --apply writes accepted edits.",
        "descVi": "Sửa skill có sẵn từ yêu cầu hoặc báo cáo audit. --apply ghi các sửa đã chấp nhận.",
        "exampleCommand": "/ak:skill-creator update release-notes --apply"
      },
      {
        "name": "audit",
        "syntax": "/ak:skill-creator audit [skill-name|path|kit|--all] [--kit <kit>] [--advice]",
        "titleEn": "Audit",
        "titleVi": "Audit",
        "descEn": "Diagnose routing, description, and behavior. Does not rewrite the skill unless you follow with update --apply.",
        "descVi": "Chẩn đoán routing, description và hành vi. Không viết lại skill trừ khi chạy tiếp update --apply.",
        "exampleCommand": "/ak:skill-creator audit release-notes"
      },
      {
        "name": "optimize",
        "syntax": "/ak:skill-creator optimize [skill-name|path|--all] [--apply] [--advice]",
        "titleEn": "Optimize",
        "titleVi": "Tối ưu",
        "descEn": "Tighten trigger metadata, evals, and progressive disclosure. --apply writes the accepted metadata changes.",
        "descVi": "Siết metadata kích hoạt, eval và progressive disclosure. --apply ghi thay đổi metadata đã chấp nhận.",
        "exampleCommand": "/ak:skill-creator optimize release-notes --apply"
      }
    ],
    "options": [
      {
        "token": "--kit",
        "titleEn": "Kit scope",
        "titleVi": "Scope kit",
        "descEn": "Target a named kit instead of inferring from the current project.",
        "descVi": "Nhắm một kit theo tên thay vì suy từ project hiện tại.",
        "exampleCommand": "/ak:skill-creator audit --all --kit engineer"
      },
      {
        "token": "--project",
        "titleEn": "Project scope",
        "titleVi": "Scope project",
        "descEn": "Create or update the skill in the current project, not user-global.",
        "descVi": "Tạo hoặc cập nhật skill trong project hiện tại, không phải user-global.",
        "exampleCommand": "/ak:skill-creator create release-notes --project"
      },
      {
        "token": "--user",
        "titleEn": "User scope",
        "titleVi": "Scope user",
        "descEn": "Author into user-global skill storage only when the user explicitly asks for that scope.",
        "descVi": "Ghi vào kho skill user-global chỉ khi người dùng yêu cầu rõ scope đó.",
        "exampleCommand": "/ak:skill-creator create release-notes --user"
      },
      {
        "token": "--long-horizon",
        "titleEn": "Long-horizon create",
        "titleVi": "Tạo dài hạn",
        "descEn": "Use the long-horizon creation workflow for skills that must stay durable across many sessions.",
        "descVi": "Dùng workflow tạo dài hạn cho skill cần bền qua nhiều phiên.",
        "exampleCommand": "/ak:skill-creator create release-notes --project --long-horizon"
      },
      {
        "token": "--apply",
        "titleEn": "Write accepted edits",
        "titleVi": "Ghi sửa đã chấp nhận",
        "descEn": "Write the accepted update or optimize edits. Without --apply, report the proposed patch only.",
        "descVi": "Ghi các sửa update hoặc optimize đã chấp nhận. Không có --apply thì chỉ báo patch đề xuất.",
        "exampleCommand": "/ak:skill-creator update release-notes --apply"
      },
      {
        "token": "--from-audit",
        "titleEn": "From audit report",
        "titleVi": "Từ báo cáo audit",
        "descEn": "Feed an audit report path into update so the patch stays scoped to diagnosed issues.",
        "descVi": "Đưa path báo cáo audit vào update để patch bám đúng vấn đề đã chẩn đoán.",
        "exampleCommand": "/ak:skill-creator update release-notes --from-audit plans/reports/skill-audit.md --apply"
      },
      {
        "token": "--advice",
        "titleEn": "Advisory supervision",
        "titleVi": "Giám sát tư vấn",
        "descEn": "Requests Kongming advisory review after planning, after the SKILL.md draft and evaluation results, before packaging or distribution, or when repeated failures block progress. It does not transfer decisions or bypass validation and security checks.",
        "descVi": "Yêu cầu Kongming review tư vấn sau planning, sau bản nháp SKILL.md cùng kết quả evaluation, trước packaging hoặc distribution, hoặc khi lỗi lặp lại chặn tiến độ. Tùy chọn này không chuyển quyền quyết định và không bỏ qua validation hay kiểm tra bảo mật.",
        "exampleCommand": "/ak:skill-creator create release-notes --project --advice"
      }
    ]
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
      "command": "/ak:skill-creator create release-notes --project",
      "whenEn": "A repeatable workflow should become a versioned skill in the current project.",
      "whenVi": "Một workflow lặp lại cần trở thành skill được version hóa trong project hiện tại.",
      "expectedEn": "Captures tasks, triggers, outputs, scope, refusal behavior, and test cases; scaffolds the project skill directory, writes concise SKILL.md/resources, validates structure, and packages only when requested.",
      "expectedVi": "Ghi nhận task, trigger, output, scope, refusal behavior và test case; scaffold thư mục skill trong project, viết SKILL.md/tài nguyên ngắn gọn, validate cấu trúc và chỉ đóng gói khi được yêu cầu.",
      "recommended": true
    },
    {
      "labelEn": "Update from an audit",
      "labelVi": "Cập nhật từ audit",
      "command": "/ak:skill-creator update release-notes --from-audit plans/reports/skill-audit.md --apply",
      "whenEn": "An audit report already diagnosed routing or instruction issues that should be written back.",
      "whenVi": "Báo cáo audit đã chẩn đoán lỗi routing hoặc hướng dẫn cần ghi lại vào skill.",
      "expectedEn": "Reads the audit report, patches only diagnosed issues, writes accepted edits because --apply is set, and leaves unrelated skill files unchanged.",
      "expectedVi": "Đọc báo cáo audit, chỉ vá vấn đề đã chẩn đoán, ghi sửa đã chấp nhận vì có --apply, và không đụng file skill không liên quan."
    },
    {
      "labelEn": "Audit one skill",
      "labelVi": "Audit một skill",
      "command": "/ak:skill-creator audit release-notes",
      "whenEn": "Routing, description, or behavior looks wrong and you need a diagnosis before rewriting.",
      "whenVi": "Routing, description hoặc hành vi trông sai và cần chẩn đoán trước khi viết lại.",
      "expectedEn": "Reports routing, description, and behavior findings without rewriting SKILL.md unless a later update --apply is requested.",
      "expectedVi": "Báo finding về routing, description và hành vi mà không viết lại SKILL.md trừ khi sau đó chạy update --apply."
    },
    {
      "labelEn": "Optimize metadata",
      "labelVi": "Tối ưu metadata",
      "command": "/ak:skill-creator optimize release-notes --apply",
      "whenEn": "An existing skill undertriggers, overtriggers, or has vague discovery metadata.",
      "whenVi": "Skill hiện có kích hoạt thiếu, kích hoạt quá rộng hoặc metadata khám phá còn mơ hồ.",
      "expectedEn": "Tightens when-to-use language and eval coverage, writes accepted metadata changes because --apply is set, and keeps progressive disclosure intact.",
      "expectedVi": "Siết ngôn ngữ when-to-use và coverage eval, ghi metadata đã chấp nhận vì có --apply, và giữ progressive disclosure."
    },
    {
      "labelEn": "Advised authoring",
      "labelVi": "Tạo skill có cố vấn",
      "command": "/ak:skill-creator create release-notes --project --advice",
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
      "exampleCommand": "/ak:skill-creator create release-notes --project --advice"
    }
  ]
};

export default data;
