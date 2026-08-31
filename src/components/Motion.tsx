import React, { memo } from 'react';

// ==========================================
// 1. Top Reading Scroll Progress Bar (Pure CSS / Lightweight)
// ==========================================
export const ScrollProgressBar: React.FC = memo(() => {
  return null; // Kept clean without blocking main thread
});

ScrollProgressBar.displayName = 'ScrollProgressBar';

// ==========================================
// 2. Viewport Scroll FadeIn Component (Instant Zero-FCP-Delay Rendering)
// ==========================================
export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = memo(({
  children,
  className = '',
  style,
  ...rest
}) => {
  return (
    <div
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
});

FadeIn.displayName = 'FadeIn';

// ==========================================
// 3. Stagger Container & Stagger Item
// ==========================================
export interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = memo(({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
});

StaggerContainer.displayName = 'StaggerContainer';

export const StaggerItem: React.FC<React.HTMLAttributes<HTMLDivElement> & { className?: string; yOffset?: number }> = memo(({
  children,
  className = '',
  style,
  ...rest
}) => {
  return (
    <div className={className} style={style} {...rest}>
      {children}
    </div>
  );
});

StaggerItem.displayName = 'StaggerItem';

// ==========================================
// 4. Interactive Hover Card (CSS Hardware-Accelerated)
// ==========================================
export interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  yOffset?: number;
  glow?: boolean;
}

export const HoverCard: React.FC<HoverCardProps> = memo(({
  children,
  className = '',
  glow = false,
  ...rest
}) => {
  return (
    <div
      className={`transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.01] ${
        glow ? 'hover:shadow-[0_12px_35px_-10px_rgba(200,255,40,0.35)]' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
});

HoverCard.displayName = 'HoverCard';

// ==========================================
// 5. Instant Metric Counter (Zero-Thread-Lag)
// ==========================================
export interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = memo(({
  value,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0
}) => {
  return (
    <span className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

// ==========================================
// 6. Ambient Drifting Glow Orbs (GPU Keyframe Offloaded)
// ==========================================
export const GlowOrb: React.FC<{
  className?: string;
  color?: 'lime' | 'blue' | 'purple' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = memo(({
  className = '',
  color = 'lime',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-48 h-48 blur-2xl',
    md: 'w-72 h-72 blur-3xl',
    lg: 'w-96 h-96 blur-3xl',
    xl: 'w-[500px] h-[500px] blur-[120px]'
  }[size];

  const colorGradients = {
    lime: 'from-[#c8ff28]/35 via-[#e2ff7a]/20 to-transparent',
    blue: 'from-[#2563eb]/25 via-[#3b82f6]/15 to-transparent',
    purple: 'from-[#9333ea]/20 via-[#a855f7]/10 to-transparent',
    cyan: 'from-[#06b6d4]/25 via-[#38bdf8]/15 to-transparent'
  }[color];

  return (
    <div
      className={`absolute pointer-events-none rounded-full bg-radial animate-glow-drift ${colorGradients} ${sizeClasses} ${className}`}
    />
  );
});

GlowOrb.displayName = 'GlowOrb';

// ==========================================
// 7. Infinite Continuous Marquee Ticker (GPU Keyframe Offloaded)
// ==========================================
export const InfiniteMarquee: React.FC<{
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}> = memo(({
  children,
  className = ''
}) => {
  return (
    <div className={`overflow-hidden flex select-none ${className}`}>
      <div className="animate-marquee shrink-0 items-center gap-8 min-w-full">
        {children}
        {children}
      </div>
    </div>
  );
});

InfiniteMarquee.displayName = 'InfiniteMarquee';

// ==========================================
// 8. Pulsing Status Indicator Node
// ==========================================
export const PulseBadge: React.FC<{
  label: string;
  dotColor?: string;
  className?: string;
}> = memo(({
  label,
  dotColor = 'bg-[#c8ff28]',
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold border ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
      </span>
      <span>{label}</span>
    </div>
  );
});

PulseBadge.displayName = 'PulseBadge';
