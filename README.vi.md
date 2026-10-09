# VividKit

> **Trạng thái:** đang phát triển. Bản beta của ứng dụng desktop VividKit dự kiến ra mắt **tháng 10/2026**; hiện chưa phát hành và chưa có bản tải. [Đăng ký chờ](https://vividkit.dev/vi/#waitlist) để nhận email khi ra mắt.

> 🇬🇧 English: see [README.md](./README.md)

Repo này là mã nguồn của **[vividkit.dev](https://vividkit.dev/vi/)**: landing page giới thiệu ứng dụng desktop VividKit, cùng bộ hướng dẫn riêng, đọc miễn phí, cho người dùng AgentKit và ClaudeKit.

## 🖥️ Ứng dụng desktop VividKit

VividKit là ứng dụng desktop cho builders muốn làm ứng dụng bằng agent lập trình AI mà không phải sống trong terminal. Bạn nói điều mình muốn; một đội đồng đội AI làm việc trên bản sao riêng của dự án, VividKit thu bằng chứng cho từng tiêu chí, và việc chỉ xong khi bạn chấp nhận.

**Một thay đổi đi qua những bước nào**

1. **Kể cho Cora** điều bạn muốn bằng lời thường. Cora phân loại và tạo issue.
2. **Xác nhận Requirement.** Ada hỏi điều chưa rõ và biến nó thành tiêu chí kiểm được.
3. **Đội bắt tay làm** theo kiểu tiếp sức, trên bản sao riêng của dự án. Xem hoặc Dừng lúc nào cũng được.
4. **Duyệt bằng chứng:** ảnh chụp cỡ điện thoại và máy tính, kết quả kiểm theo từng tiêu chí. Chấp nhận hoặc gửi lại.
5. **Áp dụng và xuất bản** qua một cửa sổ xác nhận riêng. Vẫn hoàn tác và đổi về bản trước được.

**Tiến độ hiện tại**

| | |
|---|---|
| Đã chạy được trên bản dựng phát triển | Trọn vòng cho ứng dụng web, gồm Xuất bản qua Cloudflare Pages. Quy trình: Sửa lỗi, Sửa nhanh, Tính năng mới, Dự án mới, Nhận dự án có sẵn, Tái cấu trúc. Chín CLI agent lập trình đã chạy trên issue thật. Bản dựng thử chạy trên Linux, Mac Apple silicon và Windows 11. |
| Dự kiến cho bản beta (tháng 10/2026) | Bản công khai đầu tiên `0.1.0-beta.1`: Linux (`.deb`, AppImage), macOS Apple silicon và Windows x64, chưa ký số. Email báo cho danh sách chờ khi sẵn sàng. |
| Sau bản beta | Quy trình Điều tra và Cải thiện, thêm bộ kỹ năng khác (để không bắt buộc AgentKit), xuất bản ứng dụng không phải website. |

Mốc thời gian là kế hoạch, không phải cam kết.

**Nền tảng**

- **Claude Code** làm việc chính: mỗi đồng đội chạy như một phiên Claude Code trên máy bạn, đăng nhập bằng gói Pro hoặc Max của chính bạn. Bắt buộc cho bản beta.
- **AgentKit** (giấy phép Engineer Kit) cung cấp bộ kỹ năng cho các giai đoạn như lập kế hoạch, kiểm thử và soát mã. AgentKit là sản phẩm riêng của một nhóm khác.
- **Runtime khác** (Codex, OpenCode, GitHub Copilot CLI, Cursor Agent, Grok, Oh My Pi, Pi, Antigravity) có thể chạy từng đồng đội.

VividKit không tự gọi Claude API và không bán lại quyền dùng mô hình. VividKit là dự án độc lập, không liên kết, không được Anthropic, AgentKit hay ClaudeKit tài trợ hay xác nhận. Claude và Claude Code là thương hiệu của Anthropic.

**Ai đang xây VividKit**

- **Thieu Nguyen**, Founder — [GitHub](https://github.com/thieung)
- Liên hệ: [hello@vividkit.dev](mailto:hello@vividkit.dev) · [github.com/vividkit](https://github.com/vividkit)

---

## 📚 Hướng dẫn (tài nguyên riêng)

Hướng dẫn và best practices đọc miễn phí cho người dùng AgentKit và cộng đồng vibe coding, bằng tiếng Việt và tiếng Anh. Các bài này không thuộc app, và đọc chúng không đồng nghĩa với được dùng app.

| Hướng dẫn | Mô tả |
|-------|-------|
| [Trang hướng dẫn](https://vividkit.dev/vi/guides) | Tất cả hướng dẫn |
| [AgentKit](https://vividkit.dev/vi/guides/agentkit) | Bắt đầu, khối xây dựng, cấu hình, chuyển từ ClaudeKit |
| [Commands](https://vividkit.dev/vi/guides/commands) | Tham khảo lệnh và skill |
| [Workflows](https://vividkit.dev/vi/guides/workflows) | Best practices và patterns |
| [CCS](https://vividkit.dev/vi/guides/ccs) | Claude Code Switcher cho multi-model delegation |
| [UI/UX](https://vividkit.dev/vi/guides/uiux) | Skills design và styling |
| [Session recovery](https://vividkit.dev/vi/guides/session-recovery) | Khôi phục và tiếp tục session |
| [Permissions](https://vividkit.dev/vi/guides/permissions) | Permission modes (auto, bypass, granular rules) |
| [Fix Logs](https://vividkit.dev/vi/guides/fix-logs) | Chiến lược debug |

Một số hướng dẫn có link AgentKit kèm mã giới thiệu.

---

## 🛠️ Tech Stack (Website này)

- **Framework**: Astro 6 với Static Site Generation (SSG)
- **Styling**: Tailwind CSS v4; landing page dùng design token của app VividKit (`src/styles/vk-tokens.css`)
- **Type Safety**: TypeScript strict mode + path aliasing
- **Interactivity**: React island trên landing page (run console, bot của đội); Alpine.js cho các trang hướng dẫn
- **i18n**: Astro i18n built-in, English (mặc định) + Vietnamese
- **Waitlist**: Web3Forms (`PUBLIC_WEB3FORMS_KEY`)
- **Deployment**: Vercel (kèm analytics)
- **Performance**: Sharp cho image optimization, LightningCSS cho CSS minify

Nội dung landing page nằm ở `src/data/landing-content.ts` (EN + VI). Thông tin sản phẩm ở đó phải khớp tài liệu của app VividKit; không thêm tuyên bố khi chưa có bằng chứng.

## 🤖 VividKit Maintainer Skills & Commands (`/vk:*`)

Skills riêng cho repo này, dùng để giữ guides đồng bộ với upstream ClaudeKit. Gọi qua Claude Code bằng prefix `/vk:`.

| Skill | Khi dùng | Lệnh ví dụ |
|-------|----------|-----------|
| `/vk:changelog-sync` | Phát hiện ClaudeKit changelog mới và đồng bộ Commands/Hooks/Workflows guides + i18n | `/vk:changelog-sync` |
| `/vk:audit-ck-cli` | So sánh `claudekit-cli` upstream với CLI/Migrate guide; đề xuất update theo command (`ck migrate`, `ck init`, …) | `/vk:audit-ck-cli` hoặc `/vk:audit-ck-cli page=guides/migrate command=migrate` |
| `/vk:audit-skill` | Audit thay đổi skill upstream ClaudeKit (so với catalog skill đang render trên site) | `/vk:audit-skill <skill-name>` |
| `/vk:add-scenario` | Thêm scenario mới cho một ClaudeKit command vào guides | `/vk:add-scenario` |
| `/project:vk:update-how-ck-works` | Lệnh riêng của project: điều phối `/vk:audit-skill` + `/vk:add-scenario` để cập nhật các trang How-CK-Works (giải thích chi tiết, quick ref dạng hình, dữ liệu pipeline, ví dụ prompt); thêm `--include-local-missing` để phủ cả skill CK chưa có trên guide | `/project:vk:update-how-ck-works --include-local-missing --limit 3` |

### Cách dùng nhanh

1. **Quick check** — không fetch, chỉ so sánh marker hiện tại:
   ```
   /vk:audit-ck-cli
   ```
2. **Detailed report** — diff phân loại + impact map + đề xuất update:
   ```
   /vk:audit-ck-cli report
   ```
3. **Full sync** — fetch mới nhất, sinh report, update marker:
   ```
   /vk:audit-ck-cli sync
   ```
4. **Target page/command cụ thể** — truyền args dạng `page=<guide-slug> command=<ck-command>`:
   ```
   /vk:audit-ck-cli page=guides/migrate command=migrate
   ```

### Quy ước

- **Reference repos** clone tại `reference/` (claudekit, claudekit-cli) — không commit; là source of truth khi audit.
- **Marker files** (`reference/.last-sync*`) ghi commit SHA của lần sync gần nhất.
- **Reports** xuất ra `reference/changelog-reports/` (skill tự tạo).
- **Skill được track** nằm ở `skills/` (và `commands/vk/`); runtime đọc chúng qua symlink. Sau khi clone mới, tạo link một lần cho mỗi skill, ví dụ `ln -sfn ../../skills/vk-changelog-sync .claude/skills/vk-changelog-sync` và `ln -sfn ../../../commands/vk/update-how-ck-works.md .claude/commands/vk/update-how-ck-works.md`.
- Skill chỉ **đề xuất** thay đổi — luôn review trước khi apply vào `src/components/guides/*` hoặc `src/data/guides/*`.

Chi tiết từng skill xem `skills/vk-*/SKILL.md` (`vk-audit-ck-cli` và `vk-audit-ck-hooks` vẫn nằm ở `.claude/skills/`).

---

## 🧞 Lệnh Development

| Lệnh | Tác dụng |
|------|----------|
| `pnpm install` | Cài đặt dependencies |
| `pnpm run dev` | Chạy local dev server tại `localhost:4321` |
| `pnpm run build` | Build production site sang `./dist/` |
| `pnpm run preview` | Preview build local |

## 📁 Cấu trúc dự án

```
vividkit-web/
├── src/                    # Source code
│   ├── components/         # Astro components (UI, sections, layouts, guides)
│   ├── layouts/           # Page layouts (MainLayout, GuidesLayout)
│   ├── pages/             # File-based routing (English + Vietnamese)
│   ├── data/              # Content data (guides, features, navigation)
│   ├── i18n/              # Translation utilities (en, vi)
│   ├── scripts/           # JavaScript utilities
│   ├── styles/            # Global styles + design system
│   └── types/             # TypeScript type definitions
├── docs/                  # Documentation files
├── public/                # Static assets
└── dist/                  # Build output
```

## 🔗 Liên kết

- [vividkit.dev](https://vividkit.dev/vi/) - Landing page và danh sách chờ beta
- [Hướng dẫn](https://vividkit.dev/vi/guides) - Hướng dẫn AgentKit và ClaudeKit
- [Tài liệu AgentKit](https://docs.agentkit.best/en/stable) - Bộ kỹ năng app sử dụng
- [Claude Code](https://claude.ai/code) - Agent lập trình của Anthropic, bắt buộc cho bản beta
- Liên hệ: [hello@vividkit.dev](mailto:hello@vividkit.dev)
