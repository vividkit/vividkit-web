import {
  getAgentKitCliFactsByChannel,
} from './agentkit/agentkit-cli-facts.ts';
import type { AgentKitCliReleaseChannel } from './agentkit/agentkit-source-contract.ts';

export type CliCommandCategory = 'setup' | 'management' | 'distribution' | 'workflow' | 'integration';
export type CliReleaseChannel = AgentKitCliReleaseChannel;

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
  keyFlags: string[];
  subcommands?: string[];
  example: string;
}

interface CliCommandPresentation {
  id: string;
  description: string;
  descriptionVi: string;
  category: CliCommandCategory;
  subcommands?: string[];
}

const CLI_COMMAND_PRESENTATION = [
  { id: 'new', description: 'Bootstrap a new AgentKit-managed project.', descriptionVi: 'Khởi tạo dự án mới do AgentKit quản lý.', category: 'setup' },
  { id: 'init', description: 'Initialize AgentKit in the current project.', descriptionVi: 'Khởi tạo AgentKit trong dự án hiện tại.', category: 'setup' },
  { id: 'setup', description: 'Run the guided first-time AgentKit setup.', descriptionVi: 'Chạy hướng dẫn thiết lập AgentKit lần đầu.', category: 'setup' },
  { id: 'login-email', description: 'Open a local CLI session with email OTP.', descriptionVi: 'Mở CLI session local bằng email OTP.', category: 'setup' },
  { id: 'doctor', description: 'Check the AgentKit installation, targets, and PATH collisions.', descriptionVi: 'Kiểm tra cài đặt AgentKit, target và xung đột PATH.', category: 'management' },
  { id: 'self-update', description: 'Check or update the AgentKit CLI binary.', descriptionVi: 'Kiểm tra hoặc cập nhật AgentKit CLI binary.', category: 'management' },
  { id: 'update', description: 'Preview or apply updates to AgentKit-owned project files.', descriptionVi: 'Xem trước hoặc áp dụng cập nhật cho file dự án do AgentKit quản lý.', category: 'management' },
  { id: 'config', description: 'Open the local AgentKit configuration dashboard.', descriptionVi: 'Mở dashboard cấu hình AgentKit local.', category: 'management' },
  { id: 'versions', description: 'List local AgentKit, kit, and skill versions.', descriptionVi: 'Liệt kê phiên bản AgentKit, kit và skill local.', category: 'management' },
  { id: 'uninstall', description: 'Preview removal of AgentKit-owned project files.', descriptionVi: 'Xem trước việc gỡ file dự án do AgentKit quản lý.', category: 'management' },
  { id: 'kit-init', description: 'Initialize an AgentKit kit for an explicit target.', descriptionVi: 'Khởi tạo AgentKit kit cho target được chỉ định.', category: 'distribution', subcommands: ['init'] },
  { id: 'skills', description: 'Browse installed kit skills.', descriptionVi: 'Duyệt các skill từ kit đã cài.', category: 'distribution' },
  { id: 'agents', description: 'Inspect installed AgentKit agents.', descriptionVi: 'Kiểm tra AgentKit agents đã cài.', category: 'distribution' },
  { id: 'migrate', description: 'Preview CK-to-AK migration; important-data apply remains support-assisted.', descriptionVi: 'Preview migration CK sang AK; apply dữ liệu quan trọng vẫn cần support.', category: 'workflow' },
  { id: 'audit', description: 'Inspect installed kits for drift.', descriptionVi: 'Kiểm tra drift trong các kit đã cài.', category: 'workflow' },
  { id: 'gui', description: 'Open the AgentKit desktop interface.', descriptionVi: 'Mở giao diện desktop AgentKit.', category: 'integration' },
  { id: 'whoami', description: 'Show the current CLI account.', descriptionVi: 'Hiển thị tài khoản CLI hiện tại.', category: 'integration' },
  { id: 'licenses', description: 'Show available AgentKit entitlements.', descriptionVi: 'Hiển thị các entitlement AgentKit hiện có.', category: 'integration' },
] as const satisfies readonly CliCommandPresentation[];

export function getCliCommandsCheatsheet(channel: CliReleaseChannel): CliCommand[] {
  const facts = new Map(getAgentKitCliFactsByChannel(channel).map((fact) => [fact.id, fact]));
  return CLI_COMMAND_PRESENTATION.flatMap((presentation) => {
    const fact = facts.get(presentation.id);
    if (!fact) return [];
    return [{
      ...presentation,
      name: fact.command,
      channel: fact.channel,
      sourceUrl: fact.sourceUrl,
      verifiedAt: fact.verifiedAt,
      mutatesDisk: fact.mutatesDisk,
      previewDefault: fact.previewDefault,
      keyFlags: [...fact.flags],
      example: fact.command,
    }];
  });
}

export const cliCommandsCheatsheet = getCliCommandsCheatsheet('stable');
