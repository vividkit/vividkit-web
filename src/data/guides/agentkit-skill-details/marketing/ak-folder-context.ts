import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-folder-context',
  command: '/ak:folder-context',
  kit: 'marketer',
  header: {
    titleEn: 'Subfolder Agent Context',
    titleVi: 'Ngữ cảnh agent cho thư mục con',
    taglineEn: 'Creates compact local CLAUDE.md and linked AGENTS.md files only when a subfolder has durable conventions future agents cannot infer.',
    taglineVi: 'Tạo CLAUDE.md cục bộ gọn và AGENTS.md liên kết chỉ khi thư mục con có quy ước bền vững mà agent sau không tự suy ra được.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Subfolder only',
    titleVi: 'Chỉ dành cho thư mục con',
    contentEn: 'Never edit root CLAUDE.md or root AGENTS.md, duplicate root instructions, invent constraints, write credentials, or create context outside the confirmed target.',
    contentVi: 'Không sửa CLAUDE.md hoặc AGENTS.md ở gốc, không chép lại hướng dẫn gốc, không bịa ràng buộc, không ghi credential, không tạo ngữ cảnh ngoài thư mục đã xác nhận.',
  },
  processFlow: [
    { number: 1, titleEn: 'Confirm target', titleVi: 'Xác nhận thư mục', descEn: 'Ensure the argument is a real subfolder, not the repository root or a general docs request.', descVi: 'Đảm bảo tham số là thư mục con thật, không phải gốc repo hoặc một yêu cầu tài liệu chung.' },
    { number: 2, titleEn: 'Inspect local evidence', titleVi: 'Đọc bằng chứng cục bộ', descEn: 'Review key source, configuration, Markdown, and existing local context files inside the target.', descVi: 'Xem mã, cấu hình, Markdown và file ngữ cảnh cục bộ đang có trong thư mục đích.' },
    { number: 3, titleEn: 'Run sanity gate', titleVi: 'Kiểm tra có đáng tạo', descEn: 'Reject static reference folders or folders whose context can be discovered on demand.', descVi: 'Từ chối thư mục tham chiếu tĩnh hoặc nơi mà ngữ cảnh có thể đọc lại khi cần.' },
    { number: 4, titleEn: 'Propose outline', titleVi: 'Đề xuất dàn ý', descEn: 'Group purpose, essential files, constraints, conventions, locked decisions, and cross-session context.', descVi: 'Nhóm mục đích, file quan trọng, ràng buộc, quy ước, quyết định đã khóa và ngữ cảnh cần nhớ qua phiên.' },
    { number: 5, titleEn: 'Wait confirmation', titleVi: 'Chờ xác nhận', descEn: 'Do not write until the user confirms the grouped outline.', descVi: 'Không ghi file trước khi người dùng xác nhận dàn ý đã nhóm.' },
    { number: 6, titleEn: 'Write compact context', titleVi: 'Ghi ngữ cảnh gọn', descEn: 'Create target-folder CLAUDE.md from folder evidence and explicit user decisions, omitting empty sections.', descVi: 'Tạo CLAUDE.md trong thư mục từ bằng chứng tại chỗ và quyết định người dùng, bỏ các mục rỗng.' },
    { number: 7, titleEn: 'Link agents file', titleVi: 'Liên kết AGENTS', descEn: 'Create AGENTS.md as a symlink to CLAUDE.md or a one-line pointer if symlinks are unavailable.', descVi: 'Tạo AGENTS.md dạng symlink tới CLAUDE.md hoặc file một dòng trỏ tới CLAUDE.md nếu không tạo được symlink.' },
    { number: 8, titleEn: 'Respect edits', titleVi: 'Tôn trọng chỉnh sửa', descEn: 'If the user edits the context file, re-read it, flag contradictions, and never revert without instruction.', descVi: 'Nếu người dùng sửa file ngữ cảnh, đọc lại, nêu mâu thuẫn và không tự hoàn nguyên khi chưa được bảo.' },
  ],
  corePrinciplesEn: [
    'Local context must be compact, specific, and durable.',
    'Create context only when future agents cannot infer it from nearby files.',
    'User-confirmed decisions and folder evidence are the only valid sources.',
    'Root instructions and project docs belong to other skills.',
  ],
  corePrinciplesVi: [
    'Ngữ cảnh cục bộ phải gọn, cụ thể và có giá trị lâu dài.',
    'Chỉ tạo ngữ cảnh khi agent sau không thể suy ra từ file gần đó.',
    'Nguồn hợp lệ chỉ gồm bằng chứng trong thư mục và quyết định người dùng đã xác nhận.',
    'Hướng dẫn gốc repo và tài liệu dự án thuộc về skill khác.',
  ],
  promptExamples: [
    { labelEn: 'Create folder context', labelVi: 'Tạo ngữ cảnh thư mục', command: '/ak:folder-context src/components/forms', whenEn: 'A subfolder has form-specific conventions future agents should preserve.', whenVi: 'Một thư mục con có quy ước riêng về form mà agent sau cần giữ.', expectedEn: 'Inspects the folder, proposes an outline, then writes compact local context after confirmation.', expectedVi: 'Kiểm tra thư mục, đề xuất dàn ý rồi ghi ngữ cảnh cục bộ gọn sau khi được xác nhận.', recommended: true },
    { labelEn: 'Component area', labelVi: 'Khu vực component', command: '/ak:folder-context src/features/checkout', whenEn: 'A feature folder has local constraints, naming, and decisions not obvious from code.', whenVi: 'Thư mục feature có ràng buộc, cách đặt tên và quyết định cục bộ không rõ từ mã.', expectedEn: 'Creates CLAUDE.md and AGENTS.md only if the sanity gate passes.', expectedVi: 'Chỉ tạo CLAUDE.md và AGENTS.md nếu vượt qua cổng kiểm tra cần thiết.' },
  ],
  guardrails: [
    { thoughtEn: 'Every folder benefits from instructions.', thoughtVi: 'Thư mục nào cũng nên có hướng dẫn.', realityEn: 'Static or self-explanatory folders should not get new context files.', realityVi: 'Thư mục tĩnh hoặc tự giải thích được thì không nên có file ngữ cảnh mới.', accent: 'amber' },
    { thoughtEn: 'Copy the root rules for safety.', thoughtVi: 'Chép luật gốc cho chắc.', realityEn: 'Duplicating root instructions creates drift. Keep only local, durable differences.', realityVi: 'Chép lại hướng dẫn gốc sẽ gây lệch. Chỉ giữ điểm khác biệt cục bộ và bền vững.', accent: 'rose' },
  ],
};

export default data;
