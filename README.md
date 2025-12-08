# VividKit - Visual Interface for ClaudeKit

> 🚧 **VividKit Desktop App Coming Soon!** Join our [early access waiting list](https://vividkit.dev) to be notified when we launch.

VividKit transforms AI coding commands into an intuitive GUI, making ClaudeKit accessible to developers of all skill levels. While our Desktop App is in development, explore our comprehensive guides on using ClaudeKit effectively with Claude Code CLI.

## 🖥️ VividKit Desktop App (Coming Soon)

VividKit Desktop will be a native application that brings the power of ClaudeKit to your desktop:

- **Visual Command Builder**: Construct complex commands with drag-and-drop simplicity
- **One-Click Workflows**: Execute multi-step operations with a single click
- **Real-Time Previews**: See command outputs and previews instantly
- **Cross-Platform**: Available for macOS, Windows, and Linux
- **Offline Support**: Work without internet connectivity

**[→ Join the Waiting List](https://vividkit.dev)**

---

## 📚 ClaudeKit with Claude Code CLI

While waiting for VividKit Desktop, master ClaudeKit through our comprehensive documentation. ClaudeKit extends Claude Code CLI with 60+ commands and 40+ specialized skills.

### Quick Start

```bash
# Install Claude Code CLI
npm install -g @anthropic/claude-code

# Navigate to your project
cd your-project

# Start Claude Code
claude
```

### Essential Commands

| Command | Description | Use Case |
|---------|-------------|----------|
| `/cook [task]` | Implement features step-by-step | Building new functionality |
| `/plan [task]` | Create implementation plans | Complex feature planning |
| `/fix [issue]` | Analyze and fix issues | Debugging and error resolution |
| `/ask [question]` | Answer technical questions | Quick clarifications |
| `/scout [prompt]` | Search codebase quickly | Finding files and patterns |
| `/test` | Run and analyze tests | Quality assurance |

### Best Practices

#### 1. Start with Planning
```bash
# For complex features, always plan first
/plan:hard implement user authentication with OAuth2

# For simpler tasks, use fast planning
/plan:fast add loading spinner to submit button
```

#### 2. Use the Right Command Variant
- `/cook` - Standard implementation with testing
- `/cook:auto` - Autonomous implementation ("trust me bro")
- `/cook:auto:fast` - Quick implementation without research
- `/cook:auto:parallel` - Parallel execution for large features

#### 3. Fix Issues Intelligently
```bash
# Standard fix
/fix the login form isn't validating emails

# Hard issues requiring investigation
/fix:hard memory leak in websocket connection

# Fix and run tests
/fix:test failing integration tests
```

#### 4. Leverage Specialized Skills
ClaudeKit includes 40+ skills that auto-activate based on context:

| Skill | Triggers On |
|-------|-------------|
| `ui-ux-pro-max` | UI/UX design, styling, components |
| `backend-development` | APIs, databases, authentication |
| `debugging` | Bug fixes, error investigation |
| `frontend-development` | React, TypeScript, components |
| `devops` | Docker, CI/CD, cloud deployment |

#### 5. Efficient Workflow Patterns

**Feature Development:**
```bash
/plan [feature]           # Create plan
/code [plan]              # Implement from plan
/test                     # Verify implementation
/git:cm                   # Commit changes
```

**Bug Fixing:**
```bash
/fix:logs [error]         # Analyze logs first
/fix [issue]              # Fix the issue
/test                     # Verify fix
```

**Code Review:**
```bash
/review:codebase          # Comprehensive review
/git:pr                   # Create pull request
```

### Pro Tips

1. **Use Context Efficiently**
   - Keep prompts concise but specific
   - Reference file paths when possible: `fix the bug in src/utils/auth.ts:45`

2. **Parallel Execution**
   - Use `/cook:auto:parallel` for features spanning multiple files
   - Agents work concurrently, reducing total time

3. **Leverage CCS Delegation**
   - Use `/ccs [task]` to delegate to external AI tools
   - Great for deterministic, repetitive tasks

4. **Documentation Generation**
   - `/docs:init` - Create initial documentation
   - `/docs:update` - Update docs after changes

5. **Git Workflow Integration**
   - `/git:cm` - Stage and commit with conventional commits
   - `/git:pr` - Create pull requests with proper descriptions

### Command Reference Links

Explore our detailed guides:
- [CLI Guide](https://vividkit.dev/guides) - Installation and setup
- [Commands Guide](https://vividkit.dev/guides/commands) - All 60+ commands
- [Workflows Guide](https://vividkit.dev/guides/workflows) - Best practices
- [CCS Guide](https://vividkit.dev/guides/ccs) - Custom delegation
- [Fix Logs Guide](https://vividkit.dev/guides/fix-logs) - Debugging strategies

---

## 🛠️ Tech Stack (This Website)

- **Framework**: Astro 5.x with Static Site Generation
- **Styling**: Tailwind CSS v4
- **Type Safety**: TypeScript with strict mode
- **Interactivity**: Alpine.js
- **i18n**: English & Vietnamese
- **Deployment**: Vercel

## 🧞 Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## 🔗 Links

- [VividKit Website](https://vividkit.dev) - Join the waiting list
- [ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli) - Source repository
- [Claude Code](https://claude.ai/code) - Anthropic's official CLI

---

*VividKit - Making AI coding crystal clear*
