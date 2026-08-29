import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-find-skills",
  command: "/ak:find-skills",
  kit: "engineer",
  header: {
    titleEn: "/ak:find-skills",
    titleVi: "/ak:find-skills",
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
  promptExamples: [
    { labelEn: "Find React help", labelVi: "Tìm skill React", command: "/ak:find-skills React performance", whenEn: "The user asks how to make a React app faster and an external skill may exist.", whenVi: "User hỏi cách làm app React nhanh hơn và có thể đã có skill bên ngoài.", expectedEn: "Searches with targeted keywords and presents matching skills with install commands and links.", expectedVi: "Tìm bằng từ khóa tập trung và trình bày skill phù hợp cùng lệnh cài và link.", recommended: true },
    { labelEn: "PR review skill", labelVi: "Skill review PR", command: "/ak:find-skills PR review", whenEn: "The user wants help with a specialized workflow like pull request review.", whenVi: "User muốn hỗ trợ workflow chuyên biệt như review pull request.", expectedEn: "Runs the Skills CLI search and summarizes useful options or installed routing if local skills already fit.", expectedVi: "Chạy Skills CLI search và tóm tắt lựa chọn hữu ích hoặc định tuyến local nếu skill đã cài đã phù hợp." },
    { labelEn: "No match", labelVi: "Không có kết quả", command: "/ak:find-skills custom changelog automation for our release process", whenEn: "The capability may be niche or organization-specific.", whenVi: "Năng lực cần tìm có thể hẹp hoặc đặc thù tổ chức.", expectedEn: "Acknowledges no relevant match if search fails, offers direct help, and suggests npx skills init for repeat work.", expectedVi: "Nếu không tìm được, nói rõ không có kết quả phù hợp, đề nghị hỗ trợ trực tiếp và gợi ý npx skills init cho việc lặp lại." },
  ],
};

export default data;
