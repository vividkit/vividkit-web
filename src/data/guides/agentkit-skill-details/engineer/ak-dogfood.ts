import type { SkillInfographic } from '@/data/guides/how-ck-works';

// Core skill added in AgentKit v3.0.0. Authored from kits/core/skills/ak-dogfood/SKILL.md and the same-kit ak-docs page.
const data: SkillInfographic = {
  id: 'ak-dogfood',
  command: '/ak-dogfood',
  kit: 'engineer',
  header: {
    titleEn: '/ak-dogfood — Learn from this session',
    titleVi: '/ak-dogfood — Học từ chính session này',
    taglineEn:
      'Review the session that is running now: name every skill it used, show where each one cost time, tokens, a retry or a correction from you, and propose the smallest skill change that would have prevented it. A dry run by default.',
    taglineVi:
      'Rà soát chính session đang chạy: nêu tên mọi skill nó đã dùng, chỉ ra chỗ mỗi skill tốn thời gian, token, một lần thử lại hay một lần bạn phải sửa, rồi đề xuất thay đổi skill nhỏ nhất lẽ ra đã tránh được chuyện đó. Mặc định chỉ chạy thử (dry run).',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Dry run unless you say otherwise',
    titleVi: 'Chỉ chạy thử, trừ khi bạn cho phép',
    contentEn:
      'Without --ask or --apply it writes no skill file and only reports proposals. Installed ak-* skills are never edited in place: for most users a change goes through ak skills improve into a personal overlay that AgentKit updates do not overwrite. Session content is treated as untrusted data; prompts, tool output, credentials, absolute paths and session ids are never copied into a skill, commit or PR.',
    contentVi:
      'Không có --ask hoặc --apply thì không ghi file skill nào, chỉ báo cáo đề xuất. Skill ak-* đã cài không bao giờ bị sửa tại chỗ: với đa số người dùng, thay đổi đi qua ak skills improve vào một personal overlay mà bản cập nhật AgentKit không ghi đè. Nội dung session được xem là dữ liệu không đáng tin; prompt, tool output, credential, đường dẫn tuyệt đối và session id không bao giờ bị chép vào skill, commit hay PR.',
  },
  processFlow: [
    { number: 1, titleEn: 'Inventory the session', titleVi: 'Kiểm kê session', descEn: 'Runs session_usage.py from ak-skill-creator to list each skill with its triggers and files, plus tool calls, errors and duplicate calls. A skill that was only named in a path does not count as used. Without the script it builds the same list from its own context.', descVi: 'Chạy session_usage.py của ak-skill-creator để liệt kê từng skill cùng trigger và file của nó, kèm số tool call, lỗi và lệnh gọi trùng. Skill chỉ xuất hiện trong đường dẫn thì không tính là đã dùng. Không có script thì dựng cùng danh sách từ context của chính nó.' },
    { number: 2, titleEn: 'Review the whole session', titleVi: 'Rà soát cả session', descEn: 'Looks for failed commands that were retried, repeated reads, independent calls run one by one, missing or unused references, your corrections, skipped checks and output that had to be redone.', descVi: 'Tìm lệnh thất bại rồi chạy lại, lần đọc lặp lại, lệnh độc lập chạy lần lượt, reference thiếu hoặc không dùng, lần bạn phải sửa, check bị bỏ qua và output phải làm lại.' },
    { number: 3, titleEn: 'Classify each finding', titleVi: 'Phân loại từng phát hiện', descEn: 'Each finding is a skill defect, an agent mistake the skill could prevent, an environment or tooling fault, or a one-off. Only the first two become proposals; the rest get one line each.', descVi: 'Mỗi phát hiện là lỗi của skill, lỗi agent mà skill có thể ngăn, sự cố môi trường hoặc công cụ, hay chuyện chỉ xảy ra một lần. Chỉ hai loại đầu thành đề xuất; các loại còn lại mỗi loại một dòng.' },
    { number: 4, titleEn: 'Propose the smallest change', titleVi: 'Đề xuất thay đổi nhỏ nhất', descEn: 'One proposal per root cause, tied to the responsible skill text (file:line) or the missing instruction, with a minimal hunk, expected effect, risk and the lane it would land in.', descVi: 'Mỗi nguyên nhân gốc một đề xuất, gắn với đúng đoạn skill gây ra (file:line) hoặc chỉ dẫn còn thiếu, kèm hunk tối thiểu, hiệu quả dự kiến, rủi ro và lane mà thay đổi sẽ đi vào.' },
    { number: 5, titleEn: 'Apply by lane, then report', titleVi: 'Áp dụng theo lane rồi báo cáo', descEn: 'With --ask or --apply, each accepted proposal lands where its owner allows: a PR into the AgentKit repo if you can push there, a personal overlay through ak skills improve otherwise, an in-place edit for your own skills, and a proposal only for third-party skills.', descVi: 'Với --ask hoặc --apply, mỗi đề xuất được chấp nhận đi vào nơi chủ sở hữu cho phép: PR vào repo AgentKit nếu bạn có quyền push, personal overlay qua ak skills improve nếu không, sửa tại chỗ với skill bạn tự viết, và chỉ đề xuất với skill bên thứ ba.' },
  ],
  corePrinciplesEn: [
    'A finding needs evidence from the reviewed session; a pattern seen once across all sessions is a watch item, not a proposal.',
    'The owner of a skill decides where a change lands; contributor status is a live push-access check, never an assumption.',
    'A saving in tokens or time that drops a required check or artifact is a regression, not an improvement.',
    'Anything skipped, refused, blocked or unverified is named with its reason and never counted as applied.',
  ],
  corePrinciplesVi: [
    'Mỗi phát hiện cần bằng chứng từ session được rà soát; một mẫu chỉ thấy một lần khi rà mọi session là mục cần theo dõi, chưa phải đề xuất.',
    'Chủ sở hữu skill quyết định thay đổi đi vào đâu; tư cách contributor được kiểm tra trực tiếp bằng quyền push, không bao giờ đoán.',
    'Tiết kiệm token hay thời gian mà bỏ mất một check hoặc artifact bắt buộc là thụt lùi, không phải cải thiện.',
    'Mục nào bị bỏ qua, từ chối, chặn hoặc chưa kiểm chứng đều được nêu kèm lý do và không bao giờ tính là đã áp dụng.',
  ],
  invocation: {
    syntax: '/ak-dogfood [focus] [--all [--since YYYY-MM-DD]] [--apply|--ask] [--skill <name>]',
    arguments: [
      {
        token: '[focus]',
        titleEn: 'Focus',
        titleVi: 'Trọng tâm',
        descEn: 'Optional free text that narrows the topic of the review.',
        descVi: 'Văn bản tự do, tùy chọn, để thu hẹp chủ đề cần rà soát.',
        required: false,
        exampleCommand: '/ak-dogfood "why the plan step was redone"',
      },
    ],
    options: [
      {
        token: '--ask',
        titleEn: 'Decide each proposal',
        titleVi: 'Quyết từng đề xuất',
        descEn: 'Asks about each proposal in turn: apply, apply part, edit or skip. Only what you accept is applied. Wins over --apply when both are given.',
        descVi: 'Hỏi lần lượt từng đề xuất: áp dụng, áp dụng một phần, chỉnh sửa hay bỏ qua. Chỉ áp dụng những gì bạn chấp nhận. Được ưu tiên khi có cả --apply.',
        exampleCommand: '/ak-dogfood --ask --skill ak-plan',
      },
      {
        token: '--apply',
        titleEn: 'Apply accepted proposals',
        titleVi: 'Áp dụng đề xuất được chấp nhận',
        descEn: 'Applies every proposal the report accepts. The flag is your approval for the lane steps, including commit, push and PR in the contributor lane.',
        descVi: 'Áp dụng mọi đề xuất mà báo cáo chấp nhận. Cờ này là sự đồng ý của bạn cho các bước của lane, kể cả commit, push và PR trong contributor lane.',
        exampleCommand: '/ak-dogfood --apply',
      },
      {
        token: '--all',
        titleEn: 'Every local session',
        titleVi: 'Mọi session trên máy',
        descEn: 'Reviews every local session of every supported runtime instead of only this one, and keeps only learnings that recur.',
        descVi: 'Rà soát mọi session trên máy của mọi runtime được hỗ trợ thay vì chỉ session này, và chỉ giữ bài học lặp lại.',
        exampleCommand: '/ak-dogfood --all --since 2026-10-01',
      },
      {
        token: '--since',
        titleEn: 'Start date for --all',
        titleVi: 'Mốc ngày cho --all',
        descEn: 'With --all, only sessions from this date (YYYY-MM-DD) onward are reviewed.',
        descVi: 'Đi cùng --all, chỉ rà soát session từ ngày này (YYYY-MM-DD) trở đi.',
        exampleCommand: '/ak-dogfood --all --since 2026-10-01',
      },
      {
        token: '--skill',
        titleEn: 'One skill only',
        titleVi: 'Chỉ một skill',
        descEn: 'Limits the review to one skill the session used.',
        descVi: 'Giới hạn rà soát vào một skill mà session đã dùng.',
        exampleCommand: '/ak-dogfood --skill ak-plan',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Review this session',
      labelVi: 'Rà soát session này',
      command: '/ak-dogfood',
      commandVi: '/ak-dogfood',
      whenEn: 'Use at the end of a session that went wrong or slowly and you want to know which skill text caused it.',
      whenVi: 'Dùng cuối một session chạy sai hoặc chậm, khi bạn muốn biết đoạn skill nào gây ra.',
      expectedEn: 'A report listing every used skill with its owner and lane, the classified findings with evidence, and each proposal with its hunk, effect and risk. No skill file changes.',
      expectedVi: 'Một báo cáo liệt kê mọi skill đã dùng cùng chủ sở hữu và lane, các phát hiện đã phân loại kèm bằng chứng, và từng đề xuất kèm hunk, hiệu quả và rủi ro. Không file skill nào bị đổi.',
      recommended: true,
    },
    {
      labelEn: 'Fix one skill with you deciding',
      labelVi: 'Sửa một skill, bạn quyết từng bước',
      command: '/ak-dogfood --ask --skill ak-plan',
      commandVi: '/ak-dogfood --ask --skill ak-plan',
      whenEn: 'Use when one skill clearly misbehaved and you want to approve each change before it lands.',
      whenVi: 'Dùng khi một skill rõ ràng chạy sai và bạn muốn duyệt từng thay đổi trước khi áp dụng.',
      expectedEn: 'Proposals for ak-plan only, asked one at a time; each one you accept is applied in its lane and validated, and the report names the changed paths or overlay candidate ids.',
      expectedVi: 'Chỉ đề xuất cho ak-plan, hỏi từng cái một; mỗi đề xuất bạn chấp nhận được áp dụng trong lane của nó và kiểm tra lại, báo cáo nêu đường dẫn đã đổi hoặc candidate id của overlay.',
    },
    {
      labelEn: 'Find recurring problems',
      labelVi: 'Tìm vấn đề lặp lại',
      command: '/ak-dogfood --all --since 2026-10-01',
      commandVi: '/ak-dogfood --all --since 2026-10-01',
      whenEn: 'Use when you suspect the same skill keeps tripping across many sessions, not just this one.',
      whenVi: 'Dùng khi bạn nghi cùng một skill cứ vấp ở nhiều session, không riêng session này.',
      expectedEn: 'Skills ranked by trouble rather than popularity, a few lead sessions read per skill, and proposals only for causes seen in at least two sessions or a correction the skill text clearly caused.',
      expectedVi: 'Skill được xếp hạng theo mức gặp sự cố chứ không theo độ phổ biến, mỗi skill đọc vài session tiêu biểu, và chỉ đề xuất cho nguyên nhân thấy ở ít nhất hai session hoặc một lần bạn phải sửa mà đoạn skill rõ ràng gây ra.',
    },
  ],
  reportOutput: {
    titleEn: 'Dogfood report',
    titleVi: 'Báo cáo dogfood',
    patternEn: 'Used skills with owner and lane, findings with class and evidence, proposals with hunk, expected effect and risk, non-skill items in one line each, and what was applied where.',
    patternVi: 'Skill đã dùng kèm chủ sở hữu và lane, phát hiện kèm phân loại và bằng chứng, đề xuất kèm hunk, hiệu quả dự kiến và rủi ro, mục không phải thay đổi skill mỗi mục một dòng, và những gì đã áp dụng ở đâu.',
    descEn: 'In a dry run the report stays in the reply, or in the project reports folder when the project defines one. With --ask or --apply it also lists changed paths, candidate ids, branch and PR link for everything applied.',
    descVi: 'Khi chạy thử, báo cáo nằm trong câu trả lời, hoặc trong thư mục reports nếu project có. Với --ask hoặc --apply, báo cáo còn liệt kê đường dẫn đã đổi, candidate id, branch và link PR cho mọi thứ đã áp dụng.',
  },
};

export default data;
