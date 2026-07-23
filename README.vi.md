# VividKit — Visual Guides cho AgentKit

> AgentKit (`ak`) là phiên bản kế nhiệm ClaudeKit (`ck`). Bắt đầu với [AgentKit là gì?](https://vividkit.dev/vi/guides/what-is-agentkit), cài qua [Hướng dẫn CLI](https://vividkit.dev/vi/guides/cli), rồi dùng [guide migrate CK → AK](https://vividkit.dev/vi/guides/agentkit) khi cần.

VividKit là hub hướng dẫn trực quan song ngữ Anh/Việt cho AgentKit, Claude Code, Codex và các workflow liên quan. Sản phẩm web hiện tại giúp người đọc cài AgentKit theo các scenario thường gặp, theo cutover ClaudeKit an toàn (support-safe), dùng đúng syntax theo target và truy cập lịch sử ClaudeKit đã được cô lập.

VividKit Desktop App là sản phẩm riêng đang được lên kế hoạch. Đây không phải AgentKit Desktop App được tài liệu hóa tại agentkit.best.

> 🇬🇧 English: [README.md](./README.md)

## Phạm vi sản phẩm hiện tại

- Trang sản phẩm và guide song ngữ: English ở root path, Tiếng Việt dưới `/vi`.
- Primer sản phẩm, cài CLI + workaround, và guide migrate CK → AK chỉ tập trung cutover.
- Lifecycle guidance trực tiếp cho clean cutover, closed-beta coexistence, recovery và trường hợp cần support-assisted.
- Lifecycle CK → AK gồm bảy giai đoạn: backup → dọn ownership CK → xác nhận scope sạch → cài AK → verify canary → observation → review gỡ CK control plane.
- Guide cho AgentKit CLI, CLI Commands, workflows, targets, coexistence, permissions, recovery và troubleshooting.
- Ví dụ Claude Code `/ak:*` và Codex `$ak:*` đúng theo target.
- Archive ClaudeKit noindex được cô lập để tra cứu lịch sử, không đưa vào sitemap hoặc LLM exports.

## Chính sách release và an toàn

- AgentKit stable `2.4.0` là fact set public mặc định. Public beta đang active: `2.5.0-beta.1` (opt-in qua `?channel=beta` / `AK_CHANNEL=beta`). `2.4.0-beta.7` vẫn là provenance promote vào stable 2.4.0.
- Observation 2026-07-20 không có active beta mới hơn stable. Query chính xác `?channel=beta` sẽ về stable kèm thông báo availability; channel sai, lặp hoặc ra ngoài nhóm cũng về stable.
- Beta query được publish trong tương lai là nội dung public early access, không phải đăng ký closed-beta hoặc quyền thực thi. Query state không thể mở payload bị hold hoặc cho phép lifecycle action.
- `/llms.txt` và `/llms-full.txt` chỉ xuất stable.
- Route manifest giữ 134 identity không phụ thuộc query; query parameter không tạo route hoặc canonical identity mới.
- `ak migrate` đã stable, nhưng VividKit hướng dẫn theo preview/smoke-first và không cung cấp apply action mặc định.
- Ownership mixed/custom, metadata corrupt/missing, package ownership không rõ hoặc dữ liệu critical phải chuyển sang support-assisted.
- Topology coexistence pilot duy nhất là CK global cùng AK project-local trong một project sạch, không critical.
- Giữ authoritative observation record 3–7 ngày bên ngoài VividKit. Static site không thu thập hoặc verify evidence đó, enforce thời gian hoặc authorize removal.
- Gỡ CK theo detector-first. Ownership không rõ nghĩa là không có uninstall command.

Trước khi gửi output cho support, hãy bỏ username và home path, repository remote, credential, account identifier, tên/nội dung file proprietary và raw backup manifest. Chỉ gửi version, detector classification, command category và lỗi đã redact ở mức tối thiểu cần để tái hiện.

Hỗ trợ:

- [ClaudeKit Discord](https://discord.com/invite/x7SwTSf3wc)
- [AgentKit Support](https://github.com/bestagentkits/agentkit-support)

## Guides

| Guide | Mục đích |
|---|---|
| [AgentKit là gì?](https://vividkit.dev/vi/guides/what-is-agentkit) | Mô hình successor AgentKit, ranh giới Desktop App, kits và entitlements |
| [Hướng dẫn AgentKit CLI](https://vividkit.dev/vi/guides/cli) | Cài `ak`, auth, kits, workaround cài đặt và lifecycle updates |
| [Migrate CK → AK](https://vividkit.dev/vi/guides/agentkit) | Cutover 7 giai đoạn, command mapping, và cleanup CK theo detector-first |
| [Scenario command guide](./docs/agentkit-scenario-command-guide.md) | Safe recipe được curate theo user intent; full flags nằm trong AgentKit Official Docs |
| [CLI Guide](https://vividkit.dev/vi/guides/cli) | Setup và lifecycle AgentKit stable |
| [CLI Commands](https://vividkit.dev/vi/guides/cli-commands) | Command facts chuẩn và safety metadata |
| [Commands](https://vividkit.dev/vi/guides/commands) | Catalog skill Engineer và Marketing |
| [Workflows](https://vividkit.dev/vi/guides/workflows) | AgentKit workflow patterns |
| [AgentKit × Codex](https://vividkit.dev/vi/guides/ck-with-codex) | Cài cho Codex và invoke bằng `$ak:*` |
| [Coexistence](https://vividkit.dev/vi/guides/coexistence) | Closed-beta scope boundary và recovery policy |
| [Session Recovery](https://vividkit.dev/vi/guides/session-recovery) | Tiếp tục và khôi phục session |

## Công nghệ

- Astro `7.1.0` với static output
- TypeScript `5.9.3` ở strict mode
- Tailwind CSS `4.3.3` và LightningCSS
- Alpine.js `3.15.2` cùng các local controller nhỏ
- Vercel adapter `11.0.3` và Web Analytics
- Astro i18n với English mặc định và route Tiếng Việt `/vi`

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Verification tập trung:

```bash
npm run verify:agentkit
npm run check:agentkit-content
npm run check:legacy-archive
```

`npm run build` chạy AgentKit verification suite trước Astro và kiểm tra generated output sau build.

## Cấu trúc dự án

```text
vividkit-web/
├── src/
│   ├── components/          # Astro UI dùng chung và guide sections
│   ├── data/                # Guide, channel, route và provenance facts có type
│   ├── i18n/                # Copy English và Tiếng Việt
│   ├── legacy-ck/           # Historical ClaudeKit source snapshot đã cô lập
│   ├── pages/               # Static routes
│   ├── scripts/             # Browser-side controllers
│   └── styles/              # Tailwind và archive styles
├── scripts/                 # Build, audit, release, LLM và archive checks
├── tests/                   # Contract và regression tests
├── docs/                    # Project docs và source records
└── public/                  # Static assets
```

Xem [project overview](./docs/project-overview-pdr.md), [codebase summary](./docs/codebase-summary.md) và [migration validation](./docs/agentkit-migration-validation.md).

## Liên kết

- [VividKit](https://vividkit.dev)
- [Tài liệu AgentKit](https://agentkit.best/docs)
- [AgentKit changelog](https://agentkit.best/changelog)
- [Claude Code](https://claude.ai/code)

---

*VividKit — giúp agentic development dễ quan sát và vận hành an toàn hơn.*
