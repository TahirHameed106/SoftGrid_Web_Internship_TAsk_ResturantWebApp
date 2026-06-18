// src/components/Logo/Logo.jsx
// Usage: <Logo size={36} color="#D4A24E" />

export default function Logo({ size = 36, color = '#D4A24E', textColor = 'currentColor', showText = true }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
      {/* ── Logomark: flame inside oak leaf ──────────────── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Outer oak-leaf shield shape */}
        <path
          d="M20 2
             C13 2 4 8 4 18
             C4 26 10 32 16 36
             C17.5 37.2 19 38 20 38
             C21 38 22.5 37.2 24 36
             C30 32 36 26 36 18
             C36 8 27 2 20 2Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M20 2
             C13 2 4 8 4 18
             C4 26 10 32 16 36
             C17.5 37.2 19 38 20 38
             C21 38 22.5 37.2 24 36
             C30 32 36 26 36 18
             C36 8 27 2 20 2Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Inner flame — three-lobe design */}
        {/* Left lobe */}
        <path
          d="M20 32
             C16 32 12 28 12 24
             C12 20 14 18 16 17
             C15 19 15.5 21 17 22
             C16 19 17 16 20 11
             C20 11 19 15 21 17
             C23 15 22 11 22 11
             C25 14 25 18 24 21
             C25.5 20 26 18 25 16
             C27 18 28 21 28 24
             C28 28 24 32 20 32Z"
          fill={color}
        />

        {/* Center highlight to give flame depth */}
        <path
          d="M20 28
             C18 27 17 25 17.5 23
             C18 24.5 19 25.5 20 26
             C21 25.5 22 24.5 22.5 23
             C23 25 22 27 20 28Z"
          fill="white"
          opacity="0.3"
        />
      </svg>

      {/* ── Wordmark ──────────────────────────────────────── */}
      {showText && (
        <span
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: size * 0.45,
            color: textColor,
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
        >
          Ember &amp; Oak
        </span>
      )}
    </span>
  );
}