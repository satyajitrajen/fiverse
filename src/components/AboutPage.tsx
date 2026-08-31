import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Brain,
  Layers,
  Palette,
  Cloud,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Compass,
  Code2,
  Users,
  ShieldCheck,
  Zap,
  Target,
  Search,
  MessageSquare,
  Bot,
  Terminal,
  Database,
  Eye,
  Mic,
  Activity,
  ArrowDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FadeIn, StaggerContainer, StaggerItem, HoverCard, GlowOrb } from './Motion';
import { SEOHead } from './SEOHead';

interface AboutPageProps {
  onStartConversation: () => void;
  onExploreServices: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartConversation, onExploreServices }) => {
  const [activePillar, setActivePillar] = useState<'ai' | 'engineering' | 'experience' | 'infra'>('ai');
  const [activePersona, setActivePersona] = useState<number>(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState<number | null>(null);

  const handleStartConvo = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onStartConversation();
  };

  const pillars = {
    ai: {
      title: 'Artificial Intelligence',
      icon: Brain,
      color: 'bg-[#eef8cf] text-[#4f701c]',
      badge: '11 Core Specializations',
      description: 'Beyond basic wrappers—we design custom agentic architectures, fine-tuned domain models, RAG knowledge systems, and autonomous workflows.',
      skills: [
        { name: 'Agentic AI', icon: Bot, desc: 'Multi-agent orchestration and autonomous tool-use' },
        { name: 'Generative AI', icon: Sparkles, desc: 'Content, code, and multimodal generation engines' },
        { name: 'Machine Learning', icon: Activity, desc: 'Predictive modeling, classifiers, and clustering' },
        { name: 'LLMs', icon: MessageSquare, desc: 'Cutting-edge reasoning models and structured output' },
        { name: 'RAG Systems', icon: Database, desc: 'Vector search across proprietary enterprise knowledge' },
        { name: 'Computer Vision', icon: Eye, desc: 'Visual recognition, OCR, and document intelligence' },
        { name: 'Natural Language Processing', icon: Terminal, desc: 'Semantic understanding, parsing, and sentiment' },
        { name: 'Voice AI', icon: Mic, desc: 'Bidirectional streaming audio and conversational agents' },
        { name: 'Model Training', icon: Cpu, desc: 'Custom weights and domain-specific dataset curation' },
        { name: 'Fine-Tuning', icon: Zap, desc: 'Adapting open-source and proprietary models' },
        { name: 'AI Automation', icon: CheckCircle2, desc: 'Self-healing workflows and intelligent decision loops' }
      ]
    },
    engineering: {
      title: 'Product Engineering',
      icon: Layers,
      color: 'bg-[#e0f2fe] text-[#0369a1]',
      badge: '9 Core Specializations',
      description: 'Robust, clean, and scalable software systems built with production discipline, type safety, and enduring maintainability.',
      skills: [
        { name: 'Product Strategy', icon: Target, desc: 'Translating business goals into technical execution' },
        { name: 'Software Architecture', icon: Code2, desc: 'Event-driven, microservices, and modular monoliths' },
        { name: 'Frontend Development', icon: Palette, desc: 'Fast, responsive React, Next.js, and TypeScript web apps' },
        { name: 'Backend Development', icon: Terminal, desc: 'High-throughput Node.js, Python, and Go microservices' },
        { name: 'API Engineering', icon: Zap, desc: 'REST, GraphQL, and WebSocket streaming endpoints' },
        { name: 'SaaS Development', icon: Layers, desc: 'Multi-tenant tenancy, billing, and permission models' },
        { name: 'Web Applications', icon: Compass, desc: 'Complex interactive platforms and customer dashboards' },
        { name: 'Mobile Applications', icon: Users, desc: 'Cross-platform iOS and Android apps' },
        { name: 'Enterprise Platforms', icon: ShieldCheck, desc: 'Mission-critical systems with strict auditability' }
      ]
    },
    experience: {
      title: 'Experience',
      icon: Palette,
      color: 'bg-[#fef3c7] text-[#b45309]',
      badge: '5 Core Specializations',
      description: 'Intuitive, human-centered interfaces that make advanced intelligence feel natural, effortless, and delightful.',
      skills: [
        { name: 'Product Design', icon: Palette, desc: 'Holistic system thinking from concept to release' },
        { name: 'UI/UX Design', icon: Eye, desc: 'Wireframes, low-to-high fidelity user interfaces' },
        { name: 'Design Systems', icon: Layers, desc: 'Reusable component libraries and design tokens' },
        { name: 'Customer Journeys', icon: Compass, desc: 'Frictionless onboarding and conversion funnels' },
        { name: 'Prototyping', icon: Zap, desc: 'High-speed interactive click-through prototypes' }
      ]
    },
    infra: {
      title: 'Infrastructure',
      icon: Cloud,
      color: 'bg-[#f3e8ff] text-[#7e22ce]',
      badge: '6 Core Specializations',
      description: 'Reliable cloud environments engineered for high uptime, low latency, automated delivery, and infinite horizontal scale.',
      skills: [
        { name: 'Cloud Architecture', icon: Cloud, desc: 'AWS, GCP, Azure multi-region deployment' },
        { name: 'Application Deployment', icon: Terminal, desc: 'Docker, Kubernetes, and serverless compute' },
        { name: 'CI/CD Pipelines', icon: Zap, desc: 'Automated test suites, staging, and zero-downtime releases' },
        { name: 'Monitoring & Observability', icon: Activity, desc: 'Real-time telemetry, tracing, and alert matrices' },
        { name: 'Performance Engineering', icon: TrendingUp, desc: 'Database optimization, caching, and CDN tuning' },
        { name: 'Scalable Infrastructure', icon: ShieldCheck, desc: 'Auto-scaling clusters engineered for peak loads' }
      ]
    }
  };

  const journeySteps = [
    { title: 'Idea', question: 'What should we build?', desc: 'Uncovering the core problem and market opportunity.' },
    { title: 'Discovery', question: 'Who are we solving it for?', desc: 'Deep stakeholder interviews and user persona mapping.' },
    { title: 'Product Strategy', question: 'What should the first version contain?', desc: 'Ruthless prioritization for a fast, high-impact MVP.' },
    { title: 'Architecture', question: 'How should the technology work?', desc: 'Data modeling, API contracts, and scalable infrastructure.' },
    { title: 'Experience', question: 'How should users interact with it?', desc: 'Designing seamless UI/UX and conversational workflows.' },
    { title: 'Engineering', question: 'How do we build it reliably?', desc: 'Writing clean, test-driven, production-grade code.' },
    { title: 'Intelligence', question: 'Where should AI participate?', desc: 'Embedding models, agents, RAG, and automation loops.' },
    { title: 'Launch', question: 'How do we take it into production?', desc: 'Secure cloud deployment, monitoring, and telemetry.' },
    { title: 'Scale', question: 'How does it support 100x growth?', desc: 'Performance tuning, concurrency, and multi-tenant scaling.' },
    { title: 'Evolution', question: 'What should the product become next?', desc: 'Continuous feature iteration driven by live user data.' }
  ];

  const values = [
    {
      title: 'Curiosity',
      icon: Search,
      desc: 'Great products usually begin with better questions. We challenge assumptions and continuously explore emerging technologies.'
    },
    {
      title: 'Engineering Quality',
      icon: Code2,
      desc: 'Technology should remain understandable, maintainable and reliable long after it launches.'
    },
    {
      title: 'Practical Innovation',
      icon: Zap,
      desc: 'Innovation matters when it delivers real value, not when it merely follows buzzwords.'
    },
    {
      title: 'Ownership',
      icon: Target,
      desc: 'We treat products as outcomes to be achieved, not tickets to be completed.'
    },
    {
      title: 'Simplicity',
      icon: Sparkles,
      desc: 'Complex technology should result in simple, elegant, and frictionless experiences.'
    },
    {
      title: 'Continuous Improvement',
      icon: TrendingUp,
      desc: 'Products, models, teams and businesses should continuously learn and adapt.'
    },
    {
      title: 'Long-Term Thinking',
      icon: Compass,
      desc: 'The decisions we make today should create opportunities tomorrow rather than limitations.'
    }
  ];

  const personas = [
    {
      role: 'A Founder',
      icon: '🚀',
      quote: '“I have an idea but don’t know how to build it.”',
      solution: 'We help transform the concept into a clear product roadmap, scalable architecture, and a production-grade MVP ready for market validation and fundraising.'
    },
    {
      role: 'A Growing Business',
      icon: '🏢',
      quote: '“Our operations depend on spreadsheets and manual processes.”',
      solution: 'We turn fragmented, repetitive manual tasks into unified digital platforms and automated intelligence workflows that save hundreds of team hours.'
    },
    {
      role: 'An Enterprise',
      icon: '🏛️',
      quote: '“We have enormous amounts of data but aren’t using AI effectively.”',
      solution: 'We audit your data assets, identify high-ROI AI opportunities, and securely integrate enterprise RAG, custom agents, and predictive models into your existing stack.'
    },
    {
      role: 'A Product Company',
      icon: '⚡',
      quote: '“We need to launch faster.”',
      solution: 'We act as an elite senior engineering extension, accelerating product velocity, unblocking architecture bottlenecks, and shipping critical features.'
    },
    {
      role: 'An Innovation Team',
      icon: '🤖',
      quote: '“We’re experimenting with AI agents.”',
      solution: 'We take proof-of-concept prototypes and engineer them into reliable, production-ready, security-audited agentic systems.'
    }
  ];

  const aboutFaqs = [
    {
      question: "What is Fiverse Systems?",
      answer: "Fiverse Systems is an AI-first product engineering company that designs, builds, and deploys intelligent SaaS platforms, autonomous AI agents, enterprise RAG architectures, and custom digital software."
    },
    {
      question: "Where is Fiverse Systems located?",
      answer: "Fiverse Systems operates globally with engineering leadership in San Francisco, CA, and a distributed team of senior AI researchers, full-stack engineers, and product designers."
    },
    {
      question: "How is Fiverse different from traditional IT outsourcing agencies?",
      answer: "Unlike traditional agencies that treat AI as an afterthought, Fiverse is built AI-first with deep research in agentic workflows, deterministic API tool routing, SOC2 security, and high-velocity 6 to 8-week production delivery."
    }
  ];

  return (
    <div className="w-full text-[#111210] selection:bg-[#c8ff28] selection:text-[#111210]">
      <SEOHead
        title="About Us | AI & Software Product Engineering Company | Fiverse Systems"
        description="Fiverse Systems is an AI-first product engineering company. We combine artificial intelligence with complete software engineering to build intelligent SaaS, AI agents, and enterprise digital products."
        keywords="about fiverse systems, AI software company, AI product engineering, agentic AI development, custom software engineers"
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
        faqs={aboutFaqs}
      />
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-12 sm:pt-20 pb-16 overflow-hidden">
        {/* Glow Backdrops */}
        <GlowOrb color="lime" size="xl" className="top-0 left-1/2 -translate-x-1/2 -z-10" />
        <GlowOrb color="purple" size="md" className="top-1/3 -right-20 -z-10 opacity-30" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Header pill & Title */}
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-[#e2e6d9] text-[12px] font-bold text-[#111210] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff28] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ff28]" />
              </span>
              <span>AI & SOFTWARE PRODUCT ENGINEERING COMPANY</span>
            </div>

            <h1 className="text-[38px] sm:text-[54px] md:text-[62px] font-bold text-[#111210] tracking-tight leading-[1.08] lowercase">
              we believe software is <br />
              entering a new era.
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#555a50] leading-relaxed max-w-2xl mx-auto">
              Meet Fiverse Systems. We combine artificial intelligence with complete software product engineering to build intelligent applications, AI agents, SaaS platforms, and enterprise digital products.
            </p>

            {/* AEO Featured Snippet Direct Answer Definition Block */}
            <div className="bg-white/90 backdrop-blur-xs border-l-4 border-[#c8ff28] p-4 sm:p-5 rounded-r-2xl border border-y-[#e2e6d9] border-r-[#e2e6d9] text-left max-w-2xl mx-auto space-y-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">
                <span className="h-2 w-2 rounded-full bg-[#2e6314]" />
                <span>Entity Overview & Mission</span>
              </div>
              <p className="text-[14px] sm:text-[15px] font-medium text-[#222520] leading-relaxed">
                <strong className="font-bold text-[#111210]">Fiverse Systems Inc.</strong> is an AI-first product engineering and custom software development company engineering autonomous AI agents, enterprise RAG, and cloud SaaS platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 pt-2 w-full max-w-md sm:max-w-none mx-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStartConvo}
                className="w-full sm:w-auto bg-[#111210] hover:bg-[#252823] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#c8ff28]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreServices}
                className="w-full sm:w-auto bg-white hover:bg-[#f3f5ed] text-[#111210] border border-[#d8dcd0] text-[14px] font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-2xs cursor-pointer flex items-center justify-center min-h-[48px]"
              >
                Explore Our Services
              </motion.button>
            </div>
          </FadeIn>

          {/* Interactive Comparison Card: Old Era vs AI-First Era */}
          <FadeIn direction="up" delay={0.2} className="bg-white rounded-[32px] sm:rounded-[40px] border border-[#e4e8dc] hero-card-shadow p-6 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Left Column: Old Pattern */}
              <div className="bg-[#f8f9f5] rounded-3xl p-6 sm:p-8 border border-[#e8ebe1] space-y-5">
                <div className="flex items-center justify-between border-b border-[#e5e8dd] pb-3">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#4d5247]">For Decades (The Old Pattern)</span>
                  <span className="text-[11px] bg-[#e8ebe0] text-[#5b6156] px-2 py-0.5 rounded-full font-medium">Passive</span>
                </div>
                <ul className="space-y-3 text-[14px] text-[#555a50]">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9da297]" />
                    <span>People entered information manually</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9da297]" />
                    <span>Software passively stored it in databases</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9da297]" />
                    <span>Hardcoded static rules processed it</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9da297]" />
                    <span>Reports and dashboards displayed it</span>
                  </li>
                  <li className="flex items-center gap-2.5 font-medium text-[#2d312c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111210]" />
                    <span>And humans decided what to do next</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: New AI-First Era */}
              <div className="bg-[#111210] text-white rounded-3xl p-6 sm:p-8 border border-[#2a2d27] space-y-5 relative shadow-xl overflow-hidden">
                <GlowOrb color="lime" size="md" className="top-0 right-0 opacity-20 pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#2d302a] pb-3">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#c8ff28]">The AI-First Era (Today)</span>
                  <span className="text-[11px] bg-[#c8ff28] text-[#111210] px-2.5 py-0.5 rounded-full font-bold">Active & Autonomous</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-[13px] text-[#c2c7ba]">
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-[#1c1e1a] p-2.5 rounded-xl border border-[#2c3027]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8ff28]" />
                    <span>Understand language</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-[#1c1e1a] p-2.5 rounded-xl border border-[#2c3027]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8ff28]" />
                    <span>Analyze documents</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-[#1c1e1a] p-2.5 rounded-xl border border-[#2c3027]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8ff28]" />
                    <span>Recognize images</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-[#1c1e1a] p-2.5 rounded-xl border border-[#2c3027]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8ff28]" />
                    <span>Generate info</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-[#1c1e1a] p-2.5 rounded-xl border border-[#2c3027]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8ff28]" />
                    <span>Discover patterns</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2 bg-[#1c1e1a] p-2.5 rounded-xl border border-[#2c3027]">
                    <Sparkles className="w-3.5 h-3.5 text-[#c8ff28]" />
                    <span>Hold conversations</span>
                  </motion.div>
                </div>

                <div className="bg-[#21241e] p-3.5 rounded-2xl border border-[#373c30] flex items-center justify-between">
                  <span className="text-[13px] font-bold text-white flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff28] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ff28]" />
                    </span>
                    And increasingly—make decisions and take action.
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#c8ff28]" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. WHY FIVERSE EXISTS & PHILOSOPHY */}
      <section className="w-full py-16 sm:py-20 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Section Heading */}
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">Why Fiverse Exists</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              businesses don't wake up wanting another application. <br />
              they want a problem solved.
            </h2>
          </FadeIn>

          {/* Core Philosophy Banner */}
          <FadeIn direction="up" delay={0.15}>
            <div className="bg-[#111210] text-white rounded-[32px] p-8 sm:p-12 relative overflow-hidden border border-[#252822] shadow-2xl">
              <GlowOrb color="lime" size="lg" className="top-0 right-1/4 opacity-20 pointer-events-none" />
              <div className="relative max-w-3xl space-y-4">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Our Guiding Philosophy</span>
                <h3 className="text-[28px] sm:text-[38px] md:text-[44px] font-bold tracking-tight leading-tight lowercase">
                  understand the problem first. <br />
                  engineer the technology second.
                </h3>
                <p className="text-[15px] text-[#a4a99e] leading-relaxed">
                  Technology only matters when it changes what is possible for people. We don't write code for code's sake—we engineer systems that solve real operational, customer, and product challenges.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 6 Real Business Problems Grid */}
          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'The Founder', desc: 'Wants to turn an idea into a scalable, high-velocity product that captures market share.' },
              { title: 'Operations Team', desc: 'Wants to eliminate repetitive manual work, spreadsheet friction, and human error.' },
              { title: 'Growing Company', desc: 'Wants disparate siloed systems, APIs, and tools to communicate seamlessly with zero latency.' },
              { title: 'Sales Team', desc: 'Wants to respond to high-value customer inquiries instantly with context-aware intelligence.' },
              { title: 'Customer', desc: 'Wants accurate answers and transactions completed instantly without waiting in queues.' },
              { title: 'Business Leader', desc: 'Looks at years of organizational data and asks: “How can we actually unlock and use this?”' }
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <HoverCard yOffset={-3} className="bg-white rounded-3xl p-6 border border-[#e3e6db] card-soft-shadow hover:border-[#111210] space-y-3 h-full">
                  <div className="w-8 h-8 rounded-full bg-[#f4f6ee] text-[#111210] flex items-center justify-center text-[13px] font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-[17px] text-[#111210]">{item.title}</h3>
                  <p className="text-[13px] text-[#61665c] leading-relaxed">{item.desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. THE MEANING BEHIND OUR APPROACH & WHAT-IF QUESTIONS */}
      <section className="w-full py-16 sm:py-20 bg-[#f0f2eb]/70 border-y border-[#e2e6d9]">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">The Meaning Behind Our Approach</span>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111210] tracking-tight leading-[1.15] lowercase">
              we don't simply convert tickets into code. <br />
              we sit where products are imagined.
            </h2>
            <p className="text-[15px] text-[#5f645b]">
              We sit at the table where processes are challenged, ideas are validated, and the boldest questions are explored.
            </p>
          </FadeIn>

          {/* 3 Interactive "What If?" Cards */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <HoverCard yOffset={-4} className="bg-white rounded-3xl p-7 border border-[#e2e6d9] card-soft-shadow hover:border-[#111210] space-y-4 h-full">
                <div className="w-10 h-10 rounded-2xl bg-[#eef8cf] text-[#4f701c] flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111210] leading-snug">
                  “What if this entire workflow could happen automatically?”
                </h3>
                <p className="text-[13px] text-[#63685e] leading-relaxed">
                  Transforming multi-step human approvals and handoffs into autonomous agentic pipelines that run 24/7 without error.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard yOffset={-4} className="bg-white rounded-3xl p-7 border border-[#e2e6d9] card-soft-shadow hover:border-[#111210] space-y-4 h-full">
                <div className="w-10 h-10 rounded-2xl bg-[#e0f2fe] text-[#0369a1] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111210] leading-snug">
                  “What if our customers could simply talk to the system?”
                </h3>
                <p className="text-[13px] text-[#63685e] leading-relaxed">
                  Replacing dense form inputs with natural language interfaces, voice interactions, and semantic conversational search.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard yOffset={-4} className="bg-white rounded-3xl p-7 border border-[#e2e6d9] card-soft-shadow hover:border-[#111210] space-y-4 h-full">
                <div className="w-10 h-10 rounded-2xl bg-[#fef3c7] text-[#b45309] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111210] leading-snug">
                  “What if our software could make this decision itself?”
                </h3>
                <p className="text-[13px] text-[#63685e] leading-relaxed">
                  Deploying deterministic logic combined with probabilistic AI models to resolve complex business decisions in real-time.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>

          {/* AI-First But Not AI Everywhere Callout */}
          <FadeIn direction="up" delay={0.2} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e6d9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#4d5247]">Engineering Pragmatism</span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-[#111210] leading-snug">
                We are AI-first. But AI-first doesn't mean AI everywhere.
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#5e6359] leading-relaxed">
                Sometimes the answer is an autonomous agent. Sometimes machine learning. Sometimes RAG. And sometimes—the best solution is simply well-engineered, high-performance software. We pick the right tool for the job.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreServices}
              className="bg-[#c8ff28] hover:bg-[#baf51d] text-[#111210] font-bold text-[13px] px-6 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              Explore Capabilities
            </motion.button>
          </FadeIn>
        </div>
      </section>

      {/* 4. FROM INTELLIGENCE TO ENGINEERING (4 PILLARS INTERACTIVE EXPLORER) */}
      <section id="services" className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">Our Full-Stack Capabilities</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              from intelligence to complete product engineering.
            </h2>
            <p className="text-[15px] text-[#5f645b]">
              AI alone rarely creates a complete product. It needs APIs, databases, authentication, security, beautiful UI/UX, and cloud infrastructure. We engineer all of it.
            </p>
          </FadeIn>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 p-1.5 bg-[#eef1e6] rounded-2xl sm:rounded-full max-w-3xl">
            {(['ai', 'engineering', 'experience', 'infra'] as const).map((key) => {
              const p = pillars[key];
              const Icon = p.icon;
              const isSelected = activePillar === key;
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePillar(key)}
                  className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl sm:rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#111210] shadow-sm'
                      : 'text-[#5d6357] hover:text-[#111210] hover:bg-white/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{p.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Pillar Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[32px] sm:rounded-[40px] border border-[#e3e6db] card-soft-shadow p-6 sm:p-10 space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#edf0e6] pb-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${pillars[activePillar].color}`}>
                      {React.createElement(pillars[activePillar].icon, { className: 'w-5 h-5' })}
                    </div>
                    <h3 className="text-[24px] sm:text-[28px] font-bold text-[#111210]">
                      {pillars[activePillar].title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[#63685c] max-w-xl">
                    {pillars[activePillar].description}
                  </p>
                </div>
                <span className="self-start sm:self-center bg-[#f5f7ee] text-[#111210] text-[12px] font-bold px-3 py-1.5 rounded-full border border-[#e4e7dc]">
                  {pillars[activePillar].badge}
                </span>
              </div>

              {/* Sub-specializations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pillars[activePillar].skills.map((skill, i) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      className="p-4 rounded-2xl bg-[#f8f9f5] border border-[#e6e9df] hover:border-[#111210] hover:bg-white transition-all space-y-1.5 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <SkillIcon className="w-4 h-4 text-[#111210]" />
                        <span className="font-bold text-[14px] text-[#111210]">{skill.name}</span>
                      </div>
                      <p className="text-[12px] text-[#6a7065] leading-normal">{skill.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 5. WE WORK FROM THE FIRST QUESTION (10-STEP LIFECYCLE FLOW) */}
      <section className="w-full py-16 sm:py-24 bg-[#f0f2eb]/60 border-t border-[#e2e6d9]">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">The Product Journey</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              we work from the first question.
            </h2>
            <p className="text-[15px] text-[#5f645b]">
              Whether you arrive with a 50-page spec or simply “we think there is a better way to do this”—we guide you across the entire journey.
            </p>
          </FadeIn>

          {/* 10-Step Interactive Stepper Grid */}
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {journeySteps.map((step, idx) => {
              const isSelected = activeJourneyStep === idx;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    onClick={() => setActiveJourneyStep(isSelected ? null : idx)}
                    className={`bg-white rounded-3xl p-5 border transition-all cursor-pointer relative flex flex-col justify-between space-y-3 h-full ${
                      isSelected
                        ? 'border-[#111210] ring-2 ring-[#c8ff28] shadow-md'
                        : 'border-[#e4e7dc] card-soft-shadow hover:border-[#111210]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-widest text-[#81877c] uppercase">STEP {idx + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-[#c8ff28]" />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[16px] text-[#111210]">{step.title}</h3>
                      <p className="text-[12px] font-medium text-[#4b5046] mt-0.5">{step.question}</p>
                    </div>

                    <p className="text-[11px] text-[#71776b] pt-2 border-t border-[#f0f2eb]">
                      {step.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. BUILDING TECHNOLOGY THAT COMPOUNDS */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">Architectural Compounding</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              we build technology that compounds.
            </h2>
            <p className="text-[15px] text-[#5f645b]">
              The easiest software is built only for today’s requirement. We architect foundations that don’t limit tomorrow.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { today: 'Today’s internal app', tomorrow: 'Tomorrow’s multi-tenant SaaS platform' },
              { today: 'Today’s single chatbot', tomorrow: 'Tomorrow’s autonomous agent network' },
              { today: 'Today’s unstructured dataset', tomorrow: 'Tomorrow’s fine-tuned intelligence engine' },
              { today: 'Today’s lean MVP', tomorrow: 'Tomorrow’s multi-million user platform' }
            ].map((comp, idx) => (
              <StaggerItem key={idx}>
                <HoverCard yOffset={-4} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-4 h-full">
                  <div className="w-8 h-8 rounded-full bg-[#f4f6ed] text-[#111210] flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#888e83]">Today</span>
                    <p className="text-[14px] font-medium text-[#50554b]">{comp.today}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#111210]">
                    <ArrowDown className="w-4 h-4 text-[#528d2c]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#528d2c]">Compounds Into</span>
                  </div>
                  <div className="bg-[#f8f9f5] p-3 rounded-2xl border border-[#e5e8dc]">
                    <p className="text-[13px] font-bold text-[#111210]">{comp.tomorrow}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. MISSION & VISION */}
      <section className="w-full py-16 sm:py-20 bg-[#111210] text-white relative overflow-hidden">
        <GlowOrb color="lime" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <FadeIn direction="up" delay={0.1}>
              <motion.div whileHover={{ y: -3 }} className="bg-[#1b1c1a] border border-[#2d302a] rounded-3xl p-8 sm:p-10 space-y-4 hover:border-[#c8ff28]/40 transition-colors h-full">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Our Mission</span>
                <h3 className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight lowercase text-white">
                  to transform business problems, ideas and data into intelligent digital products capable of creating measurable value.
                </h3>
                <p className="text-[14px] text-[#9ca196] leading-relaxed">
                  Making advanced software engineering and AI useful beyond big tech—for startups, ambitious founders, enterprises, and teams that know there must be a better way to work.
                </p>
              </motion.div>
            </FadeIn>

            {/* Vision */}
            <FadeIn direction="up" delay={0.2}>
              <motion.div whileHover={{ y: -3 }} className="bg-[#1b1c1a] border border-[#2d302a] rounded-3xl p-8 sm:p-10 space-y-4 hover:border-[#c8ff28]/40 transition-colors h-full">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">Our Vision</span>
                <h3 className="text-[24px] sm:text-[30px] font-bold tracking-tight leading-tight lowercase text-white">
                  to build a world-class AI-first product engineering company that helps create the next generation of intelligent businesses.
                </h3>
                <p className="text-[14px] text-[#9ca196] leading-relaxed">
                  Where software understands users, agents collaborate alongside teams, organizational knowledge is conversational, and routine toil disappears into intelligent automation.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. OUR CORE VALUES (7 VALUES) */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">What We Value</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              principles that guide every line of code.
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const ValueIcon = v.icon;
              return (
                <StaggerItem key={i}>
                  <HoverCard yOffset={-4} className="bg-white rounded-3xl p-6 border border-[#e4e7dc] card-soft-shadow hover:border-[#111210] space-y-3 h-full">
                    <div className="w-9 h-9 rounded-2xl bg-[#f3f5ed] text-[#111210] flex items-center justify-center">
                      <ValueIcon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-[17px] text-[#111210]">{v.title}</h3>
                    <p className="text-[13px] text-[#63685e] leading-relaxed">{v.desc}</p>
                  </HoverCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. DIFFERENT BUSINESSES. DIFFERENT STARTING POINTS (PERSONA SCENARIOS) */}
      <section className="w-full py-16 sm:py-24 bg-[#f0f2eb]/70 border-t border-[#e2e6d9]">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12">
          <FadeIn direction="up" className="space-y-4 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">Client Scenarios</span>
            <h2 className="text-[32px] sm:text-[44px] font-bold text-[#111210] tracking-tight leading-[1.12] lowercase">
              different businesses. different starting points.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Mobile Horizontal Persona Chips (< 1024px) */}
            <div className="lg:hidden flex overflow-x-auto no-scrollbar gap-2 pb-2 -mx-4 px-4">
              {personas.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActivePersona(i)}
                  className={`px-3.5 py-2.5 rounded-full whitespace-nowrap text-[13px] font-semibold flex items-center gap-2 border transition-all shrink-0 cursor-pointer min-h-[42px] ${
                    activePersona === i
                      ? 'bg-[#111210] text-white border-[#111210] shadow-md'
                      : 'bg-white border-[#e3e6db] text-[#4d5247] hover:bg-[#f7f8f4]'
                  }`}
                >
                  <span className="text-base">{p.icon}</span>
                  <span>{p.role}</span>
                </button>
              ))}
            </div>

            {/* Desktop Vertical Personas List (>= 1024px) */}
            <div className="hidden lg:block lg:col-span-5 space-y-2.5">
              {personas.map((p, i) => (
                <motion.button
                  key={i}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActivePersona(i)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    activePersona === i
                      ? 'bg-white border-[#111210] shadow-md font-bold text-[#111210]'
                      : 'bg-white/60 border-[#e3e6db] text-[#4d5247] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-[14px]">{p.role}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${activePersona === i ? 'text-[#111210] translate-x-1' : 'text-[#898f84]'}`} />
                </motion.button>
              ))}
            </div>

            {/* Persona Quote & Solution Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#e2e6d8] floating-card-shadow space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-[#edf0e5] pb-4">
                  <span className="text-3xl">{personas[activePersona].icon}</span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4d5247]">Selected Scenario</span>
                    <h3 className="text-[18px] font-bold text-[#111210]">{personas[activePersona].role}</h3>
                  </div>
                </div>

                <div className="bg-[#f8f9f5] p-5 rounded-2xl border border-[#e6e9df] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4d5247]">The Challenge</span>
                  <p className="text-[16px] font-semibold text-[#111210] italic">
                    {personas[activePersona].quote}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2e6314]">How Fiverse Delivers</span>
                  <p className="text-[14px] text-[#4d5247] leading-relaxed">
                    {personas[activePersona].solution}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleStartConvo}
                  className="bg-[#111210] hover:bg-[#252823] text-white text-[13px] font-bold px-6 py-3 rounded-full transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Talk to our engineering team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c8ff28]" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 10. OUR DEFINITION OF SUCCESS & WE BUILD FOR PEOPLE */}
      <section className="w-full py-16 sm:py-20 relative">
        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6">
          <FadeIn direction="up" className="bg-white rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 border border-[#e3e6da] card-soft-shadow space-y-8">
            <div className="space-y-3 max-w-3xl">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#697063]">Human-Centered Systems</span>
              <h2 className="text-[30px] sm:text-[40px] font-bold text-[#111210] tracking-tight leading-[1.15] lowercase">
                we build for people, not just systems.
              </h2>
              <p className="text-[15px] text-[#5b6156] leading-relaxed">
                Behind every API request is a person trying to accomplish something. Behind every dashboard is someone trying to understand what is happening. Behind every automation is someone whose time could be spent doing something more important.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-[#edf0e6]">
              {[
                'Software people actually use',
                'Removes daily friction',
                'Saves valuable hours',
                'Makes data crystal clear',
                'Produces measurable ROI',
                'Grows smarter over time'
              ].map((item, idx) => (
                <motion.div whileHover={{ y: -2 }} key={idx} className="bg-[#f8f9f5] p-3.5 rounded-2xl border border-[#e7eae0] text-[12px] font-bold text-[#111210] text-center flex items-center justify-center hover:border-[#111210] transition-colors cursor-default">
                  {item}
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 11. WHAT COMES NEXT? & FINAL CTA */}
      <section className="w-full py-16 sm:py-24 bg-[#111210] text-white relative overflow-hidden">
        <GlowOrb color="lime" size="xl" className="top-0 left-1/2 -translate-x-1/2 -z-0 opacity-30" />

        <div className="w-full sm:w-[92%] lg:w-[82%] max-w-[1600px] mx-auto px-4 sm:px-6 space-y-12 text-center relative z-10">
          <FadeIn direction="up" className="max-w-3xl mx-auto space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[#c8ff28]">What Comes Next?</span>
            <h2 className="text-[36px] sm:text-[50px] md:text-[56px] font-bold tracking-tight leading-[1.1] lowercase text-white">
              let's build what's next.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#a4a99d] leading-relaxed max-w-2xl mx-auto">
              Whether you’re starting with a product idea, an existing application, a business process or an ambitious AI vision—tell us the problem. We’ll determine what technology can make possible.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStartConvo}
                className="bg-[#c8ff28] hover:bg-[#baf51d] active:scale-98 text-[#111210] font-extrabold text-[15px] px-8 py-4 rounded-full transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 text-[#111210]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreServices}
                className="bg-transparent hover:bg-white/10 text-white border border-[#3b3e36] font-semibold text-[15px] px-7 py-4 rounded-full transition-all cursor-pointer"
              >
                Explore Our Services
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
