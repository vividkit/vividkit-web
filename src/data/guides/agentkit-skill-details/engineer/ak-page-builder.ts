import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-page-builder',
  command: '/ak:page-builder',
  kit: 'engineer',
  header: {
    titleEn: '/ak:page-builder — Dynamic page builder',
    titleVi: '/ak:page-builder — Page builder động',
    taglineEn:
      'Integrate or extend a project page builder with the host stack, then operate drafts, previews, and publishing. Not for one-off page design or a generic API wrapper.',
    taglineVi:
      'Gắn hoặc mở rộng page builder bằng stack của project, rồi vận hành draft, preview và publish. Không dùng để thiết kế trang một lần hay bọc API chung.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Do not invent tools or leak secrets',
    titleVi: 'Không bịa tool, không lộ secret',
    contentEn:
      'Preserve user-owned files, existing content, and credentials. Keep secrets out of documents, browser bundles, and tool output. Do not invent a tool name, fake an endpoint response, or silently replace dynamic behavior with a demo.',
    contentVi:
      'Giữ file của user, nội dung sẵn có và credential. Không đưa secret vào tài liệu, bundle trình duyệt hay output tool. Không bịa tên tool, không giả response endpoint, không thay hành vi động bằng bản demo im lặng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Discover the host', titleVi: 'Khám phá host', descEn: 'Resolve the app, existing CMS/builder, render model, components, auth/storage, and deployment from the current project before choosing an adapter.', descVi: 'Xác định app, CMS/builder sẵn có, mô hình render, component, auth/storage và deployment từ project hiện tại trước khi chọn adapter.' },
    { number: 2, titleEn: 'Define contracts', titleVi: 'Định nghĩa contract', descEn: 'Define the block registry and serialized page contract, including widget sizing, then implement shared page operations on current owners.', descVi: 'Định nghĩa registry block và contract trang đã serialize, gồm kích thước widget, rồi triển khai thao tác trang chung trên owner hiện có.' },
    { number: 3, titleEn: 'Connect editor', titleVi: 'Gắn editor', descEn: 'Connect the accessible, responsive, touch-friendly editor and preview/publication lifecycle to those operations. Verify a real block before scaling.', descVi: 'Gắn editor dễ tiếp cận, responsive, dùng cảm ứng và vòng đời preview/publish vào các thao tác đó. Xác minh một block thật trước khi mở rộng.' },
    { number: 4, titleEn: 'Expose interfaces', titleVi: 'Mở giao diện', descEn: 'Expose API, CLI, MCP stdio/HTTP, and WebMCP as requested, plus SEO/Markdown exports and in-scope deployment preparation.', descVi: 'Mở API, CLI, MCP stdio/HTTP và WebMCP theo yêu cầu, kèm xuất SEO/Markdown và chuẩn bị deploy trong phạm vi.' },
    { number: 5, titleEn: 'Create operator skill', titleVi: 'Tạo skill operator', descEn: 'Use installed ak-skill-creator to create or update the project operator skill from working contracts. Required for setup and contract updates.', descVi: 'Dùng ak-skill-creator đã cài để tạo hoặc cập nhật skill operator của project từ contract đang chạy. Bắt buộc khi setup và khi cập nhật contract.' },
    { number: 6, titleEn: 'Verify the journey', titleVi: 'Xác minh hành trình', descEn: 'Complete the accepted journey, fix failures, and report artifacts, tested interfaces, operator-skill path, and any unverified coverage.', descVi: 'Hoàn thành hành trình đã chấp nhận, sửa chỗ fail, rồi báo artifact, giao diện đã test, path skill operator và phần chưa xác minh.' },
  ],
  corePrinciplesEn: [
    'Agents are the primary operators; humans customize through the editor.',
    'Reuse the host stack and current page owners; do not create a second source of page truth.',
    'setup, update, and operate are skill arguments, not executable ak CLI subcommands.',
    'A missing required creator or unsupported runtime is a named incomplete capability, not a pass.',
  ],
  corePrinciplesVi: [
    'Agent là người vận hành chính; người dùng chỉnh trang qua editor.',
    'Tái sử dụng stack host và owner trang hiện có; không tạo nguồn sự thật thứ hai.',
    'setup, update và operate là đối số skill, không phải subcommand CLI ak.',
    'Thiếu creator bắt buộc hoặc runtime không hỗ trợ là năng lực chưa đủ, đã nêu tên — không được coi là xong.',
  ],
  invocation: {
    syntax: '/ak:page-builder [setup|update|operate] [project-path] [request]',
    arguments: [
      {
        token: '[setup|update|operate]',
        titleEn: 'Mode',
        titleVi: 'Mode',
        descEn: 'Skill argument inferred from the request when omitted. Explicit arguments win. Not an `ak` CLI subcommand.',
        descVi: 'Đối số skill; suy từ request nếu bỏ trống. Đối số ghi rõ thắng. Không phải subcommand CLI `ak`.',
        required: false,
        exampleCommand: '/ak:page-builder setup ./apps/storefront',
      },
      {
        token: '[project-path]',
        titleEn: 'Project path',
        titleVi: 'Đường dẫn project',
        descEn: 'Host app path for setup or update. Omit when the current workspace is the host.',
        descVi: 'Path app host khi setup hoặc update. Bỏ trống nếu workspace hiện tại là host.',
        required: false,
        exampleCommand: '/ak:page-builder setup ./apps/storefront',
      },
      {
        token: '[request]',
        titleEn: 'Request',
        titleVi: 'Yêu cầu',
        descEn: 'What to integrate, extend, or operate. For update/operate, change only the requested behavior.',
        descVi: 'Việc cần gắn, mở rộng hoặc vận hành. Với update/operate, chỉ đổi hành vi được yêu cầu.',
        required: false,
        exampleCommand: '/ak:page-builder operate Create a pricing draft and share its preview',
      },
    ],
    subcommands: [
      {
        name: 'setup',
        syntax: '/ak:page-builder setup [project-path] [request]',
        titleEn: 'New integration',
        titleVi: 'Gắn mới',
        descEn: 'Discover the host, implement contracts, editor, interfaces, operator skill, and verification for a new builder.',
        descVi: 'Khám phá host, làm contract, editor, giao diện, skill operator và xác minh cho builder mới.',
        exampleCommand: '/ak:page-builder setup ./apps/storefront',
      },
      {
        name: 'update',
        syntax: '/ak:page-builder update [project-path] [request]',
        titleEn: 'Scoped extension',
        titleVi: 'Mở rộng có phạm vi',
        descEn: 'Change the requested behavior and affected contracts. Do not rebuild unrelated subsystems.',
        descVi: 'Đổi hành vi được yêu cầu và contract liên quan. Không dựng lại subsystem không liên quan.',
        exampleCommand: '/ak:page-builder update Add the existing ProductGrid block with category bindings',
      },
      {
        name: 'operate',
        syntax: '/ak:page-builder operate [request]',
        titleEn: 'Operate pages',
        titleVi: 'Vận hành trang',
        descEn: 'Use the project operator skill when available; otherwise operate here and create that skill after verifying contracts.',
        descVi: 'Dùng skill operator của project nếu có; nếu chưa có thì vận hành tại đây rồi tạo skill đó sau khi xác minh contract.',
        exampleCommand: '/ak:page-builder operate Create a pricing draft and share its preview',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Setup a storefront builder',
      labelVi: 'Setup builder storefront',
      command: '/ak:page-builder setup ./apps/storefront',
      commandVi: '/ak:page-builder setup ./apps/storefront',
      whenEn: 'Use when the project needs a reusable composition system on its existing stack.',
      whenVi: 'Dùng khi project cần hệ thống ghép trang tái sử dụng trên stack sẵn có.',
      expectedEn: 'Discovers the host, implements registry and page operations, verifies a real block, exposes requested interfaces, and creates the project operator skill.',
      expectedVi: 'Khám phá host, làm registry và thao tác trang, xác minh một block thật, mở giao diện được yêu cầu, rồi tạo skill operator của project.',
      recommended: true,
    },
    {
      labelEn: 'Add an existing block',
      labelVi: 'Thêm block sẵn có',
      command: '/ak:page-builder update Add the existing ProductGrid block with category bindings',
      commandVi: '/ak:page-builder update Thêm block ProductGrid sẵn có kèm binding danh mục',
      whenEn: 'Use when extending a builder without rebuilding unrelated subsystems.',
      whenVi: 'Dùng khi mở rộng builder mà không dựng lại subsystem không liên quan.',
      expectedEn: 'Registers the existing ProductGrid with category bindings, updates affected contracts, and refreshes operator-skill guidance for the new block.',
      expectedVi: 'Đăng ký ProductGrid sẵn có kèm binding danh mục, cập nhật contract liên quan, và làm mới hướng dẫn skill operator cho block mới.',
    },
    {
      labelEn: 'Operate a pricing draft',
      labelVi: 'Vận hành bản nháp giá',
      command: '/ak:page-builder operate Create a pricing draft and share its preview',
      commandVi: '/ak:page-builder operate Tạo bản nháp trang giá và chia sẻ preview',
      whenEn: 'Use for routine page changes when the operator skill is missing or this skill must operate the builder.',
      whenVi: 'Dùng cho thay đổi trang thường ngày khi chưa có skill operator hoặc skill này phải tự vận hành builder.',
      expectedEn: 'Creates a saved pricing draft, shares an available preview, and does not claim live publication unless that step is verified.',
      expectedVi: 'Tạo bản nháp trang giá đã lưu, chia sẻ preview sẵn có, và không nhận đã publish live trừ khi bước đó đã được xác minh.',
    },
  ],
};

export default data;
