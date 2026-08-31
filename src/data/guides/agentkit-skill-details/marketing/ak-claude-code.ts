import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-claude-code",
  command: "/ak:claude-code",
  kit: 'marketer',
  header: {
    titleEn: '/ak:claude-code — Claude Code reference navigator',
    titleVi: '/ak:claude-code — Bộ tra cứu Claude Code',
    taglineEn: "Answers Claude Code setup, commands, skills, MCP, hooks, plugins, IDE, CI/CD, enterprise, troubleshooting, and advanced-feature questions from topic references.",
    taglineVi: "Trả lời câu hỏi về cài đặt Claude Code, lệnh, skill, MCP, hook, plugin, IDE, CI/CD, enterprise, troubleshooting và tính năng nâng cao dựa trên tài liệu theo chủ đề.",
  },
  processFlow: [
    { number: 1, titleEn: "Identify topic", titleVi: "Nhận diện chủ đề", descEn: "Read the question and classify it as setup, slash commands, skills, MCP, hooks, IDE, CI/CD, enterprise, troubleshooting, API, or best practices.", descVi: "Đọc câu hỏi và phân loại thành cài đặt, slash command, skill, MCP, hook, IDE, CI/CD, enterprise, troubleshooting, API hoặc best practice." },
    { number: 2, titleEn: "Load references", titleVi: "Tải tài liệu", descEn: "Open the relevant reference file from the guide table; load multiple files for complex questions.", descVi: "Mở file tham chiếu đúng trong bảng hướng dẫn; tải nhiều file nếu câu hỏi phức tạp." },
    { number: 3, titleEn: "Explain concepts", titleVi: "Giải thích khái niệm", descEn: "Map the answer to Claude Code concepts: subagents, skills, slash commands, hooks, MCP servers, and plugins.", descVi: "Liên hệ câu trả lời với các khái niệm Claude Code: subagent, skill, slash command, hook, MCP server và plugin." },
    { number: 4, titleEn: "Provide examples", titleVi: "Đưa ví dụ", descEn: "Give specific setup, command, configuration, or workflow examples from the loaded reference material.", descVi: "Đưa ví dụ cài đặt, command, cấu hình hoặc workflow cụ thể từ tài liệu đã tải." },
    { number: 5, titleEn: "Troubleshoot path", titleVi: "Luồng gỡ lỗi", descEn: "For auth, MCP, performance, or debug-mode issues, route to troubleshooting references before proposing fixes.", descVi: "Với lỗi auth, MCP, hiệu năng hoặc debug mode, đi qua tài liệu troubleshooting trước khi đề xuất cách xử lý." },
    { number: 6, titleEn: "Cite sources", titleVi: "Nêu nguồn", descEn: "Use the documented official docs, Context7 topic search, GitHub, and support sources when deeper current detail is needed.", descVi: "Dùng nguồn chính thức, Context7 topic search, GitHub và support khi cần chi tiết cập nhật hơn." },
  ],
  corePrinciplesEn: [
    "Answer from the relevant topic reference instead of giving generic Claude Code advice.",
    "Load multiple references when a question spans setup, extensibility, workflow, and troubleshooting.",
    "Separate core concepts: subagents, skills, slash commands, hooks, MCP servers, and plugins have different roles.",
  ],
  corePrinciplesVi: [
    "Trả lời từ tài liệu theo chủ đề phù hợp thay vì đưa lời khuyên Claude Code chung chung.",
    "Tải nhiều tài liệu khi câu hỏi đi qua cài đặt, mở rộng, workflow và troubleshooting.",
    "Tách rõ khái niệm: subagent, skill, slash command, hook, MCP server và plugin có vai trò khác nhau.",
  ],
  expertiseAreasEn: ["Installation", "Slash commands", "Agent Skills", "MCP servers", "Hooks", "Plugins", "IDE integration", "CI/CD", "Enterprise deployment", "Troubleshooting"],
  expertiseAreasVi: ["Cài đặt", "Slash command", "Agent Skill", "MCP server", "Hook", "Plugin", "Tích hợp IDE", "CI/CD", "Triển khai enterprise", "Gỡ lỗi"],
  promptExamples: [
    { labelEn: "Install and authenticate", labelVi: "Cài đặt và đăng nhập", command: "/ak:claude-code installation and authentication",
      commandVi: '/ak:claude-code cài đặt và xác thực', whenEn: "Use when setting up Claude Code for the first time.", whenVi: "Dùng khi thiết lập Claude Code lần đầu.", expectedEn: "Guidance from the getting-started reference.", expectedVi: "Hướng dẫn dựa trên tài liệu getting-started.", recommended: true },
    { labelEn: "Create a skill", labelVi: "Tạo skill", command: "/ak:claude-code creating Agent Skills",
      commandVi: '/ak:claude-code tạo Agent Skills', whenEn: "Use when building or packaging a SKILL.md with bundled resources.", whenVi: "Dùng khi tạo hoặc đóng gói SKILL.md cùng tài nguyên đi kèm.", expectedEn: "Skill structure and metadata guidance from the Agent Skills reference.", expectedVi: "Hướng dẫn cấu trúc skill và metadata từ tài liệu Agent Skills." },
    { labelEn: "MCP setup", labelVi: "Thiết lập MCP", command: "/ak:claude-code MCP server configuration",
      commandVi: '/ak:claude-code cấu hình máy chủ MCP', whenEn: "Use when connecting Claude Code to external tools.", whenVi: "Dùng khi kết nối Claude Code với công cụ bên ngoài.", expectedEn: "Configuration and authentication advice for MCP integrations.", expectedVi: "Lời khuyên về cấu hình và xác thực cho tích hợp MCP." },
    { labelEn: "Troubleshooting", labelVi: "Gỡ lỗi", command: "/ak:claude-code troubleshooting authentication failures",
      commandVi: '/ak:claude-code khắc phục sự cố xác thực thất bại', whenEn: "Use when Claude Code auth, performance, or debug behavior is failing.", whenVi: "Dùng khi auth, hiệu năng hoặc debug của Claude Code gặp lỗi.", expectedEn: "A reference-backed diagnosis path, not a guess.", expectedVi: "Một luồng chẩn đoán có tài liệu chống lưng, không đoán mò." },
  ],
  skillStack: [
    { name: "Claude Code docs", type: "tool" },
    { name: "Context7 llms.txt", type: "tool" },
  ],
};

export default data;
