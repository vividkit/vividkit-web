import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-affiliate-marketing",
  command: "/ak:affiliate-marketing",
  kit: 'marketer',
  header: {
    titleEn: '/ak:affiliate-marketing — Affiliate Marketing',
    titleVi: '/ak:affiliate-marketing — Affiliate marketing',
    taglineEn: "Design and scale SaaS affiliate programs with commission strategy, platform selection, KOL/KOC recruiting, fraud controls, compliance, partner enablement, and ROI optimization.",
    taglineVi: "Thiết kế và scale chương trình affiliate SaaS với chiến lược hoa hồng, chọn nền tảng, tuyển KOL/KOC, kiểm soát fraud, compliance, enablement cho partner và tối ưu ROI.",
  },
  hardGate: {
    type: 'warning',
    titleEn: "Partner economics create real obligations",
    titleVi: "Kinh tế partner tạo nghĩa vụ thật",
    contentEn: "Keep outreach, contracts, platform commitments, commission terms, payout holds, clawbacks, tax handling, disclosures, and partner termination behind finance, legal, privacy, brand, and program-owner approval.",
    contentVi: "Giữ outreach, hợp đồng, cam kết platform, điều khoản hoa hồng, hold payout, clawback, xử lý thuế, disclosure và chấm dứt partner sau phê duyệt của finance, legal, privacy, brand và chủ chương trình.",
  },
  processFlow: [
    { number: 1, titleEn: "Define program", titleVi: "Định nghĩa chương trình", descEn: "Choose launch, scale, enterprise, fraud-reduction, or ROI-optimization goal, then match the program shape to business stage and ICP.", descVi: "Chọn mục tiêu launch, scale, enterprise, giảm fraud hoặc tối ưu ROI, rồi khớp cấu trúc chương trình với giai đoạn kinh doanh và ICP." },
    { number: 2, titleEn: "Set commissions", titleVi: "Chốt hoa hồng", descEn: "Pick recurring, one-time, tiered, or hybrid compensation with rates, cookie windows, holds, and advancement rules.", descVi: "Chọn hoa hồng recurring, one-time, tiered hoặc hybrid cùng mức trả, cookie window, thời gian hold và luật lên tier." },
    { number: 3, titleEn: "Select platform", titleVi: "Chọn nền tảng", descEn: "Compare FirstPromoter, Rewardful, PartnerStack, and Impact.com by stage, price, integration depth, setup time, and scale requirements.", descVi: "So sánh FirstPromoter, Rewardful, PartnerStack và Impact.com theo giai đoạn, chi phí, độ sâu tích hợp, thời gian setup và nhu cầu scale." },
    { number: 4, titleEn: "Recruit partners", titleVi: "Tuyển partner", descEn: "Identify KOL/KOC, agencies, creators, and aligned affiliates; use outreach templates, vet fit, and prepare onboarding materials.", descVi: "Tìm KOL/KOC, agency, creator và affiliate phù hợp; dùng template outreach, thẩm định fit và chuẩn bị tài liệu onboarding." },
    { number: 5, titleEn: "Enable conversion", titleVi: "Hỗ trợ chuyển đổi", descEn: "Provide landing pages, creative, tracking links, pitch assets, content support, and training so partners can produce qualified referrals.", descVi: "Cung cấp landing page, creative, tracking link, pitch asset, hỗ trợ nội dung và training để partner tạo referral chất lượng." },
    { number: 6, titleEn: "Prevent fraud", titleVi: "Chống gian lận", descEn: "Use vetting, brand-bidding prohibitions, 60-90 day commission holds, clawbacks, monitoring, and risk policies.", descVi: "Dùng vetting, cấm brand bidding, hold hoa hồng 60-90 ngày, clawback, monitoring và chính sách rủi ro." },
    { number: 7, titleEn: "Handle compliance", titleVi: "Đảm bảo compliance", descEn: "Cover FTC disclosures, GDPR, contracts, terms of service, approved claims, and partner obligations before scaling outreach.", descVi: "Xử lý disclosure theo FTC, GDPR, hợp đồng, điều khoản, claim được phép dùng và nghĩa vụ partner trước khi scale outreach." },
    { number: 8, titleEn: "Measure KPIs", titleVi: "Đo KPI", descEn: "Track conversion rate, EPC, affiliate CAC, retention, ROI, partner activation, and revenue contribution by partner tier.", descVi: "Theo dõi conversion rate, EPC, CAC qua affiliate, retention, ROI, mức active của partner và doanh thu theo từng tier partner." },
    { number: 9, titleEn: "Scale and optimize", titleVi: "Scale và tối ưu", descEn: "Run monthly check-ins, tier advancement, retention bonuses, content support, and ROI reviews to expand what works.", descVi: "Duy trì check-in hàng tháng, lên tier, bonus retention, hỗ trợ content và review ROI để mở rộng những gì đang hiệu quả." },
  ],
  corePrinciplesEn: [
    "Affiliate programs work when incentives align with retained customer value, not just raw signups.",
    "Recurring and tiered commissions motivate partners to keep quality high over time.",
    "Fraud prevention and disclosure rules must be designed into the program before scale.",
    "Partner enablement is a conversion lever: better assets, landing pages, and training raise affiliate ROI.",
  ],
  corePrinciplesVi: [
    "Chương trình affiliate hiệu quả khi incentive gắn với giá trị khách hàng giữ lại, không chỉ số signup thô.",
    "Hoa hồng recurring và theo tier giúp partner có động lực duy trì chất lượng dài hạn.",
    "Chống fraud và luật disclosure phải được thiết kế vào chương trình trước khi scale.",
    "Enablement cho partner là đòn bẩy conversion: asset, landing page và training tốt hơn sẽ tăng ROI affiliate.",
  ],
  expertiseAreasEn: ["SaaS commission models", "Partner platform selection", "KOL/KOC recruiting", "Fraud prevention", "FTC/GDPR compliance", "Affiliate ROI"],
  expertiseAreasVi: ["Mô hình hoa hồng SaaS", "Chọn platform partner", "Tuyển KOL/KOC", "Phòng chống fraud", "Compliance FTC/GDPR", "ROI affiliate"],
  promptExamples: [{ labelEn: "Launch a SaaS program", labelVi: "Launch chương trình SaaS", command: "/ak:affiliate-marketing launch program",
      commandVi: '/ak:affiliate-marketing khởi chạy chương trình', whenEn: "You need the first affiliate program structure for an early SaaS product.", whenVi: "Khi cần cấu trúc chương trình affiliate đầu tiên cho SaaS giai đoạn sớm.", expectedEn: "Commission model, platform recommendation, partner profile, fraud controls, and first recruiting plan.", expectedVi: "Nhận mô hình hoa hồng, gợi ý platform, chân dung partner, kiểm soát fraud và kế hoạch tuyển ban đầu.", recommended: true },
    { labelEn: "Optimize ROI", labelVi: "Tối ưu ROI", command: "/ak:affiliate-marketing optimize ROI",
      commandVi: '/ak:affiliate-marketing tối ưu hóa ROI', whenEn: "An existing partner program needs better EPC, retention, or revenue quality.", whenVi: "Khi chương trình hiện có cần cải thiện EPC, retention hoặc chất lượng doanh thu.", expectedEn: "A KPI diagnosis with partner-tier actions, incentive changes, and enablement improvements.", expectedVi: "Chẩn đoán KPI kèm hành động theo tier partner, chỉnh incentive và cải thiện enablement." },
    { labelEn: 'Recurring SaaS program', labelVi: 'Chương trình SaaS định kỳ', command: '/ak:affiliate-marketing launch a 25% recurring SaaS affiliate program',
      commandVi: '/ak:affiliate-marketing khởi chạy chương trình affiliate SaaS định kỳ 25%', whenEn: 'You are designing a new affiliate program around commission and partner fit.', whenVi: 'Khi thiết kế chương trình affiliate mới quanh hoa hồng và partner phù hợp.', expectedEn: 'Program shape, platform options, commission structure, outreach, and fraud/compliance notes.', expectedVi: 'Hình dạng chương trình, lựa chọn nền tảng, cấu trúc hoa hồng, outreach và ghi chú fraud/compliance.' }
  ],
  reportOutput: {
    titleEn: "Affiliate program report",
    titleVi: "Báo cáo chương trình affiliate",
    patternEn: "assets/reports/performance/{date}-affiliate-program.md",
    patternVi: "assets/reports/performance/{date}-affiliate-program.md",
    descEn: "The skill points durable affiliate reports to the performance reports area via assets-organizing.",
    descVi: "Skill định tuyến báo cáo affiliate bền vững vào khu vực performance reports thông qua assets-organizing.",
  },
};

export default data;
