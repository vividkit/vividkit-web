# Phase 01: Translation Analysis

**Phase:** 01 - Analysis
**Status:** Ready for Implementation
**File Target:** `/src/i18n/vi.ts` (primary), `/src/data/vi/guides/workflows.ts` (secondary)

## Objective

Identify and document all translation issues with specific examples, line numbers, and improvement recommendations.

## Issue Categories

### Category A: Machine Translation Artifacts

Awkward phrasing that sounds unnatural to native speakers.

| # | Key | Current | Issue | Recommended |
|---|-----|---------|-------|-------------|
| A1 | `problem.discover.description` | "Cac tinh nang bi chon vui trong file markdown. Khong co danh muc truc quan de kham pha nhung gi thuc su co the." | Awkward "nhung gi thuc su co the" | "Tinh nang bi chon trong file markdown. Khong co catalog truc quan de kham pha." |
| A2 | `problem.remember.description` | "Ngay ca chuyen gia cung quen cu phap. Viec lien tuc chuyen ngu canh giua tai lieu va terminal lam gian doan dong chay lam viec." | "dong chay lam viec" sounds unnatural | "Chuyen qua lai giua docs va terminal pha vo flow." |
| A3 | `problem.visibility.description` | "Cac agent chay trong bong toi. Khong co dashboard, khong co thanh tien trinh, khong co thong tin real-time ve viec thuc thi." | Verbose | "Agent chay ma khong thay gi. Khong dashboard, khong progress bar, khong insight." |
| A4 | `problem.barrier.description` | "Terminal loai tru cac thanh vien khong chuyen ky thuat. PM va designer bi bo lai phia ngoai quy trinh lam viec AI." | Overly formal | "Terminal can tro nguoi non-tech. PM va designer bi bo qua." |
| A5 | `feature.problems.terminal.description` | "Ghi nho cu phap va flag CLI phuc tap lam giam su sang tao" | "lam giam su sang tao" is awkward | "Phai nho cu phap CLI phuc tap can tro sang tao" |
| A6 | `cli.guide.what_is_description` | Very long sentence starting with "ClaudeKit CLI giup ban..." | Too wordy, run-on sentence | Break into 2-3 shorter sentences |
| A7 | `uiux.guide.what_is_description` | "Mot ky nang AI chuyen biet dong vai tro la doi tac thiet ke chuyen nghiep cua ban." | "dong vai tro la" is awkward | "Mot AI skill chuyen biet - doi tac thiet ke chuyen nghiep cua ban." |
| A8 | `commands.hero.description` | Contains complex HTML that's hard to read | OK but verify rendering | Keep structure, simplify text |
| A9 | `ccs.guide.feature_parallel` | "Chay cac quy trinh xong xong trong nhieu cua so terminal" | "xong xong" typo/awkward | "Chay nhieu process song song trong cac terminal khac nhau" |

### Category B: Over-Translation (IT Terms)

Technical terms that should remain in English.

| # | Key | Current | Issue | Recommended |
|---|-----|---------|-------|-------------|
| B1 | `hero.features.skill_browser` | "Trinh duyet skill" | Partial - OK | Keep "Skill Browser" in English |
| B2 | `guides.ccs.title` | "Chuyen Doi Tai Khoan" | CCS is product name | "CCS - Claude Code Switch" |
| B3 | `workflows.guide.title` | "Quy Trinh Duoc De Xuat" | Workflow is common tech term | "Workflow Duoc De Xuat" or keep "Recommended Workflows" |
| B4 | `feature.solutions.zap.title` | "Khong Can Thiet Lap" | "Zero Setup" is cleaner | "Zero Setup" |
| B5 | `commands.tip1.title` | "Tiet kiem token voi /clear" | Correct - token stays English | OK |
| B6 | `pricing.free.feature1` | "1 Phien Terminal" | "Session" should stay | "1 Terminal Session" |
| B7 | `pricing.pro.feature1` | "Ho Tro Multi-terminal (Da Len Ke Hoach)" | Mix of Viet/Eng | "Multi-terminal Support (Planned)" |
| B8 | `cli.terminal.style_guide` | "Style guide:" | OK | Keep English |
| B9 | `uiux.guide.step2.item1` | "Style Guide" | Correct | Keep English |
| B10 | `ccs.guide.what_is_desc_prefix` | "CCS (Claude Code Switch) la mot wrapper bao quanh Claude Code..." | Correct use of English terms | OK, just verify "wrapper" is kept |

### Category C: Inconsistent Terminology

Same concept translated differently across the file.

| Term | Variation 1 | Variation 2 | Standardize To |
|------|-------------|-------------|----------------|
| workflow | "quy trinh" | "quy trinh lam viec" | "workflow" (English) |
| skill | "ky nang" | "skill" | "skill" (English) |
| command | "lenh" | (consistent) | "lenh" or "command" - pick one |
| feature | "tinh nang" | "chuc nang" | "tinh nang" |
| dashboard | "bang dieu khien" | "dashboard" | "dashboard" (English) |
| code | "ma", "ma nguon", "code" | mixed | "code" for noun, "lap trinh" for verb |
| developer | "lap trinh vien", "developer" | mixed | "developer" (English) |
| token | "token" | (consistent) | Keep "token" |

### Category D: Tone Issues

Text that's too formal/academic for a tech marketing website.

| # | Key | Current Tone | Issue | Recommended Tone |
|---|-----|--------------|-------|------------------|
| D1 | `hero.claudekit.info` | "Danh cho nguoi dung ClaudeKit: Bien cac quy trinh CLI thanh trai nghiem truc quan, de tiep can." | Formal, wordy | "Cho ClaudeKit users: Bien CLI thanh trai nghiem visual, ai cung dung duoc." |
| D2 | `features.description` | "Bien he thong agent manh me cua ClaudeKit thanh trai nghiem truc quan, de tiep can. Khong can chuyen mon ve terminal." | Wordy | "ClaudeKit agent system - trai nghiem visual. Khong can biet terminal." |
| D3 | `claudekit.section_description` | "VividKit yeu cau ClaudeKit de hoat dong. Day la ly do tai sao no dang gia." | Stiff | "VividKit can ClaudeKit. Day la ly do ban nen dung." |
| D4 | `pricing.section_description` | "Bat dau mien phi, nang cap de co them suc manh." | OK but could be punchier | "Free de bat dau. Upgrade khi can." |
| D5 | Various guide descriptions | Academic style | Too formal for docs | Use conversational style |

### Category E: Grammar/Spelling Issues

| # | Key | Current | Issue | Fix |
|---|-----|---------|-------|-----|
| E1 | `ccs.guide.feature_parallel` | "xong xong" | Typo | "song song" |
| E2 | Multiple | Inconsistent capitalization | Title Case vs Sentence case | Standardize to Title Case for titles |
| E3 | `form.role.founder` | "Founder khong chuyen ky thuat" | OK | Consider "Non-tech Founder" |

## Priority Matrix

### HIGH Priority (Fix First)

1. **B2** - CCS product name incorrectly translated
2. **A9** - Typo "xong xong"
3. **B3, B4, B6, B7** - Over-translated UI terms
4. **Category C** - Terminology inconsistencies

### MEDIUM Priority

1. **A1-A8** - Machine translation artifacts
2. **D1-D5** - Tone adjustments

### LOW Priority

1. **E2** - Capitalization standardization
2. Minor phrasing preferences

## Detailed Analysis by Section

### Section 1: Site Metadata & Navigation (Lines 1-20)

```typescript
// Current
'site.title': 'VividKit - Giao Dien Truc Quan Cho ClaudeKit',
'site.description': 'Giao dien truc quan cho cac lenh va skill AI cua ClaudeKit...'

// Recommended - Keep "ClaudeKit", "skill", "AI"
'site.title': 'VividKit - Visual Interface cho ClaudeKit', // Mix OK for SEO
'site.description': 'Visual interface cho ClaudeKit commands va skills. Khong can nho. Khong can biet terminal. Chi can click.'
```

### Section 2: Hero Section (Lines 17-30)

Generally good. Minor improvements:
- Keep "Waitlist" in English for brand consistency
- "Truc quan" is fine, "visual" also acceptable

### Section 3: Problem Section (Lines 31-45)

Main issues: Verbose phrasing, awkward constructions.

```typescript
// Example improvement
'problem.discover.description':
  // FROM: "Cac tinh nang bi chon vui trong file markdown..."
  // TO: "Tinh nang bi chon trong markdown. Khong co visual catalog de kham pha."
```

### Section 4: Features Section (Lines 44-70)

Issues: Over-translation of common terms.

```typescript
// Recommend keeping these in English:
- "Zero Setup" not "Khong Can Thiet Lap"
- "Visual Interface" acceptable as is
- "Seamless Integration" -> "Tich hop lien mach" is OK
```

### Section 5: CLI Guide (Lines 273-380)

Generally good technical content. Issues:
- Some verbose explanations
- Mix of formal/informal tone

### Section 6: Commands Guide (Lines 686-815)

Largest section. Issues:
- Inconsistent command description styles
- Some over-translations

### Section 7: CCS Guide (Lines 600-655)

Critical issue: Product name "CCS" should not be translated as "Chuyen Doi Tai Khoan".

## Validation Checklist

After improvements, verify:

- [ ] All IT terms from the preserve list are in English
- [ ] No "quy trinh" when "workflow" intended
- [ ] No "ky nang" when "skill" intended
- [ ] Product names unchanged (ClaudeKit, CCS, VividKit)
- [ ] Consistent capitalization in titles
- [ ] No remaining typos
- [ ] Build passes without TypeScript errors

## Estimated Changes

| File | Estimated Keys to Modify |
|------|--------------------------|
| `/src/i18n/vi.ts` | ~150-200 keys |
| `/src/data/vi/guides/workflows.ts` | ~30 strings |

## Next Steps

1. Proceed to Phase 02 with this analysis as reference
2. Apply changes in batches by section
3. Run build after each batch to verify no breaks
