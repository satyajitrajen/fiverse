import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { type ServiceDetail, servicesMasterData } from '../data/websiteMaster';
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  ChevronRight,
  Sparkles,
  Plus,
  Minus,
  Lock,
  Wrench
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, GlowOrb } from './Motion';
import { SEOHead } from './SEOHead';

interface ServiceDetailViewProps {
  serviceId?: string;
  onStartProject: () => void;
  onTalkToAI: () => void;
}

const slugToIdMap: Record<string, string> = {
  'ai-development-company': 'ai-development',
  'agentic-ai-development': 'agentic-ai',
  'ai-agent-development': 'ai-agents',
  'generative-ai-development': 'generative-ai',
  'llm-development': 'llm-development',
  'custom-software-development': 'custom-software',
  'product-development': 'product-development',
  'saas-development': 'saas-development'
};

export const getServicePath = (id: string): string => {
  const s = servicesMasterData[id];
  if (s && s.slug) return s.slug;
  return `/services/${id}`;
};

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId: propServiceId,
  onStartProject,
  onTalkToAI
}) => {
  const params = useParams<{ serviceId?: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Resolve serviceId from prop, param slug, or direct id
  const rawId = propServiceId || params.serviceId || 'ai-development';
  const resolvedId = slugToIdMap[rawId] || rawId;
  const service: ServiceDetail = servicesMasterData[resolvedId] || servicesMasterData['ai-development'];

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Explicit priority internal links or fallback to category siblings
  const internalLinks = service.internalLinks && service.internalLinks.length > 0
    ? service.internalLinks
    : Object.keys(servicesMasterData)
        .filter((k) => k !== service.id && servicesMasterData[k].category === service.category)
        .slice(0, 4)
        .map((k) => ({ label: servicesMasterData[k].title, id: k }));

  const servicePath = service.slug || `/services/${service.id}`;
  const pageTitle = service.metaTitle
    ? (service.metaTitle.includes('Fiverse Systems') ? service.metaTitle : `${service.metaTitle} | Fiverse Systems`)
    : `${service.title} | Fiverse Systems`;

  return (
    <div className="w-full py-12 sm:py-20 text-[#111210]">
      <SEOHead
        title={pageTitle}
        description={service.metaDescription || service.lead}
        canonicalPath={servicePath}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/ai-development-company' },
          { name: service.title, url: servicePath }
        ]}
        faqs={service.faqs}
        howToSteps={service.processSteps?.map((p: { title: string; desc: string }) => ({
          name: p.title || 'Implementation Phase',
          text: `${p.title}: ${p.desc}`,
          url: `https://fiversesystems.com${servicePath}`
        }))}
        schema={{
          '@type': 'Service',
          'name': service.title,
          'serviceType': service.category,
          'provider': {
            '@type': 'Organization',
            'name': 'Fiverse Systems Inc.',
            'url': 'https://fiversesystems.com/'
          },
          'description': service.metaDescription || service.lead,
          'url': `https://fiversesystems.com${servicePath}`
        }}
      />
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-20">
        {/* ========================================================
            1. BREADCRUMBS & TOP NAV
           ======================================================== */}
        <div className="flex items-center gap-2 text-[12px] text-[#4d5247]">
          <Link to="/" className="hover:text-black transition-colors cursor-pointer font-medium">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#797f74]" />
          <span className="capitalize font-medium text-[#4d5247]">{service.category}</span>
          <ChevronRight className="w-3 h-3 text-[#797f74]" />
          <span className="font-bold text-[#111210]">{service.title}</span>
          {service.slug && (
            <span className="ml-2 hidden md:inline-block font-mono text-[11px] text-[#4d5247] bg-[#f0f2eb] px-2 py-0.5 rounded font-semibold">
              {service.slug}
            </span>
          )}
        </div>

        {/* ========================================================
            2. HERO SECTION
           ======================================================== */}
        <FadeIn direction="up" className="relative bg-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-[#e4e8dc] hero-card-shadow space-y-8 overflow-hidden">
          <GlowOrb color="lime" size="xl" className="top-0 right-0 opacity-25 pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#f4f6ed] px-4 py-1.5 rounded-full border border-[#e2e6d9] text-[12px] font-bold text-[#111210]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff28] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ff28]" />
              </span>
              <span>{service.metaTitle.split('|')[0].trim()}</span>
            </div>

            <h1 className="text-[36px] sm:text-[50px] md:text-[58px] font-extrabold text-[#111210] tracking-tight leading-[1.08] lowercase">
              {service.h1}
            </h1>

            <p className="text-[17px] sm:text-[19px] text-[#4d5248] leading-relaxed font-normal">
              {service.lead}
            </p>

            {/* AEO Featured Snippet & Direct Answer Definition Callout */}
            <div className="aeo-definition aeo-direct-answer bg-[#f8faf2] border-l-4 border-[#c8ff28] p-4 sm:p-5 rounded-r-2xl border border-y-[#e2e6d9] border-r-[#e2e6d9] space-y-1.5 my-2" itemScope itemType="https://schema.org/DefinedTerm">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">
                <span className="h-2 w-2 rounded-full bg-[#2e6314]" />
                <span itemProp="name">Definition & Direct Answer</span>
              </div>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#222520] leading-relaxed" itemProp="description">
                <strong className="font-bold text-[#111210]">{service.title}</strong> by Fiverse Systems is {service.metaDescription || service.lead}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStartProject}
                className="w-full sm:w-auto bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#c8ff28] group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onTalkToAI}
                className="w-full sm:w-auto bg-[#f7f8f4] hover:bg-[#ebefe2] text-[#111210] border border-[#d8dcd0] font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Bot className="w-4 h-4 text-[#2e6314]" />
                <span>{service.secondaryCtaText || 'Talk to an AI Engineer'}</span>
              </motion.button>
            </div>
          </div>
        </FadeIn>

        {/* ========================================================
            3. "AI IS MORE THAN A CHATBOT" (IF PRESENT)
           ======================================================== */}
        {service.moreThanChatbot && service.moreThanChatbot.length > 0 && (
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-3xl space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Beyond The Interface</span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight lowercase">
                ai is more than a chatbot.
              </h2>
              <p className="text-[15px] text-[#5e6359] leading-relaxed">
                Many businesses begin their AI journey by adding a conversational interface. That can be valuable, but it represents only a small part of what modern AI systems can do.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.moreThanChatbot.map((item, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard yOffset={-3} className="bg-white rounded-2xl p-5 border border-[#e4e7dc] card-soft-shadow space-y-2.5 hover:border-[#111210] h-full">
                    <div className="w-6 h-6 rounded-lg bg-[#f4f6ed] text-[#528d2c] flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-[13.5px] font-bold text-[#111210] leading-snug">{item}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* ========================================================
            4. "FROM AI ASSISTANT TO AI OPERATOR" (IF PRESENT)
           ======================================================== */}
        {service.operatorSteps && service.operatorSteps.length > 0 && (
          <FadeIn direction="up" className="bg-[#111210] text-white rounded-[36px] p-8 sm:p-14 space-y-8 relative overflow-hidden">
            <GlowOrb color="lime" size="lg" className="top-0 right-0 opacity-20 pointer-events-none" />

            <div className="max-w-3xl space-y-3 relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Autonomous Execution</span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-white tracking-tight lowercase">
                from ai assistant to ai operator.
              </h2>
              <p className="text-[14px] text-[#a4a99d] leading-relaxed">
                Consider a traditional assistant: You ask <span className="text-white italic">"Which customers haven't paid?"</span> and it returns a list. An agentic AI system goes further:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {service.operatorSteps.map((step, sIdx) => (
                <motion.div whileHover={{ y: -2 }} key={sIdx} className="bg-[#1c1e19] p-4.5 rounded-2xl border border-[#2d3227] hover:border-[#c8ff28]/50 transition-colors flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#c8ff28] text-[#111210] font-bold text-[12px] flex items-center justify-center shrink-0 mt-0.5">
                    {sIdx + 1}
                  </span>
                  <p className="text-[13.5px] text-[#d6dad0] leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 text-[14px] text-[#c8ff28] font-semibold relative z-10">
              → That is the difference between AI that provides information and AI that performs work.
            </div>
          </FadeIn>
        )}

        {/* ========================================================
            5. CAPABILITIES / WHAT WE BUILD
           ======================================================== */}
        {service.bullets && service.bullets.length > 0 && (
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-3xl space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Comprehensive Capabilities</span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight lowercase">
                {service.bulletsTitle || 'services & capabilities we engineer'}
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.bullets.map((bullet, idx) => {
                const parts = bullet.split(':');
                const hasTitle = parts.length > 1;
                return (
                  <StaggerItem key={idx}>
                    <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-2.5 h-full">
                      <div className="w-9 h-9 rounded-xl bg-[#f4f6ed] text-[#111210] flex items-center justify-center font-bold">
                        <Sparkles className="w-4.5 h-4.5 text-[#528d2c]" />
                      </div>
                      {hasTitle ? (
                        <>
                          <h3 className="font-bold text-[17px] text-[#111210]">{parts[0].trim()}</h3>
                          <p className="text-[13.5px] text-[#5e6359] leading-relaxed">{parts[1].trim()}</p>
                        </>
                      ) : (
                        <p className="font-bold text-[15px] text-[#111210] leading-relaxed">{bullet}</p>
                      )}
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        )}

        {/* ========================================================
            6. ARCHITECTURE FLOWCHART (IF PRESENT)
           ======================================================== */}
        {service.architectureFlow && service.architectureFlow.length > 0 && (
          <FadeIn direction="up" className="bg-[#f0f2eb]/80 rounded-[36px] p-8 sm:p-12 border border-[#e2e6d9] space-y-6">
            <div className="space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Production Architecture</span>
              <h3 className="text-[26px] sm:text-[32px] font-bold text-[#111210] lowercase">
                enterprise software architecture flow
              </h3>
              <p className="text-[14px] text-[#5e6359]">How requests traverse security, context management, retrieval, and model execution.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {service.architectureFlow.map((layer, lIdx) => (
                <motion.div whileHover={{ y: -2 }} key={lIdx} className="bg-white p-4.5 rounded-2xl border border-[#e4e7dc] space-y-1.5 shadow-2xs hover:border-[#111210] transition-colors">
                  <span className="text-[10px] font-mono font-bold text-[#528d2c] uppercase">Layer 0{lIdx + 1}</span>
                  <p className="font-bold text-[13px] text-[#111210] leading-snug">{layer}</p>
                </motion.div>
              ))}
            </div>

            {/* Semantic Accessible Table for Answer Engines and Screen Readers */}
            <div className="pt-2">
              <div className="flex items-center justify-between pb-1.5 md:hidden text-[11px] font-medium text-[#4d5247]">
                <span>Architecture Breakdown</span>
                <span className="bg-[#e4e8dc] px-2 py-0.5 rounded text-[10px] font-mono">← Scroll table horizontally →</span>
              </div>
              <div className="overflow-x-auto custom-h-scrollbar pb-2">
                <table className="min-w-[560px] w-full text-left text-[13px] border border-[#e2e6d9] rounded-xl overflow-hidden bg-white">
                  <caption className="sr-only">Enterprise Architecture Layer Breakdown for {service.title}</caption>
                  <thead className="bg-[#f7f8f4] border-b border-[#e2e6d9] text-[#111210] font-bold text-[12px] uppercase tracking-wider">
                    <tr>
                      <th scope="col" className="py-2.5 px-4">Architecture Layer</th>
                      <th scope="col" className="py-2.5 px-4">Core Responsibility & Function</th>
                      <th scope="col" className="py-2.5 px-4">Execution Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#edf1e8] text-[#333830]">
                    {service.architectureFlow.map((layer, lIdx) => (
                      <tr key={lIdx} className="hover:bg-[#fcfdfa] transition-colors">
                        <th scope="row" className="py-2.5 px-4 font-mono font-bold text-[#2e6314]">Layer 0{lIdx + 1}</th>
                        <td className="py-2.5 px-4 font-medium">{layer}</td>
                        <td className="py-2.5 px-4 text-[#4d5247]">Deterministic / SOC2 Compliant</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

        {/* ========================================================
            7. TOOLS & SECURITY (IF PRESENT)
           ======================================================== */}
        {(service.toolsUsed || service.securityPillars) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.toolsUsed && (
              <FadeIn direction="up" delay={0.1} className="bg-white rounded-3xl p-7 border border-[#e4e7dc] card-soft-shadow space-y-4">
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-5 h-5 text-[#528d2c]" />
                  <h3 className="font-bold text-[18px] text-[#111210]">Software Tools & APIs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.toolsUsed.map((t, tI) => (
                    <motion.span whileHover={{ scale: 1.05 }} key={tI} className="bg-[#f7f8f4] text-[#2d312c] text-[12px] font-semibold px-3 py-1.5 rounded-xl border border-[#e4e7db] hover:border-[#111210] transition-colors cursor-default">
                      {t}
                    </motion.span>
                  ))}
                </div>
              </FadeIn>
            )}

            {service.securityPillars && (
              <FadeIn direction="up" delay={0.2} className="bg-white rounded-3xl p-7 border border-[#e4e7dc] card-soft-shadow space-y-4">
                <div className="flex items-center gap-2.5">
                  <Lock className="w-5 h-5 text-[#528d2c]" />
                  <h3 className="font-bold text-[18px] text-[#111210]">Enterprise Guardrails & Security</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#4d5248]">
                  {service.securityPillars.map((sec, sI) => (
                    <p key={sI} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#528d2c] shrink-0" />
                      <span>{sec}</span>
                    </p>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        )}

        {/* ========================================================
            8. PROCESS STEPS (IF PRESENT)
           ======================================================== */}
        {service.processSteps && service.processSteps.length > 0 && (
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-3xl space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Structured Delivery</span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight lowercase">
                our development process.
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {service.processSteps.map((step, pIdx) => (
                <StaggerItem key={pIdx}>
                  <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-2.5 h-full">
                    <span className="text-[11px] font-bold font-mono text-[#528d2c] uppercase">Phase {pIdx + 1}</span>
                    <h3 className="font-bold text-[16px] text-[#111210]">{step.title}</h3>
                    <p className="text-[13px] text-[#63685e] leading-relaxed">{step.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* ========================================================
            9. WHY FIVERSE SYSTEMS (IF PRESENT)
           ======================================================== */}
        {service.whyUs && service.whyUs.length > 0 && (
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-3xl space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Why Fiverse Systems</span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight lowercase">
                why businesses partner with us.
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {service.whyUs.map((item, wIdx) => (
                <StaggerItem key={wIdx}>
                  <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-2.5 h-full">
                    <h3 className="font-bold text-[17px] text-[#111210]">{item.title}</h3>
                    <p className="text-[13px] text-[#63685e] leading-relaxed">{item.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* ========================================================
            10. FAQS (IF PRESENT WITH ANIMATED ACCORDION)
           ======================================================== */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-3xl space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Frequently Asked Questions</span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight lowercase">
                common questions & technical clarifications.
              </h2>
            </FadeIn>

            <div className="space-y-3">
              {service.faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="bg-white rounded-2xl border border-[#e4e7dc] card-soft-shadow overflow-hidden transition-colors hover:border-[#111210]"
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full p-5 sm:p-6 text-left font-bold text-[16px] text-[#111210] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fcfdfa]"
                    >
                      <span>{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#528d2c] shrink-0" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#4d5247] shrink-0" />
                        )}
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] text-[#4d5247] leading-relaxed border-t border-[#f0f2eb]">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            11. RECOMMENDED INTERNAL LINKING CLUSTER
           ======================================================== */}
        {internalLinks.length > 0 && (
          <FadeIn direction="up" className="space-y-6 pt-10 border-t border-[#e2e6d9]">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4d5247]">Connected Topic Clusters</span>
              <h3 className="text-[22px] font-bold text-[#111210] lowercase">explore connected capabilities</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {internalLinks.map((link) => (
                <Link
                  key={link.id}
                  to={getServicePath(link.id)}
                  className="bg-white p-5 rounded-2xl border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] transition-all cursor-pointer space-y-2 group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#528d2c]">Related Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9da297] group-hover:translate-x-1 group-hover:text-black transition-all" />
                  </div>
                  <p className="font-bold text-[14px] text-[#111210]">{link.label}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        )}

        {/* ========================================================
            12. GLOBAL FOOTER CTA FOR ALL SERVICE PAGES
           ======================================================== */}
        <FadeIn direction="up" className="bg-[#111210] text-white rounded-3xl p-8 sm:p-14 text-center space-y-8 relative overflow-hidden">
          <GlowOrb color="lime" size="xl" className="top-0 left-1/2 -translate-x-1/2 opacity-25 pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Start a Technology Conversation</span>
            <h2 className="text-[30px] sm:text-[44px] font-bold tracking-tight lowercase text-white leading-tight">
              have a problem, idea or product to build?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#a4a99d] leading-relaxed max-w-2xl mx-auto">
              You don't need to arrive with a finished technical specification. Tell us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-xl mx-auto text-[13px] text-[#d6dad0] pt-2">
              <p className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff28] shrink-0" /> What isn't working today</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff28] shrink-0" /> What you want to automate</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff28] shrink-0" /> What product you want to launch</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff28] shrink-0" /> What AI opportunity to explore</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 relative z-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onStartProject}
              className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-extrabold text-[15px] px-9 py-4 rounded-full transition-all cursor-pointer shadow-lg"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onTalkToAI}
              className="bg-transparent hover:bg-white/10 text-white border border-[#3c4135] font-semibold text-[15px] px-8 py-4 rounded-full transition-all cursor-pointer"
            >
              Talk to Fiverse Systems
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
