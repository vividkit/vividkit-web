// SVG path builder — pure functions, no DOM dependencies
// Generates cubic bezier SVG `d` attribute for wizard tree connections.

/**
 * Build a cubic bezier curve SVG path between two node rects.
 * Coordinates are relative to containerRect (absolute overlay).
 *
 * @param from       - DOMRect of the source node (absolute viewport coords)
 * @param to         - DOMRect of the destination node (absolute viewport coords)
 * @param containerRect - DOMRect of the SVG overlay container
 * @returns SVG `d` attribute string, e.g. "M 100 40 C 100 80, 200 60, 200 100"
 */
export function buildCurve(from: DOMRect, to: DOMRect, containerRect: DOMRect): string {
  // Center-bottom of source node → center-top of target node
  const x1 = from.left + from.width / 2 - containerRect.left;
  const y1 = from.bottom - containerRect.top;
  const x2 = to.left + to.width / 2 - containerRect.left;
  const y2 = to.top - containerRect.top;

  // Control points: pull vertically toward mid-point for smooth S-curve
  const midY = (y1 + y2) / 2;
  const cx1 = x1;
  const cy1 = midY;
  const cx2 = x2;
  const cy2 = midY;

  return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
}
