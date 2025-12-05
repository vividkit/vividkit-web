# Documentation Structure

**Last Updated:** 2025-12-06
**Purpose:** Guide to understanding the VividKit project documentation organization

## Documentation Directory Structure

```
docs/
├── README.md                           # Documentation overview
├── project-overview-pdr.md             # Product Development Requirements
├── code-standards.md                   # Coding standards and guidelines
├── codebase-summary.md                 # Comprehensive codebase overview
├── design-guidelines.md                # Design system and UI/UX guidelines
├── deployment-guide.md                 # Deployment instructions
├── system-architecture.md              # System architecture documentation
├── project-roadmap.md                  # Project roadmap and milestones
├── component-library.md                # Component documentation
├── guides-page-documentation.md        # Guides page specific docs
│
├── screenshots/                        # Visual documentation assets
│   ├── claudekit-desktop-1920x1080.png
│   ├── claudekit-mobile-375x812.png
│   ├── claudekit-tablet-768x1024.png
│   ├── claudekit-light-mode.png
│   ├── claudekit-dark-mode.png
│   ├── claudekit-landing-full.png
│   ├── desktop-view.png
│   ├── mobile-view.png
│   ├── tablet-view.png
│   ├── dark-mode.png
│   └── light-mode.png
│
└── reports/                            # Project reports and audits
    ├── Integration Summary
    │   └── claudekit-integration-summary-251206.md
    │
    ├── Phase Reports
    │   ├── docs-manager-251204-phase-03-guides-implementation.md
    │   ├── docs-manager-251205-phase01-claudekit.md
    │   ├── docs-manager-251205-phase-03-workflows-integration.md
    │   └── docs-manager-251205-phase04-slash-commands-integration.md
    │
    ├── Testing Reports
    │   ├── debugger-251205-claudekit-sections-testing.md
    │   ├── tester-251205-lighthouse-audit.md
    │   ├── tester-251206-animations-interactions-report.md
    │   ├── tester-251206-claudekit-integration-tests.md
    │   └── tester-251206-lighthouse-audit.md
    │
    └── Lighthouse Audits (JSON)
        ├── lighthouse-audit-251205.json
        ├── lighthouse-audit-251206.json
        ├── lighthouse-desktop-251206.json
        ├── lighthouse-mobile-251206.json
        ├── lighthouse-summary-251205.json
        └── lighthouse-summary-251206.json
```

## Documentation Categories

### 1. Core Documentation
**Purpose:** Essential project documentation for developers and stakeholders

- **README.md:** Quick start guide and project overview
- **project-overview-pdr.md:** Product Development Requirements with detailed specifications
- **code-standards.md:** Coding conventions, best practices, and style guides
- **codebase-summary.md:** Comprehensive technical overview of the entire codebase
- **system-architecture.md:** High-level architecture and system design
- **design-guidelines.md:** Design system, brand guidelines, and UI/UX principles
- **deployment-guide.md:** Step-by-step deployment instructions
- **project-roadmap.md:** Timeline, milestones, and future plans
- **component-library.md:** Component API documentation and usage examples
- **guides-page-documentation.md:** Specific documentation for the guides page

### 2. Visual Documentation
**Purpose:** Visual assets demonstrating the application

#### Screenshots
- **Device Views:** Desktop, mobile, tablet responsive designs
- **Theme Variations:** Light and dark mode demonstrations
- **Feature Showcases:** ClaudeKit integration highlights
- **Full Page Views:** Complete page layouts

### 3. Reports and Audits
**Purpose:** Project progress, testing results, and performance metrics

#### Integration Summary
- **claudekit-integration-summary-251206.md:** Complete ClaudeKit integration report

#### Phase Reports
Documents each development phase's completion:
- Phase 01: ClaudeKit setup and preparation
- Phase 02: CLI Guide integration
- Phase 03: Guides page implementation
- Phase 04: Slash Commands integration

#### Testing Reports
- **Debugger Reports:** Section-specific testing and debugging
- **Tester Reports:** Comprehensive testing including:
  - Integration tests
  - Lighthouse performance audits
  - Animation and interaction testing

#### Lighthouse Audits (JSON)
Raw Lighthouse audit data for:
- Performance metrics
- SEO analysis
- Best practices evaluation
- Accessibility compliance

## Naming Conventions

### Report Files
Format: `{role}-{YYMMDD}-{description}.md`
- **Role:** `docs-manager`, `tester`, `debugger`
- **Date:** YYMMDD format (e.g., 251206 for December 6, 2025)
- **Description:** Descriptive title in kebab-case

### Screenshot Files
Format: `{feature}-{view}-{size}.png`
- **Feature:** `claudekit`, `desktop`, `mobile`, etc.
- **View:** `view`, `mode`, `landing`
- **Size:** `1920x1080`, `375x812`, etc.

### Audit Files
Format: `lighthouse-{device/date}-{summary/audit}.{json/md}`
- **Type:** `lighthouse`
- **Identifier:** Device type or date
- **Format:** `json` for raw data, `md` for summary

## Documentation Maintenance

### Update Frequency
- **Core Docs:** Updated with each major feature or phase
- **Reports:** Created for each testing/audit cycle
- **Screenshots:** Updated with UI changes
- **Codebase Summary:** Updated after each significant change

### Review Process
1. **Developer Review:** Technical accuracy verification
2. **Design Review:** Visual documentation validation
3. **QA Review:** Testing report validation
4. **Stakeholder Review:** Business requirements alignment

### Version Control
- All documentation tracked in Git
- Major changes tagged with release versions
- Historical reports preserved for reference
- Current documentation always reflects latest state

## Access and Navigation

### Primary Documentation
- **Project README:** First stop for new developers
- **Codebase Summary:** Technical overview for developers
- **Project Overview PDR:** Business requirements for stakeholders
- **Design Guidelines:** Design system reference

### Testing and Quality
- **Latest Reports:** Check `docs/reports/` for most recent testing
- **Performance:** Look for latest Lighthouse audits
- **Integration:** Check integration summary for feature completions

### Visual Reference
- **Screenshots:** Visual demonstration of features
- **Component Library:** UI component examples
- **Design Guidelines:** Brand and design standards

## Documentation Tools

### Generation
- **Repomix:** Codebase compaction for analysis
- **Lighthouse:** Automated performance audits
- **Manual Testing:** Human verification and reporting

### Formats
- **Markdown:** Primary documentation format
- **JSON:** Structured data for audits
- **PNG:** High-quality screenshots
- **XML:** Codebase compaction files

## Best Practices

### Writing Guidelines
1. **Clarity First:** Write for the intended audience
2. **Consistency:** Use established formatting and terminology
3. **Examples First:** Show before explaining
4. **Progressive Disclosure:** Structure from simple to complex
5. **Maintenance Mindset:** Write for easy updates

### Visual Documentation
1. **High Quality:** Use clear, crisp screenshots
2. **Consistent Sizing:** Standardize image dimensions
3. **Descriptive Names:** Clear file naming
4. **Context:** Show relevant UI elements
5. **Dark/Light:** Document both themes when applicable

### Reporting
1. **Objective Data:** Include metrics and measurements
2. **Actionable Insights:** Provide recommendations
3. **Reproducibility:** Document testing methods
4. **Version Tracking:** Note codebase version tested
5. **Cross-Reference:** Link to related documentation

---

**Last Review:** 2025-12-06
**Next Review:** After Phase 07 completion
**Maintainer:** Documentation Manager