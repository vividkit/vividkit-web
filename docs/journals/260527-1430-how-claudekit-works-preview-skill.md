# Thêm Skill Preview vào Guide "How ClaudeKit Works"

**Date**: 2026-05-27 14:30
**Severity**: Medium
**Component**: `src/components/guides/how-ck-works/` + `src/data/guides/how-ck-works/`
**Status**: Resolved

## Chuyện gì đã xảy ra

Thêm skill `ck:preview` vào guide "How ClaudeKit Works" với một `WorkflowScenario` mới (5 bước: input → hooks/Plan-Context → route file-vs-topic → generate via mermaidjs-v11 → output browser/--html), song ngữ EN/VI, accent color cyan. Tạo mới `SkillInfographic` Quick Ref với bảng song ngữ của 8 cờ preview (--explain, --diagram, --slides, --ascii, --html, --diff, --plan-review, --recap) + ghi chú về quy tắc kết hợp cờ. Mở rộng `infographic-modes-table.astro` để hỗ trợ bảng 2 cột backward-compatible khi một hàng không có mode-matrix columns. Thêm block render `#ck-preview` và điều chỉnh nav ring từ 5 thành 6 nodes (team → preview → brainstorm).

## Sự thật tàn khốc

Lỗi được phát hiện ở cuối quá trình finalize: `preview` không có trong `visibleEngineerSkills` của `workflow-scenario-selector.astro`. Build là GREEN, `id="ck-preview"` tồn tại trong HTML được build, nhưng block render dùng `x-show="selectedScenario === 'preview'"` và không có button selector để kích hoạt state này — feature hoàn toàn không thể chạm được dù mọi tín hiệu tự động đều qua. Đây là điều khủng khiếp: cảm giác tất cả đều hoạt động cho đến khi phát hiện ra người dùng không thể nào tiếp cận được nó.

## Chi tiết kỹ thuật

- `workflow-scenario-selector.astro`: Thêm `'preview'` vào mảng `visibleEngineerSkills` (dòng ~25).
- `skill-infographics.ts`: Tạo object `SkillInfographic` với 8 cộ (--explain, --diagram, --slides, --ascii, --html, --diff, --plan-review, --recap), mỗi cộ có description song ngữ EN/VI.
- `infographic-modes-table.astro`: Thêm logic `columns.length === 0` để render bảng 2 cột fallback khi không có mode-matrix columns (bảo toàn layout của 6 infographics hiện có).
- Navigation: Điều chỉnh nav ring trong `how-ck-works-guide.astro` từ `['plan', 'cook', 'test', 'code-review', 'ship']` thành `['plan', 'cook', 'test', 'code-review', 'ship', 'preview']`, preview ở cuối để skill mới có thể insert sạch.
- i18n: `src/i18n/en/how-ck-works.ts` + `src/i18n/vi/how-ck-works.ts` chứa chuỗi và mô tả cho scenario và skill.

## Root Cause Analysis

Khi thêm feature UI mới với conditional rendering qua selector state (`x-show`), dễ quên cập nhật option list dùng để kích hoạt selector. Build + DOM-check không phát hiện được điều này vì HTML generation là static — nó không biết rằng "element tồn tại" ≠ "người dùng có thể chạm nó". Lỗi này chỉ lộ khi chạy thử tương tác.

## Lessons Learned

**Build passes + element exists in DOM ≠ feature is reachable.** Khi UI dùng `x-show/x-if` gated behind một selector, phải xác minh trigger (nút clickable) tồn tại, không chỉ target. Giải pháp: trace từ state-trigger → state-check → DOM element, đảm bảo chuỗi liên kết hoàn chỉnh. Nếu lỡ thêm feature mà quên update selector options, feature sẽ âm thầm vô dụng.

## Next Steps

- Giữ navigation ring ở 6 nodes; skill tiếp theo insert tại cuối trước `preview`.
- Kiểm tra lại bất kỳ conditional UI nào khác trong guide để xác minh trigger/target chain.
- Cân nhắc thêm test coverage cho "scenario option list matches visible render blocks".

## Files

| File | What |
|---|---|
| `src/components/guides/how-ck-works/workflow-scenario-selector.astro` | Thêm 'preview' vào visibleEngineerSkills. |
| `src/components/guides/how-ck-works/how-ck-works-guide.astro` | Thêm #ck-preview block, 6-node nav ring. |
| `src/components/guides/how-ck-works/workflow-step-detail-panel.astro` | Hỗ trợ render for preview scenario (step visual fallback). |
| `src/data/guides/how-ck-works/skill-infographics.ts` | Tạo SkillInfographic object với 8 cộ preview. |
| `src/components/guides/how-ck-works/infographic-modes-table.astro` | Thêm fallback 2-col layout khi không có mode-matrix. |
| `src/i18n/en/how-ck-works.ts` | Thêm EN strings cho preview scenario + infographic. |
| `src/i18n/vi/how-ck-works.ts` | Thêm VI strings cho preview scenario + infographic. |
