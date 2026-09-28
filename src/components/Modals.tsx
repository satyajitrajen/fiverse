import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Building2, Mail, User, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FiverseLogo } from './Logos';
import { GlowOrb } from './Motion';
import { trackEvent } from '../utils/analytics';

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
    service: 'AI / Agentic AI Systems',
    description: '',
    timeline: '1-3 months',
    budget: '$25,000 - $50,000'
  });
  const [isDone, setIsDone] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      trackEvent('contact_form_start', { modal_title: title, modal_type: type });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, title, type]);

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
    trackEvent('contact_form_submit', {
      project_type: formData.service,
      timeline: formData.timeline,
      budget: formData.budget,
      has_company: Boolean(formData.company.trim())
    });
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 }
    });
  };

  const handleResetAndClose = () => {
    setIsDone(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'AI / Agentic AI Systems',
      description: '',
      timeline: '1-3 months',
      budget: '$25,000 - $50,000'
    });
    onClose();
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
                <span className="bg-[#c8ff28] text-[#111210] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {type === 'apply' ? 'Engineering Squad' : type === 'beta' ? 'Beta Access' : 'Consultation'}
                </span>
              </div>
              <h3 id="modal-heading-title" className="text-[20px] sm:text-[24px] font-bold text-[#111210] tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-[12px] sm:text-[13px] text-[#3a4035] leading-relaxed">
                Connect with our senior engineering team. We analyze technical feasibility and return a roadmap within 24 to 48 hours.
              </p>
            </div>

            {/* Modal Form */}
            {isDone ? (
              <div
                role="status"
                aria-live="polite"
                className="py-4 sm:py-6 space-y-5 relative z-10 text-left"
              >
                <div className="flex items-center gap-3 p-4 bg-[#f4f8eb] rounded-2xl border border-[#d6e5bf]">
                  <div className="w-10 h-10 rounded-full bg-[#2e6314] text-[#c8ff28] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-[#111210]">Project brief received.</h4>
                    <p className="text-[12px] text-[#3a4035]">
                      Your request has been routed to our principal architecture squad.
                    </p>
                  </div>
                </div>

                <div className="bg-[#f8f9f5] rounded-2xl p-5 border border-[#e4e7dc] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#e2e6d9] pb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">What Happens Next</span>
                    <span className="text-[11px] font-medium text-[#3a4035]">5-Stage Review</span>
                  </div>
                  <ol className="space-y-2.5 text-[12.5px] text-[#2d312c]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#111210] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <div><strong>Technical Review:</strong> Principal engineers review requirements, data needs, and system constraints.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#111210] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <div><strong>Expert Matching:</strong> We assign a dedicated AI or full-stack software lead with relevant domain experience.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#111210] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <div><strong>Discovery Call:</strong> A focused 30-minute discussion to clarify architecture, scope, and non-negotiables.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#111210] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <div><strong>Solution Blueprint:</strong> We outline the recommended model strategy, tech stack, and risk guardrails.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#111210] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                      <div><strong>Transparent Proposal:</strong> Detailed deliverables, squad composition, sprint timeline, and milestone terms.</div>
                    </li>
                  </ol>
                </div>

                <div className="flex items-center gap-2 text-[11.5px] text-[#3a4035] bg-[#edf2e4] p-3 rounded-xl border border-[#dce4cf]">
                  <ShieldCheck className="w-4 h-4 text-[#2e6314] shrink-0" />
                  <span>Strict NDA & 100% Client Intellectual Property ownership policy guaranteed.</span>
                </div>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full bg-[#111210] hover:bg-[#252823] text-white font-bold text-[13px] py-3 rounded-xl transition-all cursor-pointer shadow-sm text-center"
                >
                  Close & Return to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-name" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Your Name *</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <User className="w-4 h-4 text-[#3a4035] shrink-0" />
                      <input
                        id="modal-name"
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
                    <label htmlFor="modal-email" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Work Email *</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <Mail className="w-4 h-4 text-[#3a4035] shrink-0" />
                      <input
                        id="modal-email"
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
                    <label htmlFor="modal-phone" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Phone Number</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <Phone className="w-4 h-4 text-[#3a4035] shrink-0" />
                      <input
                        id="modal-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent outline-none text-[#111210] text-[16px] sm:text-[13px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-company" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Company</label>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] focus-within:border-[#111210] rounded-xl text-[16px] sm:text-[13px] transition-colors">
                      <Building2 className="w-4 h-4 text-[#3a4035] shrink-0" />
                      <input
                        id="modal-company"
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
                  <label htmlFor="modal-service" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">What are you looking for? *</label>
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] rounded-xl text-[16px] sm:text-[13px] font-medium text-[#111210] outline-none cursor-pointer focus:border-[#111210] transition-colors"
                  >
                    <option value="AI / Agentic AI Systems">AI / Agentic AI Systems</option>
                    <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Enterprise Software Modernization">Enterprise Software Modernization</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile Application Development">Mobile Application Development</option>
                    <option value="MVP Engineering Sprint">MVP Engineering Sprint</option>
                    <option value="Dedicated Engineering Squad">Dedicated Engineering Squad</option>
                    <option value="Other Technical Need">Other Technical Need</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-description" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Project Description *</label>
                  <textarea
                    id="modal-description"
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
                    <label htmlFor="modal-timeline" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Timeline</label>
                    <select
                      id="modal-timeline"
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
                    <label htmlFor="modal-budget" className="text-[11px] font-bold uppercase text-[#3a4035] block mb-1">Estimated Budget</label>
                    <select
                      id="modal-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#f7f8f4] border border-[#e4e7dc] rounded-xl text-[16px] sm:text-[12px] font-medium text-[#111210] outline-none cursor-pointer focus:border-[#111210] transition-colors"
                    >
                      <option value="$25,000 - $50,000">$25,000 - $50,000 (MVP Engineering Sprint)</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000 (Full Platform / AI System)</option>
                      <option value="$100,000 - $250,000">$100,000 - $250,000 (Enterprise Modernization)</option>
                      <option value="$250,000+">$250,000+ (Multi-System Architecture)</option>
                      <option value="Under $25,000">Under $25,000 (Discovery / Advisory)</option>
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

                <p className="text-[11px] text-[#3a4035] text-center pt-1 flex items-center justify-center gap-2">
                  <span>✓ Response &lt; 24 hrs</span>
                  <span>•</span>
                  <span>✓ Strict mutual NDA</span>
                  <span>•</span>
                  <span>✓ 100% IP ownership</span>
                </p>
              </form>
            )}
          </div>
        </div>
  );
};
