// Node position tracker — browser-side Alpine.js mixin
// Collects [data-wizard-node-id] elements, computes positions relative to container,
// and recomputes on resize via ResizeObserver (debounced 50ms).
//
// Usage: spread into Alpine component data:
//   x-data="{ ...setupWizard(), ...nodePositions() }"
// Then call computePositions() after DOM mutations, read `paths` for SVG data.

import { buildCurve } from './svg-path-builder';

export interface WizardPath {
  id: string;         // e.g. "subscriptions->routing"
  d: string;          // SVG path d attribute
  length: number;     // stroke length for dasharray animation
}

/**
 * Alpine mixin factory for tracking node DOM positions and building SVG paths.
 * Designed to be spread into an Alpine component that owns `paths` reactive state.
 */
export function nodePositions() {
  let resizeObserver: ResizeObserver | null = null;
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  return {
    // Reactive SVG path data — x-bind on <path> elements reads this
    paths: [] as WizardPath[],

    // Internal: container element reference set on mount
    _container: null as HTMLElement | null,

    init() {
      if (typeof window === 'undefined') return;

      // Wait one tick for Alpine to finish rendering
      this.$nextTick(() => {
        this._container = this.$el as HTMLElement;
        this._startObserver();
        this.computePositions();
      });
    },

    destroy() {
      resizeObserver?.disconnect();
      resizeObserver = null;
      if (debounceTimer) clearTimeout(debounceTimer);
    },

    _startObserver() {
      if (!this._container || typeof ResizeObserver === 'undefined') return;

      resizeObserver = new ResizeObserver(() => {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => this.computePositions(), 50);
      });

      resizeObserver.observe(this._container);
    },

    /**
     * Collect all [data-wizard-node-id] elements, build ordered pairs,
     * compute bezier curves between consecutive visible nodes.
     * Sets `this.paths` reactively.
     */
    computePositions() {
      if (!this._container) return;

      const containerRect = this._container.getBoundingClientRect();
      const nodeEls = Array.from(
        this._container.querySelectorAll<HTMLElement>('[data-wizard-node-id]'),
      );

      if (nodeEls.length < 2) {
        this.paths = [];
        return;
      }

      const newPaths: WizardPath[] = [];

      for (let i = 0; i < nodeEls.length - 1; i++) {
        const fromEl = nodeEls[i]!;
        const toEl = nodeEls[i + 1]!;
        const fromId = fromEl.dataset.wizardNodeId ?? String(i);
        const toId = toEl.dataset.wizardNodeId ?? String(i + 1);

        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();

        const d = buildCurve(fromRect, toRect, containerRect);

        // Approximate path length for stroke-dasharray animation
        // Using straight-line distance × 1.3 as cheap cubic bezier estimate
        const dx = (toRect.left + toRect.width / 2) - (fromRect.left + fromRect.width / 2);
        const dy = toRect.top - fromRect.bottom;
        const length = Math.round(Math.sqrt(dx * dx + dy * dy) * 1.3);

        newPaths.push({ id: `${fromId}->${toId}`, d, length });
      }

      this.paths = newPaths;
    },
  };
}
