// Commands registered only on the beta CLI (origin/dev). check-ak-guide-pages validates these names
// against the beta command tree and fails once a command reaches stable, so it moves to the main cheatsheet.
import type { AkCliCommand } from './agentkit-cli-cheatsheet';

export const akCliBetaCommands: AkCliCommand[] = [
  {
    name: "ak describe",
    description: "Print the contract of any ak command for agents and scripts: summary, examples, flags, subcommands, declared exit codes, and whether it changes files, needs the network or asks for confirmation. Read-only and offline; values a command has not declared read \"unspecified\".",
    descriptionVi: "In ra contract của bất kỳ lệnh ak nào cho agent và script: tóm tắt, ví dụ, flag, lệnh con, mã thoát đã khai báo, và lệnh đó có sửa file, cần mạng hay hỏi xác nhận không. Chỉ đọc và chạy offline; giá trị nào lệnh chưa khai báo sẽ hiện \"unspecified\".",
    category: 'inspect',
    keyFlags: ["--json"],
    example: "ak describe kit install --json",
  },
  {
    name: "ak license",
    description: "See and manage the devices activated on your AgentKit App license key. Needs a session from ak login --license-key; an API-key or email login does not work here. To check which kits you can install, use ak licenses.",
    descriptionVi: "Xem và quản lý các thiết bị đã kích hoạt bằng license key AgentKit App. Cần phiên đăng nhập từ ak login --license-key; đăng nhập bằng API key hay email không dùng được ở đây. Muốn xem bạn được cài kit nào thì dùng ak licenses.",
    category: 'account',
    subcommands: ["devices"],
    example: "ak license devices",
  },
];
