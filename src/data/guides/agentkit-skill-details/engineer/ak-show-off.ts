import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax:
    '/ak:show-off [markdown-or-prompt] [--no-screenshots] [--no-publish] [--languages en|vi|en,vi] [--no-antv|--no-diagram-design|--no-editorial-visuals]',
  arguments: [
    {
      token: '[markdown-or-prompt]',
      titleEn: 'Showcase mission',
      titleVi: 'Nhiệm vụ showcase',
      descEn:
        'Prompt, Markdown brief, or source material to turn into a self-contained showcase. State the mission, audience, evidence standard, publication boundary, screenshot choice, and language; do not include credentials or sensitive private data.',
      descVi:
        'Prompt, brief Markdown hoặc tư liệu nguồn cần chuyển thành showcase tự chứa. Nêu mission, audience, chuẩn bằng chứng, ranh giới publish, lựa chọn screenshot và ngôn ngữ; không đưa credential hoặc dữ liệu riêng tư nhạy cảm.',
      required: true,
      exampleCommand:
        '/ak:show-off "Create an English-only launch demo from release-notes.md. Local only, no screenshots, for this run only. Cite every external claim and open the final HTML for review."',
          exampleCommandVi: '/ak:show-off "Tạo demo ra mắt chỉ bằng tiếng Anh từ release-notes.md. Chỉ local, không screenshots, chỉ cho lần chạy này. Trích dẫn mọi claim bên ngoài và mở HTML cuối để review."',
    },
  ],
  options: [
    {
      token: '--no-screenshots',
      titleEn: 'Skip screenshots',
      titleVi: 'Bỏ screenshot',
      descEn:
        'Disable local section capture and remote ReviewWeb fallback, then mark capture skipped. Without “for this run only,” this preference is persisted before planning.',
      descVi:
        'Tắt chụp section cục bộ và fallback ReviewWeb từ xa, rồi đánh dấu capture là skipped. Nếu không có “for this run only”, preference này được lưu trước khi lập plan.',
      exampleCommand: '/ak:show-off "Turn this launch note into a showcase" --no-screenshots',
          exampleCommandVi: '/ak:show-off "Biến launch note này thành showcase" --no-screenshots',
    },
    {
      token: '--no-publish',
      titleEn: 'Local only',
      titleVi: 'Chỉ cục bộ',
      descEn:
        'Skip agentwiki document/static-site publication and keep outputs local; this also makes ReviewWeb fallback ineligible. Without a one-run qualifier, the opt-out is persisted.',
      descVi:
        'Bỏ publish document/static site qua agentwiki và giữ output cục bộ; điều này cũng làm fallback ReviewWeb không đủ điều kiện. Nếu không nói chỉ một lần, opt-out sẽ được lưu.',
      exampleCommand: '/ak:show-off "Make a product milestone story" --no-publish',
          exampleCommandVi: '/ak:show-off "Tạo story cột mốc sản phẩm" --no-publish',
    },
    {
      token: '--languages en|vi|en,vi',
      titleEn: 'Language mode',
      titleVi: 'Chế độ ngôn ngữ',
      descEn:
        'Choose English-only, Vietnamese-only, or bilingual Vietnamese/English content. Single-language modes must not add the other language or a bilingual toggle.',
      descVi:
        'Chọn nội dung chỉ tiếng Anh, chỉ tiếng Việt hoặc song ngữ Việt/Anh. Chế độ một ngôn ngữ không được thêm ngôn ngữ còn lại hoặc toggle song ngữ.',
      exampleCommand: '/ak:show-off "Create a customer-facing milestone story" --languages en',
          exampleCommandVi: '/ak:show-off "Tạo story cột mốc hướng tới khách hàng" --languages en',
    },
    {
      token: '--no-antv',
      titleEn: 'No AntV layer',
      titleVi: 'Không lớp AntV',
      descEn:
        'Disable AntV Infographic tiles for non-hero KPI, ranked-list, or quadrant panels for this run; the frontend-design hero still remains mandatory.',
      descVi:
        'Tắt tile AntV Infographic cho panel KPI, ranked-list hoặc quadrant ngoài hero trong lần chạy này; hero do frontend-design vẫn bắt buộc.',
      exampleCommand: '/ak:show-off "Create a launch story" --no-antv',
          exampleCommandVi: '/ak:show-off "Tạo story ra mắt" --no-antv',
    },
    {
      token: '--no-diagram-design',
      titleEn: 'No diagram-design',
      titleVi: 'Không diagram-design',
      descEn:
        'Disable the diagram-design enhancement layer for architecture, process, and data-flow visuals inside sections.',
      descVi:
        'Tắt lớp tăng cường diagram-design cho visual kiến trúc, quy trình và data-flow trong các section.',
      exampleCommand: '/ak:show-off "Create an architecture recap showcase" --no-diagram-design',
          exampleCommandVi: '/ak:show-off "Tạo showcase recap kiến trúc" --no-diagram-design',
    },
    {
      token: '--no-editorial-visuals',
      titleEn: 'No editorial visuals',
      titleVi: 'Không visual biên tập',
      descEn:
        'Disable both additive non-hero editorial visual layers while preserving the core self-contained showcase build.',
      descVi:
        'Tắt cả hai lớp visual biên tập bổ sung ngoài hero nhưng vẫn giữ phần dựng showcase tự chứa cốt lõi.',
      exampleCommand: '/ak:show-off "Create a project recap" --no-editorial-visuals',
          exampleCommandVi: '/ak:show-off "Tạo recap dự án" --no-editorial-visuals',
    },
  ],
};

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
      "descEn": "Read stored screenshot, publishing, and language preferences before content analysis; apply explicit overrides and persist durable changes.",
      "descVi": "Đọc preference về screenshot, publishing và ngôn ngữ trước khi phân tích nội dung; áp dụng override rõ ràng và lưu thay đổi lâu dài khi cần."
    },
    {
      "number": 2,
      "titleEn": "Register plan",
      "titleVi": "Đăng ký plan",
      "descEn": "Invoke project-management, create the dated plan folder, record arguments/preferences, and register always-on plus conditional capture/publish tasks.",
      "descVi": "Gọi project-management, tạo thư mục plan theo ngày, ghi argument/preference, rồi đăng ký task luôn chạy cùng task chụp/publish có điều kiện."
    },
    {
      "number": 3,
      "titleEn": "Analyze mission",
      "titleVi": "Phân tích nhiệm vụ",
      "descEn": "Split the request into a hero plus two to six sections, search the web for evidence, and load any available writing style.",
      "descVi": "Chia yêu cầu thành hero và hai đến sáu section, tìm bằng chứng trên web và nạp writing style nếu có."
    },
    {
      "number": 4,
      "titleEn": "Write content",
      "titleVi": "Viết nội dung",
      "descEn": "Write `assets/showoff/<mission-name>/content.md` with organized sections, citations, and the resolved language mode.",
      "descVi": "Viết `assets/showoff/<mission-name>/content.md` với các section có cấu trúc, citation và đúng chế độ ngôn ngữ đã resolve."
    },
    {
      "number": 5,
      "titleEn": "Publish content draft",
      "titleVi": "Publish bản nội dung",
      "descEn": "If publishing is enabled, publish the markdown with agentwiki; otherwise keep it local and mark the publish task skipped.",
      "descVi": "Nếu bật publishing, publish markdown bằng agentwiki; nếu không, giữ cục bộ và đánh dấu publish là skipped."
    },
    {
      "number": 6,
      "titleEn": "Design HTML",
      "titleVi": "Thiết kế HTML",
      "descEn": "Activate frontend-design to build a self-contained page with a strong hero, smooth sections, responsive ratios, theme toggle, Vietnamese-safe fonts, and optional visual layers.",
      "descVi": "Kích hoạt frontend-design để dựng trang tự chứa có hero mạnh, section cuộn mượt, responsive theo tỷ lệ, nút theme, font hỗ trợ tiếng Việt và lớp visual tùy chọn."
    },
    {
      "number": 7,
      "titleEn": "Capture and publish",
      "titleVi": "Chụp ảnh và publish",
      "descEn": "Capture section images when screenshots are enabled, use the rws fallback only when publishing makes the page public, then publish/update the static site or report the local path.",
      "descVi": "Chụp ảnh từng section khi bật screenshot, chỉ dùng fallback rws khi publishing giúp trang có URL công khai, rồi publish/cập nhật static site hoặc báo đường dẫn cục bộ."
    },
    {
      "number": 8,
      "titleEn": "Open and hand off",
      "titleVi": "Mở trang và bàn giao",
      "descEn": "Open the resulting HTML page, run the five-dimension design handoff check, and fix failures or list known limitations explicitly.",
      "descVi": "Mở trang HTML kết quả, chạy kiểm tra bàn giao thiết kế theo năm tiêu chí và sửa lỗi hoặc ghi rõ hạn chế đã biết."
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
  "invocation": invocation,
  "promptExamples": [
    {
      "labelEn": "Default showcase",
      "labelVi": "Showcase mặc định",
      "command": "/ak:show-off \"Create a showcase page for our realtime dashboard launch\"",
      "whenEn": "Use when you need a polished self-contained demo or visual presentation page.",
      "whenVi": "Dùng khi cần một trang demo hoặc presentation tự chứa, được thiết kế chỉn chu.",
      "expectedEn": "Resolves show-off preferences, registers the plan, writes cited content, builds frontend-design quality HTML, captures sections, publishes when enabled, and runs the handoff gate.",
      "expectedVi": "Resolve preference show-off, đăng ký plan, viết nội dung có citation, dựng HTML đạt chuẩn frontend-design, chụp từng section, publish khi bật và chạy cổng bàn giao.",
      "recommended": true
    },
    {
      "labelEn": "Skip screenshots",
      "labelVi": "Bỏ qua screenshot",
      "command": "/ak:show-off \"Turn this launch note into a showcase\" --no-screenshots",
      "whenEn": "Use when you only need the local or published HTML page, not section image exports.",
      "whenVi": "Dùng khi chỉ cần trang HTML cục bộ hoặc đã publish, không cần xuất ảnh từng section.",
      "expectedEn": "Persists the screenshot opt-out unless scoped otherwise, registers capture as skipped, still writes content, builds the showcase page, opens it, and reports the HTML path.",
      "expectedVi": "Lưu lựa chọn tắt screenshot trừ khi chỉ áp dụng một lần, đánh dấu capture là skipped, vẫn viết nội dung, dựng trang showcase, mở trang và báo đường dẫn HTML."
    },
    {
      "labelEn": "English local-only page",
      "labelVi": "Trang tiếng Anh chỉ chạy local",
      "command": "/ak:show-off \"Make a customer-facing product milestone story\" --no-publish --languages en",
      "whenEn": "Use when the showcase must stay local and use English-only copy with no bilingual toggle.",
      "whenVi": "Dùng khi showcase phải giữ cục bộ và chỉ dùng copy tiếng Anh, không có toggle song ngữ.",
      "expectedEn": "Applies the local-only and English language preferences, skips agentwiki publishing and rws fallback, creates the cited markdown plus HTML artifact, and reports local outputs.",
      "expectedVi": "Áp preference chỉ chạy local và ngôn ngữ tiếng Anh, bỏ qua agentwiki publishing và fallback rws, tạo markdown có citation cùng artifact HTML, rồi báo output cục bộ."
    },
    {
      "labelEn": "Plain architecture recap",
      "labelVi": "Recap kiến trúc ít lớp visual",
      "command": "/ak:show-off \"Create an architecture recap showcase\" --no-diagram-design --no-editorial-visuals",
      "whenEn": "Use when you want the showcase without diagram-design or additive non-hero editorial visuals.",
      "whenVi": "Dùng khi muốn showcase không dùng diagram-design hoặc visual biên tập bổ sung ngoài hero.",
      "expectedEn": "Keeps the required frontend-design hero and responsive sections, disables diagram-design and editorial visual enhancements, then follows the normal capture, publish, and handoff gates.",
      "expectedVi": "Giữ hero frontend-design bắt buộc và các section responsive, tắt diagram-design cùng visual biên tập bổ sung, rồi đi qua các cổng chụp ảnh, publish và bàn giao như bình thường."
    }
  ],
  "outputFlags": [
    {
      "flag": "--no-screenshots",
      "titleEn": "Skip capture",
      "titleVi": "Bỏ chụp ảnh",
      "descEn": "Disables section screenshot capture, avoids the local capture script and rws fallback, and marks the capture task skipped.",
      "descVi": "Tắt chụp ảnh từng section, không chạy script capture cục bộ hoặc fallback rws, và đánh dấu task capture là skipped.",
      "exampleCommand": "/ak:show-off launch story --no-screenshots"
    },
    {
      "flag": "--no-publish",
      "titleEn": "Keep local",
      "titleVi": "Giữ cục bộ",
      "descEn": "Disables agentwiki publishing and keeps both content and static page outputs local.",
      "descVi": "Tắt agentwiki publishing và giữ cả nội dung lẫn trang static ở cục bộ.",
      "exampleCommand": "/ak:show-off product recap --no-publish"
    },
    {
      "flag": "--languages en|vi|en,vi",
      "titleEn": "Choose language mode",
      "titleVi": "Chọn chế độ ngôn ngữ",
      "descEn": "Sets English-only, Vietnamese-only, or bilingual content; bilingual mode needs a clear toggle or parallel treatment.",
      "descVi": "Chọn nội dung chỉ tiếng Anh, chỉ tiếng Việt hoặc song ngữ; chế độ song ngữ cần toggle rõ ràng hoặc trình bày song song.",
      "exampleCommand": "/ak:show-off launch page --languages en"
    },
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
