interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function Atomize360Logo({ className = '', inverted = false }: LogoProps) {
  const primaryColor = inverted ? '#ffffff' : '#2E5BFF';
  const secondaryColor = inverted ? '#cccccc' : '#00A0D6';
  const tertiaryColor = inverted ? '#aaaaaa' : '#34A853';
  const quaternaryColor = inverted ? '#999999' : '#F36C21';
  const textColor = inverted ? '#ffffff' : '#111827';
  const subTextColor = inverted ? 'rgba(255,255,255,0.7)' : '#6B7280';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 shrink-0"
      >
        {/* Outer orbit */}
        <ellipse
          cx="22"
          cy="22"
          rx="20"
          ry="10"
          stroke={primaryColor}
          strokeWidth="1.5"
          transform="rotate(-30 22 22)"
          opacity="0.7"
        />
        <ellipse
          cx="22"
          cy="22"
          rx="20"
          ry="10"
          stroke={secondaryColor}
          strokeWidth="1.5"
          transform="rotate(30 22 22)"
          opacity="0.7"
        />
        <ellipse
          cx="22"
          cy="22"
          rx="20"
          ry="10"
          stroke={tertiaryColor}
          strokeWidth="1.5"
          transform="rotate(90 22 22)"
          opacity="0.7"
        />
        {/* Center nucleus */}
        <circle cx="22" cy="22" r="4" fill={primaryColor} />
        {/* Orbital electrons */}
        <circle cx="38" cy="13" r="2.5" fill={secondaryColor} />
        <circle cx="6" cy="31" r="2.5" fill={tertiaryColor} />
        <circle cx="22" cy="4" r="2.5" fill={quaternaryColor} />
      </svg>
      <div className="flex flex-col leading-tight">
        <span
          className="text-lg font-['Outfit'] font-bold tracking-tight"
          style={{ color: textColor }}
        >
          Atomize360
        </span>
        <span
          className="text-[8px] font-['Inter'] font-medium tracking-wider"
          style={{ color: subTextColor }}
        >
          Deep engineering for a
          <br />
          smarter, sustainable future
        </span>
      </div>
    </div>
  );
}

interface PartnerLogoProps {
  name: string;
  className?: string;
  grayscale?: boolean;
}

export function PartnerLogo({
  name,
  className = '',
  grayscale = true,
}: PartnerLogoProps) {
  const baseStyle = grayscale
    ? 'text-gray-400 group-hover:text-gray-700'
    : 'text-gray-700';

  const fontSize =
    name === 'Schneider Electric'
      ? 'text-[10px]'
      : name === 'Rockwell Automation'
        ? 'text-[9px]'
        : 'text-sm';

  return (
    <span
      className={`font-['Inter'] font-bold tracking-tight transition-colors duration-300 select-none ${fontSize} ${baseStyle} ${className}`}
    >
      {name}
    </span>
  );
}
