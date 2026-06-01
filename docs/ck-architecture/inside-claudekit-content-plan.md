# Inside ClaudeKit — Content Plan

> Đề xuất các chủ đề viết bài cho trang `guides/inside-claudekit`, dựa trên việc phân tích `reference/beta/` (ClaudeKit Engineer v2.16.0).
>
> Mục tiêu: cả **dev** lẫn **người không phải dev** (PM, designer, founder, marketer) đều hiểu sâu hơn ClaudeKit là gì, nó hoạt động ra sao và vì sao đáng dùng.

---

## 1. Hiện trạng

Trang `guides/inside-claudekit` hôm nay có **3 topics**, trong đó **2 đang `disabled`**:

| Slug | Track | Status |
| --- | --- | --- |
| `getting-started` | foundations | active |
| `plan-modes` | planning | disabled |
| `frontend-design` | design | disabled |

3 tracks hiện có (theo `src/data/guides/inside-claudekit.ts`):
- **foundations** (emerald) — bài nhập môn
- **planning** (blue) — luồng plan / cook
- **design** (rose) — UI/UX

→ Bộ topic hiện tại quá hẹp so với bề mặt thực tế của ClaudeKit. Không có chỗ cho hooks, agents, automation, security, knowledge graph… Trang này cần mở rộng cả về **chiều rộng** (thêm tracks) lẫn **chiều sâu** (mỗi track 5–10 bài).

---

## 2. Bộ mặt thật của ClaudeKit (từ reference/beta)

`reference/beta/claude/` chứa **5 trụ cột** đáng được kể chuyện:

| Trụ cột | Số lượng | Ví dụ tiêu biểu |
| --- | --- | --- |
| **Skills** (`/skills/`) | 90+ | `ck-plan`, `ck-cook`, `ck-loop`, `ck-predict`, `ck-scenario`, `graphify`, `tech-graph`, `team`, `xia` |
| **Agents** (`/agents/`) | 13 | `planner`, `researcher`, `tester`, `code-reviewer`, `debugger`, `fullstack-developer`, `brainstormer`, `journal-writer`, `project-manager`, `docs-manager`, `git-manager`, `code-simplifier`, `ui-ux-designer` |
| **Hooks** (`/hooks/`) | 14+ | `privacy-block`, `scout-block`, `session-state`, `simplify-gate`, `descriptive-name`, `dev-rules-reminder`, `cook-after-plan-reminder`, `skill-dedup`, `subagent-init`, `team-context-inject`, `usage-context-awareness` |
| **Rules** (`/rules/`) | 7 | `primary-workflow`, `development-rules`, `orchestration-protocol`, `documentation-management`, `skill-domain-routing`, `skill-workflow-routing`, `team-coordination-rules` |
| **Output Styles** (`/output-styles/`) | 6 | `eli5` → `god` (6 levels theo `coding-level`) |

Cộng thêm: `plans/templates/`, `plans/reports/`, `schemas/`, `command-archive/`, `notifications/`, `.ckignore`.

→ Đây là kho nội dung gần như vô hạn. Vấn đề là **chọn lọc** và **phân tầng theo độc giả**.

---

## 3. Phân tầng độc giả

| Persona | Mức độ tech | Họ cần biết gì | Track ưu tiên |
| --- | --- | --- | --- |
| Founder / PM / non-tech | Không code | ClaudeKit là gì, bỏ ra X được Y, có an toàn không | foundations, automation (an toàn), workflows (overview) |
| Designer / Marketer | Light tech | Dùng skill nào để ra deliverable, không phải gõ lệnh phức tạp | design, content, workflows |
| Junior / Mid Dev | Code daily | Bắt đầu từ đâu, plan → cook → ship như nào, hooks chặn cái gì | planning, workflows, quality |
| Senior / Lead Dev | Code & kiến trúc | Cách orchestrate agents, viết skill mới, customise hooks | architecture, automation, collaboration |

→ Mỗi bài viết nên **tag rõ persona** trong card preview. Người không phải dev cần một “lane” riêng, không bị ngợp bởi `--no-prefix`, `cjs hook`, `MCP server`.

---

## 4. Đề xuất mở rộng tracks

Giữ 3 tracks hiện tại + thêm 6 tracks mới = **9 tracks**. Mỗi track có màu/badge riêng để filter dễ dàng.

| Track | Màu gợi ý | Dành cho | Mô tả ngắn |
| --- | --- | --- | --- |
| `foundations` ✅ | emerald | non-tech + dev mới | Khái niệm cốt lõi, bắt đầu từ con số 0 |
| `planning` ✅ | blue | dev | Plan-first discipline, plan.md, phase files |
| `design` ✅ | rose | designer + dev FE | UI/UX, frontend-design, design system |
| `workflows` 🆕 | violet | dev | Lệnh hằng ngày: cook, fix, ship, scout, debug |
| `automation` 🆕 | amber | dev + non-tech (an toàn) | Hooks, autonomous loops, ck:loop, ck:predict |
| `collaboration` 🆕 | cyan | senior dev + team lead | Agent teams, multi-session, orchestration |
| `quality` 🆕 | green | dev | Testing, code review, simplification, security |
| `knowledge` 🆕 | indigo | senior dev + tech writer | Knowledge graphs, docs, codebase summary |
| `safety` 🆕 | red | non-tech + dev | Privacy block, scout block, .ckignore, không leak secret |

Lý do tách `safety` riêng khỏi `automation`: người không phải dev đặc biệt quan tâm “ClaudeKit có đọc trộm `.env` của tôi không?”. Đặt nó ở track riêng giúp họ thấy ngay câu trả lời.

---

## 5. Nguyên tắc chọn topic — "scenario-first", không "architecture-first"

Bài học từ vòng trước: tránh kiểu *"X là gì, định nghĩa thế nào, gồm mấy thành phần"*. Reader sẽ chạy.

→ Mỗi topic phải bắt đầu bằng **một tình huống cụ thể** mà reader đã hoặc sẽ gặp, rồi giải bằng ClaudeKit. Reader đọc xong phải mở terminal làm theo được, không phải gật gù vì hiểu kiến trúc.

**Test "có nên viết bài này không?"** — viết được 1 dòng dạng *"You're stuck at A, want B, here's how CK gets you there in N minutes"* hay không?

Ví dụ:
- ❌ "The 3 Pillars: Skills, Agents, Hooks" → giảng giải, reader gật rồi quên
- ✅ "From a half-written PRD to a working `phase-01-*.md` in 10 minutes" → cụ thể, làm được

---

## 6. Catalog topic — "skill combos", không "skill 101"

Mỗi bài chuyên sâu phải là **chuỗi 2–5 skills** mắc xích nhau để giải xong một tình huống. Bài 1-skill chỉ giữ ở track `foundations` cho người mới.

**Tại sao chọn combo, không chọn từng skill rời?**
- Skill rời đã có trong `commands` page và `SKILL.md`. Reader tới `inside-claudekit` để học **cách phối**, không phải tra cứu định nghĩa.
- Sức mạnh thật của CK lộ ra khi skills nối nhau: `scout → debug → fix → test → ship`. Một bài giảng `/ck:scout` riêng là dở.
- Combo có narrative tự nhiên (vấn đề → khám phá → giả thuyết → vá → ship), dễ viết, dễ đọc, khó lỗi thời.

**Cấu trúc topic mới**: mỗi entry có cột **Chain** (lệnh nối nhau theo thứ tự) và **Skills used** (list skills/agents/hooks tham gia). Bỏ cột source.

---

### 6.1 Track `foundations` — onboarding (5 bài, đa số 1–2 skills)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `getting-started` ✅ | Cài CK + chạy lệnh đầu tiên | install → `/ck:ask` | all | active |
| `first-real-task` | Vừa cài xong — ship PR nhỏ đầu tiên | `/ck:plan` → `/ck:cook` → `/ck:ship` | dev mới | **P0** |
| `talk-to-claude-at-my-level` | Output quá khó/quá dễ — chỉnh đúng tầm | `/coding-level` + output-styles | non-tech + junior | **P0** |
| `claudekit-vs-vanilla-claude-code` | Lắp CK lên Claude Code được gì | demo `/ck:plan` + hooks vs raw | dev phân vân | **P0** |
| `is-it-safe-to-let-claude-code-touch-my-repo` | Repo có an toàn khi để CK chạy | `privacy-block` hook + `scout-block` + `.ckignore` | non-tech | **P0** |

### 6.2 Track `planning` — combo "ý tưởng → phase chạy được" (4 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `prd-to-cookable-phases` | PRD nửa vời → phase files cook ngay | `/ck:brainstorm` → `/ck:plan` → review → `/ck:cook` | dev + PM | **P0** |
| `idea-stress-test-before-coding` | Ý tưởng dễ rơi vào ngõ cụt — tiền-mortem | `/ck:brainstorm` → `/ck:predict` → `/ck:scenario` → `/ck:plan` | senior dev | **P0** |
| `research-driven-plan` | Cần khảo sát library trước khi plan | `/ck:autoresearch` → 3× `researcher` agent → `/ck:plan` | senior dev | P1 |
| `resume-multi-day-plan` | Quay lại plan 3 ngày trước, không lạc | `session-state` hook → `plans-kanban` → `/ck:cook` resume | dev | P1 |

### 6.3 Track `design` — combo "mockup → component PR" (3 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `screenshot-to-merged-pr` | Screenshot Figma → component React merged | `/ck:frontend-design` → `/ck:ui-styling` → `tester` agent → `/ck:ship` | designer + FE | **P0** |
| `text-to-prototype-to-demo` | Idea text → mockup → demo deck cho khách | `/ck:stitch` → `/ck:frontend-design` → `/ck:show-off` | founder, PM | P1 |
| `polish-before-demo` | UI ugly → presentable trong 1 giờ | `/ck:web-design-guidelines` audit → `/ck:ui-styling` → `/ck:show-off` | FE dev | P1 |

### 6.4 Track `workflows` 🆕 — combo "ngày làm việc thật" (5 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `monday-morning-flow` | 9h thứ Hai — kick-off cả tuần | `/ck:retro` (last week) → `/ck:plan` → `plans-kanban` → `/ck:cook` | dev + tech lead | **P0** |
| `ci-on-fire` | Pipeline đỏ — tìm root + vá + ship | `/ck:scout` (CI logs) → `/ck:debug` → `/ck:fix` → `tester` → `/ck:ship` | dev oncall | **P0** |
| `bug-without-repro` | Bug user báo, local không lặp được | `/ck:scout` → `debugger` agent → `/ck:scenario` → `/ck:fix` | dev | **P0** |
| `refactor-with-safety-net` | Refactor 800-dòng module không sợ vỡ | `worktree` → `code-simplifier` agent → `tester` → `code-reviewer` → `/ck:ship` | senior dev | P1 |
| `friday-recap-for-team` | Cuối tuần — recap cho team không cần viết tay | `/ck:retro` → `journal-writer` agent → `docs-manager` → push | tech lead | P2 |

### 6.5 Track `automation` 🆕 — combo "Claude tự cày, tôi đi cà phê" (4 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `coverage-72-to-85-overnight` | Coverage kẹt 72% — chạy đêm lên 85% | `/ck:scout` (gaps) → `/ck:loop` (8 iters) → `tester` → `/ck:ship` | dev | **P0** |
| `bundle-diet-without-touching-features` | Bundle 1.2MB → 800KB không vỡ feature | `/ck:scout` (deps) → `/ck:loop` (perf metric) → `code-reviewer` → `/ck:ship` | FE dev | **P0** |
| `pre-deploy-pre-mortem` | Sắp deploy rủi ro — pre-mortem có hệ thống | `/ck:predict` (3 personas) → `/ck:scenario` (edge cases) → `/ck:plan` (mitigations) | senior dev | P1 |
| `library-shortlist-without-50-tabs` | Khảo sát library mà không lạc 50 tab | `/ck:autoresearch` → 3× `researcher` parallel → `/ck:brainstorm` → matrix | dev + PM | P2 |

### 6.6 Track `collaboration` 🆕 — combo "1 người = 1 team" (3 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `solo-dev-with-13-agents` | 1 dev — PR có đủ tests + review + docs | `/ck:plan` → `fullstack-developer` → `tester` → `code-reviewer` → `docs-manager` → `git-manager` | indie dev | **P0** |
| `4-features-parallel-1-week` | 4 features tuần này — chạy song song không xung đột | `/ck:team` (4 devs) → 4× `worktree` → `project-manager` orchestrate → merge train | tech lead | P1 |
| `research-team-of-three` | Topic nặng — 3 researcher đào song song | `/ck:team --researchers 3` → `/ck:autoresearch` → synthesis report | senior dev | P2 |

### 6.7 Track `quality` 🆕 — combo "không cho bug lọt" (3 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `mega-pr-survival` | PR 1500 dòng — review không vỡ não | `/ck:scout` (diff) → `code-reviewer` agent → `code-simplifier` → `simplify-gate` hook → re-review | reviewer | **P0** |
| `tests-green-but-feature-broken` | Tests xanh nhưng QA báo lỗi | `debugger` agent → `/ck:scenario` (gap) → `tester` (new cases) → `/ck:fix` | QA + dev | **P0** |
| `legacy-module-modernization` | Module 5 năm tuổi — modernize an toàn | `gkg` find-usages → `code-simplifier` → `tester` regression → `code-reviewer` | senior dev | P1 |

### 6.8 Track `safety` 🆕 — combo "không leak, không cháy quota" (3 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `dotenv-incident-walkthrough` | Claude định đọc `.env` — popup hiện, click gì? | `privacy-block` hook → `AskUserQuestion` flow → approval prefix → audit | non-tech + dev | **P0** |
| `token-burn-detective` | 1 câu hỏi tốn 200K tokens — truy thủ phạm | `usage-context-awareness` hook → `.ckignore` tune → `scout-block` → re-measure | dev | **P0** |
| `clean-git-history-without-ai-trace` | Convention commit sạch + không leak secret | `descriptive-name` hook → `git-manager` agent → pre-push lint → `commit-messages` rule | dev | P1 |

### 6.9 Track `knowledge` 🆕 — combo "codebase nói tiếng người" (3 bài)

| Slug | Tình huống → kết quả | Chain | Persona | Priority |
| --- | --- | --- | --- | --- |
| `onboard-new-dev-day-1` | Dev mới — ship PR đầu trong ngày 1 | `/ck:repomix` → `graphify` → `tech-graph` (diagram) → tour script → `/ck:ask` Q&A | tech lead | **P0** |
| `living-architecture-diagram` | Sơ đồ kiến trúc luôn khớp code | `tech-graph` regen on commit → `docs-manager` sync → `mermaidjs-v11` embed | senior dev + tech writer | P1 |
| `codebase-llms-txt-from-zero` | Sinh `llms.txt` đầy đủ + sạch | `/ck:llms` → `repomix` → `docs-manager` review → publish | tech writer | P2 |

---

### Quy ước viết "Chain"

- Mũi tên `→` là tuần tự bắt buộc.
- Dấu phẩy `,` là tuỳ chọn cùng bước.
- `Nx` (vd `3× researcher`) là chạy song song N instance.
- Hook (`privacy-block`, `simplify-gate`...) đứng dưới dạng *điều kiện thụ động* — nó tự fire trong chain, không phải lệnh người gõ.
- Agent (`tester`, `code-reviewer`, `debugger`...) viết tên kèm hậu tố `agent` ở chỗ đầu xuất hiện, sau đó gọi tắt.

---

## 7. Template bài viết — "scenario → chain → outcome"

Mọi article combo tuân chính xác 8 block. Không có "Architecture", không có "X là gì". Bài 1-skill ở foundations bỏ block 4 (vì chỉ có 1 mắt xích).

```
1. The situation (≤ 3 dòng)
   "9 AM. Bundle 1.2MB. Lighthouse fails. You have 2 hours."

2. What you'll get (bullet, mỗi bullet có số đo)
   - Bundle ≤ 800KB
   - Tests vẫn pass
   - 1 PR ready merge

3. The chain at a glance (sơ đồ mermaid 1 dòng)
   /ck:scout  →  /ck:loop  →  code-reviewer  →  /ck:ship

4. Why this chain, not just one skill (≤ 6 dòng)
   - scout giới hạn search-space để loop không cày bừa
   - loop tìm tối ưu mechanically
   - reviewer agent flag commit nào trông "có vẻ đúng nhưng lén break feature"
   - ship đảm bảo CI + version + PR sạch

5. The play (numbered, mỗi step = 1 lệnh + screenshot/output snippet)
   1. /ck:scout "rollup bundle, esm imports" → 12 file candidates
   2. /ck:loop --iter 8 "min bundle, keep tests green"
   3. Wait 18 min → 6 keepers, 2 discards
   4. /ck:cook để code-reviewer xét keepers
   5. /ck:ship

6. Behind the curtain (collapsible deep-dive, ≤ 8 dòng)
   - hooks tự fire: simplify-gate khi loop tăng LOC
   - session-state ghi mỗi iter để resume được
   - Reader non-tech đóng block này

7. When this combo backfires (≤ 4 dòng)
   - Skip nếu metric chủ quan ("đẹp hơn")
   - Skip nếu root cause chưa biết — dùng /ck:debug trước

8. Adjacent combos (link 2–3 bài combo cùng track)
```

→ Block 3 + 4 là **đặc sản của bài combo**. Block 3 vẽ chuỗi để reader thấy ngay phối thế nào; block 4 trả lời "tại sao không gọn 1 lệnh?" — câu hỏi reader sẽ hỏi đầu tiên.

→ Block 6 collapsible — non-tech đóng, senior mở.

→ `InsideClaudeKitArticleShell.astro` cần thêm 2 component: `<ChainDiagram>` (block 3, có thể là Mermaid 1 dòng) + `<DeepDive>` (block 6, collapsible).

---

## 8. Roadmap đề xuất (rolling)

Sprint chia theo **độ cấp bách của tình huống reader**, không theo track.

| Sprint | Lý do | Bài cần ship |
| --- | --- | --- |
| Sprint 1 — onboard + lý do tin CK | Reader cần 1 lý do dùng CK hôm nay (không cần combo) | `first-real-task`, `claudekit-vs-vanilla-claude-code`, `talk-to-claude-at-my-level`, `is-it-safe-to-let-claude-code-touch-my-repo` |
| Sprint 2 — combo "đỏ lửa hằng ngày" | Dev oncall + ship feature thấy ngay sức mạnh chuỗi | `ci-on-fire`, `bug-without-repro`, `prd-to-cookable-phases`, `monday-morning-flow` |
| Sprint 3 — combo "an toàn + UI" | Non-tech bớt sợ + designer/FE có deliverable PR-ready | `dotenv-incident-walkthrough`, `token-burn-detective`, `screenshot-to-merged-pr`, `polish-before-demo` |
| Sprint 4 — combo "Claude tự cày" | Reader thấy chain tự chạy đêm | `coverage-72-to-85-overnight`, `bundle-diet-without-touching-features`, `solo-dev-with-13-agents`, `mega-pr-survival` |
| Sprint 5+ | Bù track mỏng + P1/P2 | còn lại theo priority |

→ Sau Sprint 1, hub có 6 bài (`PAGE_SIZE = 8` chưa kích pagination — vẫn ổn). Đến Sprint 2 vượt 11 bài → bật pagination + filter.

→ Sprint 1 cố tình **không có bài "kiến trúc"**. Reader phải thấy CK *làm được gì cho họ* trước khi quan tâm 13 agents là ai.

---

## 9. Action items code-side (không phải nội dung)

Để chứa được catalog mở rộng:

1. **`src/data/guides/inside-claudekit.ts`** — thêm 6 tracks mới vào `InsideClaudeKitTrack` union + `trackMeta` (màu, badge key).
2. **`src/i18n/{en,vi}/`** — thêm `guides.inside_claudekit.track.<name>` cho 6 track mới + cặp `topic_N.{title,desc,nav}` cho mỗi bài.
3. **`src/pages/guides/inside-claudekit/<slug>.astro`** — tạo page shell theo pattern `plan-modes.astro`.
4. **`src/components/guides/inside-claudekit/InsideClaudeKit<Slug>Article.astro`** — viết nội dung từng bài theo template ở §6.
5. Thêm field `persona: 'all' | 'non-tech' | 'dev' | 'senior-dev'` vào topic record để hub có thêm filter pill (sau khi vượt 15 bài).

---

## 10. Open questions

- **Scope**: VividKit có nên kể chuyện chi tiết tới mức `cjs` hooks (ví dụ logic `privacy-checker.cjs`) hay chỉ dừng ở “black box behaviour”? Đề xuất: dừng ở behaviour cho non-tech, có separate “deep dive” box cho dev (collapsible).
- **Versioning**: ClaudeKit Engineer đang ở v2.16.0. Mỗi bài có nên gắn `lastVerifiedVersion` để khi sync changelog biết bài nào cần review?
- **Marketing Kit**: docs hiện chỉ có `claudekit-marketing-*` reference. Cần một bài "ClaudeKit Marketing Kit at a Glance" trong track `foundations` không, hay tách riêng vào trang khác?
- **Audience filter UI**: Hub hiện filter theo track. Sau khi có persona, dùng segmented control hai chiều (track × persona) hay multi-select pill?
- **Source-of-truth**: Khi `reference/beta/` cập nhật version mới, ai chịu trách nhiệm flag bài nào outdated — `vk-changelog-sync` skill hay quy trình riêng?
