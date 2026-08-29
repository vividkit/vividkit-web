import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-competitor",
  command: "/ak:competitor",
  kit: 'marketer',
  header: {
    titleEn: "Competitive intelligence and comparison content",
    titleVi: "Phân tích đối thủ và nội dung so sánh",
    taglineEn: "Analyzes competitors, content gaps, SEO position, alternative pages, comparison pages, tracking lists, and sales battlecards.",
    taglineVi: "Phân tích đối thủ, khoảng trống nội dung, SEO, trang alternative, trang so sánh, danh sách theo dõi và battlecard bán hàng.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse target", titleVi: "Đọc đối tượng", descEn: "Extract the action plus competitor URL or name from the arguments.", descVi: "Tách hành động và URL hoặc tên đối thủ từ tham số." },
    { number: 2, titleEn: "Analyze competitor", titleVi: "Phân tích đối thủ", descEn: "For analyze, gather web data and use researcher for value proposition, pricing, audience, channels, strengths, and weaknesses.", descVi: "Với analyze, thu thập dữ liệu web và dùng researcher để xem value prop, giá, audience, kênh, điểm mạnh và điểm yếu." },
    { number: 3, titleEn: "Position market", titleVi: "Định vị thị trường", descEn: "Use attraction-specialist to turn findings into positioning angles and differentiation.", descVi: "Dùng attraction-specialist để chuyển phát hiện thành góc định vị và điểm khác biệt." },
    { number: 4, titleEn: "Audit content gaps", titleVi: "Audit khoảng trống nội dung", descEn: "For content, compare competitor topics and formats to reveal gaps and opportunities.", descVi: "Với content, so sánh chủ đề và định dạng của đối thủ để tìm khoảng trống và cơ hội." },
    { number: 5, titleEn: "Compare SEO", titleVi: "So sánh SEO", descEn: "For seo, activate SEO analysis around rankings, backlinks, authority, and content quality.", descVi: "Với seo, phân tích thứ hạng, backlink, authority và chất lượng nội dung." },
    { number: 6, titleEn: "Build alternatives", titleVi: "Dựng trang alternative", descEn: "For alternatives, load the comparison reference and generate singular alternative, plural alternatives, vs, or A-vs-B pages.", descVi: "Với alternatives, tải tài liệu so sánh và tạo trang alternative đơn, alternatives nhiều lựa chọn, vs hoặc A-vs-B." },
    { number: 7, titleEn: "Create battlecards", titleVi: "Tạo battlecard", descEn: "Use sale-enabler when findings need to become sales battlecards.", descVi: "Dùng sale-enabler khi phát hiện cần chuyển thành battlecard cho đội bán hàng." },
    { number: 8, titleEn: "Organize outputs", titleVi: "Sắp xếp đầu ra", descEn: "Save competitor reports, battlecards, and comparison content to the documented report and asset paths.", descVi: "Lưu report đối thủ, battlecard và nội dung so sánh vào đúng đường dẫn report và asset đã ghi." },
  ],
  corePrinciplesEn: [
    "Choose the workflow by action: analyze, content, seo, alternatives, or list.",
    "Combine research, positioning, SEO, and sales enablement instead of producing shallow competitor summaries.",
    "Turn competitor facts into practical outputs: reports, battlecards, and alternative/vs pages.",
  ],
  corePrinciplesVi: [
    "Chọn workflow theo hành động: analyze, content, seo, alternatives hoặc list.",
    "Kết hợp nghiên cứu, định vị, SEO và hỗ trợ sales thay vì chỉ tóm tắt đối thủ hời hợt.",
    "Biến dữ kiện đối thủ thành đầu ra dùng được: report, battlecard và trang alternative/vs.",
  ],
  expertiseAreasEn: ["Website analysis", "Content gaps", "SEO comparison", "Alternative pages", "Vs pages", "Battlecards", "Competitor tracking"],
  expertiseAreasVi: ["Phân tích website", "Khoảng trống nội dung", "So sánh SEO", "Trang alternative", "Trang vs", "Battlecard", "Theo dõi đối thủ"],
  promptExamples: [
    { labelEn: "Analyze competitor", labelVi: "Phân tích đối thủ", command: "/ak:competitor analyze https://competitor.com", whenEn: "Use when you need broad competitor intelligence.", whenVi: "Dùng khi cần phân tích đối thủ tổng quát.", expectedEn: "A competitor report covering positioning, pricing, audience, channels, strengths, and weaknesses.", expectedVi: "Report đối thủ gồm định vị, giá, audience, kênh, điểm mạnh và điểm yếu.", recommended: true },
    { labelEn: "Content gap", labelVi: "Khoảng trống nội dung", command: "/ak:competitor content https://competitor.com", whenEn: "Use when planning content against competitor coverage.", whenVi: "Dùng khi lên nội dung dựa trên phần đối thủ đang phủ.", expectedEn: "Topics, formats, and opportunities your content can target.", expectedVi: "Chủ đề, định dạng và cơ hội mà nội dung của bạn có thể nhắm tới." },
    { labelEn: "SEO comparison", labelVi: "So sánh SEO", command: "/ak:competitor seo https://competitor.com", whenEn: "Use when search visibility needs competitor context.", whenVi: "Dùng khi cần đặt khả năng hiển thị tìm kiếm vào bối cảnh đối thủ.", expectedEn: "SEO comparison across rankings, backlinks, authority, and content quality.", expectedVi: "So sánh SEO theo thứ hạng, backlink, authority và chất lượng nội dung." },
    { labelEn: "Alternatives page", labelVi: "Trang alternative", command: "/ak:competitor alternatives notion", whenEn: "Use to produce competitor alternative or vs comparison content.", whenVi: "Dùng để tạo nội dung alternative hoặc so sánh vs đối thủ.", expectedEn: "Comparison page structure backed by competitor and product research.", expectedVi: "Cấu trúc trang so sánh dựa trên nghiên cứu đối thủ và sản phẩm." },
    { labelEn: "Tracked list", labelVi: "Danh sách theo dõi", command: "/ak:competitor list", whenEn: "Use to see tracked competitors.", whenVi: "Dùng để xem các đối thủ đang được theo dõi.", expectedEn: "A tracked competitor list.", expectedVi: "Danh sách đối thủ đang theo dõi." },
  ],
  skillStack: [
    { name: "researcher", type: "agent" },
    { name: "attraction-specialist", type: "agent" },
    { name: "seo-specialist", type: "agent" },
    { name: "sale-enabler", type: "agent" },
    { name: "seo", type: "skill" },
    { name: "content-marketing", type: "skill" },
    { name: "copywriting", type: "skill" },
    { name: "assets-organizing", type: "skill" },
  ],
  reportOutput: {
    titleEn: "Competitor outputs",
    titleVi: "Đầu ra phân tích đối thủ",
    patternEn: "reports/competitors/{date}-{name}.md and assets/sales/battlecards/{competitor}.md",
    patternVi: "reports/competitors/{date}-{name}.md và assets/sales/battlecards/{competitor}.md",
    descEn: "Analysis reports, battlecards, and alternative/vs content are organized by competitor and output type.",
    descVi: "Report phân tích, battlecard và nội dung alternative/vs được sắp theo đối thủ và loại đầu ra.",
  },
};

export default data;
