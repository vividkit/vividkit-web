import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-skill',
  command: '/ak:skill',
  kit: 'marketer',
  header: {
    titleEn: '/ak:skill — Marketing skill lifecycle',
    titleVi: '/ak:skill — Vòng đời skill marketing',
    taglineEn: 'Marketing skill lifecycle manager for creating, adding references, optimizing, fixing logs, planning, and updating practical AgentKit marketing skills.',
    taglineVi: 'Trình quản lý vòng đời skill marketing để tạo, thêm reference, tối ưu, sửa từ log, lập plan và cập nhật skill AgentKit marketing thực dụng.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'PROJECT SCOPE BY DEFAULT',
    titleVi: 'MẶC ĐỊNH CHỈ PROJECT-SCOPE',
    contentEn: 'Operate in project-scope unless explicitly authorized for user-scope skill changes. If arguments are missing or ambiguous, use ask_user. Keep SKILL.md concise and move detail into references.',
    contentVi: 'Mặc định chỉ thao tác trong project-scope trừ khi được cho phép rõ để sửa skill user-scope. Nếu argument thiếu hoặc mơ hồ, dùng ask_user. Giữ SKILL.md súc tích và chuyển chi tiết vào references.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Action', titleVi: 'Đọc action', descEn: 'Read add, create, fix-logs, optimize, plan, or update as the first argument.', descVi: 'Đọc add, create, fix-logs, optimize, plan hoặc update từ argument đầu tiên.' },
    { number: 2, titleEn: 'Route Reference', titleVi: 'Định tuyến reference', descEn: 'Load references/{action}.md and execute the corresponding lifecycle workflow.', descVi: 'Nạp references/{action}.md và chạy workflow vòng đời tương ứng.' },
    { number: 3, titleEn: 'Activate Authoring', titleVi: 'Kích hoạt authoring', descEn: 'Use skill-creator and claude-code guidance for skill structure, tools, and implementation conventions.', descVi: 'Dùng skill-creator và claude-code guidance cho cấu trúc skill, tool và convention triển khai.' },
    { number: 4, titleEn: 'Research Docs', titleVi: 'Research tài liệu', descEn: 'Use docs-seeker when building from URLs or source material that needs authoritative documentation.', descVi: 'Dùng docs-seeker khi build từ URL hoặc nguồn cần tài liệu đáng tin cậy.' },
    { number: 5, titleEn: 'Think Through Design', titleVi: 'Suy nghĩ thiết kế', descEn: 'Use sequential-thinking for complex multi-step skill design, optimization, or repair.', descVi: 'Dùng sequential-thinking cho thiết kế, tối ưu hoặc sửa skill nhiều bước phức tạp.' },
    { number: 6, titleEn: 'Author Practical Skill', titleVi: 'Viết skill thực dụng', descEn: 'Write instructions that teach the agent how to use tools; keep SKILL.md concise and references detailed.', descVi: 'Viết hướng dẫn dạy agent cách dùng tool; giữ SKILL.md ngắn và để chi tiết trong references.' },
    { number: 7, titleEn: 'Review Scope', titleVi: 'Kiểm tra scope', descEn: 'Confirm changes stay in the authorized marketing-kit scope and do not cross into user-scope without permission.', descVi: 'Xác nhận thay đổi nằm trong scope marketing-kit được phép và không sang user-scope nếu chưa được cho phép.' },
  ],
  corePrinciplesEn: [
    'This skill owns the marketing skill lifecycle, not generic documentation writing.',
    'Skills are practical runtime instructions for Claude to use tools, agents, and references.',
    'Progressive disclosure matters: concise SKILL.md, deeper references, scripts, and examples outside the root file.',
    'Plan and optimize paths should involve user review when the action calls for it.',
  ],
  corePrinciplesVi: [
    'Skill này phụ trách vòng đời skill marketing, không phải viết tài liệu chung chung.',
    'Skill là hướng dẫn runtime thực dụng để Claude dùng tool, agent và reference.',
    'Progressive disclosure rất quan trọng: SKILL.md ngắn, chi tiết nằm trong reference, script và ví dụ bên ngoài.',
    'Các luồng plan và optimize cần có review của người dùng khi action yêu cầu.',
  ],
  workflowModes: [
    { flag: 'add <skill-name> <ref-prompt>', modeEn: 'Add reference files or scripts to an existing skill.', modeVi: 'Thêm reference file hoặc script vào skill hiện có.', research: 'Existing skill', redTeam: 'Scope creep', validation: 'Reference added' },
    { flag: 'create <prompt-or-url>', modeEn: 'Create a new marketing skill from a URL, GitHub source, description, or prompt.', modeVi: 'Tạo skill marketing mới từ URL, GitHub, mô tả hoặc prompt.', research: 'Docs/source', redTeam: 'Docs vs instructions', validation: 'Skill created' },
    { flag: 'fix-logs [skill-name]', modeEn: 'Fix a skill from logs.txt error output.', modeVi: 'Sửa skill dựa trên output lỗi trong logs.txt.', research: 'Logs', redTeam: 'Symptom patch', validation: 'Error addressed' },
    { flag: 'optimize <skill-name> [prompt]', modeEn: 'Plan and optimize an existing skill for token efficiency with user approval.', modeVi: 'Lập plan và tối ưu skill hiện có cho token efficiency với phê duyệt người dùng.', research: 'Skill + refs', redTeam: 'Lost behavior', validation: 'Optimized skill' },
    { flag: 'plan <skill-name> [prompt]', modeEn: 'Plan a new skill with user review before implementing.', modeVi: 'Lập plan skill mới với user review trước khi triển khai.', research: 'Need + scope', redTeam: 'Premature build', validation: 'Approved plan' },
    { flag: 'update <skill-name> [prompt]', modeEn: 'Directly update skill content or references.', modeVi: 'Cập nhật trực tiếp nội dung skill hoặc reference.', research: 'Current skill', redTeam: 'Unauthorized scope', validation: 'Updated skill' },
  ],
  skillStack: [
    { name: 'skill-creator', type: 'agent' },
    { name: 'researcher', type: 'agent' },
    { name: 'claude-code', type: 'skill' },
    { name: 'docs-seeker', type: 'skill' },
    { name: 'sequential-thinking', type: 'tool' },
  ],
  promptExamples: [
    { labelEn: 'Create', labelVi: 'Tạo', command: '/ak:skill create Build a marketing skill for webinar funnel planning',
      commandVi: '/ak:skill create Xây dựng skill marketing cho lập kế hoạch phễu webinar', whenEn: 'You need a new marketing automation skill from a description.', whenVi: 'Khi cần skill marketing automation mới từ mô tả.', expectedEn: 'New practical skill structure with concise SKILL.md and references as needed.', expectedVi: 'Cấu trúc skill thực dụng mới với SKILL.md ngắn và reference khi cần.', recommended: true },
    { labelEn: 'Add refs', labelVi: 'Thêm reference', command: '/ak:skill add ak-webinar-funnel Add email sequence templates and launch checklist',
      commandVi: '/ak:skill add ak-webinar-funnel Thêm mẫu chuỗi email và checklist ra mắt', whenEn: 'An existing skill needs supporting references or scripts.', whenVi: 'Khi skill hiện có cần reference hoặc script hỗ trợ.', expectedEn: 'Reference additions routed through the add workflow.', expectedVi: 'Phần bổ sung reference được định tuyến qua workflow add.' },
    { labelEn: 'Optimize', labelVi: 'Tối ưu', command: '/ak:skill optimize ak-social reduce root SKILL.md token load',
      commandVi: '/ak:skill optimize ak-social giảm tải token của SKILL.md gốc', whenEn: 'A skill is too large or inefficient and needs progressive disclosure.', whenVi: 'Khi skill quá lớn hoặc kém hiệu quả và cần progressive disclosure.', expectedEn: 'Optimization plan and approved concise skill update.', expectedVi: 'Plan tối ưu và update skill súc tích sau khi được duyệt.' },
    { labelEn: 'Fix logs', labelVi: 'Sửa log', command: '/ak:skill fix-logs ak-social',
      commandVi: '/ak:skill fix-logs ak-social', whenEn: 'A skill has failing log output that should drive a fix.', whenVi: 'Khi skill có log lỗi cần dùng để sửa.', expectedEn: 'Log-grounded repair of the target skill.', expectedVi: 'Sửa skill mục tiêu dựa trên log.' },
  ],
};

export default data;
