# Interactive Flowchart Implementation Plan

## Overview
Implement an interactive SVG flowchart for ClaudeKit command decision tree. When users click on a decision path, it highlights that path for easy following.

## Approach: Pure SVG + Alpine.js

### Why This Approach
- Leverages existing tech stack (Astro + Alpine.js)
- No additional dependencies
- Full control over styling with Tailwind CSS
- Lightweight and performant
- Matches project's glassmorphism design system

---

## Implementation Steps

### Phase 1: Component Structure

**File:** `src/components/guides/FlowchartInteractive.astro`

```
src/components/
└── guides/
    └── FlowchartInteractive.astro  # Main interactive component
```

**Component Props:**
- `lang?: Language` - For i18n support
- `class?: string` - Additional CSS classes

### Phase 2: Data Structure

**File:** `src/data/guides/flowchart.ts`

Define flowchart data as TypeScript:

```typescript
interface FlowchartNode {
  id: string;
  type: 'start' | 'decision' | 'command';
  label: string;
  description?: string;
  position: { x: number; y: number };
}

interface FlowchartEdge {
  id: string;
  from: string;
  to: string;
  label?: string; // "Yes" or "No"
  pathId: string; // For highlighting
}

interface FlowchartPath {
  id: string;
  name: string;
  nodes: string[];
  edges: string[];
  command: string; // Final command like /plan, /cook, etc.
}
```

**Flowchart Structure (from image analysis):**
- Start: "What do you want to do?"
- Decision nodes with Yes/No branches
- End points: /plan, /cook, /code, /fix, /test, /docs, /design, /git, etc.

### Phase 3: SVG Implementation

**SVG Structure:**
```html
<svg viewBox="0 0 1200 800" class="w-full h-auto">
  <!-- Background grid (optional) -->
  <defs>
    <!-- Gradient definitions for nodes -->
    <!-- Arrow markers for edges -->
    <!-- Glow filter for highlighting -->
  </defs>

  <!-- Edges (lines/paths) - rendered first so nodes appear on top -->
  <g class="edges">
    <!-- Each edge with data-path-id attribute -->
  </g>

  <!-- Nodes -->
  <g class="nodes">
    <!-- Start node -->
    <!-- Decision nodes -->
    <!-- Command nodes (end points) -->
  </g>
</svg>
```

**Node Styling:**
- Start node: Rounded rectangle, gradient fill
- Decision nodes: Diamond shape, glassmorphism effect
- Command nodes: Rounded rectangle with command icon

### Phase 4: Alpine.js State Management

```javascript
// Alpine.js data structure
{
  activePath: null,        // Currently highlighted path ID
  hoveredNode: null,       // Node being hovered
  selectedCommand: null,   // Selected end command

  // Methods
  selectPath(pathId) { ... },
  clearPath() { ... },
  getNodeClasses(nodeId) { ... },
  getEdgeClasses(edgeId) { ... },
}
```

**Interaction Flow:**
1. User clicks on any node in a path
2. System identifies which path(s) contain that node
3. All nodes and edges in that path get highlighted
4. Other paths fade to lower opacity
5. Command description appears below flowchart

### Phase 5: CSS/Tailwind Styling

**Add to `src/styles/global.css`:**

```css
@layer components {
  /* Flowchart base styles */
  .flowchart-node {
    @apply transition-all duration-300 cursor-pointer;
  }

  .flowchart-edge {
    @apply transition-all duration-300;
    stroke-width: 2;
  }

  /* Highlighted state */
  .flowchart-node.active {
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
  }

  .flowchart-edge.active {
    stroke-width: 3;
    @apply stroke-blue-500;
  }

  /* Faded state (when another path is active) */
  .flowchart-node.faded {
    @apply opacity-30;
  }

  .flowchart-edge.faded {
    @apply opacity-20;
  }
}
```

### Phase 6: Accessibility

1. **Keyboard Navigation:**
   - Tab through nodes
   - Enter/Space to select
   - Escape to clear selection

2. **ARIA Labels:**
   - `role="img"` on SVG
   - `aria-label` for flowchart description
   - `role="button"` on clickable nodes
   - `aria-pressed` for selected state

3. **Focus Indicators:**
   - Visible focus ring on nodes
   - Announce path changes to screen readers

### Phase 7: Integration

**Add to Workflows Guide:**

```astro
// In WorkflowsGuide.astro or new FlowchartGuide.astro
---
import FlowchartInteractive from './FlowchartInteractive.astro';
---

<section id="decision-flowchart">
  <h2>Choose Your Command</h2>
  <p>Click any node to highlight the path</p>
  <FlowchartInteractive lang={currentLang} />
</section>
```

**Navigation Update:**
- Add "Decision Flowchart" to guides navigation

---

## Detailed Node Layout (from image)

Based on flowchart analysis:

```
Level 0: "What do you want to do?" (Start)
    │
    ├── Level 1: Decision nodes
    │   ├── "New feature?" → Yes → /plan, /cook
    │   ├── "Bug fix?" → Yes → /fix
    │   ├── "Tests?" → Yes → /test
    │   ├── "Documentation?" → Yes → /docs
    │   ├── "Design?" → Yes → /design
    │   └── "Git operations?" → Yes → /git
    │
    └── Level 2: More specific decisions
        └── ... (nested decisions)
```

---

## Component Code Skeleton

```astro
---
import { flowchartData } from '@/data/guides/flowchart';
import { useTranslations } from '@/i18n/utils';
import { getLangFromUrl, type Language } from '@/i18n';

interface Props {
  lang?: Language;
  class?: string;
}

const { lang, class: className = '' } = Astro.props;
const currentLang = lang || getLangFromUrl(Astro.url);
const t = useTranslations(currentLang);
---

<div
  x-data="{
    activePath: null,
    hoveredNode: null,

    selectPath(pathId) {
      this.activePath = this.activePath === pathId ? null : pathId;
    },

    isInActivePath(itemId) {
      if (!this.activePath) return false;
      const path = flowchartPaths[this.activePath];
      return path?.nodes.includes(itemId) || path?.edges.includes(itemId);
    },

    getItemClass(itemId) {
      if (!this.activePath) return '';
      return this.isInActivePath(itemId) ? 'active' : 'faded';
    }
  }"
  class:list={['flowchart-container', className]}
>
  <svg
    viewBox="0 0 1200 800"
    class="w-full h-auto"
    role="img"
    aria-label="ClaudeKit command decision flowchart"
  >
    <defs>
      <!-- Arrow marker -->
      <marker id="arrowhead" markerWidth="10" markerHeight="7"
              refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" class="fill-current"/>
      </marker>

      <!-- Glow filter for active nodes -->
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Edges -->
    <g class="edges">
      {flowchartData.edges.map(edge => (
        <g
          class="flowchart-edge"
          :class="getItemClass(edge.id)"
          @click="selectPath(edge.pathId)"
        >
          <path
            d={edge.path}
            fill="none"
            stroke="currentColor"
            marker-end="url(#arrowhead)"
          />
          {edge.label && (
            <text x={edge.labelX} y={edge.labelY} class="text-xs">
              {edge.label}
            </text>
          )}
        </g>
      ))}
    </g>

    <!-- Nodes -->
    <g class="nodes">
      {flowchartData.nodes.map(node => (
        <g
          class="flowchart-node"
          :class="getItemClass(node.id)"
          @click="selectPath(node.pathId)"
          role="button"
          tabindex="0"
        >
          {node.type === 'decision' ? (
            <!-- Diamond shape -->
            <polygon
              points={getDiamondPoints(node.position)}
              class="fill-white/80 dark:fill-surface-900/60 stroke-slate-300"
            />
          ) : (
            <!-- Rounded rectangle -->
            <rect
              x={node.position.x - 60}
              y={node.position.y - 20}
              width="120"
              height="40"
              rx="8"
              class="fill-white/80 dark:fill-surface-900/60 stroke-slate-300"
            />
          )}
          <text
            x={node.position.x}
            y={node.position.y}
            text-anchor="middle"
            dominant-baseline="middle"
            class="text-sm font-medium"
          >
            {node.label}
          </text>
        </g>
      ))}
    </g>
  </svg>

  <!-- Command description panel -->
  <div
    x-show="activePath"
    x-transition
    class="mt-6 p-4 glass-card rounded-xl"
  >
    <template x-if="activePath">
      <div>
        <h3 class="font-bold text-lg" x-text="getActiveCommand()"></h3>
        <p class="text-slate-600 dark:text-slate-400" x-text="getActiveDescription()"></p>
      </div>
    </template>
  </div>
</div>

<style>
  .flowchart-node {
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .flowchart-node:hover {
    filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.4));
  }

  .flowchart-node.active {
    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
  }

  .flowchart-node.faded,
  .flowchart-edge.faded {
    opacity: 0.25;
  }

  .flowchart-edge {
    transition: all 0.3s ease;
  }

  .flowchart-edge.active path {
    stroke-width: 3;
    stroke: #3B82F6;
  }
</style>
```

---

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/data/guides/flowchart.ts` | Create | Flowchart data structure |
| `src/components/guides/FlowchartInteractive.astro` | Create | Main component |
| `src/styles/global.css` | Modify | Add flowchart styles |
| `src/pages/guides/flowchart.astro` | Create | New guide page |
| `src/data/guides/navigation.ts` | Modify | Add to navigation |

---

## Testing Checklist

- [ ] All paths highlight correctly on click
- [ ] Clicking same node toggles off highlight
- [ ] Keyboard navigation works
- [ ] Screen reader announces changes
- [ ] Mobile touch interactions work
- [ ] Dark mode styling correct
- [ ] Reduced motion preference respected
- [ ] i18n labels work for both languages

---

## Questions Resolved

1. **Manual vs auto-generated flowchart?** → Manual SVG with data-driven nodes for better control
2. **Path history (breadcrumb-style)?** → Single path highlight for simplicity (can add later)
3. **Animation style?** → Smooth transitions with existing project animation system

---

## Estimated Complexity

- **Data structure:** Low
- **SVG creation:** Medium (requires careful positioning)
- **Alpine.js logic:** Low-Medium
- **Styling:** Low (leverage existing system)
- **Accessibility:** Medium
- **Integration:** Low

**Total:** Medium complexity, straightforward implementation
