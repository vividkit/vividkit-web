import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: "/ak:diagram [request]",
  arguments: [
    {
      token: "[request]",
      titleEn: "Diagram request",
      titleVi: "Yêu cầu sơ đồ",
      descEn: "Natural-language source, target artifact, diagram type or visual goal, output destination, and permission boundaries for browser rendering, video capture, or dependency installation.",
      descVi: "Source, artifact cần tạo, loại sơ đồ hoặc mục tiêu visual, thư mục output và ranh giới cho phép browser rendering, video capture hoặc cài dependency bằng ngôn ngữ tự nhiên.",
      required: true,
      exampleCommand: "/ak:diagram Render checkout-flow.mmd as an editorial PNG and SVG in ./artifacts",
    },
  ],
};

const data: SkillInfographic = {
  id: "ak-diagram",
  command: "/ak:diagram",
  kit: "engineer",
  header: {
    titleEn: "/ak:diagram — Unified editorial diagrams",
    titleVi: "/ak:diagram — Sơ đồ editorial hợp nhất",
    taglineEn: "A deterministic diagram surface for Mermaid, 24 editorial template types, raw HTML, PNG/SVG stills, and MP4/GIF animated connector flows.",
    taglineVi: "Bề mặt tạo sơ đồ ổn định cho Mermaid, 24 loại template editorial, HTML thô, ảnh PNG/SVG và luồng connector động MP4/GIF.",
  },
  processFlow: [
    { number: 1, titleEn: "Route by Artifact", titleVi: "Định tuyến theo artifact", descEn: "Choose ak:diagram for editorial PNG/SVG or short MP4/GIF; route editable canvases to ak:excalidraw, large graph exploration to ak:graphify, and plain Mermaid rendering to ak:mermaid if installed.", descVi: "Chọn ak:diagram cho PNG/SVG editorial hoặc MP4/GIF ngắn; chuyển canvas chỉnh sửa sang ak:excalidraw, khám phá graph lớn sang ak:graphify, và render Mermaid thuần sang ak:mermaid nếu đã cài." },
    { number: 2, titleEn: "Pick Input Tier", titleVi: "Chọn tầng đầu vào", descEn: "Use Tier 1 Mermaid, Tier 2 JSON plus --type when template slots exist, or Tier 3 raw HTML for fully composed pages.", descVi: "Dùng Tier 1 Mermaid, Tier 2 JSON kèm --type khi template có slot, hoặc Tier 3 HTML thô cho trang đã dàn dựng đầy đủ." },
    { number: 3, titleEn: "Account for Limitation", titleVi: "Tính đến giới hạn", descEn: "For current Tier 2 templates, start from vendored HTML and hand-customize because upstream examples do not yet expose replacement slots.", descVi: "Với template Tier 2 hiện tại, bắt đầu từ HTML vendored và chỉnh tay vì ví dụ upstream chưa mở slot thay thế." },
    { number: 4, titleEn: "Compose Editorial Frame", titleVi: "Dàn khung editorial", descEn: "Use strict ink-on-paper palette, one accent, meaningful geometry, and mobile-safe self-contained HTML.", descVi: "Dùng bảng màu mực-trên-giấy chặt chẽ, một màu nhấn, hình học có ý nghĩa và HTML tự chứa an toàn trên mobile." },
    { number: 5, titleEn: "Apply Animation", titleVi: "Thêm chuyển động", descEn: "For flows, attach connector effects such as marching-ants, comet, wave, morse, glow, silhouette, pulse, or dashed-flow.", descVi: "Với luồng chuyển động, gắn hiệu ứng connector như marching-ants, comet, wave, morse, glow, silhouette, pulse hoặc dashed-flow." },
    { number: 6, titleEn: "Render Deterministically", titleVi: "Render ổn định", descEn: "Run render.py for HTML/PNG/SVG or record.py for MP4/GIF with pinned Mermaid, Chromium, fonts, and animation freezing.", descVi: "Chạy render.py để xuất HTML/PNG/SVG hoặc record.py để xuất MP4/GIF với Mermaid, Chromium, font cố định và animation được đóng băng." },
    { number: 7, titleEn: "Verify Goldens", titleVi: "Kiểm tra golden", descEn: "For intended visual changes, compare against snapshot hashes under the pinned Chromium/font profile before updating goldens.", descVi: "Với thay đổi hình ảnh có chủ đích, so với snapshot hash trong profile Chromium/font đã ghim trước khi cập nhật golden." },
    { number: 8, titleEn: "Deliver Attribution", titleVi: "Bàn giao kèm nguồn", descEn: "Return generated artifacts and preserve Mermaid/template/effect attribution through the shared third-party notices ledger.", descVi: "Trả lại artifact đã tạo và giữ attribution cho Mermaid/template/effect qua sổ third-party notices chung." },
  ],
  corePrinciplesEn: [
    "Pick by target artifact, not by the word diagram.",
    "Editorial diagrams should carry meaning through geometry, palette, and animation.",
    "Deterministic rendering matters: pinned Mermaid, browser, fonts, and frozen animations.",
    "Raw HTML is the honest path when template slots are not declared yet.",
  ],
  corePrinciplesVi: [
    "Chọn theo artifact cần tạo, không chọn chỉ vì có chữ diagram.",
    "Sơ đồ editorial phải truyền nghĩa bằng hình học, bảng màu và chuyển động.",
    "Render ổn định rất quan trọng: Mermaid, trình duyệt, font và animation đều được ghim.",
    "HTML thô là đường đi đúng khi template chưa khai báo slot.",
  ],
  expertiseAreasEn: [
    "Mermaid v11 wrapping and SVG extraction",
    "Twenty-four editorial diagram base types with light, dark, and full variants",
    "Self-contained HTML, PNG screenshots, SVG extraction, and video recording",
    "Zero-dependency connector effects and reduced-motion handling",
    "Snapshot hashes, pinned renderer profiles, and vendored template source records",
  ],
  expertiseAreasVi: [
    "Bọc Mermaid v11 và trích xuất SVG",
    "Hai mươi bốn loại sơ đồ editorial với biến thể light, dark và full",
    "HTML tự chứa, chụp PNG, trích SVG và ghi video",
    "Hiệu ứng connector không phụ thuộc thư viện và hỗ trợ reduced-motion",
    "Snapshot hash, profile render được ghim và nguồn template vendored",
  ],
  workflowModes: [
    { flag: "Mermaid source", modeEn: "Tier 1", modeVi: "Tầng 1", research: "Read Mermaid input guidance", redTeam: "Check syntax and framing", validation: "HTML/PNG/SVG emitted", cookFlag: ".mmd input" },
    { flag: "JSON spec + type", modeEn: "Tier 2", modeVi: "Tầng 2", research: "Read per-type schema", redTeam: "Check template slot limitation", validation: "Template render output", cookFlag: "type slug" },
    { flag: "Raw HTML", modeEn: "Tier 3", modeVi: "Tầng 3", research: "Inspect composed page", redTeam: "Check mobile and animation", validation: "Rendered artifact output", cookFlag: ".html input" },
  ],
  invocation,
  specialOperations: [
    { id: "template-limitation", titleEn: "Tier 2 caveat", titleVi: "Lưu ý Tier 2", descEn: "JSON specs are wired, but current vendored templates are finished exemplars without declared replacement slots.", descVi: "JSON spec đã được nối, nhưng template vendored hiện là ví dụ hoàn chỉnh chưa khai báo slot thay thế.", color: "amber" },
    { id: "reduced-motion", titleEn: "Reduced motion", titleVi: "Giảm chuyển động", descEn: "Connector effects freeze automatically under prefers-reduced-motion for accessible animated output.", descVi: "Hiệu ứng connector tự đóng băng khi người dùng bật prefers-reduced-motion để artifact động vẫn dễ tiếp cận.", color: "sky" },
  ],
  skillStack: [
    { name: "Mermaid v11", type: "tool" },
    { name: "Playwright Chromium", type: "tool" },
    { name: "ffmpeg", type: "tool" },
    { name: "render.py", type: "tool" },
    { name: "record.py", type: "tool" },
    { name: "ak:excalidraw", type: "skill" },
    { name: "ak:graphify", type: "skill" },
  ],
  reportOutput: {
    titleEn: "Diagram Artifacts",
    titleVi: "Artifact sơ đồ",
    patternEn: "<basename>.html + <basename>.png + optional .svg/.mp4/.gif",
    patternVi: "<basename>.html + <basename>.png + tùy chọn .svg/.mp4/.gif",
    locationEn: "Requested output directory",
    locationVi: "Thư mục output được yêu cầu",
    descEn: "Self-contained HTML, deterministic 2× PNG, extracted SVG when present, and reproducible MP4/GIF recordings for animated flows.",
    descVi: "HTML tự chứa, PNG 2× ổn định, SVG được trích khi có, và bản ghi MP4/GIF có thể lặp lại cho luồng động.",
  },
  promptExamples: [
    { labelEn: "Mermaid to editorial PNG/SVG", labelVi: "Mermaid sang PNG/SVG editorial", command: "/ak:diagram Render checkout-flow.mmd as an editorial PNG and SVG in ./artifacts with a dark frame, no dependency installation, and any unverified output called out.", whenEn: "The desired artifact is a polished static diagram from Mermaid source, not a plain Mermaid render or editable canvas.", whenVi: "Artifact mong muốn là sơ đồ tĩnh chỉn chu từ Mermaid source, không phải render Mermaid thuần hay canvas chỉnh sửa.", expectedEn: "Uses the Tier 1 Mermaid path with vendored Mermaid, wraps the source in the editorial frame, emits self-contained HTML plus PNG and extractable SVG when present, and reports dependency or renderer limits.", expectedVi: "Dùng đường Tier 1 Mermaid với Mermaid vendored, bọc source trong khung editorial, xuất HTML tự chứa kèm PNG và SVG nếu extract được, đồng thời báo giới hạn dependency hoặc renderer.", recommended: true },
    { labelEn: "Animated connector video", labelVi: "Video connector động", command: "/ak:diagram Create a six-second MP4 connector-flow animation from diagram.html for the checkout handoff; make a GIF only if I ask for it separately.", whenEn: "A short video better explains movement or handoff than a still image.", whenVi: "Video ngắn giải thích chuyển động hoặc bàn giao tốt hơn ảnh tĩnh.", expectedEn: "Treats video as a separate recording step over prepared HTML, uses the bundled connector effects where appropriate, emits MP4 by default, and notes ffmpeg plus frame-capture requirements.", expectedVi: "Xem video là bước record riêng trên HTML đã chuẩn bị, dùng connector effect bundled khi phù hợp, mặc định xuất MP4, và nêu yêu cầu ffmpeg cùng frame capture." },
    { labelEn: "Hand-customized template", labelVi: "Template chỉnh tay", command: "/ak:diagram Render my hand-edited loop.html as a mobile-safe editorial HTML and PNG; do not rely on JSON slot replacement.", whenEn: "You need one of the editorial template looks today, but the current vendored templates do not expose useful JSON replacement slots.", whenVi: "Bạn cần giao diện của template editorial ở hiện tại, nhưng template vendored chưa mở slot thay thế JSON hữu ích.", expectedEn: "Uses the Tier 3 raw-HTML path, preserves the composed page content, renders the self-contained HTML and PNG, and avoids promising structured JSON fields will populate the template.", expectedVi: "Dùng đường Tier 3 HTML thô, giữ nội dung trang đã dàn dựng, render HTML tự chứa và PNG, và không hứa rằng field JSON có cấu trúc sẽ điền vào template." },
    { labelEn: "Dependency readiness probe", labelVi: "Probe dependency", command: "/ak:diagram Check whether this environment can render PNG/SVG and record MP4 for ./diagrams without installing anything.", whenEn: "Before rendering, you need to know whether Playwright, Chromium, vendored Mermaid, and ffmpeg are available without changing the environment.", whenVi: "Trước khi render, bạn cần biết Playwright, Chromium, Mermaid vendored và ffmpeg có sẵn hay không mà không thay đổi environment.", expectedEn: "Runs the non-installing dependency probe, separates browser-rendered static output from video requirements, and reports missing tools as approval-needed setup rather than silently installing them.", expectedVi: "Chạy dependency probe không cài đặt, tách yêu cầu output tĩnh render bằng browser khỏi video, và báo tool thiếu như setup cần phê duyệt thay vì tự cài âm thầm." },
  ],
};

export default data;
