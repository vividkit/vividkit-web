import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-hub',
  command: '/ak:hub',
  kit: 'marketer',
  header: {
    titleEn: 'Content Hub and Marketing Dashboard',
    titleVi: 'Content Hub và Marketing Dashboard',
    taglineEn: 'Starts, rescans, or stops the local Content Hub plus Marketing Dashboard services and reports the URLs marketers need.',
    taglineVi: 'Khởi động, quét lại hoặc dừng Content Hub cùng Marketing Dashboard cục bộ và báo các URL marketer cần dùng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read mode', titleVi: 'Đọc chế độ', descEn: 'Accept the default start behavior, --scan to rescan assets, or --stop to stop all servers.', descVi: 'Nhận chế độ mặc định là khởi động, --scan để quét lại assets, hoặc --stop để dừng toàn bộ server.' },
    { number: 2, titleEn: 'Activate hub', titleVi: 'Kích hoạt hub', descEn: 'Activate the content-hub skill before running the service script.', descVi: 'Kích hoạt skill content-hub trước khi chạy script dịch vụ.' },
    { number: 3, titleEn: 'Run script', titleVi: 'Chạy script', descEn: 'Execute bash ../content-hub/scripts/start-all.sh with the provided arguments.', descVi: 'Chạy bash ../content-hub/scripts/start-all.sh với tham số đã nhận.' },
    { number: 4, titleEn: 'Start services', titleVi: 'Khởi động dịch vụ', descEn: 'Bring up Content Hub, Dashboard UI, and Dashboard API when starting.', descVi: 'Khi khởi động, bật Content Hub, Dashboard UI và Dashboard API.' },
    { number: 5, titleEn: 'Open hub', titleVi: 'Mở hub', descEn: 'Auto-open Content Hub at http://localhost:3457/hub.', descVi: 'Tự mở Content Hub tại http://localhost:3457/hub.' },
    { number: 6, titleEn: 'Report URLs', titleVi: 'Báo URL', descEn: 'Report Content Hub, Dashboard UI, and Dashboard API URLs after services start.', descVi: 'Báo URL của Content Hub, Dashboard UI và Dashboard API sau khi dịch vụ chạy.' },
    { number: 7, titleEn: 'Expose features', titleVi: 'Nêu tính năng', descEn: 'Point users to asset gallery, AI editor, brand sidebar, search filters, campaign management, content library, asset linking, and automation panel.', descVi: 'Chỉ người dùng tới gallery asset, AI editor, sidebar brand, filter tìm kiếm, quản lý campaign, thư viện nội dung, liên kết asset và automation panel.' },
  ],
  corePrinciplesEn: [
    'The hub is an operational surface for marketing assets, not a content generation command.',
    'Always report the local URLs when services start.',
    'Scanning is explicit through --scan and stopping is explicit through --stop.',
    'Content Hub and Dashboard API share the localhost:3457 service boundary.',
  ],
  corePrinciplesVi: [
    'Hub là bề mặt vận hành asset marketing, không phải lệnh tạo nội dung.',
    'Khi dịch vụ chạy, luôn báo các URL cục bộ.',
    'Quét lại phải dùng --scan và dừng phải dùng --stop rõ ràng.',
    'Content Hub và Dashboard API cùng nằm trên ranh giới service localhost:3457.',
  ],
  promptExamples: [
    { labelEn: 'Start services', labelVi: 'Khởi động dịch vụ', command: '/ak:hub', whenEn: 'You want to open the Content Hub and Marketing Dashboard.', whenVi: 'Muốn mở Content Hub và Marketing Dashboard.', expectedEn: 'Starts all services, opens the hub, and reports local URLs.', expectedVi: 'Khởi động mọi dịch vụ, mở hub và báo URL cục bộ.', recommended: true },
    { labelEn: 'Rescan assets', labelVi: 'Quét lại asset', command: '/ak:hub --scan', whenEn: 'Assets changed and the gallery should refresh.', whenVi: 'Asset đã thay đổi và gallery cần cập nhật.', expectedEn: 'Runs the start-all script in scan mode against the assets folder.', expectedVi: 'Chạy script start-all ở chế độ scan cho thư mục assets.' },
    { labelEn: 'Stop servers', labelVi: 'Dừng server', command: '/ak:hub --stop', whenEn: 'The local hub and dashboard services should be shut down.', whenVi: 'Cần tắt các dịch vụ hub và dashboard cục bộ.', expectedEn: 'Stops Content Hub, Dashboard UI, and Dashboard API services.', expectedVi: 'Dừng Content Hub, Dashboard UI và Dashboard API.' },
  ],
  skillStack: [
    { name: 'content-hub', type: 'skill' },
    { name: '../content-hub/scripts/start-all.sh', type: 'tool' },
    { name: 'Content Hub', type: 'tool' },
    { name: 'Marketing Dashboard', type: 'tool' },
  ],
  specialOperations: [
    { id: 'content-hub', titleEn: 'Content Hub', titleVi: 'Content Hub', descEn: 'Visual asset gallery with thumbnails, AI-powered editor, brand context sidebar, and type filters.', descVi: 'Gallery asset có thumbnail, editor hỗ trợ AI, sidebar bối cảnh brand và filter theo loại.', color: 'blue' },
    { id: 'dashboard', titleEn: 'Marketing Dashboard', titleVi: 'Marketing Dashboard', descEn: 'Campaign management, content library, asset linking, and automation panel.', descVi: 'Quản lý campaign, thư viện nội dung, liên kết asset và bảng automation.', color: 'emerald' },
    { id: 'api', titleEn: 'Dashboard API', titleVi: 'Dashboard API', descEn: 'REST API backed by Hono and SQLite at http://localhost:3457/api/.', descVi: 'REST API dùng Hono và SQLite tại http://localhost:3457/api/.', color: 'violet' },
  ],
};

export default data;
