export type CliCommandCategory = 'setup' | 'management' | 'distribution' | 'workflow' | 'integration';
export type CliReleaseChannel = 'stable' | 'beta';

export interface CliCommand {
  id: string;
  name: string;
  description: string;
  descriptionVi: string;
  category: CliCommandCategory;
  channel: CliReleaseChannel;
  sourceUrl: string;
  verifiedAt: string;
  mutatesDisk: boolean;
  previewDefault?: boolean;
  keyFlags?: string[];
  subcommands?: string[];
  example?: string;
}

const SOURCE_URL = 'https://agentkit.best/docs';
const VERIFIED_AT = '2026-07-12';

export const cliCommandsCheatsheet: CliCommand[] = [
  {
    id: 'new',
    name: 'ak new',
    description: 'Bootstrap a new AgentKit-managed project.',
    descriptionVi: 'Khởi tạo dự án mới do AgentKit quản lý.',
    category: 'setup', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    example: 'ak new',
  },
  {
    id: 'init',
    name: 'ak init',
    description: 'Initialize AgentKit in the current project.',
    descriptionVi: 'Khởi tạo AgentKit trong dự án hiện tại.',
    category: 'setup', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    example: 'ak init',
  },
  {
    id: 'setup',
    name: 'ak setup',
    description: 'Run the guided first-time AgentKit setup.',
    descriptionVi: 'Chạy hướng dẫn thiết lập AgentKit lần đầu.',
    category: 'setup', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    example: 'ak setup',
  },
  {
    id: 'login',
    name: 'ak login',
    description: 'Authenticate by license key, email OTP, or user API key.',
    descriptionVi: 'Đăng nhập bằng license key, email OTP hoặc user API key.',
    category: 'setup', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    keyFlags: ['--license-key <key>', '--email <email>', '--api-key <key>', '--no-interactive'],
    example: 'ak login --email you@example.com',
  },
  {
    id: 'doctor',
    name: 'ak doctor',
    description: 'Check the AgentKit installation, targets, and PATH collisions.',
    descriptionVi: 'Kiểm tra cài đặt AgentKit, target và xung đột PATH.',
    category: 'management', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    keyFlags: ['--check <name>', '--json'],
    example: 'ak doctor',
  },
  {
    id: 'self-update',
    name: 'ak self-update',
    description: 'Update the signed AgentKit CLI binary.',
    descriptionVi: 'Cập nhật binary AgentKit CLI đã ký.',
    category: 'management', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    keyFlags: ['--check', '--dry-run', '--channel <stable|beta|dev>', '--yes'],
    example: 'ak self-update --check',
  },
  {
    id: 'update',
    name: 'ak update',
    description: 'Preview or apply updates to AgentKit-owned project files.',
    descriptionVi: 'Xem trước hoặc áp dụng cập nhật cho file dự án do AgentKit quản lý.',
    category: 'management', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true, previewDefault: true,
    keyFlags: ['--dry-run', '--show-diff', '--force', '--yes'],
    example: 'ak update --dry-run',
  },
  {
    id: 'config',
    name: 'ak config',
    description: 'Open the local AgentKit configuration dashboard.',
    descriptionVi: 'Mở dashboard cấu hình AgentKit local.',
    category: 'management', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak config',
  },
  {
    id: 'versions',
    name: 'ak versions',
    description: 'List local AgentKit, kit, and skill versions.',
    descriptionVi: 'Liệt kê phiên bản AgentKit, kit và skill local.',
    category: 'management', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak versions',
  },
  {
    id: 'uninstall',
    name: 'ak uninstall',
    description: 'Preview removal of AgentKit-owned project files.',
    descriptionVi: 'Xem trước việc gỡ file dự án do AgentKit quản lý.',
    category: 'management', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true, previewDefault: true,
    keyFlags: ['--dry-run', '--yes'],
    example: 'ak uninstall --dry-run',
  },
  {
    id: 'kit',
    name: 'ak kit',
    description: 'Install, inspect, refresh, validate, or remove AgentKit kits.',
    descriptionVi: 'Cài, kiểm tra, refresh, validate hoặc gỡ AgentKit kit.',
    category: 'distribution', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    subcommands: ['init', 'install', 'list-kits', 'refresh', 'validate', 'uninstall'],
    keyFlags: ['--target <claude-code|codex>', '--global', '--skills <ids>', '--exclude-skills <ids>', '--dry-run'],
    example: 'ak kit init engineer --target claude-code --global',
  },
  {
    id: 'skills',
    name: 'ak skills',
    description: 'Browse and manage installed kit skills.',
    descriptionVi: 'Duyệt và quản lý các skill đã cài từ kit.',
    category: 'distribution', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak skills',
  },
  {
    id: 'agents',
    name: 'ak agents',
    description: 'Inspect and manage AgentKit agents.',
    descriptionVi: 'Kiểm tra và quản lý AgentKit agents.',
    category: 'distribution', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak agents',
  },
  {
    id: 'plan',
    name: 'ak plan',
    description: 'Create and track implementation plan directories and phases.',
    descriptionVi: 'Tạo và theo dõi thư mục plan cùng các phase triển khai.',
    category: 'workflow', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: true,
    subcommands: ['create', 'add-phase', 'status', 'check', 'uncheck'],
    example: 'ak plan status ./plans/my-plan',
  },
  {
    id: 'audit',
    name: 'ak audit',
    description: 'Inspect installed kits for drift.',
    descriptionVi: 'Kiểm tra drift trong các kit đã cài.',
    category: 'workflow', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak audit',
  },
  {
    id: 'gui',
    name: 'ak gui',
    description: 'Open the AgentKit desktop interface.',
    descriptionVi: 'Mở giao diện desktop AgentKit.',
    category: 'integration', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak gui',
  },
  {
    id: 'whoami',
    name: 'ak whoami',
    description: 'Show the current account and licensed kits.',
    descriptionVi: 'Hiển thị tài khoản hiện tại và các kit đã cấp phép.',
    category: 'integration', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak whoami',
  },
  {
    id: 'licenses',
    name: 'ak licenses',
    description: 'Show available AgentKit entitlements.',
    descriptionVi: 'Hiển thị các entitlement AgentKit hiện có.',
    category: 'integration', channel: 'stable', sourceUrl: SOURCE_URL, verifiedAt: VERIFIED_AT, mutatesDisk: false,
    example: 'ak licenses',
  },
];
