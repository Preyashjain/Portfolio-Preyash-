/**
 * Traces the shape of a gravitational-wave "chirp": rising frequency and
 * amplitude through inspiral, a burst at merger, then a damped ringdown.
 * The path coordinates were generated from the actual chirp formula
 * (frequency and amplitude increasing with progress toward merger, then
 * an exponentially-damped decay) — not a decorative squiggle.
 */
function WaveformVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 120"
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Gravitational-wave chirp signal, amplitude rising into merger then decaying"
    >
      <path
        d="M0.0 60.0 L3.7 59.7 L7.4 59.4 L11.1 59.1 L14.8 58.8 L18.5 58.5 L22.2 58.2 L25.8 58.1 L29.5 58.0 L33.2 58.0 L36.9 58.2 L40.6 58.5 L44.3 59.0 L48.0 59.6 L51.7 60.3 L55.4 61.0 L59.1 61.6 L62.8 62.0 L66.5 62.2 L70.2 62.1 L73.8 61.6 L77.5 60.8 L81.2 59.9 L84.9 58.8 L88.6 58.0 L92.3 57.5 L96.0 57.6 L99.7 58.2 L103.4 59.4 L107.1 60.9 L110.8 62.2 L114.5 63.0 L118.2 62.9 L121.8 61.8 L125.5 59.9 L129.2 57.9 L132.9 56.6 L136.6 56.4 L140.3 57.8 L144.0 60.3 L147.7 62.8 L151.4 64.3 L155.1 63.8 L158.8 61.3 L162.5 57.9 L166.2 55.2 L169.8 55.0 L173.5 57.7 L177.2 62.1 L180.9 65.6 L184.6 65.8 L188.3 62.1 L192.0 56.6 L195.7 53.0 L199.4 54.2 L203.1 59.8 L206.8 66.2 L210.5 68.2 L214.2 63.7 L217.8 55.6 L221.5 50.6 L225.2 53.5 L228.9 62.6 L232.6 70.1 L236.3 68.6 L240.0 58.5 L243.7 49.1 L247.4 50.0 L251.1 61.6 L254.8 72.4 L258.5 70.4 L262.2 56.5 L265.8 45.5 L269.5 50.6 L273.2 67.5 L276.9 76.5 L280.6 65.5 L284.3 46.6 L288.0 43.7 L291.7 62.3 L295.4 79.2 L299.1 70.8 L302.8 46.6 L306.5 39.9 L310.2 62.1 L313.8 82.8 L317.5 70.4 L321.2 41.1 L324.9 39.4 L328.6 70.4 L332.3 86.6 L336.0 60.0 L339.7 38.0 L343.4 78.6 L347.1 60.0 L350.8 46.7 L354.5 71.3 L358.2 60.0 L361.8 51.9 L365.5 66.8 L369.2 60.0 L372.9 55.1 L376.6 64.2 L380.3 60.0 L384.0 57.0 L387.7 62.5 L391.4 60.0 L395.1 58.2 L398.8 61.5 L402.5 60.0 L406.2 58.9 L409.8 60.9 L413.5 60.0 L417.2 59.3 L420.9 60.6 L424.6 60.0 L428.3 59.6 L432.0 60.3 L435.7 60.0 L439.4 59.8 L443.1 60.2 L446.8 60.0 L450.5 59.9 L454.2 60.1 L457.8 60.0 L461.5 59.9 L465.2 60.1 L468.9 60.0 L472.6 59.9 L476.3 60.0 L480.0 60.0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export { WaveformVisual };
