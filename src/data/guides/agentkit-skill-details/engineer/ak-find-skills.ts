import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: "/ak:find-skills [capability or task description]",
  arguments: [
    {
      token: "[capability or task description]",
      titleEn: "Capability to find",
      titleVi: "Năng lực cần tìm",
      descEn: "Describe the domain, task, framework, language, platform, and whether you want local routing, recommendations only, or installation after review. Do not include credentials, private source, or unrelated workspace details.",
      descVi: "Mô tả domain, tác vụ, framework, ngôn ngữ, nền tảng và việc bạn muốn định tuyến local, chỉ nhận recommendation, hay cài sau khi review. Không đưa credential, source riêng tư hoặc chi tiết workspace không liên quan.",
      required: true,
      exampleCommand: "/ak:find-skills \"Audit a Next.js checkout for accessibility and keyboard navigation\"",
    },
  ],
};

const data: SkillInfographic = {
  id: "ak-find-skills",
  command: "/ak:find-skills",
  kit: "engineer",
  header: {
    titleEn: "/ak:find-skills — Discover and install skills",
    titleVi: "/ak:find-skills — Tìm và cài Agent Skills",
    taglineEn: "Discover and install Agent Skills when users ask for a capability that may already exist in the skills ecosystem.",
    taglineVi: "Tìm và cài Agent Skills khi người dùng cần một năng lực có thể đã tồn tại trong hệ sinh thái skills.",
  },
  processFlow: [
    { number: 1, titleEn: "Recognize Need", titleVi: "Nhận ra nhu cầu", descEn: "Trigger when the user asks how to do a specialized task, whether a skill exists, or how to extend capabilities.", descVi: "Kích hoạt khi người dùng hỏi cách làm tác vụ chuyên biệt, có skill nào không, hoặc cách mở rộng năng lực." },
    { number: 2, titleEn: "Route Installed Skills", titleVi: "Định tuyến skill đã cài", descEn: "If choosing between installed AgentKit skills, load domain-routing before using the external Skills CLI.", descVi: "Nếu đang chọn giữa các AgentKit skill đã cài, nạp domain-routing trước khi dùng Skills CLI bên ngoài." },
    { number: 3, titleEn: "Clarify Domain", titleVi: "Làm rõ domain", descEn: "Identify domain, concrete task, and whether the task is common enough that an installable skill likely exists.", descVi: "Xác định domain, tác vụ cụ thể và việc đó có phổ biến đến mức nhiều khả năng có skill cài được hay không." },
    { number: 4, titleEn: "Search CLI", titleVi: "Tìm bằng CLI", descEn: "Run npx skills find with specific keywords, trying alternative terms such as deploy/deployment or PR/review when needed.", descVi: "Chạy npx skills find với từ khóa cụ thể, thử thuật ngữ khác như deploy/deployment hoặc PR/review khi cần." },
    { number: 5, titleEn: "Evaluate Results", titleVi: "Đánh giá kết quả", descEn: "Prefer relevant packages from known sources, inspect the package name, capability fit, install command, and skills.sh link.", descVi: "Ưu tiên package liên quan từ nguồn quen, xem tên package, mức khớp năng lực, lệnh cài và link skills.sh." },
    { number: 6, titleEn: "Present Options", titleVi: "Trình bày lựa chọn", descEn: "Show skill name, what it does, install command, and learn-more link in a concise user-facing recommendation.", descVi: "Trình bày tên skill, công dụng, lệnh cài và link tìm hiểu thêm trong khuyến nghị ngắn gọn cho user." },
    { number: 7, titleEn: "Offer Install", titleVi: "Đề nghị cài", descEn: "If the user wants it, install with npx skills add package -g -y, using the exact package found.", descVi: "Nếu user muốn, cài bằng npx skills add package -g -y, dùng đúng package đã tìm thấy." },
    { number: 8, titleEn: "Fallback Gracefully", titleVi: "Fallback gọn", descEn: "When no match exists, say so, offer to help directly, and suggest creating a custom skill with npx skills init.", descVi: "Khi không có kết quả phù hợp, nói rõ, đề nghị hỗ trợ trực tiếp và gợi ý tạo skill riêng bằng npx skills init." },
  ],
  corePrinciplesEn: [
    "Use local AgentKit routing before external discovery when the choice is among installed skills.",
    "Specific search terms beat broad category words.",
    "Present installable options with exact package names and links.",
    "No result is not a dead end: help directly or suggest creating a custom skill.",
  ],
  corePrinciplesVi: [
    "Dùng định tuyến AgentKit cục bộ trước khi tìm bên ngoài nếu đang chọn giữa các skill đã cài.",
    "Từ khóa cụ thể tốt hơn từ khóa danh mục quá rộng.",
    "Trình bày lựa chọn có thể cài với đúng tên package và link.",
    "Không có kết quả không phải ngõ cụt: hỗ trợ trực tiếp hoặc gợi ý tạo skill riêng.",
  ],
  expertiseAreasEn: [
    "Agent Skills ecosystem discovery",
    "npx skills find/add/check/update command flow",
    "Installed AgentKit domain routing",
    "Capability-to-keyword translation",
    "User-facing skill recommendation and installation handoff",
  ],
  expertiseAreasVi: [
    "Khám phá hệ sinh thái Agent Skills",
    "Luồng lệnh npx skills find/add/check/update",
    "Định tuyến domain cho AgentKit đã cài",
    "Chuyển nhu cầu năng lực thành từ khóa tìm kiếm",
    "Khuyến nghị skill và bàn giao cài đặt cho user",
  ],
  skillStack: [
    { name: "npx skills", type: "tool" },
    { name: "skills.sh", type: "tool" },
    { name: "domain-routing.md", type: "tool" },
  ],
  invocation,
  promptExamples: [
    { labelEn: "Find React help", labelVi: "Tìm skill React", command: "/ak:find-skills react performance", whenEn: "The user asks how to make a React app faster and a reusable skill may already exist.", whenVi: "User hỏi cách làm app React nhanh hơn và có thể đã có skill tái sử dụng.", expectedEn: "Identifies React performance as the domain and task, runs a targeted Skills CLI search, then presents relevant matches with exact install commands and skills.sh links.", expectedVi: "Xác định domain và tác vụ là tối ưu hiệu năng React, chạy tìm kiếm Skills CLI có từ khóa cụ thể, rồi trình bày kết quả phù hợp cùng lệnh cài chính xác và link skills.sh.", recommended: true },
    { labelEn: "PR review skill", labelVi: "Skill review PR", command: "/ak:find-skills pr review", whenEn: "The user wants help with a specialized workflow such as pull request review.", whenVi: "User muốn hỗ trợ một workflow chuyên biệt như review pull request.", expectedEn: "Searches with the PR review query, checks whether the result fits the requested workflow, and summarizes the skill name, purpose, install command, and learn-more link.", expectedVi: "Tìm bằng truy vấn review PR, kiểm tra kết quả có khớp workflow cần làm không, rồi tóm tắt tên skill, công dụng, lệnh cài và link tìm hiểu thêm." },
    { labelEn: "Changelog discovery", labelVi: "Tìm skill changelog", command: "/ak:find-skills changelog", whenEn: "The user asks for tooling or a reusable workflow around creating changelogs.", whenVi: "User hỏi về công cụ hoặc workflow tái sử dụng để tạo changelog.", expectedEn: "Treats changelog generation as a documentation or release-workflow capability, searches by the specific keyword, and recommends any relevant installable skill with package evidence.", expectedVi: "Xem việc tạo changelog là năng lực tài liệu hoặc workflow phát hành, tìm bằng từ khóa cụ thể, rồi khuyến nghị skill cài được nếu có kèm bằng chứng package." },
    { labelEn: "No matching skill", labelVi: "Không có skill phù hợp", command: "/ak:find-skills custom release ritual for our internal approval board", whenEn: "The requested capability is niche or organization-specific and may not have a public skill.", whenVi: "Năng lực cần tìm hẹp hoặc đặc thù tổ chức nên có thể không có skill công khai.", expectedEn: "If targeted and alternative searches do not find a relevant skill, says no match was found, offers direct help, and suggests creating a custom skill with npx skills init for repeated work.", expectedVi: "Nếu tìm bằng từ khóa cụ thể và từ khóa thay thế vẫn không có skill phù hợp, nói rõ không tìm được, đề nghị hỗ trợ trực tiếp và gợi ý tạo skill riêng bằng npx skills init cho việc lặp lại." },
  ],
};

export default data;
