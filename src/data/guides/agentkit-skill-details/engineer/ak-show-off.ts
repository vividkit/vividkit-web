import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-show-off",
  "command": "/ak:show-off",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:show-off — Showcase HTML Presentation",
    "titleVi": "/ak:show-off — Trang HTML trình diễn",
    "taglineEn": "Creates preference-aware, self-contained showcase pages with bilingual or single-language content, frontend-design quality gates, optional screenshots, publishing, and editorial visual layers.",
    "taglineVi": "Tạo trang showcase tự chứa theo preference, hỗ trợ song ngữ hoặc một ngôn ngữ, cổng chất lượng frontend-design, tùy chọn chụp ảnh, publish và lớp visual biên tập."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Project-management before content work",
    "titleVi": "Project-management trước khi làm nội dung",
    "contentEn": "Resolve show-off preferences, invoke project-management, create the dated plan directory, and register the checklist before analyzing or producing content. If planning is blocked, resolve it first.",
    "contentVi": "Phải resolve preference của show-off, gọi project-management, tạo thư mục plan theo ngày và đăng ký checklist trước khi phân tích hoặc tạo nội dung. Nếu bước plan bị chặn, xử lý chặn đó trước."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Resolve preferences",
      "titleVi": "Resolve preference",
      "descEn": "Read stored screenshot, publishing, and language preferences; apply explicit user overrides and persist durable changes.",
      "descVi": "Đọc preference về screenshot, publishing và ngôn ngữ; áp dụng override rõ ràng của người dùng và lưu thay đổi lâu dài khi cần."
    },
    {
      "number": 2,
      "titleEn": "Register plan",
      "titleVi": "Đăng ký plan",
      "descEn": "Invoke project-management, create the dated plan folder, and register analysis, content, HTML, review, capture, and publish tasks.",
      "descVi": "Gọi project-management, tạo thư mục plan theo ngày, rồi đăng ký các task phân tích, nội dung, HTML, review, chụp ảnh và publish."
    },
    {
      "number": 3,
      "titleEn": "Analyze mission",
      "titleVi": "Phân tích nhiệm vụ",
      "descEn": "Split the request into a hero plus two to six evidence-backed sections and load any available writing style.",
      "descVi": "Chia yêu cầu thành hero và hai đến sáu section có bằng chứng, đồng thời nạp writing style nếu có."
    },
    {
      "number": 4,
      "titleEn": "Write content",
      "titleVi": "Viết nội dung",
      "descEn": "Create organized markdown content with citations and the resolved language mode.",
      "descVi": "Tạo nội dung markdown có cấu trúc, kèm citation và đúng chế độ ngôn ngữ đã resolve."
    },
    {
      "number": 5,
      "titleEn": "Design HTML",
      "titleVi": "Thiết kế HTML",
      "descEn": "Activate frontend-design, build a strong hero, smooth sections, responsive ratios, theme toggle, Vietnamese-safe fonts, and optional visual layers.",
      "descVi": "Kích hoạt frontend-design, dựng hero ấn tượng, section cuộn mượt, responsive theo tỷ lệ, nút theme, font hỗ trợ tiếng Việt và lớp visual tùy chọn."
    },
    {
      "number": 6,
      "titleEn": "Publish content",
      "titleVi": "Publish nội dung",
      "descEn": "If publishing is enabled, publish markdown/static site with agentwiki; otherwise keep the artifact local and mark publish skipped.",
      "descVi": "Nếu bật publishing, publish markdown/static site bằng agentwiki; nếu không, giữ artifact cục bộ và đánh dấu publish là skipped."
    },
    {
      "number": 7,
      "titleEn": "Capture sections",
      "titleVi": "Chụp từng section",
      "descEn": "If screenshots are enabled, run the parallel capture script across section IDs and horizontal, vertical, and square ratios.",
      "descVi": "Nếu bật screenshot, chạy script chụp song song theo từng section ID và các tỷ lệ ngang, dọc, vuông."
    },
    {
      "number": 8,
      "titleEn": "Handoff gate",
      "titleVi": "Cổng bàn giao",
      "descEn": "Run the five-dimension design handoff check and fix failures or list known limitations explicitly.",
      "descVi": "Chạy kiểm tra bàn giao thiết kế theo năm tiêu chí và sửa lỗi, hoặc ghi rõ hạn chế đã biết."
    }
  ],
  "corePrinciplesEn": [
    "A showcase is held to product-UI quality, not demo slop",
    "Preferences are workflow controls and must be resolved before planning",
    "Screenshots and publishing are opt-out capable but must be reflected in the plan",
    "Never include credentials or API keys in generated HTML"
  ],
  "corePrinciplesVi": [
    "Showcase phải đạt chất lượng UI sản phẩm, không phải demo tạm bợ",
    "Preference là điều khiển quy trình và phải resolve trước khi lập plan",
    "Screenshot và publishing có thể tắt nhưng phải thể hiện trong plan",
    "Không đưa credential hoặc API key vào HTML sinh ra"
  ],
  "expertiseAreasEn": [
    "self-contained HTML",
    "bilingual showcase copy",
    "section screenshots",
    "static publishing",
    "handoff review"
  ],
  "expertiseAreasVi": [
    "HTML tự chứa",
    "copy showcase song ngữ",
    "ảnh từng section",
    "publish static",
    "review bàn giao"
  ],
  "promptExamples": [
    {
      "labelEn": "Default showcase",
      "labelVi": "Showcase mặc định",
      "command": "/ak:show-off summarize our new realtime dashboard",
      "whenEn": "You want a polished scrollable page for social, demo, or article assets.",
      "whenVi": "Muốn một trang cuộn đẹp để demo, đăng social hoặc làm asset cho bài viết.",
      "expectedEn": "Resolves preferences, plans work, writes content, builds HTML, and captures/publishes according to preferences.",
      "expectedVi": "Resolve preference, lập plan, viết nội dung, dựng HTML và chụp/publish theo preference.",
      "recommended": true
    },
    {
      "labelEn": "No AntV panels",
      "labelVi": "Không dùng panel AntV",
      "command": "/ak:show-off new AI workflow launch --no-antv",
      "whenEn": "The showcase should avoid AntV infographic tile components.",
      "whenVi": "Showcase cần tránh các tile infographic từ AntV.",
      "expectedEn": "Keeps the hero and sections but disables the AntV editorial visual layer.",
      "expectedVi": "Giữ hero và các section nhưng tắt lớp visual biên tập AntV."
    },
    {
      "labelEn": "No diagram design",
      "labelVi": "Không dùng diagram-design",
      "command": "/ak:show-off architecture recap --no-diagram-design",
      "whenEn": "Architecture/process visuals should be drawn without the diagram-design layer.",
      "whenVi": "Visual kiến trúc/quy trình cần được dựng mà không dùng lớp diagram-design.",
      "expectedEn": "Produces the showcase without invoking the diagram-design enhancement path.",
      "expectedVi": "Tạo showcase mà không đi qua nhánh tăng cường diagram-design."
    },
    {
      "labelEn": "Plain editorial visuals",
      "labelVi": "Tắt visual biên tập",
      "command": "/ak:show-off product milestone story --no-editorial-visuals",
      "whenEn": "You want the page without additive non-hero editorial visuals.",
      "whenVi": "Muốn trang không có các visual biên tập bổ sung ngoài hero.",
      "expectedEn": "Builds the showcase with core design only and skips additive editorial layers.",
      "expectedVi": "Dựng showcase bằng thiết kế cốt lõi và bỏ các lớp visual bổ sung."
    }
  ],
  "outputFlags": [
    {
      "flag": "--no-antv",
      "titleEn": "Disable AntV tiles",
      "titleVi": "Tắt tile AntV",
      "descEn": "Prevents AntV Infographic palette use for non-hero KPI, ranked-list, or quadrant panels.",
      "descVi": "Không dùng palette AntV Infographic cho KPI, ranked-list hoặc quadrant panel ngoài hero.",
      "exampleCommand": "/ak:show-off launch story --no-antv"
    },
    {
      "flag": "--no-diagram-design",
      "titleEn": "Disable diagram design",
      "titleVi": "Tắt diagram-design",
      "descEn": "Prevents the diagram-design layer for architecture, process, or data-flow diagrams inside sections.",
      "descVi": "Không dùng lớp diagram-design cho sơ đồ kiến trúc, quy trình hoặc data-flow trong section.",
      "exampleCommand": "/ak:show-off system overview --no-diagram-design"
    },
    {
      "flag": "--no-editorial-visuals",
      "titleEn": "Disable editorial visuals",
      "titleVi": "Tắt visual biên tập",
      "descEn": "Skips additive non-hero editorial visual enhancements while preserving the page build.",
      "descVi": "Bỏ các visual biên tập bổ sung ngoài hero nhưng vẫn dựng trang.",
      "exampleCommand": "/ak:show-off project recap --no-editorial-visuals"
    }
  ]
};

export default data;
