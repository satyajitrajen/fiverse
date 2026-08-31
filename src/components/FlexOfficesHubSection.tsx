import React, { useState } from 'react';
import {
  AmazonLogo,
  GrammarlyLogo,
  DropboxLogo,
  OracleLogo,
  SlackGridLogo,
  OktaLogo,
  TwitterLogo,
  MastercardLogo,
  SoftserveLogo,
  SiemensLogo,
  LuxoftLogo,
  DeloitteLogo
} from './Logos';
import { ChevronDown, Calendar, Plus, CheckCircle, MapPin, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, StaggerContainer, StaggerItem, GlowOrb } from './Motion';

interface FlexOfficesHubSectionProps {
  onRequestDemoClick: () => void;
}

export const FlexOfficesHubSection: React.FC<FlexOfficesHubSectionProps> = ({ onRequestDemoClick }) => {
  const selectedOffice = 'London HQ';
  const bookingDate = 'June 14, 2023';
  const [deskCount, setDeskCount] = useState(25);
  const [bookedSuccess, setBookedSuccess] = useState(false);
  const [selectedDesk, setSelectedDesk] = useState<number | null>(null);

  const deskUsers = [
    {
      id: 1,
      name: 'Maya Moore',
      role: 'Design Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
      desk: 'Desk 01'
    },
    {
      id: 2,
      name: 'Cameron W.',
      role: 'Growth',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
      desk: 'Desk 02'
    },
    {
      id: 3,
      name: 'Johnny Bell',
      role: 'Backend Dev',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
      desk: 'Desk 03'
    },
  ];

  const handleBookNow = () => {
    setBookedSuccess(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => setBookedSuccess(false), 3500);
  };

  return (
    <section className="w-full py-12 sm:py-20 relative">
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Large Rounded Container */}
        <div className="bg-[#f0f2eb]/70 border border-[#e2e6d9] rounded-[36px] sm:rounded-[44px] p-6 sm:p-12 lg:p-14 space-y-14 sm:space-y-20 relative overflow-hidden">
          {/* Top Block: Title & Client Logos Grid */}
          <div className="space-y-10">
            <FadeIn direction="up" className="space-y-3">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold text-[#111210] tracking-tight leading-[1.15] lowercase">
                flex offices with half-remote teams <br className="hidden sm:inline" />
                are a new reality of management
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#63685e]">
                companies that already switched to hybrid model and use their offices as hubs
              </p>
            </FadeIn>

            {/* Client Logos Grid - 2 rows x 6 cols on desktop */}
            <StaggerContainer staggerDelay={0.04} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center py-4 px-2">
              {[
                AmazonLogo, GrammarlyLogo, DropboxLogo, OracleLogo, SlackGridLogo, OktaLogo,
                TwitterLogo, MastercardLogo, SoftserveLogo, SiemensLogo, LuxoftLogo, DeloitteLogo
              ].map((LogoComp, lIdx) => (
                <StaggerItem key={lIdx} className="w-full flex items-center justify-center p-2">
                  <div className="transition-transform">
                    <LogoComp />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Bottom Block: Two Columns (Copy on Left, Glowing Lime Desk Booking Widget on Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-[#e2e6d9]">
            {/* Left Column */}
            <FadeIn direction="left" className="lg:col-span-5 space-y-6">
              <h3 className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
                optimise your office <br />
                space via fiverse
              </h3>

              <p className="text-[14px] sm:text-[15px] text-[#61665c] leading-relaxed max-w-md">
                for hybrid teams who use their desks, open spaces and meeting rooms smart
              </p>

              <div className="pt-2">
                <button
                  onClick={onRequestDemoClick}
                  className="bg-[#111210] hover:bg-[#252823] text-white text-[14px] font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <span>request a demo</span>
                </button>
              </div>
            </FadeIn>

            {/* Right Column: Glowing Lime Desk Booking Widget */}
            <FadeIn direction="right" className="lg:col-span-7 relative flex items-center justify-center">
              {/* Lime Glow Area */}
              <div className="relative w-full max-w-[480px] bg-[#d3fb49]/35 border border-[#c6f030] rounded-3xl p-5 sm:p-7 shadow-lg flex flex-col sm:flex-row gap-5 items-center justify-between">
                <GlowOrb color="lime" size="md" className="top-0 right-0 opacity-30 pointer-events-none" />

                {/* Left Mini Panel: Open Space Free Desks Indicator */}
                <div className="flex-1 w-full space-y-3 select-none relative z-10">
                  <div>
                    <p className="text-[12px] font-bold text-[#2a301a]">in open space</p>
                    <p className="text-[11px] text-[#4f5c2e] font-medium">(12/20 desks free)</p>
                  </div>

                  {/* Desk Avatars Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {deskUsers.map((u) => (
                      <div
                        key={u.id}
                        onClick={() => setSelectedDesk(u.id)}
                        className={`bg-white/90 backdrop-blur-xs p-2 rounded-2xl border border-white/80 flex items-center gap-2 shadow-2xs cursor-pointer hover:bg-white transition-all ${
                          selectedDesk === u.id ? 'ring-2 ring-[#111210]' : ''
                        }`}
                      >
                        <img
                          src={u.avatar}
                          alt={u.name}
                          className="w-7 h-7 rounded-full object-cover border border-white shadow-2xs"
                        />
                        <div className="overflow-hidden">
                          <p className="text-[11px] font-bold text-[#111210] truncate">{u.name}</p>
                          <p className="text-[9px] text-[#717869]">{u.desk}</p>
                        </div>
                      </div>
                    ))}

                    {/* Add / Pick Free Desk Button */}
                    <div
                      onClick={() => {
                        setSelectedDesk(99);
                        setDeskCount(prev => prev + 1);
                      }}
                      className="bg-[#c8ff28] p-2 rounded-2xl border border-[#b2eb18] flex items-center justify-center text-[#111210] font-bold cursor-pointer hover:bg-[#bbf019] transition-all shadow-2xs"
                    >
                      <div className="flex items-center gap-1 text-[11px]">
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pick Desk</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Mini Panel: Booking Form Card */}
                <div className="w-full sm:w-[240px] bg-white rounded-2xl p-4 shadow-xl border border-[#e5e8dc] space-y-3 z-10">
                  {/* Where input */}
                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#7b8175] block mb-1">Where</label>
                    <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#f7f8f4] border border-[#e3e6db] rounded-lg text-[12px] font-semibold text-[#111210]">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3 h-3 text-[#6c7265]" />
                        <span>{selectedOffice}</span>
                      </div>
                      <ChevronDown className="w-3 h-3 text-[#7b8175]" />
                    </div>
                  </div>

                  {/* When input */}
                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#7b8175] block mb-1">When</label>
                    <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#f7f8f4] border border-[#e3e6db] rounded-lg text-[12px] font-semibold text-[#111210]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#6c7265]" />
                        <span>{bookingDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking for */}
                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#7b8175] block mb-1">Booking for</label>
                    <p className="text-[10px] text-[#71776b] leading-tight mb-2">
                      for hybrid teams that use their desks/meeting rooms...
                    </p>
                    <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#f7f8f4] border border-[#e3e6db] rounded-lg text-[12px] font-semibold text-[#111210]">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-[#6c7265]" />
                        <span>{deskCount} desks</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setDeskCount(Math.max(1, deskCount - 1))}
                          className="w-4 h-4 rounded bg-white text-[10px] font-bold flex items-center justify-center border border-[#e0e3d8] cursor-pointer hover:bg-[#f0f2eb]"
                        >-</button>
                        <button
                          onClick={() => setDeskCount(deskCount + 1)}
                          className="w-4 h-4 rounded bg-white text-[10px] font-bold flex items-center justify-center border border-[#e0e3d8] cursor-pointer hover:bg-[#f0f2eb]"
                        >+</button>
                      </div>
                    </div>
                  </div>

                  {/* Book now button */}
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[12px] py-2.5 rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {bookedSuccess ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-[#111210]" />
                        <span>Booked!</span>
                      </>
                    ) : (
                      <span>Book now</span>
                    )}
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
