# Phase 06: Landing Page Integration

**Phase:** 06 of 07
**Status:** Pending
**Est. Time:** 30 minutes
**Dependencies:** Phases 02-05 complete

---

## Context

Integrate all 4 new section components into the main landing page (`index.astro`) in a logical order that guides visitors through the ClaudeKit value proposition.

---

## Overview

Update `src/pages/index.astro` to include the new sections in the optimal order for conversion:
1. Hero (existing)
2. Problem (existing)
3. Features (existing)
4. **ClaudeKitCLIGuide** (NEW) - Show how to get started
5. **RecommendedWorkflows** (NEW) - Show what you can do
6. **SlashCommandsGuide** (NEW) - Show available commands
7. **UIUXProMax** (NEW) - Showcase flagship skill
8. Pricing (existing)
9. WaitlistForm (existing)

---

## Key Insights

1. **Flow Logic:** CLI Guide first (setup) -> Workflows (what to do) -> Commands (details) -> UI/UX (showcase)
2. **Existing Sections:** Remove or consolidate redundant ClaudeKit/Commands sections
3. **Import Order:** Import new components after existing ones
4. **Section Spacing:** All sections use py-24 for consistency

---

## Requirements

### Import New Components
- ClaudeKitCLIGuide.astro
- RecommendedWorkflows.astro
- SlashCommandsGuide.astro
- UIUXProMax.astro

### Remove/Consolidate
- Potentially remove old `ClaudeKit.astro` if redundant
- Potentially remove old `Commands.astro` if redundant
- Review after integration

### Maintain
- Existing Hero, Problem, Features sections
- Existing Pricing, WaitlistForm sections
- AmbientBackground, Header, Footer

---

## Architecture

### Current Structure
```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import AmbientBackground from '@/components/sections/AmbientBackground.astro';
import Header from '@/components/layout/Header.astro';
import Hero from '@/components/sections/Hero.astro';
import Problem from '@/components/sections/Problem.astro';
import Features from '@/components/sections/Features.astro';
import Pricing from '@/components/sections/Pricing.astro';
import ClaudeKit from '@/components/sections/ClaudeKit.astro';
import Commands from '@/components/sections/Commands.astro';
import WaitlistForm from '@/components/sections/WaitlistForm.astro';
import Footer from '@/components/layout/Footer.astro';
---
```

### Target Structure
```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import AmbientBackground from '@/components/sections/AmbientBackground.astro';
import Header from '@/components/layout/Header.astro';
import Hero from '@/components/sections/Hero.astro';
import Problem from '@/components/sections/Problem.astro';
import Features from '@/components/sections/Features.astro';
// NEW SECTIONS
import ClaudeKitCLIGuide from '@/components/sections/ClaudeKitCLIGuide.astro';
import RecommendedWorkflows from '@/components/sections/RecommendedWorkflows.astro';
import SlashCommandsGuide from '@/components/sections/SlashCommandsGuide.astro';
import UIUXProMax from '@/components/sections/UIUXProMax.astro';
// EXISTING
import Pricing from '@/components/sections/Pricing.astro';
import WaitlistForm from '@/components/sections/WaitlistForm.astro';
import Footer from '@/components/layout/Footer.astro';
---
```

---

## Files to Modify

### `/src/pages/index.astro`
- Add imports for 4 new components
- Add components in main content area
- Remove old ClaudeKit/Commands if redundant

---

## Implementation Steps

### Step 1: Read Current index.astro

First, review the current structure to understand exact import/usage patterns.

### Step 2: Update Imports

Add new imports after existing section imports:

```astro
---
// ... existing imports ...

// ClaudeKit Guide Sections (NEW)
import ClaudeKitCLIGuide from '@/components/sections/ClaudeKitCLIGuide.astro';
import RecommendedWorkflows from '@/components/sections/RecommendedWorkflows.astro';
import SlashCommandsGuide from '@/components/sections/SlashCommandsGuide.astro';
import UIUXProMax from '@/components/sections/UIUXProMax.astro';

// ... rest of existing imports ...
---
```

### Step 3: Update Main Content

Modify the main content area to include new sections:

```astro
<MainLayout
  title="VividKit - AI-Powered UI Kits"
  description="Professional UI components and intelligent design assistance"
>
  <AmbientBackground />
  <Header />

  <main>
    <Hero />
    <Problem />
    <Features />

    <!-- ClaudeKit Guide Sections -->
    <ClaudeKitCLIGuide />
    <RecommendedWorkflows />
    <SlashCommandsGuide />
    <UIUXProMax />

    <!-- Conversion Sections -->
    <Pricing />
    <WaitlistForm />
  </main>

  <Footer />
</MainLayout>
```

### Step 4: Remove Redundant Sections (If Applicable)

After integration, review if old `ClaudeKit` and `Commands` sections are needed:
- If content is duplicated, remove old imports and usage
- If old sections provide different value, keep them or merge content

### Step 5: Verify Navigation

Check if any navigation links need updating:
- Header nav links
- Internal anchor links (#cli-guide, #workflows, etc.)
- Footer links

---

## Todo Checklist

- [ ] Read current index.astro structure
- [ ] Add imports for 4 new components
- [ ] Add ClaudeKitCLIGuide after Features
- [ ] Add RecommendedWorkflows after CLI Guide
- [ ] Add SlashCommandsGuide after Workflows
- [ ] Add UIUXProMax after Slash Commands
- [ ] Review old ClaudeKit/Commands sections
- [ ] Remove redundant sections if applicable
- [ ] Test full page render
- [ ] Test scroll behavior
- [ ] Test navigation anchors
- [ ] Verify no TypeScript errors

---

## Success Criteria

- [ ] Page renders without errors
- [ ] All 4 new sections visible
- [ ] Sections appear in correct order
- [ ] No duplicate content
- [ ] Smooth scrolling between sections
- [ ] Navigation links work (if applicable)
- [ ] Build completes successfully

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Page too long | Consider lazy loading |
| Slow initial load | Optimize images/animations |
| Content overlap | Review and deduplicate |

---

## Security Considerations

- No new security concerns
- Static content integration only

---

## Verification Commands

```bash
# Start dev server
npm run dev

# Build to verify
npm run build

# Check for type errors
npm run typecheck
```

---

## Next Steps

After completing Phase 06:
1. Run full test suite
2. Test all breakpoints
3. Proceed to [Phase 07: Testing & Refinement](./phase-07-testing.md)
