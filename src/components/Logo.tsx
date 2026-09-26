type LogoProps = {
  variant?: 'horizontal' | 'icon';
  className?: string;
};

const NAVY = '#071827';
const GOLD = '#B89B5E';
const WHITE = '#FFFFFF';

export function Logo({ variant = 'horizontal', className = '' }: LogoProps) {
  if (variant === 'icon') {
    return <LogoIcon className={className} />;
  }

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BESA Group"
    >
      {/* Monogram */}
      <g>
        <rect x="0" y="2" width="36" height="36" rx="2" fill={NAVY} />
        <rect x="7" y="8" width="16" height="2.5" rx="0.5" fill={GOLD} />
        <rect x="7" y="13.5" width="22" height="2.5" rx="0.5" fill={WHITE} />
        <rect x="7" y="19" width="16" height="2.5" rx="0.5" fill={WHITE} />
        <rect x="7" y="24.5" width="22" height="2.5" rx="0.5" fill={GOLD} />
        <rect x="7" y="30" width="12" height="2.5" rx="0.5" fill={WHITE} />
      </g>
      {/* Wordmark */}
      <text
        x="48"
        y="17"
        fontFamily="'Fraunces', Georgia, serif"
        fontSize="20"
        fontWeight="500"
        fill={NAVY}
        letterSpacing="0.5"
      >
        BESA
      </text>
      <text
        x="48"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={GOLD}
        letterSpacing="3.5"
      >
        GROUP
      </text>
    </svg>
  );
}

export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BESA Group"
    >
      <rect x="0" y="2" width="36" height="36" rx="2" fill={NAVY} />
      <rect x="7" y="8" width="16" height="2.5" rx="0.5" fill={GOLD} />
      <rect x="7" y="13.5" width="22" height="2.5" rx="0.5" fill={WHITE} />
      <rect x="7" y="19" width="16" height="2.5" rx="0.5" fill={WHITE} />
      <rect x="7" y="24.5" width="22" height="2.5" rx="0.5" fill={GOLD} />
      <rect x="7" y="30" width="12" height="2.5" rx="0.5" fill={WHITE} />
    </svg>
  );
}

export function LogoWhite({ variant = 'horizontal', className = '' }: LogoProps) {
  if (variant === 'icon') {
    return <LogoIconWhite className={className} />;
  }

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BESA Group"
    >
      <g>
        <rect x="0" y="2" width="36" height="36" rx="2" fill="none" stroke={WHITE} strokeWidth="1.2" />
        <rect x="7" y="8" width="16" height="2.5" rx="0.5" fill={GOLD} />
        <rect x="7" y="13.5" width="22" height="2.5" rx="0.5" fill={WHITE} fillOpacity="0.85" />
        <rect x="7" y="19" width="16" height="2.5" rx="0.5" fill={WHITE} fillOpacity="0.85" />
        <rect x="7" y="24.5" width="22" height="2.5" rx="0.5" fill={GOLD} />
        <rect x="7" y="30" width="12" height="2.5" rx="0.5" fill={WHITE} fillOpacity="0.85" />
      </g>
      <text
        x="48"
        y="17"
        fontFamily="'Fraunces', Georgia, serif"
        fontSize="20"
        fontWeight="500"
        fill={WHITE}
        letterSpacing="0.5"
      >
        BESA
      </text>
      <text
        x="48"
        y="33"
        fontFamily="'Inter', sans-serif"
        fontSize="9"
        fontWeight="500"
        fill={GOLD}
        letterSpacing="3.5"
      >
        GROUP
      </text>
    </svg>
  );
}

export function LogoIconWhite({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="BESA Group"
    >
      <rect x="0" y="2" width="36" height="36" rx="2" fill="none" stroke={WHITE} strokeWidth="1.2" />
      <rect x="7" y="8" width="16" height="2.5" rx="0.5" fill={GOLD} />
      <rect x="7" y="13.5" width="22" height="2.5" rx="0.5" fill={WHITE} fillOpacity="0.85" />
      <rect x="7" y="19" width="16" height="2.5" rx="0.5" fill={WHITE} fillOpacity="0.85" />
      <rect x="7" y="24.5" width="22" height="2.5" rx="0.5" fill={GOLD} />
      <rect x="7" y="30" width="12" height="2.5" rx="0.5" fill={WHITE} fillOpacity="0.85" />
    </svg>
  );
}
