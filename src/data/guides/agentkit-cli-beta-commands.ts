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
];
