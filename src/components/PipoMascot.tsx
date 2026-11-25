import React, { useId } from 'react';

export type PipoMood =
  | 'happy'
  | 'wave'
  | 'study'
  | 'thinking'
  | 'celebrate'
  | 'encourage'
  | 'avatar';

interface PipoMascotProps {
  mood?: PipoMood;
  size?: number;
  className?: string;
  alt?: string;
}

export const PipoMascot: React.FC<PipoMascotProps> = ({
  mood = 'happy',
  size = 96,
  className = '',
  alt = 'Maskot Pipo',
}) => {
  const uid = useId().replace(/:/g, '');
  const bodyGrad = `pipo-body-${uid}`;
  const visorGrad = `pipo-visor-${uid}`;
  const eyeGrad = `pipo-eye-${uid}`;
  const glowGrad = `pipo-glow-${uid}`;

  if (mood === 'avatar') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id={bodyGrad} x1="20" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="48%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id={visorGrad} x1="60" y1="32" x2="60" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0B1220" />
          </linearGradient>
          <radialGradient id={eyeGrad} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F0F9FF" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="#E0F2FE" />
        <path d="M32 34 L22 14 C20 10 26 7 29 10 L44 25 Z" fill="#60A5FA" />
        <path d="M88 34 L98 14 C100 10 94 7 91 10 L76 25 Z" fill="#60A5FA" />
        <circle cx="18" cy="63" r="8" fill="#60A5FA" />
        <circle cx="18" cy="63" r="4" fill="#FDE047" />
        <circle cx="102" cy="63" r="8" fill="#60A5FA" />
        <circle cx="102" cy="63" r="4" fill="#FDE047" />
        <rect x="20" y="24" width="80" height="72" rx="30" fill={`url(#${bodyGrad})`} />
        <ellipse cx="48" cy="33" rx="18" ry="5" fill="#FFFFFF" opacity="0.28" />
        <rect x="30" y="38" width="60" height="44" rx="18" fill={`url(#${visorGrad})`} />
        <circle cx="48" cy="57" r="7.5" fill={`url(#${eyeGrad})`} />
        <circle cx="72" cy="57" r="7.5" fill={`url(#${eyeGrad})`} />
        <ellipse cx="38" cy="68" rx="4.5" ry="2.6" fill="#FB7185" opacity="0.85" />
        <ellipse cx="82" cy="68" rx="4.5" ry="2.6" fill="#FB7185" opacity="0.85" />
        <path d="M53 67 Q60 74 67 67" stroke="#BAE6FD" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={alt}
    >
      <defs>
        <linearGradient id={bodyGrad} x1="34" y1="20" x2="128" y2="145" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="42%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id={visorGrad} x1="80" y1="45" x2="80" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#090F1C" />
        </linearGradient>
        <radialGradient id={eyeGrad} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#7DD3FC" />
        </radialGradient>
        <radialGradient id={glowGrad} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="80" cy="158" rx="34" ry="7" fill="#0F172A" opacity="0.1" />
      <circle cx="80" cy="78" r="64" fill={`url(#${glowGrad})`} />

      {mood === 'celebrate' && (
        <g>
          <path d="M24 30 L27 36 L33 38 L27 40 L24 46 L21 40 L15 38 L21 36 Z" fill="#FBBF24" />
          <path d="M136 26 L138.5 31 L144 33 L138.5 35 L136 40 L133.5 35 L128 33 L133.5 31 Z" fill="#38BDF8" />
          <circle cx="142" cy="54" r="3.5" fill="#F472B6" />
        </g>
      )}

      <path d="M48 44 L34 18 C31 12 38 8 43 13 L62 32 Z" fill="#60A5FA" />
      <path d="M47 41 L38 22 C37 19 40 17 42 19 L55 32 Z" fill="#93C5FD" />
      <path d="M112 44 L126 18 C129 12 122 8 117 13 L98 32 Z" fill="#60A5FA" />
      <path d="M113 41 L122 22 C123 19 120 17 118 19 L105 32 Z" fill="#93C5FD" />

      <circle cx="80" cy="147" r="10" fill="#1E293B" />
      <circle cx="80" cy="147" r="4.5" fill="#94A3B8" />

      {mood === 'wave' || mood === 'celebrate' ? (
        <path
          d="M42 112 C24 102 18 86 24 76 C29 68 40 73 42 84 C44 92 48 99 54 104 Z"
          fill={`url(#${bodyGrad})`}
        />
      ) : (
        <ellipse
          cx="39"
          cy="118"
          rx="10"
          ry="16"
          transform="rotate(22 39 118)"
          fill={`url(#${bodyGrad})`}
        />
      )}

      {mood === 'celebrate' ? (
        <path
          d="M118 112 C136 102 142 86 136 76 C131 68 120 73 118 84 C116 92 112 99 106 104 Z"
          fill={`url(#${bodyGrad})`}
        />
      ) : mood === 'study' ? (
        <g>
          <ellipse
            cx="120"
            cy="118"
            rx="10"
            ry="15"
            transform="rotate(-24 120 118)"
            fill={`url(#${bodyGrad})`}
          />
          <rect
            x="102"
            y="104"
            width="28"
            height="32"
            rx="6"
            transform="rotate(-10 116 120)"
            fill="#FEF3C7"
            stroke="#F59E0B"
            strokeWidth="2"
          />
          <line x1="108" y1="114" x2="122" y2="112" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <line x1="109" y1="120" x2="123" y2="118" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <line x1="110" y1="126" x2="119" y2="125" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        </g>
      ) : (
        <ellipse
          cx="121"
          cy="118"
          rx="10"
          ry="16"
          transform="rotate(-22 121 118)"
          fill={`url(#${bodyGrad})`}
        />
      )}

      <rect x="48" y="102" width="64" height="42" rx="21" fill={`url(#${bodyGrad})`} />
      <rect x="64" y="111" width="32" height="22" rx="8" fill="#FEF3C7" />
      <path
        d="M80 115.5 L82.1 119.8 L86.8 120.5 L83.4 123.7 L84.2 128.3 L80 126.1 L75.8 128.3 L76.6 123.7 L73.2 120.5 L77.9 119.8 Z"
        fill="#0066FF"
      />

      <circle cx="29" cy="70" r="10" fill="#60A5FA" />
      <circle cx="29" cy="70" r="5" fill="#FDE047" />
      <circle cx="131" cy="70" r="10" fill="#60A5FA" />
      <circle cx="131" cy="70" r="5" fill="#FDE047" />

      <rect x="32" y="30" width="96" height="78" rx="34" fill={`url(#${bodyGrad})`} />
      <ellipse cx="66" cy="40" rx="22" ry="6" fill="#FFFFFF" opacity="0.3" />

      <rect x="44" y="45" width="72" height="49" rx="20" fill={`url(#${visorGrad})`} />

      {mood === 'celebrate' ? (
        <g stroke="#7DD3FC" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <path d="M57 67 Q64 58 71 67" />
          <path d="M89 67 Q96 58 103 67" />
        </g>
      ) : mood === 'thinking' ? (
        <g>
          <circle cx="64" cy="64" r="8" fill={`url(#${eyeGrad})`} />
          <circle cx="96" cy="61" r="8" fill={`url(#${eyeGrad})`} />
          <circle cx="134" cy="36" r="4" fill="#93C5FD" />
          <circle cx="143" cy="26" r="6" fill="#BFDBFE" />
        </g>
      ) : (
        <g>
          <circle cx="64" cy="65" r="8.5" fill={`url(#${eyeGrad})`} />
          <circle cx="96" cy="65" r="8.5" fill={`url(#${eyeGrad})`} />
          <circle cx="67" cy="62" r="2.5" fill="#FFFFFF" opacity="0.85" />
          <circle cx="99" cy="62" r="2.5" fill="#FFFFFF" opacity="0.85" />
        </g>
      )}

      <ellipse cx="53" cy="77" rx="5.5" ry="3" fill="#FB7185" opacity="0.88" />
      <ellipse cx="107" cy="77" rx="5.5" ry="3" fill="#FB7185" opacity="0.88" />

      {mood === 'thinking' ? (
        <circle cx="80" cy="79" r="3.5" fill="#BAE6FD" />
      ) : mood === 'celebrate' ? (
        <path
          d="M70 76 Q80 87 90 76"
          stroke="#BAE6FD"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      ) : (
        <path
          d="M72 77 Q80 84 88 77"
          stroke="#BAE6FD"
          strokeWidth="3.8"
          strokeLinecap="round"
          fill="none"
        />
      )}
    </svg>
  );
};
