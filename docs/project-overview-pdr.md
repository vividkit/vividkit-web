# VividKit Web - Project Overview & Product Development Requirements

**Last Updated:** December 9, 2025
**Version:** 1.0.0
**Status:** Active Development

---

## Executive Summary

VividKit Web is the marketing and documentation site for **VividKit Desktop**—a visual GUI application for the ClaudeKit CLI. The website is built with **Astro 5.x SSG**, **Tailwind CSS v4**, **TypeScript**, and **Alpine.js**, with dual-language support (English/Vietnamese) and comprehensive CLI guides.

Currently, the website serves as:
1. **Product landing page** for the VividKit Desktop (currently in development)
2. **Educational hub** with 60+ documented CLI commands and workflows
3. **Skill guide repository** for ClaudeKit users

---

## Project Description

### Vision
Make AI coding accessible to developers of all skill levels by providing intuitive visual interfaces and comprehensive educational content for ClaudeKit CLI.

### Target Audience
- **Primary:** Developers learning ClaudeKit CLI (beginner to advanced)
- **Secondary:** Non-technical stakeholders wanting ClaudeKit insights
- **Tertiary:** Product decision-makers evaluating AI coding tools

### Key Value Propositions
- **Zero CMS dependency:** Content-driven via TypeScript (type-safe, version-controlled)
- **Multi-language from day one:** Native English/Vietnamese support
- **Performance-optimized:** Static generation, minimal JavaScript, edge-ready
- **Accessibility-first:** ARIA labels, semantic HTML, keyboard navigation
- **Dark mode native:** Theme toggle with system preference detection

---

## Core Features & Functionality

### 1. Landing Pages
- **Homepage** (`/`): Product showcase with hero, features, pricing, waitlist
- **Vietnamese homepage** (`/vi/`): Full localized experience
- **Responsive design:** Mobile-first across all screen sizes

### 2. Comprehensive CLI Documentation
- **CLI Guide** (`/guides`): Installation, setup, basic concepts
- **Commands Reference** (`/guides/commands`): 60+ slash commands categorized by difficulty
- **Workflows** (`/guides/workflows`): Recommended patterns (beginner/intermediate/advanced)
- **Skill Guides:**
  - UI/UX Pro Max (`/guides/uiux`)
  - Claude Code Switcher (`/guides/ccs`)
  - Session Resume (`/guides/resume`)
  - Debugging Tips (`/guides/fix-logs`)
  - Permissions Management (`/guides/permissions`)

### 3. Internationalization (i18n)
- **Supported languages:** English (default), Vietnamese
- **Routing:** Convention-based (`/` for English, `/vi/` for Vietnamese)
- **Coverage:** 866+ translation keys
- **Fallback:** Missing translations default to English

### 4. Interactive Elements
- **Dark/Light theme toggle** with localStorage persistence
- **Smooth anchor navigation** with dynamic header offset
- **Scroll-based animations** (fade-in-up on intersection)
- **Active navigation highlighting** during scroll
- **Form handling** via Web3Forms for waitlist signups

### 5. SEO & Site Structure
- **Dynamic robots.txt:** Search engine crawling rules
- **XML sitemap:** i18n-aware with hreflang tags
- **Open Graph tags:** Social media preview optimization
- **Semantic HTML:** Proper nav, main, section, footer tags

---

## Business Goals & Metrics

### Short-term (Next 3 months)
- Establish VividKit as the **go-to resource** for ClaudeKit CLI documentation
- Build **waitlist of 1000+ early access users** for desktop app
- Achieve **90%+ page load speed** (Lighthouse)
- Reach **500+ monthly active users**

### Medium-term (3-6 months)
- Launch **VividKit Desktop MVP** with visual dashboard
- Expand **skill guide library** to 15+ comprehensive tutorials
- Implement **user feedback loop** via analytics
- Drive **50% increase in ClaudeKit adoption** among early users

### Long-term (6-12 months)
- Establish **VividKit Desktop as industry standard** for AI coding
- Build **community-driven guide contributions**
- Monetize via **tiered pricing** (Pro features)
- Scale to **multi-language support** (Spanish, French, Chinese)

### Success Metrics
- **Acquisition:** Waitlist growth rate, organic traffic
- **Engagement:** Average session duration, guide view count
- **Conversion:** Waitlist signup rate, guide completion rate
- **Technical:** Core Web Vitals (LCP <2.5s, CLS <0.1, FID <100ms)

---

## Technical Requirements

### Functional Requirements (FR)

| ID | Category | Requirement | Priority |
|---|---|---|---|
| FR-1 | Content | Display responsive landing page with hero, features, pricing sections | P0 |
| FR-2 | Documentation | Provide searchable reference for 60+ CLI commands | P0 |
| FR-3 | i18n | Support English/Vietnamese with route-based switching | P0 |
| FR-4 | Forms | Capture waitlist signups with email validation | P0 |
| FR-5 | Navigation | Enable smooth anchor navigation with active highlighting | P1 |
| FR-6 | Theme | Provide dark/light mode toggle with persistence | P1 |
| FR-7 | SEO | Generate dynamic robots.txt and i18n-aware sitemap | P1 |
| FR-8 | Analytics | Track page views, user engagement, conversion funnels | P1 |
| FR-9 | Performance | Maintain <3s page load on 3G networks | P0 |
| FR-10 | Accessibility | WCAG 2.1 AA compliance on all pages | P0 |

### Non-Functional Requirements (NFR)

| ID | Category | Requirement | Target |
|---|---|---|---|
| NFR-1 | Performance | Largest Contentful Paint | <2.5s |
| NFR-2 | Performance | Cumulative Layout Shift | <0.1 |
| NFR-3 | Performance | First Input Delay | <100ms |
| NFR-4 | Performance | Build time | <60s |
| NFR-5 | Availability | Uptime SLA | 99.9% |
| NFR-6 | Security | HTTPS everywhere | Required |
| NFR-7 | Security | CSP headers | Required |
| NFR-8 | Accessibility | WCAG 2.1 Level AA | Required |
| NFR-9 | SEO | Mobile-friendly score | 90+/100 |
| NFR-10 | Maintainability | TypeScript strict mode | Required |

### Acceptance Criteria

**Landing Page**
- [ ] Hero section loads within 2 seconds
- [ ] All CTA buttons functional and trackable
- [ ] Mobile layout is fully responsive (320px+)
- [ ] Theme toggle persists across sessions

**CLI Guides**
- [ ] All 60+ commands display with descriptions
- [ ] Search/filter functionality works
- [ ] Code snippets are syntax-highlighted
- [ ] Navigation sidebar updates on scroll

**i18n**
- [ ] Language switcher redirects correctly
- [ ] All 866 translation keys are rendered
- [ ] Vietnamese content is professionally translated
- [ ] Fallback to English for missing translations

**Forms**
- [ ] Email validation prevents invalid submissions
- [ ] Success message displays after signup
- [ ] Web3Forms integration sends emails
- [ ] Rate limiting prevents spam

---

## Technical Stack & Architecture

### Frontend Framework
- **Astro 5.16.4:** Static Site Generation (SSG) with optional islands of interactivity
- **TypeScript 5.9.3:** Strict mode for type safety
- **Tailwind CSS 4.1.17:** Utility-first styling with dark mode support
- **Alpine.js 3.15.2:** Lightweight interactivity (form handling, DOM manipulation)

### Styling & UI
- **CSS Engine:** LightningCSS for minification
- **Fonts:** DM Sans (body), Fira Code (monospace), Space Grotesk (display)
- **Icons:** lucide-astro for consistent SVG icons
- **Dark Mode:** Selector-based (manual toggle + system preference)
- **Components:** 32 reusable components (6 UI, 11 sections, 10 guides, 2 layouts)

### Data Layer
- **Source:** TypeScript data files (no database)
- **Format:** Structured interfaces with strict types
- **Languages:** 14 data files with English/Vietnamese variants
- **Content:** 3 command categories, 2 pricing tiers, 5+ navigation structures

### Build & Deployment
- **Adapter:** @astrojs/vercel for edge-ready static deployment
- **Analytics:** Vercel Web Analytics integration
- **Output:** Static HTML/CSS/JS (no server-side code)
- **Code Splitting:** Bundled to prevent bloat

### Type System
- 13 core interfaces (NavLink, FeatureCard, Command, Workflow, etc.)
- Path aliases for clean imports (@/components, @/data, etc.)
- Strict TypeScript validation across all modules

---

## Component Architecture

### Layout Components (2)
| Component | Purpose | Key Props |
|---|---|---|
| **MainLayout** | Root HTML wrapper, navigation, footer | children, title, description |
| **GuidesLayout** | 2-column guide layout (sidebar + content) | children, sidebar, currentPage |

### Layout UI (3)
| Component | Purpose | Features |
|---|---|---|
| **Header** | Fixed navigation with theme/language toggle | Responsive, sticky positioning, mobile menu |
| **Footer** | Links, social, legal | Multi-column layout, dark mode aware |
| **AmbientBackground** | Animated gradient backgrounds | Performance-optimized, parallax effect |

### UI Components (6, Reusable)
| Component | Variants | Sizes | Usage |
|---|---|---|---|
| **Button** | primary, secondary, ghost | sm, md, lg | CTAs, form actions |
| **Badge** | default, success, warning, error | sm, md | Status indicators, tags |
| **GlassCard** | default, hover, active, gradient | compact, sm, md, lg | Containers with glassmorphism |
| **Logo** | icon-only, with-text, full | sm, md, lg | Branding throughout |
| **Input** | text, email, password | — | Form fields |
| **Select** | — | — | Dropdown selections |

### Section Components (11)
Hero, Features, Pricing, WaitlistForm, Commands, ClaudeKit, Problem, RecommendedWorkflows, SlashCommandsGuide, UIUXProMax, ClaudeKitCLIGuide

### Guide Components (10)
TabNavigation, TableOfContents, CLIGuide, CommandsGuide, WorkflowsGuide, UIUXGuide, CCSGuide, ResumeGuide, PermissionsGuide, FixLogsGuide

---

## Page Structure

### English Routes (/)
```
/                          → Homepage
/guides                    → CLI Guide landing
/guides/commands           → 60+ slash commands reference
/guides/workflows          → Recommended workflows
/guides/uiux               → UI/UX Pro Max skill
/guides/ccs                → Claude Code Switcher
/guides/resume             → Session resume
/guides/permissions        → Security & permissions
/guides/fix-logs           → Debugging strategies
```

### Vietnamese Routes (/vi/)
All pages duplicated with `/vi/` prefix for full localization.

### Special Routes
- `/robots.txt` → Dynamic SEO config
- `/sitemap.xml` → i18n-aware with hreflang

---

## Data Layer Details

### Core Data Files (5)
- **constants.ts:** Site config, email, social, API keys
- **features.ts:** Problem/solution marketing content
- **navigation.ts:** Nav links, footer categories
- **pricing.ts:** 2 tiers (Free ClaudeKit, Pro TBD)
- **commands.ts:** 3 categories (Beginner/Intermediate/Advanced)

### Guide Data Files (9)
- **cli-guide.ts:** Installation and setup steps
- **commands.ts:** All 60+ command definitions
- **workflows.ts:** Recommended patterns
- **uiux-guide.ts:** UI/UX Pro Max skill content
- Plus Vietnamese translations for each

---

## Client-Side Scripts (5 Modules)

| Script | Purpose | Performance |
|---|---|---|
| **form-handler.ts** | Web3Forms integration, validation | Async, non-blocking |
| **theme-toggle.ts** | Dark mode toggle, localStorage sync | Instant (no FOUC) |
| **smooth-scroll.ts** | Anchor navigation, header offset | RAF-optimized |
| **intersection-observer.ts** | Scroll animations | Efficient memory usage |
| **nav-scroll-highlight.ts** | Active nav item on scroll | RAF-optimized |

---

## Development Standards

### Code Organization
- **Path aliases:** Consistent imports (@/components, @/data, @/types)
- **File naming:** PascalCase components, camelCase utilities, snake_case data
- **Directory structure:** Layouts, components (guides/layout/sections/ui), data, pages, scripts, types
- **Type safety:** Strict TypeScript validation, no `any` types

### Component Patterns
- **Props-driven:** All components accept typed props
- **Slots pattern:** Content composition via Astro slots
- **Composition:** Reusable, single-responsibility components
- **Responsive:** Mobile-first design with Tailwind breakpoints

### i18n Convention
- **Route-based:** `/en/...` (default `/...`), `/vi/...`
- **Translation keys:** Nested structure (e.g., `nav.home`, `header.lang.en`)
- **TypeScript validation:** Strict key checking
- **Fallback:** Missing translations use English

### Performance Optimization
- **Static generation:** All pages pre-rendered at build time
- **CSS minification:** LightningCSS for optimal output
- **Image optimization:** Sharp for responsive images
- **No code splitting:** Single bundle to prevent overhead
- **Script deferral:** Alpine.js loaded asynchronously

---

## Development Roadmap

### Current Phase (Q4 2024)
- [x] Landing page with hero, features, pricing
- [x] 60+ CLI commands reference
- [x] 5+ comprehensive skill guides
- [x] English/Vietnamese i18n support
- [x] Dark mode toggle
- [x] Waitlist form integration

### Next Phase (Q1 2025)
- [ ] VividKit Desktop MVP launch
- [ ] Command search/filter functionality
- [ ] Community guide contributions
- [ ] Analytics dashboard
- [ ] Performance monitoring

### Future Phases (Q2-Q4 2025)
- [ ] Expand language support (Spanish, French, Chinese)
- [ ] Monetization via tiered pricing
- [ ] AI-powered guide recommendations
- [ ] Integration with ClaudeKit CLI
- [ ] Community forum/discussions

---

## Success Criteria

### Launch Success
- [x] All pages load in <3s on 3G
- [x] Mobile score 90+/100 (Lighthouse)
- [x] WCAG 2.1 AA compliance
- [x] 0 console errors in production

### Growth Metrics (30 days)
- [ ] 500+ unique users
- [ ] 50% returning visitor rate
- [ ] 20% waitlist signup conversion
- [ ] <2s average page load time

### 90-Day Goals
- [ ] 5,000+ waitlist signups
- [ ] 10,000 monthly page views
- [ ] 1,000+ guide completions
- [ ] 95+ Lighthouse mobile score

---

## Constraints & Dependencies

### External Dependencies
- **Web3Forms API:** Email form submissions
- **Vercel deployment:** Edge hosting and analytics
- **Lucide icons:** SVG icon library
- **Google Fonts:** Font delivery (via @fontsource)

### Technical Constraints
- **Static generation:** No dynamic server-side logic
- **Package size:** Keep Alpine.js scripts minimal
- **Build time:** Must complete in <60 seconds
- **Browser support:** Modern browsers (ES2022+)

### Business Constraints
- **Budget:** No paid services beyond Vercel
- **Timeline:** Desktop MVP by Q1 2025
- **Team:** Single developer with design input
- **Content:** Must maintain English/Vietnamese parity

---

## Risk Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| VividKit Desktop delays | Medium | Website continues standalone value |
| i18n translation quality | Medium | Use native speakers, community review |
| Performance degradation | High | Monitor Core Web Vitals, automated testing |
| Security vulnerabilities | High | CSP headers, input validation, HTTPS |
| Waitlist fatigue | Medium | Email cadence, exclusive previews |

---

## References & Links

- **Website:** https://vividkit.dev
- **ClaudeKit CLI:** https://github.com/mrgoonie/claudekit-cli
- **Claude Code:** https://claude.ai/code
- **Astro Docs:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com

---

## Unresolved Questions

1. What are the final pricing tiers and features for VividKit Pro?
2. Timeline for VividKit Desktop MVP launch?
3. Target audience for additional language support (priority order)?
4. Monetization strategy beyond desktop app (courses, marketplace)?
5. Community contribution guidelines for guides?
