import React, { useState } from 'react';
import { Home, RefreshCw, Sun, Palmtree, PartyPopper, Calendar, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, GlowOrb } from './Motion';

interface CustomStatusesSectionProps {
  onBetaClick: () => void;
}

export const CustomStatusesSection: React.FC<CustomStatusesSectionProps> = ({ onBetaClick }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('swap');
  const dayOffDate = 'Jun 14, 2023';
  const workOnDate = 'Jul 4, 2023';
  const contactPerson = 'Alex Howard';
  const [isSent, setIsSent] = useState(false);

  const statuses = [
    { id: 'home', label: 'working at home', icon: Home, color: 'text-[#4878a8]' },
    { id: 'swap', label: 'swap working day', icon: RefreshCw, color: 'text-[#e67e22]', active: true },
    { id: 'dayoff', label: 'day off', icon: Sun, color: 'text-[#e0a800]' },
    { id: 'vacation', label: 'vacation', icon: Palmtree, color: 'text-[#2ecc71]' },
    { id: 'celebration', label: 'celebration', icon: PartyPopper, color: 'text-[#9b59b6]' },
  ];

  const handleSendRequest = () => {
    setIsSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setIsSent(false), 3500);
  };

  return (
    <section className="w-full py-16 sm:py-24 relative overflow-hidden">
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: UI Mockups with Custom Status Badges & Form */}
          <FadeIn direction="left" className="lg:col-span-7 relative flex items-center justify-center">
            {/* Subtle glow background */}
            <GlowOrb color="lime" size="xl" className="top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />

            <div className="relative w-full max-w-[540px] flex items-center gap-4 sm:gap-6">
              {/* Vertical list of status pills on left */}
              <div className="flex flex-col gap-2.5 z-10 select-none">
                {statuses.map((s) => {
                  const Icon = s.icon;
                  const isCurrent = selectedStatus === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStatus(s.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium transition-all duration-200 cursor-pointer text-left whitespace-nowrap shadow-xs ${
                        isCurrent
                          ? 'bg-white border-2 border-[#111210] text-[#111210] shadow-md'
                          : 'bg-white/80 backdrop-blur-xs border border-[#e4e7dd] text-[#555a50] hover:bg-white hover:text-[#111210]'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center ${s.color} bg-[#f5f6f1]`}>
                        <Icon className="w-3 h-3" />
                      </span>
                      <span>{s.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main "swap working day" Modal Card */}
              <div
                className="flex-1 bg-white rounded-3xl border border-[#e4e8db] floating-card-shadow p-5 sm:p-6 z-20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#f2f4ec]">
                  <div className="w-8 h-8 rounded-full bg-[#fef2e6] border border-[#fbd4ab] flex items-center justify-center text-[#e67e22]">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] text-[#111210] leading-tight">swap working day</h3>
                    <p className="text-[11px] text-[#7a8076]">Request team lead approval</p>
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] font-medium text-[#464b42] mb-1.5">
                      I want a day off on
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between px-3 py-2 bg-[#f7f8f4] border border-[#e5e8dc] rounded-xl text-[12px] font-medium text-[#111210]">
                        <span>{dayOffDate}</span>
                        <Calendar className="w-3.5 h-3.5 text-[#73786e]" />
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 bg-[#f7f8f4] border border-[#e5e8dc] rounded-xl text-[12px] font-medium text-[#111210]">
                        <span>{workOnDate}</span>
                        <Calendar className="w-3.5 h-3.5 text-[#73786e]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-medium text-[#464b42] mb-1.5">
                      When I'm out of office please contact
                    </p>
                    <div className="flex items-center justify-between px-3 py-2 bg-[#f7f8f4] border border-[#e5e8dc] rounded-xl text-[12px] font-medium text-[#111210] cursor-pointer hover:border-[#cbd0c0]">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                          alt="Alex Howard"
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span>{contactPerson}</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-[#73786e]" />
                    </div>
                  </div>

                  {/* Send Request Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSendRequest}
                      className="w-full bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[13px] py-3 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSent ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#111210]" />
                          <span>Request sent to Alex & Team!</span>
                        </>
                      ) : (
                        <span>Send request</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Copy & CTA */}
          <FadeIn direction="right" className="lg:col-span-5 space-y-6">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              create your own <br />
              custom statuses to <br />
              optimise routine
            </h2>

            <div className="space-y-4 max-w-md">
              <p className="text-[15px] font-medium text-[#2b2e29] leading-snug">
                every team has individual processes
              </p>
              <p className="text-[14px] text-[#61665d] leading-relaxed">
                in addition to standard statuses, you can set up your own statuses with customised rules
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onBetaClick}
                className="bg-[#111210] hover:bg-[#252823] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>sign up for beta launch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
