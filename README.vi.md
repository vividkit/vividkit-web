# VividKit - Visual Guides cho AgentKit

> **AgentKit (`ak`) là phiên bản kế nhiệm ClaudeKit (`ck`).** Người dùng CK nên bắt đầu tại [migration guide từng bước](https://vividkit.dev/vi/guides/agentkit). Các route legacy vẫn được giữ để tương thích, trong khi nội dung render chuyển sang AgentKit.

> 🚧 **VividKit Desktop App sắp ra mắt!** Tham gia [danh sách early access](https://vividkit.dev) để được thông báo khi launch.

> 🇬🇧 English: see [README.md](./README.md)

VividKit biến các lệnh AI coding thành GUI trực quan, giúp ClaudeKit dễ tiếp cận với dev ở mọi cấp độ. Trong khi Desktop App đang phát triển, bạn có thể khám phá bộ guides của tụi mình về cách dùng ClaudeKit hiệu quả với Claude Code CLI.

## 🖥️ VividKit Desktop App (Sắp ra mắt)

**Lớp Visual Intelligence cho ClaudeKit CLI**

VividKit Desktop nâng cấp trải nghiệm ClaudeKit CLI với dashboard trực quan persistent và tương tác qua GUI.

### Tính năng chính (MVP)

#### 1. Catalog & Discovery trực quan
- Browse mọi agents, skills, commands qua giao diện trực quan
- Không phải đào sâu file markdown nữa
- Capability explorer có search + filter

#### 2. Dashboard trực quan persistent
- Live monitoring với graph và timeline
- Trực quan hóa token usage qua các run
- Metrics + xu hướng performance của agent
- Progress tracking giữ nguyên kể cả khi đóng terminal

#### 3. Run History & So sánh
- Archive toàn bộ agent execution trong quá khứ
- So sánh side-by-side giữa các run
- Nhận diện pattern qua nhiều session
- Trực quan hóa execution timeline

#### 4. Tương tác không cần nhớ syntax
- Khởi chạy agent qua GUI (không phải nhớ command)
- Cấu hình tham số trực quan
- Build workflow theo kiểu point-and-click

#### 5. Dễ tiếp cận cho người không chuyên
- Giao diện thân thiện cho PM/designer
- View read-only cho thành viên team
- Tóm tắt trực quan capability + kết quả của agent

#### 6. Tự động cập nhật ClaudeKit Project
- Tự sync với update mới nhất từ ClaudeKit
- Không cần chạy `update/init` hằng ngày
- Background updates kèm changelog notification

#### 7. Tích hợp CCS Delegation
- Tích hợp [CCS (Claude Code Switcher)](https://github.com/kaitranntt/ccs) sẵn
- Chuyển đổi giữa Claude, Gemini, Codex và profile AI tùy chỉnh tức thì
- Quản lý nhiều account với visual profile selector
- Delegate task chỉ với một click để tiết kiệm chi phí Claude API

*"Sức mạnh của ClaudeKit, giờ có cả mắt."*

**[→ Tham gia Waiting List](https://vividkit.dev)**

---

## 📚 AgentKit với Claude Code và Codex

Trong lúc chờ VividKit Desktop, bạn có thể cài AgentKit, migrate project CK và học Engineer/Marketing kits:

| Guide | Mô tả |
|-------|-------|
| [CK → AgentKit](https://vividkit.dev/vi/guides/agentkit) | Migration từng bước cho macOS, Linux, Windows, Claude Code, Codex và CI |
| [CLI Guide](https://vividkit.dev/vi/guides) | Cài đặt và setup |
| [Commands](https://vividkit.dev/vi/guides/commands) | Tham khảo 60+ commands |
| [Workflows](https://vividkit.dev/vi/guides/workflows) | Best practices và patterns |
| [CCS](https://vividkit.dev/vi/guides/ccs) | Claude Code Switcher cho multi-model delegation |
| [UI/UX](https://vividkit.dev/vi/guides/uiux) | Skills design và styling |
| [Resume](https://vividkit.dev/vi/guides/resume) | Khôi phục và tiếp tục session |
| [Permissions](https://vividkit.dev/vi/guides/permissions) | Permission modes (auto, bypass, granular rules) |
| [Fix Logs](https://vividkit.dev/vi/guides/fix-logs) | Chiến lược debug |

---

## 🛠️ Tech Stack (Website này)

- **Framework**: Astro 5.x với Static Site Generation (SSG)
- **Styling**: Tailwind CSS v4 + design system glassmorphism tự build
- **Type Safety**: TypeScript strict mode + path aliasing đầy đủ
- **Interactivity**: Alpine.js 3.15.2 cho client-side interaction nhẹ
- **i18n**: Astro i18n built-in, hỗ trợ English (mặc định) + Vietnamese
- **Deployment**: Vercel (kèm analytics)
- **Performance**: Sharp cho image optimization, LightningCSS cho CSS minify
- **Design System**: Glassmorphism UI + hệ thống typography 3 font

## 🤖 VividKit Maintainer Skills (`/vk:*`)

Skills riêng cho repo này, dùng để giữ guides đồng bộ với upstream ClaudeKit. Gọi qua Claude Code bằng prefix `/vk:`.

| Skill | Khi dùng | Lệnh ví dụ |
|-------|----------|-----------|
| `/vk:changelog-sync` | Phát hiện ClaudeKit changelog mới và đồng bộ Commands/Hooks/Workflows guides + i18n | `/vk:changelog-sync` |
| `/vk:audit-ck-cli` | So sánh `claudekit-cli` upstream với CLI/Migrate guide; đề xuất update theo command (`ck migrate`, `ck init`, …) | `/vk:audit-ck-cli` hoặc `/vk:audit-ck-cli page=guides/migrate command=migrate` |
| `/vk:audit-skill` | Audit thay đổi skill upstream ClaudeKit (so với catalog skill đang render trên site) | `/vk:audit-skill <skill-name>` |
| `/vk:add-scenario` | Thêm scenario mới cho một ClaudeKit command vào guides | `/vk:add-scenario` |

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
- Skill chỉ **đề xuất** thay đổi — luôn review trước khi apply vào `src/components/guides/*` hoặc `src/data/guides/*`.

Chi tiết từng skill xem `.claude/skills/vk-*/SKILL.md`.

---

## 🧞 Lệnh Development

| Lệnh | Tác dụng |
|------|----------|
| `npm install` | Cài đặt dependencies |
| `npm run dev` | Chạy local dev server tại `localhost:4321` |
| `npm run build` | Build production site sang `./dist/` |
| `npm run preview` | Preview build local |

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

- [Website VividKit](https://vividkit.dev) - Tham gia waiting list
- [ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli) - Repo source
- [Claude Code](https://claude.ai/code) - CLI chính thức của Anthropic

---

*VividKit - AI coding rõ ràng như pha lê*
