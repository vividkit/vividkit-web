# Upcoming Enhancements

Tracking features that are temporarily disabled or need redesign.

---

## How CK Works Guide

### Additional Engineer Skills (Hidden)

**Status:** Only showing 4 MVP skills  
**File:** `src/components/guides/how-ck-works/workflow-scenario-selector.astro`  
**Variable:** `visibleEngineerSkills = ['brainstorm', 'plan', 'cook', 'fix']`

**Currently visible:**
- `/ck:brainstorm`
- `/ck:plan`
- `/ck:cook`
- `/ck:fix`

**Hidden (need verification):**
- `/ck:frontend-design`
- `/ck:ship`
- `/ck:code-review`
- `/ck:test`
- `/ck:deploy`
- `/ck:predict`
- `/ck:bootstrap`
- `/ck:security`
- `ck init`

**Action needed:**
- [ ] Verify workflow steps accuracy for each hidden skill
- [ ] Add Quick Ref infographics for remaining skills
- [ ] Add skill IDs to `visibleEngineerSkills` array to enable

**Note:** Marketing Kit shows all 8 skills (write, design, seo, campaign, social, email, persona, video) - no filter applied.

---

### Workflow Combos Tab (Hidden)

**Status:** Temporarily hidden  
**File:** `src/components/guides/how-ck-works/workflow-view-toggle.astro`  
**Flag:** `SHOW_COMBOS_TAB = false`

**Action needed:**
- [ ] Verify combo data accuracy
- [ ] Redesign combo visualization
- [ ] Re-enable by setting `SHOW_COMBOS_TAB = true`

**Related files:**
- `workflow-combo-grid.astro`
- `workflow-combo-card.astro`
- `workflow-combo-pipeline.astro`
- `src/data/guides/how-ck-works/workflow-combos.ts`

---

*Last updated: 2026-04-18*
