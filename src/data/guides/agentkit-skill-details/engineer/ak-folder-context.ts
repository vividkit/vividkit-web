import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-folder-context",
  command: "/ak:folder-context",
  kit: "engineer",
  header: {
    titleEn: "/ak:folder-context — Subfolder CLAUDE.md files",
    titleVi: "/ak:folder-context — CLAUDE.md trong subfolder",
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
  invocation: {
    syntax: "/ak:folder-context <target-folder>",
    arguments: [
      {
        token: "<target-folder>",
        titleEn: "Target subfolder",
        titleVi: "Subfolder đích",
        descEn: "Existing subfolder that should receive local agent context. It cannot be the project root or a general docs request; extra evidence may guide the proposed outline but does not change the positional folder target.",
        descVi: "Subfolder hiện có cần nhận context agent cục bộ. Không được là root dự án hoặc yêu cầu docs chung; bằng chứng bổ sung có thể định hướng outline đề xuất nhưng không đổi target folder dạng positional.",
        required: true,
        exampleCommand: "/ak:folder-context packages/payments",
          exampleCommandVi: '/ak:folder-context packages/payments',
      },
    ],
  },
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
    { name: "CLAUDE.md / AGENTS.md", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "Create local context", labelVi: "Tạo context cục bộ", command: "/ak:folder-context packages/payments",
      commandVi: '/ak:folder-context packages/payments', whenEn: "A subfolder has durable naming, architecture, workflow, or safety rules that differ from the project root.", whenVi: "Một subfolder có quy tắc đặt tên, kiến trúc, workflow hoặc an toàn bền vững khác với root dự án.", expectedEn: "Validates that the target is a subfolder, inspects source, configuration, Markdown, and existing local instructions, proposes an outline, waits for approval, then writes a compact CLAUDE.md and linked AGENTS.md.", expectedVi: "Xác minh target là subfolder, kiểm tra source, cấu hình, Markdown và chỉ dẫn cục bộ hiện có, đề xuất outline, chờ phê duyệt, rồi ghi CLAUDE.md gọn và AGENTS.md liên kết.", recommended: true },
    { labelEn: "Preserve explicit decisions", labelVi: "Giữ quyết định rõ ràng", command: "/ak:folder-context src/payments \"capture provider naming rules and the decision to store currency as integer minor units\"",
      commandVi: '/ak:folder-context src/payments "ghi lại các quy tắc đặt tên provider và quyết định lưu currency dưới dạng integer minor units"', whenEn: "You can name durable local decisions that future agents should keep across sessions.", whenVi: "Bạn có thể nêu quyết định cục bộ bền vững mà agent sau này cần giữ qua nhiều session.", expectedEn: "Uses folder evidence plus the supplied decisions, omits empty or generic sections, and keeps the resulting bullets specific to the target folder rather than duplicating root guidance.", expectedVi: "Dùng bằng chứng trong folder cùng quyết định đã cung cấp, bỏ section rỗng hoặc chung chung, và giữ bullet chỉ cụ thể cho target folder thay vì lặp lại hướng dẫn root." },
    { labelEn: "Apply the sanity gate", labelVi: "Áp dụng sanity gate", command: "/ak:folder-context reference/archive",
      commandVi: '/ak:folder-context reference/archive', whenEn: "A folder may only contain static reference material or context that is easy to rediscover on demand.", whenVi: "Một folder có thể chỉ chứa tài liệu tham chiếu tĩnh hoặc context dễ đọc lại khi cần.", expectedEn: "Checks whether durable local instructions are justified and skips creating CLAUDE.md or AGENTS.md when the folder is static or discoverable on demand.", expectedVi: "Kiểm tra liệu chỉ dẫn cục bộ bền vững có chính đáng không và bỏ tạo CLAUDE.md hoặc AGENTS.md khi folder chỉ tĩnh hoặc có thể khám phá lại khi cần." },
    { labelEn: "Respect existing context", labelVi: "Tôn trọng context hiện có", command: "/ak:folder-context apps/admin",
      commandVi: '/ak:folder-context apps/admin', whenEn: "The target already has local instructions or user edits that must stay authoritative.", whenVi: "Target đã có chỉ dẫn cục bộ hoặc chỉnh sửa của user cần tiếp tục là nguồn thẩm quyền.", expectedEn: "Reads the current local context before proposing changes, preserves unrelated user edits, flags contradictions, and never reverts existing instructions without permission.", expectedVi: "Đọc context cục bộ hiện tại trước khi đề xuất thay đổi, giữ chỉnh sửa không liên quan của user, nêu mâu thuẫn và không revert chỉ dẫn hiện có khi chưa được phép." },
  ],
};

export default data;
