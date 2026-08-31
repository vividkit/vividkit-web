import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-cip-design",
  command: "/ak:cip-design",
  kit: 'marketer',
  header: {
    titleEn: '/ak:cip-design — Corporate identity mockup system',
    titleVi: '/ak:cip-design — Hệ thống mockup nhận diện doanh nghiệp',
    taglineEn: "Creates Corporate Identity Program briefs and mockups across 50+ deliverables, 20 styles, and 20 industries using Gemini Nano Banana image generation.",
    taglineVi: "Tạo brief và mockup Corporate Identity Program cho hơn 50 hạng mục, 20 phong cách và 20 ngành bằng Gemini Nano Banana.",
  },
  processFlow: [
    { number: 1, titleEn: "Identify brand scope", titleVi: "Xác định phạm vi brand", descEn: "Read the requested brand, industry, deliverables, style direction, and whether a real logo exists.", descVi: "Đọc brand, ngành, hạng mục cần làm, hướng phong cách và việc đã có logo thật hay chưa." },
    { number: 2, titleEn: "Start with CIP brief", titleVi: "Bắt đầu bằng brief CIP", descEn: "Use the CIP brief search to return industry analysis, style recommendations, and priority deliverables.", descVi: "Dùng tìm kiếm brief CIP để lấy phân tích ngành, gợi ý phong cách và các hạng mục ưu tiên." },
    { number: 3, titleEn: "Search domains", titleVi: "Tra cứu từng miền", descEn: "Search deliverables, styles, industries, and mockup contexts when the brief needs more detail.", descVi: "Tra cứu hạng mục, phong cách, ngành và bối cảnh mockup khi brief cần chi tiết hơn." },
    { number: 4, titleEn: "Prefer real logo", titleVi: "Ưu tiên logo thật", descEn: "When a logo is provided, generate text-and-image mockups that incorporate the actual mark.", descVi: "Khi có logo, tạo mockup text-and-image để đưa đúng logo thật vào thiết kế." },
    { number: 5, titleEn: "Generate deliverables", titleVi: "Tạo hạng mục", descEn: "Generate a single item, custom deliverable list, or complete CIP set for stationery, signage, apparel, packaging, vehicles, and digital assets.", descVi: "Tạo một hạng mục, danh sách tùy chỉnh hoặc bộ CIP đầy đủ cho văn phòng phẩm, bảng hiệu, đồng phục, bao bì, xe và tài sản số." },
    { number: 6, titleEn: "Select model", titleVi: "Chọn model", descEn: "Accept only flash or pro; default is flash. Docs do not assign quality, speed, or 4K claims to either option.", descVi: "Chỉ nhận flash hoặc pro; mặc định là flash. Docs không gán claim về chất lượng, tốc độ hay 4K cho từng option." },
    { number: 7, titleEn: "Render presentation", titleVi: "Dựng bản trình bày", descEn: "Package generated mockups into a professional HTML presentation with concepts, purpose, and specifications.", descVi: "Đóng gói mockup thành bài trình bày HTML chuyên nghiệp với concept, mục đích và thông số." },
    { number: 8, titleEn: "Hand off references", titleVi: "Bàn giao tham chiếu", descEn: "Point to deliverable, style, and prompt-engineering guides for later iteration.", descVi: "Gắn kèm guide về hạng mục, phong cách và prompt engineering để tiện lặp lại sau này." },
  ],
  corePrinciplesEn: [
    "Begin with a CIP brief so industry, style, and deliverable priorities are not guessed.",
    "Use actual logo assets when available; no-logo mode is explicitly a brand interpretation, not a faithful mockup.",
    "Treat CIP as an applied identity system spanning physical, digital, office, apparel, vehicle, and event contexts.",
  ],
  corePrinciplesVi: [
    "Bắt đầu bằng brief CIP để không đoán mò ngành, phong cách và thứ tự ưu tiên hạng mục.",
    "Dùng logo thật khi có; chế độ không logo chỉ là diễn giải thương hiệu, không phải mockup trung thành.",
    "Xem CIP như hệ nhận diện ứng dụng trên vật lý, số, văn phòng, đồng phục, xe và sự kiện.",
  ],
  expertiseAreasEn: ["Business cards", "Letterheads", "Office signage", "Vehicle branding", "Apparel", "Packaging", "Digital templates", "Event booths"],
  expertiseAreasVi: ["Danh thiếp", "Letterhead", "Biển hiệu văn phòng", "Branding xe", "Đồng phục", "Bao bì", "Mẫu digital", "Gian hàng sự kiện"],
  promptExamples: [
    { labelEn: "Recommended start", labelVi: "Cách bắt đầu khuyến nghị", command: "/ak:cip-design complete CIP for Grand Vista luxury hotel",
      commandVi: '/ak:cip-design hoàn thành CIP cho khách sạn sang trọng Grand Vista', whenEn: "Use when the brand needs a complete applied identity package.", whenVi: "Dùng khi brand cần một bộ nhận diện ứng dụng đầy đủ.", expectedEn: "Industry-fit brief, style direction, and prioritized CIP deliverables.", expectedVi: "Brief hợp ngành, hướng phong cách và danh sách hạng mục CIP ưu tiên.", recommended: true },
    { labelEn: "Specific deliverable", labelVi: "Hạng mục cụ thể", command: "/ak:cip-design business card and letterhead for TopGroup consulting",
      commandVi: '/ak:cip-design danh thiếp và tiêu đề thư cho TopGroup consulting', whenEn: "Use when only selected identity touchpoints need mockups.", whenVi: "Dùng khi chỉ cần mockup cho vài điểm chạm nhận diện cụ thể.", expectedEn: "Mockup guidance for the requested deliverables and brand context.", expectedVi: "Hướng dẫn mockup cho các hạng mục đã yêu cầu và bối cảnh brand." },
    { labelEn: "Brand application", labelVi: "Ứng dụng thương hiệu", command: "/ak:cip-design vehicle branding for GreenLeaf organic food",
      commandVi: '/ak:cip-design thương hiệu xe cho GreenLeaf thực phẩm hữu cơ', whenEn: "Use for applied identity on vehicles, signage, packaging, or apparel.", whenVi: "Dùng cho nhận diện ứng dụng trên xe, biển hiệu, bao bì hoặc đồng phục.", expectedEn: "CIP recommendations matched to the deliverable category and industry.", expectedVi: "Khuyến nghị CIP khớp với nhóm hạng mục và ngành." },
  ],
  skillStack: [
    { name: "ai-multimodal", type: "skill" },
    { name: "Gemini Nano Banana", type: "tool" },
  ],
};

export default data;
