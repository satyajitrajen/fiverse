import React, { memo } from 'react';

export interface FiverseLogoProps {
  className?: string;
  imgClassName?: string;
  dotClassName?: string;
  variant?: 'full' | 'icon' | 'icon-text';
  alt?: string;
}

// Brand Logo Component - displays /logo.webp or /icon.webp from public folder
export const FiverseLogo: React.FC<FiverseLogoProps> = memo(({
  className = "",
  imgClassName = "h-11 sm:h-12 md:h-13 lg:h-[56px] w-auto object-contain",
  variant = 'full',
  alt = "Fiverse Systems"
}) => {
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <picture>
          <source srcSet="/icon.webp" type="image/webp" />
          <img
            src="/icon.png"
            alt={alt}
            width={128}
            height={128}
            className={imgClassName || "h-7 w-7 object-contain"}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    );
  }

  if (variant === 'icon-text') {
    return (
      <div className={`inline-flex items-center gap-2.5 select-none font-bold text-[#111210] ${className}`}>
        <picture>
          <source srcSet="/icon.webp" type="image/webp" />
          <img
            src="/icon.png"
            alt={alt}
            width={128}
            height={128}
            className="h-7 w-7 object-contain"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="flex flex-col leading-none">
          <span className="text-[17px] font-black tracking-tight uppercase text-[#111210]">FIVERSE</span>
          <span className="text-[9px] font-bold tracking-widest text-[#555a50] uppercase mt-0.5">SYSTEMS</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <picture>
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          src="/logo.png"
          alt={alt}
          width={480}
          height={200}
          className={imgClassName}
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
});

FiverseLogo.displayName = 'FiverseLogo';

// Standalone Brand Icon component
export const FiverseIcon: React.FC<{ className?: string; alt?: string }> = memo(({
  className = "w-7 h-7",
  alt = "Fiverse Systems Icon"
}) => {
  return (
    <picture>
      <source srcSet="/icon.webp" type="image/webp" />
      <img
        src="/icon.png"
        alt={alt}
        width={128}
        height={128}
        className={`object-contain inline-block ${className}`}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
});

FiverseIcon.displayName = 'FiverseIcon';

// Backwards compatibility alias
export const TimsoLogo = FiverseLogo;


// HR Integration Logos
export const BambooHRLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-1.5 font-bold text-[#62973b] ${className}`}>
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-label="BambooHR">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5S10.52 7.5 13 7.5c1.47 0 2.78.71 3.59 1.81l-1.63 1.22c-.44-.64-1.16-1.03-1.96-1.03-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.8 0 1.52-.39 1.96-1.03l1.63 1.22c-.81 1.1-2.12 1.81-3.59 1.81z"/>
      <circle cx="17.5" cy="8.5" r="1.5" fill="#62973b" />
    </svg>
    <span className="text-[17px] tracking-tight font-extrabold text-[#528d2c] lowercase">bamboohr</span>
  </div>
);

export const GustoLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-1.5 font-bold text-[#f44336] ${className}`}>
    <span className="text-[20px] font-black tracking-tight text-[#e04538] lowercase">gusto</span>
  </div>
);

export const WorkdayLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg viewBox="0 0 30 18" className="w-7 h-5" fill="none">
      <path d="M2 14C5 7 10 4 15 4C20 4 25 7 28 14" stroke="#0875e1" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M6 14C8 9 11 7 15 7C19 7 22 9 24 14" stroke="#e87722" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-[17px] font-bold text-[#0055b8] tracking-tight">workday</span>
  </div>
);

export const HiBobLogo: React.FC<{ className?: string }> = ({ className = "h-7" }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <span className="text-[22px] font-extrabold text-[#e24444] tracking-tighter">bob</span>
    <span className="w-2 h-2 rounded-full bg-[#e24444] inline-block mb-2"></span>
  </div>
);

// Chat Integration Logos
export const SlackLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#e01e5a" d="M6 14.5a2.5 2.5 0 1 1-2.5-2.5H6v2.5zM7.5 14.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 1 1-5 0v-6z"/>
    <path fill="#36c5f0" d="M9.5 6a2.5 2.5 0 1 1 2.5-2.5V6H9.5zM9.5 7.5a2.5 2.5 0 0 1 0 5h-6a2.5 2.5 0 1 1 0-5h6z"/>
    <path fill="#2eb67d" d="M18 9.5a2.5 2.5 0 1 1 2.5 2.5H18V9.5zM16.5 9.5a2.5 2.5 0 0 1-5 0v-6a2.5 2.5 0 1 1 5 0v6z"/>
    <path fill="#ecb22e" d="M14.5 18a2.5 2.5 0 1 1-2.5 2.5V18h2.5zM14.5 16.5a2.5 2.5 0 0 1 0-5h6a2.5 2.5 0 1 1 0 5h-6z"/>
  </svg>
);

export const MicrosoftTeamsLogo: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#5059C9" d="M14.5 7h4a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-4V7z"/>
    <circle cx="16.5" cy="4.5" r="1.5" fill="#5059C9"/>
    <rect x="4" y="6" width="10" height="12" rx="2" fill="#7B83EB"/>
    <circle cx="9" cy="3.5" r="2" fill="#7B83EB"/>
    <path fill="#4B53BC" d="M4 8h10v8H4z"/>
    <text x="6" y="15" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif">T</text>
  </svg>
);

// Client Grid Logos (12 Companies)
export const AmazonLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <span className="text-[17px] font-black tracking-tight text-[#111210]">amazon</span>
    <svg viewBox="0 0 60 12" className="w-12 h-2.5 fill-none stroke-[#ff9900]" strokeWidth="2.2" strokeLinecap="round">
      <path d="M2 3C15 9 45 9 58 3"/>
      <path d="M52 2L58 3L54 7" fill="#ff9900" strokeWidth="1"/>
    </svg>
  </div>
);

export const GrammarlyLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="w-5 h-5 rounded-full bg-[#15c39a] flex items-center justify-center text-white font-bold text-xs">
      G
    </div>
    <span className="text-[16px] font-bold text-[#111210] tracking-tight">grammarly</span>
  </div>
);

export const DropboxLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0061ff]">
      <path d="M6 3.5l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM0 11.5l6 4 6-4-6-4-6 4zm24 0l-6-4-6 4 6 4 6-4zm-12 5l-6-4-3 2 9 6 9-6-3-2-6 4z"/>
    </svg>
    <span className="text-[16px] font-bold text-[#111210] tracking-tight">Dropbox</span>
  </div>
);

export const OracleLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-[15px] font-black tracking-widest text-[#f80000] uppercase font-sans">ORACLE</span>
  </div>
);

export const SlackGridLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <SlackLogo className="w-4 h-4" />
    <span className="text-[17px] font-bold text-[#111210] tracking-tight lowercase">slack</span>
  </div>
);

export const OktaLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <div className="w-4 h-4 rounded-full border-[3px] border-[#007dc1]" />
    <span className="text-[17px] font-bold text-[#111210] tracking-tight lowercase">okta</span>
  </div>
);

export const TwitterLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <span className="text-[16px] font-bold text-[#1d9bf0] tracking-tight lowercase">twitter</span>
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1d9bf0]">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  </div>
);

export const MastercardLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <div className="flex items-center -space-x-2">
      <div className="w-4 h-4 rounded-full bg-[#eb001b]" />
      <div className="w-4 h-4 rounded-full bg-[#f79e1b] opacity-90" />
    </div>
    <span className="text-[14px] font-medium text-[#111210] tracking-tight lowercase">mastercard</span>
  </div>
);

export const SoftserveLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-[15px] font-extrabold text-[#111210] tracking-tight font-mono">softserve_</span>
  </div>
);

export const SiemensLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-[16px] font-black text-[#00646e] tracking-wider font-sans">SIEMENS</span>
  </div>
);

export const LuxoftLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-[16px] font-bold text-[#1b2b52] tracking-tight">Luxoft</span>
  </div>
);

export const DeloitteLogo: React.FC<{ className?: string }> = ({ className = "h-6" }) => (
  <div className={`flex items-center font-bold text-[17px] text-[#111210] tracking-tight ${className}`}>
    <span>Deloitte</span>
    <span className="w-1.5 h-1.5 rounded-full bg-[#86bc25] inline-block ml-0.5 mt-2" />
  </div>
);
