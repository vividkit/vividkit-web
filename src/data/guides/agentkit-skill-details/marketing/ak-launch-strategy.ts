import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-launch-strategy",
  command: "/ak:launch-strategy",
  kit: 'marketer',
  header: {
    titleEn: '/ak:launch-strategy — Product and feature launch strategy',
    titleVi: '/ak:launch-strategy — Chiến lược launch sản phẩm và tính năng',
    taglineEn: "Plan product launches, feature releases, Product Hunt pushes, beta/early-access moments, and repeated launch momentum across owned, rented, and borrowed channels.",
    taglineVi: "Lập chiến lược launch sản phẩm, release tính năng, Product Hunt, beta/early-access và nhịp launch lặp lại trên kênh owned, rented, borrowed."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Clarify launch",
      titleVi: "Làm rõ launch",
      descEn: "Ask what is launching, audience size, current channels, timeline, prior launch history, and Product Hunt intent.",
      descVi: "Hỏi đang launch gì, quy mô audience, kênh hiện có, timeline, lịch sử launch và có định dùng Product Hunt không."
    },
    {
      number: 2,
      titleEn: "Map ORB channels",
      titleVi: "Vẽ kênh ORB",
      descEn: "Inventory owned channels, choose 1-2 rented platforms, and identify borrowed audiences that can create credibility.",
      descVi: "Kiểm kê kênh owned, chọn 1-2 nền tảng rented và xác định audience borrowed có thể tạo uy tín."
    },
    {
      number: 3,
      titleEn: "Phase the rollout",
      titleVi: "Chia pha rollout",
      descEn: "Plan internal, alpha, beta, early-access, and full launch goals with actions for each stage.",
      descVi: "Lập mục tiêu và hành động cho internal, alpha, beta, early-access và full launch."
    },
    {
      number: 4,
      titleEn: "Prepare assets",
      titleVi: "Chuẩn bị tài sản",
      descEn: "Create landing page, waitlist/email capture, listing copy, screenshots, demo video, GIFs, onboarding, and analytics.",
      descVi: "Chuẩn bị landing page, waitlist/email capture, copy listing, screenshot, demo video, GIF, onboarding và analytics."
    },
    {
      number: 5,
      titleEn: "Run launch day",
      titleVi: "Chạy ngày launch",
      descEn: "Coordinate email, blog, social, Product Hunt if used, in-app announcements, website banners, and real-time team engagement.",
      descVi: "Điều phối email, blog, social, Product Hunt nếu dùng, thông báo trong app, banner website và phản hồi realtime của team."
    },
    {
      number: 6,
      titleEn: "Convert attention",
      titleVi: "Chuyển hóa chú ý",
      descEn: "Route traffic back to owned channels and capture signups instead of leaving momentum on rented platforms.",
      descVi: "Đưa traffic về kênh owned và thu signup thay vì để momentum nằm trên nền tảng rented."
    },
    {
      number: 7,
      titleEn: "Post-launch work",
      titleVi: "Làm sau launch",
      descEn: "Activate onboarding emails, follow up with engaged prospects, publish comparisons, update pages, and gather feedback.",
      descVi: "Kích hoạt onboarding email, follow-up prospect đã tương tác, xuất bản trang so sánh, cập nhật website và gom feedback."
    },
    {
      number: 8,
      titleEn: "Sustain momentum",
      titleVi: "Duy trì đà",
      descEn: "Prioritize future announcements by major, medium, and minor update levels; stagger releases to keep attention compounding.",
      descVi: "Ưu tiên thông báo tiếp theo theo mức major, medium, minor; giãn nhịp release để attention tiếp tục cộng dồn."
    }
  ],
  corePrinciplesEn: [
    "Launches compound when repeated",
    "Owned channels are the long-term asset",
    "Rented channels provide speed, not stability",
    "Borrowed attention must convert into owned relationships",
    "Product Hunt requires preparation and all-day engagement"
  ],
  corePrinciplesVi: [
    "Launch tạo hiệu ứng cộng dồn khi được lặp lại",
    "Kênh owned là tài sản dài hạn",
    "Kênh rented cho tốc độ, không cho sự ổn định",
    "Attention mượn được phải chuyển thành quan hệ owned",
    "Product Hunt cần chuẩn bị trước và trực cả ngày"
  ],
  expertiseAreasEn: [
    "ORB channel strategy",
    "Five-phase launch planning",
    "Product Hunt preparation",
    "Post-launch adoption",
    "Announcement prioritization"
  ],
  expertiseAreasVi: [
    "Chiến lược kênh ORB",
    "Kế hoạch launch năm pha",
    "Chuẩn bị Product Hunt",
    "Adoption sau launch",
    "Ưu tiên thông báo sản phẩm"
  ],
  promptExamples: [{
      labelEn: "Feature release",
      labelVi: "Release tính năng",
      command: "/ak:launch-strategy analytics dashboard feature for B2B SaaS",
      commandVi: '/ak:launch-strategy tính năng bảng điều khiển phân tích cho B2B SaaS',
      whenEn: "A feature announcement needs channel strategy, assets, and post-launch adoption work.",
      whenVi: "Khi một thông báo tính năng cần chiến lược kênh, tài sản launch và adoption sau launch.",
      expectedEn: "Produces phased launch plan, ORB channels, launch checklist, and post-launch momentum plan.",
      expectedVi: "Tạo kế hoạch launch theo pha, kênh ORB, checklist launch và kế hoạch giữ đà sau launch.",
      recommended: true
    },
    {
      labelEn: "Product Hunt",
      labelVi: "Product Hunt",
      command: "/ak:launch-strategy Product Hunt launch for our AI note app",
      commandVi: '/ak:launch-strategy Ra mắt Product Hunt cho ứng dụng ghi chú AI của chúng tôi',
      whenEn: "You are considering Product Hunt and need preparation before launch day.",
      whenVi: "Khi định launch Product Hunt và cần chuẩn bị trước ngày launch.",
      expectedEn: "Covers listing optimization, supporter relationships, launch-day engagement, and traffic capture.",
      expectedVi: "Bao quát tối ưu listing, xây quan hệ supporter, trực ngày launch và capture traffic."
    },
    { labelEn: 'Product Hunt launch', labelVi: 'Launch Product Hunt', command: '/ak:launch-strategy Product Hunt launch for an AI writing tool',
      commandVi: '/ak:launch-strategy Ra mắt Product Hunt cho công cụ viết AI', whenEn: 'A dated launch needs channels, assets, timeline, and Product Hunt-specific moves.', whenVi: 'Một launch có ngày cần kênh, asset, timeline và bước riêng cho Product Hunt.', expectedEn: 'Launch plan covering audience, channels, assets, timeline, and PH checklist.', expectedVi: 'Plan launch gồm audience, kênh, asset, timeline và checklist Product Hunt.' }
  ],
  reportOutput: {
    titleEn: "Launch strategy plan",
    titleVi: "Kế hoạch chiến lược launch",
    patternEn: "Phased launch plan with checklist",
    patternVi: "Kế hoạch launch theo pha kèm checklist",
    descEn: "Launch type • ORB channels • phase plan • assets • launch-day actions • post-launch momentum",
    descVi: "Loại launch • kênh ORB • kế hoạch theo pha • tài sản • hành động ngày launch • giữ đà sau launch"
  }
};

export default data;
