import { getTechIconUrl, getTechColor, hasTechIcon, getTechInitials } from '../utils/techIcons';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
}

/**
 * Renders a technology brand icon from Devicon CDN.
 * Falls back to a styled colored initial when no icon mapping exists.
 */
export default function TechIcon({ name, size = 24, className = '', showLabel = false }: TechIconProps) {
  const hasIcon = hasTechIcon(name);
  const color = getTechColor(name);

  if (hasIcon) {
    const url = getTechIconUrl(name);
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <img 
          src={url}
          alt={`${name} icon`}
          width={size}
          height={size}
          loading="lazy"
          className="shrink-0 object-contain"
          style={{ width: size, height: size }}
          onError={(e) => {
            // Fallback: hide broken image, show initials
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        {/* Hidden fallback for broken images */}
        <span 
          className="items-center justify-center rounded-lg font-bold text-white shrink-0"
          style={{ 
            width: size, 
            height: size, 
            fontSize: size * 0.4,
            backgroundColor: color,
            display: 'none'
          }}
        >
          {getTechInitials(name)}
        </span>
        {showLabel && <span className="text-sm font-medium text-slate-700">{name}</span>}
      </span>
    );
  }

  // No icon mapping — render a colorful initial badge
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span 
        className="flex items-center justify-center rounded-lg font-bold text-white shrink-0"
        style={{ 
          width: size, 
          height: size, 
          fontSize: size * 0.4,
          background: `linear-gradient(135deg, ${color}, ${color}dd)`
        }}
      >
        {getTechInitials(name)}
      </span>
      {showLabel && <span className="text-sm font-medium text-slate-700">{name}</span>}
    </span>
  );
}
