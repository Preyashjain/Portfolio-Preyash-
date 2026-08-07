/**
 * An abstract bipartite graph — filled nodes (creators) on the left,
 * outlined nodes (brands) on the right, connected by weighted edges.
 * A literal small drawing of a two-sided matching marketplace.
 */
function MarketplaceVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Two-sided marketplace graph connecting creators and brands"
    >
        <line x1="70" y1="60" x2="410" y2="105" stroke="currentColor" strokeWidth="1" opacity="0.39" />
        <line x1="70" y1="60" x2="410" y2="225" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="70" y1="115" x2="410" y2="165" stroke="currentColor" strokeWidth="1" opacity="0.37" />
        <line x1="70" y1="170" x2="410" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.21" />
        <line x1="70" y1="225" x2="410" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.21" />
        <line x1="70" y1="225" x2="410" y2="105" stroke="currentColor" strokeWidth="1" opacity="0.32" />
        <circle cx="70" cy="60" r="6" fill="currentColor" opacity="0.85" />
        <circle cx="70" cy="115" r="4" fill="currentColor" opacity="0.85" />
        <circle cx="70" cy="170" r="4" fill="currentColor" opacity="0.85" />
        <circle cx="70" cy="225" r="6" fill="currentColor" opacity="0.85" />
        <circle cx="410" cy="45" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
        <circle cx="410" cy="105" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
        <circle cx="410" cy="165" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
        <circle cx="410" cy="225" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
        <circle cx="410" cy="260" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.9" />
    </svg>
  );
}

export { MarketplaceVisual };
