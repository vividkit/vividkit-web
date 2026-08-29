import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-ak',
  command: '/ak:ak',
  kit: 'engineer',
  header: {
    titleEn: '/ak:ak — Safe AgentKit CLI operation',
    titleVi: '/ak:ak — Vận hành CLI AgentKit an toàn',
    taglineEn:
      'Guides safe use of the ak control-plane CLI for init, kit, skills, plan, journal, doctor, recover, self-update, login, scope decisions, lifecycle mutations, and JSON output interpretation.',
    taglineVi:
      'Hướng dẫn dùng an toàn CLI điều khiển ak cho init, kit, skills, plan, journal, doctor, recover, self-update, login, quyết định scope, thao tác vòng đời và diễn giải output JSON.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Inspect, scope, and preserve before mutating',
    titleVi: 'Phải kiểm tra, chốt scope và bảo toàn trước khi thay đổi',
    contentEn:
      'Run help before acting, never pass --no-interactive or --yes to mutating commands without explicit approval, snapshot before recovery/uninstall/fresh operations, and never combine --force with --fresh.',
    contentVi:
      'Chạy help trước khi làm, không dùng --no-interactive hoặc --yes cho lệnh thay đổi nếu chưa được duyệt rõ, tạo snapshot trước recover/uninstall/fresh và không bao giờ ghép --force với --fresh.',
  },
  processFlow: [
    { number: 1, titleEn: 'Triage intent', titleVi: 'Phân loại ý định', descEn: 'Classify the requested ak action as read-only, mutating, or diagnostic before selecting a command family.', descVi: 'Phân loại hành động ak được yêu cầu là chỉ đọc, thay đổi trạng thái hoặc chẩn đoán trước khi chọn nhóm lệnh.' },
    { number: 2, titleEn: 'Inspect help', titleVi: 'Đọc help', descEn: 'Run ak <cmd> --help for the installed binary; command-reference is only a starting index that may lag.', descVi: 'Chạy ak <cmd> --help trên binary đang cài; command-reference chỉ là chỉ mục ban đầu và có thể chậm phiên bản.' },
    { number: 3, titleEn: 'Use parseable reads', titleVi: 'Dùng output đọc được bằng máy', descEn: 'For read-only scripted work, prefer --json --no-interactive and parse schema_version, kind, and data instead of scraping prose.', descVi: 'Với việc script chỉ đọc, ưu tiên --json --no-interactive và parse schema_version, kind, data thay vì cào văn bản.' },
    { number: 4, titleEn: 'Confirm scope', titleVi: 'Xác nhận phạm vi', descEn: 'Decide whether the command acts on project state, user/global adapter homes, kit install source, or runtime delivery mode.', descVi: 'Chốt lệnh tác động tới trạng thái dự án, home adapter user/global, nguồn cài kit hay chế độ phân phối runtime.' },
    { number: 5, titleEn: 'Prefer status first', titleVi: 'Ưu tiên kiểm tra trước', descEn: 'Before update, refresh, uninstall, recover, or self-update, run the corresponding doctor, validate, list, verify, backups, versions, or changelog path.', descVi: 'Trước update, refresh, uninstall, recover hoặc self-update, chạy đường doctor, validate, list, verify, backups, versions hoặc changelog tương ứng.' },
    { number: 6, titleEn: 'Protect state', titleVi: 'Bảo vệ trạng thái', descEn: 'Preserve unknown files, avoid destructive resets, snapshot before recovery, and run smoke tests only in temp homes with all adapter paths redirected.', descVi: 'Giữ nguyên file lạ, tránh reset phá hủy, tạo snapshot trước phục hồi và chỉ smoke test trong home tạm với mọi đường dẫn adapter được chuyển hướng.' },
    { number: 7, titleEn: 'Report exactly', titleVi: 'Báo cáo chính xác', descEn: 'Return the exact command, resolved scope, JSON envelope when relevant, disk changes, conflicts skipped, and unresolved constraints.', descVi: 'Trả lệnh chính xác, scope đã xác định, JSON envelope khi liên quan, thay đổi trên đĩa, xung đột đã bỏ qua và ràng buộc chưa giải quyết.' },
  ],
  corePrinciplesEn: [
    'ak:ak runs the ak binary safely; ak:agentkit decides which skill should run.',
    'Authoritative order is ak <cmd> --help, then ak <cmd> --json, then generated command-reference.',
    'Read-only inspection precedes lifecycle mutation.',
    'Project scope and user/global scope must never be blurred.',
  ],
  corePrinciplesVi: [
    'ak:ak vận hành binary ak an toàn; ak:agentkit mới quyết định skill nào nên chạy.',
    'Thứ tự nguồn thẩm quyền là ak <cmd> --help, rồi ak <cmd> --json, rồi command-reference sinh tự động.',
    'Luôn kiểm tra chỉ đọc trước khi thao tác vòng đời có thay đổi.',
    'Không được nhập nhằng giữa scope dự án và scope user/global.',
  ],
  expertiseAreasEn: ['Kit lifecycle', 'Skill inventory', 'Plan and journal CLI', 'Diagnostics and recovery', 'Scope and adapter safety'],
  expertiseAreasVi: ['Vòng đời kit', 'Kiểm kê skill', 'CLI plan và journal', 'Chẩn đoán và phục hồi', 'An toàn scope và adapter'],
  promptExamples: [
    { labelEn: 'Inspect installed kits', labelVi: 'Kiểm tra kit đã cài', command: '/ak:ak "inspect ak kit list-kits with JSON output"', whenEn: 'Use for read-only inventory and parseable output interpretation.', whenVi: 'Dùng để kiểm kê chỉ đọc và diễn giải output dễ parse.', expectedEn: 'Inspects help, chooses the read-only command, uses JSON when appropriate, and explains the envelope.', expectedVi: 'Đọc help, chọn lệnh chỉ đọc, dùng JSON khi phù hợp và giải thích envelope.', recommended: true },
    { labelEn: 'Prepare a refresh', labelVi: 'Chuẩn bị refresh', command: '/ak:ak "refresh the engineer kit after validating scope"', whenEn: 'Use when the next action is a mutating kit lifecycle command.', whenVi: 'Dùng khi bước tiếp theo là lệnh vòng đời kit có thay đổi.', expectedEn: 'Runs status/validate paths first and asks for the needed human gate before suppressing confirmations.', expectedVi: 'Chạy status/validate trước và yêu cầu gate người dùng cần thiết trước khi tắt xác nhận.' },
    { labelEn: 'Recover safely', labelVi: 'Phục hồi an toàn', command: '/ak:ak "recover this project AgentKit install"', whenEn: 'Use when recovery is requested and backup/scope discipline is mandatory.', whenVi: 'Dùng khi cần phục hồi và bắt buộc tuân thủ backup/scope.', expectedEn: 'Confirms a current backup or creates one before invoking recovery operations.', expectedVi: 'Xác nhận backup hiện có hoặc tạo backup trước khi gọi thao tác phục hồi.' },
  ],
  guardrails: [
    { thoughtEn: 'The generated reference listed the flag, so it is safe.', thoughtVi: 'Tài liệu sinh ra có liệt kê cờ nên an toàn.', realityEn: 'The installed binary help is current; references may lag after self-update.', realityVi: 'Help của binary đang cài mới là hiện hành; tài liệu tham chiếu có thể chậm sau self-update.', accent: 'amber' },
    { thoughtEn: 'Use --yes to make automation smoother.', thoughtVi: 'Dùng --yes cho tự động hóa mượt hơn.', realityEn: 'On mutating commands, suppressing prompts needs explicit user approval.', realityVi: 'Với lệnh thay đổi trạng thái, tắt prompt cần người dùng duyệt rõ.', accent: 'red' },
    { thoughtEn: 'Recovery can be rerun if it fails.', thoughtVi: 'Recover lỗi thì chạy lại được.', realityEn: 'Recovery is unsafe without a fresh backup and confirmed scope.', realityVi: 'Recover không an toàn nếu thiếu backup mới và scope đã xác nhận.', accent: 'red' },
  ],
};

export default data;
