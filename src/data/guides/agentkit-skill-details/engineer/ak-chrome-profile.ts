import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-chrome-profile',
  command: '/ak:chrome-profile',
  kit: 'engineer',
  header: {
    titleEn: '/ak:chrome-profile',
    titleVi: '/ak:chrome-profile',
    taglineEn: 'Profile-aware browser automation for real Chrome state: the right Google account, cookies, workspace, tenant, or deterministic profile target.',
    taglineVi: 'Tự động hoá trình duyệt theo đúng hồ sơ Chrome thật: đúng tài khoản Google, cookie, workspace, tenant hoặc profile đã định danh.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Operate only on approved real profiles',
    titleVi: 'Chỉ thao tác trên profile thật đã được chấp thuận',
    contentEn: 'If the requested profile is not configured or approved, ask before operating. Never expose profile emails, mappings, or JSON open payloads unless the task requires it.',
    contentVi: 'Nếu profile được yêu cầu chưa cấu hình hoặc chưa được người dùng chấp thuận, phải hỏi trước khi thao tác. Không tiết lộ email, ánh xạ profile hoặc payload JSON mở tab trừ khi nhiệm vụ thật sự cần.',
  },
  processFlow: [
    { number: 1, titleEn: 'Decide need', titleVi: 'Xác định nhu cầu', descEn: 'Use this skill only when real Chrome identity matters; otherwise use agent-browser, web-testing, Playwright, or ordinary DevTools navigation.', descVi: 'Chỉ dùng khi trạng thái Chrome thật quan trọng; nếu không, dùng agent-browser, web-testing, Playwright hoặc điều hướng DevTools thông thường.' },
    { number: 2, titleEn: 'Check mapping', titleVi: 'Kiểm tra ánh xạ', descEn: 'Run profile discovery so the requested key resolves by account email or display-name substring, not by brittle Profile directories.', descVi: 'Kiểm tra để key profile khớp theo email hoặc tên hiển thị, không dựa vào thư mục Profile dễ thay đổi.' },
    { number: 3, titleEn: 'Probe bridge', titleVi: 'Dò cầu nối', descEn: 'Use doctor as a heuristic, then make a live Chrome DevTools MCP page-list or snapshot probe before declaring the browser unreadable.', descVi: 'Xem doctor như tín hiệu tĩnh, rồi dò trực tiếp bằng Chrome DevTools MCP trước khi kết luận không đọc được trình duyệt.' },
    { number: 4, titleEn: 'Guide setup', titleVi: 'Dẫn thiết lập', descEn: 'If mapping or bridge is missing, explain the failing layer and give the next concrete setup command or browser action.', descVi: 'Nếu thiếu ánh xạ hoặc cầu đọc, nói rõ lớp nào hỏng và đưa lệnh hoặc thao tác trình duyệt cụ thể tiếp theo.' },
    { number: 5, titleEn: 'Open exact tab', titleVi: 'Mở đúng tab', descEn: 'Materialize the URL with chrome-profile open --json <key> <url> so the output includes an exact cdp-open binding marker.', descVi: 'Mở URL bằng chrome-profile open --json <key> <url> để nhận marker cdp-open dùng bám đúng tab.' },
    { number: 6, titleEn: 'Bind by token', titleVi: 'Bám theo token', descEn: 'List pages, select the one containing the returned cdp-open token, and sanity-check the cdp-profile marker.', descVi: 'Liệt kê trang, chọn trang chứa token cdp-open trả về và kiểm tra thêm marker cdp-profile.' },
    { number: 7, titleEn: 'Operate safely', titleVi: 'Thao tác an toàn', descEn: 'Continue with snapshot, click, evaluate, screenshot, or extraction through the bound page; never navigate an arbitrary bridge tab for profile-scoped work.', descVi: 'Tiếp tục snapshot, click, evaluate, chụp ảnh hoặc trích xuất trên đúng trang đã bám; không điều hướng bừa một tab bridge cho việc theo profile.' },
    { number: 8, titleEn: 'Handle limits', titleVi: 'Xử lý giới hạn', descEn: 'If SPAs strip hash markers, capture the page ID immediately and keep using that ID; if the bridge fails, follow the documented setup path.', descVi: 'Nếu SPA xoá hash marker, lấy page ID ngay rồi dùng ID đó; nếu cầu đọc hỏng, theo đúng playbook thiết lập đã ghi.' },
  ],
  corePrinciplesEn: [
    'Real profile state is exceptional, not the default browser-testing path.',
    'Static doctor output is not enough; live MCP reachability is the final check.',
    'Bind by the returned cdp-open token, not by guessing the newest matching tab.',
    'Protect account/profile metadata as local private information.',
  ],
  corePrinciplesVi: [
    'Trạng thái profile thật là trường hợp đặc biệt, không phải đường kiểm thử trình duyệt mặc định.',
    'Kết quả doctor tĩnh chưa đủ; khả năng đọc trực tiếp qua MCP mới là kiểm tra cuối.',
    'Bám theo token cdp-open được trả về, không đoán tab mới nhất có vẻ giống.',
    'Bảo vệ metadata tài khoản và profile như thông tin riêng trên máy người dùng.',
  ],
  expertiseAreasEn: ['Chrome profile mapping', 'DevTools MCP bridge probing', 'Exact URL-anchor tab binding', 'Real-account automation safety'],
  expertiseAreasVi: ['Ánh xạ profile Chrome', 'Dò cầu Chrome DevTools MCP', 'Bám tab bằng anchor URL chính xác', 'An toàn khi tự động hoá tài khoản thật'],
  promptExamples: [
    { labelEn: 'Open work profile', labelVi: 'Mở profile công việc', command: '/ak:chrome-profile work https://github.com/org/repo/pulls', whenEn: 'A task must use the user\'s signed-in work Chrome account.', whenVi: 'Khi nhiệm vụ cần đúng tài khoản Chrome công việc đã đăng nhập.', expectedEn: 'Profile mapping, bridge readiness, exact tab binding, then safe browser operation.', expectedVi: 'Kiểm tra ánh xạ, cầu đọc, bám đúng tab rồi mới thao tác trình duyệt an toàn.', recommended: true },
    { labelEn: 'Setup help', labelVi: 'Hỗ trợ thiết lập', command: '/ak:chrome-profile help me configure the profile bridge for my personal account', whenEn: 'The profile key or readable DevTools bridge is missing.', whenVi: 'Khi thiếu key profile hoặc cầu DevTools có thể đọc được.', expectedEn: 'Layer-specific setup guidance instead of a generic “configure MCP” answer.', expectedVi: 'Hướng dẫn đúng lớp đang hỏng thay vì trả lời chung chung “hãy cấu hình MCP”.' },
  ],
  skillStack: [
    { name: 'chrome-profile CLI', type: 'tool' },
    { name: 'Chrome DevTools MCP', type: 'tool' },
    { name: 'ak:agent-browser', type: 'skill' },
    { name: 'ak:web-testing', type: 'skill' },
  ],
};

export default data;
