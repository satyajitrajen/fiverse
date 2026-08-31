import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  FileText,
  Download,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, GlowOrb } from './Motion';
import { SEOHead } from './SEOHead';

interface WorkAndInsightsViewsProps {
  activeView: 'casestudies' | 'products' | 'success-stories' | 'blog' | 'ai-insights' | 'guides' | 'resources';
  onStartProject: () => void;
  onExploreProduct: () => void;
}

const workMetaMap: Record<string, { title: string; description: string; canonical: string; name: string }> = {
  casestudies: {
    title: 'Case Studies | AI & Software Engineering Client Work | Fiverse Systems',
    description: 'Explore real-world client case studies and outcomes in agentic AI, custom software development, automated document processing, and cloud SaaS platforms by Fiverse.',
    canonical: '/case-studies',
    name: 'Case Studies'
  },
  products: {
    title: 'Our Products & Proprietary AI Platforms | Fiverse Systems',
    description: 'Explore proprietary software products, AI autonomous engines, and workplace platforms built and incubated by Fiverse Systems engineering.',
    canonical: '/our-products',
    name: 'Our Products'
  },
  'success-stories': {
    title: 'Client Success Stories & Enterprise Impact | Fiverse Systems',
    description: 'Discover how startups, scaleups, and enterprises scaled faster, saved millions in operational overhead, and automated workflows with Fiverse Systems.',
    canonical: '/client-success-stories',
    name: 'Success Stories'
  },
  blog: {
    title: 'Blog & Software Perspectives | AI Engineering Insights | Fiverse Systems',
    description: 'Read engineering perspectives, technical blueprints, architectural teardowns, and strategic analysis on agentic AI, software design, and SaaS product development.',
    canonical: '/blog',
    name: 'Blog'
  },
  'ai-insights': {
    title: 'AI Insights & Research | Agentic Systems, RAG & LLMs | Fiverse Systems',
    description: 'Deep technical research and practical implementation guides on autonomous AI agents, enterprise RAG architectures, model fine-tuning, and deterministic safety loops.',
    canonical: '/ai-insights',
    name: 'AI Insights'
  },
  guides: {
    title: 'Downloadable Architecture Blueprints & Guides | Fiverse Systems',
    description: 'Free engineering blueprints, technical checklists, and production deployment guides for AI agents, SaaS tenancy, and modern cloud architecture.',
    canonical: '/guides',
    name: 'Guides'
  },
  resources: {
    title: 'Resources & Developer Toolkits | Fiverse Systems',
    description: 'Access architectural templates, AI security checklists, and technical documentation from Fiverse Systems.',
    canonical: '/resources',
    name: 'Resources'
  }
};

export const WorkAndInsightsViews: React.FC<WorkAndInsightsViewsProps> = ({
  activeView,
  onStartProject,
  onExploreProduct
}) => {
  const [downloadedResource, setDownloadedResource] = useState<string | null>(null);

  const handleDownload = (name: string) => {
    setDownloadedResource(name);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setDownloadedResource(null), 3000);
  };

  const currentMeta = workMetaMap[activeView] || workMetaMap.casestudies;

  return (
    <div className="w-full py-12 sm:py-20">
      <SEOHead
        title={currentMeta.title}
        description={currentMeta.description}
        canonicalPath={currentMeta.canonical}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Work & Insights', url: '/case-studies' },
          { name: currentMeta.name, url: currentMeta.canonical }
        ]}
      />
      <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16">
        {/* ========================================================
            1. CASE STUDIES
           ======================================================== */}
        {activeView === 'casestudies' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Case Studies</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                technology built around real business outcomes.
              </h1>
              <p className="text-[16px] text-[#5e6359] leading-relaxed">
                Ideas matter. Execution creates impact. Explore how Fiverse Systems approaches complex business challenges through custom software, product engineering and artificial intelligence.
              </p>
            </FadeIn>

            <div className="space-y-8">
              {[
                {
                  client: 'Global Logistics Operator',
                  domain: 'Agentic AI & Operations Automation',
                  challenge: 'The client processed over 15,000 unstructured customs documents and freight bills weekly across 12 European countries, causing 48-hour clearance bottlenecks and frequent human data entry errors.',
                  approach: 'We analyzed end-to-end document lifecycles and designed an autonomous multi-agent OCR and verification pipeline with human-in-the-loop exception handling.',
                  solution: 'Deployed a custom RAG & Vision extraction model integrated directly with their legacy AS400 and modern cloud ERP via event-driven webhooks.',
                  tech: ['Python', 'vLLM', 'FastAPI', 'PostgreSQL', 'Qdrant Vector DB', 'React / TypeScript'],
                  impact: 'Reduced document processing time by 86%, saved 350+ manual hours/week, and brought data extraction accuracy to 99.4%.',
                  next: 'Expanding to real-time predictive shipment delay forecasting and customs voice agent integration.'
                },
                {
                  client: 'B2B FinTech SaaS Platform',
                  domain: 'SaaS Engineering & Enterprise Modernization',
                  challenge: 'Legacy single-tenant architecture prevented self-serve onboarding, causing high infrastructure overhead and limiting international enterprise expansion.',
                  approach: 'Architected a cloud-native, multi-tenant platform with row-level tenant security, automated stripe billing tiers, and SOC2-compliant immutable audit trails.',
                  solution: 'Engineered a modern React/TypeScript frontend with microservices backend on AWS ECS, featuring custom analytics and an embedded AI reconciliation copilot.',
                  tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS ECS', 'OpenAI API'],
                  impact: 'Increased customer onboarding velocity by 10x and scaled platform from 500 to 65,000 daily active organizations with zero downtime.',
                  next: 'Rolling out natural language conversational SQL analytics for CFO dashboards.'
                }
              ].map((cs, idx) => (
                <FadeIn direction="up" delay={idx * 0.1} key={idx} className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] transition-colors space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#f0f2eb] pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#528d2c]">{cs.domain}</span>
                      <h3 className="text-[22px] font-bold text-[#111210]">{cs.client}</h3>
                    </div>
                    <span className="bg-[#f4f6ed] text-[#111210] text-[12px] font-bold px-3 py-1.5 rounded-full border border-[#e4e7db]">
                      Verified Client Outcome
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px]">
                    <div className="space-y-2">
                      <p className="font-bold text-[#111210]">The Challenge</p>
                      <p className="text-[#5e6359] leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-[#111210]">Our Approach & Solution</p>
                      <p className="text-[#5e6359] leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-[#f8f9f5] rounded-2xl p-5 border border-[#e6eade] space-y-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#528d2c]" />
                      <p className="font-bold text-[#111210] text-[14px]">Measurable Business Impact: {cs.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 border-t border-[#e2e6d8]">
                      {cs.tech.map((t, tI) => (
                        <motion.span whileHover={{ scale: 1.05 }} key={tI} className="bg-white text-[#2d312c] text-[11px] font-mono px-2.5 py-1 rounded-md border border-[#d8dcd0] cursor-default">
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.2} className="text-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStartProject}
                className="bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
              >
                <span>Have a Similar Challenge? Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
              </motion.button>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            2. OUR PRODUCTS
           ======================================================== */}
        {activeView === 'products' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Product Innovation</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                products built from problems worth solving.
              </h1>
              <p className="text-[16px] text-[#5e6359] leading-relaxed">
                Beyond client engineering, Fiverse Systems creates technology products around recurring business challenges. We believe the best way to understand product engineering is to build products ourselves.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] transition-colors grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
              <GlowOrb color="lime" size="md" className="top-0 right-0 opacity-20 pointer-events-none" />
              <div className="lg:col-span-7 space-y-4 relative z-10">
                <span className="text-[11px] bg-[#c8ff28] text-[#111210] font-extrabold px-3 py-1 rounded-full uppercase">
                  Featured Product
                </span>
                <h3 className="text-[28px] font-bold text-[#111210]">Fiverse Workplace Platform</h3>
                <p className="text-[15px] text-[#5e6359] leading-relaxed">
                  The hybrid and flex-office management system designed for high-growth tech companies and distributed teams. Features real-time desk reservations, custom working routines, team presence sync, and office workload analytics.
                </p>
                <div className="grid grid-cols-2 gap-3 text-[13px] text-[#3b4036] pt-2">
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#528d2c]" /> Interactive Desk Maps</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#528d2c]" /> Status & Routine Swap</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#528d2c]" /> Slack & Teams Bot Sync</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#528d2c]" /> Real-Time Analytics</p>
                </div>
                <div className="pt-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onExploreProduct}
                    className="bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] px-7 py-3.5 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
                  </motion.button>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#e4e7dc] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&auto=format&fit=crop&q=80"
                  alt="Fiverse Workplace Platform modern flex office"
                  className="w-full h-72 object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            3. GUIDES & DOWNLOADABLE RESOURCES
           ======================================================== */}
        {(activeView === 'guides' || activeView === 'resources') && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Guides & Frameworks</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                practical resources for founders and engineering leaders.
              </h1>
              <p className="text-[16px] text-[#5e6359] leading-relaxed">
                Downloadable blueprints, architecture checklists, and requirement workbooks curated by Fiverse Systems senior architects.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Project Requirement Template', desc: 'Standardized PRD document covering user personas, functional specs, and API contracts.' },
                { title: 'MVP Planning Checklist', desc: 'Step-by-step framework to ruthlessly prioritize core features and ship in under 8 weeks.' },
                { title: 'SaaS Planning Template', desc: 'Complete architectural guide for multi-tenant data, RBAC roles, and Stripe billing workflows.' },
                { title: 'AI Readiness Checklist', desc: 'Assessment workbook to evaluate data cleanliness, token cost estimates, and latency thresholds.' },
                { title: 'Custom Software Requirements Guide', desc: 'Framework to avoid scope creep and define milestone-based agile deliverables.' },
                { title: 'AI Agent Opportunity Checklist', desc: 'Identify which business workflows in your organization are ideal candidates for autonomous AI agents.' }
              ].map((res, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-4 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-2xl bg-[#f4f6ed] text-[#111210] flex items-center justify-center font-bold">
                        <FileText className="w-5 h-5 text-[#111210]" />
                      </div>
                      <h3 className="font-bold text-[17px] text-[#111210] leading-snug">{res.title}</h3>
                      <p className="text-[13px] text-[#63685e] leading-relaxed">{res.desc}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleDownload(res.title)}
                      className="w-full bg-[#f7f9f2] hover:bg-[#111210] hover:text-white text-[#111210] border border-[#e4e7dc] font-bold text-[13px] py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {downloadedResource === res.title ? (
                        <span className="text-[#528d2c] font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Downloaded!
                        </span>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-[#528d2c]" />
                          <span>Download Free Guide</span>
                        </>
                      )}
                    </motion.button>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* ========================================================
            4. BLOG & AI INSIGHTS
           ======================================================== */}
        {(activeView === 'blog' || activeView === 'ai-insights' || activeView === 'success-stories') && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#528d2c]">Insights & Perspectives</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                ideas, engineering and the future of software.
              </h1>
              <p className="text-[16px] text-[#5e6359] leading-relaxed">
                Practical perspectives on agentic AI, software architecture, RAG, and scaling digital technology businesses.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: 'Agentic AI',
                  title: 'Why Autonomous Agent Swarms Are Replacing Rigid Automation Scripts',
                  readTime: '5 min read',
                  date: 'August 2026'
                },
                {
                  tag: 'Engineering Architecture',
                  title: 'Building Multi-Tenant SaaS with Zero-Downtime Migration Strategies',
                  readTime: '7 min read',
                  date: 'August 2026'
                },
                {
                  tag: 'RAG & Knowledge',
                  title: 'Beyond Basic Cosine Similarity: Implementing Hybrid Search and Re-Ranking for Enterprise RAG',
                  readTime: '6 min read',
                  date: 'August 2026'
                }
              ].map((post, pIdx) => (
                <StaggerItem key={pIdx}>
                  <HoverCard yOffset={-4} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow space-y-4 flex flex-col justify-between hover:border-[#111210] h-full">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-[#787e72]">
                        <span className="bg-[#f4f6ed] font-bold text-[#111210] px-2.5 py-0.5 rounded-full">{post.tag}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-[18px] text-[#111210] leading-snug">{post.title}</h3>
                    </div>
                    <motion.button
                      whileHover={{ x: 3 }}
                      onClick={onStartProject}
                      className="text-[13px] font-bold text-[#111210] hover:text-[#528d2c] flex items-center gap-1.5 cursor-pointer pt-2 border-t border-[#f0f2eb]"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </div>
    </div>
  );
};
