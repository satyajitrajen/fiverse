import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Brain,
  Bot,
  Layers,
  Database,
  ShieldCheck,
  Workflow,
  ChevronDown,
  Cpu,
  Code2,
  Building2,
  Check,
  Server
} from 'lucide-react';
import { FadeIn, GlowOrb, AnimatedCounter } from './Motion';
import { SEOHead } from './SEOHead';

interface HomePageProps {
  onStartProject: () => void;
  onTalkToAI: () => void;
  onExploreServices?: () => void;
}

export const HomePage: React.FC<HomePageProps> = memo(({
  onStartProject,
  onTalkToAI
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleStartProjectClick = async () => {
    try {
      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}
    onStartProject();
  };

  const homepageFaqs = [
    {
      question: "What does Fiverse Systems do?",
      answer: "Fiverse Systems is an AI-first product engineering company that designs, builds and scales AI agents, SaaS platforms, custom software and enterprise applications. We partner with ambitious founders, growing businesses, and enterprises—taking products from initial strategy and UI/UX design through architecture, full-stack engineering, cloud deployment, and continuous scale."
    },
    {
      question: "Does Fiverse build AI agents?",
      answer: "Yes. Fiverse designs and develops autonomous and semi-autonomous AI agents that can reason about business objectives, remember context, query enterprise knowledge bases, call external APIs and databases, and execute multi-step workflows with deterministic guardrails and optional human approval."
    },
    {
      question: "Can Fiverse develop an MVP?",
      answer: "Yes. We offer rapid, production-grade MVP development. Our team handles product discovery, architecture blueprints, UI/UX prototyping, full-stack engineering, AI model integration, and automated CI/CD deployment—typically delivering a market-ready product in 6 to 12 weeks."
    },
    {
      question: "Can Fiverse work with an existing product?",
      answer: "Yes. You can engage Fiverse to modernize legacy architectures, inject AI and RAG capabilities, refactor monoliths into performant microservices, improve API latency, or add dedicated senior engineering capacity to your internal roadmap."
    },
    {
      question: "Does Fiverse work with startups?",
      answer: "Yes. We work closely with early-stage and venture-backed startups across concept validation, prototype engineering, MVP launches, scalable multi-tenant SaaS architecture, and continuous post-launch feature iteration."
    },
    {
      question: "Does Fiverse build enterprise software?",
      answer: "Yes. Fiverse engineers secure, mission-critical enterprise applications including ERP/CRM integrations, workflow orchestration engines, intelligent document processing pipelines, and air-gapped or private VPC AI systems with role-based access control (RBAC)."
    },
    {
      question: "Who owns the source code and intellectual property?",
      answer: "You do. 100% of all intellectual property, source code, design files, AI models, prompts, and architecture documentation belong entirely to the client upon project delivery and milestone settlement. We operate under strict mutual non-disclosure agreements (NDAs)."
    },
    {
      question: "How much does it typically cost to build an MVP or AI system with Fiverse?",
      answer: "Fixed-scope MVP engineering sprints typically range from $25,000 to $50,000 for a 6 to 8-week production release covering product PRD, interactive UI/UX design, full-stack development, and cloud deployment. Comprehensive enterprise SaaS platforms or multi-agent autonomous swarms typically range from $50,000 to $100,000+ depending on architectural complexity, third-party integrations, and compliance requirements. Every project is scoped with fixed milestone deliverables and zero hidden fees."
    },
    {
      question: "Can you deploy AI models inside our private AWS/GCP VPC without data egress?",
      answer: "Yes. For security-conscious clients and regulated industries, we deploy completely within your private cloud VPC (AWS, GCP, or Microsoft Azure). Customer data never leaves your infrastructure perimeter. We configure zero-data-retention (ZDR) model endpoints, open-source model inference via vLLM or Ollama on private GPU instances, AES-256 encryption at rest, TLS 1.3 in transit, and granular role-based access control (RBAC)."
    },
    {
      question: "What contract structures, NDAs, and payment terms does Fiverse support?",
      answer: "We operate under a standard Master Services Agreement (MSA) and project-specific Statements of Work (SOW) with bilateral NDAs executed upfront. Invoicing is milestone-based (e.g., Sprint 0 Architecture, Staging Release, Production Sign-off) or bi-weekly for dedicated squads. We accept international wire transfers and ACH in USD, EUR, and GBP."
    },
    {
      question: "How do I start a project with Fiverse?",
      answer: "Getting started takes three simple steps: (1) Click 'Start a Project' or book an AI Discovery Session; (2) Participate in a 30-minute scoping call with our product and AI architects; (3) Receive a clear, milestone-driven technical proposal and timeline within 48 to 72 hours."
    }
  ];

  return (
    <div className="w-full text-[#111210] selection:bg-[#c8ff28] selection:text-[#111210]">
      <SEOHead
        title="AI Software Development & Product Engineering | Fiverse Systems"
        description="Fiverse Systems is an AI-first software development and product engineering company building AI agents, SaaS platforms, custom software and enterprise applications."
        keywords="AI-first product engineering, AI software development company, AI agents, SaaS development, custom software engineering, enterprise AI, agentic AI"
        canonicalPath="/"
        faqs={homepageFaqs}
      />

      {/* ========================================================
          1. HERO SECTION (FOCUSED POSITIONING & CLEAR PROPOSITION)
         ======================================================== */}
      <section className="w-full pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Soft Ambient Glows */}
        <GlowOrb color="lime" size="xl" className="-top-32 left-1/2 -translate-x-1/2 opacity-35 pointer-events-none" />
        <GlowOrb color="cyan" size="md" className="top-1/3 -right-20 opacity-20 pointer-events-none" />

        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 relative z-10">
          {/* Main Hero Header */}
          <FadeIn direction="up" duration={0.6} className="text-center max-w-4xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-[#edf2e4] border border-[#d3dbcb] px-4 py-1.5 rounded-full shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e6314] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e6314]" />
              </span>
              <span className="text-[11.5px] sm:text-[12px] font-bold uppercase tracking-wider text-[#265710]">
                AI-First Product Engineering
              </span>
            </div>

            {/* Clear, Searchable & Descriptive H1 */}
            <h1 className="text-[38px] sm:text-[54px] md:text-[66px] lg:text-[76px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#111210]">
              Build <span className="bg-gradient-to-r from-[#111210] via-[#2e6314] to-[#111210] bg-clip-text text-transparent">intelligent products</span> <br className="hidden sm:inline" />
              from idea to production.
            </h1>

            {/* Clear Supporting Subheading: What, For Whom, How */}
            <p className="text-[15px] sm:text-[17px] text-[#3a4035] max-w-2xl mx-auto leading-relaxed">
              Fiverse Systems designs and engineers AI agents, SaaS platforms, custom software and enterprise applications—from product strategy and UX to development, cloud deployment and scale.
            </p>

            {/* Consolidated CTA Architecture */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 w-full max-w-md sm:max-w-none mx-auto">
              <button
                onClick={handleStartProjectClick}
                className="w-full sm:w-auto bg-[#111210] hover:bg-[#252823] text-white text-[14px] sm:text-[15px] font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group min-h-[50px]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#c8ff28]" />
              </button>

              <a
                href="#work"
                className="w-full sm:w-auto bg-white hover:bg-[#f3f5ed] text-[#111210] border border-[#d8dcd0] text-[14px] sm:text-[15px] font-semibold px-7 py-4 rounded-full transition-all duration-200 shadow-2xs hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>View Our Work</span>
              </a>
            </div>
          </FadeIn>

          {/* Hero Interactive Showcase Card (Brand Philosophy Anchor) */}
          <FadeIn direction="up" delay={0.25} duration={0.7}>
            <div className="bg-white rounded-[32px] sm:rounded-[44px] border border-[#e4e8dc] hero-card-shadow p-6 sm:p-10 lg:p-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Brand Narrative & Philosophy */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-3">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
                      Brand Philosophy
                    </span>
                    <h2 className="text-[26px] sm:text-[34px] font-bold text-[#111210] tracking-tight leading-tight">
                      We engineer intelligence into digital products.
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                      Software is shifting from static tools that wait for input to intelligent systems that reason, automate, and act. We unite product thinking, software engineering, applied AI, and cloud architecture under one delivery partner.
                    </p>
                  </div>

                  {/* 4 Pillar Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-[#f7f8f4] p-3.5 rounded-2xl border border-[#e5e8dc]">
                      <p className="text-[12.5px] font-bold text-[#111210] flex items-center gap-1.5">
                        <Brain className="w-3.5 h-3.5 text-[#2e6314]" />
                        <span>Autonomous Agents</span>
                      </p>
                      <p className="text-[11px] text-[#3a4035] mt-0.5">Context memory & tool execution</p>
                    </div>

                    <div className="bg-[#f7f8f4] p-3.5 rounded-2xl border border-[#e5e8dc]">
                      <p className="text-[12.5px] font-bold text-[#111210] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#0369a1]" />
                        <span>SaaS Platforms</span>
                      </p>
                      <p className="text-[11px] text-[#3a4035] mt-0.5">Multi-tenant cloud architecture</p>
                    </div>

                    <div className="bg-[#f7f8f4] p-3.5 rounded-2xl border border-[#e5e8dc]">
                      <p className="text-[12.5px] font-bold text-[#111210] flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-[#c2410c]" />
                        <span>Custom Software</span>
                      </p>
                      <p className="text-[11px] text-[#3a4035] mt-0.5">Built around your exact operations</p>
                    </div>

                    <div className="bg-[#f7f8f4] p-3.5 rounded-2xl border border-[#e5e8dc]">
                      <p className="text-[12.5px] font-bold text-[#111210] flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#7c3aed]" />
                        <span>Enterprise Systems</span>
                      </p>
                      <p className="text-[11px] text-[#3a4035] mt-0.5">RBAC & deterministic security</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Live Orchestration Visualizer */}
                <div className="lg:col-span-6 bg-[#111210] rounded-3xl p-6 sm:p-8 text-white border border-[#252822] shadow-2xl relative overflow-hidden space-y-5">
                  <div className="flex items-center justify-between border-b border-[#2d302a] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff28] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8ff28]" />
                      </span>
                      <span className="text-[12px] font-bold tracking-tight text-[#c8ff28]">Architecture Telemetry</span>
                    </div>
                    <span className="text-[10px] bg-[#22251f] text-[#c8ff28] px-2.5 py-0.5 rounded-full font-mono border border-[#34382c]">
                      ● Production Live
                    </span>
                  </div>

                  {/* Telemetry Counter Strip */}
                  <div className="bg-[#181a16] p-4 rounded-2xl border border-[#2d3227] flex items-center justify-between">
                    <div>
                      <p className="text-[10.5px] uppercase tracking-wider text-[#dce0d4]">Active Orchestration</p>
                      <p className="text-[15px] font-bold text-white flex items-center gap-2 mt-0.5">
                        <AnimatedCounter value={99} suffix=".99%" duration={2} className="text-[#c8ff28]" />
                        <span>High-Availability Uptime</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10.5px] uppercase tracking-wider text-[#dce0d4]">Average Latency</p>
                      <p className="text-[14px] font-mono font-bold text-[#c8ff28]">sub-250ms</p>
                    </div>
                  </div>

                  {/* Active Subsystem Nodes */}
                  <div className="grid grid-cols-2 gap-2.5 text-[12px]">
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5">
                      <Bot className="w-4 h-4 text-[#c8ff28]" />
                      <div>
                        <p className="font-bold text-white leading-tight">Agent Mesh</p>
                        <p className="text-[10px] text-[#dce0d4]">Task & API Router</p>
                      </div>
                    </div>
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-[#38bdf8]" />
                      <div>
                        <p className="font-bold text-white leading-tight">Hybrid RAG</p>
                        <p className="text-[10px] text-[#dce0d4]">Vector + Relational</p>
                      </div>
                    </div>
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5">
                      <Workflow className="w-4 h-4 text-[#fb923c]" />
                      <div>
                        <p className="font-bold text-white leading-tight">State Engine</p>
                        <p className="text-[10px] text-[#dce0d4]">Async Event Queues</p>
                      </div>
                    </div>
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#a855f7]" />
                      <div>
                        <p className="font-bold text-white leading-tight">Guardrails</p>
                        <p className="text-[10px] text-[#dce0d4]">Role-Based Access</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#22251f] p-3 rounded-xl border border-[#34382c] flex items-center justify-between text-[11px]">
                    <span className="text-[#dce0d4]">Core Mandate: “From product idea to production-grade software”</span>
                    <span className="text-[#c8ff28] font-bold font-mono">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          2. CREDIBILITY BAR: ENGINEERING BEYOND PROTOTYPES
         ======================================================== */}
      <section className="w-full py-12 sm:py-16 bg-[#edf2e3] border-y border-[#dbe3cf]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#d4decd]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">
                Enterprise Reassurance
              </span>
              <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111210]">
                Engineering beyond prototypes.
              </h2>
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#3a4035] max-w-md">
              We build production software designed for high availability, enterprise data isolation, strict security, and long-term maintainability.
            </p>
          </div>

          {/* 6 Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { label: 'AI-First Engineering', desc: 'Applied intelligence by design' },
              { label: 'Production-Ready', desc: 'Zero demo-only throwaway code' },
              { label: 'Integrated Teams', desc: 'Strategy, design, and code united' },
              { label: 'Security-Conscious', desc: 'Air-gapped & RBAC compliance' },
              { label: 'Scalable Architecture', desc: 'Multi-tenant cloud elasticity' },
              { label: 'Long-Term Partners', desc: '100% client source code ownership' }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-3.5 rounded-2xl border border-[#d6e0ce] shadow-2xs space-y-1">
                <p className="text-[12.5px] font-bold text-[#111210]">{pillar.label}</p>
                <p className="text-[11px] text-[#3a4035] leading-tight">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Grounded Realistic Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-[#d6e0ce] text-center space-y-1 shadow-2xs">
              <p className="text-[32px] sm:text-[38px] font-extrabold text-[#111210] font-mono">
                <AnimatedCounter value={50} suffix="+" duration={2} />
              </p>
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#3a4035]">Projects Delivered</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#d6e0ce] text-center space-y-1 shadow-2xs">
              <p className="text-[32px] sm:text-[38px] font-extrabold text-[#2e6314] font-mono">
                <AnimatedCounter value={15} suffix="+" duration={2} />
              </p>
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#3a4035]">Digital Products Launched</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#d6e0ce] text-center space-y-1 shadow-2xs">
              <p className="text-[32px] sm:text-[38px] font-extrabold text-[#111210] font-mono">
                <AnimatedCounter value={8} suffix="+" duration={2} />
              </p>
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#3a4035]">AI Systems Deployed</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#d6e0ce] text-center space-y-1 shadow-2xs">
              <p className="text-[32px] sm:text-[38px] font-extrabold text-[#2e6314] font-mono">
                <AnimatedCounter value={12} suffix="+" duration={2} />
              </p>
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#3a4035]">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHAT WE BUILD (4 FOCUSED CAPABILITY CARDS)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-3 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              Capabilities Architecture
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              We build products people use and businesses depend on.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
              From intelligent SaaS platforms to autonomous AI systems, our teams combine software engineering, product thinking, and applied AI to engineer real market value.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: AI Products & Agents */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e4e8dc] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#edf2e4] text-[#2e6314] flex items-center justify-center font-bold">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111210]">AI Products & Agents</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                    Build AI agents, copilots, RAG systems, intelligent workflows and AI-powered applications that reason across proprietary business data.
                  </p>
                </div>
                <ul className="space-y-2 text-[13px] text-[#3a4035] pt-2 border-t border-[#f0f3eb]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e6314]" />
                    <span>Autonomous goal-directed agent swarms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e6314]" />
                    <span>Hybrid vector & semantic RAG knowledge bases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e6314]" />
                    <span>Domain model fine-tuning with LoRA/QLoRA</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/ai-development-company"
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#111210] group-hover:text-[#2e6314] transition-colors"
                >
                  <span>Explore AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: SaaS & Product Engineering */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e4e8dc] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#0369a1] flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111210]">SaaS & Product Engineering</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                    Turn ideas into market-ready SaaS products with scalable architecture, multi-tenant billing, high throughput, and strong user experiences.
                  </p>
                </div>
                <ul className="space-y-2 text-[13px] text-[#3a4035] pt-2 border-t border-[#f0f3eb]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0369a1]" />
                    <span>Rapid MVP architecture to production release</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0369a1]" />
                    <span>Multi-tenant data isolation & subscription engines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0369a1]" />
                    <span>Cross-platform web, iOS and Android apps</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/product-development"
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#111210] group-hover:text-[#0369a1] transition-colors"
                >
                  <span>Explore Product Engineering</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Custom Software */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e4e8dc] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ffedd5] text-[#c2410c] flex items-center justify-center font-bold">
                  <Code2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111210]">Custom Software</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                    Build software around your operations, customers, and competitive advantage—not generic commercial templates that constrain your growth.
                  </p>
                </div>
                <ul className="space-y-2 text-[13px] text-[#3a4035] pt-2 border-t border-[#f0f3eb]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c2410c]" />
                    <span>Custom business portals & operations backbones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c2410c]" />
                    <span>High-performance backend services & REST/gRPC APIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c2410c]" />
                    <span>Legacy monolith modernization & cloud migration</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/custom-software-development"
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#111210] group-hover:text-[#c2410c] transition-colors"
                >
                  <span>Explore Software Engineering</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 4: Enterprise Solutions */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e4e8dc] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f3e8ff] text-[#7c3aed] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#111210]">Enterprise Solutions</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                    Modernize workflows, integrate mission-critical platforms, and build secure enterprise applications designed for scale and compliance.
                  </p>
                </div>
                <ul className="space-y-2 text-[13px] text-[#3a4035] pt-2 border-t border-[#f0f3eb]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#7c3aed]" />
                    <span>SOC 2, HIPAA, and role-based data sovereignty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#7c3aed]" />
                    <span>ERP, CRM, and banking API deep integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#7c3aed]" />
                    <span>Dedicated cross-functional engineering squads</span>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/services/enterprise-software"
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#111210] group-hover:text-[#7c3aed] transition-colors"
                >
                  <span>Explore Enterprise Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FEATURED WORK (REAL-WORLD OUTCOME CASE STUDIES)
         ======================================================== */}
      <section id="work" className="w-full py-16 sm:py-24 bg-[#edf2e4]/70 border-y border-[#dbe3cf]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn direction="up" className="space-y-3 max-w-2xl">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
                Proven Deliveries
              </span>
              <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
                Built for real-world impact.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
                A look at how we turn complex business problems into scalable digital products with measurable ROI.
              </p>
            </FadeIn>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111210] hover:text-[#2e6314] transition-colors shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Case Study 1 */}
            <div className="bg-white rounded-3xl p-7 border border-[#d6dfce] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314] bg-[#eef4e4] px-3 py-1 rounded-full">
                    Enterprise AI
                  </span>
                  <span className="text-[12px] text-[#3a4035] font-medium">FinTech & Operations</span>
                </div>

                <h3 className="text-[20px] font-bold text-[#111210] leading-snug">
                  Intelligent Document Operations & Decision Support
                </h3>

                <p className="text-[13.5px] text-[#3a4035] leading-relaxed">
                  Built an AI-powered document extraction and classification pipeline automating contract reviews and payment validation across 4,000+ monthly enterprise transactions.
                </p>

                {/* Metric Callouts */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#edf1e5]">
                  <div className="bg-[#f8faf4] p-3 rounded-xl border border-[#e4ebdc]">
                    <p className="text-[22px] font-extrabold text-[#2e6314] font-mono">70%</p>
                    <p className="text-[11px] text-[#3a4035] font-medium">Reduction in manual processing</p>
                  </div>
                  <div className="bg-[#f8faf4] p-3 rounded-xl border border-[#e4ebdc]">
                    <p className="text-[22px] font-extrabold text-[#111210] font-mono">3×</p>
                    <p className="text-[11px] text-[#3a4035] font-medium">Faster workflow completion</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['AI Agents', 'RAG', 'Enterprise', 'Workflow Automation'].map((t, idx) => (
                    <span key={idx} className="text-[10.5px] bg-[#f0f3ea] text-[#2d3229] px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#111210] hover:text-[#2e6314] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-3xl p-7 border border-[#d6dfce] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0369a1] bg-[#e0f2fe] px-3 py-1 rounded-full">
                    B2B SaaS
                  </span>
                  <span className="text-[12px] text-[#3a4035] font-medium">Cloud Platform</span>
                </div>

                <h3 className="text-[20px] font-bold text-[#111210] leading-snug">
                  Multi-Tenant Workflow & SaaS Analytics Platform
                </h3>

                <p className="text-[13.5px] text-[#3a4035] leading-relaxed">
                  Engineered an end-to-end multi-tenant SaaS application featuring real-time collaborative boards, automated usage billing, granular team permissions, and third-party APIs.
                </p>

                {/* Metric Callouts */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#edf1e5]">
                  <div className="bg-[#f0f9ff] p-3 rounded-xl border border-[#bae6fd]">
                    <p className="text-[22px] font-extrabold text-[#0369a1] font-mono">99.99%</p>
                    <p className="text-[11px] text-[#3a4035] font-medium">Operational uptime SLA</p>
                  </div>
                  <div className="bg-[#f0f9ff] p-3 rounded-xl border border-[#bae6fd]">
                    <p className="text-[22px] font-extrabold text-[#111210] font-mono">100K+</p>
                    <p className="text-[11px] text-[#3a4035] font-medium">Monthly active users</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['SaaS Architecture', 'React / Node', 'PostgreSQL', 'Multi-Tenant'].map((t, idx) => (
                    <span key={idx} className="text-[10.5px] bg-[#f0f3ea] text-[#2d3229] px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#111210] hover:text-[#0369a1] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-3xl p-7 border border-[#d6dfce] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7c3aed] bg-[#f3e8ff] px-3 py-1 rounded-full">
                    Agentic AI
                  </span>
                  <span className="text-[12px] text-[#3a4035] font-medium">E-Commerce & Ops</span>
                </div>

                <h3 className="text-[20px] font-bold text-[#111210] leading-snug">
                  Autonomous Customer Support & Operations Agent Mesh
                </h3>

                <p className="text-[13.5px] text-[#3a4035] leading-relaxed">
                  Deployed an orchestrated swarm of specialized AI agents resolving order discrepancies, issuing refunds within policy limits, and syncing CRM context 24/7 without delays.
                </p>

                {/* Metric Callouts */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#edf1e5]">
                  <div className="bg-[#faf5ff] p-3 rounded-xl border border-[#e9d5ff]">
                    <p className="text-[22px] font-extrabold text-[#7c3aed] font-mono">82%</p>
                    <p className="text-[11px] text-[#3a4035] font-medium">First-contact resolution</p>
                  </div>
                  <div className="bg-[#faf5ff] p-3 rounded-xl border border-[#e9d5ff]">
                    <p className="text-[22px] font-extrabold text-[#111210] font-mono">sub-3s</p>
                    <p className="text-[11px] text-[#3a4035] font-medium">Average response time</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['AI Agents', 'Tool Calling', 'CRM Sync', 'Guardrails'].map((t, idx) => (
                    <span key={idx} className="text-[10.5px] bg-[#f0f3ea] text-[#2d3229] px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#111210] hover:text-[#7c3aed] transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. STRATEGIC DARK SECTION: APPLIED AI ENGINEERED FOR PRODUCTION
         ======================================================== */}
      <section className="w-full py-20 sm:py-28 bg-[#111210] text-white relative overflow-hidden">
        <GlowOrb color="lime" size="xl" className="top-0 right-1/4 opacity-25 -z-0 pointer-events-none" />
        <GlowOrb color="cyan" size="lg" className="bottom-10 left-10 opacity-20 -z-0 pointer-events-none" />

        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16 relative z-10">
          <FadeIn direction="up" className="space-y-4 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">
              Deep Technical Credibility
            </span>
            <h2 className="text-[34px] sm:text-[48px] font-bold tracking-tight leading-[1.08] text-white">
              Applied AI engineered for production.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#dce0d4] leading-relaxed">
              We bridge the gap between experimental generative AI prototypes and mission-critical production systems built to withstand high concurrency and rigorous privacy requirements.
            </p>
          </FadeIn>

          {/* 6 Applied AI Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'AI Agents',
                icon: Bot,
                desc: 'Autonomous and semi-autonomous systems that reason, use business tools, and execute workflows.'
              },
              {
                title: 'Generative AI',
                icon: Sparkles,
                desc: 'Enterprise conversational, document synthesis, and multimodal applications powered by modern foundation weights.'
              },
              {
                title: 'RAG Systems',
                icon: Database,
                desc: 'Ground AI responses deterministically in proprietary documents, databases, and operational context.'
              },
              {
                title: 'Custom Models',
                icon: Cpu,
                desc: 'Fine-tune, adapt, and distill models for specialized industry vocabularies and zero-hallucination accuracy.'
              },
              {
                title: 'AI Automation',
                icon: Workflow,
                desc: 'Connect AI reasoning directly to existing ERPs, CRMs, APIs, databases, and background pipelines.'
              },
              {
                title: 'AI Infrastructure',
                icon: Server,
                desc: 'Deploy, evaluate, observe, guardrail, and cost-optimize LLMOps workloads in private cloud environments.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#181a16] p-6 rounded-3xl border border-[#282c23] space-y-3 hover:border-[#c8ff28] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#22251f] text-[#c8ff28] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white">{item.title}</h3>
                  <p className="text-[13px] text-[#dce0d4] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 5-Layer Technical Architecture Pipeline Panel */}
          <div className="bg-[#181a16] rounded-3xl p-6 sm:p-10 border border-[#2c3125] space-y-6">
            <div className="space-y-1.5 border-b border-[#2b3024] pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">
                Production System Architecture
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white">
                How our production AI stack operates.
              </h3>
              <p className="text-[13px] text-[#dce0d4]">
                A layered approach that ensures deterministic safety, private data isolation, and sub-second execution.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  layer: '01 Models',
                  detail: 'OpenAI • Anthropic Claude • Google Gemini • Meta Llama • Mistral',
                  desc: 'State-of-the-art foundation weights & fine-tuned domain models'
                },
                {
                  layer: '02 Intelligence',
                  detail: 'Hybrid RAG • Multi-Agent Swarms • Context Memory • Tool Calling',
                  desc: 'Reasoning loops, short & long-term memory, deterministic routing'
                },
                {
                  layer: '03 Orchestration',
                  detail: 'Workflows • State Machines • Event Systems • REST & gRPC APIs',
                  desc: 'Resilient asynchronous pipelines, rate-limiting, and error self-healing'
                },
                {
                  layer: '04 Data & Memory',
                  detail: 'Vector DBs (Pinecone/pgvector) • PostgreSQL • Redis • Enterprise Silos',
                  desc: 'Encrypted at rest, air-gapped, zero training on public multi-tenant pools'
                },
                {
                  layer: '05 Applications',
                  detail: 'Web Portals • Mobile Apps • Internal Ops Tools • Multi-Tenant SaaS',
                  desc: 'Human-in-the-loop interfaces, telemetry dashboards, and real-time outputs'
                }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#20231d] p-4 rounded-2xl border border-[#2f3527] flex flex-col md:flex-row md:items-center justify-between gap-2 hover:border-[#c8ff28]/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] font-bold text-[#c8ff28] shrink-0">{step.layer}</span>
                    <span className="text-[13.5px] font-bold text-white">{step.detail}</span>
                  </div>
                  <span className="text-[12px] text-[#dce0d4]">{step.desc}</span>
                </div>
              ))}
            </div>

            {/* Enterprise CTO / Security Callout Bar */}
            <div className="bg-[#121410] border border-[#2e3425] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
              <div className="flex items-center gap-2.5 text-[#c8ff28]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-bold uppercase tracking-wider text-[11px]">Enterprise Security Guarantee:</span>
              </div>
              <p className="text-[#dce0d4] text-[12px] text-center sm:text-left">
                Deployable into your private AWS/GCP/Azure VPC • Zero Data Retention (ZDR) APIs • AES-256 encrypted • 100% IP Ownership
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2b3024]">
              <p className="text-[12.5px] text-[#dce0d4]">
                Ready to engineer private, production-grade intelligence into your software?
              </p>
              <button
                onClick={onTalkToAI}
                className="bg-[#c8ff28] hover:bg-[#bbf020] text-[#111210] font-bold text-[13px] px-6 py-2.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <Bot className="w-4 h-4" />
                <span>Talk to an AI Expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. PRODUCT ENGINEERING LIFECYCLE (DISCOVER TO SCALE)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative bg-[#f7f8f4]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-3 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              End-to-End Delivery
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              From product idea to production-scale software.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
              Strategy, design, software engineering, applied AI, cloud architecture, and continuous improvement delivered as one unified product lifecycle.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Discover',
                subtitle: 'Strategy & Feasibility',
                desc: 'Define business goals, user requirements, technical feasibility, AI opportunities, and architectural roadmap.'
              },
              {
                step: '02',
                title: 'Design',
                subtitle: 'UX & Prototyping',
                desc: 'User journey mapping, high-fidelity UI systems, interaction design, and clickable prototypes.'
              },
              {
                step: '03',
                title: 'Engineer',
                subtitle: 'Code & AI Integration',
                desc: 'Scalable frontend, robust backend microservices, AI model integration, and automated QA testing.'
              },
              {
                step: '04',
                title: 'Launch',
                subtitle: 'Cloud & Deployment',
                desc: 'AWS/GCP infrastructure, automated CI/CD pipelines, security audits, and production monitoring.'
              },
              {
                step: '05',
                title: 'Scale',
                subtitle: 'Continuous Evolution',
                desc: 'Performance optimization, real-time analytics telemetry, model evaluation, and continuous feature expansion.'
              }
            ].map((phase, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#e2e6d8] card-soft-shadow space-y-3 flex flex-col justify-between hover:border-[#111210] transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] font-bold text-[#2e6314]">{phase.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2e6314]" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#111210]">{phase.title}</h3>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider text-[#3a4035]">{phase.subtitle}</p>
                  <p className="text-[13px] text-[#3a4035] leading-relaxed pt-1">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. WHY FIVERSE & WHAT AI-FIRST MEANS (OPERATIONAL DIFFERENTIATION)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 bg-[#edf2e4]/70 border-y border-[#dbe3cf]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16">
          {/* Why Fiverse */}
          <div className="space-y-10">
            <FadeIn direction="up" className="space-y-3 max-w-3xl">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
                Operational Differentiation
              </span>
              <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
                Why ambitious teams choose Fiverse.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
                We replace agency buzzwords with rigorous engineering principles that directly de-risk your technology investment.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Product thinking before coding',
                  desc: 'We define commercial outcomes, challenge assumptions, and design user journeys before committing engineering effort.'
                },
                {
                  title: 'AI where it creates measurable value',
                  desc: 'We deploy AI where reasoning, automation, or knowledge access materially improves the product—never for superficial marketing hype.'
                },
                {
                  title: 'Production-grade engineering',
                  desc: 'Architecture, security, observability, performance, and unit testing are first-class citizens from day one, not afterthoughts.'
                },
                {
                  title: 'One integrated product team',
                  desc: 'Strategy, UI/UX design, software engineering, applied AI, and cloud architects collaborate seamlessly throughout every sprint.'
                },
                {
                  title: 'Built for long-term evolution',
                  desc: 'Modular codebases and extensible architectures designed to scale gracefully as your user base and data volumes multiply.'
                },
                {
                  title: '100% Client IP ownership',
                  desc: 'You retain full ownership of all source code, models, datasets, and architecture documentation without vendor lock-in.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-7 rounded-3xl border border-[#d6dfce] card-soft-shadow space-y-3">
                  <h3 className="text-[17px] font-bold text-[#111210]">{item.title}</h3>
                  <p className="text-[13.5px] text-[#3a4035] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What AI-First Means */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d6dfce] card-soft-shadow space-y-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">
                Methodology
              </span>
              <h3 className="text-[24px] sm:text-[30px] font-bold text-[#111210]">
                What “AI-first” means at Fiverse.
              </h3>
              <p className="text-[14px] text-[#3a4035]">
                Rather than treating AI as an add-on widget, we embed intelligence across three strategic dimensions:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#f8faf4] border border-[#e3ebdb] space-y-2">
                <h4 className="text-[16px] font-bold text-[#111210] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2e6314]" />
                  <span>Intelligence in the product</span>
                </h4>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  Build capabilities that understand context, recommend optimal paths, synthesize complex data, and reason autonomously for users.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8faf4] border border-[#e3ebdb] space-y-2">
                <h4 className="text-[16px] font-bold text-[#111210] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0369a1]" />
                  <span>Intelligence in engineering</span>
                </h4>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  Use AI-assisted engineering processes to accelerate sprint velocity, automate unit testing, and maintain impeccable code quality.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f8faf4] border border-[#e3ebdb] space-y-2">
                <h4 className="text-[16px] font-bold text-[#111210] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
                  <span>Intelligence in operations</span>
                </h4>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  Automate repetitive workflows, monitor background pipelines, and use telemetry continuously to inform future product roadmap decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. AUTONOMOUS SYSTEMS ARCHITECTURE (EDUCATIONAL & RIGOROUS)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-3 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              Agent Orchestration Architecture
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              How we engineer autonomous systems.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
              True autonomous systems require deterministic boundaries, state verification, context memory, and human-in-the-loop oversight to run reliably in production.
            </p>
          </FadeIn>

          {/* Interactive Agent Architecture Flow Visualizer */}
          <div className="bg-[#111210] rounded-3xl p-6 sm:p-10 border border-[#252822] text-white shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2d3227] pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">
                  State Machine Lifecycle
                </span>
                <h3 className="text-[20px] font-bold text-white">Production AI Agent Mesh Pipeline</h3>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#dce0d4]">
                <span className="w-2 h-2 rounded-full bg-[#c8ff28] animate-pulse" />
                <span>Deterministic Guardrails Active</span>
              </div>
            </div>

            {/* Architecture Node Flow */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { node: '01 Event Trigger', label: 'User / Webhook', sub: 'Inbound API action' },
                { node: '02 Agent Router', label: 'Intent Evaluation', sub: 'Model & tool selection' },
                { node: '03 Planning Loop', label: 'Task Decomposition', sub: 'Stepwise execution tree' },
                { node: '04 Context & Memory', label: 'Hybrid RAG', sub: 'Vector DB + SQL state' },
                { node: '05 Tool Execution', label: 'CRM / ERP / API', sub: 'Transactional mutations' },
                { node: '06 Guardrails', label: 'Safety & Privacy', sub: 'Policy verification' },
                { node: '07 Human Review', label: 'Approval Gate', sub: 'For high-impact events' },
                { node: '08 Observability', label: 'Telemetry & Logs', sub: 'Latency, token, costs' },
                { node: '09 Feedback Loop', label: 'RLHF Alignment', sub: 'Continuous improvement' },
                { node: '10 Result Delivery', label: 'Verified Outcome', sub: 'Final business result' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#191b16] p-4 rounded-2xl border border-[#2b3024] space-y-1 hover:border-[#c8ff28] transition-all"
                >
                  <span className="font-mono text-[10.5px] font-bold text-[#c8ff28]">{item.node}</span>
                  <p className="text-[13px] font-bold text-white leading-tight">{item.label}</p>
                  <p className="text-[11px] text-[#dce0d4]">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1e221b] p-4 rounded-2xl border border-[#313727] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
              <span className="text-[#dce0d4]">
                Each stage executes with strict token budget limits, timeout monitors, and automatic rollback routines.
              </span>
              <button
                onClick={handleStartProjectClick}
                className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold px-5 py-2 rounded-full transition-all cursor-pointer shrink-0"
              >
                Engineer Your Agent Mesh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FOCUSED INDUSTRIES
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 bg-[#edf2e4]/70 border-y border-[#dbe3cf]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-3 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              Domain Expertise
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              Industries we help transform.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
              We focus on verticals where intelligent software, workflow automation, and custom architecture create deep structural competitive advantages.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: 'FinTech & Banking',
                desc: 'Automated reconciliation, KYC verification, fraud detection, and banking APIs.',
                link: '/services/fintech'
              },
              {
                title: 'Healthcare & HealthTech',
                desc: 'HIPAA-compliant document parsing, diagnostic support, and patient portals.',
                link: '/services/healthtech'
              },
              {
                title: 'Retail & E-Commerce',
                desc: 'AI recommendation engines, inventory dispatch, and omnichannel platforms.',
                link: '/services/retail-ecommerce'
              },
              {
                title: 'B2B SaaS',
                desc: 'Multi-tenant applications, automated billing, team workspaces, and developer APIs.',
                link: '/saas-development'
              },
              {
                title: 'Real Estate & PropTech',
                desc: 'Tenant portals, automated lease document extraction, and property analytics.',
                link: '/services/real-estate'
              },
              {
                title: 'Construction & Field Ops',
                desc: 'Job-site reporting, procurement workflows, contractor portals, and risk tracking.',
                link: '/services/construction'
              },
              {
                title: 'Education & EdTech',
                desc: 'Adaptive learning systems, personalized AI tutor agents, and LMS platforms.',
                link: '/services/edtech'
              },
              {
                title: 'Logistics & Supply Chain',
                desc: 'Route optimization, automated customs paperwork, and fleet telematics.',
                link: '/services/logistics'
              }
            ].map((ind, idx) => (
              <Link
                key={idx}
                to={ind.link}
                className="bg-white p-6 rounded-3xl border border-[#d6dfce] shadow-2xs space-y-2 hover:border-[#111210] hover:-translate-y-1 transition-all group block"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-bold text-[#111210] group-hover:text-[#2e6314] transition-colors">
                    {ind.title}
                  </h3>
                  <ArrowRight className="w-3.5 h-3.5 text-[#3a4035] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[12.5px] text-[#3a4035] leading-relaxed">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. ENGAGEMENT MODELS: WORK WITH FIVERSE YOUR WAY
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-3 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              Engagement Models
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              Work with Fiverse your way.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
              Whether you need a full product squad, an MVP sprint, or an AI architecture discovery session, we structure engagements around your milestone goals.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Model 1: Fixed-Scope MVP Sprint */}
            <div className="bg-white rounded-3xl p-7 border border-[#e2e6d8] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">Founders ($25K - $50K)</span>
                <h3 className="text-[20px] font-bold text-[#111210]">Fixed-Scope MVP Sprint</h3>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  A focused 6 to 8-week production sprint taking your concept to a live, cloud-deployed product ready for market validation and seed fundraising.
                </p>
                <div className="pt-2 space-y-1.5 text-[12px] text-[#3a4035]">
                  <p className="font-semibold text-[#111210]">Sprint Deliverables:</p>
                  <p>• Sprint 0 PRD & system architecture</p>
                  <p>• Interactive Figma UI/UX prototype</p>
                  <p>• Full-stack build & cloud deployment</p>
                  <p>• 100% repository transfer & IP sign-off</p>
                </div>
              </div>
              <button
                onClick={handleStartProjectClick}
                className="w-full bg-[#111210] hover:bg-[#252823] text-white text-[13px] font-bold py-3 rounded-full transition-all cursor-pointer"
              >
                Scope MVP Sprint
              </button>
            </div>

            {/* Model 2: Full Platform & AI System */}
            <div className="bg-white rounded-3xl p-7 border border-[#e2e6d8] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0369a1]">Scale ($50K - $100K+)</span>
                <h3 className="text-[20px] font-bold text-[#111210]">Full Platform & AI</h3>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  End-to-end engineering for complex SaaS platforms, multi-agent mesh networks, or enterprise workflow modernization.
                </p>
                <div className="pt-2 space-y-1.5 text-[12px] text-[#3a4035]">
                  <p className="font-semibold text-[#111210]">Core Deliverables:</p>
                  <p>• Multi-tenant database & security model</p>
                  <p>• Autonomous agents & hybrid RAG mesh</p>
                  <p>• Private VPC / On-premise deployment</p>
                  <p>• Automated CI/CD, load tests & handover</p>
                </div>
              </div>
              <button
                onClick={handleStartProjectClick}
                className="w-full bg-white hover:bg-[#f3f5ed] text-[#111210] border border-[#d8dcd0] text-[13px] font-bold py-3 rounded-full transition-all cursor-pointer"
              >
                Scope Platform
              </button>
            </div>

            {/* Model 3: Dedicated Squad */}
            <div className="bg-white rounded-3xl p-7 border border-[#e2e6d8] card-soft-shadow flex flex-col justify-between space-y-6 hover:border-[#111210] transition-all">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7c3aed]">Continuous Velocity</span>
                <h3 className="text-[20px] font-bold text-[#111210]">Dedicated Squad</h3>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  An embedded senior engineering squad working continuously alongside your team for sustained sprint velocity.
                </p>
                <div className="pt-2 space-y-1.5 text-[12px] text-[#3a4035]">
                  <p className="font-semibold text-[#111210]">Squad Composition:</p>
                  <p>• Principal Architect & UX Lead</p>
                  <p>• Senior Full-Stack Engineers (React/Node/Python)</p>
                  <p>• AI / ML & DevOps Specialist</p>
                  <p>• Bi-weekly milestone sprint invoicing</p>
                </div>
              </div>
              <button
                onClick={handleStartProjectClick}
                className="w-full bg-white hover:bg-[#f3f5ed] text-[#111210] border border-[#d8dcd0] text-[13px] font-bold py-3 rounded-full transition-all cursor-pointer"
              >
                Request a Squad
              </button>
            </div>

            {/* Model 4: AI Discovery Sprint (Productized Lead Magnet) */}
            <div className="bg-[#f2f7ea] rounded-3xl p-7 border-2 border-[#2e6314] card-soft-shadow flex flex-col justify-between space-y-6 relative">
              <span className="absolute -top-3 right-6 bg-[#2e6314] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                High Value
              </span>
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">90-Minute Scoping</span>
                <h3 className="text-[20px] font-bold text-[#111210]">AI Discovery Sprint</h3>
                <p className="text-[13px] text-[#3a4035] leading-relaxed">
                  A high-impact, focused architecture workshop to identify, evaluate, and blueprint an AI or automation opportunity.
                </p>
                <div className="pt-2 space-y-1.5 text-[12px] text-[#3a4035]">
                  <p className="font-semibold text-[#111210]">Deliverables:</p>
                  <p>• Evaluated AI use cases & ROI roadmap</p>
                  <p>• Data readiness & VPC security review</p>
                  <p>• Architectural blueprint & budget estimate</p>
                </div>
              </div>
              <button
                onClick={onTalkToAI}
                className="w-full bg-[#2e6314] hover:bg-[#255210] text-white text-[13px] font-bold py-3 rounded-full transition-all cursor-pointer shadow-sm"
              >
                Book AI Workshop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. SOCIAL PROOF & TESTIMONIALS
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 bg-[#edf2e4]/70 border-y border-[#dbe3cf]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-3 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              Client Feedback
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              Engineered with care, delivered with speed.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#d6dfce] shadow-2xs space-y-4 flex flex-col justify-between">
              <p className="text-[14px] text-[#2d312c] leading-relaxed italic">
                “Fiverse took our complex operational workflows and turned them into an intuitive, multi-tenant SaaS platform in under 10 weeks. Their AI agent integration cut our document turnaround by more than half.”
              </p>
              <div className="pt-3 border-t border-[#edf1e5]">
                <p className="text-[13.5px] font-bold text-[#111210]">Founder & Chief Executive</p>
                <p className="text-[11.5px] text-[#3a4035]">FinTech Operations Platform</p>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#d6dfce] shadow-2xs space-y-4 flex flex-col justify-between">
              <p className="text-[14px] text-[#2d312c] leading-relaxed italic">
                “Unlike agencies that promise the moon and deliver cookie-cutter code, Fiverse’s engineers asked the tough architectural questions first. They delivered production-grade software with zero drama.”
              </p>
              <div className="pt-3 border-t border-[#edf1e5]">
                <p className="text-[13.5px] font-bold text-[#111210]">VP of Engineering</p>
                <p className="text-[11.5px] text-[#3a4035]">B2B Logistics & Supply Chain Scale-Up</p>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#d6dfce] shadow-2xs space-y-4 flex flex-col justify-between">
              <p className="text-[14px] text-[#2d312c] leading-relaxed italic">
                “The AI Discovery Sprint was the best investment we made this quarter. In 90 minutes, their team clarified our RAG data dependencies and saved us months of misguided engineering effort.”
              </p>
              <div className="pt-3 border-t border-[#edf1e5]">
                <p className="text-[13.5px] font-bold text-[#111210]">Head of Product Innovation</p>
                <p className="text-[11.5px] text-[#3a4035]">Enterprise Real Estate Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. INSIGHTS & ENGINEERING AUTHORITY
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn direction="up" className="space-y-3 max-w-2xl">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
                Technical Perspectives
              </span>
              <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
                Engineering insights & architecture blueprints.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
                We share practical lessons learned from architecting and scaling production AI systems and high-throughput software.
              </p>
            </FadeIn>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111210] hover:text-[#2e6314] transition-colors shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'AI Architecture',
                title: 'How We Architect Multi-Agent Systems for Production',
                desc: 'Moving beyond single-prompt chatbots: State machines, context isolation, and deterministic tool guardrails.'
              },
              {
                category: 'RAG Systems',
                title: 'Enterprise RAG: What Changes After the Prototype Stage',
                desc: 'Why basic vector search fails on complex enterprise schemas and how hybrid retrieval solves precision issues.'
              },
              {
                category: 'Agentic Memory',
                title: 'Agent Memory Strategies: Vector vs Graph vs Buffer',
                desc: 'Comparing latency, retrieval accuracy, and cost tradeoffs when building long-term memory for autonomous agents.'
              },
              {
                category: 'Product Strategy',
                title: 'MVP vs Prototype: What Startups Actually Need to Build',
                desc: 'How to scope early product releases around measurable commercial outcomes without accumulating crippling technical debt.'
              }
            ].map((art, idx) => (
              <Link
                key={idx}
                to="/blog"
                className="bg-white p-6 rounded-3xl border border-[#e2e6d8] card-soft-shadow space-y-3 hover:border-[#111210] hover:-translate-y-1 transition-all group flex flex-col justify-between block"
              >
                <div className="space-y-2.5">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#2e6314] bg-[#edf2e4] px-2.5 py-0.5 rounded-full">
                    {art.category}
                  </span>
                  <h3 className="text-[16px] font-bold text-[#111210] group-hover:text-[#2e6314] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-[12.5px] text-[#3a4035] leading-relaxed">{art.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#111210] pt-2">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          13. AEO-OPTIMIZED FAQ SECTION (8 DIRECT QUESTIONS)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 bg-[#edf2e4]/70 border-y border-[#dbe3cf]">
        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
          <FadeIn direction="up" className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
              Frequently Answered Questions
            </span>
            <h2 className="text-[30px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.12]">
              Direct answers to common questions.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#3a4035]">
              Everything you need to know about working with Fiverse Systems, our delivery model, IP ownership, and technical capabilities.
            </p>
          </FadeIn>

          <div className="space-y-3">
            {homepageFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#d6dfce] shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fafbf7] transition-colors"
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-[#111210]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#3a4035] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2e6314]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[13.5px] sm:text-[14px] text-[#3a4035] leading-relaxed border-t border-[#f0f3eb] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          14. FINAL CONVERSION CTA SECTION
         ======================================================== */}
      <section className="w-full py-20 sm:py-28 bg-[#111210] text-white relative overflow-hidden">
        <GlowOrb color="lime" size="xl" className="top-0 left-1/2 -translate-x-1/2 -z-0 opacity-25" />

        <div className="w-full sm:w-[92%] lg:w-[88%] 2xl:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-8 text-center relative z-10">
          <FadeIn direction="up" className="max-w-3xl mx-auto space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">
              Ready to Build What's Next?
            </span>
            <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white">
              Build intelligent products with an engineering partner that delivers.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#dce0d4] leading-relaxed max-w-2xl mx-auto">
              Whether you have an extensive technical PRD or an early product concept, we help turn your idea into scalable, secure production software.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <button
                onClick={handleStartProjectClick}
                className="w-full sm:w-auto bg-[#c8ff28] hover:bg-[#bbf020] text-[#111210] font-extrabold text-[15px] px-9 py-4 rounded-full transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] min-h-[50px]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-[#111210]" />
              </button>
              <a
                href="#work"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-[#3b3e36] font-semibold text-[15px] px-8 py-4 rounded-full transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] min-h-[50px] flex items-center justify-center"
              >
                <span>View Our Work</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
});

HomePage.displayName = 'HomePage';
