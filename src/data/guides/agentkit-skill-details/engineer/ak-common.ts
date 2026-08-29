import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-common',
  command: '/ak:common',
  kit: 'engineer',
  header: {
    titleEn: '/ak:common',
    titleVi: '/ak:common',
    taglineEn: 'Internal shared utilities and conventions loaded by other AgentKit skills; not a user-facing workflow.',
    taglineVi: 'Tiện ích và quy ước dùng chung được các skill AgentKit khác nạp; không phải workflow dành cho người dùng gọi trực tiếp.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Internal only',
    titleVi: 'Chỉ dùng nội bộ',
    contentEn: 'disable-model-invocation is enabled. Invoke ak:common only when another skill loads it as shared support material.',
    contentVi: 'Skill bật disable-model-invocation. Chỉ gọi ak:common khi một skill khác nạp nó làm vật liệu hỗ trợ dùng chung.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parent skill loads', titleVi: 'Skill cha nạp', descEn: 'A user-facing skill decides it needs shared conventions, references, scripts, or resources.', descVi: 'Một skill có giao diện người dùng xác định nó cần quy ước, tham chiếu, script hoặc tài nguyên dùng chung.' },
    { number: 2, titleEn: 'Common supplies', titleVi: 'Common cung cấp', descEn: 'ak:common exposes the underlying material from its references, scripts, or resources directories.', descVi: 'ak:common cung cấp vật liệu nền trong các thư mục references, scripts hoặc resources.' },
    { number: 3, titleEn: 'No standalone run', titleVi: 'Không chạy độc lập', descEn: 'The model must not treat this as an independently invocable command or a user workflow.', descVi: 'Model không được xem đây là lệnh có thể gọi độc lập hay một workflow cho người dùng.' },
    { number: 4, titleEn: 'Return to owner', titleVi: 'Quay lại skill chủ', descEn: 'The calling skill remains responsible for the actual task, output, and safety rules.', descVi: 'Skill gọi vẫn chịu trách nhiệm cho nhiệm vụ thật, đầu ra và các quy tắc an toàn.' },
  ],
  corePrinciplesEn: ['Shared support material only.', 'No user-facing standalone execution.', 'The owning skill’s contract controls behavior.', 'Use references, scripts, and resources as implementation support.'],
  corePrinciplesVi: ['Chỉ là vật liệu hỗ trợ dùng chung.', 'Không có chế độ chạy độc lập cho người dùng.', 'Contract của skill sở hữu quyết định hành vi.', 'Dùng references, scripts và resources để hỗ trợ triển khai.'],
  expertiseAreasEn: ['Shared conventions', 'Reusable references', 'Support scripts', 'Cross-skill resources'],
  expertiseAreasVi: ['Quy ước dùng chung', 'Tài liệu tham chiếu tái sử dụng', 'Script hỗ trợ', 'Tài nguyên liên skill'],
};

export default data;
