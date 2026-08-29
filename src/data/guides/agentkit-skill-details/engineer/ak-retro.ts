import type { SkillInfographic } from '@/data/guides/how-ck-works';

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
    "type": "critical",
    "titleEn": "Git facts only, read-only source",
    "titleVi": "Chỉ dùng dữ liệu git, không sửa source",
    "contentEn": "Never fabricate metrics. Empty commands become 0 or N/A. The skill is read-only for source files and must not commit, push, or modify code.",
    "contentVi": "Không bịa chỉ số. Lệnh rỗng phải ghi 0 hoặc N/A. Skill chỉ đọc source file, không commit, push hoặc sửa code."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse timeframe",
      "titleVi": "Phân tích khung thời gian",
      "descEn": "Resolve 7d, 2w, 1m, sprint, or YYYY-MM-DD:YYYY-MM-DD into SINCE/UNTIL and optional previous period.",
      "descVi": "Chuyển 7d, 2w, 1m, sprint hoặc YYYY-MM-DD:YYYY-MM-DD thành SINCE/UNTIL và giai đoạn trước nếu cần so sánh."
    },
    {
      "number": 2,
      "titleEn": "Collect git metrics",
      "titleVi": "Thu thập chỉ số git",
      "descEn": "Measure commits per day, total commits, LOC added/removed/net, hotspots, commit types, active authors, and file counts.",
      "descVi": "Đo commit theo ngày, tổng commit, LOC thêm/xóa/ròng, file nóng, loại commit, tác giả hoạt động và số file."
    },
    {
      "number": 3,
      "titleEn": "Add team breakdown",
      "titleVi": "Thêm phân tích theo người",
      "descEn": "When `--team` is set, compute per-author commit counts and include team velocity signals.",
      "descVi": "Khi có `--team`, tính commit theo từng tác giả và thêm tín hiệu velocity của đội."
    },
    {
      "number": 4,
      "titleEn": "Compute derived health",
      "titleVi": "Tính sức khỏe dẫn xuất",
      "descEn": "Show formulas for commit frequency, test-to-code ratio, churn rate, active-day ratio, and plan completion where available.",
      "descVi": "Nêu công thức cho commit frequency, test-to-code ratio, churn rate, active-day ratio và plan completion khi có dữ liệu."
    },
    {
      "number": 5,
      "titleEn": "Scan plans",
      "titleVi": "Quét thư mục plans",
      "descEn": "Count completed versus open checkboxes in plan files modified during the period.",
      "descVi": "Đếm checkbox đã hoàn thành và còn mở trong các file plan được sửa trong giai đoạn."
    },
    {
      "number": 6,
      "titleEn": "Write recommendations",
      "titleVi": "Viết khuyến nghị",
      "descEn": "Fill the report template with real data, highlights, 3–5 specific recommendations, and compare deltas when requested.",
      "descVi": "Điền template bằng dữ liệu thật, điểm nổi bật, 3–5 khuyến nghị cụ thể và delta so sánh khi được yêu cầu."
    },
    {
      "number": 7,
      "titleEn": "Render output",
      "titleVi": "Xuất báo cáo",
      "descEn": "Save Markdown by default or self-contained HTML when `--format html` is set; apply visual kill switches when present.",
      "descVi": "Mặc định lưu Markdown hoặc HTML tự chứa khi có `--format html`; áp dụng các flag tắt lớp trực quan nếu được truyền."
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
  "outputFlags": [
    {
      "flag": "--compare",
      "titleEn": "Compare periods",
      "titleVi": "So sánh giai đoạn",
      "descEn": "Adds a preceding equal-length period and delta columns.",
      "descVi": "Thêm giai đoạn trước có độ dài bằng nhau và cột delta.",
      "exampleCommand": "/ak:retro 2w --compare"
    },
    {
      "flag": "--team",
      "titleEn": "Team breakdown",
      "titleVi": "Phân tích đội",
      "descEn": "Breaks metrics down per author.",
      "descVi": "Tách chỉ số theo từng tác giả.",
      "exampleCommand": "/ak:retro sprint --team"
    },
    {
      "flag": "--format html|md",
      "titleEn": "Report format",
      "titleVi": "Định dạng báo cáo",
      "descEn": "Chooses Markdown or a self-contained HTML report.",
      "descVi": "Chọn báo cáo Markdown hoặc HTML tự chứa.",
      "exampleCommand": "/ak:retro 1m --format html"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Weekly retro",
      "labelVi": "Retro tuần",
      "command": "/ak:retro 7d",
      "whenEn": "Use for a quick solo or team engineering history summary.",
      "whenVi": "Dùng để tóm tắt nhanh lịch sử kỹ thuật của cá nhân hoặc đội.",
      "expectedEn": "A Markdown report saved under plans/reports with factual metrics.",
      "expectedVi": "Báo cáo Markdown lưu trong plans/reports với chỉ số thật.",
      "recommended": true
    },
    {
      "labelEn": "Sprint comparison",
      "labelVi": "So sánh sprint",
      "command": "/ak:retro sprint --compare --team",
      "whenEn": "Use for sprint reviews needing period deltas and per-author activity.",
      "whenVi": "Dùng cho sprint review cần delta theo giai đoạn và hoạt động từng người.",
      "expectedEn": "Velocity, health, team, and comparison tables with N/A for missing data.",
      "expectedVi": "Bảng velocity, sức khỏe, đội và so sánh; dữ liệu thiếu ghi N/A."
    },
    {
      "labelEn": "HTML review deck",
      "labelVi": "Báo cáo HTML",
      "command": "/ak:retro 1m --format html --no-editorial-visuals",
      "whenEn": "Use when a self-contained report is needed without the editorial visual layer.",
      "whenVi": "Dùng khi cần báo cáo tự chứa nhưng không dùng lớp hình ảnh biên tập.",
      "expectedEn": "A standalone HTML retrospective at the documented reports path.",
      "expectedVi": "Một retrospective HTML độc lập ở đường dẫn reports đã quy định."
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
