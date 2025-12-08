# Phase 02: Core Translations

**Phase:** 02 - Core Translations
**Status:** Ready for Implementation
**Target File:** `/src/i18n/vi.ts`

## Objective

Apply translation improvements to the main Vietnamese translation file following the analysis from Phase 01.

## Implementation Strategy

Work in batches by section. After each batch:
1. Save file
2. Run `npm run build` to verify no TypeScript errors
3. Spot-check in browser

## Batch 1: Site Metadata & Navigation

**Lines:** 1-20
**Changes:** ~10 keys

### Before/After Examples

```typescript
// Key: site.title
// BEFORE:
'site.title': 'VividKit - Giao Dien Truc Quan Cho ClaudeKit',
// AFTER: (Keep product names, simplify)
'site.title': 'VividKit - Visual Interface cho ClaudeKit',

// Key: site.description
// BEFORE:
'site.description': 'Giao dien truc quan cho cac lenh va skill AI cua ClaudeKit. Khong can ghi nho. Khong can chuyen mon terminal. Chi can duyet va nhap.',
// AFTER: (More natural, keep tech terms)
'site.description': 'Visual interface cho ClaudeKit commands va skills. Khong can nho. Khong can biet terminal. Chi can click.',
```

### Keys to Modify

| Key | Action |
|-----|--------|
| `site.title` | Simplify, keep product names |
| `site.description` | More natural phrasing |
| `nav.*` | Keep as-is (already good) |
| `guides.sidebar.title` | Keep as-is |

## Batch 2: Hero Section

**Lines:** 17-30
**Changes:** ~15 keys

### Before/After Examples

```typescript
// Key: hero.subtitle
// BEFORE:
'hero.subtitle': 'Giao dien truc quan cho cac lenh va skill AI cua ClaudeKit. Khong can ghi nho. Khong can chuyen mon terminal. Chi can duyet va nhap.',
// AFTER:
'hero.subtitle': 'Visual interface cho ClaudeKit AI commands va skills. Khong can nho lenh. Khong can biet terminal. Chi can click.',

// Key: hero.claudekit.info
// BEFORE:
'hero.claudekit.info': 'Danh cho nguoi dung ClaudeKit: Bien cac quy trinh CLI thanh trai nghiem truc quan, de tiep can. Danh cho ca developer va non-developer.',
// AFTER:
'hero.claudekit.info': 'Cho ClaudeKit users: Bien CLI workflow thanh trai nghiem visual. Developer va non-developer deu dung duoc.',

// Key: hero.features.skill_browser
// BEFORE:
'hero.features.skill_browser': 'Trinh duyet skill',
// AFTER:
'hero.features.skill_browser': 'Skill browser',
```

### Keys to Modify

| Key | Action |
|-----|--------|
| `hero.subtitle` | More natural, keep tech terms |
| `hero.claudekit.info` | Simplify, use "workflow" |
| `hero.features.*` | Keep tech terms English |
| `hero.cta.*` | Keep as-is (already good) |

## Batch 3: Problem Section

**Lines:** 31-45
**Changes:** ~10 keys

### Before/After Examples

```typescript
// Key: problem.discover.description
// BEFORE:
'problem.discover.description': 'Cac tinh nang bi chon vui trong file markdown. Khong co danh muc truc quan de kham pha nhung gi thuc su co the.',
// AFTER:
'problem.discover.description': 'Features bi chon trong markdown files. Khong co visual catalog de kham pha.',

// Key: problem.remember.description
// BEFORE:
'problem.remember.description': 'Ngay ca chuyen gia cung quen cu phap. Viec lien tuc chuyen ngu canh giua tai lieu va terminal lam gian doan dong chay lam viec.',
// AFTER:
'problem.remember.description': 'Ca expert cung quen syntax. Chuyen qua lai giua docs va terminal lien tuc pha vo flow.',

// Key: problem.visibility.description
// BEFORE:
'problem.visibility.description': 'Cac agent chay trong bong toi. Khong co dashboard, khong co thanh tien trinh, khong co thong tin real-time ve viec thuc thi.',
// AFTER:
'problem.visibility.description': 'Agent chay ma khong thay gi. Khong dashboard, khong progress bar, khong real-time insight.',

// Key: problem.barrier.description
// BEFORE:
'problem.barrier.description': 'Terminal loai tru cac thanh vien khong chuyen ky thuat. PM va designer bi bo lai phia ngoai quy trinh lam viec AI.',
// AFTER:
'problem.barrier.description': 'Terminal can tro non-tech members. PM va designer bi bo ngoai AI workflow.',
```

## Batch 4: Features Section

**Lines:** 44-180
**Changes:** ~40 keys

### Before/After Examples

```typescript
// Key: feature.problems.terminal.description
// BEFORE:
'feature.problems.terminal.description': 'Ghi nho cu phap va flag CLI phuc tap lam giam su sang tao',
// AFTER:
'feature.problems.terminal.description': 'Phai nho CLI syntax va flags phuc tap can tro creativity',

// Key: feature.solutions.zap.title
// BEFORE:
'feature.solutions.zap.title': 'Khong Can Thiet Lap',
// AFTER:
'feature.solutions.zap.title': 'Zero Setup',

// Key: features.description
// BEFORE:
'features.description': 'Bien he thong agent manh me cua ClaudeKit thanh trai nghiem truc quan, de tiep can. Khong can chuyen mon ve terminal.',
// AFTER:
'features.description': 'Bien ClaudeKit agent system thanh visual experience. Khong can biet terminal.',
```

## Batch 5: Pricing Section

**Lines:** 82-200
**Changes:** ~30 keys

### Before/After Examples

```typescript
// Key: pricing.free.feature1
// BEFORE:
'pricing.free.feature1': '1 Phien Terminal',
// AFTER:
'pricing.free.feature1': '1 Terminal Session',

// Key: pricing.pro.feature1
// BEFORE:
'pricing.pro.feature1': 'Ho Tro Multi-terminal (Da Len Ke Hoach)',
// AFTER:
'pricing.pro.feature1': 'Multi-terminal Support (Planned)',

// Key: pricing.section_description
// BEFORE:
'pricing.section_description': 'Bat dau mien phi, nang cap de co them suc manh.',
// AFTER:
'pricing.section_description': 'Free de bat dau. Upgrade khi can.',
```

## Batch 6: CLI Guide

**Lines:** 273-380
**Changes:** ~50 keys

### Before/After Examples

```typescript
// Key: cli.guide.what_is_description
// BEFORE:
'cli.guide.what_is_description': 'ClaudeKit CLI giup ban thiet lap ClaudeKit trong cac du an, sau do ban su dung Claude Code de nhan tro giup AI. Cai dat ClaudeKit, chay claude, va tan huong cac skill manh me nhu UI/UX Pro Max — tat ca tu terminal cua ban!',
// AFTER:
'cli.guide.what_is_description': 'ClaudeKit CLI giup setup ClaudeKit trong project. Su dung Claude Code de nhan AI help. Install ClaudeKit, chay claude, va dung cac powerful skills nhu UI/UX Pro Max - tat ca tu terminal!',
```

## Batch 7: CCS Guide (Critical)

**Lines:** 600-655
**Changes:** ~30 keys

### Critical Fix: Product Name

```typescript
// Key: guides.ccs.title
// BEFORE:
'guides.ccs.title': 'Chuyen Doi Tai Khoan',
// AFTER:
'guides.ccs.title': 'CCS - Claude Code Switch',

// Key: ccs.guide.feature_parallel
// BEFORE (with typo):
'ccs.guide.feature_parallel': 'Chay cac quy trinh xong xong trong nhieu cua so terminal',
// AFTER:
'ccs.guide.feature_parallel': 'Chay nhieu process song song trong cac terminal windows',
```

## Batch 8: Commands Guide

**Lines:** 686-815
**Changes:** ~50 keys

### Before/After Examples

```typescript
// Key: commands.hero.description
// Keep HTML structure, simplify Vietnamese text

// Key: commands.qs.beginner.desc
// BEFORE:
'commands.qs.beginner.desc': 'Hoan hao cho nhung buoc dau tien cua ban voi lap trinh AI',
// AFTER:
'commands.qs.beginner.desc': 'Perfect cho buoc dau voi AI coding',

// Key: commands.journey.step2.tip_desc
// BEFORE:
'commands.journey.step2.tip_desc': 'Chay `/clear` truoc khi bat dau xay dung de dam bao AI chi tap trung vao ke hoach da duoc phe duyet.',
// AFTER:
'commands.journey.step2.tip_desc': 'Chay `/clear` truoc khi build de AI focus vao plan da approve.',
```

## Batch 9: UIUX Guide

**Lines:** 380-600
**Changes:** ~50 keys

### Before/After Examples

```typescript
// Key: uiux.guide.what_is_description
// BEFORE:
'uiux.guide.what_is_description': 'Mot ky nang AI chuyen biet dong vai tro la doi tac thiet ke chuyen nghiep cua ban...',
// AFTER:
'uiux.guide.what_is_description': 'Mot AI skill chuyen biet - doi tac design chuyen nghiep cua ban...',

// Key: uiux.guide.audience.developers.desc
// BEFORE:
'uiux.guide.audience.developers.desc': 'Nhan he thong thiet ke, bang mau san sang cho code, va cac thuc hanh tot nhat cho tung stack ngay lap tuc.',
// AFTER:
'uiux.guide.audience.developers.desc': 'Nhan design system, code-ready color palettes, va best practices cho moi stack ngay lap tuc.',
```

## Batch 10: Remaining Guides

**Lines:** 815-871
**Changes:** ~20 keys

### Resume Guide, Fix Logs Guide, Permissions Guide

```typescript
// Keep technical accuracy
// Simplify Vietnamese phrasing
// Preserve all command syntax
```

## Verification Steps

After each batch:

1. **Build Check:**
   ```bash
   npm run build
   ```

2. **Visual Check:**
   - Open Vietnamese pages in browser
   - Verify text renders correctly
   - Check no broken layouts

3. **Consistency Check:**
   - Search for inconsistent terms
   - Verify tech terms are English

## Rollback Plan

If issues arise:
1. Git stash changes
2. Identify problematic key
3. Revert specific change
4. Re-apply remaining changes

## Estimated Time

| Batch | Keys | Est. Time |
|-------|------|-----------|
| 1 | 10 | 5 min |
| 2 | 15 | 10 min |
| 3 | 10 | 10 min |
| 4 | 40 | 20 min |
| 5 | 30 | 15 min |
| 6 | 50 | 25 min |
| 7 | 30 | 15 min |
| 8 | 50 | 25 min |
| 9 | 50 | 25 min |
| 10 | 20 | 10 min |
| **Total** | **~305** | **~2.5 hours** |

## Success Criteria

- [ ] All batches completed
- [ ] Build passes
- [ ] No TypeScript errors
- [ ] Visual verification done
- [ ] Tech terms preserved
- [ ] Consistent terminology
