/** A restrained dot-matrix, used for smaller project entries that don't need a dedicated illustration. */
function GenericVisual({ className }: { className?: string }) {
  const cols = 8;
  const rows = 5;
  const gap = 22;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distFromCenter = Math.hypot(c - (cols - 1) / 2, r - (rows - 1) / 2);
      const opacity = Math.max(0.12, 0.75 - distFromCenter * 0.16);
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={20 + c * gap}
          cy={20 + r * gap}
          r={2}
          fill="currentColor"
          opacity={opacity.toFixed(2)}
        />
      );
    }
  }

  return (
    <svg
      viewBox="0 0 180 120"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label=""
      aria-hidden="true"
    >
      {dots}
    </svg>
  );
}

export { GenericVisual };
