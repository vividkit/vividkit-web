import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-code-review',
  command: '/ak:code-review',
  kit: 'engineer',
  header: {
    titleEn: '/ak:code-review — Evidence-backed code review',
    titleVi: '/ak:code-review — Rà soát mã dựa trên bằng chứng',
    taglineEn: 'Production-risk review for pending diffs, pull requests, commits, recent context, and codebase scans.',
    taglineVi: 'Rà soát rủi ro production cho diff pending, pull request, commit, ngữ cảnh gần đây và quét codebase.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'No completion claim without fresh verification',
    titleVi: 'Không kết luận hoàn tất nếu chưa có kiểm chứng mới',
    contentEn: 'Resolve the exact review target first, cite evidence for findings, and re-run relevant tests, builds, lint, or reproductions before claiming accepted fixes are complete.',
    contentVi: 'Trước hết phải chốt đúng đối tượng review, dẫn bằng chứng cho phát hiện, rồi chạy lại test, build, lint hoặc tái hiện phù hợp trước khi nói lỗi đã nhận là hoàn tất.',
  },
  processFlow: [
    { number: 1, titleEn: 'Resolve target', titleVi: 'Chốt đối tượng', descEn: 'Parse the first matching input: PR number or URL, 7+ char commit hash, --pending, codebase, codebase parallel, or recent context.', descVi: 'Đọc input khớp đầu tiên: số hoặc URL PR, hash commit từ 7 ký tự, --pending, codebase, codebase parallel hoặc ngữ cảnh gần đây.' },
    { number: 2, titleEn: 'Load evidence', titleVi: 'Nạp bằng chứng', descEn: 'Fetch the complete PR diff with gh, commit diff with git show, pending staged plus unstaged diff, or the chosen codebase scope.', descVi: 'Lấy đủ diff PR bằng gh, diff commit bằng git show, diff pending gồm staged và unstaged, hoặc phạm vi codebase đã chọn.' },
    { number: 3, titleEn: 'Spec compliance', titleVi: 'Đối chiếu yêu cầu', descEn: 'When a plan or specification exists, mark every requirement Pass, Missing, or Extra before quality review.', descVi: 'Khi có plan hoặc đặc tả, đánh dấu từng yêu cầu là Pass, Missing hoặc Extra trước khi review chất lượng.' },
    { number: 4, titleEn: 'Scout edge cases', titleVi: 'Tìm ca biên', descEn: 'Use ak:scout to trace affected files, consumers, data flows, error paths, boundary conditions, and regression risks.', descVi: 'Dùng ak:scout để lần file liên quan, nơi tiêu thụ, luồng dữ liệu, đường lỗi, điều kiện biên và rủi ro hồi quy.' },
    { number: 5, titleEn: 'Quality review', titleVi: 'Review chất lượng', descEn: 'Run code-reviewer after spec compliance to check standards, security, performance, maintainability, and verification gaps.', descVi: 'Chạy code-reviewer sau khi đạt đối chiếu yêu cầu để kiểm chuẩn mã, bảo mật, hiệu năng, khả năng bảo trì và thiếu kiểm chứng.' },
    { number: 6, titleEn: 'Checklist overlay', titleVi: 'Bổ sung checklist', descEn: 'For pre-landing, ship, significant, or security-sensitive changes, apply the base checklist and detected web/API overlays.', descVi: 'Với thay đổi trước khi landing, ship, quan trọng hoặc nhạy cảm bảo mật, áp checklist nền và overlay web/API phát hiện được.' },
    { number: 7, titleEn: 'Fix accepted findings', titleVi: 'Sửa phát hiện đã nhận', descEn: 'Fix Critical immediately and Important before proceeding; re-review cycles stop after three rounds and escalate.', descVi: 'Sửa Critical ngay và Important trước khi đi tiếp; vòng re-review dừng sau ba lượt rồi báo lên.' },
    { number: 8, titleEn: 'Final verify', titleVi: 'Kiểm chứng cuối', descEn: 'Run the relevant test, build, lint, or manual reproduction, read the output, and only then make completion claims.', descVi: 'Chạy test, build, lint hoặc tái hiện thủ công phù hợp, đọc kết quả rồi mới được kết luận hoàn tất.' },
  ],
  corePrinciplesEn: ['KISS, DRY, and YAGNI always.', 'Resolved review target before opinions.', 'Evidence before claims; verification before completion.', 'Polished AI-assisted code can still hide defects.'],
  corePrinciplesVi: ['Luôn giữ KISS, DRY và YAGNI.', 'Chốt đối tượng review trước khi nhận xét.', 'Có bằng chứng trước khi kết luận; kiểm chứng trước khi hoàn tất.', 'Mã AI viết dù trông bóng bẩy vẫn có thể giấu lỗi.'],
  workflowModes: [
    { flag: '#PR or URL', modeEn: 'PR review', modeVi: 'Review PR', research: 'gh pr diff full PR', redTeam: 'Spec + quality review', validation: 'Fresh checks before verdict' },
    { flag: 'COMMIT', modeEn: 'Commit review', modeVi: 'Review commit', research: 'git show one commit', redTeam: 'Regression and scope review', validation: 'Verify accepted fixes' },
    { flag: '--pending', modeEn: 'Pending workspace', modeVi: 'Workspace pending', research: 'git diff cached + unstaged', redTeam: 'Local defect scan', validation: 'Fresh local evidence' },
    { flag: 'codebase parallel', modeEn: 'Parallel codebase audit', modeVi: 'Audit codebase song song', research: 'Scout edge-case categories', redTeam: 'Scoped reviewers per area', validation: 'Aggregate and verify findings' },
  ],
  promptExamples: [
    { labelEn: 'Pending workspace', labelVi: 'Workspace pending', command: '/ak:code-review --pending', whenEn: 'Review staged and unstaged local work before claiming it is ready.', whenVi: 'Review phần local đã staged và unstaged trước khi nói đã sẵn sàng.', expectedEn: 'Resolves the pending workspace with status and combined diff, asks for intent if needed, scouts edge cases, reviews quality, and requires fresh verification for accepted fixes.', expectedVi: 'Chốt workspace pending bằng status và diff tổng hợp, hỏi intent nếu cần, tìm ca biên, review chất lượng và yêu cầu kiểm chứng mới cho lỗi đã nhận.', recommended: true },
    { labelEn: 'Pull request', labelVi: 'Pull request', command: '/ak:code-review #123', whenEn: 'Review a GitHub pull request by number using authenticated gh access.', whenVi: 'Review một pull request GitHub theo số bằng gh đã xác thực.', expectedEn: 'Fetches PR metadata, changed files, and the full PR diff, then separates spec compliance from production-risk quality findings with evidence.', expectedVi: 'Lấy metadata PR, danh sách file đổi và full diff PR, rồi tách đối chiếu yêu cầu khỏi phát hiện rủi ro production có bằng chứng.' },
    { labelEn: 'Commit hash', labelVi: 'Hash commit', command: '/ak:code-review abc1234', whenEn: 'Review one local commit and its parent context before building on it.', whenVi: 'Review một commit local cùng ngữ cảnh parent trước khi phát triển tiếp.', expectedEn: 'Validates the commit, reads its message, changed files, and git show diff, then reviews regressions, scope fit, quality, and verification gaps.', expectedVi: 'Xác thực commit, đọc message, file đổi và diff git show, rồi review hồi quy, độ khớp scope, chất lượng và thiếu kiểm chứng.' },
    { labelEn: 'Parallel codebase audit', labelVi: 'Audit codebase song song', command: '/ak:code-review codebase parallel', whenEn: 'Audit independent codebase areas by first listing edge cases, then assigning reviewer scopes.', whenVi: 'Audit các vùng codebase độc lập bằng cách liệt kê ca biên rồi chia phạm vi reviewer.', expectedEn: 'Identifies edge-case categories, assigns up to six independent code-reviewer scopes, aggregates handled versus unhandled cases, and verifies blocking findings.', expectedVi: 'Xác định nhóm ca biên, chia tối đa sáu phạm vi code-reviewer độc lập, tổng hợp ca đã xử lý/chưa xử lý và xác minh lỗi chặn.' },
  ],
  outputFlags: [
    { flag: '--pending', titleEn: 'Pending workspace', titleVi: 'Workspace pending', descEn: 'Review staged and unstaged local changes against HEAD, including repository status.', descVi: 'Review thay đổi local đã staged và chưa staged so với HEAD, gồm cả trạng thái repo.', exampleCommand: '/ak:code-review --pending' },
    { flag: '#PR or URL', titleEn: 'Pull request', titleVi: 'Pull request', descEn: 'Fetch PR metadata, changed files, and the full diff with gh before reviewing.', descVi: 'Lấy metadata PR, file đổi và full diff bằng gh trước khi review.', exampleCommand: '/ak:code-review #123' },
    { flag: 'COMMIT', titleEn: 'Commit hash', titleVi: 'Hash commit', descEn: 'Validate a 7–40 character hexadecimal commit and review its git show diff.', descVi: 'Xác thực commit hex dài 7–40 ký tự và review diff từ git show.', exampleCommand: '/ak:code-review abc1234' },
    { flag: 'codebase parallel', titleEn: 'Parallel codebase audit', titleVi: 'Audit codebase song song', descEn: 'List edge cases, group up to six independent scopes, and verify them with parallel code-reviewer agents.', descVi: 'Liệt kê ca biên, gom tối đa sáu phạm vi độc lập và xác minh bằng các code-reviewer song song.', exampleCommand: '/ak:code-review codebase parallel' },
  ],
  skillStack: [{ name: 'ak:scout', type: 'skill' }, { name: 'code-reviewer', type: 'agent' }, { name: 'researcher', type: 'agent' }, { name: 'planner', type: 'agent' }],
};

export default data;
