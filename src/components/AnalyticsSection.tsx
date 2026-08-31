import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { FadeIn, GlowOrb, HoverCard } from './Motion';

interface AnalyticsSectionProps {
  onApplyClick: () => void;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ onApplyClick }) => {
  return (
    <section className="w-full py-16 sm:py-24 relative overflow-hidden">
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Analytics Cards */}
          <FadeIn direction="left" className="lg:col-span-7 relative flex flex-col items-center justify-center">
            {/* Lime Glow behind analytics */}
            <GlowOrb color="lime" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 pointer-events-none" />

            <div className="relative w-full max-w-[500px] space-y-4">
              {/* Top Row: 2 Floating Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Office Workload Donut */}
                <HoverCard yOffset={-4} className="bg-white rounded-3xl p-5 border border-[#e5e8dc] card-soft-shadow hover:border-[#111210] transition-colors space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-bold text-[#111210]">office workload</p>
                    <div className="w-2 h-2 rounded-full bg-[#c8ff28]" />
                  </div>

                  {/* SVG Donut Chart */}
                  <div className="relative flex items-center justify-center py-2">
                    <svg viewBox="0 0 100 100" className="w-28 h-28 transform -rotate-90">
                      {/* 82% Lime green segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#c8ff28"
                        strokeWidth="12"
                        strokeDasharray="195 238"
                        strokeDashoffset="0"
                      />
                      {/* 11% Teal segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#38bdf8"
                        strokeWidth="12"
                        strokeDasharray="26 238"
                        strokeDashoffset="-195"
                      />
                      {/* 7% Orange segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="transparent"
                        stroke="#fb923c"
                        strokeWidth="12"
                        strokeDasharray="17 238"
                        strokeDashoffset="-221"
                      />
                    </svg>

                    {/* Donut Center Percentage */}
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-[18px] font-extrabold text-[#111210] leading-none">82%</span>
                      <span className="text-[9px] text-[#787d72] font-semibold">in office</span>
                    </div>
                  </div>

                  {/* Donut Legend */}
                  <div className="flex items-center justify-between text-[10px] font-medium text-[#5c6158] pt-1">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#c8ff28]" /> 82% office
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8]" /> 11%
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#fb923c]" /> 7%
                    </span>
                  </div>
                </HoverCard>

                {/* Card 2: Individual Employee Effectivity Ring */}
                <HoverCard yOffset={-4} className="bg-white rounded-3xl p-5 border border-[#e5e8dc] card-soft-shadow hover:border-[#111210] transition-colors flex flex-col justify-between space-y-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80"
                      alt="Ira Watson"
                      className="w-9 h-9 rounded-full object-cover border border-white shadow-xs"
                    />
                    <div>
                      <p className="text-[13px] font-bold text-[#111210] leading-tight">Ira Watson</p>
                      <p className="text-[10px] text-[#71776d] leading-tight">Head of Sales, SF</p>
                    </div>
                  </div>

                  {/* Circular Progress Gauge */}
                  <div className="flex items-center gap-3 bg-[#f8f9f5] p-3 rounded-2xl border border-[#e9ece1]">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-12 h-12 transform -rotate-90">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e6e9df"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#c8ff28"
                          strokeWidth="3.5"
                          strokeDasharray="82, 100"
                        />
                      </svg>
                      <span className="absolute text-[12px] font-black text-[#111210]">82%</span>
                    </div>

                    <div className="text-[11px] leading-tight">
                      <p className="font-bold text-[#111210]">Office attendance</p>
                      <p className="text-[10px] text-[#7c8276] mt-0.5">30-day average</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-[#4f701c] font-semibold bg-[#eef7d5] px-2.5 py-1 rounded-lg">
                    <TrendingUp className="w-3 h-3" />
                    <span>+14% vs team benchmark</span>
                  </div>
                </HoverCard>
              </div>

              {/* Bottom Card: Monthly Statuses Stacked Bar Chart */}
              <HoverCard yOffset={-4} className="bg-white rounded-3xl p-5 border border-[#e5e8dc] card-soft-shadow hover:border-[#111210] transition-colors space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-bold text-[#111210]">Statuses</p>
                  <div className="flex items-center gap-2 text-[10px] font-medium text-[#656a60]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#c8ff28]" /> In office
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8]" /> Remote
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#fb923c]" /> Day off
                    </span>
                  </div>
                </div>

                {/* Bars */}
                <div className="grid grid-cols-5 gap-3 pt-2 items-end h-32 px-2">
                  {[
                    { month: 'april', office: 70, remote: 20, off: 10 },
                    { month: 'may', office: 85, remote: 10, off: 5 },
                    { month: 'june', office: 65, remote: 25, off: 10 },
                    { month: 'july', office: 90, remote: 8, off: 2 },
                    { month: 'august', office: 80, remote: 15, off: 5 },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                      <div className="w-6 sm:w-8 h-24 bg-[#f2f4ec] rounded-full overflow-hidden flex flex-col-reverse p-0.5 gap-0.5 transition-transform group-hover:scale-105">
                        <div
                          style={{ height: `${bar.office}%` }}
                          className="w-full bg-[#c8ff28] rounded-full transition-all duration-500"
                        />
                        <div
                          style={{ height: `${bar.remote}%` }}
                          className="w-full bg-[#38bdf8] rounded-full"
                        />
                        <div
                          style={{ height: `${bar.off}%` }}
                          className="w-full bg-[#fb923c] rounded-full"
                        />
                      </div>
                      <span className="text-[11px] font-medium text-[#6c7166] lowercase">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </HoverCard>
            </div>
          </FadeIn>

          {/* Right Column: Copy & CTA */}
          <FadeIn direction="right" className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              analyze your <br />
              team and office <br />
              effectivity
            </h2>

            <div className="space-y-4 max-w-md">
              <p className="text-[15px] font-medium text-[#2b2e29] leading-snug">
                data gives an opportunity to scale smart
              </p>
              <p className="text-[14px] text-[#61665d] leading-relaxed">
                analyze data from team attendance and office space occurence
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onApplyClick}
                className="bg-[#111210] hover:bg-[#252823] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>apply for 2 free months</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
