import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-creativity",
  command: "/ak:creativity",
  kit: 'marketer',
  header: {
    titleEn: '/ak:creativity — Creative direction intelligence',
    titleVi: '/ak:creativity — Trí tuệ định hướng creative',
    taglineEn: "Guides campaign creative across 55 styles, 18 platforms, voiceover, music, color, effects, audience fit, and anti-patterns.",
    taglineVi: "Định hướng creative cho campaign qua 55 phong cách, 18 nền tảng, voiceover, âm nhạc, màu sắc, hiệu ứng, độ hợp audience và anti-pattern.",
  },
  hardGate: {
    type: "info",
    titleEn: "Start with the creative brief",
    titleVi: "Bắt đầu bằng creative brief",
    contentEn: "The skill explicitly says to always start with the creative brief search so style, platform, voiceover, music, effects, and anti-pattern recommendations are reasoned together.",
    contentVi: "Skill yêu cầu luôn bắt đầu bằng creative brief để phong cách, nền tảng, voiceover, nhạc, hiệu ứng và anti-pattern được đề xuất cùng một lượt có lý do.",
  },
  processFlow: [
    { number: 1, titleEn: "Analyze request", titleVi: "Phân tích yêu cầu", descEn: "Extract campaign type, audience, industry, and platform from the user request.", descVi: "Tách loại campaign, audience, ngành và nền tảng từ yêu cầu người dùng." },
    { number: 2, titleEn: "Generate brief", titleVi: "Tạo creative brief", descEn: "Start with the creative-brief search to query style, platform, voiceover, music, and reasoning domains together.", descVi: "Bắt đầu bằng tìm kiếm creative brief để truy vấn đồng thời style, platform, voiceover, music và reasoning." },
    { number: 3, titleEn: "Apply reasoning", titleVi: "Áp dụng reasoning", descEn: "Use reasoning rules to select the best matches and surface anti-patterns to avoid.", descVi: "Dùng luật reasoning để chọn phương án phù hợp nhất và nêu anti-pattern cần tránh." },
    { number: 4, titleEn: "Supplement details", titleVi: "Bổ sung chi tiết", descEn: "Search style, platform, voiceover, music, or reasoning domains when the brief needs deeper detail.", descVi: "Tra cứu miền style, platform, voiceover, music hoặc reasoning khi brief cần chi tiết hơn." },
    { number: 5, titleEn: "Load references", titleVi: "Tải tham chiếu", descEn: "Open style, color psychology, voiceover, audio, or visual-trend references for implementation guidance.", descVi: "Mở tài liệu về style, tâm lý màu sắc, voiceover, audio hoặc visual trend để hướng dẫn triển khai." },
    { number: 6, titleEn: "Tune platform", titleVi: "Tối ưu nền tảng", descEn: "Match ratio, length, hook timing, captions, and mobile-first expectations for the target channel.", descVi: "Khớp tỷ lệ, độ dài, thời điểm hook, caption và yêu cầu mobile-first cho kênh mục tiêu." },
    { number: 7, titleEn: "Prioritize authenticity", titleVi: "Ưu tiên tính thật", descEn: "Favor real, relatable creative over over-polished ads because the skill’s core statistic favors authenticity.", descVi: "Ưu tiên creative chân thật, dễ đồng cảm hơn quảng cáo quá bóng bẩy vì thống kê cốt lõi của skill ủng hộ tính thật." },
    { number: 8, titleEn: "Prepare production", titleVi: "Chuẩn bị sản xuất", descEn: "Confirm brand guidelines, persona, metrics, first-second hook, sound-off captions, and A/B variables.", descVi: "Xác nhận brand guideline, persona, chỉ số, hook đầu video, caption khi tắt tiếng và biến A/B." },
  ],
  corePrinciplesEn: [
    "Prioritize authentic, relatable content over perfection.",
    "Choose creative direction from audience, campaign goal, industry, and platform—not personal taste alone.",
    "Pair visual style with platform specs, voiceover, music, color, and measurable hooks.",
  ],
  corePrinciplesVi: [
    "Ưu tiên nội dung chân thật, dễ liên hệ hơn sự hoàn hảo.",
    "Chọn định hướng creative từ audience, mục tiêu campaign, ngành và nền tảng—không chỉ theo gu cá nhân.",
    "Ghép phong cách hình ảnh với spec nền tảng, voiceover, âm nhạc, màu sắc và hook đo được.",
  ],
  expertiseAreasEn: ["Creative briefs", "Visual styles", "Platform specs", "Voiceover", "Music direction", "Color psychology", "Campaign reasoning", "Pre-production checks"],
  expertiseAreasVi: ["Creative brief", "Phong cách hình ảnh", "Spec nền tảng", "Voiceover", "Định hướng âm nhạc", "Tâm lý màu sắc", "Reasoning campaign", "Checklist tiền kỳ"],
  promptExamples: [
    { labelEn: "Campaign direction", labelVi: "Định hướng campaign", command: "/ak:creativity TikTok campaign for Gen Z SaaS product launch",
      commandVi: '/ak:creativity chiến dịch TikTok cho ra mắt sản phẩm SaaS Gen Z', whenEn: "Use when a campaign needs style, platform, voice, audio, and effects direction.", whenVi: "Dùng khi campaign cần định hướng style, nền tảng, giọng, âm thanh và hiệu ứng.", expectedEn: "A creative brief with recommendations and anti-patterns.", expectedVi: "Creative brief có khuyến nghị và anti-pattern.", recommended: true },
    { labelEn: "Luxury style", labelVi: "Phong cách luxury", command: "/ak:creativity luxury premium hotel video",
      commandVi: '/ak:creativity video khách sạn sang trọng cao cấp', whenEn: "Use when the brand goal is premium perception.", whenVi: "Dùng khi mục tiêu brand là tạo cảm nhận cao cấp.", expectedEn: "Style, color, music, and platform guidance suitable for premium audiences.", expectedVi: "Hướng dẫn style, màu sắc, âm nhạc và nền tảng phù hợp audience cao cấp." },
    { labelEn: "UGC direction", labelVi: "Định hướng UGC", command: "/ak:creativity authentic UGC community campaign",
      commandVi: '/ak:creativity chiến dịch cộng đồng UGC chân thực', whenEn: "Use when relatability and community trust matter more than polish.", whenVi: "Dùng khi sự gần gũi và niềm tin cộng đồng quan trọng hơn độ bóng bẩy.", expectedEn: "Raw, relatable creative direction with production checks.", expectedVi: "Định hướng creative thô mộc, dễ đồng cảm kèm checklist sản xuất." },
  ],
};

export default data;
