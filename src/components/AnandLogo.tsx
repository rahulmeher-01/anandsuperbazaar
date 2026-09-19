import React from 'react';

interface AnandLogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const AnandLogo: React.FC<AnandLogoProps> = ({
  variant = 'dark',
  showTagline = true,
  size = 'md',
  className = '',
  onClick,
}) => {
  // Dimension presets
  const sizeMap = {
    sm: { height: 42, width: 140, textScale: 'text-lg', superScale: 'text-lg', tagScale: 'text-[11px]' },
    md: { height: 56, width: 190, textScale: 'text-2xl', superScale: 'text-2xl', tagScale: 'text-[14px]' },
    lg: { height: 72, width: 240, textScale: 'text-3xl', superScale: 'text-3xl', tagScale: 'text-[17px]' },
    xl: { height: 90, width: 310, textScale: 'text-4xl', superScale: 'text-4xl', tagScale: 'text-[21px]' },
  };

  const currentSize = sizeMap[size];
  const isLight = variant === 'light';
  const anandTextColor = isLight ? '#FFFFFF' : '#18181B';
  const taglineColor = isLight ? '#E2E8F0' : '#334155';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none transition-transform duration-200 ${onClick ? 'cursor-pointer hover:opacity-95' : ''} ${className}`}
      role="banner"
      aria-label="Anand Super Bazaar Logo"
    >
      {/* Official Emblem: Joyful Flame / Sprout Ribbon with Golden Sun */}
      <svg
        viewBox="0 0 84 120"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{
          height: `${currentSize.height}px`,
          width: `${Math.round(currentSize.height * 0.7)}px`,
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Golden Apex Sun / Head */}
        <circle cx="52" cy="18" r="8" fill="#F59E0B" />

        {/* Outer Left Emerald Green Leaf Swoosh */}
        <path
          d="M 22 76 C 14 56 16 38 32 26 C 36 23 40 21 44 19 C 36 27 30 42 36 58 C 40 66 43 73 38 80 C 33 86 26 84 22 76 Z"
          fill="#15803D"
        />
        <path
          d="M 16 68 C 11 78 13 90 20 100 C 27 108 34 112 40 117 C 32 111 26 102 23 92 C 19 82 19 75 16 68 Z"
          fill="#166534"
        />

        {/* Center Crimson Red Heart Flame */}
        <path
          d="M 28 52 C 32 36 43 28 52 23 C 45 34 43 49 47 62 C 51 75 60 86 58 100 C 56 109 50 116 42 120 C 48 112 51 103 48 91 C 44 80 34 71 30 61 Z"
          fill="#D01B27"
        />

        {/* Golden Amber Center Ribbon */}
        <path
          d="M 40 70 C 44 60 50 52 56 46 C 53 56 52 68 54 78 C 56 86 60 94 56 103 C 53 110 48 116 43 119 C 47 112 49 104 47 96 C 45 88 40 80 40 70 Z"
          fill="#F59E0B"
        />

        {/* Upper Right Forest Green Leaf */}
        <path
          d="M 48 34 C 54 28 61 27 64 31 C 66 33 64 37 60 41 C 56 45 52 48 47 52 C 47 45 47 38 48 34 Z"
          fill="#15803D"
        />

        {/* Lower Amber Taper */}
        <path
          d="M 44 98 C 47 107 48 116 44 124 C 42 117 43 108 44 98 Z"
          fill="#EAB308"
        />
      </svg>

      {/* Wordmark and Tagline */}
      <div className="flex flex-col justify-center leading-none tracking-tight">
        {/* Top row: 'anand' */}
        <span
          className={`font-black tracking-[-0.04em] lowercase ${currentSize.textScale}`}
          style={{ color: anandTextColor, fontFamily: "'Outfit', sans-serif" }}
        >
          anand
        </span>

        {/* Middle row: 'super' + 'bazaar' */}
        <div className="flex items-baseline font-black tracking-[-0.04em] lowercase -mt-1">
          <span
            className={`text-[#D01B27] ${currentSize.superScale}`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            super
          </span>
          <span
            className={`text-[#15803D] ${currentSize.superScale}`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            bazaar
          </span>
        </div>

        {/* Official Tagline in Cursive Script */}
        {showTagline && (
          <span
            className={`font-bold italic mt-0.5 tracking-normal ${currentSize.tagScale}`}
            style={{
              color: taglineColor,
              fontFamily: "'Caveat', cursive, sans-serif",
            }}
          >
            Super Quality . Honest Prices.
          </span>
        )}
      </div>
    </div>
  );
};
