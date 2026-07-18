# What is VividKit?

**Last Updated:** July 18, 2026
**Document Type:** Architecture Overview
**Status:** Active

---

## 1. Executive Summary

**VividKit** là một dự án dual-purpose nhằm democratize AI coding tools:

### A. VividKit Desktop (Đang phát triển)
- **Định nghĩa:** Visual Intelligence Layer cho ClaudeKit CLI
- **Mục đích:** Chuyển đổi AI coding commands thành GUI trực quan
- **Target users:** Developers (tất cả skill levels), PMs, designers, non-technical stakeholders

### B. VividKit Web (Production)
- **Định nghĩa:** Marketing & documentation site cho VividKit Desktop
- **Tech stack:** Astro 7.1.0 SSG + Tailwind CSS 4.3.3 + TypeScript + Alpine.js
- **Vai trò hiện tại:**
  1. Product landing page (waitlist collection)
  2. Educational hub (60+ ClaudeKit CLI commands)
  3. Comprehensive skill guides
  4. Glassmorphism design showcase
  5. Performance-optimized static site

---

## 2. VividKit Desktop - Architectural Vision

### Core Value Proposition
*"ClaudeKit's power, now with eyes."*

### Key Capabilities (MVP Features)

**1. Visual Catalog & Discovery**
- Browse agents/skills/commands visually
- No markdown file hunting
- Searchable, filterable capability explorer

**2. Persistent Visual Dashboards**
- Live execution monitoring (graphs, timelines)
- Token usage visualization
- Agent performance metrics
- Progress tracking survives terminal closure

**3. Run History & Comparison**
- Archive all past agent executions
- Side-by-side run comparisons
- Pattern recognition across sessions
- Execution timeline visualization

**4. Syntax-Free Interaction**
- GUI-driven agent launching (zero command memorization)
- Visual parameter configuration
- Point-and-click workflow building

**5. Non-Technical Accessibility**
- Stakeholder-friendly interface
- Read-only views for team members
- Visual summaries of capabilities/results

**6. Auto-Update ClaudeKit Projects**
- Automatic sync with latest ClaudeKit updates
- Background updates + changelog notifications
- Zero manual `update/init` commands

**7. Integrated CCS Delegation**
- Built-in Claude Code Switcher
- Switch between Claude, Gemini, Codex instantly
- Multi-account management
- One-click task delegation (cost optimization)

---

## 3. VividKit Web - Technical Architecture

### 3.1 Technology Stack

**Frontend Framework**
- Astro 7.1.0: Static Site Generation
- TypeScript 5.9.3: Strict mode type safety
- Tailwind CSS 4.3.3: Utility-first styling
- Alpine.js 3.15.2: Lightweight interactivity

**Styling & UI**
- LightningCSS: CSS minification
- Custom glassmorphism design system
- Three-font typography: DM Sans (body), Fira Code (mono), Space Grotesk (display)
- lucide-astro: SVG icons

**Data Layer**
- TypeScript data files (no database)
- 14 data files with i18n variants
- Structured interfaces với strict types

**Build & Deployment**
- @astrojs/vercel adapter
- Edge-ready static deployment
- Vercel Web Analytics integration

### 3.2 Component Architecture

**33 reusable components:**
- 3 layouts (MainLayout, GuidesLayout, GuideLayout)
- 8 UI components (Button, Badge, GlassCard, etc.)
- 12 section components (Hero, Features, Pricing, etc.)
- 14 guide components (TabNavigation, CLI/Commands/Workflows guides, etc.)

**Architectural Patterns:**
- Props-driven design
- Astro slots for composition
- Single-responsibility principle
- Mobile-first responsive design

### 3.3 Internationalization

**Dual-language support:**
- English (default `/`)
- Vietnamese (`/vi/`)
- 866+ translation keys
- Route-based switching
- Fallback to English for missing translations

### 3.4 Performance Architecture

**Optimization Strategy:**
- Static generation (all pages pre-rendered)
- LightningCSS minification
- Sharp image optimization
- Single bundle (no code splitting overhead)
- Async Alpine.js loading

**Core Web Vitals Targets:**
- LCP: <2.5s
- CLS: <0.1
- FID: <100ms

---

## 4. Design Recommendations

### 4.1 VividKit Desktop Architecture

**Recommended Stack:**
- **Framework:** Electron hoặc Tauri (Rust-based, lighter)
- **Frontend:** React/Vue với TypeScript
- **State Management:** Zustand hoặc Pinia
- **Data Persistence:** SQLite (local) + IndexedDB (cache)
- **CLI Integration:** Child process spawning + stdio streams
- **Real-time Monitoring:** WebSocket hoặc Server-Sent Events

**Architecture Pattern:**
```
┌─────────────────────────────────────┐
│   VividKit Desktop (Electron/Tauri) │
├─────────────────────────────────────┤
│  UI Layer (React/Vue + TypeScript)  │
│  ├─ Visual Catalog Explorer         │
│  ├─ Live Dashboard Monitors         │
│  └─ Run History Viewer              │
├─────────────────────────────────────┤
│  Business Logic Layer               │
│  ├─ CLI Process Manager             │
│  ├─ Token Usage Analytics           │
│  ├─ CCS Profile Manager             │
│  └─ Auto-Update Service             │
├─────────────────────────────────────┤
│  Data Layer                         │
│  ├─ SQLite (persistent history)     │
│  ├─ IndexedDB (cache)               │
│  └─ FS (ClaudeKit project files)    │
├─────────────────────────────────────┤
│  Integration Layer                  │
│  ├─ ClaudeKit CLI (child process)   │
│  ├─ CCS CLI (model switching)       │
│  └─ File System Watcher             │
└─────────────────────────────────────┘
```

### 4.2 VividKit Web Enhancements

**Current Strengths:**
- ✅ Astro SSG cho performance tối ưu
- ✅ TypeScript strict mode
- ✅ i18n from day one
- ✅ Glassmorphism design system
- ✅ Zero CMS dependency

**Opportunities:**
- **Search Functionality:** Implement Pagefind hoặc Algolia
- **Analytics:** Thêm user behavior tracking (Plausible/Umami)
- **Community:** Comment system (giscus) cho guides
- **Content:** MDX support cho interactive docs
- **Performance:** Astro Image Optimization directives

---

## 5. Technology Guidance

### 5.1 Desktop App Technology Decision

**Option A: Electron**
- **Pros:** Mature ecosystem, Chromium-based, npm packages support
- **Cons:** Heavy bundle size (100MB+), resource-intensive

**Option B: Tauri (RECOMMENDED)**
- **Pros:**
  - Rust-based (secure, fast, tiny bundle ~10MB)
  - Uses system WebView (không embed Chromium)
  - Native performance
  - Smaller memory footprint
- **Cons:**
  - Newer ecosystem
  - Rust learning curve cho contributors

**Recommendation:** **Tauri** cho MVP (performance + bundle size critical cho developer tools)

### 5.2 Web Technology Validation

**Current stack alignment:**
- ✅ Astro SSG: Optimal cho static docs/marketing
- ✅ Tailwind v4: Future-proof, performance improvements
- ✅ Alpine.js: Right choice cho minimal interactivity
- ✅ TypeScript strict: Prevents runtime errors

**No changes needed** - stack đã optimized cho use case.

### 5.3 Integration Strategy

**ClaudeKit CLI Communication:**
```typescript
// Desktop app spawns CLI as child process
const { spawn } = require('child_process');
const cli = spawn('claude-code', ['--agent', 'scout'], {
  cwd: projectPath,
  stdio: ['pipe', 'pipe', 'pipe']
});

// Stream stdout/stderr to dashboard
cli.stdout.on('data', (chunk) => {
  dashboard.appendLog(chunk.toString());
  tokenTracker.updateUsage(parseTokens(chunk));
});
```

---

## 6. Implementation Strategy

### Phase 1: MVP Foundation (Q1 2025)
1. **Desktop Shell:** Tauri app với basic UI
2. **CLI Integration:** Process spawning + stdio parsing
3. **Visual Catalog:** Parse ClaudeKit config files
4. **Live Dashboard:** Real-time token/progress monitoring

### Phase 2: Core Features (Q2 2025)
1. **Run History:** SQLite persistence + search
2. **CCS Integration:** Profile management UI
3. **Auto-Update:** Background ClaudeKit sync
4. **Syntax-Free UI:** Visual parameter builders

### Phase 3: Advanced Features (Q3 2025)
1. **Side-by-Side Comparisons:** Diff viewer cho runs
2. **Pattern Recognition:** ML-based recommendations
3. **Team Features:** Read-only sharing modes
4. **Performance Analytics:** Long-term metrics

### Web Evolution (Parallel)
- **Q1:** Command search/filter
- **Q2:** Community contributions
- **Q3:** AI-powered guide recommendations

---

## 7. Scalability Considerations

### Desktop App Scale
- **Local-first architecture:** No server dependency
- **Lightweight database:** SQLite handles 10k+ run records
- **Lazy loading:** Virtual scrolling cho large command lists
- **Resource management:** Limit concurrent CLI processes

### Web Scale
- **Static CDN:** Vercel Edge handles millions of requests
- **Build optimization:** Astro partial hydration prevents bloat
- **i18n scaling:** Add languages without architecture changes
- **Analytics:** Vercel Analytics scales automatically

---

## 8. Risk Analysis

### Desktop Development Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Tauri learning curve | Medium | Start với Electron prototype, migrate later |
| CLI parsing fragility | High | Robust stdout/stderr parsing + error handling |
| Cross-platform testing | Medium | CI/CD với macOS/Windows/Linux runners |
| Auto-update complexity | Medium | Use Tauri's built-in updater |

### Web Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| i18n translation quality | Medium | Native speakers + community review |
| Performance degradation | High | Core Web Vitals monitoring + budgets |
| Waitlist fatigue | Medium | Exclusive previews + email cadence |
| Content staleness | Low | Automated ClaudeKit changelog sync |

---

## 9. Next Actions

### Immediate (This Week)
1. ✅ **Architecture documentation complete**
2. **Desktop MVP Decision:** Finalize Tauri vs Electron
3. **Prototype:** Basic Tauri shell + CLI spawning POC
4. **Web:** Add command search functionality

### Short-term (Next Month)
1. **Desktop:** Visual catalog UI mockups
2. **Desktop:** Token parsing + dashboard wireframes
3. **Web:** Community contribution guidelines
4. **Web:** Analytics dashboard setup

### Strategic (Q1 2025)
1. **Desktop MVP Launch:** Core features operational
2. **Web:** Search/filter live
3. **Integration:** CCS profile management
4. **Marketing:** Waitlist nurture campaigns

---

## Unresolved Questions

1. **Desktop pricing model:** Free tier vs Pro features split?
2. **CCS integration depth:** Manage credentials in VividKit or delegate to CCS?
3. **Team features priority:** Solo developers first or multi-user from MVP?
4. **ClaudeKit partnership:** Official integration vs third-party tool?
5. **Monetization timeline:** When to introduce paid tiers?

---

## Summary

**VividKit = Visual layer cho ClaudeKit CLI ecosystem**

- **Desktop:** GUI wrapper cho power users + non-technical stakeholders
- **Web:** Educational hub + marketing engine
- **Together:** Democratize AI coding tools

### Key Differentiators

1. **Visual Intelligence:** Transform CLI commands thành intuitive GUI
2. **Persistent Dashboards:** Monitoring survives terminal closure
3. **Zero Syntax Required:** Point-and-click workflow building
4. **Multi-stakeholder:** Accessible to developers AND non-technical users
5. **Cost Optimization:** Integrated CCS delegation cho AI model switching

### Business Value

- **For Developers:** Reduce cognitive load, visual debugging, faster workflows
- **For Teams:** Transparent AI agent operations, stakeholder visibility
- **For Organizations:** Cost control via CCS delegation, productivity gains

---

**References:**
- Website: https://vividkit.dev
- ClaudeKit CLI: https://github.com/mrgoonie/claudekit-cli
- Claude Code: https://claude.ai/code
