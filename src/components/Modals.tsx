import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Building2, Mail, User, Phone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FiverseLogo } from './Logos';
import { GlowOrb } from './Motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type?: 'apply' | 'demo' | 'beta';
}

export const ActionModal: React.FC<ModalProps> = ({ isOpen, onClose, title, type = 'demo' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Development',
    description: '',
    timeline: '1-3 months',
    budget: '$25,000 - $50,000'
  });
  const [isDone, setIsDone] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      setIsDone(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'AI Development',
        description: '',
        timeline: '1-3 months',
        budget: '$25,000 - $50,000'
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-heading-title"
        className="relative w-full max-w-xl bg-white rounded-3xl p-5 sm:p-8 shadow-2xl border border-[#e4e7dc] space-y-4 sm:space-y-5 my-auto max-h-[92dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
            <GlowOrb color="lime" size="sm" className="top-0 right-0 opacity-20 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 sm:right-5 top-4 sm:top-5 w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-[#f4f5ee] hover:bg-[#e7e9df] text-[#111210] flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 relative z-10 pr-8">
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <FiverseLogo imgClassName="h-5 sm:h-6 w-auto object-contain" />
                <span className="bg-[#c8ff28] text-[#111210] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {type === 'apply' ? '2 Months Free' : type === 'beta' ? 'Beta Access' : 'Consultation'}
                </span>
              </div>
              <h3 id="modal-heading-title" className="text-[20px] sm:text-[24px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                {title}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#4d5247] leading-relaxed">
                Tell us about your project or business problem. Our technology team will connect within 24 hours.
              </p>
            </div>

            {/* Modal Form */}
            {isDone ? (
              <div
                role="status"
                aria-live="polite"
                className="py-10 sm:py-12 text-center space-y-3 relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-[#eef8cf] text-[#2e6314] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-[18px] sm:text-[20px] font-bold text-[#111210]">Your inquiry is received!</h4>
                <p className="text-[13px] text-[#4d5247] max-w-md mx-auto">
                  A senior AI and product engineering lead will review your requirements and reach out directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Your Name *</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <User className="w-4 h-4 text-[#7b8175] shrink-0" />
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent outline-none text-[#111210] text-[16px] sm:text-[13px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Work Email *</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <Mail className="w-4 h-4 text-[#7b8175] shrink-0" />
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent outline-none text-[#111210] text-[16px] sm:text-[13px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Phone Number</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <Phone className="w-4 h-4 text-[#7b8175] shrink-0" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent outline-none text-[#111210] text-[16px] sm:text-[13px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Company</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <Building2 className="w-4 h-4 text-[#7b8175] shrink-0" />
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent outline-none text-[#111210] text-[16px] sm:text-[13px]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">What are you looking for? *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] rounded-xl text-[16px] sm:text-[13px] font-medium text-[#111210] outline-none cursor-pointer focus:border-[#111210] transition-colors"
                  >
                    <option value="AI Development">AI Development</option>
                    <option value="Agentic AI & Swarms">Agentic AI & Swarms</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Enterprise Software Modernization">Enterprise Software Modernization</option>
                    <option value="Dedicated Development Team">Dedicated Development Team</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Project Description *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe what you're trying to solve or build..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] rounded-xl text-[16px] sm:text-[13px] outline-none text-[#111210] focus:border-[#111210] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] rounded-xl text-[16px] sm:text-[12px] font-medium text-[#111210] outline-none cursor-pointer focus:border-[#111210] transition-colors"
                    >
                      <option value="Under 1 month">Under 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4d5247] block mb-1">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] rounded-xl text-[16px] sm:text-[12px] font-medium text-[#111210] outline-none cursor-pointer focus:border-[#111210] transition-colors"
                    >
                      <option value="Under $15,000">Under $15,000</option>
                      <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                      <option value="$100,000+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2 min-h-[48px]"
                >
                  <span>Submit Project Request</span>
                  <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
                </button>
              </form>
            )}
          </div>
        </div>
  );
};
