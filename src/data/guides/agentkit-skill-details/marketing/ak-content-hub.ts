import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-content-hub",
  command: "/ak:content-hub",
  kit: 'marketer',
  header: {
    titleEn: '/ak:content-hub — Visual marketing asset gallery',
    titleVi: '/ak:content-hub — Thư viện asset marketing trực quan',
    taglineEn: "Opens, scans, searches, and serves a browser-based asset gallery with filters, brand context, preview/edit actions, and an R2-ready manifest.",
    taglineVi: "Mở, quét, tìm kiếm và phục vụ thư viện asset trên browser với bộ lọc, ngữ cảnh brand, thao tác preview/edit và manifest sẵn sàng cho R2.",
  },
  processFlow: [
    { number: 1, titleEn: "Choose action", titleVi: "Chọn hành động", descEn: "Read whether the user wants to open, browse, or search the content hub.", descVi: "Đọc xem người dùng muốn mở, duyệt hay tìm kiếm trong content hub." },
    { number: 2, titleEn: "Start gallery", titleVi: "Khởi động gallery", descEn: "Open the local gallery server when the user needs the browser grid.", descVi: "Mở server gallery local khi người dùng cần lưới asset trên trình duyệt." },
    { number: 3, titleEn: "Scan assets", titleVi: "Quét asset", descEn: "Rescan the assets folder so thumbnails, categories, and manifest entries stay current.", descVi: "Quét lại thư mục assets để thumbnail, danh mục và manifest luôn cập nhật." },
    { number: 4, titleEn: "Load brand context", titleVi: "Tải ngữ cảnh brand", descEn: "Read colors and voice from docs/brand-guidelines.md for the sidebar.", descVi: "Đọc màu sắc và giọng brand từ docs/brand-guidelines.md để hiển thị trong sidebar." },
    { number: 5, titleEn: "Filter or search", titleVi: "Lọc hoặc tìm kiếm", descEn: "Use type filters and keyword search to narrow banners, designs, and other assets.", descVi: "Dùng bộ lọc loại và từ khóa để thu hẹp banner, design và các asset khác." },
    { number: 6, titleEn: "Act on assets", titleVi: "Thao tác với asset", descEn: "Preview, edit in Claude, copy paths, or generate new assets with brand context.", descVi: "Preview, sửa trong Claude, copy path hoặc tạo asset mới dựa trên ngữ cảnh brand." },
    { number: 7, titleEn: "Maintain manifest", titleVi: "Duy trì manifest", descEn: "Keep .assets/manifest.json aligned with local status and future R2 fields.", descVi: "Giữ .assets/manifest.json khớp trạng thái local và các trường R2 dùng sau này." },
    { number: 8, titleEn: "Stop server", titleVi: "Dừng server", descEn: "Stop the local server when the gallery is no longer needed.", descVi: "Dừng server local khi không còn cần gallery." },
  ],
  corePrinciplesEn: [
    "Make marketing assets browseable visually, not hidden in folders.",
    "Keep search, filters, and brand context together so asset decisions stay on-brand.",
    "Track local assets in an R2-ready manifest even while cloud sync is disabled.",
  ],
  corePrinciplesVi: [
    "Biến asset marketing thành thư viện trực quan, không chỉ nằm rải rác trong thư mục.",
    "Đặt tìm kiếm, bộ lọc và ngữ cảnh brand cạnh nhau để quyết định asset luôn đúng brand.",
    "Theo dõi asset local bằng manifest sẵn sàng cho R2 dù cloud sync đang tắt.",
  ],
  expertiseAreasEn: ["Asset gallery", "Filtering", "Brand sidebar", "Preview and edit", "Manifest scanning", "R2-ready metadata"],
  expertiseAreasVi: ["Gallery asset", "Bộ lọc", "Sidebar brand", "Preview và edit", "Quét manifest", "Metadata sẵn sàng cho R2"],
  promptExamples: [
    { labelEn: "Open hub", labelVi: "Mở hub", command: "/ak:content-hub open",
      commandVi: '/ak:content-hub mở', whenEn: "Use when you want the browser gallery.", whenVi: "Dùng khi muốn mở gallery trên trình duyệt.", expectedEn: "A local visual grid of assets with sidebar context.", expectedVi: "Lưới asset local kèm ngữ cảnh trong sidebar.", recommended: true },
    { labelEn: "Browse assets", labelVi: "Duyệt asset", command: "/ak:content-hub browse",
      commandVi: '/ak:content-hub browse', whenEn: "Use when exploring the asset library by type or category.", whenVi: "Dùng khi khám phá thư viện asset theo loại hoặc danh mục.", expectedEn: "Filtered browsing through local marketing assets.", expectedVi: "Duyệt asset marketing local qua bộ lọc." },
    { labelEn: "Search library", labelVi: "Tìm trong thư viện", command: "/ak:content-hub search banners",
      commandVi: '/ak:content-hub tìm kiếm banner', whenEn: "Use when looking for matching assets by keyword.", whenVi: "Dùng khi cần tìm asset theo từ khóa.", expectedEn: "Matching assets and paths from the gallery index.", expectedVi: "Asset và đường dẫn phù hợp từ index của gallery." },
  ],
  skillStack: [
    { name: "content-creator", type: "agent" },
    { name: "ui-ux-designer", type: "agent" },
    { name: "brand", type: "skill" },
    { name: "ai-multimodal", type: "skill" },
    { name: "design", type: "skill" },
  ],
  reportOutput: {
    titleEn: "Manifest and routes",
    titleVi: "Manifest và route",
    patternEn: ".assets/manifest.json with /hub, /api/assets, /api/brand, /api/scan, and /file/* routes",
    patternVi: ".assets/manifest.json cùng các route /hub, /api/assets, /api/brand, /api/scan và /file/*",
    descEn: "The hub serves local assets through API routes and keeps a manifest ready for later Cloudflare R2 sync.",
    descVi: "Hub phục vụ asset local qua API route và giữ manifest sẵn sàng để đồng bộ Cloudflare R2 về sau.",
  },
};

export default data;
