import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-folder-context",
  command: "/ak:folder-context",
  kit: "engineer",
  header: {
    titleEn: "/ak:folder-context",
    titleVi: "/ak:folder-context",
    taglineEn: "Create compact subfolder CLAUDE.md and linked AGENTS.md files for durable local conventions that root docs cannot safely carry.",
    taglineVi: "Tạo CLAUDE.md gọn trong subfolder và AGENTS.md liên kết cho convention cục bộ bền vững mà root docs không nên gánh.",
  },
  hardGate: {
    type: "warning",
    titleEn: "SUBFOLDER ONLY",
    titleVi: "CHỈ DÀNH CHO SUBFOLDER",
    contentEn: "Never edit root CLAUDE.md or root AGENTS.md. Confirm a subfolder target, do not create context for static/reference folders, and do not invent constraints or write credentials.",
    contentVi: "Không sửa root CLAUDE.md hoặc root AGENTS.md. Phải xác nhận target là subfolder, không tạo context cho thư mục tĩnh/tham chiếu, không bịa ràng buộc hoặc ghi credential.",
  },
  processFlow: [
    { number: 1, titleEn: "Confirm Target", titleVi: "Xác nhận thư mục", descEn: "Ensure the argument is a subfolder target, not the project root or a general docs request.", descVi: "Đảm bảo argument là subfolder, không phải root dự án hoặc yêu cầu docs chung." },
    { number: 2, titleEn: "Inspect Local Evidence", titleVi: "Kiểm tra bằng chứng cục bộ", descEn: "Read key source, configuration, Markdown, and existing local context files inside that folder.", descVi: "Đọc source chính, cấu hình, Markdown và context file cục bộ đã có trong thư mục đó." },
    { number: 3, titleEn: "Apply Sanity Gate", titleVi: "Chạy sanity gate", descEn: "Skip folders whose context is static reference material or discoverable on demand without durable conventions.", descVi: "Bỏ qua thư mục chỉ là tài liệu tham chiếu tĩnh hoặc có thể khám phá theo yêu cầu mà không cần convention bền vững." },
    { number: 4, titleEn: "Propose Outline", titleVi: "Đề xuất outline", descEn: "Group the future context by purpose, essential files, constraints, conventions, locked decisions, and session-spanning context.", descVi: "Nhóm context tương lai theo mục đích, file quan trọng, ràng buộc, convention, quyết định đã khóa và context xuyên session." },
    { number: 5, titleEn: "Wait Confirmation", titleVi: "Chờ xác nhận", descEn: "Get user confirmation before writing local agent instructions to the target folder.", descVi: "Lấy xác nhận của user trước khi ghi chỉ dẫn agent cục bộ vào thư mục đích." },
    { number: 6, titleEn: "Write CLAUDE.md", titleVi: "Ghi CLAUDE.md", descEn: "Create compact, specific, local bullets using only folder evidence or explicit user decisions; omit empty sections.", descVi: "Tạo bullet ngắn gọn, cụ thể, cục bộ, chỉ dựa trên bằng chứng trong folder hoặc quyết định rõ từ user; bỏ section rỗng." },
    { number: 7, titleEn: "Link AGENTS.md", titleVi: "Liên kết AGENTS.md", descEn: "Create AGENTS.md as a symlink to CLAUDE.md, or a one-line pointer file if symlinks are unavailable.", descVi: "Tạo AGENTS.md làm symlink tới CLAUDE.md, hoặc file một dòng trỏ tới CLAUDE.md nếu không dùng được symlink." },
    { number: 8, titleEn: "Respect User Edits", titleVi: "Tôn trọng sửa đổi", descEn: "If the user edits the file, re-read it, flag contradictions, and never revert without instruction.", descVi: "Nếu user sửa file, đọc lại, nêu mâu thuẫn và không tự revert khi chưa được yêu cầu." },
  ],
  corePrinciplesEn: [
    "Subfolder context is for local conventions future agents cannot reliably infer.",
    "Root agent instructions belong to /ak:docs agent-context, not this skill.",
    "Compact bullets beat file trees and generic project documentation.",
    "Evidence or explicit user decision is required for every local instruction.",
  ],
  corePrinciplesVi: [
    "Context subfolder dành cho convention cục bộ mà agent sau này khó tự suy ra.",
    "Chỉ dẫn agent ở root thuộc /ak:docs agent-context, không thuộc skill này.",
    "Bullet gọn tốt hơn cây file và tài liệu dự án chung chung.",
    "Mọi chỉ dẫn cục bộ phải dựa trên bằng chứng hoặc quyết định rõ của user.",
  ],
  expertiseAreasEn: [
    "Subfolder-scoped CLAUDE.md creation",
    "AGENTS.md symlink or pointer fallback",
    "Local convention discovery and pruning",
    "Locked decisions and cross-session context capture",
    "Contradiction detection after user edits",
  ],
  expertiseAreasVi: [
    "Tạo CLAUDE.md theo phạm vi subfolder",
    "Symlink AGENTS.md hoặc fallback bằng file trỏ tới CLAUDE.md",
    "Khám phá và cắt gọn convention cục bộ",
    "Ghi quyết định đã khóa và context xuyên session",
    "Phát hiện mâu thuẫn sau khi user sửa",
  ],
  skillStack: [
    { name: "Read", type: "tool" },
    { name: "Glob", type: "tool" },
    { name: "Grep", type: "tool" },
    { name: "symlink", type: "tool" },
    { name: "ak:docs", type: "skill" },
  ],
  promptExamples: [
    { labelEn: "Create local context", labelVi: "Tạo context cục bộ", command: "/ak:folder-context src/payments", whenEn: "A subfolder has durable conventions or decisions that are hard to infer later.", whenVi: "Một subfolder có convention hoặc quyết định bền vững khó suy ra về sau.", expectedEn: "Inspects the folder, proposes an outline, writes compact CLAUDE.md after confirmation, and links AGENTS.md.", expectedVi: "Kiểm tra folder, đề xuất outline, sau khi xác nhận thì ghi CLAUDE.md gọn và liên kết AGENTS.md.", recommended: true },
    { labelEn: "Avoid root", labelVi: "Tránh root", command: "/ak:folder-context packages/admin", whenEn: "The needed guidance is local to one package, not a root project instruction.", whenVi: "Hướng dẫn cần lưu chỉ thuộc một package, không phải chỉ dẫn root của dự án.", expectedEn: "Keeps scope inside the package folder and refuses to edit root agent context through this skill.", expectedVi: "Giữ phạm vi trong package và không sửa root agent context bằng skill này." },
    { labelEn: "Static folder gate", labelVi: "Cổng thư mục tĩnh", command: "/ak:folder-context references", whenEn: "A folder may only contain static reference material discoverable on demand.", whenVi: "Một thư mục có thể chỉ chứa tài liệu tham chiếu tĩnh có thể đọc khi cần.", expectedEn: "Applies the sanity gate and skips file creation if durable local context is not justified.", expectedVi: "Chạy sanity gate và bỏ tạo file nếu không có lý do cho context cục bộ bền vững." },
  ],
};

export default data;
