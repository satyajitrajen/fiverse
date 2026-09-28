import React, { useState } from 'react';
import {
  TrendingUp,
  FileText,
  Download,
  CheckCircle2,
  ArrowRight,
  X,
  Calendar,
  Clock,
  User,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, GlowOrb } from './Motion';
import { SEOHead } from './SEOHead';
import { trackEvent } from '../utils/analytics';

interface TechnicalArticle {
  id: string;
  tag: string;
  title: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  summary: string;
  keyPillars: string[];
  architectureNotes: string;
}

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
  const [activeArticle, setActiveArticle] = useState<TechnicalArticle | null>(null);

  const handleDownload = (name: string) => {
    setDownloadedResource(name);
    trackEvent('guide_download_click', { guide_title: name });
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
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Case Studies</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                technology built around real business outcomes.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
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
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#266314]">{cs.domain}</span>
                      <h3 className="text-[22px] font-bold text-[#111210]">{cs.client}</h3>
                    </div>
                    <span className="bg-[#f4f6ed] text-[#111210] text-[12px] font-bold px-3 py-1.5 rounded-full border border-[#e4e7db]">
                      Verified Client Outcome
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px]">
                    <div className="space-y-2">
                      <p className="font-bold text-[#111210]">The Challenge</p>
                      <p className="text-[#3a4035] leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-[#111210]">Our Approach & Solution</p>
                      <p className="text-[#3a4035] leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-[#f8f9f5] rounded-2xl p-5 border border-[#e6eade] space-y-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#266314]" />
                      <p className="font-bold text-[#111210] text-[14px]">Measurable Business Impact: {cs.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 border-t border-[#e2e6d8]">
                      {cs.tech.map((t, tI) => (
                        <span key={tI} className="bg-white text-[#2d312c] text-[11px] font-mono px-2.5 py-1 rounded-md border border-[#d8dcd0] cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.2} className="text-center pt-4">
              <button
                onClick={onStartProject}
                className="bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
              >
                <span>Have a Similar Challenge? Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
              </button>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            2. OUR PRODUCTS
           ======================================================== */}
        {activeView === 'products' && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Product Innovation</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                products built from problems worth solving.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
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
                <p className="text-[15px] text-[#3a4035] leading-relaxed">
                  The hybrid and flex-office management system designed for high-growth tech companies and distributed teams. Features real-time desk reservations, custom working routines, team presence sync, and office workload analytics.
                </p>
                <div className="grid grid-cols-2 gap-3 text-[13px] text-[#3a4035] pt-2">
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#266314]" /> Interactive Desk Maps</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#266314]" /> Status & Routine Swap</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#266314]" /> Slack & Teams Bot Sync</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#266314]" /> Real-Time Analytics</p>
                </div>
                <div className="pt-3">
                  <button
                    onClick={onExploreProduct}
                    className="bg-[#111210] hover:bg-[#252823] text-white font-bold text-[14px] px-7 py-3.5 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#e4e7dc] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&auto=format&fit=crop&q=80"
                  alt="Fiverse Workplace Platform modern flex office"
                  className="w-full h-72 object-cover"
                />
              </div>
            </FadeIn>
          </div>
        )}

        {/* ========================================================
            3. GUIDES & DOWNLOADABLE RESOURCES
           ======================================================== */}
        {(activeView === 'guides' || activeView === 'resources') && (
          <div className="space-y-12">
            <FadeIn direction="up" className="max-w-3xl space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Guides & Frameworks</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
                practical resources for founders and engineering leaders.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
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
                      <p className="text-[13px] text-[#3a4035] leading-relaxed">{res.desc}</p>
                    </div>

                    <button
                      onClick={() => handleDownload(res.title)}
                      className="w-full bg-[#f7f9f2] hover:bg-[#111210] hover:text-white text-[#111210] border border-[#e4e7dc] font-bold text-[13px] py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {downloadedResource === res.title ? (
                        <span className="text-[#266314] font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> Downloaded!
                        </span>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-[#266314]" />
                          <span>Download Free Guide</span>
                        </>
                      )}
                    </button>
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
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Insights & Technical Teardowns</span>
              <h1 className="text-[36px] sm:text-[50px] font-bold text-[#111210] tracking-tight leading-[1.08]">
                Engineering blueprints for the intelligent era.
              </h1>
              <p className="text-[16px] text-[#3a4035] leading-relaxed">
                Practical, production-grounded perspectives on agentic AI, state machines, hybrid retrieval, enterprise multi-tenancy, and cloud scalability.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'agentic-swarms',
                  tag: 'Agentic AI Architecture',
                  title: 'Why Autonomous Agent Swarms Are Replacing Rigid Automation Scripts',
                  readTime: '6 min read',
                  date: 'August 28, 2026',
                  author: 'Satyajit Nikam',
                  authorRole: 'Founder & Principal AI Architect',
                  summary: 'Hardcoded workflow scripts break whenever edge cases or unexpected schema changes occur. Autonomous agent swarms use structured tool execution, step verification, and memory graphs to execute multi-step business operations with self-healing capabilities.',
                  keyPillars: [
                    'Dynamic task decomposition into distinct subagent roles (Planner, Executor, Critic)',
                    'Deterministic tool calls with schema-validated parameter passing',
                    'Stateful scratchpad memory with rollback checkpoints upon API exception',
                    'Context-window token pruning to eliminate hallucinations and high latency'
                  ],
                  architectureNotes: 'Rather than chaining unconstrained prompts, production agent swarms are designed as state machines with bounded transitions, human escalation triggers, and JSON schema guarantees.'
                },
                {
                  id: 'enterprise-rag',
                  tag: 'RAG & Knowledge Systems',
                  title: 'Beyond Basic Cosine Similarity: Hybrid Search and Re-Ranking for Enterprise RAG',
                  readTime: '8 min read',
                  date: 'August 22, 2026',
                  author: 'Satyajit Nikam',
                  authorRole: 'Founder & Principal AI Architect',
                  summary: 'Simple vector search fails in enterprise contexts because dense embeddings miss exact alphanumeric IDs, invoice numbers, and SKU codes. Learn how to combine BM25 lexical search with dense vectors and cross-encoder re-ranking to achieve 98%+ precision.',
                  keyPillars: [
                    'Reciprocal Rank Fusion (RRF) combining sparse keyword index and dense vectors',
                    'Cross-encoder re-ranking pass on top 25 candidate chunks',
                    'Document chunking aligned to semantic AST and table markdown layouts',
                    'Vector metadata filtering strictly bound to user tenant ID and role-based ACLs'
                  ],
                  architectureNotes: 'Enterprise RAG requires zero data leakage between departments. Security ACL filtering must occur before nearest-neighbor calculation, not as an afterthought in memory.'
                },
                {
                  id: 'multi-tenant-saas',
                  tag: 'Cloud & Database Architecture',
                  title: 'Building Multi-Tenant SaaS with Row-Level Security & Zero-Downtime Migrations',
                  readTime: '7 min read',
                  date: 'August 14, 2026',
                  author: 'Fiverse Engineering Team',
                  authorRole: 'Core Systems & Cloud Architecture',
                  summary: 'Managing hundreds of enterprise tenants in a single database demands strict isolation, deterministic performance guarantees, and migrations that never lock tables during production hours.',
                  keyPillars: [
                    'PostgreSQL Row-Level Security (RLS) enforced at the session role layer',
                    'Tenant-aware connection pooling with PgBouncer to prevent connection exhaustion',
                    'Expand-and-contract schema migrations executed without table locks',
                    'Tenant quota enforcement using Redis token buckets at the ingress gateway'
                  ],
                  architectureNotes: 'Never rely on application-level WHERE clauses for multi-tenancy. Enforcing tenant boundaries inside the database engine via RLS eliminates single-query data breaches.'
                },
                {
                  id: 'deterministic-guardrails',
                  tag: 'AI Security & Safety',
                  title: 'Deterministic Guardrails & Human-in-the-Loop Verification for AI Agents',
                  readTime: '5 min read',
                  date: 'August 08, 2026',
                  author: 'Satyajit Nikam',
                  authorRole: 'Founder & Principal AI Architect',
                  summary: 'Unconstrained AI agents cannot be given autonomous access to financial or customer systems without strict guardrails. This blueprint shows how to establish multi-tiered verification loops that safeguard operations.',
                  keyPillars: [
                    'Bidirectional semantic guardrails intercepting prompt injection attempts',
                    'Tiered privilege boundaries: Read-only autonomous, Write requires secondary confirmation',
                    'Ephemeral staging environments for tool execution with transaction rollbacks',
                    'Immutable audit logs logging prompt, token cost, tool input, and deterministic outputs'
                  ],
                  architectureNotes: 'Automate repetitive tasks freely, but enforce human approval whenever state modifications exceed predefined risk thresholds (e.g. wire transfers or bulk database deletions).'
                },
                {
                  id: 'ai-build-vs-buy',
                  tag: 'Product Discovery & Strategy',
                  title: 'The Real ROI of Custom AI Agents vs Commercial SaaS Subscriptions',
                  readTime: '6 min read',
                  date: 'July 30, 2026',
                  author: 'Fiverse Systems Research',
                  authorRole: 'Product & Technical Strategy',
                  summary: 'Commercial AI tools charge heavy per-seat licensing fees while locking your proprietary workflow data inside their walled gardens. We analyze the 3-year total cost of ownership (TCO) between commercial licenses and proprietary custom agents.',
                  keyPillars: [
                    'Per-seat licensing ballooning vs fixed capital asset depreciation',
                    'Custom model routing reducing inference cost by 60-80% via small specialized models',
                    'Preservation of proprietary intellectual property and enterprise data sovereignty',
                    'Custom tailored UX matching existing internal ERP/CRM workflows without friction'
                  ],
                  architectureNotes: 'Custom AI engineering pays for itself rapidly once team size exceeds 25 users, especially when operations require integration with legacy on-premise systems.'
                },
                {
                  id: 'strangler-fig-modernization',
                  tag: 'Enterprise Modernization',
                  title: 'From Monolith to Modular Cloud: A Pragmatic Strangler-Fig Migration Roadmap',
                  readTime: '9 min read',
                  date: 'July 18, 2026',
                  author: 'Fiverse Engineering Team',
                  authorRole: 'Enterprise Architecture Squad',
                  summary: 'Big-bang rewrites of enterprise legacy systems have a 70%+ failure rate. Learn how to systematically decouple legacy monoliths using the strangler-fig pattern, API proxies, and shadow canary traffic.',
                  keyPillars: [
                    'Ingress routing proxy intercepting traffic and routing incrementally by domain',
                    'Dual-write data synchronization with automated reconciliation workers',
                    'Shadow traffic verification comparing legacy vs modern microservice outputs',
                    'Continuous business continuity with instant rollback capability at DNS level'
                  ],
                  architectureNotes: 'Modernize enterprise systems while keeping the core business operating smoothly. Zero downtime, zero loss of historical transaction integrity.'
                }
              ].map((post, pIdx) => (
                <StaggerItem key={pIdx}>
                  <HoverCard yOffset={-4} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow space-y-4 flex flex-col justify-between hover:border-[#111210] h-full transition-all">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-[#3a4035]">
                        <span className="bg-[#f4f6ed] font-bold text-[#111210] px-2.5 py-0.5 rounded-full">{post.tag}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-[17px] text-[#111210] leading-snug">{post.title}</h3>
                      <p className="text-[13px] text-[#3a4035] line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-[#f0f2eb] flex items-center justify-between">
                      <div className="text-[11px] text-[#3a4035]">
                        <span className="font-bold text-[#111210] block">{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                      <button
                        onClick={() => {
                          setActiveArticle(post);
                          trackEvent('article_read_click', { article_id: post.id, article_title: post.title });
                        }}
                        className="text-[12.5px] font-bold text-[#111210] hover:text-[#266314] flex items-center gap-1 cursor-pointer group"
                      >
                        <span>Read Blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#2e6314] group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Interactive Article Reader Modal */}
            {activeArticle && (
              <div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
                onClick={() => setActiveArticle(null)}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#e2e6d9] shadow-2xl p-6 sm:p-10 space-y-6 text-left my-auto"
                >
                  <div className="flex items-center justify-between border-b border-[#f0f2eb] pb-4">
                    <span className="bg-[#f0f4e4] text-[#2e6314] font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeArticle.tag}
                    </span>
                    <button
                      onClick={() => setActiveArticle(null)}
                      className="w-8 h-8 rounded-full bg-[#f4f6ed] hover:bg-[#e7ebe0] text-[#111210] flex items-center justify-center cursor-pointer transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-[24px] sm:text-[30px] font-bold text-[#111210] leading-tight">
                      {activeArticle.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-4 text-[12px] text-[#3a4035] pt-1">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#111210]" />
                        <span className="font-bold text-[#111210]">{activeArticle.author}</span>
                        <span>({activeArticle.authorRole})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#3a4035]" />
                        <span>{activeArticle.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#3a4035]" />
                        <span>{activeArticle.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f8f9f5] p-5 rounded-2xl border border-[#e4e7dc] space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">Executive Summary</span>
                    <p className="text-[14px] text-[#222520] leading-relaxed">
                      {activeArticle.summary}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#111210] block">
                      Core Architectural Pillars
                    </span>
                    <ul className="space-y-2.5">
                      {activeArticle.keyPillars.map((pillar, pilIdx) => (
                        <li key={pilIdx} className="flex items-start gap-3 text-[13.5px] text-[#3a4035]">
                          <CheckCircle2 className="w-4 h-4 text-[#2e6314] shrink-0 mt-0.5" />
                          <span>{pillar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#f4f6ed] p-5 rounded-2xl border border-[#dce4cf] space-y-2">
                    <div className="flex items-center gap-2 text-[12px] font-bold text-[#111210]">
                      <Cpu className="w-4 h-4 text-[#2e6314]" />
                      <span>Production Engineering Takeaway</span>
                    </div>
                    <p className="text-[13.5px] text-[#2d312c] leading-relaxed">
                      {activeArticle.architectureNotes}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#f0f2eb] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[12px] text-[#3a4035]">
                      Need custom architecture or implementation for your systems?
                    </span>
                    <button
                      onClick={() => {
                        setActiveArticle(null);
                        onStartProject();
                      }}
                      className="w-full sm:w-auto bg-[#111210] hover:bg-[#252823] text-white text-[13px] font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
                    >
                      <span>Discuss Architecture with Us</span>
                      <ArrowRight className="w-4 h-4 text-[#c8ff28]" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
