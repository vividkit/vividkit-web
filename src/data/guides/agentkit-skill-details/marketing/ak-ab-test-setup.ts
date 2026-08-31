import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-ab-test-setup",
  command: "/ak:ab-test-setup",
  kit: 'marketer',
  header: {
    titleEn: '/ak:ab-test-setup — A/B Test Setup',
    titleVi: '/ak:ab-test-setup — Thiết lập A/B test',
    taglineEn: "Plan statistically valid experiments with a clear hypothesis, one isolated variable, pre-committed sample size, business-tied metrics, guarded rollout, and reusable learnings.",
    taglineVi: "Lập kế hoạch thử nghiệm có giá trị thống kê với giả thuyết rõ, một biến được cô lập, cỡ mẫu chốt trước, metric gắn với kinh doanh, rollout có guardrail và bài học tái dùng được.",
  },
  hardGate: {
    type: 'warning',
    titleEn: "Do not peek-stop",
    titleVi: "Không dừng sớm vì nhìn kết quả",
    contentEn: "The skill explicitly forbids stopping early because interim results look significant. Pre-commit sample size and duration, or use a sequential-testing method.",
    contentVi: "Skill cấm dừng sớm chỉ vì số liệu tạm thời trông có ý nghĩa. Hãy chốt trước cỡ mẫu và thời lượng, hoặc dùng phương pháp sequential testing.",
  },
  processFlow: [
    { number: 1, titleEn: "Assess context", titleVi: "Hiểu bối cảnh", descEn: "Clarify what should improve, the proposed change, why it matters, baseline conversion, traffic, history, timeline, tools, and implementation complexity.", descVi: "Làm rõ thứ cần cải thiện, thay đổi đang cân nhắc, lý do kiểm thử, conversion nền, traffic, lịch sử test, timeline, công cụ và độ phức tạp triển khai." },
    { number: 2, titleEn: "Frame hypothesis", titleVi: "Viết giả thuyết", descEn: "Use the documented Because-we-believe-will-cause-for-we'll-know framework so the experiment predicts an outcome for a defined audience.", descVi: "Dùng khung “Vì… chúng ta tin… sẽ tạo ra… cho… và biết đúng khi…” để thí nghiệm có dự đoán rõ cho một nhóm người dùng cụ thể." },
    { number: 3, titleEn: "Choose test type", titleVi: "Chọn kiểu test", descEn: "Pick A/B, A/B/n, multivariate, split URL, or feature-flag rollout based on traffic, implementation risk, and how many variables must be isolated.", descVi: "Chọn A/B, A/B/n, multivariate, split URL hoặc rollout bằng feature flag dựa trên traffic, rủi ro triển khai và số biến cần cô lập." },
    { number: 4, titleEn: "Size the test", titleVi: "Tính cỡ mẫu", descEn: "Calculate sample size from baseline conversion rate, MDE, significance level, power, number of variants, traffic, and required business cycles.", descVi: "Tính cỡ mẫu từ conversion nền, MDE, mức ý nghĩa, power, số biến thể, traffic và số chu kỳ kinh doanh tối thiểu cần chạy." },
    { number: 5, titleEn: "Select metrics", titleVi: "Chọn metric", descEn: "Define one primary metric tied to the hypothesis, secondary metrics for explanation, and guardrail metrics such as revenue, retention, satisfaction, refunds, or activation.", descVi: "Định nghĩa một metric chính gắn với giả thuyết, metric phụ để giải thích, và guardrail như doanh thu, retention, hài lòng, hoàn tiền hoặc activation." },
    { number: 6, titleEn: "Design variants", titleVi: "Thiết kế biến thể", descEn: "Document the unchanged control and one meaningful variant; keep the changed variable specific enough that a winner explains what worked.", descVi: "Ghi lại control không đổi và một biến thể đủ mạnh; giữ biến thay đổi đủ cụ thể để nếu thắng thì biết chính xác điều gì hiệu quả." },
    { number: 7, titleEn: "Plan implementation", titleVi: "Lập cách triển khai", descEn: "Choose client-side, server-side, split URL, or percentage rollout; assign traffic evenly or conservatively while preserving repeat visitor consistency.", descVi: "Chọn client-side, server-side, split URL hoặc rollout theo phần trăm; chia traffic đều hoặc thận trọng nhưng phải giữ người dùng quay lại thấy cùng biến thể." },
    { number: 8, titleEn: "Pre-launch QA", titleVi: "QA trước khi chạy", descEn: "Check hypothesis, metric definitions, sample size, duration, variant rendering, tracking, all variant QA, and stakeholder notice before launch.", descVi: "Kiểm tra giả thuyết, định nghĩa metric, cỡ mẫu, thời lượng, hiển thị biến thể, tracking, QA mọi biến thể và thông báo stakeholder trước khi launch." },
    { number: 9, titleEn: "Run cleanly", titleVi: "Chạy đúng kỷ luật", descEn: "Monitor technical issues and segment quality, document outside events, but do not change variants, add new traffic sources, or stop early.", descVi: "Theo dõi lỗi kỹ thuật và chất lượng segment, ghi nhận yếu tố bên ngoài, nhưng không sửa biến thể, không thêm nguồn traffic mới và không dừng sớm." },
    { number: 10, titleEn: "Analyze and learn", titleVi: "Phân tích và học", descEn: "Confirm sample size, significance, effect size, secondary support, guardrail impact, and segments; document decision, action, learnings, and next test.", descVi: "Xác nhận cỡ mẫu, ý nghĩa thống kê, độ lớn tác động, metric phụ, tác động guardrail và segment; ghi quyết định, hành động, bài học và test tiếp theo." },
  ],
  corePrinciplesEn: [
    "Start with a data-backed hypothesis, not curiosity-driven tinkering.",
    "Test one meaningful variable so the result stays interpretable.",
    "Pre-commit sample size, duration, primary metric, and guardrails before launch.",
    "Judge both statistical and practical significance before recommending rollout.",
  ],
  corePrinciplesVi: [
    "Bắt đầu bằng giả thuyết có dữ liệu hoặc lý do rõ, không thử vu vơ.",
    "Chỉ kiểm thử một biến có ý nghĩa để kết quả còn diễn giải được.",
    "Chốt trước cỡ mẫu, thời lượng, metric chính và guardrail trước khi chạy.",
    "Đánh giá cả ý nghĩa thống kê lẫn ý nghĩa kinh doanh trước khi khuyến nghị rollout.",
  ],
  expertiseAreasEn: ["Hypothesis design", "Sample-size planning", "Metric and guardrail selection", "Variant documentation", "Experiment analysis"],
  expertiseAreasVi: ["Thiết kế giả thuyết", "Tính cỡ mẫu", "Chọn metric và guardrail", "Ghi tài liệu biến thể", "Phân tích thí nghiệm"],
  promptExamples: [{ labelEn: "Pricing-page experiment", labelVi: "Test trang pricing", command: "/ak:ab-test-setup pricing page",
      commandVi: '/ak:ab-test-setup trang định giá', whenEn: "You need a plan for a pricing-page change.", whenVi: "Khi cần kế hoạch kiểm thử một thay đổi trên trang pricing.", expectedEn: "A hypothesis, metrics, sample-size needs, variants, rollout method, and analysis plan.", expectedVi: "Nhận giả thuyết, metric, nhu cầu cỡ mẫu, biến thể, cách rollout và kế hoạch phân tích.", recommended: true },
    { labelEn: "Feature experiment", labelVi: "Test tính năng", command: "/ak:ab-test-setup signup flow",
      commandVi: '/ak:ab-test-setup luồng đăng ký', whenEn: "A product or funnel feature needs controlled validation.", whenVi: "Khi một tính năng hoặc bước funnel cần được xác thực có kiểm soát.", expectedEn: "A test design that names implementation approach, traffic split, guardrails, and success criteria.", expectedVi: "Thiết kế test nêu cách triển khai, chia traffic, guardrail và tiêu chí thành công." },
    { labelEn: 'Checkout CTA test', labelVi: 'Test CTA checkout', command: '/ak:ab-test-setup checkout CTA color',
      commandVi: '/ak:ab-test-setup màu CTA thanh toán', whenEn: 'A single checkout CTA change needs a statistically valid experiment plan.', whenVi: 'Một thay đổi CTA checkout cần kế hoạch thí nghiệm có giá trị thống kê.', expectedEn: 'Hypothesis, one isolated variable, sample size, primary metric, guardrails, and rollout plan.', expectedVi: 'Giả thuyết, một biến cô lập, cỡ mẫu, metric chính, guardrail và kế hoạch rollout.' }
  ],
  reportOutput: {
    titleEn: "Experiment plan",
    titleVi: "Kế hoạch thí nghiệm",
    patternEn: "A/B Test: [Name] with hypothesis, design, variants, metrics, implementation, and analysis plan.",
    patternVi: "A/B Test: [Tên] gồm giả thuyết, thiết kế, biến thể, metric, triển khai và kế hoạch phân tích.",
    descEn: "The skill's output format is a test plan first, followed by results summary and recommendations when the experiment completes.",
    descVi: "Định dạng đầu ra của skill là kế hoạch test trước; khi test kết thúc thì bổ sung tóm tắt kết quả và khuyến nghị.",
  },
};

export default data;
