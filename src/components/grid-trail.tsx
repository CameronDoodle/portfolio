export function GridTrail() {
  return (
    <div
      className="pixel-grid pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <canvas id="grid-trail" className="block h-full w-full" />
    </div>
  );
}
