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
  invocation: {
    syntax: '/ak:ak [goal or subcommand]',
    arguments: [
      {
        token: '[goal or subcommand]',
        titleEn: 'Goal or ak subcommand',
        titleVi: 'Mục tiêu hoặc subcommand ak',
        descEn:
          'Natural-language request or exact ak subcommand to run, inspect, or interpret. Include the intended project or user/global scope when relevant; this does not author skills or route generic work.',
        descVi:
          'Yêu cầu bằng ngôn ngữ tự nhiên hoặc subcommand ak cụ thể cần chạy, kiểm tra hoặc diễn giải. Nêu scope dự án hoặc user/global khi liên quan; mục này không dùng để viết skill hay định tuyến việc chung.',
        required: true,
        exampleCommand: '/ak:ak "inspect ak kit list-kits as a read-only JSON command"',
      },
    ],
  },
  promptExamples: [
    { labelEn: 'Inspect installed kits', labelVi: 'Kiểm tra kit đã cài', command: '/ak:ak "run ak kit list-kits as a read-only JSON inspection"', whenEn: 'Use when the next action is inventorying installed kits or interpreting parseable ak output.', whenVi: 'Dùng khi bước tiếp theo là kiểm kê kit đã cài hoặc diễn giải output ak parse được.', expectedEn: 'Inspects ak kit help, classifies list-kits as read-only, uses --json --no-interactive when scripted, and explains schema_version, kind, and data.', expectedVi: 'Inspect help của ak kit, phân loại list-kits là chỉ đọc, dùng --json --no-interactive khi script và giải thích schema_version, kind, data.', recommended: true },
    { labelEn: 'Prepare a kit refresh', labelVi: 'Chuẩn bị refresh kit', command: '/ak:ak "prepare ak kit refresh for engineer after validating scope"', whenEn: 'Use before a mutating kit lifecycle command so scope and read-only checks are explicit.', whenVi: 'Dùng trước lệnh vòng đời kit có mutation để scope và bước kiểm tra chỉ đọc được nêu rõ.', expectedEn: 'Runs the read-only doctor/list-kits/validate path first, resolves project versus user/global scope, and keeps confirmations unless the user explicitly approves suppression.', expectedVi: 'Chạy trước đường doctor/list-kits/validate chỉ đọc, xác định scope project hay user/global và giữ xác nhận trừ khi người dùng duyệt tắt rõ ràng.' },
    { labelEn: 'Recover safely', labelVi: 'Phục hồi an toàn', command: '/ak:ak "recover this project AgentKit install safely"', whenEn: 'Use when recovery or backup restoration is requested and backup/scope discipline is mandatory.', whenVi: 'Dùng khi cần recover hoặc restore backup và bắt buộc giữ kỷ luật backup/scope.', expectedEn: 'Checks recover help, confirms the target scope, verifies or creates a current backup before mutation, previews conflicts, and reports exactly what changed.', expectedVi: 'Kiểm tra help của recover, xác nhận scope đích, xác minh hoặc tạo backup hiện thời trước mutation, preview conflict và báo chính xác phần đã đổi.' },
  ],
  guardrails: [
    { thoughtEn: 'The generated reference listed the flag, so it is safe.', thoughtVi: 'Tài liệu sinh ra có liệt kê cờ nên an toàn.', realityEn: 'The installed binary help is current; references may lag after self-update.', realityVi: 'Help của binary đang cài mới là hiện hành; tài liệu tham chiếu có thể chậm sau self-update.', accent: 'amber' },
    { thoughtEn: 'Use --yes to make automation smoother.', thoughtVi: 'Dùng --yes cho tự động hóa mượt hơn.', realityEn: 'On mutating commands, suppressing prompts needs explicit user approval.', realityVi: 'Với lệnh thay đổi trạng thái, tắt prompt cần người dùng duyệt rõ.', accent: 'red' },
    { thoughtEn: 'Recovery can be rerun if it fails.', thoughtVi: 'Recover lỗi thì chạy lại được.', realityEn: 'Recovery is unsafe without a fresh backup and confirmed scope.', realityVi: 'Recover không an toàn nếu thiếu backup mới và scope đã xác nhận.', accent: 'red' },
  ],
};

export default data;
