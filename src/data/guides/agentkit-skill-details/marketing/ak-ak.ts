import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-ak",
  command: "/ak:ak",
  kit: 'marketer',
  header: {
    titleEn: "ak CLI Operation",
    titleVi: "Vận hành ak CLI",
    taglineEn: "Operate the AgentKit control-plane CLI safely: inspect subcommands, classify mutation risk, confirm project vs global scope, preserve unknown files, and report exact command results.",
    taglineVi: "Vận hành CLI control-plane của AgentKit an toàn: kiểm tra subcommand, phân loại rủi ro mutate, xác nhận scope project/global, giữ file lạ và báo kết quả lệnh chính xác.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Do not bypass human mutation gates",
    titleVi: "Không vượt cổng xác nhận khi mutate",
    contentEn: "Never pass --no-interactive or --yes to a mutating command without explicit approval, never combine --force with --fresh, and snapshot before recover, restore, uninstall, or fresh operations.",
    contentVi: "Không dùng --no-interactive hoặc --yes cho lệnh mutate nếu chưa được duyệt rõ, không kết hợp --force với --fresh, và phải snapshot trước recover, restore, uninstall hoặc thao tác fresh.",
  },
  processFlow: [
    { number: 1, titleEn: "Confirm ownership", titleVi: "Xác nhận đúng skill", descEn: "Use ak:ak only when the next action is an ak subcommand or interpreting ak output, not skill authoring, planning, journaling, or generic routing.", descVi: "Chỉ dùng ak:ak khi bước tiếp theo là subcommand ak hoặc diễn giải output ak, không dùng để viết skill, lập plan, viết journal hay route việc chung." },
    { number: 2, titleEn: "Triage category", titleVi: "Phân loại lệnh", descEn: "Classify the intended command as read-only, mutating, or diagnostic before touching the installed binary.", descVi: "Phân loại lệnh định chạy là read-only, mutating hay diagnostic trước khi đụng tới binary đã cài." },
    { number: 3, titleEn: "Inspect help", titleVi: "Đọc help", descEn: "Run the intended ak subcommand help first; for read-only scripted work prefer the versioned JSON envelope when available.", descVi: "Chạy help của subcommand ak dự định dùng trước; với việc read-only có script thì ưu tiên JSON envelope có version khi có." },
    { number: 4, titleEn: "Confirm scope", titleVi: "Xác nhận scope", descEn: "Determine whether the command acts on project files, user/global homes, kit source, adapter delivery mode, or runtime support.", descVi: "Xác định lệnh tác động lên file project, home user/global, nguồn kit, chế độ adapter delivery hay runtime support." },
    { number: 5, titleEn: "Prefer preview", titleVi: "Ưu tiên xem trước", descEn: "Before lifecycle mutation, run status, doctor, list, validate, verify, backups list, diagnostics export, or another read-only preview path.", descVi: "Trước khi mutate lifecycle, chạy status, doctor, list, validate, verify, backups list, diagnostics export hoặc đường read-only xem trước tương ứng." },
    { number: 6, titleEn: "Snapshot risk", titleVi: "Chụp trạng thái rủi ro", descEn: "Before recover, backups restore, uninstall, or fresh operations, create or confirm a current backup so the mutation is reversible.", descVi: "Trước recover, backups restore, uninstall hoặc thao tác fresh, tạo hoặc xác nhận backup hiện tại để còn đảo ngược được." },
    { number: 7, titleEn: "Execute narrowly", titleVi: "Chạy hẹp phạm vi", descEn: "Run only the confirmed command, preserve unknown files, avoid destructive resets, and never treat stale command-reference data as authoritative.", descVi: "Chỉ chạy lệnh đã xác nhận, giữ file lạ, tránh reset phá hủy và không coi command-reference cũ là nguồn thẩm quyền." },
    { number: 8, titleEn: "Report result", titleVi: "Báo kết quả", descEn: "Name the exact command, scope, JSON envelope when relevant, disk changes, skipped conflicts, and unresolved constraints.", descVi: "Nêu lệnh chính xác, scope, JSON envelope khi liên quan, thay đổi trên disk, conflict đã bỏ qua và ràng buộc còn tồn tại." },
  ],
  corePrinciplesEn: [
    "This skill owns safe operation of the ak binary, not generic AgentKit routing.",
    "Installed binary help and JSON output outrank generated command references.",
    "Mutating lifecycle actions require scope clarity, previews, backups, and explicit human gates.",
    "Preserve unknown user files; surface conflicts instead of forcing resets.",
  ],
  corePrinciplesVi: [
    "Skill này phụ trách vận hành an toàn binary ak, không phải routing AgentKit chung.",
    "Help và JSON output của binary đang cài có thẩm quyền hơn command reference được generate.",
    "Hành động lifecycle có mutate cần rõ scope, có preview, backup và cổng xác nhận của người dùng.",
    "Giữ file lạ của người dùng; nêu conflict thay vì ép reset.",
  ],
  expertiseAreasEn: ["ak subcommands", "Mutation safety", "Project vs global scope", "Backups and recovery", "JSON output interpretation", "Runtime support checks"],
  expertiseAreasVi: ["Subcommand ak", "An toàn khi mutate", "Scope project và global", "Backup và recovery", "Diễn giải JSON output", "Kiểm tra runtime support"],
  promptExamples: [
    { labelEn: "Diagnose install", labelVi: "Chẩn đoán install", command: "/ak:ak doctor", whenEn: "You need to run or interpret an AgentKit diagnostic command.", whenVi: "Khi cần chạy hoặc diễn giải lệnh chẩn đoán của AgentKit.", expectedEn: "Safe command triage, live help inspection, explicit scope naming, and plain result interpretation for the chosen kit command.", expectedVi: "Phân loại lệnh an toàn, xem help, nêu scope và diễn giải kết quả.", recommended: true },
    { labelEn: "Validate a kit", labelVi: "Validate kit", command: "/ak:ak kit validate", whenEn: "A kit lifecycle action needs read-only validation before any mutation.", whenVi: "Khi một thao tác lifecycle của kit cần validate read-only trước mọi thay đổi.", expectedEn: "A preview-first CLI path with detected conflicts, lifecycle constraints, and next required confirmations reported plainly.", expectedVi: "Đường CLI ưu tiên xem trước, báo rõ conflict và ràng buộc." },
  ],
};

export default data;
