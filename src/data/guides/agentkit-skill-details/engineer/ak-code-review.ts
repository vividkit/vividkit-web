import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-code-review',
  command: '/ak:code-review',
  kit: 'engineer',
  header: {
    titleEn: '/ak:code-review — Production-readiness code review',
    titleVi: '/ak:code-review — Rà soát sẵn sàng production',
    taglineEn: 'Evidence-based production-readiness review for diffs, PRs, commits, pending changes, and full codebases.',
    taglineVi: 'Rà soát mức sẵn sàng production dựa trên bằng chứng cho diff, PR, commit, thay đổi pending và toàn bộ codebase.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'No rubber stamp, no claim without verification',
    titleVi: 'Không đóng dấu qua loa, không kết luận khi chưa kiểm chứng',
    contentEn: 'Resolve the exact review target first. Critical findings block merge until fixed and re-verified; --ultra hard-conflicts with codebase parallel.',
    contentVi: 'Trước hết phải xác định chính xác đối tượng review. Lỗi Critical chặn merge cho tới khi sửa và kiểm chứng lại; --ultra xung đột cứng với codebase parallel.',
  },
  processFlow: [
    { number: 1, titleEn: 'Resolve target', titleVi: 'Chốt đối tượng', descEn: 'Auto-detect PR, commit, --pending, codebase, codebase parallel, or recent changes; ask only if ambiguous.', descVi: 'Tự nhận PR, commit, --pending, codebase, codebase parallel hoặc thay đổi gần đây; chỉ hỏi khi mơ hồ.' },
    { number: 2, titleEn: 'Fetch evidence', titleVi: 'Lấy bằng chứng', descEn: 'Collect the concrete diff or scan scope with SHAs, PR diff, git show, staged/unstaged diff, or codebase evidence.', descVi: 'Thu diff hoặc phạm vi quét cụ thể bằng SHA, diff PR, git show, staged/unstaged diff hoặc bằng chứng codebase.' },
    { number: 3, titleEn: 'Spec compliance', titleVi: 'Đối chiếu yêu cầu', descEn: 'Stage 1 checks whether the implementation matches the request, misses requirements, or adds unjustified scope.', descVi: 'Giai đoạn 1 kiểm tra mã có đúng yêu cầu, thiếu yêu cầu hay thêm phạm vi vô căn cứ không.' },
    { number: 4, titleEn: 'Scout edge cases', titleVi: 'Tìm ca biên', descEn: 'Before quality review, scout affected files, data flows, error paths, and boundary conditions.', descVi: 'Trước review chất lượng, rà các file bị ảnh hưởng, luồng dữ liệu, đường lỗi và điều kiện biên.' },
    { number: 5, titleEn: 'Quality review', titleVi: 'Review chất lượng', descEn: 'Run code-reviewer on standards, security, performance, maintainability, regression paths, and verification gaps.', descVi: 'Dùng code-reviewer kiểm chuẩn mã, bảo mật, hiệu năng, khả năng bảo trì, đường hồi quy và thiếu kiểm chứng.' },
    { number: 6, titleEn: 'Ultra union', titleVi: 'Hợp nhất ultra', descEn: 'With --ultra, fan Stage 2 to five read-only reviewers and evidence-validate the deduplicated union of confirmed findings.', descVi: 'Với --ultra, tách Giai đoạn 2 cho năm reviewer chỉ đọc rồi xác minh bằng chứng để hợp nhất các phát hiện trùng lặp.' },
    { number: 7, titleEn: 'Fix or escalate', titleVi: 'Sửa hoặc báo lên', descEn: 'Fix Critical immediately and Important before proceeding; question requested scope only with concrete evidence.', descVi: 'Sửa Critical ngay và Important trước khi đi tiếp; chỉ chất vấn phạm vi người dùng yêu cầu khi có bằng chứng cụ thể.' },
    { number: 8, titleEn: 'Final verify', titleVi: 'Kiểm chứng cuối', descEn: 'Run the relevant test, build, lint, or manual reproduction, read the output, and only then make completion claims.', descVi: 'Chạy test, build, lint hoặc tái hiện thủ công phù hợp, đọc kết quả rồi mới được kết luận hoàn tất.' },
  ],
  corePrinciplesEn: ['KISS and DRY always.', 'Requested scope is a constraint, not automatically a finding.', 'Evidence before claims; verify before implementing feedback.', 'Assume polished AI-assisted code can still hide defects.'],
  corePrinciplesVi: ['Luôn giữ KISS và DRY.', 'Phạm vi đã yêu cầu là ràng buộc, không tự động là lỗi.', 'Có bằng chứng trước khi kết luận; kiểm chứng trước khi làm theo feedback.', 'Xem mã AI viết dù trông bóng bẩy vẫn có thể giấu lỗi.'],
  workflowModes: [
    { flag: '#PR or URL', modeEn: 'PR review', modeVi: 'Review PR', research: 'Fetch full PR diff', redTeam: 'Spec + quality review', validation: 'Relevant checks before verdict' },
    { flag: 'COMMIT', modeEn: 'Commit review', modeVi: 'Review commit', research: 'git show one commit', redTeam: 'Regression and scope review', validation: 'Verify accepted fixes' },
    { flag: '--pending', modeEn: 'Pending changes', modeVi: 'Thay đổi pending', research: 'Staged + unstaged diff', redTeam: 'Local defect scan', validation: 'Fresh local evidence' },
    { flag: 'codebase parallel', modeEn: 'Parallel audit', modeVi: 'Audit song song', research: 'Codebase scan packet', redTeam: 'Scoped reviewers per area', validation: 'Merged confirmed findings' },
  ],
  promptExamples: [
    { labelEn: 'Pending diff', labelVi: 'Diff đang làm', command: '/ak:code-review --pending', whenEn: 'Review staged and unstaged work before completion.', whenVi: 'Review phần staged và unstaged trước khi kết luận hoàn tất.', expectedEn: 'Resolved diff, spec pass, quality findings, and verification gate.', expectedVi: 'Diff đã chốt, kiểm yêu cầu, phát hiện chất lượng và cổng kiểm chứng.', recommended: true },
    { labelEn: 'PR review', labelVi: 'Review PR', command: '/ak:code-review #123', whenEn: 'Review a GitHub pull request by number.', whenVi: 'Review một pull request GitHub theo số.', expectedEn: 'Full PR diff review with evidence-backed findings.', expectedVi: 'Review toàn bộ diff PR với phát hiện có bằng chứng.' },
    { labelEn: 'Best-of-5 verifier', labelVi: 'Verifier năm lượt', command: '/ak:code-review --pending --ultra', whenEn: 'High-risk review where multiple independent read-only quality passes are worth the cost.', whenVi: 'Khi review rủi ro cao đáng chạy nhiều lượt chỉ đọc độc lập.', expectedEn: 'Five Stage 2 candidates and a validated union of confirmed issues.', expectedVi: 'Năm ứng viên Giai đoạn 2 và hợp nhất các lỗi đã xác minh.' },
    { labelEn: 'YAGNI scope cut', labelVi: 'Cắt scope kiểu YAGNI', command: '/ak:code-review --pending --yagni', whenEn: 'You explicitly want unnecessary requested scope challenged.', whenVi: 'Khi bạn muốn chất vấn cả phần scope đã yêu cầu nhưng không cần thiết.', expectedEn: 'Spec review plus concrete cost evidence for unneeded scope.', expectedVi: 'Review yêu cầu kèm bằng chứng chi phí cụ thể cho phần scope không cần.' },
  ],
  outputFlags: [
    { flag: '--pending', titleEn: 'Pending changes', titleVi: 'Thay đổi pending', descEn: 'Review staged and unstaged local changes.', descVi: 'Review các thay đổi local đã staged và chưa staged.', exampleCommand: '/ak:code-review --pending' },
    { flag: '--ultra', titleEn: 'Best-of-5 verifier', titleVi: 'Verifier năm lượt', descEn: 'Run Stage 2 through five independent read-only reviewers, then validate the union of findings.', descVi: 'Chạy Giai đoạn 2 qua năm reviewer chỉ đọc độc lập rồi xác minh phần hợp nhất phát hiện.', exampleCommand: '/ak:code-review --pending --ultra' },
    { flag: '--advice', titleEn: 'Advisory supervision', titleVi: 'Giám sát cố vấn', descEn: 'Bring in kongming at review checkpoints, stuck points, and high-stakes verdicts.', descVi: 'Gọi kongming tại các checkpoint review, khi bị kẹt và trước nhận định rủi ro cao.', exampleCommand: '/ak:code-review --pending --advice' },
    { flag: '--yagni', titleEn: 'YAGNI review', titleVi: 'Review YAGNI', descEn: 'Include scope-cut findings for unneeded requested work with concrete evidence.', descVi: 'Cho phép nêu phát hiện cắt bớt scope đã yêu cầu nếu có bằng chứng chi phí cụ thể.', exampleCommand: '/ak:code-review --pending --yagni' },
  ],
  skillStack: [{ name: 'ak:scout', type: 'skill' }, { name: 'code-reviewer', type: 'agent' }, { name: 'kongming', type: 'agent' }, { name: 'ak-ship', type: 'skill' }],
};

export default data;
