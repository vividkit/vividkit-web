# Vietnamese Translation Improvement Plan

**Plan ID:** 251208-2040-vi-translation-improvements
**Created:** 2025-12-08
**Status:** Completed
**Completed:** 2025-12-08 22:15 UTC

## Executive Summary

Review and improve all Vietnamese translations in VividKit codebase to meet professional localization standards: natural Vietnamese, consistent terminology, preserved IT terms, and context-appropriate tone.

## Scope

### Files to Modify

| File | Lines | Type | Priority |
|------|-------|------|----------|
| `/src/i18n/vi.ts` | 871 | Main translations | HIGH |
| `/src/data/vi/guides/workflows.ts` | 143 | Workflow data | MEDIUM |

### Out of Scope

- English source translations (`/src/i18n/en.ts`)
- Vietnamese page routes (`/src/pages/vi/**`) - these only consume translations
- i18n utility functions (`/src/i18n/utils.ts`)

## Quality Standards

### 1. Natural Vietnamese
- Use everyday language, NOT machine translation
- Friendly, concise, clear wording
- Avoid overly academic/bureaucratic tone

### 2. IT Terms - DO NOT TRANSLATE

Keep in English:
```
API, UI, UX, CLI, GUI, terminal, dashboard, token, cache, session,
framework, middleware, hook, Dark Mode, Docker, Git, deployment,
build, component, module, feature, workflow, skill, prompt, slash command,
ClaudeKit, Claude Code, CCS, Bootstrap, OAuth, JSON, HTML, CSS,
React, Next.js, Tailwind, TypeScript, GLM, Gemini
```

Only translate when commonly localized:
- server -> may chu (optional)
- database -> co so du lieu (optional)

### 3. Product Context

- **Product:** VividKit marketing website
- **Audience:** Developers and tech users
- **Tone:** Professional but approachable

## Phase Overview

| Phase | Name | Focus | Est. Changes | Status | Completed |
|-------|------|-------|--------------|--------|-----------|
| 01 | Analysis | Identify issues with examples | N/A | DONE | 2025-12-08 20:30 UTC |
| 02 | Core Translations | Fix main vi.ts file | ~200 keys | DONE | 2025-12-08 21:45 UTC |
| 03 | Workflow Data | Fix workflow descriptions | ~30 strings | DONE | 2025-12-08 21:50 UTC |
| 04 | Validation | Review consistency | N/A | DONE | 2025-12-08 22:15 UTC |

## Implementation Phases

### Phase 01: Analysis (Report Only)

**Goal:** Document specific issues with before/after examples

**Deliverable:** `/plans/251208-2040-vi-translation-improvements/reports/phase-01-analysis.md`

**Issue Categories:**

1. **Machine Translation Artifacts** - Awkward/unnatural phrasing
2. **Over-Translation** - IT terms that should stay English
3. **Inconsistent Terminology** - Same term translated differently
4. **Tone Issues** - Too formal/academic for the context
5. **Grammar/Spelling** - Minor linguistic errors

### Phase 02: Core Translations

**Goal:** Apply improvements to `/src/i18n/vi.ts`

**Deliverable:** Updated vi.ts file

**Key Areas:**

1. **Hero Section** (lines 1-30)
2. **Problem Section** (lines 30-60)
3. **Features Section** (lines 60-180)
4. **Commands Section** (lines 210-820)
5. **Guides Sections** (lines 270-870)

### Phase 03: Workflow Data

**Goal:** Apply improvements to `/src/data/vi/guides/workflows.ts`

**Deliverable:** Updated workflows.ts file

**Focus:**
- Workflow titles and descriptions
- Step labels and descriptions
- Tips and features lists

### Phase 04: Validation

**Goal:** Ensure consistency across all files

**Deliverable:** `/plans/251208-2040-vi-translation-improvements/reports/phase-04-validation.md`

**Checks:**
- Same term = same translation everywhere
- No remaining over-translations
- Tone consistency

## Issue Examples (Preview)

### Category 1: Machine Translation Artifacts

| Key | Current | Improved |
|-----|---------|----------|
| `hero.subtitle` | "Giao dien truc quan cho cac lenh va skill AI cua ClaudeKit..." | Keep "skill" and "AI" in English; simplify structure |
| `problem.remember.description` | "Viec lien tuc chuyen ngu canh giua tai lieu va terminal lam gian doan dong chay lam viec" | "Chuyen qua lai giua docs va terminal lien tuc pha vo flow lam viec" |

### Category 2: Over-Translation

| Key | Current | Improved |
|-----|---------|----------|
| `guides.ccs.title` | "Chuyen Doi Tai Khoan" | "Claude Code Switch" (keep product name) |
| `commands.title` | N/A but should verify | Keep "Slash Commands" |

### Category 3: Inconsistent Terms

| Term | Variations Found | Standardize To |
|------|-----------------|----------------|
| workflow | "quy trinh", "quy trinh lam viec" | "workflow" (keep English) |
| command | "lenh" | Keep as "lenh" or use "command" |
| skill | "ky nang", "skill" | "skill" (English) |

### Category 4: Tone Issues

| Key | Current | Issue | Improved |
|-----|---------|-------|----------|
| `cli.guide.what_is_description` | Very long, formal | Too wordy | Shorter, more direct |
| Various descriptions | Academic tone | Not user-friendly | Conversational |

## Success Criteria

1. **No machine translation artifacts** - All text reads naturally ✓
2. **IT terms preserved** - All specified terms remain in English ✓
3. **Consistent terminology** - Same concept = same translation ✓
4. **Appropriate tone** - Professional but friendly ✓
5. **No errors** - Build passes, no TypeScript issues ✓

## Completion Summary

**All phases completed successfully on 2025-12-08**

### Key Achievements

1. **Fixed Critical Translations**
   - Corrected "xong xong" → "song song" (parallel execution)
   - Fixed product name mistranslation in CCS guide
   - Improved naturalness across 200+ translation keys

2. **Preserved IT Terminology**
   - Kept technical terms in English: API, CLI, terminal, dashboard, workflow, skill, command, etc.
   - Maintained brand names: VividKit, ClaudeKit, Claude Code
   - Consistent with professional developer audience

3. **Improved Translation Quality**
   - Removed machine translation artifacts
   - Enhanced tone to be professional yet approachable
   - Standardized terminology across all files
   - Updated workflow descriptions for clarity

4. **Files Modified**
   - `/src/i18n/vi.ts` - Main translations file (871 lines)
   - `/src/data/vi/guides/workflows.ts` - Workflow guide data (143 lines)

5. **Validation & Testing**
   - Build passes successfully with no TypeScript errors
   - All translation keys intact, only values modified
   - Cross-file consistency verified
   - No breaking changes to functionality

## File Naming Convention

```
plans/251208-2040-vi-translation-improvements/
  plan.md (this file)
  phase-01-analysis.md
  phase-02-core-translations.md
  phase-03-workflow-data.md
  reports/
    phase-01-analysis.md
    phase-04-validation.md
```

## Dependencies

- None (pure content changes)
- No code logic changes required

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Subjective translation preferences | Low | Follow established standards |
| Breaking TypeScript keys | Medium | Only change values, not keys |
| Inconsistent changes | Low | Phase 04 validation |

## Completion Status

All planned phases have been executed and completed successfully. The Vietnamese translation improvements have been implemented, tested, and validated.

### Post-Completion Tasks
- Vietnamese guide pages are now displaying improved translations
- Users accessing VividKit in Vietnamese will see more natural, professional content
- Build and deployment ready with no issues
- Documentation updated in implementation reports

### Archive Status
Plan marked as COMPLETED and archived. All deliverables available in plan reports directory.
