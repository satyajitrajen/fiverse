import React, { useState, memo } from 'react';
import {
  Sparkles,
  ArrowRight,
  Brain,
  Bot,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Users,
  FileText,
  Activity,
  Workflow,
  Search,
  Mic,
  ChevronRight,
  Target
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, GlowOrb, AnimatedCounter } from './Motion';
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
  const [activeModelStep, setActiveModelStep] = useState<number>(0);
  const [selectedAgentCategory, setSelectedAgentCategory] = useState<number>(0);

  const handleStartProjectClick = async () => {
    try {
      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default;
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {}
    onStartProject();
  };

  const agentCategories = [
    { title: 'AI Sales Agents', icon: TrendingUp, desc: 'Qualifies inbound leads, analyzes intent, drafts personalized outreach, and schedules high-value discovery calls autonomously.' },
    { title: 'AI Customer Support Agents', icon: MessageSquare, desc: 'Resolves complex multi-step customer inquiries 24/7 with deep knowledge-base context and transactional action APIs.' },
    { title: 'AI Research Agents', icon: Search, desc: 'Scrapes, reads, synthesizes documents, extracts key insights, and builds comprehensive market reports in minutes.' },
    { title: 'AI Recruitment & HR Agents', icon: Users, desc: 'Screens resumes, matches candidate skills with job descriptions, drafts interview scorecards, and handles team onboarding.' },
    { title: 'AI Operations & Workflow Agents', icon: Workflow, desc: 'Monitors operations pipelines, detects bottlenecks, automates cross-departmental handoffs, and self-heals error logs.' },
    { title: 'AI Finance & Data Agents', icon: Activity, desc: 'Automates invoice reconciliation, flags expense anomalies, generates financial summaries, and queries SQL data in natural language.' },
    { title: 'AI Voice Agents', icon: Mic, desc: 'Real-time, bidirectional voice streaming for inbound call centers, appointment scheduling, and voice-guided software assistance.' },
    { title: 'Custom Enterprise & Multi-Agent Systems', icon: Bot, desc: 'Coordinated swarms of specialized agents communicating with shared context, long-term memory, and deterministic guardrails.' }
  ];

  const modelLifecycle = [
    { step: '01', title: 'Discover', desc: 'Define business problem, expected output, available data, latency thresholds, and measurable success criteria.' },
    { step: '02', title: 'Prepare', desc: 'Clean, structure, classify, tokenize, deduplicate, label, and prepare training and evaluation datasets.' },
    { step: '03', title: 'Architect', desc: 'Evaluate ML algorithms, transformer networks, open-source foundation weights, and custom neural topologies.' },
    { step: '04', title: 'Train', desc: 'Train models using specialized infrastructure, distributed GPU compute, and loss-function optimization.' },
    { step: '05', title: 'Fine-Tune', desc: 'Adapt models with LoRA/QLoRA for domain-specific vocabulary, proprietary workflows, and industry safety guidelines.' },
    { step: '06', title: 'Evaluate', desc: 'Benchmark accuracy, precision, recall, hallucination frequency, latency, token throughput, and cost per inference.' },
    { step: '07', title: 'Deploy', desc: 'Deploy via low-latency inference APIs, private on-prem servers, Kubernetes clusters, or edge devices.' },
    { step: '08', title: 'Improve', desc: 'Implement active telemetry, user feedback loops, RLHF, and continuous dataset updates for model evolution.' }
  ];

  const partnerPersonas = [
    {
      title: 'Founders',
      desc: 'Turn ambitious ideas into functional, production-ready products with agile roadmap execution.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      role: 'Early Stage & Growth'
    },
    {
      title: 'Startups',
      desc: 'Build MVPs, SaaS platforms and AI products ready for rapid market growth and venture funding.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      role: 'Seed to Series B'
    },
    {
      title: 'SMEs',
      desc: 'Digitize workflows and reduce operational dependency on manual spreadsheets and disconnected tools.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      role: 'Scaling Operations'
    },
    {
      title: 'Enterprises',
      desc: 'Modernize legacy technology and introduce artificial intelligence into complex global operations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      role: 'Enterprise Systems'
    },
    {
      title: 'Tech Companies',
      desc: 'Extend senior engineering capacity with specialized AI, agentic systems, and cloud architecture expertise.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
      role: 'Core Engineering'
    }
  ];

  const industries = [
    'FinTech', 'EdTech', 'HealthTech', 'HRTech', 'Retail', 'E-Commerce',
    'Manufacturing', 'Construction', 'Real Estate', 'Logistics', 'Hospitality', 'FoodTech',
    'Recruitment', 'Professional Services', 'Automotive', 'Education', 'Finance', 'Enterprise Operations'
  ];

  const homepageFaqs = [
    {
      question: "What services does Fiverse Systems provide?",
      answer: "Fiverse Systems is an AI-first software development company specializing in Agentic AI, custom AI agents, enterprise RAG, Generative AI, LLM fine-tuning, custom full-stack software, and SaaS product engineering."
    },
    {
      question: "How does Fiverse Systems develop AI applications?",
      answer: "We follow a 9-step delivery framework from business discovery and data architecture to model fine-tuning, deterministic API integration, automated testing, and secure cloud deployment in 6 to 8 weeks."
    },
    {
      question: "Can Fiverse integrate AI into our existing software without rebuilding?",
      answer: "Yes. We engineer modular microservices, REST/GraphQL API adapters, and secure database connections to inject intelligence directly into your existing platforms."
    },
    {
      question: "How does Fiverse ensure enterprise data privacy and security?",
      answer: "We deploy private VPC and air-gapped architectures with strict role-based access control (RBAC), deterministic tool sandboxing, input validation, and zero training on public multi-tenant models."
    }
  ];

  return (
    <div className="w-full text-[#111210] selection:bg-[#c8ff28] selection:text-[#111210]">
      <SEOHead
        title="AI Development Company & Custom Software Engineering | Fiverse Systems"
        description="Fiverse Systems is an AI-first software development company engineering autonomous AI agents, Generative AI, custom software, SaaS products, AI models, web and mobile platforms."
        keywords="AI development company, agentic AI, AI agents, generative AI development, custom software development, LLM engineering, SaaS product development, enterprise AI"
        canonicalPath="/"
        faqs={homepageFaqs}
      />
      
      {/* ========================================================
          1. HERO SECTION (DYNAMIC AI ENGINE + FLOATING GLASS HUBS)
         ======================================================== */}
      <section className="w-full pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Modern ambient glow backdrop */}
        <GlowOrb color="lime" size="xl" className="-top-32 left-1/2 -translate-x-1/2 opacity-35 pointer-events-none" />
        <GlowOrb color="cyan" size="md" className="top-1/3 -right-20 opacity-20 pointer-events-none" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 relative z-10">
          {/* Main Hero Header */}
          <FadeIn direction="up" duration={0.6} className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#f0f3e8] border border-[#d6dcce] px-4 py-1.5 rounded-full shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#528d2c] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#528d2c]" />
              </span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#2e6314]">
                Autonomous Systems & AI-First Software Engineering
              </span>
            </div>

            <h1 className="text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-extrabold tracking-[-0.04em] leading-[1.04] text-[#111210] lowercase">
              we engineer intelligence <br className="hidden sm:inline" />
              into <span className="bg-gradient-to-r from-[#111210] via-[#2e6314] to-[#111210] bg-clip-text text-transparent">digital products.</span>
            </h1>

            <p className="text-[14px] sm:text-[15px] text-[#3a4035] max-w-2xl mx-auto leading-relaxed">
              Fiverse Systems is an AI-first software development and product engineering company helping startups, growing businesses and enterprises turn ideas, workflows and data into intelligent digital products.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 pt-3 w-full max-w-md sm:max-w-none mx-auto">
              <button
                onClick={handleStartProjectClick}
                className="w-full sm:w-auto bg-[#111210] hover:bg-[#252823] text-white text-[14px] sm:text-[15px] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>Build With Fiverse</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#c8ff28]" />
              </button>
              <button
                onClick={onTalkToAI}
                className="w-full sm:w-auto bg-white hover:bg-[#f3f5ed] text-[#111210] border border-[#d8dcd0] text-[14px] sm:text-[15px] font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-2xs hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Bot className="w-4 h-4 text-[#2e6314]" />
                <span>Talk to Our AI Team</span>
              </button>
            </div>
          </FadeIn>

          {/* Hero Interactive Intelligent System Showcase Card */}
          <FadeIn direction="up" delay={0.25} duration={0.7}>
            <div className="bg-white rounded-[32px] sm:rounded-[44px] border border-[#e4e8dc] hero-card-shadow p-6 sm:p-10 lg:p-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Mission Narrative & Scope */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-3">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">
                      End-to-End Product Lifecycle
                    </span>
                    <h2 className="text-[28px] sm:text-[36px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                      from breakthrough concept to enterprise production.
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                      We build everything from custom AI models and autonomous AI agents to SaaS platforms, enterprise software, web applications and mobile products—from strategy and architecture to development, deployment and continuous improvement.
                    </p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-[#e4e7dc] shadow-xs group">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=75"
                      alt="Product engineering team collaborating"
                      className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-[#f7f8f4] p-3.5 rounded-2xl border border-[#e5e8dc] transition-all hover:border-[#111210] hover:-translate-y-0.5">
                      <p className="text-[12px] font-bold text-[#111210] flex items-center gap-1.5">
                        <Brain className="w-3.5 h-3.5 text-[#266314]" />
                        <span>Autonomous Agents</span>
                      </p>
                      <p className="text-[11px] text-[#3a4035] font-medium mt-0.5">Contextual memory & tools</p>
                    </div>
                    <div className="bg-[#f7f8f4] p-3.5 rounded-2xl border border-[#e5e8dc] transition-all hover:border-[#111210] hover:-translate-y-0.5">
                      <p className="text-[12px] font-bold text-[#111210] flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#0369a1]" />
                        <span>Scalable SaaS & Web</span>
                      </p>
                      <p className="text-[11px] text-[#3a4035] font-medium mt-0.5">Multi-tenant architecture</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Multi-Agent Orchestration Diagram with Dark UI & Visuals */}
                <div className="lg:col-span-6 bg-[#111210] rounded-3xl p-6 sm:p-8 text-white border border-[#252822] shadow-2xl relative overflow-hidden space-y-5">
                  <div className="flex items-center justify-between border-b border-[#2d302a] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff28] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8ff28]" />
                      </span>
                      <span className="text-[12px] font-bold tracking-tight text-[#c8ff28]">Fiverse Autonomous Engine</span>
                    </div>
                    <span className="text-[10px] bg-[#22251f] text-[#c8ff28] px-2.5 py-0.5 rounded-full font-mono border border-[#34382c]">
                      ● Live Agent Mesh
                    </span>
                  </div>

                  {/* Visual Architecture Banner inside Card with Telemetry Counter */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#2d3227] h-28">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&auto=format&fit=crop&q=60"
                      alt="High-speed data servers and neural processing"
                      width={480}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111210] via-[#111210]/75 to-transparent p-4 flex flex-col justify-center">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Distributed Telemetry</p>
                      <p className="text-[13px] font-extrabold text-white flex items-center gap-1.5">
                        <AnimatedCounter value={100} suffix="M+" duration={2} className="text-[#c8ff28]" />
                        <span>Monthly Token Actions & Real-Time Sync</span>
                      </p>
                    </div>
                  </div>

                  {/* Agents Active Grid with interactive micro-lift */}
                  <div className="grid grid-cols-2 gap-2.5 text-[12px]">
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5 hover:border-[#c8ff28] hover:-translate-y-0.5 transition-all cursor-pointer">
                      <Bot className="w-4 h-4 text-[#c8ff28]" />
                      <div>
                        <p className="font-bold text-white leading-tight">Sales Agent</p>
                        <p className="text-[10px] text-[#dce0d4]">CRM + Lead Sync</p>
                      </div>
                    </div>
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5 hover:border-[#38bdf8] hover:-translate-y-0.5 transition-all cursor-pointer">
                      <Database className="w-4 h-4 text-[#38bdf8]" />
                      <div>
                        <p className="font-bold text-white leading-tight">RAG Knowledge</p>
                        <p className="text-[10px] text-[#dce0d4]">Vector DB Search</p>
                      </div>
                    </div>
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5 hover:border-[#fb923c] hover:-translate-y-0.5 transition-all cursor-pointer">
                      <Workflow className="w-4 h-4 text-[#fb923c]" />
                      <div>
                        <p className="font-bold text-white leading-tight">Ops Orchestrator</p>
                        <p className="text-[10px] text-[#dce0d4]">ERP Auto-Action</p>
                      </div>
                    </div>
                    <div className="bg-[#1c1e19] p-3 rounded-2xl border border-[#2e3227] flex items-center gap-2.5 hover:border-[#a855f7] hover:-translate-y-0.5 transition-all cursor-pointer">
                      <ShieldCheck className="w-4 h-4 text-[#a855f7]" />
                      <div>
                        <p className="font-bold text-white leading-tight">Guardrails & Auth</p>
                        <p className="text-[10px] text-[#dce0d4]">Strict Privacy</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#22251f] p-3 rounded-xl border border-[#34382c] flex items-center justify-between text-[11px]">
                    <span className="text-[#dce0d4]">Goal: “Synthesize quarterly reports and alert ops team”</span>
                    <span className="text-[#c8ff28] font-bold font-mono">Completed (0.42s)</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          2. IDEAS ARE EVERYWHERE. BUILDING THEM IS THE HARD PART.
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative bg-[#f0f2eb]/60 border-y border-[#e2e6d9]">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-7 space-y-5">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">The Problem-First Approach</span>
              <h2 className="text-[32px] sm:text-[44px] md:text-[48px] font-bold text-[#111210] tracking-tight leading-[1.1] lowercase">
                ideas are everywhere. <br />
                building them is the hard part.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#3a4035] leading-relaxed">
                Every successful digital product begins with a moment. A founder sees a problem nobody has solved properly. A business realizes its team spends hundreds of hours on repetitive toil. An enterprise discovers valuable data scattered across silos. Someone asks: <span className="font-bold text-[#111210]">“Can technology do this better?”</span>
              </p>
            </FadeIn>

            {/* Right Image Showcase */}
            <FadeIn direction="up" delay={0.2} className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#e2e6d9] shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=75"
                  alt="Software architecture and system design whiteboard"
                  width={600}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                  <p className="text-white text-[13px] font-semibold">
                    “Understand the problem first. Engineer the technology second.”
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#e3e6db] card-soft-shadow space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Where We Begin</span>
                  <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111210] leading-snug">
                    We don't start with frameworks, programming languages or fashionable technologies. We start with the problem.
                  </h3>
                </div>
                <div className="space-y-3 text-[14px] text-[#3a4035] border-l-0 md:border-l border-[#edf0e6] md:pl-8">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Understand how your business actually works</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Pinpoint where users and teams struggle</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Determine what can be automated and what can become intelligent</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#266314] shrink-0" />
                    <span>Engineer the technology around real, measurable value</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          3. WE DON'T JUST BUILD SOFTWARE. WE BUILD INTELLIGENT SYSTEMS.
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-3xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Intelligent Software by Design</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              we don't just build software. <br />
              we build intelligent systems.
            </h2>
            <p className="text-[15px] text-[#3a4035] leading-relaxed">
              Traditional software waits for instructions. The next generation of software understands context, analyzes information, predicts outcomes, communicates naturally and increasingly takes action on behalf of users.
            </p>
          </FadeIn>

          {/* 11 Intelligence Capabilities Grid with Stagger & Hover */}
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: 'Understand natural language', icon: MessageSquare, desc: 'Semantic comprehension across unstructured text and voice' },
              { title: 'Analyze large amounts of info', icon: Database, desc: 'Instant extraction, summarization, and trend detection' },
              { title: 'Search organizational knowledge', icon: Search, desc: 'High-precision hybrid vector & keyword retrieval' },
              { title: 'Automate complex workflows', icon: Workflow, desc: 'Multi-step business logic with self-healing rules' },
              { title: 'Make recommendations', icon: Sparkles, desc: 'Predictive rankings and tailored decision guidance' },
              { title: 'Generate content and insights', icon: FileText, desc: 'Draft reports, summaries, code, and creative assets' },
              { title: 'Communicate through voice', icon: Mic, desc: 'Sub-second real-time conversational voice agents' },
              { title: 'Use business tools and APIs', icon: Zap, desc: 'Trigger actions across CRMs, ERPs, emails, and databases' },
              { title: 'Coordinate multiple AI agents', icon: Bot, desc: 'Orchestrated specialized swarms for complex objectives' },
              { title: 'Learn from data', icon: Brain, desc: 'Continuous model improvement through live telemetry' },
              { title: 'Assist people in decisions', icon: Target, desc: 'Augment human expertise with real-time confidence scores' }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={i}>
                  <HoverCard yOffset={-3} className="bg-white rounded-3xl p-5 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-2.5 h-full">
                    <div className="w-8 h-8 rounded-xl bg-[#f4f6ed] text-[#111210] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#111210]" />
                    </div>
                    <h3 className="font-bold text-[15px] text-[#111210] leading-snug">{cap.title}</h3>
                    <p className="text-[12px] text-[#3a4035] leading-normal">{cap.desc}</p>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ========================================================
          4. AGENTIC AI & AI DEVELOPMENT WITH HIGH-TECH IMAGERY
         ======================================================== */}
      <section id="services" className="w-full py-16 sm:py-24 bg-[#111210] text-white relative overflow-hidden">
        <GlowOrb color="lime" size="xl" className="top-0 right-1/4 opacity-20 -z-0 pointer-events-none" />
        <GlowOrb color="purple" size="md" className="bottom-10 left-10 opacity-20 -z-0 pointer-events-none" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16 relative z-10">
          {/* Agentic AI Section */}
          <div className="space-y-8">
            <FadeIn direction="up" className="space-y-3 max-w-3xl">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Agentic AI Development</span>
              <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight leading-[1.1] lowercase text-white">
                build ai that can think, plan and act.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#dce0d4] leading-relaxed">
                The future of AI isn't only about asking questions and receiving answers. It is about giving AI an objective and enabling it to determine how that objective should be completed autonomously.
              </p>
            </FadeIn>

            {/* Interactive Agent Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Mobile Horizontal Pill Scroller (< 1024px) */}
              <div className="lg:hidden flex overflow-x-auto no-scrollbar gap-2 pb-2 pt-1 -mx-4 px-4">
                {agentCategories.map((agent, idx) => {
                  const Icon = agent.icon;
                  const isSelected = selectedAgentCategory === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedAgentCategory(idx)}
                      className={`px-3.5 py-2 rounded-full whitespace-nowrap text-[12.5px] font-semibold flex items-center gap-2 border transition-all shrink-0 cursor-pointer min-h-[38px] ${
                        isSelected
                          ? 'bg-[#c8ff28] text-[#111210] border-[#c8ff28] font-bold shadow-md'
                          : 'bg-[#181a16] border-[#292c25] text-[#dce0d4] hover:bg-[#22251f]'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#111210]' : 'text-[#c8ff28]'}`} />
                      <span>{agent.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Desktop Vertical List (>= 1024px) */}
              <div className="hidden lg:block lg:col-span-5 space-y-2">
                {agentCategories.map((agent, idx) => {
                  const Icon = agent.icon;
                  const isSelected = selectedAgentCategory === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedAgentCategory(idx)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center justify-between border cursor-pointer hover:translate-x-1 ${
                        isSelected
                          ? 'bg-[#22251f] border-[#c8ff28] text-white font-bold shadow-md'
                          : 'bg-[#181a16] border-[#292c25] text-[#dce0d4] hover:bg-[#1f221c]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c8ff28]' : 'text-[#dce0d4]'}`} />
                        <span className="text-[13px]">{agent.title}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#c8ff28] translate-x-1' : 'text-[#3a4035]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Selected Agent Details Card with High-Res Tech Visual */}
              <div
                key={selectedAgentCategory}
                className="lg:col-span-7 bg-[#1c1e19] rounded-3xl p-6 sm:p-8 border border-[#2e3328] space-y-5 shadow-2xl transition-all duration-200"
              >
                {/* Agent Feature Visual */}
                <div className="relative rounded-2xl overflow-hidden h-36 border border-[#343a2d]">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=75"
                    alt="Autonomous AI system neural representation"
                    width={600}
                    height={250}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1e19] via-[#1c1e19]/40 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff28] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ff28]" />
                      </span>
                      <p className="text-[13px] font-bold text-white">Autonomous Agent Loop & Context Memory</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-[#2d3226] pb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#c8ff28] text-[#111210] flex items-center justify-center font-bold">
                    {React.createElement(agentCategories[selectedAgentCategory].icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Autonomous Agent Specialty</span>
                    <h3 className="text-[20px] font-bold text-white">{agentCategories[selectedAgentCategory].title}</h3>
                  </div>
                </div>

                <p className="text-[14px] text-[#dce0d4] leading-relaxed">
                  {agentCategories[selectedAgentCategory].desc}
                </p>

                <div className="bg-[#242721] p-4 rounded-2xl border border-[#373c2e] space-y-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">Integrated Enterprise Connectors</p>
                  <p className="text-[12px] text-[#dce0d4]">
                    Connected seamlessly with your APIs, databases, CRM, ERP, documents, email systems, internal software, and third-party SaaS tools.
                  </p>
                </div>

                <button
                  onClick={handleStartProjectClick}
                  className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[13px] px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Build an AI Agent</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#111210]" />
                </button>
              </div>
            </div>
          </div>

          {/* AI Model Development & Training (8-Step Lifecycle) */}
          <div className="pt-12 border-t border-[#292c24] space-y-8">
            <FadeIn direction="up" className="space-y-3 max-w-3xl">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">AI Model Engineering</span>
              <h3 className="text-[28px] sm:text-[38px] font-bold tracking-tight leading-tight lowercase text-white">
                when existing ai isn't enough, build intelligence around your own problem.
              </h3>
              <p className="text-[14px] text-[#dce0d4]">
                From raw data to specialized domain intelligence—we guide organizations throughout the complete AI model training and fine-tuning lifecycle.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {modelLifecycle.map((m, idx) => (
                <StaggerItem key={idx}>
                  <div
                    onClick={() => setActiveModelStep(idx)}
                    className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:scale-[1.01] cursor-pointer space-y-2 h-full ${
                      activeModelStep === idx
                        ? 'bg-[#22251f] border-[#c8ff28] shadow-lg ring-1 ring-[#c8ff28]/40'
                        : 'bg-[#181a16] border-[#292d24] hover:border-[#3d4235]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[12px] text-[#c8ff28] font-bold">{m.step}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff28]" />
                    </div>
                    <h4 className="font-bold text-[15px] text-white">{m.title}</h4>
                    <p className="text-[12px] text-[#dce0d4] leading-relaxed">{m.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. LLM & RAG DEVELOPMENT, GENERATIVE AI & AI AUTOMATION
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16">
          {/* LLM & RAG Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <FadeIn direction="up" className="lg:col-span-6 space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">LLM & RAG Development</span>
              <h3 className="text-[30px] sm:text-[40px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
                give ai access to the knowledge that makes your business unique.
              </h3>
              <p className="text-[15px] text-[#3a4035] leading-relaxed">
                Public models understand general knowledge. We build LLM & Retrieval-Augmented Generation (RAG) systems that securely connect AI with your policies, products, documentation, and operational data.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleStartProjectClick}
                  className="bg-[#111210] hover:bg-[#252823] text-white text-[13px] font-bold px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 shadow-md"
                >
                  <span>Build Enterprise RAG</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c8ff28]" />
                </button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#e4e7dc] card-soft-shadow space-y-4">
              {/* Visual Knowledge Graph Graphic */}
              <div className="relative rounded-2xl overflow-hidden h-36 border border-[#e4e7dc] group">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=75"
                  alt="Enterprise RAG knowledge graphs and analytics dashboard"
                  width={600}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3.5">
                  <p className="text-white text-[12px] font-bold">Hybrid Vector & Semantic Enterprise Retrieval</p>
                </div>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#266314] block">Connect AI With Your Stack</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[12px] font-medium text-[#2d312c]">
                {[
                  'PDFs & Documents', 'Knowledge Bases', 'Relational DBs', 'ERP Platforms',
                  'CRM Records', 'Product Docs', 'Internal APIs', 'Support Tickets',
                  'Company Policies', 'Audio Transcripts', 'Vector Embeddings', 'Live Web Data'
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#f8f9f5] p-2.5 rounded-xl border border-[#e7eae0] text-center hover:border-[#111210] hover:-translate-y-0.5 transition-all">
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* AI Automation Section */}
          <FadeIn direction="up" delay={0.2} className="bg-[#f0f2eb]/70 rounded-[36px] p-8 sm:p-12 border border-[#e2e6d8] space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Outcome-Driven Automation</span>
              <h3 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                stop automating steps. start automating outcomes.
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#3a4035] leading-relaxed">
                Traditional automation fails when unstructured emails, surprise customer questions, or ambiguous documents arrive. AI automation interprets context before deciding the optimal action.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                'Sales & Pipeline', 'Marketing Flow', 'Customer Support', 'Finance & Billing',
                'Operations & Ops', 'HR & Team', 'Recruitment', 'Procurement',
                'Data Processing', 'Document Mgmt', 'Reporting Engine', 'Audit Compliance'
              ].map((domain, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#e4e7db] text-[12px] font-bold text-[#111210] text-center shadow-2xs hover:border-[#111210] hover:-translate-y-0.5 transition-all cursor-pointer">
                  {domain}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          6. CUSTOM SOFTWARE, SAAS & PRODUCT ENGINEERING
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 bg-[#111210] text-white relative overflow-hidden">
        <GlowOrb color="cyan" size="lg" className="top-1/4 right-0 opacity-20 -z-0 pointer-events-none" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16 relative z-10">
          {/* Custom Software Section */}
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-3xl space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Custom Software Development</span>
              <h3 className="text-[32px] sm:text-[44px] font-bold tracking-tight leading-[1.1] lowercase text-white">
                your business shouldn't have to fit into someone else's software.
              </h3>
              <p className="text-[15px] text-[#dce0d4] leading-relaxed">
                Off-the-shelf software is built for everyone, which usually means it fits nobody perfectly. We build tailor-made digital platforms designed around your unique competitive workflows.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {[
                'Custom ERP Systems', 'CRM Platforms', 'HR Management Systems', 'Workflow Platforms',
                'Finance Applications', 'Inventory Management', 'Document Systems', 'Procurement Platforms',
                'Customer Portals', 'Business Platforms', 'Marketplace Apps', 'Enterprise Analytics'
              ].map((sys, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#1c1e19] p-4 rounded-2xl border border-[#2c3026] text-[13px] font-medium text-[#dce0d4] hover:border-[#c8ff28] hover:text-white hover:-translate-y-0.5 transition-all cursor-pointer h-full">
                    {sys}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* SaaS & Product Engineering with Clean Modern Multi-Device Photo */}
          <div className="pt-12 border-t border-[#292c24] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <FadeIn direction="up" className="lg:col-span-5 space-y-5">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">SaaS & Product Engineering</span>
              <h3 className="text-[28px] sm:text-[38px] font-bold tracking-tight leading-tight lowercase text-white">
                you bring the vision. <br />
                we engineer the product.
              </h3>
              <p className="text-[14px] text-[#dce0d4] leading-relaxed">
                From discovery, architecture, and UI/UX design to high-throughput backend services, mobile apps, and multi-tenant billing—we take products from MVP to enterprise scale.
              </p>

              {/* Multi-Device Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-[#343a2c] h-40 group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=75"
                  alt="SaaS Analytics and responsive web dashboards"
                  width={600}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111210] via-transparent to-transparent flex items-end p-4">
                  <p className="text-[12px] font-bold text-white">Cross-Platform Web, iOS & Android Deployment</p>
                </div>
              </div>

              <button
                onClick={handleStartProjectClick}
                className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[13px] px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 shadow-lg"
              >
                <span>Launch Your SaaS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#111210]" />
              </button>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="lg:col-span-7 bg-[#1c1e19] rounded-3xl p-6 sm:p-8 border border-[#2d3227] space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8ff28]">SaaS Architectural Foundation</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[12px] text-[#dce0d4]">
                {[
                  'Multi-Tenant Data', 'Workspaces & Orgs', 'RBAC & Permissions', 'Billing & Subscriptions',
                  'Usage Metering', 'Admin Dashboards', 'Public APIs & SDKs', 'Real-time WebSockets',
                  'Full Audit Logging', 'Observability Tracing', 'AI Copilot Features', 'Automated CI/CD'
                ].map((feature, idx) => (
                  <div key={idx} className="bg-[#242721] p-3 rounded-xl border border-[#34392c] text-[#dce0d4] hover:border-[#c8ff28] hover:-translate-y-0.5 transition-all">
                    {feature}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. THE FIVERSE WAY & DEVELOPMENT JOURNEY
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative bg-[#f7f8f4]">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16">
          {/* The Fiverse Way (5 Core Principles) */}
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-2xl space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">The Fiverse Way</span>
              <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
                how we think and engineer.
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', title: 'Business First', desc: 'We understand what needs to change before deciding what needs to be built.' },
                { step: '02', title: 'Intelligence by Design', desc: 'We identify where AI creates meaningful value instead of adding AI purely for hype.' },
                { step: '03', title: 'Product Thinking', desc: 'Every feature is engineered as part of a cohesive, frictionless user experience.' },
                { step: '04', title: 'Engineering for Scale', desc: 'Architecture should support where the product is going—not only where it is today.' },
                { step: '05', title: 'Build. Measure. Improve.', desc: 'Great digital products evolve continuously based on telemetry and customer usage.' }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <HoverCard yOffset={-4} className="bg-white rounded-3xl p-5 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-2.5 h-full">
                    <span className="text-[11px] font-mono font-bold text-[#266314]">{item.step}</span>
                    <h3 className="font-bold text-[16px] text-[#111210]">{item.title}</h3>
                    <p className="text-[12px] text-[#3a4035] leading-relaxed">{item.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Development Journey (8 Milestones) */}
          <FadeIn direction="up" delay={0.2} className="bg-[#f0f2eb]/70 rounded-[36px] p-8 sm:p-12 border border-[#e2e6d8] space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Execution Lifecycle</span>
              <h3 className="text-[28px] sm:text-[38px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                our development journey.
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              {[
                { step: '01', title: 'Understand', desc: 'Business & pain points' },
                { step: '02', title: 'Discover', desc: 'Software & AI opportunities' },
                { step: '03', title: 'Design', desc: 'Flows & architecture' },
                { step: '04', title: 'Engineer', desc: 'Code & AI models' },
                { step: '05', title: 'Validate', desc: 'Security & QA testing' },
                { step: '06', title: 'Launch', desc: 'Production deployment' },
                { step: '07', title: 'Learn', desc: 'Telemetry & analytics' },
                { step: '08', title: 'Evolve', desc: 'Continuous iteration' }
              ].map((j, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-[#e4e7dc] space-y-1 shadow-2xs hover:border-[#111210] hover:-translate-y-0.5 transition-all cursor-pointer">
                  <span className="text-[10px] font-mono font-bold text-[#3a4035]">{j.step}</span>
                  <p className="font-bold text-[13px] text-[#111210]">{j.title}</p>
                  <p className="text-[10px] text-[#3a4035] leading-tight">{j.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          8. WHO WE PARTNER WITH & 18 INDUSTRIES (WITH AUTHENTIC IMAGES)
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-16">
          {/* Who We Partner With (5 Categories with Real Portraits) */}
          <div className="space-y-8">
            <FadeIn direction="up" className="max-w-2xl space-y-3">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Partnerships</span>
              <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
                who we partner with.
              </h2>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {partnerPersonas.map((partner, i) => (
                <StaggerItem key={i}>
                  <HoverCard yOffset={-4} className="bg-white rounded-3xl p-5 border border-[#e4e7dc] card-soft-shadow space-y-3 hover:border-[#111210] h-full">
                    {/* Photo & Role */}
                    <div className="flex items-center gap-3">
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="w-12 h-12 rounded-full object-cover border border-[#e2e6d8] shadow-xs"
                      />
                      <div>
                        <h3 className="font-bold text-[16px] text-[#111210] leading-tight">{partner.title}</h3>
                        <span className="text-[11px] text-[#3a4035] font-medium">{partner.role}</span>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#3a4035] leading-relaxed pt-1 border-t border-[#f2f4ec]">{partner.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* 18 Industries Grid */}
          <div className="space-y-6">
            <FadeIn direction="up" className="max-w-2xl space-y-2">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#266314]">Domain Expertise</span>
              <h3 className="text-[26px] sm:text-[34px] font-bold text-[#111210] tracking-tight leading-tight lowercase">
                industries we develop technology for.
              </h3>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-xl border border-[#e5e8dc] text-center text-[12px] font-bold text-[#111210] card-soft-shadow hover:border-[#111210] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FINAL CTA SECTION WITH STUDIO BACKDROP
         ======================================================== */}
      <section className="w-full py-16 sm:py-24 bg-[#111210] text-white relative overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=70"
            alt="Engineering team collaboration background"
            width={1000}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <GlowOrb color="lime" size="xl" className="top-0 left-1/2 -translate-x-1/2 -z-0 opacity-30" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12 text-center relative z-10">
          <FadeIn direction="up" className="max-w-3xl mx-auto space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Let's Build What's Next</span>
            <h2 className="text-[36px] sm:text-[52px] md:text-[60px] font-bold tracking-tight leading-[1.08] lowercase text-white">
              your next product could start with one conversation.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#dce0d4] leading-relaxed max-w-2xl mx-auto">
              Maybe you already know exactly what you want to build. Maybe you only know the problem you want to solve. Either is enough. Bring us the idea, workflow, challenge or opportunity—we’ll help turn it into technology.
            </p>

            <div className="pt-2">
              <p className="text-[20px] sm:text-[24px] font-extrabold text-white tracking-tight lowercase">
                build software that thinks beyond today.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={handleStartProjectClick}
                className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-extrabold text-[15px] px-9 py-4 rounded-full transition-all duration-200 shadow-xl cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#111210]" />
              </button>
              <button
                onClick={onTalkToAI}
                className="bg-transparent hover:bg-white/10 text-white border border-[#3b3e36] font-semibold text-[15px] px-8 py-4 rounded-full transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                Talk to Fiverse
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
});

HomePage.displayName = 'HomePage';
