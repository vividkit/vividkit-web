# Phase 03: Guides Page

**Timeline:** Days 6-7
**Goal:** Create guides page with tabbed navigation system

---

## Overview

Build guides page with 4 tabs: CLI Getting Started, Recommended Workflows, Slash Commands Reference, UI/UX Pro Max. Use Alpine.js for tab switching.

**Success Criteria:**
- Tab switching works without page reload
- All 4 tabs display correct content
- Code blocks styled and copy-pasteable
- Sticky tab navigation on scroll
- Responsive mobile tab navigation

---

## Components to Create

1. **TabNavigation.astro** - Tab button switcher with Alpine.js
2. **CLIGuide.astro** - 3-step quick start guide
3. **WorkflowsGuide.astro** - 4 workflow cards
4. **CommandsGuide.astro** - 6 command category grids
5. **UIUXGuide.astro** - Magic phrase + examples + stats

---

## Data Files to Create

**`src/data/guides/cli-guide.ts`**
```typescript
export const cliSteps = [
  {
    number: 1,
    title: 'Install ClaudeKit CLI',
    command: '$ npm install -g claudekit-cli',
    note: 'Verify: ck --version',
    color: 'blue'
  },
  // ... steps 2-3
];
```

**`src/data/guides/workflows.ts`**
```typescript
export const workflows = [
  {
    title: 'Build a New Feature',
    level: 'beginner',
    duration: '~15-30 min',
    stepCount: 4,
    steps: [
      { command: '/brainstorm', description: 'Explore ideas' },
      // ... 3 more steps
    ],
    borderColor: 'border-purple-500/20'
  },
  // ... 3 more workflows
];
```

**`src/data/guides/commands.ts`**
```typescript
export const commandCategories = [
  {
    name: 'Planning',
    icon: '📋',
    color: 'purple',
    commands: [
      { command: '/brainstorm', description: 'Explore ideas' },
      // ...
    ]
  },
  // ... 5 more categories
];
```

**`src/data/guides/uiux-guide.ts`**
```typescript
export const uiuxExamples = [
  {
    level: 'beginner',
    prompt: 'Using ui-ux-pro-max skill, create a landing page for my yoga studio with calming colors'
  },
  // ... 2 more examples
];

export const uiuxStats = [
  { value: '50', label: 'UI Styles', sublabel: 'Glassmorphism, Minimalism, etc.' },
  // ... 3 more stats
];
```

---

## Tab System Implementation

### Option A: Alpine.js (Recommended)

**Install:**
```bash
npm install alpinejs
```

**Add to MainLayout.astro:**
```html
<script>
  import Alpine from 'alpinejs';
  window.Alpine = Alpine;
  Alpine.start();
</script>
```

**TabNavigation.astro:**
```astro
<div x-data="{ activeTab: 'cli' }" class="sticky top-[73px] z-40 glass-card">
  <div class="flex gap-2 py-3 overflow-x-auto">
    <button
      @click="activeTab = 'cli'"
      :class="activeTab === 'cli' ? 'active' : ''"
      class="tab-btn"
    >
      🚀 CLI Getting Started
    </button>
    <!-- Repeat for workflows, commands, uiux -->
  </div>
</div>
```

**Tab Content:**
```astro
<div x-show="activeTab === 'cli'" class="tab-content">
  <CLIGuide />
</div>
<!-- Repeat for other tabs -->
```

### Option B: Pure CSS (Alternative)

Use `:target` pseudo-class + URL hashes:
```css
.tab-content { display: none; }
.tab-content:target { display: block; }
```

---

## Code Block Styling

**Use Prism or Shiki for syntax highlighting:**

```astro
---
// Astro's built-in Shiki
---

<div class="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
  <code class="text-emerald-600 dark:text-emerald-400">
    $ npm install -g claudekit-cli
  </code>
</div>
```

**Or use `<pre>` with Shiki:**
```javascript
// astro.config.mjs
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      langs: ['bash', 'javascript', 'typescript']
    }
  }
});
```

---

## Page Structure

**`src/pages/guides.astro`**
```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import Header from '@/components/layout/Header.astro';
import Footer from '@/components/layout/Footer.astro';
import TabNavigation from '@/components/guides/TabNavigation.astro';
import CLIGuide from '@/components/guides/CLIGuide.astro';
// ... other guides
---

<MainLayout
  title="VividKit Guides - ClaudeKit Documentation"
  description="Complete guides for using ClaudeKit effectively: CLI setup, workflows, slash commands, and UI/UX Pro Max skill."
  canonical="/guides"
>
  <Header />

  <TabNavigation />

  <main class="max-w-6xl mx-auto px-6 py-8">
    <div x-data="{ activeTab: 'cli' }">
      <div x-show="activeTab === 'cli'" class="space-y-8">
        <CLIGuide />
      </div>
      <!-- Repeat for other tabs -->
    </div>
  </main>

  <Footer />
</MainLayout>
```

---

## Testing Checklist

- [ ] Tab buttons switch content
- [ ] Active tab highlighted
- [ ] Tab navigation sticky on scroll
- [ ] All 4 tab contents render
- [ ] CLI guide shows 3 steps correctly
- [ ] Workflow cards show 4 workflows
- [ ] Command categories show 6 grids
- [ ] UI/UX guide shows examples + stats
- [ ] Code blocks styled and copy-pasteable
- [ ] Tab state persists during session (optional)
- [ ] Responsive mobile (tabs scroll horizontally)
- [ ] "Back to Home" link in footer works

---

## Deliverables

- [x] Complete guides page (`src/pages/guides.astro`)
- [x] TabNavigation component (Alpine.js)
- [x] CLIGuide component
- [x] WorkflowsGuide component
- [x] CommandsGuide component
- [x] UIUXGuide component
- [x] All guide data files
- [x] Code block styling
- [x] Tab system functional

---

## Phase Status

**Status:** ✅ DONE - Phase 03 completed successfully
**Completion Date:** 2025-12-04
**Duration:** 2 days (as planned)

---

## Next Phase

→ **Phase 04: Polish & Deploy** (Days 8-10)

---

## Code Review Status

**Status:** ✅ COMPLETED - Phase 03 implementation reviewed
**Code Review Report:** `/plans/251204-1701-vividkit-marketing-website/reports/code-reviewer-251204-guides-page-review.md`
**Review Summary:** All requirements met, no critical issues found, approved with minor enhancements recommended
**Key Findings:** No security vulnerabilities, good performance, clean architecture following YAGNI/KISS/DRY principles
