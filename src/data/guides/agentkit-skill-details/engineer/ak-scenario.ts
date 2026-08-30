import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-scenario",
  "command": "/ak:scenario",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:scenario",
    "titleVi": "/ak:scenario",
    "taglineEn": "Expand a feature or code path into edge cases and test scenarios across 12 dimensions, with one-shot or iterative saturation modes.",
    "taglineVi": "Mở rộng một feature hoặc code path thành edge case và kịch bản test qua 12 chiều, bằng chế độ one-shot hoặc lặp đến bão hòa."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Read target",
      "titleVi": "Đọc mục tiêu",
      "descEn": "Read the file path or parse the feature description to identify actors, components, preconditions, and scope.",
      "descVi": "Đọc đường dẫn file hoặc phân tích mô tả feature để xác định actor, component, tiền điều kiện và phạm vi."
    },
    {
      "number": 2,
      "titleEn": "Filter dimensions",
      "titleVi": "Lọc 12 chiều",
      "descEn": "Decide which dimensions apply; explicitly skip irrelevant ones and state the assumption behind each skip.",
      "descVi": "Quyết định chiều nào phù hợp; bỏ qua chiều không liên quan một cách rõ ràng và nêu giả định phía sau."
    },
    {
      "number": 3,
      "titleEn": "Generate scenarios",
      "titleVi": "Sinh kịch bản",
      "descEn": "In one-shot mode, create 3–5 scenarios per relevant dimension with expected behavior.",
      "descVi": "Ở chế độ one-shot, tạo 3–5 kịch bản cho mỗi chiều liên quan kèm hành vi kỳ vọng."
    },
    {
      "number": 4,
      "titleEn": "Classify severity",
      "titleVi": "Xếp mức độ",
      "descEn": "Rate Critical, High, Medium, or Low based on data loss, security, broken subsets, recoverable UX, or minor glitches.",
      "descVi": "Xếp Critical, High, Medium hoặc Low theo mất dữ liệu, bảo mật, lỗi với nhóm người dùng, UX hồi phục được hoặc lỗi nhỏ."
    },
    {
      "number": 5,
      "titleEn": "Iterate when requested",
      "titleVi": "Lặp khi được yêu cầu",
      "descEn": "With `--iterations N` or `--saturation`, loop through dimensions, combinations, negations, personas, and temporal shifts while logging novelty.",
      "descVi": "Với `--iterations N` hoặc `--saturation`, lặp qua chiều, tổ hợp, phủ định, persona và dịch chuyển thời gian trong khi ghi nhận độ mới."
    },
    {
      "number": 6,
      "titleEn": "Track novelty",
      "titleVi": "Theo dõi độ mới",
      "descEn": "Keep new and useful variants, discard duplicates or out-of-scope rows, rotate dimensions after three same-dimension iterations.",
      "descVi": "Giữ trường hợp mới và biến thể hữu ích, loại trùng hoặc ngoài phạm vi, đổi chiều sau ba lượt liên tiếp cùng chiều."
    },
    {
      "number": 7,
      "titleEn": "Output coverage",
      "titleVi": "Xuất độ phủ",
      "descEn": "Return a scenario report with analyzed/skipped dimensions, table, severity totals, and coverage matrix for iterative runs.",
      "descVi": "Trả báo cáo scenario gồm chiều đã phân tích/bỏ qua, bảng kịch bản, tổng theo severity và ma trận độ phủ cho chế độ lặp."
    }
  ],
  "corePrinciplesEn": [
    "A skipped dimension needs a stated assumption",
    "An unsafe skip becomes its own scenario",
    "Iterative mode values novelty over raw volume",
    "Critical and High rows should feed test planning or implementation risk"
  ],
  "corePrinciplesVi": [
    "Mỗi chiều bị bỏ qua phải có giả định rõ ràng",
    "Nếu giả định bỏ qua có thể gây rủi ro, nó trở thành một scenario",
    "Chế độ lặp coi độ mới quan trọng hơn số lượng thô",
    "Dòng Critical và High nên đưa vào kế hoạch test hoặc rủi ro triển khai"
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "One-shot scenario table",
      "modeVi": "Bảng scenario một lượt",
      "research": "Read target once",
      "redTeam": "Security dimension when relevant",
      "validation": "Severity summary"
    },
    {
      "flag": "--iterations N",
      "modeEn": "Bounded iteration",
      "modeVi": "Lặp có giới hạn",
      "research": "Repeated novelty loop",
      "redTeam": "Security focus possible",
      "validation": "Stops exactly at N iterations"
    },
    {
      "flag": "--saturation",
      "modeEn": "Saturation loop",
      "modeVi": "Lặp đến bão hòa",
      "research": "Continues until novelty exhausted",
      "redTeam": "Security focus possible",
      "validation": "Stops after two zero-novelty iterations"
    }
  ],
  "invocation": {
    "syntax": "/ak:scenario <file path or feature description> [--iterations N] [--saturation] [--domain <type>] [--focus <dim>] [--format <type>]",
    "arguments": [
      {
        "token": "<file path or feature description>",
        "titleEn": "Target to explore",
        "titleVi": "Mục tiêu cần khám phá",
        "descEn": "A narrow code path, file path, or natural-language feature description that defines the behavior and evidence scope. Include actors, state, data, integrations, constraints, and known failure modes when they are not obvious from the file.",
        "descVi": "Code path, file path hẹp hoặc mô tả feature bằng ngôn ngữ tự nhiên để xác định behavior và evidence scope. Nêu actor, state, data, integration, constraint và known failure mode khi chúng không rõ từ file.",
        "required": true,
        "exampleCommand": "/ak:scenario src/api/account-recovery.ts"
      }
    ],
    "options": [
      {
        "token": "--iterations N",
        "titleEn": "Fixed iteration count",
        "titleVi": "Số iteration cố định",
        "descEn": "Run exactly N scenario iterations, then summarize. This is a budget and hard ceiling, not proof of exhaustive coverage.",
        "descVi": "Chạy đúng N iteration tạo scenario rồi summarize. Đây là budget và hard ceiling, không phải bằng chứng coverage exhaustive.",
        "exampleCommand": "/ak:scenario src/api/payment.ts --iterations 25"
      },
      {
        "token": "--saturation",
        "titleEn": "Novelty stop",
        "titleVi": "Dừng theo độ mới",
        "descEn": "Continue until two consecutive iterations produce no New classification. It has no separate numeric maximum in the shipped contract.",
        "descVi": "Tiếp tục đến khi hai iteration liên tiếp không sinh classification New. Shipped contract không có numeric maximum riêng.",
        "exampleCommand": "/ak:scenario \"Add multi-tenancy to the database layer\" --saturation"
      },
      {
        "token": "--domain <type>",
        "titleEn": "Domain hint",
        "titleVi": "Gợi ý domain",
        "descEn": "Prioritize software, product, business, security, or marketing context. It guides ordering and emphasis; it does not narrow the evidence scope by itself.",
        "descVi": "Ưu tiên context software, product, business, security hoặc marketing. Flag này định hướng thứ tự và trọng tâm; tự nó không thu hẹp evidence scope.",
        "exampleCommand": "/ak:scenario src/middleware/auth.ts --saturation --domain security"
      },
      {
        "token": "--focus <dim>",
        "titleEn": "Focus dimension",
        "titleVi": "Dimension trọng tâm",
        "descEn": "Prioritize edge-cases, failures, security, or scale during exploration while still reporting analyzed and skipped dimensions.",
        "descVi": "Ưu tiên edge-cases, failures, security hoặc scale trong exploration nhưng vẫn báo dimension đã analyze và đã skip.",
        "exampleCommand": "/ak:scenario \"Account recovery\" --focus failures"
      },
      {
        "token": "--format <type>",
        "titleEn": "Report shape",
        "titleVi": "Dạng report",
        "descEn": "Select table, use-cases, test-scenarios, or threat-scenarios output. The option changes report shape, not whether scenarios are verified.",
        "descVi": "Chọn output table, use-cases, test-scenarios hoặc threat-scenarios. Tùy chọn này đổi dạng report, không biến scenario thành kết quả đã xác minh.",
        "exampleCommand": "/ak:scenario \"User registration with OAuth providers\" --format test-scenarios"
      }
    ]
  },
  "outputFlags": [
    {
      "flag": "--iterations N",
      "titleEn": "Bounded loop",
      "titleVi": "Vòng lặp hữu hạn",
      "descEn": "Runs exactly N scenario-generation iterations.",
      "descVi": "Chạy đúng N lượt tạo scenario.",
      "exampleCommand": "/ak:scenario src/api/payment.ts --iterations 25"
    },
    {
      "flag": "--saturation",
      "titleEn": "Novelty saturation",
      "titleVi": "Bão hòa độ mới",
      "descEn": "Iterates until two consecutive iterations produce no novel scenarios.",
      "descVi": "Lặp đến khi hai lượt liên tiếp không sinh scenario mới.",
      "exampleCommand": "/ak:scenario \"Add multi-tenancy to the database layer\" --saturation"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "One-shot API review",
      "labelVi": "Rà soát API một lượt",
      "command": "/ak:scenario src/api/payment.ts",
      "whenEn": "Use before implementing or testing a complex API path.",
      "whenVi": "Dùng trước khi triển khai hoặc test một luồng API phức tạp.",
      "expectedEn": "A Scenario Report that filters the 12 dimensions, lists skipped assumptions, groups 3–5 scenarios per relevant dimension, and summarizes severity totals.",
      "expectedVi": "Một Scenario Report lọc 12 chiều, liệt kê giả định cho chiều bị bỏ qua, nhóm 3–5 scenario cho mỗi chiều liên quan và tổng kết theo severity.",
      "recommended": true
    },
    {
      "labelEn": "Bounded iteration",
      "labelVi": "Lặp có giới hạn",
      "command": "/ak:scenario src/api/payment.ts --iterations 25",
      "whenEn": "Use when you want exhaustive exploration but need an exact stop count.",
      "whenVi": "Dùng khi cần khám phá sâu nhưng phải dừng ở số vòng chính xác.",
      "expectedEn": "An iterative run that keeps new or variant situations, discards duplicates with reasons, prints progress every 5 iterations, and stops after exactly 25 iterations.",
      "expectedVi": "Một lượt chạy lặp giữ tình huống mới hoặc biến thể, loại trùng kèm lý do, in tiến độ mỗi 5 vòng và dừng đúng sau 25 vòng."
    },
    {
      "labelEn": "Security saturation",
      "labelVi": "Bão hòa bảo mật",
      "command": "/ak:scenario src/middleware/auth.ts --saturation --domain security --focus security",
      "whenEn": "Use for a deep pre-release coverage audit where novelty should decide the stop point.",
      "whenVi": "Dùng cho audit độ phủ sâu trước release khi điểm dừng phải dựa trên độ mới.",
      "expectedEn": "A saturation loop that prioritizes security-relevant dimensions, logs kept and discarded cases to `scenario-results.tsv`, then halts after two consecutive zero-novelty iterations.",
      "expectedVi": "Một vòng lặp bão hòa ưu tiên các chiều liên quan đến security, ghi case được giữ và bị loại vào `scenario-results.tsv`, rồi dừng sau hai vòng liên tiếp không có độ mới."
    },
    {
      "labelEn": "Test scenario output",
      "labelVi": "Đầu ra test scenario",
      "command": "/ak:scenario \"User registration with OAuth providers\" --format test-scenarios",
      "whenEn": "Use before writing tests when the immediate consumer is a QA or regression plan.",
      "whenVi": "Dùng trước khi viết test khi đầu ra sẽ đi thẳng vào kế hoạch QA hoặc regression.",
      "expectedEn": "Scenario rows shaped for test planning, including actor or input context, preconditions, expected behavior, severity, and the relevant decomposition dimension.",
      "expectedVi": "Các dòng scenario được định dạng cho kế hoạch test, gồm actor hoặc ngữ cảnh input, tiền điều kiện, hành vi kỳ vọng, severity và chiều phân rã liên quan."
    }
  ]
};

export default data;
