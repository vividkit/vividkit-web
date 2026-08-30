import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-onboarding-cro",
  "command": "/ak:onboarding-cro",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:onboarding-cro",
    "titleVi": "/ak:onboarding-cro",
    "taglineEn": "Optimize post-signup onboarding, activation, first-run experience, empty states, checklists, aha moments, and time-to-value.",
    "taglineVi": "Tối ưu onboarding sau signup, activation, trải nghiệm lần đầu, empty state, checklist, khoảnh khắc aha và time-to-value."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Motivation must not become manipulation",
    "titleVi": "Động lực không được trở thành thao túng",
    "contentEn": "Do not fake progress, manufacture urgency, punish dismissal, hide skip paths, request notification permission without context, or make unrelated product access depend on onboarding completion.",
    "contentVi": "Không giả tiến độ, tạo khẩn cấp giả, phạt việc bỏ qua, giấu đường skip, xin quyền thông báo thiếu ngữ cảnh hoặc buộc quyền truy cập sản phẩm không liên quan phụ thuộc vào hoàn tất onboarding."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Assess product",
      "titleVi": "Đánh giá product",
      "descEn": "Clarify product type, B2B/B2C context, core value proposition, and what happens after signup.",
      "descVi": "Làm rõ loại product, bối cảnh B2B/B2C, core value proposition và điều xảy ra sau signup."
    },
    {
      "number": 2,
      "titleEn": "Define activation",
      "titleVi": "Định nghĩa activation",
      "descEn": "Find the aha moment: the earliest retained-user action that predicts future engagement.",
      "descVi": "Tìm khoảnh khắc aha: hành động sớm nhất của user giữ chân tốt dự báo engagement về sau."
    },
    {
      "number": 3,
      "titleEn": "Map drop-offs",
      "titleVi": "Vẽ điểm rơi",
      "descEn": "Review current onboarding flow, drop-off points, activation rate, time to activation, and cohort/source splits.",
      "descVi": "Rà flow onboarding hiện tại, điểm drop-off, activation rate, time to activation và phân tách theo cohort/source."
    },
    {
      "number": 4,
      "titleEn": "Choose first experience",
      "titleVi": "Chọn trải nghiệm đầu",
      "descEn": "Pick product-first, guided setup, or value-first based on complexity and personalization needs.",
      "descVi": "Chọn product-first, guided setup hoặc value-first theo độ phức tạp và nhu cầu personalization."
    },
    {
      "number": 5,
      "titleEn": "Design checklist",
      "titleVi": "Thiết kế checklist",
      "descEn": "Use 3-7 value-ordered checklist items with action verb, benefit hint, estimate, and quick-start path.",
      "descVi": "Dùng 3-7 checklist item xếp theo value, có động từ hành động, hint lợi ích, ước tính thời gian và đường tắt bắt đầu."
    },
    {
      "number": 6,
      "titleEn": "Fix empty states",
      "titleVi": "Sửa empty state",
      "descEn": "Turn empty states into onboarding opportunities with preview, value explanation, primary CTA, and optional secondary action.",
      "descVi": "Biến empty state thành cơ hội onboarding với preview, giải thích value, CTA chính và action phụ tùy chọn."
    },
    {
      "number": 7,
      "titleEn": "Coordinate channels",
      "titleVi": "Phối hợp kênh",
      "descEn": "Align in-app guidance with welcome, incomplete onboarding, activation, feature discovery, and stalled-user emails.",
      "descVi": "Căn chỉnh hướng dẫn trong app với email welcome, onboarding chưa hoàn tất, activation, khám phá feature và re-engagement."
    },
    {
      "number": 8,
      "titleEn": "Recover stalled users",
      "titleVi": "Kéo lại user kẹt",
      "descEn": "Define stalled criteria, recovery messages, in-app resume paths, and human outreach for high-value accounts.",
      "descVi": "Định nghĩa tiêu chí stalled, message kéo lại, đường resume trong app và outreach người thật cho account giá trị cao."
    },
    {
      "number": 9,
      "titleEn": "Measure and test",
      "titleVi": "Đo và test",
      "descEn": "Prioritize experiments around friction, sequencing, progress, tours, personalization, quick wins, help, and feedback loops.",
      "descVi": "Ưu tiên thử nghiệm về friction, thứ tự bước, progress, tour, personalization, quick win, hỗ trợ và feedback loop."
    }
  ],
  "corePrinciplesEn": [
    "Time-to-value is everything",
    "One goal per first session",
    "Do, don't just show",
    "Progress creates motivation",
    "Empty states are onboarding surfaces"
  ],
  "corePrinciplesVi": [
    "Time-to-value là trọng tâm",
    "Phiên đầu chỉ nên có một mục tiêu",
    "Cho user làm, đừng chỉ trình bày",
    "Progress tạo động lực",
    "Empty state là bề mặt onboarding"
  ],
  "expertiseAreasEn": [
    "Activation definition",
    "First-run flow design",
    "Onboarding checklists",
    "Empty-state copy",
    "Multi-channel onboarding",
    "Stalled-user recovery",
    "Activation metrics"
  ],
  "expertiseAreasVi": [
    "Định nghĩa activation",
    "Thiết kế flow lần đầu",
    "Checklist onboarding",
    "Copy empty state",
    "Onboarding đa kênh",
    "Kéo lại user bị kẹt",
    "Metric activation"
  ],
  "promptExamples": [
    {
      "labelEn": "Audit flow",
      "labelVi": "Audit flow",
      "command": "/ak:onboarding-cro onboarding flow for our project management SaaS",
      "whenEn": "Post-signup users are not reaching first value or activation fast enough.",
      "whenVi": "Khi user sau signup chưa chạm first value hoặc activation đủ nhanh.",
      "expectedEn": "Audits findings, impact, recommendations, priority, activation goal, steps, copy, emails, and metrics.",
      "expectedVi": "Audit finding, impact, recommendation, priority, activation goal, các bước, copy, email và metric.",
      "recommended": true
    },
    {
      "labelEn": "Checklist redesign",
      "labelVi": "Thiết kế lại checklist",
      "command": "/ak:onboarding-cro redesign our first-run checklist for analytics setup",
      "whenEn": "Multiple setup steps are required and users need visible progress.",
      "whenVi": "Khi onboarding cần nhiều bước setup và user cần thấy progress.",
      "expectedEn": "Creates a 3-7 item checklist ordered by value with benefit hints and quick-start actions.",
      "expectedVi": "Tạo checklist 3-7 mục xếp theo value, có hint lợi ích và action bắt đầu nhanh."
    }
  ],
  "reportOutput": {
    "titleEn": "Onboarding CRO deliverable",
    "titleVi": "Deliverable tối ưu onboarding",
    "patternEn": "Onboarding audit, flow design, or copy deliverables",
    "patternVi": "Audit onboarding, thiết kế flow hoặc bộ copy",
    "descEn": "Activation goal • step-by-step flow • checklist • empty states • email sequence • metrics plan",
    "descVi": "Mục tiêu activation • flow từng bước • checklist • empty state • chuỗi email • kế hoạch đo lường"
  }
};

export default data;
