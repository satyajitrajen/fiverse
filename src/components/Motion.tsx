import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';

// ==========================================
// 1. Top Reading Scroll Progress Bar
// ==========================================
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c8ff28] via-[#a6ff00] to-[#111210] origin-left z-[100] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

// ==========================================
// 2. Viewport Scroll FadeIn Component
// ==========================================
export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 24,
  className = '',
  viewportMargin = '-60px',
  once = true,
  ...rest
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.94 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }
      }}
      viewport={{ once, margin: viewportMargin as any }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// ==========================================
// 3. Stagger Container & Stagger Item
// ==========================================
export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = '',
  once = true,
  ...rest
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<HTMLMotionProps<'div'> & { className?: string; yOffset?: number }> = ({
  children,
  className = '',
  yOffset = 20,
  ...rest
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className} {...rest}>
      {children}
    </motion.div>
  );
};

// ==========================================
// 4. Interactive Hover & 3D Tilt Card
// ==========================================
export interface HoverCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  yOffset?: number;
  glow?: boolean;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = '',
  scale = 1.02,
  yOffset = -4,
  glow = false,
  ...rest
}) => {
  return (
    <motion.div
      whileHover={{
        y: yOffset,
        scale: scale,
        transition: { duration: 0.22, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.99 }}
      className={`transition-shadow duration-300 ${glow ? 'hover:shadow-[0_12px_35px_-10px_rgba(200,255,40,0.35)]' : ''} ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

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

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className = '',
  decimals = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
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
};

// ==========================================
// 6. Ambient Drifting Glow Orbs
// ==========================================
export const GlowOrb: React.FC<{
  className?: string;
  color?: 'lime' | 'blue' | 'purple' | 'cyan';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({
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
    <motion.div
      animate={{
        scale: [1, 1.12, 0.95, 1],
        opacity: [0.6, 0.9, 0.7, 0.6],
        x: [0, 15, -12, 0],
        y: [0, -15, 10, 0]
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      className={`absolute pointer-events-none rounded-full bg-radial ${colorGradients} ${sizeClasses} ${className}`}
    />
  );
};

// ==========================================
// 7. Infinite Continuous Marquee Ticker
// ==========================================
export const InfiniteMarquee: React.FC<{
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}> = ({
  children,
  speed = 28,
  direction = 'left',
  className = '',
  pauseOnHover = true
}) => {
  return (
    <div className={`overflow-hidden flex select-none ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
        className="flex shrink-0 items-center gap-8 min-w-full"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

// ==========================================
// 8. Pulsing Status Indicator Node
// ==========================================
export const PulseBadge: React.FC<{
  label: string;
  dotColor?: string;
  className?: string;
}> = ({
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
};
