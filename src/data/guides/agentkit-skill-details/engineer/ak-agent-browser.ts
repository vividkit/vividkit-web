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
  hardGate: {
    type: 'warning',
    titleEn: 'A fresh browser can still handle sensitive state',
    titleVi: 'Trình duyệt mới vẫn có thể chứa trạng thái nhạy cảm',
    contentEn:
      'The workflow avoids the user’s everyday Chrome profile, but credentials, downloads, authentication vault entries, persisted session state, screenshots, recordings, and extracted data can still be sensitive. Approve what may be entered, retained, uploaded, and deleted.',
    contentVi:
      'Workflow tránh profile Chrome hằng ngày của người dùng, nhưng credential, tệp tải xuống, mục vault xác thực, trạng thái phiên lưu lại, ảnh chụp, bản ghi và dữ liệu trích xuất vẫn có thể nhạy cảm. Phải phê duyệt nội dung được nhập, giữ lại, tải lên và xoá.',
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
  invocation: {
    syntax: '/ak:agent-browser [url or task]',
    arguments: [
      { token: '[url or task]', titleEn: 'URL or browser task', titleVi: 'URL hoặc việc trên browser', descEn: 'A URL to inspect, or a natural-language task with the target, expected result, allowed actions, artifacts to keep, and cleanup rule.', descVi: 'URL cần kiểm tra, hoặc yêu cầu bằng ngôn ngữ tự nhiên nêu target, kết quả mong đợi, hành động được phép, artifact cần giữ và quy tắc dọn session.', required: true, exampleCommand: '/ak:agent-browser "Open https://staging.example.com, inspect the checkout flow, capture screenshots, do not submit an order, and close the session"' },
    ],
    options: [
      { token: '-p browserbase', titleEn: 'Browserbase provider', titleVi: 'Provider Browserbase', descEn: 'Use a remote Browserbase browser after credentials, access, and provider cost are approved. Do not fall back silently if it is unavailable.', descVi: 'Dùng browser Browserbase từ xa sau khi credential, quyền truy cập và chi phí provider đã được duyệt. Không tự fallback im lặng nếu không khả dụng.', exampleCommand: '/ak:agent-browser "Use Browserbase (-p browserbase) to open https://example.com, capture the landing page state, then close the remote session"' },
    ],
  },
  promptExamples: [
    { labelEn: 'Bounded browser QA', labelVi: 'QA trình duyệt có giới hạn', command: '/ak:agent-browser "Open https://staging.example.com, inspect the checkout flow through the confirmation preview, capture screenshots at each step, do not submit an order, and close the session"', whenEn: 'Use when a fresh or tool-managed browser is enough for a long interaction, screenshots, and exploratory QA.', whenVi: 'Dùng khi phiên trình duyệt mới hoặc do tool quản lý là đủ cho tương tác dài, screenshot và exploratory QA.', expectedEn: 'Confirms permitted actions, loads agent-browser skills get core, drives the flow with snapshots and @eN refs, reports screenshots, final page state, skipped submission, and session closure.', expectedVi: 'Xác nhận hành động được phép, nạp agent-browser skills get core, điều khiển luồng bằng snapshot và ref @eN, rồi báo screenshot, trạng thái trang cuối, submission đã bỏ qua và việc đóng session.', recommended: true },
    { labelEn: 'Inspect one URL', labelVi: 'Kiểm tra một URL', command: '/ak:agent-browser https://example.com', whenEn: 'Use when the task starts with opening and inspecting a public page in a profile-independent session.', whenVi: 'Dùng khi việc bắt đầu bằng mở và kiểm tra một trang public trong phiên không phụ thuộc profile.', expectedEn: 'Opens the URL in the CLI-managed Chromium session, takes compact accessibility snapshots, refreshes refs after changes, and reports observations without using the user’s real Chrome cookies.', expectedVi: 'Mở URL trong phiên Chromium do CLI quản lý, lấy accessibility snapshot gọn, làm mới ref sau thay đổi và báo quan sát mà không dùng cookie Chrome thật của người dùng.' },
    { labelEn: 'Cloud browser run', labelVi: 'Chạy browser cloud', command: '/ak:agent-browser "Use Browserbase (-p browserbase) to open https://example.com, capture the landing page state, then close the remote session"', whenEn: 'Use for CI or environments without a local browser after Browserbase credentials and cost are approved.', whenVi: 'Dùng cho CI hoặc môi trường không có browser local sau khi credential và chi phí Browserbase đã được duyệt.', expectedEn: 'Uses the documented Browserbase provider path, records the cloud provider and target origin, captures requested evidence, and closes the remote browser so provider resources are not left running.', expectedVi: 'Dùng đường provider Browserbase đã document, ghi nhận provider cloud và origin mục tiêu, thu bằng chứng được yêu cầu và đóng browser từ xa để không bỏ quên tài nguyên provider.' },
    { labelEn: 'Specialized workflow', labelVi: 'Workflow chuyên biệt', command: '/ak:agent-browser "Load the Slack agent-browser workflow, verify the notification flow in the approved workspace, capture evidence, and avoid sending messages"', whenEn: 'Use when Slack, Electron, dogfood QA, Vercel Sandbox, or AgentCore requires the installed specialized workflow content.', whenVi: 'Dùng khi Slack, Electron, dogfood QA, Vercel Sandbox hoặc AgentCore cần nội dung workflow chuyên biệt từ CLI đã cài.', expectedEn: 'Loads the relevant agent-browser skills get workflow before acting, keeps interactions inside the approved app or workspace, captures reviewable evidence, and reports any limits or skipped mutations.', expectedVi: 'Nạp workflow agent-browser skills get phù hợp trước khi thao tác, giữ tương tác trong app hoặc workspace đã duyệt, thu bằng chứng có thể review và báo giới hạn hoặc mutation đã bỏ qua.' },
  ],
  specialOperations: [
    { id: 'live-core', titleEn: 'Live core reference', titleVi: 'Tham chiếu core live', descEn: 'agent-browser skills get core is the starting point for workflows and troubleshooting.', descVi: 'agent-browser skills get core là điểm bắt đầu cho workflow và xử lý lỗi.', color: 'blue' },
    { id: 'profile-split', titleEn: 'Profile split', titleVi: 'Tách theo profile', descEn: 'Real Chrome cookies and account state belong to ak:chrome-profile, not this skill.', descVi: 'Cookie và trạng thái tài khoản Chrome thật thuộc ak:chrome-profile, không thuộc skill này.', color: 'amber' },
    { id: 'dashboard', titleEn: 'Dashboard', titleVi: 'Dashboard', descEn: 'Port 4848 exposes session observability without exposing per-session browser ports.', descVi: 'Cổng 4848 cung cấp quan sát phiên mà không cần lộ cổng riêng của từng phiên trình duyệt.', color: 'purple' },
  ],
};

export default data;
