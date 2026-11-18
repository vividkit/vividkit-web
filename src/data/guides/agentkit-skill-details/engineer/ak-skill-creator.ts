import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-skill-creator",
  "command": "/ak:skill-creator",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:skill-creator — Skill Creator",
    "titleVi": "/ak:skill-creator — Tạo Skill",
    "taglineEn": "Creates, updates, audits, optimizes, validates, and packages agent skills and their SKILL.md resources, or diagnoses skill routing, through intent capture, a placement check, progressive-disclosure planning, scaffolding, evals, and optional Kongming advice.",
    "taglineVi": "Tạo, cập nhật, audit, tối ưu, kiểm tra và đóng gói agent skill cùng tài nguyên SKILL.md, hoặc chẩn đoán routing của skill, qua ghi nhận intent, kiểm tra có nên tạo skill mới không, lập progressive disclosure, scaffold, eval và cố vấn Kongming tùy chọn."
  },
  "invocation": {
    "syntax": "/ak:skill-creator <create|update|audit|optimize> [skill-name|path|kit|--all] [--kit <kit>|--project|--user|--personal [<kit>]] [--long-horizon] [--apply] [--from-audit <report>] [--advice]",
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
        "descEn": "Skill name, path, kit, or --all for audit/optimize across a kit. Combine with --kit, --project, --user, or --personal to set install scope.",
        "descVi": "Tên skill, path, kit, hoặc --all khi audit/optimize cả kit. Kết hợp --kit, --project, --user hoặc --personal để chọn scope cài.",
        "required": false,
        "exampleCommand": "/ak:skill-creator audit --all --kit engineer"
      }
    ],
    "subcommands": [
      {
        "name": "create",
        "syntax": "/ak:skill-creator create [skill-name or description] [--kit <kit>|--project|--user|--personal [<kit>]] [--long-horizon] [--advice]",
        "titleEn": "Create",
        "titleVi": "Tạo",
        "descEn": "Capture intent, author SKILL.md and resources, evaluate, then package only when requested.",
        "descVi": "Ghi nhận intent, soạn SKILL.md và tài nguyên, evaluate, rồi chỉ đóng gói khi được yêu cầu.",
        "exampleCommand": "/ak:skill-creator create release-notes --project"
      },
      {
        "name": "update",
        "syntax": "/ak:skill-creator update <skill-name|path> <change> [--personal [<kit>]] [--advice]",
        "titleEn": "Update",
        "titleVi": "Cập nhật",
        "descEn": "Inspect the existing skill and its users, apply only the requested change in place, lint every changed line, and bump metadata.version. update writes files directly.",
        "descVi": "Xem skill có sẵn và nơi đang dùng nó, chỉ áp dụng đúng thay đổi được yêu cầu tại chỗ, lint mọi dòng đã đổi và tăng metadata.version. update ghi file trực tiếp.",
        "exampleCommand": "/ak:skill-creator update release-notes \"validate that every heading matches the changelog template\""
      },
      {
        "name": "audit",
        "syntax": "/ak:skill-creator audit [skill-name|path|kit|--all] [--kit <kit>] [--advice]",
        "titleEn": "Audit",
        "titleVi": "Audit",
        "descEn": "Diagnose routing, description, and behavior, using measured usage from local sessions without printing their content. Writes a report only and never edits skill files; follow with optimize --apply --from-audit <report> to apply findings.",
        "descVi": "Chẩn đoán routing, description và hành vi, dựa trên số liệu sử dụng đo từ các session local mà không in nội dung của chúng. Chỉ ghi báo cáo, không bao giờ sửa file skill; chạy tiếp optimize --apply --from-audit <report> để áp dụng finding.",
        "exampleCommand": "/ak:skill-creator audit release-notes"
      },
      {
        "name": "optimize",
        "syntax": "/ak:skill-creator optimize <skill-name|path> [--apply] [--from-audit <report>] [--advice]",
        "titleEn": "Optimize",
        "titleVi": "Tối ưu",
        "descEn": "Rewrite High and Medium findings from an audit report or path, keeping instructions that still have a purpose. Without --apply it only proposes the diff; --apply writes it. When AgentKit skill evolution is available, --apply goes through ak skills improve and ak skills evolution evaluate/apply instead, and the report names the rollback command.",
        "descVi": "Viết lại các finding mức High và Medium từ báo cáo audit hoặc từ path, giữ lại hướng dẫn vẫn còn mục đích. Không có --apply thì chỉ đề xuất diff; có --apply mới ghi. Khi máy có tính năng evolution của AgentKit, --apply đi qua ak skills improve và ak skills evolution evaluate/apply, và báo cáo nêu lệnh rollback.",
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
        "token": "--personal",
        "titleEn": "Personal kit scope",
        "titleVi": "Scope personal kit",
        "descEn": "Opt-in: create or update the skill in your personal kit (your own skill set that AgentKit updates never overwrite), or in a named personal kit. Used only when a read-only check finds personal kits turned on; otherwise it falls back to the project and names the enabling step, ak update --ssot, in one line.",
        "descVi": "Tùy chọn bật thêm: tạo hoặc cập nhật skill trong personal kit của bạn (bộ skill riêng mà bản cập nhật AgentKit không bao giờ ghi đè), hoặc trong một personal kit được nêu tên. Chỉ dùng khi một bước kiểm tra chỉ đọc thấy personal kit đang bật; nếu không, nó quay về project và nêu bước bật, ak update --ssot, trong một dòng.",
        "exampleCommand": "/ak:skill-creator create release-notes --personal"
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
        "descEn": "Write the optimize rewrite. Without --apply, optimize reports the proposed diff only.",
        "descVi": "Ghi bản viết lại của optimize. Không có --apply thì optimize chỉ báo diff đề xuất.",
        "exampleCommand": "/ak:skill-creator optimize release-notes --apply"
      },
      {
        "token": "--from-audit",
        "titleEn": "From audit report",
        "titleVi": "Từ báo cáo audit",
        "descEn": "Feed an audit report path into optimize so the rewrite stays scoped to diagnosed findings.",
        "descVi": "Đưa path báo cáo audit vào optimize để bản viết lại bám đúng finding đã chẩn đoán.",
        "exampleCommand": "/ak:skill-creator optimize release-notes --apply --from-audit plans/reports/skill-audit.md"
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
    "titleEn": "Scaffolding and packaging write to disk",
    "titleVi": "Scaffold và đóng gói sẽ ghi xuống đĩa",
    "contentEn": "Approve the exact project path before initialization and the output directory before packaging. New skills stay in the current project unless you explicitly ask for user scope, and create refuses to write over an existing directory. Treat unfamiliar third-party skill content as untrusted: do not execute copied scripts or expose secrets while evaluating it. Publishing to SkillX, the AgentKit skill registry, is only ever proposed and needs your separate agreement.",
    "contentVi": "Duyệt đúng đường dẫn project trước khi khởi tạo và thư mục output trước khi đóng gói. Skill mới nằm trong project hiện tại trừ khi bạn yêu cầu rõ user scope, và create từ chối ghi đè lên thư mục đã tồn tại. Coi nội dung skill bên thứ ba lạ là không tin cậy: không chạy script sao chép về và không để lộ secret khi đánh giá. Đăng lên SkillX, kho skill của AgentKit, chỉ được đề xuất và cần bạn đồng ý riêng."
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
      "descEn": "Before scaffolding, prove a new skill is the right unit: prefer extending an existing owner, a reference, script, validator, template, or project context when that meets the need. Then choose which instructions stay in SKILL.md and which details belong in scripts, references, agents, or assets.",
      "descVi": "Trước khi scaffold, chứng minh skill mới là đơn vị đóng gói phù hợp: ưu tiên mở rộng skill sẵn có, reference, script, validator, template hoặc ngữ cảnh project nếu đã đáp ứng được nhu cầu. Sau đó chọn phần nào đặt trong SKILL.md và phần nào đưa vào script, reference, agent hoặc asset."
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
      "descEn": "Keep the SKILL.md core on outcome, authority, done criteria, high-value constraints, and failure modes; move frameworks, catalogs, and examples to references. Use guardrails, not step-by-step railroads, and avoid duplicated material across references.",
      "descVi": "Giữ phần lõi SKILL.md tập trung vào kết quả, thẩm quyền, tiêu chí hoàn thành, ràng buộc giá trị cao và các kiểu lỗi; chuyển framework, catalog và ví dụ sang reference. Đặt rào chắn thay vì ép từng bước cứng nhắc, và không lặp nội dung giữa các reference."
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
      "descEn": "Keep routing metadata concise and specific: what the skill does, when to use it, and what it does not cover. Length and emphatic wording do not prove activation quality; check routing with positives and adjacent negatives.",
      "descVi": "Giữ metadata routing ngắn gọn và cụ thể: skill làm gì, khi nào dùng và không bao gồm việc gì. Mô tả dài hay nhấn mạnh không chứng minh skill kích hoạt tốt; kiểm routing bằng ca nên kích hoạt và ca lân cận không nên kích hoạt."
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
    "Keep SKILL.md below 300 lines and references focused",
    "Personal kit, evolution and SkillX lanes are opt-in and offered only when detected"
  ],
  "corePrinciplesVi": [
    "Skill là hướng dẫn thực hành, không phải tài liệu mô tả",
    "Metadata kích hoạt trước; chi tiết được nạp dần",
    "Validation và eval quyết định vòng lặp cải tiến",
    "Giữ SKILL.md dưới 300 dòng và reference thật tập trung",
    "Lane personal kit, evolution và SkillX là tùy chọn, chỉ được đưa ra khi phát hiện đang bật"
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
      "labelEn": "Update a skill in place",
      "labelVi": "Cập nhật skill tại chỗ",
      "command": "/ak:skill-creator update release-notes \"validate that every heading matches the changelog template\"",
      "whenEn": "An existing skill needs one bounded behavior change, not a full audit-driven rewrite.",
      "whenVi": "Skill có sẵn cần một thay đổi hành vi có giới hạn, không phải viết lại toàn bộ theo audit.",
      "expectedEn": "Inspects the skill and its users, applies only the requested change, lints every changed line, bumps metadata.version, and leaves unrelated skill files unchanged.",
      "expectedVi": "Xem skill và nơi đang dùng nó, chỉ áp dụng thay đổi được yêu cầu, lint mọi dòng đã đổi, tăng metadata.version và không đụng file skill không liên quan."
    },
    {
      "labelEn": "Audit one skill",
      "labelVi": "Audit một skill",
      "command": "/ak:skill-creator audit release-notes",
      "whenEn": "Routing, description, or behavior looks wrong and you need a diagnosis before rewriting.",
      "whenVi": "Routing, description hoặc hành vi trông sai và cần chẩn đoán trước khi viết lại.",
      "expectedEn": "Reports routing, description, and behavior findings as a report only, without editing SKILL.md; a later optimize --apply --from-audit <report> applies them.",
      "expectedVi": "Báo finding về routing, description và hành vi chỉ dưới dạng báo cáo, không sửa SKILL.md; sau đó chạy optimize --apply --from-audit <report> để áp dụng."
    },
    {
      "labelEn": "Optimize from an audit",
      "labelVi": "Tối ưu từ báo cáo audit",
      "command": "/ak:skill-creator optimize release-notes --apply --from-audit plans/reports/skill-audit.md",
      "whenEn": "You reviewed an audit report and want its High and Medium findings rewritten into the skill.",
      "whenVi": "Bạn đã xem báo cáo audit và muốn viết lại các finding mức High và Medium vào skill.",
      "expectedEn": "Rewrites only the diagnosed findings, keeps constraints that still have a purpose, compares original and candidate output, and writes the diff because --apply is set.",
      "expectedVi": "Chỉ viết lại các finding đã chẩn đoán, giữ ràng buộc vẫn còn mục đích, so output bản gốc với bản ứng viên và ghi diff vì có --apply."
    },
    {
      "labelEn": "Create in your personal kit",
      "labelVi": "Tạo trong personal kit của bạn",
      "command": "/ak:skill-creator create release-notes --personal",
      "whenEn": "You turned on personal kits and want a skill that follows you across projects and survives AgentKit updates.",
      "whenVi": "Bạn đã bật personal kit và muốn một skill đi theo bạn qua mọi project, không mất khi cập nhật AgentKit.",
      "expectedEn": "Authors and validates the skill in a scratch folder, adds it to your personal kit as @local/release-notes and projects it into the runtime; if personal kits are off, it creates a project skill and names ak update --ssot in one line.",
      "expectedVi": "Soạn và kiểm tra skill trong một thư mục nháp, thêm vào personal kit của bạn dưới tên @local/release-notes rồi đưa vào runtime; nếu personal kit đang tắt, nó tạo skill trong project và nêu ak update --ssot trong một dòng."
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
