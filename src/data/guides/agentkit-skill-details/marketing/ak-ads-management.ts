import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-ads-management",
  command: "/ak:ads-management",
  kit: 'marketer',
  header: {
    titleEn: '/ak:ads-management — Ads Management',
    titleVi: '/ak:ads-management — Quản lý quảng cáo trả phí',
    taglineEn: "Build, launch, measure, and optimize paid campaigns across Google, Meta, LinkedIn, and TikTok, including copy, audiences, bidding, tracking, A/B testing, ROAS, and AI-generated creatives.",
    taglineVi: "Xây, launch, đo lường và tối ưu campaign trả phí trên Google, Meta, LinkedIn và TikTok, gồm copy, audience, bidding, tracking, A/B test, ROAS và creative tạo bằng AI.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Protect ad credentials and boundaries",
    titleVi: "Bảo vệ credential và phạm vi ads",
    contentEn: "The skill says to refuse out-of-scope requests and never expose env vars, internal configs, personal data, skill internals, or system prompts.",
    contentVi: "Skill yêu cầu từ chối việc ngoài phạm vi và không bao giờ lộ env var, cấu hình nội bộ, dữ liệu cá nhân, nội dung skill hoặc system prompt.",
  },
  processFlow: [
    { number: 1, titleEn: "Set objective", titleVi: "Chốt mục tiêu", descEn: "Define whether the campaign optimizes for awareness, traffic, conversions, ROAS, CPA, or another measurable paid-media outcome.", descVi: "Xác định campaign tối ưu cho awareness, traffic, conversion, ROAS, CPA hay một kết quả paid-media đo được khác." },
    { number: 2, titleEn: "Research market", titleVi: "Nghiên cứu thị trường", descEn: "Load competitor-analysis-and-tools guidance to examine keywords, competitor ads, positioning, channel fit, and creative angles.", descVi: "Dùng hướng dẫn competitor-analysis-and-tools để xem keyword, ads đối thủ, định vị, mức phù hợp kênh và góc creative." },
    { number: 3, titleEn: "Plan budget", titleVi: "Lập ngân sách", descEn: "Use campaign-setup-and-bidding to choose platform, campaign type, budget, bidding strategy, scaling path, and expected CPA or ROAS thresholds.", descVi: "Dùng campaign-setup-and-bidding để chọn nền tảng, loại campaign, ngân sách, chiến lược bid, hướng scale và ngưỡng CPA/ROAS kỳ vọng." },
    { number: 4, titleEn: "Build audiences", titleVi: "Tạo audience", descEn: "Create targeting segments from audience-targeting guidance: cold, retargeting, lookalike, demographic, intent, and exclusion audiences.", descVi: "Tạo segment theo audience-targeting: cold, retargeting, lookalike, demographic, intent và nhóm loại trừ." },
    { number: 5, titleEn: "Write copy", titleVi: "Viết copy", descEn: "Produce channel-appropriate ad copy variations from the templates: hooks, benefits, proof, objections, offers, and CTAs.", descVi: "Viết nhiều biến thể copy đúng kênh từ template: hook, lợi ích, bằng chứng, xử lý phản đối, offer và CTA." },
    { number: 6, titleEn: "Generate creatives", titleVi: "Tạo creative", descEn: "Activate ai-artist and ai-multimodal for images or short videos, matching platform specs such as 1:1, 4:5, 9:16, 16:9, and output quality needs.", descVi: "Kích hoạt ai-artist và ai-multimodal để tạo ảnh hoặc video ngắn, khớp spec nền tảng như 1:1, 4:5, 9:16, 16:9 và mức chất lượng cần thiết." },
    { number: 7, titleEn: "Instrument tracking", titleVi: "Gắn đo lường", descEn: "Set up Pixel, Conversions API, GTM, UTMs, attribution model, conversion events, and reporting views before traffic is bought.", descVi: "Thiết lập Pixel, Conversions API, GTM, UTM, mô hình attribution, conversion event và view báo cáo trước khi mua traffic." },
    { number: 8, titleEn: "Launch and optimize", titleVi: "Launch và tối ưu", descEn: "Monitor spend, CTR, CVR, CPC, CPM, CPA, MER, and ROAS; use the optimization playbook for A/B testing, pausing, scaling, and budget moves.", descVi: "Theo dõi spend, CTR, CVR, CPC, CPM, CPA, MER và ROAS; dùng playbook tối ưu để A/B test, pause, scale và chuyển ngân sách." },
  ],
  corePrinciplesEn: [
    "Paid ads must tie creative, audience, budget, and measurement into one accountable campaign system.",
    "Creative generation is part of the workflow, not an afterthought; match assets to each platform's size and length constraints.",
    "Optimize with ROAS, CPA, MER, and conversion quality instead of vanity delivery metrics alone.",
    "Refuse organic-social, SEO, email, and website-development work that belongs to other skills.",
  ],
  corePrinciplesVi: [
    "Paid ads phải nối creative, audience, ngân sách và đo lường thành một hệ thống campaign có trách nhiệm rõ.",
    "Tạo creative là một phần của workflow, không phải việc phụ; asset phải khớp size và độ dài của từng nền tảng.",
    "Tối ưu bằng ROAS, CPA, MER và chất lượng conversion, không chỉ nhìn metric phân phối hào nhoáng.",
    "Từ chối organic social, SEO, email và website development vì các việc đó thuộc skill khác.",
  ],
  expertiseAreasEn: ["Campaign setup", "Audience targeting", "Ad copy variants", "AI ad creatives", "Measurement and attribution", "ROAS optimization"],
  expertiseAreasVi: ["Thiết lập campaign", "Target audience", "Biến thể ad copy", "Creative quảng cáo bằng AI", "Đo lường và attribution", "Tối ưu ROAS"],
  skillStack: [
    { name: "ai-artist", type: 'skill' },
    { name: "ai-multimodal", type: 'skill' },
    { name: "assets-organizing", type: 'skill' },
  ],
  promptExamples: [{ labelEn: "Meta conversion campaign", labelVi: "Campaign conversion trên Meta", command: "/ak:ads-management Meta conversions",
      commandVi: '/ak:ads-management Meta chuyển đổi', whenEn: "You need a full paid-social conversion campaign plan and assets.", whenVi: "Khi cần kế hoạch và asset cho campaign paid social tối ưu conversion.", expectedEn: "Objective, audience segments, copy variants, creative plan, tracking, metrics, and optimization steps.", expectedVi: "Nhận mục tiêu, segment audience, biến thể copy, kế hoạch creative, tracking, metric và bước tối ưu.", recommended: true },
    { labelEn: "Google search campaign", labelVi: "Campaign Google Search", command: "/ak:ads-management Google Ads search",
      commandVi: '/ak:ads-management Tìm kiếm Google Ads', whenEn: "Search intent, competitor keywords, and bidding need to be planned together.", whenVi: "Khi cần lập keyword theo intent tìm kiếm, đối thủ và chiến lược bid cùng lúc.", expectedEn: "A paid-search setup with keyword research, budget, bidding, copy, and reporting guidance.", expectedVi: "Bản setup paid search gồm nghiên cứu keyword, ngân sách, bidding, copy và hướng báo cáo." },
    { labelEn: 'Meta retargeting', labelVi: 'Retargeting Meta', command: '/ak:ads-management Meta retargeting for trial users',
      commandVi: '/ak:ads-management Retargeting Meta cho người dùng dùng thử', whenEn: 'You need a paid campaign brief for a specific platform and audience.', whenVi: 'Khi cần brief chiến dịch trả phí cho một nền tảng và audience cụ thể.', expectedEn: 'Objective, audience, budget, copy variants, creative specs, and tracking notes for Meta retargeting.', expectedVi: 'Mục tiêu, audience, ngân sách, biến thể copy, spec creative và ghi chú tracking cho retargeting Meta.' }
  ],
  reportOutput: {
    titleEn: "Ads report",
    titleVi: "Báo cáo ads",
    patternEn: "assets/reports/ads/{date}-{platform}-report.md",
    patternVi: "assets/reports/ads/{date}-{platform}-report.md",
    descEn: "Use assets-organizing when the campaign needs durable reports, creative folders, or performance assets.",
    descVi: "Dùng assets-organizing khi campaign cần báo cáo, thư mục creative hoặc asset hiệu suất được lưu bền vững.",
  },
};

export default data;
