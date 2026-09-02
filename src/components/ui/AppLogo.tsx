'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

// Natural dimensions of app_logo.png — used to keep the mark's proportions
// intact instead of squashing it into a square box.
const LOGO_ASPECT_RATIO = 551 / 353;

interface AppLogoProps {
  src?: string; // Image source (optional)
  iconName?: string; // Icon name when no image
  size?: number; // Height for icon/image; width is derived from aspect ratio for images
  className?: string; // Additional classes
  onClick?: () => void; // Click handler
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/app_logo.png',
  iconName = 'SparklesIcon',
  size = 64,
  className = '',
  onClick,
}: AppLogoProps) {
  // Memoize className calculation
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {/* Show image if src provided, otherwise show icon */}
      {src ? (
        <AppImage
          src={src}
          alt="Logo"
          width={Math.round(size * LOGO_ASPECT_RATIO)}
          height={size}
          className="flex-shrink-0"
          priority={true}
          unoptimized={src.endsWith('.svg')}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;
