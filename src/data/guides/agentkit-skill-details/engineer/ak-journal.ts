import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-journal",
  "command": "/ak:journal",
  "kit": "engineer",
  "header": {
    "titleEn": "Technical Session Journal",
    "titleVi": "Nhật ký kỹ thuật theo phiên",
    "taglineEn": "Persist chronological technical journals under plans/journals using the first-class CLI, preserving work history without replacing current docs, ADRs, or product decision sources.",
    "taglineVi": "Lưu nhật ký kỹ thuật theo thời gian dưới plans/journals bằng CLI chính thức, giữ lịch sử công việc mà không thay thế docs hiện tại, ADR hoặc nguồn quyết định sản phẩm."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Gather events",
      "titleVi": "Thu thập sự kiện",
      "descEn": "Collect root cause, key changes, impacts, decisions, next steps, concrete errors, paths, and outcomes from the session.",
      "descVi": "Thu thập root cause, thay đổi chính, ảnh hưởng, quyết định, bước tiếp theo, lỗi cụ thể, path và outcome của session."
    },
    {
      "number": 2,
      "titleEn": "Draft concise entry",
      "titleVi": "Soạn entry ngắn",
      "descEn": "Write a short title and markdown body with concrete evidence instead of vague summaries.",
      "descVi": "Viết title ngắn và body Markdown có bằng chứng cụ thể thay vì tóm tắt mơ hồ."
    },
    {
      "number": 3,
      "titleEn": "Persist with CLI",
      "titleVi": "Lưu bằng CLI",
      "descEn": "Use ak journal create with title, summary, and stdin so no interactive editor is required.",
      "descVi": "Dùng ak journal create với title, summary và stdin để không cần editor tương tác."
    },
    {
      "number": 4,
      "titleEn": "Validate when needed",
      "titleVi": "Validate khi cần",
      "descEn": "Run ak journal validate <slug-or-filename-stem> for entries that need checking.",
      "descVi": "Chạy ak journal validate <slug-or-filename-stem> cho entry cần kiểm tra."
    },
    {
      "number": 5,
      "titleEn": "Skip AgentWiki publish",
      "titleVi": "Bỏ qua publish AgentWiki",
      "descEn": "Report “AgentWiki publish skipped” because publishing from this skill is deferred and the local file remains source of truth.",
      "descVi": "Báo “AgentWiki publish skipped” vì publish từ skill này đang deferred và file local vẫn là source of truth."
    },
    {
      "number": 6,
      "titleEn": "Browse history",
      "titleVi": "Duyệt lịch sử",
      "descEn": "Use ak journal list, ak journal show <slug>, or the Journals page to inspect existing entries.",
      "descVi": "Dùng ak journal list, ak journal show <slug> hoặc trang Journals để xem entry hiện có."
    },
    {
      "number": 7,
      "titleEn": "Respect auto policy",
      "titleVi": "Tôn trọng chính sách tự động",
      "descEn": "When run automatically after other workflows, honor --skip-journal, journal.auto config, and precedence: flag > project config > user config > default true.",
      "descVi": "Khi chạy tự động sau workflow khác, tôn trọng --skip-journal, config journal.auto và thứ tự ưu tiên: flag > project config > user config > default true."
    },
    {
      "number": 8,
      "titleEn": "Publish socially only when configured",
      "titleVi": "Chỉ đăng social khi cấu hình đủ",
      "descEn": "For social posts, resolve config, draft per-channel bodies, dry-run post-social first, then publish only after inspecting dry-run output.",
      "descVi": "Với social post, resolve config, soạn body từng channel, dry-run post-social trước, rồi chỉ publish sau khi xem output dry-run."
    }
  ],
  "corePrinciplesEn": [
    "Prefer concrete errors, paths, outcomes, and decisions over vague retrospectives.",
    "Persist through ak journal create; do not leave the journal only in chat.",
    "Automatic journal steps are controlled by explicit flags and config precedence."
  ],
  "corePrinciplesVi": [
    "Ưu tiên lỗi, path, outcome và quyết định cụ thể hơn retrospective mơ hồ.",
    "Lưu bằng ak journal create; không để journal chỉ nằm trong chat.",
    "Bước journal tự động do flag rõ ràng và thứ tự config điều khiển."
  ],
  "expertiseAreasEn": [
    "Session reflection",
    "Chronological work records",
    "Journal CLI persistence",
    "Auto-journal preferences",
    "Social-publishing dry runs"
  ],
  "expertiseAreasVi": [
    "Reflection theo session",
    "Bản ghi công việc theo thời gian",
    "Lưu bằng journal CLI",
    "Preference auto-journal",
    "Dry-run publish social"
  ],
  "skillStack": [
    {
      "name": "ak journal create",
      "type": "tool"
    },
    {
      "name": "ak journal validate",
      "type": "tool"
    },
    {
      "name": "resolve-config.cjs",
      "type": "tool"
    },
    {
      "name": "post-social.cjs",
      "type": "tool"
    },
    {
      "name": "journal-writer",
      "type": "agent"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Session reflection",
      "labelVi": "Reflection phiên làm việc",
      "command": "/ak:journal after fixing the OAuth callback race condition",
      "whenEn": "You want to preserve a concise technical record after implementation or debugging.",
      "whenVi": "Khi muốn lưu bản ghi kỹ thuật ngắn sau khi implement hoặc debug.",
      "expectedEn": "Captures what happened, decisions, next steps, persists under plans/journals, and notes AgentWiki publish skipped.",
      "expectedVi": "Ghi chuyện đã xảy ra, quyết định, bước tiếp, lưu dưới plans/journals và ghi AgentWiki publish skipped.",
      "recommended": true
    },
    {
      "labelEn": "Failure archaeology",
      "labelVi": "Đào lại failure",
      "command": "/ak:journal why the deployment rollback was necessary",
      "whenEn": "The entry should explain root cause, impact, and lessons for future sessions.",
      "whenVi": "Khi entry cần giải thích root cause, ảnh hưởng và bài học cho session sau.",
      "expectedEn": "May invoke journal-writer for honesty, but still persists through ak journal create.",
      "expectedVi": "Có thể gọi journal-writer để viết thẳng thắn hơn, nhưng vẫn lưu qua ak journal create."
    }
  ],
  "reportOutput": {
    "titleEn": "Journal result",
    "titleVi": "Kết quả journal",
    "patternEn": "Created file path, one-line summary, validation status when run, AgentWiki publish skipped.",
    "patternVi": "Path file đã tạo, summary một dòng, trạng thái validate nếu chạy, AgentWiki publish skipped.",
    "locationEn": "<project>/plans/journals/YYYY-MM-DD-<slug>.md with collision suffixes as needed.",
    "locationVi": "<project>/plans/journals/YYYY-MM-DD-<slug>.md với hậu tố chống trùng khi cần.",
    "descEn": "The journal preserves work history; it should not be cited as the durable product spec.",
    "descVi": "Journal giữ lịch sử công việc; không nên dùng nó như spec sản phẩm bền vững."
  }
};

export default data;
