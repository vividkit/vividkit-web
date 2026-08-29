import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-agent-browser',
  command: '/ak:agent-browser',
  kit: 'engineer',
  header: {
    titleEn: '/ak:agent-browser — Profile-independent browser automation',
    titleVi: '/ak:agent-browser — Tự động hóa trình duyệt không phụ thuộc profile thật',
    taglineEn:
      'Uses the agent-browser CLI for autonomous browsing, snapshots, screenshots, form fills, scraping, Electron apps, Slack workflows, bug hunts, cloud browsers, and QA when real Chrome profile state is not required.',
    taglineVi:
      'Dùng CLI agent-browser cho duyệt web tự động, snapshot, ảnh chụp, điền form, scraping, app Electron, Slack, săn lỗi, trình duyệt cloud và QA khi không cần trạng thái Chrome thật của người dùng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Choose the browser owner', titleVi: 'Chọn chủ quản trình duyệt', descEn: 'Use agent-browser for fresh or tool-managed sessions; switch to ak:chrome-profile when cookies, accounts, tenants, or existing real Chrome state matter.', descVi: 'Dùng agent-browser cho phiên mới hoặc do công cụ quản lý; chuyển sang ak:chrome-profile khi cần cookie, tài khoản, tenant hoặc trạng thái Chrome thật đang có.' },
    { number: 2, titleEn: 'Install and verify', titleVi: 'Cài và kiểm tra', descEn: 'Install or upgrade with npm, download Chromium once, and confirm the binary version before relying on commands.', descVi: 'Cài hoặc nâng cấp bằng npm, tải Chromium một lần, rồi kiểm tra phiên bản binary trước khi dùng lệnh.' },
    { number: 3, titleEn: 'Load live skills', titleVi: 'Nạp hướng dẫn live', descEn: 'Run agent-browser skills get core before command work so snapshots, refs, troubleshooting, and command details match the installed binary.', descVi: 'Chạy agent-browser skills get core trước khi thao tác để snapshot, ref, xử lý lỗi và chi tiết lệnh khớp binary đang cài.' },
    { number: 4, titleEn: 'Pick specialty', titleVi: 'Chọn nhánh chuyên biệt', descEn: 'Load electron, slack, dogfood, vercel-sandbox, or agentcore workflow content when the task is not ordinary web-page automation.', descVi: 'Nạp hướng dẫn electron, slack, dogfood, vercel-sandbox hoặc agentcore khi việc không chỉ là tự động hóa trang web thông thường.' },
    { number: 5, titleEn: 'Run with compact refs', titleVi: 'Chạy bằng ref gọn', descEn: 'Navigate, snapshot, interact through accessibility-tree element refs, and re-snapshot after page changes to avoid stale targets.', descVi: 'Điều hướng, lấy snapshot, thao tác qua ref phần tử trong cây accessibility, rồi snapshot lại sau khi trang đổi để tránh trỏ vào mục cũ.' },
    { number: 6, titleEn: 'Observe and debug', titleVi: 'Quan sát và sửa lỗi', descEn: 'Use screenshots, video/session state, the dashboard on port 4848, and documented troubleshooting for missing Chromium, stale sessions, or missing elements.', descVi: 'Dùng ảnh chụp, video/trạng thái phiên, dashboard cổng 4848 và mục xử lý lỗi cho Chromium thiếu, phiên cũ hoặc không tìm thấy phần tử.' },
    { number: 7, titleEn: 'Report limits', titleVi: 'Báo giới hạn', descEn: 'Name when a task needs the user\'s real logged-in Chrome or low-level CDP diagnostics instead of pretending the managed browser can see that state.', descVi: 'Nói rõ khi việc cần Chrome thật đã đăng nhập của người dùng hoặc chẩn đoán CDP thấp tầng, thay vì giả vờ trình duyệt được quản lý thấy được trạng thái đó.' },
  ],
  corePrinciplesEn: [
    'Agent-browser is the workflow source: load skills get core instead of copying stale command details.',
    'Prefer this skill for profile-independent browser work; prefer ak:chrome-profile for real cookies and logged-in state.',
    'Compact accessibility snapshots and stable refs are the main reliability lever.',
    'Cloud, Electron, Slack, and exploratory QA each have specialized live workflow content.',
  ],
  corePrinciplesVi: [
    'Agent-browser là nguồn hướng dẫn workflow: nạp skills get core thay vì chép chi tiết lệnh có thể lỗi thời.',
    'Ưu tiên skill này cho việc trình duyệt không phụ thuộc profile; dùng ak:chrome-profile khi cần cookie và trạng thái đăng nhập thật.',
    'Snapshot accessibility gọn và ref ổn định là điểm chính giúp thao tác đáng tin cậy.',
    'Cloud, Electron, Slack và QA khám phá đều có hướng dẫn live chuyên biệt riêng.',
  ],
  expertiseAreasEn: ['Autonomous browsing', 'Form filling', 'Screenshots and QA', 'Electron and Slack automation', 'Browserbase/cloud sessions'],
  expertiseAreasVi: ['Duyệt web tự động', 'Điền biểu mẫu', 'Ảnh chụp và QA', 'Tự động hóa Electron và Slack', 'Phiên Browserbase/cloud'],
  promptExamples: [
    { labelEn: 'Open-ended QA', labelVi: 'QA khám phá', command: '/ak:agent-browser "Explore https://example.com/signup and report blocking UX bugs"', whenEn: 'Use for browser bug hunts where a managed browser session is enough.', whenVi: 'Dùng cho săn lỗi trình duyệt khi phiên do công cụ quản lý là đủ.', expectedEn: 'Loads current agent-browser guidance, navigates, captures page evidence, and reports findings.', expectedVi: 'Nạp hướng dẫn agent-browser hiện hành, điều hướng, thu bằng chứng trang và báo kết quả.', recommended: true },
    { labelEn: 'Specific URL flow', labelVi: 'Luồng URL cụ thể', command: '/ak:agent-browser https://example.com', whenEn: 'Use when the first step is simply opening and inspecting a page with compact snapshots.', whenVi: 'Dùng khi bước đầu chỉ là mở và kiểm tra một trang bằng snapshot gọn.', expectedEn: 'Uses the CLI browser session rather than the user\'s real Chrome profile.', expectedVi: 'Dùng phiên trình duyệt của CLI thay vì profile Chrome thật của người dùng.' },
    { labelEn: 'Electron workflow', labelVi: 'Luồng Electron', command: '/ak:agent-browser "Automate the Slack desktop app to verify the notification flow"', whenEn: 'Use when a desktop/Electron or Slack workflow needs the installed specialized skill content.', whenVi: 'Dùng khi một luồng desktop/Electron hoặc Slack cần hướng dẫn chuyên biệt đã cài.', expectedEn: 'Loads the relevant specialized agent-browser skill before interacting.', expectedVi: 'Nạp skill agent-browser chuyên biệt phù hợp trước khi thao tác.' },
  ],
  specialOperations: [
    { id: 'live-core', titleEn: 'Live core reference', titleVi: 'Tham chiếu core live', descEn: 'agent-browser skills get core is the starting point for workflows and troubleshooting.', descVi: 'agent-browser skills get core là điểm bắt đầu cho workflow và xử lý lỗi.', color: 'blue' },
    { id: 'profile-split', titleEn: 'Profile split', titleVi: 'Tách theo profile', descEn: 'Real Chrome cookies and account state belong to ak:chrome-profile, not this skill.', descVi: 'Cookie và trạng thái tài khoản Chrome thật thuộc ak:chrome-profile, không thuộc skill này.', color: 'amber' },
    { id: 'dashboard', titleEn: 'Dashboard', titleVi: 'Dashboard', descEn: 'Port 4848 exposes session observability without exposing per-session browser ports.', descVi: 'Cổng 4848 cung cấp quan sát phiên mà không cần lộ cổng riêng của từng phiên trình duyệt.', color: 'purple' },
  ],
};

export default data;
