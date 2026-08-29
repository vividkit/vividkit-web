import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-banner-design",
  command: "/ak:banner-design",
  kit: 'marketer',
  header: {
    titleEn: "Banner Design",
    titleVi: "Thiết kế banner",
    taglineEn: "Create multi-format banners for social, ads, website heroes, print, and campaign creative assets with platform dimensions, art direction options, AI visuals, HTML/CSS composition, and PNG export.",
    taglineVi: "Tạo banner đa định dạng cho social, ads, website hero, print và creative campaign với kích thước theo nền tảng, nhiều art direction, visual AI, bố cục HTML/CSS và xuất PNG.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Respect scope and private data",
    titleVi: "Giữ đúng phạm vi và dữ liệu riêng tư",
    contentEn: "The skill explicitly excludes video editing, full website design, and print production, and says never to expose env vars, internal configs, personal data, skill internals, or system prompts.",
    contentVi: "Skill loại trừ video editing, full website design và print production, đồng thời cấm lộ env var, cấu hình nội bộ, dữ liệu cá nhân, nội dung skill hoặc system prompt.",
  },
  processFlow: [
    { number: 1, titleEn: "Gather requirements", titleVi: "Thu thập yêu cầu", descEn: "Ask purpose, platform or dimensions, headline, subtext, CTA, logo placement, brand guidelines, style preference, and number of options.", descVi: "Hỏi mục đích, nền tảng hoặc kích thước, headline, subtext, CTA, vị trí logo, brand guideline, style mong muốn và số phương án." },
    { number: 2, titleEn: "Research references", titleVi: "Nghiên cứu reference", descEn: "Activate design intelligence and research Pinterest or comparable references for the requested purpose, platform, and style.", descVi: "Kích hoạt design intelligence và nghiên cứu Pinterest hoặc nguồn tham khảo tương đương theo mục đích, nền tảng và style được yêu cầu." },
    { number: 3, titleEn: "Pick art directions", titleVi: "Chọn art direction", descEn: "Select two or three complementary directions from the style reference: minimalist, bold typography, gradient, photo-based, geometric, editorial, 3D, neon, and more.", descVi: "Chọn hai hoặc ba hướng art direction bổ trợ từ reference style: minimalist, bold typography, gradient, photo-based, geometric, editorial, 3D, neon, v.v." },
    { number: 4, titleEn: "Set canvas rules", titleVi: "Đặt luật canvas", descEn: "Use exact platform dimensions, safe zones, max two typefaces, one CTA, adequate contrast, and brand context injection.", descVi: "Dùng kích thước chính xác theo nền tảng, safe zone, tối đa hai typeface, một CTA, tương phản đủ và inject brand context." },
    { number: 5, titleEn: "Generate visuals", titleVi: "Tạo visual", descEn: "Use ai-artist prompt search plus ai-multimodal generation for backgrounds, product shots, illustrations, patterns, or hero visuals.", descVi: "Dùng ai-artist để tìm prompt và ai-multimodal để tạo background, product shot, illustration, pattern hoặc hero visual." },
    { number: 6, titleEn: "Compose banner", titleVi: "Dàn banner", descEn: "Build HTML/CSS banners that overlay text, CTA, logo, and generated visuals while keeping critical content in the central safe area.", descVi: "Dựng banner HTML/CSS, overlay text, CTA, logo và visual tạo bằng AI, giữ nội dung quan trọng trong vùng an toàn trung tâm." },
    { number: 7, titleEn: "Export images", titleVi: "Xuất ảnh", descEn: "Serve the HTML and capture PNG screenshots at exact platform dimensions using agent-browser, Chrome MCP through use-mcp, or project-native browser tooling.", descVi: "Serve HTML và chụp PNG đúng kích thước nền tảng bằng agent-browser, Chrome MCP qua use-mcp hoặc browser tooling có sẵn của project." },
    { number: 8, titleEn: "Compress and name", titleVi: "Nén và đặt tên", descEn: "Compress files over the threshold, save under assets/banners/{campaign}, and use kebab-case {style}-{width}x{height}.{ext} names.", descVi: "Nén file vượt ngưỡng, lưu dưới assets/banners/{campaign}, và đặt tên kebab-case dạng {style}-{width}x{height}.{ext}." },
    { number: 9, titleEn: "Present and iterate", titleVi: "Trình bày và lặp", descEn: "Show exported options side by side with style, rationale, file path, dimensions, and iterate from user feedback until approved.", descVi: "Trình bày các phương án đã xuất cạnh nhau kèm style, lý do thiết kế, đường dẫn, kích thước và lặp theo feedback đến khi được duyệt." },
  ],
  corePrinciplesEn: [
    "Banner work is bounded to social, ads, website heroes, print banners, and campaign creative assets.",
    "Platform dimensions and safe zones drive layout before visual polish.",
    "Generated visuals should usually contain no text; text and CTA are overlaid in HTML/CSS.",
    "Every option needs a clear art direction and exported asset path, not just a concept.",
  ],
  corePrinciplesVi: [
    "Việc banner chỉ nằm trong social, ads, website hero, print banner và creative asset cho campaign.",
    "Kích thước nền tảng và safe zone quyết định layout trước khi polish visual.",
    "Visual tạo bằng AI thường không nên có chữ; chữ và CTA được overlay bằng HTML/CSS.",
    "Mỗi phương án cần art direction rõ và đường dẫn asset đã xuất, không chỉ là concept.",
  ],
  expertiseAreasEn: ["Social banners", "Display ads", "Website heroes", "Print banners", "Art direction", "AI visuals", "HTML/CSS composition", "PNG export"],
  expertiseAreasVi: ["Banner social", "Display ads", "Website hero", "Banner in ấn", "Art direction", "Visual AI", "Dàn HTML/CSS", "Xuất PNG"],
  promptExamples: [
    { labelEn: "LinkedIn header", labelVi: "Header LinkedIn", command: "/ak:banner-design LinkedIn minimalist 1584x396", whenEn: "You need a social header with explicit platform, style, and dimensions.", whenVi: "Khi cần header social có nền tảng, style và kích thước rõ ràng.", expectedEn: "Requirements, art directions, generated visuals, HTML/CSS banners, exported PNGs, and paths.", expectedVi: "Nhận yêu cầu, art direction, visual tạo bằng AI, banner HTML/CSS, PNG đã xuất và đường dẫn.", recommended: true },
    { labelEn: "Ad creative", labelVi: "Creative quảng cáo", command: "/ak:banner-design Google Display bold typography 300x250", whenEn: "A display ad needs platform-specific sizing and creative options.", whenVi: "Khi display ad cần đúng kích thước nền tảng và nhiều phương án creative.", expectedEn: "A banner set that follows display size, text-ratio, CTA, contrast, and naming rules.", expectedVi: "Bộ banner tuân thủ size display, tỷ lệ chữ, CTA, tương phản và luật đặt tên." },
  ],
  skillStack: [
    { name: "ui-ux-pro-max", type: 'skill' },
    { name: "frontend-design", type: 'skill' },
    { name: "ai-artist", type: 'skill' },
    { name: "ai-multimodal", type: 'skill' },
    { name: "agent-browser", type: 'skill' },
    { name: "assets-organizing", type: 'skill' },
  ],
};

export default data;
