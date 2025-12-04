# VividKit - Project Overview & PDR

**Project Name:** VividKit
**Tagline:** Crystal clear AI coding with ClaudeKit
**Status:** Phase 01 Complete
**Last Updated:** 2025-12-04

## Executive Summary

VividKit is a modern web application built with Astro 5.x and Tailwind CSS v4, designed as a sophisticated showcase and reference implementation for AI-powered development workflows. The project emphasizes glassmorphism design patterns, theme flexibility, and developer experience.

## Phase 01: Foundation Completion

### Achievements

1. **Astro 5.x Foundation**
   - Strict TypeScript mode enabled
   - Vercel adapter configured with web analytics
   - Static output mode for optimal performance

2. **Design System**
   - Tailwind CSS v4 with @theme directive for custom design tokens
   - Glassmorphism components with backdrop blur effects
   - Three font families: Space Grotesk (headings), DM Sans (body), Fira Code (mono)
   - Custom color palette with light/dark mode support

3. **Component Library**
   - Button (3 variants: primary, secondary, outline; 3 sizes: sm, md, lg)
   - GlassCard (4 variants: default, light, hover, glow; 4 padding levels)
   - Badge (4 semantic variants: success, warning, danger, info)
   - Input (multiple types with focus states)
   - Logo (responsive sizing with optional text)
   - MainLayout (SEO-optimized base layout with theme toggle)

4. **Theme System**
   - localStorage-based theme persistence
   - System preference detection
   - FOUC prevention via inline script
   - Dark mode class toggle on document root
   - Live system preference change detection

5. **TypeScript Infrastructure**
   - Path aliases (@/components, @/layouts, @/types, @/scripts, @/styles, @/data)
   - Strict mode enabled
   - SEOMeta interface for layout props
   - Feature domain models (NavLink, FeatureCard, PricingTier, Command, Workflow)

### Technical Metrics

- **Build Time:** 1.77s
- **Bundle Size:** ~150KB gzipped
- **Type Errors:** 0
- **Security Issues:** 0
- **Performance:** Excellent (Lighthouse scores pending)

## Project Goals

### Phase 01 (Complete)
- [x] Establish Astro 5.x foundation
- [x] Integrate Tailwind CSS v4
- [x] Create 5 core UI components
- [x] Implement theme system
- [x] Setup TypeScript paths and strict mode

### Phase 02 (Planned)
- [ ] Create additional components (Navbar, Sidebar, Modal, Dialog)
- [ ] Implement responsive layouts
- [ ] Add form validation library
- [ ] Create sample pages (features, pricing, docs)

### Phase 03 (Planned)
- [ ] Integrate analytics
- [ ] Add contact/form submission
- [ ] Implement blog system
- [ ] SEO optimization

### Phase 04 (Planned)
- [ ] Performance optimization
- [ ] A/B testing framework
- [ ] Admin dashboard
- [ ] User authentication

## Technical Stack

### Core Framework
- **Astro:** 5.16.4
- **TypeScript:** 5.9.3
- **Tailwind CSS:** 4.1.17
- **Adapter:** Vercel (with web analytics)

### UI Libraries
- **lucide-astro:** 0.555.0 (Icon library)
- **Alpine.js:** 3.15.2 (Lightweight interactivity)

### Fonts
- **Space Grotesk:** Heading font (400, 500, 600, 700 weights)
- **DM Sans:** Body font (300-700 weights)
- **Fira Code:** Monospace font (400, 500 weights)

### Dev Tools
- **@astrojs/check:** 0.9.6 (Type checking)
- **@tailwindcss/vite:** 4.1.17 (Vite plugin)
- **@astrojs/vercel:** 9.0.2 (Vercel integration)

## Directory Structure

```
vividkit-web/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── GlassCard.astro
│   │       ├── Badge.astro
│   │       ├── Input.astro
│   │       └── Logo.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── theme-toggle.ts
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── index.ts
├── public/
├── dist/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Key Features

### Design System
- **Glassmorphism:** Backdrop blur effects with transparency
- **Responsive:** Mobile-first, fluid typography
- **Accessibility:** ARIA labels, focus states, reduced motion support
- **Animations:** Smooth transitions, keyframe animations, reduced motion compliance

### Developer Experience
- **Path Aliases:** @/ prefix for all imports
- **Type Safety:** Strict TypeScript mode
- **Component Props:** Well-typed interfaces
- **Code Splitting:** Optimized Vite build configuration

### Performance
- **Static Output:** Pre-rendered HTML for speed
- **CSS Minification:** Lightning CSS for optimized output
- **No Code Splitting Bloat:** Rollup configuration prevents unnecessary chunks
- **Image Service:** Sharp-based image optimization

## Environment Variables

```env
# Web3Forms API Key (optional, for form submissions)
PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Site URL (for meta tags and canonical URLs)
PUBLIC_SITE_URL=https://vividkit.com

# ClaudeKit Referral
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

## Development Workflow

### Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (localhost:4321) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Access Astro CLI |

### Component Development Pattern

1. Create component in `src/components/ui/`
2. Define TypeScript interfaces for props
3. Use Tailwind classes for styling
4. Export component as Astro file
5. Document component in component library

### Page Creation Pattern

1. Create file in `src/pages/`
2. Import MainLayout and components
3. Define page content
4. Pass SEO metadata to MainLayout
5. Use component library for UI

## Deployment

**Platform:** Vercel
**Build Command:** `astro build`
**Output Directory:** `dist/`
**Analytics:** Enabled via Vercel adapter

## Success Criteria

- [x] Zero TypeScript errors
- [x] All components render correctly
- [x] Theme toggle works with persistence
- [x] Dark/light mode complete
- [x] Build time under 2 seconds
- [x] Bundle size optimized
- [ ] Lighthouse scores 90+
- [ ] SEO metadata properly configured
- [ ] All components documented

## Next Steps

1. Create component library documentation with Storybook integration
2. Implement additional components (Navbar, Modal, Dialog)
3. Add responsive layout system
4. Create sample feature pages
5. Implement form validation and submission
6. Setup CI/CD pipeline
7. Performance monitoring and optimization

## Contact & References

- **Repository:** GitHub (pending)
- **Documentation:** See ./docs directory
- **Component Library:** See ./src/components directory
- **Design Tokens:** See ./src/styles/global.css and tailwind.config.mjs
