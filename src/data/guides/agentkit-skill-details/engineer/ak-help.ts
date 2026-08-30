import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-help",
  "command": "/ak:help",
  "kit": "engineer",
  "header": {
    "titleEn": "Installed Skill Help Router",
    "titleVi": "Router trợ giúp skill đã cài",
    "taglineEn": "Open the AgentKit help index, discover the currently installed skills from runtime catalogs or live SKILL.md frontmatter, and route the user to the most specific workflow.",
    "taglineVi": "Mở chỉ mục trợ giúp AgentKit, khám phá skill đang cài từ catalog runtime hoặc frontmatter SKILL.md hiện có, rồi định tuyến user tới workflow cụ thể nhất."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Read request",
      "titleVi": "Đọc yêu cầu",
      "descEn": "Determine whether the user asks how to use ak, what skills exist, whether a named skill is installed, or which workflow fits.",
      "descVi": "Xác định user hỏi cách dùng ak, danh sách skill, skill được nêu có cài không, hay workflow nào phù hợp."
    },
    {
      "number": 2,
      "titleEn": "Use live catalog",
      "titleVi": "Dùng catalog sống",
      "descEn": "Prefer the runtime installed-skill catalog when available.",
      "descVi": "Ưu tiên catalog skill đã cài từ runtime nếu có."
    },
    {
      "number": 3,
      "titleEn": "Discover frontmatter",
      "titleVi": "Khám phá frontmatter",
      "descEn": "If no catalog exists, discover current SKILL.md files from active project and user skill roots, reading frontmatter only for relevant candidates.",
      "descVi": "Nếu không có catalog, tìm SKILL.md hiện tại trong project và user skill roots, chỉ đọc frontmatter của candidate liên quan."
    },
    {
      "number": 4,
      "titleEn": "Filter candidates",
      "titleVi": "Lọc candidate",
      "descEn": "Summarize only skills that fit the request instead of dumping the entire registry.",
      "descVi": "Chỉ tóm tắt skill phù hợp với yêu cầu thay vì dump toàn bộ registry."
    },
    {
      "number": 5,
      "titleEn": "Route specifically",
      "titleVi": "Định tuyến cụ thể",
      "descEn": "When the task is clear, recommend the most specific installed skill and say plainly when a referenced skill is not installed.",
      "descVi": "Khi task rõ, đề xuất skill đã cài cụ thể nhất và nói thẳng nếu skill được nhắc chưa cài."
    },
    {
      "number": 6,
      "titleEn": "Read command help",
      "titleVi": "Đọc help của lệnh",
      "descEn": "When the user needs syntax, read current ak --help or the relevant command help rather than relying on prose as a registry.",
      "descVi": "Khi user cần cú pháp, đọc ak --help hiện tại hoặc help của lệnh liên quan thay vì xem prose như registry."
    }
  ],
  "corePrinciplesEn": [
    "Installed state beats remembered skill lists.",
    "Help should route to the most specific usable skill, not advertise everything.",
    "Command examples come from current command help or relevant SKILL.md metadata."
  ],
  "corePrinciplesVi": [
    "Trạng thái đã cài thực tế quan trọng hơn danh sách skill nhớ sẵn.",
    "Help cần định tuyến tới skill dùng được cụ thể nhất, không quảng cáo tất cả.",
    "Ví dụ lệnh phải đến từ command help hiện tại hoặc metadata SKILL.md liên quan."
  ],
  "expertiseAreasEn": [
    "Installed skill discovery",
    "Workflow routing",
    "Frontmatter-only candidate lookup",
    "Command help summarization"
  ],
  "expertiseAreasVi": [
    "Khám phá skill đã cài",
    "Định tuyến workflow",
    "Tra candidate chỉ bằng frontmatter",
    "Tóm tắt command help"
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "Do not rely on bundled or remembered catalogs",
    "titleVi": "Không dựa vào catalog đóng gói hoặc trí nhớ",
    "contentEn": "The skill must use the runtime catalog when available, or discover current SKILL.md frontmatter; copied counts and remembered skill lists are not authoritative.",
    "contentVi": "Skill phải dùng catalog runtime nếu có, hoặc khám phá frontmatter SKILL.md hiện tại; số lượng copy sẵn và danh sách nhớ được không có thẩm quyền."
  },
  "promptExamples": [
    {
      "labelEn": "Open help index",
      "labelVi": "Mở chỉ mục trợ giúp",
      "command": "/ak:help",
      "whenEn": "The user asks how to use AgentKit or wants a starting point.",
      "whenVi": "Khi user hỏi cách dùng AgentKit hoặc cần điểm bắt đầu.",
      "expectedEn": "Opens with the installed AgentKit help context, prefers the live skill catalog, and gives a concise index or next best route.",
      "expectedVi": "Mở bằng ngữ cảnh trợ giúp AgentKit đã cài, ưu tiên catalog skill sống, rồi đưa chỉ mục ngắn gọn hoặc hướng đi phù hợp tiếp theo.",
      "recommended": true
    },
    {
      "labelEn": "Choose workflow",
      "labelVi": "Chọn workflow",
      "command": "/ak:help which workflow should I run for a bug with unknown root cause?",
      "whenEn": "The user describes a task but does not know which installed skill fits.",
      "whenVi": "Khi user mô tả việc cần làm nhưng chưa biết skill đã cài nào phù hợp.",
      "expectedEn": "Filters the installed candidates to the task, routes to the most specific debugging or investigation skill, and briefly explains the fit.",
      "expectedVi": "Lọc các candidate đã cài theo task, định tuyến tới skill debug hoặc điều tra cụ thể nhất, rồi giải thích ngắn gọn vì sao phù hợp."
    },
    {
      "labelEn": "Check skill availability",
      "labelVi": "Kiểm tra skill có sẵn",
      "command": "/ak:help do I have a skill for creating project documentation?",
      "whenEn": "The user asks whether a capability exists in the current installation.",
      "whenVi": "Khi user hỏi một năng lực có tồn tại trong bản cài hiện tại hay không.",
      "expectedEn": "Uses the runtime catalog or relevant SKILL.md frontmatter, reports matching installed skills only, and says plainly if none are installed.",
      "expectedVi": "Dùng catalog runtime hoặc frontmatter SKILL.md liên quan, chỉ báo skill đã cài khớp yêu cầu, và nói thẳng nếu chưa có skill nào."
    },
    {
      "labelEn": "Need command syntax",
      "labelVi": "Cần cú pháp lệnh",
      "command": "/ak:help how do I list installed skills from the CLI?",
      "whenEn": "The user needs an exact command shape rather than a broad skill recommendation.",
      "whenVi": "Khi user cần cú pháp lệnh chính xác thay vì đề xuất skill tổng quát.",
      "expectedEn": "Reads current ak help or the relevant subcommand help before giving syntax, and keeps examples scoped to the installed kit.",
      "expectedVi": "Đọc ak help hiện tại hoặc help của subcommand liên quan trước khi đưa cú pháp, và giữ ví dụ trong phạm vi kit đã cài."
    }
  ],
  "reportOutput": {
    "titleEn": "Help answer",
    "titleVi": "Câu trả lời trợ giúp",
    "patternEn": "Relevant installed skills, why they fit, exact command shape only when verified from current help or metadata.",
    "patternVi": "Skill đã cài có liên quan, lý do phù hợp, và cú pháp lệnh chính xác chỉ khi đã kiểm từ help hoặc metadata hiện tại.",
    "descEn": "The output is a routing answer, not a static command registry.",
    "descVi": "Đầu ra là câu trả lời định tuyến, không phải registry lệnh tĩnh."
  }
};

export default data;
