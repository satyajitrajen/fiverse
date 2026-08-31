import React, { useState } from 'react';
import { HeroTeamIllustration } from './TeamIllustration';
import { SlackLogo, MicrosoftTeamsLogo, BambooHRLogo, GustoLogo, WorkdayLogo, HiBobLogo, FiverseIcon } from './Logos';
import { ChevronDown, MapPin, Laptop, Check } from 'lucide-react';
import { FadeIn, GlowOrb } from './Motion';

interface HeroSectionProps {
  onApplyClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-16 overflow-hidden">
      {/* Ambient Floating Glow Orbs */}
      <GlowOrb color="lime" size="xl" className="top-0 left-1/2 -translate-x-1/2 -z-10" />
      <GlowOrb color="blue" size="md" className="top-1/3 -right-24 -z-10 opacity-40" />

      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Main Headline */}
        <FadeIn direction="up" delay={0.1} duration={0.6} className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] sm:text-[48px] md:text-[54px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
            hybrid and remote teams <br />
            became easy to manage now
          </h1>

          {/* Interactive Toggle Switch */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-[13px] sm:text-[14px] font-medium text-[#3a4035] lowercase select-none">
              turn on fiverse
            </span>
            <button
              onClick={() => setIsOn(!isOn)}
              role="switch"
              aria-checked={isOn}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
                isOn ? 'bg-[#c8ff28]' : 'bg-[#d8dbd2]'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow-md ${
                  isOn ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </FadeIn>

        {/* Line-art Team Illustration */}
        <FadeIn direction="up" delay={0.2} duration={0.6} className="mt-2 mb-4">
          <HeroTeamIllustration activeStatus={isOn} />
        </FadeIn>

        {/* Hero Main Card */}
        <FadeIn direction="up" delay={0.3} duration={0.7}>
          <div className="relative bg-white rounded-[32px] sm:rounded-[36px] border border-[#e8ebd9] hero-card-shadow p-6 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
                    simple coordination <br />
                    for remote teams and <br />
                    flex offices
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed max-w-md">
                    easy to find and track who works from the office, who is remote/from home or is not available at all
                  </p>
                </div>

                {/* Chat integrations box */}
                <div className="pt-4 border-t border-[#f0f2eb] space-y-3">
                  <p className="text-[12px] sm:text-[13px] text-[#3a4035]">
                    integrate fiverse with your corporate chats to show statuses there
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f7f2] border border-[#e8ebe0] text-[13px] font-medium text-[#2d312e] shadow-2xs hover:bg-[#eff1ea] transition-colors cursor-pointer">
                      <SlackLogo className="w-4 h-4" />
                      <span>Slack</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f7f2] border border-[#e8ebe0] text-[13px] font-medium text-[#2d312e] shadow-2xs hover:bg-[#eff1ea] transition-colors cursor-pointer">
                      <MicrosoftTeamsLogo className="w-4 h-4" />
                      <span>Microsoft Teams</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right App UI Mockups Column */}
              <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[420px] select-none">
                {/* Soft Lime Glow backing */}
                <div className="absolute inset-0 bg-radial from-[#d9fb48]/30 via-transparent to-transparent blur-2xl pointer-events-none rounded-full" />

                {/* Main Lime / White App Window Card */}
                <div
                  className="relative w-full max-w-[340px] sm:max-w-[380px] bg-white rounded-2xl border border-[#e4e7dc] shadow-xl overflow-hidden z-10 animate-float-slow"
                >
                  {/* App Lime Header Bar */}
                  <div className="bg-[#c8ff28] px-4 py-3 flex items-center justify-between border-b border-[#bbf020]">
                    <div className="flex items-center gap-1.5">
                      <FiverseIcon className="w-4 h-4 rounded-xs" />
                      <span className="font-bold text-[14px] text-[#111210] tracking-tight lowercase">fiverse</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#111210] shadow-2xs cursor-pointer hover:bg-white/90 transition-colors">
                      <span>today (14 Jun)</span>
                      <ChevronDown className="w-3 h-3 text-[#111210]" />
                    </div>
                  </div>

                  {/* Team Status List */}
                  <div className="p-3.5 space-y-3 text-[12px]">
                    {/* Category: In Office */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#3a4035] uppercase tracking-wider px-1 mb-1.5">
                        <span>in office</span>
                        <span className="bg-[#eaf8cf] text-[#266314] px-1.5 py-0.5 rounded text-[10px] font-bold">8 / 12</span>
                      </div>

                      <div className="space-y-1.5">
                        {/* User 1 */}
                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#f8f9f5] hover:bg-[#f1f3eb] transition-colors">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                              alt="Alex Howard"
                              className="w-7 h-7 rounded-full object-cover border border-white shadow-2xs"
                            />
                            <div>
                              <p className="font-semibold text-[#111210] text-[12px] leading-tight">Alex Howard</p>
                              <p className="text-[10px] text-[#3a4035]">Product Designer</p>
                            </div>
                          </div>
                          <span className="bg-white border border-[#e4e7dd] text-[#333730] px-2 py-0.5 rounded-md text-[10px] font-medium flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#266314]" /> Desk 4
                          </span>
                        </div>

                        {/* User 2 */}
                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#f8f9f5] hover:bg-[#f1f3eb] transition-colors">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                              alt="Courtney Henry"
                              className="w-7 h-7 rounded-full object-cover border border-white shadow-2xs"
                            />
                            <div>
                              <p className="font-semibold text-[#111210] text-[12px] leading-tight">Courtney Henry</p>
                              <p className="text-[10px] text-[#3a4035]">Marketing Lead</p>
                            </div>
                          </div>
                          <span className="bg-white border border-[#e4e7dd] text-[#333730] px-2 py-0.5 rounded-md text-[10px] font-medium flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#266314]" /> Desk 2
                          </span>
                        </div>

                        {/* User 3 */}
                        <div className="flex items-center justify-between p-2 rounded-xl bg-[#f8f9f5] hover:bg-[#f1f3eb] transition-colors">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                              alt="Darrell Steward"
                              className="w-7 h-7 rounded-full object-cover border border-white shadow-2xs"
                            />
                            <div>
                              <p className="font-semibold text-[#111210] text-[12px] leading-tight">Darrell Steward</p>
                              <p className="text-[10px] text-[#3a4035]">Engineering</p>
                            </div>
                          </div>
                          <span className="bg-white border border-[#e4e7dd] text-[#333730] px-2 py-0.5 rounded-md text-[10px] font-medium flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#266314]" /> Room 1
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category: Remote */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#3a4035] uppercase tracking-wider px-1 mb-1.5">
                        <span>remote</span>
                        <span className="bg-[#e4eff8] text-[#1c6499] px-1.5 py-0.5 rounded text-[10px] font-bold">4 / 12</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-[#f8f9f5] hover:bg-[#f1f3eb] transition-colors">
                        <div className="flex items-center gap-2.5">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
                            alt="Jenny Wilson"
                            className="w-7 h-7 rounded-full object-cover border border-white shadow-2xs"
                          />
                          <div>
                            <p className="font-semibold text-[#111210] text-[12px] leading-tight">Jenny Wilson</p>
                            <p className="text-[10px] text-[#3a4035]">People & HR</p>
                          </div>
                        </div>
                        <span className="bg-[#e7f3fd] text-[#0f5c9e] border border-[#d2e7fa] px-2 py-0.5 rounded-md text-[10px] font-medium flex items-center gap-1">
                          <Laptop className="w-2.5 h-2.5" /> Remote
                        </span>
                      </div>
                    </div>

                    {/* Avatar stack footer */}
                    <div className="pt-2 flex items-center justify-between px-1 border-t border-[#f0f2eb]">
                      <span className="text-[11px] text-[#3a4035]">Day off & Vacation</span>
                      <div className="flex items-center -space-x-2">
                        <img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=80" alt="Avatar" />
                        <img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&auto=format&fit=crop&q=80" alt="Avatar" />
                        <div className="w-5 h-5 rounded-full bg-[#111210] text-white text-[9px] font-bold flex items-center justify-center border border-white">
                          +2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlapping Dark Floating Profile Widget */}
                <div
                  className="absolute left-1 sm:-left-6 -bottom-4 bg-[#141513] text-white p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-[#2a2c28] max-w-[190px] sm:max-w-[210px] z-20"
                >
                  {/* Traffic lights */}
                  <div className="flex items-center gap-1.5 mb-2 sm:mb-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  </div>

                  <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80"
                      alt="Kristin Watson"
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-[#3b3d37]"
                    />
                    <div>
                      <p className="font-bold text-[11px] sm:text-[12px] leading-tight text-white">Kristin Watson</p>
                      <p className="text-[10px] text-[#a4a99d]">Frontend developer</p>
                    </div>
                  </div>

                  <div className="bg-[#242621] px-2 py-1 rounded-lg flex items-center justify-between">
                    <span className="text-[10px] font-medium text-[#c8ff28] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff28] animate-pulse" />
                      working at home
                    </span>
                    <Check className="w-3 h-3 text-[#c8ff28]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Integration Logos Bar */}
        <FadeIn direction="up" delay={0.4} className="mt-10 sm:mt-14 text-center space-y-4">
          <p className="text-[12px] sm:text-[13px] font-medium text-[#3a4035] tracking-wide">
            import employee/team data directly from
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 opacity-90 hover:opacity-100 transition-opacity">
            <div><BambooHRLogo className="h-5 sm:h-6" /></div>
            <div><GustoLogo className="h-5 sm:h-6" /></div>
            <div><WorkdayLogo className="h-5 sm:h-6" /></div>
            <div><HiBobLogo className="h-5 sm:h-6" /></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
