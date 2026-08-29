import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-fix',
  command: '/ak:fix',
  kit: 'marketer',
  header: {
    titleEn: 'Evidence-First Bug Fixing',
    titleVi: 'Sửa lỗi dựa trên bằng chứng',
    taglineEn: 'Routes concrete bugs, errors, test failures, lint issues, UI defects, and CI failures through scout, diagnosis, fix, verification, and prevention.',
    taglineVi: 'Định tuyến lỗi cụ thể, lỗi test, lint, UI và CI qua các bước khảo sát, chẩn đoán, sửa, kiểm chứng và phòng ngừa tái diễn.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Scout and diagnose before fixing',
    titleVi: 'Khảo sát và chẩn đoán trước khi sửa',
    contentEn: 'Do not propose or implement fixes before completing scout and root-cause diagnosis. After 3 failed attempts, stop and question the architecture.',
    contentVi: 'Không được đề xuất hoặc sửa trước khi khảo sát và xác định nguyên nhân gốc. Sau 3 lần sửa thất bại, phải dừng và xét lại kiến trúc.',
  },
  processFlow: [
    { number: 1, titleEn: 'Frame intent', titleVi: 'Đóng khung ý định', descEn: 'Capture outcome, constraints, non-goals, and acceptance criteria before selecting a mode.', descVi: 'Ghi nhận kết quả mong muốn, ràng buộc, phần không làm và tiêu chí hoàn tất trước khi chọn chế độ.' },
    { number: 2, titleEn: 'Select mode', titleVi: 'Chọn chế độ', descEn: 'Use autonomous by default, review for high-risk work, quick for trivial lint or type errors, parallel for independent issues, or ultra for plan selection.', descVi: 'Mặc định dùng tự động, dùng review cho việc rủi ro, quick cho lint hoặc type nhỏ, parallel cho lỗi độc lập, hoặc ultra để chọn kế hoạch sửa.' },
    { number: 3, titleEn: 'Scout context', titleVi: 'Khảo sát bối cảnh', descEn: 'Map project type, symptom files, callers, tests, recent commits, and existing patterns before forming hypotheses.', descVi: 'Lập bản đồ loại dự án, file có triệu chứng, caller, test, commit gần đây và pattern hiện có trước khi đặt giả thuyết.' },
    { number: 4, titleEn: 'Diagnose cause', titleVi: 'Chẩn đoán gốc lỗi', descEn: 'Capture the exact symptom and reproduction, then prove root cause, why now, and blast radius with file evidence.', descVi: 'Ghi lại triệu chứng và cách tái hiện chính xác, rồi chứng minh nguyên nhân gốc, lý do bây giờ mới lộ và phạm vi ảnh hưởng bằng bằng chứng file.' },
    { number: 5, titleEn: 'Assess complexity', titleVi: 'Đánh giá độ phức tạp', descEn: 'Classify simple, moderate, complex, parallel, or ultra, then pick a cause-aligned repair path.', descVi: 'Phân loại đơn giản, vừa, phức tạp, song song hoặc ultra, rồi chọn hướng sửa bám nguyên nhân.' },
    { number: 6, titleEn: 'Implement fix', titleVi: 'Sửa lỗi', descEn: 'Apply minimal source changes that address the root cause while preserving non-goals and existing patterns.', descVi: 'Thay đổi mã tối thiểu để xử lý nguyên nhân gốc, giữ nguyên phần không làm và pattern hiện có.' },
    { number: 7, titleEn: 'Verify prevent', titleVi: 'Kiểm chứng và chặn tái diễn', descEn: 'Rerun the original reproduction, affected tests, blast-radius checks, and add prevention where appropriate.', descVi: 'Chạy lại tái hiện ban đầu, test liên quan, kiểm tra phạm vi ảnh hưởng và thêm lớp phòng ngừa khi phù hợp.' },
    { number: 8, titleEn: 'Finalize', titleVi: 'Kết thúc', descEn: 'Report confidence, root cause, changed files, evidence, prevention, side-effect sweep, docs impact, and journal handling.', descVi: 'Báo độ tin cậy, nguyên nhân gốc, file đã đổi, bằng chứng, phòng ngừa, kiểm tra tác dụng phụ, tác động docs và xử lý journal.' },
  ],
  corePrinciplesEn: [
    'Symptoms do not justify fixes; exact root cause does.',
    'The original failing repro is the baseline for verification.',
    'A fix is incomplete until blast-radius side effects are checked.',
    'Three failed attempts mean the approach or architecture must be questioned.',
  ],
  corePrinciplesVi: [
    'Triệu chứng không đủ để sửa; phải có nguyên nhân gốc chính xác.',
    'Cách tái hiện lỗi ban đầu là mốc kiểm chứng sau sửa.',
    'Bản sửa chưa xong nếu chưa kiểm tra tác dụng phụ trong phạm vi ảnh hưởng.',
    'Ba lần sửa thất bại nghĩa là phải xét lại hướng tiếp cận hoặc kiến trúc.',
  ],
  workflowModes: [
    { flag: '--auto', modeEn: 'Autonomous', modeVi: 'Tự động', research: 'Standard scout', redTeam: 'Internal review', validation: 'Full affected verification' },
    { flag: '--review', modeEn: 'Human review', modeVi: 'Có người duyệt', research: 'Standard scout', redTeam: 'Pause at decision points', validation: 'Approval plus affected verification' },
    { flag: '--quick', modeEn: 'Quick', modeVi: 'Nhanh', research: 'Minimal scout', redTeam: 'Trivial issue only', validation: 'Exact repro plus direct dependents' },
    { flag: '--parallel', modeEn: 'Parallel', modeVi: 'Song song', research: 'Per-issue scout', redTeam: 'Independent ownership', validation: 'Per-issue and integrated checks' },
    { flag: '--ultra', modeEn: 'Ultra verifier', modeVi: 'Ultra verifier', research: 'Shared diagnosis packet', redTeam: 'Five read-only fix plans', validation: 'Winning plan only then full verify' },
  ],
  promptExamples: [
    { labelEn: 'Default fix', labelVi: 'Sửa mặc định', command: '/ak:fix "checkout submit throws TypeError" --auto', whenEn: 'A concrete bug can be handled autonomously.', whenVi: 'Có lỗi cụ thể có thể để skill tự xử lý.', expectedEn: 'Frames intent, scouts, diagnoses, implements, verifies, and finalizes.', expectedVi: 'Đóng khung, khảo sát, chẩn đoán, sửa, kiểm chứng và kết thúc.', recommended: true },
    { labelEn: 'Trivial issue', labelVi: 'Lỗi nhỏ', command: '/ak:fix "eslint no-unused-vars in src/app.ts" --quick', whenEn: 'The issue is a simple lint or type failure.', whenVi: 'Lỗi là lint hoặc type đơn giản.', expectedEn: 'Uses the quick scout to diagnose and repair without skipping verification.', expectedVi: 'Dùng khảo sát nhanh để chẩn đoán và sửa nhưng vẫn kiểm chứng.' },
    { labelEn: 'Human-in-loop', labelVi: 'Có duyệt từng bước', command: '/ak:fix "production payment regression" --review', whenEn: 'The bug touches critical or production-sensitive code.', whenVi: 'Lỗi chạm vào mã quan trọng hoặc nhạy cảm production.', expectedEn: 'Pauses at review gates before risky decisions.', expectedVi: 'Dừng ở các cổng duyệt trước quyết định rủi ro.' },
    { labelEn: 'Independent issues', labelVi: 'Nhiều lỗi độc lập', command: '/ak:fix "CI failures in auth and billing" --parallel', whenEn: 'Two or more failures can be owned independently.', whenVi: 'Có từ hai lỗi trở lên có thể chia chủ sở hữu độc lập.', expectedEn: 'Routes each issue to parallel fullstack-developer ownership.', expectedVi: 'Định tuyến từng lỗi cho các nhánh xử lý song song.' },
  ],
  skillStack: [
    { name: 'ak:scout', type: 'skill' },
    { name: 'ak:debug', type: 'skill' },
    { name: 'ak:sequential-thinking', type: 'skill' },
    { name: 'kongming', type: 'agent' },
    { name: 'code-reviewer', type: 'agent' },
  ],
  guardrails: [
    { thoughtEn: 'I can see the problem, let me fix it.', thoughtVi: 'Tôi thấy lỗi rồi, sửa luôn được.', realityEn: 'Seeing symptoms is not root-cause evidence. Scout first.', realityVi: 'Thấy triệu chứng không phải bằng chứng nguyên nhân gốc. Phải khảo sát trước.', accent: 'red' },
    { thoughtEn: 'It is probably this line.', thoughtVi: 'Có lẽ là dòng này.', realityEn: 'Probably means guessing. Prove the defect, trigger, and blast radius.', realityVi: '“Có lẽ” là đoán. Phải chứng minh lỗi, điều kiện kích hoạt và phạm vi ảnh hưởng.', accent: 'amber' },
    { thoughtEn: 'Tests passed, so the fix is done.', thoughtVi: 'Test qua rồi nên xong.', realityEn: 'The original repro, affected modules, public contracts, and prevention gate still matter.', realityVi: 'Vẫn cần tái hiện ban đầu, module liên quan, hợp đồng public và cổng phòng ngừa.', accent: 'blue' },
  ],
};

export default data;
