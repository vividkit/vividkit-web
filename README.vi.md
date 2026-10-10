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

## 🤖 Skill bảo trì VividKit (`/vk:*`)

Các skill riêng của repo, dùng để đối chiếu guide VividKit với nguồn upstream. Gọi trong Claude Code bằng tiền tố `/vk:` (Codex: `$vk:`).

| Skill | Khi nào dùng | Ví dụ |
|-------|--------------|-------|
| `/vk:audit-ak-guides` | Audit mọi trang `/guides/agentkit` (EN + VI) so với ak-cli và ak-docs sau khi AgentKit cập nhật. Báo lỗi khi còn trang chưa có owner hoặc check của owner đang đỏ | `/vk:audit-ak-guides --check` |
| `/vk:audit-ak-skills` | Báo cáo hoặc sửa lệch giữa cheatsheet skill AgentKit và các trang chi tiết skill | `/vk:audit-ak-skills --report --kit all` |
| `/vk:audit-ak-workflows` | Kiểm tra các skill AgentKit dùng trong thẻ workflow so với pin đã duyệt | `/vk:audit-ak-workflows --report` |
| `vk:audit-ak-pages` | Module nội bộ: các trang AgentKit còn lại, và CLI cheatsheet so với cây lệnh cobra của ak | chạy qua `/vk:audit-ak-guides` |
| `/vk:audit-ccs` | So sánh upstream `kaitranntt/ccs` với CCS guide | `/vk:audit-ccs --check` |

Guide ClaudeKit đã đóng băng: vẫn hiển thị trên site nhưng không còn đồng bộ với upstream, và các skill đồng bộ ClaudeKit đã bị gỡ.

### Quy ước

- **Skill được track** nằm ở `skills/`; runtime đọc qua symlink. Sau khi clone mới, tạo link một lần cho mỗi skill (xem `README.md` trong từng skill), ví dụ `ln -sfn ../../skills/vk-audit-ak-guides .claude/skills/vk-audit-ak-guides`.
- **Nguồn upstream**: audit AgentKit đọc các git checkout ak-cli / ak-docs trên máy (`--kit-root`, `--ak-docs`; nhớ `git fetch` trước). Audit CCS clone vào `reference/ccs/` (không commit).
- **Trạng thái đã duyệt** cần giữ khi clone mới được commit trong `reference/ak-docs-skills-meta/` và `reference/ak-workflow-skill-*`. Marker đồng bộ và report trong `reference/` chỉ nằm trên máy.
- Skill chỉ **đề xuất** thay đổi, hoặc ghi lock sau khi đã duyệt — luôn review trước khi áp vào `src/components/guides/*` hay `src/data/guides/*`.

Chi tiết từng skill xem `skills/vk-*/SKILL.md`.

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
