// Setup Wizard — Alpine.js component factory
// Registered via document.addEventListener('alpine:init', ...) in setup-wizard-root.astro.
// State is 2-way synced with URL query params (debounced 100ms pushState).

import type { ProviderId } from '@/data/guides/setup-wizard/providers';
import type { ToolId } from '@/data/guides/setup-wizard/tools';
import type { Step } from '@/data/guides/setup-wizard/wizard-tree-schema';
import {
  DEFAULT_STATE,
  serializeState,
  parseURLParams,
  debounce,
  type WizardState,
} from './url-query-sync';
import {
  canAdvance,
  nextStepWithSkip,
  prevStepWithSkip,
  impliedRouting,
} from './wizard-transitions';

/** Alpine component factory — call via x-data="setupWizard()" */
export function setupWizard() {
  // Hydrate from URL on mount (SSR-safe)
  const initialState = hydrateFromURL();

  return {
    // --- State ---
    step: initialState.step as Step,
    subs: initialState.subs as ProviderId[],
    routing: initialState.routing as 'ccs' | 'manual' | null,
    toolType: initialState.toolType as 'ide' | 'cli' | 'both' | null,
    tools: initialState.tools as ToolId[],

    // --- Lifecycle ---
    init() {
      // Listen for browser back/forward
      if (typeof window !== 'undefined') {
        window.addEventListener('popstate', () => {
          const restored = parseURLParams(new URLSearchParams(window.location.search));
          this.step = restored.step ?? DEFAULT_STATE.step;
          this.subs = restored.subs ?? DEFAULT_STATE.subs;
          this.routing = restored.routing ?? DEFAULT_STATE.routing;
          this.toolType = restored.toolType ?? DEFAULT_STATE.toolType;
          this.tools = restored.tools ?? DEFAULT_STATE.tools;
        });
      }

      // Watch state changes → debounced pushState
      const pushURL = debounce(() => {
        if (typeof window === 'undefined') return;
        const state = this._snapshot();
        const params = serializeState(state);
        const search = params.toString();
        const url = search ? `?${search}` : window.location.pathname;
        window.history.pushState({}, '', url);
      }, 100);

      // Alpine $watch — observe all reactive fields
      this.$watch('step', () => pushURL());
      this.$watch('subs', () => pushURL());
      this.$watch('routing', () => pushURL());
      this.$watch('toolType', () => pushURL());
      this.$watch('tools', () => pushURL());
    },

    // --- Computed helpers (called from template) ---
    get canGoNext(): boolean {
      return canAdvance(this._snapshot());
    },

    get isLastStep(): boolean {
      return this.step === 'result';
    },

    get isFirstStep(): boolean {
      return this.step === 'subscriptions';
    },

    // --- Actions ---
    toggleSub(id: ProviderId) {
      const idx = this.subs.indexOf(id);
      if (idx === -1) {
        this.subs = [...this.subs, id];
      } else {
        this.subs = this.subs.filter((s: ProviderId) => s !== id);
      }
      // Keep routing consistent when sub count changes
      const implied = impliedRouting(this.subs);
      if (implied) this.routing = implied;
      else if (this.subs.length < 2 && this.routing === 'ccs') this.routing = null;
    },

    setRouting(value: 'ccs' | 'manual') {
      this.routing = value;
    },

    setToolType(value: 'ide' | 'cli' | 'both') {
      this.toolType = value;
      // Clear tool selection when type changes
      this.tools = [];
    },

    toggleTool(id: ToolId) {
      const idx = this.tools.indexOf(id);
      if (idx === -1) {
        this.tools = [...this.tools, id];
      } else {
        this.tools = this.tools.filter((t: ToolId) => t !== id);
      }
    },

    goNext() {
      if (!canAdvance(this._snapshot())) return;
      const next = nextStepWithSkip(this._snapshot());
      if (!next) return;
      // Set implied routing when skipping routing step
      if (this.step === 'subscriptions' && next !== 'routing' && this.subs.length === 1) {
        this.routing = 'manual';
      }
      this.step = next;
    },

    goBack() {
      const prev = prevStepWithSkip(this._snapshot());
      if (!prev) return;
      this.step = prev;
    },

    goToStep(target: Step) {
      this.step = target;
    },

    reset() {
      this.step = DEFAULT_STATE.step;
      this.subs = DEFAULT_STATE.subs;
      this.routing = DEFAULT_STATE.routing;
      this.toolType = DEFAULT_STATE.toolType;
      this.tools = DEFAULT_STATE.tools;
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', window.location.pathname);
      }
    },

    // --- Internal snapshot for pure helpers ---
    _snapshot(): WizardState {
      return {
        step: this.step,
        subs: this.subs,
        routing: this.routing,
        toolType: this.toolType,
        tools: this.tools,
      };
    },
  };
}

/** Read initial state from window.location.search (SSR-safe) */
function hydrateFromURL(): WizardState {
  if (typeof window === 'undefined') return { ...DEFAULT_STATE };
  const params = new URLSearchParams(window.location.search);
  if (params.has('reset')) return { ...DEFAULT_STATE };
  const partial = parseURLParams(params);
  return { ...DEFAULT_STATE, ...partial };
}
