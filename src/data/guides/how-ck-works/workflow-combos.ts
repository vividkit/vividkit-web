// Workflow combo definitions for the how-ck-works guide
// Groups multiple scenarios into common workflow patterns

import type { WorkflowCombo } from './workflow-visualizer-types';

export const workflowCombos: WorkflowCombo[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // Engineer Kit Combos
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'build-feature',
    kit: 'engineer',
    titleEn: 'Build a New Feature',
    titleVi: 'Xây Dựng Tính Năng Mới',
    descEn: 'Full cycle: explore ideas → plan → implement → test → review',
    descVi: 'Quy trình đầy đủ: khám phá ý tưởng → lập kế hoạch → triển khai → test → review',
    scenarios: ['brainstorm', 'plan', 'cook', 'test', 'code-review'],
    category: 'sequential',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    accentColor: 'purple',
    tipEn: 'Run /clear between /ck:plan and /ck:cook to free context',
    tipVi: 'Chạy /clear giữa /ck:plan và /ck:cook để giải phóng context',
  },

  {
    id: 'fix-bug',
    kit: 'engineer',
    titleEn: 'Fix a Bug',
    titleVi: 'Sửa Lỗi',
    descEn: 'Structured 6-step pipeline: Scout → Diagnose → Assess → Fix → Verify → Prevent',
    descVi: 'Quy trình 6 bước: Khảo sát → Chẩn đoán → Đánh giá → Sửa → Xác minh → Phòng ngừa',
    scenarios: ['fix'],
    category: 'sequential',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    accentColor: 'red',
    tipEn: 'Use --hard flag for complex bugs requiring deep analysis',
    tipVi: 'Dùng flag --hard cho bugs phức tạp cần phân tích sâu',
  },

  {
    id: 'ship-production',
    kit: 'engineer',
    titleEn: 'Ship to Production',
    titleVi: 'Ship lên Production',
    descEn: 'Pre-flight security audit → ship pipeline → deploy',
    descVi: 'Kiểm tra bảo mật → ship pipeline → deploy',
    scenarios: ['security', 'ship', 'deploy'],
    category: 'sequential',
    icon: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    accentColor: 'green',
    tipEn: 'Security audit catches vulnerabilities before they reach production',
    tipVi: 'Kiểm tra bảo mật phát hiện lỗ hổng trước khi lên production',
  },

  {
    id: 'code-quality',
    kit: 'engineer',
    titleEn: 'Code Quality Check',
    titleVi: 'Kiểm Tra Chất Lượng Code',
    descEn: 'Comprehensive review + automated testing',
    descVi: 'Review toàn diện + testing tự động',
    scenarios: ['code-review', 'test'],
    category: 'sequential',
    icon: '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
    accentColor: 'blue',
    tipEn: 'Run before creating PR to catch issues early',
    tipVi: 'Chạy trước khi tạo PR để phát hiện vấn đề sớm',
  },

  {
    id: 'project-setup',
    kit: 'engineer',
    titleEn: 'Start New Project',
    titleVi: 'Khởi Tạo Dự Án Mới',
    descEn: 'Bootstrap → brainstorm architecture → create implementation plan',
    descVi: 'Khởi tạo → brainstorm kiến trúc → tạo kế hoạch triển khai',
    scenarios: ['bootstrap', 'brainstorm', 'plan'],
    category: 'sequential',
    icon: '<path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>',
    accentColor: 'cyan',
    tipEn: 'Bootstrap handles tech stack, configs, and initial structure',
    tipVi: 'Bootstrap xử lý tech stack, configs, và cấu trúc ban đầu',
  },

  {
    id: 'frontend-flow',
    kit: 'engineer',
    titleEn: 'Build UI Feature',
    titleVi: 'Xây Dựng UI Feature',
    descEn: 'Design-first approach: brainstorm → plan → design → implement',
    descVi: 'Tiếp cận design-first: brainstorm → plan → design → implement',
    scenarios: ['brainstorm', 'plan', 'frontend-design', 'cook'],
    category: 'sequential',
    icon: '<path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>',
    accentColor: 'pink',
    tipEn: 'Frontend-design generates mockups and component specs',
    tipVi: 'Frontend-design tạo mockups và specs cho components',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // Marketing Kit Combos
  // ─────────────────────────────────────────────────────────────────────────────

  {
    id: 'content-campaign',
    kit: 'marketer',
    titleEn: 'Launch Content Campaign',
    titleVi: 'Triển Khai Chiến Dịch Nội Dung',
    descEn: 'Define persona → plan campaign → create content → design assets',
    descVi: 'Định nghĩa persona → lập kế hoạch → tạo nội dung → thiết kế assets',
    scenarios: ['persona', 'campaign', 'write', 'design'],
    category: 'sequential',
    icon: '<path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2"/>',
    accentColor: 'orange',
    tipEn: 'Persona mapping ensures content resonates with target audience',
    tipVi: 'Persona mapping đảm bảo nội dung phù hợp với đối tượng mục tiêu',
  },

  {
    id: 'seo-optimization',
    kit: 'marketer',
    titleEn: 'SEO Optimization',
    titleVi: 'Tối Ưu SEO',
    descEn: 'Audit site → understand audience → create optimized content',
    descVi: 'Audit site → hiểu đối tượng → tạo nội dung tối ưu',
    scenarios: ['seo', 'persona', 'write'],
    category: 'sequential',
    icon: '<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
    accentColor: 'emerald',
    tipEn: 'SEO audit identifies technical issues and content gaps',
    tipVi: 'SEO audit phát hiện vấn đề kỹ thuật và thiếu sót nội dung',
  },

  {
    id: 'social-strategy',
    kit: 'marketer',
    titleEn: 'Social Media Strategy',
    titleVi: 'Chiến Lược Social Media',
    descEn: 'Plan social content → design graphics → produce video',
    descVi: 'Lên kế hoạch nội dung → thiết kế đồ họa → sản xuất video',
    scenarios: ['social', 'design', 'video'],
    category: 'sequential',
    icon: '<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>',
    accentColor: 'violet',
    tipEn: 'Consistent visual identity across all social platforms',
    tipVi: 'Nhận diện hình ảnh nhất quán trên tất cả các nền tảng social',
  },

  {
    id: 'email-campaign',
    kit: 'marketer',
    titleEn: 'Email Campaign',
    titleVi: 'Chiến Dịch Email',
    descEn: 'Target persona → create email sequence → design templates',
    descVi: 'Xác định persona → tạo chuỗi email → thiết kế templates',
    scenarios: ['persona', 'email', 'design'],
    category: 'sequential',
    icon: '<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
    accentColor: 'sky',
    tipEn: 'Personalized emails have 6x higher transaction rates',
    tipVi: 'Email cá nhân hóa có tỷ lệ giao dịch cao gấp 6 lần',
  },
];
