import React from 'react';

interface TeamIllustrationProps {
  activeStatus?: boolean;
}

export const HeroTeamIllustration: React.FC<TeamIllustrationProps> = ({
  activeStatus = false
}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 pb-2 px-4 select-none">
      {/* Background Lime Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[260px] bg-radial from-[#d4fb42]/50 via-[#e2fd78]/25 to-transparent blur-2xl pointer-events-none rounded-full" />

      {/* Speech Bubbles */}
      <div className="relative w-full max-w-4xl mx-auto h-16 pointer-events-none">
        {/* Bubble 1 */}
        <div className="absolute left-[5%] top-0 animate-bounce duration-1000">
          <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl text-[11px] font-medium text-[#2d312e] border border-[#e1e5d8] shadow-xs relative whitespace-nowrap">
            can anyone see my screen?
            <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-r border-b border-[#e1e5d8] rotate-45" />
          </div>
        </div>

        {/* Bubble 2 */}
        <div className="absolute left-[30%] -top-2">
          <div className="bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl text-[11px] font-medium text-[#2d312e] border border-[#e1e5d8] shadow-xs relative whitespace-nowrap">
            are you coming to the office today?
            <div className="absolute -bottom-1.5 left-10 w-3 h-3 bg-white border-r border-b border-[#e1e5d8] rotate-45" />
          </div>
        </div>

        {/* Bubble 3 */}
        <div className="absolute left-[54%] -top-1">
          <div className="bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-2xl text-[11px] font-medium text-[#2d312e] border border-[#e1e5d8] shadow-xs relative whitespace-nowrap">
            what's the wifi in the office?
            <div className="absolute -bottom-1.5 left-8 w-3 h-3 bg-white border-r border-b border-[#e1e5d8] rotate-45" />
          </div>
        </div>

        {/* Bubble 4 */}
        <div className="absolute right-[8%] top-0">
          <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-2xl text-[11px] font-medium text-[#2d312e] border border-[#e1e5d8] shadow-xs relative whitespace-nowrap">
            can someone unlock the door?
            <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-r border-b border-[#e1e5d8] rotate-45" />
          </div>
        </div>
      </div>

      {/* Line Art Vector Illustration */}
      <div className="relative w-full h-[180px] sm:h-[220px] flex items-end justify-center overflow-visible">
        <svg
          viewBox="0 0 1100 230"
          className="w-full h-full object-contain overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Character 1: Girl with shoulder strap bag & glasses */}
          <g transform="translate(60, 20)" className="transition-transform duration-300 hover:-translate-y-1">
            {/* Head & Hair */}
            <circle cx="30" cy="30" r="14" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M18 26C18 16 26 12 34 12C42 12 45 20 45 30C45 32 40 33 38 31" fill="#111210" />
            <circle cx="34" cy="29" r="2.5" fill="#111210" />
            {/* Torso & Jacket */}
            <path d="M22 45C16 55 14 70 12 110L48 110C46 70 44 55 38 45Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M22 45L30 80L38 45" stroke="#111210" strokeWidth="2" />
            <path d="M16 55L44 95" stroke="#111210" strokeWidth="2" strokeDasharray="3 3" />
            {/* Bag */}
            <path d="M40 90C40 85 48 85 48 95L48 110L38 110Z" fill={activeStatus ? "#c8ff28" : "#222"} stroke="#111210" strokeWidth="2" />
            {/* Legs */}
            <path d="M18 110L16 195M42 110L44 195" stroke="#111210" strokeWidth="2.5" />
            {/* Shoes */}
            <ellipse cx="14" cy="197" rx="7" ry="3" fill="#111210" />
            <ellipse cx="46" cy="197" rx="7" ry="3" fill="#111210" />
          </g>

          {/* Character 2: Guy with hoodie & open laptop */}
          <g transform="translate(130, 15)" className="transition-transform duration-300 hover:-translate-y-1">
            {/* Head */}
            <circle cx="32" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M20 25C20 15 28 14 36 14C44 14 46 22 46 28" fill="#111210" />
            {/* Torso / Dark Hoodie */}
            <path d="M16 42C12 55 10 75 10 115L54 115C54 75 52 55 48 42Z" fill="#111210" stroke="#111210" strokeWidth="2.5" />
            {/* Laptop held */}
            <rect x="20" y="65" width="28" height="20" rx="3" fill={activeStatus ? "#c8ff28" : "#ffffff"} stroke="#111210" strokeWidth="2" />
            <line x1="16" y1="85" x2="52" y2="85" stroke="#111210" strokeWidth="2.5" strokeLinecap="round" />
            {/* Legs */}
            <path d="M18 115L17 200M46 115L47 200" stroke="#111210" strokeWidth="2.5" />
            {/* Shoes */}
            <ellipse cx="15" cy="202" rx="7" ry="3" fill="#111210" />
            <ellipse cx="49" cy="202" rx="7" ry="3" fill="#111210" />
          </g>

          {/* Character 3: Woman in trench coat with coffee */}
          <g transform="translate(210, 10)" className="transition-transform duration-300 hover:-translate-y-1">
            {/* Head & Bun */}
            <circle cx="30" cy="26" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <circle cx="30" cy="11" r="7" fill="#111210" />
            <path d="M18 24C20 16 38 16 42 24" fill="#111210" />
            {/* Coat */}
            <path d="M14 40L8 140L52 140L46 40Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M28 40L28 140" stroke="#111210" strokeWidth="2" />
            <path d="M8 85H52" stroke="#111210" strokeWidth="2.5" />
            {/* Coffee cup */}
            <path d="M42 75L44 90H52L54 75Z" fill={activeStatus ? "#c8ff28" : "#ffffff"} stroke="#111210" strokeWidth="2" />
            {/* Legs */}
            <path d="M18 140L18 205M42 140L42 205" stroke="#111210" strokeWidth="2.5" />
            {/* Shoes */}
            <ellipse cx="16" cy="207" rx="6" ry="3" fill="#111210" />
            <ellipse cx="44" cy="207" rx="6" ry="3" fill="#111210" />
          </g>

          {/* Character 4: Guy with tablet & cross-body */}
          <g transform="translate(290, 20)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="30" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M18 22C24 12 36 12 42 22" fill="#111210" />
            {/* Sweater */}
            <path d="M14 42L10 110L50 110L46 42Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <line x1="14" y1="45" x2="48" y2="105" stroke="#111210" strokeWidth="2.5" />
            <rect x="22" y="60" width="22" height="28" rx="2" fill={activeStatus ? "#c8ff28" : "#ffffff"} stroke="#111210" strokeWidth="2" />
            {/* Dark Pants */}
            <path d="M10 110L14 195M50 110L46 195" stroke="#111210" strokeWidth="2.5" />
            <path d="M10 110H50L46 195L30 195L30 125L30 195L14 195Z" fill="#111210" />
            <ellipse cx="13" cy="197" rx="6" ry="3" fill="#111210" />
            <ellipse cx="47" cy="197" rx="6" ry="3" fill="#111210" />
          </g>

          {/* Character 5: Standing in solid dark suit (Center Pillar) */}
          <g transform="translate(360, 5)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="32" cy="28" r="14" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M18 24C18 14 46 14 46 24" fill="#111210" />
            {/* Solid Dark Jacket & Pants */}
            <path d="M12 42C8 60 6 85 6 120L58 120C58 85 56 60 52 42Z" fill="#111210" stroke="#111210" strokeWidth="2.5" />
            <path d="M26 42L32 65L38 42" stroke="#ffffff" strokeWidth="2" />
            {/* Legs */}
            <path d="M6 120L10 210H26L32 145L38 210H54L58 120Z" fill="#111210" stroke="#111210" strokeWidth="2" />
            <ellipse cx="17" cy="212" rx="8" ry="3.5" fill="#111210" />
            <ellipse cx="47" cy="212" rx="8" ry="3.5" fill="#111210" />
          </g>

          {/* Character 6: Woman with lime highlight dress / shirt */}
          <g transform="translate(440, 15)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="30" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M16 28C16 14 44 14 44 28" fill="#111210" />
            {/* Shirt */}
            <path d="M16 42L12 105L48 105L44 42Z" fill={activeStatus ? "#c8ff28" : "#ffffff"} stroke="#111210" strokeWidth="2.5" />
            {/* Cross arms */}
            <path d="M14 60Q30 75 46 60" stroke="#111210" strokeWidth="2.5" fill="none" />
            {/* Dark Skirt */}
            <path d="M12 105L8 155L52 155L48 105Z" fill="#111210" stroke="#111210" strokeWidth="2.5" />
            {/* Legs */}
            <path d="M20 155L20 200M40 155L40 200" stroke="#111210" strokeWidth="2.5" />
            <ellipse cx="18" cy="202" rx="6" ry="3" fill="#111210" />
            <ellipse cx="42" cy="202" rx="6" ry="3" fill="#111210" />
          </g>

          {/* Character 7: Guy with backpack & cap */}
          <g transform="translate(510, 10)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="30" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            {/* Cap */}
            <path d="M16 22H44L52 22" stroke="#111210" strokeWidth="3" strokeLinecap="round" />
            <path d="M18 22C18 12 42 12 42 22" fill="#111210" />
            {/* Torso & Backpack */}
            <path d="M6 50C6 40 16 45 16 55L14 95C14 105 6 100 6 90Z" fill="#111210" />
            <path d="M14 42L12 110L48 110L46 42Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <line x1="20" y1="44" x2="20" y2="110" stroke="#111210" strokeWidth="2" />
            <line x1="40" y1="44" x2="40" y2="110" stroke="#111210" strokeWidth="2" />
            {/* Dark Jeans */}
            <path d="M12 110L14 205H26L30 135L34 205H46L48 110Z" fill="#111210" stroke="#111210" strokeWidth="2" />
            <ellipse cx="19" cy="207" rx="7" ry="3" fill="#111210" />
            <ellipse cx="41" cy="207" rx="7" ry="3" fill="#111210" />
          </g>

          {/* Character 8: Woman with long hair & notebook */}
          <g transform="translate(580, 20)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="30" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M16 28C16 12 44 12 44 28V50C44 55 40 55 40 45" fill="#111210" />
            {/* Blouse */}
            <path d="M16 42L12 105L48 105L44 42Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            {/* Notebook */}
            <rect x="22" y="65" width="20" height="24" rx="2" fill={activeStatus ? "#c8ff28" : "#ffffff"} stroke="#111210" strokeWidth="2" />
            <line x1="26" y1="72" x2="38" y2="72" stroke="#111210" strokeWidth="1.5" />
            <line x1="26" y1="78" x2="38" y2="78" stroke="#111210" strokeWidth="1.5" />
            {/* Pants */}
            <path d="M12 105L14 195M48 105L46 195" stroke="#111210" strokeWidth="2.5" />
            <ellipse cx="14" cy="197" rx="6" ry="3" fill="#111210" />
            <ellipse cx="46" cy="197" rx="6" ry="3" fill="#111210" />
          </g>

          {/* Character 9: Guy in solid dark sweater checking watch */}
          <g transform="translate(650, 10)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="32" cy="28" r="14" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M18 24C18 14 46 14 46 24" fill="#111210" />
            <path d="M12 42C8 60 8 85 8 115L56 115C56 85 56 60 52 42Z" fill="#111210" stroke="#111210" strokeWidth="2.5" />
            {/* Arm with watch */}
            <path d="M12 55L24 75L36 75" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <rect x="30" y="71" width="6" height="8" rx="1" fill={activeStatus ? "#c8ff28" : "#ffffff"} />
            {/* Pants */}
            <path d="M8 115L12 205M56 115L52 205" stroke="#111210" strokeWidth="2.5" />
            <ellipse cx="12" cy="207" rx="7" ry="3" fill="#111210" />
            <ellipse cx="52" cy="207" rx="7" ry="3" fill="#111210" />
          </g>

          {/* Character 10: Casual guy with jacket */}
          <g transform="translate(730, 15)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="30" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M18 22C24 14 36 14 42 22" fill="#111210" />
            <path d="M14 42L10 110L50 110L46 42Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M22 42L22 110M38 42L38 110" stroke="#111210" strokeWidth="2" />
            <path d="M10 110L14 200M50 110L46 200" stroke="#111210" strokeWidth="2.5" />
            <ellipse cx="14" cy="202" rx="6" ry="3" fill="#111210" />
            <ellipse cx="46" cy="202" rx="6" ry="3" fill="#111210" />
          </g>

          {/* Character 11: Woman with trench coat & phone */}
          <g transform="translate(800, 15)" className="transition-transform duration-300 hover:-translate-y-1">
            <circle cx="30" cy="28" r="13" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M16 26C16 14 44 14 44 26" fill="#111210" />
            <path d="M14 42L10 120L50 120L46 42Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M10 120L12 200M50 120L48 200" stroke="#111210" strokeWidth="2.5" />
            <ellipse cx="12" cy="202" rx="6" ry="3" fill="#111210" />
            <ellipse cx="48" cy="202" rx="6" ry="3" fill="#111210" />
          </g>

          {/* Character 12 (Right Corner): Person sitting casually with laptop */}
          <g transform="translate(880, 55)" className="transition-transform duration-300 hover:-translate-y-1">
            {/* Head */}
            <circle cx="28" cy="22" r="12" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            <path d="M16 20C18 12 36 12 40 20" fill="#111210" />
            {/* Sitting Body */}
            <path d="M14 34L10 80L44 80L42 34Z" fill="#ffffff" stroke="#111210" strokeWidth="2.5" />
            {/* Crossed/bent legs */}
            <path d="M10 80L-4 105L-2 150M44 80L34 105L36 150" stroke="#111210" strokeWidth="2.5" />
            {/* Laptop on knees */}
            <rect x="6" y="58" width="24" height="16" rx="2" fill={activeStatus ? "#c8ff28" : "#111210"} stroke="#111210" strokeWidth="2" />
            <ellipse cx="-2" cy="152" rx="6" ry="3" fill="#111210" />
            <ellipse cx="36" cy="152" rx="6" ry="3" fill="#111210" />
          </g>
        </svg>
      </div>
    </div>
  );
};

// Bottom Team Illustration for Pre-Footer
export const FooterTeamIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 select-none -mb-6 z-10">
      {/* Lime glow behind team */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[180px] bg-radial from-[#d4fb42]/45 via-[#e2fd78]/20 to-transparent blur-xl pointer-events-none rounded-full" />

      <div className="relative w-full h-[140px] sm:h-[180px] flex items-end justify-center overflow-visible">
        <svg
          viewBox="0 0 1000 180"
          className="w-full h-full object-contain overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Standing Team Members in Row */}
          {/* 1 */}
          <g transform="translate(40, 5)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M8 30L6 85L34 85L32 30Z" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M6 85L8 160M34 85L32 160" stroke="#111210" strokeWidth="2" />
            <ellipse cx="8" cy="161" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="32" cy="161" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 2 */}
          <g transform="translate(100, 0)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M6 30L4 85L36 85L34 30Z" fill="#111210" stroke="#111210" strokeWidth="2" />
            <path d="M4 85L6 165M36 85L34 165" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="166" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="166" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 3 */}
          <g transform="translate(170, 8)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 16C12 8 28 8 30 16" fill="#111210" />
            <path d="M8 30L4 100L36 100L32 30Z" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M4 100L6 155M36 100L34 155" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="156" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="156" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 4 */}
          <g transform="translate(240, 5)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M6 30L4 85L36 85L34 30Z" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M4 85L6 160M36 85L34 160" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="161" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="161" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 5 (Center solid dark) */}
          <g transform="translate(310, 0)">
            <circle cx="22" cy="20" r="11" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 32 10 34 18" fill="#111210" />
            <path d="M6 30L4 90L40 90L38 30Z" fill="#111210" stroke="#111210" strokeWidth="2" />
            <path d="M4 90L6 168M40 90L38 168" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="169" rx="6" ry="2.5" fill="#111210" />
            <ellipse cx="38" cy="169" rx="6" ry="2.5" fill="#111210" />
          </g>

          {/* 6 */}
          <g transform="translate(380, 5)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M6 30L4 85L36 85L34 30Z" fill="#c8ff28" stroke="#111210" strokeWidth="2" />
            <path d="M4 85L6 160M36 85L34 160" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="161" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="161" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 7 */}
          <g transform="translate(450, 0)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M6 30L4 85L36 85L34 30Z" fill="#111210" stroke="#111210" strokeWidth="2" />
            <path d="M4 85L6 165M36 85L34 165" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="166" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="166" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 8 */}
          <g transform="translate(520, 8)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M6 30L4 85L36 85L34 30Z" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M4 85L6 155M36 85L34 155" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="156" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="156" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 9 */}
          <g transform="translate(590, 0)">
            <circle cx="22" cy="20" r="11" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 32 10 34 18" fill="#111210" />
            <path d="M6 30L4 90L40 90L38 30Z" fill="#111210" stroke="#111210" strokeWidth="2" />
            <path d="M4 90L6 168M40 90L38 168" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="169" rx="6" ry="2.5" fill="#111210" />
            <ellipse cx="38" cy="169" rx="6" ry="2.5" fill="#111210" />
          </g>

          {/* 10 */}
          <g transform="translate(660, 5)">
            <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M10 18C12 10 28 10 30 18" fill="#111210" />
            <path d="M6 30L4 85L36 85L34 30Z" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M4 85L6 160M36 85L34 160" stroke="#111210" strokeWidth="2" />
            <ellipse cx="6" cy="161" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="161" rx="5" ry="2.5" fill="#111210" />
          </g>

          {/* 11 Sitting person on card corner */}
          <g transform="translate(740, 45)">
            <circle cx="24" cy="20" r="11" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            <path d="M14 18C16 10 32 10 34 18" fill="#111210" />
            <path d="M10 32L6 75L40 75L38 32Z" fill="#ffffff" stroke="#111210" strokeWidth="2" />
            {/* Hanging legs */}
            <path d="M6 75L0 95L-2 135M40 75L32 95L34 135" stroke="#111210" strokeWidth="2.5" />
            <rect x="4" y="52" width="22" height="15" rx="2" fill="#111210" />
            <ellipse cx="-2" cy="136" rx="5" ry="2.5" fill="#111210" />
            <ellipse cx="34" cy="136" rx="5" ry="2.5" fill="#111210" />
          </g>
        </svg>
      </div>
    </div>
  );
};
