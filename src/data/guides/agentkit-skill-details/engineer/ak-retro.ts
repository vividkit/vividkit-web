import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:retro [timeframe] [--compare] [--team] [--format html|md] [--no-antv|--no-diagram-design|--no-editorial-visuals]',
  arguments: [
    {
      token: '[timeframe]',
      titleEn: 'Timeframe',
      titleVi: 'Khung thời gian',
      descEn: 'Period to analyze. Accepts 7d, 2w, 1m, sprint, or YYYY-MM-DD:YYYY-MM-DD; defaults to 7d, and sprint asks for a start date when tags cannot define it.',
      descVi: 'Giai đoạn cần phân tích. Nhận 7d, 2w, 1m, sprint hoặc YYYY-MM-DD:YYYY-MM-DD; mặc định là 7d, và sprint sẽ hỏi ngày bắt đầu khi tag không xác định được.',
      exampleCommand: '/ak:retro 2026-07-15:2026-07-28',
          exampleCommandVi: '/ak:retro 2026-07-15:2026-07-28',
    },
  ],
  options: [
    {
      token: '--compare',
      titleEn: 'Compare periods',
      titleVi: 'So sánh giai đoạn',
      descEn: 'Adds the preceding equal-length period and delta columns. It does not invent deltas when the previous window has no data.',
      descVi: 'Thêm giai đoạn liền trước có độ dài bằng nhau và cột delta. Không tạo delta khi cửa sổ trước không có dữ liệu.',
      exampleCommand: '/ak:retro 2w --compare',
          exampleCommandVi: '/ak:retro 2w --compare',
    },
    {
      token: '--team',
      titleEn: 'Author breakdown',
      titleVi: 'Phân tích theo tác giả',
      descEn: 'Adds per-author commit counts and team velocity signals from Git email history; review privacy before sharing.',
      descVi: 'Thêm số commit theo tác giả và tín hiệu velocity của đội từ lịch sử email Git; cần xem xét riêng tư trước khi chia sẻ.',
      exampleCommand: '/ak:retro sprint --team',
          exampleCommandVi: '/ak:retro sprint --team',
    },
    {
      token: '--format html|md',
      titleEn: 'Report format',
      titleVi: 'Định dạng báo cáo',
      descEn: 'Chooses Markdown or self-contained HTML output. HTML uses inline CSS and may include the additive editorial visual layer.',
      descVi: 'Chọn output Markdown hoặc HTML tự chứa. HTML dùng CSS inline và có thể thêm lớp trực quan biên tập bổ sung.',
      exampleCommand: '/ak:retro 1m --format html',
          exampleCommandVi: '/ak:retro 1m --format html',
    },
    {
      token: '--no-antv',
      titleEn: 'No AntV visuals',
      titleVi: 'Không dùng visual AntV',
      descEn: 'Disables optional AntV panels for HTML output. Markdown output is unchanged.',
      descVi: 'Tắt các panel AntV tùy chọn cho output HTML. Output Markdown không đổi.',
      exampleCommand: '/ak:retro 1m --format html --no-antv',
          exampleCommandVi: '/ak:retro 1m --format html --no-antv',
    },
    {
      token: '--no-diagram-design',
      titleEn: 'No diagram design',
      titleVi: 'Không dùng diagram design',
      descEn: 'Disables the optional diagram-design treatment for HTML timelines, hotspots, or radar visuals.',
      descVi: 'Tắt treatment diagram-design tùy chọn cho timeline, hotspot hoặc radar trong HTML.',
      exampleCommand: '/ak:retro 1m --format html --no-diagram-design',
          exampleCommandVi: '/ak:retro 1m --format html --no-diagram-design',
    },
    {
      token: '--no-editorial-visuals',
      titleEn: 'No editorial visuals',
      titleVi: 'Không dùng visual biên tập',
      descEn: 'Disables all additive editorial visual layers for this HTML run; metric tables and formulas still render.',
      descVi: 'Tắt toàn bộ lớp trực quan biên tập bổ sung cho lần chạy HTML này; bảng chỉ số và công thức vẫn hiển thị.',
      exampleCommand: '/ak:retro 1m --format html --no-editorial-visuals',
          exampleCommandVi: '/ak:retro 1m --format html --no-editorial-visuals',
    },
  ],
};

const data: SkillInfographic = {
  "id": "ak-retro",
  "command": "/ak:retro",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:retro",
    "titleVi": "/ak:retro",
    "taglineEn": "Generate an objective engineering retrospective from git history: velocity, churn, hotspots, author activity, plan completion, comparisons, and optional HTML visuals.",
    "taglineVi": "Tạo retrospective kỹ thuật khách quan từ lịch sử git: velocity, churn, điểm nóng, hoạt động tác giả, hoàn thành plan, so sánh và HTML trực quan tùy chọn."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Read-only metrics; never invent data",
    "titleVi": "Chỉ đọc chỉ số; không bịa dữ liệu",
    "contentEn": "The skill must gather facts from git history, optional gh issue data, and plan files only. Empty or unavailable data is reported as 0 or N/A; it must not commit, push, or modify source files.",
    "contentVi": "Skill chỉ lấy dữ kiện từ lịch sử git, dữ liệu issue gh tùy chọn và file plan. Dữ liệu rỗng hoặc không có phải ghi 0 hoặc N/A; không commit, push hoặc sửa source file."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse timeframe",
      "titleVi": "Phân tích khung thời gian",
      "descEn": "Resolve 7d, 2w, 1m, sprint, or YYYY-MM-DD:YYYY-MM-DD into SINCE/UNTIL, and compute the preceding equal-length period when `--compare` is set.",
      "descVi": "Chuyển 7d, 2w, 1m, sprint hoặc YYYY-MM-DD:YYYY-MM-DD thành SINCE/UNTIL, và tính giai đoạn trước có độ dài bằng nhau khi có `--compare`."
    },
    {
      "number": 2,
      "titleEn": "Gather raw git metrics",
      "titleVi": "Thu thập chỉ số git thô",
      "descEn": "Run git commands for commits, LOC added/removed/net, hotspots, conventional commit types, authors, active days, unique files, test changes, and per-author counts when `--team` is set.",
      "descVi": "Chạy lệnh git để lấy commit, LOC thêm/xóa/ròng, hotspot, loại conventional commit, tác giả, ngày hoạt động, file duy nhất, thay đổi test và số commit theo tác giả khi có `--team`."
    },
    {
      "number": 3,
      "titleEn": "Compute derived metrics",
      "titleVi": "Tính chỉ số dẫn xuất",
      "descEn": "Calculate commit frequency, test-to-code ratio, churn rate, active-day ratio, and GitHub issue plan-completion rate where gh data is available, showing formulas in the report.",
      "descVi": "Tính commit frequency, test-to-code ratio, churn rate, active-day ratio và tỷ lệ hoàn thành plan từ GitHub issue khi có dữ liệu gh, đồng thời nêu công thức trong báo cáo."
    },
    {
      "number": 4,
      "titleEn": "Check plans directory",
      "titleVi": "Kiểm tra thư mục plans",
      "descEn": "Scan plan Markdown files updated during the period and count completed versus open checkbox tasks for the plan completion section.",
      "descVi": "Quét các file Markdown plan được cập nhật trong giai đoạn và đếm checkbox đã xong so với còn mở cho phần hoàn thành plan."
    },
    {
      "number": 5,
      "titleEn": "Generate the report",
      "titleVi": "Tạo báo cáo",
      "descEn": "Fill the report template with real table values, N/A where unavailable, highlights, 3–5 specific recommendations, and comparison deltas when requested.",
      "descVi": "Điền template báo cáo bằng giá trị thật trong bảng, N/A khi thiếu dữ liệu, điểm nổi bật, 3–5 khuyến nghị cụ thể và delta so sánh khi được yêu cầu."
    },
    {
      "number": 6,
      "titleEn": "Render optional HTML",
      "titleVi": "Xuất HTML tùy chọn",
      "descEn": "Save Markdown by default; when `--format html` is set, write a self-contained HTML report and apply the visual preferences or kill switches from the invocation.",
      "descVi": "Mặc định lưu Markdown; khi có `--format html`, ghi báo cáo HTML tự chứa và áp dụng tùy chọn trực quan hoặc các flag tắt được truyền trong lệnh."
    }
  ],
  "corePrinciplesEn": [
    "Objective metrics beat narrative guesses",
    "N/A is correct when data or tooling is unavailable",
    "Recommendations must cite actual hotspots, churn, test ratio, or activity distribution",
    "HTML visuals are additive; Markdown remains the default"
  ],
  "corePrinciplesVi": [
    "Chỉ số khách quan tốt hơn kể chuyện phỏng đoán",
    "N/A là đúng khi thiếu dữ liệu hoặc công cụ",
    "Khuyến nghị phải dựa vào hotspot, churn, test ratio hoặc phân bố hoạt động thật",
    "HTML trực quan chỉ là lớp thêm; Markdown vẫn là mặc định"
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Current period retro",
      "modeVi": "Retro giai đoạn hiện tại",
      "research": "Git history for one timeframe",
      "redTeam": "None",
      "validation": "All cells real or N/A"
    },
    {
      "flag": "--compare",
      "modeEn": "Delta comparison",
      "modeVi": "So sánh delta",
      "research": "Adds preceding equal-length period",
      "redTeam": "None",
      "validation": "Delta column for velocity and health"
    },
    {
      "flag": "--team",
      "modeEn": "Author breakdown",
      "modeVi": "Phân tích theo tác giả",
      "research": "Per-author commit counts",
      "redTeam": "None",
      "validation": "Team velocity signals"
    },
    {
      "flag": "--format html|md",
      "modeEn": "Output format",
      "modeVi": "Định dạng đầu ra",
      "research": "Same metrics",
      "redTeam": "None",
      "validation": "Self-contained HTML or Markdown"
    }
  ],
  "invocation": invocation,
  "outputFlags": [
    {
      "flag": "--compare",
      "titleEn": "Compare periods",
      "titleVi": "So sánh giai đoạn",
      "descEn": "Adds a preceding equal-length period and delta columns to velocity and code-health tables.",
      "descVi": "Thêm giai đoạn trước có độ dài bằng nhau và cột delta vào bảng velocity và sức khỏe code.",
      "exampleCommand": "/ak:retro 2w --compare"
    },
    {
      "flag": "--team",
      "titleEn": "Team breakdown",
      "titleVi": "Phân tích đội",
      "descEn": "Includes per-author commit counts and team velocity signals.",
      "descVi": "Thêm số commit theo từng tác giả và tín hiệu velocity của đội.",
      "exampleCommand": "/ak:retro sprint --team"
    },
    {
      "flag": "--format html|md",
      "titleEn": "Report format",
      "titleVi": "Định dạng báo cáo",
      "descEn": "Chooses the default Markdown report or a self-contained HTML report with inline CSS.",
      "descVi": "Chọn báo cáo Markdown mặc định hoặc báo cáo HTML tự chứa với CSS inline.",
      "exampleCommand": "/ak:retro 1m --format html"
    },
    {
      "flag": "--no-antv / --no-diagram-design / --no-editorial-visuals",
      "titleEn": "Visual kill switches",
      "titleVi": "Flag tắt trực quan",
      "descEn": "Disables one or all additive editorial visual layers for HTML output without changing Markdown behavior.",
      "descVi": "Tắt một hoặc toàn bộ lớp trực quan biên tập bổ sung cho HTML mà không đổi hành vi Markdown.",
      "exampleCommand": "/ak:retro 1m --format html --no-editorial-visuals"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Weekly git retro",
      "labelVi": "Retro git hằng tuần",
      "command": "/ak:retro 7d",
      "whenEn": "Use to summarize recent engineering history from git activity for a solo repo or team repo.",
      "whenVi": "Dùng để tóm tắt lịch sử kỹ thuật gần đây từ hoạt động git cho repo cá nhân hoặc repo đội.",
      "expectedEn": "Produces the default Markdown report in plans/reports with git-backed velocity, churn, hotspot, activity, test-ratio, formula, highlight, and recommendation sections; unavailable values stay N/A.",
      "expectedVi": "Tạo báo cáo Markdown mặc định trong plans/reports với velocity, churn, hotspot, hoạt động, tỷ lệ test, công thức, điểm nổi bật và khuyến nghị dựa trên git; dữ liệu thiếu giữ N/A.",
      "recommended": true
    },
    {
      "labelEn": "Sprint comparison by author",
      "labelVi": "So sánh sprint theo tác giả",
      "command": "/ak:retro sprint --compare --team",
      "whenEn": "Use for sprint reviews that need git-history deltas against the previous equal-length period plus per-author activity.",
      "whenVi": "Dùng cho sprint review cần delta từ lịch sử git so với giai đoạn trước có độ dài bằng nhau và hoạt động theo từng tác giả.",
      "expectedEn": "Resolves the sprint timeframe, asks for a start date if needed, compares against the previous period, adds velocity and health deltas, and includes per-author commit counts without inventing missing data.",
      "expectedVi": "Xác định khung thời gian sprint, hỏi ngày bắt đầu nếu cần, so sánh với giai đoạn trước, thêm delta velocity và sức khỏe, đồng thời đưa số commit theo tác giả mà không bịa dữ liệu thiếu."
    },
    {
      "labelEn": "Monthly HTML report",
      "labelVi": "Báo cáo HTML hằng tháng",
      "command": "/ak:retro 1m --format html",
      "whenEn": "Use when engineering history should be shared as a standalone HTML retrospective with the skill's additive visual layer.",
      "whenVi": "Dùng khi cần chia sẻ lịch sử kỹ thuật dưới dạng retrospective HTML độc lập với lớp trực quan bổ sung của skill.",
      "expectedEn": "Writes plans/reports/retro-{YYMMDD}-1m.html as a self-contained report with inline CSS, real metric tables, formulas, recommendations, and configured editorial visuals where enabled.",
      "expectedVi": "Ghi plans/reports/retro-{YYMMDD}-1m.html dưới dạng báo cáo tự chứa với CSS inline, bảng chỉ số thật, công thức, khuyến nghị và trực quan biên tập theo cấu hình khi được bật."
    },
    {
      "labelEn": "Bounded date-range audit",
      "labelVi": "Audit theo khoảng ngày",
      "command": "/ak:retro 2026-08-01:2026-08-15 --format md",
      "whenEn": "Use to summarize engineering history from git activity across an exact release, incident, or milestone window.",
      "whenVi": "Dùng để tóm tắt lịch sử kỹ thuật từ hoạt động git trong một khoảng release, sự cố hoặc mốc cụ thể.",
      "expectedEn": "Uses the explicit SINCE and UNTIL dates, gathers only git and plan facts in that window, computes derived health indicators, and saves the normal Markdown report with N/A for unavailable issue data.",
      "expectedVi": "Dùng đúng ngày SINCE và UNTIL đã nêu, chỉ thu thập dữ kiện git và plan trong khoảng đó, tính chỉ số sức khỏe dẫn xuất và lưu báo cáo Markdown với N/A cho dữ liệu issue không có."
    }
  ],
  "reportOutput": {
    "titleEn": "Retro report",
    "titleVi": "Báo cáo retro",
    "patternEn": "plans/reports/retro-{YYMMDD}-{slug}.md or .html",
    "patternVi": "plans/reports/retro-{YYMMDD}-{slug}.md hoặc .html",
    "descEn": "Under-200-line retrospective report with metrics, formulas, highlights, recommendations, and optional visual sections.",
    "descVi": "Báo cáo retrospective dưới 200 dòng, có chỉ số, công thức, điểm nổi bật, khuyến nghị và phần trực quan tùy chọn."
  }
};

export default data;
