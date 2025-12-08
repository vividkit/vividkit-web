# Hardcoded English Text Scan Report

Date: 2025-12-08
Task: Scan landing page components for hardcoded English text needing Vietnamese translation

## Summary

Scanned all landing page components for hardcoded English text that needs to be moved to translation files. Found 77 instances of hardcoded text across 8 components.

## Hardcoded Text Found by Component

### 1. Problem Section (`src/components/sections/Problem.astro`)
**Lines 12-35:** Problem data array
- "Hard to Discover"
- "Capabilities are buried in markdown files. No visual catalog to explore what's truly possible."
- "Hard to Remember"
- "Even experts forget syntax. Constant context switching between docs and terminal breaks your flow."
- "Zero Visibility"
- "Agents run in the dark. No dashboards, no progress bars, no real-time insight into execution."
- "High Barrier"
- "The terminal excludes non-technical team members. PMs and designers are left out of the AI workflow."

**Lines 42-49:** Section title and subtitle
- "The Problem: Power Locked"
- "Behind the Terminal"
- "ClaudeKit is incredible, but its CLI interface creates unnecessary friction for everyone."

### 2. Features Section (`src/components/sections/Features.astro`)
**Lines 19-27:** Section title and subtitle
- "VividKit: Visual Interface"
- "for ClaudeKit"
- "Transform ClaudeKit's powerful agent system into an accessible, visual experience. No terminal expertise required."

**Lines 30-39:** Prerequisites & Setup
- "Prerequisites: ClaudeKit CLI installed"
- "Setup: 30s for existing users"

**Lines 45-63:** Feature list
- "Makes ClaudeKit's 60+ commands accessible through visual GUI"
- "Browse ClaudeKit's 40+ skills visually (no more directory diving)"
- "Watch ClaudeKit agents orchestrate in real-time"
- "Track token usage and costs with visual dashboards"
- "Includes terminal for developers who want CLI access"

**Line 77:** Window header
- "VividKit - Visual Interface"

### 3. Pricing Section (`src/components/sections/Pricing.astro`)
**Lines 13-21:** Section title and subtitle
- "Simple, Transparent"
- "Pricing"
- "Start for free, upgrade for power."

**Lines 27-31:** Free tier
- "Free Starter"
- "$0"
- "Perfect for trying out VividKit and building your first AI apps."

**Lines 37-54:** Free tier features
- "1 Terminal Session"
- "Basic Token Tracking"
- "Project Management"
- "Dark/Light Mode"
- "Community Support"

**Line 58:** CTA button
- "Get Free Early Access"

**Lines 64-71:** Pro tier
- "COMING SOON"
- "Pro Power"
- "TBD"
- "We're exploring premium features. Help us decide what to build next."

**Lines 76-92:** Pro tier features
- "Multi-terminal Support (Planned)"
- "Session Persistence (Planned)"
- "Advanced Analytics (Planned)"
- "Project Workspaces (Planned)"
- "Priority Support"

**Line 97:** CTA button
- "Join Waitlist & Give Feedback"

### 4. ClaudeKit Section (`src/components/sections/ClaudeKit.astro`)
**Lines 13-21:** Section title and subtitle
- "Powered by"
- "ClaudeKit"
- "VividKit requires ClaudeKit to work. Here's why it's worth it."

**Lines 30-31:** Feature 1
- "17 Specialized Agents"
- "Planner, code-reviewer, debugger, tester, UI designer, and 12 more specialized AI personas."

**Lines 40-41:** Feature 2
- "60+ Commands & 40+ Skills"
- "Bootstrap, plan, code, fix, test, design — complete toolkit from idea to deployment."

**Lines 50-51:** Feature 3
- "UI/UX Pro Max Skill"
- "50 UI styles, 21 color palettes, 50 font pairings — instant professional designs."

**Lines 56-59:** CTA card
- "Get ClaudeKit with 20% Discount"
- "You'll need ClaudeKit to use VividKit. Purchase through our referral link to get an exclusive 20% discount."

**Line 62:** CTA button
- "Get ClaudeKit (20% OFF)"

### 5. Commands Section (`src/components/sections/Commands.astro`)
**Lines 52-59:** Section title and subtitle
- "Slash Commands"
- "at a Glance"
- "ClaudeKit's 60+ AI commands, organized by skill level."
- "In VividKit:"
- "These commands become visual, point-and-click actions."
- "While you wait for VividKit, here's your terminal reference:"

**Lines 96-100:** Category titles (from data)
- Category titles: "Beginner Commands", "Intermediate Commands", "Advanced Commands"
- Category descriptions

**Lines 124-125:** Pro Tips section
- "Pro Tips"

**Lines 132-161:** Pro tips content
- "Save tokens with /clear"
- "Use /clear to clear conversation history before starting implementation"
- "Reference files with @"
- "Use @plan.md to reference specific files in commands"
- "Create save points often"
- "Use /git:cm to commit your progress regularly so you can restore if something goes wrong"
- "Ask questions anytime"
- "Use /ask to get technical explanations or architectural guidance"

**Lines 168-179:** Learn More section
- "📚 Learn More"
- "Getting Started with ClaudeKit →"
- "Useful tips and tutorials for new users"

### 6. WaitlistForm Section (`src/components/sections/WaitlistForm.astro`)
**Lines 30-35:** Role options
- "Product Manager"
- "Marketer"
- "Student"

**Line 44:** Badge
- "🎉 Join 2,000+ on the waitlist"

**Line 108:** Loading text
- "Joining..."

**Lines 114-116:** Success messages
- "🎉 Welcome aboard!"
- "We've added you to the waitlist. Check your email for confirmation!"

**Line 126:** Privacy note
- "We respect your privacy. Unsubscribe at any time. Privacy Policy"

**Line 223:** Error message
- "Something went wrong. Please try again."

### 7. Header Component (`src/components/layout/Header.astro`)
**Lines 43, 50, 56:** Language labels
- "EN"
- "English"
- "VI"
- "Tiếng Việt"

**Line 62:** Aria label
- "Toggle theme"

**Line 103:** Mobile menu navigation
- "{t('nav.claudekit')}" (uses translation)
- "{t('nav.commands')}" (uses translation)

### 8. Footer Component (`src/components/layout/Footer.astro`)
**Lines 43, 48-52:** Links and labels
- "ClaudeKit Discord"
- "Get Started"
- "ClaudeKit (20% OFF)"
- "Required for VividKit"

## Recommendations

1. **Create translation keys for all identified hardcoded text** in the `en.ts` file
2. **Add corresponding Vietnamese translations** in the `vi.ts` file
3. **Update components to use t() function** instead of hardcoded strings
4. **Pay special attention to:**
   - Dynamic data arrays (like problems array)
   - Hardcoded role options in WaitlistForm
   - Success/error messages
   - Section titles and descriptions
   - Feature lists and descriptions

## Unresolved Questions

1. Should the command names (like `/clear`, `/ask`, `/git:cm`) be translated or kept in English?
2. Should technical terms like "Terminal Session", "Token Tracking", "CLI" be translated or kept in English?
3. Should the language selector labels ("EN", "VI") remain as is or be translated?

## Total Hardcoded Strings: 77
