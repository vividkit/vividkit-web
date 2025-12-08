# VividKit - Visual Interface for ClaudeKit

VividKit transforms AI coding commands into an intuitive GUI, making ClaudeKit accessible to developers of all skill levels.

## 🚀 Overview

VividKit is a modern web application built with Astro 5.x, Tailwind CSS v4, TypeScript, and Alpine.js. It provides a visual interface for 60+ ClaudeKit commands and 40+ skills, eliminating the need to memorize complex CLI syntax.

### Key Features

- **Visual Command Interface**: Transform complex CLI commands into intuitive GUI
- **60+ ClaudeKit Commands**: From basic `/ask` to advanced `/bootstrap` and `/scout`
- **40+ Specialized Skills**: UI/UX design, debugging, backend development, and more
- **Comprehensive Guides**: CLI, commands, workflows, UI/UX, and CCS documentation
- **Glassmorphism Design**: Modern aesthetic with backdrop blur effects
- **Dark Mode Support**: Automatic theme detection with manual toggle
- **PWA Ready**: Install as a progressive web app on mobile devices
- **Pricing Tiers**: Free tier and Pro at $29/month

## 🛠️ Tech Stack

- **Framework**: Astro 5.x with Static Site Generation (SSG)
- **Styling**: Tailwind CSS v4 with @theme directive
- **Type Safety**: TypeScript with strict mode
- **Interactivity**: Alpine.js for dynamic UI
- **Fonts**: Space Grotesk (headings), DM Sans (body), Fira Code (mono)
- **Icons**: Lucide Astro
- **Deployment**: Vercel with web analytics

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # Base components (Button, GlassCard, Badge, etc.)
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── sections/        # Landing page sections
│   │   └── guides/          # Guide page components
│   ├── layouts/             # Page layouts (MainLayout, GuidesLayout)
│   ├── pages/               # Astro pages
│   │   ├── index.astro      # Landing page
│   │   └── guides/          # Guide pages (cli, commands, workflows, etc.)
│   ├── scripts/             # TypeScript utilities
│   ├── data/                # Static data and configurations
│   └── styles/              # Global CSS
├── public/                  # Static assets and PWA icons
└── docs/                    # Project documentation
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## 🎯 Guide Pages

- **CLI Guide**: Comprehensive ClaudeKit CLI documentation
- **Commands Guide**: Visual reference for all 60+ commands
- **Workflows Guide**: Best practices and workflows
- **UI/UX Guide**: Design implementation guide
- **CCS Guide**: Custom components and styling
- **Fix Logs Guide**: Debugging and error resolution
- **Permissions Guide**: Security and access control
- **Resume Guide**: Project resumption workflows

## 📱 PWA Features

- Installable on mobile devices
- Offline capability
- App-like experience
- Custom icons and splash screens

## 🎨 Design System

- Glassmorphism components with backdrop blur
- Custom color palette with CSS variables
- Responsive design with mobile-first approach
- Consistent spacing and typography scale

## 📊 Project Status

- **Total Files**: 99+ files
- **Codebase Size**: 187,352 tokens
- **Status**: Phase 06 Complete - Landing Page Integration
- **Last Updated**: 2025-12-08

## 🔗 Links

- [Live Demo](https://vividkit.vercel.app)
- [Documentation](./docs/)
- [ClaudeKit Repository](https://github.com/anthropics/claudekit)

---

*VividKit - Making AI coding crystal clear*