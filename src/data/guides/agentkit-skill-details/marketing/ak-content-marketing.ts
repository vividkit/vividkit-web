import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-content-marketing",
  command: "/ak:content-marketing",
  kit: 'marketer',
  header: {
    titleEn: '/ak:content-marketing — Multi-channel content strategy',
    titleVi: '/ak:content-marketing — Chiến lược nội dung đa kênh',
    taglineEn: "Plans multi-channel content: strategies, editorial calendars, blog plans, content pillars, content inventory audits, and repurposing workflows tied to buyer journey and ROI. Keyword clustering, the keyword-map article queue, and drafting or reviewing search articles belong to /ak:seo.",
    taglineVi: "Lập kế hoạch nội dung đa kênh: chiến lược, lịch biên tập, kế hoạch blog, content pillar, audit kho nội dung và workflow tái sử dụng nội dung gắn với hành trình mua và ROI. Gom cụm từ khóa, hàng đợi bài viết theo keyword map, và viết hay review bài cho tìm kiếm thuộc /ak:seo.",
  },
  hardGate: {
    type: 'warning',
    titleEn: "A calendar is not publishing authority",
    titleVi: "Lịch nội dung không phải quyền xuất bản",
    contentEn: "A Scheduled or Published status in a template is planning data. The skill does not authorize a CMS write, URL redirect, deletion, audience contact, media spend, or platform account change. Approve and run those actions in their own controlled workflow.",
    contentVi: "Trạng thái Scheduled hoặc Published trong template chỉ là dữ liệu lập kế hoạch. Skill không cấp quyền ghi vào CMS, redirect URL, xóa nội dung, liên hệ audience, chi ngân sách media hay đổi tài khoản nền tảng. Hãy duyệt và thực hiện các việc đó trong workflow được kiểm soát riêng.",
  },
  processFlow: [
    { number: 1, titleEn: "Classify content need", titleVi: "Phân loại nhu cầu", descEn: "Determine whether the request is strategy, calendar, blog planning, pillar mapping, audit, or repurposing.", descVi: "Xác định yêu cầu là chiến lược, lịch biên tập, kế hoạch blog, mapping pillar, audit hay tái sử dụng." },
    { number: 2, titleEn: "Load framework", titleVi: "Tải khung làm việc", descEn: "Open the relevant reference: strategy framework, calendar template, blog templates, or audit checklist.", descVi: "Mở tài liệu phù hợp: khung chiến lược, mẫu lịch biên tập, mẫu blog hoặc checklist audit." },
    { number: 3, titleEn: "Audit baseline", titleVi: "Audit nền hiện tại", descEn: "Review existing content and classify actions as keep, update, consolidate, redirect, or delete.", descVi: "Rà soát nội dung hiện có và phân loại hành động: giữ, cập nhật, gộp, redirect hoặc xóa." },
    { number: 4, titleEn: "Define audience", titleVi: "Xác định audience", descEn: "Anchor content choices to personas and buyer journey stages.", descVi: "Neo lựa chọn nội dung vào persona và các giai đoạn hành trình mua." },
    { number: 5, titleEn: "Map pillars", titleVi: "Lập content pillar", descEn: "Select 3-5 business-aligned content pillars, and map clusters only where related content serves a distinct search or customer intent; keyword clustering itself runs in /ak:seo keywords cluster.", descVi: "Chọn 3-5 content pillar bám mục tiêu kinh doanh, và chỉ chia cụm khi các nội dung liên quan phục vụ những nhu cầu tìm kiếm hoặc nhu cầu khách hàng khác nhau; việc gom cụm từ khóa chạy trong /ak:seo keywords cluster." },
    { number: 6, titleEn: "Plan production", titleVi: "Lập kế hoạch sản xuất", descEn: "Create editorial calendar, production workflow, templates, and publish cadence.", descVi: "Tạo lịch biên tập, workflow sản xuất, template và nhịp xuất bản." },
    { number: 7, titleEn: "Repurpose smartly", titleVi: "Tái sử dụng thông minh", descEn: "Turn blogs into social, email, and scripts; turn podcasts or webinars into written assets.", descVi: "Chuyển blog thành social, email và script; chuyển podcast hoặc webinar thành nội dung viết." },
    { number: 8, titleEn: "Measure ROI", titleVi: "Đo ROI", descEn: "Define measurement around business value, not just traffic volume.", descVi: "Định nghĩa đo lường theo giá trị kinh doanh, không chỉ theo lượng traffic." },
  ],
  corePrinciplesEn: [
    "Lead with value, not promotion.",
    "Align content to buyer journey stage and business goals.",
    "Repurpose before creating from scratch, and update evergreen content quarterly.",
    "Stay at the multi-channel plan: keyword clustering, the keyword-map article queue, and drafting or reviewing search articles go to /ak:seo.",
  ],
  corePrinciplesVi: [
    "Dẫn dắt bằng giá trị, không phải quảng bá.",
    "Gắn nội dung với giai đoạn hành trình mua và mục tiêu kinh doanh.",
    "Tái sử dụng trước khi tạo mới từ đầu, và cập nhật evergreen content mỗi quý.",
    "Giữ ở tầng kế hoạch đa kênh: gom cụm từ khóa, hàng đợi bài viết theo keyword map, và viết hay review bài cho tìm kiếm chuyển sang /ak:seo.",
  ],
  expertiseAreasEn: ["Content strategy", "Editorial calendars", "Blog planning", "Content pillars", "Content inventory", "Content audit", "Repurposing"],
  expertiseAreasVi: ["Chiến lược nội dung", "Lịch biên tập", "Kế hoạch blog", "Content pillar", "Kho nội dung", "Audit nội dung", "Tái sử dụng nội dung"],
  promptExamples: [
    { labelEn: "Strategy", labelVi: "Chiến lược", command: "/ak:content-marketing strategy B2B SaaS onboarding",
      commandVi: '/ak:content-marketing chiến lược onboarding B2B SaaS', whenEn: "Use when planning a content program around a business goal.", whenVi: "Dùng khi lập chương trình nội dung quanh một mục tiêu kinh doanh.", expectedEn: "Audience, pillars, channel formats, calendar, production workflow, and measurement plan are all specified together in the plan.", expectedVi: "Kế hoạch nêu cùng lúc audience, pillar, định dạng theo kênh, lịch biên tập, workflow sản xuất và kế hoạch đo lường.", recommended: true },
    { labelEn: "Blog plan", labelVi: "Kế hoạch blog", command: "/ak:content-marketing blog customer retention",
      commandVi: '/ak:content-marketing blog giữ chân khách hàng', whenEn: "Use when a blog post needs a plan inside the wider content program.", whenVi: "Dùng khi một bài blog cần được lên kế hoạch trong chương trình nội dung chung.", expectedEn: "Reuses existing keyword evidence to pick a template by intent, then writes a brief and outline; a search-led article is drafted and reviewed in /ak:seo article write.", expectedVi: "Dùng lại bằng chứng từ khóa có sẵn để chọn template theo ý định tìm kiếm, rồi viết brief và outline; bài viết để lên tìm kiếm được soạn và review trong /ak:seo article write." },
    { labelEn: "Audit", labelVi: "Audit", command: "/ak:content-marketing audit product education",
      commandVi: '/ak:content-marketing audit giáo dục sản phẩm', whenEn: "Use when existing content needs cleanup or prioritization.", whenVi: "Dùng khi nội dung hiện có cần dọn dẹp hoặc ưu tiên lại.", expectedEn: "Keep, update, consolidate, redirect, or delete recommendations name the action proposed for each existing item.", expectedVi: "Khuyến nghị giữ, cập nhật, gộp, redirect hoặc xóa nêu hành động được đề xuất cho từng mục hiện có." },
    { labelEn: "Repurpose", labelVi: "Tái sử dụng", command: "/ak:content-marketing repurpose webinar launch",
      commandVi: '/ak:content-marketing tái mục đích webinar ra mắt', whenEn: "Use when one asset should become multiple channel formats.", whenVi: "Dùng khi một asset cần biến thành nhiều định dạng trên nhiều kênh.", expectedEn: "A repurposing map from long-form source into social, email, scripts, or blogs.", expectedVi: "Bản đồ tái sử dụng từ nội dung dài sang social, email, script hoặc blog." },
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
