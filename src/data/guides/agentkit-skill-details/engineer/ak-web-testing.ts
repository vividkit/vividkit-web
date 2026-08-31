import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-web-testing',
  command: '/ak:web-testing',
  kit: 'engineer',
  header: {
    titleEn: '/ak:web-testing — Web test automation',
    titleVi: '/ak:web-testing — Tự động hóa test web',
    taglineEn: 'Design and run web test automation across Vitest, Playwright, k6, axe-core, Lighthouse, visual regression, flakiness, mobile gestures, and cross-browser quality.',
    taglineVi: 'Thiết kế và chạy tự động hóa test web với Vitest, Playwright, k6, axe-core, Lighthouse, visual regression, xử lý flakiness, gesture mobile và đa trình duyệt.',
  },
  invocation: {
    syntax: '/ak:web-testing [test-type] [target]',
    arguments: [
      { token: '[test-type]', titleEn: 'Test surface', titleVi: 'Bề mặt test', descEn: 'Optional testing area such as unit, integration, component, E2E, API, contract, accessibility, visual, performance, load, or security. This release does not define a fixed parser or enumerated values, so state the desired runner and evidence directly.', descVi: 'Mảng test tùy chọn như unit, integration, component, E2E, API, contract, accessibility, visual, performance, load hoặc security. Bản này không định nghĩa parser cố định hay danh sách giá trị, nên hãy nêu rõ runner và bằng chứng mong muốn.', exampleCommand: '/ak:web-testing e2e "Test checkout on http://localhost:3000 with Chromium and mobile Safari emulation; use seeded test data and never contact payment production."',
          exampleCommandVi: '/ak:web-testing e2e "Kiểm thử checkout trên http://localhost:3000 với mô phỏng Chromium và mobile Safari; dùng dữ liệu test đã seed và không bao giờ liên hệ payment production."' },
      { token: '[target]', titleEn: 'Target and evidence', titleVi: 'Target và bằng chứng', descEn: 'Optional URL, module, flow, environment, auth method, test data, browsers or devices, expected behavior, and cleanup boundary. It does not grant permission to run load, security, or mutating tests against unsafe systems.', descVi: 'URL, module, luồng, environment, phương thức auth, test data, browser hoặc device, hành vi kỳ vọng và ranh giới cleanup tùy chọn. Token này không cấp quyền chạy load, security hoặc test làm thay đổi dữ liệu trên hệ thống không an toàn.', exampleCommand: '/ak:web-testing load "Measure API latency and error-rate thresholds with k6 against the staging endpoints only"',
          exampleCommandVi: '/ak:web-testing load "Đo ngưỡng độ trễ API và tỷ lệ lỗi bằng k6 chỉ trên các endpoint staging"' },
    ],
  },
  processFlow: [
    { number: 1, titleEn: 'Choose model', titleVi: 'Chọn mô hình', descEn: 'Select pyramid, trophy, or honeycomb testing strategy based on monolith, SPA, or microservice shape.', descVi: 'Chọn chiến lược pyramid, trophy hoặc honeycomb theo dạng monolith, SPA hay microservice.' },
    { number: 2, titleEn: 'Pick layer', titleVi: 'Chọn tầng test', descEn: 'Map the request to unit, integration, E2E, component, contract, API, load, visual, accessibility, performance, or security testing.', descVi: 'Ánh xạ yêu cầu vào unit, integration, E2E, component, contract, API, load, visual, accessibility, performance hoặc security testing.' },
    { number: 3, titleEn: 'Set fixtures', titleVi: 'Dựng fixture', descEn: 'Prepare deterministic factories, fixtures, seeds, database isolation, or Testcontainers before executing tests.', descVi: 'Chuẩn bị factory, fixture, seed, cách ly database hoặc Testcontainers ổn định trước khi chạy test.' },
    { number: 4, titleEn: 'Implement tests', titleVi: 'Viết test', descEn: 'Use the matching reference: Vitest AAA, Playwright selectors/fixtures/shards, component tests, Pact/MSW, Supertest, or k6 patterns.', descVi: 'Dùng đúng reference: Vitest AAA, selector/fixture/shard của Playwright, component test, Pact/MSW, Supertest hoặc pattern k6.' },
    { number: 5, titleEn: 'Cover browsers', titleVi: 'Phủ trình duyệt', descEn: 'Apply cross-browser and mobile gesture matrices when device, touch, orientation, or browser compatibility matters.', descVi: 'Áp ma trận đa trình duyệt và gesture mobile khi cần tương thích thiết bị, touch, xoay màn hình hoặc browser.' },
    { number: 6, titleEn: 'Measure quality', titleVi: 'Đo chất lượng', descEn: 'Run visual comparison, axe/WCAG checks, Lighthouse/Core Web Vitals, or OWASP security checks for the requested quality dimension.', descVi: 'Chạy so sánh hình ảnh, kiểm axe/WCAG, Lighthouse/Core Web Vitals hoặc OWASP theo chiều chất lượng được yêu cầu.' },
    { number: 7, titleEn: 'Stabilize', titleVi: 'Ổn định test', descEn: 'Mitigate flakiness with robust selectors, explicit readiness, fixture control, retries only where justified, and CI sharding.', descVi: 'Giảm flakiness bằng selector chắc, readiness rõ, fixture kiểm soát được, retry có lý do và sharding trên CI.' },
    { number: 8, titleEn: 'Analyze output', titleVi: 'Phân tích kết quả', descEn: 'Use the result analyzer to combine Playwright, Vitest, or JUnit outputs into a release-ready summary.', descVi: 'Dùng công cụ phân tích để gom kết quả Playwright, Vitest hoặc JUnit thành bản tóm tắt sẵn sàng release.' },
    { number: 9, titleEn: 'Gate release', titleVi: 'Chặn release', descEn: 'Wire CI gates in order: fast unit fail, E2E, accessibility, and performance checks.', descVi: 'Nối gate CI theo thứ tự: unit fail nhanh, E2E, accessibility và performance.' },
  ],
  corePrinciplesEn: [
    'Choose the test strategy before choosing the tool.',
    'Prefer deterministic fixtures and real user-visible contracts over brittle plumbing checks.',
    'Use Playwright for browser behavior, Vitest for fast unit/integration feedback, and k6 for load.',
    'Treat accessibility, performance, security, visual, mobile, and cross-browser concerns as first-class release gates when requested.',
  ],
  corePrinciplesVi: [
    'Chọn chiến lược test trước khi chọn công cụ.',
    'Ưu tiên fixture ổn định và contract người dùng thấy được thay vì kiểm tra plumbing dễ vỡ.',
    'Dùng Playwright cho hành vi trình duyệt, Vitest cho phản hồi unit/integration nhanh, và k6 cho tải.',
    'Khi được yêu cầu, xem accessibility, performance, security, visual, mobile và cross-browser là gate release hạng nhất.',
  ],
  skillStack: [
    { name: 'Vitest', type: 'tool' },
    { name: 'Playwright', type: 'tool' },
    { name: 'k6', type: 'tool' },
    { name: 'axe-core', type: 'tool' },
    { name: 'Lighthouse', type: 'tool' },
    { name: 'Pact/MSW', type: 'tool' },
    { name: 'Testcontainers', type: 'tool' },
  ],
  specialOperations: [
    { id: 'init-playwright', titleEn: 'Initialize Playwright', titleVi: 'Khởi tạo Playwright', descEn: 'The bundled init script can create best-practice config, fixtures, and example tests.', descVi: 'Script init đi kèm có thể tạo config, fixture và test mẫu theo best practice.', color: 'sky' },
    { id: 'analyze-results', titleEn: 'Analyze test results', titleVi: 'Phân tích kết quả test', descEn: 'The analyzer merges Playwright, Vitest, and JUnit-style reports into one summary.', descVi: 'Analyzer gộp report Playwright, Vitest và kiểu JUnit thành một bản tóm tắt.', color: 'violet' },
    { id: 'release-checklist', titleEn: 'Pre-release checklist', titleVi: 'Checklist trước release', descEn: 'Use functional, accessibility, security, performance, and CI/CD checklists before shipping.', descVi: 'Dùng checklist functional, accessibility, security, performance và CI/CD trước khi ship.', color: 'amber' },
  ],
  promptExamples: [
    { labelEn: 'Browser E2E', labelVi: 'E2E trên browser', command: '/ak:web-testing e2e "Create Playwright coverage for checkout on http://localhost:3000 with seeded data, Chromium, and mobile Safari emulation"',
      commandVi: '/ak:web-testing e2e "Tạo coverage Playwright cho checkout trên http://localhost:3000 với dữ liệu seeded, Chromium và mô phỏng mobile Safari"', whenEn: 'A browser user journey needs repeatable automation or flakiness debugging.', whenVi: 'Một hành trình người dùng trên trình duyệt cần automation lặp lại hoặc debug flakiness.', expectedEn: 'Selects Playwright fixtures, accessible selectors, sharding, trace or screenshot artifacts, and explicit evidence gaps for real devices.', expectedVi: 'Chọn fixture Playwright, selector accessible, sharding, artifact trace hoặc screenshot và nêu rõ gap bằng chứng trên thiết bị thật.', recommended: true },
    { labelEn: 'Bootstrap Playwright', labelVi: 'Bootstrap Playwright', command: '/ak:web-testing "Initialize Playwright Project for apps/web with component testing enabled; keep existing files"',
      commandVi: '/ak:web-testing "Khởi tạo Playwright Project cho apps/web với component testing được bật; giữ các file hiện có"', whenEn: 'A project needs Playwright configuration, fixtures, example tests, and report formats.', whenVi: 'Project cần cấu hình Playwright, fixture, test mẫu và định dạng report.', expectedEn: 'Uses the initializer semantics for --dir and component testing, notes skipped existing files, and lists dependencies or browsers still to install.', expectedVi: 'Dùng đúng ngữ nghĩa initializer cho --dir và component testing, ghi nhận file có sẵn được bỏ qua và liệt kê dependency hoặc browser còn cần cài.' },
    { labelEn: 'Load test', labelVi: 'Test tải', command: '/ak:web-testing load "Measure API latency and error-rate thresholds with k6 against the staging endpoints only"',
      commandVi: '/ak:web-testing load "Đo ngưỡng độ trễ API và tỷ lệ lỗi với k6 chỉ đối với các endpoint staging"', whenEn: 'Throughput, latency, saturation, or error-rate thresholds need safe measurement.', whenVi: 'Cần đo throughput, latency, điểm bão hòa hoặc ngưỡng error-rate một cách an toàn.', expectedEn: 'Applies k6 load-testing patterns, verifies the authorized target, captures threshold results, and reports provider or environment limits.', expectedVi: 'Áp pattern k6, xác minh target được phép, giữ kết quả theo threshold và báo giới hạn provider hoặc environment.' },
    { labelEn: 'Accessibility and visual', labelVi: 'Accessibility và visual', command: '/ak:web-testing accessibility visual "Audit the homepage with axe, keyboard checks, and Playwright screenshot comparison"',
      commandVi: '/ak:web-testing accessibility visual "Kiểm tra trang chủ với axe, kiểm tra bàn phím và so sánh ảnh chụp màn hình Playwright"', whenEn: 'Release quality depends on repeatable accessibility or visual-regression evidence.', whenVi: 'Chất lượng release phụ thuộc vào bằng chứng accessibility hoặc visual regression có thể lặp lại.', expectedEn: 'Uses axe/WCAG and screenshot-baseline guidance, preserves violations or diff artifacts, and warns before updating unexplained baselines.', expectedVi: 'Dùng hướng dẫn axe/WCAG và screenshot baseline, giữ artifact violation hoặc diff và cảnh báo trước khi cập nhật baseline chưa giải thích.' },
  ],
};

export default data;
