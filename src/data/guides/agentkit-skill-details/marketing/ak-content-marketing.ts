import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-content-marketing",
  command: "/ak:content-marketing",
  kit: 'marketer',
  header: {
    titleEn: "Content strategy and editorial system",
    titleVi: "Hệ thống chiến lược nội dung và lịch biên tập",
    taglineEn: "Builds content strategies, editorial calendars, blog plans, pillar maps, audits, and repurposing workflows tied to buyer journey and ROI.",
    taglineVi: "Xây chiến lược nội dung, lịch biên tập, kế hoạch blog, content pillar, audit và workflow tái sử dụng nội dung gắn với hành trình mua và ROI.",
  },
  processFlow: [
    { number: 1, titleEn: "Classify content need", titleVi: "Phân loại nhu cầu", descEn: "Determine whether the request is strategy, calendar, blog planning, pillar mapping, audit, or repurposing.", descVi: "Xác định yêu cầu là chiến lược, lịch biên tập, kế hoạch blog, mapping pillar, audit hay tái sử dụng." },
    { number: 2, titleEn: "Load framework", titleVi: "Tải khung làm việc", descEn: "Open the relevant reference: strategy framework, calendar template, blog templates, or audit checklist.", descVi: "Mở tài liệu phù hợp: khung chiến lược, mẫu lịch biên tập, mẫu blog hoặc checklist audit." },
    { number: 3, titleEn: "Audit baseline", titleVi: "Audit nền hiện tại", descEn: "Review existing content and classify actions as keep, update, consolidate, redirect, or delete.", descVi: "Rà soát nội dung hiện có và phân loại hành động: giữ, cập nhật, gộp, redirect hoặc xóa." },
    { number: 4, titleEn: "Define audience", titleVi: "Xác định audience", descEn: "Anchor content choices to personas and buyer journey stages.", descVi: "Neo lựa chọn nội dung vào persona và các giai đoạn hành trình mua." },
    { number: 5, titleEn: "Map pillars", titleVi: "Lập content pillar", descEn: "Select 3-5 business-aligned content pillars and topic clusters under each.", descVi: "Chọn 3-5 content pillar bám mục tiêu kinh doanh và các cụm chủ đề bên dưới." },
    { number: 6, titleEn: "Plan production", titleVi: "Lập kế hoạch sản xuất", descEn: "Create editorial calendar, production workflow, templates, and publish cadence.", descVi: "Tạo lịch biên tập, workflow sản xuất, template và nhịp xuất bản." },
    { number: 7, titleEn: "Repurpose smartly", titleVi: "Tái sử dụng thông minh", descEn: "Turn blogs into social, email, and scripts; turn podcasts or webinars into written assets.", descVi: "Chuyển blog thành social, email và script; chuyển podcast hoặc webinar thành nội dung viết." },
    { number: 8, titleEn: "Measure ROI", titleVi: "Đo ROI", descEn: "Define measurement around business value, not just traffic volume.", descVi: "Định nghĩa đo lường theo giá trị kinh doanh, không chỉ theo lượng traffic." },
  ],
  corePrinciplesEn: [
    "Lead with value, not promotion.",
    "Align content to buyer journey stage and business goals.",
    "Repurpose before creating from scratch, and update evergreen content quarterly.",
  ],
  corePrinciplesVi: [
    "Dẫn dắt bằng giá trị, không phải quảng bá.",
    "Gắn nội dung với giai đoạn hành trình mua và mục tiêu kinh doanh.",
    "Tái sử dụng trước khi tạo mới từ đầu, và cập nhật evergreen content mỗi quý.",
  ],
  expertiseAreasEn: ["Content strategy", "Editorial calendars", "Blog planning", "Content pillars", "Topic clusters", "Content audit", "Repurposing"],
  expertiseAreasVi: ["Chiến lược nội dung", "Lịch biên tập", "Kế hoạch blog", "Content pillar", "Topic cluster", "Audit nội dung", "Tái sử dụng nội dung"],
  promptExamples: [
    { labelEn: "Strategy", labelVi: "Chiến lược", command: "/ak:content-marketing strategy B2B SaaS onboarding", whenEn: "Use when planning a content program around a business goal.", whenVi: "Dùng khi lập chương trình nội dung quanh một mục tiêu kinh doanh.", expectedEn: "Audience, pillars, clusters, calendar, production workflow, and measurement plan.", expectedVi: "Audience, pillar, cluster, lịch biên tập, workflow sản xuất và kế hoạch đo lường.", recommended: true },
    { labelEn: "Blog plan", labelVi: "Kế hoạch blog", command: "/ak:content-marketing blog customer retention", whenEn: "Use when a topic needs SEO-informed blog planning.", whenVi: "Dùng khi một chủ đề cần kế hoạch blog có xét SEO.", expectedEn: "Keyword-informed template choice, brief, outline, and publish workflow.", expectedVi: "Chọn template theo keyword, brief, outline và workflow xuất bản." },
    { labelEn: "Audit", labelVi: "Audit", command: "/ak:content-marketing audit product education", whenEn: "Use when existing content needs cleanup or prioritization.", whenVi: "Dùng khi nội dung hiện có cần dọn dẹp hoặc ưu tiên lại.", expectedEn: "Keep, update, consolidate, redirect, or delete recommendations.", expectedVi: "Khuyến nghị giữ, cập nhật, gộp, redirect hoặc xóa." },
    { labelEn: "Repurpose", labelVi: "Tái sử dụng", command: "/ak:content-marketing repurpose webinar launch", whenEn: "Use when one asset should become multiple channel formats.", whenVi: "Dùng khi một asset cần biến thành nhiều định dạng trên nhiều kênh.", expectedEn: "A repurposing map from long-form source into social, email, scripts, or blogs.", expectedVi: "Bản đồ tái sử dụng từ nội dung dài sang social, email, script hoặc blog." },
  ],
  skillStack: [
    { name: "content-creator", type: "agent" },
    { name: "campaign-manager", type: "agent" },
    { name: "attraction-specialist", type: "agent" },
    { name: "seo", type: "skill" },
    { name: "brand", type: "skill" },
    { name: "creativity", type: "skill" },
    { name: "assets-organizing", type: "skill" },
  ],
  reportOutput: {
    titleEn: "Content report path",
    titleVi: "Đường dẫn report nội dung",
    patternEn: "assets/reports/content/{date}-{content-type}-audit.md",
    patternVi: "assets/reports/content/{date}-{content-type}-audit.md",
    descEn: "The skill uses assets-organizing for report paths and keeps audits in the content reports area.",
    descVi: "Skill dùng assets-organizing để chuẩn hóa đường dẫn report và lưu audit trong khu vực content reports.",
  },
};

export default data;
