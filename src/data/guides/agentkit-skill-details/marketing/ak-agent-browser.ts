import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-agent-browser",
  command: "/ak:agent-browser",
  kit: 'marketer',
  header: {
    titleEn: "Agent Browser",
    titleVi: "Agent Browser",
    taglineEn: "Use the agent-browser CLI for profile-independent browser and desktop automation: compact snapshots, screenshots, form fills, scraping, exploratory QA, cloud browsers, Electron apps, and Slack workflows.",
    taglineVi: "Dùng CLI agent-browser cho tự động hóa browser và desktop không phụ thuộc profile thật: snapshot gọn, screenshot, điền form, scraping, QA khám phá, cloud browser, app Electron và workflow Slack.",
  },
  hardGate: {
    type: 'warning',
    titleEn: "Do not use for real Chrome profile state",
    titleVi: "Không dùng khi cần profile Chrome thật",
    contentEn: "The SKILL.md routes cookies, logged-in sessions, specific Google accounts, tenant workspaces, and deterministic multi-profile targeting to ak:chrome-profile instead.",
    contentVi: "SKILL.md chuyển các việc cần cookie, session đã login, tài khoản Google cụ thể, workspace/tenant đang mở hoặc nhắm nhiều profile ổn định sang ak:chrome-profile.",
  },
  processFlow: [
    { number: 1, titleEn: "Classify need", titleVi: "Xác định nhu cầu", descEn: "Use this skill when a fresh or tool-managed browser is acceptable for testing, screenshots, form fills, scraping, QA, Electron, Slack, or cloud sessions.", descVi: "Dùng skill này khi có thể dùng browser mới hoặc do tool quản lý để test, chụp ảnh, điền form, scrape, QA, Electron, Slack hoặc cloud session." },
    { number: 2, titleEn: "Check profile dependency", titleVi: "Kiểm tra phụ thuộc profile", descEn: "If the task needs the user's actual Chrome profile, cookies, account, or workspace state, stop and route to ak:chrome-profile.", descVi: "Nếu việc cần profile Chrome thật, cookie, tài khoản hoặc trạng thái workspace của người dùng, dừng và chuyển sang ak:chrome-profile." },
    { number: 3, titleEn: "Install or refresh", titleVi: "Cài hoặc cập nhật", descEn: "Use npm install -g agent-browser, agent-browser install, upgrade, and --version as needed so the installed CLI is current.", descVi: "Dùng npm install -g agent-browser, agent-browser install, upgrade và --version khi cần để CLI cài trên máy là bản hiện hành." },
    { number: 4, titleEn: "Load live guidance", titleVi: "Nạp hướng dẫn live", descEn: "Before commands, run agent-browser skills get core, or --full when detailed command references and templates are needed.", descVi: "Trước khi chạy lệnh, dùng agent-browser skills get core, hoặc --full khi cần command reference và template chi tiết." },
    { number: 5, titleEn: "Select specialty", titleVi: "Chọn chuyên môn", descEn: "Load electron, slack, dogfood, vercel-sandbox, agentcore, or browserbase/cloud setup guidance when the task leaves ordinary web pages.", descVi: "Nạp hướng dẫn electron, slack, dogfood, vercel-sandbox, agentcore hoặc browserbase/cloud khi việc không còn là web page thông thường." },
    { number: 6, titleEn: "Open session", titleVi: "Mở session", descEn: "Start the local, Browserbase, AgentCore, or sandbox browser session and use the dashboard on port 4848 for observability when useful.", descVi: "Mở session browser local, Browserbase, AgentCore hoặc sandbox và dùng dashboard cổng 4848 để quan sát khi hữu ích." },
    { number: 7, titleEn: "Snapshot and act", titleVi: "Snapshot và thao tác", descEn: "Use accessibility-tree snapshots and stable element refs for compact state, then click, fill, navigate, scrape, or capture screenshots.", descVi: "Dùng snapshot accessibility tree và element ref ổn định để lấy trạng thái gọn, rồi click, điền form, điều hướng, scrape hoặc chụp màn hình." },
    { number: 8, titleEn: "Recover stale state", titleVi: "Phục hồi trạng thái cũ", descEn: "When elements disappear or commands go stale, re-run snapshots, close stale sessions, or refresh the CLI guidance instead of guessing.", descVi: "Khi element mất hoặc lệnh bị stale, chạy lại snapshot, đóng session cũ hoặc nạp lại hướng dẫn CLI thay vì đoán." },
  ],
  corePrinciplesEn: [
    "Prefer agent-browser for autonomous browser work that does not need the user's real profile state.",
    "Always load live CLI skill content because command details ship with the installed binary.",
    "Accessibility snapshots and stable refs are the core interaction primitive, not raw page dumps.",
    "Choose specialized workflows for Electron, Slack, dogfood QA, Browserbase, AgentCore, and Vercel Sandbox.",
  ],
  corePrinciplesVi: [
    "Ưu tiên agent-browser cho việc browser tự động không cần profile thật của người dùng.",
    "Luôn nạp nội dung skill live từ CLI vì chi tiết lệnh đi theo binary đang cài.",
    "Snapshot accessibility và ref ổn định là primitive chính để thao tác, không phải dump trang thô.",
    "Chọn workflow chuyên biệt cho Electron, Slack, dogfood QA, Browserbase, AgentCore và Vercel Sandbox.",
  ],
  expertiseAreasEn: ["Browser automation", "Accessibility snapshots", "Screenshots and forms", "Scraping", "Exploratory QA", "Cloud browsers", "Electron and Slack automation"],
  expertiseAreasVi: ["Tự động hóa browser", "Snapshot accessibility", "Screenshot và form", "Scraping", "QA khám phá", "Cloud browser", "Tự động hóa Electron và Slack"],
  promptExamples: [
    { labelEn: "Inspect a site", labelVi: "Kiểm tra một website", command: "/ak:agent-browser https://example.com", whenEn: "A page can be opened in a fresh managed browser for observation or screenshots.", whenVi: "Khi trang có thể mở trong browser mới do tool quản lý để quan sát hoặc chụp ảnh.", expectedEn: "Live CLI guidance, a browser session, snapshots, interactions, and evidence from the page.", expectedVi: "Nhận hướng dẫn CLI live, session browser, snapshot, thao tác và bằng chứng từ trang.", recommended: true },
    { labelEn: "Automate a task", labelVi: "Tự động hóa một tác vụ", command: "/ak:agent-browser fill signup form on staging", whenEn: "You need clicks or form fills without using the user's real Chrome login state.", whenVi: "Khi cần click hoặc điền form mà không dùng trạng thái đăng nhập Chrome thật của người dùng.", expectedEn: "A profile-independent automation flow with snapshots and recovery steps.", expectedVi: "Một flow tự động độc lập profile, có snapshot và bước phục hồi khi cần." },
  ],
  skillStack: [
    { name: "agent-browser CLI", type: 'tool' },
    { name: "Browserbase", type: 'tool' },
    { name: "AgentCore", type: 'tool' },
  ],
};

export default data;
