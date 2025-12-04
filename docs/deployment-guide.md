# Deployment Guide

**Version:** 1.0
**Last Updated:** 2025-12-04
**Status:** Phase 01 Complete

## Table of Contents

1. [Quick Start](#quick-start)
2. [Development Setup](#development-setup)
3. [Building for Production](#building-for-production)
4. [Vercel Deployment](#vercel-deployment)
5. [Environment Configuration](#environment-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Performance Monitoring](#performance-monitoring)

---

## Quick Start

### Prerequisites

- Node.js 18+ (check with `node --version`)
- npm 9+ (check with `npm --version`)
- Git (for version control)

### Initial Setup

```bash
# 1. Clone repository
git clone <repository-url>
cd vividkit-web

# 2. Install dependencies
npm install

# 3. Create local environment file
cp .env.example .env.local

# 4. Start development server
npm run dev

# 5. Open http://localhost:4321 in browser
```

### Available Commands

```bash
npm run dev      # Start local dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Access Astro CLI
```

---

## Development Setup

### Editor Configuration

**VS Code Extensions (Recommended):**
```json
{
  "extensions": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "TheLarkIssues.theme-switch"
  ]
}
```

**VS Code Settings:**
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[astro]": {
    "editor.defaultFormatter": "astro-build.astro-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true
}
```

### Local Environment Variables

**`.env.local` (not committed):**
```env
# Required
PUBLIC_SITE_URL=http://localhost:4321

# Optional
PUBLIC_WEB3FORMS_KEY=your_test_key_here
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

### Development Workflow

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Type checking (optional)
npm run astro check -- --watch

# Make code changes - auto-reload enabled
# Navigate to http://localhost:4321 in browser
```

### Hot Module Replacement (HMR)

Astro provides instant updates:
- Component changes: Instant HMR
- Style changes: Live reload
- Script changes: Page refresh needed
- Content changes: Instant HMR

---

## Building for Production

### Local Build Testing

```bash
# 1. Build production bundle
npm run build

# Expected output:
# Build time: ~1.77s
# Bundle size: ~150KB gzipped
# Type errors: 0

# 2. Preview production build
npm run preview

# Navigate to http://localhost:4321
# Test in production build environment
```

### Build Artifacts

**Generated files in `./dist/`:**
```
dist/
├── index.html          # Home page
├── _astro/
│   ├── [hash].css      # Minified CSS
│   ├── [hash].js       # Minified JavaScript
│   └── [hash].[ext]    # Assets
├── og-image.png        # Open Graph image
└── favicon.svg         # Favicon
```

### Build Configuration

**Optimization settings (in `astro.config.mjs`):**
```javascript
{
  output: 'static',           // Pre-render all pages
  vite: {
    build: {
      cssMinify: 'lightningcss', // Efficient CSS
      rollupOptions: {
        output: {
          manualChunks: undefined  // Single bundle
        }
      }
    }
  }
}
```

### Build Performance

| Metric | Value |
|--------|-------|
| Build Time | ~1.77s |
| Bundle Size | ~150KB gzipped |
| Type Errors | 0 |
| Security Issues | 0 |

---

## Vercel Deployment

### Automatic Deployment Setup

**Option 1: GitHub Integration (Recommended)**

1. Push repository to GitHub
2. Go to https://vercel.com/new
3. Select "Import Git Repository"
4. Search for your repository
5. Click "Import"
6. Configure project settings:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Add environment variables (see below)
8. Click "Deploy"

**Option 2: Manual Deployment**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy project
vercel

# Or deploy with environment
vercel --prod
```

### Environment Variables on Vercel

1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add variables:

```
Name: PUBLIC_SITE_URL
Value: https://vividkit.com
Environments: Production, Preview, Development

Name: PUBLIC_WEB3FORMS_KEY
Value: your_api_key
Environments: Production

Name: PUBLIC_CLAUDEKIT_REFERRAL_URL
Value: https://claudekit.com?ref=vividkit
Environments: Production, Preview, Development
```

### Deployment Workflow

```
git push origin main
  ↓
GitHub Webhook triggered
  ↓
Vercel receives notification
  ↓
Install dependencies (npm install)
  ↓
Run build (npm run build)
  ↓
Upload dist/ to CDN
  ↓
Automatically assigned URL: https://<project>.vercel.app
  ↓
Production URL: https://vividkit.com (if custom domain)
```

### Domain Configuration

**Adding Custom Domain:**

1. Go to Vercel project "Domains"
2. Enter domain: `vividkit.com`
3. Choose verification method:
   - **CNAME** (subdomain): Easier, recommended for subdomains
   - **Nameservers** (apex): Full DNS control
4. Follow verification instructions
5. Wait for DNS propagation (5-30 minutes)

**DNS Example (using CNAME):**
```
vividkit.com    CNAME    cname.vercel.com
www.vividkit.com CNAME   vividkit.com
```

### Preview Deployments

Each pull request gets automatic preview deployment:

1. Create feature branch
2. Push to GitHub
3. Open pull request
4. Vercel creates preview URL
5. Review changes at preview URL
6. Merge to main for production

---

## Environment Configuration

### Required Variables

**`PUBLIC_SITE_URL`** (Required)
- Development: `http://localhost:4321`
- Preview: `https://<preview>.vercel.app`
- Production: `https://vividkit.com`
- Used for: Meta tags, canonical URLs, social sharing

### Optional Variables

**`PUBLIC_WEB3FORMS_KEY`** (Optional)
- Get from: https://web3forms.com
- Used for: Form submissions
- Keep secure: Don't commit to repository

**`PUBLIC_CLAUDEKIT_REFERRAL_URL`** (Optional)
- Example: `https://claudekit.com?ref=vividkit`
- Used for: Referral links, CTAs
- Format: Full URL with query parameters

### Configuration Files

**`.env.example` (committed):**
```env
# Web3Forms API Key (get from web3forms.com)
PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Site URL (for meta tags)
PUBLIC_SITE_URL=https://vividkit.com

# ClaudeKit Referral URL
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

**`.env.local` (not committed):**
```bash
# Copy from .env.example and fill in your values
cp .env.example .env.local

# Edit .env.local with your values
nano .env.local
```

### Accessing Variables in Code

```astro
---
// In Astro components (.astro files)
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
const formKey = import.meta.env.PUBLIC_WEB3FORMS_KEY;
---

// Only PUBLIC_ prefixed variables are exposed to client
// Other variables remain private to build process
```

### TypeScript Support

```typescript
// In TypeScript files
const config = {
  siteUrl: import.meta.env.PUBLIC_SITE_URL,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};
```

---

## Troubleshooting

### Common Issues

#### 1. Build Fails with TypeScript Errors

```bash
# Check TypeScript errors
npm run astro check

# Fix: Ensure all files follow type safety
# - No implicit any types
# - Proper interface definitions
# - Correct import paths

# Clear cache and rebuild
rm -rf node_modules/.vite
npm run build
```

#### 2. Development Server Won't Start

```bash
# Ensure port 4321 is available
lsof -i :4321

# Kill process using port if needed
kill -9 <PID>

# Start dev server
npm run dev
```

#### 3. Vercel Build Fails

```
Common causes:
- Environment variables not set
- Incorrect build command
- Output directory wrong
- TypeScript errors

Solution:
1. Check build logs in Vercel dashboard
2. Run npm run build locally
3. Verify .env variables are set
4. Check astro.config.mjs settings
```

#### 4. Theme Toggle Not Working

```bash
# Check browser console for errors
# Verify theme-toggle.ts is loaded
# Test localStorage:
# localStorage.getItem('theme')

# Ensure MainLayout is wrapping page
# Check that dark class is applied to html element
```

#### 5. Styles Not Applied

```bash
# Clear Tailwind cache
rm -rf .astro

# Rebuild
npm run build

# Verify content paths in tailwind.config.mjs:
# content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=astro:* npm run build

# Check Astro version
npm ls astro

# Validate configuration
npm run astro check
```

### Support Resources

- **Astro Docs:** https://docs.astro.build
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **TypeScript Docs:** https://www.typescriptlang.org/docs/

---

## Performance Monitoring

### Vercel Analytics

**Dashboard Access:**
1. Go to Vercel project
2. Click "Analytics" tab
3. View performance metrics

**Key Metrics:**
- Page load time (all pages)
- Core Web Vitals (LCP, FID, CLS)
- Geographic distribution
- Browser/device breakdown
- Referrer sources

### Web Vitals

**Target Scores:**
| Metric | Target | Description |
|--------|--------|-------------|
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |

### Lighthouse Testing

**Local Testing:**
```bash
# Build for production
npm run build

# Preview build
npm run preview

# Open in Chrome DevTools
# Audits → Run audit
```

**CI/CD Integration (Phase 2):**
- Integrate Lighthouse CI
- Set performance budgets
- Fail builds on regressions

### Bundle Analysis

**Current Metrics:**
```
CSS: ~12KB (minified)
JS: ~8KB (theme script only)
Total gzipped: ~150KB
```

**Monitor with:**
```bash
# Check build output
npm run build

# Analyze bundle (if bundler-visualizer installed)
npm run build -- --analyze
```

### Performance Optimization Checklist

- [x] Static generation enabled
- [x] CSS minification (Lightning CSS)
- [x] No unnecessary JavaScript
- [x] Self-hosted fonts
- [x] Vercel CDN enabled
- [ ] Image optimization (Phase 2)
- [ ] Lazy loading (Phase 2)
- [ ] Code splitting strategy (Phase 2)

---

## Deployment Checklist

### Pre-Deployment

- [ ] `npm run build` completes successfully
- [ ] `npm run preview` works correctly
- [ ] No TypeScript errors
- [ ] Dark mode toggle works
- [ ] Responsive design verified
- [ ] All links working
- [ ] Images optimized
- [ ] Meta tags correct

### Vercel Deployment

- [ ] GitHub repository created
- [ ] Vercel project connected
- [ ] Environment variables set
- [ ] Build command configured
- [ ] Output directory correct
- [ ] Preview deployments working
- [ ] Custom domain configured
- [ ] DNS propagated

### Post-Deployment

- [ ] Live site loads correctly
- [ ] All pages accessible
- [ ] Theme toggle working
- [ ] Analytics enabled
- [ ] No console errors
- [ ] Mobile responsiveness verified
- [ ] Lighthouse audit passing
- [ ] Monitoring configured

---

## Rollback Procedure

### Reverting a Deployment

**Option 1: Redeploy Previous Commit**
```bash
# On GitHub, select previous commit
# Vercel automatically redeploys
# Or manually trigger rebuild in Vercel dashboard
```

**Option 2: Git Revert**
```bash
# Revert last commit
git revert HEAD

# Push reverted commit
git push origin main

# Vercel automatically rebuilds
```

**Option 3: Manual Rollback (Vercel)**
1. Go to Vercel project "Deployments"
2. Find previous successful deployment
3. Click "Promote to Production"

---

## Maintenance

### Regular Tasks

**Weekly:**
- Monitor build times
- Check error logs
- Review performance metrics

**Monthly:**
- Update dependencies: `npm update`
- Audit security: `npm audit`
- Check Lighthouse scores

**Quarterly:**
- Performance optimization review
- Architecture assessment
- Feature planning for next phase

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name

# Verify no breaking changes
npm run build
npm run astro check
```

---

## Production Incident Response

### High CPU/Memory Usage

```bash
# Check Vercel monitoring
# Usually indicates build process issue
# Clear build cache and redeploy
```

### Failed Deployments

```
1. Check build logs in Vercel
2. Run npm run build locally
3. Fix identified issues
4. Push fix to GitHub
5. Verify preview deployment
6. Merge to main for production
```

### Performance Degradation

```
1. Check Vercel Analytics
2. Run Lighthouse audit
3. Analyze bottlenecks
4. Implement optimizations
5. Test locally
6. Deploy and monitor
```

---

**Document Status:** Complete for Phase 01
**Next Update:** Phase 02 - API integration, form submission
