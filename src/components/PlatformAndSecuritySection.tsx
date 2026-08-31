import React from 'react';
import { FadeIn, HoverCard } from './Motion';

export const PlatformAndSecuritySection: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 relative">
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Mobile & Desktop */}
          <FadeIn direction="up" delay={0.1}>
            <HoverCard yOffset={-4} className="bg-white rounded-[32px] sm:rounded-[36px] border border-[#e4e7dc] card-soft-shadow p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-[#111210] transition-colors group h-full">
              {/* Top Device Graphic */}
              <div className="w-full h-28 flex items-center justify-start">
                <div className="relative flex items-end gap-2">
                  {/* Laptop Graphic */}
                  <div className="w-24 h-16 rounded-t-lg bg-[#f0f2eb] border-2 border-[#111210] p-1 flex flex-col justify-between relative shadow-sm">
                    <div className="w-full h-full bg-white rounded-xs p-1 flex flex-col gap-1">
                      <div className="w-full h-2 bg-[#c8ff28] rounded-xs" />
                      <div className="w-2/3 h-1 bg-[#e2e5dc] rounded-xs" />
                      <div className="w-1/2 h-1 bg-[#e2e5dc] rounded-xs" />
                    </div>
                    {/* Laptop base */}
                    <div className="absolute -bottom-1.5 -left-2 -right-2 h-1.5 bg-[#111210] rounded-b-md" />
                  </div>

                  {/* Mobile Phone Graphic */}
                  <div className="w-9 h-14 rounded-md bg-[#111210] p-0.5 shadow-sm -ml-3 z-10">
                    <div className="w-full h-full bg-white rounded-xs p-0.5 flex flex-col gap-1 justify-between">
                      <div className="w-full h-2 bg-[#c8ff28] rounded-xs" />
                      <div className="w-full h-1 bg-[#e2e5dc] rounded-xs" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111210] mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Bullets */}
              <div className="space-y-4">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                  app works <br />
                  from mobile and desktop
                </h3>

                <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#5e635a]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>iOS app for iPhone and iPad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>android app for mobile phones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>responsive web-app for desktop</span>
                  </li>
                </ul>
              </div>
            </HoverCard>
          </FadeIn>

          {/* Card 2: Security */}
          <FadeIn direction="up" delay={0.2}>
            <HoverCard yOffset={-4} className="bg-white rounded-[32px] sm:rounded-[36px] border border-[#e4e7dc] card-soft-shadow p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-[#111210] transition-colors group h-full">
              {/* Top Vault / Safe Graphic */}
              <div className="w-full h-28 flex items-center justify-start">
                <div className="relative">
                  {/* Safe Outer Box */}
                  <div className="w-24 h-18 rounded-xl bg-[#f0f2eb] border-2 border-[#111210] p-2 flex items-center justify-center relative shadow-sm">
                    {/* Safe Inner Screen */}
                    <div className="w-16 h-11 bg-white border border-[#d8dcd0] rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div className="w-8 h-4 bg-[#c8ff28] rounded-xs flex items-center justify-center border border-[#bceb1f]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                      </div>
                    </div>
                    {/* Bolt indicators */}
                    <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#111210]" />
                    <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#111210]" />
                    <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#111210]" />
                    <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#111210]" />
                  </div>
                </div>
              </div>

              {/* Title & Bullets */}
              <div className="space-y-4">
                <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                  all your data <br />
                  are secured
                </h3>

                <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#5e635a]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>PIN-code and Face/Touch ID</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>2-factor authentication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>dedicated server for companies from 1k</span>
                  </li>
                </ul>
              </div>
            </HoverCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
