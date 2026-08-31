import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-assets-organizing",
  command: "/ak:assets-organizing",
  kit: 'marketer',
  header: {
    titleEn: '/ak:assets-organizing — Assets Organizing',
    titleVi: '/ak:assets-organizing — Tổ chức asset',
    taglineEn: "Standardize marketing output paths, naming, date formats, slug rules, report folders, campaign folders, and multi-file asset structures under assets/.",
    taglineVi: "Chuẩn hóa đường dẫn output marketing, naming, định dạng ngày, luật slug, thư mục báo cáo, thư mục campaign và cấu trúc asset nhiều file dưới assets/.",
  },
  hardGate: {
    type: 'warning',
    titleEn: "Avoid accidental overwrite",
    titleVi: "Tránh ghi đè ngoài ý muốn",
    contentEn: "The pre-output checklist requires checking whether the target folder or file already exists before writing assets.",
    contentVi: "Checklist trước khi xuất yêu cầu kiểm tra thư mục hoặc file đích đã tồn tại chưa trước khi ghi asset.",
  },
  processFlow: [
    { number: 1, titleEn: "Classify asset", titleVi: "Phân loại asset", descEn: "Determine whether the output is an article, storyboard, video, transcript, banner, design, infographic, logo, social post, report, copy, campaign, sales, SEO, funnel, lead, community, retention, attraction, or diagnostic asset.", descVi: "Xác định output là article, storyboard, video, transcript, banner, design, infographic, logo, social post, report, copy, campaign, sales, SEO, funnel, lead, community, retention, attraction hay diagnostic asset." },
    { number: 2, titleEn: "Resolve base path", titleVi: "Xác định thư mục gốc", descEn: "Map the asset type to the documented assets/ path, such as reports/analytics, copy/ads, campaigns/{date}-{slug}, or banners/{campaign}.", descVi: "Ánh xạ loại asset vào path assets/ đã ghi, như reports/analytics, copy/ads, campaigns/{date}-{slug} hoặc banners/{campaign}." },
    { number: 3, titleEn: "Load naming rules", titleVi: "Nạp luật đặt tên", descEn: "Use naming-conventions, directory-structure, and asset-types references when the quick reference is not enough.", descVi: "Dùng reference naming-conventions, directory-structure và asset-types khi bảng quick reference chưa đủ." },
    { number: 4, titleEn: "Generate slug", titleVi: "Tạo slug", descEn: "Convert topic, title, platform, campaign, persona, or report type into kebab-case names that remain searchable.", descVi: "Chuyển topic, title, platform, campaign, persona hoặc report type thành tên kebab-case dễ tìm lại." },
    { number: 5, titleEn: "Apply date", titleVi: "Gắn ngày giờ", descEn: "Use CK_PLAN_DATE_FORMAT when present, otherwise the default YYMMDD-HHmm format for time-sensitive assets.", descVi: "Dùng CK_PLAN_DATE_FORMAT nếu có, nếu không thì dùng mặc định YYMMDD-HHmm cho asset nhạy theo thời gian." },
    { number: 6, titleEn: "Check collisions", titleVi: "Kiểm tra trùng", descEn: "Before output, check whether the folder or file exists so generated assets do not silently overwrite prior work.", descVi: "Trước khi xuất, kiểm tra folder hoặc file đã tồn tại chưa để asset mới không âm thầm ghi đè việc cũ." },
    { number: 7, titleEn: "Create structure", titleVi: "Tạo cấu trúc", descEn: "Use self-contained folders for multi-file assets, flat files for single outputs, and platform subfolders for channel-specific content.", descVi: "Dùng thư mục tự chứa cho asset nhiều file, file phẳng cho output đơn, và subfolder theo nền tảng cho nội dung từng kênh." },
    { number: 8, titleEn: "Write together", titleVi: "Ghi đồng bộ", descEn: "Output all related files together: copy, images, scenes, reports, source assets, previews, and campaign deliverables.", descVi: "Ghi các file liên quan cùng nhau: copy, ảnh, scene, báo cáo, source asset, preview và deliverable của campaign." },
    { number: 9, titleEn: "Integrate owners", titleVi: "Kết nối owner", descEn: "Coordinate with marketing skills and agents such as ads-management, analytics, campaign, email, social, SEO, content, funnel, and design owners.", descVi: "Phối hợp với skill và agent marketing như ads-management, analytics, campaign, email, social, SEO, content, funnel và design." },
  ],
  corePrinciplesEn: [
    "Every durable marketing output should have a predictable assets/ home before it is written.",
    "Use kebab-case slugs and date prefixes for time-sensitive work.",
    "Multi-file deliverables belong in self-contained folders; single outputs stay flat.",
    "Organize by asset type, campaign, platform, and report purpose so outputs remain searchable.",
  ],
  corePrinciplesVi: [
    "Mọi output marketing cần lưu bền vững phải có vị trí assets/ dự đoán được trước khi ghi.",
    "Dùng slug kebab-case và prefix ngày cho việc nhạy theo thời gian.",
    "Deliverable nhiều file nằm trong thư mục tự chứa; output đơn thì để file phẳng.",
    "Tổ chức theo loại asset, campaign, nền tảng và mục đích báo cáo để dễ tìm lại.",
  ],
  expertiseAreasEn: ["Asset paths", "Kebab-case naming", "Date prefixes", "Campaign folders", "Report locations", "Multi-file deliverables", "Platform subfolders"],
  expertiseAreasVi: ["Đường dẫn asset", "Tên kebab-case", "Prefix ngày", "Thư mục campaign", "Vị trí báo cáo", "Deliverable nhiều file", "Subfolder theo nền tảng"],
  promptExamples: [{ labelEn: "Organize a campaign", labelVi: "Tổ chức campaign", command: "/ak:assets-organizing campaign assets",
      commandVi: '/ak:assets-organizing tài sản chiến dịch', whenEn: "A campaign will produce briefs, creatives, reports, and source assets.", whenVi: "Khi campaign sẽ tạo brief, creative, report và source asset.", expectedEn: "A folder and naming plan under assets/campaigns with collision checks.", expectedVi: "Kế hoạch folder và tên file dưới assets/campaigns, có kiểm tra trùng.", recommended: true },
    { labelEn: "Place a report", labelVi: "Đặt vị trí báo cáo", command: "/ak:assets-organizing analytics report",
      commandVi: '/ak:assets-organizing báo cáo phân tích', whenEn: "A report needs the correct durable path and filename pattern.", whenVi: "Khi báo cáo cần đúng path lưu bền vững và pattern tên file.", expectedEn: "The correct reports path, slug/date format, and pre-output checklist.", expectedVi: "Path báo cáo đúng, format slug/ngày và checklist trước khi xuất." },
    { labelEn: 'Launch asset library', labelVi: 'Thư viện asset launch', command: '/ak:assets-organizing organize launch campaign assets',
      commandVi: '/ak:assets-organizing tổ chức tài sản chiến dịch ra mắt', whenEn: 'Campaign files need a consistent folder, naming, and reuse map.', whenVi: 'File chiến dịch cần thư mục, naming và bản đồ tái sử dụng nhất quán.', expectedEn: 'Classification, destination paths, and naming for the launch asset set.', expectedVi: 'Phân loại, đường dẫn đích và naming cho bộ asset launch.' }
  ],
};

export default data;
