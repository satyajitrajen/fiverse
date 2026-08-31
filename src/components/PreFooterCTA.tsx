import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FooterTeamIllustration } from './TeamIllustration';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, GlowOrb } from './Motion';

interface PreFooterCTAProps {
  onBookDemoClick: () => void;
}

export const PreFooterCTA: React.FC<PreFooterCTAProps> = ({ onBookDemoClick }) => {
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('10-50 people');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.8 }
    });
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="w-full pt-16 sm:pt-24 pb-12 relative overflow-hidden">
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
        {/* Top Centered CTA Headline & Button */}
        <FadeIn direction="up" className="text-center space-y-6 max-w-2xl mx-auto mb-10">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
            let your team schedule <br />
            worktime and workspaces fast
          </h2>

          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookDemoClick}
              className="bg-[#111210] hover:bg-[#252823] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              book a demo
            </motion.button>
          </div>
        </FadeIn>

        {/* Team Line Illustration Above Black Card */}
        <div className="relative">
          <FooterTeamIllustration />

          {/* Large Black CTA Container Card */}
          <FadeIn direction="up" delay={0.1} className="relative bg-[#111210] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 text-white shadow-2xl z-20 overflow-hidden border border-[#252823]">
            {/* Subtle Lime glow on top edge of black card */}
            <GlowOrb color="lime" size="lg" className="top-0 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="space-y-2">
                <h3 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold tracking-tight leading-[1.1] lowercase text-white">
                  try two months of <br />
                  full functionality for free
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#9ca096]">
                  for companies and teams that sign up for early access
                </p>
              </div>

              {/* Form Input Row */}
              <form onSubmit={handleSubmit} className="pt-2">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                    className="flex-1 bg-white text-[#111210] placeholder:text-[#888d83] px-5 py-3.5 rounded-full sm:rounded-2xl text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#c8ff28] transition-all"
                  />

                  {/* Team Size Select Dropdown */}
                  <div className="relative flex-1">
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full appearance-none bg-white text-[#111210] px-5 py-3.5 rounded-full sm:rounded-2xl text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#c8ff28] transition-all cursor-pointer"
                    >
                      <option value="1-10 people">How many people: 1-10 people</option>
                      <option value="10-50 people">How many people: 10-50 people</option>
                      <option value="50-200 people">How many people: 50-200 people</option>
                      <option value="200+ people">How many people: 200+ people</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111210] pointer-events-none" />
                  </div>

                  {/* Send Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[14px] px-8 py-3.5 rounded-full sm:rounded-2xl transition-all shadow-md cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#111210]" />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <span>send</span>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
