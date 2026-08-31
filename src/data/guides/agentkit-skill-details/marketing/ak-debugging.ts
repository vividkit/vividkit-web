import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-debugging",
  command: "/ak:debugging",
  kit: 'marketer',
  header: {
    titleEn: '/ak:debugging — Root-cause debugging discipline',
    titleVi: '/ak:debugging — Kỷ luật debug tận gốc',
    taglineEn: "Forces root-cause investigation, backward tracing, defense-in-depth validation, and fresh verification before claiming bugs, tests, builds, or performance issues are fixed.",
    taglineVi: "Bắt buộc điều tra nguyên nhân gốc, truy vết ngược, validation nhiều lớp và xác minh mới trước khi tuyên bố đã sửa bug, test, build hoặc lỗi hiệu năng.",
  },
  hardGate: {
    type: "critical",
    titleEn: "No fixes before root cause",
    titleVi: "Không sửa trước khi tìm nguyên nhân gốc",
    contentEn: "The skill’s core rule is explicit: no fixes without root cause investigation first, and no completion claims without fresh verification evidence.",
    contentVi: "Quy tắc lõi của skill rất rõ: không sửa khi chưa điều tra nguyên nhân gốc, và không tuyên bố hoàn tất nếu chưa có bằng chứng xác minh mới.",
  },
  processFlow: [
    { number: 1, titleEn: "Read the failure", titleVi: "Đọc lỗi", descEn: "Collect the actual error, reproduction, recent changes, and evidence before touching code.", descVi: "Thu thập lỗi thật, cách tái hiện, thay đổi gần đây và bằng chứng trước khi đụng vào code." },
    { number: 2, titleEn: "Investigate root cause", titleVi: "Điều tra nguyên nhân gốc", descEn: "Complete systematic debugging Phase 1 before any fix attempt.", descVi: "Hoàn thành Phase 1 của systematic debugging trước mọi nỗ lực sửa." },
    { number: 3, titleEn: "Compare patterns", titleVi: "So sánh pattern", descEn: "Find working examples, compare differences, and identify why this path fails.", descVi: "Tìm ví dụ đang chạy đúng, so sánh khác biệt và xác định vì sao đường này lỗi." },
    { number: 4, titleEn: "Trace backward", titleVi: "Truy vết ngược", descEn: "If the error appears deep in execution, walk up the call stack until the invalid data or trigger originates.", descVi: "Nếu lỗi xuất hiện sâu trong luồng chạy, lần ngược call stack đến nơi dữ liệu sai hoặc trigger bắt đầu." },
    { number: 5, titleEn: "Test hypothesis", titleVi: "Kiểm giả thuyết", descEn: "Form a minimal theory and test it before implementing the final fix.", descVi: "Lập giả thuyết tối thiểu và kiểm nó trước khi triển khai cách sửa cuối." },
    { number: 6, titleEn: "Fix at source", titleVi: "Sửa tại nguồn", descEn: "Repair the original cause, not just the symptom where it surfaced.", descVi: "Sửa nguyên nhân ban đầu, không chỉ che triệu chứng ở nơi lỗi lộ ra." },
    { number: 7, titleEn: "Add depth", titleVi: "Thêm phòng tuyến", descEn: "After root cause is known, add entry validation, business logic guards, environment guards, or debug instrumentation as appropriate.", descVi: "Sau khi biết nguyên nhân gốc, thêm validation đầu vào, guard logic nghiệp vụ, guard môi trường hoặc instrumentation khi phù hợp." },
    { number: 8, titleEn: "Verify fresh", titleVi: "Xác minh mới", descEn: "Run the verification command, read the output, and only then claim success.", descVi: "Chạy lệnh xác minh, đọc output, rồi mới được tuyên bố thành công." },
  ],
  corePrinciplesEn: [
    "Random fixes waste time and create new bugs.",
    "Fix at the source of invalid data or behavior, not at the visible symptom.",
    "Completion requires fresh verification evidence that you have actually read.",
  ],
  corePrinciplesVi: [
    "Sửa mò làm mất thời gian và tạo bug mới.",
    "Sửa tại nguồn sinh ra dữ liệu hoặc hành vi sai, không phải tại triệu chứng nhìn thấy.",
    "Hoàn tất phải có bằng chứng xác minh mới và đã đọc thật sự.",
  ],
  expertiseAreasEn: ["Systematic debugging", "Root-cause tracing", "Defense-in-depth", "Verification protocols", "Test failures", "Performance issues", "Build failures"],
  expertiseAreasVi: ["Debug có hệ thống", "Truy vết nguyên nhân gốc", "Phòng thủ nhiều lớp", "Quy trình xác minh", "Test failure", "Lỗi hiệu năng", "Build failure"],
  promptExamples: [
    { labelEn: "Bug investigation", labelVi: "Điều tra bug", command: "/ak:debugging checkout submit fails with 500",
      commandVi: '/ak:debugging gửi checkout thất bại với lỗi 500', whenEn: "Use when behavior is broken and the cause is not proven.", whenVi: "Dùng khi hành vi bị lỗi và nguyên nhân chưa được chứng minh.", expectedEn: "A root-cause-first investigation and source fix path.", expectedVi: "Luồng điều tra nguyên nhân gốc trước rồi sửa tại nguồn.", recommended: true },
    { labelEn: "Test failure", labelVi: "Test fail", command: "/ak:debugging failing auth middleware tests",
      commandVi: '/ak:debugging các test middleware xác thực đang thất bại', whenEn: "Use when a test failure needs evidence before code changes.", whenVi: "Dùng khi test fail cần bằng chứng trước khi sửa code.", expectedEn: "Failure reading, pattern comparison, hypothesis testing, and fresh verification.", expectedVi: "Đọc lỗi, so sánh pattern, kiểm giả thuyết và xác minh mới." },
    { labelEn: "Performance issue", labelVi: "Lỗi hiệu năng", command: "/ak:debugging dashboard loads slowly",
      commandVi: '/ak:debugging dashboard tải chậm', whenEn: "Use when performance is unexpectedly poor.", whenVi: "Dùng khi hiệu năng kém bất thường.", expectedEn: "Evidence-based tracing to the real bottleneck before optimization.", expectedVi: "Truy vết dựa trên bằng chứng đến đúng bottleneck trước khi tối ưu." },
  ],
  guardrails: [
    { thoughtEn: "It is probably X; I can fix that now.", thoughtVi: "Chắc là X; sửa ngay được.", realityEn: "That is a red flag; return to systematic investigation.", realityVi: "Đó là dấu hiệu cảnh báo; quay lại điều tra có hệ thống.", accent: "red" },
    { thoughtEn: "Should work now.", thoughtVi: "Giờ chắc chạy rồi.", realityEn: "Run verification and read the output before claiming it works.", realityVi: "Phải chạy xác minh và đọc output trước khi nói là chạy được.", accent: "amber" },
  ],
};

export default data;
