import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-hub',
  command: '/ak:hub',
  kit: 'marketer',
  header: {
    titleEn: 'Content Hub and Marketing Dashboard',
    titleVi: 'Content Hub và Marketing Dashboard',
    taglineEn: 'Records the unresolved local Content Hub and Marketing Dashboard launcher boundary so marketers do not rely on stale paths or overstated features.',
    taglineVi: 'Ghi lại ranh giới launcher Content Hub và Marketing Dashboard cục bộ còn chưa được giải quyết để marketer không dựa vào path cũ hoặc tính năng bị phóng đại.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Do not rely on ak:hub as a one-step launcher',
    titleVi: 'Không dựa vào ak:hub như launcher một bước',
    contentEn: 'The packaged launcher remains unresolved: canonical discovery, sibling paths, service startup, browser opening, and stop logic are not verified end to end.',
    contentVi: 'Launcher đóng gói vẫn chưa được giải quyết: discovery chuẩn, path skill cạnh bên, khởi động dịch vụ, mở browser và logic dừng chưa được kiểm chứng end-to-end.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read limitation', titleVi: 'Đọc giới hạn', descEn: 'Treat /ak:hub as an intended launcher with unresolved legacy naming and packaged sibling-path assumptions.', descVi: 'Xem /ak:hub là launcher dự kiến nhưng còn vướng tên legacy và giả định path skill cạnh bên chưa giải quyết.' },
    { number: 2, titleEn: 'Review prerequisites', titleVi: 'Rà điều kiện', descEn: 'Check Node/npm, ports 3457 and 5173, dependency installation, asset scanning, PID files, local state, and browser-opening approval before any manual recovery.', descVi: 'Kiểm tra Node/npm, cổng 3457 và 5173, cài dependency, quét asset, file PID, trạng thái cục bộ và quyền mở browser trước mọi phục hồi thủ công.' },
    { number: 3, titleEn: 'Explain invocation status', titleVi: 'Giải thích trạng thái gọi', descEn: 'Document canonical /ak:hub or $ak:hub spelling without treating discovery as verified launcher behavior.', descVi: 'Ghi chính tả chuẩn /ak:hub hoặc $ak:hub nhưng không xem discovery là bằng chứng launcher đã chạy đúng.' },
    { number: 4, titleEn: 'Separate surfaces', titleVi: 'Tách bề mặt', descEn: 'Describe Content Hub as an asset gallery and Marketing Dashboard as Assets, Brand, and Settings views only.', descVi: 'Mô tả Content Hub như gallery asset và Marketing Dashboard chỉ gồm các màn Assets, Brand và Settings.' },
    { number: 5, titleEn: 'Control process risk', titleVi: 'Kiểm soát rủi ro process', descEn: 'Do not start, rescan, or stop through ak:hub while path and ownership checks remain unresolved.', descVi: 'Không start, rescan hoặc stop qua ak:hub khi path và kiểm tra ownership còn chưa rõ.' },
    { number: 6, titleEn: 'State excluded claims', titleVi: 'Nêu phần loại trừ', descEn: 'Exclude campaign management, content-generation APIs, automation recipes, enforced API-key security, cloud sync, and publication claims.', descVi: 'Loại trừ quản lý campaign, API tạo nội dung, recipe automation, bảo mật API key bắt buộc, cloud sync và tuyên bố publish.' },
    { number: 7, titleEn: 'List future evidence', titleVi: 'Liệt kê bằng chứng tương lai', descEn: 'A future supported launcher must report resolved paths, dependency proposals, PIDs, bind addresses, health checks, URLs, and ownership-safe stop behavior.', descVi: 'Launcher được hỗ trợ trong tương lai phải báo path đã resolve, đề xuất dependency, PID, địa chỉ bind, health check, URL và cách stop an toàn theo ownership.' },
  ],
  corePrinciplesEn: [
    'Skill discovery does not prove shell, process, browser, or Hook parity.',
    'Do not run launcher options through ak:hub while the contract remains unresolved.',
    'Marketing Dashboard currently means Assets, Brand, and Settings, not campaign automation.',
    'Port-based stopping requires process ownership checks before termination.',
  ],
  corePrinciplesVi: [
    'Discovery skill không chứng minh parity về shell, process, browser hoặc Hook.',
    'Không chạy các option launcher qua ak:hub khi hợp đồng còn chưa giải quyết.',
    'Marketing Dashboard hiện chỉ là Assets, Brand và Settings, không phải automation campaign.',
    'Dừng theo cổng cần kiểm tra ownership của process trước khi terminate.',
  ],
  promptExamples: [
    { labelEn: 'Review limitation', labelVi: 'Xem giới hạn', command: '/ak:hub', whenEn: 'You are considering the intended local Content Hub and Dashboard launcher.', whenVi: 'Bạn đang cân nhắc launcher Content Hub và Dashboard cục bộ dự kiến.', expectedEn: 'Explains the unresolved launcher boundary instead of starting services.', expectedVi: 'Giải thích ranh giới launcher chưa giải quyết thay vì khởi động dịch vụ.', recommended: true },
    { labelEn: 'Scan boundary', labelVi: 'Ranh giới quét', command: '/ak:hub --scan', whenEn: 'You need to understand the intended asset rescan behavior.', whenVi: 'Cần hiểu hành vi quét lại asset theo dự kiến.', expectedEn: 'Warns not to run scan mode through ak:hub until the launcher contract is fixed.', expectedVi: 'Cảnh báo không chạy chế độ scan qua ak:hub cho tới khi hợp đồng launcher được sửa.' },
    { labelEn: 'Stop boundary', labelVi: 'Ranh giới dừng', command: '/ak:hub --stop', whenEn: 'You need to understand the intended stop behavior.', whenVi: 'Cần hiểu hành vi dừng theo dự kiến.', expectedEn: 'Requires ownership checks and warns against legacy port-based termination.', expectedVi: 'Yêu cầu kiểm tra ownership và cảnh báo không dùng termination theo cổng kiểu legacy.' },
  ],
  skillStack: [
    { name: 'content-hub intended surface', type: 'skill' },
    { name: 'legacy launcher paths unresolved', type: 'tool' },
    { name: 'Content Hub asset gallery', type: 'tool' },
    { name: 'Marketing Dashboard Assets/Brand/Settings', type: 'tool' },
  ],
  specialOperations: [
    { id: 'content-hub', titleEn: 'Content Hub', titleVi: 'Content Hub', descEn: 'Intended local asset gallery with project assets, manifest metadata, previews, brand context, and local save routes.', descVi: 'Gallery asset cục bộ dự kiến với asset dự án, metadata manifest, preview, bối cảnh brand và route lưu cục bộ.', color: 'blue' },
    { id: 'dashboard', titleEn: 'Marketing Dashboard', titleVi: 'Marketing Dashboard', descEn: 'Current dashboard authority is Assets, Brand, and Settings views; campaign, generation, and automation features are excluded.', descVi: 'Thẩm quyền dashboard hiện tại là các màn Assets, Brand và Settings; campaign, tạo nội dung và automation bị loại trừ.', color: 'emerald' },
    { id: 'api', titleEn: 'Dashboard API', titleVi: 'Dashboard API', descEn: 'Local API can scan and update asset metadata, read brand context, and upload validated logos; API-key settings are not an enforced security boundary.', descVi: 'API cục bộ có thể quét/cập nhật metadata asset, đọc brand context và upload logo đã validate; thiết lập API key không phải ranh giới bảo mật bắt buộc.', color: 'violet' },
  ],
};

export default data;
