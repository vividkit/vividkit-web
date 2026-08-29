import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-marketing-dashboard",
  "command": "/ak:marketing-dashboard",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:marketing-dashboard",
    "titleVi": "/ak:marketing-dashboard",
    "taglineEn": "Operate the local Assets, Brand, and Settings dashboard by treating its dashboard documentation and live skill catalog as the source of truth.",
    "taglineVi": "Vận hành dashboard local cho Assets, Brand và Settings bằng cách lấy tài liệu dashboard và catalog skill runtime làm nguồn đúng."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Read authority",
      "titleVi": "Đọc nguồn đúng",
      "descEn": "Read the dashboard README when present because it owns current features, routes, storage, commands, configuration, validation, and troubleshooting.",
      "descVi": "Đọc README của dashboard khi có vì đó là nơi quyết định feature, route, storage, command, cấu hình, kiểm tra và xử lý lỗi hiện tại."
    },
    {
      "number": 2,
      "titleEn": "Avoid inference",
      "titleVi": "Không suy đoán",
      "descEn": "Do not infer campaign, content-generation, automation, or authentication behavior from the skill name or older versions.",
      "descVi": "Không suy ra campaign, tạo content, automation hay authentication chỉ từ tên skill hoặc phiên bản cũ."
    },
    {
      "number": 3,
      "titleEn": "Resolve install",
      "titleVi": "Tìm bản cài thật",
      "descEn": "Resolve the installed skill directory through the runtime's live skill catalog before running referenced scripts.",
      "descVi": "Xác định thư mục skill đang cài qua live skill catalog của runtime trước khi chạy script được nhắc tới."
    },
    {
      "number": 4,
      "titleEn": "Run dashboard",
      "titleVi": "Chạy dashboard",
      "descEn": "Use only the commands documented by the dashboard authority for the current installation.",
      "descVi": "Chỉ dùng command được nguồn dashboard của bản cài hiện tại ghi lại."
    },
    {
      "number": 5,
      "titleEn": "Report URLs",
      "titleVi": "Báo URL",
      "descEn": "Report the URLs printed by the script so the user knows exactly where the local dashboard is running.",
      "descVi": "Báo các URL script in ra để user biết dashboard local đang chạy ở đâu."
    },
    {
      "number": 6,
      "titleEn": "Surface fixes",
      "titleVi": "Nêu remediation",
      "descEn": "If SQLite driver remediation appears, surface it verbatim instead of paraphrasing or hiding it.",
      "descVi": "Nếu có hướng khắc phục SQLite driver, nêu nguyên văn thay vì diễn giải hoặc giấu đi."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Dashboard docs authority",
    "titleVi": "Tài liệu dashboard là nguồn đúng",
    "contentEn": "Do not infer behavior from the dashboard name or old versions. Resolve the installed skill directory through the live catalog before running referenced scripts.",
    "contentVi": "Không suy đoán hành vi từ tên dashboard hoặc bản cũ. Phải xác định thư mục skill đã cài qua live catalog trước khi chạy script được nhắc tới."
  },
  "corePrinciplesEn": [
    "Current dashboard docs beat assumptions",
    "Live installation paths beat hardcoded paths",
    "Report exact printed URLs",
    "Surface SQLite remediation verbatim"
  ],
  "corePrinciplesVi": [
    "Tài liệu dashboard hiện tại thắng mọi giả định",
    "Path từ bản cài live tốt hơn path hardcode",
    "Báo đúng URL được in ra",
    "Nêu nguyên văn remediation SQLite"
  ],
  "expertiseAreasEn": [
    "Assets dashboard",
    "Brand dashboard",
    "Settings dashboard",
    "Local script operation",
    "SQLite driver troubleshooting"
  ],
  "expertiseAreasVi": [
    "Dashboard Assets",
    "Dashboard Brand",
    "Dashboard Settings",
    "Vận hành script local",
    "Xử lý SQLite driver"
  ],
  "promptExamples": [
    {
      "labelEn": "Open dashboard",
      "labelVi": "Mở dashboard",
      "command": "/ak:marketing-dashboard",
      "whenEn": "You need to run or inspect the local marketing asset and brand dashboard.",
      "whenVi": "Khi cần chạy hoặc kiểm tra dashboard local cho asset và brand marketing.",
      "expectedEn": "Reads the authoritative dashboard docs, resolves the installed path, runs documented scripts, and reports printed URLs.",
      "expectedVi": "Đọc tài liệu dashboard có thẩm quyền, xác định path đã cài, chạy script đã ghi và báo URL được in ra.",
      "recommended": true
    }
  ]
};

export default data;
