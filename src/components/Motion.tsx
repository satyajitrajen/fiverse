import React, { useEffect, useRef, useState, memo } from 'react';

// ==========================================
// 1. Top Reading Scroll Progress Bar (Pure RAF & Passive Listener)
// ==========================================
export const ScrollProgressBar: React.FC = memo(() => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(scrollTop / docHeight, 1));
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8ff28] via-[#a6ff00] to-[#111210] origin-left z-[100] pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: 'left center',
        willChange: 'transform'
      }}
    />
  );
});

ScrollProgressBar.displayName = 'ScrollProgressBar';

// ==========================================
// 2. Viewport Scroll FadeIn Component (High-Performance Intersection Observer)
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
  direction = 'up',
  delay = 0,
  duration = 0.45,
  distance = 20,
  className = '',
  viewportMargin = '50px',
  once = true,
  style,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && element) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        rootMargin: viewportMargin,
        threshold: 0.05
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [viewportMargin, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'scale':
        return 'scale(0.96)';
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
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
  yOffset = 16,
  style,
  ...rest
}) => {
  return (
    <FadeIn direction="up" distance={yOffset} className={className} style={style} {...rest}>
      {children}
    </FadeIn>
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
// 5. Numerical Count-Up Animation for Metrics
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
  duration = 1.6,
  className = '',
  decimals = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(el);
      }
    }, { rootMargin: '40px' });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
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
